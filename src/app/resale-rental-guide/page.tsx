import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Nanded City Resale & Rental Guide 2026 | Rate Card, Society NOC & Yields',
  description: 'Comprehensive 2026 Resale and Rental Guide for Nanded City Township Pune. Inspect 1, 2, 3 BHK rent rate cards, maintenance charges, society transfer NOC procedures, and capital growth data.',
  keywords: 'Nanded City resale flats, Nanded City rent rates 2026, Nanded City 2 BHK rent, Nanded City maintenance charges, Nanded City society NOC, resale flats buying guide Pune, Asawari resale, Sargam rental yield',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/resale-rental-guide/`,
  },
};

const RENTAL_MATRIX = [
  {
    type: '1 BHK (Compact)',
    clusters: 'Janaranjani, Mangal Bhairav',
    carpet: '480 – 580 sq.ft.',
    rentUnfurnished: '₹12,000 – ₹14,000',
    rentFurnished: '₹16,000 – ₹18,500',
    deposit: '₹35,000 – ₹50,000',
    yield: '4.2% – 4.8%'
  },
  {
    type: '2 BHK (Regular)',
    clusters: 'Pancham, Bageshree, Sur, Madhuvanti',
    carpet: '710 – 850 sq.ft.',
    rentUnfurnished: '₹18,000 – ₹22,000',
    rentFurnished: '₹24,000 – ₹28,000',
    deposit: '₹60,000 – ₹80,000',
    yield: '3.8% – 4.3%'
  },
  {
    type: '2.5 & 3 BHK (Spacious)',
    clusters: 'Asawari, Sargam, Lalit, Kalashree',
    carpet: '1,050 – 1,450 sq.ft.',
    rentUnfurnished: '₹26,000 – ₹32,000',
    rentFurnished: '₹35,000 – ₹42,000',
    deposit: '₹80,000 – ₹1,20,000',
    yield: '3.6% – 4.0%'
  },
  {
    type: '3.5 & 4.5 BHK (Luxury)',
    clusters: 'Harmony, Shubh Kalyan',
    carpet: '1,650 – 2,400 sq.ft.',
    rentUnfurnished: '₹40,000 – ₹52,000',
    rentFurnished: '₹55,000 – ₹70,000',
    deposit: '₹1,50,000 – ₹2,00,000',
    yield: '3.4% – 3.8%'
  },
  {
    type: 'NA Villa / Bungalow',
    clusters: 'Melody, Rhythm, Dhanashree',
    carpet: '2,400+ sq.ft. Built-Up',
    rentUnfurnished: '₹55,000 – ₹75,000',
    rentFurnished: '₹85,000 – ₹1,20,000',
    deposit: '₹2,50,000 – ₹3,50,000',
    yield: '3.2% – 3.6%'
  }
];

export default function ResaleRentalGuidePage() {
  const faqSchema: any = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the standard procedure to buy a resale flat in Nanded City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The resale process involves: 1) Title verification of the seller's original registered agreement and Index II; 2) Society NOC application and verification of zero outstanding maintenance dues; 3) Execution of the Sale Deed with 7% Maharashtra Stamp Duty and ₹30,000 registration fee; 4) Transfer of the Cooperative Housing Society Share Certificate; 5) Mutation of Property Tax in PMC records."
        }
      },
      {
        "@type": "Question",
        "name": "What are the average maintenance charges in Nanded City societies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maintenance charges typically range from ₹2.50 to ₹3.80 per sq. ft. of carpet area per month. This covers 24x7 treated water supply from the centralized Water Treatment Plant (WTP), sewage treatment, clubhouse upkeep, CCTV surveillance, security personnel, and common spine road landscaping."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the typical tenants in Nanded City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Due to its on-premise ICSE school, clean air, and proximity to the Sinhagad Road flyover, tenants comprise primarily IT professionals working in Symphony IT Park, Hinjewadi, and Kothrud, doctors from Sinhgad Institutes and Sahyadri Hospital, and faculty from nearby universities."
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
            { name: 'Resale & Rental Guide 2026', href: '/resale-rental-guide/', current: true }
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
              Market Intelligence & Advisory
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
              Nanded City Resale & Rental Intelligence Guide 2026
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '32px' }}>
              The definitive market handbook for buyers, sellers, and landlords in Nanded City Township. Explore current rental yields, ready-possession resale price trends, maintenance tariffs, and society transfer protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Rate Card Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              2026 Rental Benchmark
            </span>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', margin: '8px 0 16px', fontWeight: '800' }}>
              Current Rental Yields & Monthly Tariffs
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
              Based on audited lease agreements executed across Nanded City residential societies in Q1–Q3 2026.
            </p>
          </div>

          {/* Table Container */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', overflowX: 'auto', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: '#fff', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <th style={{ padding: '18px 24px' }}>Configuration</th>
                  <th style={{ padding: '18px 20px' }}>Key Clusters</th>
                  <th style={{ padding: '18px 20px' }}>Carpet Area</th>
                  <th style={{ padding: '18px 20px' }}>Unfurnished Rent</th>
                  <th style={{ padding: '18px 20px' }}>Furnished Rent</th>
                  <th style={{ padding: '18px 24px' }}>Gross Rental Yield</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.92rem', color: '#334155' }}>
                {RENTAL_MATRIX.map((row, idx) => (
                  <tr key={row.type} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: idx % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#0f172a' }}>{row.type}</td>
                    <td style={{ padding: '18px 20px', color: '#64748b', fontSize: '0.85rem' }}>{row.clusters}</td>
                    <td style={{ padding: '18px 20px' }}>{row.carpet}</td>
                    <td style={{ padding: '18px 20px', fontWeight: '600' }}>{row.rentUnfurnished}</td>
                    <td style={{ padding: '18px 20px', fontWeight: '700', color: 'var(--primary-green)' }}>{row.rentFurnished}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '800', color: 'var(--accent-gold)' }}>{row.yield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Resale Procedure & Society NOC Guide */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
            Regulatory Compliance & Transfer
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0 24px', fontWeight: '800' }}>
            Nanded City Resale Process & Society NOC Checklist
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#475569', lineHeight: '1.8' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                Step 1: Title Verification & Encumbrance Check
              </h3>
              <p>
                Obtain a 30-year Search Report and Search Title Certificate through an authorized real estate advocate. Verify that the original registered agreement, Index II, and possession letter are free of any active bank liens or pending civil litigation.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                Step 2: Society No Objection Certificate (NOC) & Dues Clearance
              </h3>
              <p>
                The seller applies for an official Society NOC from the Cooperative Housing Society (CHS) committee. The society issues a No Dues Certificate confirming zero outstanding maintenance charges or sinking fund liabilities.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                Step 3: Registration at Haveli Sub-Registrar Office
              </h3>
              <p>
                Payment of 7% Maharashtra Stamp Duty and ₹30,000 Registration Fee. Both parties appear at the Joint Sub-Registrar office (or execute through authorized e-registration) with two witnesses and biometric Aadhaar validation.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                Step 4: Share Certificate Endorsement & Property Tax Mutation
              </h3>
              <p>
                Submit the registered Sale Deed and Index II to the CHS managing committee to endorse the new owner&apos;s name on the Share Certificate. Subsequently, apply for PMC Property Tax (Ghar Patti) name transfer to reflect the buyer&apos;s legal title.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '50px', padding: '36px', borderRadius: '20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '800', marginBottom: '6px' }}>
                Looking to Buy, Sell or Lease in Nanded City?
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
                Get verified market valuations, pre-screened tenants, and end-to-end legal documentation.
              </p>
            </div>
            <Link
              href="/contact/"
              style={{
                padding: '14px 30px',
                borderRadius: '100px',
                backgroundColor: 'var(--accent-gold)',
                color: '#000',
                fontWeight: '800',
                textDecoration: 'none',
                fontSize: '0.92rem'
              }}
            >
              Consult Resale & Rental Desk →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
