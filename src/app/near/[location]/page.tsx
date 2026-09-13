import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { locations, LocationData } from '../../../data/locations';
import { clusters } from '../../../data/clusters';
import { SITE_CONFIG } from '@/config/site';
import SearchIntelligence from '../../components/SearchIntelligence';
import ROICalculator from '../../components/ROICalculator';
import Testimonials from '../../components/Testimonials';

interface LocationParams {
  location: string;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<LocationParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const loc = locations.find((l) => l.slug === resolvedParams.location);
  if (!loc) return {};
  
  return {
    title: `Flats near ${loc.name} Pune | 2, 2.5, 3 BHK & Plots in Nanded City`,
    description: `Searching for flats near ${loc.name}? Discover Nanded City Township, just ${loc.distance} (${loc.commuteTime}) away. 2, 2.5, 3 BHK luxury flats & NA plots with 24x7 water & MahaRERA.`,
    keywords: `${loc.metaKeywords}, Flats near ${loc.name}, Real estate ${loc.name}, 2 BHK near ${loc.name}, 3 BHK near ${loc.name}, Nanded City Pune`,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/near/${loc.slug}/`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<LocationParams> }) {
  const resolvedParams = await params;
  const loc = locations.find((l) => l.slug === resolvedParams.location);
  if (!loc) notFound();

  // Curate clusters based on the location's specific recommendation list
  const featuredClusters = clusters.filter(c => loc.recommendedClusters.includes(c.id));
  // If fewer than 4 matched, pad with top flagship clusters
  const displayClusters = featuredClusters.length >= 3 
    ? featuredClusters 
    : clusters.filter(c => ['saajgiri', 'harmony', 'aalaap-1', 'melody-1', 'asawari', 'pancham'].includes(c.id));

  const otherLocations = locations.filter(l => l.slug !== loc.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_CONFIG.baseUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${SITE_CONFIG.baseUrl}/projects/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Flats Near ${loc.name}`,
        "item": `${SITE_CONFIG.baseUrl}/near/${loc.slug}/`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": loc.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Properties near ${loc.name} in Nanded City Township Pune`,
    "description": `MahaRERA verified residential inventory near ${loc.name} across Nanded City Township.`,
    "itemListElement": displayClusters.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `${SITE_CONFIG.baseUrl}/cluster/${c.id}/`,
      "name": `${c.name} - ${c.bhk} (${c.price})`
    }))
  };

  return (
    <main style={{ backgroundColor: '#fff', color: '#1e293b' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema, itemListSchema]) }}
      />
      
      {/* Hero Section */}
      <section style={{ paddingTop: '140px', paddingBottom: '70px', backgroundColor: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', backgroundColor: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            <span>📍 Just {loc.distance} from {loc.name}</span>
            <span>·</span>
            <span>⚡ {loc.commuteTime}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', background: 'linear-gradient(to right, #fff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Flats Near {loc.name}, Pune – 2, 2.5, 3 BHK & Plots in Nanded City
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', fontWeight: '600', marginBottom: '16px' }}>
            {loc.heroTagline}
          </p>

          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', maxWidth: '850px', margin: '0 auto 32px' }}>
            {loc.overview}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#featured-projects" style={{ padding: '14px 32px', backgroundColor: 'var(--accent-gold)', color: '#0f172a', borderRadius: '100px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
              Explore Available Residences →
            </a>
            <a href="#market-comparison" style={{ padding: '14px 32px', backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '100px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>
              Standalone vs Township Comparison
            </a>
          </div>
        </div>
      </section>

      {/* Micro-Market Real Estate Metrics Grid */}
      <section style={{ backgroundColor: '#f8fafc', padding: '36px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Distance</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginTop: '4px' }}>{loc.distance}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: '600', marginTop: '2px' }}>{loc.commuteTime}</div>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{loc.name} Standalone Rate</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#64748b', marginTop: '4px' }}>{loc.avgRateStandalone}</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>Avg. standalone building</div>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Nanded City Rate</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-gold)', marginTop: '4px' }}>{loc.avgRateTownship}</div>
              <div style={{ fontSize: '0.78rem', color: '#16a34a', fontWeight: '600', marginTop: '2px' }}>700-Acre Master Township</div>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Rental Yield</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#16a34a', marginTop: '4px' }}>{loc.rentalYield}</div>
              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>High corporate demand</div>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison Matrix */}
      <section id="market-comparison" style={{ padding: '70px 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Real Estate Reality Check
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0', fontWeight: '800' }}>
              Buying Standalone Flat in {loc.name} vs Nanded City Township
            </h2>
            <p style={{ color: '#64748b', maxWidth: '680px', margin: '0 auto' }}>
              Understand why hundreds of families across {loc.name} choose an integrated 700-acre township lifestyle over isolated standalone apartment societies.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: '#fff' }}>
                  <th style={{ padding: '16px 20px', fontWeight: '700', width: '25%' }}>Lifestyle Parameter</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700', width: '37.5%', backgroundColor: '#1e293b' }}>Standalone in {loc.name}</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700', width: '37.5%', backgroundColor: 'rgba(212,175,55,0.2)', color: 'var(--accent-gold)' }}>Nanded City Township (Just {loc.distance})</th>
                </tr>
              </thead>
              <tbody>
                {loc.comparisons.map((c, idx) => (
                  <tr key={c.feature} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '16px 20px', fontWeight: '700', color: '#0f172a' }}>{c.feature}</td>
                    <td style={{ padding: '16px 20px', color: '#64748b' }}>❌ {c.standalone}</td>
                    <td style={{ padding: '16px 20px', color: '#0f172a', fontWeight: '600' }}>✅ {c.nandedCity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Upgrading Makes Sense */}
      <section style={{ padding: '60px 0', backgroundColor: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Township Superiority
            </span>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', margin: '8px 0', fontWeight: '800' }}>
              Why Homebuyers from {loc.name} Choose Nanded City
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {loc.whyUpgrade.map((point, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>⭐</div>
                <p style={{ color: '#334155', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section id="featured-projects" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Tailored Inventory
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0', fontWeight: '800' }}>
              Featured Residences Recommended for {loc.name} Buyers
            </h2>
            <p style={{ color: '#64748b' }}>
              Curated configurations matching the preferences of families and professionals relocating from {loc.name}.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {displayClusters.map((c) => (
              <div 
                key={c.id}
                style={{
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link href={`/cluster/${c.id}/`} style={{ position: 'relative', height: '220px', display: 'block' }}>
                  <Image src={c.image} alt={`${c.name} near ${loc.name} - Flats in Nanded City Pune`} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '800', backgroundColor: c.type === 'new' ? '#0284c7' : '#16a34a', color: '#fff' }}>
                    {c.status}
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '6px 12px', borderRadius: '4px', fontSize: '0.88rem', fontWeight: '800', backgroundColor: 'rgba(15,23,42,0.9)', color: 'var(--accent-gold)' }}>
                    {c.price}
                  </div>
                </Link>
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                    <Link href={`/cluster/${c.id}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {c.name}
                    </Link>
                  </h3>
                  <div style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '12px', fontWeight: '500' }}>
                    {c.bhk} · 📐 {c.area}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', flexGrow: 1, marginBottom: '20px' }}>
                    {c.description.slice(0, 120)}...
                  </p>
                  <Link 
                    href={`/cluster/${c.id}/`}
                    style={{
                      padding: '12px',
                      backgroundColor: '#0f172a',
                      color: '#fff',
                      textAlign: 'center',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '0.88rem'
                    }}
                  >
                    View Floor Plans & Pricing →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link 
              href="/projects/" 
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                border: '1.5px solid var(--accent-gold)',
                borderRadius: '100px',
                color: '#0f172a',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '0.95rem'
              }}
            >
              Explore All 20 Township Clusters & Full Price Matrix →
            </Link>
          </div>
        </div>
      </section>

      {/* Transit & Infrastructure Guide */}
      <section style={{ padding: '60px 0', backgroundColor: '#0f172a', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)', display: 'block', textAlign: 'center' }}>
            Seamless Connectivity
          </span>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', margin: '8px 0 24px', fontWeight: '800' }}>
            Commuting from {loc.name} to Nanded City Pune
          </h2>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', lineHeight: '1.7', fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>
            <p style={{ marginBottom: '16px' }}>
              <strong>Direct Route:</strong> {loc.routeDescription}
            </p>
            <p style={{ marginBottom: '16px' }}>
              <strong>Commute Impact:</strong> With the newly commissioned Sinhagad Road flyover, the commute from {loc.name} to Nanded City takes just <strong>{loc.commuteTime}</strong>, completely bypassing surface-level intersection congestion.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Public Transit:</strong> Frequent PMPML bus services connect {loc.name} directly to Nanded City Main Gate, Destination Center, and Pawar Public School. Furthermore, the proposed Swargate-Khadakwasla Metro line will feature a dedicated station at Nanded City, future-proofing your transit needs.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ Accordion) */}
      <section style={{ padding: '70px 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Got Questions?
            </span>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', margin: '8px 0', fontWeight: '800' }}>
              Frequently Asked Questions for Buyers Near {loc.name}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {loc.faqs.map((faq, index) => (
              <details 
                key={index}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '18px 24px',
                  cursor: 'pointer'
                }}
              >
                <summary style={{ fontWeight: '700', fontSize: '1.05rem', color: '#0f172a', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{faq.question}</span>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginLeft: '12px' }}>+</span>
                </summary>
                <p style={{ marginTop: '14px', color: '#475569', lineHeight: '1.7', fontSize: '0.95rem', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div id="explore">
        <SearchIntelligence />
      </div>

      <ROICalculator />
      <Testimonials />

      {/* Hyperlocal Connectivity Mesh */}
      <section style={{ padding: '60px 0', backgroundColor: '#f1f5f9', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Pune Real Estate Network
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#0f172a', margin: '6px 0', fontWeight: '700' }}>
              Explore Flats Near Other Pune & Sinhagad Road Localities
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
              Nanded City Township serves as the central residential landmark for South-West and Central Pune.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {otherLocations.map((other) => (
              <Link 
                key={other.slug}
                href={`/near/${other.slug}/`}
                style={{
                  padding: '8px 18px',
                  backgroundColor: '#fff',
                  borderRadius: '100px',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                📍 Flats Near {other.name} ({other.distance})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Authorised Partner Compliance Note */}
      <section style={{ padding: '30px 20px', backgroundColor: '#fff', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: '1.6', margin: 0 }}>
            Marketed by <strong>PropSmart Realty</strong>, Authorized Channel Partner for Nanded City Township (MahaRERA: <strong>A7744009295</strong>). Project registered under MahaRERA. The information provided on this page is for guidance purposes to assist property seekers comparing residential options near {loc.name} with Nanded City Township Pune.
          </p>
        </div>
      </section>
    </main>
  );
}

