import React from 'react';
import { Metadata } from 'next';
import ClusterComparison from '../components/ClusterComparison';
import Breadcrumbs from '../components/Breadcrumbs';
import ScrollReveal from '../components/ScrollReveal';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Compare Nanded City Clusters – Saajgiri vs Harmony, Plots & Resale | 2026",
  description: "Interactive side-by-side comparison of all 20 Nanded City Pune residential clusters & NA plots. Compare BHK configurations, 2026 prices, carpet areas, tower heights, and walking distances.",
  keywords: [
    "Nanded City cluster comparison",
    "Saajgiri vs Harmony Nanded City",
    "Asawari vs Bageshree",
    "Melody plots vs Rhythm plots",
    "Nanded City flat comparison 2026",
    "best cluster in Nanded City Pune"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/compare/`,
  },
  openGraph: {
    title: "Compare Nanded City Clusters – Interactive Side-by-Side Tool",
    description: "Compare BHKs, 2026 prices, carpet areas, and locations across all 20 Nanded City Pune clusters.",
    url: `${SITE_CONFIG.baseUrl}/compare/`,
    siteName: "Nanded City Township Pune",
    type: "website",
  }
};

export default function ComparePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Compare Nanded City Clusters – Interactive Side-by-Side Tool",
    "description": "Compare 2026 pricing, configurations, carpet areas, and amenities across all 20 Nanded City Pune clusters.",
    "url": `${SITE_CONFIG.baseUrl}/compare/`,
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
              { name: 'Cluster Comparison Matrix' }
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
            Buyer Decision Intelligence
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
            Nanded City Cluster Comparison Matrix
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '750px', lineHeight: '1.7' }}>
            Evaluate any 2 clusters side-by-side. Compare carpet areas, 2026 pricing, possession timelines, walking distance to Destination Center, and maintenance dues to find the ideal home.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 0 100px', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <ClusterComparison />

          {/* Buyer Comparison Guide */}
          <div style={{ marginTop: '80px', backgroundColor: '#fff', borderRadius: '20px', padding: '40px', border: '1.5px solid #e2e8f0' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>
                How to Choose the Right Cluster in Nanded City
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>
                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--primary-green)', marginBottom: '8px' }}>
                    1. High-Rise Luxury (Saajgiri & Harmony)
                  </h3>
                  <p>
                    Ideal for families seeking expansive 3, 3.5 & 4.5 BHK layouts, double-height lobbies, high-speed elevators, and panoramic mountain views overlooking the Sinhagad valley.
                  </p>
                </div>
                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--accent-gold)', marginBottom: '8px' }}>
                    2. Central Established Enclaves (Asawari & Sargam)
                  </h3>
                  <p>
                    Unbeatable central location right across Destination Center I and Kridaangan Sports Complex. Zero wait time with ready-to-move resale options and established society management.
                  </p>
                </div>
                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#2563eb', marginBottom: '8px' }}>
                    3. Independent Villa Plots (Melody & Rhythm)
                  </h3>
                  <p>
                    For visionary homeowners who desire private bungalow architecture with G+2 permissions while enjoying 700 acres of township security, water supply, and amenities.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
