import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import ScrollReveal from '../components/ScrollReveal';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Nanded City Pune Connectivity – Sinhagad Flyover, Hinjewadi & Metro 2026",
  description: "Comprehensive connectivity and commute transit guide for Nanded City Pune. Travel times to Hinjewadi IT Park, Kothrud, Swargate via Sinhagad Road flyover, plus proposed Metro corridor and PMPML bus routes.",
  keywords: [
    "Nanded City Pune connectivity",
    "Nanded City to Hinjewadi travel time",
    "Sinhagad Road flyover Nanded City",
    "Nanded City to Kothrud distance",
    "Nanded City metro station route",
    "PMPML bus to Nanded City"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/connectivity/`,
  },
  openGraph: {
    title: "Nanded City Pune Connectivity – Transit, Flyover & Metro Guide 2026",
    description: "Commute times to Hinjewadi IT Park, Kothrud, Swargate via Sinhagad Road flyover, proposed Metro route, and PMPML bus connections.",
    url: `${SITE_CONFIG.baseUrl}/connectivity/`,
    siteName: "Nanded City Township Pune",
    type: "website",
  }
};

const transitDestinations = [
  {
    hub: "Hinjewadi IT Park (Phase 1, 2, 3)",
    distance: "18.5 km",
    carTime: "25 – 35 mins",
    twoWheelerTime: "25 – 30 mins",
    busTime: "50 mins (AC PMPML)",
    route: "Via NH-48 Katraj-Dehu Road Bypass Expressway (Direct 6-lane bypass)",
    icon: "💻",
    badge: "Key Tech Corridor"
  },
  {
    hub: "Kothrud & Karve Nagar",
    distance: "7.2 km",
    carTime: "12 – 18 mins",
    twoWheelerTime: "12 – 15 mins",
    busTime: "25 mins",
    route: "Via Mutha River Bridge connecting straight to Karve Road & Kothrud D-P Road",
    icon: "🏙️",
    badge: "Prime Residential Link"
  },
  {
    hub: "Swargate Transit Junction",
    distance: "9.8 km",
    carTime: "14 – 20 mins",
    twoWheelerTime: "15 mins",
    busTime: "28 mins (Direct Route 182)",
    route: "Via the newly operational Sinhagad Road Double-Decker Flyover (bypassing Rajaram bridge congestion)",
    icon: "🚇",
    badge: "Central Metro Hub"
  },
  {
    hub: "Warje & Chandani Chowk",
    distance: "6.5 km",
    carTime: "10 – 15 mins",
    twoWheelerTime: "10 – 12 mins",
    busTime: "20 mins",
    route: "Direct access to Mumbai-Pune Expressway connector & Western bypass",
    icon: "🛣️",
    badge: "Gateway to Mumbai"
  },
  {
    hub: "Baner & Balewadi High Street",
    distance: "16 km",
    carTime: "22 – 28 mins",
    twoWheelerTime: "20 – 25 mins",
    busTime: "45 mins",
    route: "Via NH-48 Bypass through Bavdhan & Pashan exits",
    icon: "✨",
    badge: "Lifestyle & Dining"
  },
  {
    hub: "Pune Railway Station",
    distance: "14.2 km",
    carTime: "30 – 40 mins",
    twoWheelerTime: "30 mins",
    busTime: "45 mins (Route 104)",
    route: "Via Sinhagad Flyover -> Swargate -> Nehru Road -> Pune Station",
    icon: "🚆",
    badge: "Intercity Transit"
  },
  {
    hub: "Pune International Airport (PNQ)",
    distance: "22 km",
    carTime: "45 – 55 mins",
    twoWheelerTime: "45 mins",
    busTime: "70 mins (Airport Express)",
    route: "Via NH-48 Bypass -> Pashan -> University Circle -> Airport Road",
    icon: "✈️",
    badge: "Air Travel"
  },
  {
    hub: "Khadakwasla Dam & Sinhagad Fort",
    distance: "8.5 km",
    carTime: "12 – 15 mins",
    twoWheelerTime: "12 mins",
    busTime: "20 mins",
    route: "Scenic scenic southern drive along Sinhagad Road towards Panshet & Khadakwasla",
    icon: "⛰️",
    badge: "Weekend Recreation"
  }
];

export default function ConnectivityPage() {
  const connectivitySchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Nanded City Township Pune - Connectivity & Transit Corridors",
    "description": "Transit guide and travel times for Nanded City Pune via Sinhagad Road flyover, NH-48 bypass, and proposed Metro corridor.",
    "url": `${SITE_CONFIG.baseUrl}/connectivity/`,
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(connectivitySchema) }}
      />

      <div style={{ backgroundColor: '#0f172a', color: '#fff', padding: '120px 0 60px', position: 'relative' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Connectivity & Commute Guide' }
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
            Infrastructure & Transit Matrix
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
            Nanded City Pune Connectivity & Commute Guide (2026)
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '780px', lineHeight: '1.7' }}>
            Discover how the newly operational Sinhagad Road Double-Decker Flyover, the NH-48 bypass, and the planned Khadakwasla-Swargate Metro line connect Nanded City to Hinjewadi, Kothrud, and Central Pune.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 0 100px', backgroundColor: '#f8fafc' }}>
        <div className="container">
          
          {/* Key Transit Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>🌉</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Sinhagad Road Flyover</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                Fully operational 2.5 km flyover eliminating the notorious Anandnagar and Rajaram Bridge bottleneck. Cuts travel time to Swargate to just 14 mins.
              </p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>💻</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Hinjewadi IT Corridor</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                Direct access onto NH-48 Katraj-Dehu Road Bypass allows IT engineers to commute to Phase 1, 2, and 3 in 25–35 mins without touching city signals.
              </p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>🚇</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Proposed Pune Metro</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                The Maharashtra Metro Rail Corporation (MahaMetro) Khadakwasla-Swargate line passes directly past Nanded City, providing future high-speed rapid rail transit.
              </p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>🚌</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>PMPML & Township Buses</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                Dedicated bus terminus right at Nanded City Main Gate with regular AC and non-AC buses running to Swargate, Pune Station, and Katraj every 10–15 mins.
              </p>
            </div>
          </div>

          {/* Commute Time Matrix */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--primary-green)', fontWeight: '800' }}>
                Distance & Transit Benchmarks
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', margin: '4px 0 0' }}>
                Travel Time from Nanded City to Key Pune Hubs
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {transitDestinations.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    border: '1.5px solid #e2e8f0',
                    padding: '24px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.6rem' }}>{item.icon}</span>
                        <div>
                          <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{item.hub}</h3>
                          <span style={{ fontSize: '0.82rem', color: 'var(--primary-green)', fontWeight: '700' }}>{item.distance} away</span>
                        </div>
                      </div>
                      <span style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.72rem', fontWeight: '700', padding: '4px 8px', borderRadius: '4px' }}>
                        {item.badge}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '10px', marginBottom: '12px', fontSize: '0.85rem' }}>
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.72rem', display: 'block' }}>🚗 By Car:</span>
                        <strong style={{ color: '#0f172a' }}>{item.carTime}</strong>
                      </div>
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.72rem', display: 'block' }}>🏍️ By Bike:</span>
                        <strong style={{ color: '#0f172a' }}>{item.twoWheelerTime}</strong>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                      <strong>Route:</strong> {item.route}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Township Mobility */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '40px', border: '1.5px solid #e2e8f0' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
                Internal Township Mobility & 40-Meter Wide Spine Roads
              </h2>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                Inside Nanded City, traffic flows smoothly thanks to the <strong>40-meter wide arterial spine roads</strong> lined with dedicated pedestrian walking tracks and bicycle pathways. Unlike standard standalone projects in Dhayari or Sinhagad Road with narrow approach lanes, Nanded City has:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>RFID Boom Barriers</strong>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Automated vehicular entry for residents; dedicated visitor verification gates.</span>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Internal Feeder Shuttles</strong>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Frequent e-rickshaws and shuttle services connecting clusters to Destination Center.</span>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Dedicated School Bus Bays</strong>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Zero traffic interference during morning school drop-offs at NCPS and Pawar Public School.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  );
}
