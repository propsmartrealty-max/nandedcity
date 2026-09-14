import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Privacy Policy | Nanded City Township Pune",
  description: "Privacy Policy for Nanded City Township Pune partner portal (PropSmart Realty, MahaRERA A7744009295). Learn how we handle your enquiry data and privacy.",
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/privacy-policy/`,
  },
};

export default function PrivacyPolicy() {
  const policySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.baseUrl}/privacy-policy/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/privacy-policy/`,
    "name": "Privacy Policy - Nanded City Township Pune",
    "description": "Privacy practices, data protection, and MahaRERA authorized marketing terms for Nanded City Township residential advisory.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policySchema) }}
      />
      <section style={{ backgroundColor: '#0f172a', padding: '120px 0 60px', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <Breadcrumbs 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Privacy Policy', href: '/privacy-policy/', current: true }
            ]} 
          />
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: '800', marginBottom: '16px', marginTop: '24px' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
            Last Updated: May 2026. Your privacy and data confidentiality are of paramount importance to us.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container" style={{ maxWidth: '840px', color: '#334155', lineHeight: '1.8', fontSize: '1.05rem' }}>
          
          <div style={{ padding: '20px 24px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)', marginBottom: '36px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#0f172a' }}>
              <strong>Channel Partner Transparency Notice:</strong> This website is maintained by <strong>{SITE_CONFIG.brand.organizationName}</strong>, an Authorized Channel Partner for Nanded City Township Pune (MahaRERA Registration No: <strong>{SITE_CONFIG.brand.rera}</strong>). We facilitate independent residential advisory and site-visit assistance for prospective homebuyers.
            </p>
          </div>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>1. Information We Collect</h2>
          <p>
            When you voluntarily submit an enquiry form, request a brochure, schedule a site visit, or contact us via WhatsApp/Phone, we collect basic contact parameters, including:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li>Your full name</li>
            <li>Phone number / WhatsApp contact number</li>
            <li>Email address</li>
            <li>Property preference (e.g., 2 BHK, 3 BHK, or NA Bungalow Plot) and preferred cluster</li>
            <li>Approximate budget range and timeframe for purchase</li>
          </ul>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
          <p>
            The personal details you provide are strictly utilized to:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li>Respond to your direct property enquiries and provide verified price sheets, floor plans, and brochures.</li>
            <li>Coordinate site visits to Nanded City Township Pune with certified residential executives.</li>
            <li>Send critical transactional notifications regarding project updates, MahaRERA stage approvals, and exclusive launch offers via SMS, Phone call, or WhatsApp.</li>
            <li>Comply with regulatory requirements under MahaRERA and Indian Information Technology laws.</li>
          </ul>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>3. Zero Spam & Data Confidentiality</h2>
          <p>
            We adhere to a strict <strong>Zero Third-Party Data Sharing Policy</strong>. We do not sell, rent, lease, or monetize your contact information to external marketing agencies or unrelated third parties. Your details are accessed solely by authorized PropSmart Realty property advisors.
          </p>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>4. Cookies & Analytics</h2>
          <p>
            We utilize first-party analytics cookies (via Google Analytics / Tag Manager and Cloudflare Web Analytics) to understand aggregate traffic trends, micro-market visitor interests, and technical performance metrics (such as page speed and Core Web Vitals). These analytics do not store personally identifiable financial or sensitive personal data.
          </p>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>5. Opt-Out & Communication Preferences</h2>
          <p>
            You have the right to unsubscribe or update your contact preferences at any time. To opt out of telephone or WhatsApp communications, reply &quot;STOP&quot; to any WhatsApp message, or email us at <a href={`mailto:${SITE_CONFIG.contact.email}`} style={{ color: 'var(--accent-gold)' }}>{SITE_CONFIG.contact.email}</a> with your phone number and request.
          </p>

          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '36px', marginBottom: '16px' }}>6. Contact the Grievance Officer</h2>
          <p>
            For any queries regarding this Privacy Policy or your personal information, you may contact:
          </p>
          <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '12px', marginTop: '16px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#0f172a' }}>{SITE_CONFIG.brand.organizationName}</p>
            <p style={{ margin: '0 0 8px 0' }}>MahaRERA Reg: {SITE_CONFIG.brand.rera}</p>
            <p style={{ margin: '0 0 8px 0' }}>Nanded City Township, Sinhagad Road, Pune, MH 411041</p>
            <p style={{ margin: 0 }}>Phone: <a href={`tel:${SITE_CONFIG.contact.phoneNumeric}`} style={{ color: 'var(--primary-green)', fontWeight: '600' }}>{SITE_CONFIG.contact.phone}</a></p>
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href="/" style={{ color: 'var(--accent-gold)', fontWeight: '700', textDecoration: 'none' }}>
              ← Return to Nanded City Homepage
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
