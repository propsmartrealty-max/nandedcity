export const SITE_CONFIG = {
  name: "Nanded City Township Pune",
  description: "Authorized channel partner platform for Nanded City Township Pune across 700 Acres on Sinhagad Road. Explore 2, 2.5, 3, 3.5 & 4.5 BHK luxury flats and branded NA bungalow plots with certified floor plans, prices and RERA compliance.",
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
      "Nanded City Pune",
      "Nanded City Township Pune",
      "Nanded City Sinhagad Road",
      "flats in Nanded City",
      "Nanded City flats for sale",
      "2 BHK Nanded City",
      "2 BHK flats Nanded City",
      "2.5 BHK Nanded City",
      "3 BHK Nanded City",
      "3 BHK flats Nanded City",
      "4 BHK Nanded City",
      "NA bungalow plots Nanded City",
      "Melody plots Nanded City",
      "Rhythm plots Nanded City",
      "Saajgiri Nanded City",
      "Harmony Nanded City",
      "Aalaap Nanded City",
      "Pancham Nanded City",
      "Asawari Nanded City",
      "Sargam Nanded City",
      "Bageshree Nanded City",
      "flats on Sinhagad Road Pune",
      "integrated township in Pune",
      "best township in Pune"
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
