const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Configuration
const SITE_URL = 'https://www.nanded-city.in';
const INDEXNOW_KEY = 'a5f8b9e6c4d742e983f1a0b5c7d8e9fa';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

function getEnvCredentials() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return null;
  const content = fs.readFileSync(envPath, 'utf8');
  let email = null;
  let privateKey = null;

  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('GOOGLE_SERVICE_ACCOUNT_EMAIL=')) {
      email = trimmed.substring('GOOGLE_SERVICE_ACCOUNT_EMAIL='.length).trim().replace(/^["']|["']$/g, '');
    } else if (trimmed.startsWith('GOOGLE_CLIENT_EMAIL=')) {
      email = trimmed.substring('GOOGLE_CLIENT_EMAIL='.length).trim().replace(/^["']|["']$/g, '');
    } else if (trimmed.startsWith('GOOGLE_PRIVATE_KEY=')) {
      privateKey = trimmed.substring('GOOGLE_PRIVATE_KEY='.length).trim().replace(/^["']|["']$/g, '').replace(/\\n/g, '\n');
    }
  }

  if (email && privateKey) {
    return { email, privateKey };
  }
  return null;
}

async function createGoogleJWT(email, privateKey, scope) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: email,
    scope: scope,
    aud: 'https://oauth2.googleapis.com/token',
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

async function getGoogleAccessToken(email, privateKey, scope) {
  const jwt = await createGoogleJWT(email, privateKey, scope);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google Auth Failed: ${err}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function submitGoogleSitemap(accessToken, siteUrl, sitemapUrl) {
  const encodedSite = encodeURIComponent(siteUrl);
  const encodedSitemap = encodeURIComponent(sitemapUrl);
  const apiUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps/${encodedSitemap}`;

  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { status: res.status, text: await res.text() };
}

async function notifyIndexNow(urls) {
  const payload = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  return res.status;
}

async function fetchSitemapUrls() {
  try {
    const res = await fetch(SITEMAP_URL);
    if (res.ok) {
      const xml = await res.text();
      const matches = xml.match(/<loc>(https:\/\/[^<]+)<\/loc>/g);
      if (matches && matches.length > 0) {
        return matches.map((m) => m.replace('<loc>', '').replace('</loc>', '').trim());
      }
    }
  } catch (e) {
    console.warn('⚠️ Could not fetch remote sitemap, falling back to local files.');
  }

  // Fallback to local files if remote is unavailable
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/projects/`,
    `${SITE_URL}/contact/`,
    `${SITE_URL}/blog/`,
    `${SITE_URL}/about-us/`,
    `${SITE_URL}/legal-compliance/`,
    `${SITE_URL}/mr/2-bhk-flats/`,
    `${SITE_URL}/mr/bungalow-plots/`,
    `${SITE_URL}/lp/2-bhk-flats/`,
    `${SITE_URL}/lp/3-bhk-luxury/`,
    `${SITE_URL}/lp/na-bungalow-plots/`,
  ];

  try {
    const clustersContent = fs.readFileSync('src/data/clusters.ts', 'utf-8');
    const clusterIds = clustersContent.match(/id:\s*['"]([^'"]+)['"]/g)?.map(m => m.match(/['"]([^'"]+)['"]/)[1]) || [];
    clusterIds.forEach(id => urls.push(`${SITE_URL}/cluster/${id}/`));

    const blogsContent = fs.readFileSync('src/data/blogs.ts', 'utf-8');
    const blogSlugs = blogsContent.match(/slug:\s*['"]([^'"]+)['"]/g)?.map(m => m.match(/['"]([^'"]+)['"]/)[1]) || [];
    blogSlugs.forEach(slug => urls.push(`${SITE_URL}/blog/${slug}/`));
  } catch (err) {
    // ignore
  }

  return [...new Set(urls)];
}

async function main() {
  console.log('🌌 Starting Sovereign SEO Sweep...');
  const urls = await fetchSitemapUrls();
  console.log(`🔗 Found ${urls.length} canonical URLs to calibrate.`);

  // 1. IndexNow (Bing / Yandex / Seznam / Naver)
  console.log('\n🚀 Pinging IndexNow protocol...');
  try {
    const status = await notifyIndexNow(urls);
    if (status === 200 || status === 202) {
      console.log(`✅ IndexNow: Success (Status ${status}) - ${urls.length} URLs submitted.`);
    } else {
      console.log(`⚠️ IndexNow response: Status ${status}`);
    }
  } catch (err) {
    console.error('🔥 IndexNow Error:', err.message);
  }

  // 2. Google Search Console Sitemap Calibration
  console.log('\n🚀 Calibrating Google Search Console Sitemap...');
  const creds = getEnvCredentials();
  if (!creds) {
    console.log('⚠️ Google Service Account credentials not found in .env.local');
  } else {
    try {
      const gscScope = 'https://www.googleapis.com/auth/webmasters';
      const token = await getGoogleAccessToken(creds.email, creds.privateKey, gscScope);
      console.log('✅ Google OAuth2 Token generated successfully.');

      const result = await submitGoogleSitemap(token, `${SITE_URL}/`, SITEMAP_URL);
      if (result.status === 200 || result.status === 204) {
        console.log(`✅ Google Search Console: Sitemap submitted successfully (${SITEMAP_URL})`);
      } else if (result.status === 403) {
        console.log('ℹ️ Google Search Console API requires one-time activation in your Google Cloud project.');
        console.log('👉 Direct activation link: https://console.developers.google.com/apis/api/searchconsole.googleapis.com/overview?project=657035699673');
      } else {
        console.log(`⚠️ GSC Status ${result.status}:`, result.text);
      }
    } catch (err) {
      console.error('🔥 Google Calibration Error:', err.message);
    }
  }

  console.log('\n🌟 Sovereign SEO Sweep Finished.');
}

main().catch(err => {
  console.error('💥 Fatal Error:', err);
  process.exit(1);
});
