export interface AlumniReview {
  id: string;
  name: string;
  batch: string;
  degree: string;
  company: string;
  role: string;
  location: string;
  category: 'Big Tech & AI' | 'Aerospace & Core' | 'Founders & CXOs' | 'Public Service & Research';
  image: string;
  rating: number; // 5 out of 5
  quote: string;
  fullJourney: string;
  highlights: string[];
  linkedin?: string;
  patentsOrPapers?: string;
}

export interface AlumniGalleryItem {
  id: string;
  title: string;
  category: 'Homecoming' | 'Gulf Chapters' | 'USA & Europe' | 'Tech Summits' | 'Milestones';
  year: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  description: string;
  keyHighlights: string[];
}

export interface AlumniChapter {
  id: string;
  name: string;
  region: string;
  location: string;
  membersCount: string;
  lead: string;
  leadRole: string;
  contactEmail: string;
  upcomingMeet: string;
  image: string;
}

export interface AlumniEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  mode: 'In-Person' | 'Hybrid' | 'Virtual';
  venue: string;
  category: 'Homecoming' | 'Chapter Gala' | 'Webinar / AMA' | 'Sports';
  description: string;
  rsvpCount: number;
}

export const ALUMNI_METRICS = [
  { value: "18,500+", label: "Global Alumni", sub: "Across 34 countries" },
  { value: "14", label: "Active Global Chapters", sub: "UAE, USA, UK, India" },
  { value: "₹48 LPA", label: "Highest Global CTC", sub: "Cloud & AI Architectures" },
  { value: "220+", label: "Founders & CXOs", sub: "Startups & Enterprises" },
  { value: "₹25 Lakhs+", label: "Annual Student Grants", sub: "FabLab & Scholarships" }
];

export const ALUMNI_SUCCESS_REVIEWS: AlumniReview[] = [
  {
    id: "alm-1",
    name: "Jerin Paul",
    batch: "Class of 2018",
    degree: "B.Tech Computer Science & Engineering",
    company: "Amazon Web Services (AWS)",
    role: "Senior Cloud Solutions Architect",
    location: "Dublin, Ireland",
    category: "Big Tech & AI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "The computational rigor at Jyothi, paired with 24/7 coding hackathons and autonomous curricula, built the architectural resilience I rely on daily designing multi-region cloud infrastructures for AWS EMEA.",
    fullJourney: "Jerin graduated with honors in CSE from Jyothi in 2018. During his pre-final year, he spearheaded Jyothi's ACM student chapter and led the winning team at the Kerala State Hackathon. He joined TCS as a cloud trainee, published research in distributed database partitioning, and subsequently joined Amazon Web Services in Dublin where he currently consults for Fortune 500 financial enterprises across Europe.",
    highlights: ["Mentored 40+ Jyothi CSE students", "Co-founded AWS Dublin Cloud User Group", "Recipient of AWS High-Bar Builder Award 2023"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "2 IEEE Papers on Distributed Microservices"
  },
  {
    id: "alm-2",
    name: "Ananya Menon",
    batch: "Class of 2021",
    degree: "B.Tech Electronics & Communication Engineering",
    company: "Bosch Global Software",
    role: "Embedded Autonomous Driving Systems Engineer",
    location: "Bengaluru, India",
    category: "Aerospace & Core",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "Jyothi's specialized hardware labs and Texas Instruments Embedded Innovation Center gave me real silicon experience with CAN protocols and RTOS during my 3rd year, months before my Bosch campus interview.",
    fullJourney: "Ananya represented Jyothi at the National Robocon Championship and designed an autonomous assistive navigation buggy at the campus FabLab. Her deep domain expertise in RTOS and embedded C secured her a direct Tier-1 campus placement at Bosch Global Software Technologies, where she now works on Level-3 autonomous braking algorithms.",
    highlights: ["Bosch Innovation Excellence Award 2023", "Lead Organizer for Jyothi Women in Hardware Initiative", "Authored CAN-bus security framework"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "1 Indian Patent in Vehicle-to-Vehicle Telemetry"
  },
  {
    id: "alm-3",
    name: "Arjun K. Varma",
    batch: "Class of 2019",
    degree: "B.Tech Mechanical Engineering",
    company: "Indian Space Research Organisation (ISRO)",
    role: "Scientist / Propulsion Engineer",
    location: "Thiruvananthapuram, India",
    category: "Public Service & Research",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "The faculty mentorship and advanced thermodynamics labs at Jyothi instilled in me the unwavering discipline required for mission-critical aerospace testing and cryogenic structural calculations.",
    fullJourney: "Arjun was an active researcher at Jyothi's Center of Excellence for Advanced Materials. Mentored by veteran professors, he cleared the ISRO Centralised Recruitment Board (ICRB) exam with an All-India Top 15 rank. He is currently deployed at the Liquid Propulsion Systems Centre (LPSC), actively contributing to India's prestigious Gaganyaan crewed mission modules.",
    highlights: ["Core member of Gaganyaan Propulsion Module Team", "Keynote speaker at National Space Day 2024", "Mentors Jyothi SAE collegiate aero-design club"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "Published 3 Scopus journal papers on Cryogenic Fluid Dynamics"
  },
  {
    id: "alm-4",
    name: "Vivek Menon",
    batch: "Class of 2011",
    degree: "B.Tech Computer Science & Engineering",
    company: "CloudPulse AI (San Francisco)",
    role: "Co-Founder & Chief Technology Officer",
    location: "San Francisco, California, USA",
    category: "Founders & CXOs",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "Jyothi's culture of ethical technology and student autonomy taught me how to take measured risks. Taking that spirit all the way to Silicon Valley helped us scale CloudPulse AI to over $18M in Series-A venture funding.",
    fullJourney: "After graduating in 2011, Vivek worked at Yahoo and Oracle in Bengaluru before completing his Master's at Carnegie Mellon University. In 2020, he co-founded CloudPulse AI in San Francisco, an automated telemetry and observability platform backed by top Silicon Valley venture capital funds. He regularly sponsors Jyothi student seed grants.",
    highlights: ["Raised $18M Series-A funding", "Endowed ₹15 Lakhs Jyothi Innovation Seed Fund", "Y-Combinator Alumnus (W21)"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "4 US Patents in AI-driven Telemetry Ingestion"
  },
  {
    id: "alm-5",
    name: "Neha Elizabeth Cherian",
    batch: "Class of 2016",
    degree: "B.Tech Electrical & Electronics Engineering",
    company: "Siemens Energy",
    role: "Principal Grid Transition Engineer",
    location: "Munich, Germany",
    category: "Aerospace & Core",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "Working on Jyothi's 63.4 kW on-campus rooftop solar plant as an undergraduate project was my very first taste of green microgrids. That practical foundation was instrumental in securing my position at Siemens Energy.",
    fullJourney: "Neha spearheaded renewable energy simulations at Jyothi's High Voltage Laboratory. After securing a DAAD scholarship for her Master's in Power Systems at TU Munich, she joined Siemens Energy, where she now directs European high-voltage direct current (HVDC) offshore wind farm integrations across the North Sea.",
    highlights: ["DAAD German Academic Exchange Scholar", "Key Contributor to North Sea Wind Interconnector Grid", "Active Mentor in Jyothi Alumni Women in STEM"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "Published IEEE Transactions on Sustainable Energy"
  },
  {
    id: "alm-6",
    name: "Midhun Krishnan, IAS",
    batch: "Class of 2012",
    degree: "B.Tech Civil Engineering",
    company: "Government of India",
    role: "District Magistrate & IAS Officer",
    location: "New Delhi, India",
    category: "Public Service & Research",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "Engineering at Jyothi wasn't just about formulas—it was about using technical problem-solving to serve society. That ethos carried me through the UPSC Civil Services exam and guides my daily public administrative work.",
    fullJourney: "Midhun distinguished himself at Jyothi through NSS community initiatives, rural water sanitation projects, and student council governance. He cleared the UPSC Civil Services Examination with AIR 48 on his first attempt and currently leads district infrastructure modernization, rural digital empowerment, and disaster resilience programs.",
    highlights: ["UPSC All-India Rank 48", "Pioneered District Smart Classroom initiative", "Distinguished Alumnus Award 2022"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "Authored National Policy Monograph on Rural Water Audits"
  },
  {
    id: "alm-7",
    name: "Rhea Mariam Joseph",
    batch: "Class of 2020",
    degree: "B.Tech Mechatronics Engineering",
    company: "Tesla Motors",
    role: "Senior Robotics Commissioning Specialist",
    location: "Austin, Texas, USA",
    category: "Big Tech & AI",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "Jyothi's FabLab, equipped with industrial-grade 3D printers, laser cutters, and multi-axis CNC machines, gave me a multi-year head start in robotics fabrication that directly translated to Tesla Gigafactory robotics lines.",
    fullJourney: "Rhea was part of Jyothi's first Mechatronics batch. She built miniature pick-and-place cobots and competed at national robotics expos. Following her M.S. in Robotics at Purdue University, she joined Tesla in Austin, commissioning automated robotic welding and battery cell assembly lines.",
    highlights: ["Led commissioning of Cybertruck automated battery line", "Purdue Robotics Fellowship Recipient", "Conducted virtual robotics workshops for Jyothi FabLab"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "2 Conference Papers in Adaptive Kinematic Control"
  },
  {
    id: "alm-8",
    name: "Dr. Rohit S. Nair",
    batch: "Class of 2014",
    degree: "B.Tech Civil Engineering",
    company: "ETH Zürich",
    role: "Postdoctoral Research Fellow (Seismic Risk)",
    location: "Zürich, Switzerland",
    category: "Public Service & Research",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    quote: "The faculty in the Civil department pushed us beyond textbook calculations into computational finite element analysis. That academic curiosity led me to IIT Bombay for my Ph.D. and subsequently to ETH Zürich.",
    fullJourney: "Dr. Rohit graduated at the top of his Civil Engineering class. After completing his Ph.D. at IIT Bombay in earthquake structural dynamics, he was awarded the prestigious Swiss Government Excellence Scholarship at ETH Zürich, where he models European alpine tunnel seismic resilience.",
    highlights: ["Swiss Government Excellence Fellow", "Marie Skłodowska-Curie Postdoctoral Grantee", "15+ International Refereed Journal Publications"],
    linkedin: "https://linkedin.com",
    patentsOrPapers: "15 Peer-Reviewed International Journal Papers"
  }
];

export const ALUMNI_MEET_GALLERIES: AlumniGalleryItem[] = [
  {
    id: "gal-1",
    title: "Jyothi Smrithi 2024: Annual Global Homecoming",
    category: "Homecoming",
    year: "2024",
    date: "December 28, 2024",
    location: "Jyothi Main Auditorium & Central Lawns, Cheruthuruthy",
    attendees: "1,450+ Alumni & Faculty",
    image: "/assets/alumni_meet_selfie.jpg",
    description: "The marquee annual homecoming of Jyothi Engineering College gathered over 1,450 alumni from 18 graduating batches across the globe for a nostalgic day of campus visits, alumni sports tournaments, and keynote fireside chats.",
    keyHighlights: ["Silver Jubilee preparatory address", "Distinguished Alumnus Awards ceremony", "Launch of ₹25 Lakh Student Innovation Endowment", "Cultural evening and nostalgic alumni band reunion"]
  },
  {
    id: "gal-2",
    title: "Alumni Evening: Live Acoustic Gala",
    category: "Gulf Chapters",
    year: "2024",
    date: "May 18, 2024",
    location: "Grand Hyatt Ballroom, Dubai, UAE",
    attendees: "520+ Alumni",
    image: "/assets/alumni_evening_concert.jpg",
    description: "A glamorous evening uniting Jyothi engineers settled across UAE, Qatar, Oman, and Saudi Arabia. Attended by leadership delegates from the management trust, the gala celebrated regional career achievements in infrastructure and cloud.",
    keyHighlights: ["Felicitation of 15 Middle East engineering business heads", "MoU signed for direct Gulf internship placements", "Cultural performances & traditional Kerala feast", "Networking lounge for junior engineers relocating to Dubai"]
  },
  {
    id: "gal-3",
    title: "Silicon Valley Tech Connect 2023",
    category: "USA & Europe",
    year: "2023",
    date: "October 14, 2023",
    location: "Computer History Museum, Mountain View, California, USA",
    attendees: "185+ Tech Alumni",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop",
    description: "Jyothi alumni working across Google, Apple, Meta, NVIDIA, and Bay Area startups assembled for an inspiring full-day conference on Generative AI, cloud infrastructure, and student startup angel investing.",
    keyHighlights: ["Keynote panel on LLM engineering and cloud scalability", "Pledge of $50,000 in student project micro-grants", "Silicon Valley mentoring network for Jyothi graduates", "Special dinner overlooking Mountain View"]
  },
  {
    id: "gal-4",
    title: "Batchmates Reconnect: Alumni Reunion Meet",
    category: "Tech Summits",
    year: "2024",
    date: "August 24, 2024",
    location: "The Leela Palace, Bengaluru, India",
    attendees: "780+ Tech Alumni",
    image: "/assets/alumni_batchmates_reconnect.jpg",
    description: "The largest domestic chapter gathering in India brought together 780+ software architects, embedded engineers, and fintech leaders living in India's Silicon Valley for an action-packed day of mentorship and industry synergies.",
    keyHighlights: ["25+ startup founders shared scale-up lessons", "Exclusive recruitment drive generating 80+ campus referrals", "Panel discussion on autonomous university curriculum alignment", "Launch of Bengaluru Alumni Mentorship WhatsApp portal"]
  },
  {
    id: "gal-5",
    title: "Across Generations: Homecoming Milestone Reunion",
    category: "Milestones",
    year: "2024",
    date: "July 6, 2024",
    location: "Jyothi Campus Amphitheater & FabLab",
    attendees: "290+ Batchmates",
    image: "/assets/alumni_across_generations.jpg",
    description: "Celebrating 10 years of graduation, the Class of 2014 returned to Cheruthuruthy with their families, planting commemorative trees, visiting renovated labs, and presenting a batch gift endowment for underprivileged students.",
    keyHighlights: ["Tree planting ceremony along the western campus boulevard", "Revisiting classrooms and honoring former faculty mentors", "Establishment of the 'Class of 2014 Merit Scholarship'", "Unveiling of the 10-year nostalgic memory photo wall"]
  },
  {
    id: "gal-6",
    title: "European Alumni Chapter Gathering: London & Dublin",
    category: "USA & Europe",
    year: "2023",
    date: "November 11, 2023",
    location: "Central Hall Westminster, London, United Kingdom",
    attendees: "140+ Alumni",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    description: "Bridging alumni working across the UK, Ireland, Germany, and the Netherlands. The summit focused on immigration navigation, European work permits, and cross-border research collaborations with European universities.",
    keyHighlights: ["Pan-European job referral exchange network established", "Fireside chat with senior executives in Dublin tech hubs", "Mentorship sessions for Jyothi students pursuing European Master's degrees", "Historic walking tour and networking dinner"]
  }
];

export const ALUMNI_CHAPTERS: AlumniChapter[] = [
  {
    id: "ch-1",
    name: "Middle East Chapter",
    region: "GCC & Middle East",
    location: "Dubai & Abu Dhabi, UAE",
    membersCount: "2,450+ Alumni",
    lead: "Er. Binu Thomas ('08)",
    leadRole: "General Manager, Al Habtoor Engineering",
    contactEmail: "alumni.uae@jecc.ac.in",
    upcomingMeet: "Winter Gala • Jan 2026",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ch-2",
    name: "North America Chapter",
    region: "USA & Canada",
    location: "San Francisco, Seattle & New York, USA",
    membersCount: "1,150+ Alumni",
    lead: "Er. Vivek Menon ('11)",
    leadRole: "Co-Founder & CTO, CloudPulse AI",
    contactEmail: "alumni.usa@jecc.ac.in",
    upcomingMeet: "Silicon Valley Tech Connect • Fall 2025",
    image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ch-3",
    name: "Bengaluru Tech Chapter",
    region: "India Tech Hub",
    location: "Bengaluru, Karnataka, India",
    membersCount: "4,200+ Alumni",
    lead: "Er. Ananya Menon ('21)",
    leadRole: "Systems Engineer, Bosch Global",
    contactEmail: "alumni.blr@jecc.ac.in",
    upcomingMeet: "Tech Mixer • October 2025",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ch-4",
    name: "Europe & United Kingdom",
    region: "United Kingdom & EU",
    location: "London (UK) & Dublin (Ireland)",
    membersCount: "820+ Alumni",
    lead: "Er. Jerin Paul ('18)",
    leadRole: "Solutions Architect, Amazon AWS",
    contactEmail: "alumni.eu@jecc.ac.in",
    upcomingMeet: "European Spring Meet • April 2026",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ch-5",
    name: "Kerala & Regional Chapter",
    region: "Kerala Base",
    location: "Kochi, Thrissur & Trivandrum, India",
    membersCount: "6,800+ Alumni",
    lead: "Er. Sreejith K. ('06)",
    leadRole: "Director, GreenTerra Solutions",
    contactEmail: "alumni.kerala@jecc.ac.in",
    upcomingMeet: "Jyothi Smrithi Homecoming • Dec 2025",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop"
  }
];

export const UPCOMING_ALUMNI_EVENTS: AlumniEvent[] = [
  {
    id: "evt-1",
    title: "Jyothi Smrithi 2025: Silver Jubilee Homecoming Edition",
    date: "December 27, 2025",
    time: "09:30 AM – 06:00 PM IST",
    mode: "In-Person",
    venue: "Jyothi Engineering College Campus, Cheruthuruthy, Thrissur",
    category: "Homecoming",
    description: "The landmark homecoming celebrating 23 glorious years of engineering excellence. Batch reunions, alumni football tournament, campus tour of new AI centers, and grand musical night.",
    rsvpCount: 840
  },
  {
    id: "evt-2",
    title: "Middle East Chapter Winter Gala 2026",
    date: "January 17, 2026",
    time: "07:00 PM – 11:30 PM GST",
    mode: "In-Person",
    venue: "Grand Hyatt Ballroom, Dubai Marina, UAE",
    category: "Chapter Gala",
    description: "Annual regional gala uniting engineers across GCC nations. Featuring corporate felicitation, fine dining, student sponsorship pledges, and live entertainment.",
    rsvpCount: 395
  },
  {
    id: "evt-3",
    title: "Virtual Global AMA: Transitioning to Generative AI & Cloud",
    date: "October 18, 2025",
    time: "06:30 PM – 08:30 PM IST",
    mode: "Virtual",
    venue: "Online via Zoom / YouTube Live",
    category: "Webinar / AMA",
    description: "Live ask-me-anything session with alumni architects from AWS, Google, and Bosch sharing practical roadmaps for current students and early-career alumni.",
    rsvpCount: 1120
  }
];

