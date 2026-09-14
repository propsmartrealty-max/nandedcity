import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Terms of Use & Legal Disclaimer | Nanded City Township Pune",
  description: "Terms of Use and MahaRERA authorized partner disclaimers for Nanded City Township Pune partner portal (PropSmart Realty, MahaRERA A7744009295).",
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/terms/`,
  },
};

export default function TermsOfUse() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.baseUrl}/terms/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/terms/`,
    "name": "Terms of Use - Nanded City Township Pune",
    "description": "Terms and conditions, regulatory disclosures, and channel partner disclaimer for Nanded City residential advisory.",
    "publisher": {
      "@type": "RealEstateAgent",
      "@id": `${SITE_CONFIG.baseUrl}/#organization`,
      "name": SITE_CONFIG.brand.organizationName,
      "telephone": SITE_CONFIG.contact.phoneNumeric
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <section style={{ backgroundColor: '#0f172a', padding: '120px 0 60px', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <Breadcrumbs 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Terms of Use', href: '/terms/', current: true }
            ]} 
          />
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: '800', marginBottom: '16px', marginTop: '24px' }}>
            Terms of Use & Disclaimer
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
            Last Updated: May 2026. Please read these terms carefully prior to browsing or submitting enquiries.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container" style={{ maxWidth: '840px', color: '#334155', lineHeight: '1.8', fontSize: '1.05rem' }}>
          
          <div style={{ padding: '24px', backgroundColor: '#fffbeb', borderRadius: '12px', borderLeft: '4px solid #d97706', marginBottom: '36px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#92400e', fontWeight: '700' }}>
              Important MahaRERA Channel Partner Disclosure
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#78350f' }}>
              <strong>PropSmart Realty</strong> (MahaRERA Registration No: <strong>{SITE_CONFIG.brand.rera}</strong>) operates as an <strong>Authorized Real Estate Channel Partner</strong> for Nanded City Township Pune. This platform is an independent marketing, information, and facilitation portal. It is not the official developer website of Nanded City Development and Construction Co. Ltd.
            </p>
          </div>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>1. Representational Nature of Content</h2>
          <p>
            All renderings, photographs, floor plans, layout images, elevations, and specifications displayed across this website are artistic impressions and representational concepts. Actual site construction, materials, and fixtures are governed solely by the registered agreement for sale executed directly between the purchaser and the developer.
          </p>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>2. Pricing & Availability</h2>
          <p>
            Starting prices, indicative EMIs, stamp duty estimations, and unit availability mentioned on the website are subject to revision without prior notice by the developer. All final prices are confirmed exclusively at the time of official booking and allotment.
          </p>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>3. MahaRERA Verification</h2>
          <p>
            Under Maharashtra Real Estate Regulatory Authority (MahaRERA) guidelines, all ongoing residential and plotted developments in Nanded City are duly registered. Homebuyers are encouraged to independently verify all project registration certificates, approved layout sanctions, and quarterly progress reports on the official MahaRERA website at <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>maharera.maharashtra.gov.in</a>.
          </p>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>4. Limitation of Liability</h2>
          <p>
            In no event shall PropSmart Realty or its representatives be held liable for any indirect, consequential, or incidental damages arising out of the use of or reliance on information presented on this platform. Users are advised to conduct due diligence and verify legal documentation with their independent legal counsel before finalizing property transactions.
          </p>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>5. Intellectual Property Rights</h2>
          <p>
            Brand names, project titles (e.g., Saajgiri, Harmony, Aalaap, Melody, Rhythm, Asawari, Sargam), and developer logos referenced on this website remain the sole intellectual property of Nanded City Development & Construction Co. Ltd. and their respective titleholders. Their use on this channel partner portal is strictly for descriptive identification purposes.
          </p>

          <div style={{ marginTop: '48px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/legal-compliance/" style={{ color: 'var(--primary-green)', fontWeight: '700', textDecoration: 'none' }}>
              View MahaRERA Compliance Registry →
            </Link>
            <Link href="/" style={{ color: 'var(--accent-gold)', fontWeight: '700', textDecoration: 'none' }}>
              Return to Homepage →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
