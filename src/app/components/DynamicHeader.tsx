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

  const navLinks: NavItem[] = [
    { name: 'Connectivity', href: '/near/sinhagad-road' },
    { name: 'ROI Reports', href: '/blog' },
    { name: 'About', href: '/about-us' },
    { name: 'Legal', href: '/legal-compliance' },
    { name: 'Contact', href: '/contact' }
  ];

  const mobileNavItems: NavItem[] = [
    { name: 'All 20 Residences & Plots', href: '/projects' },
    { name: 'Locations & Connectivity', href: '/near/sinhagad-road' },
    { name: 'Market Insights & ROI', href: '/blog' },
    { name: 'About Township', href: '/about-us' },
    { name: 'MahaRERA Compliance', href: '/legal-compliance' },
    { name: 'Contact Sales Expert', href: '/contact' }
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
          justifyContent: 'center',
          padding: scrolled ? '10px 16px' : '16px 16px',
          transition: 'padding 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <motion.div 
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.86)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            padding: scrolled ? '6px 8px 6px 18px' : '8px 10px 8px 22px',
            borderRadius: '100px',
            boxShadow: scrolled 
              ? '0 16px 36px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.9), inset 0 1px 1px rgba(255, 255, 255, 1)' 
              : '0 10px 30px -6px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            width: '100%',
            maxWidth: '1160px',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Left: Brand Logo */}
          <Link 
            href="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
              flexShrink: 0,
              paddingRight: '8px'
            }}
            aria-label="Nanded City Township Pune Home"
          >
            <Image 
              src="/nc-logo.png" 
              alt="Nanded City Township Pune Official Logo" 
              width={130} 
              height={36} 
              priority
              style={{ 
                objectFit: 'contain', 
                height: '30px', 
                width: 'auto', 
                display: 'block' 
              }}
            />
          </Link>

          {/* Center: Desktop Nav (Hidden on Mobile) */}
          <nav 
            className="desktop-only" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2px',
              margin: '0 auto'
            }}
          >
            {/* Residences Dropdown Trigger */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setClustersMenuOpen(true)}
              onMouseLeave={() => setClustersMenuOpen(false)}
            >
              <Link 
                href="/projects"
                className="nav-link-premium"
                style={{ 
                  color: clustersMenuOpen ? 'var(--primary-green)' : '#334155', 
                  backgroundColor: clustersMenuOpen ? 'rgba(15, 23, 42, 0.05)' : 'transparent',
                  fontSize: '0.78rem', 
                  fontWeight: '700', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 12px',
                  borderRadius: '100px',
                  transition: 'all 0.2s ease',
                  lineHeight: 1
                }}
              >
                <span>Residences</span>
                <svg 
                  width="11" 
                  height="11" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ 
                    transition: 'transform 0.25s ease', 
                    transform: clustersMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>

              <AnimatePresence>
                {clustersMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '10px',
                      zIndex: 1100,
                      minWidth: '420px'
                    }}
                  >
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '18px',
                      padding: '20px',
                      boxShadow: '0 24px 50px -12px rgba(15, 23, 42, 0.2), 0 0 0 1px rgba(15, 23, 42, 0.06)',
                      border: '1px solid #e2e8f0'
                    }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                            <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              Ongoing Launches
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <Link href="/cluster/saajgiri" className="dropdown-cluster-item">
                              <span className="cluster-name">Saajgiri</span>
                              <span className="cluster-bhk">3 BHK Luxury High-Rise</span>
                            </Link>
                            <Link href="/cluster/harmony" className="dropdown-cluster-item">
                              <span className="cluster-name">Harmony</span>
                              <span className="cluster-bhk">3.5 & 4.5 BHK Residences</span>
                            </Link>
                            <Link href="/cluster/aalaap-1" className="dropdown-cluster-item">
                              <span className="cluster-name">Aalaap-I</span>
                              <span className="cluster-bhk">2 & 3 BHK Premium</span>
                            </Link>
                            <Link href="/cluster/melody-1" className="dropdown-cluster-item">
                              <span className="cluster-name">Melody</span>
                              <span className="cluster-bhk">NA Bungalow Plots</span>
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-green)' }} />
                            <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              Ready Possession
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <Link href="/cluster/asawari" className="dropdown-cluster-item">
                              <span className="cluster-name">Asawari</span>
                              <span className="cluster-bhk">2 & 3 BHK Resale</span>
                            </Link>
                            <Link href="/cluster/sargam" className="dropdown-cluster-item">
                              <span className="cluster-name">Sargam</span>
                              <span className="cluster-bhk">2 & 2.5 BHK Resale</span>
                            </Link>
                            <Link href="/cluster/pancham" className="dropdown-cluster-item">
                              <span className="cluster-name">Pancham</span>
                              <span className="cluster-bhk">Phase 1 & 2 (2 BHK)</span>
                            </Link>
                            <Link href="/cluster/bageshree" className="dropdown-cluster-item">
                              <span className="cluster-name">Bageshree</span>
                              <span className="cluster-bhk">2 BHK Resale</span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.74rem', color: '#64748b' }}>20 Master Clusters · 700 Acres</span>
                        <Link 
                          href="/projects"
                          style={{ 
                            fontSize: '0.78rem', 
                            fontWeight: '700', 
                            color: 'var(--accent-gold)', 
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          All 20 Clusters Directory →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="nav-link-premium"
                style={{ 
                  color: '#334155', 
                  fontSize: '0.78rem', 
                  fontWeight: '700', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  padding: '7px 11px',
                  borderRadius: '100px',
                  transition: 'all 0.2s ease',
                  lineHeight: 1
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: Actions & CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* WhatsApp Connect Button (Desktop only) */}
            <a 
              href={getWhatsappLink(pathname)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="desktop-only"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '35px',
                padding: '0 16px',
                backgroundColor: '#25D366',
                color: '#ffffff',
                borderRadius: '100px',
                fontSize: '0.78rem',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                transition: 'all 0.2s ease',
                lineHeight: 1
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.614-.666-2.656-2.316-2.738-2.424-.08-.109-.648-.862-.648-1.644 0-.781.411-1.168.558-1.328.147-.16.322-.2.43-.2.109 0 .218.001.312.006.102.006.238-.039.373.285.14.335.478 1.168.521 1.255.043.088.072.19.014.305-.057.116-.086.189-.172.29-.086.101-.182.226-.26.304-.087.086-.177.18-.076.353.101.173.449.74 0.963 1.198.662.59 1.221.773 1.393.859.172.086.273.072.373-.044.101-.115.43-.502.544-.674.115-.173.23-.144.387-.086.158.058 1.002.472 1.174.558.173.086.287.13.33.202.043.073.043.419-.101.824z" />
              </svg>
              <span>Connect</span>
            </a>

            {/* Enquire CTA Button */}
            <button 
              onClick={() => openEnquiry()}
              className="btn-enquiry-glow shimmer-hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '35px',
                padding: '0 18px',
                backgroundColor: 'var(--accent-gold)',
                color: '#ffffff',
                borderRadius: '100px',
                border: 'none',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                lineHeight: 1
              }}
            >
              Enquire
            </button>

            {/* Mobile Burger Menu Button */}
            <button 
              className="mobile-only burger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                display: 'none',
                width: '35px',
                height: '35px',
                backgroundColor: 'rgba(15, 23, 42, 0.05)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                borderRadius: '50%',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '4px',
                padding: 0
              }}
            >
              <div style={{ width: '16px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }} />
              <div style={{ width: '16px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px' }} />
              <div style={{ width: '12px', height: '2px', backgroundColor: '#0f172a', borderRadius: '2px', alignSelf: 'center' }} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              maxWidth: '420px',
              height: '100vh',
              backgroundColor: '#ffffff',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.15)'
            }}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9', marginBottom: '24px' }}>
              <Image src="/nc-logo.png" alt="Nanded City Logo" width={110} height={32} style={{ objectFit: 'contain', height: '28px', width: 'auto' }} />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
                style={{ 
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0', 
                  fontSize: '1.2rem', 
                  color: '#0f172a', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            {/* Nav Items List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', flex: 1, paddingRight: '4px' }}>
              {mobileNavItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ 
                      display: 'block',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      fontSize: '1.05rem', 
                      fontWeight: '700', 
                      color: '#0f172a', 
                      textDecoration: 'none',
                      backgroundColor: '#f8fafc',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Popular Clusters Quick Grid */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: '12px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
                  Popular Clusters (20 Total)
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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
                        padding: '6px 11px',
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        fontSize: '0.74rem',
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
                      padding: '6px 11px',
                      backgroundColor: 'var(--accent-gold)',
                      borderRadius: '20px',
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      textDecoration: 'none'
                    }}
                  >
                    All 20 Clusters →
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div style={{ paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); openEnquiry(); }}
                style={{ 
                  padding: '14px', 
                  backgroundColor: 'var(--accent-gold)', 
                  color: '#fff', 
                  borderRadius: '12px', 
                  border: 'none', 
                  fontWeight: '700', 
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              >
                Enquire Now
              </button>
              <a 
                href={getWhatsappLink(pathname)} 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  padding: '14px', 
                  backgroundColor: '#25D366', 
                  color: '#fff', 
                  borderRadius: '12px', 
                  textAlign: 'center', 
                  textDecoration: 'none', 
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.614-.666-2.656-2.316-2.738-2.424-.08-.109-.648-.862-.648-1.644 0-.781.411-1.168.558-1.328.147-.16.322-.2.43-.2.109 0 .218.001.312.006.102.006.238-.039.373.285.14.335.478 1.168.521 1.255.043.088.072.19.014.305-.057.116-.086.189-.172.29-.086.101-.182.226-.26.304-.087.086-.177.18-.076.353.101.173.449.74 0.963 1.198.662.59 1.221.773 1.393.859.172.086.273.072.373-.044.101-.115.43-.502.544-.674.115-.173.23-.144.387-.086.158.058 1.002.472 1.174.558.173.086.287.13.33.202.043.073.043.419-.101.824z" />
                </svg>
                <span>WhatsApp Sales Expert</span>
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
            display: inline-flex !important;
          }
        }
        .nav-link-premium:hover {
          color: var(--primary-green) !important;
          background-color: rgba(15, 23, 42, 0.05) !important;
        }
        .dropdown-cluster-item {
          display: flex;
          flex-direction: column;
          padding: 6px 10px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .dropdown-cluster-item:hover {
          background-color: #f8fafc;
        }
        .cluster-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f172a;
        }
        .cluster-bhk {
          font-size: 0.72rem;
          color: #64748b;
          font-weight: 500;
        }
        .btn-enquiry-glow {
          box-shadow: 0 4px 14px 0 rgba(197, 168, 114, 0.39);
          transition: all 0.3s ease;
        }
        .btn-enquiry-glow:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(197, 168, 114, 0.5);
        }
      `}</style>
    </>
  );
}
