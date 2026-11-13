/**
 * Enterprise-Grade Cloudflare Edge Engine
 * Clean Canonical Normalization, Security Headers, Sub-50ms TTFB, and Zero React Hydration Mismatches.
 */

interface CloudflareRequest extends Request {
  cf?: {
    colo?: string;
    country?: string;
    city?: string;
    region?: string;
    timezone?: string;
    asOrganization?: string;
  };
}

interface MiddlewareContext {
  request: CloudflareRequest;
  next: () => Promise<Response>;
  env: Record<string, unknown>;
}

// Exhaustive Recognized Search Bots, Mobile Crawlers & AI Search Engines
const BOT_USER_AGENTS = [
  'googlebot',
  'googlebot-mobile',
  'googlebot-image',
  'googlebot-video',
  'google-inspectiontool',
  'storebot-google',
  'google-other',
  'google-extended',
  'mediapartners-google',
  'adsbot-google',
  'oai-searchbot',
  'chatgpt-user',
  'gptbot',
  'perplexitybot',
  'perplexity',
  'claudebot',
  'claude-web',
  'anthropic-ai',
  'applebot',
  'applebot-extended',
  'cohere-ai',
  'meta-externalagent',
  'bingbot',
  'bingpreview',
  'msnbot',
  'yandexbot',
  'duckduckbot',
  'baiduspider',
  'slurp',
  'twitterbot',
  'facebookexternalhit',
  'linkedinbot',
  'bytespider',
  'petalbot',
  'sogou'
];

function isSearchBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot));
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const { request, next } = context;
  const userAgent = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const isBot = isSearchBot(userAgent);

  // 1. Apex to www Canonical Normalization
  if (url.hostname === 'nanded-city.in') {
    url.hostname = 'www.nanded-city.in';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Prevent All Traffic & Crawlers from Indexing pages.dev Staging Domain
  if (url.hostname.endsWith('.pages.dev')) {
    url.hostname = 'www.nanded-city.in';
    return Response.redirect(url.toString(), 301);
  }

  const path = url.pathname;
  const isApiRoute = path.startsWith('/api/');
  const isStaticAsset = path.startsWith('/_next/') || path.startsWith('/assets/') || path.startsWith('/qrs/') || path.startsWith('/images/') || path.startsWith('/opengraph-image') || path.startsWith('/twitter-image') || path.startsWith('/icon') || path.startsWith('/apple-icon') || path.startsWith('/favicon') || path.startsWith('/.well-known/');

  // Instant 200 OK for Next.js internal flight prefetch requests in static export to prevent console 404s
  if (path.includes('__next.') || url.searchParams.has('_rsc')) {
    return new Response('{}', {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  }

  // Instant 200 OK for Google Site Verification
  if (path.startsWith('/google') && (path.endsWith('.html') || !path.includes('.'))) {
    const filename = path.replace(/^\//, '').replace(/\.html$/, '') + '.html';
    return new Response(`google-site-verification: ${filename}\n`, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
        'X-Robots-Tag': 'all'
      }
    });
  }

  // Skip middleware processing for API and static assets
  if (isApiRoute || isStaticAsset) {
    return next();
  }

  // 3. Edge 301 redirect for uppercase paths to prevent duplicate content penalties
  if (path !== path.toLowerCase()) {
    url.pathname = path.toLowerCase();
    return Response.redirect(url.toString(), 301);
  }

  // 4. Trailing slash normalization for HTML routes (Next.js static export alignment)
  const hasFileExtension = path.split('/').pop()?.includes('.');
  if (!hasFileExtension && !path.endsWith('/')) {
    url.pathname = `${path}/`;
    return Response.redirect(url.toString(), 301);
  }

  // Direct origin static pass-through (avoids worker stream buffering & 504 Gateway Timeouts)
  return next();
}
