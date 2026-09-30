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
          '/_headers',
          '/assets/',
          '/cluster/',
          '/blog/',
          '/faq/',
          '/lp/',
          '/mr/',
          '/near/',
          '/projects/',
          '/infrastructure/',
          '/master-plan/',
          '/floor-plans/',
          '/emi-calculator/',
          '/resale-rental-guide/',
          '/about-us/',
          '/legal-compliance/',
          '/contact/',
        ],
        disallow: ['/admin', '/private', '/api/'],
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Googlebot-Mobile', 'google-inspectiontool', 'Storebot-Google'],
        allow: [
          '/',
          '/_next/static/',
          '/assets/',
          '/cluster/',
          '/blog/',
          '/faq/',
          '/lp/',
          '/mr/',
          '/near/',
          '/projects/',
          '/infrastructure/',
          '/master-plan/',
          '/floor-plans/',
          '/emi-calculator/',
          '/resale-rental-guide/',
          '/about-us/',
          '/legal-compliance/',
          '/contact/',
          '/qrs/',
          '/images/',
        ],
        disallow: ['/admin', '/private', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
