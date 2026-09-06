import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '../../../data/locations';
import { clusters } from '../../../data/clusters';
import { SITE_CONFIG } from '@/config/site';
import DynamicHeader from '../../components/DynamicHeader';
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
    title: `Premium Flats near ${loc.name} Pune | Nanded City Township`,
    description: `Looking for flats near ${loc.name}? Discover Nanded City Township Pune, just ${loc.distance} away. Explore premium 2, 2.5, & 3 BHK apartments and NA plots with MahaRERA compliance.`,
    keywords: `Flats near ${loc.name}, Real Estate near ${loc.name}, 2 BHK near ${loc.name}, 3 BHK near ${loc.name}, Nanded City Township Pune near ${loc.name}, ${SITE_CONFIG.seo.primaryKeywords}`,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/near/${loc.slug}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<LocationParams> }) {
  const resolvedParams = await params;
  const loc = locations.find((l) => l.slug === resolvedParams.location);
  if (!loc) notFound();

  const featuredClusters = clusters.filter(c => 
    ['saajgiri', 'harmony', 'aalaap-1', 'melody-1', 'asawari', 'pancham'].includes(c.id)
  );

  return (
    <main>
      <DynamicHeader />
      
      {/* Hero Section */}
      <section style={{ paddingTop: '140px', paddingBottom: '80px', backgroundColor: '#0f172a', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Premium Real Estate Near {loc.name}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '32px' }}>
            Why settle for crowded spaces when you can upgrade to a 700-acre township lifestyle? 
            Nanded City Township Pune is just <strong>{loc.distance}</strong> from {loc.name}, offering unmatched luxury, MahaRERA compliant properties, and serene river views.
          </p>
          <a href="#featured-projects" className="btn" style={{ padding: '16px 32px', backgroundColor: 'var(--accent-gold)', color: '#0f172a', borderRadius: '100px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>
            Explore Township Projects
          </a>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section id="featured-projects" style={{ padding: '70px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Just {loc.distance} from {loc.name}
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0', fontWeight: '800' }}>
              Featured Nanded City Residences
            </h2>
            <p style={{ color: '#64748b' }}>
              Choose from under-construction high rises, NA bungalow plots, and ready-to-move family societies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {featuredClusters.map((c) => (
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
                <Link href={`/cluster/${c.id}`} style={{ position: 'relative', height: '200px', display: 'block' }}>
                  <Image src={c.image} alt={`${c.name} near ${loc.name}`} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '800', backgroundColor: c.type === 'new' ? '#0284c7' : '#16a34a', color: '#fff' }}>
                    {c.status}
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 10px', borderRadius: '4px', fontSize: '0.82rem', fontWeight: '800', backgroundColor: 'rgba(15,23,42,0.85)', color: 'var(--accent-gold)' }}>
                    {c.price}
                  </div>
                </Link>
                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                    <Link href={`/cluster/${c.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {c.name}
                    </Link>
                  </h3>
                  <div style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '12px' }}>
                    {c.bhk} · 📐 {c.area}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1, marginBottom: '16px' }}>
                    {c.description.slice(0, 110)}...
                  </p>
                  <Link 
                    href={`/cluster/${c.id}`}
                    style={{
                      padding: '10px',
                      backgroundColor: '#0f172a',
                      color: '#fff',
                      textAlign: 'center',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '0.85rem'
                    }}
                  >
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link 
              href="/projects" 
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                border: '1.5px solid var(--accent-gold)',
                borderRadius: '100px',
                color: '#0f172a',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '0.92rem'
              }}
            >
              Explore All 20 Township Clusters & Full Price Matrix →
            </Link>
          </div>
        </div>
      </section>

      <div id="explore">
        <SearchIntelligence />
      </div>

      <ROICalculator />
      <Testimonials />
      
      {/* Footer SEO Block */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
            The Best Alternative to Buying a Flat in {loc.name}
          </h2>
          <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '0.95rem' }}>
            If you are searching for new projects, ready possession flats, or NA bungalow plots near {loc.name}, 
            Nanded City Township Pune provides a vastly superior living ecosystem. With its own public school, hospital, 
            Destination Centre, and Symphony IT Park, you gain access to world-class amenities only {loc.distance} away from {loc.name}.
          </p>
        </div>
      </section>
    </main>
  );
}
