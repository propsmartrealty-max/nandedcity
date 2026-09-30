"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '@/data/faqs';

interface FaqClientDirectoryProps {
  faqs: FAQItem[];
}

type CategoryKey = 'all' | 'prices' | 'legal' | 'infrastructure' | 'resale' | 'lifestyle' | 'connectivity';

const CATEGORIES: { key: CategoryKey; label: string; icon: string }[] = [
  { key: 'all', label: 'All Questions', icon: '🔍' },
  { key: 'prices', label: 'Prices & Carpet Areas', icon: '💰' },
  { key: 'legal', label: 'Legal & MahaRERA', icon: '📜' },
  { key: 'resale', label: 'Resale Flats & Transfer', icon: '🔄' },
  { key: 'infrastructure', label: 'Water & Utilities', icon: '⚡' },
  { key: 'lifestyle', label: 'Schools & Amenities', icon: '🏫' },
  { key: 'connectivity', label: 'Flyovers & Metro', icon: '🛣️' },
];

export default function FaqClientDirectory({ faqs }: FaqClientDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [faqs, selectedCategory, searchQuery]);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Search Bar */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Search questions (e.g. water supply, resale, school, Saajgiri, RERA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 48px',
                borderRadius: '100px',
                border: '2px solid #e2e8f0',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                backgroundColor: '#f8fafc',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-gold)')}
              onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
            />
            <span
              style={{
                position: 'absolute',
                left: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.2rem',
                color: '#94a3b8',
              }}
            >
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                  cursor: 'pointer',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setOpenIdx(0);
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  border: isSelected
                    ? '1px solid var(--accent-gold)'
                    : '1px solid #e2e8f0',
                  backgroundColor: isSelected ? 'var(--accent-gold)' : '#f8fafc',
                  color: isSelected ? '#fff' : '#475569',
                  fontWeight: isSelected ? '700' : '500',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Questions Count */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Showing <strong>{filteredFaqs.length}</strong> {filteredFaqs.length === 1 ? 'result' : 'results'}
          </span>
          {searchQuery && (
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔎</div>
            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>No exact matching questions found</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px' }}>
              Try searching for different keywords or ask our advisory team directly on WhatsApp.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              style={{
                backgroundColor: 'var(--accent-gold)',
                color: '#fff',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '100px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.question}
                  style={{
                    border: isOpen
                      ? '1px solid var(--accent-gold)'
                      : '1px solid #e2e8f0',
                    borderRadius: '14px',
                    backgroundColor: isOpen ? '#fcfbf7' : '#f8fafc',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen
                      ? '0 8px 24px -4px rgba(201, 168, 76, 0.12)'
                      : 'none',
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
                      textAlign: 'left',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: '700',
                        color: isOpen ? 'var(--primary-green)' : '#1e293b',
                        lineHeight: '1.4',
                      }}
                    >
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
                        transition: 'all 0.25s ease',
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
                        <div
                          style={{
                            padding: '0 24px 22px',
                            fontSize: '0.96rem',
                            color: '#475569',
                            lineHeight: '1.75',
                          }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
