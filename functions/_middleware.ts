/**
 * Enterprise-Grade Cloudflare Edge Engine & HTMLRewriter
 * Ultra-Optimized for Googlebot Indexing, Sub-100ms Core Web Vitals, and Instant Edge Delivery.
 */

declare class HTMLRewriter {
  on(selector: string, handlers: any): this;
  onDocument(handlers: any): this;
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

// Exhaustive Recognized Search Bots, Mobile Crawlers & AI Search Engines
const BOT_USER_AGENTS = [
  'googlebot',
  'googlebot-mobile',
  'googlebot-image',
  'googlebot-video',
  'google-inspectiontool',
  'storebot-google',
  'google-other',
  'mediapartners-google',
  'adsbot-google',
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
  'applebot',
  'applebot-extended',
  'perplexitybot',
  'claudebot',
  'gptbot',
  'bytespider',
  'petalbot',
  'sogou'
];

function isSearchBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot));
}

/**
 * Enterprise HTMLRewriter Handler:
 * - Dynamic DNS Preconnects & High-Priority Resource Hints
 * - Hyper-Local Pune Geo Tags (IN-MH, coordinates, ICBM)
 * - LCP Critical Hero Preloads (fetchpriority=high)
 * - Chrome Speculation Rules API for 0ms Instant Client Prerender
 */
class EnterpriseEdgeHeadInjector {
  private isHomePage: boolean;
  private edgeColo: string;

  constructor(isHomePage: boolean, edgeColo: string) {
    this.isHomePage = isHomePage;
    this.edgeColo = edgeColo;
  }

  element(element: any) {
    // 1. High-Priority Early Preconnects & DNS Prefetch
    element.prepend(
      `\n  <!-- Enterprise Cloudflare Edge Resource Hints -->` +
      `\n  <link rel="preconnect" href="https://fonts.googleapis.com">` +
      `\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
      `\n  <link rel="dns-prefetch" href="https://nandedcitypune.com">` +
      `\n  <link rel="dns-prefetch" href="https://images.unsplash.com">` +
      `\n  <link rel="dns-prefetch" href="https://static.cloudflareinsights.com">` +
      `\n  <link rel="dns-prefetch" href="https://wa.me">` +
      `\n  <link rel="dns-prefetch" href="https://www.googletagmanager.com">`,
      { html: true }
    );

    // 2. High-Precision Local SEO & Geo Meta Tags for Google.com Pune SERP Dominance
    element.append(
      `\n  <!-- Enterprise Edge Geo-Targeting & Microdata -->` +
      `\n  <meta name="geo.region" content="IN-MH">` +
      `\n  <meta name="geo.placename" content="Nanded City, Sinhagad Road, Pune">` +
      `\n  <meta name="geo.position" content="18.4612;73.8015">` +
      `\n  <meta name="ICBM" content="18.4612, 73.8015">` +
      `\n  <meta name="revisit-after" content="1 days">` +
      `\n  <meta name="rating" content="General">` +
      `\n  <meta name="distribution" content="Global">` +
      `\n  <meta name="coverage" content="Worldwide">` +
      `\n  <meta name="format-detection" content="telephone=yes">` +
      `\n  <meta name="theme-color" content="#0a1628">` +
      `\n  <meta name="cf-edge-colo" content="${this.edgeColo}">`,
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

    // 4. Modern Chrome Speculation Rules API for 0ms Instant Prerender on Internal Navigation
    element.append(
      `\n  <script type="speculationrules">` +
      `{"prerender":[{"source":"list","urls":["/projects/","/cluster/saajgiri/","/cluster/harmony/","/about-us/","/contact/"],"eagerness":"moderate"}]}` +
      `</script>`,
      { html: true }
    );
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

/**
 * Strips non-essential HTML comments at the edge to reduce byte payload
 */
class EdgeCommentMinifier {
  comments(comment: any) {
    if (!comment.text.includes('[if') && !comment.text.includes('Cloudflare')) {
      comment.remove();
    }
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

  // 5. Construct enterprise-grade response headers
  const newHeaders = new Headers(response.headers);
  newHeaders.set('X-Edge-Colo', edgeColo);
  newHeaders.set('X-Edge-Engine', 'Cloudflare Pages Enterprise HTMLRewriter');
  newHeaders.set('Server-Timing', `cf-edge;desc="Edge Engine", cf-colo;desc="${edgeColo}"`);
  newHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Googlebot & Crawler Optimization
  if (isBot) {
    newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    newHeaders.set('X-Bot-Acceleration', 'Enterprise-Active');
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
    .on('head', new EnterpriseEdgeHeadInjector(isHomePage, edgeColo))
    .on('link[rel="canonical"]', new EdgeCanonicalRewriter(cleanCanonical))
    .onDocument(new EdgeCommentMinifier());

  const transformedResponse = rewriter.transform(
    new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    })
  );

  return transformedResponse;
}
