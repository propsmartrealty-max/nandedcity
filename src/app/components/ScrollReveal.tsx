"use client";

import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({ 
  children, 
  className = "",
  style 
}: ScrollRevealProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

