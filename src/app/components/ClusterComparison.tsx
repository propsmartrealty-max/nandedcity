"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clusters } from '@/data/clusters';
import { useEnquiryModal } from '../context/ModalContext';

// Extended specs mapping for comparison precision
const clusterSpecs: Record<string, {
  distDestCenter: string;
  distSchool: string;
  distMainGate: string;
  estMaint: string;
  vibe: string;
}> = {
  'saajgiri': { distDestCenter: '4 mins walk (350m)', distSchool: '6 mins walk (500m)', distMainGate: '3 mins drive', estMaint: '₹3,500 – ₹4,200/mo', vibe: 'Ultra-Modern High-Rise Luxury' },
  'harmony': { distDestCenter: '5 mins walk (400m)', distSchool: '5 mins walk (450m)', distMainGate: '4 mins drive', estMaint: '₹4,500 – ₹5,800/mo', vibe: 'Elite 3.5 & 4.5 BHK Royal Living' },
  'aalaap': { distDestCenter: '3 mins walk (250m)', distSchool: '4 mins walk (300m)', distMainGate: '3 mins drive', estMaint: '₹2,600 – ₹3,200/mo', vibe: 'Contemporary Family 2 & 2.5 BHK' },
  'pancham': { distDestCenter: '6 mins walk (500m)', distSchool: '3 mins walk (250m)', distMainGate: '2 mins drive', estMaint: '₹2,400 – ₹2,900/mo', vibe: 'Vibrant Mid-Rise Community' },
  'asawari': { distDestCenter: '2 mins walk (150m)', distSchool: '5 mins walk (400m)', distMainGate: '4 mins drive', estMaint: '₹2,800 – ₹3,400/mo', vibe: 'Central Location with Lush Gardens' },
  'sargam': { distDestCenter: '3 mins walk (200m)', distSchool: '6 mins walk (500m)', distMainGate: '4 mins drive', estMaint: '₹2,700 – ₹3,300/mo', vibe: 'Peaceful Residential Enclave' },
  'bageshree': { distDestCenter: '7 mins walk (600m)', distSchool: '5 mins walk (400m)', distMainGate: '5 mins drive', estMaint: '₹2,300 – ₹2,800/mo', vibe: 'High-Demand Resale & Rental Hub' },
  'kalashree': { distDestCenter: '8 mins walk (700m)', distSchool: '6 mins walk (500m)', distMainGate: '5 mins drive', estMaint: '₹2,400 – ₹2,900/mo', vibe: 'Cozy Family Community' },
  'sarang': { distDestCenter: '5 mins walk (450m)', distSchool: '4 mins walk (350m)', distMainGate: '3 mins drive', estMaint: '₹2,500 – ₹3,000/mo', vibe: 'Scenic Mountain-Facing Views' },
  'lalit': { distDestCenter: '6 mins walk (500m)', distSchool: '5 mins walk (450m)', distMainGate: '4 mins drive', estMaint: '₹2,400 – ₹2,900/mo', vibe: 'Serene Green Living' },
  'madhuvanti': { distDestCenter: '5 mins walk (400m)', distSchool: '3 mins walk (250m)', distMainGate: '2 mins drive', estMaint: '₹2,200 – ₹2,700/mo', vibe: 'Ideal First Home Community' },
  'shubh-kalyan': { distDestCenter: '4 mins walk (350m)', distSchool: '5 mins walk (450m)', distMainGate: '3 mins drive', estMaint: '₹2,500 – ₹3,100/mo', vibe: 'Established Resale Neighborhood' },
  'sur': { distDestCenter: '6 mins walk (500m)', distSchool: '4 mins walk (300m)', distMainGate: '3 mins drive', estMaint: '₹2,300 – ₹2,800/mo', vibe: 'Quiet Cul-de-sac Living' },
  'mangal-bhairav': { distDestCenter: '9 mins walk (800m)', distSchool: '8 mins walk (700m)', distMainGate: '2 mins drive', estMaint: '₹1,800 – ₹2,300/mo', vibe: 'Compact Value Living' },
  'janaranjani': { distDestCenter: '4 mins walk (350m)', distSchool: '4 mins walk (350m)', distMainGate: '4 mins drive', estMaint: '₹2,200 – ₹2,700/mo', vibe: 'Comfortable Family Clusters' },
  'melody-1': { distDestCenter: '6 mins walk (500m)', distSchool: '7 mins walk (600m)', distMainGate: '5 mins drive', estMaint: 'Society Plotted Dues', vibe: 'Flagship NA Villa Gated Community' },
  'melody-2': { distDestCenter: '7 mins walk (550m)', distSchool: '7 mins walk (600m)', distMainGate: '5 mins drive', estMaint: 'Society Plotted Dues', vibe: 'Phase II Independent Villa Land' },
  'melody-3': { distDestCenter: '7 mins walk (600m)', distSchool: '8 mins walk (650m)', distMainGate: '5 mins drive', estMaint: 'Society Plotted Dues', vibe: 'Elite Plotted Enclave' },
  'rhythm': { distDestCenter: '5 mins walk (400m)', distSchool: '6 mins walk (500m)', distMainGate: '4 mins drive', estMaint: 'Society Plotted Dues', vibe: 'Signature River-Facing NA Plots' },
  'dhanashree': { distDestCenter: '8 mins walk (700m)', distSchool: '5 mins walk (400m)', distMainGate: '3 mins drive', estMaint: 'Society Plotted Dues', vibe: 'Gated Villa Sanctuary' }
};

export default function ClusterComparison() {
  const [selectedClusterA, setSelectedClusterA] = useState<string>('saajgiri');
  const [selectedClusterB, setSelectedClusterB] = useState<string>('harmony');
  const { openEnquiry } = useEnquiryModal();

  const clusterA = clusters.find(c => c.id === selectedClusterA) || clusters[0];
  const clusterB = clusters.find(c => c.id === selectedClusterB) || clusters[1];

  const specsA = clusterSpecs[clusterA.id] || { distDestCenter: '5 mins walk', distSchool: '5 mins walk', distMainGate: '3 mins drive', estMaint: 'Standard Rates', vibe: 'Township Living' };
  const specsB = clusterSpecs[clusterB.id] || { distDestCenter: '5 mins walk', distSchool: '5 mins walk', distMainGate: '3 mins drive', estMaint: 'Standard Rates', vibe: 'Township Living' };

  const presets = [
    { label: 'Saajgiri vs Harmony (Luxury High-Rise)', a: 'saajgiri', b: 'harmony' },
    { label: 'Asawari vs Bageshree (Popular 2 & 3 BHK)', a: 'asawari', b: 'bageshree' },
    { label: 'Melody Plots vs Rhythm Plots (NA Land)', a: 'melody-1', b: 'rhythm' },
    { label: 'Aalaap vs Pancham (Value 2 BHK)', a: 'aalaap', b: 'pancham' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* Presets Bar */}
      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748b', marginBottom: '12px' }}>
          Popular Comparison Presets:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedClusterA(p.a);
                setSelectedClusterB(p.b);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '50px',
                border: selectedClusterA === p.a && selectedClusterB === p.b ? '1.5px solid var(--accent-gold)' : '1px solid #cbd5e1',
                backgroundColor: selectedClusterA === p.a && selectedClusterB === p.b ? '#fef3c7' : '#fff',
                color: selectedClusterA === p.a && selectedClusterB === p.b ? '#92400e' : '#334155',
                fontSize: '0.84rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selectors */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: '#f8fafc', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid #e2e8f0' }}>
          <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', color: 'var(--primary-green)', marginBottom: '8px' }}>
            Cluster 1 (Left Side)
          </label>
          <select
            value={selectedClusterA}
            onChange={(e) => setSelectedClusterA(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1.5px solid #cbd5e1',
              backgroundColor: '#fff',
              fontSize: '1rem',
              fontWeight: '700',
              color: '#0f172a',
              cursor: 'pointer'
            }}
          >
            {clusters.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.bhk})
              </option>
            ))}
          </select>
        </div>

        <div style={{ backgroundColor: '#f8fafc', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid #e2e8f0' }}>
          <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '8px' }}>
            Cluster 2 (Right Side)
          </label>
          <select
            value={selectedClusterB}
            onChange={(e) => setSelectedClusterB(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1.5px solid #cbd5e1',
              backgroundColor: '#fff',
              fontSize: '1rem',
              fontWeight: '700',
              color: '#0f172a',
              cursor: 'pointer'
            }}
          >
            {clusters.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.bhk})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        border: '1.5px solid #e2e8f0',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)'
      }}>
        {/* Table Header: Visual Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 1.5fr 1.5fr', borderBottom: '2px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
          <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', borderRight: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', color: '#64748b' }}>
              Comparison Metrics
            </span>
          </div>

          {/* Cluster A Card */}
          <div style={{ padding: '24px 20px', borderRight: '1px solid #e2e8f0', backgroundColor: '#fff' }}>
            <div style={{ position: 'relative', width: '100%', height: '160px', borderRadius: '12px', overflow: 'hidden', marginBottom: '14px' }}>
              <Image src={clusterA.image} alt={clusterA.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '700' }}>
                {clusterA.type === 'new' ? '✨ Active Project' : '🏡 Established'}
              </div>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>{clusterA.name}</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '0 0 12px' }}>{clusterA.bhk}</p>
            <Link
              href={`/cluster/${clusterA.id}/`}
              style={{ display: 'inline-block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--primary-green)', textDecoration: 'underline' }}
            >
              View Full Cluster Profile →
            </Link>
          </div>

          {/* Cluster B Card */}
          <div style={{ padding: '24px 20px', backgroundColor: '#fff' }}>
            <div style={{ position: 'relative', width: '100%', height: '160px', borderRadius: '12px', overflow: 'hidden', marginBottom: '14px' }}>
              <Image src={clusterB.image} alt={clusterB.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '700' }}>
                {clusterB.type === 'new' ? '✨ Active Project' : '🏡 Established'}
              </div>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>{clusterB.name}</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '0 0 12px' }}>{clusterB.bhk}</p>
            <Link
              href={`/cluster/${clusterB.id}/`}
              style={{ display: 'inline-block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--primary-green)', textDecoration: 'underline' }}
            >
              View Full Cluster Profile →
            </Link>
          </div>
        </div>

        {/* Feature Rows */}
        {[
          { label: 'Configuration', a: clusterA.bhk, b: clusterB.bhk },
          { label: 'Indicative Price (2026)', a: clusterA.price, b: clusterB.price, highlight: true },
          { label: 'Carpet Area Spectrum', a: clusterA.area, b: clusterB.area },
          { label: 'Possession Status', a: clusterA.possession, b: clusterB.possession },
          { label: 'Tower Elevation / Floors', a: clusterA.floors, b: clusterB.floors },
          { label: 'MahaRERA Registration', a: clusterA.rera, b: clusterB.rera, mono: true },
          { label: 'Distance to Destination Center', a: specsA.distDestCenter, b: specsB.distDestCenter },
          { label: 'Distance to NCPS (ICSE School)', a: specsA.distSchool, b: specsB.distSchool },
          { label: 'Distance to Township Main Gate', a: specsA.distMainGate, b: specsB.distMainGate },
          { label: 'Estimated Maintenance', a: specsA.estMaint, b: specsB.estMaint },
          { label: 'Lifestyle Vibe & Atmosphere', a: specsA.vibe, b: specsB.vibe },
        ].map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(140px, 1fr) 1.5fr 1.5fr',
              borderBottom: '1px solid #f1f5f9',
              backgroundColor: idx % 2 === 0 ? '#fff' : '#f8fafc',
              fontSize: '0.9rem',
              alignItems: 'center'
            }}
          >
            <div style={{ padding: '16px 20px', fontWeight: '700', color: '#475569', borderRight: '1px solid #e2e8f0' }}>
              {row.label}
            </div>
            <div style={{
              padding: '16px 20px',
              borderRight: '1px solid #e2e8f0',
              fontWeight: row.highlight ? '800' : '600',
              color: row.highlight ? 'var(--primary-green)' : '#0f172a',
              fontFamily: row.mono ? 'monospace' : 'inherit'
            }}>
              {row.a}
            </div>
            <div style={{
              padding: '16px 20px',
              fontWeight: row.highlight ? '800' : '600',
              color: row.highlight ? 'var(--primary-green)' : '#0f172a',
              fontFamily: row.mono ? 'monospace' : 'inherit'
            }}>
              {row.b}
            </div>
          </div>
        ))}

        {/* Highlights Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 1.5fr 1.5fr', borderBottom: '1px solid #e2e8f0', backgroundColor: '#fff', fontSize: '0.85rem' }}>
          <div style={{ padding: '20px', fontWeight: '700', color: '#475569', borderRight: '1px solid #e2e8f0' }}>
            Key Signature Highlights
          </div>
          <div style={{ padding: '20px', borderRight: '1px solid #e2e8f0' }}>
            <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', color: '#334155' }}>
              {clusterA.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
          <div style={{ padding: '20px' }}>
            <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', color: '#334155' }}>
              {clusterB.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 1.5fr 1.5fr', backgroundColor: '#f1f5f9', padding: '20px' }}>
          <div style={{ padding: '10px 0', fontWeight: '700', color: '#334155', display: 'flex', alignItems: 'center' }}>
            Action & Site Visits
          </div>
          <div style={{ padding: '0 16px', borderRight: '1px solid #cbd5e1' }}>
            <button
              onClick={() => openEnquiry(clusterA.name, clusterA.bhk.toLowerCase().includes('plot') ? 'plot' : 'apartment')}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '0.88rem', padding: '12px 16px' }}
            >
              Enquire for {clusterA.name}
            </button>
          </div>
          <div style={{ padding: '0 16px' }}>
            <button
              onClick={() => openEnquiry(clusterB.name, clusterB.bhk.toLowerCase().includes('plot') ? 'plot' : 'apartment')}
              className="btn btn-outline"
              style={{ width: '100%', fontSize: '0.88rem', padding: '12px 16px', borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}
            >
              Enquire for {clusterB.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
