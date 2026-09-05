"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeFaqs } from '@/data/faqs';

export default function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }} aria-label="Frequently Asked Questions">
      <div className="container" style={{ maxWidth: '960px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>
            Authority Knowledge Base
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#0f172a', fontWeight: '800', marginTop: '8px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '640px', margin: '12px auto 0' }}>
            Everything you need to know about configurations, MahaRERA registrations, infrastructure, connectivity, and investment in Nanded City Township Pune.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={faq.question}
                style={{
                  border: isOpen ? '1px solid var(--accent-gold)' : '1px solid #e2e8f0',
                  borderRadius: '14px',
                  backgroundColor: isOpen ? '#fcfbf7' : '#f8fafc',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 8px 24px -4px rgba(201, 168, 76, 0.12)' : 'none'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '1.02rem', fontWeight: '700', color: isOpen ? 'var(--primary-green)' : '#1e293b', lineHeight: '1.4' }}>
                    {faq.question}
                  </span>
                  <span 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--accent-gold)' : '#e2e8f0',
                      color: isOpen ? '#fff' : '#64748b',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div style={{ padding: '0 24px 22px', fontSize: '0.94rem', color: '#475569', lineHeight: '1.7' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
