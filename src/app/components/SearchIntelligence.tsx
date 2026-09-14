"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ECOSYSTEM_KEYWORD_TAXONOMY } from '@/data/ecosystemKeywords';

export default function SearchIntelligence() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedKeywords = activeTab === "all"
    ? ECOSYSTEM_KEYWORD_TAXONOMY.flatMap(c => c.keywords)
    : ECOSYSTEM_KEYWORD_TAXONOMY.find(c => c.id === activeTab)?.keywords || [];

  return (
    <section 
      style={{ backgroundColor: '#ffffff', padding: '70px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}
      aria-label="Nanded City Knowledge Graph & Search Directory"
    >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Integrated Township Entity Graph & Search Directory
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', color: '#0f172a', fontWeight: '800', marginTop: '8px', marginBottom: '12px' }}>
              Nanded City Township Pune Directory & Ecosystem Matrix
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.6' }}>
              Explore certified configurations, MahaRERA registrations, 20+ residential clusters, self-sustainable 700-acre infrastructure silos, arterial connectivity, and institutional investment metrics.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={() => setActiveTab("all")}
              style={{
                padding: '8px 18px',
                borderRadius: '30px',
                border: activeTab === "all" ? '1px solid var(--accent-gold)' : '1px solid #e2e8f0',
                backgroundColor: activeTab === "all" ? 'var(--accent-gold)' : '#f8fafc',
                color: activeTab === "all" ? '#fff' : '#475569',
                fontWeight: '600',
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              All Entities ({ECOSYSTEM_KEYWORD_TAXONOMY.flatMap(c => c.keywords).length})
            </button>
            {ECOSYSTEM_KEYWORD_TAXONOMY.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '30px',
                  border: activeTab === cat.id ? '1px solid var(--accent-gold)' : '1px solid #e2e8f0',
                  backgroundColor: activeTab === cat.id ? 'var(--accent-gold)' : '#f8fafc',
                  color: activeTab === cat.id ? '#fff' : '#475569',
                  fontWeight: '600',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.name} ({cat.keywords.length})
              </button>
            ))}
          </div>

          {/* Directory Link Pills Grid */}
          <motion.div 
            layout
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
          >
            {displayedKeywords.map((k, idx) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: Math.min(idx * 0.015, 0.25) }}
              >
                <Link 
                  href={k.href}
                  className="search-intel-pill"
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.84rem', 
                    padding: '8px 16px', 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '100px',
                    color: '#334155',
                    fontWeight: '600',
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <span>🔍</span>
                  <span>{k.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Google Compliance Semantic Answer-First Information Cards */}
          <div 
            style={{ 
              marginTop: '16px',
              padding: '32px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0',
              fontSize: '0.92rem', 
              color: '#475569', 
              lineHeight: '1.75' 
            }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '14px' }}>
              Township Architectural Landscape & Infrastructure Permutations in Nanded City Pune
            </h3>
            
            <p style={{ marginBottom: '14px' }}>
              <strong>Nanded City Township Pune</strong> is a landmark 700-acre integrated mega-township on <strong>Sinhagad Road</strong>, Pune (PIN: 411041), master-planned by Nanded City Development & Construction Company Limited. Anchored by strict eco-friendly planning, over 70% of the entire land parcel remains dedicated to green open spaces, manicured avenues, and pedestrian-first public realms. Today, more than 15,000 resident families thrive across diverse residential typologies: <strong>2 BHK & 2.5 BHK modern flats</strong> (Aalaap-I, Pancham Phase 1 & 2, Bageshree, Sargam, Asawari, Lalit, Madhuvanti, Mangal Bhairav, Janaranjani, Sur), <strong>3 BHK luxury high-rise residences</strong> (Saajgiri, Kalashree, Shubh Kalyan), <strong>3.5 & 4.5 BHK palatial skyline homes</strong> (Harmony), and <strong>exclusive Branded NA Bungalow Plots</strong> (Melody I, Melody II, Melody III, Rhythm, Dhanashree).
            </p>

            <p style={{ marginBottom: '14px' }}>
              <strong>Self-Sustainable 700-Acre Infrastructure Silo:</strong> Unlike standalone residential developments, Nanded City Township Pune functions as a self-reliant municipal micro-city. Its core engineering infrastructure features:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '14px' }}>
              <li><strong>Captive Water Treatment Plant (WTP):</strong> Multi-tier automated filtration and chlorination network delivering 24x7 treated, potable water to every residential cluster.</li>
              <li><strong>Zero-Discharge Sewage Treatment Plant (STP):</strong> Advanced biological wastewater treatment recycling 100% of greywater for township landscaping, flushing, and green belt irrigation.</li>
              <li><strong>Dedicated 22 kV MSEB Substation:</strong> Express power infrastructure with underground HT/LT distribution, eliminating overhead wire hazards and ensuring high power uptime.</li>
              <li><strong>Underground Utility & Optical Fiber Ducting:</strong> Future-proof civic ducting with high-speed FTTH broadband networks and automated stormwater drainage preventing waterlogging.</li>
              <li><strong>Internal Fire Station & Central Command Security:</strong> 24/7 centralized surveillance room monitoring hundreds of IP CCTV cameras, controlled boom barriers, and an on-campus rapid-response fire brigade station and police outpost.</li>
            </ul>

            <p style={{ marginBottom: '14px' }}>
              <strong>Civic, Social & Commercial Ecosystem:</strong> Within the township gates, residents have immediate walk-to-school access to prestigious institutions such as <em>Nanded City Public School (ICSE)</em> and Pawar Public School. Healthcare needs are served around the clock by <em>Sahyadri Multispeciality Hospital</em> and localized clinics. Economic vibrancy is supported by the <em>Symphony IT Park</em>, which hosts prominent IT/ITES enterprises, alongside twin commercial centers—<em>Destination Center I & II</em>—housing banks, ATMs, retail supermarkets, restaurants, and daily conveniences. For active living, the <em>Kridaangan Olympic Sports Complex</em> and <em>Club Harmony Gymkhana</em> offer professional tennis courts, swimming pools, badminton halls, and athletic tracks.
            </p>

            <p style={{ margin: 0 }}>
              <strong>Regional Connectivity & Investment Fundamentals:</strong> Benefiting from the newly operational <strong>Sinhagad Road multi-tier flyover corridor</strong>, Nanded City Township Pune connects directly to Kothrud in 15 minutes, Warje in 10 minutes, and Hinjewadi IT Park via the Mumbai-Bangalore Highway bypass. Real estate fundamentals demonstrate a consistent <strong>12.5% YoY capital appreciation</strong> and strong <strong>25% rental yields</strong>, establishing Nanded City alongside Magarpatta City and Amanora Park Town as Pune’s benchmark master-planned township investments. Consult authorized channel partner <strong>PropSmart Realty (MahaRERA: A7744009295)</strong> for certified pricing, floor plans, and priority site visits.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .search-intel-pill:hover {
          background-color: var(--accent-gold) !important;
          color: #ffffff !important;
          border-color: var(--accent-gold) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(201, 168, 76, 0.25) !important;
        }
      `}</style>
    </section>
  );
}
