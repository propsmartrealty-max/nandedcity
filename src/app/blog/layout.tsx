import { Metadata } from 'next';
import { SITE_CONFIG } from '../../config/site';

export const metadata: Metadata = {
  title: 'Real Estate Insights & Market Trends',
  description: 'Authoritative analysis on the Sinhagad Road real estate market, township lifestyle data, and strategic investment guides for Nanded City Township Pune.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/blog/`,
  },
  openGraph: {
    title: `Real Estate Insights & Market Trends | ${SITE_CONFIG.name}`,
    description: 'Authoritative analysis on the Sinhagad Road real estate market, township lifestyle data, and strategic investment guides for Nanded City Township Pune.',
    url: `${SITE_CONFIG.baseUrl}/blog/`,
    siteName: SITE_CONFIG.name,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
