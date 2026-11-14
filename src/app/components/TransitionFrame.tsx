import React, { ReactNode } from 'react';

interface TransitionFrameProps {
  children: ReactNode;
}

export default function TransitionFrame({ children }: TransitionFrameProps) {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
}

