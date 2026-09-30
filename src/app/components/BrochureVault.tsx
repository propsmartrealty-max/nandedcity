"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clusters } from '@/data/clusters';
import { useEnquiryModal } from '../context/ModalContext';

export default function BrochureVault() {
  const [filter, setFilter] = useState<'all' | 'apartments' | 'plots' | 'ready'>('all');
  const [search, setSearch] = useState<string>('');
  const { openEnquiry } = useEnquiryModal();

  const filteredClusters = clusters.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.bhk.toLowerCase().includes(search.toLowerCase()) ||
                          c.rera.toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;

    if (filter === 'plots') {
      return c.bhk.toLowerCase().includes('plot');
    }
    if (filter === 'apartments') {
      return !c.bhk.toLowerCase().includes('plot');
    }
    if (filter === 'ready') {
      return c.type === 'completed';
    }
    return true;
  });

  const getBrochureWhatsappLink = (clusterName: string, rera: string) => {
    const text = `Hi, please send me the official PDF brochure, floor plans, and cost sheet for ${clusterName} (MahaRERA: ${rera}) at Nanded City Pune.`;
    return `https://wa.me/917744009295?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      {/* Search & Filter Controls */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '24px 32px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        marginBottom: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Search Input */}
        <div style={{ flex: '1', minWidth: '260px' }}>
          <input
            type="text"
            placeholder="Search by cluster name, BHK (e.g. 2 BHK, 3 BHK), or MahaRERA number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 18px',
              borderRadius: '12px',
              border: '1.5px solid #cbd5e1',
              fontSize: '0.95rem',
              outline: 'none',
              backgroundColor: '#f8fafc'
            }}
          />
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {[
            { id: 'all', label: 'All 20 Clusters' },
            { id: 'apartments', label: 'Luxury Towers' },
            { id: 'plots', label: 'NA Villa Plots' },
            { id: 'ready', label: 'Ready-to-Move' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              style={{
                padding: '10px 18px',
                borderRadius: '50px',
                border: filter === btn.id ? '1.5px solid var(--primary-green)' : '1px solid #cbd5e1',
                backgroundColor: filter === btn.id ? 'var(--primary-green)' : '#fff',
                color: filter === btn.id ? '#fff' : '#475569',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cluster Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
        {filteredClusters.map((c) => (
          <div
            key={c.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              border: '1.5px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <div>
              {/* Image & Badges */}
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                  src={c.image}
                  alt={`${c.name} Brochure`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)'
                }} />
                
                <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{
                    backgroundColor: c.type === 'new' ? 'var(--accent-gold)' : 'rgba(15,23,42,0.8)',
                    color: c.type === 'new' ? '#000' : '#fff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    textTransform: 'uppercase'
                  }}>
                    {c.type === 'new' ? '✨ Active Project' : '🏡 Established'}
                  </span>
                </div>

                <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', margin: '0 0 2px' }}>{c.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: '500' }}>{c.bhk}</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '10px', fontSize: '0.82rem' }}>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.72rem' }}>Indicative Price:</span>
                    <strong style={{ color: 'var(--primary-green)', fontSize: '0.92rem' }}>{c.price}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.72rem' }}>Carpet Area:</span>
                    <strong style={{ color: '#0f172a' }}>{c.area}</strong>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginBottom: '4px' }}>MahaRERA Registration:</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <code style={{ fontSize: '0.82rem', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#334155' }}>
                      {c.rera}
                    </code>
                    {c.reraUrl && (
                      <a
                        href={c.reraUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.75rem', color: 'var(--primary-green)', textDecoration: 'underline', fontWeight: '600' }}
                      >
                        Verify RERA ↗
                      </a>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  {c.description.slice(0, 105)}...
                </p>
              </div>
            </div>

            {/* Actions */}
            <div style={{ padding: '16px 20px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '10px' }}>
              <button
                onClick={() => openEnquiry(c.name, c.bhk.toLowerCase().includes('plot') ? 'plot' : 'apartment')}
                className="btn btn-primary"
                style={{ flex: 1, fontSize: '0.82rem', padding: '10px 12px', textAlign: 'center' }}
              >
                📥 Request PDF
              </button>
              <a
                href={getBrochureWhatsappLink(c.name, c.rera)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
