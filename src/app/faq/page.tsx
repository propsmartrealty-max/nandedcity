import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { homeFaqs, FAQItem } from '@/data/faqs';
import { SITE_CONFIG } from '@/config/site';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import FaqClientDirectory from './FaqClientDirectory';

export const metadata: Metadata = {
  title: "Nanded City Township Pune FAQs | 2026 Comprehensive Buyer & Resident Guide",
  description: "Official FAQ directory for Nanded City Township Pune. Detailed answers on 2, 3 & 4 BHK prices, MahaRERA numbers, resale flat procedures, school admissions, water supply, and Sinhagad Road connectivity.",
  keywords: "Nanded City FAQs, Nanded City Pune questions, Nanded City resale flat buying process, Nanded City water supply Khadakwasla, Nanded City Public School ICSE admissions, Nanded City maintenance charges, Nanded City MahaRERA numbers, Saajgiri RERA, Harmony RERA, Melody bungalow plots",
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/faq/`,
  },
  openGraph: {
    title: "Nanded City Township Pune FAQs | Comprehensive Buyer & Resident Handbook",
    description: "Official FAQ directory for Nanded City Township Pune. Detailed answers on prices, MahaRERA numbers, resale flat procedures, and infrastructure.",
    url: `${SITE_CONFIG.baseUrl}/faq/`,
    siteName: "Nanded City Township Pune",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#0f172a', padding: '120px 0 60px', color: '#fff' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Frequently Asked Questions', href: '/faq/', current: true },
            ]}
          />
          <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)', marginTop: '24px' }}>
            Authority Knowledge Repository
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', margin: '12px 0 16px', lineHeight: '1.2' }}>
            Nanded City Pune Knowledge & FAQ Center
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '780px', lineHeight: '1.6', marginBottom: '32px' }}>
            Everything prospective homebuyers, resale investors, and township residents need to know about MahaRERA registrations, carpet areas, 2026 pricing, ICSE schools, Khadakwasla water autonomy, and secondary market transfers.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ padding: '12px 20px', borderRadius: '100px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.88rem' }}>
              ✓ 24 Verified Answers
            </div>
            <div style={{ padding: '12px 20px', borderRadius: '100px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.88rem' }}>
              ✓ MahaRERA & Bank Approved
            </div>
            <div style={{ padding: '12px 20px', borderRadius: '100px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.88rem' }}>
              ✓ Updated for 2026 Market
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Client Section */}
      <FaqClientDirectory faqs={homeFaqs} />

      {/* Consultation Banner */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
            Have a Specific Question About Nanded City?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.7', marginBottom: '32px' }}>
            Speak directly with an authorized township property advisor. Get live availability of ready-to-move flats, ongoing towers, or NA bungalow plots.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneNumeric}`}
              style={{
                backgroundColor: '#0f172a',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
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
                padding: '16px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
              }}
            >
              📱 WhatsApp Query
            </a>
            <Link
              href="/projects/"
              style={{
                backgroundColor: '#fff',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                padding: '16px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
              }}
            >
              Explore 20 Clusters →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
