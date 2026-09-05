/**
 * Ultra-Advanced Cloudflare Edge Engine & HTMLRewriter
 * Optimizing Core Web Vitals, Googlebot Indexing, and Instant Global Edge Delivery.
 */

declare class HTMLRewriter {
  on(selector: string, handlers: any): this;
  transform(response: Response): Response;
}

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

// Recognized search bots and AI crawlers
const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'google-inspectiontool',
  'storebot-google',
  'google-other',
  'mediapartners-google',
  'adsbot-google',
  'yandexbot',
  'duckduckbot',
  'baiduspider',
  'slurp',
  'twitterbot',
  'facebookexternalhit',
  'linkedinbot',
  'applebot',
  'perplexitybot',
  'claudebot',
  'gptbot',
  'bytespider'
];

function isSearchBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot));
}

/**
 * HTMLRewriter Handler to dynamically inject edge-level performance tags,
 * DNS preconnects, local Pune Geo tags, and critical LCP preloads.
 */
class EdgeHeadInjector {
  private isHomePage: boolean;
  private edgeColo: string;

  constructor(isHomePage: boolean, edgeColo: string) {
    this.isHomePage = isHomePage;
    this.edgeColo = edgeColo;
  }

  element(element: any) {
    // 1. High-priority DNS prefetch & Preconnects
    element.prepend(
      `\n  <!-- Cloudflare Edge Early Preconnects -->` +
      `\n  <link rel="preconnect" href="https://fonts.googleapis.com">` +
      `\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
      `\n  <link rel="dns-prefetch" href="https://nandedcitypune.com">` +
      `\n  <link rel="dns-prefetch" href="https://wa.me">` +
      `\n  <link rel="dns-prefetch" href="https://www.googletagmanager.com">`,
      { html: true }
    );

    // 2. High-Fidelity Local SEO & Geo Meta Tags for Google Pune Ranking
    element.append(
      `\n  <!-- Cloudflare Edge Geo-Targeting & Verification -->` +
      `\n  <meta name="geo.region" content="IN-MH">` +
      `\n  <meta name="geo.placename" content="Nanded City, Sinhagad Road, Pune">` +
      `\n  <meta name="geo.position" content="18.4612;73.8015">` +
      `\n  <meta name="ICBM" content="18.4612, 73.8015">` +
      `\n  <meta name="revisit-after" content="2 days">` +
      `\n  <meta name="cf-edge-location" content="${this.edgeColo}">`,
      { html: true }
    );

    // 3. Homepage Critical LCP Hero Image Preload for Sub-800ms LCP
    if (this.isHomePage) {
      element.append(
        `\n  <!-- Edge LCP Image Priority Acceleration -->` +
        `\n  <link rel="preload" as="image" href="https://nandedcitypune.com/wp-content/uploads/2026/02/saajgiri-ncp-banner-img-01.webp" fetchpriority="high">`,
        { html: true }
      );
    }
  }
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. Non-www to www Canonical Normalization
  if (url.hostname === 'nanded-city.in') {
    url.hostname = 'www.nanded-city.in';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Trailing slash normalization for cluster and blog routes to prevent duplicate content
  const path = url.pathname;
  const isHtmlRoute = !path.includes('.') || path.endsWith('.html');
  const isApiRoute = path.startsWith('/api/');
  const isStaticAsset = path.startsWith('/_next/') || path.startsWith('/assets/') || path.startsWith('/qrs/');

  // Skip middleware processing for API and static assets
  if (isApiRoute || isStaticAsset) {
    return next();
  }

  // 3. Edge 301 redirect for uppercase paths to prevent case-sensitive Google penalties
  if (path !== path.toLowerCase()) {
    url.pathname = path.toLowerCase();
    return Response.redirect(url.toString(), 301);
  }

  // Execute request to retrieve origin static asset
  const response = await next();

  // If not HTML (e.g. image, font, json), return response as-is
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const userAgent = request.headers.get('user-agent') || '';
  const isBot = isSearchBot(userAgent);
  const edgeColo = request.cf?.colo || 'EDGE';
  const isHomePage = path === '/' || path === '/index.html';

  // 4. Construct high-performance edge headers
  const newHeaders = new Headers(response.headers);
  newHeaders.set('X-Edge-Colo', edgeColo);
  newHeaders.set('X-Edge-Version', '2026-v8-turbo');
  newHeaders.set('X-Powered-By', 'Cloudflare Pages Edge & HTMLRewriter');

  // Googlebot & Crawler Optimization
  if (isBot) {
    newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    newHeaders.set('X-Bot-Acceleration', 'Active');
    newHeaders.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
  } else {
    newHeaders.set('Cache-Control', 'public, max-age=600, s-maxage=3600, stale-while-revalidate=86400');
  }

  // 5. HTTP 103 Early Hints & Preload Links for Instant Browser Fetching
  const preloadLinks = [
    '<https://fonts.googleapis.com>; rel=preconnect',
    '<https://fonts.gstatic.com>; rel=preconnect; crossorigin'
  ];
  if (isHomePage) {
    preloadLinks.push('<https://nandedcitypune.com/wp-content/uploads/2026/02/saajgiri-ncp-banner-img-01.webp>; rel=preload; as=image; fetchpriority=high');
  }
  newHeaders.set('Link', preloadLinks.join(', '));

  // 6. Execute Streaming HTMLRewriter Transformation
  const rewriter = new HTMLRewriter()
    .on('head', new EdgeHeadInjector(isHomePage, edgeColo));

  const transformedResponse = rewriter.transform(
    new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    })
  );

  return transformedResponse;
}
