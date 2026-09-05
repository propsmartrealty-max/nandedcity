"use client";

import React, { useState } from 'react';
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

  const ongoingClusters = clusters.filter(c => c.type === 'new');

  const filteredClusters = ongoingClusters.filter(cluster => {
    if (filter === 'All') return true;
    if (filter === 'Bungalow Plots') return cluster.bhk.toLowerCase().includes('plot');
    if (filter === '2 BHK') return cluster.bhk.includes('2 BHK') || cluster.bhk.includes('2.5');
    if (filter === '3 BHK') return cluster.bhk.includes('3 BHK');
    return true;
  });

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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {['All', '2 BHK', '3 BHK', 'Bungalow Plots'].map((cat) => {
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

      <motion.div layout className="grid-cols-2">
        <AnimatePresence>
          {filteredClusters.map((cluster) => (
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
                    alt={`${cluster.name} - ${cluster.bhk} Flats in Nanded City Township Pune Real Estate`} 
                    fill 
                    sizes="(max-width:768px) 100vw, 50vw" 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className="card-badge-wrap">
                    <span className="badge badge-green">{cluster.bhk}</span>
                  </div>
                  <div className="card-price-tag">{cluster.price}</div>
                </div>
              </Link>
              
              <div className="card-content">
                <h3 className="card-title">
                  <Link href={`/cluster/${cluster.id}`}>{cluster.name}</Link>
                </h3>
                
                <div className="card-meta">
                  <span className="status-dot ongoing" />
                  <span>{cluster.status}</span>
                  <span style={{ marginLeft: 'auto' }}>📐 {cluster.area}</span>
                </div>
                
                <p className="card-desc">{cluster.description}</p>
                
                <div className="card-highlights">
                  {cluster.highlights.slice(0, 3).map(h => (
                    <span key={h} className="highlight-chip">{h}</span>
                  ))}
                </div>

                <div className="rera-footer" style={{ padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                  <ReraQrCode reraUrl={cluster.reraUrl} reraNumber={cluster.rera} qrImage={cluster.qrImage} />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <button 
                      onClick={() => openEnquiry(cluster.id, getEnquiryContext(cluster))}
                      style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.82rem', cursor: 'pointer', padding: 0 }}
                    >
                      Enquire Now →
                    </button>
                    <Link href={`/cluster/${cluster.id}`} className="btn-details">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
