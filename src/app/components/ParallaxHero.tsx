"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ParallaxHeroProps {
  bgImage: string;
  children: ReactNode;
}

export default function ParallaxHero({ bgImage, children }: ParallaxHeroProps) {
  return (
    <section 
      className="hero" 
      style={{ position: 'relative', overflow: 'hidden' }}
      aria-label="Nanded City Hero"
    >
      <Image
        src={bgImage}
        alt="Nanded City Township"
        fill
        priority
        fetchPriority="high"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          position: 'absolute',
          zIndex: 0,
        }}
        sizes="100vw"
      />
      {/* Dark overlay for text legibility */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.72) 50%, rgba(15, 23, 42, 0.9) 100%)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Floating Ambient Glowing Glass Orbs */}
      <div 
        className="ambient-glow-orb ambient-glow-gold animate-float-slow"
        style={{ top: '15%', left: '10%', width: '380px', height: '380px' }}
        aria-hidden="true"
      />
      <div 
        className="ambient-glow-orb ambient-glow-emerald animate-float"
        style={{ bottom: '10%', right: '8%', width: '420px', height: '420px' }}
        aria-hidden="true"
      />
      <div 
        className="ambient-glow-orb ambient-glow-blue animate-float-slow"
        style={{ top: '40%', right: '35%', width: '300px', height: '300px', opacity: 0.25 }}
        aria-hidden="true"
      />
      
      <motion.div 
        className="container hero-inner"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ zIndex: 2, position: 'relative' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
