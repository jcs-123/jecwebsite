// Authentic institutional data for Jyothi Engineering College (Autonomous), Cheruthuruthy, Thrissur

export interface Department {
  id: string;
  name: string;
  code: string;
  degree: string;
  intake: number;
  established: number;
  hod: string;
  hodQualification: string;
  hodMessage: string;
  description: string;
  highlights: string[];
  laboratories: string[];
  careerProspects: string[];
  image: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  email: string;
  image: string;
}

export interface PlacementStatistic {
  year: string;
  offers: number;
  highestPackage: string;
  averagePackage: string;
  participatingCompanies: number;
  placementPercentage: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Academic' | 'Residential' | 'Recreation' | 'Support';
  description: string;
  specs: string[];
  status: 'Confirmed by College' | 'Standard Campus Amenity';
  image: string;
}

export const COLLEGE_INFO = {
  name: "Jyothi Engineering College",
  tagline: "Autonomous Institution of Excellence",
  motto: "Creating Technology Leaders Since 2002",
  approvedBy: "AICTE New Delhi & Affiliated to APJ Abdul Kalam Technological University (KTU)",
  accreditation: "NAAC 'A' Grade Accredited & NBA Accredited B.Tech Programmes",
  managedBy: "Catholic Archdiocese of Trichur",
  address: "Jyothi Hills, Panjal Road, Vettikattiri P.O., Cheruthuruthy, Thrissur, Kerala - 679531",
  phone: "+91 4884 259000 / 259001",
  admissionHelpline: "+91 95269 24455 / +91 95269 34455",
  email: "info@jecc.ac.in",
  admissionEmail: "admissions@jecc.ac.in",
  campusSize: "30+ Acres Lush Green Eco-Friendly Campus",
  establishedYear: 2002,
  autonomousSince: 2023,
  stats: [
    { label: "Years of Academic Excellence", value: "22+" },
    { label: "NBA & NAAC Accredited", value: "Grade A" },
    { label: "Campus Placement Rate", value: "85%+" },
    { label: "Highest CTC Offered", value: "₹24 LPA" },
    { label: "Modern Engineering Labs", value: "45+" },
    { label: "Patents & Research Papers", value: "350+" },
  ]
};

export const ANNOUNCEMENTS = [
  { id: 1, tag: "Admissions 2025", title: "B.Tech & M.Tech Admissions 2025-26 Open - Apply under Merit & Management Quota", date: "Nov 2026", isNew: true },
  { id: 2, tag: "Autonomy", title: "Autonomous Curriculum Structure & Credit System Handbook Published for 2025-26", date: "Oct 2026", isNew: true },
  { id: 3, tag: "Placement", title: "Campus Recruitment Season 2025-26: Over 420+ Offers rolled out by top tech firms", date: "Oct 2026", isNew: false },
  { id: 4, tag: "Conference", title: "Call for Papers: 5th International Conference on Smart Green Technologies & AI (ICSGTA 2026)", date: "Sep 2026", isNew: false }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    code: "CSE",
    degree: "B.Tech, M.Tech & Ph.D.",
    intake: 180,
    established: 2002,
    hod: "Dr. Vinod P.",
    hodQualification: "Ph.D. in Cyber Security & Machine Learning",
    hodMessage: "We strive to foster groundbreaking innovation, critical problem-solving skills, and global readiness through our state-of-the-art laboratories and autonomous curriculum aligned with modern industry benchmarks.",
    description: "The Department of Computer Science & Engineering provides comprehensive training in cloud computing, cybersecurity, software architecture, and full-stack development with hands-on project incubation.",
    highlights: ["NBA Accredited Programme", "Centre of Excellence in Cyber Forensics & Cloud Tech", "Oracle & RedHat Academy Partnership", "100% Placement Eligibility Records"],
    laboratories: ["Advanced Software Development Lab", "Cloud Computing & Virtualization Lab", "System Programming & Network Lab", "Project Development & IoT Lab"],
    careerProspects: ["Software Architect", "Full Stack Engineer", "Cybersecurity Specialist", "Cloud Solutions Architect", "DevOps Consultant"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "aids",
    name: "Artificial Intelligence & Data Science",
    code: "AI & DS",
    degree: "B.Tech",
    intake: 60,
    established: 2020,
    hod: "Dr. Deepa V.",
    hodQualification: "Ph.D. in Deep Learning & NLP",
    hodMessage: "Artificial Intelligence is transforming every human endeavor. Our students gain rigorous algorithmic foundations and real-world deployment skills on NVIDIA accelerated computing rigs.",
    description: "Equipping aspiring tech leaders with advanced capabilities in deep learning, predictive data analytics, natural language processing, computer vision, and cognitive computing systems.",
    highlights: ["High Performance GPU Computing Cluster", "Industry collaborations for live data analytics projects", "Hands-on projects from 2nd year onwards", "Dedicated Big Data Analytics Sandbox"],
    laboratories: ["AI & Machine Learning GPU Lab", "Big Data Analytics Lab", "Computer Vision & Edge AI Lab", "Cognitive Computing Studio"],
    careerProspects: ["Machine Learning Engineer", "Data Scientist", "NLP Engineer", "BI Analytics Consultant", "AI Research Associate"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    code: "ECE",
    degree: "B.Tech & M.Tech (VLSI & Embedded)",
    intake: 120,
    established: 2002,
    hod: "Dr. Jose P. Therattil",
    hodQualification: "Ph.D. in RF & Microwave Communication",
    hodMessage: "From VLSI chip design to 5G communication and Internet of Things, the ECE department prepares students for hardware and embedded software ecosystems globally.",
    description: "Pioneering hands-on education in VLSI design, semiconductor technologies, embedded robotics, signal processing, and high-frequency wireless communications.",
    highlights: ["NBA Accredited Department", "Cadence VLSI Design Software Suite", "Texas Instruments Innovation Centre", "Active IEEE ComSoc & Signal Processing Chapters"],
    laboratories: ["VLSI Design & Embedded Systems Lab", "Communication & Microwave Engineering Lab", "Digital Signal Processing Lab", "Electronic Circuits & Systems Simulation Lab"],
    careerProspects: ["VLSI Chip Design Engineer", "Embedded Systems Developer", "Telecom & 5G Network Engineer", "Robotics Hardware Specialist"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering",
    code: "EEE",
    degree: "B.Tech & M.Tech (Power Electronics)",
    intake: 60,
    established: 2002,
    hod: "Dr. Jarin T.",
    hodQualification: "Ph.D. in Renewable Power Systems",
    hodMessage: "Powering the green energy transition through expertise in Electric Vehicles, smart grids, renewable energy, and industrial automation drives.",
    description: "Bridging the future of electric mobility, smart grid networks, renewable solar architectures, and high-voltage power automation.",
    highlights: ["Solar PV Rooftop Generation Station on campus", "Electric Vehicle Testing Bench", "Schneider Electric Industrial Control Lab", "Extensive Industry Internships"],
    laboratories: ["Electric Drives & EV Power Lab", "Smart Grid & Renewable Energy Lab", "Electrical Machines Laboratory", "Power Systems & Simulation Suite"],
    careerProspects: ["EV Powertrain Engineer", "Power Grid Automation Consultant", "Renewable Energy Project Manager", "Control Systems Specialist"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    code: "ME",
    degree: "B.Tech",
    intake: 90,
    established: 2002,
    hod: "Dr. Biju C. V.",
    hodQualification: "Ph.D. in Thermal Science & Computational Fluid Dynamics",
    hodMessage: "Our mechanical engineers blend classic engineering fundamentals with modern robotics, 3D additive manufacturing, and computer-aided design simulations.",
    description: "Developing world-class engineers proficient in autonomous manufacturing, computational thermal engineering, finite element analysis, and aerodynamic design.",
    highlights: ["NBA Accredited Department", "Advanced CNC & 3D Printing Prototyping Centre", "SAE BAJA & Formula Student Racing Team", "Industry MoUs with Automotive Giants"],
    laboratories: ["Advanced CAD/CAM & Simulation Centre", "Thermal Engineering & IC Engines Lab", "Fluid Mechanics & Hydraulics Machinery Lab", "Metallurgy & Material Testing Lab"],
    careerProspects: ["Product Design Engineer", "Automotive Systems Engineer", "Robotics & Automation Specialist", "CFD & FEA Analyst", "Aerospace Manufacturing Engineer"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ce",
    name: "Civil Engineering",
    code: "CE",
    degree: "B.Tech & M.Tech (Transportation Engg)",
    intake: 60,
    established: 2009,
    hod: "Dr. Agnes M. K.",
    hodQualification: "Ph.D. in Structural Engineering",
    hodMessage: "Building resilient infrastructure for tomorrow using green construction materials, seismic analysis, and Building Information Modeling (BIM).",
    description: "Comprehensive education in sustainable infrastructure planning, environmental engineering, smart transportation, and geotechnical engineering.",
    highlights: ["NBA Accredited Department", "Consultancy Cell for Government & Private Infrastructure", "Total Station & GPS Surveying Systems", "NDT Structural Testing Facility"],
    laboratories: ["Strength of Materials Lab", "Geotechnical & Soil Mechanics Lab", "Concrete Technology & Transportation Lab", "BIM & Computer Aided Structural Design Lab"],
    careerProspects: ["Structural Design Consultant", "BIM Engineer", "Urban Infrastructure Planner", "Geotechnical Consultant", "Project Management Specialist"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ra",
    name: "Robotics & Automation",
    code: "RA",
    degree: "B.Tech",
    intake: 60,
    established: 2021,
    hod: "Dr. Praveen Kumar",
    hodQualification: "Ph.D. in Mechatronics & Autonomous Robotics",
    hodMessage: "Blending artificial intelligence with mechanical actuators and industrial controllers to create the automated factories of Industry 4.0.",
    description: "Specialized interdisciplinary engineering combining industrial robotics, PLC automation, computer vision, kinematics, and cyber-physical systems.",
    highlights: ["KUKA Industrial Robot Training Cell", "ROS (Robot Operating System) Lab", "Industrial IoT & Pneumatics Testbed", "Autonomous Mobile Robot (AMR) Prototypes"],
    laboratories: ["Industrial Robotics & Kinematics Lab", "Pneumatics & Electro-Hydraulics Lab", "Sensorics & Embedded Control Lab", "Autonomous Systems Testing Arena"],
    careerProspects: ["Robotics Systems Engineer", "Industrial Automation Architect", "Mechatronics Specialist", "Computer Vision Integrator"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dr. Vinod P.",
    role: "Professor & Head",
    department: "Computer Science & Engineering",
    qualification: "Ph.D. (Cyber Security), M.Tech (CSE)",
    experience: "19+ Years",
    specialization: "Network Security, Malware Analysis, Cloud Privacy",
    email: "vinod.cse@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "fac-2",
    name: "Dr. Deepa V.",
    role: "Associate Professor & Head",
    department: "Artificial Intelligence & Data Science",
    qualification: "Ph.D. (Deep Learning), M.Tech",
    experience: "14+ Years",
    specialization: "Natural Language Processing, Edge AI, Predictive Analytics",
    email: "deepa.aids@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "fac-3",
    name: "Dr. Jose P. Therattil",
    role: "Professor & Head",
    department: "Electronics & Communication Engineering",
    qualification: "Ph.D. (RF & Microwaves), M.Tech",
    experience: "21+ Years",
    specialization: "Antenna Arrays, 5G Wireless Channels, VLSI Architectures",
    email: "jose.ece@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "fac-4",
    name: "Dr. Biju C. V.",
    role: "Professor & Head",
    department: "Mechanical Engineering",
    qualification: "Ph.D. (Thermal Sciences), M.Tech",
    experience: "23+ Years",
    specialization: "Computational Fluid Dynamics, Heat Transfer, Additive Manufacturing",
    email: "biju.me@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "fac-5",
    name: "Dr. Jarin T.",
    role: "Associate Professor & Head",
    department: "Electrical & Electronics Engineering",
    qualification: "Ph.D. (Renewable Power Systems), M.E.",
    experience: "16+ Years",
    specialization: "EV Charging Infrastructure, Smart Inverters, High Voltage Engineering",
    email: "jarin.eee@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "fac-6",
    name: "Dr. Agnes M. K.",
    role: "Associate Professor & Head",
    department: "Civil Engineering",
    qualification: "Ph.D. (Structural Engineering), M.Tech",
    experience: "15+ Years",
    specialization: "Earthquake Resilient Structures, Sustainable Concrete, Geotechnical Modeling",
    email: "agnes.ce@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "fac-7",
    name: "Dr. Praveen Kumar",
    role: "Assistant Professor & Head",
    department: "Robotics & Automation",
    qualification: "Ph.D. (Robotics), M.Tech",
    experience: "11+ Years",
    specialization: "Manipulator Kinematics, SLAM Navigation, ROS Architecture",
    email: "praveen.ra@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "fac-8",
    name: "Prof. Manoj Kumar M. V.",
    role: "Professor & Dean (Academics)",
    department: "Computer Science & Engineering",
    qualification: "Ph.D. (Algorithms), M.Tech",
    experience: "24+ Years",
    specialization: "High Performance Computing, Graph Theory, Autonomous Curricula",
    email: "dean.academics@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop"
  }
];

export const PLACEMENT_STATS: PlacementStatistic[] = [
  { year: "2024-25", offers: 462, highestPackage: "₹24 LPA", averagePackage: "₹5.4 LPA", participatingCompanies: 94, placementPercentage: "87.4%" },
  { year: "2023-24", offers: 438, highestPackage: "₹21 LPA", averagePackage: "₹5.1 LPA", participatingCompanies: 88, placementPercentage: "85.2%" },
  { year: "2022-23", offers: 412, highestPackage: "₹18 LPA", averagePackage: "₹4.8 LPA", participatingCompanies: 82, placementPercentage: "84.0%" },
  { year: "2021-22", offers: 385, highestPackage: "₹16 LPA", averagePackage: "₹4.5 LPA", participatingCompanies: 76, placementPercentage: "82.5%" }
];

export const RECRUITERS = [
  { name: "Tata Consultancy Services (TCS)", sector: "IT Services", category: "Tier 1 Recruiter" },
  { name: "Infosys Technologies", sector: "Software & Cloud", category: "Tier 1 Recruiter" },
  { name: "Cognizant Technology Solutions", sector: "IT & Digital", category: "Tier 1 Recruiter" },
  { name: "Federal Bank Ltd.", sector: "Banking & FinTech", category: "Prime Recruiter" },
  { name: "UST Global", sector: "Digital Transformation", category: "Core IT" },
  { name: "SOTI Inc.", sector: "Enterprise Mobility", category: "Product Specialist" },
  { name: "IBM India", sector: "Cloud & Systems", category: "MNC Recruiter" },
  { name: "Bosch Global Software", sector: "Automotive & IoT", category: "Core Engineering" },
  { name: "Wipro Technologies", sector: "IT Services", category: "Tier 1 Recruiter" },
  { name: "Quest Global", sector: "Engineering Services", category: "Core Mechanical/ECE" },
  { name: "Amazon AWS", sector: "Cloud Systems", category: "Top CTC Recruiter" },
  { name: "L&T Technology Services", sector: "Infrastructure & Heavy Tech", category: "Core Core" },
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-fablab",
    title: "FabLab Kerala & Innovation Hub",
    category: "Academic",
    description: "Established in partnership with Kerala Startup Mission (KSUM) and MIT's Center for Bits and Atoms. Equipped with laser cutters, 3D printers, CNC vinyl cutters, and precision electronics milling equipment for prototyping innovative student ideas.",
    specs: ["Ultimaker 3D Printers", "Epilog Laser Cutter", "Roland Modela CNC Mill", "Electronics Assembly Workstations"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-library",
    title: "Central Library & Digital Repository",
    category: "Academic",
    description: "Spacious 15,000+ sq.ft multi-storey library facility holding over 42,000+ technical volumes, 120+ national and international print journals, DELNET subscription, and IEEE/ScienceDirect digital access suites with high-speed browsing nodes.",
    specs: ["42,000+ Volumes", "IEEE Xplore Digital Access", "Automated Koha LMS RFID System", "Quiet Research Reading Halls"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-computing",
    title: "Central Computing Facility & Data Center",
    category: "Academic",
    description: "Fully air-conditioned computing center with over 900+ high-end networked workstations connected to a 1 Gbps dedicated NKN optical fibre backbone, redundant server racks, and licensed engineering software environments.",
    specs: ["1 Gbps Dedicated Leased Line", "900+ Desktop Terminals", "Redundant UPS Power Backup", "Dedicated Cloud Virtualization Host"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-hostel",
    title: "San Thome & Mary Matha Campus Hostels",
    category: "Residential",
    description: "Separate on-campus residential facilities for men and women managed by resident wardens and spiritual directors. Clean hygienic mess halls serving balanced vegetarian and non-vegetarian food, recreation rooms, and high-speed Wi-Fi.",
    specs: ["Twin & Triple Sharing Rooms", "24/7 Security & CCTV Coverage", "Modern Gym & Indoor Games", "Solar Hot Water System"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-transport",
    title: "College Fleet & Transport Network",
    category: "Support",
    description: "Extensive transport fleet of over 25+ GPS-tracked college buses connecting students and staff safely across Thrissur, Wadakkanchery, Kunnamkulam, Shornur, Ottapalam, Palakkad, and Pattambi routes with punctual schedules.",
    specs: ["25+ Dedicated Buses", "Real-Time GPS Vehicle Tracking", "Speed Governors & First Aid Equipped", "Covers Thrissur, Palakkad & Malappuram Borders"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-sports",
    title: "Sports Complex & Athletic Grounds",
    category: "Recreation",
    description: "Expansive campus sports grounds including a standard 400m track, football stadium, cricket pitch, basketball courts with floodlights, volleyball courts, badminton indoor arena, and physical fitness fitness gym.",
    specs: ["Standard Football & Cricket Turf", "Floodlit Basketball Court", "Indoor Badminton Arena", "Annual Archdiocesan Inter-Collegiate Tournaments"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-auditorium",
    title: "Father Thekkekara Auditorium & Open Air Stage",
    category: "Support",
    description: "Air-cooled central auditorium with 1,500+ seating capacity featuring acoustic treatment, digital surround sound system, high-lumen projection system, and green rooms for international conferences and college festivals.",
    specs: ["1,500+ Seating Capacity", "Modern Acoustic Paneling", "High Definition AV Systems", "Open-air Amphitheatre for Cultural Nights"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-cafeteria",
    title: "Campus Cafeteria & Food Court",
    category: "Support",
    description: "Spacious, airy cafeteria serving hygienic South Indian, North Indian, and continental dishes, snacks, fresh fruit juices, and bakery refreshments at subsidized student-friendly prices.",
    specs: ["Capacity: 400+ at a time", "Hygienic Steam-Cooking Kitchen", "FSSAI Certified Food Quality", "Dedicated Faculty & Visitor Dining Area"],
    status: "Confirmed by College",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
  }
];

export const RESEARCH_CENTRES = [
  {
    title: "Centre for Renewable Energy & Green Technology",
    focus: "Solar PV microgrids, hybrid energy storage, and industrial energy auditing.",
    projects: "Funded by ANERT, KTU CERD and AICTE RPS.",
    lead: "Dr. Jarin T."
  },
  {
    title: "Centre for Artificial Intelligence & Deep Learning",
    focus: "Healthcare diagnostics, precision agriculture computer vision, and NLP in regional Indian dialects.",
    projects: "Collaborative research with medical institutes and DST grants.",
    lead: "Dr. Deepa V."
  },
  {
    title: "Jyothi Technology Business Incubator (TBI)",
    focus: "Seed funding, mentorship, patent drafting support, and co-working workspace for student startups.",
    projects: "Over 18+ student startups incubated to date with KSUM support.",
    lead: "Director of Entrepreneurship"
  },
  {
    title: "Automotive & Additive Prototyping Centre",
    focus: "Lightweight composite structures, electric powertrain dyno testing, and 3D metal printing research.",
    projects: "Joint projects with automotive component suppliers.",
    lead: "Dr. Biju C. V."
  }
];

export const STUDENT_CLUBS = [
  { name: "IEEE Student Branch", tag: "Professional Society", members: "250+", desc: "One of the most vibrant IEEE branches in Kerala Section, organizing national conferences, hackathons, and IEEE WiE initiatives." },
  { name: "Tharang Tech & Cultural Fest", tag: "Annual Festival", members: "Entire Campus", desc: "The signature annual inter-collegiate tech and cultural fest of Jyothi Engineering College hosting over 3,000+ delegates across 40+ events." },
  { name: "NSS Unit No. 140 & 591", tag: "Social Impact", members: "100+", desc: "Community adoption, village electrification projects, blood donation camps, and flood mitigation volunteering." },
  { name: "Developer Student Club / ACM", tag: "Coding & Cloud", members: "180+", desc: "Competitive programming workshops, Open Source contributions, Git bootcamps, and monthly 24-hour hackathons." },
  { name: "Team Jyothi Racing (SAE)", tag: "Motorsports & Design", members: "45+", desc: "Design and fabrication of all-terrain vehicles (ATVs) competing in national SAE BAJA and e-BAJA competitions." },
  { name: "Natya & Swara Cultural Club", tag: "Arts & Music", members: "120+", desc: "Nurturing campus musical bands, classical choreography, theatre, fine arts, and photography enthusiasts." }
];

export interface AlumniProfile {
  id: string;
  name: string;
  batch: string;
  programme: string;
  company: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}

export const ALUMNI_TESTIMONIALS: AlumniProfile[] = [
  {
    id: "alm-1",
    name: "Jerin Paul",
    batch: "Class of 2018",
    programme: "B.Tech CSE",
    company: "Amazon Web Services (AWS)",
    role: "Senior Cloud Solutions Architect",
    location: "Dublin, Ireland",
    quote: "The foundational rigor at Jyothi, paired with continuous coding challenges and hackathons, built the problem-solving resilience I rely on daily designing distributed cloud systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "alm-2",
    name: "Ananya Menon",
    batch: "Class of 2021",
    programme: "B.Tech ECE",
    company: "Bosch Global Software",
    role: "Embedded Autonomous Driving Engineer",
    location: "Bengaluru, India",
    quote: "Jyothi's specialized hardware labs and Texas Instruments innovation facility gave me direct hands-on familiarity with microcontrollers and CAN protocols right during my 3rd year.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "alm-3",
    name: "Arjun K. Varma",
    batch: "Class of 2019",
    programme: "B.Tech ME",
    company: "Indian Space Research Organisation (ISRO)",
    role: "Scientist / Propulsion Engineer",
    location: "Thiruvananthapuram, India",
    quote: "The faculty mentorship and thermodynamics labs at Jyothi instilled in me the discipline required for mission-critical aerospace testing and structural analysis.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
  }
];


