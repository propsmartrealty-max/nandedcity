const QRCode = require('qrcode');
const fs = require('fs');

const projects = [
  { id: 'melody-1', url: 'https://maharera.maharashtra.gov.in/' },
  { id: 'melody-2', url: 'https://maharera.maharashtra.gov.in/' },
  { id: 'aalaap-1', url: 'https://maharera.maharashtra.gov.in/' },
  { id: 'saajgiri', url: 'https://maharera.maharashtra.gov.in/' },
  { id: 'harmony', url: 'https://maharera.maharashtra.gov.in/' },
  { id: 'rhythm-1', url: 'https://maharera.maharashtra.gov.in/' },
  { id: 'dhanashree', url: 'https://maharera.maharashtra.gov.in/' },
  { id: 'melody-3', url: 'https://maharera.maharashtra.gov.in/' },
];

async function generateQRCodes() {
  for (const project of projects) {
    const filePath = `public/qrs/${project.id}-qr.png`;
    try {
      await QRCode.toFile(filePath, project.url, {
        color: {
          dark: '#000000',  // Pure black squares
          light: '#ffffff' // Pure white background
        },
        width: 300, // High-res output
        margin: 2
      });
      console.log(`✅ Successfully generated QR for ${project.id} -> ${filePath}`);
    } catch (err) {
      console.error(`❌ Failed to generate QR for ${project.id}:`, err);
    }
  }
}

generateQRCodes();
