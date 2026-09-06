'use client';
import Image from 'next/image';

interface ReraQrCodeProps {
  reraUrl?: string | null;
  reraNumber?: string;
  qrImage?: string;
}

export default function ReraQrCode({ reraUrl, reraNumber, qrImage }: ReraQrCodeProps) {
  const officialUrl = reraUrl || "https://maharera.maharashtra.gov.in/";

  if (!qrImage) {
    return (
      <div className="rera-footer-item">
        <span className="rera-label-small">MahaRERA Registration Number</span>
        <span className="rera-number">{reraNumber}</span>
        <a 
          href={officialUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '600', marginTop: '2px', display: 'inline-block' }}
        >
          Verify: maharera.maharashtra.gov.in ↗
        </a>
      </div>
    );
  }

  return (
    <div className="rera-qr-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a 
        href={officialUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        title="Verify on official MahaRERA website"
        style={{ position: 'relative', width: '100px', height: '100px', background: '#fff', padding: '4px', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'block' }}
      >
        <Image 
          src={qrImage} 
          alt={`MahaRERA QR Code for ${reraNumber}`} 
          fill 
          style={{ objectFit: 'contain' }} 
        />
      </a>
      {reraNumber && reraNumber !== 'Ongoing Registration' && (
        <span style={{ fontSize: '0.68rem', marginTop: '6px', fontWeight: 'bold', color: '#334155' }}>{reraNumber}</span>
      )}
      <a 
        href={officialUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '600', marginTop: '3px' }}
      >
        maharera.maharashtra.gov.in ↗
      </a>
    </div>
  );
}
