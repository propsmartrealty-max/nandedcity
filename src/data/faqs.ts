export interface FAQItem {
  question: string;
  answer: string;
  category: 'legal' | 'infrastructure' | 'prices' | 'connectivity' | 'resale' | 'lifestyle';
}

export const homeFaqs: FAQItem[] = [
  {
    category: "prices",
    question: "What residential configurations and property types are available in Nanded City Pune?",
    answer: "Nanded City Township offers a comprehensive spectrum of premium residential inventory across its 700-acre masterplan: modern 2 & 2.5 BHK residences in Aalaap-I, Pancham (Phase 1 & 2), Bageshree, Sargam, Asawari, Lalit, Mangal Bhairav, Madhuvanti, and Janaranjani; spacious 3 BHK luxury high-rises in Saajgiri, Kalashree, and Shubh Kalyan; palatial 3.5 & 4.5 BHK royal apartments in Harmony; and exclusive Branded NA Bungalow Plots in Melody I, II, III, Rhythm, and Dhanashree."
  },
  {
    category: "legal",
    question: "What are the new launch and upcoming projects in Nanded City for 2026?",
    answer: "The flagship new launch and under-construction offerings include Saajgiri (ultra-luxury 3 BHK high-rises with Sahyadri hill views, MahaRERA: PR1260002501621), Harmony (3.5 & 4.5 BHK palace apartments with private club privileges, MahaRERA: P52100055134), Aalaap-I (contemporary 2 & 3 BHK urban residences, MahaRERA: P52100051234), and the Melody & Rhythm plotted developments for independent villa construction (MahaRERA: P52100051948)."
  },
  {
    category: "lifestyle",
    question: "What schools, healthcare facilities, and commercial hubs exist within Nanded City?",
    answer: "Nanded City is fully self-sustaining with Nanded City Public School (ICSE curriculum) and Pawar Public School on-premise, round-the-clock primary healthcare clinics and pharmacies, Sahyadri Multispeciality Hospital, Destination Center I & II for retail and daily shopping, and Symphony IT Park providing integrated walk-to-work IT office spaces."
  },
  {
    category: "connectivity",
    question: "How is Nanded City connected to Kothrud, Hinjewadi IT Park, and central Pune?",
    answer: "Situated directly on Sinhagad Road (Pune 411041), Nanded City benefits from the multi-lane Sinhagad Road flyover, providing a 15-minute commute to Kothrud and Swargate. Commuters access Hinjewadi IT Park via the Western Bypass (NH-48 / Mumbai-Bangalore Highway) within 35–40 minutes, with convenient arterial connections to Warje, Bavdhan, and Deccan Gymkhana."
  },
  {
    category: "prices",
    question: "How does Nanded City compare with Magarpatta City and Amanora Park Town?",
    answer: "While Magarpatta and Amanora dominate East Pune, Nanded City is West and South-West Pune's crowning 700-acre integrated township. Nanded City provides 70% open green space, unhindered views of the Sahyadri mountains and Khadakwasla backwaters, lower population density, and competitive capital values (averaging ₹6,800–₹9,200/sq.ft. vs ₹11,000+/sq.ft. in Hadapsar), delivering superior long-term ROI and rental demand."
  },
  {
    category: "prices",
    question: "What is the price trend and rental yield in Nanded City?",
    answer: "Nanded City has demonstrated a 12.5% YoY price appreciation, propelled by Sinhagad Road infrastructure upgrades and the proposed metro corridor. Rental demand remains exceptionally high at ~25% gross occupancy demand, driven by professionals working at Symphony IT Park and Sinhagad Road commercial centers. A typical 2 BHK yields ₹20,000–₹26,000/month, while 3 BHK units yield ₹30,000–₹42,000/month."
  },
  {
    category: "legal",
    question: "Are all Nanded City projects MahaRERA registered and approved for bank home loans?",
    answer: "Yes, every active and upcoming cluster carries distinct MahaRERA certifications (e.g., Saajgiri PR1260002501621, Harmony P52100055134, Melody P52100051948, Pancham Phase 2 P52100000288). The township enjoys pre-approved project status with leading financial institutions including SBI, HDFC Bank, ICICI Bank, Bank of Maharashtra, and Axis Bank, facilitating fast home loan processing."
  },
  {
    category: "legal",
    question: "Can I buy NA bungalow plots to construct an independent villa in Nanded City?",
    answer: "Yes, Nanded City offers exclusive Collector NA-sanctioned bungalow plots through the Melody (Phases I, II, III) and Rhythm clusters, ranging from 2,000 to 4,500 sq. ft., featuring complete underground utility connections, perimeter gated security, and access to all township clubhouses."
  },
  {
    category: "prices",
    question: "What is the average real estate price per sq.ft. on Sinhagad Road Pune in 2026?",
    answer: "In 2026, standalone buildings along Sinhagad Road (Dhayari, Vadgaon, Anand Nagar, Hingne) trade between ₹5,800 and ₹8,200 per sq.ft. Premium integrated residences in Nanded City range from ₹7,800 to ₹10,500 per sq.ft. (with exclusive villa plots starting at ₹1.5 Cr+), commanding a ~25% premium due to captive water treatment, private ICSE schools, Destination Center malls, and 70% open green space."
  },
  {
    category: "connectivity",
    question: "How has the new Sinhagad Road flyover impacted commute times and property prices?",
    answer: "The newly operational multi-tier Sinhagad Road flyover (Rajaram Bridge to Fun Time Multiplex) has cut peak-hour travel times to Swargate and Kothrud from 45 minutes to just 8–10 minutes. This major arterial upgrade has triggered 12% to 15% annual capital appreciation across Nanded City and adjoining South-West Pune corridors."
  },
  {
    category: "resale",
    question: "Can I buy verified resale flats in Nanded City Pune?",
    answer: "Yes, Nanded City features 12 completed, fully inhabited residential communities including Asawari, Sargam, Bageshree, Mangal Bhairav, Madhuvanti, and Lalit. These clusters offer verified 2 BHK and 3 BHK resale inventory with full Occupancy Certificates (OC), clear bank titles, and active cooperative housing societies."
  },
  {
    category: "infrastructure",
    question: "Why do Pune homebuyers choose Nanded City Township over standalone buildings in South-West Pune?",
    answer: "Unlike standalone buildings that face water tanker reliance, parking deficits, and narrow access lanes, Nanded City delivers 100% infrastructure autonomy: direct 24x7 treated water from Khadakwasla Dam, dedicated MSEB electrical substation, dual STP systems, on-campus ICSE schooling, Olympic sports facilities, and professional 3-tier security."
  },
  {
    category: "infrastructure",
    question: "What is the source of water supply in Nanded City, and are water tankers needed?",
    answer: "Nanded City has an independent, township-owned automated Water Treatment Plant (WTP) receiving raw water directly from the Khadakwasla Dam pipeline. The water is filtered, chlorinated, and tested daily to potable drinking standards. Residents enjoy 24/7 unmetered continuous water supply without ever needing private water tankers."
  },
  {
    category: "resale",
    question: "What are the average maintenance charges in Nanded City societies?",
    answer: "Maintenance charges across Nanded City residential societies are among the most economical for integrated townships in Pune, typically ranging between ₹2.20 to ₹3.00 per sq.ft. of carpet area per month. This covers 24/7 security personnel, automated street lighting, elevator maintenance, landscape upkeep, and waste collection."
  },
  {
    category: "lifestyle",
    question: "Is Symphony IT Park operational, and what companies operate there?",
    answer: "Yes, Symphony IT Park is a dedicated commercial IT and business campus within Nanded City spanning over 1.5 million sq.ft. of Grade-A office space. It houses various IT services, software development, consulting, and BPO enterprises, providing a true 'Walk-to-Work' lifestyle for resident software engineers."
  },
  {
    category: "lifestyle",
    question: "What sports and recreation facilities are inside Kridaangan and Club Harmony?",
    answer: "Kridaangan is Nanded City's master sports arena featuring full-size cricket and football grounds, Olympic-standard swimming pool, synthetic tennis courts, indoor badminton halls, table tennis, skating rink, and open fitness gyms. Club Harmony features private gymnasium facilities, steam and sauna, banquet spaces, and yoga pavilions."
  },
  {
    category: "resale",
    question: "How does the society transfer and NOC process work for Nanded City resale properties?",
    answer: "Purchasing a resale flat in Nanded City is secure and institutional: 1) Verify clean title and allotment documents; 2) Obtain Society NOC confirming no outstanding dues; 3) Execute registered sale deed with 7% Maharashtra stamp duty; 4) Transfer share certificates and update the Society Member Register."
  },
  {
    category: "lifestyle",
    question: "Are pets allowed in Nanded City societies?",
    answer: "Yes, Nanded City is a pet-friendly community. Wide internal avenues, landscaped riverside promenades, and eco-parks provide ideal walking trails for dogs. Individual housing societies adhere to standard municipal pet guidelines, requiring leash usage in common areas."
  },
  {
    category: "connectivity",
    question: "What is the distance from Nanded City to Pune Railway Station and Pune International Airport?",
    answer: "Nanded City is approximately 14 km (30–35 minutes via Sinhagad Road flyover) from Pune Central Railway Station (Station Code: PUNE) and 24 km (45–55 minutes via inner ring road) from Pune International Airport (PNQ) at Lohegaon."
  },
  {
    category: "connectivity",
    question: "What is the proposed Pune Metro connectivity for Sinhagad Road and Nanded City?",
    answer: "Under the PMRDA and Maha-Metro Comprehensive Mobility Plan, the Khadakwasla–Swargate metro line extension is slated to run along Sinhagad Road with planned stations at Dhayari Phata and Nanded City entrance, ensuring high-speed mass transit connectivity to Deccan, Shivajinagar, and Pimpri-Chinchwad."
  },
  {
    category: "prices",
    question: "What are the carpet areas for 2 BHK, 3 BHK, and 4 BHK flats in Nanded City?",
    answer: "Carpet areas vary by cluster: 2 BHK residences range from 650 sq.ft. to 850 sq.ft. (compact family layouts); 2.5 BHK units measure 880–960 sq.ft.; 3 BHK luxury residences in Saajgiri and Kalashree offer 1,050 to 1,350 sq.ft.; and royal 3.5 & 4.5 BHK apartments in Harmony feature expansive 1,650 to 2,400 sq.ft. carpet layouts."
  },
  {
    category: "infrastructure",
    question: "What are the safety, surveillance, and security measures in Nanded City?",
    answer: "Nanded City operates a 3-tier security infrastructure: 1) Master township entrance checkpoints with boom barriers and automated number plate recognition (ANPR); 2) 24/7 CCTV surveillance across all 20+ km of internal roads; 3) Individual cluster entrance security guards with visitor management systems (MyGate/NoBrokerHood)."
  },
  {
    category: "infrastructure",
    question: "What is the eco-sustainability and green cover percentage of Nanded City?",
    answer: "Over 70% of Nanded City's 700 acres is preserved as green open spaces, tree-lined boulevards, landscaped parks, and agricultural buffer zones. The township features a Zero-Discharge biological Sewage Treatment Plant (STP) that recycles 100% wastewater for gardening and flushing, along with extensive rooftop rainwater harvesting."
  },
  {
    category: "legal",
    question: "How can I schedule an official priority site visit for Nanded City flats or bungalow plots?",
    answer: "You can schedule a priority guided site visit by calling our authorized advisory desk at +91 8888 888 888 or initiating an instant WhatsApp inquiry. Guided tours include sample flat viewing, cluster walk-throughs, infrastructure audits (WTP/STP), and custom cost sheet consultations."
  }
];
