import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { clusters } from '../data/clusters';
import { blogs } from '../data/blogs';
import ContactForm from './components/ContactForm';
import ReraQrCode from './components/ReraQrCode';
import DynamicClusterGrid from './components/DynamicClusterGrid';
import ScrollReveal from './components/ScrollReveal';
import ParallaxHero from './components/ParallaxHero';
import HeroActions from './components/HeroActions';
import MarketIntelligence from './components/MarketIntelligence';
import dynamic from 'next/dynamic';

const TownshipEcosystem = dynamic(() => import('./components/TownshipEcosystem'), { ssr: true });
const TrustSection = dynamic(() => import('./components/TrustSection'), { ssr: true });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: true });
const SearchIntelligence = dynamic(() => import('./components/SearchIntelligence'), { ssr: true });
const ROICalculator = dynamic(() => import('./components/ROICalculator'), { ssr: true });
import HomeFaq from './components/HomeFaq';
import { homeFaqs } from '../data/faqs';
import { RealEstateAgent, WebSite, BreadcrumbList, LocalBusiness, SpeakableSpecification, WithContext, Offer, Residence } from 'schema-dts';
import { SITE_CONFIG } from '../config/site';


export const metadata: Metadata = {
  title: "Nanded City Township Pune",
  description: "Official guide to Nanded City Township Pune across 700 Acres on Sinhagad Road. Explore 2, 2.5, 3, 3.5 & 4.5 BHK luxury flats and branded NA bungalow plots with updated 2026 prices, master plan, floor plans, MahaRERA certificates & site visits.",
  keywords: SITE_CONFIG.seo.primaryKeywords,
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/`,
  },
  openGraph: {
    title: "Nanded City Township Pune",
    description: "Official guide to Nanded City Township Pune across 700 Acres on Sinhagad Road. Explore luxury flats and NA bungalow plots.",
    url: `${SITE_CONFIG.baseUrl}/`,
    siteName: "Nanded City Township Pune",
    images: [
      {
        url: SITE_CONFIG.brand.ogImage,
        width: 1200,
        height: 630,
        alt: "Nanded City Township Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanded City Township Pune",
    description: "Official guide to Nanded City Township Pune across 700 Acres on Sinhagad Road.",
  },
};


export default function Home() {
  const ongoingClusters = clusters.filter(c => c.type === 'new');
  const completedClusters = clusters.filter(c => c.type === 'completed');

  const jsonLd: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.baseUrl}/#webpage`,
      "url": `${SITE_CONFIG.baseUrl}/`,
      "name": "Nanded City Township Pune",
      "description": "Authorized partner portal for Nanded City Township Pune on Sinhagad Road.",
      "isPartOf": {
        "@id": `${SITE_CONFIG.baseUrl}/#website`
      },
      "about": {
        "@type": "Place",
        "name": "Nanded City Township Pune",
        "alternateName": [
          "Nanded City Pune",
          "Nanded City"
        ],
        "description": "700-Acre Integrated Township on Sinhagad Road Pune with luxury flats and NA bungalow plots.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nanded City, Sinhagad Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.4612,
          "longitude": 73.8015
        }
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".speakable-title", ".hero-seo-text"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Nanded City Pune Residential Projects & Clusters",
      "itemListElement": clusters.map((c, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `${SITE_CONFIG.baseUrl}/cluster/${c.id}/`,
        "name": c.name,
        "description": `${c.name} - ${c.bhk} in Nanded City Pune. Price: ${c.price}, Status: ${c.status}.`
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${SITE_CONFIG.baseUrl}/`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": homeFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <ParallaxHero bgImage="https://nandedcitypune.com/wp-content/uploads/2026/02/saajgiri-ncp-banner-img-01.webp">
        <span className="badge badge-gold">Sinhagad Road · Pune</span>
        <h1 className="speakable-title"><span className="metallic-gold-text">Nanded City Pune</span> – Luxury 2, 2.5, 3 & 4 BHK Flats & NA Bungalow Plots</h1>
        <p className="hero-seo-text">
          Explore <strong>premium 2, 2.5, 3 & 4 BHK luxury flats</strong> and exclusive <strong>branded NA bungalow plots</strong> at <strong>Nanded City Pune on Sinhagad Road</strong>. An integrated 700-acre self-sustainable township featuring ICSE schools, Symphony IT Park, Destination Center retail, captive water & power infrastructure, and Olympic-grade sports complexes.
        </p>
        <HeroActions />
        <div className="hero-stats">
          <div className="hero-stat"><strong>700</strong><span>Acres</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>15k+</strong><span>Happy Families</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>20</strong><span>Clusters</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>25+ Yrs</strong><span>Of Trust</span></div>
        </div>
      </ParallaxHero>
      <MarketIntelligence />
      <TownshipEcosystem />

      {/* Ongoing Projects */}
      <section id="ongoing" className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-eyebrow">MahaRERA Verified</span>
            <h2>Ongoing Projects</h2>
            <p>Discover our under-construction towers — fully RERA registered and built to deliver on time.</p>
          </ScrollReveal>

          <DynamicClusterGrid clusters={clusters} />
        </div>
      </section>

      {/* 2026 Master Price List & Configuration Directory (SEO Authority Matrix) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <ScrollReveal className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-eyebrow">Market Calibration 2026</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}>Nanded City Pune 2026 Price List & Configuration Directory</h2>
            <p style={{ maxWidth: '780px', margin: '0 auto', color: '#64748b' }}>
              Verified price list, carpet areas, and MahaRERA registration certificates across all 20 residential clusters and branded NA bungalow plots on Sinhagad Road, Pune.
            </p>
          </ScrollReveal>

          <div style={{ overflowX: 'auto', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
              <thead style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                <tr>
                  <th style={{ padding: '16px', fontWeight: '700' }}>Cluster / Project</th>
                  <th style={{ padding: '16px', fontWeight: '700' }}>Configuration</th>
                  <th style={{ padding: '16px', fontWeight: '700' }}>Carpet Area</th>
                  <th style={{ padding: '16px', fontWeight: '700' }}>Starting Price*</th>
                  <th style={{ padding: '16px', fontWeight: '700' }}>Status / Possession</th>
                  <th style={{ padding: '16px', fontWeight: '700' }}>MahaRERA Reg.</th>
                  <th style={{ padding: '16px', fontWeight: '700' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Saajgiri', bhk: '3 BHK Luxury High-Rise', area: '1,050 – 1,250 sq.ft.', price: '₹1.05 Cr* Onwards', status: 'Under Construction', rera: 'PR1260002501621', slug: 'saajgiri' },
                  { name: 'Harmony', bhk: '3.5 & 4.5 BHK Royal Flats', area: '1,650 – 2,400 sq.ft.', price: '₹1.85 Cr* Onwards', status: 'Under Construction', rera: 'P52100055134', slug: 'harmony' },
                  { name: 'Melody (Phase 1, 2, 3)', bhk: 'Branded NA Bungalow Plots', area: '2,000 – 4,500 sq.ft.', price: '₹1.35 Cr* Onwards', status: 'Ready to Build', rera: 'P52100051948', slug: 'melody-1' },
                  { name: 'Rhythm', bhk: 'Villa NA Plots', area: '2,200 – 3,800 sq.ft.', price: '₹1.45 Cr* Onwards', status: 'Ready to Build', rera: 'P52100051950', slug: 'rhythm-1' },
                  { name: 'Aalaap-I', bhk: '2 & 3 BHK Urban Residences', area: '780 – 1,020 sq.ft.', price: '₹78 L* Onwards', status: 'Ongoing', rera: 'P52100051234', slug: 'aalaap-1' },
                  { name: 'Pancham Phase 1 & 2', bhk: '2 BHK Family Homes', area: '680 – 850 sq.ft.', price: '₹65 L* Onwards', status: 'Ready / Ongoing', rera: 'P52100000288', slug: 'pancham' },
                  { name: 'Bageshree', bhk: '2 BHK Modern Towers', area: '620 – 750 sq.ft.', price: '₹58 L* Onwards', status: 'Ready to Move', rera: 'Delivered', slug: 'bageshree' },
                  { name: 'Asawari', bhk: '2 & 3 BHK High-Rise', area: '850 – 1,150 sq.ft.', price: '₹75 L* (Resale)', status: 'Ready to Move', rera: 'Delivered', slug: 'asawari' },
                  { name: 'Sargam', bhk: '2 & 3 BHK Towers', area: '880 – 1,200 sq.ft.', price: '₹80 L* (Resale)', status: 'Ready to Move', rera: 'Delivered', slug: 'sargam' },
                  { name: 'Kalashree', bhk: '2.5 & 3 BHK Lake-Facing', area: '950 – 1,280 sq.ft.', price: '₹85 L* (Resale)', status: 'Ready to Move', rera: 'Delivered', slug: 'kalashree' }
                ].map((item, idx) => (
                  <tr key={item.name} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0f172a' }}>
                      <Link href={`/cluster/${item.slug}/`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                        {item.name}
                      </Link>
                    </td>
                    <td style={{ padding: '14px 16px', color: '#334155' }}>{item.bhk}</td>
                    <td style={{ padding: '14px 16px', color: '#64748b' }}>{item.area}</td>
                    <td style={{ padding: '14px 16px', fontWeight: '700', color: '#166534' }}>{item.price}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: item.status.includes('Ready') ? 'rgba(22, 101, 52, 0.1)' : 'rgba(197, 168, 114, 0.15)',
                        color: item.status.includes('Ready') ? '#166534' : 'var(--accent-gold)'
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '0.78rem', color: '#64748b', fontFamily: 'monospace' }}>{item.rera}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <Link href={`/cluster/${item.slug}/`} style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none' }}>
                        View Specs →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
            <Link
              href="/infrastructure/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#0f172a',
                color: 'var(--accent-gold)',
                padding: '12px 28px',
                borderRadius: '100px',
                fontWeight: '700',
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <span>Explore 700-Acre Township Infrastructure (WTP, STP, MSEB, Schools)</span>
              <span>→</span>
            </Link>
            <Link
              href="/projects/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                padding: '12px 28px',
                borderRadius: '100px',
                fontWeight: '600',
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <span>View All 20 Clusters & Floor Plans</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <ROICalculator />
      {/* 700-Acre Township Trust */}
      <TrustSection />

      {/* HNW Resident Testimonials */}
      <SearchIntelligence />
      <Testimonials />

      {/* Why Nanded City */}
      <section className="section-padding why-section">
        <div className="container">
          <ScrollReveal className="section-header" style={{ color: '#fff' }}>
            <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>Why Choose Us</span>
            <h2 style={{ color: '#fff' }}>Built on Trust. Delivered with Excellence.</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>
              Nanded City is not just a development — it&apos;s a self-sustaining township that has set the gold standard for residential living on Sinhagad Road.
            </p>
          </ScrollReveal>
          <div className="why-grid">
            {[
              { icon: '🏆', title: '25+ Years of Excellence', body: 'A legacy developer trusted by 15,000+ families across Pune for timely delivery and superior construction quality.' },
              { icon: '🌿', title: 'Eco-Friendly Township', body: '700 Acres with 70% open spaces, rainwater harvesting, solar energy, and a dedicated green belt.' },
              { icon: '📜', title: 'MahaRERA Compliant', body: 'Every active project carries a valid MahaRERA registration number, ensuring full legal transparency and buyer protection.' },
              { icon: '🎓', title: 'World-Class Infrastructure', body: 'Schools, hospitals, shopping centers, and recreational facilities are all within the township — a truly walkable community.' },
            ].map((w, idx) => (
              <ScrollReveal key={w.title} delay={idx * 0.15}>
                <div className="why-card">
                  <span className="why-icon">{w.icon}</span>
                  <h3 className="why-title">{w.title}</h3>
                  <p className="why-body">{w.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Master Township Layout */}
      <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#fff' }}>
        <div className="container">
          <ScrollReveal className="section-header" style={{ color: '#fff' }}>
            <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>700 Acres of Perfection</span>
            <h2 style={{ color: '#fff' }}>Master Township Layout</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              Explore the sheer scale of Nanded City. From the expansive <strong>Symphony IT Park</strong> and dedicated Education grids to the massive <strong>Kridaangan</strong> sports complexes and Commercial Destination Centers interconnecting the residential ecosystems.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div style={{ position: 'relative', width: '100%', height: '600px', backgroundColor: '#f1f5f9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
              <Image 
                src="/assets/img/master-layout.jpg" 
                alt="Nanded City Township Pune Master Layout Map - Pune Real Estate Ecosystem showcasing Residential Clusters, Symphony IT Park, and Flats" 
                fill 
                style={{ objectFit: 'cover', objectPosition: 'center' }} 
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
              <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '1.2rem', marginBottom: '8px' }}>Residential Mastery</strong>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6', display: 'block' }}>
                  Integrated clusters including Melody, Rhythm, Kalashree, Bageshree, Saajgiri, Stream Park, Sarang, and Bahaar interconnected by green corridors.
                </span>
              </div>
              <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '1.2rem', marginBottom: '8px' }}>Commercial Hubs</strong>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6', display: 'block' }}>
                  A self-sustaining micro-economy featuring Destination Center-I & II and the cutting-edge Symphony IT Park for immense local employment.
                </span>
              </div>
              <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '1.2rem', marginBottom: '8px' }}>Lifestyle Infrastructure</strong>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.6', display: 'block' }}>
                  Fully equipped with the centralized Kridaangan Sports complex, Club Harmony, and dedicated Nanded City Public School grids.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Completed Projects */}
      <section id="completed" className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-eyebrow">A Legacy of Delivery</span>
            <h2>Completed Projects</h2>
            <p>Thriving communities, fully inhabited. Our completed clusters stand as a testament to our quality and commitment.</p>
          </ScrollReveal>

          <div className="grid-cols-3">
            {completedClusters.map((cluster, index) => (
              <ScrollReveal key={cluster.id} delay={index * 0.08}>
                <article className="cluster-card cluster-card-sm">
                  <Link href={`/cluster/${cluster.id}/`} className="card-image-link">
                    <div className="card-image card-image-sm">
                      <Image 
                        src={cluster.image} 
                        alt={`${cluster.name} - Ready Possession ${cluster.bhk} Flats in Nanded City Township Pune`} 
                        fill 
                        sizes="(max-width:768px) 100vw, 33vw" 
                        style={{ objectFit: 'cover' }} 
                      />
                      <div className="card-badge-wrap">
                        <span className="badge badge-gold">{cluster.bhk}</span>
                      </div>
                      <div className="card-price-tag">{cluster.price}</div>
                    </div>
                  </Link>
                  <div className="card-content">
                    <h3 className="card-title card-title-sm">
                      <Link href={`/cluster/${cluster.id}/`}>{cluster.name}</Link>
                    </h3>
                    <div className="card-meta">
                      <span className="status-dot completed" />
                      <span style={{ color: 'var(--primary-green)', fontWeight: '600' }}>{cluster.status}</span>
                      <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#64748b' }}>📐 {cluster.area}</span>
                    </div>
                    <p className="card-desc" style={{ fontSize: '0.875rem' }}>{cluster.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: '700' }}>
                        MahaRERA Handover ✅
                      </span>
                      <Link href={`/cluster/${cluster.id}/`} className="btn-details">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link 
              href="/projects/" 
              className="btn btn-outline" 
              style={{ 
                borderColor: 'var(--accent-gold)', 
                color: '#0f172a', 
                fontWeight: '700', 
                padding: '16px 36px',
                borderRadius: '100px',
                fontSize: '1rem',
                display: 'inline-block'
              }}
            >
              Explore Complete 20-Cluster Master Directory & Specs →
            </Link>
          </div>
        </div>
      </section>

      {/* Market Intelligence & Insights Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <ScrollReveal className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Market Intelligence</span>
            <h2>Nanded City & Sinhagad Road Real Estate Data</h2>
            <p style={{ maxWidth: '680px', margin: '0 auto' }}>
              Data-backed research, price appreciation trends, and institutional insights specifically focused on the Sinhagad Road property market.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {blogs.slice(0, 3).map((blog, idx) => (
              <ScrollReveal key={blog.slug} delay={idx * 0.15}>
                <article className="cluster-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
                  <Link href={`/blog/${blog.slug}/`} className="card-image-link" style={{ height: '220px', position: 'relative' }}>
                    <Image 
                      src={blog.coverImage} 
                      alt={`${blog.title} - Nanded City Township Pune Real Estate Blog Insights`} 
                      fill 
                      sizes="(max-width:768px) 100vw, 33vw" 
                      style={{ objectFit: 'cover' }} 
                    />
                    <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '30px', fontWeight: '700' }}>
                      {blog.readTime}
                    </div>
                  </Link>
                  <div className="card-content" style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                      {blog.category.replace('-', ' ')}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.4' }}>
                      <Link href={`/blog/${blog.slug}/`} style={{ color: '#0f172a', textDecoration: 'none' }}>{blog.title}</Link>
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                      {blog.excerpt}
                    </p>
                    <Link href={`/blog/${blog.slug}/`} className="btn-details" style={{ alignSelf: 'flex-start', color: 'var(--primary-green)', fontWeight: '700' }}>
                      Read Market Data →
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/blog/" className="btn btn-outline" style={{ borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}>
              View All Insights & Data
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Compass Grid */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '30px', textAlign: 'left' }}>
            <span className="section-eyebrow">Top Real Estate Searches in Pune</span>
            <h2 style={{ fontSize: '1.75rem', color: '#111827' }}>Explore Nanded City Clusters</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#1e293b' }}>Luxury 3 BHK Flats</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6' }}>
                Looking for <strong>spacious 3 BHK apartments in Pune</strong> with panoramic views? 
                Explore the premium high-rise residences at <Link href="/cluster/saajgiri/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Saajgiri</Link>.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#1e293b' }}>Luxury 3 & 4 BHK Flats</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6' }}>
                Looking for <strong>spacious 3, 3.5 & 4.5 BHK apartments in Pune</strong> with panoramic Sahyadri views? 
                Explore high-rise residences at <Link href="/cluster/saajgiri/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Saajgiri</Link> and the flagship palace towers at <Link href="/cluster/harmony/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Harmony</Link>.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#1e293b' }}>Branded NA Bungalow Plots</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6' }}>
                Invest in <strong>gated villa plots near Hinjewadi IT Park routes</strong> and Sinhagad Road. 
                Secure your family legacy with build-ready plots at <Link href="/cluster/melody-1/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Melody</Link> and <Link href="/cluster/rhythm-1/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Rhythm</Link>.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#1e293b' }}>2 & 2.5 BHK Urban Homes</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6' }}>
                Discover vibrant community living with <strong>MahaRERA registered 2 BHK flats in Pune</strong>. 
                Experience tranquility and modern design at <Link href="/cluster/aalaap-1/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Aalaap-I</Link> and <Link href="/cluster/pancham/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Pancham Phase 1 & 2</Link>.
              </p>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#1e293b' }}>Resale & Ready Possession</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6' }}>
                Seek immediate possession in thriving inhabited societies? 
                Browse verified inventory across <Link href="/cluster/asawari/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Asawari</Link>, <Link href="/cluster/sargam/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Sargam</Link>, and <Link href="/cluster/lalit/" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Lalit</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Google Compliant FAQPage Accordion) */}
      <HomeFaq />

      {/* Contact Section */}
      <section id="contact" className="section-padding contact-section">
        <div className="container contact-inner">
          <ScrollReveal className="contact-info">
            <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>Get in Touch</span>
            <h2 style={{ color: '#fff' }}>Talk to Our Team</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <ReraQrCode 
                reraUrl="https://maharera.maharashtra.gov.in/" 
                reraNumber="MahaRERA Registered Projects" 
                qrImage="https://nandedcitypune.com/aalaap/assets/img/img-aalaap-qr-code.png" 
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
              Our residential experts are ready to help you find the perfect home in Nanded City. Schedule a free site visit today.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${SITE_CONFIG.contact.phoneNumeric}`} style={{ color: 'rgba(255,255,255,0.9)' }}>{SITE_CONFIG.contact.phone}</a>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactForm ongoingClusters={ongoingClusters} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
