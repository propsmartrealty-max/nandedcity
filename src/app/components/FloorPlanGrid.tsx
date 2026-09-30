"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEnquiryModal, ENQUIRY_CONTEXTS } from '../context/ModalContext';
import { clusters } from '@/data/clusters';
import { Cluster } from '@/types';

export default function FloorPlanGrid() {
  const { openEnquiry } = useEnquiryModal();
  const [bhkFilter, setBhkFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredClusters = clusters.filter((c: Cluster) => {
    // BHK filter
    if (bhkFilter === '2bhk' && !c.bhk.includes('2 BHK') && !c.bhk.includes('2 &')) return false;
    if (bhkFilter === '2.5bhk' && !c.bhk.includes('2.5 BHK')) return false;
    if (bhkFilter === '3bhk' && !c.bhk.includes('3 BHK') && !c.bhk.includes('3 &')) return false;
    if (bhkFilter === 'luxury' && !c.bhk.includes('3.5') && !c.bhk.includes('4.5')) return false;
    if (bhkFilter === 'plot' && !c.bhk.toLowerCase().includes('plot')) return false;

    // Status filter
    if (statusFilter === 'ongoing' && c.type !== 'new') return false;
    if (statusFilter === 'ready' && c.type !== 'completed') return false;

    return true;
  });

  return (
    <div>
      {/* Interactive Filters Bar */}
      <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)', marginBottom: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Configuration Pills */}
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', color: '#64748b', marginBottom: '10px' }}>
              Filter by Configuration:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'all', label: 'All Configurations (20)' },
                { id: '2bhk', label: '2 BHK Flats' },
                { id: '2.5bhk', label: '2.5 BHK Flats' },
                { id: '3bhk', label: '3 BHK High-Rises' },
                { id: 'luxury', label: '3.5 & 4.5 BHK Luxury' },
                { id: 'plot', label: 'NA Bungalow Plots' }
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setBhkFilter(f.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    border: bhkFilter === f.id ? '1.5px solid var(--accent-gold)' : '1px solid #e2e8f0',
                    backgroundColor: bhkFilter === f.id ? 'rgba(212, 175, 55, 0.12)' : '#f8fafc',
                    color: bhkFilter === f.id ? 'var(--accent-gold)' : '#334155',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Possession Status Filter */}
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', color: '#64748b', marginBottom: '10px' }}>
              Filter by Possession Timeline:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'all', label: 'All Timelines' },
                { id: 'ongoing', label: 'Ongoing & Pre-Launch (2026–2028)' },
                { id: 'ready', label: 'Ready Possession / Resale' }
              ].map(s => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStatusFilter(s.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    border: statusFilter === s.id ? '1.5px solid #0f172a' : '1px solid #e2e8f0',
                    backgroundColor: statusFilter === s.id ? '#0f172a' : '#fff',
                    color: statusFilter === s.id ? '#fff' : '#64748b',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Results Count */}
      <div style={{ marginBottom: '24px', fontSize: '0.9rem', color: '#64748b' }}>
        Showing <strong>{filteredClusters.length}</strong> matching floor plans & layouts across Nanded City
      </div>

      {/* Grid of Floor Plan Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
        {filteredClusters.map(c => (
          <div
            key={c.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease'
            }}
          >
            {/* Card Header & Preview */}
            <div style={{ position: 'relative', height: '220px', width: '100%' }}>
              <Image
                src={c.image}
                alt={`${c.name} Floor Plan & Layout Nanded City Pune`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(8px)', color: 'var(--accent-gold)', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '800' }}>
                {c.bhk}
              </div>
              <div style={{ position: 'absolute', top: '14px', right: '14px', backgroundColor: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', color: c.type === 'new' ? '#0284c7' : '#16a34a' }}>
                {c.status}
              </div>
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: '#fff', padding: '6px 14px', borderRadius: '8px', fontSize: '0.88rem', fontWeight: '800', color: '#16a34a', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                {c.price}
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: '800', margin: 0 }}>
                  {c.name}
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '10px', margin: '12px 0 16px', fontSize: '0.82rem' }}>
                <div>
                  <span style={{ color: '#64748b', display: 'block' }}>Carpet Area:</span>
                  <strong style={{ color: '#0f172a' }}>{c.area}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', display: 'block' }}>Possession:</span>
                  <strong style={{ color: '#0f172a' }}>{c.possession}</strong>
                </div>
              </div>

              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                {c.description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <button
                  type="button"
                  onClick={() => openEnquiry(`Floor Plan PDF: ${c.name}`, c.bhk.toLowerCase().includes('plot') ? ENQUIRY_CONTEXTS.PLOT : ENQUIRY_CONTEXTS.APARTMENT)}
                  style={{
                    flex: 1.2,
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--accent-gold)',
                    color: '#000',
                    border: 'none',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  Download PDF Plans ↓
                </button>
                <Link
                  href={`/cluster/${c.id}/`}
                  style={{
                    flex: 0.8,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: '#0f172a',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.85rem'
                  }}
                >
                  Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
