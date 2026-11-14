"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { clusters } from '@/data/clusters';

type ExplorerTab = 'clusters' | 'infrastructure' | 'tools';

interface InfrastructureItem {
  id: string;
  name: string;
  icon: string;
  spec: string;
  badge: string;
  href: string;
}

interface BuyerToolItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  badge: string;
  href: string;
}

const INFRASTRUCTURE_FACILITIES: InfrastructureItem[] = [
  {
    id: "water",
    name: "Captive Water Treatment Plant (WTP)",
    icon: "💧",
    spec: "Direct raw water feed from Khadakwasla Dam with automated multi-tier chlorination. 100% tanker-free continuous supply.",
    badge: "24/7 Potable Water",
    href: "/infrastructure/#water"
  },
  {
    id: "sewage",
    name: "Zero-Discharge Sewage Treatment Plant (STP)",
    icon: "♻️",
    spec: "Eco biological wastewater recycling system treating 100% greywater for landscaping, green belts, and flushing.",
    badge: "Zero-Discharge Eco",
    href: "/infrastructure/#sewage"
  },
  {
    id: "power",
    name: "Dedicated 22 kV MSEB Electrical Substation",
    icon: "⚡",
    spec: "Independent on-campus high-tension substation with underground distribution ducts, eliminating overhead cables.",
    badge: "High Uptime Power",
    href: "/infrastructure/#power"
  },
  {
    id: "schools",
    name: "Nanded City Public School (ICSE)",
    icon: "🎓",
    spec: "Premier on-premise ICSE educational institution spanning Nursery to Grade 10 with expansive sports playgrounds.",
    badge: "Walk-to-School",
    href: "/infrastructure/#schools"
  },
  {
    id: "healthcare",
    name: "Sahyadri Multispeciality Hospital",
    icon: "🏥",
    spec: "Round-the-clock emergency medical response, intensive care facilities, localized clinics, and 24x7 pharmacies.",
    badge: "24/7 Healthcare",
    href: "/infrastructure/#healthcare"
  },
  {
    id: "retail",
    name: "Destination Center I & II Shopping Malls",
    icon: "🛍️",
    spec: "Twin integrated commercial centers hosting retail supermarkets, nationalized banks, ATMs, pharmacies, and dining.",
    badge: "Twin Retail Hubs",
    href: "/infrastructure/#retail"
  },
  {
    id: "it-park",
    name: "Symphony IT Business Park",
    icon: "💼",
    spec: "Over 1.5 million sq.ft. of Grade-A enterprise IT/ITES commercial workspaces offering a true walk-to-work lifestyle.",
    badge: "Walk-to-Work IT",
    href: "/infrastructure/#retail"
  },
  {
    id: "sports",
    name: "Kridaangan Olympic Sports Arena",
    icon: "⚽",
    spec: "Master sports complex featuring full-sized football/cricket grounds, Olympic-spec swimming pool, and tennis courts.",
    badge: "Olympic Standards",
    href: "/infrastructure/#sports"
  },
  {
    id: "security",
    name: "Central Command 24/7 CCTV & Security",
    icon: "🛡️",
    spec: "Dedicated monitoring room overseeing 300+ IP CCTV surveillance feeds, boom barriers, and an internal fire station.",
    badge: "3-Tier Gated Security",
    href: "/infrastructure/#security"
  },
  {
    id: "broadband",
    name: "Underground FTTH Optical Fiber Ducting",
    icon: "🌐",
    spec: "All-underground civic conduits for high-speed fiber broadband (Jio, Airtel, Tata) and automated utility services.",
    badge: "100% Underground",
    href: "/infrastructure/#broadband"
  },
  {
    id: "roads",
    name: "Internal Concrete Spine Road Network",
    icon: "🛣️",
    spec: "Wide multi-lane arterial concrete roads with dedicated tree-lined pedestrian footpaths and cycling tracks.",
    badge: "Spine Boulevard",
    href: "/infrastructure/#roads"
  }
];

const BUYER_DECISION_TOOLS: BuyerToolItem[] = [
  {
    id: "master-plan",
    name: "700-Acre Master Plan & Sector Map",
    icon: "🗺️",
    description: "Explore the complete sector-by-sector layout of all 20 residential clusters, arterial spine roads, and green zones.",
    badge: "Interactive Map",
    href: "/master-plan/"
  },
  {
    id: "price-list",
    name: "2026 Master Price List & Cost Sheets",
    icon: "📊",
    description: "Verified 2026 pricing, carpet area schedules, floor-wise breakdowns, and MahaRERA certificates across all clusters.",
    badge: "2026 Verified",
    href: "/blog/nanded-city-pune-price-list-2026-carpet-area-cost-sheet/"
  },
  {
    id: "floor-plans",
    name: "Floor Plans 2, 3, 4.5 BHK & Plots PDF",
    icon: "📐",
    description: "Download certified architectural layouts, unit dimensions, and master floor plans across active clusters.",
    badge: "Architectural PDFs",
    href: "/floor-plans/"
  },
  {
    id: "resale-guide",
    name: "Resale & Rental Valuation Guide 2026",
    icon: "🔄",
    description: "Inspect 1, 2, and 3 BHK rental yields, maintenance charges, society transfer NOC procedures, and capital growth.",
    badge: "NOC & Yields",
    href: "/resale-rental-guide/"
  },
  {
    id: "emi-calculator",
    name: "Home Loan EMI & Stamp Duty Calculator",
    icon: "🧮",
    description: "Instant amortization schedules, bank interest comparison, and 7% Maharashtra stamp duty calculator.",
    badge: "Financial Planner",
    href: "/emi-calculator/"
  },
  {
    id: "compare",
    name: "Multi-Cluster Comparison Matrix",
    icon: "⚖️",
    description: "Compare carpet areas, starting prices, possession dates, and amenity tiers across Nanded City residential projects.",
    badge: "Side-by-Side",
    href: "/compare/"
  },
  {
    id: "connectivity",
    name: "Sinhagad Road Flyover & Commute Guide",
    icon: "🛣️",
    description: "Travel time benchmarks to Kothrud (15 mins), Warje (10 mins), and Hinjewadi IT Park via the Western Bypass.",
    badge: "Transit Timelines",
    href: "/connectivity/"
  },
  {
    id: "legal",
    name: "MahaRERA Legal Verification & Approvals",
    icon: "📜",
    description: "Official government RERA certificates, sanctioned layout orders, and environmental clearances for buyer safety.",
    badge: "Legal Protection",
    href: "/legal-compliance/"
  },
  {
    id: "marathi",
    name: "नांदेड सिटी मराठी निवासी दालन (Marathi Hub)",
    icon: "🚩",
    description: "मराठी भाषेत सर्व गृहप्रकल्प माहिती, २ व ३ बीएचके फ्लॅट्स, मेलोडी व्हिला प्लॉट्स, आणि संपर्क केंद्र.",
    badge: "मराठी दालन",
    href: "/mr/"
  }
];

export default function SearchIntelligence() {
  const [activeTab, setActiveTab] = useState<ExplorerTab>('clusters');
  const [clusterFilter, setClusterFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter clusters dynamically
  const filteredClusters = useMemo(() => {
    let result = clusters;

    // Sub-filter
    if (clusterFilter === 'new') {
      result = result.filter(c => c.type === 'new');
    } else if (clusterFilter === '2bhk') {
      result = result.filter(c => c.bhk.toLowerCase().includes('2 bhk') || c.bhk.toLowerCase().includes('2.5'));
    } else if (clusterFilter === '3bhk') {
      result = result.filter(c => c.bhk.toLowerCase().includes('3 bhk') || c.bhk.toLowerCase().includes('3.5'));
    } else if (clusterFilter === 'plots') {
      result = result.filter(c => c.bhk.toLowerCase().includes('plot'));
    } else if (clusterFilter === 'completed') {
      result = result.filter(c => c.type === 'completed');
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.bhk.toLowerCase().includes(q) ||
        c.price.toLowerCase().includes(q) ||
        c.rera.toLowerCase().includes(q) ||
        (c.description && c.description.toLowerCase().includes(q))
      );
    }

    return result;
  }, [clusterFilter, searchQuery]);

  return (
    <section 
      style={{ backgroundColor: '#ffffff', padding: '64px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}
      aria-label="Interactive Nanded City Township & Cluster Explorer"
    >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#705315' }}>
              Township Master Navigator
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', color: '#0f172a', fontWeight: '800', marginTop: '8px', marginBottom: '12px' }}>
              Interactive Township Cluster & Sector Explorer
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.6' }}>
              Filter across all 20 residential clusters, plotted villa communities, self-sustaining 700-acre infrastructure hubs, and official buyer decision tools.
            </p>
          </div>

          {/* Primary View Mode Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={() => setActiveTab('clusters')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                minHeight: '46px',
                borderRadius: '100px',
                border: activeTab === 'clusters' ? '1.5px solid #0f172a' : '1px solid #cbd5e1',
                backgroundColor: activeTab === 'clusters' ? '#0f172a' : '#f8fafc',
                color: activeTab === 'clusters' ? '#ffffff' : '#334155',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'clusters' ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none'
              }}
            >
              <span>🏢</span>
              <span>Residential Clusters & Plots ({clusters.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('infrastructure')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                minHeight: '46px',
                borderRadius: '100px',
                border: activeTab === 'infrastructure' ? '1.5px solid #0f172a' : '1px solid #cbd5e1',
                backgroundColor: activeTab === 'infrastructure' ? '#0f172a' : '#f8fafc',
                color: activeTab === 'infrastructure' ? '#ffffff' : '#334155',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'infrastructure' ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none'
              }}
            >
              <span>🏗️</span>
              <span>700-Acre Infrastructure Silos ({INFRASTRUCTURE_FACILITIES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('tools')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                minHeight: '46px',
                borderRadius: '100px',
                border: activeTab === 'tools' ? '1.5px solid #0f172a' : '1px solid #cbd5e1',
                backgroundColor: activeTab === 'tools' ? '#0f172a' : '#f8fafc',
                color: activeTab === 'tools' ? '#ffffff' : '#334155',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'tools' ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none'
              }}
            >
              <span>🧭</span>
              <span>Buyer Guides & Decision Tools ({BUYER_DECISION_TOOLS.length})</span>
            </button>
          </div>

          {/* TAB 1: RESIDENTIAL CLUSTERS EXPLORER */}
          {activeTab === 'clusters' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Search & Sub-Filter Bar */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '12px', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  backgroundColor: '#f8fafc',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0'
                }}
              >
                {/* Search Input */}
                <div style={{ flex: '1 1 260px', position: 'relative' }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search cluster (e.g. Saajgiri, Harmony, 2 BHK, Melody)..."
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      paddingLeft: '38px',
                      fontSize: '0.88rem',
                      borderRadius: '100px',
                      border: '1px solid #cbd5e1',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a'
                    }}
                  />
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '0.88rem' }}>
                    🔍
                  </span>
                </div>

                {/* Sub-Filter Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {[
                    { id: 'all', label: 'All (20)' },
                    { id: 'new', label: 'New / Ongoing' },
                    { id: '2bhk', label: '2 & 2.5 BHK' },
                    { id: '3bhk', label: '3 & 3.5 BHK' },
                    { id: 'plots', label: 'Villa Plots' },
                    { id: 'completed', label: 'Ready Possession' },
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setClusterFilter(f.id)}
                      style={{
                        padding: '6px 14px',
                        minHeight: '36px',
                        borderRadius: '100px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        border: clusterFilter === f.id ? '1px solid var(--accent-gold)' : '1px solid #e2e8f0',
                        backgroundColor: clusterFilter === f.id ? '#ecfdf5' : '#ffffff',
                        color: clusterFilter === f.id ? 'var(--primary-green)' : '#475569',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cluster Cards Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                  gap: '16px' 
                }}
              >
                {filteredClusters.map(c => (
                  <article 
                    key={c.id}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '14px',
                      border: '1px solid #e2e8f0',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '12px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
                    }}
                    className="cluster-explorer-card"
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                          <Link href={`/cluster/${c.id}/`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                            {c.name}
                          </Link>
                        </h3>
                        <span 
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            padding: '4px 10px',
                            borderRadius: '100px',
                            backgroundColor: c.type === 'new' ? '#ecfdf5' : '#eff6ff',
                            color: c.type === 'new' ? '#047857' : '#1d4ed8',
                            border: c.type === 'new' ? '1px solid #a7f3d0' : '1px solid #bfdbfe',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {c.status}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: '600', marginBottom: '6px' }}>
                        {c.bhk}
                      </div>

                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '10px' }}>
                        📐 {c.area}
                      </div>

                      {c.rera && (
                        <div style={{ fontSize: '0.75rem', color: '#705315', fontWeight: '600' }}>
                          MahaRERA: {c.rera}
                        </div>
                      )}
                    </div>

                    <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontWeight: '800', color: 'var(--primary-green)', fontSize: '0.98rem' }}>
                        {c.price}
                      </div>
                      <Link 
                        href={`/cluster/${c.id}/`}
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: '700',
                          color: '#0f172a',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>View Specs</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {filteredClusters.length === 0 && (
                <div style={{ textAlign: 'center', padding: '48px 20px', color: '#64748b' }}>
                  <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>No matching clusters found for &ldquo;{searchQuery}&rdquo;</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setClusterFilter('all'); }}
                    style={{ padding: '8px 18px', borderRadius: '100px', backgroundColor: '#0f172a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.84rem', fontWeight: '600' }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: 700-ACRE INFRASTRUCTURE SILOS */}
          {activeTab === 'infrastructure' && (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                gap: '16px' 
              }}
            >
              {INFRASTRUCTURE_FACILITIES.map(item => (
                <article 
                  key={item.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                  className="cluster-explorer-card"
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '1.6rem' }}>{item.icon}</span>
                      <span style={{ fontSize: '0.72rem', fontWeight: '700', padding: '4px 10px', borderRadius: '100px', backgroundColor: '#f1f5f9', color: '#475569' }}>
                        {item.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: '1.55', margin: 0 }}>
                      {item.spec}
                    </p>
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    <Link 
                      href={item.href}
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        color: 'var(--primary-green)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Explore Technical Architecture</span>
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 3: BUYER GUIDES & DECISION TOOLS */}
          {activeTab === 'tools' && (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                gap: '16px' 
              }}
            >
              {BUYER_DECISION_TOOLS.map(tool => (
                <article 
                  key={tool.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                  className="cluster-explorer-card"
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '1.6rem' }}>{tool.icon}</span>
                      <span style={{ fontSize: '0.72rem', fontWeight: '700', padding: '4px 10px', borderRadius: '100px', backgroundColor: '#fef3c7', color: '#92400e' }}>
                        {tool.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                      {tool.name}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: '1.55', margin: 0 }}>
                      {tool.description}
                    </p>
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    <Link 
                      href={tool.href}
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        color: 'var(--accent-gold)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Launch Decision Tool</span>
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Authentic Township Authority & Overview Footer Note */}
          <div 
            style={{ 
              padding: '24px 28px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '14px', 
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              fontSize: '0.88rem',
              color: '#475569'
            }}
          >
            <div>
              <strong style={{ color: '#0f172a' }}>Authorised Marketing Partner: PropSmart Realty</strong>
              <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
              <span>MahaRERA: <strong>A031262401295</strong></span>
              <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#64748b' }}>
                Providing verified residential advisory, floor plan layouts, society NOC facilitation, and site visit coordination for Nanded City Township Pune.
              </p>
            </div>
            <Link 
              href="/contact/" 
              style={{
                padding: '10px 20px',
                borderRadius: '100px',
                backgroundColor: 'var(--primary-green)',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '0.84rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
              }}
            >
              <span>Schedule Site Visit</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
