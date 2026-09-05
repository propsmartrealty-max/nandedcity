export const SITE_CONFIG = {
  name: "Nanded City Township Pune",
  description: "Official residential platform for Nanded City Township Pune, dominating the Pune Real Estate Market on Sinhagad Road and Central Pune. Explore 1, 2, 2.5 & 3 BHK luxury flats and branded NA bungalow plots.",
  baseUrl: "https://www.nanded-city.in",
  contact: {
    phone: "+91 7744009295",
    phoneNumeric: "7744009295",
    address: "PropSmart Realty, Authorized Partner, Nanded City Township, Sinhagad Road, Pune - 411041",
    whatsapp: "https://wa.me/917744009295?text=Hi,%20I%20am%20interested%20in%20the%20project.",
    whatsappPrompt: "Chat with Sales Expert",
    location: {
      latitude: 18.4425,
      longitude: 73.81,
    },
  },
  social: {
    facebook: "https://www.facebook.com/nandedcitypune",
    instagram: "https://www.instagram.com/nandedcitypune",
  },
  brand: {
    organizationName: "PropSmart Realty",
    developerName: "Nanded City Development & Construction Company Limited",
    partnerStatus: "Independent Authorized Channel Partner",
    rera: "A7744009295",
    logo: "/nc-logo.png",
    ogImage: "https://nandedcitypune.com/aalaap/assets/img/img-hero-banner-02.jpg",
  },
  seo: {
    primaryKeywords: [
      // 1. Core Brand & Commercial Intent
      "Nanded City Pune",
      "Nanded City",
      "Nanded City Pune Maharashtra",
      "Nanded City Sinhagad Road",
      "Nanded City Sinhagad Road Pune",
      "Nanded City Pune township",
      "Nanded City township Pune",
      "Nanded City residential township",
      "Nanded City apartments",
      "Nanded City flats",
      "Nanded City homes",
      "Nanded City properties",
      "Nanded City real estate",
      "Nanded City gated community",
      "Nanded City integrated township",
      "Nanded City official website",
      "Nanded City flats for sale",
      "Nanded City apartments for sale",
      "Nanded City flats price",
      "Nanded City booking",
      "Nanded City new launch",
      "Nanded City upcoming projects",
      "Nanded City ongoing projects",
      "Nanded City completed projects",

      // 2. Township Keyword Cluster
      "township in Pune",
      "best township in Pune",
      "integrated township in Pune",
      "residential township in Pune",
      "gated township in Pune",
      "largest township in Pune",
      "luxury township in Pune",
      "eco friendly township Pune",
      "green township Pune",
      "self sufficient township Pune",
      "township living Pune",

      // 3. Location Ecosystem
      "flats on Sinhagad Road",
      "flats for sale Sinhagad Road Pune",
      "apartments Sinhagad Road Pune",
      "2 BHK Sinhagad Road",
      "3 BHK Sinhagad Road",
      "4 BHK Sinhagad Road",
      "new projects Sinhagad Road",
      "residential projects Sinhagad Road",
      "property Sinhagad Road Pune",
      "flats in Nanded Pune",
      "flats for sale Nanded Pune",
      "apartments in Nanded Pune",

      // 4. Configuration Ecosystem
      "1 BHK Nanded City Pune",
      "2 BHK Nanded City Pune",
      "2 BHK flats Nanded City",
      "2 BHK flats for sale Nanded City",
      "2.5 BHK Nanded City",
      "2.5 BHK flats Nanded City",
      "3 BHK Nanded City Pune",
      "3 BHK flats Nanded City",
      "3 BHK flats for sale Nanded City",
      "luxury 3 BHK Nanded City",
      "3.5 BHK Nanded City",
      "3.5 BHK flats Nanded City",
      "4 BHK Nanded City",
      "4 BHK flats Nanded City",
      "4.5 BHK Nanded City",

      // 5. High-Intent New Launches & Clusters
      "Saajgiri Nanded City",
      "Saajgiri 3 BHK",
      "Saajgiri Sinhagad Road",
      "Harmony Nanded City",
      "Harmony 3.5 BHK",
      "Harmony 4.5 BHK",
      "Aalaap Nanded City",
      "Melody Nanded City",
      "Melody bungalow plots",
      "Rhythm Nanded City",
      "Dhanashree Plots Nanded City",
      "Pancham Nanded City",
      "Pancham Phase 1",
      "Pancham Phase 2",
      "Sarang Nanded City",
      "Lalit Nanded City",
      "Sargam Nanded City",
      "Asawari Nanded City",
      "Bageshree Nanded City",
      "Kalashree Nanded City",
      "Madhuvanti Nanded City",
      "Shubh Kalyan Nanded City",
      "Sur Nanded City",
      "Mangal Bhairav Nanded City",
      "Janaranjani Nanded City",

      // 6. Plotted Land & Villas
      "Nanded City bungalow plots",
      "Nanded City NA plots",
      "Nanded City villa plots",
      "NA bungalow plots Pune",
      "residential plots Sinhagad Road",

      // 7. Amenities, Schools & Infrastructure
      "Nanded City Public School",
      "Pawar Public School Nanded",
      "Symphony IT Park Nanded City",
      "Destination Center Nanded City",
      "Kridaangan Sports Complex Nanded City",
      "Stream Park Nanded City",

      // 8. Locality Combinations & Connectivity
      "Nanded City to Kothrud",
      "Nanded City to Warje",
      "Nanded City to Bavdhan",
      "Nanded City to Hinjewadi",
      "Nanded City to Swargate",

      // 9. Comparison & Investment Queries
      "Nanded City vs Magarpatta City",
      "Nanded City vs Amanora",
      "Nanded City vs Life Republic",
      "Nanded City ROI",
      "Nanded City rental yield",
      "Nanded City price per sq ft 2026",
      "Nanded City resale flats"
    ].join(", "),
  }
};

export function getWhatsappLink(pathname?: string | null) {
  const base = "https://wa.me/917744009295";
  let text = "Hi, I am interested in Nanded City properties.";
  
  if (pathname) {
    if (pathname.includes('/cluster/')) {
      const slug = pathname.split('/').pop() || '';
      const projectName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      text = `Hi, I am interested in the ${projectName} project at Nanded City.`;
    } else if (pathname.includes('/lp/')) {
      const slug = pathname.split('/').pop() || '';
      const campaignName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      text = `Hi, I am interested in ${campaignName} at Nanded City.`;
    } else if (pathname.includes('/mr/')) {
      const slug = pathname.split('/').pop() || '';
      const campaignName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      text = `Hi, I am interested in ${campaignName} at Nanded City (Marathi Inquiry).`;
    } else if (pathname.includes('/blog/')) {
      const slug = pathname.split('/').pop() || '';
      const blogName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      text = `Hi, I read the article "${blogName}" and am interested in Nanded City.`;
    }
  }
  return `${base}?text=${encodeURIComponent(text)}`;
}
