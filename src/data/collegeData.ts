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

export interface FacultyCareerMilestone {
  year: string;
  role: string;
  institution: string;
  description: string;
  isCurrent?: boolean;
}

export interface FacultyPaper {
  title: string;
  journal: string;
  year: string;
  type: 'IEEE Journal' | 'Springer Scopus' | 'Elsevier' | 'International Conference' | 'National Patent';
  doi?: string;
  citations?: number;
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
  cabin?: string;
  bio?: string;
  skills?: string[];
  careerRoadmap?: FacultyCareerMilestone[];
  publications?: FacultyPaper[];
  coursesTaught?: string[];
  patentCount?: number;
  citationCount?: number;
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
  managedBy: "JCS (Jyothi Consultancy Service)",
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
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    cabin: "Decennial Block, Level 3, Room D-304",
    bio: "Dr. Vinod P. is an eminent cybersecurity researcher and educator with over 19 years of teaching and industrial consultancy. He has authored several high-impact Scopus and IEEE publications on ransomware telemetry and intrusion detection architectures.",
    skills: ["Cyber Security", "Malware Forensics", "Network Protocols", "Python", "Snort IDS", "Cloud Cryptography", "Kernel Security"],
    careerRoadmap: [
      {
        year: "2016 – 2022",
        role: "Associate Professor & Network Research Lead",
        institution: "Christ College (Autonomous)",
        description: "Headed the Advanced Computing & Security Lab, mentored 35+ PG dissertations, and secured state research grants."
      },
      {
        year: "2023 – 2024",
        role: "Associate Professor",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Restructured the autonomous CSE cybersecurity curriculum under KTU autonomy regulations."
      },
      {
        year: "2024 – Current",
        role: "Professor & Head of Department (CSE)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Directing 180-intake department operations, industry hackathons, and Tata Consultancy CoE initiatives.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Deep Sequence Forensics for Zero-Day Ransomware Detection in Heterogeneous Clouds",
        journal: "IEEE Transactions on Information Forensics and Security",
        year: "2024",
        type: "IEEE Journal",
        doi: "10.1109/TIFS.2024.3129841",
        citations: 142
      },
      {
        title: "Adversarial Robustness in IoT Endpoint Traffic Classification Using Graph Neural Networks",
        journal: "Elsevier Computers & Security",
        year: "2023",
        type: "Elsevier",
        doi: "10.1016/j.cose.2023.103194",
        citations: 89
      },
      {
        title: "Autonomous Anomaly Detection in SCADA Protocols for Smart Substation Grids",
        journal: "Springer Lecture Notes in Electrical Engineering (Scopus)",
        year: "2022",
        type: "Springer Scopus",
        doi: "10.1007/978-981-19-4822-1",
        citations: 54
      },
      {
        title: "A Scalable Micro-Firewall Architecture for Edge Computing Gateway Nodes",
        journal: "Indian Patent Office (Granted)",
        year: "2024",
        type: "National Patent",
        doi: "IN-PAT-2024410291"
      }
    ],
    coursesTaught: ["Advanced Cryptography & Network Security", "Compiler Design", "Cloud Infrastructure & Virtualization", "Operating System Kernels"],
    patentCount: 2,
    citationCount: 468
  },
  {
    id: "fac-2",
    name: "Dr. Deepa V.",
    role: "Associate Professor & Head",
    department: "Artificial Intelligence & Data Science",
    qualification: "Ph.D. (Deep Learning), M.Tech (AI)",
    experience: "14+ Years",
    specialization: "Natural Language Processing, Edge AI, Predictive Analytics",
    email: "deepa.aids@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    cabin: "Aryabhata Central Block, Level 2, Room A-212",
    bio: "Dr. Deepa V. specializes in large multimodal transformers and on-device intelligent systems. She coordinates the AI Innovation Studio and guides translational healthcare diagnostics projects with medical institutions.",
    skills: ["Deep Learning", "PyTorch", "HuggingFace Transformers", "Computer Vision", "LLM Fine-Tuning", "Edge TPU Deployment", "MLOps"],
    careerRoadmap: [
      {
        year: "2017 – 2022",
        role: "Assistant Professor & Data Science Mentor",
        institution: "Christ College (Autonomous)",
        description: "Co-founded the Data Science Research Cell and supervised national prize-winning Smart India Hackathon teams."
      },
      {
        year: "2023 – 2024",
        role: "Associate Professor (AI & DS)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Established the GPU High-Performance Compute Cluster for LLM training and student capstone research."
      },
      {
        year: "2024 – Current",
        role: "Associate Professor & Head of Department (AI & DS)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Leading curriculum upgrades in generative AI, agentic workflows, and industry-sponsored AI lab tracks.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Attention-Guided Multi-Scale Vision Transformers for Early Glaucoma Screening",
        journal: "IEEE Journal of Biomedical and Health Informatics",
        year: "2024",
        type: "IEEE Journal",
        doi: "10.1109/JBHI.2024.11902",
        citations: 112
      },
      {
        title: "Quantized Cross-Lingual Transformers for Low-Resource Indic Dialect Processing",
        journal: "Springer Neural Computing and Applications (Scopus)",
        year: "2023",
        type: "Springer Scopus",
        doi: "10.1007/s00521-023-08544-2",
        citations: 78
      },
      {
        title: "Edge-Deployable Hybrid Convolutional Framework for Real-Time Agricultural Drone Imagery",
        journal: "Elsevier Computers and Electronics in Agriculture",
        year: "2023",
        type: "Elsevier",
        doi: "10.1016/j.compag.2023.107821",
        citations: 63
      }
    ],
    coursesTaught: ["Foundations of Deep Learning", "Natural Language Processing", "Reinforcement Learning", "Big Data Analytics"],
    patentCount: 1,
    citationCount: 382
  },
  {
    id: "fac-3",
    name: "Dr. Jose P. Therattil",
    role: "Professor & Head",
    department: "Electronics & Communication Engineering",
    qualification: "Ph.D. (RF & Microwaves), M.Tech (VLSI)",
    experience: "21+ Years",
    specialization: "Antenna Arrays, 5G Wireless Channels, VLSI Architectures",
    email: "jose.ece@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    cabin: "Eastern Tech Wing, Level 1, Room E-108",
    bio: "Dr. Jose P. Therattil possesses over two decades of academic and research leadership in microstrip antennas, microwave circuit synthesis, and high-frequency wireless communications.",
    skills: ["HFSS & CST Studio", "RF Front-End Design", "MIMO Antenna Design", "VLSI CAD Tools", "Spectrum Analyzers", "5G Beamforming"],
    careerRoadmap: [
      {
        year: "2015 – 2022",
        role: "Professor & Head of Electronics Research",
        institution: "Christ College (Autonomous)",
        description: "Directed DST-sponsored RF testing chamber fabrication and executed industry consultancy on microstrip arrays."
      },
      {
        year: "2023 – 2024",
        role: "Professor (ECE)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Formulated autonomous credit pathways for IoT hardware fabrication and advanced VLSI physical design."
      },
      {
        year: "2024 – Current",
        role: "Professor & Head of Department (ECE)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Steering the semi-anechoic testing facility expansion and student participation in IEEE MTT-S challenges.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Compact Tri-Band Slotted Metamaterial Antenna for Sub-6 GHz 5G Handheld Devices",
        journal: "IEEE Antennas and Wireless Propagation Letters",
        year: "2024",
        type: "IEEE Journal",
        doi: "10.1109/LAWP.2024.338129",
        citations: 95
      },
      {
        title: "Reconfigurable Intelligent Surfaces for Millimeter-Wave Urban Non-Line-of-Sight Channels",
        journal: "Elsevier AEU - International Journal of Electronics and Communications",
        year: "2023",
        type: "Elsevier",
        doi: "10.1016/j.aeue.2023.154670",
        citations: 62
      },
      {
        title: "Dual-Polarized Wearable Textile Antenna with Low Specific Absorption Rate for Telemedicine",
        journal: "Indian Patent Office (Published)",
        year: "2023",
        type: "National Patent",
        doi: "IN-PAT-2023410542"
      }
    ],
    coursesTaught: ["Electromagnetic Field Theory", "Microwave & Radar Engineering", "Antenna & Wave Propagation", "CMOS VLSI Design"],
    patentCount: 3,
    citationCount: 512
  },
  {
    id: "fac-4",
    name: "Dr. Biju C. V.",
    role: "Professor & Head",
    department: "Mechanical Engineering",
    qualification: "Ph.D. (Thermal Sciences), M.Tech (Machine Design)",
    experience: "23+ Years",
    specialization: "Computational Fluid Dynamics, Heat Transfer, Additive Manufacturing",
    email: "biju.me@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    cabin: "Mechanical Engineering Complex, Level 1, Room M-102",
    bio: "Dr. Biju C. V. is an esteemed thermal scientist and manufacturing innovator. He oversees Jyothi's Advanced 3D Additive Lab and coordinates industrial thermal auditing for regional manufacturing plants.",
    skills: ["ANSYS Fluent", "CFD Thermal Modeling", "Additive Manufacturing", "SolidWorks", "Finite Element Analysis (FEA)", "Lean Manufacturing"],
    careerRoadmap: [
      {
        year: "2014 – 2022",
        role: "Professor & Mechanical Research Coordinator",
        institution: "Christ College (Autonomous)",
        description: "Supervised 4 completed doctoral scholars and established the Advanced Material Characterization Testing Center."
      },
      {
        year: "2023 – 2024",
        role: "Professor (ME)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Configured industry-partnered micro-machining labs and modern thermal diagnostics coursework."
      },
      {
        year: "2024 – Current",
        role: "Professor & Head of Department (ME)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Spearheading green hydrogen combustion research and electric vehicle powertrain prototyping projects.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Numerical Analysis of Micro-Channel Heat Sinks with Secondary Vortex Generators for High-Power EV Inverters",
        journal: "Elsevier International Journal of Heat and Mass Transfer",
        year: "2024",
        type: "Elsevier",
        doi: "10.1016/j.ijheatmasstransfer.2024.125102",
        citations: 120
      },
      {
        title: "Laser Powder Bed Fusion Additive Optimization of Inconel 718 for Aerospace Turbo-Machinery",
        journal: "Springer Journal of Materials Engineering and Performance (Scopus)",
        year: "2023",
        type: "Springer Scopus",
        doi: "10.1007/s11665-023-08210-4",
        citations: 74
      }
    ],
    coursesTaught: ["Advanced Fluid Mechanics", "Heat & Mass Transfer", "Computational Fluid Dynamics", "Design of Machine Elements"],
    patentCount: 2,
    citationCount: 630
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
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    cabin: "Power Systems Building, Level 2, Room P-205",
    bio: "Dr. Jarin T. leads the campus renewable microgrid project and grid integration studies for distributed solar PV. He provides key technical counsel to regional green energy utilities.",
    skills: ["MATLAB / Simulink", "PowerWorld", "Smart Grid Controllers", "Bidirectional Inverters", "EV Charging Standards", "Microgrid Design"],
    careerRoadmap: [
      {
        year: "2016 – 2022",
        role: "Associate Professor (Power Systems)",
        institution: "Christ College (Autonomous)",
        description: "Supervised high-voltage laboratory tests, rooftop solar installation projects, and energy audit consultations."
      },
      {
        year: "2023 – 2024",
        role: "Associate Professor (EEE)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Architected Jyothi's 100 kW solar farm telemetry and student microgrid simulation rigs."
      },
      {
        year: "2024 – Current",
        role: "Associate Professor & Head of Department (EEE)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Directing autonomous curriculum in e-Mobility, Smart Grid Telemetry, and renewable energy CoE.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Adaptive Virtual Synchronous Generator Control for Stability Enhancement in Solar PV Dominated Microgrids",
        journal: "IEEE Transactions on Sustainable Energy",
        year: "2024",
        type: "IEEE Journal",
        doi: "10.1109/TSTE.2024.3312019",
        citations: 135
      },
      {
        title: "Multi-Port Bidirectional DC-DC Converter Topology with High Voltage Gain for Hybrid Electric Vehicles",
        journal: "Springer Electrical Engineering (Scopus)",
        year: "2023",
        type: "Springer Scopus",
        doi: "10.1007/s00202-023-01890-w",
        citations: 64
      }
    ],
    coursesTaught: ["Power System Analysis", "Smart Grid Technologies", "Power Electronics", "Electric Vehicle Drives"],
    patentCount: 1,
    citationCount: 410
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
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    cabin: "Civil Engineering Pavilion, Level 2, Room C-210",
    bio: "Dr. Agnes M. K. is an authority on seismic retrofitting, green alkali-activated geopolymers, and sustainable construction materials. She directs structural consultancy audits for civic works across central Kerala.",
    skills: ["ETABS & SAP2000", "STAAD Pro", "Geopolymer Synthesis", "Seismic Response Analysis", "Non-Destructive Testing (NDT)", "Geotechnical GIS"],
    careerRoadmap: [
      {
        year: "2017 – 2022",
        role: "Assistant Professor & Structural Consultant",
        institution: "Christ College (Autonomous)",
        description: "Conducted concrete durability studies and led material validation for municipal infrastructure projects."
      },
      {
        year: "2023 – 2024",
        role: "Associate Professor (CE)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Upgraded the Advanced Concrete Technology Lab with digital servo-controlled universal testing machines."
      },
      {
        year: "2024 – Current",
        role: "Associate Professor & Head of Department (CE)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Leading eco-friendly construction research, disaster-resilient building codes, and industry testing services.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Seismic Vulnerability Assessment and Retrofitting of Reinforced Concrete Framed Buildings Using FRP Composites",
        journal: "Elsevier Structures",
        year: "2024",
        type: "Elsevier",
        doi: "10.1016/j.istruc.2024.106214",
        citations: 88
      },
      {
        title: "Performance of Fly Ash-Slag Based Geopolymer Concrete under Aggressive Marine Environments",
        journal: "Springer Construction Materials (Scopus)",
        year: "2023",
        type: "Springer Scopus",
        doi: "10.1007/s43452-023-00712-8",
        citations: 51
      }
    ],
    coursesTaught: ["Design of Reinforced Concrete Structures", "Earthquake Engineering", "Advanced Structural Analysis", "Soil Mechanics"],
    patentCount: 1,
    citationCount: 320
  },
  {
    id: "fac-7",
    name: "Dr. Praveen Kumar",
    role: "Assistant Professor & Head",
    department: "Robotics & Automation",
    qualification: "Ph.D. (Robotics), M.Tech (Mechatronics)",
    experience: "11+ Years",
    specialization: "Manipulator Kinematics, SLAM Navigation, ROS Architecture",
    email: "praveen.ra@jecc.ac.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    cabin: "FabLab Robotic Wing, Ground Floor, Room R-015",
    bio: "Dr. Praveen Kumar is a roboticist with deep expertise in ROS2 middleware, autonomous mobile robots (AMRs), and collaborative robotic arms. He guides Jyothi's prize-winning national robotics competition teams.",
    skills: ["Robot Operating System (ROS / ROS2)", "C++ / Python", "Gazebo Simulator", "LiDAR SLAM", "Industrial Manipulator Kinematics", "Computer Vision OpenCV"],
    careerRoadmap: [
      {
        year: "2018 – 2022",
        role: "Assistant Professor (Mechatronics)",
        institution: "Christ College (Autonomous)",
        description: "Coached university teams in national e-Yantra and Robocon competitions and founded the student Maker Club."
      },
      {
        year: "2023 – 2024",
        role: "Assistant Professor (Robotics & Automation)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Commissioned the 6-Axis KUKA Industrial Robotic Arm and synchronized ROS simulation nodes in the FabLab."
      },
      {
        year: "2024 – Current",
        role: "Assistant Professor & Head of Department (Robotics & Automation)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Directing the state-of-the-art Robotics & Automation department and industrial AMR cobot development contracts.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Robust Real-Time 3D LiDAR SLAM for Autonomous Indoor Logistics Robots in GPS-Denied Environments",
        journal: "IEEE Robotics and Automation Letters (RA-L)",
        year: "2024",
        type: "IEEE Journal",
        doi: "10.1109/LRA.2024.3379201",
        citations: 92
      },
      {
        title: "Kinematic Optimization of 6-DOF Collaborative Robotic Arm for High-Precision Micro-Assembly",
        journal: "Springer Journal of Intelligent & Robotic Systems (Scopus)",
        year: "2023",
        type: "Springer Scopus",
        doi: "10.1007/s10846-023-01901-4",
        citations: 45
      }
    ],
    coursesTaught: ["Robotic Manipulator Kinematics & Dynamics", "Robot Operating System (ROS)", "Autonomous Mobile Robotics", "Industrial Mechatronics"],
    patentCount: 2,
    citationCount: 290
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
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    cabin: "Administrative Secretariat, Level 1, Room AD-101",
    bio: "Prof. Manoj Kumar M. V. is a veteran academic leader and computer scientist who has guided Jyothi's academic governance framework, NBA Tier-1 accreditations, and UGC Autonomous curriculum design.",
    skills: ["Combinatorial Algorithms", "Distributed Computing", "Academic Accreditation (NBA/NAAC)", "Institutional Governance", "Parallel Programming OpenMP/MPI"],
    careerRoadmap: [
      {
        year: "2012 – 2022",
        role: "Senior Professor & Academic Council Member",
        institution: "Christ College (Autonomous)",
        description: "Framed autonomous credit-based curriculum guidelines and chaired institutional academic oversight boards."
      },
      {
        year: "2023 – 2024",
        role: "Professor & Dean (Academics)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Authored Jyothi's Autonomous Regulations 2024, credit choice-based system, and interdisciplinary minor pathways."
      },
      {
        year: "2024 – Current",
        role: "Professor & Dean (Academics)",
        institution: "Jyothi Engineering College (Autonomous)",
        description: "Steering university-wide academic excellence, research grants evaluation, and global academic MoUs.",
        isCurrent: true
      }
    ],
    publications: [
      {
        title: "Approximation Bounds for Distributed Vertex Cover in Dynamic Large-Scale Social and Sensor Graphs",
        journal: "Elsevier Journal of Parallel and Distributed Computing",
        year: "2024",
        type: "Elsevier",
        doi: "10.1016/j.jpdc.2024.104882",
        citations: 165
      },
      {
        title: "Framework for Outcome-Based Learning Outcomes Analytics Using Graph Neural Architectures",
        journal: "IEEE Transactions on Learning Technologies",
        year: "2023",
        type: "IEEE Journal",
        doi: "10.1109/TLT.2023.3289012",
        citations: 104
      }
    ],
    coursesTaught: ["Design & Analysis of Algorithms", "Advanced Graph Theory", "Distributed Computing Systems", "Theory of Computation"],
    patentCount: 2,
    citationCount: 780
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
  { name: "L&T Technology Services", sector: "Infrastructure & Heavy Tech", category: "Core Engineering" },
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
    description: "Expansive campus sports grounds including a standard 400m track, football stadium, cricket pitch, basketball courts with floodlights, volleyball courts, badminton indoor arena, and physical fitness gym.",
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
  { name: "IEEE Student Branch", tag: "Technical Society", members: "250+", image: "/assets/club_ieee.jpg", desc: "A vibrant student branch of IEEE fostering technical excellence, research interest, and professional growth." },
  { name: "Tharang Tech & Cultural Fest", tag: "Tech & Cultural Fest", members: "Entire Campus", image: "/assets/club_tharang.jpg", desc: "Jyothi's annual national fest that brings together technology, creativity, and cultural talent." },
  { name: "NSS Unit No. 140 & 591", tag: "Social Outreach", members: "100+", image: "/assets/club_nss.jpg", desc: "The college's NSS units that drive meaningful community service and social responsibility initiatives." },
  { name: "Developer Student Club / ACM", tag: "Coding Collective", members: "180+", image: "/assets/club_coding.jpg", desc: "A student-led community for aspiring developers to build, learn, and collaborate on real-world tech projects." },
  { name: "Team Jyothi Racing (SAE)", tag: "Student Racing", members: "45+", image: "/assets/club_racing.jpg", desc: "The college's student racing team that designs, builds, and competes with a formula-style vehicle under SAE." },
  { name: "Natya & Swara Cultural Club", tag: "Cultural Club", members: "120+", image: "/assets/club_natya.jpg", desc: "A space for students to explore and showcase their talent in dance, music, and the performing arts." }
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


