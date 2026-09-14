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
    id: "brand-identity",
    name: "Brand & Township Permutations",
    description: "Core brand names, township variants, geographic qualifiers, and phonetic iterations",
    keywords: [
      { label: "Nanded City Township Pune", href: "/", category: "brand-identity", searchIntent: "navigational" },
      { label: "Nanded City Pune", href: "/", category: "brand-identity", searchIntent: "navigational" },
      { label: "Nanded City Sinhagad Road", href: "/near/sinhagad-road", category: "brand-identity", searchIntent: "navigational" },
      { label: "Nanded City Sinhgad Road Pune", href: "/near/sinhagad-road", category: "brand-identity", searchIntent: "navigational" },
      { label: "Nanded City Township", href: "/", category: "brand-identity", searchIntent: "navigational" },
      { label: "Nanded City Integrated Township", href: "/about-us", category: "brand-identity", searchIntent: "informational" },
      { label: "Nanded City Pune Pin Code 411041", href: "/contact", category: "brand-identity", searchIntent: "informational" },
      { label: "Nanded City Development Company", href: "/about-us", category: "brand-identity", searchIntent: "informational" },
      { label: "नांदेड सिटी पुणे", href: "/mr", category: "brand-identity", searchIntent: "navigational" },
      { label: "नांदेड सिटी टाऊनशिप पुणे", href: "/mr", category: "brand-identity", searchIntent: "navigational" },
      { label: "नांदेड सिटी सिंहगड रोड", href: "/mr", category: "brand-identity", searchIntent: "navigational" }
    ]
  },
  {
    id: "configurations",
    name: "Configurations & Typology",
    description: "All BHK configurations, flat sizes, luxury residences, ready possession and resale queries",
    keywords: [
      { label: "2 BHK Flats in Nanded City", href: "/lp/2-bhk-flats", category: "configurations", searchIntent: "commercial" },
      { label: "2 BHK Ready Possession Nanded City", href: "/lp/2-bhk-flats", category: "configurations", searchIntent: "transactional" },
      { label: "2 BHK Price in Nanded City Pune", href: "/lp/2-bhk-flats", category: "configurations", searchIntent: "commercial" },
      { label: "Resale 2 BHK Flats Nanded City", href: "/contact", category: "configurations", searchIntent: "transactional" },
      { label: "2.5 BHK Flats Nanded City", href: "/cluster/aalaap-1", category: "configurations", searchIntent: "commercial" },
      { label: "3 BHK Luxury Flats Nanded City", href: "/lp/3-bhk-luxury", category: "configurations", searchIntent: "commercial" },
      { label: "3 BHK Flats in Nanded City Pune", href: "/lp/3-bhk-luxury", category: "configurations", searchIntent: "commercial" },
      { label: "3 BHK High-Rise Towers Nanded City", href: "/cluster/saajgiri", category: "configurations", searchIntent: "commercial" },
      { label: "3.5 BHK Harmony Residences", href: "/cluster/harmony", category: "configurations", searchIntent: "commercial" },
      { label: "4 BHK Flats in Nanded City Pune", href: "/cluster/harmony", category: "configurations", searchIntent: "commercial" },
      { label: "4.5 BHK Luxury Apartments Harmony", href: "/cluster/harmony", category: "configurations", searchIntent: "commercial" },
      { label: "Penthouses in Nanded City Pune", href: "/contact", category: "configurations", searchIntent: "commercial" },
      { label: "1 BHK Flats in Nanded City (Mangal Bhairav)", href: "/cluster/mangal-bhairav", category: "configurations", searchIntent: "commercial" },
      { label: "Compact Smart Homes Lalit", href: "/cluster/lalit", category: "configurations", searchIntent: "commercial" }
    ]
  },
  {
    id: "plotted-developments",
    name: "NA Bungalow & Villa Plots",
    description: "Sanctioned NA residential plots, villa communities, and land investments",
    keywords: [
      { label: "Branded NA Bungalow Plots Nanded City", href: "/lp/na-bungalow-plots", category: "plotted-developments", searchIntent: "commercial" },
      { label: "Melody Luxury Villa Plots (Phase I)", href: "/cluster/melody-1", category: "plotted-developments", searchIntent: "commercial" },
      { label: "Melody II NA Plots Sinhagad Road", href: "/cluster/melody-2", category: "plotted-developments", searchIntent: "commercial" },
      { label: "Melody III Villa Plots", href: "/cluster/melody-3", category: "plotted-developments", searchIntent: "commercial" },
      { label: "Rhythm I Signature Bungalow Plots", href: "/cluster/rhythm-1", category: "plotted-developments", searchIntent: "commercial" },
      { label: "Dhanashree Gated NA Plots", href: "/cluster/dhanashree", category: "plotted-developments", searchIntent: "commercial" },
      { label: "Buy Residential Plot Sinhagad Road", href: "/lp/na-bungalow-plots", category: "plotted-developments", searchIntent: "transactional" },
      { label: "Gated Community Land Pune", href: "/lp/na-bungalow-plots", category: "plotted-developments", searchIntent: "informational" },
      { label: "Nanded City Plot Rate Per Sq Ft", href: "/contact", category: "plotted-developments", searchIntent: "commercial" },
      { label: "Custom Villa Construction Nanded City", href: "/lp/na-bungalow-plots", category: "plotted-developments", searchIntent: "informational" }
    ]
  },
  {
    id: "residential-clusters",
    name: "All 20+ Residential Clusters",
    description: "Every residential project, cluster, phase, and community in Nanded City Township",
    keywords: [
      { label: "Saajgiri 3 BHK High-Rise (P52100051867)", href: "/cluster/saajgiri", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Harmony 3.5 & 4.5 BHK Luxury Launch", href: "/cluster/harmony", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Aalaap-I 2 & 2.5 BHK Homes", href: "/cluster/aalaap-1", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Pancham Phase 1 & 2 (P52100000288)", href: "/cluster/pancham", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Asawari 2 & 3 BHK Family Cluster", href: "/cluster/asawari", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Sargam Skyline Towers 2 & 3 BHK", href: "/cluster/sargam", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Bageshree Modern 2 BHK Residences", href: "/cluster/bageshree", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Kalashree Large Carpet 3 BHK", href: "/cluster/kalashree", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Sarang Scenic Hill-View 2 BHK", href: "/cluster/sarang", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Lalit Compact Smart 2 BHK", href: "/cluster/lalit", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Madhuvanti 2 BHK Gated Community", href: "/cluster/madhuvanti", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Shubh Kalyan Luxury 3 BHK", href: "/cluster/shubh-kalyan", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Sur Peaceful 2 BHK Apartments", href: "/cluster/sur", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Mangal Bhairav 1 & 2 BHK", href: "/cluster/mangal-bhairav", category: "residential-clusters", searchIntent: "commercial" },
      { label: "Janaranjani 2 BHK Flats", href: "/cluster/janaranjani", category: "residential-clusters", searchIntent: "commercial" },
      { label: "All 20 Residential Clusters Directory", href: "/projects", category: "residential-clusters", searchIntent: "informational" }
    ]
  },
  {
    id: "township-infrastructure",
    name: "700-Acre Infrastructure Silo",
    description: "Self-sustainable civic infrastructure, utilities, zero-discharge environmental engineering",
    keywords: [
      { label: "Nanded City Township Infrastructure", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Internal Concrete Spine Road Network", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Dedicated Jogging & Cycling Tracks", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Water Treatment Plant (WTP) 24x7 Supply", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Sewage Treatment Plant (STP) Zero Discharge", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Dedicated 22 kV MSEB Power Substation", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Underground Power & Broadband Cabling", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Centralized 24x7 CCTV Security & Command", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Internal Fire Station & Police Post", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "70% Green Open Cover & Eco Township", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Organic Waste Converters & Eco Disposal", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" },
      { label: "Stormwater Drainage & Rainwater Harvesting", href: "/about-us", category: "township-infrastructure", searchIntent: "informational" }
    ]
  },
  {
    id: "social-civic-ecosystem",
    name: "Social, Civic & Commercial Hubs",
    description: "Education, healthcare, IT business park, shopping destinations, sports complexes",
    keywords: [
      { label: "Nanded City Public School (ICSE)", href: "/about-us", category: "social-civic-ecosystem", searchIntent: "informational" },
      { label: "Pawar Public School Vicinity", href: "/about-us", category: "social-civic-ecosystem", searchIntent: "informational" },
      { label: "Sahyadri Hospital Nanded City (24/7 Care)", href: "/about-us", category: "social-civic-ecosystem", searchIntent: "informational" },
      { label: "Symphony IT Park Micro-Economy", href: "/about-us", category: "social-civic-ecosystem", searchIntent: "informational" },
      { label: "Destination Center I & II Shopping Malls", href: "/about-us", category: "social-civic-ecosystem", searchIntent: "informational" },
      { label: "Kridaangan Olympic Sports Complex", href: "/about-us", category: "social-civic-ecosystem", searchIntent: "informational" },
      { label: "Club Harmony Gymkhana & Swimming Pool", href: "/cluster/harmony", category: "social-civic-ecosystem", searchIntent: "informational" },
      { label: "Banks, Supermarkets & Daily Convenience", href: "/about-us", category: "social-civic-ecosystem", searchIntent: "informational" }
    ]
  },
  {
    id: "connectivity",
    name: "Connectivity & Localities",
    description: "Flyover corridors, key commute times, neighboring suburbs and expressways",
    keywords: [
      { label: "Flats on Sinhagad Road Pune", href: "/near/sinhagad-road", category: "connectivity", searchIntent: "commercial" },
      { label: "Sinhagad Road Multi-Tier Flyover Impact", href: "/blog/sinhgad-road-flyover-impact-2026", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Kothrud (15 Mins Direct)", href: "/near/kothrud", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Hinjewadi IT Park", href: "/near/hinjewadi", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Warje Flyover", href: "/near/warje", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Bavdhan & Mumbai Highway", href: "/near/bavdhan", category: "connectivity", searchIntent: "informational" },
      { label: "Nanded City to Swargate & Deccan", href: "/near/sinhagad-road", category: "connectivity", searchIntent: "informational" },
      { label: "Dhayari & Anand Nagar Properties", href: "/near/dhayari", category: "connectivity", searchIntent: "commercial" },
      { label: "Vadgaon Budruk Connectivity", href: "/near/vadgaon-budruk", category: "connectivity", searchIntent: "commercial" },
      { label: "Khadakwasla Dam & NDA Road Link", href: "/near/sinhagad-road", category: "connectivity", searchIntent: "informational" }
    ]
  },
  {
    id: "investment-intent",
    name: "Commercial & Buyer Intent",
    description: "Price trends 2026, MahaRERA compliance, rental yields, resale advisory and site visits",
    keywords: [
      { label: "Nanded City Price List & Trends 2026", href: "/projects", category: "investment-intent", searchIntent: "commercial" },
      { label: "Nanded City Resale Flats for Sale", href: "/contact", category: "investment-intent", searchIntent: "transactional" },
      { label: "Nanded City Master Plan Layout", href: "/about-us", category: "investment-intent", searchIntent: "informational" },
      { label: "Nanded City Brochure PDF Download", href: "/contact", category: "investment-intent", searchIntent: "transactional" },
      { label: "Nanded City Floor Plans 2 & 3 BHK", href: "/projects", category: "investment-intent", searchIntent: "informational" },
      { label: "MahaRERA Legal Verification Nanded City", href: "/legal-compliance", category: "investment-intent", searchIntent: "informational" },
      { label: "12.5% YoY Capital Growth Data", href: "/blog", category: "investment-intent", searchIntent: "informational" },
      { label: "25% Rental Yield & Tenant Demand", href: "/blog", category: "investment-intent", searchIntent: "informational" },
      { label: "Nanded City vs Magarpatta vs Amanora", href: "/blog/nanded-city-vs-standalone-projects-roi", category: "investment-intent", searchIntent: "informational" },
      { label: "Schedule Priority Site Visit", href: "/contact", category: "investment-intent", searchIntent: "transactional" },
      { label: "PropSmart Realty Authorized Partner (+91 7744009295)", href: "/contact", category: "investment-intent", searchIntent: "transactional" }
    ]
  }
];

export const ALL_ECOSYSTEM_KEYWORDS = ECOSYSTEM_KEYWORD_TAXONOMY.flatMap(group => group.keywords);
