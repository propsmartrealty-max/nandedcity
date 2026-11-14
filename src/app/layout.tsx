import React from "react";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TransitionFrame from './components/TransitionFrame';
import DynamicHeader from './components/DynamicHeader';
import { ModalProvider } from './context/ModalContext';

const FloatingActionBar = dynamic(() => import('./components/FloatingActionBar'));
const StickyMobileCta = dynamic(() => import('./components/StickyMobileCta'));
const EnquiryModal = dynamic(() => import('./components/EnquiryModal'));
import { Organization, WebSite, WithContext } from 'schema-dts';
import { SITE_CONFIG } from '@/config/site';

import "./globals.css";


const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], 
  display: "swap",
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.seo.primaryKeywords,
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/`,
    languages: {
      'en-IN': `${SITE_CONFIG.baseUrl}/`,
      'mr-IN': `${SITE_CONFIG.baseUrl}/mr/`,
    },
  },
  verification: {
    google: [
      "EO-ezSz-FlhAk-eKdIWOB9xTRFXojS-rHXyMVZPAyQs",
      "xPwov9ckfykpu-uvWtHmHLCnhEXZDPLkjNMFeV5_-Xk",
    ],
    other: {
      me: [SITE_CONFIG.baseUrl],
      'geo.region': 'IN-MH',
      'geo.placename': 'Nanded City, Sinhagad Road, Pune',
      'geo.position': '18.4612;73.8015',
      'ICBM': '18.4612, 73.8015',
      'distribution': 'Global',
      'coverage': 'Worldwide',
    },
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    images: [SITE_CONFIG.brand.ogImage],
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.brand.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmEnabled = GTM_ID !== 'GTM-XXXXXXX';
  const organizationSchema: any = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_CONFIG.baseUrl}/#organization`,
    "name": SITE_CONFIG.brand.organizationName,
    "alternateName": `${SITE_CONFIG.brand.partnerStatus}: MahaRERA ${SITE_CONFIG.brand.rera}`,
    "url": `${SITE_CONFIG.baseUrl}/`,
    "logo": `${SITE_CONFIG.baseUrl}${SITE_CONFIG.brand.logo}`, 
    "image": SITE_CONFIG.brand.ogImage,
    "description": `${SITE_CONFIG.brand.organizationName} is an Authorised Marketing Partner: MahaRERA ${SITE_CONFIG.brand.rera} offering verified property advisory for Nanded City Township Pune.`,
    "telephone": SITE_CONFIG.contact.phoneNumeric,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nanded City Township, Sinhagad Road",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4612,
      "longitude": 73.8015
    },
    "priceRange": "₹45L - ₹2.5Cr",
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "Place", "name": "Sinhgad Road" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      "https://en.wikipedia.org/wiki/Nanded_City",
      "https://www.wikidata.org/wiki/Q16954933"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SITE_CONFIG.contact.phoneNumeric,
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "mr"]
    },
    "foundingDate": "2018",
    "knowsAbout": [
      "Real Estate Investment in Pune",
      "Pune Real Estate Market",
      "Sinhgad Road Real Estate",
      "Central Pune Real Estate",
      "700 Acres Integrated Township Pune",
      "Luxury Apartments Sinhagad Road",
      "NA Bungalow Plots Pune",
      "Collector Sanctioned NA Plots",
      "MahaRERA Registered Projects",
      "Township Living Pune",
      "2 BHK, 2.5 BHK, 3 BHK, 3.5 BHK, 4.5 BHK Luxury Flats Pune",
      "Resale Flats Nanded City",
      "Ready Possession Flats Pune",
      "Saajgiri Nanded City 3 BHK High-Rise",
      "Harmony Nanded City 3.5 & 4.5 BHK",
      "Aalaap-I Nanded City 2 & 3 BHK",
      "Melody Nanded City NA Plots",
      "Rhythm Nanded City Villa Plots",
      "Dhanashree Plots Nanded City",
      "Pancham Nanded City Phase 1 & 2",
      "Asawari, Sargam, Bageshree, Kalashree Nanded City",
      "Lalit, Sarang, Madhuvanti, Shubh Kalyan, Sur, Mangal Bhairav, Janaranjani",
      "Nanded City Public School ICSE",
      "Symphony IT Park Walk to Work",
      "Destination Center Shopping Malls",
      "Kridaangan Sports Complex"
    ]
  };

  // WebSite Schema with SearchAction — Sitelinks Search Box eligibility & Google Site Name
  const websiteSchema: any = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}/#website`,
    "name": "Nanded City Township Pune",
    "alternateName": [
      "Nanded City Pune",
      "Nanded City",
      "Nanded City Township"
    ],
    "url": `${SITE_CONFIG.baseUrl}/`,
    "description": "Comprehensive residential platform for Nanded City Township, Sinhagad Road, Pune — premium 2, 2.5, 3, 3.5 & 4.5 BHK flats and branded NA bungalow plots.",
    "publisher": {
      "@id": `${SITE_CONFIG.baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_CONFIG.baseUrl}/projects/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-IN"
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      {gtmEnabled && <GoogleTagManager gtmId={GTM_ID} />}
      {gaId && <GoogleAnalytics gaId={gaId} />}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
        <link rel="preload" as="image" href="/hero-banner-mobile.webp" media="(max-width: 768px)" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/hero-banner.webp" media="(min-width: 769px)" type="image/webp" fetchPriority="high" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.nanded-city.in" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${outfit.className} ${outfit.variable}`}>
        <ModalProvider>
          <DynamicHeader />

          <TransitionFrame>
            <main id="main-content" role="main">{children}</main>
          </TransitionFrame>

          <footer id="site-footer" role="contentinfo" style={{ backgroundColor: '#080f1e', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
              
              {/* Top 4-column grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '60px' }}>
                
                {/* Column 1: Brand */}
                <div>
                  <Image 
                    src="/nc-logo.webp" 
                    alt="Nanded City Township Pune Official Logo" 
                    width={180} height={50}
                    style={{ objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)', marginBottom: '20px' }}
                  />
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: '1.7', maxWidth: '240px', marginBottom: '24px' }}>
                    Pune&apos;s most aspiring township on Sinhagad Road near Khadakwasla dam. 700 Acres of curated, self-reliant luxury living near Anandnagar and Dhayari.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a href={`tel:${SITE_CONFIG.contact.phoneNumeric}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>📞 {SITE_CONFIG.contact.phone}</a>
                    <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: '0.85rem', textDecoration: 'none' }}>📱 {SITE_CONFIG.contact.whatsappPrompt}</a>
                  </div>

                </div>

                {/* Column 2: Residential Projects Hub */}
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>Residential Portfolio</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Saajgiri — Luxury 3 BHK', href: '/cluster/saajgiri/' },
                      { name: 'Harmony — 3.5 & 4.5 BHK', href: '/cluster/harmony/' },
                      { name: 'Aalaap-I — 2 & 3 BHK', href: '/cluster/aalaap-1/' },
                      { name: 'Melody — NA Villa Plots', href: '/cluster/melody-1/' },
                      { name: 'Asawari — Resale Flats', href: '/cluster/asawari/' },
                      { name: 'Sargam — High Rise Towers', href: '/cluster/sargam/' },
                      { name: 'Pancham — Phase 1 & 2', href: '/cluster/pancham/' },
                      { name: 'Bageshree — 2 BHK Towers', href: '/cluster/bageshree/' },
                      { name: 'Janaranjani — MHADA Flats', href: '/cluster/janaranjani/' },
                    ].map(p => (
                      <li key={p.name}>
                        <Link href={p.href} className="footer-link" style={{ fontWeight: '500', fontSize: '0.82rem' }}>{p.name}</Link>
                      </li>
                    ))}
                    <li style={{ marginTop: '6px' }}>
                      <Link href="/projects/" style={{ color: 'var(--accent-gold)', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>
                        All 20 Clusters & Specs →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Market Intelligence */}
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>Market Insights</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'Bungalow Plots investment Pune', href: '/blog/branded-na-bungalow-plots-nanded-city-community/' },
                      { name: 'Nanded City Price List 2026', href: '/blog/nanded-city-pune-price-list-2026-carpet-area-cost-sheet/' },
                      { name: 'Buyer & Resident FAQs 2026', href: '/faq/' },
                      { name: 'Nanded City vs Magarpatta City', href: '/blog/nanded-city-vs-magarpatta-city-comparison-analysis/' },
                      { name: 'Resale Flats 2026 Buying Guide', href: '/blog/nanded-city-pune-resale-flats-buying-guide-2026/' },
                    ].map(b => (
                       <li key={b.name}>
                        <Link href={b.href} className="footer-link">{b.name}</Link>
                      </li>
                    ))}
                    <li style={{ marginTop: '8px' }}>
                      <Link href="/blog/" style={{ color: 'var(--accent-gold)', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>All Intelligence →</Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4: Location Advantage Hub */}
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>Hyperlocal Advantage</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {[
                      { name: '700-Acre Infrastructure Guide', href: '/infrastructure/' },
                      { name: 'Nanded City Public School Hub', href: '/infrastructure/' },
                      { name: 'Destination Centre Shopping Hub', href: '/infrastructure/' },
                      { name: 'Sinhagad Road Flyover Corridor', href: '/near/sinhagad-road/' },
                      { name: 'Khadakwasla Dam Proximity', href: '/near/khadakwasla/' },
                    ].map(r => (
                      <li key={r.name} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' }}>
                        <Link href={r.href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontWeight: '600' }}>{r.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Image src="https://www.nanded-city.in/aalaap/assets/img/img-aalaap-qr-code.png" alt="MahaRERA QR Code" width={48} height={48} style={{ background: '#fff', padding: '2px', borderRadius: '4px' }} />
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>Official Verification</div>
                      <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontSize: '0.75rem' }}>maharera.maharashtra.gov.in</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programmatic Property Hubs & Marathi Portals */}
              <div style={{ marginBottom: '40px', padding: '24px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: '#d4af37', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                  Popular Searches & Buyer Portals
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.82rem', alignItems: 'center' }}>
                  <Link href="/master-plan/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>700-Acre Master Plan</Link>
                  <Link href="/floor-plans/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Floor Plans & Layouts</Link>
                  <Link href="/compare/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Cluster Comparison Matrix</Link>
                  <Link href="/connectivity/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Transit & Flyover Corridor</Link>
                  <Link href="/township-directory/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Township Resident Directory</Link>
                  <Link href="/brochures/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Brochures & RERA Vault</Link>
                  <Link href="/emi-calculator/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>EMI & Stamp Duty Calculator</Link>
                  <Link href="/resale-rental-guide/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Resale & Rental Guide 2026</Link>
                  <Link href="/mr/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>मराठी निवासी दालन</Link>
                  <Link href="/lp/resale-flats/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Nanded City Resale Flats</Link>
                  <Link href="/lp/ready-to-move/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Ready to Move Flats</Link>
                  <Link href="/lp/luxury-apartments/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>3.5 & 4.5 BHK Luxury Apartments</Link>
                  <Link href="/lp/budget-flats/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Budget 2 BHK Flats</Link>
                  <Link href="/lp/na-bungalow-plots/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>NA Bungalow Plots</Link>
                  <Link href="/mr/resale-flats/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>नांदेड सिटी रीसेल फ्लॅट्स</Link>
                  <Link href="/mr/saajgiri/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>साजगिरी ३ बीएचके</Link>
                  <Link href="/mr/harmony/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>हार्मोनी ४.५ बीएचके</Link>
                  <Link href="/blog/nanded-city-pune-price-list-2026-carpet-area-cost-sheet/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Price List 2026</Link>
                  <Link href="/blog/nanded-city-pune-resale-flats-buying-guide-2026/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Resale Flats Guide</Link>
                  <Link href="/faq/" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '700', padding: '12px 18px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}>Township FAQs</Link>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', marginBottom: '32px' }} />

              {/* Highly Hardened Strategy Disclaimer */}
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', lineHeight: '1.7', marginBottom: '16px' }}>
                The definitive Nanded City Township Pune Residential Platform across 700 Acres. Explore premium 2 BHK, 2.5 BHK, 3 BHK, 3.5 BHK, and 4.5 BHK luxury flats and branded NA bungalow plots near Sinhagad Road Pune. All residential clusters — including Asawari, Sargam, and Saajgiri — are MahaRERA compliant. Located near Nanded City Public School, Destination Centre, and Khadakwasla, Nanded City Township, Sinhagad Road, Pune – 411041.
              </p>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '32px' }}>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem', lineHeight: '1.8', margin: 0 }}>
                  <strong style={{ color: 'var(--accent-gold)' }}>Authorised Marketing Partner:</strong> MahaRERA <strong>A031262401295</strong> ({SITE_CONFIG.brand.organizationName} — {SITE_CONFIG.contact.phone}). Facilitating verified property advisory and site-visit arrangements for Nanded City Township Pune. All information, properties, prices, and floor plans featured on this independent portal are for representational and informational purposes only and are subject to change without notice. This platform does not constitute an official offer or guarantee from Nanded City Developers. All trademarks and logos belong to their respective owners. Project details and MahaRERA certificates can be verified at <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>maharera.maharashtra.gov.in</a>.
                </p>
              </div>


              {/* Footer Bottom Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>© {new Date().getFullYear()} Nanded City Township Pune. Built on trust.</span>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <Link href="/privacy-policy/" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', textDecoration: 'none', padding: '6px 4px', display: 'inline-block' }}>Privacy Policy</Link>
                  <Link href="/terms/" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', textDecoration: 'none', padding: '6px 4px', display: 'inline-block' }}>Terms of Use</Link>
                </div>
              </div>
            </div>
          </footer>
          <FloatingActionBar />
          <EnquiryModal />
        </ModalProvider>
      </body>
    </html>

  );
}
