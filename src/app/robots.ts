import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.baseUrl;

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/',
          '/assets/',
          '/cluster/',
          '/blog/',
          '/lp/',
          '/mr/',
          '/near/',
          '/projects',
          '/infrastructure',
          '/about-us',
          '/legal-compliance',
          '/contact',
        ],
        disallow: ['/admin', '/private', '/api/', '/*.json$'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/_next/static/', '/assets/'],
        disallow: ['/admin', '/private', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
