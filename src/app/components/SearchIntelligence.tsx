"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SearchCategory {
  id: string;
  name: string;
  keywords: { label: string; href: string }[];
}

const searchCategories: SearchCategory[] = [
  {
    id: "configurations",
    name: "Configurations",
    keywords: [
      { label: "2 BHK Ready & Modern Flats", href: "/lp/2-bhk-flats" },
      { label: "2.5 BHK Flats Nanded City", href: "/cluster/aalaap-1" },
      { label: "3 BHK Luxury Flats Nanded City", href: "/lp/3-bhk-luxury" },
      { label: "3.5 & 4.5 BHK Harmony", href: "/cluster/harmony" },
      { label: "Branded NA Bungalow Plots", href: "/lp/na-bungalow-plots" },
      { label: "Melody Luxury Villa Plots", href: "/cluster/melody-1" },
      { label: "Rhythm Signature Plots", href: "/cluster/rhythm-1" },
      { label: "Dhanashree Gated Plots", href: "/cluster/dhanashree" }
    ]
  },
  {
    id: "projects",
    name: "Projects & Clusters",
    keywords: [
      { label: "Saajgiri 3 BHK High-Rise", href: "/cluster/saajgiri" },
      { label: "Harmony 3.5 & 4.5 BHK Launch", href: "/cluster/harmony" },
      { label: "Aalaap-I 2 & 3 BHK", href: "/cluster/aalaap-1" },
      { label: "Melody I, II & III Plots", href: "/cluster/melody-1" },
      { label: "Rhythm I Signature Plots", href: "/cluster/rhythm-1" },
      { label: "Dhanashree Gated Plots", href: "/cluster/dhanashree" },
      { label: "Pancham Phase 1 & 2 (P52100000288)", href: "/cluster/pancham" },
      { label: "Sargam Skyline Towers", href: "/cluster/sargam" },
      { label: "Asawari Family Cluster", href: "/cluster/asawari" },
      { label: "Bageshree Modern Homes", href: "/cluster/bageshree" },
      { label: "Kalashree Large Carpet 3 BHK", href: "/cluster/kalashree" },
      { label: "Sarang Scenic Hill-View", href: "/cluster/sarang" },
      { label: "Lalit Compact Smart Homes", href: "/cluster/lalit" },
      { label: "Madhuvanti 2 BHK Resale", href: "/cluster/madhuvanti" },
      { label: "Shubh Kalyan Luxury 3 BHK", href: "/cluster/shubh-kalyan" },
      { label: "Sur Peaceful 2 BHK", href: "/cluster/sur" },
      { label: "Mangal Bhairav 2 BHK", href: "/cluster/mangal-bhairav" },
      { label: "Janaranjani 2 BHK Flats", href: "/cluster/janaranjani" },
      { label: "All 20 Residential Clusters Directory", href: "/projects" }
    ]
  },
  {
    id: "connectivity",
    name: "Connectivity & Localities",
    keywords: [
      { label: "Flats on Sinhagad Road", href: "/near/sinhagad-road" },
      { label: "Nanded City to Kothrud (15 Mins)", href: "/near/kothrud" },
      { label: "Nanded City to Hinjewadi IT Park", href: "/near/hinjewadi" },
      { label: "Nanded City to Warje Flyover", href: "/near/warje" },
      { label: "Nanded City to Bavdhan & Highway", href: "/near/bavdhan" },
      { label: "Dhayari & Anand Nagar Properties", href: "/near/dhayari" },
      { label: "Vadgaon Budruk Connectivity", href: "/near/vadgaon-budruk" },
      { label: "Sinhagad Road Flyover Impact 2026", href: "/blog/sinhgad-road-flyover-impact-2026" }
    ]
  },
  {
    id: "infrastructure",
    name: "Township & Amenities",
    keywords: [
      { label: "Nanded City Public School (ICSE)", href: "/about-us" },
      { label: "Pawar Public School Vicinity", href: "/about-us" },
      { label: "Symphony IT Park Micro-Economy", href: "/about-us" },
      { label: "Destination Center I & II", href: "/about-us" },
      { label: "Kridaangan Olympic Sports Complex", href: "/about-us" },
      { label: "Eco-Friendly 70% Green Township", href: "/about-us" },
      { label: "Water & Sewage Self-Reliance Plant", href: "/about-us" },
      { label: "Club Harmony & Gymkhana", href: "/cluster/harmony" }
    ]
  },
  {
    id: "investment",
    name: "Investment & Comparisons",
    keywords: [
      { label: "Nanded City vs Magarpatta City", href: "/blog/nanded-city-vs-standalone-projects-roi" },
      { label: "Nanded City vs Amanora Park Town", href: "/blog/nanded-city-vs-standalone-projects-roi" },
      { label: "Nanded City vs Standalone Projects ROI", href: "/blog/nanded-city-vs-standalone-projects-roi" },
      { label: "12.5% YoY Capital Growth Data", href: "/blog" },
      { label: "25% Rental Yield & Demand", href: "/blog" },
      { label: "Nanded City Price List & Trends 2026", href: "/projects" },
      { label: "MahaRERA Legal Verification", href: "/legal-compliance" },
      { label: "Resale & Rental Assistance", href: "/contact" }
    ]
  }
];

export default function SearchIntelligence() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedKeywords = activeTab === "all"
    ? searchCategories.flatMap(c => c.keywords)
    : searchCategories.find(c => c.id === activeTab)?.keywords || [];

  return (
    <section 
      style={{ backgroundColor: '#ffffff', padding: '70px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}
      aria-label="Nanded City Knowledge Graph & Search Directory"
    >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Entity Knowledge Graph & Search Index
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', color: '#0f172a', fontWeight: '800', marginTop: '8px', marginBottom: '12px' }}>
              Nanded City Township Pune Directory
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.6' }}>
              Explore certified configurations, MahaRERA registrations, project clusters, arterial connectivity, and institutional investment metrics across the 700-acre integrated township.
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
              All Entities ({searchCategories.flatMap(c => c.keywords).length})
            </button>
            {searchCategories.map(cat => (
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
                {cat.name}
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
                transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.3) }}
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

          {/* Google Compliance Semantic Answer-First Information Card */}
          <div 
            style={{ 
              marginTop: '16px',
              padding: '28px 32px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0',
              fontSize: '0.9rem', 
              color: '#475569', 
              lineHeight: '1.7' 
            }}
          >
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Township Living & Architectural Landscape in Nanded City Pune
            </h3>
            <p style={{ marginBottom: '12px' }}>
              <strong>Nanded City Township Pune</strong> is an integrated 700-acre residential, commercial, and educational ecosystem located on <strong>Sinhagad Road</strong>, Pune (Pin: 411041). Conceived on self-sustainable urban planning principles, Nanded City preserves over 70% open green cover while accommodating more than 15,000 resident families across diverse configurations: <strong>2 & 2.5 BHK modern apartments</strong> (Aalaap-I, Pancham Phase 1 & 2, Bageshree, Sargam, Asawari, Lalit, Madhuvanti, Mangal Bhairav, Janaranjani), <strong>3 BHK luxury high-rises</strong> (Saajgiri, Kalashree, Shubh Kalyan), <strong>palatial 3.5 & 4.5 BHK residences</strong> (Harmony), and <strong>exclusive Branded NA Bungalow Plots</strong> (Melody I, II, III, Rhythm, Dhanashree).
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>Civic & Social Infrastructure:</strong> The township houses prestigious educational institutions like <em>Nanded City Public School (ICSE)</em> and Pawar Public School, healthcare dispensaries, the state-of-the-art <em>Symphony IT Park</em>, destination retail centers (Destination Center I & II), and the comprehensive <em>Kridaangan Olympic Sports Complex</em> equipped with tennis courts, skating rinks, and aquatic centers.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Connectivity & Capital Appreciation:</strong> Strategically linked to Kothrud (15 mins via the Sinhagad Road flyover corridor), Warje, Bavdhan, Swargate, and the Mumbai-Bangalore Highway, Nanded City delivers an average <strong>12.5% YoY capital growth</strong> and consistent <strong>25% rental demand</strong>, offering a resilient alternative to standalone developments and establishing itself alongside Magarpatta City and Amanora Park Town as one of Pune&apos;s premier integrated townships.
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

