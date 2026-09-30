import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import EmiCalculator from '../components/EmiCalculator';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Nanded City EMI & Stamp Duty Calculator 2026 | Maharashtra 7% Registration Estimator',
  description: 'Calculate monthly home loan EMI, down payment, total interest, and exact Maharashtra 7% Stamp Duty + Registration charges for 2, 2.5, 3 & 4.5 BHK flats in Nanded City Township Pune.',
  keywords: 'Nanded City EMI calculator, Nanded City home loan calculator, flat registration charges Pune 2026, Maharashtra stamp duty Pune, Nanded City price list emi, SBI home loan Nanded City, HDFC loan interest rate, Saajgiri EMI',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/emi-calculator/`,
  },
};

export default function EmiCalculatorPage() {
  const faqSchema: any = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Stamp Duty and Registration charge in Pune for Nanded City flats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For properties in Pune (including Nanded City Township), the total stamp duty is 7% (comprising 6% Maharashtra Stamp Duty + 1% Pune Metro Cess). In addition, a flat Government Registration fee of ₹30,000 applies for properties valued over ₹30 Lakhs."
        }
      },
      {
        "@type": "Question",
        "name": "Is GST applicable on Nanded City residential properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GST of 5% applies to under-construction residential properties (like Saajgiri and Aalaap). Ready-to-move clusters with an Occupancy Certificate (OC) or resale properties (such as Asawari, Sargam, and Bageshree) are 100% exempt from GST."
        }
      },
      {
        "@type": "Question",
        "name": "Which banks provide home loans for Nanded City Township projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All residential clusters in Nanded City are MahaRERA registered and approved by leading financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, and LIC Housing Finance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum down payment required for Nanded City apartments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under RBI guidelines, banks can finance up to 80% to 90% of the agreement value depending on the ticket size. The standard down payment is 10% to 20% of the base property value."
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
            { name: 'EMI & Stamp Duty Calculator', href: '/emi-calculator/', current: true }
          ]} />

          <div style={{ maxWidth: '850px', marginTop: '24px' }}>
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
              Financial Intelligence & Planning
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
              Nanded City Home Loan EMI & Stamp Duty Calculator
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '32px' }}>
              Plan your investment with precision. Estimate monthly loan outlays, interest costs, and exact Maharashtra Government Stamp Duty (6% + 1% Pune Metro Cess) across all 20 ongoing and ready clusters in Nanded City Township.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <EmiCalculator />
        </div>
      </section>

      {/* Financial Knowledge Base & Guide */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
            Homebuyer Financial Guide
          </span>
          <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0 24px', fontWeight: '800' }}>
            Understanding Government Costs & Financing in Nanded City
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#475569', lineHeight: '1.8' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                1. Maharashtra Stamp Duty & Metro Cess (Total 7%)
              </h3>
              <p>
                In Pune urban jurisdiction, property registrations are subject to a base 6% Maharashtra Stamp Duty plus a 1% Pune Metro Cess levied by the State Government, making the effective rate 7%. Additionally, a fixed registration charge of ₹30,000 applies to residential properties priced over ₹30 Lakhs.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                2. Goods and Services Tax (GST) Exemptions
              </h3>
              <p>
                Under Indian tax regulations, buyers purchasing ready-to-move apartments with an Occupancy Certificate (OC) or resale properties in societies like Asawari, Sargam, and Pancham pay <strong>0% GST</strong>. For ongoing launches such as Saajgiri and Aalaap, a concessional 5% GST on the base agreement applies without Input Tax Credit.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                3. Tax Deductions Under Section 80C & Section 24(b)
              </h3>
              <p>
                Homebuyers can claim annual income tax deductions up to ₹1.5 Lakhs on principal repayment under Section 80C, and up to ₹2.0 Lakhs on home loan interest paid for self-occupied properties under Section 24(b) of the Income Tax Act.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                4. Bank Approvals & Priority Sanctions
              </h3>
              <p>
                All 20 clusters in Nanded City have pre-sanctioned project approvals with SBI, HDFC, ICICI, and Axis Bank. This pre-approval ensures swift legal verification, faster disbursement, and preferential interest rates starting at 8.40% p.a.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '50px', padding: '32px', borderRadius: '16px', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: '700', marginBottom: '4px' }}>
                Need Custom Financial Structuring?
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                Speak directly with our authorized home finance specialists for bank comparisons and cost sheets.
              </p>
            </div>
            <Link
              href="/contact/"
              style={{
                padding: '12px 28px',
                borderRadius: '100px',
                backgroundColor: '#0f172a',
                color: '#fff',
                fontWeight: '700',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              Contact Advisory Desk →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
