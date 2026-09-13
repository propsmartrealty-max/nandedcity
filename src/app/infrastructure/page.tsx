import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Nanded City Pune Infrastructure | Complete 700-Acre Township Facilities Guide',
  description: 'Authoritative guide to Nanded City Pune infrastructure: internal roads, water treatment plant (WTP), captive STP, eco waste disposal, MSEB substations, ICSE schools, Kridaangan sports & Destination Center.',
  keywords: [
    'Nanded City infrastructure',
    'Nanded City Pune infrastructure',
    'Nanded City township infrastructure',
    'Nanded City internal roads',
    'Nanded City water supply',
    'Nanded City water treatment plant',
    'Nanded City sewage treatment plant',
    'Nanded City waste management',
    'Nanded City electricity MSEB substation',
    'Nanded City broadband',
    'Nanded City security CCTV',
    'Nanded City schools',
    'Nanded City Destination Center',
    'Nanded City Kridaangan sports complex',
    'Nanded City connectivity Sinhagad Road',
    'best township infrastructure Pune',
    'Nanded City vs Magarpatta infrastructure'
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/infrastructure/`,
  },
  openGraph: {
    title: 'Nanded City Pune Infrastructure | Complete 700-Acre Master Township Facilities',
    description: 'Explore the self-sufficient civic, physical, and social infrastructure of Nanded City Township Pune across 700 acres on Sinhagad Road.',
    url: `${SITE_CONFIG.baseUrl}/infrastructure/`,
    siteName: 'Nanded City Township Pune Residences',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: 'https://nandedcitypune.com/aalaap/assets/img/img-hero-banner-02.jpg',
        width: 1200,
        height: 630,
        alt: 'Nanded City Township Pune Infrastructure Master Plan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanded City Pune Infrastructure | 700-Acre Integrated Township Facilities',
    description: 'Complete breakdown of Nanded City civic infrastructure: WTP, STP, MSEB power, ICSE schools, roads, security & sports amenities.',
    images: ['https://nandedcitypune.com/aalaap/assets/img/img-hero-banner-02.jpg']
  }
};

export default function InfrastructurePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What infrastructure does Nanded City Pune have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nanded City Pune is a 700-acre integrated township equipped with complete self-contained civic, physical, and social infrastructure. This includes 15m to 24m wide internal arterial asphalt roads, paved pedestrian footpaths, automated LED streetlights, a captive Water Treatment Plant (WTP) with direct river/canal allocation, on-site Sewage Treatment Plants (STP) for 100% wastewater recycling, eco-friendly solid waste vermicomposting, dedicated MSEB electrical substations with underground cabling, high-speed multi-ISP optical fiber broadband, 3-tier centralized security with 300+ CCTV cameras and RFID vehicle access, two in-campus ICSE/CBSE schools, the Kridaangan multi-sport complex, Destination Center I & II commercial hubs, and over 100 acres of green landscaped parks."
        }
      },
      {
        "@type": "Question",
        "name": "Does Nanded City have its own water treatment plant and uninterrupted water supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nanded City features a captive multi-stage Water Treatment Plant (WTP) that draws dedicated raw water from the Khadakwasla reservoir canal. The raw water undergoes coagulation, multi-media sand filtration, chlorination, and quality testing before being pumped into extensive underground and overhead storage reservoirs. This ensures a 24x7 pressurized drinking water supply directly to all residential clusters."
        }
      },
      {
        "@type": "Question",
        "name": "How does sewage treatment and wastewater management operate in Nanded City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nanded City operates modern on-site Sewage Treatment Plants (STPs) built to zero-liquid-discharge (ZLD) environmental benchmarks. Township wastewater flows through an underground sewage network into the STP facility, where aerobic bio-treatment purifies the effluent. The recycled tertiary-treated water is recirculated through a dual-plumbing system for toilet flushing and feeds an automated irrigation network servicing the township's 100+ acres of gardens and landscaped green belts."
        }
      },
      {
        "@type": "Question",
        "name": "What electricity and power infrastructure is built inside Nanded City Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The township incorporates dedicated 22kV / 11kV MSEB electrical substations directly within its boundary. Power distribution is 100% underground, eliminating overhead electrical wires and storm outage hazards. Every apartment and villa plot is fitted with smart prepaid electricity meters, and diesel generator (DG) power backup ensures uninterrupted operation of elevators, water pumps, streetlights, and common area facilities."
        }
      },
      {
        "@type": "Question",
        "name": "What schools and education facilities are located inside Nanded City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nanded City hosts two premier educational institutions right within its gates: Vidya Pratishthan's Nanded City Public School (ICSE board) and Pawar Public School (ICSE/CBSE). Residents enjoy safe, walkable access without having their children cross hazardous arterial city highways or depend on lengthy school bus commutes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the road and pedestrian walking infrastructure like in Nanded City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The township features a master-planned road hierarchy of 15m, 18m, and 24m wide asphalt sector roads with planned roundabouts and traffic calming measures. Alongside the road network are continuous, tree-shaded pedestrian footpaths, dedicated rubberized jogging tracks, and segregated bicycle paths that make the entire 700-acre development an ultra-safe, walkable 15-minute city."
        }
      },
      {
        "@type": "Question",
        "name": "How does 24x7 security work across the 700 acres of Nanded City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nanded City employs a 3-tier centralized security model: Tier 1 comprises perimeter boundary walls with manned main security checkposts and automated RFID boom barriers; Tier 2 consists of gated security cabins at every individual residential cluster; Tier 3 features 300+ networked HD CCTV cameras monitored 24/7 from a centralized command and control room, complemented by motorized security patrols."
        }
      },
      {
        "@type": "Question",
        "name": "What commercial, retail, and shopping infrastructure is inside Nanded City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The township is anchored by Destination Center-I and Destination Center-II, encompassing over 200,000 sq.ft. of commercial, retail, and office space. It features national supermarket chains, daily vegetable and grocery marts, banks and ATMs, diagnostic laboratories, dental and medical clinics, restaurants, cafes, salons, and boutique retail outlets."
        }
      },
      {
        "@type": "Question",
        "name": "What sports and fitness facilities are available at Kridaangan and Club Harmony?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nanded City provides a world-class sports ecosystem including the Kridaangan Sports Complex and Club Harmony (a 32-acre clubhouse). Facilities include an Olympic-dimension swimming pool, floodlit tennis courts, synthetic indoor badminton courts, a professional roller-skating rink, full gymnasium, squash courts, cricket practice pitches, yoga pavilions, and an open-air amphitheater."
        }
      },
      {
        "@type": "Question",
        "name": "How does Nanded City infrastructure compare to Magarpatta, Amanora, and standalone projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compared to standalone residential buildings on Sinhagad Road that frequently suffer from municipal water tanker dependence, open garbage dumping, and power fluctuations, Nanded City provides independent captive infrastructure (WTP, STP, dedicated MSEB substation, in-house security, and on-campus schools). Compared to Magarpatta and Amanora in East Pune, Nanded City delivers matching integrated township standards on a 700-acre canvas at a 30% to 40% more attractive capital value per sq.ft., while offering superior green cover and proximity to the scenic Khadakwasla ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "How does Nanded City connect to Kothrud, Swargate, and Hinjewadi IT Park?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nanded City is positioned directly on Sinhagad Road near the Mumbai-Bangalore Western Bypass (NH-48). The operational Sinhagad Road Flyover enables a 15-minute drive to Swargate, 18-minute drive to Kothrud and Deccan Gymkhana, and easy access via the Mumbai-Pune bypass to Baner, Balewadi, and Hinjewadi Phase 1, 2 & 3 without city-center congestion. An internal PMPML bus terminal also offers direct public transit."
        }
      },
      {
        "@type": "Question",
        "name": "Does Nanded City support high-speed broadband for work-from-home IT professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nanded City has an underground optical fiber backbone that supports multiple high-speed broadband service providers including JioFiber, Airtel Xstream Fiber, and Tata Play Fiber with symmetrical gigabit speeds, dual redundant routing, and 5G cellular infrastructure."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_CONFIG.baseUrl}/infrastructure/#article`,
    "headline": "Nanded City Pune Infrastructure: Complete 700-Acre Master Township Engineering & Facilities Breakdown",
    "description": "Comprehensive authority guide detailing the civil, physical, digital, and social infrastructure of Nanded City Pune on Sinhagad Road.",
    "url": `${SITE_CONFIG.baseUrl}/infrastructure/`,
    "datePublished": "2026-01-15T00:00:00+05:30",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": SITE_CONFIG.brand.organizationName,
      "url": SITE_CONFIG.baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.brand.organizationName,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.baseUrl}${SITE_CONFIG.brand.logo}`
      }
    },
    "mainEntityOfPage": `${SITE_CONFIG.baseUrl}/infrastructure/`
  };

  const tocItems = [
    { title: 'Township Master Planning', id: 'master-plan' },
    { title: 'Internal Roads & Connectivity', id: 'roads' },
    { title: 'Pedestrian Walkways & Paths', id: 'footpaths' },
    { title: 'Smart LED Streetlighting', id: 'streetlights' },
    { title: 'Water Treatment Plant (WTP)', id: 'water' },
    { title: 'Sewage Treatment (STP)', id: 'sewage' },
    { title: 'Stormwater Drainage System', id: 'drainage' },
    { title: 'Sustainable Waste Disposal', id: 'waste' },
    { title: 'MSEB Power & Underground Grid', id: 'power' },
    { title: 'Broadband & Optical Fiber', id: 'broadband' },
    { title: '3-Tier Centralized Security', id: 'security' },
    { title: 'In-Campus ICSE/CBSE Schools', id: 'schools' },
    { title: 'Healthcare & Medical Network', id: 'healthcare' },
    { title: 'Destination Center & Retail', id: 'retail' },
    { title: 'Kridaangan Sports Complex', id: 'sports' },
    { title: 'Parks, Green Belts & Ecology', id: 'parks' },
    { title: 'Strategic City Transit', id: 'connectivity' },
    { title: 'Project Infrastructure Matrix', id: 'projects' },
    { title: 'Township Comparison Guide', id: 'comparison' },
    { title: 'Infrastructure FAQs', id: 'faqs' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema]) }}
      />

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '140px 0 90px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(197, 168, 114, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(30, 41, 59, 0.6) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1140px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197, 168, 114, 0.15)', border: '1px solid rgba(197, 168, 114, 0.3)', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Master Authority Document • 700-Acre Ecosystem
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: '800', lineHeight: '1.15', color: '#ffffff', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Nanded City Pune <span style={{ color: 'var(--accent-gold)' }}>Infrastructure</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'rgba(255, 255, 255, 0.78)', lineHeight: '1.7', maxWidth: '920px', marginBottom: '40px' }}>
            A comprehensive, data-driven audit of the physical, civic, digital, and social infrastructure powering Maharashtra&apos;s pioneering 700-acre self-reliant integrated township on Sinhagad Road, Pune.
          </p>

          {/* KEY METRICS BAR */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '24px',
            backdropFilter: 'blur(10px)'
          }}>
            {[
              { num: '700 Acres', label: 'Master Planned Canvas' },
              { num: '15,000+', label: 'Resident Families' },
              { num: 'Captive WTP', label: 'Purified Water Supply' },
              { num: '100% STP', label: 'Recycled Eco Irrigation' },
              { num: '2 Schools', label: 'ICSE & CBSE On-Campus' },
              { num: '3-Tier', label: 'Centralized Security' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '4px' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.55)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER WITH STICKY TOC */}
      <div className="container" style={{ maxWidth: '1200px', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
          
          {/* QUICK-JUMP NAVIGATION */}
          <nav aria-label="Table of Contents" style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.25rem' }}>📑</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                Table of Contents: Infrastructure Pillars
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {tocItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    fontSize: '0.86rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  className="toc-anchor"
                >
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.75rem' }}>
                    {(idx + 1).toString().padStart(2, '0')}.
                  </span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* EDITORIAL CONTENT */}
          <article style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#334155' }}>
            
            {/* PILLAR 1: MASTER PLANNING */}
            <section id="master-plan" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 01 • Civic Architecture
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                1. Nanded City Township Master Planning &amp; Civic Infrastructure
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Developed by Nanded City Development &amp; Construction Company Limited (NCDCCL) under the visionary leadership of <strong>Mr. Satish Magar</strong> following the worldwide acclaim of Magarpatta City, Nanded City represents a benchmark in <strong>integrated township infrastructure</strong> in India. Spanning over <strong>700 contiguous acres</strong> along the picturesque Mutha River basin on Sinhagad Road, Pune, the township was planned not merely as a collection of residential towers, but as a fully sovereign, self-sustaining city.
              </p>
              <p style={{ marginBottom: '16px' }}>
                The land-use master plan designates clear zoning separations: high-rise residential sectors, low-density branded NA bungalow plot clusters (such as Melody and Rhythm), dedicated institutional zones for primary and higher secondary schools, high-capacity commercial districts anchored by Destination Center I &amp; II, and extensive green buffers covering more than <strong>100 acres of preserved open spaces</strong>. This rigid master-planned zoning protects residents from unplanned urban sprawl, commercial encroachment, and traffic snarls that characterize standalone developments across Pune.
              </p>
              <div style={{ backgroundColor: '#f1f5f9', borderLeft: '4px solid var(--accent-gold)', padding: '20px', borderRadius: '0 12px 12px 0', margin: '24px 0' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                  The Self-Contained Township Philosophy
                </h3>
                <p style={{ fontSize: '0.95rem', margin: 0, color: '#475569' }}>
                  Nanded City is engineered around the <strong>&quot;15-Minute City&quot;</strong> urban design standard: every resident family can access educational institutions, daily grocery markets, emergency medical care, sporting facilities, and recreational gardens within a peaceful 5 to 10-minute walk from their cluster entrance.
                </p>
              </div>
            </section>

            {/* PILLAR 2: INTERNAL ROADS */}
            <section id="roads" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 02 • Mobility &amp; Circulation
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                2. Internal Road Network &amp; Arterial Connectivity
              </h2>
              <p style={{ marginBottom: '16px' }}>
                A cornerstone of Nanded City&apos;s physical infrastructure is its master-engineered <strong>internal road network</strong>. Unlike congested city streets, the township features an organized hierarchy of roadways:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>24-Meter Wide Spine Avenues:</strong> Dual-carriageway main arterial roads lined with landscaped medians, designed for seamless vehicular ingress and egress connecting the main Sinhagad Road gate to all major township sectors.</li>
                <li style={{ marginBottom: '8px' }}><strong>18-Meter Sector Connectors:</strong> Paved secondary routes circulating between residential neighborhoods, commercial centers, and educational zones.</li>
                <li style={{ marginBottom: '8px' }}><strong>15-Meter Internal Cluster Access Roads:</strong> Low-speed access streets featuring traffic-calming speed tables, designated drop-off bays, and zero roadside parking clutter.</li>
              </ul>
              <p style={{ marginBottom: '16px' }}>
                All internal roads are built with high-specification asphalt concrete surfacing, engineered cross-slopes for rapid rain runoff, cambered curbs, and high-visibility road markings. The planned road layout eliminates bottleneck choke-points, ensuring that emergency vehicles (ambulances and fire engines) can reach any residential tower within 3 minutes of dispatch.
              </p>
            </section>

            {/* PILLAR 3: FOOTPATHS & PEDESTRIAN */}
            <section id="footpaths" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 03 • Pedestrian Infrastructure
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                3. Footpath Infrastructure &amp; Safe Walkable Corridors
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Pedestrian safety in Nanded City is prioritized above all else. The entire road network is flanked by <strong>continuous, elevated paved footpaths</strong> constructed with anti-skid tactile paving for universal accessibility, accommodating senior citizens, strollers, and differently-abled individuals.
              </p>
              <p style={{ marginBottom: '16px' }}>
                These pedestrian paths are segregated from motorized lanes by green verge buffers planted with native shade trees, providing thermal comfort even during Pune summers. Children can safely walk from their apartments in clusters like <Link href="/cluster/pancham" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Pancham</Link> or <Link href="/cluster/bageshree" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Bageshree</Link> directly to Vidya Pratishthan&apos;s Nanded City Public School without having to step onto a vehicular roadway.
              </p>
            </section>

            {/* PILLAR 4: STREETLIGHTS */}
            <section id="streetlights" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 04 • Night Safety &amp; Illumination
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                4. Streetlights &amp; Automated Safety Illumination System
              </h2>
              <p style={{ marginBottom: '16px' }}>
                The township features a unified, comprehensive <strong>streetlighting system</strong> spanning tens of kilometers. Over 1,500 energy-efficient LED luminaires are mounted on galvanized steel poles at optimal photometric intervals to eliminate dark spots across roads, roundabouts, walkways, and cluster perimeters.
              </p>
              <p style={{ marginBottom: '16px' }}>
                The illumination infrastructure incorporates astronomical timer relays and dusk-to-dawn photocell automation that adjusts lighting levels dynamically based on natural ambient lux levels. Multi-directional high-mast lighting towers illuminate key junctions and public assembly zones, providing unmatched nighttime security for women, jogging enthusiasts, and evening strollers.
              </p>
            </section>

            {/* PILLAR 5: WATER SUPPLY & WTP */}
            <section id="water" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 05 • Water Security
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                5. Water Supply Infrastructure &amp; Captive Water Treatment Plant (WTP)
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Water scarcity is the single greatest challenge facing homebuyers in standalone buildings across Pune. Nanded City permanently eliminates this concern through its <strong>captive, state-of-the-art Water Treatment Plant (WTP)</strong>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                The township holds a direct, authorized raw water allocation drawn from the Khadakwasla irrigation reservoir system. Raw water is conveyed directly to the on-site treatment facility where it undergoes an intensive multi-stage purification protocol:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0' }}>
                {[
                  { step: '1. Coagulation & Flocculation', desc: 'Rapid mixing of approved coagulants to aggregate suspended microscopic sediments.' },
                  { step: '2. Multi-Media Filtration', desc: 'Pressurized dual-media sand and activated carbon beds removing turbidity and impurities.' },
                  { step: '3. Disinfection & Chlorination', desc: 'Controlled post-chlorination eliminating pathogens and maintaining residual safety.' },
                  { step: '4. Pressurized Distribution', desc: 'Pumping into elevated balancing reservoirs feeding gravity-fed dual distribution mains.' },
                ].map((s) => (
                  <div key={s.step} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>{s.step}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginBottom: '16px' }}>
                Daily laboratory testing guarantees compliance with IS 10500 drinking water standards. With multi-million liter subterranean storage tanks, Nanded City maintains a 3-day emergency buffer, shielding residents completely from municipal water tanker mafias and summer shortages.
              </p>
            </section>

            {/* PILLAR 6: SEWAGE TREATMENT & STP */}
            <section id="sewage" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 06 • Wastewater Engineering
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                6. Sewage Treatment Plants (STP) &amp; Zero-Liquid Discharge
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Nanded City was engineered with an eco-conscious ethos long before sustainable real estate became a marketing slogan. The township features multiple decentralized, captive <strong>Sewage Treatment Plants (STPs)</strong> operating on modern Moving Bed Biofilm Reactor (MBBR) and Sequential Batch Reactor (SBR) biological processing technologies.
              </p>
              <p style={{ marginBottom: '16px' }}>
                100% of the domestic blackwater and greywater generated across homes flows through a closed underground gravity sewage network to the STPs. Following tertiary filtration and UV sterilization:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Dual-Plumbing Recirculation:</strong> Purified greywater is piped back into residential buildings through a dedicated flushing pipe network, reducing freshwater consumption by over 40%.</li>
                <li style={{ marginBottom: '8px' }}><strong>Green Belt Irrigation:</strong> Treated effluent nourishes more than 100 acres of landscaped lawns, forest corridors, road medians, and golf-style gardens via an automated drip and sprinkler network.</li>
                <li style={{ marginBottom: '8px' }}><strong>Zero-Liquid Discharge (ZLD):</strong> Zero untreated sewage is released into the neighboring Mutha River or municipal storm drains, ensuring an environmentally pristine habitat.</li>
              </ul>
            </section>

            {/* PILLAR 7: STORMWATER DRAINAGE */}
            <section id="drainage" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 07 • Monsoon Resilience
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                7. Stormwater Drainage &amp; Rainwater Harvesting Network
              </h2>
              <p style={{ marginBottom: '16px' }}>
                While severe waterlogging paralyses large parts of central Pune during heavy monsoon cloudbursts, Nanded City remains completely free from flooding. This resilience is the result of an engineered <strong>subsurface stormwater drainage network</strong>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Pre-cast reinforced concrete box culverts running beneath internal road verges are precision-graded to natural topographical contours. Surface runoff is collected via drop-inlet catch basins equipped with silt traps. Integrated into this system are over 100 groundwater recharge pits and rainwater harvesting retention swales that replenish deep subsurface aquifers, sustaining the regional water table year-round.
              </p>
            </section>

            {/* PILLAR 8: SOLID WASTE MANAGEMENT */}
            <section id="waste" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 08 • Green Ecology
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                8. Sustainable Solid Waste Management &amp; Vermicomposting
              </h2>
              <p style={{ marginBottom: '16px' }}>
                The township implements an eco-friendly, closed-loop <strong>solid waste disposal and recycling system</strong> that is held up as a case study in municipal solid waste governance:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Source Segregation:</strong> Every household practices mandatory two-bin segregation into wet organic kitchen waste and dry recyclable waste.</li>
                <li style={{ marginBottom: '8px' }}><strong>Daily Doorstep Collection:</strong> Dedicated township sanitation vehicles collect waste daily at predetermined hours, eliminating open curbside garbage heaps.</li>
                <li style={{ marginBottom: '8px' }}><strong>On-Site Vermicomposting &amp; Bio-Processing:</strong> Organic wet waste is converted into nutrient-dense organic compost in captive vermicomposting pits. This organic manure is used across township gardens, replacing chemical fertilizers entirely.</li>
                <li style={{ marginBottom: '8px' }}><strong>Dry Waste Channelization:</strong> Paper, plastics, metals, and e-waste are sorted at a central recovery facility and dispatched to authorized green recycling partners.</li>
              </ul>
            </section>

            {/* PILLAR 9: ELECTRICITY INFRASTRUCTURE */}
            <section id="power" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 09 • Energy &amp; Power Security
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                9. Dedicated MSEB Substations, Underground Power &amp; Smart Meters
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Electrical reliability in Nanded City is maintained at an institutional grade. The development features <strong>dedicated 22kV and 11kV MSEB (MSEDCL) electrical substations</strong> erected exclusively within township premises.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Key electrical infrastructure advantages include:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>100% Underground HT/LT Cabling:</strong> No dangling wires, pole-mounted transformers, or cyclone hazards. Power cables run through dedicated subterranean utility trenches with sectional isolation switches.</li>
                <li style={{ marginBottom: '8px' }}><strong>Smart Prepaid Electricity Meters:</strong> Homes are fitted with digital prepaid metering systems allowing real-time power consumption tracking, automatic billing, and total transparency without estimated billing disputes.</li>
                <li style={{ marginBottom: '8px' }}><strong>Automatic DG Power Backup:</strong> Heavy-duty diesel generator sets provide instantaneous auto-mains failure (AMF) backup to critical infrastructure including elevator banks, fire pumps, water supply pumps, and common corridor illumination.</li>
              </ul>
            </section>

            {/* PILLAR 10: BROADBAND & DIGITAL */}
            <section id="broadband" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 10 • Digital Infrastructure
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                10. High-Speed Optical Fiber &amp; Open-Access Multi-ISP Telecom
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Nanded City is home to thousands of software architects, IT professionals, financial analysts, and entrepreneurs who demand flawless digital connectivity. The township was planned as a <strong>broadband-enabled digital fortress</strong> with a built-in optical fiber cable (OFC) ducting backbone reaching every tower and residential villa plot.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Instead of a single-vendor monopoly, Nanded City operates an open-access telecom policy. Residents can subscribe to leading national internet service providers including <strong>JioFiber, Airtel Xstream Fiber, and Tata Play Fiber</strong>, with bandwidth capabilities up to 1 Gbps. Dedicated 5G cellular telecom towers distributed strategically throughout the township ensure complete mobile coverage with zero indoor dead zones.
              </p>
            </section>

            {/* PILLAR 11: SECURITY INFRASTRUCTURE */}
            <section id="security" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 11 • Safety &amp; Surveillance
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                11. 3-Tier Centralized Security, RFID Access &amp; 300+ CCTV Network
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Peace of mind for families, working parents, children, and senior citizens is anchored by Nanded City&apos;s <strong>3-tier centralized security infrastructure</strong>:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '24px 0' }}>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tier 1: Perimeter Defense</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '8px 0 12px', color: '#0f172a' }}>Township Entry Checkpoints</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                    Heavy-duty automated boom barriers fitted with <strong>RFID windshield scanners</strong> provide instant entry for registered resident vehicles while visitor vehicles undergo mandatory security clearance and digital logging.
                  </p>
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tier 2: Cluster Gated Access</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '8px 0 12px', color: '#0f172a' }}>Individual Sector Guard Posts</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                    Each residential cluster (e.g. Saajgiri, Harmony, Asawari, Sargam) maintains its own dedicated security booth, visitor intercom verification, and entrance control, preventing unauthorized cross-cluster access.
                  </p>
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tier 3: 24x7 Digital Oversight</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '8px 0 12px', color: '#0f172a' }}>Command &amp; Control Surveillance</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                    Over 300 high-definition PTZ and night-vision CCTV cameras stream live feeds into the township&apos;s centralized command center. Round-the-clock motorized patrol units respond rapidly to any anomaly.
                  </p>
                </div>
              </div>
            </section>

            {/* PILLAR 12: EDUCATION INFRASTRUCTURE */}
            <section id="schools" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 12 • Social &amp; Education Infrastructure
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                12. In-Campus Educational Infrastructure &amp; Top Schools
              </h2>
              <p style={{ marginBottom: '16px' }}>
                The presence of town-level schooling is one of the most compelling reasons families choose Nanded City. Located inside the secure township gates are two of Pune&apos;s most reputed educational institutions:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Vidya Pratishthan&apos;s Nanded City Public School (ICSE):</strong> A flagship educational campus established by the prestigious Vidya Pratishthan Trust. Offering modern science and robotics laboratories, comprehensive sports fields, an extensive library, and an ICSE curriculum from pre-primary through Grade 12.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Pawar Public School, Nanded City:</strong> Renowned for scholastic excellence, holistic co-curricular development, and value-based education with expansive infrastructure including smart classrooms, performing arts centers, and athletic tracks.
                </li>
              </ul>
              <p style={{ marginBottom: '16px' }}>
                Because schools are located inside the township gates, children avoid travelling on hazardous highways, eliminate 2 to 3 hours of exhausting bus commutes daily, and can walk or cycle safely to class.
              </p>
            </section>

            {/* PILLAR 13: HEALTHCARE INFRASTRUCTURE */}
            <section id="healthcare" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 13 • Healthcare &amp; Medical Facilities
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                13. Healthcare Infrastructure &amp; Emergency Medical Ecosystem
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Town-level healthcare is a foundational pillar of Nanded City&apos;s master design. The township provides instant access to routine, diagnostic, and acute medical facilities:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>In-Township Clinics &amp; Pharmacies:</strong> General physician practices, pediatric clinics, dental clinics, and 24-hour retail pharmacies situated conveniently within Destination Center and neighborhood clusters.</li>
                <li style={{ marginBottom: '8px' }}><strong>Nanded Hospital &amp; Medical Center:</strong> Dedicated healthcare center within immediate proximity catering to primary treatments, day-care procedures, and diagnostic screenings.</li>
                <li style={{ marginBottom: '8px' }}><strong>Super-Speciality Hospital Proximity:</strong> Located just 5 to 15 minutes away are Sinhagad Speciality Hospital, Sahyadri Hospital (Bibwewadi/Deccan), Pulse Hospital, and Navale Medical College &amp; Hospital, guaranteeing immediate tertiary-care access for cardiology, trauma, and surgical emergencies.</li>
                <li style={{ marginBottom: '8px' }}><strong>24x7 Ambulance Dispatch:</strong> Dedicated emergency vehicle response stationed directly at the township gate for rapid transit.</li>
              </ul>
            </section>

            {/* PILLAR 14: RETAIL & DESTINATION CENTER */}
            <section id="retail" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 14 • Commercial &amp; Retail Hub
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                14. Destination Center I &amp; II: Commercial &amp; Retail Epicenter
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Nanded City eliminates the chore of driving into congested Pune markets for daily necessities. The township is anchored by <strong>Destination Center-I and Destination Center-II</strong>, modern multi-level retail and commercial shopping complexes offering over 200,000 sq.ft. of consumer amenities:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '24px 0' }}>
                {[
                  { title: 'Supermarkets & Daily Groceries', desc: 'Large format grocery marts, Reliance Smart Point, organic vegetable mandis, dairy stores, and daily essentials.' },
                  { title: 'Banking & Financial Hub', desc: 'Branches and 24x7 automated teller machines (ATMs) of State Bank of India, HDFC Bank, ICICI Bank, and Bank of Maharashtra.' },
                  { title: 'Dining, Cafes & Bakeries', desc: 'Multi-cuisine family restaurants, quick-service eateries, artisanal coffee shops, sweet marts, and bakeries.' },
                  { title: 'Diagnostics & Wellness', desc: 'Pathology collection centers (Thyrocare, Metropolis), opticians, unisex hair salons, and physical therapy centers.' },
                ].map((b) => (
                  <div key={b.title} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>{b.title}</h3>
                    <p style={{ fontSize: '0.86rem', color: '#64748b', margin: 0, lineHeight: '1.5' }}>{b.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginBottom: '16px' }}>
                Additionally, Symphony IT Park provides corporate office suites within walking distance of home, allowing residents to embrace a genuine &quot;Walk to Work&quot; lifestyle.
              </p>
            </section>

            {/* PILLAR 15: SPORTS & KRIDAANGAN */}
            <section id="sports" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 15 • Sports &amp; Athletic Infrastructure
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                15. Kridaangan Sports Complex, Club Harmony &amp; Fitness Corridors
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Sports and physical wellness are core to Nanded City&apos;s lifestyle design. The township houses the renowned <strong>Kridaangan Sports Complex</strong> alongside <Link href="/cluster/harmony" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Club Harmony</Link> (spanning a 32-acre club precinct), comprising:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Olympic-Dimension Swimming Pool:</strong> Regulation swimming pool with dedicated toddler splash pools and certified aquatic coaches.</li>
                <li style={{ marginBottom: '8px' }}><strong>Floodlit Tennis Courts:</strong> High-grade synthetic hard courts accommodating day and evening competitive play.</li>
                <li style={{ marginBottom: '8px' }}><strong>Indoor Badminton Arena:</strong> Wooden and synthetic courts with tournament-grade overhead lighting.</li>
                <li style={{ marginBottom: '8px' }}><strong>Professional Roller-Skating Rink:</strong> Dedicated banked rink hosting children&apos;s speed and artistic skating training.</li>
                <li style={{ marginBottom: '8px' }}><strong>Gymnasium &amp; Health Club:</strong> State-of-the-art cardiovascular and strength equipment with certified trainers, steam, and sauna.</li>
                <li style={{ marginBottom: '8px' }}><strong>Cricket Nets &amp; Football Turf:</strong> Enclosed turf facilities for weekend leagues and youth academies.</li>
                <li style={{ marginBottom: '8px' }}><strong>Open-Air Amphitheatre:</strong> Cultural stage for community celebrations, concerts, and theatrical productions.</li>
              </ul>
            </section>

            {/* PILLAR 16: PARKS & GREEN BELTS */}
            <section id="parks" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 16 • Parks &amp; Environmental Greenery
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                16. Parks, Landscaped Gardens &amp; Riverfront Ecology
              </h2>
              <p style={{ marginBottom: '16px' }}>
                With more than <strong>100 acres dedicated exclusively to open green spaces</strong>, Nanded City delivers an air quality index (AQI) significantly superior to urban central Pune. The landscape architecture includes:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Continuous Jogging &amp; Cycling Corridors:</strong> Over 7 kilometers of traffic-free running tracks snaking through green meadows, equipped with outdoor calisthenics stations.</li>
                <li style={{ marginBottom: '8px' }}><strong>Thematic Botanical Gardens:</strong> Fragrant flower gardens, reflexology stone walking pathways, and meditative gazebos for senior citizens.</li>
                <li style={{ marginBottom: '8px' }}><strong>River Promenade:</strong> A scenic green belt along the riverbank fostering native bird species, flowering trees, and natural micro-climate cooling.</li>
              </ul>
            </section>

            {/* PILLAR 17: CONNECTIVITY */}
            <section id="connectivity" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 17 • Strategic Transit &amp; Commute
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                17. External Connectivity, Flyovers &amp; Pune City Transit
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Positioned directly on Sinhagad Road with direct access to the Mumbai-Bangalore Western Bypass (NH-48), Nanded City offers optimal travel times to major commercial and transit hubs:
              </p>
              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', fontSize: '0.92rem' }}>
                  <thead style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Destination / Hub</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Distance</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Travel Time (Flyover Active)</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Key Connectivity Route</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dest: 'Sinhagad Road Flyover', dist: '1.5 km', time: '3 Mins', route: 'Direct Sinhagad Road Gateway' },
                      { dest: 'Swargate Multimodal Hub', dist: '8.5 km', time: '15 Mins', route: 'Sinhagad Road Expressway' },
                      { dest: 'Kothrud / Karve Nagar', dist: '7.5 km', time: '18 Mins', route: 'Via Warje Bypass & Karve Road' },
                      { dest: 'Deccan Gymkhana', dist: '10.5 km', time: '20 Mins', route: 'Sinhagad Road - Sarasbaug' },
                      { dest: 'Pune Railway Station', dist: '12.5 km', time: '25 Mins', route: 'Swargate - Station Corridor' },
                      { dest: 'Hinjewadi IT Park Phase 1', dist: '19.5 km', time: '28 Mins', route: 'NH-48 Western Bypass Direct' },
                      { dest: 'Baner / Balewadi High Street', dist: '16.0 km', time: '22 Mins', route: 'Mumbai-Bangalore Highway' },
                      { dest: 'Pune International Airport (PNQ)', dist: '22.0 km', time: '40 Mins', route: 'Airport Road / Nagar Road' }
                    ].map((row, i) => (
                      <tr key={row.dest} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: i % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                        <td style={{ padding: '12px 16px', fontWeight: '600', color: '#0f172a' }}>{row.dest}</td>
                        <td style={{ padding: '12px 16px' }}>{row.dist}</td>
                        <td style={{ padding: '12px 16px', color: 'var(--accent-gold)', fontWeight: '700' }}>{row.time}</td>
                        <td style={{ padding: '12px 16px', color: '#64748b' }}>{row.route}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginBottom: '16px' }}>
                An internal <strong>PMPML City Bus Terminal</strong> operating inside Nanded City provides direct public transit connections across Pune without residents having to step onto Sinhagad Road.
              </p>
            </section>

            {/* PILLAR 18: CLUSTER BY CLUSTER INFRASTRUCTURE MATRIX */}
            <section id="projects" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 18 • Residential Portfolio Synergy
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                18. Cluster-by-Cluster Infrastructure Synergy
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Every residential cluster inside Nanded City connects natively to the central infrastructure grid while offering customized internal amenities:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {[
                  {
                    name: 'Saajgiri',
                    type: 'New Launch • 3 BHK High-Rise',
                    features: 'Overlooking Central Park, high-speed automated elevators, advanced clubhouse, 100% DG backup, dedicated EV charging stations.',
                    link: '/cluster/saajgiri'
                  },
                  {
                    name: 'Harmony',
                    type: 'Ultra-Luxury • 3.5 & 4.5 BHK',
                    features: 'Adjacent to 32-acre Club Harmony, low-density luxury towers, private multi-tier security, smart video door access.',
                    link: '/cluster/harmony'
                  },
                  {
                    name: 'Melody & Rhythm',
                    type: 'Collector Sanctioned NA Bungalow Plots',
                    features: 'Gated villa plot enclaves with underground electrical, water, and sewage connections delivered to each plot demarcation.',
                    link: '/cluster/melody-1'
                  },
                  {
                    name: 'Aalaap-I',
                    type: 'Premium • 2 & 3 BHK',
                    features: 'Direct connectivity to Destination Center, landscaped podium garden, integrated children play area.',
                    link: '/cluster/aalaap-1'
                  },
                  {
                    name: 'Pancham Phase 1 & 2',
                    type: 'Family Homes • 2 BHK',
                    features: 'Proximity to Nanded City Public School, paved peripheral roads, streetlights, open play courts.',
                    link: '/cluster/pancham'
                  },
                  {
                    name: 'Bageshree & Kalashree',
                    type: 'Modern Residential Towers',
                    features: 'Zero water shortage guarantee, dual-flushing STP connectivity, scenic riverfront orientation.',
                    link: '/cluster/bageshree'
                  }
                ].map((c) => (
                  <div key={c.name} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{c.type}</span>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', margin: '8px 0 10px', color: '#0f172a' }}>{c.name}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6', marginBottom: '16px' }}>{c.features}</p>
                    <Link href={c.link} style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Explore Cluster Specifications →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* PILLAR 19: COMPARISON MATRIX */}
            <section id="comparison" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 19 • Competitive Township Benchmarking
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                19. Pune Township Infrastructure Comparison: Nanded City vs. Others
              </h2>
              <p style={{ marginBottom: '20px' }}>
                How does Nanded City&apos;s infrastructure compare against other integrated townships and standalone developments across Pune?
              </p>
              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}>
                  <thead style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Infrastructure Dimension</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Nanded City (Sinhagad Rd)</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Magarpatta / Amanora (East)</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left' }}>Standalone Sinhagad Rd Project</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dim: 'Total Land Parcel', nc: '700 Contiguous Acres', oth: '400 - 450 Acres', sa: '1 - 5 Standalone Acres' },
                      { dim: 'Water Infrastructure', nc: 'Captive WTP (Khadakwasla)', oth: 'Captive WTP (Canal/PMC)', sa: 'High Tanker Dependence' },
                      { dim: 'Sewage Processing', nc: '100% ZLD On-Site STP', oth: '100% On-Site STP', sa: 'Basic PMC Sewer Connection' },
                      { dim: 'Power Grid', nc: 'Dedicated MSEB Substations', oth: 'Dedicated Substations', sa: 'Standard Public Grid' },
                      { dim: 'In-Township Schools', nc: '2 ICSE/CBSE Campuses', oth: '2 Campuses', sa: 'None (Bus Commute Req)' },
                      { dim: 'Sports Facilities', nc: 'Kridaangan + 32-Acre Club', oth: 'Private Clubhouses', sa: 'Small Gymnasium Only' },
                      { dim: 'Green Open Space', nc: '100+ Acres Landscaped', oth: '80-100 Acres', sa: 'Under 15% Marginal Setbacks' },
                      { dim: 'Security Setup', nc: '3-Tier + 300 CCTV + RFID', oth: '3-Tier Centralized', sa: 'Single Entry Gate Guard' },
                      { dim: 'Capital Entry PSF', nc: '₹6,500 – ₹8,500 / sq.ft.', oth: '₹10,500 – ₹13,500 / sq.ft.', sa: '₹6,000 – ₹7,500 / sq.ft.' }
                    ].map((row, i) => (
                      <tr key={row.dim} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: i % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                        <td style={{ padding: '12px 16px', fontWeight: '700', color: '#0f172a' }}>{row.dim}</td>
                        <td style={{ padding: '12px 16px', color: '#166534', fontWeight: '600' }}>✓ {row.nc}</td>
                        <td style={{ padding: '12px 16px', color: '#475569' }}>{row.oth}</td>
                        <td style={{ padding: '12px 16px', color: '#991b1b' }}>✗ {row.sa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* PILLAR 20: FAQS SECTION (GEO / AI OVERVIEWS OPTIMIZED) */}
            <section id="faqs" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
              <div style={{ display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Pillar 20 • Frequently Asked Questions
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.25' }}>
                20. Comprehensive Nanded City Infrastructure FAQ
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Authoritative answers to the most common queries regarding facilities, engineering systems, and lifestyle governance in Nanded City Pune.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqSchema.mainEntity.map((faq, idx) => (
                  <div
                    key={faq.name}
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '24px',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    <h3 style={{ fontSize: '1.12rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: '800' }}>Q{idx + 1}.</span>
                      <span>{faq.name}</span>
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7', margin: 0, paddingLeft: '32px' }}>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>
        </div>

        {/* CALL TO ACTION & CONSULTATION */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '24px',
          padding: '48px 36px',
          marginTop: '60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <span style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', display: 'inline-block' }}>
            Authorized Advisory • PropSmart Realty
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
            Experience Nanded City&apos;s Infrastructure in Person
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto 32px', color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Schedule a guided township infrastructure tour including the Kridaangan sports facilities, Destination Center, captive WTP, and ready model flats across Saajgiri, Harmony, and Melody NA plots.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                backgroundColor: 'var(--accent-gold)',
                color: '#000000',
                padding: '14px 32px',
                borderRadius: '100px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(197, 168, 114, 0.4)'
              }}
            >
              Book Guided Infrastructure Tour
            </Link>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneNumeric}`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '14px 28px',
                borderRadius: '100px',
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none'
              }}
            >
              Call Specialist: {SITE_CONFIG.contact.phone}
            </a>
          </div>
          <div style={{ marginTop: '24px', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)' }}>
            MahaRERA Registration No. {SITE_CONFIG.brand.rera} • Authorized Channel Partner for Nanded City Developers
          </div>
        </div>

      </div>
    </div>
  );
}
