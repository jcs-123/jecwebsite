export interface CommitteeMember {
  name: string;
  role: string;
  designation: string;
  organization: string;
  category: 'Management' | 'UGC Nominee' | 'State Govt Nominee' | 'University Nominee' | 'Industry Stalwart' | 'Academic Expert' | 'Faculty' | 'Alumni';
  image?: string;
  bio?: string;
  statutoryTerm?: string;
  qualifications?: string;
}

export interface BoardOfStudiesStream {
  id: string;
  deptName: string;
  code: string;
  chairman: string;
  membersCount: number;
  universityNominee: string;
  industryExpert: string;
  academicExperts: string[];
  alumniRepresentative: string;
  keyInnovations: string[];
  syllabusDocSize: string;
}

export interface AcademicRegulationItem {
  id: string;
  code: string;
  title: string;
  targetDegree: string;
  effectiveYear: string;
  highlights: string[];
  creditTotal: string;
  gradingScale: string;
  pdfUrl?: string;
}

export interface CalendarEvent {
  date: string;
  title: string;
  category: 'Academic' | 'Exam' | 'Holiday' | 'Cultural' | 'Audit';
  description: string;
  status: 'Upcoming' | 'Active' | 'Completed';
}

export interface SemesterSchedule {
  semester: string;
  period: string;
  events: CalendarEvent[];
}

export const GOVERNING_BODY_MEMBERS: CommitteeMember[] = [
  {
    name: "Mar Andrews Thazhath",
    role: "Patron & President",
    designation: "Archbishop of Trichur",
    organization: "Catholic Archdiocese of Trichur",
    category: "Management",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=500&auto=format&fit=crop",
    bio: "Mar Andrews Thazhath provides visionary spiritual and developmental stewardship to Jyothi Engineering College. Under his benevolent leadership, Jyothi expanded into an autonomous engineering beacon with world-class FabLab facilities, ethical education, and substantial scholarship grants.",
    statutoryTerm: "Permanent Trustee & Patron",
    qualifications: "Doctorate in Canon Law (DCL), Pontifical Oriental Institute, Rome"
  },
  {
    name: "Msgr. Jose Konikkara",
    role: "Manager & Vice President",
    designation: "Vicar General",
    organization: "Catholic Archdiocese of Trichur",
    category: "Management",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    bio: "Msgr. Jose Konikkara coordinates institutional operations, administrative policies, and student-centric welfare initiatives across the 30-acre Cheruthuruthy campus.",
    statutoryTerm: "Trust Nominee (2023–2027)",
    qualifications: "Licentiate in Philosophy & Sacred Theology"
  },
  {
    name: "Dr. K. K. Babu",
    role: "Principal & Member Secretary",
    designation: "Principal",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    bio: "Dr. K. K. Babu is a veteran academic leader and mechanical scientist who steered Jyothi through UGC Autonomy, NBA Tier-1 accreditations, and modern outcome-based curriculum governance.",
    statutoryTerm: "Ex-Officio Member Secretary",
    qualifications: "Ph.D. in Mechanical Sciences, M.Tech"
  },
  {
    name: "Prof. (Dr.) Sudhir K. Jain",
    role: "UGC Nominee",
    designation: "Former Director IITGN & Vice Chancellor",
    organization: "University Grants Commission (UGC) Appointee",
    category: "UGC Nominee",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    bio: "Eminent earthquake engineering scientist and former IIT Director nominated by the University Grants Commission to guide autonomous academic policies, national curriculum benchmarking, and faculty research grants.",
    statutoryTerm: "UGC Statutory Appointee (2024–2027)",
    qualifications: "Ph.D., California Institute of Technology (Caltech), USA"
  },
  {
    name: "Dr. C. P. Sunil Kumar",
    role: "State Government Nominee",
    designation: "Joint Director of Technical Education",
    organization: "Government of Kerala",
    category: "State Govt Nominee",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
    bio: "Represents the Higher Education Department of Kerala, ensuring seamless synergy with state technological initiatives, scholarship welfare disbursements, and AICTE compliance.",
    statutoryTerm: "Government Appointee (2024–2027)",
    qualifications: "Ph.D. in Engineering, Directorate of Technical Education"
  },
  {
    name: "Dr. S. Radhakrishnan",
    role: "University Nominee",
    designation: "Dean (Academic Affairs)",
    organization: "APJ Abdul Kalam Technological University (KTU)",
    category: "University Nominee",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    bio: "Directs university academic standards, curriculum equivalence, autonomous credit transfers, and external moderation oversight for APJ KTU.",
    statutoryTerm: "University Nominee (2024–2027)",
    qualifications: "Ph.D., Dean of Academic Affairs, KTU"
  },
  {
    name: "Er. George Mathew",
    role: "Industry Stalwart Member",
    designation: "Senior Vice President & Chief Delivery Officer",
    organization: "Tata Consultancy Services (TCS)",
    category: "Industry Stalwart",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
    bio: "Senior technology executive guiding Jyothi's corporate collaboration, industry-ready electives in cloud architectures, and campus placement acceleration.",
    statutoryTerm: "Industry Nominee (2024–2027)",
    qualifications: "B.Tech, Senior VP at Tata Consultancy Services"
  },
  {
    name: "Fr. Thomas Kakkassery",
    role: "Executive Manager",
    designation: "Director of Administration",
    organization: "Jyothi Engineering College",
    category: "Management",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
    bio: "Manages infrastructural expansion, green campus initiatives, student hostels, and statutory regulatory filings.",
    statutoryTerm: "Management Trustee",
    qualifications: "MBA in Higher Educational Administration"
  },
  {
    name: "Prof. Manoj Kumar M. V.",
    role: "Senior Faculty Nominee",
    designation: "Dean (Academics) & Professor",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500&auto=format&fit=crop",
    bio: "Chief architect of Jyothi's Choice-Based Credit System (CBCS), autonomous regulation ordinance R-2024, and outcome-based educational analytics.",
    statutoryTerm: "Faculty Representative (2024–2026)",
    qualifications: "Ph.D. in Computer Science & Engineering"
  },
  {
    name: "Dr. Vinod P.",
    role: "Senior Faculty Nominee",
    designation: "Head of Computer Science & Engineering",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
    bio: "Leading cybersecurity scientist supervising department academic councils, AI innovation centers, and collaborative corporate MoUs.",
    statutoryTerm: "Faculty Representative (2024–2026)",
    qualifications: "Ph.D. in Cyber Security & Network Forensics"
  }
];

export const ACADEMIC_COUNCIL_MEMBERS: CommitteeMember[] = [
  {
    name: "Dr. K. K. Babu",
    role: "Chairman",
    designation: "Principal",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Prof. Manoj Kumar M. V.",
    role: "Member Secretary",
    designation: "Dean (Academics) & Professor (CSE)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Dr. Deepa V.",
    role: "BoS Chairperson (AI & DS)",
    designation: "Associate Professor & Head (AI & DS)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Dr. Jose P. Therattil",
    role: "BoS Chairman (ECE)",
    designation: "Professor & Head (ECE)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Dr. Biju C. V.",
    role: "BoS Chairman (ME)",
    designation: "Professor & Head (ME)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Dr. Jarin T.",
    role: "BoS Chairman (EEE)",
    designation: "Associate Professor & Head (EEE)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Dr. Agnes M. K.",
    role: "BoS Chairperson (CE)",
    designation: "Associate Professor & Head (CE)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Dr. Praveen Kumar",
    role: "BoS Chairman (RA)",
    designation: "Assistant Professor & Head (RA)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Dr. Shaju K. Y.",
    role: "BoS Chairman (BSH)",
    designation: "Professor & Head (Basic Sciences & Humanities)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Prof. (Dr.) B. Premlet",
    role: "University Expert Nominee",
    designation: "Professor in Physics & Materials Science",
    organization: "APJ Abdul Kalam Technological University",
    category: "University Nominee"
  },
  {
    name: "Dr. K. Balaveera Reddy",
    role: "External Academic Expert",
    designation: "Former Vice Chancellor VTU & Academic Leader",
    organization: "Eminent Academic Council Nominee",
    category: "Academic Expert"
  },
  {
    name: "Adv. Paulson C. Varghese",
    role: "Legal & Regulatory Expert",
    designation: "Senior Advocate & Legal Counsel",
    organization: "High Court of Kerala",
    category: "Academic Expert"
  }
];

export const FINANCE_COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    name: "Dr. K. K. Babu",
    role: "Chairman",
    designation: "Principal",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Fr. Thomas Kakkassery",
    role: "Finance Officer & Manager",
    designation: "Director of Administration & Financial Controller",
    organization: "Jyothi Engineering College",
    category: "Management"
  },
  {
    name: "CA. V. M. Varghese, FCA",
    role: "Senior Financial Advisor",
    designation: "Chartered Accountant & Statutory Auditor",
    organization: "V. M. Varghese & Associates, Chartered Accountants",
    category: "Academic Expert"
  },
  {
    name: "Prof. Manoj Kumar M. V.",
    role: "Senior Academic Member",
    designation: "Dean (Academics)",
    organization: "Jyothi Engineering College (Autonomous)",
    category: "Faculty"
  },
  {
    name: "Er. K. R. Harikrishnan",
    role: "University Nominee (Finance)",
    designation: "Finance Officer Appointee",
    organization: "APJ Abdul Kalam Technological University",
    category: "University Nominee"
  }
];

export const BOS_STREAMS: BoardOfStudiesStream[] = [
  {
    id: "bos-cse",
    deptName: "Computer Science & Engineering",
    code: "CSE",
    chairman: "Dr. Vinod P. (Professor & Head)",
    membersCount: 14,
    universityNominee: "Dr. Santhosh Kumar (Professor, CUSAT)",
    industryExpert: "Er. Jerin Paul (Senior Cloud Architect, AWS)",
    academicExperts: ["Dr. Preethi P. (NIT Calicut)", "Dr. K. A. Abdul Nazeer (NIT Calicut)"],
    alumniRepresentative: "Er. Vivek Menon (Tech Lead, Google)",
    keyInnovations: [
      "Integrated Generative AI & LLM Engineering Electives from S5",
      "Compulsory Hands-On DevSecOps & Cloud Labs",
      "Full Semester Industrial Capstone Internship in S8"
    ],
    syllabusDocSize: "2.4 MB PDF"
  },
  {
    id: "bos-aids",
    deptName: "Artificial Intelligence & Data Science",
    code: "AI&DS",
    chairman: "Dr. Deepa V. (Associate Professor & Head)",
    membersCount: 12,
    universityNominee: "Dr. Elizabeth Sherly (IIITM-K)",
    industryExpert: "Er. Sreeraj M. (Director of AI, Bosch Global)",
    academicExperts: ["Dr. C. Mala (NIT Trichy)", "Dr. S. Sivasankar (IIT Madras)"],
    alumniRepresentative: "Er. Riya Joseph (Data Scientist, Microsoft)",
    keyInnovations: [
      "Edge AI on Embedded TPUs & NVIDIA Jetson Nano",
      "Autonomous Mobile Robot Perception & Multi-Modal Vision",
      "Healthcare Informatics & Genomic Data Analysis"
    ],
    syllabusDocSize: "2.1 MB PDF"
  },
  {
    id: "bos-ece",
    deptName: "Electronics & Communication Engineering",
    code: "ECE",
    chairman: "Dr. Jose P. Therattil (Professor & Head)",
    membersCount: 13,
    universityNominee: "Dr. B. Yamuna (Anna University)",
    industryExpert: "Er. Ananya Menon (Autonomous Driving Engineer, Bosch)",
    academicExperts: ["Dr. P. C. Subramaniam (NIT Calicut)", "Dr. C. K. Aanandan (CUSAT)"],
    alumniRepresentative: "Er. Gautham Krishna (Intel Labs)",
    keyInnovations: [
      "5G Sub-6GHz Beamforming & Metamaterial Antenna Design",
      "RISC-V Architecture Physical ASIC Synthesis",
      "Electric Vehicle Battery Management System (BMS) Telemetry"
    ],
    syllabusDocSize: "2.3 MB PDF"
  },
  {
    id: "bos-ra",
    deptName: "Robotics & Automation",
    code: "RA",
    chairman: "Dr. Praveen Kumar (Assistant Professor & Head)",
    membersCount: 11,
    universityNominee: "Dr. Asokan T. (IIT Madras)",
    industryExpert: "Er. Rajesh Nair (Principal Scientist, KUKA Robotics)",
    academicExperts: ["Dr. V. N. Sanjeevan (IIT Palakkad)", "Dr. Ramesh Babu (NIT Calicut)"],
    alumniRepresentative: "Er. Nikhil Das (Robotics Engineer, GreyOrange)",
    keyInnovations: [
      "Direct ROS2 MiddleWare & Gazebo Swarm Simulation Rigs",
      "Industrial Collaborative Robotics (Cobots) & PLC SCADA",
      "Autonomous Drone Navigation in GPS-Denied Environments"
    ],
    syllabusDocSize: "1.9 MB PDF"
  },
  {
    id: "bos-me",
    deptName: "Mechanical Engineering",
    code: "ME",
    chairman: "Dr. Biju C. V. (Professor & Head)",
    membersCount: 12,
    universityNominee: "Dr. K. A. Shafi (NIT Calicut)",
    industryExpert: "Er. Arjun K. Varma (Propulsion Scientist, ISRO)",
    academicExperts: ["Dr. S. Jayaraj (NIT Calicut)", "Dr. M. S. Shunmugam (IIT Madras)"],
    alumniRepresentative: "Er. Tony George (Tata Advanced Systems)",
    keyInnovations: [
      "Powder Bed Fusion 3D Metal Additive Manufacturing",
      "Computational Fluid Dynamics for Green Hydrogen Fuel Cells",
      "Electric Powertrain Dynamics & Crashworthiness Simulation"
    ],
    syllabusDocSize: "2.0 MB PDF"
  },
  {
    id: "bos-eee",
    deptName: "Electrical & Electronics Engineering",
    code: "EEE",
    chairman: "Dr. Jarin T. (Associate Professor & Head)",
    membersCount: 12,
    universityNominee: "Dr. S. Ashok (NIT Calicut)",
    industryExpert: "Er. Pramod Kumar (Chief Technology Engineer, KSEB)",
    academicExperts: ["Dr. B. Jayanand (GEC Thrissur)", "Dr. G. Uma (Anna University)"],
    alumniRepresentative: "Er. Deepthi Nair (Schneider Electric)",
    keyInnovations: [
      "100 kW Rooftop Microgrid SCADA & Power Electronics",
      "EV Fast-Charging Bidirectional Inverter Topologies",
      "Smart Metering & IoT Grid Resiliency"
    ],
    syllabusDocSize: "1.8 MB PDF"
  },
  {
    id: "bos-ce",
    deptName: "Civil Engineering",
    code: "CE",
    chairman: "Dr. Agnes M. K. (Associate Professor & Head)",
    membersCount: 11,
    universityNominee: "Dr. K. P. Ramaswamy (IIT Palakkad)",
    industryExpert: "Er. Paul Mathew (Chief Structural Consultant, L&T)",
    academicExperts: ["Dr. P. R. Sreemahadevan Pillai (Former Dean KTU)", "Dr. S. Chandrakaran (NIT Calicut)"],
    alumniRepresentative: "Er. Albin Varghese (Afcons Infrastructure)",
    keyInnovations: [
      "Geopolymer Green Concrete Carbon-Offset Mix Designs",
      "Earthquake Seismic Non-Linear Pushover Analysis with ETABS",
      "Building Information Modeling (BIM) with Revit & Drone GIS"
    ],
    syllabusDocSize: "1.7 MB PDF"
  }
];

export const AUTONOMOUS_REGULATIONS: AcademicRegulationItem[] = [
  {
    id: "reg-btech-2024",
    code: "JEC-UG-R2024",
    title: "Autonomous B.Tech Degree Regulations (2024 Scheme)",
    targetDegree: "Bachelor of Technology (B.Tech)",
    effectiveYear: "2024–25 Onwards",
    creditTotal: "160 Credits (Regular) / 180 Credits (Honours / Minor)",
    gradingScale: "10-Point Absolute Letter Grading Scale (O, A+, A, B+, B, C, P, F)",
    highlights: [
      "Choice-Based Credit System (CBCS) allowing students to take up to 24 credits of interdisciplinary electives.",
      "Provision for B.Tech Honours and B.Tech Minor by completing 20 additional credits across Semesters 4 to 8.",
      "Mandatory 6-month full-time Industry Internship or Startup Incubation in Semester 8 with remote credits.",
      "Relative continuous internal evaluation: 40% Continuous Internal Assessment (CIE) and 60% End Semester Exam (ESE).",
      "Grace marks awarded for participation in Smart India Hackathon, sports national championships, and IEEE conferences."
    ]
  },
  {
    id: "reg-mtech-2024",
    code: "JEC-PG-R2024",
    title: "Autonomous M.Tech Degree Regulations (2024 Scheme)",
    targetDegree: "Master of Technology (M.Tech)",
    effectiveYear: "2024–25 Onwards",
    creditTotal: "68 Credits (4 Semesters)",
    gradingScale: "10-Point CGPA Scale with Distinction threshold at 8.0 CGPA",
    highlights: [
      "Industry-sponsored specialization tracks in Cyber Security, AI & Robotics, and Industrial Automation.",
      "Year-long Phase-1 and Phase-2 Master's Thesis research with mandatory Scopus / IEEE conference publication.",
      "Flexible evening and hybrid lecture schedules tailored for sponsored working professionals."
    ]
  },
  {
    id: "reg-phd-research",
    code: "JEC-DOC-R2024",
    title: "Autonomous Doctoral (Ph.D.) Research Directives",
    targetDegree: "Doctor of Philosophy (Ph.D.)",
    effectiveYear: "2024–25 Onwards",
    creditTotal: "16 Coursework Credits + Comprehensive Viva + Doctoral Dissertation",
    gradingScale: "Satisfactory / Highly Commended Research Evaluation",
    highlights: [
      "Full institutional fellowship of ₹25,000/month for meritorious full-time doctoral scholars.",
      "Access to MIT-affiliated FabLab Kerala, high-performance GPU cluster, and DST-funded testing rigs.",
      "Mandatory minimum of two peer-reviewed SCI/Scopus-Q1 journal publications prior to synopsis submission."
    ]
  }
];

export const ACADEMIC_CALENDAR_SEMESTERS: SemesterSchedule[] = [
  {
    semester: "Monsoon Semester (Odd Semesters: S1, S3, S5, S7)",
    period: "August 2025 – January 2026",
    events: [
      {
        date: "01 Aug 2025",
        title: "Commencement of Classes for S3, S5, S7",
        category: "Academic",
        description: "Orientation, syllabus distribution, and course registration under autonomous regulations.",
        status: "Completed"
      },
      {
        date: "18 Aug 2025",
        title: "Commencement of Classes for First Year (S1)",
        category: "Academic",
        description: "Induction ceremony, Deeksharambh student orientation, and mentor allotment.",
        status: "Completed"
      },
      {
        date: "15 Sep – 20 Sep 2025",
        title: "Continuous Internal Evaluation - 1 (CIE-1)",
        category: "Exam",
        description: "First internal assessment examinations across all 7 autonomous engineering branches.",
        status: "Completed"
      },
      {
        date: "10 Oct – 12 Oct 2025",
        title: "Tharang National Tech-Cultural Fiesta",
        category: "Cultural",
        description: "Signature South India engineering hackathon, robotic combats, and cultural exhibits.",
        status: "Completed"
      },
      {
        date: "03 Nov – 08 Nov 2025",
        title: "Continuous Internal Evaluation - 2 (CIE-2)",
        category: "Exam",
        description: "Second internal assessment exams and evaluation of lab records.",
        status: "Active"
      },
      {
        date: "25 Nov 2025",
        title: "Last Instructional Day & Attendance Audit",
        category: "Audit",
        description: "Publication of internal assessment marks and final condonation scrutiny.",
        status: "Upcoming"
      },
      {
        date: "01 Dec – 08 Dec 2025",
        title: "Autonomous Practical & Viva-Voce Examinations",
        category: "Exam",
        description: "Laboratory practical exams with external examiners from premier institutes.",
        status: "Upcoming"
      },
      {
        date: "15 Dec 2025 – 05 Jan 2026",
        title: "End Semester Autonomous Theory Examinations (ESE)",
        category: "Exam",
        description: "Final written examinations under Autonomous Examination Controller supervision.",
        status: "Upcoming"
      },
      {
        date: "22 Jan 2026",
        title: "Declaration of Autonomous Results",
        category: "Academic",
        description: "Online publication of digital grade cards within 20 days of exam completion.",
        status: "Upcoming"
      }
    ]
  },
  {
    semester: "Spring Semester (Even Semesters: S2, S4, S6, S8)",
    period: "February 2026 – June 2026",
    events: [
      {
        date: "02 Feb 2026",
        title: "Commencement of Even Semester Classes",
        category: "Academic",
        description: "Course registration for open electives and commencement of S8 industrial internship.",
        status: "Upcoming"
      },
      {
        date: "16 Mar – 21 Mar 2026",
        title: "Continuous Internal Evaluation - 1 (CIE-1)",
        category: "Exam",
        description: "First internal assessments for all even semesters.",
        status: "Upcoming"
      },
      {
        date: "10 Apr – 12 Apr 2026",
        title: "Jyothi Annual Athletic Sports Meet",
        category: "Cultural",
        description: "Inter-department track and field sports competition at the college athletic stadium.",
        status: "Upcoming"
      },
      {
        date: "27 Apr – 02 May 2026",
        title: "Continuous Internal Evaluation - 2 (CIE-2)",
        category: "Exam",
        description: "Second internal exams and S8 capstone project viva evaluation.",
        status: "Upcoming"
      },
      {
        date: "18 May – 06 Jun 2026",
        title: "Autonomous End Semester Theory Examinations",
        category: "Exam",
        description: "Even semester university-grade autonomous exams.",
        status: "Upcoming"
      },
      {
        date: "25 Jun 2026",
        title: "Declaration of Results & Summer Internship Window",
        category: "Academic",
        description: "Digital grade sheets published; commencement of corporate summer internships.",
        status: "Upcoming"
      }
    ]
  }
];

