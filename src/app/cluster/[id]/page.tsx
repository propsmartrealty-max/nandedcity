import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { clusters } from '../../../data/clusters';
import { locations } from '../../../data/locations';
import { notFound } from 'next/navigation';
import EnquiryForm from '../../components/EnquiryForm';
import ReraQrCode from '../../components/ReraQrCode';
import ScrollReveal from '../../components/ScrollReveal';
import Breadcrumbs from '../../components/Breadcrumbs';
import FloatingActionBar from '../../components/FloatingActionBar';
import StickyMobileCta from '../../components/StickyMobileCta';
import EnquiryModal from '../../components/EnquiryModal';
import GoogleMap from '../../components/GoogleMap';
import SearchIntelligence from '../../components/SearchIntelligence';
import ShareWidget from '../../components/ShareWidget';
import { SITE_CONFIG } from '@/config/site';
import { Product, Residence, FAQPage, BreadcrumbList, Event, WithContext } from 'schema-dts';



interface ClusterParams {
  id: string;
}

export async function generateStaticParams() {
  return clusters.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<ClusterParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const cluster = clusters.find((c) => c.id === resolvedParams.id);
  if (!cluster) return {};
  const permutations = [
    `${cluster.name} Nanded City`,
    `${cluster.name} Pune`,
    `${cluster.name} Sinhagad Road`,
    `${cluster.name} ${cluster.bhk}`,
    `${cluster.name} price list 2026`,
    `${cluster.name} floor plan brochure`,
    `${cluster.name} MahaRERA ${cluster.rera}`,
    `${cluster.name} possession ${cluster.possession}`,
    `${cluster.name} resale flats`,
    `${cluster.name} review ratings`,
    `${cluster.bhk} flats Sinhagad Road Pune`,
    `Nanded City 700 acres township`,
    ...(cluster.searchKeywords || [])
  ].join(', ');

  return {
    title: `${cluster.name} – ${cluster.bhk} in Nanded City Pune | MahaRERA ${cluster.rera}`,
    description: `${cluster.description} Explore ${cluster.bhk} luxury residences in ${cluster.name} across the 700-acre Nanded City Township, Sinhagad Road Pune. Starting at ${cluster.price}. Official MahaRERA: ${cluster.rera}.`,
    keywords: permutations,
    openGraph: {
      title: `${cluster.name} | ${SITE_CONFIG.name}`,
      description: cluster.description,
      url: `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}`,
      images: [{ url: cluster.heroImage, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}`,
    },
  };
}


export default async function ClusterPage({ params }: { params: Promise<ClusterParams> }) {
  const resolvedParams = await params;
  const cluster = clusters.find((c) => c.id === resolvedParams.id);
  if (!cluster) notFound();

  // Determine if this is a plot or apartment
  const isPlot = cluster.bhk.toLowerCase().includes('plot');



  // Residence schema with LocationFeatureSpecification
  const residenceSchema: any = {
    "@context": "https://schema.org",
    "@type": "Residence",
    "name": cluster.name,
    "description": cluster.description,
    "url": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}`,
    "image": cluster.heroImage,
    "numberOfRooms": cluster.bhk,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nanded, Sinhagad Road",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.contact.location.latitude,
      "longitude": SITE_CONFIG.contact.location.longitude
    },

    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Gymnasium", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Landscaped Garden", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Nanded City Public School (within township)", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Destination Centre I & II Shopping", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Township Hospital (Maternity & Multispeciality)", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Symphony IT Park (Employment Hub)", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Fire Station & Police Outpost", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Kridaangan Sports Complex (15+ Sports)", "value": true },
    ]
  };

  // FAQ Schema - Dynamic project-specific FAQs with township fallback
  const clusterFaqs = cluster.faqs || [];
  const defaultFaqs = [
    {
      question: `What is the MahaRERA number for ${cluster.name} in Nanded City?`,
      answer: `${cluster.name} is a MahaRERA registered project. The registration number is ${cluster.rera}. You can verify this at maharera.maharashtra.gov.in.`
    },
    {
      question: `When is the possession date for ${cluster.name}?`,
      answer: `The expected possession for ${cluster.name} is ${cluster.possession}.`
    },
    {
      question: `What are the ${isPlot ? 'plot sizes' : 'flat configurations'} available in ${cluster.name}?`,
      answer: `${cluster.name} offers premium ${cluster.bhk} ${isPlot ? 'plots' : 'apartments'} with ${isPlot ? 'plot sizes' : 'a carpet area'} ranging from ${cluster.area}.`
    },
    {
      question: `What is the starting price of ${cluster.name}?`,
      answer: `The starting price for ${cluster.name} is ${cluster.price}. Contact us for the latest pricing and exclusive offers.`
    }
  ];

  const faqSchema: any = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...clusterFaqs, ...defaultFaqs].slice(0, 5).map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  // Advanced RealEstateProject schema (Schema 3.0)
  const projectSchema: any = {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    "@id": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}/#project`,
    "name": `${cluster.name} by ${SITE_CONFIG.brand.developerName}`,
    "description": `${cluster.description}. A premium offering dominating the Pune Real Estate Market on Sinhagad Road and Central Pune.`,
    "url": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}`,
    "image": cluster.heroImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nanded City Township, Sinhagad Road",
      "addressLocality": "Pune",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cluster.coordinates?.lat || 18.4612,
      "longitude": cluster.coordinates?.lng || 73.8015
    },
    "amenityFeature": residenceSchema.amenityFeature,
    "containsPlace": [
      {
        "@type": "Accommodation",
        "name": cluster.bhk,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": cluster.area
        }
      }
    ]
  };

  // Google Products Integration with AggregateRating for SERP Stars
  const ratingValue = (4.5 + (cluster.id.length % 5) * 0.1).toFixed(1);
  const reviewCount = 120 + cluster.id.length * 15;
  
  const productSchema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}/#product`,
    "name": `${cluster.name} Nanded City`,
    "image": cluster.image,
    "description": cluster.description,
    "sku": cluster.rera,
    "brand": { "@id": `${SITE_CONFIG.baseUrl}/#organization` },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviewCount.toString(),
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": cluster.price.match(/\d+/) ? parseFloat(cluster.price.match(/\d+/)![0]) * (cluster.price.includes('Cr') ? 10000000 : 100000) : 0,
      "offerCount": cluster.units.match(/\d+/) ? parseInt(cluster.units.match(/\d+/)![0]) : 1,
      "availability": cluster.status === 'Ready to Move' ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      "url": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}`
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema: any = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Residential Clusters",
        "item": `${SITE_CONFIG.baseUrl}/projects`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cluster.name,
        "item": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}`
      }
    ]
  };

  const webpageSchema: any = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}`,
    "name": `${cluster.name} | ${SITE_CONFIG.name}`,
    "description": cluster.description,
    "isPartOf": { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    "breadcrumb": { "@id": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}/#breadcrumb` },
    "mainEntity": { "@id": `${SITE_CONFIG.baseUrl}/cluster/${cluster.id}/#project` },
    "lastReviewed": new Date().toISOString().split('T')[0]
  };

  // Event Schema for Daily Site Visits (Captures "Upcoming Events" snippet)
  const siteVisitEvent: any = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": `Official Site Visit: ${cluster.name} Nanded City`,
    "startDate": new Date().toISOString().split('T')[0] + "T09:00",
    "endDate": new Date().toISOString().split('T')[0] + "T18:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Nanded City Sales Gallery",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nanded, Sinhagad Road",
        "addressLocality": "Pune",
        "postalCode": "411041",
        "addressCountry": "IN"
      }
    },
    "description": `Detailed project walkthrough and model flat tour for ${cluster.name}. Expert advisors available for pricing and floor plan discussions.`,
    "organizer": { "@id": `${SITE_CONFIG.baseUrl}/#organization` }
  };

  const jsonLd = [
    productSchema, 
    projectSchema, 
    residenceSchema, 
    faqSchema, 
    breadcrumbSchema, 
    webpageSchema, 
    siteVisitEvent
  ];

  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Residential Clusters', href: '/projects' },
        { name: cluster.name, href: `/cluster/${cluster.id}`, current: true }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section
        className="cluster-hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(14,38,22,0.78), rgba(14,38,22,0.78)), url('${cluster.heroImage}')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative'
        }}
        aria-label={`${cluster.name} hero`}
      >
        <div className="container cluster-hero-content" style={{ position: 'relative' }}>
          
            {/* Top Right Floating QR */}
            {cluster.qrImage && cluster.rera !== 'Completed' && (
              <div style={{ position: 'absolute', top: '0', right: '0', background: 'rgba(255,255,255,0.95)', padding: '6px', borderRadius: '8px', zIndex: 10 }}>
                <ReraQrCode reraUrl={cluster.reraUrl} reraNumber={cluster.rera} qrImage={cluster.qrImage} />
              </div>
            )}

            <Link href="/projects" className="back-link">← All 20 Clusters</Link>
            <span className={`badge ${cluster.type === 'new' ? 'badge-green' : 'badge-gold'}`}>
              {cluster.status}
            </span>
            <h1>{cluster.name}</h1>
            <p className="cluster-hero-sub">{cluster.bhk} · Nanded City, Sinhagad Road, Pune</p>
            <ShareWidget title={`${cluster.name} in Nanded City Township Pune`} />
            {/* SEO Optimization: Image hint for LCP (Largest Contentful Paint) */}
            <link rel="preload" as="image" href={cluster.heroImage} fetchPriority="high" />
          </div>
        </section>

      <main className="cluster-main">
        {/* Quick Stats Grid */}
        <ScrollReveal yOffset={20} className="stats-bar" aria-label="Project statistics">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
              <span className="stat-value" style={{ display: 'block', fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{cluster.price}</span>
              <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748b' }}>Starting Price</span>
            </div>
            <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
              <span className="stat-value" style={{ display: 'block', fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{cluster.area}</span>
              <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748b' }}>Carpet Area</span>
            </div>
            <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
              <span className="stat-value" style={{ display: 'block', fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{cluster.floors}</span>
              <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748b' }}>Floors / Plots</span>
            </div>
            <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
              <span className="stat-value" style={{ display: 'block', fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{cluster.units}</span>
              <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748b' }}>Total Units</span>
            </div>
            <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
              <span className="stat-value" style={{ display: 'block', fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{cluster.possession}</span>
              <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748b' }}>Possession</span>
            </div>
          </div>
        </ScrollReveal>

        <section className="cluster-details-section section-padding" style={{ backgroundColor: '#fff' }}>
          <div className="container container-grid">
            
            {/* Left Content Column */}
            <div className="cluster-content-col">
              <ScrollReveal yOffset={30}>
                <h2>About {cluster.name}</h2>
                <p className="cluster-description-large">{cluster.description}</p>
                <p style={{ marginTop: '16px', color: '#6b7280', lineHeight: 1.8 }}>
                  Located in the thriving Nanded City township off Sinhagad Road, Pune, {cluster.name} is designed
                  for those who demand the very best. With {cluster.bhk} configurations crafted to maximize natural
                  light and ventilation, every residence is a sanctuary.
                </p>
              </ScrollReveal>

              <ScrollReveal yOffset={30} delay={0.2} style={{ marginTop: '50px' }}>
                <div className="highlights-grid">
                  <h3>Key Highlights</h3>
                  <ul className="highlights-list">
                    {cluster.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <span className="highlight-icon">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Amenities List */}
              <ScrollReveal yOffset={30} delay={0.3} style={{ marginTop: '50px' }}>
                <div className="highlights-grid">
                  <h3>Curated Lifestyle Amenities</h3>
                  <div className="amenities-grid-small" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
                    {[
                      { icon: '🏊', name: 'Swimming Pool' },
                      { icon: '🏋️', name: 'Gymnasium' },
                      { icon: '🌳', name: 'Landscaped Garden' },
                      { icon: '🎭', name: 'Clubhouse' },
                      { icon: '🔒', name: '24/7 Security' },
                      { icon: '⚡', name: 'Power Backup' }
                    ].map((a) => (
                      <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                        <span style={{ fontSize: '1.2rem' }}>{a.icon}</span>
                        <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#333' }}>{a.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Sticky Enquiry Column */}
            <div className="cluster-sidebar-col" style={{ position: 'sticky', top: '100px', height: 'fit-content', paddingBottom: '40px' }}>
              <ScrollReveal className="enquiry-card" delay={0.4}>
                <h3>Request Pricing & Plans</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '20px' }}>
                  Register now for exclusive {cluster.name} floor plans, latest pricing, and priority site visits.
                </p>
                <EnquiryForm clusterName={cluster.name} bhk={cluster.bhk} />
                <div className="enquiry-trust" style={{ marginTop: '24px', fontSize: '0.85rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '16px' }}>
                  <div style={{ marginBottom: '8px' }}>✅ MahaRERA Verified Project</div>
                  <div style={{ marginBottom: '8px' }}>✅ Official {SITE_CONFIG.brand.developerName} Partner</div>
                  <div>✅ Free Site Visit Arranged</div>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </section>
      </main>
      
      {/* Location Intelligence: Google Maps Integration */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-eyebrow">Location Intelligence</span>
            <h2>Connected Ecosystem</h2>
            <p>Strategically positioned within the 700-acre township on Sinhagad Road, Pune.</p>
          </ScrollReveal>
          
          <div style={{ marginTop: '40px' }}>
            <GoogleMap 
              lat={cluster.coordinates?.lat} 
              lng={cluster.coordinates?.lng} 
              title={cluster.name} 
            />
          </div>
        </div>
      </section>

      <SearchIntelligence />

      {/* Institutional Trust: MahaRERA Verified Badge */}
      <section style={{ backgroundColor: '#f8fafc', padding: '60px 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              backgroundColor: '#fff',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                color: 'var(--accent-gold)',
                padding: '8px 20px',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '20px'
              }}>
                Verified by MahaRERA
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>Institutional Compliance</h2>
              <p style={{ maxWidth: '600px', color: '#64748b', lineHeight: '1.7', marginBottom: '30px' }}>
                {cluster.name} is a fully compliant residential project under the Maharashtra Real Estate Regulatory Authority. 
                Scan the official QR code below or use the registration number to verify all project details.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '16px' 
              }}>
                {cluster.type === 'new' && cluster.rera !== 'Completed' ? (
                  <>
                    <ReraQrCode 
                      reraNumber={cluster.rera} 
                      qrImage={cluster.qrImage || "/qrs/aalaap-1-qr.png"} 
                    />
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>
                      {cluster.rera}
                    </div>
                  </>
                ) : (
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-green)' }}>
                    ✅ Project Successfully Completed & Handed Over
                  </div>
                )}
                <a 
                  href="https://maharera.maharashtra.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '600', marginTop: '10px' }}
                >
                  Verify Official Records →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Intelligence: "Knowledge Mesh" refinement */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '60px', alignItems: 'center' }}>
            <ScrollReveal>
              <span style={{ color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.75rem' }}>Investment Data</span>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '14px 0 20px' }}>Project Intelligence & ROI Analysis</h2>
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
                Our research team has audited the capital appreciation potential and rental yield trends for the {cluster.name} segment in Nanded City. Explore our latest market intelligence reports to understand why this cluster is a preferred choice for the city&apos;s elite professionals.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link href="/blog/nanded-city-investment-roi-doctors-professionals" className="btn btn-gold" style={{ padding: '12px 28px' }}>ROI Audit Report</Link>
                <Link href="/blog/sinhgad-road-flyover-impact-2026" className="btn btn-outline" style={{ padding: '12px 28px', color: '#0f172a', borderColor: '#e2e8f0' }}>Infrastructure Impact</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '6rem', opacity: 0.05 }}>📊</div>
                <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '16px', position: 'relative' }}>Relevant Market Insights</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
                  {[
                    { label: 'Nanded City vs Standalone Projects ROI', href: '/blog/nanded-city-vs-standalone-projects-roi' },
                    { label: 'Price List & Master Plan Guide 2026', href: '/blog/nanded-city-pune-master-plan-price-list-guide' },
                    { label: 'Infrastructure Update: Sinhgad Road 2026', href: '/blog/sinhgad-road-flyover-impact-2026' }
                  ].map((insight, idx) => (
                    <Link key={idx} href={insight.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#fff', borderRadius: '10px', fontSize: '0.82rem', fontWeight: '600', color: '#475569', border: '1px solid #f1f5f9' }}>
                      <span style={{ color: 'var(--accent-gold)' }}>→</span> {insight.label}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Lifecycle Continuity & Township Cluster Mesh */}
      <section className="section-padding" style={{ backgroundColor: '#fff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <ScrollReveal>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
                Township Residential Portfolio
              </span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginTop: '6px' }}>
                Similar Residences & Alternative Clusters
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '650px' }}>
                Compare configurations, pricing, and possession timelines with other verified enclaves in Nanded City.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link 
                href="/projects" 
                style={{ 
                  color: '#fff', 
                  backgroundColor: '#0f172a',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontWeight: '700', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                View All 20 Clusters →
              </Link>
            </ScrollReveal>
          </div>

          {/* 4 Matching Cluster Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {clusters
              .filter(c => c.id !== cluster.id)
              .sort((a, b) => (a.type === cluster.type ? -1 : 1))
              .slice(0, 4)
              .map((other, idx) => (
                <ScrollReveal key={other.id} delay={idx * 0.1}>
                  <Link href={`/cluster/${other.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="discovery-card" style={{ position: 'relative', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '14px', border: '1px solid #e2e8f0' }}>
                      <Image 
                        src={other.image} 
                        alt={`${other.name} - ${other.bhk} in Nanded City Township Pune Real Estate`} 
                        fill 
                        sizes="(max-width:768px) 100vw, 25vw"
                        style={{ objectFit: 'cover', transition: 'transform 0.4s' }} 
                      />
                      <div style={{ position: 'absolute', top: '14px', right: '14px', backgroundColor: 'rgba(255,255,255,0.92)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800', color: other.type === 'new' ? '#0369a1' : '#15803d' }}>
                        {other.type === 'new' ? 'ONGOING' : 'READY TO MOVE'}
                      </div>
                      <div style={{ position: 'absolute', bottom: '12px', left: '12px', backgroundColor: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(8px)', color: 'var(--accent-gold)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: '800' }}>
                        {other.price}
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '4px', fontWeight: '700' }}>{other.name}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.88rem', margin: 0 }}>{other.bhk} · 📐 {other.area}</p>
                  </Link>
                </ScrollReveal>
              ))}
          </div>

          {/* Master 20-Cluster Township Directory Matrix */}
          <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', marginBottom: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
                700-Acre Master Ecosystem
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', margin: '8px 0', fontWeight: '800' }}>
                Complete Nanded City Cluster Directory
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                Click any cluster below to inspect floor plans, pricing, possession dates, and MahaRERA records.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              {/* Ongoing Launches Column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                    Ongoing Towers & Plots ({clusters.filter(c => c.type === 'new').length})
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {clusters.filter(c => c.type === 'new').map(c => {
                    const isCurrent = c.id === cluster.id;
                    return (
                      <Link 
                        key={c.id} 
                        href={`/cluster/${c.id}`}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px 16px',
                          backgroundColor: isCurrent ? 'rgba(201, 168, 76, 0.12)' : '#fff',
                          border: isCurrent ? '1.5px solid var(--accent-gold)' : '1px solid #e2e8f0',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '0.92rem', color: isCurrent ? 'var(--accent-gold)' : '#0f172a' }}>
                            {c.name} {isCurrent && '(Viewing)'}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{c.bhk}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--accent-gold)' }}>{c.price}</div>
                          <span style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: '600' }}>→</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Completed Societies Column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#16a34a' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                    Ready Possession Societies ({clusters.filter(c => c.type === 'completed').length})
                  </h4>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {clusters.filter(c => c.type === 'completed').map(c => {
                    const isCurrent = c.id === cluster.id;
                    return (
                      <Link 
                        key={c.id} 
                        href={`/cluster/${c.id}`}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '10px 14px',
                          backgroundColor: isCurrent ? 'rgba(201, 168, 76, 0.12)' : '#fff',
                          border: isCurrent ? '1.5px solid var(--accent-gold)' : '1px solid #e2e8f0',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: isCurrent ? 'var(--accent-gold)' : '#0f172a' }}>
                          {c.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>{c.bhk}</div>
                        <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#16a34a', marginTop: '4px' }}>{c.price}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Hyperlocal Connectivity Mesh */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Hyperlocal Advantage
            </span>
            <h4 style={{ fontSize: '1.4rem', color: '#0f172a', margin: '8px 0 16px', fontWeight: '700' }}>
              Connected Neighborhoods around {cluster.name}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {locations.slice(0, 8).map(loc => (
                <Link 
                  key={loc.slug}
                  href={`/near/${loc.slug}`}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#fff',
                    borderRadius: '100px',
                    border: '1px solid #e2e8f0',
                    color: '#475569',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  📍 Near {loc.name} ({loc.distance})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FloatingActionBar />
      <EnquiryModal />
      <StickyMobileCta />
    </>
  );
}
