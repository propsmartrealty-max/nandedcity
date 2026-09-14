"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Amenity {
  title: string;
  desc: string;
  icon: string;
  category: 'Education' | 'Healthcare' | 'Shopping' | 'Sports' | 'Civic' | 'Utilities';
  schemaType: 'School' | 'Hospital' | 'LocalBusiness' | 'CivicStructure' | 'SportsActivityLocation';
}

const amenities: Amenity[] = [
  { 
    title: "Nanded City Public School (ICSE)", 
    desc: "Premier on-campus ICSE & CBSE schooling with Pawar Public School nearby. Safe pedestrian walkways for students.", 
    icon: "🎓", 
    category: "Education",
    schemaType: "School"
  },
  { 
    title: "Sahyadri Multispeciality Hospital", 
    desc: "24/7 internal hospital equipped with trauma care, intensive care units, diagnostic labs, and dedicated ambulance service.", 
    icon: "🏥", 
    category: "Healthcare",
    schemaType: "Hospital"
  },
  { 
    title: "Destination Centre I & II", 
    desc: "Twin destination shopping centers housing multinational retail brands, daily convenience supermarkets, banks, and dining avenues.", 
    icon: "🛒", 
    category: "Shopping",
    schemaType: "LocalBusiness"
  },
  { 
    title: "Kridaangan Sports Complex & Club Harmony", 
    desc: "Olympic-grade sports hub featuring swimming pools, synthetic tennis courts, indoor badminton courts, cricket pitch, and skating rink.", 
    icon: "🏟️", 
    category: "Sports",
    schemaType: "SportsActivityLocation"
  },
  { 
    title: "Captive Water Treatment Plant (WTP)", 
    desc: "Township-owned automated water purification and distribution plant providing 24x7 treated, potable water to every apartment.", 
    icon: "💧", 
    category: "Utilities",
    schemaType: "CivicStructure"
  },
  { 
    title: "Zero-Discharge Sewage Treatment Plant (STP)", 
    desc: "Eco-friendly biological STP recycling 100% of treated wastewater for flushing and lush green landscape irrigation.", 
    icon: "🌱", 
    category: "Utilities",
    schemaType: "CivicStructure"
  },
  { 
    title: "Dedicated 22 kV MSEB Substation", 
    desc: "High-capacity captive power substation with underground HT/LT cabling, eliminating power cuts and overhead wire hazards.", 
    icon: "⚡", 
    category: "Utilities",
    schemaType: "CivicStructure"
  },
  { 
    title: "Symphony IT Park Micro-Economy", 
    desc: "Dedicated commercial technology towers hosting IT/ITES companies, enabling walk-to-work culture for township residents.", 
    icon: "🏢", 
    category: "Civic",
    schemaType: "LocalBusiness"
  },
  { 
    title: "Centralized CCTV Command & Fire Station", 
    desc: "24/7 command center with continuous CCTV monitoring, boom barriers, security patrols, and an internal fire brigade station.", 
    icon: "🛡️", 
    category: "Civic",
    schemaType: "CivicStructure"
  },
  { 
    title: "Internal Concrete Spine Roads & Cycling Tracks", 
    desc: "Wide 4-to-6 lane concrete road network, pedestrian footpaths, and dedicated jogging and cycling tracks across 700 acres.", 
    icon: "🚴", 
    category: "Civic",
    schemaType: "CivicStructure"
  }
];

export default function TownshipEcosystem() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nanded City Township Pune Infrastructure Ecosystem",
    "description": "Comprehensive municipal and civic infrastructure across the 700-acre Nanded City Township Pune.",
    "itemListElement": amenities.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": a.schemaType,
        "name": a.title,
        "description": a.desc,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nanded City, Sinhagad Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        }
      }
    }))
  };

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }} aria-label="Township Infrastructure Ecosystem">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-eyebrow">700-Acre Master-Planned Infrastructure</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginTop: '12px', color: '#0f172a', fontWeight: '800' }}>
            A Self-Reliant Civic & Ecological Fortress
          </h2>
          <p style={{ maxWidth: '750px', margin: '16px auto 0', color: '#64748b', fontSize: '1rem', lineHeight: '1.6' }}>
            Nanded City Township Pune operates as a self-contained municipal ecosystem. From captive water and power utilities to internal schools, hospitals, and IT parks, discover the infrastructure powering 15,000+ resident families.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {amenities.map((a, idx) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.05, 0.3), duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-interactive shimmer-hover"
              style={{
                padding: '32px',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{a.icon}</div>
              <span style={{ 
                fontSize: '0.72rem', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                color: 'var(--accent-gold)',
                backgroundColor: 'rgba(197, 168, 114, 0.12)',
                padding: '4px 12px',
                borderRadius: '100px',
                display: 'inline-block',
                marginBottom: '12px'
              }}>
                {a.category}
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '10px', color: '#0f172a' }}>{a.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/infrastructure/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#0f172a',
              color: 'var(--accent-gold)',
              border: '1px solid rgba(197, 168, 114, 0.4)',
              padding: '16px 36px',
              borderRadius: '100px',
              fontWeight: '700',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)'
            }}
          >
            <span>Explore Complete 700-Acre Infrastructure Authority Guide</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
