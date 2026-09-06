"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEnquiryModal } from '../context/ModalContext';
import { NavItem } from '@/types';
import { SITE_CONFIG, getWhatsappLink } from '@/config/site';
import { usePathname } from 'next/navigation';

export default function DynamicHeader() {

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [clustersMenuOpen, setClustersMenuOpen] = useState<boolean>(false);
  const { openEnquiry } = useEnquiryModal();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { name: 'All Residences', href: '/projects' },
    { name: 'NA Plots', href: '/projects' },
    { name: 'ROI Reports', href: '/blog' },
    { name: 'About', href: '/about-us' },
    { name: 'Legal', href: '/legal-compliance' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header 
        id="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.76)',
              backdropFilter: 'blur(28px) saturate(190%)',
              WebkitBackdropFilter: 'blur(28px) saturate(190%)',
              padding: '7px 10px 7px 24px',
              borderRadius: '100px',
              boxShadow: scrolled 
                ? '0 20px 45px -10px rgba(15, 23, 42, 0.14), inset 0 1px 2px 0 rgba(255, 255, 255, 0.95)' 
                : '0 12px 35px -8px rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              width: '100%',
              maxWidth: '1140px',
              marginTop: scrolled ? '0' : '10px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              justifyContent: 'space-between'
            }}
          >
            {/* Left: Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <Image 
                src="/nc-logo.png" 
                alt="Nanded City Township Pune Official Logo" 
                width={140} 
                height={42} 
                style={{ objectFit: 'contain' }}
              />
            </Link>

            {/* Center: Desktop Nav (Hidden on Mobile) */}
            <nav className="desktop-only" style={{ display: 'flex', gap: '24px', marginLeft: '30px', alignItems: 'center' }}>
              {/* Clusters Dropdown Menu */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setClustersMenuOpen(true)}
                onMouseLeave={() => setClustersMenuOpen(false)}
              >
                <Link 
                  href="/projects"
                  className="nav-link-premium"
                  style={{ 
                    color: '#475569', 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.23s ease'
                  }}
                >
                  Residences <span style={{ fontSize: '0.65rem' }}>▼</span>
                </Link>

                <AnimatePresence>
                  {clustersMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        paddingTop: '14px',
                        zIndex: 1100,
                        minWidth: '380px'
                      }}
                    >
                      <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)',
                        border: '1px solid #e2e8f0'
                      }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                          <div>
                            <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              Ongoing Launches
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                              <Link href="/cluster/saajgiri" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Saajgiri (3 BHK)</Link>
                              <Link href="/cluster/harmony" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Harmony (3.5/4.5 BHK)</Link>
                              <Link href="/cluster/aalaap-1" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Aalaap-I (2/3 BHK)</Link>
                              <Link href="/cluster/melody-1" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Melody (NA Plots)</Link>
                            </div>
                          </div>

                          <div>
                            <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              Ready Possession
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                              <Link href="/cluster/asawari" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Asawari (2/3 BHK)</Link>
                              <Link href="/cluster/sargam" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Sargam (2/2.5 BHK)</Link>
                              <Link href="/cluster/pancham" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Pancham (2 BHK)</Link>
                              <Link href="/cluster/bageshree" style={{ fontSize: '0.82rem', fontWeight: '600', color: '#0f172a', textDecoration: 'none' }}>Bageshree (2 BHK)</Link>
                            </div>
                          </div>
                        </div>

                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', textAlign: 'center' }}>
                          <Link 
                            href="/projects"
                            style={{ 
                              fontSize: '0.82rem', 
                              fontWeight: '700', 
                              color: 'var(--accent-gold)', 
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            Explore All 20 Clusters & Specifications →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.slice(1).map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="nav-link-premium"
                  style={{ 
                    color: '#475569', 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    textDecoration: 'none',
                    transition: 'color 0.23s ease'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right: Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* WhatsApp Button (Hidden on very small screens if needed) */}
              <a 
                href={getWhatsappLink(pathname)} 
                target="_blank" 
                className="desktop-only"

                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)'
                }}
              >
                Connect
              </a>

              <button 
                onClick={() => openEnquiry()}
                className="btn-enquiry-glow shimmer-hover"
                style={{
                  padding: '10px 24px',
                  backgroundColor: 'var(--accent-gold)',
                  color: '#fff',
                  borderRadius: '100px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                Enquire
              </button>

              {/* Mobile Burger */}
              <button 
                className="mobile-only burger-btn"
                onClick={() => setMobileMenuOpen(true)}
                style={{
                  display: 'none',
                  padding: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '20px', height: '2px', backgroundColor: '#0f172a', marginBottom: '4px', borderRadius: '2px' }} />
                <div style={{ width: '20px', height: '2px', backgroundColor: '#0f172a', marginBottom: '4px', borderRadius: '2px' }} />
                <div style={{ width: '14px', height: '2px', backgroundColor: '#0f172a', marginLeft: '6px', borderRadius: '2px' }} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: '#fff',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              padding: '30px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
              <Image src="/nc-logo.png" alt="Nanded City Logo" width={100} height={30} />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '2rem', color: '#0f172a', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', maxHeight: 'calc(100vh - 250px)' }}>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', textDecoration: 'none' }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Quick Project Links on Mobile */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: '10px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
                  Popular Clusters (20 Total)
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[
                    { name: 'Saajgiri (3 BHK)', href: '/cluster/saajgiri' },
                    { name: 'Harmony (3.5/4.5 BHK)', href: '/cluster/harmony' },
                    { name: 'Aalaap-I (2/3 BHK)', href: '/cluster/aalaap-1' },
                    { name: 'Melody (Plots)', href: '/cluster/melody-1' },
                    { name: 'Asawari (Resale)', href: '/cluster/asawari' },
                    { name: 'Pancham (2 BHK)', href: '/cluster/pancham' },
                  ].map(c => (
                    <Link
                      key={c.name}
                      href={c.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        color: '#334155',
                        border: '1px solid #e2e8f0',
                        textDecoration: 'none'
                      }}
                    >
                      {c.name}
                    </Link>
                  ))}
                  <Link
                    href="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: 'var(--accent-gold)',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      color: '#fff',
                      textDecoration: 'none'
                    }}
                  >
                    All 20 Clusters →
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); openEnquiry(); }}
                style={{ padding: '20px', backgroundColor: 'var(--accent-gold)', color: '#fff', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '1.1rem' }}
              >
                Enquire Now
              </button>
              <a 
                href={getWhatsappLink(pathname)} 
                style={{ padding: '18px', backgroundColor: '#25D366', color: '#fff', borderRadius: '12px', textAlign: 'center', textDecoration: 'none', fontWeight: '700' }}
              >

                WhatsApp Experts
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 991px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }
        .nav-link-premium:hover {
          color: var(--accent-gold) !important;
        }
        .btn-enquiry-glow {
          box-shadow: 0 4px 14px 0 rgba(197, 168, 114, 0.39);
          transition: all 0.3s ease;
        }
        .btn-enquiry-glow:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(197, 168, 114, 0.55);
        }
      `}</style>
    </>
  );
}
