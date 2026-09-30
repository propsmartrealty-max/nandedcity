import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import FloorPlanGrid from '../components/FloorPlanGrid';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Nanded City Floor Plans 2026 | 2, 2.5, 3, 3.5 & 4.5 BHK & Villa Layouts PDF',
  description: 'Download verified floor plans, carpet area schedules, and master layout brochures for Nanded City Township Pune. Explore 2, 2.5, 3, 3.5, 4.5 BHK luxury flats and NA bungalow plots.',
  keywords: 'Nanded City floor plans, Saajgiri floor plan PDF, Harmony 4 BHK layout, Aalaap 2.5 BHK floor plan, Nanded City carpet area schedule, Melody bungalow plot layout, Nanded City 2 BHK floor plan brochure, Pune township layouts',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/floor-plans/`,
  },
};

export default function FloorPlansPage() {
  const faqSchema: any = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the carpet area measured in Nanded City apartments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All residential units in Nanded City strictly adhere to MahaRERA carpet area guidelines. Carpet area represents the net usable floor area of an apartment, excluding the area covered by external walls, service shafts, and common passages, but including internal partition walls."
        }
      },
      {
        "@type": "Question",
        "name": "Are floor plans in Nanded City Vaastu compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, towers in Nanded City (such as Saajgiri, Aalaap, and Bageshree) are designed with primary East-West entry orientations, cross-ventilation corridors, and optimized kitchen (Agni) and master bedroom (Nairuthi) placement."
        }
      },
      {
        "@type": "Question",
        "name": "What construction technology is used for Nanded City tower layouts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nanded City utilizes advanced monolithic reinforced concrete (Mivan formwork) shear wall technology. This provides superior earthquake resistance, seamless joints, acoustic isolation, and maximum usable carpet area without intrusive structural columns."
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section style={{ backgroundColor: '#0f172a', padding: '130px 0 60px', color: '#fff' }}>
        <div className="container">
          <Breadcrumbs items={[
            { name: 'Home', href: '/' },
            { name: 'Floor Plans & Layouts', href: '/floor-plans/', current: true }
          ]} />

          <div style={{ maxWidth: '880px', marginTop: '24px' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              backgroundColor: 'rgba(212, 175, 55, 0.15)', 
              color: 'var(--accent-gold)', 
              borderRadius: '100px', 
              fontSize: '0.82rem', 
              fontWeight: '800', 
              letterSpacing: '1px',
              marginBottom: '16px' 
            }}>
              Architectural Blueprints & Dimensions
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
              Nanded City Floor Plans & Layout Directory
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '32px' }}>
              Inspect detailed floor plan layouts, carpet area calculations, and structural specifications across all 20 residential clusters. Download verified PDF layout brochures with dimension schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Floor Plan Grid Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <FloorPlanGrid />
        </div>
      </section>

      {/* Architectural & Structural Guide */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
            Architectural Engineering
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0 24px', fontWeight: '800' }}>
            Smart Space Planning in Nanded City
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#475569', lineHeight: '1.8' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                1. Mivan Monolithic Shear-Wall Construction
              </h3>
              <p>
                Unlike traditional brick masonry, residences in Nanded City are built using engineered aluminum formwork casting. This eliminates bulky corner columns, giving you 100% usable room corners, smoother wall finishes, and enhanced thermal efficiency throughout Pune&apos;s seasons.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                2. Cross-Ventilation & Natural Light Analysis
              </h3>
              <p>
                Each tower layout is positioned with generous setbacks from neighboring high-rises to guarantee uninterrupted wind tunnels and morning sunlight. Expansive sundecks in Saajgiri and Harmony face either the Sahyadri mountains or the Mutha riverfront.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                3. MahaRERA Carpet Area Transparency
              </h3>
              <p>
                Every floor plan showcased on this platform lists the exact RERA Carpet Area alongside exclusive deck and dry balcony spaces. Cost sheets strictly correlate with carpet dimensions, ensuring zero hidden loading discrepancies.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '50px', padding: '32px', borderRadius: '16px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '6px' }}>
                Need Detailed CAD or Architect Blueprints?
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
                Our authorized desk can arrange physical model walkthroughs and full brochure packets.
              </p>
            </div>
            <Link
              href="/contact/"
              style={{
                padding: '12px 28px',
                borderRadius: '100px',
                backgroundColor: 'var(--accent-gold)',
                color: '#000',
                fontWeight: '800',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              Request Architect Packet →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
