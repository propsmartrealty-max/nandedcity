"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReraQrCode from './ReraQrCode';
import { useEnquiryModal, ENQUIRY_CONTEXTS, EnquiryContextType } from '../context/ModalContext';
import { Cluster } from '@/types';

interface DynamicClusterGridProps {
  clusters: Cluster[];
}

export default function DynamicClusterGrid({ clusters }: DynamicClusterGridProps) {
  const [filter, setFilter] = useState<string>('All');
  const { openEnquiry } = useEnquiryModal();

  const getEnquiryContext = (cluster: Cluster): EnquiryContextType => {
    if (cluster.bhk.toLowerCase().includes('plot')) return ENQUIRY_CONTEXTS.PLOT;
    return ENQUIRY_CONTEXTS.APARTMENT;
  };

  // Compute adaptive categories based on the provided clusters
  const categories = useMemo(() => {
    const hasOngoing = clusters.some(c => c.type === 'new');
    const hasCompleted = clusters.some(c => c.type === 'completed');
    const has2Bhk = clusters.some(c => c.bhk.includes('2 BHK') || c.bhk.includes('2.5'));
    const has3Bhk = clusters.some(c => c.bhk === '3 BHK' || c.bhk.includes('2 & 3 BHK') || c.bhk.includes('2.5 & 3 BHK'));
    const hasLuxury = clusters.some(c => c.bhk.includes('3.5') || c.bhk.includes('4.5'));
    const hasPlots = clusters.some(c => c.bhk.toLowerCase().includes('plot'));

    const cats: string[] = ['All'];
    if (hasOngoing && hasCompleted) {
      cats.push('Ongoing Launches', 'Ready Possession');
    }
    if (has2Bhk) cats.push('2 BHK');
    if (has3Bhk) cats.push('3 BHK');
    if (hasLuxury) cats.push('3.5 & 4.5 BHK');
    if (hasPlots) cats.push('Bungalow Plots');

    return cats;
  }, [clusters]);

  const filteredClusters = useMemo(() => {
    return clusters.filter(cluster => {
      if (filter === 'All') return true;
      if (filter === 'Ongoing Launches') return cluster.type === 'new';
      if (filter === 'Ready Possession') return cluster.type === 'completed';
      if (filter === 'Bungalow Plots') return cluster.bhk.toLowerCase().includes('plot');
      if (filter === '2 BHK') return cluster.bhk.includes('2 BHK') || cluster.bhk.includes('2.5');
      if (filter === '3 BHK') return cluster.bhk.includes('3 BHK');
      if (filter === '3.5 & 4.5 BHK') return cluster.bhk.includes('3.5') || cluster.bhk.includes('4.5');
      return true;
    });
  }, [clusters, filter]);

  const btnStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '10px 24px',
    borderRadius: '30px',
    border: isActive ? '1px solid var(--accent-gold)' : '1px solid rgba(203, 213, 225, 0.6)',
    backgroundColor: isActive ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: isActive ? '#fff' : '#334155',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    fontSize: '0.92rem',
    outline: 'none',
    boxShadow: isActive 
      ? '0 6px 20px -2px rgba(201, 168, 76, 0.45), inset 0 1px 1px rgba(255,255,255,0.4)'
      : '0 4px 12px rgba(0,0,0,0.04), inset 0 1px 1px rgba(255,255,255,0.8)',
  });

  return (
    <div>
      {/* Category Filter Pills */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {categories.map((cat) => {
          const isActive = filter === cat;
          return (
            <motion.button 
              key={cat} 
              onClick={() => setFilter(cat)}
              style={btnStyle(isActive)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Cluster Grid */}
      <motion.div layout className="grid-cols-2">
        <AnimatePresence>
          {filteredClusters.map((cluster) => {
            const isCompleted = cluster.type === 'completed';
            return (
              <motion.article 
                key={cluster.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="cluster-card"
              >
                <Link href={`/cluster/${cluster.id}`} className="card-image-link">
                  <div className="card-image">
                    <Image 
                      src={cluster.image} 
                      alt={`${cluster.name} - ${cluster.bhk} in Nanded City Township Pune Real Estate`} 
                      fill 
                      sizes="(max-width:768px) 100vw, 50vw" 
                      style={{ objectFit: 'cover' }} 
                    />
                    <div className="card-badge-wrap">
                      <span className={`badge ${isCompleted ? 'badge-gold' : 'badge-green'}`}>
                        {cluster.bhk}
                      </span>
                    </div>
                    <div className="card-price-tag">{cluster.price}</div>
                  </div>
                </Link>
                
                <div className="card-content">
                  <h3 className="card-title">
                    <Link href={`/cluster/${cluster.id}`}>{cluster.name}</Link>
                  </h3>
                  
                  <div className="card-meta">
                    <span className={`status-dot ${isCompleted ? 'completed' : 'ongoing'}`} />
                    <span style={{ fontWeight: '600', color: isCompleted ? 'var(--primary-green)' : '#0f172a' }}>
                      {cluster.status}
                    </span>
                    <span style={{ marginLeft: 'auto', fontWeight: '500', color: '#64748b' }}>
                      📐 {cluster.area}
                    </span>
                  </div>
                  
                  <p className="card-desc">{cluster.description}</p>
                  
                  <div className="card-highlights">
                    {cluster.highlights.slice(0, 3).map(h => (
                      <span key={h} className="highlight-chip">{h}</span>
                    ))}
                  </div>

                  <div className="rera-footer" style={{ padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', gap: '12px' }}>
                    {!isCompleted && cluster.qrImage && cluster.rera !== 'Completed' ? (
                      <ReraQrCode reraUrl={cluster.reraUrl} reraNumber={cluster.rera} qrImage={cluster.qrImage} />
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--primary-green)' }}>
                          ✅ Delivered & Occupied
                        </span>
                        <a 
                          href="https://maharera.maharashtra.gov.in/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '600' }}
                        >
                          maharera.maharashtra.gov.in ↗
                        </a>
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', flexShrink: 0 }}>
                      <button 
                        onClick={() => openEnquiry(cluster.id, getEnquiryContext(cluster))}
                        style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.82rem', cursor: 'pointer', padding: 0 }}
                      >
                        {isCompleted ? 'Resale Enquiry →' : 'Enquire Now →'}
                      </button>
                      <Link href={`/cluster/${cluster.id}`} className="btn-details">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
