import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import DynamicClusterGrid from '@/app/components/DynamicClusterGrid';
import { clusters } from '@/data/clusters';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { Cluster } from '@/types';
import { SITE_CONFIG } from '@/config/site';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} Residential Clusters | All 20 Ongoing & Completed Projects`,
  description: `Explore all 20 residential clusters in ${SITE_CONFIG.name}, Sinhagad Road, Pune. Comprehensive directory of 2, 2.5, 3, 3.5, 4.5 BHK luxury flats and branded NA bungalow plots across the 700-acre master township with floor plans, prices, and MahaRERA details.`,
  keywords: "Pune Real Estate Market, Central Pune Real Estate, Sinhgad Road Real Estate, Top Real Estate in Pune, Nanded City Projects, Ongoing projects in Pune, Ready to Move projects Pune, Nanded City 20 clusters, Saajgiri, Harmony, Aalaap, Melody, Asawari, Sargam, Pancham",
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  const ongoingClusters = clusters.filter((c: Cluster) => c.type === 'new');
  const completedClusters = clusters.filter((c: Cluster) => c.type === 'completed');

  const itemListSchema: any = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nanded City Township Pune Residential Clusters",
    "description": "Comprehensive list of all 20 residential clusters in Nanded City Township Pune.",
    "numberOfItems": clusters.length,
    "itemListElement": clusters.map((c, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": c.name,
      "url": `${SITE_CONFIG.baseUrl}/cluster/${c.id}`
    }))
  };
  
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#0f172a', padding: '120px 0 60px', color: '#fff' }}>
        <div className="container">
          <Breadcrumbs 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Residential Clusters', href: '/projects', current: true }
            ]} 
          />
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', marginBottom: '16px', marginTop: '24px' }}>
            Nanded City Residential Portfolio
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '780px', lineHeight: '1.6', marginBottom: '32px' }}>
            Explore the complete 700-acre residential ecosystem of Nanded City Township Pune. From modern high-rise towers to tranquil ready-possession societies and exclusive NA bungalow plots.
          </p>

          {/* Key Stats Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', maxWidth: '820px' }}>
            <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-gold)' }}>20</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Clusters</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#22c55e' }}>8</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>New Launches & Plots</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-gold)' }}>12</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>Ready Possession</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#38bdf8' }}>15,000+</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>Inhabited Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing & New Launches Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              MahaRERA Registered Launches
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0 12px', fontWeight: '800' }}>
              Ongoing Towers & Bungalow Plots ({ongoingClusters.length} Projects)
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '700px' }}>
              Under-construction luxury residences and build-ready NA villa plots with complete MahaRERA compliance, institutional backing, and modern lifestyle amenities.
            </p>
          </div>
          
          <DynamicClusterGrid clusters={ongoingClusters} />
        </div>
      </section>

      {/* Completed & Ready-to-Move Registry Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-green)' }}>
              Verified Handover & Thriving Societies
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0 12px', fontWeight: '800' }}>
              Ready to Move-In Clusters & Resale Registry ({completedClusters.length} Projects)
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '700px' }}>
              Fully inhabited residential communities in Nanded City. Ideal for buyers seeking immediate possession, mature township greens, and verified resale opportunities.
            </p>
          </div>
          
          <DynamicClusterGrid clusters={completedClusters} />
        </div>
      </section>

      {/* Master 20-Cluster Specifications Matrix Table */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '760px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Complete Directory
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0 12px', fontWeight: '800' }}>
              All 20 Nanded City Clusters Specifications
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Compare carpet area, configurations, prices, and MahaRERA registration details across the entire Nanded City portfolio.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '750px', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: '#fff' }}>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Cluster Name</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Configuration</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Carpet / Plot Area</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Status</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Starting Price</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>MahaRERA / Registry</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {clusters.map((c, idx) => (
                  <tr 
                    key={c.id} 
                    style={{ 
                      backgroundColor: idx % 2 === 0 ? '#fff' : '#f8fafc',
                      borderBottom: '1px solid #e2e8f0',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <td style={{ padding: '16px 20px', fontWeight: '700' }}>
                      <Link href={`/cluster/${c.id}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                        {c.name}
                      </Link>
                    </td>
                    <td style={{ padding: '16px 20px', color: '#475569' }}>{c.bhk}</td>
                    <td style={{ padding: '16px 20px', color: '#475569' }}>{c.area}</td>
                    <td style={{ padding: '16px 20px' }}>
                      <span style={{ 
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        backgroundColor: c.type === 'new' ? '#e0f2fe' : '#dcfce7',
                        color: c.type === 'new' ? '#0369a1' : '#15803d'
                      }}>
                        {c.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px', fontWeight: '700', color: 'var(--accent-gold)' }}>{c.price}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.82rem', color: '#64748b' }}>
                      {c.type === 'new' && c.rera !== 'Completed' ? (
                        <a 
                          href="https://maharera.maharashtra.gov.in/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '600' }}
                        >
                          {c.rera} ↗
                        </a>
                      ) : (
                        <a 
                          href="https://maharera.maharashtra.gov.in/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: '600' }}
                        >
                          Delivered / Compliant ↗
                        </a>
                      )}
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <Link 
                        href={`/cluster/${c.id}`}
                        style={{ 
                          padding: '6px 14px',
                          backgroundColor: '#0f172a',
                          color: '#fff',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                          display: 'inline-block'
                        }}
                      >
                        View Cluster →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hyperlocal Connectivity & Location Mesh */}
      <section style={{ padding: '60px 0', backgroundColor: '#f1f5f9', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Regional Connectivity
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginTop: '6px', fontWeight: '800' }}>
              Explore Properties Near Major Pune Hubs
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Nanded City enjoys seamless connectivity to Pune&apos;s prime business, commercial, and residential districts.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {locations.map((loc) => (
              <Link 
                key={loc.slug}
                href={`/near/${loc.slug}`}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  borderRadius: '100px',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease'
                }}
              >
                📍 Flats Near {loc.name} ({loc.distance})
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--accent-gold)', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px' }}>Ready for a Priority Site Visit?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
            Schedule an exclusive guided tour of sample flats and ready-to-move clusters in Nanded City.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={`tel:${SITE_CONFIG.contact.phoneNumeric}`} 
              style={{ 
                backgroundColor: '#0f172a', 
                color: '#fff', 
                padding: '18px 36px', 
                borderRadius: '100px', 
                textDecoration: 'none', 
                fontWeight: '700', 
                fontSize: '1.1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              📞 Call {SITE_CONFIG.contact.phone}
            </a>
            <a 
              href={SITE_CONFIG.contact.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                backgroundColor: '#25D366', 
                color: '#fff', 
                padding: '18px 36px', 
                borderRadius: '100px', 
                textDecoration: 'none', 
                fontWeight: '700', 
                fontSize: '1.1rem',
                boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
              }}
            >
              📱 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

