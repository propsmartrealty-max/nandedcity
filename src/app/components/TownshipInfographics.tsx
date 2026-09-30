"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TownshipInfographics() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'matrix' | 'lifestyle'>('comparison');

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#0b1329', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '-10%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '800px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, rgba(11, 19, 41, 0) 70%)',
          pointerEvents: 'none'
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
            Visual Intelligence & Market Analytics
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', marginTop: '10px', color: '#fff' }}>
            Nanded City Master Ecosystem Infographics
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '720px', margin: '12px auto 0', lineHeight: '1.6' }}>
            Interactive comparison metrics, carpet area spectrums, and sustainable township infrastructure engineering.
          </p>

          {/* Tab Controls */}
          <div style={{ display: 'inline-flex', gap: '8px', padding: '6px', borderRadius: '100px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', marginTop: '28px' }}>
            <button
              onClick={() => setActiveTab('comparison')}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: activeTab === 'comparison' ? 'var(--accent-gold)' : 'transparent',
                color: activeTab === 'comparison' ? '#0f172a' : '#cbd5e1',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              Township vs Standalone
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: activeTab === 'matrix' ? 'var(--accent-gold)' : 'transparent',
                color: activeTab === 'matrix' ? '#0f172a' : '#cbd5e1',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              2026 Price & Carpet Matrix
            </button>
            <button
              onClick={() => setActiveTab('lifestyle')}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: activeTab === 'lifestyle' ? 'var(--accent-gold)' : 'transparent',
                color: activeTab === 'lifestyle' ? '#0f172a' : '#cbd5e1',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              Walk-to-Work Ecosystem
            </button>
          </div>
        </div>

        {/* Tab 1: Township vs Standalone Infographic */}
        {activeTab === 'comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: '980px', margin: '0 auto' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              
              {/* Nanded City Column */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '20px', border: '1px solid rgba(201, 168, 76, 0.4)', padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                    🏛️
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: 0 }}>Nanded City Township (700A)</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '600' }}>Autonomous Mega Infrastructure</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: "Direct Khadakwasla Dam Water Supply", desc: "Automated captive WTP filters raw water to pure potable standards. Zero water tanker reliance.", status: "100% Autonomous", icon: "💧" },
                    { title: "Captive 22kV Electrical Substation", desc: "Township-owned substation with underground HT/LT cabling. Uninterrupted power and zero wire clutter.", status: "Zero Blackouts", icon: "⚡" },
                    { title: "70% Preserved Green Spaces", desc: "Riverfront promenade, 20+ km tree-shaded internal avenues, and oxygen zones with Sahyadri views.", status: "Eco Certified", icon: "🌿" },
                    { title: "On-Campus ICSE Schooling", desc: "Nanded City Public School inside gates. Children walk to school without crossing city traffic.", status: "Walk-to-School", icon: "🎓" },
                    { title: "3-Tier Institutional Security", desc: "Master gate ANPR barriers, 24/7 CCTV surveillance across all roads, and cluster guards.", status: "24/7 Guarded", icon: "🛡️" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#fff' }}>{item.icon} {item.title}</span>
                        <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '2px 8px', borderRadius: '100px' }}>{item.status}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standalone Buildings Column */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                    🏢
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#cbd5e1', margin: 0 }}>Standalone Sinhagad Rd Flats</h3>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '600' }}>Fragmented City Micro-Sites</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: "Heavy Water Tanker Reliance", desc: "Societies spend ₹15,000–₹40,000/month on private tanker suppliers due to low municipal pressure.", status: "High Recurring Cost", icon: "⚠️" },
                    { title: "Overhead Wires & Outages", desc: "Common feeder lines subject to monsoon disruptions, transformer trips, and power fluctuations.", status: "Frequent Cuts", icon: "⚡" },
                    { title: "Minimal Setback & Concrete", desc: "Only mandatory 3–6 meter fire tender space. No open green expanses or nature trails.", status: "< 15% Greenery", icon: "🏗️" },
                    { title: "Traffic-Ridden School Commutes", desc: "Children spend 45–60 mins daily in school buses navigating heavy Sinhagad Road traffic.", status: "Commute Strain", icon: "🚌" },
                    { title: "Single Gate Guard", desc: "Basic single watchman setup without centralized perimeter monitoring or ANPR technology.", status: "Basic Security", icon: "🔒" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#94a3b8' }}>{item.icon} {item.title}</span>
                        <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.1)', padding: '2px 8px', borderRadius: '100px' }}>{item.status}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Tab 2: 2026 Price & Carpet Matrix */}
        {activeTab === 'matrix' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: '1040px', margin: '0 auto' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {[
                { type: "2 BHK Urban", carpet: "650 - 850 sq.ft.", price: "₹65 L - ₹85 L*", clusters: "Pancham, Bageshree, Asawari, Aalaap", color: "#38bdf8", tag: "Most Popular" },
                { type: "3 BHK High-Rise", carpet: "1,050 - 1,350 sq.ft.", price: "₹1.05 Cr - ₹1.45 Cr*", clusters: "Saajgiri, Sargam, Kalashree", color: "#22c55e", tag: "Hill View" },
                { type: "3.5 & 4.5 BHK Royal", carpet: "1,650 - 2,400 sq.ft.", price: "₹1.85 Cr - ₹2.80 Cr*", clusters: "Harmony", color: "var(--accent-gold)", tag: "Ultra Luxury" },
                { type: "NA Bungalow Plots", carpet: "2,000 - 4,500 sq.ft.", price: "₹1.35 Cr - ₹3.20 Cr*", clusters: "Melody (I, II, III), Rhythm", color: "#c084fc", tag: "Collector Sanctioned" },
              ].map((card, i) => (
                <div key={i} style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: card.color, textTransform: 'uppercase', letterSpacing: '1px' }}>{card.tag}</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>2026 Rate</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: '0 0 8px' }}>{card.type}</h3>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '8px' }}>{card.price}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
                    <strong>Carpet:</strong> {card.carpet}
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
                    <strong>Clusters:</strong> {card.clusters}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link href="/projects/" style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '700', textDecoration: 'none' }}>
                View complete pricing specifications across all 20 clusters →
              </Link>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Walk-to-Work & Daily Living Circle */}
        {activeTab === 'lifestyle' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: '980px', margin: '0 auto' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {[
                { title: "Symphony IT Park", icon: "💻", time: "3 Min Walk", desc: "1.5 Million sq.ft. of Grade-A IT campus. Walk to work and eliminate the daily 2-hour commute." },
                { title: "Nanded City Public School", icon: "🎒", time: "5 Min Walk", desc: "ICSE curriculum school on-campus with playgrounds, laboratories, and safe internal pedestrian pathways." },
                { title: "Destination Centre I & II", icon: "🛍️", time: "4 Min Walk", desc: "Multispeciality supermarkets, banks, ATMs, restaurants, and medical stores within the township." },
                { title: "Kridaangan Sports Complex", icon: "⚽", time: "5 Min Walk", desc: "Full-scale cricket ground, football turf, tennis courts, and swimming pools for complete family fitness." },
                { title: "Sahyadri Hospital", icon: "🏥", time: "3 Min Drive", desc: "24/7 multispeciality emergency care, ICU, pathology lab, and ambulance response inside the gates." },
                { title: "Direct Sinhagad Flyover", icon: "🚗", time: "Instant Access", desc: "Direct flyover link cutting Swargate commute to 10 mins and Hinjewadi IT park to 35 mins via NH-48." },
              ].map((item, i) => (
                <div key={i} style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-gold)', backgroundColor: 'rgba(201, 168, 76, 0.12)', padding: '4px 10px', borderRadius: '100px' }}>{item.time}</span>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: '0 0 6px' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.84rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
