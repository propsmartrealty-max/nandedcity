export interface KeywordEntity {
  label: string;
  href: string;
  category: string;
  searchIntent?: 'navigational' | 'informational' | 'commercial' | 'transactional';
}

export interface KeywordCategoryGroup {
  id: string;
  name: string;
  description: string;
  keywords: KeywordEntity[];
}

export const ECOSYSTEM_KEYWORD_TAXONOMY: KeywordCategoryGroup[] = [
  {
    id: "township-overview",
    name: "Township Overview & Architecture",
    description: "Master plan, zoning, 700-acre land parcel, resident directory, and governance",
    keywords: [
      { label: "700-Acre Master Township Overview", href: "/", category: "township-overview", searchIntent: "navigational" },
      { label: "Official Master Plan & Sector Map", href: "/master-plan/", category: "township-overview", searchIntent: "informational" },
      { label: "Township Resident & Commercial Directory", href: "/township-directory/", category: "township-overview", searchIntent: "informational" },
      { label: "Developer Legacy & Sustainable Vision", href: "/about-us/", category: "township-overview", searchIntent: "informational" },
      { label: "MahaRERA Legal Verification & Approvals", href: "/legal-compliance/", category: "township-overview", searchIntent: "informational" },
      { label: "Resident & Homebuyer FAQs 2026", href: "/faq/", category: "township-overview", searchIntent: "informational" },
      { label: "Township Brochures & Project Docs", href: "/brochures/", category: "township-overview", searchIntent: "transactional" }
    ]
  },
  {
    id: "configurations",
    name: "Configurations & Typologies",
    description: "Verified 1, 2, 2.5, 3, 3.5, 4.5 BHK residences, layouts, ready possession and plots",
    keywords: [
      { label: "2 BHK Modern Flats Portfolio", href: "/lp/2-bhk-flats/", category: "configurations", searchIntent: "commercial" },
      { label: "3 BHK Luxury High-Rise Residences", href: "/lp/3-bhk-luxury/", category: "configurations", searchIntent: "commercial" },
      { label: "3.5 & 4.5 BHK Palatial Skyline Homes", href: "/lp/luxury-apartments/", category: "configurations", searchIntent: "commercial" },
      { label: "Compact & Budget 1 & 2 BHK Flats", href: "/lp/budget-flats/", category: "configurations", searchIntent: "commercial" },
      { label: "Ready Possession Flats Directory", href: "/lp/ready-to-move/", category: "configurations", searchIntent: "transactional" },
      { label: "Verified Resale Flats in Nanded City", href: "/lp/resale-flats/", category: "configurations", searchIntent: "transactional" },
      { label: "Branded NA Bungalow & Villa Plots", href: "/lp/na-bungalow-plots/", category: "configurations", searchIntent: "commercial" },
      { label: "Floor Plans 2, 3 & 4.5 BHK PDF", href: "/floor-plans/", category: "configurations", searchIntent: "informational" }
    ]
  },
  {
    id: "residential-clusters",
    name: "All 20 Residential Clusters",
    description: "Every residential project, under-construction tower, and completed community",
    keywords: [
      { label: "Saajgiri 3 BHK High-Rise (PR1260002501621)", href: "/cluster/saajgiri/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Harmony 3.5 & 4.5 BHK Palace Launch", href: "/cluster/harmony/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Aalaap-I Modern 2 & 2.5 BHK Homes", href: "/cluster/aalaap-1/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Pancham Phase 1 & 2 Family Homes", href: "/cluster/pancham/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Asawari 2 & 3 BHK Inhabited Cluster", href: "/cluster/asawari/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Sargam Skyline 2 & 3 BHK Towers", href: "/cluster/sargam/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Bageshree Modern 2 BHK Residences", href: "/cluster/bageshree/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Kalashree Large Carpet 3 BHK", href: "/cluster/kalashree/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Sarang Scenic Hill-View 2 BHK", href: "/cluster/sarang/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Lalit Compact Smart 2 BHK", href: "/cluster/lalit/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Madhuvanti Gated 2 BHK Community", href: "/cluster/madhuvanti/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Shubh Kalyan Luxury 3 BHK", href: "/cluster/shubh-kalyan/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Sur Peaceful 2 BHK Apartments", href: "/cluster/sur/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Mangal Bhairav 1 & 2 BHK Residences", href: "/cluster/mangal-bhairav/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Janaranjani 1 & 2 BHK Smart Homes", href: "/cluster/janaranjani/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Melody Phase I Luxury Villa Plots", href: "/cluster/melody-1/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Melody Phase II NA Plots", href: "/cluster/melody-2/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Melody Phase III Villa Plots", href: "/cluster/melody-3/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Rhythm Signature Bungalow Plots", href: "/cluster/rhythm-1/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Dhanashree Gated Residential Plots", href: "/cluster/dhanashree/", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Complete 20 Clusters Directory", href: "/projects/", category: "residential-clusters", searchIntent: "informational" }
    ]
  },
  {
    id: "township-infrastructure",
    name: "700-Acre Infrastructure Silos",
    description: "Self-sustaining civic engineering, water treatment, power, security, education and sports",
    keywords: [
      { label: "700-Acre Master Infrastructure Guide", href: "/infrastructure/", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Captive Water Treatment Plant (WTP)", href: "/infrastructure/#water", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Zero-Discharge Sewage Treatment Plant (STP)", href: "/infrastructure/#sewage", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Dedicated 22 kV MSEB Substation", href: "/infrastructure/#power", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Underground Optical Fiber & Utilities", href: "/infrastructure/#broadband", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Central Command & 24/7 CCTV Security", href: "/infrastructure/#security", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Internal Concrete Spine Road Network", href: "/infrastructure/#roads", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Automated Stormwater Drainage System", href: "/infrastructure/#drainage", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Eco Organic Waste Management", href: "/infrastructure/#waste", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Nanded City Public School (ICSE)", href: "/infrastructure/#schools", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Sahyadri Multispeciality Hospital", href: "/infrastructure/#healthcare", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Destination Center I & II Retail Malls", href: "/infrastructure/#retail", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Kridaangan Olympic Sports Complex", href: "/infrastructure/#sports", category: "township-infrastructure", searchIntent: "informational" }
    ]
  },
  {
    id: "connectivity",
    name: "Connectivity & Localities",
    description: "Flyover corridors, arterial commute times, and neighboring Pune localities",
    keywords: [
      { label: "Sinhagad Road Arterial Corridor", href: "/near/sinhagad-road/", category: "connectivity", searchIntent: "commercial" },
      { label: "Sinhagad Road Flyover Impact 2026", href: "/blog/sinhgad-road-flyover-impact-2026/", category: "connectivity", searchIntent: "informational" },
      { label: "Transit Network & Commute Timelines", href: "/connectivity/", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Kothrud (15 Mins Direct)", href: "/near/kothrud/", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Warje Flyover (10 Mins)", href: "/near/warje/", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Bavdhan & Mumbai Bypass", href: "/near/bavdhan/", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Swargate Junction", href: "/near/swargate/", category: "connectivity", searchIntent: "informational" },
      { label: "Dhayari & Anand Nagar Properties", href: "/near/dhayari/", category: "connectivity", searchIntent: "commercial" },
      { label: "Vadgaon Budruk Connectivity", href: "/near/vadgaon-budruk/", category: "connectivity", searchIntent: "commercial" },
      { label: "Khadakwasla Dam Scenic Green Belt", href: "/near/khadakwasla/", category: "connectivity", searchIntent: "informational" }
    ]
  },
  {
    id: "buyer-intelligence",
    name: "Buyer Intelligence & Advisory",
    description: "Cost sheets, resale guidance, comparison calculators, and authorized advisory",
    keywords: [
      { label: "2026 Master Price List & Cost Sheets", href: "/blog/nanded-city-pune-price-list-2026-carpet-area-cost-sheet/", category: "buyer-intelligence", searchIntent: "commercial" },
      { label: "Resale Flats Buying & NOC Guide 2026", href: "/resale-rental-guide/", category: "buyer-intelligence", searchIntent: "transactional" },
      { label: "Nanded City vs Magarpatta Analysis", href: "/blog/nanded-city-vs-magarpatta-city-comparison-analysis/", category: "buyer-intelligence", searchIntent: "informational" },
      { label: "Standalone Buildings vs Nanded City ROI", href: "/blog/nanded-city-vs-standalone-projects-roi/", category: "buyer-intelligence", searchIntent: "informational" },
      { label: "Home Loan EMI & Stamp Duty Calculator", href: "/emi-calculator/", category: "buyer-intelligence", searchIntent: "informational" },
      { label: "Multi-Cluster Comparison Tool", href: "/compare/", category: "buyer-intelligence", searchIntent: "informational" },
      { label: "Complete FAQ Handbook 2026", href: "/blog/nanded-city-pune-complete-faq-handbook-2026/", category: "buyer-intelligence", searchIntent: "informational" },
      { label: "Schedule Priority Site Visit (PropSmart)", href: "/contact/", category: "buyer-intelligence", searchIntent: "transactional" }
    ]
  },
  {
    id: "marathi-hub",
    name: "नांदेड सिटी मराठी दालन (Marathi Hub)",
    description: "मराठी भाषेत नांदेड सिटी टाऊनशिप प्रकल्प, किंमती, रीसेल आणि माहिती",
    keywords: [
      { label: "नांदेड सिटी पुणे मराठी मुख्य दालन", href: "/mr/", category: "marathi-hub", searchIntent: "navigational" },
      { label: "नांदेड सिटी २ बीएचके फ्लॅट्स", href: "/mr/2-bhk-flats/", category: "marathi-hub", searchIntent: "commercial" },
      { label: "नांदेड सिटी ३ बीएचके लक्झरी फ्लॅट्स", href: "/mr/3-bhk-flats/", category: "marathi-hub", searchIntent: "commercial" },
      { label: "नांदेड सिटी एनए बंगलो प्लॉट्स", href: "/mr/bungalow-plots/", category: "marathi-hub", searchIntent: "commercial" },
      { label: "नांदेड सिटी रीसेल फ्लॅट्स मार्गदर्शक", href: "/mr/resale-flats/", category: "marathi-hub", searchIntent: "transactional" },
      { label: "साजगिरी ३ बीएचके हाय-राईज टॉवर्स", href: "/mr/saajgiri/", category: "marathi-hub", searchIntent: "commercial" },
      { label: "हार्मोनी लक्झरी ३.५ आणि ४.५ बीएचके", href: "/mr/harmony/", category: "marathi-hub", searchIntent: "commercial" },
      { label: "मेलोडी व्हिला प्लॉट्स सिंहगड रोड", href: "/mr/melody-plots/", category: "marathi-hub", searchIntent: "commercial" },
      { label: "सिंहगड रोड उड्डाणपूल आणि कनेक्टिव्हिटी", href: "/mr/sinhgad-road/", category: "marathi-hub", searchIntent: "informational" }
    ]
  }
];

export const ALL_ECOSYSTEM_KEYWORDS = ECOSYSTEM_KEYWORD_TAXONOMY.flatMap(group => group.keywords);
