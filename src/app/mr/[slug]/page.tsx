import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import EnquiryForm from '../../components/EnquiryForm';
import ScrollReveal from '../../components/ScrollReveal';

interface MarathiParams {
  slug: string;
}

export async function generateStaticParams() {
  return [
    { slug: '2-bhk-flats' },
    { slug: '3-bhk-flats' },
    { slug: 'bungalow-plots' },
    { slug: 'sinhgad-road' },
    { slug: 'resale-flats' },
    { slug: 'saajgiri' },
    { slug: 'harmony' },
    { slug: 'bageshree' },
    { slug: 'asawari' },
    { slug: 'melody-plots' },
    { slug: 'pancham' }
  ];
}

interface MarathiData {
  title: string;
  sub: string;
  bhk: string;
  clusterName: string;
  heroImg: string;
  bullets: string[];
}

const mrData: Record<string, MarathiData> = {
  '2-bhk-flats': {
    title: 'नांदेड सिटी पुणे मध्ये 2 BHK लक्झरी फ्लॅट्स',
    sub: 'सिंहगड रोड वरील सर्वात मोठी आणि सुरक्षित टाऊनशिप. आजच भेट द्या.',
    bhk: '2 BHK',
    clusterName: 'Aalaap',
    heroImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      '७८ लाख रुपयांपासून सुरुवात (शून्य ब्रोकरेज)',
      '७०० एकर निसर्गरम्य टाऊनशिप - उद्याने, शाळा आणि हॉस्पिटल',
      'महारेरा (MahaRERA) नोंदणीकृत व १००% कायदेशीर सुरक्षितता (अधिकृत संकेतस्थळ: maharera.maharashtra.gov.in)'
    ],
  },
  '3-bhk-flats': {
    title: 'नांदेड सिटी पुणे मध्ये 3 BHK लक्झरी फ्लॅट्स',
    sub: 'सिंहगड रोड वरील भव्य टॉवर्स आणि सह्याद्रीचे विहंगम दृश्य. आजच भेट द्या.',
    bhk: '3 BHK Luxury',
    clusterName: 'Saajgiri',
    heroImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      '१.२५ कोटी रुपयांपासून सुरुवात (प्रशस्त कार्पेट क्षेत्र)',
      'साजगिरी व असवारी मधील आधुनिक सोयीसुविधा आणि क्लबहाऊस',
      'महारेरा नोंदणीकृत आणि शून्य ब्रोकरेज थेट अधिकृत सहाय्य'
    ],
  },
  'bungalow-plots': {
    title: 'पुण्यातील सर्वात प्रीमियम N.A. बंगलो प्लॉट्स',
    sub: 'डॉक्टर, उद्योजक आणि आयटी प्रोफेशनल्सची पहिली पसंती.',
    bhk: 'Branded NA Bungalow Plots',
    clusterName: 'Melody / Rhythm',
    heroImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      '२,४०० चौ. फुटांपासून प्रशस्त प्लॉट्स',
      '१५,००० हून अधिक कुटुंबांचा विश्वास (नांदेड सिटी डेव्हलपर्स)',
      'स्वतःचा स्वतंत्र बंगला बांधण्याची सुवर्णसंधी'
    ],
  },
  'sinhgad-road': {
    title: 'सिंहगड रोड पुणे वरील सर्वोत्तम टाऊनशिप फ्लॅट्स',
    sub: 'नवीन उड्डाणपुलामुळे स्वारगेट अवघ्या १५ मिनिटांत. १५,००० हून अधिक समाधानी कुटुंबे.',
    bhk: '2 & 3 BHK Township Homes',
    clusterName: 'Nanded City',
    heroImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      '२४ तास मुबलक पाणी (खडकवासला धरणातून थेट शुद्धीकरण)',
      'पवार पब्लिक स्कूल आणि सिम्फनी आयटी पार्क टाऊनशिपमध्येच',
      '२, ३ व ४ BHK फ्लॅट्स आणि एन.ए. बंगलो प्लॉट्स उपलब्ध'
    ],
  },
  'resale-flats': {
    title: 'नांदेड सिटी पुणे रीसेल फ्लॅट्स - तत्काळ ताबा',
    sub: 'असावरी, सरगम, पंचम व इतर सोसायट्यांमध्ये खात्रीशीर २ व ३ बीएचके रीसेल घरे.',
    bhk: '2 & 3 BHK Resale',
    clusterName: 'Asawari, Sargam, Pancham',
    heroImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      'ऑक्युपन्सी सर्टिफिकेट (OC) सह तत्काळ ताबा',
      'सोसायटी एनओसी आणि १००% बँक कर्ज सुविधा',
      '७० लाख रुपयांपासून पुढे खात्रीशीर व्यवहार'
    ],
  },
  'saajgiri': {
    title: 'साजगिरी नांदेड सिटी - ३ बीएचके लक्झरी रेसिडेन्सेस',
    sub: 'सिंहगड रोड वरील आगामी अल्ट्रा-प्रीमियम टॉवर्स. महारेरा नोंदणी क्रमांक: PR1260002501621.',
    bhk: '3 BHK High-Rise',
    clusterName: 'Saajgiri',
    heroImg: 'https://nandedcitypune.com/wp-content/uploads/2026/02/saajgiri-ncp-banner-img-01.webp',
    bullets: [
      '१,०५० ते १,२५० चौ. फूट भव्य कार्पेट क्षेत्र',
      'सह्याद्रीच्या डोंगररांगांचे निसर्गरम्य दृश्य',
      '१.०५ कोटी रुपयांपासून बुकिंग सुरू'
    ],
  },
  'harmony': {
    title: 'हार्मोनी नांदेड सिटी - ३.५ व ४.५ बीएचके रॉयल फ्लॅट्स',
    sub: 'पुण्यातील सर्वात भव्य राजेशाही फ्लॅट्स. महारेरा नोंदणी क्रमांक: P52100055134.',
    bhk: '3.5 & 4.5 BHK Royal',
    clusterName: 'Harmony',
    heroImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      '१,६५० ते २,४०० चौ. फूट भव्य कार्पेट क्षेत्र',
      'प्रायव्हेट लिफ्ट, क्लबहाऊस आणि टेम्परेचर-कंट्रोल्ड पूल',
      '१.८५ कोटी रुपयांपासून पुढे'
    ],
  },
  'bageshree': {
    title: 'बागेश्री नांदेड सिटी - २ बीएचके हक्काचे घर',
    sub: 'नांदेड सिटीमधील सर्वाधिक लोकप्रिय आणि शांत परिसर. उत्तम कनेक्टिव्हिटी.',
    bhk: '2 BHK Compact & Regular',
    clusterName: 'Bageshree',
    heroImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      '६२० ते ८५० चौ. फूट कार्यक्षम लेआऊट',
      'कमी मेंटेनन्स आणि भाड्याने देण्यासाठी सर्वाधिक मागणी',
      '६८ लाख रुपयांपासून पुढे खात्रीशीर खरेदी'
    ],
  },
  'asawari': {
    title: 'असावरी नांदेड सिटी - २ व ३ बीएचके प्राइम घरे',
    sub: 'डेस्टिनेशन सेंटर १ च्या अगदी समोर मध्यवर्ती ठिकाणी स्थित नामांकित सोसायटी.',
    bhk: '2 & 3 BHK Prime',
    clusterName: 'Asawari',
    heroImg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      'डेस्टिनेशन सेंटर व क्रीडांगणापासून अवघ्या २ मिनिटांच्या अंतरावर',
      'सुसज्ज बाग, मुलांचे खेळाचे मैदान आणि ज्येष्ठ नागरिकांसाठी कट्टा',
      '८५ लाख ते १.१५ कोटी दरम्यान रीसेल उपलब्ध'
    ],
  },
  'melody-plots': {
    title: 'मेलोडी एन.ए. व्हिला प्लॉट्स नांदेड सिटी',
    sub: 'स्वतःचा स्वतंत्र बंगला बांधण्यासाठी ७०० एकर टाऊनशिपमधील सर्वोत्तम एन.ए. प्लॉट्स.',
    bhk: 'Branded NA Bungalow Plots',
    clusterName: 'Melody',
    heroImg: 'https://nandedcitypune.com/melody/assets/img/Melody%20Big%20League%20Living_Home.webp',
    bullets: [
      '२,४०० चौ. फुटांपासून भव्य एन.ए. प्लॉट्स',
      'रस्त्यांचे डांबरीकरण, पाणी, वीज व सुरक्षा व्यवस्था पूर्ण',
      'महारेरा नोंदणीकृत आणि तत्काळ बांधकामासाठी अनुकूल'
    ],
  },
  'pancham': {
    title: 'पंचम नांदेड सिटी - १ व २ बीएचके बजेट होम्स',
    sub: 'नांदेड सिटीच्या प्रवेशद्वाराजवळ पहिली पसंती. शाळा आणि बस स्टॉप जवळ.',
    bhk: '1 & 2 BHK Mid-Rise',
    clusterName: 'Pancham',
    heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    bullets: [
      'पवार पब्लिक स्कूलपासून अवघ्या ३ मिनिटांच्या अंतरावर',
      'कमी बजेटमध्ये नांदेड सिटीची जागतिक दर्जाची जीवनशैली',
      '५२ लाख रुपयांपासून सुरुवात'
    ],
  }
};

export async function generateMetadata({ params }: { params: Promise<MarathiParams> }) {
  const resolvedParams = await params;
  const data = mrData[resolvedParams.slug];
  if (!data) return { title: 'नांदेड सिटी पुणे' };

  let enUrl = 'https://www.nanded-city.in/lp/2-bhk-flats/';
  if (['saajgiri', 'harmony', 'bageshree', 'asawari', 'pancham'].includes(resolvedParams.slug)) {
    enUrl = `https://www.nanded-city.in/cluster/${resolvedParams.slug}/`;
  } else if (resolvedParams.slug === 'melody-plots' || resolvedParams.slug === 'bungalow-plots') {
    enUrl = 'https://www.nanded-city.in/cluster/melody-1/';
  } else if (resolvedParams.slug === '3-bhk-flats') {
    enUrl = 'https://www.nanded-city.in/lp/3-bhk-luxury/';
  }

  return {
    title: `${data.title} | Nanded City Pune`,
    description: `${data.sub} ${data.bullets[0]}`,
    alternates: {
      canonical: `https://www.nanded-city.in/mr/${resolvedParams.slug}/`,
      languages: {
        'mr-IN': `https://www.nanded-city.in/mr/${resolvedParams.slug}/`,
        'en-IN': enUrl,
        'x-default': enUrl,
      }
    },
    openGraph: {
      title: data.title,
      description: data.sub,
      url: `https://www.nanded-city.in/mr/${resolvedParams.slug}/`,
      images: [{ url: data.heroImg, width: 1200, height: 630 }],
    },
  };
}

export default async function MarathiLocalPage({ params }: { params: Promise<MarathiParams> }) {
  const resolvedParams = await params;
  const data = mrData[resolvedParams.slug];
  if (!data) notFound();

  // LocalBusiness Schema for Marathi Language Targeting
  const businessSchema: any = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": data.title,
    "description": data.sub,
    "url": `https://www.nanded-city.in/mr/${resolvedParams.slug}/`,
    "image": data.heroImg,
    "brand": {
      "@type": "Brand",
      "name": "Nanded City Developers Pune (नांदेड सिटी पुणे)"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nanded, Sinhagad Road",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      {/* Hero Section */}
      <section style={{ backgroundColor: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <Image
          src={data.heroImg}
          alt={data.title}
          fill
          priority
          fetchPriority="high"
          style={{ objectFit: 'cover', opacity: 0.3 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 100%)' }} />

        <div className="container" style={{ position: 'relative', padding: '120px 32px 100px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '60px', alignItems: 'center' }}>
          
          <div>
            <span style={{ display: 'inline-block', backgroundColor: 'var(--accent-gold)', color: '#000', padding: '6px 14px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
              अधिकृत नांदेड सिटी पुणे
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#fff' }}>
              {data.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', marginBottom: '40px', fontWeight: '500' }}>
              {data.sub}
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {data.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.2rem', color: '#e2e8f0' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>✔</span> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Lead Form */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
            <h3 style={{ color: '#0f172a', fontSize: '1.3rem', marginBottom: '8px', textAlign: 'center' }}>अधिक माहितीसाठी संपर्क करा</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '24px', textAlign: 'center' }}>खालील फॉर्म भरा. आमचे प्रतिनिधी लवकरच आपल्याशी संपर्क साधतील.</p>
            <EnquiryForm clusterName={data.clusterName} bhk={data.bhk} />
          </div>

        </div>
      </section>

      {/* SEO Prose section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
             <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '24px' }}>का निवडावे नांदेड सिटी?</h2>
             <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
               पुण्यातील सिंहगड रोड परिसरातील <strong>नांदेड सिटी</strong> हे फक्त गृहप्रकल्प नसून एक परिपूर्ण शहर आहे. १५,००० हून अधिक कुटुंबे येथे सुरक्षित आणि सुखकर जीवन जगत आहेत. डेस्टिनेशन सेंटर, सिम्फनी आयटी पार्क (Symphony IT Park), नांदेड सिटी पब्लिक स्कूल आणि प्रशस्त क्रीडा संकुलामुळे (Kridaangan) इथली जीवनशैली खऱ्या अर्थाने अत्याधुनिक बनली आहे.
             </p>
             <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8' }}>
               नवीन पुलाच्या (Sinhgad Road Flyover) मुळे हिंजवडी आणि स्वारगेटसारख्या मध्यवर्ती ठिकाणांवर पोहोचणे अत्यंत सोयीचे झाले आहे. आजच आपली साईट व्हिजिट बुक करा आणि स्वप्नातील घर नक्की करा.
             </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
