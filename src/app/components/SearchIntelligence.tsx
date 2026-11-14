"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ECOSYSTEM_KEYWORD_TAXONOMY } from '@/data/ecosystemKeywords';

export default function SearchIntelligence() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedKeywords = activeTab === "all"
    ? ECOSYSTEM_KEYWORD_TAXONOMY.flatMap(c => c.keywords)
    : ECOSYSTEM_KEYWORD_TAXONOMY.find(c => c.id === activeTab)?.keywords || [];

  return (
    <section 
      style={{ backgroundColor: '#ffffff', padding: '64px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}
      aria-label="Nanded City Township Exploration & Buyer Resource Directory"
    >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#705315' }}>
              Township Navigation & Knowledge Hub
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', color: '#0f172a', fontWeight: '800', marginTop: '8px', marginBottom: '12px' }}>
              Nanded City Pune Ecosystem & Buyer Resource Directory
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.6' }}>
              Direct access to certified MahaRERA registrations, 20 residential clusters, floor plan layouts, 700-acre captive infrastructure, arterial commute routes, and institutional buyer guides.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <button
              onClick={() => setActiveTab("all")}
              style={{
                padding: '10px 18px',
                minHeight: '44px',
                borderRadius: '30px',
                border: activeTab === "all" ? '1px solid var(--accent-gold)' : '1px solid #cbd5e1',
                backgroundColor: activeTab === "all" ? '#0f172a' : '#f8fafc',
                color: activeTab === "all" ? '#ffffff' : '#334155',
                fontWeight: '700',
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              All Resources ({ECOSYSTEM_KEYWORD_TAXONOMY.flatMap(c => c.keywords).length})
            </button>
            {ECOSYSTEM_KEYWORD_TAXONOMY.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: '10px 18px',
                  minHeight: '44px',
                  borderRadius: '30px',
                  border: activeTab === cat.id ? '1px solid var(--accent-gold)' : '1px solid #cbd5e1',
                  backgroundColor: activeTab === cat.id ? '#0f172a' : '#f8fafc',
                  color: activeTab === cat.id ? '#ffffff' : '#334155',
                  fontWeight: '700',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.name} ({cat.keywords.length})
              </button>
            ))}
          </div>

          {/* Directory Deep-Link Pills Grid */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px', 
              justifyContent: 'center',
              minHeight: '120px'
            }}
          >
            {displayedKeywords.map((k) => (
              <Link 
                key={k.label}
                href={k.href}
                className="search-intel-pill"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem', 
                  padding: '10px 18px',
                  minHeight: '44px',
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '100px',
                  color: '#1e293b',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>📍</span>
                <span>{k.label}</span>
              </Link>
            ))}
          </div>

          {/* E-E-A-T Editorial Township Overview Card */}
          <div 
            style={{ 
              marginTop: '16px',
              padding: '28px 32px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0',
              fontSize: '0.92rem', 
              color: '#475569', 
              lineHeight: '1.75' 
            }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '14px' }}>
              Master Township Architecture & Living Ecosystem at Nanded City Pune
            </h3>
            
            <p style={{ marginBottom: '14px' }}>
              <strong>Nanded City Township Pune</strong> is an integrated 700-acre master-planned satellite development on <strong>Sinhagad Road</strong>, Pune (PIN: 411041). Developed under the leadership of Satish Magar (NCDCCL), over 70% of the entire land parcel is preserved for open green belts, landscaped river promenades, and pedestrian-friendly boulevards. Today, more than 15,000 resident families live across diverse residential choices: <strong>2 BHK & 2.5 BHK flats</strong> (Aalaap-I, Pancham, Bageshree, Sargam, Asawari, Lalit, Madhuvanti, Mangal Bhairav, Janaranjani, Sur), <strong>3 BHK luxury high-rise towers</strong> (Saajgiri, Kalashree, Shubh Kalyan), <strong>3.5 & 4.5 BHK palace apartments</strong> (Harmony), and <strong>exclusive Branded NA Bungalow Plots</strong> (Melody I, II, III, Rhythm, Dhanashree).
            </p>

            <p style={{ marginBottom: '14px' }}>
              <strong>Self-Sustaining 700-Acre Civic Infrastructure:</strong> Unlike standalone buildings along Sinhagad Road that rely on water tankers, Nanded City delivers complete municipal autonomy:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '14px' }}>
              <li><strong>Captive Water Treatment Plant (WTP):</strong> Multi-stage filtration plant piped directly from Khadakwasla Dam, delivering 24x7 treated potable water to every apartment.</li>
              <li><strong>Zero-Discharge Sewage Treatment Plant (STP):</strong> Biological treatment recycling 100% of wastewater for township landscaping, flushing, and green belt irrigation.</li>
              <li><strong>Dedicated 22 kV MSEB Substation:</strong> Express power infrastructure with underground cabling, providing superior electrical uptime and eliminating overhead wires.</li>
              <li><strong>Integrated Schooling & Healthcare:</strong> Walk-to-school access to Nanded City Public School (ICSE) and 24/7 care at Sahyadri Multispeciality Hospital within the township gates.</li>
              <li><strong>Commercial & Retail Economy:</strong> Symphony IT Park provides over 1.5 million sq. ft. of walk-to-work IT spaces, complemented by Destination Center I & II shopping malls.</li>
            </ul>

            <p style={{ margin: 0 }}>
              <strong>Regional Connectivity & Investment Fundamentals:</strong> With the fully operational <strong>Sinhagad Road multi-tier flyover</strong>, residents reach Kothrud in 15 minutes, Warje in 10 minutes, and Hinjewadi IT Park via the Western Bypass (NH-48). For verified floor plans, cost sheets, society NOC guidelines, and site visits, connect with <strong>PropSmart Realty</strong> — Authorised Marketing Partner (MahaRERA: <strong>A031262401295</strong>).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
