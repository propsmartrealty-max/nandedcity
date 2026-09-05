import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `About Nanded City Township Pune | Legacy, Infrastructure & Master Plan`,
  description: `Discover the 700-acre self-reliant ecosystem of Nanded City Township on Sinhagad Road, Pune. Learn about our schools, IT park, hospital, and sports facilities.`,
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/about-us`,
  },
};

export default function AboutUs() {
  const profileSchema: any = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": SITE_CONFIG.brand.organizationName,
      "description": `Authorized Channel Partner for Nanded City Township Pune.`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nanded City Township, Sinhagad Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411041",
        "addressCountry": "IN"
      }
    }
  };

  const comparisonSchema: any = {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": "Township vs Standalone Project Comparison"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([profileSchema, comparisonSchema]) }}
      />
      
      {/* Hero */}
      <section style={{ backgroundColor: '#0f172a', padding: '120px 0 80px', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'var(--accent-gold)', color: '#000', padding: '6px 14px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
            Our Legacy
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '24px', lineHeight: '1.1' }}>
            Building Pune&apos;s Future
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
            Following the astronomical success of Magarpatta City, the Nanded City Development team set out to transform Sinhagad Road. Today, it stands as a 700-acre ecosystem housing over 15,000 families.
          </p>
        </div>
      </section>

      {/* Infrastructure Power Sections */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)' }}>Township Infrastructure Ecosystem</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Four pillars that make Nanded City a self-reliant micro-city.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { title: 'NC Public School', desc: 'ICSE & State Board school within walking distance for every cluster resident.', icon: '🎓' },
              { title: 'Symphony IT Park', desc: 'Operational IT/LPO hub providing walk-to-work opportunities for thousands.', icon: '💼' },
              { title: 'Township Hospital', desc: 'Dedicated maternity and multispeciality healthcare facility inside the gate.', icon: '🏥' },
              { title: 'Kridaangan Sports', desc: '15+ professional sports courts including tennis, skating, and stadium.', icon: '⚽' }
            ].map((infra) => (
              <ScrollReveal key={infra.title} className="infra-card" style={{ padding: '30px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '20px' }}>{infra.icon}</span>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>{infra.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{infra.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence: Comparison Table */}
      <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#fff' }}>
        <div className="container">
          <ScrollReveal style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', textAlign: 'center' }}>Township vs. Standalone Projects</h2>
            <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <th style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Feature</th>
                    <th style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-gold)' }}>Nanded City (700 Acres)</th>
                    <th style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Standalone Project (2-5 Acres)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Green Spaces', nc: '200+ Acres', standalone: 'Minimal / Podium' },
                    { feature: 'School & Hospital', nc: 'Inside Township', standalone: 'External (3-5 km)' },
                    { feature: 'Security', nc: '3-Layer Entry/Cluster/CCTV', standalone: 'Single Gate' },
                    { feature: 'Traffic Control', nc: 'Internal signal systems', standalone: 'Direct Road Access' },
                    { feature: 'Water Self-Reliance', nc: 'Independent STP & Storage', standalone: 'Municipal Dependency' }
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: '600' }}>{row.feature}</td>
                      <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--accent-gold)' }}>{row.nc}</td>
                      <td style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)' }}>{row.standalone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy of Self-Reliance */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-cols-2" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <div style={{ position: 'relative', height: '450px', borderRadius: '16px', overflow: 'hidden' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                  alt="Nanded City Corporate Vision"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} style={{ paddingLeft: '40px' }}>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--primary-green)', marginBottom: '24px' }}>The Philosophy of Self-Reliance</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '16px' }}>
                A home is more than four walls. It requires an environment that nurtures education, health, and recreation. That is why Nanded City was conceptualized as a &quot;Self-Sustaining Eco-System&quot;.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px' }}>
                Our in-house <strong>Nanded City Public School</strong>, cutting-edge <strong>Symphony IT Park</strong>, fully operational Hospital, and the expansive <strong>Kridaangan sports complex</strong> ensure that residents never have to leave the township for daily premium necessities.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: 'var(--primary-green)' }}>700</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Acres of Layout</span>
                </div>
                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: 'var(--primary-green)' }}>15,000+</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Happy Families</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Authorized Advisory & MahaRERA Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-green)', marginBottom: '16px' }}>
              Why Choose an Authorized Advisory Partner?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>
              Navigating a 700-acre township with over a dozen active clusters can be overwhelming. As an Authorized Channel Partner, <strong>{SITE_CONFIG.brand.organizationName}</strong> provides 100% free, unbiased property guidance, direct developer pricing, and end-to-end MahaRERA documentation support.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', background: '#fff', padding: '16px 28px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '1.5rem' }}>📜</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>MahaRERA Registration</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Agent Reg. No: {SITE_CONFIG.brand.rera}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
