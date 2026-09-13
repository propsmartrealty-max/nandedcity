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
  private canonicalUrl: string;

  constructor(isHomePage: boolean, edgeColo: string, canonicalUrl: string) {
    this.isHomePage = isHomePage;
    this.edgeColo = edgeColo;
    this.canonicalUrl = canonicalUrl;
  }

  element(element: any) {
    // 1. High-priority DNS prefetch & Preconnects for instant asset streaming
    element.prepend(
      `\n  <!-- Cloudflare Edge Early Preconnects & Geo Engine -->` +
      `\n  <link rel="preconnect" href="https://fonts.googleapis.com">` +
      `\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
      `\n  <link rel="dns-prefetch" href="https://nandedcitypune.com">` +
      `\n  <link rel="dns-prefetch" href="https://images.unsplash.com">` +
      `\n  <link rel="dns-prefetch" href="https://wa.me">` +
      `\n  <link rel="dns-prefetch" href="https://www.googletagmanager.com">`,
      { html: true }
    );

    // 2. High-Fidelity Local SEO & Geo Meta Tags for Google.com Pune Ranking
    element.append(
      `\n  <!-- Cloudflare Edge Geo-Targeting & Verification -->` +
      `\n  <meta name="geo.region" content="IN-MH">` +
      `\n  <meta name="geo.placename" content="Nanded City, Sinhagad Road, Pune">` +
      `\n  <meta name="geo.position" content="18.4612;73.8015">` +
      `\n  <meta name="ICBM" content="18.4612, 73.8015">` +
      `\n  <meta name="revisit-after" content="1 days">` +
      `\n  <meta name="rating" content="General">` +
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

/**
 * Enforces pure canonical URLs on the wire, stripping tracking/ad query strings
 */
class EdgeCanonicalRewriter {
  private canonicalUrl: string;

  constructor(canonicalUrl: string) {
    this.canonicalUrl = canonicalUrl;
  }

  element(element: any) {
    element.setAttribute('href', this.canonicalUrl);
  }
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = isSearchBot(userAgent);

  // 1. Non-www to www Canonical Normalization
  if (url.hostname === 'nanded-city.in') {
    url.hostname = 'www.nanded-city.in';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Prevent Googlebot & Search Crawlers from Indexing pages.dev Staging Domain
  if (url.hostname.endsWith('.pages.dev') && isBot) {
    url.hostname = 'www.nanded-city.in';
    return Response.redirect(url.toString(), 301);
  }

  const path = url.pathname;
  const isApiRoute = path.startsWith('/api/');
  const isStaticAsset = path.startsWith('/_next/') || path.startsWith('/assets/') || path.startsWith('/qrs/') || path.startsWith('/images/');

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

  // Execute request to retrieve origin static asset
  const response = await next();

  // If not HTML (e.g. image, font, json), return response as-is
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const edgeColo = request.cf?.colo || 'EDGE';
  const isHomePage = path === '/' || path === '/index.html';
  const cleanCanonical = `https://www.nanded-city.in${path === '/' ? '/' : path}`;

  // 5. Construct high-performance edge headers
  const newHeaders = new Headers(response.headers);
  newHeaders.set('X-Edge-Colo', edgeColo);
  newHeaders.set('X-Edge-Version', '2026-v9-max');
  newHeaders.set('X-Powered-By', 'Cloudflare Pages Edge & HTMLRewriter');

  // Googlebot & Crawler Optimization
  if (isBot) {
    newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    newHeaders.set('X-Bot-Acceleration', 'Active');
    newHeaders.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
  } else {
    newHeaders.set('Cache-Control', 'public, max-age=600, s-maxage=3600, stale-while-revalidate=86400');
  }

  // 6. HTTP 103 Early Hints & Preload Links for Instant Browser Fetching
  const preloadLinks = [
    '<https://fonts.googleapis.com>; rel=preconnect',
    '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
    '<https://nandedcitypune.com>; rel=dns-prefetch',
    '<https://images.unsplash.com>; rel=dns-prefetch'
  ];
  if (isHomePage) {
    preloadLinks.push('<https://nandedcitypune.com/wp-content/uploads/2026/02/saajgiri-ncp-banner-img-01.webp>; rel=preload; as=image; fetchpriority=high');
  }
  newHeaders.set('Link', preloadLinks.join(', '));

  // 7. Execute Streaming HTMLRewriter Transformation
  const rewriter = new HTMLRewriter()
    .on('head', new EdgeHeadInjector(isHomePage, edgeColo, cleanCanonical))
    .on('link[rel="canonical"]', new EdgeCanonicalRewriter(cleanCanonical));

  const transformedResponse = rewriter.transform(
    new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    })
  );

  return transformedResponse;
}
