import React, { ReactNode } from 'react';

interface ParallaxHeroProps {
  bgImage?: string;
  children: ReactNode;
}

export default function ParallaxHero({ children }: ParallaxHeroProps) {
  return (
    <section 
      className="hero" 
      style={{ position: 'relative', overflow: 'hidden' }}
      aria-label="Nanded City Hero"
    >
      <picture>
        <source media="(max-width: 768px)" srcSet="/hero-banner-mobile.webp" type="image/webp" />
        <img
          src="/hero-banner.webp"
          alt="Nanded City Township Pune Master Township Ecosystem"
          fetchPriority="high"
          decoding="async"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            inset: 0,
            zIndex: 0,
          }}
        />
      </picture>
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
      
      <div 
        className="container hero-inner"
        style={{ zIndex: 2, position: 'relative' }}
      >
        {children}
      </div>
    </section>
  );
}
