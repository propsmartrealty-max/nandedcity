import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import EnquiryForm from '../components/EnquiryForm';
import ScrollReveal from '../components/ScrollReveal';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'नांदेड सिटी पुणे | ७०० एकर एकात्मिक टाऊनशिप फ्लॅट्स आणि प्लॉट्स | MahaRERA A031262401295',
  description: 'नांदेड सिटी टाऊनशिप पुणे (सिंहगड रोड). २, २.५, ३, ३.५ व ४.५ बीएचके लक्झरी फ्लॅट्स आणि एन.ए. बंगलो प्लॉट्स. अधिकृत माहिती, किमती, मजल्यांचे नकाशे आणि महारेरा तपशील.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/mr/`,
    languages: {
      'mr-IN': `${SITE_CONFIG.baseUrl}/mr/`,
      'en-IN': `${SITE_CONFIG.baseUrl}/`,
    },
  },
};

const marathiPortals = [
  {
    slug: '2-bhk-flats',
    title: '२ बीएचके लक्झरी फ्लॅट्स',
    desc: 'आलाप, बागेश्री, पंचम आणि सरगम मध्ये आधुनिक २ बीएचके घरे. स्मार्ट डिझाइन आणि उत्तम सूर्यप्रकाश.',
    price: '₹६५ लाख onwards',
    badge: 'लोकप्रिय',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: '3-bhk-flats',
    title: '३ व ३.५ बीएचके प्रशस्त घरे',
    desc: 'साजगिरी आणि असवारी मधील सह्याद्रीच्या डोंगररांगांचे दृश्य देणारे भव्य ३ बीएचके टॉवर्स.',
    price: '₹१.२५ कोटी onwards',
    badge: 'प्रीमियम',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'bungalow-plots',
    title: 'एन.ए. ब्रँडेड बंगलो प्लॉट्स',
    desc: 'मेलोडी, ऱ्हिदम आणि धनेश्री मध्ये स्वतःचा स्वतंत्र व्हिला किंवा बंगला बांधण्यासाठी कलेक्टर्स मंजूर प्लॉट्स.',
    price: '₹१.९० कोटी onwards',
    badge: 'मर्यादित संधी',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'saajgiri',
    title: 'साजगिरी — नवीन ३ बीएचके टॉवर',
    desc: 'नांदेड सिटीचा सर्वात आधुनिक आणि भव्य ३ बीएचके प्रकल्प. महारेरा नोंदणी क्रमांक: PR1260002501621.',
    price: '₹१.४५ कोटी onwards',
    badge: 'नवीन लाँच',
    img: 'https://nandedcitypune.com/wp-content/uploads/2026/02/saajgiri-ncp-banner-img-01.webp'
  },
  {
    slug: 'harmony',
    title: 'हार्मोनी — ३.५ व ४.५ बीएचके',
    desc: 'अल्ट्रा-प्रीमियम लक्झरी निवासस्थाने. मर्यादित युनिट्स, खाजगी लॉबी आणि जागतिक दर्जाच्या सोयी.',
    price: '₹१.९५ कोटी onwards',
    badge: 'अल्ट्रा लक्झरी',
    img: 'https://nandedcitypune.com/wp-content/uploads/2026/02/harmony-ncp-banner-img-01.webp'
  },
  {
    slug: 'resale-flats',
    title: 'रीसेल व रेडी पझेशन फ्लॅट्स',
    desc: 'तात्काळ राहण्यास तयार घरे. सर्व आवश्यक कागदपत्रांची पडताळणी आणि पारदर्शक व्यवहार सहाय्य.',
    price: '₹५८ लाख onwards',
    badge: 'रेडी पझेशन',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'sinhgad-road',
    title: 'सिंहगड रोड कनेक्टिव्हिटी',
    desc: 'नवीन मल्टि-टियर उड्डाणपुलामुळे स्वारगेट, कोथरूड आणि मुंबई-बंगळूर हायवेपर्यंत अवघ्या काही मिनिटांत प्रवास.',
    price: 'उत्कृष्ट स्थान',
    badge: 'हायपरलोकल',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function MarathiHomePage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Hero Header */}
      <section style={{ backgroundColor: '#0f172a', padding: '130px 0 70px', color: '#fff' }}>
        <div className="container">
          <Breadcrumbs items={[
            { name: 'मुख्यपृष्ठ', href: '/' },
            { name: 'मराठी दालन (नांदेड सिटी)', href: '/mr/', current: true }
          ]} />
          
          <div style={{ maxWidth: '850px', marginTop: '20px' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              backgroundColor: 'rgba(212, 175, 55, 0.15)', 
              color: 'var(--accent-gold)', 
              borderRadius: '100px', 
              fontSize: '0.82rem', 
              fontWeight: '800', 
              letterSpacing: '1px',
              marginBottom: '16px' 
            }}>
              अधिकृत निवासी माहिती दालन
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', lineHeight: '1.25', marginBottom: '20px' }}>
              नांदेड सिटी टाऊनशिप पुणे — परिपूर्ण जीवनाची ७०० एकर नगरी
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '32px' }}>
              सिंहगड रोड वरील निसर्गरम्य आणि स्वयंपूर्ण टाऊनशिप. २, २.५, ३, ३.५ आणि ४.५ बीएचके फ्लॅट्स तसेच स्वतःचा व्हिला बांधण्यासाठी एन.ए. बंगलो प्लॉट्स. थेट अधिकृत माहिती, पारदर्शक व्यवहार आणि मोफत मार्गदर्शन.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="#marathi-projects" 
                style={{ 
                  backgroundColor: 'var(--accent-gold)', 
                  color: '#000', 
                  padding: '12px 28px', 
                  borderRadius: '100px', 
                  fontWeight: '700', 
                  textDecoration: 'none',
                  fontSize: '0.92rem'
                }}
              >
                सर्व गृहप्रकल्प पहा ↓
              </a>
              <Link 
                href="/projects/" 
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.08)', 
                  color: '#fff', 
                  padding: '12px 28px', 
                  borderRadius: '100px', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}
              >
                English Version →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Marathi Portals */}
      <section id="marathi-projects" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              प्रकल्प व निवासी पर्याय
            </span>
            <h2 style={{ fontSize: '2.4rem', color: '#0f172a', margin: '8px 0 14px', fontWeight: '800' }}>
              आपल्या पसंतीनुसार गृहप्रकल्प निवडा
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
              प्रत्येक प्रकल्पाची सविस्तर माहिती, कार्पेट एरिया, किमती आणि महारेरा नोंदणी क्रमांक तपासा.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {marathiPortals.map((item, idx) => (
              <ScrollReveal key={item.slug} delay={idx * 0.08}>
                <div style={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{ position: 'relative', height: '210px', width: '100%' }}>
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }} 
                    />
                    <div style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(8px)', color: 'var(--accent-gold)', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700' }}>
                      {item.badge}
                    </div>
                    <div style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: '#fff', padding: '4px 12px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: '800', color: '#16a34a', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                      {item.price}
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                      {item.desc}
                    </p>
                    <Link 
                      href={`/mr/${item.slug}/`}
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 20px', 
                        backgroundColor: '#0f172a', 
                        color: '#fff', 
                        borderRadius: '12px', 
                        textDecoration: 'none', 
                        fontWeight: '700',
                        fontSize: '0.88rem'
                      }}
                    >
                      तपशील पहा व संपर्क करा →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Township Infrastructure Highlights in Marathi */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              स्वयंपूर्ण सुविधा
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '8px 0 14px', fontWeight: '800' }}>
              टाऊनशिप मधील जागतिक दर्जाच्या पायाभूत सुविधा
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🏫', title: 'नांदेड सिटी पब्लिक स्कूल', desc: 'आय.सी.एस.ई. (ICSE) बोर्डाची नामांकित शाळा टाऊनशिपच्या आत.' },
              { icon: '🛍️', title: 'डेस्टिनेशन सेंटर १ व २', desc: 'शॉपिंग मॉल्स, सुपरमार्केट्स, बँका, रेस्टॉरंट्स आणि जीवनोपयोगी सेवा.' },
              { icon: '🏥', title: 'मल्टिस्पेशालिटी हॉस्पिटल', desc: 'टाऊनशिप मधील सुसज्ज रुग्णालय आणि २४ तास आपत्कालीन वैद्यकीय सेवा.' },
              { icon: '⚽', title: 'क्रीडांगण स्पोर्ट्स कॉम्प्लेक्स', desc: 'टेनिस, क्रिकेट, फुटबॉल, स्विमिंग पूल आणि इनडोअर क्रीडा संकुल.' },
              { icon: '💼', title: 'सिम्फनी आयटी पार्क', desc: 'टाऊनशिपच्या आतच आयटी कंपन्या — घर ते ऑफिस चालत जाण्याची सोय.' },
              { icon: '🌳', title: '७०% हिरवेगार खुले क्षेत्र', desc: 'प्रदूषणमुक्त शुद्ध हवा, जॉगिंग ट्रॅक्स आणि विस्तीर्ण उद्याने.' }
            ].map(f => (
              <div key={f.title} style={{ padding: '28px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: '700', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Consultation Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#0f172a', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              मोफत मार्गदर्शन
            </span>
            <h2 style={{ fontSize: '2.2rem', color: '#fff', margin: '8px 0 12px', fontWeight: '800' }}>
              साइट व्हिजिट आणि प्राधान्य सल्लामसलत
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              नांदेड सिटी मधील सर्व उपलब्ध प्लॉट्स आणि फ्लॅट्सची प्रत्यक्ष पाहणी करण्यासाठी आजच नोंदणी करा.
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '36px', borderRadius: '24px' }}>
            <EnquiryForm clusterName="नांदेड सिटी टाऊनशिप" bhk="2, 3 BHK & Plots" />
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' }}>
            {SITE_CONFIG.brand.partnerStatus}: MahaRERA <strong>{SITE_CONFIG.brand.rera}</strong> ({SITE_CONFIG.brand.organizationName})<br />
            सर्व माहिती व कागदपत्रांची अधिकृत महारेरा संकेतस्थळावर पडताळणी: <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>maharera.maharashtra.gov.in</a>
          </div>
        </div>
      </section>
    </div>
  );
}
