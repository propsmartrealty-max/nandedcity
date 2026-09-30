import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import ScrollReveal from '../components/ScrollReveal';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Nanded City Township Directory – Schools, Hospitals & Amenities 2026",
  description: "Complete lifestyle and resident directory for Nanded City Pune. Details on Nanded City Public School (ICSE), Sahyadri Hospital, Destination Center I & II, Kridaangan sports complex, and 24/7 utility infrastructure.",
  keywords: [
    "Nanded City Pune directory",
    "Nanded City Public School ICSE",
    "Sahyadri Hospital Nanded City",
    "Destination Center Nanded City shops",
    "Kridaangan sports complex Nanded City",
    "Nanded City water supply Khadakwasla",
    "Nanded City electricity substation"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/township-directory/`,
  },
  openGraph: {
    title: "Nanded City Township Directory – Schools, Hospitals & Amenities",
    description: "Resident directory for Nanded City Pune: NCPS School, Sahyadri Hospital, Destination Center, and zero-tanker infrastructure.",
    url: `${SITE_CONFIG.baseUrl}/township-directory/`,
    siteName: "Nanded City Township Pune",
    type: "website",
  }
};

const directorySections = [
  {
    category: "Schools & Education",
    icon: "🎓",
    badge: "Within Township",
    items: [
      {
        name: "Nanded City Public School (NCPS)",
        type: "ICSE Board (Nursery to Std X)",
        location: "Internal Central Sector, Nanded City",
        details: "Top-ranked ICSE school with science labs, basketball courts, and internal bus shuttle pickup from all cluster gates."
      },
      {
        name: "Pawar Public School",
        type: "ICSE Curriculum",
        location: "Near Township Main Entrance, Sinhagad Road",
        details: "Established academic institution with extensive sports fields, auditorium, and digital classrooms."
      },
      {
        name: "Daycare & Montessori Pre-Schools",
        type: "Early Childhood Learning",
        location: "Destination Center & Cluster Clubhouses",
        details: "Includes EuroKids, Kangaroo Kids, and cluster-managed toddler activity centers."
      }
    ]
  },
  {
    category: "Healthcare & Pharmacies",
    icon: "🏥",
    badge: "24/7 Medical Care",
    items: [
      {
        name: "Sahyadri Specialty Hospital",
        type: "Multi-Specialty Healthcare",
        location: "Township Healthcare Zone",
        details: "Full ICU facilities, 24/7 emergency trauma care, cardiology, pediatrics, and diagnostic pathology lab."
      },
      {
        name: "Destination Center Medical Clinics",
        type: "Family Physicians & Specialists",
        location: "Destination Center I, 1st & 2nd Floors",
        details: "Dental clinics, ophthalmology, physiotherapy, and pediatric general OPD practices."
      },
      {
        name: "Apollo Pharmacy & MedPlus",
        type: "24/7 Retail Pharmacies",
        location: "Destination Center I & Main Gate Commercial Complex",
        details: "Round-the-clock prescription fulfillment with free home delivery across all 20 residential clusters."
      }
    ]
  },
  {
    category: "Retail, Banking & Groceries",
    icon: "🛍️",
    badge: "Everyday Convenience",
    items: [
      {
        name: "Destination Center I & II",
        type: "Commercial & Retail Complexes",
        location: "Township Central Boulevard",
        details: "Over 200 retail outlets including supermarkets, clothing, electronics, salons, and home decor."
      },
      {
        name: "Nationalized & Private Banks",
        type: "Full Branch Services & 24/7 ATMs",
        location: "Destination Center Commercial Plaza",
        details: "State Bank of India (SBI), HDFC Bank, ICICI Bank, and Bank of Maharashtra branches with safety locker facilities."
      },
      {
        name: "Supermarkets & Organic Markets",
        type: "Daily Groceries & Essentials",
        location: "Destination Center & Cluster Convenience Marts",
        details: "Reliance Smart Point, Daily Fresh, organic farm vegetable bazaars held twice weekly."
      }
    ]
  },
  {
    category: "Sports & Clubhouses",
    icon: "🏊",
    badge: "Olympic-Grade Facilities",
    items: [
      {
        name: "Kridaangan Sports Complex",
        type: "Township Mega Sports Hub",
        location: "Adjacent to Central Greens",
        details: "Olympic-length 50-meter swimming pool, 4 synthetic tennis courts, roller skating rink, and cricket nets."
      },
      {
        name: "Club Harmony",
        type: "Luxury Resident Gymkhana",
        location: "Harmony & Saajgiri Zone",
        details: "State-of-the-art gymnasium, steam & sauna, yoga and aerobics studio, and multi-purpose banquet hall."
      },
      {
        name: "Riverside Jogging & Cycling Tracks",
        type: "Outdoor Wellness Corridors",
        location: "Along Mutha River Waterfront",
        details: "Over 5 km of vehicle-free landscaped riverside walkways under mature shade trees."
      }
    ]
  }
];

export default function TownshipDirectoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nanded City Township Directory – Schools, Hospitals & Amenities",
    "description": "Directory of schools, hospitals, banks, and sports infrastructure in Nanded City Pune.",
    "url": `${SITE_CONFIG.baseUrl}/township-directory/`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ backgroundColor: '#0f172a', color: '#fff', padding: '120px 0 60px', position: 'relative' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Township Directory & Amenities' }
            ]}
          />
          <span style={{
            display: 'inline-block',
            backgroundColor: 'var(--accent-gold)',
            color: '#000',
            padding: '6px 14px',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '16px'
          }}>
            Resident Lifestyle Index
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
            Nanded City Pune Township Directory (2026)
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '780px', lineHeight: '1.7' }}>
            Everything you need within a 5-minute radius. Explore the on-premise ICSE schools, super-specialty hospital, Destination Center retail, Olympic sports complex, and self-sufficient civic utilities.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 0 100px', backgroundColor: '#f8fafc' }}>
        <div className="container">

          {/* Directory Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '60px' }}>
            {directorySections.map((sec, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '20px', border: '1.5px solid #e2e8f0', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{sec.icon}</span>
                    <h2 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{sec.category}</h2>
                  </div>
                  <span style={{ backgroundColor: '#f0fdf4', color: 'var(--primary-green)', border: '1px solid #bbf7d0', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700' }}>
                    {sec.badge}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  {sec.items.map((item, i) => (
                    <div key={i} style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>{item.name}</h3>
                      <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--accent-gold)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                        {item.type}
                      </span>
                      <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', margin: '0 0 10px' }}>
                        {item.details}
                      </p>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        📍 {item.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Self-Sustaining Utilities Section */}
          <div style={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '24px', padding: '48px 36px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)', fontWeight: '800', display: 'block', marginBottom: '8px' }}>
                  Zero-Tanker & Zero-Load-Shedding Township
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 12px' }}>
                  The 4 Pillars of Nanded City Civic Infrastructure
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.7', margin: 0 }}>
                  While Pune faces regular summer tanker crises and power cuts, Nanded City residents enjoy 100% self-sufficient civic engineering.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>💧</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px', color: '#38bdf8' }}>Captive Water Treatment Plant</h3>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
                    Direct raw water pipeline from Khadakwasla reservoir. On-site multi-stage purification ensures 24/7 potable drinking water.
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>⚡</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px', color: '#facc15' }}>Dedicated 22 kV MSEB Substation</h3>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
                    Dual-source underground high-tension cable supply guarantees uninterrupted electric power with zero domestic load shedding.
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>🌱</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px', color: '#4ade80' }}>Eco STP Water Recycling</h3>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
                    Advanced biological sewage treatment plants recycle 100% of wastewater for flushing and watering the 700 acres of green cover.
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>🛡️</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px', color: '#a78bfa' }}>Captive Fire Station & Security</h3>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
                    On-site dedicated fire tender, rapid emergency team, 250+ CCTV surveillance cameras, and gated perimeter security.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  );
}
