const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const keyPath = './service-account.json';
const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

// Scope for Indexing API
const SCOPE = 'https://www.googleapis.com/auth/indexing';
const AUDIENCE = 'https://oauth2.googleapis.com/token';

async function createJWT() {
  const email = keyData.client_email;
  const privateKey = keyData.private_key;

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: email,
    scope: SCOPE,
    aud: AUDIENCE,
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${encode(header)}.${encode(payload)}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsignedToken);
  const signature = sign.sign(privateKey, 'base64url');

  return `${unsignedToken}.${signature}`;
}

async function getAccessToken() {
  const jwt = await createJWT();
  const res = await fetch(AUDIENCE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const data = await res.json();
  return data.access_token;
}

async function notifyIndexing(url, accessToken) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      url: url,
      type: 'URL_UPDATED',
    }),
  });
  const data = await res.json();
  return data;
}

// Extract canonical URLs directly from sitemap.xml
const extractSlugs = async () => {
  try {
    const res = await fetch('https://www.nanded-city.in/sitemap.xml');
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
    console.log(`📋 Parsed ${urls.length} canonical URLs directly from live sitemap.xml`);
    return [...new Set(urls)];
  } catch (err) {
    console.warn('⚠️ Could not fetch live sitemap.xml, attempting fallback to local out/sitemap.xml...', err.message);
    if (fs.existsSync('out/sitemap.xml')) {
      const xml = fs.readFileSync('out/sitemap.xml', 'utf-8');
      const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
      console.log(`📋 Parsed ${urls.length} canonical URLs from local out/sitemap.xml`);
      return [...new Set(urls)];
    }
    console.error('Failed to read local sitemap, using fallback static list');
    return [
      'https://www.nanded-city.in/',
      'https://www.nanded-city.in/projects/',
      'https://www.nanded-city.in/master-plan/',
      'https://www.nanded-city.in/floor-plans/',
      'https://www.nanded-city.in/infrastructure/',
      'https://www.nanded-city.in/connectivity/',
      'https://www.nanded-city.in/township-directory/',
      'https://www.nanded-city.in/brochures/',
      'https://www.nanded-city.in/emi-calculator/',
      'https://www.nanded-city.in/resale-rental-guide/',
      'https://www.nanded-city.in/about-us/',
      'https://www.nanded-city.in/legal-compliance/',
      'https://www.nanded-city.in/contact/',
      'https://www.nanded-city.in/blog/',
      'https://www.nanded-city.in/faq/',
      'https://www.nanded-city.in/mr/',
    ];
  }
};

(async () => {
  try {
    console.log('🚀 Starting Google Indexing API submission for Nanded City...');
    const accessToken = await getAccessToken();
    const urls = await extractSlugs();
    
    console.log(`📡 Submitting ${urls.length} canonical 200 OK URLs to Google Indexing API...`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const result = await notifyIndexing(url, accessToken);
        if (result.error) {
            console.error(`❌ [${i+1}/${urls.length}] Error: ${url} -> ${result.error.message}`);
            failCount++;
        } else {
            console.log(`✅ [${i+1}/${urls.length}] Google Indexing Queued: ${url}`);
            successCount++;
        }
        // Delay to respect Google Indexing API rate limits (60 requests per minute)
        await new Promise(r => setTimeout(r, 1050));
    }

    console.log(`\n🎉 Indexing API Complete: ${successCount} queued, ${failCount} failed.`);
  } catch (err) {
    console.error('🔥 Critical error during indexing:', err);
  }
})();
