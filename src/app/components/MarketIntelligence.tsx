"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
  sub: string;
}

export default function MarketIntelligence() {
  const stats: Stat[] = [
    { label: 'Avg. Appreciation', value: '12.5%', sub: 'Year-on-Year Growth' },
    { label: 'HNW Community Score', value: 'Elite', sub: 'CEOs, CXOs, Doctors & CAs' },
    { label: 'Infrastructure Score', value: '9.2/10', sub: 'Post-Flyover Completion' },
    { label: 'Rental Demand', value: '25% ⬆', sub: 'South Pune Professional Hub' }
  ];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle ambient lighting */}
      <div 
        className="ambient-glow-orb ambient-glow-gold"
        style={{ top: '10%', right: '5%', width: '350px', height: '350px', opacity: 0.35 }}
        aria-hidden="true"
      />
      <div 
        className="ambient-glow-orb ambient-glow-emerald"
        style={{ bottom: '5%', left: '5%', width: '300px', height: '300px', opacity: 0.25 }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-eyebrow">Market Intelligence</span>
          <h2 style={{ color: '#0f172a', fontSize: '2.4rem', marginTop: '10px' }}>Sinhgad Road Growth Index</h2>
          <p style={{ maxWidth: '750px', margin: '15px auto', color: '#64748b', fontSize: '1.1rem' }}>
            Authoritative metrics for the 2026 Pune real estate market. Data confirms that <strong>integrated townships like Nanded City</strong> are the #1 hedge against market volatility.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-interactive shimmer-hover"
              style={{
                padding: '40px 30px',
                textAlign: 'center',
              }}
            >
              <div 
                className="metallic-gold-text"
                style={{ 
                  fontSize: '2.8rem', 
                  fontWeight: '800', 
                  marginBottom: '10px',
                  letterSpacing: '-1px'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '40px' }}>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
            *Data aggregated from MahaRERA filings, infrastructure project completions, and regional transaction volumes (2024–2026).
          </p>
        </div>
      </div>
    </section>
  );
}
