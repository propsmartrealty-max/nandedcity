import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '../components/Breadcrumbs';
import BrochureVault from '../components/BrochureVault';
import ScrollReveal from '../components/ScrollReveal';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Download Nanded City Brochures & MahaRERA Certificates | All 20 Clusters",
  description: "Download official PDF brochures, floor plans, and MahaRERA certificates for all 20 Nanded City Pune residential clusters & NA plots including Saajgiri, Harmony, Melody & Asawari.",
  keywords: [
    "Nanded City brochure download",
    "Nanded City Pune PDF brochure",
    "Saajgiri Nanded City brochure",
    "Harmony Nanded City floor plan PDF",
    "Melody plots brochure Nanded City",
    "MahaRERA certificate Nanded City"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/brochures/`,
  },
  openGraph: {
    title: "Download Nanded City Brochures & MahaRERA Certificates | 2026",
    description: "Official PDF brochures, floor plan blueprints, and MahaRERA certificates for all 20 clusters in Nanded City Pune.",
    url: `${SITE_CONFIG.baseUrl}/brochures/`,
    siteName: "Nanded City Township Pune",
    type: "website",
  }
};

export default function BrochuresPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Download Nanded City Brochures & MahaRERA Certificates",
    "description": "Download official PDF brochures and MahaRERA certificates for all clusters in Nanded City Pune.",
    "url": `${SITE_CONFIG.baseUrl}/brochures/`,
    "publisher": {
      "@type": "RealEstateAgent",
      "name": "PropSmart Realty",
      "description": "Authorised Marketing Partner: MahaRERA A031262401295"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ backgroundColor: '#0f172a', color: '#fff', padding: '120px 0 60px', position: 'relative' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Brochure & RERA Vault' }
            ]}
          />
          <span style={{
            display: 'inline-block',
            backgroundColor: 'var(--accent-gold)',
            color: '#000',
            padding: '6px 14px',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '16px'
          }}>
            Official Document Center
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
            Nanded City Brochures & MahaRERA Certificates (2026)
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '780px', lineHeight: '1.7' }}>
            Instant access to verified floor plan blueprints, master layouts, cost sheets, and official government MahaRERA registration documents across all 20 residential clusters.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 0 100px', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <BrochureVault />

          {/* Compliance & Verification Notice */}
          <div style={{ marginTop: '80px', backgroundColor: '#fff', borderRadius: '20px', padding: '36px', border: '1.5px solid #e2e8f0' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                MahaRERA Statutory Compliance & Document Authenticity
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                All cluster brochures, layout plans, and carpet area calculations provided herein are sourced in strict accordance with the Real Estate (Regulation and Development) Act, 2016 (MahaRERA). Prospective buyers can independently verify the details and sanctioned plans by visiting the official Maharashtra Real Estate Regulatory Authority portal at{' '}
                <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', fontWeight: '700', textDecoration: 'underline' }}>
                  maharera.maharashtra.gov.in
                </a>{' '}
                under Registered Projects.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
