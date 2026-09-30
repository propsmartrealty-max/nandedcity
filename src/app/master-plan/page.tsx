import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';
import ScrollReveal from '../components/ScrollReveal';
import { clusters } from '@/data/clusters';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Nanded City Master Plan & Sector Map 2026 | 700-Acre Township Layout Guide',
  description: 'Explore the complete 700-Acre Master Plan layout of Nanded City Township Pune. Detailed sector-by-sector directory of 20 residential clusters, ICSE schools, IT parks, Destination Centre malls, and sports complexes.',
  keywords: 'Nanded City Master Plan, Nanded City layout map 2026, Nanded City sector directory, Nanded City Master Plan PDF, 700 acres township layout Pune, Saajgiri location map, Melody plots layout, Nanded City zoning',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/master-plan/`,
  },
};

const SECTORS = [
  {
    id: 'central-luxury',
    title: 'Sector 1: Central Luxury Enclaves & High-Rises',
    tagline: 'High-Elevation Towers with Panoramic Sahyadri Views',
    description: 'Home to premier luxury high-rise developments featuring expansive 2.5, 3, 3.5, and 4.5 BHK royal residences. Located adjacent to the primary spine boulevard with direct access to ICSE schools.',
    clusters: ['saajgiri', 'harmony', 'aalaap-1', 'kalashree', 'lalit'],
    color: '#c9a84c',
    icon: '🏢'
  },
  {
    id: 'plotted-villas',
    title: 'Sector 2: Branded NA Bungalow Plot Enclaves',
    tagline: 'Low-Density Private Villa Estates',
    description: 'Exclusive custom villa plotting sectors for doctors, entrepreneurs, and CXOs. Collector-sanctioned build-ready plots with independent utility hookups and private clubhouses.',
    clusters: ['melody-1', 'melody-2', 'melody-3', 'rhythm', 'dhanashree'],
    color: '#0d9488',
    icon: '🏡'
  },
  {
    id: 'riverfront-residential',
    title: 'Sector 3: Riverfront & Western Residential Towers',
    tagline: 'Ready-Possession Family Communities Along Mutha River',
    description: 'Established, thriving communities with over 12,000 inhabited families. Proximity to Destination Centre I, local convenience retail, and landscaped riverside promenades.',
    clusters: ['asawari', 'sargam', 'bageshree', 'pancham', 'shubh-kalyan', 'sur', 'mangal-bhairav', 'janaranjani', 'madhuvanti', 'sarang'],
    color: '#0369a1',
    icon: '🌊'
  },
  {
    id: 'civic-education',
    title: 'Sector 4: Educational & Civic Core',
    tagline: 'Walk-to-School Convenience & Multi-Tier Healthcare',
    description: 'The social heartbeat of Nanded City. Housing Nanded City Public School (ICSE), Pawar Public School, 24x7 emergency medical centers, Sahyadri Multispeciality Clinic, and fire outpost.',
    landmarks: ['Nanded City Public School (ICSE)', 'Pawar Public School', 'Sahyadri Multispeciality Clinic', 'Central Fire Outpost', 'Police Chowki'],
    color: '#16a34a',
    icon: '🏫'
  },
  {
    id: 'commercial-retail',
    title: 'Sector 5: Destination Centre I & II Commercial District',
    tagline: 'Over 500,000 Sq. Ft. of Retail, Banking & Gastronomy',
    description: 'Twin commercial hubs catering to everyday shopping and lifestyle leisure. Featuring supermarkets, banks, diagnostic labs, restaurants, and electronics showrooms.',
    landmarks: ['Destination Centre I Shopping Mall', 'Destination Centre II Lifestyle Hub', 'HDFC / SBI / ICICI Bank Branches & ATMs', 'Daily Convenience Markets'],
    color: '#f59e0b',
    icon: '🛍️'
  },
  {
    id: 'sports-symphony',
    title: 'Sector 6: Kridaangan Sports & Symphony IT Park',
    tagline: '15+ Professional Sports Arenas & Integrated Employment',
    description: 'World-class sports infrastructure alongside Symphony IT Park, enabling a sustainable walk-to-work lifestyle without stepping outside the secured township perimeter.',
    landmarks: ['Kridaangan Sports Complex (Cricket, Football, Tennis)', 'Semi-Olympic Swimming Arena', 'Symphony IT Park (1.5M Sq. Ft. Office Space)', 'Skating Rink & Badminton Academy'],
    color: '#6366f1',
    icon: '⚽'
  }
];

export default function MasterPlanPage() {
  const masterPlanSchema: any = {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    "@id": `${SITE_CONFIG.baseUrl}/master-plan/#project`,
    "name": "Nanded City Township 700-Acre Master Plan",
    "description": "Comprehensive 700-acre master plan and sector layout of Nanded City Township Pune on Sinhagad Road.",
    "url": `${SITE_CONFIG.baseUrl}/master-plan/`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nanded City Township, Sinhagad Road",
      "addressLocality": "Pune",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "containsPlace": SECTORS.map(s => ({
      "@type": "Place",
      "name": s.title,
      "description": s.description
    }))
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(masterPlanSchema) }}
      />

      {/* Hero Header */}
      <section style={{ backgroundColor: '#0f172a', padding: '130px 0 60px', color: '#fff' }}>
        <div className="container">
          <Breadcrumbs items={[
            { name: 'Home', href: '/' },
            { name: '700-Acre Master Plan', href: '/master-plan/', current: true }
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
              700-Acre Master Urban Planning
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
              Nanded City Master Plan & Sector Layout Directory
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '32px' }}>
              Designed around principles of environmental sustainability, self-reliance, and pedestrian freedom. Explore how the 700-acre masterplan integrates 20 residential clusters, ICSE schools, commercial hubs, sports stadiums, and IT parks.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', maxWidth: '850px' }}>
              {[
                { val: '700 Acres', lbl: 'Master Township Land' },
                { val: '70%', lbl: 'Open & Green Cover' },
                { val: '20 Clusters', lbl: 'Towers & Plotted Enclaves' },
                { val: '15,000+', lbl: 'Resident Families' },
                { val: '100% Zero-Discharge', lbl: 'Eco Infrastructure' }
              ].map(m => (
                <div key={m.lbl} style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{m.val}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Master Plan Overview Banner */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: '#0f172a', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '60px 40px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)', marginBottom: '12px' }}>
              Master Urban Plan Framework
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '16px', maxWidth: '700px' }}>
              A Self-Sustaining City Within Pune
            </h2>
            <p style={{ maxWidth: '680px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '32px' }}>
              Nanded City is arranged along a central 45-meter concrete spine road. All residential sectors are buffered by manicured green belts, ensuring zero through-traffic in private residential enclaves.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link 
                href="/projects/"
                style={{ 
                  backgroundColor: 'var(--accent-gold)', 
                  color: '#000', 
                  padding: '12px 28px', 
                  borderRadius: '100px', 
                  fontWeight: '700', 
                  textDecoration: 'none',
                  fontSize: '0.92rem'
                }}
              >
                Explore All 20 Clusters →
              </Link>
              <Link 
                href="/infrastructure/"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  color: '#fff', 
                  padding: '12px 28px', 
                  borderRadius: '100px', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                700-Acre Infrastructure Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sector by Sector Breakdown */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Master Layout Architecture
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '8px 0 16px', fontWeight: '800' }}>
              6 Master Sectors of Nanded City
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
              Inspect configuration details, cluster classifications, and civic amenities organized across distinct functional zones.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {SECTORS.map((sector, idx) => (
              <ScrollReveal key={sector.id} delay={idx * 0.05}>
                <div style={{
                  padding: '36px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#f8fafc',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span style={{ fontSize: '2.2rem', padding: '12px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                        {sector.icon}
                      </span>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: '800', margin: 0 }}>
                          {sector.title}
                        </h3>
                        <span style={{ fontSize: '0.88rem', color: sector.color, fontWeight: '700' }}>
                          {sector.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px', maxWidth: '850px' }}>
                    {sector.description}
                  </p>

                  {/* Sector Clusters */}
                  {sector.clusters && (
                    <div>
                      <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', color: '#64748b', marginBottom: '12px' }}>
                        Residential Clusters in this Sector:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                        {sector.clusters.map(cid => {
                          const clusterData = clusters.find(c => c.id === cid);
                          if (!clusterData) return null;
                          return (
                            <Link
                              key={cid}
                              href={`/cluster/${cid}/`}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '12px 18px',
                                backgroundColor: '#fff',
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <div>
                                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#0f172a' }}>{clusterData.name}</div>
                                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{clusterData.bhk}</div>
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{clusterData.price}</div>
                                <span style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: '600' }}>View Details →</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Sector Landmarks */}
                  {sector.landmarks && (
                    <div>
                      <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', color: '#64748b', marginBottom: '12px' }}>
                        Key Facilities & Institutions:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {sector.landmarks.map(lm => (
                          <span
                            key={lm}
                            style={{
                              padding: '8px 16px',
                              backgroundColor: '#fff',
                              borderRadius: '100px',
                              border: '1px solid #e2e8f0',
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              color: '#334155'
                            }}
                          >
                            📍 {lm}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Navigation CTA */}
      <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
            Schedule an Authorized Guided Walkthrough
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', margin: '10px 0 16px' }}>
            Experience the 700-Acre Township in Person
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Arrange a private golf-cart tour of all ongoing towers, sample flats, schools, and plotted villa enclaves with authorized township advisors.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/contact/"
              style={{
                backgroundColor: 'var(--accent-gold)',
                color: '#000',
                padding: '14px 32px',
                borderRadius: '100px',
                fontWeight: '800',
                fontSize: '0.95rem',
                textDecoration: 'none'
              }}
            >
              Book Guided Site Visit →
            </Link>
            <Link
              href="/floor-plans/"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: '100px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              Floor Plan Vault →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
