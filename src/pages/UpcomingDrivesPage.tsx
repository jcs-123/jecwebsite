import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Briefcase,
  MapPin,
  CheckCircle2,
  Users,
  ArrowRight,
  Search,
  Phone,
  Mail,
  Info,
  Laptop,
  Layers,
  Landmark,
  Clock,
  FileText,
  Filter,
  X,
  Sparkles,
  ChevronRight,
  Download,
  AlertCircle,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

export type DriveFormat = 'On-campus drives' | 'Virtual drives' | 'Pooled drives';
export type DriveStatus = 'Registration Open' | 'Shortlisting in Progress' | 'Upcoming / Announced';

export interface PlacementDrive {
  id: string;
  company: string;
  badge: string;
  badgeColor?: string;
  role: string;
  ctc: string;
  ctcNum: number; // for sorting
  date: string;
  dateSort: string;
  month: 'Dec 2026' | 'Jan 2027' | 'Feb 2027';
  registrationDeadline: string;
  deadlineTimestamp: string;
  eligibleBranches: string[];
  minCgpa: string;
  venue: string;
  mode: DriveFormat;
  status: DriveStatus;
  rounds: string[];
  roundsDetail: { name: string; duration: string; topics: string }[];
  jobDescription: string;
  stipend?: string;
  notes?: string;
  coordinator: {
    faculty: string;
    student: string;
    phone: string;
    email: string;
  };
}

const UPCOMING_DRIVES: PlacementDrive[] = [
  {
    id: 'drive-1',
    company: 'Tata Consultancy Services (TCS)',
    badge: 'Tier 1 Flagship',
    role: 'TCS Digital, Prime & Ninja Specialists',
    ctc: '₹7.0 LPA – ₹9.0 LPA',
    ctcNum: 9.0,
    date: 'Dec 12 – Dec 14, 2026',
    dateSort: '2026-12-12',
    month: 'Dec 2026',
    registrationDeadline: 'Nov 30, 2026 (5:00 PM)',
    deadlineTimestamp: '2026-11-30',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE', 'EEE', 'ME'],
    minCgpa: '6.5 CGPA (No active backlogs)',
    venue: 'Central Computing Facility (CCF) Labs 1–4',
    mode: 'On-campus drives',
    status: 'Registration Open',
    rounds: ['Online Cognitive & Coding Test', 'Domain Technical PI', 'Managerial & HR Discussion'],
    roundsDetail: [
      { name: 'Online Cognitive & Advanced Coding', duration: '90 mins', topics: 'Numerical Ability, Verbal Reasoning, Data Structures & Algorithms' },
      { name: 'Technical Personal Interview', duration: '40 mins', topics: 'Core CS Fundamentals, DBMS, OOP, Project Architecture & Live Code Review' },
      { name: 'Managerial & HR Interaction', duration: '20 mins', topics: 'Cultural alignment, adaptability, project leadership & role preferences' },
    ],
    jobDescription:
      'TCS flagship hiring for high-growth digital transformation engineering roles across cloud platforms, enterprise AI, modern full-stack development, and IoT infrastructure systems.',
    stipend: '₹35,000/mo during internship training',
    notes: 'Mandatory registered TCS NextStep DT ID required prior to reporting.',
    coordinator: {
      faculty: 'Prof. Jinesh K. J. (PAT Dept)',
      student: 'Rohit Menon (B.Tech CSE)',
      phone: '+91 94471 23456',
      email: 'pat.tcs@jecc.ac.in',
    },
  },
  {
    id: 'drive-2',
    company: 'Bosch Global Software Technologies (BGSW)',
    badge: 'Core Automotive & Silicon',
    role: 'Embedded Systems & ECU Firmware Trainee',
    ctc: '₹9.5 LPA – ₹14.2 LPA (Super Dream)',
    ctcNum: 14.2,
    date: 'Jan 08 – Jan 09, 2027',
    dateSort: '2027-01-08',
    month: 'Jan 2027',
    registrationDeadline: 'Dec 20, 2026',
    deadlineTimestamp: '2026-12-20',
    eligibleBranches: ['ECE', 'EEE', 'Mechatronics', 'CSE'],
    minCgpa: '7.5 CGPA (Consistent 70% in 10th & 12th)',
    venue: 'Decennial Hall & Department Interview Cabins',
    mode: 'On-campus drives',
    status: 'Shortlisting in Progress',
    rounds: ['C/C++ & Embedded Hardware Test', 'System Architecture & Debugging PI', 'HR Behavioural Evaluation'],
    roundsDetail: [
      { name: 'Embedded C & RTOS Test', duration: '75 mins', topics: 'Bitwise logic, pointers, microcontroller architecture, CAN/LIN protocols' },
      { name: 'Hardware System Debugging PI', duration: '45 mins', topics: 'Schematic review, oscilloscope debugging, RTOS scheduler concepts' },
      { name: 'HR & Behavioural Panel', duration: '25 mins', topics: 'Mobility mindset, automotive innovation vision, team dynamics' },
    ],
    jobDescription:
      'Design and deploy next-generation Electronic Control Units (ECUs), automotive middleware, AUTOSAR compliant software stacks, and IoT telemetry for global electric and hybrid vehicles.',
    stipend: '₹40,000/mo pre-employment stipend',
    notes: 'Prior exposure to Texas Instruments LaunchPad or CAN bus telemetry preferred.',
    coordinator: {
      faculty: 'Dr. Praveen Kumar (ECE Dept)',
      student: 'Ananya S. (B.Tech ECE)',
      phone: '+91 94472 34567',
      email: 'bosch.drives@jecc.ac.in',
    },
  },
  {
    id: 'drive-3',
    company: 'Cognizant Technology Solutions',
    badge: 'Tier 1 Digital',
    role: 'GenC Elevate & GenC Next Developers',
    ctc: '₹6.5 LPA – ₹8.5 LPA',
    ctcNum: 8.5,
    date: 'Dec 22, 2026',
    dateSort: '2026-12-22',
    month: 'Dec 2026',
    registrationDeadline: 'Dec 05, 2026',
    deadlineTimestamp: '2026-12-05',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE', 'EEE', 'ME', 'CE'],
    minCgpa: '6.0 CGPA (Up to 1 standing backlog allowed)',
    venue: 'Proctored Online Coding Portal (CCF Lab 5)',
    mode: 'Virtual drives',
    status: 'Registration Open',
    rounds: ['Skill-Based Algorithmic Hackathon', 'Virtual Technical Discussion', 'HR Onboarding Interaction'],
    roundsDetail: [
      { name: 'Algorithmic Hackathon', duration: '120 mins', topics: '2 Coding problems (Java/Python/C++), SQL queries, Aptitude' },
      { name: 'Virtual Technical Discussion', duration: '35 mins', topics: 'Data structures, RESTful web services, cloud fundamentals' },
      { name: 'HR Verification', duration: '15 mins', topics: 'Document verification and location preference' },
    ],
    jobDescription:
      'Enterprise cloud solutions, microservices development, AI/ML engineering, and modern DevOps automated pipelines across healthcare, banking, and retail domains.',
    stipend: '₹28,000/mo for fast-track trainees',
    coordinator: {
      faculty: 'Prof. Bindu V. (CSE)',
      student: 'Kiran Raj (B.Tech AI & DS)',
      phone: '+91 94473 45678',
      email: 'cognizant.lead@jecc.ac.in',
    },
  },
  {
    id: 'drive-4',
    company: 'Federal Bank Ltd.',
    badge: 'Prime FinTech Partner',
    role: 'Probationary IT Officer & Cyber Defense Associate',
    ctc: '₹12.5 LPA (Super Dream)',
    ctcNum: 12.5,
    date: 'Jan 15, 2027',
    dateSort: '2027-01-15',
    month: 'Jan 2027',
    registrationDeadline: 'Dec 28, 2026',
    deadlineTimestamp: '2026-12-28',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE'],
    minCgpa: '7.0 CGPA (60% minimum in 10th & 12th)',
    venue: 'Main Auditorium & Executive Boardroom',
    mode: 'On-campus drives',
    status: 'Registration Open',
    rounds: ['Aptitude & Psychometric Battery', 'Group Discussion (FinTech Topics)', 'Executive Board Interview'],
    roundsDetail: [
      { name: 'FinTech Aptitude & Security Battery', duration: '90 mins', topics: 'Quantitative reasoning, data interpretation, cybersecurity awareness' },
      { name: 'Group Discussion Round', duration: '30 mins', topics: 'Digital banking innovation, AI in fraud detection, UPI economics' },
      { name: 'Executive Panel PI', duration: '40 mins', topics: 'System security, cloud resilience, ethical conduct in banking IT' },
    ],
    jobDescription:
      'Architect resilient Core Banking Solutions (CBS), implement Zero-Trust threat mitigation, optimize microservice transactions, and protect mission-critical retail payments.',
    notes: 'Dress code: Strictly corporate formal business attire.',
    coordinator: {
      faculty: 'Prof. Thomas George (PAT Cell)',
      student: 'Meera Nair (B.Tech CSE)',
      phone: '+91 94474 56789',
      email: 'federalbank.pat@jecc.ac.in',
    },
  },
  {
    id: 'drive-5',
    company: 'Infosys Technologies Ltd.',
    badge: 'Tier 1 Recruiter',
    role: 'Power Programmer & Digital Specialist Engineer (DSE)',
    ctc: '₹6.5 LPA – ₹9.5 LPA',
    ctcNum: 9.5,
    date: 'Jan 22, 2027',
    dateSort: '2027-01-22',
    month: 'Jan 2027',
    registrationDeadline: 'Jan 10, 2027',
    deadlineTimestamp: '2027-01-10',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE', 'EEE'],
    minCgpa: '6.5 CGPA',
    venue: 'Central Computing Facility Labs (Pooled Venue)',
    mode: 'Pooled drives',
    status: 'Upcoming / Announced',
    rounds: ['InfyTQ / HackWithInfy Challenge', 'Advanced Technical Round', 'HR Verification'],
    roundsDetail: [
      { name: 'HackWithInfy Coding Assessment', duration: '180 mins', topics: 'Dynamic Programming, Graph algorithms, Greedy approaches' },
      { name: 'System Design & Code Interview', duration: '45 mins', topics: 'Scalable system architecture, databases, OOP principles' },
      { name: 'HR Briefing', duration: '15 mins', topics: 'Role allotment and training roadmap at Infosys Mysore Campus' },
    ],
    jobDescription:
      'High-velocity code development, AI orchestration, cloud engineering, and enterprise platform integration for global Fortune 500 enterprises.',
    coordinator: {
      faculty: 'Prof. Manoj M. (PAT Officer)',
      student: 'Abhiram V. (B.Tech ECE)',
      phone: '+91 94475 67890',
      email: 'infosys.pooled@jecc.ac.in',
    },
  },
  {
    id: 'drive-6',
    company: 'L&T Technology Services (LTTS)',
    badge: 'Core Infrastructure & Heavy Tech',
    role: 'Graduate Engineer Trainee (GET) - Structural & Power',
    ctc: '₹5.5 LPA – ₹7.2 LPA',
    ctcNum: 7.2,
    date: 'Feb 04, 2027',
    dateSort: '2027-02-04',
    month: 'Feb 2027',
    registrationDeadline: 'Jan 18, 2027',
    deadlineTimestamp: '2027-01-18',
    eligibleBranches: ['ME', 'CE', 'EEE', 'Mechatronics'],
    minCgpa: '6.75 CGPA (No active backlogs)',
    venue: 'Mechanical Engineering Block Seminar Hall',
    mode: 'On-campus drives',
    status: 'Upcoming / Announced',
    rounds: ['Domain Technical Written Assessment', 'CAD/Structural Modeling Round', 'Technical & HR Panel'],
    roundsDetail: [
      { name: 'Core Domain Written Exam', duration: '60 mins', topics: 'Strength of Materials, Thermodynamics / Power Systems / Structural Analysis' },
      { name: 'Practical CAD / Simulation Test', duration: '45 mins', topics: 'SolidWorks/AutoCAD component modeling or MATLAB electrical simulation' },
      { name: 'Technical & HR PI', duration: '35 mins', topics: 'Industrial project presentation, willingness to work in on-site engineering plants' },
    ],
    jobDescription:
      'Core engineering design for smart infrastructure, green hydrogen power grids, heavy industrial robotics, and aerospace component manufacturing.',
    coordinator: {
      faculty: 'Dr. Biju P. L. (ME Dept)',
      student: 'Gokul Krishna (B.Tech ME)',
      phone: '+91 94476 78901',
      email: 'ltts.core@jecc.ac.in',
    },
  },
  {
    id: 'drive-7',
    company: 'SOTI Inc.',
    badge: 'Product Leader',
    role: 'Enterprise Mobility Software Engineer',
    ctc: '₹11.0 LPA (Dream Tier)',
    ctcNum: 11.0,
    date: 'Feb 12, 2027',
    dateSort: '2027-02-12',
    month: 'Feb 2027',
    registrationDeadline: 'Jan 25, 2027',
    deadlineTimestamp: '2027-01-25',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE'],
    minCgpa: '7.0 CGPA',
    venue: 'Advanced Software Lab & FabLab Kerala',
    mode: 'On-campus drives',
    status: 'Upcoming / Announced',
    rounds: ['6-Hour Rapid Software Hackathon', 'Code Review & Complexity Analysis', 'Director-Level Interview'],
    roundsDetail: [
      { name: 'Rapid Product Hackathon', duration: '360 mins', topics: 'Build full working desktop/mobile prototype from product spec' },
      { name: 'Deep Code Architecture Review', duration: '45 mins', topics: 'Memory leaks, concurrency, design patterns, clean code' },
      { name: 'Leadership & Director Round', duration: '30 mins', topics: 'Product vision, problem-solving passion, culture fit' },
    ],
    jobDescription:
      'Develop SOTI MobiControl and Enterprise Mobility Management (EMM) architectures powering millions of rugged IoT devices and enterprise smartphones worldwide.',
    notes: 'Shortlisted candidates receive pre-placement mentorship sessions with SOTI senior architects.',
    coordinator: {
      faculty: 'Prof. Fredy Thomas (CSE)',
      student: 'Sreehari P. (B.Tech CSE)',
      phone: '+91 94477 89012',
      email: 'soti.campus@jecc.ac.in',
    },
  },
  {
    id: 'drive-8',
    company: 'Quest Global Engineering',
    badge: 'Aerospace & Mechanical Design',
    role: 'Aerospace Systems & Structural Design Trainee',
    ctc: '₹5.0 LPA – ₹6.5 LPA',
    ctcNum: 6.5,
    date: 'Feb 20, 2027',
    dateSort: '2027-02-20',
    month: 'Feb 2027',
    registrationDeadline: 'Feb 05, 2027',
    deadlineTimestamp: '2027-02-05',
    eligibleBranches: ['ME', 'Mechatronics', 'ECE'],
    minCgpa: '6.5 CGPA',
    venue: 'CAD/CAM Simulation Suite',
    mode: 'On-campus drives',
    status: 'Upcoming / Announced',
    rounds: ['Aptitude & SolidWorks/CATIA Test', 'Technical PI', 'HR Round'],
    roundsDetail: [
      { name: 'Aerospace Aptitude & Design Test', duration: '75 mins', topics: 'Engineering mechanics, materials science, 3D parametric CAD modeling' },
      { name: 'Technical Viva & Portfolio Review', duration: '35 mins', topics: 'Solid mechanics, tolerance analysis, GD&T standards' },
      { name: 'HR Fitment Round', duration: '20 mins', topics: 'Global client communication, compliance, relocations' },
    ],
    jobDescription:
      'Participate in aircraft gas turbine engineering, structural FEA stress simulations, avionics wiring harness design, and next-generation aero component testing.',
    coordinator: {
      faculty: 'Prof. Praveen Raj (ME)',
      student: 'Vivek M. (B.Tech Mechatronics)',
      phone: '+91 94478 90123',
      email: 'quest.drives@jecc.ac.in',
    },
  },
  {
    id: 'drive-9',
    company: 'UST Global',
    badge: 'Tier 1 Digital Engineering',
    role: 'Associate Software Developer (Cloud & AI)',
    ctc: '₹5.5 LPA – ₹7.5 LPA',
    ctcNum: 7.5,
    date: 'Dec 18, 2026',
    dateSort: '2026-12-18',
    month: 'Dec 2026',
    registrationDeadline: 'Dec 02, 2026',
    deadlineTimestamp: '2026-12-02',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE', 'EEE'],
    minCgpa: '6.2 CGPA',
    venue: 'Virtual Proctored Assessment Suite',
    mode: 'Virtual drives',
    status: 'Registration Open',
    rounds: ['Online Cognitive & Coding Test', 'Virtual Technical Panel', 'HR Onboarding Interview'],
    roundsDetail: [
      { name: 'Online Coding & Logic', duration: '90 mins', topics: 'Python/Java code snippets, OOP, SQL database questions' },
      { name: 'Virtual Technical Discussion', duration: '35 mins', topics: 'Web frameworks, Git workflows, database design' },
      { name: 'HR Discussion', duration: '15 mins', topics: 'Teamwork, communication, training timelines' },
    ],
    jobDescription:
      'Build scalable web applications, deploy microservices on AWS/Azure, write automated test cases, and participate in enterprise product lifecycle engineering.',
    coordinator: {
      faculty: 'Prof. Divya R. (CSE)',
      student: 'Arjun K. (B.Tech AI & DS)',
      phone: '+91 94479 01234',
      email: 'ust.pat@jecc.ac.in',
    },
  },
  {
    id: 'drive-10',
    company: 'Amazon AWS Support',
    badge: 'Super Dream Global Cloud',
    role: 'Cloud Support Associate & SysOps Engineer',
    ctc: '₹14.0 LPA – ₹18.0 LPA (Super Dream)',
    ctcNum: 18.0,
    date: 'Jan 28, 2027',
    dateSort: '2027-01-28',
    month: 'Jan 2027',
    registrationDeadline: 'Jan 12, 2027',
    deadlineTimestamp: '2027-01-12',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE', 'EEE'],
    minCgpa: '7.5 CGPA (No backlogs)',
    venue: 'Inter-College Pooled Testing Hub',
    mode: 'Pooled drives',
    status: 'Upcoming / Announced',
    rounds: ['Online Diagnostic Assessment', 'Technical Deep Dive PI 1 & 2', 'Amazon Bar Raiser Round'],
    roundsDetail: [
      { name: 'AWS Diagnostic Exam', duration: '90 mins', topics: 'Linux OS internals, networking (TCP/IP, DNS, routing), basic Python/Bash scripting' },
      { name: 'Technical Deep Dive Rounds (2 stages)', duration: '90 mins', topics: 'Troubleshooting live server outages, OSI stack, storage, kernel diagnostics' },
      { name: 'Amazon Bar Raiser Interview', duration: '45 mins', topics: 'Leadership principles (Customer Obsession, Ownership, Bias for Action)' },
    ],
    jobDescription:
      'Provide mission-critical architectural support and operational troubleshooting for global enterprise AWS customers deploying hyper-scale cloud applications.',
    notes: 'Candidates must possess strong Linux terminal fluency and basic understanding of TCP/IP networking.',
    coordinator: {
      faculty: 'Dr. Swapna Kumar (HoD CSE)',
      student: 'Naveen Prakash (B.Tech CSE)',
      phone: '+91 94480 12345',
      email: 'aws.pooled@jecc.ac.in',
    },
  },
  {
    id: 'drive-11',
    company: 'Experion Technologies',
    badge: 'Product Engineering Studio',
    role: 'Full Stack Product Engineer',
    ctc: '₹6.0 LPA – ₹8.0 LPA',
    ctcNum: 8.0,
    date: 'Jan 18, 2027',
    dateSort: '2027-01-18',
    month: 'Jan 2027',
    registrationDeadline: 'Jan 04, 2027',
    deadlineTimestamp: '2027-01-04',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE'],
    minCgpa: '6.5 CGPA',
    venue: 'Experion Remote Interview Portal',
    mode: 'Virtual drives',
    status: 'Shortlisting in Progress',
    rounds: ['Online Assessment', 'Technical Architecture Interview', 'Culture Fit & HR'],
    roundsDetail: [
      { name: 'Full-Stack Code Challenge', duration: '90 mins', topics: 'Frontend/Backend integration, database queries, algorithmic puzzles' },
      { name: 'Architecture & Live Coding PI', duration: '40 mins', topics: 'React / Node.js or Java Spring Boot architecture, API design' },
      { name: 'Culture Fit & Offer Discussion', duration: '20 mins', topics: 'Continuous learning, agile delivery, team collaboration' },
    ],
    jobDescription:
      'Craft modern SaaS software solutions for international healthcare, supply chain, and retail enterprises leveraging cloud-native architectures.',
    coordinator: {
      faculty: 'Prof. Reshma K. (CSE)',
      student: 'Siddharth M. (B.Tech CSE)',
      phone: '+91 94481 23456',
      email: 'experion.pat@jecc.ac.in',
    },
  },
  {
    id: 'drive-12',
    company: 'IBS Software',
    badge: 'Aviation & Hospitality Tech',
    role: 'Associate Software Engineer (Java / Cloud)',
    ctc: '₹5.5 LPA – ₹7.0 LPA',
    ctcNum: 7.0,
    date: 'Jan 25, 2027',
    dateSort: '2027-01-25',
    month: 'Jan 2027',
    registrationDeadline: 'Jan 08, 2027',
    deadlineTimestamp: '2027-01-08',
    eligibleBranches: ['CSE', 'AI & DS', 'ECE', 'EEE'],
    minCgpa: '6.5 CGPA',
    venue: 'Decennial Hall & CCF Lab 3',
    mode: 'On-campus drives',
    status: 'Shortlisting in Progress',
    rounds: ['Aptitude & Technical MCQ', 'Live Programming Round', 'Technical & HR Interview'],
    roundsDetail: [
      { name: 'Core Aptitude & Tech MCQ', duration: '60 mins', topics: 'Logical reasoning, Java fundamentals, SQL basics' },
      { name: 'Live Coding on Hackerrank', duration: '60 mins', topics: 'Problem-solving, edge cases handling, algorithmic efficiency' },
      { name: 'Final Technical & HR Panel', duration: '35 mins', topics: 'Project walkthrough, airline domain concepts, communication' },
    ],
    jobDescription:
      'Engineer mission-critical passenger service systems, flight operations software, and cargo logistics engines used by top international airlines worldwide.',
    coordinator: {
      faculty: 'Prof. Unnikrishnan P. (CSE)',
      student: 'Deepa V. (B.Tech ECE)',
      phone: '+91 94482 34567',
      email: 'ibs.drives@jecc.ac.in',
    },
  },
  {
    id: 'drive-13',
    company: 'Hexaware Technologies',
    badge: 'Tier 1 Digital & AI Ops',
    role: 'Graduate Engineer Trainee - Cloud & Automation',
    ctc: '₹5.0 LPA – ₹6.5 LPA',
    ctcNum: 6.5,
    date: 'Feb 08, 2027',
    dateSort: '2027-02-08',
    month: 'Feb 2027',
    registrationDeadline: 'Jan 22, 2027',
    deadlineTimestamp: '2027-01-22',
    eligibleBranches: ['All Engineering Branches'],
    minCgpa: '6.0 CGPA',
    venue: 'Proctored Virtual Platform',
    mode: 'Virtual drives',
    status: 'Upcoming / Announced',
    rounds: ['Domain Aptitude & Spoken English Test', 'Technical Interview', 'HR Round'],
    roundsDetail: [
      { name: 'Aptitude & Versant Communication', duration: '75 mins', topics: 'English fluency, reading, listening comprehension, quant' },
      { name: 'Technical Fundamentals PI', duration: '30 mins', topics: 'Basics of coding in C/Java/Python, DBMS, OS concepts' },
      { name: 'HR Discussion', duration: '15 mins', topics: 'Workplace readiness, 24/7 client support shift flexibility' },
    ],
    jobDescription:
      'Cloud operations support, robotic process automation (RPA), data ingestion pipelines, and quality engineering automation across global clients.',
    coordinator: {
      faculty: 'Prof. Geetha C. (PAT)',
      student: 'Rahul Nair (B.Tech ME)',
      phone: '+91 94483 45678',
      email: 'hexaware.pat@jecc.ac.in',
    },
  },
  {
    id: 'drive-14',
    company: 'MRF Tyres & Rubber Ltd.',
    badge: 'Core Manufacturing Titan',
    role: 'Plant Engineer Trainee (PET) - Production & Maintenance',
    ctc: '₹5.8 LPA – ₹7.0 LPA',
    ctcNum: 7.0,
    date: 'Feb 16, 2027',
    dateSort: '2027-02-16',
    month: 'Feb 2027',
    registrationDeadline: 'Jan 30, 2027',
    deadlineTimestamp: '2027-01-30',
    eligibleBranches: ['ME', 'EEE', 'CE', 'Mechatronics'],
    minCgpa: '6.5 CGPA (First class in 10th & 12th)',
    venue: 'Mechanical Seminar Hall & Main Boardroom',
    mode: 'On-campus drives',
    status: 'Upcoming / Announced',
    rounds: ['Core Technical Written Exam', 'Group Discussion', 'Plant Director Technical PI'],
    roundsDetail: [
      { name: 'Core Mechanical & Electrical Exam', duration: '60 mins', topics: 'Hydraulics, pneumatics, machinery maintenance, PLC logic' },
      { name: 'Industrial Group Discussion', duration: '25 mins', topics: 'Lean manufacturing, safety protocols, energy efficiency in plants' },
      { name: 'Director Technical & HR PI', duration: '35 mins', topics: 'Plant environment fitness, mechanical drawings, technical passion' },
    ],
    jobDescription:
      'Oversee high-precision automated vulcanizing machinery, plant utilities, predictive maintenance sensors, and industrial safety in MRF mega-plants.',
    coordinator: {
      faculty: 'Prof. Christy V. Vazhappilly (ME)',
      student: 'Akhil Raj (B.Tech ME)',
      phone: '+91 94484 56789',
      email: 'mrf.campus@jecc.ac.in',
    },
  },
];

const GUIDELINES = [
  {
    title: 'Strict Formal Dress Code',
    desc: 'All candidates must report in official college placement formals (formal shirt, formal trousers, formal leather shoes, and college ID card badge worn prominently). Casual footwear or jeans are strictly prohibited.',
  },
  {
    title: 'One-Student-One-Offer Policy',
    desc: 'Once a candidate secures a placement offer, they become eligible only for "Dream" (1.5x salary) or "Super Dream" (2.5x salary / > ₹10 LPA) recruitment drives, ensuring maximum batch placement parity.',
  },
  {
    title: 'Punctuality & Reporting Time',
    desc: 'Students must report to the assigned venue at least 30 minutes before the Pre-Placement Talk (PPT). Latecomers will not be admitted into the evaluation halls under any circumstances.',
  },
  {
    title: 'Required Documentation Kit',
    desc: 'Carry 3 copies of updated and verified resumes, 4 recent passport-size photographs, and photocopies of marksheets (10th, 12th, and all completed B.Tech semesters).',
  },
];

export const UpcomingDrivesPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filters & State
  const [filterMode, setFilterMode] = useState<DriveFormat | 'All'>('All');
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedBranch, setSelectedBranch] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'ctc' | 'deadline'>('date');
  const [viewMode, setViewMode] = useState<'cards' | 'calendar'>('cards');
  const [selectedMonth, setSelectedMonth] = useState<'All' | 'Dec 2026' | 'Jan 2027' | 'Feb 2027'>('All');

  // Selected Drive for Modal
  const [modalDrive, setModalDrive] = useState<PlacementDrive | null>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [registrationSuccess, setRegistrationSuccess] = useState<string | null>(null);
  const [studentRegNo, setStudentRegNo] = useState<string>('');
  const [studentBranch, setStudentBranch] = useState<string>('CSE');

  // Status Tabs
  const statusTabs = ['All', 'Registration Open', 'Shortlisting in Progress', 'Upcoming / Announced'];

  // All branches for dropdown
  const allBranches = ['All', 'CSE', 'AI & DS', 'ECE', 'EEE', 'ME', 'CE', 'Mechatronics'];

  // Filtered & Sorted Drives
  const filteredDrives = useMemo(() => {
    return UPCOMING_DRIVES.filter((drive) => {
      // Format Filter
      if (filterMode !== 'All' && drive.mode !== filterMode) return false;

      // Status Filter
      if (activeTab !== 'All' && drive.status !== activeTab) return false;

      // Branch Filter
      if (selectedBranch !== 'All') {
        const matchesBranch = drive.eligibleBranches.some(
          (b) => b === 'All Engineering Branches' || b.toLowerCase().includes(selectedBranch.toLowerCase())
        );
        if (!matchesBranch) return false;
      }

      // Month Filter (for calendar or general view)
      if (selectedMonth !== 'All' && drive.month !== selectedMonth) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesCompany = drive.company.toLowerCase().includes(q);
        const matchesRole = drive.role.toLowerCase().includes(q);
        const matchesBranch = drive.eligibleBranches.some((b) => b.toLowerCase().includes(q));
        const matchesVenue = drive.venue.toLowerCase().includes(q);
        if (!matchesCompany && !matchesRole && !matchesBranch && !matchesVenue) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'ctc') {
        return b.ctcNum - a.ctcNum;
      }
      if (sortBy === 'deadline') {
        return a.deadlineTimestamp.localeCompare(b.deadlineTimestamp);
      }
      return a.dateSort.localeCompare(b.dateSort);
    });
  }, [filterMode, activeTab, selectedBranch, selectedMonth, searchQuery, sortBy]);

  // Counts by format
  const onCampusCount = UPCOMING_DRIVES.filter((d) => d.mode === 'On-campus drives').length;
  const virtualCount = UPCOMING_DRIVES.filter((d) => d.mode === 'Virtual drives').length;
  const pooledCount = UPCOMING_DRIVES.filter((d) => d.mode === 'Pooled drives').length;

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentRegNo) return;
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setRegistrationSuccess(
        `Registration confirmed for ${modalDrive?.company}! Your Hall Ticket Token has been generated: JECC-PAT-${Math.floor(
          100000 + Math.random() * 900000
        )}. Please check your student portal email.`
      );
    }, 800);
  };

  const handleOpenModal = (drive: PlacementDrive) => {
    setModalDrive(drive);
    setRegistrationSuccess(null);
    setStudentRegNo('');
  };

  const clearAllFilters = () => {
    setFilterMode('All');
    setActiveTab('All');
    setSelectedBranch('All');
    setSelectedMonth('All');
    setSearchQuery('');
    setSortBy('date');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A] scroll-smooth">
      {/* 1. Sub Navigation Bar matching theme */}
      <PlacementsSubNav activeRoute="upcoming-drives" onNavigate={onNavigate} />

      {/* 2. HERO SECTION: PREMIUM EDITORIAL SPLIT SHOWCASE (EXACT PIXEL MATCH TO MOCKUP) */}
      <section className="relative w-full pt-4 sm:pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Eyebrow, Main Headline, Subtitle, Description, Action Buttons */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 relative">
              <RevealBlock direction="up">
                {/* Eyebrow flanked by horizontal gold rules */}
                <div className="flex items-center gap-3">
                  <span className="h-[1.5px] w-8 sm:w-12 bg-[#BD8E36]" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#BD8E36]">
                    CAMPUS PLACEMENT CALENDAR
                  </span>
                  <span className="h-[1.5px] w-8 sm:w-12 bg-[#BD8E36]" />
                </div>
              </RevealBlock>

              <RevealBlock direction="up" delay={80}>
                {/* Serif Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.08] tracking-tight">
                  Your next opportunity<br />
                  <span className="italic font-normal text-[#BD8E36]">
                    starts here.
                  </span>
                </h1>
              </RevealBlock>

              <RevealBlock direction="up" delay={140}>
                {/* Subtitle & Description */}
                <div className="space-y-2">
                  <h2 className="text-lg sm:text-xl font-bold text-[#28052B] tracking-tight">
                    Upcoming Placement Drives &amp; Recruitment Schedules
                  </h2>
                  <p className="text-sm sm:text-base text-[#4A384F]/85 leading-relaxed max-w-lg font-normal">
                    Explore on-campus, virtual and pooled recruitment opportunities.
                  </p>
                </div>
              </RevealBlock>

              {/* Action Buttons */}
              <RevealBlock direction="up" delay={200}>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => scrollToSection('drives-schedule')}
                    className="px-6 sm:px-7 py-3 rounded-full bg-[#C59B4E] hover:bg-[#B3893C] text-[#28052B] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer group"
                  >
                    <span>View Drive Schedules</span>
                    <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onNavigate('corporate-recruiters')}
                    className="px-6 sm:px-7 py-3 rounded-full bg-transparent hover:bg-white/80 text-[#28052B] border-[1.5px] border-[#28052B] font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>Browse Recruiters</span>
                  </button>
                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Organic Curved Visual with Arched Plum Ribbon and Calendar Badge */}
            <div className="lg:col-span-6 relative">
              <RevealBlock direction="right" delay={150}>
                <div className="relative pt-4 sm:pt-6">
                  {/* Architectural Plum Ribbon hugging top-left curve */}
                  <div className="absolute top-0 left-12 sm:left-20 right-16 sm:right-28 h-10 sm:h-12 bg-[#28052B] rounded-t-[100px] -z-0 opacity-95 pointer-events-none transform -rotate-1" />

                  {/* Organic Curved Container matching mockup shape */}
                  <div className="relative z-10 rounded-tl-[70px] sm:rounded-tl-[120px] rounded-tr-[36px] sm:rounded-tr-[54px] rounded-br-[36px] sm:rounded-br-[54px] rounded-bl-[44px] sm:rounded-bl-[74px] overflow-hidden border-[1.5px] border-[#DFC06A] shadow-2xl bg-[#28052B]/5 group">
                    <img
                      src="/assets/upcoming_drives_hero.jpg"
                      alt="Upcoming campus placement drives and student preparation at Jyothi Engineering College"
                      className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle warm amber/plum vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#28052B]/35 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Glassmorphism Calendar Card at Bottom Right */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#E7D6C1] shadow-xl rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-2.5 sm:py-3.5 flex items-center gap-3 sm:gap-3.5 z-20">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#28052B] shrink-0">
                        <Calendar className="w-5 h-5 text-[#28052B]" />
                      </div>
                      <span className="h-7 w-[1.5px] bg-[#E7D6C1] shrink-0 inline-block" />
                      <div className="text-left">
                        <div className="font-bold text-xs sm:text-sm text-[#28052B] leading-tight font-['Playfair_Display',serif]">
                          Placement Calendar
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#4A384F]/75 mt-0.5 font-medium">
                          Explore upcoming opportunities
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PLACEMENT AT A GLANCE (METRICS STRIP MATCHING MOCKUP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <RevealBlock direction="up">
          <div className="bg-white rounded-3xl border border-[#E7D6C1] p-6 sm:p-7 shadow-xs relative">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E7D6C1] items-center">
              
              {/* Col 1: Label & Illustrative figures */}
              <div className="col-span-2 md:col-span-1 pr-0 md:pr-4 pb-4 md:pb-0 border-b md:border-b-0 border-[#E7D6C1]">
                <h3 className="font-['Playfair_Display',serif] font-bold text-lg sm:text-xl text-[#28052B] leading-snug">
                  Placement at a glance
                </h3>
                <div className="text-[11px] text-[#4A384F]/60 italic font-medium mt-1">
                  Illustrative figures
                </div>
              </div>

              {/* Col 2: 14+ Drive opportunities */}
              <div className="px-2 md:px-5 py-2 md:py-0 border-r md:border-r-0 border-[#E7D6C1]">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#28052B] leading-none">
                  14+
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-[#4A384F] mt-1.5 leading-tight">
                  Drive opportunities
                </div>
              </div>

              {/* Col 3: 4 Registration windows */}
              <div className="px-2 md:px-5 py-2 md:py-0">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#28052B] leading-none">
                  4
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-[#4A384F] mt-1.5 leading-tight">
                  Registration windows
                </div>
              </div>

              {/* Col 4: ₹14.2 LPA Top CTC */}
              <div className="px-2 md:px-5 pt-4 md:pt-0 border-t md:border-t-0 border-r md:border-r-0 border-[#E7D6C1]">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#28052B] leading-none">
                  ₹14.2 LPA
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-[#4A384F] mt-1.5 leading-tight">
                  Top CTC
                </div>
              </div>

              {/* Col 5: 100% Digital drive tracking */}
              <div className="px-2 md:px-5 pt-4 md:pt-0 border-t md:border-t-0 border-[#E7D6C1]">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#28052B] leading-none">
                  100%
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-[#4A384F] mt-1.5 leading-tight">
                  Digital drive tracking
                </div>
              </div>

            </div>
          </div>
        </RevealBlock>
      </section>

      {/* 4. EXPLORE DRIVE FORMATS (CATEGORY QUICK ACTIONS MATCHING MOCKUP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 space-y-4">
        {/* Header row with Title, Hairline Divider, and Right Action */}
        <RevealBlock direction="up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7D6C1] pb-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
              Explore drive formats
            </h2>
            <button
              onClick={() => {
                setFilterMode('All');
                scrollToSection('drives-schedule');
              }}
              className="text-xs sm:text-sm font-bold text-[#28052B] hover:text-[#BD8E36] transition-colors inline-flex items-center gap-1 group cursor-pointer self-start sm:self-auto"
            >
              <span>View all schedules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#BD8E36]" />
            </button>
          </div>
        </RevealBlock>

        {/* 3 Format Cards Matching Mockup */}
        <RevealBlock direction="up" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-1">
            {/* Card 1: On-campus drives */}
            <button
              onClick={() => {
                setFilterMode(filterMode === 'On-campus drives' ? 'All' : 'On-campus drives');
                scrollToSection('drives-schedule');
              }}
              className={`bg-white rounded-2xl border p-4 sm:p-5 transition-all flex items-center justify-between group cursor-pointer text-left ${
                filterMode === 'On-campus drives'
                  ? 'border-[#28052B] ring-2 ring-[#28052B]/15 shadow-md bg-amber-50/15'
                  : 'border-[#E7D6C1] hover:border-[#DFC06A] shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#28052B] group-hover:scale-105 transition-transform shrink-0">
                  <Landmark className="w-5 h-5 text-[#28052B]" />
                </div>
                <span className="h-5 w-[1px] bg-[#E7D6C1] shrink-0" />
                <span className="text-sm sm:text-base font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                  On-campus drives
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#BD8E36] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* Card 2: Virtual drives */}
            <button
              onClick={() => {
                setFilterMode(filterMode === 'Virtual drives' ? 'All' : 'Virtual drives');
                scrollToSection('drives-schedule');
              }}
              className={`bg-white rounded-2xl border p-4 sm:p-5 transition-all flex items-center justify-between group cursor-pointer text-left ${
                filterMode === 'Virtual drives'
                  ? 'border-[#28052B] ring-2 ring-[#28052B]/15 shadow-md bg-amber-50/15'
                  : 'border-[#E7D6C1] hover:border-[#DFC06A] shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#28052B] group-hover:scale-105 transition-transform shrink-0">
                  <Laptop className="w-5 h-5 text-[#28052B]" />
                </div>
                <span className="h-5 w-[1px] bg-[#E7D6C1] shrink-0" />
                <span className="text-sm sm:text-base font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                  Virtual drives
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#BD8E36] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* Card 3: Pooled drives */}
            <button
              onClick={() => {
                setFilterMode(filterMode === 'Pooled drives' ? 'All' : 'Pooled drives');
                scrollToSection('drives-schedule');
              }}
              className={`bg-white rounded-2xl border p-4 sm:p-5 transition-all flex items-center justify-between group cursor-pointer text-left ${
                filterMode === 'Pooled drives'
                  ? 'border-[#28052B] ring-2 ring-[#28052B]/15 shadow-md bg-amber-50/15'
                  : 'border-[#E7D6C1] hover:border-[#DFC06A] shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#28052B] group-hover:scale-105 transition-transform shrink-0">
                  <Layers className="w-5 h-5 text-[#28052B]" />
                </div>
                <span className="h-5 w-[1px] bg-[#E7D6C1] shrink-0" />
                <span className="text-sm sm:text-base font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                  Pooled drives
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#BD8E36] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </RevealBlock>
      </section>

      {/* 4. Live Schedule & Comprehensive Filter Section */}
      <section id="drives-schedule" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-6">
        {/* Title & Search / View Switcher Header */}
        <RevealBlock direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD8E36]">
                  Live Recruitment Calendar
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
                Scheduled Campus Drives
              </h2>
              <p className="text-xs sm:text-sm text-[#4A384F]/80">
                Review eligibility criteria, dates, interview venues, and application deadlines.
              </p>
            </div>

            {/* Quick Search + View Mode Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              {/* View Mode Switcher */}
              <div className="bg-white p-1 rounded-xl border border-[#E7D6C1] flex items-center shadow-2xs">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === 'cards'
                      ? 'bg-[#28052B] text-white shadow-xs'
                      : 'text-[#28052B] hover:text-[#BD8E36]'
                  }`}
                >
                  Card View
                </button>
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === 'calendar'
                      ? 'bg-[#28052B] text-white shadow-xs'
                      : 'text-[#28052B] hover:text-[#BD8E36]'
                  }`}
                >
                  Timeline View
                </button>
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#4A384F]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search company, branch, role..."
                  className="w-full pl-9 pr-8 py-2 bg-white rounded-xl border border-[#E7D6C1] text-xs text-[#28052B] placeholder:text-[#4A384F]/40 focus:outline-none focus:border-[#BD8E36] focus:ring-1 focus:ring-[#BD8E36] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </RevealBlock>

        {/* Filter Controls Row: Status Tabs + Branch Selector + Sort Dropdown */}
        <RevealBlock direction="up" delay={80}>
          <div className="p-4 bg-white rounded-2xl border border-[#E7D6C1] space-y-3.5 shadow-2xs">
            {/* Status Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {statusTabs.map((tab) => {
                  const count =
                    tab === 'All'
                      ? UPCOMING_DRIVES.length
                      : UPCOMING_DRIVES.filter((d) => d.status === tab).length;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeTab === tab
                          ? 'bg-[#28052B] text-white shadow-xs font-bold'
                          : 'bg-[#FAF7F2] text-[#28052B] hover:bg-amber-50 hover:text-[#BD8E36] border border-[#E7D6C1]/60'
                      }`}
                    >
                      <span>{tab}</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                          activeTab === tab
                            ? 'bg-white/20 text-white'
                            : 'bg-white text-[#28052B] border border-slate-200'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Sort & Month Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
                <span className="text-[#4A384F]/60 text-[11px] font-medium hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort upcoming placement drives"
                  className="bg-[#FAF7F2] border border-[#E7D6C1] rounded-xl px-2.5 py-1.5 text-xs text-[#28052B] font-semibold focus:outline-none focus:border-[#BD8E36] cursor-pointer"
                >
                  <option value="date">Date (Earliest First)</option>
                  <option value="ctc">Highest CTC (Salary)</option>
                  <option value="deadline">Registration Deadline</option>
                </select>
              </div>
            </div>

            {/* Branch Filter Pills */}
            <div className="pt-2 border-t border-[#E7D6C1]/60 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-[#4A384F]/70 flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3 text-[#BD8E36]" /> Filter by Branch:
              </span>
              {allBranches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    selectedBranch === branch
                      ? 'bg-[#E5B656] text-[#28052B] font-bold shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#4A384F] hover:bg-amber-50 border border-[#E7D6C1]/70'
                  }`}
                >
                  {branch}
                </button>
              ))}

              {(selectedBranch !== 'All' || activeTab !== 'All' || searchQuery || filterMode !== 'All') && (
                <button
                  onClick={clearAllFilters}
                  className="ml-auto text-[11px] font-bold text-red-700 hover:text-red-900 underline flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3 h-3" /> Clear all
                </button>
              )}
            </div>
          </div>
        </RevealBlock>

        {/* 5. View Mode: Cards or Calendar Timeline */}
        {viewMode === 'cards' ? (
          /* Cards Grid / Stack */
          <div className="space-y-5">
            {filteredDrives.map((drive, idx) => {
              const isOpen = drive.status === 'Registration Open';
              const isShortlisting = drive.status === 'Shortlisting in Progress';

              return (
                <RevealBlock
                  key={drive.id}
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                  delay={(idx % 3) * 60}
                >
                  <div
                    className="p-5 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#C59B4E] transition-all shadow-xs hover:shadow-md space-y-4 relative overflow-hidden group"
                  >
                  {/* Subtle top edge indicator */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${
                      isOpen
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                        : isShortlisting
                        ? 'bg-gradient-to-r from-amber-500 to-[#DFC06A]'
                        : 'bg-gradient-to-r from-[#28052B] to-[#5C1661]'
                    }`}
                  />

                  {/* Card Header: Company, Badge, Format, Status, CTC */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#FAF7F2]">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Company Badge */}
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1]">
                          {drive.badge}
                        </span>

                        {/* Mode Tag */}
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white text-[#4A384F] border border-slate-200 inline-flex items-center gap-1">
                          {drive.mode === 'On-campus drives' && <Landmark className="w-3 h-3 text-[#28052B]" />}
                          {drive.mode === 'Virtual drives' && <Laptop className="w-3 h-3 text-[#28052B]" />}
                          {drive.mode === 'Pooled drives' && <Layers className="w-3 h-3 text-[#28052B]" />}
                          <span>{drive.mode}</span>
                        </span>
                      </div>

                      {/* Company Name */}
                      <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                        {drive.company}
                      </h3>

                      {/* Role */}
                      <div className="text-xs sm:text-sm font-semibold text-[#4A384F]">
                        {drive.role}
                      </div>
                    </div>

                    {/* Status & CTC Column */}
                    <div className="text-left sm:text-right shrink-0 space-y-1">
                      <div className="flex sm:justify-end">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                            isOpen
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                              : isShortlisting
                              ? 'bg-amber-50 text-amber-900 border border-amber-300'
                              : 'bg-purple-50 text-[#28052B] border border-purple-200'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isOpen
                                ? 'bg-emerald-500 animate-pulse'
                                : isShortlisting
                                ? 'bg-amber-500'
                                : 'bg-[#28052B]'
                            }`}
                          />
                          <span>{drive.status}</span>
                        </span>
                      </div>

                      <div className="text-base sm:text-xl font-black text-emerald-800 tracking-tight">
                        {drive.ctc}
                      </div>

                      {drive.stipend && (
                        <div className="text-[10px] text-[#4A384F]/80 font-medium">
                          {drive.stipend}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 4 Bento Columns: Date & Deadline, Branches & CGPA, Venue & Mode, Rounds */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {/* Col 1: Date & Deadline */}
                    <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/80 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#4A384F]/70 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#BD8E36]" />
                        <span>Drive Date</span>
                      </div>
                      <div className="font-bold text-[#28052B] text-xs">{drive.date}</div>
                      <div className="text-[10.5px] font-semibold text-rose-700 flex items-center gap-1 pt-0.5">
                        <Clock className="w-3 h-3 text-rose-600 shrink-0" />
                        <span>Deadline: {drive.registrationDeadline}</span>
                      </div>
                    </div>

                    {/* Col 2: Eligible Branches & Cutoff */}
                    <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/80 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#4A384F]/70 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#BD8E36]" />
                        <span>Eligible Branches</span>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {drive.eligibleBranches.map((b, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 rounded bg-white text-[10px] font-mono font-bold text-[#28052B] border border-slate-200"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                      <div className="text-[10.5px] text-[#4A384F] font-medium pt-0.5">
                        Cutoff: <strong className="text-[#28052B]">{drive.minCgpa}</strong>
                      </div>
                    </div>

                    {/* Col 3: Venue & Format */}
                    <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/80 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#4A384F]/70 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#BD8E36]" />
                        <span>Venue &amp; Mode</span>
                      </div>
                      <div className="font-bold text-[#28052B] leading-tight text-xs">{drive.venue}</div>
                      <div className="text-[10.5px] text-[#4A384F]/80">{drive.mode}</div>
                    </div>

                    {/* Col 4: Selection Stages */}
                    <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/80 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#4A384F]/70 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#BD8E36]" />
                        <span>Selection Stages</span>
                      </div>
                      <div className="font-bold text-[#28052B] text-xs">
                        {drive.rounds.length} Assessment Rounds
                      </div>
                      <div className="text-[10.5px] text-[#4A384F]/80 truncate">
                        {drive.rounds.join(' ➔ ')}
                      </div>
                    </div>
                  </div>

                  {/* Rounds Breadcrumb Pipeline & Notes */}
                  <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs border-t border-[#FAF7F2]">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-bold text-[#28052B] text-[11px]">Rounds:</span>
                      {drive.rounds.map((r, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[11px]">
                          <span className="px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#28052B] font-medium border border-[#E7D6C1]/60">
                            {r}
                          </span>
                          {i < drive.rounds.length - 1 && <span className="text-[#C59B4E]">➔</span>}
                        </span>
                      ))}
                    </div>

                    {drive.notes && (
                      <div className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200 flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{drive.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Buttons Row */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-[11px] text-[#4A384F]/80 flex items-center gap-2">
                      <span>PAT Coordinator: <strong>{drive.coordinator.student}</strong></span>
                      <span>•</span>
                      <span>{drive.coordinator.phone}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => handleOpenModal(drive)}
                        className="px-4 py-2 rounded-full bg-white hover:bg-[#FAF7F2] text-[#28052B] font-semibold text-xs border border-[#28052B] transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#BD8E36]" />
                        <span>View Full JD &amp; Syllabus</span>
                      </button>

                      {isOpen ? (
                        <button
                          onClick={() => handleOpenModal(drive)}
                          className="px-5 py-2 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Register on PAT Portal</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleOpenModal(drive)}
                          className="px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-slate-100 text-[#4A384F] font-semibold text-xs border border-slate-300 transition-all cursor-pointer"
                        >
                          <span>Check Guidelines</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </RevealBlock>
            );
          })}

            {filteredDrives.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#E7D6C1] space-y-3">
                <Calendar className="w-12 h-12 text-[#BD8E36] mx-auto opacity-40" />
                <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#28052B]">
                  No Scheduled Drives Match Your Criteria
                </h3>
                <p className="text-xs text-[#4A384F]/70 max-w-md mx-auto">
                  Try clearing some filters, expanding your branch selection, or switching drive formats.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-5 py-2 rounded-full bg-[#E5B656] text-[#28052B] font-bold text-xs hover:bg-[#DCA93F] transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Calendar / Timeline View */
          <div className="space-y-6">
            {/* Month Tabs for Timeline */}
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'Dec 2026', 'Jan 2027', 'Feb 2027'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedMonth === m
                      ? 'bg-[#28052B] text-[#DFC06A] shadow-xs'
                      : 'bg-white text-[#28052B] border border-[#E7D6C1] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {m === 'All' ? 'Full Season Timeline (Dec–Feb)' : m}
                </button>
              ))}
            </div>

            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDrives.map((drive, idx) => (
                <RevealBlock
                  key={drive.id}
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                  delay={(idx % 3) * 60}
                  className="h-full"
                >
                  <div
                    className="h-full bg-white rounded-2xl p-5 border border-[#E7D6C1] hover:border-[#C59B4E] transition-all shadow-xs space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      {/* Top Row: Date Badge & Status */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B] font-bold text-[11px] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#BD8E36]" />
                          {drive.date}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            drive.status === 'Registration Open'
                              ? 'bg-emerald-100 text-emerald-800'
                              : drive.status === 'Shortlisting in Progress'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {drive.status}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold font-['Playfair_Display',serif] text-[#28052B]">
                        {drive.company}
                      </h4>
                      <p className="text-xs font-medium text-[#4A384F]">{drive.role}</p>

                      <div className="text-sm font-black text-emerald-800">{drive.ctc}</div>

                      <div className="text-[11px] text-[#4A384F]/80 space-y-1 pt-1">
                        <div>
                          <strong>Venue:</strong> {drive.venue}
                        </div>
                        <div>
                          <strong>Cutoff:</strong> {drive.minCgpa}
                        </div>
                        <div className="text-rose-700 font-semibold">
                          <strong>Deadline:</strong> {drive.registrationDeadline}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#FAF7F2] flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">{drive.mode}</span>
                      <button
                        onClick={() => handleOpenModal(drive)}
                        className="text-xs font-bold text-[#BD8E36] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 6. Mandatory Student Guidelines & Official PAT Code of Conduct */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 space-y-6">
        <RevealBlock direction="up">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#BD8E36]">
                PAT Placement Protocol
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
              Mandatory Student Guidelines &amp; Code of Conduct
            </h2>
            <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-2xl">
              To ensure institutional decorum and fair opportunity allocation, all registered candidates must adhere to the official Placement &amp; Training (PAT) regulations.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {GUIDELINES.map((g, idx) => (
            <RevealBlock
              key={idx}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 70}
              className="h-full"
            >
              <div
                className="h-full p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs space-y-3 hover:border-[#C59B4E] transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-[#28052B] text-[#DFC06A] font-black text-xs flex items-center justify-center font-mono">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm text-[#28052B]">{g.title}</h3>
                <p className="text-xs text-[#4A384F]/80 leading-relaxed">{g.desc}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 7. PAT Help Desk & Student Placement Helpline (Aubergine Theme Bento matching Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <RevealBlock direction="up" delay={100}>
          <div className="relative">
            {/* Subtle Decorative Gold Corner Brackets */}
            <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

            <div className="rounded-3xl bg-[#28052B] text-white p-7 sm:p-10 border border-[#3E1043] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#390F3B] text-[#DFC06A] border border-[#DFC06A]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                  <span>Placement Control Desk &amp; Student Help</span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                  Queries Regarding Drive Registration or Hall Tickets?
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  The Placement &amp; Training Cell (PAT Office, Administrative Block 2nd Floor) is open for student assistance during all active drives. Report any attendance clash, eligibility queries, or online testing portal issues immediately.
                </p>

                <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                  <a
                    href="tel:+914884259000"
                    className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#DFC06A]" />
                    <span>+91 4884 259000 (Extn: 224 / 225)</span>
                  </a>
                  <a
                    href="mailto:drives@jecc.ac.in"
                    className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#DFC06A]" />
                    <span>drives@jecc.ac.in / placements@jecc.ac.in</span>
                  </a>
                </div>
              </div>

              {/* Quick Action Navigation Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  onClick={() => onNavigate('corporate-recruiters')}
                  className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Browse Corporate Recruiters</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('career-guidance')}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                <Briefcase className="w-4 h-4 text-[#DFC06A]" />
                <span>Finishing School &amp; Prep</span>
              </button>
            </div>
          </div>
        </div>
      </RevealBlock>
    </section>

      {/* 8. Interactive Job Description & Registration Modal */}
      {modalDrive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E7D6C1] shadow-2xl space-y-5 p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setModalDrive(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-slate-200 text-[#28052B] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close details modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1]">
                  {modalDrive.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {modalDrive.status}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700">
                  {modalDrive.mode}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
                {modalDrive.company}
              </h3>
              <div className="text-sm font-semibold text-[#BD8E36]">{modalDrive.role}</div>
              <div className="text-xl font-black text-emerald-800">{modalDrive.ctc}</div>
            </div>

            {/* Key Schedule Grid inside modal */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E7D6C1]">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#4A384F]/60 block">Date</span>
                <strong className="text-[#28052B]">{modalDrive.date}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-[#4A384F]/60 block">Deadline</span>
                <strong className="text-rose-700">{modalDrive.registrationDeadline}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-[#4A384F]/60 block">Cutoff</span>
                <strong className="text-[#28052B]">{modalDrive.minCgpa}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-[#4A384F]/60 block">Venue</span>
                <strong className="text-[#28052B] truncate block">{modalDrive.venue}</strong>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-1 text-xs">
              <h4 className="font-bold text-[#28052B] text-sm font-['Playfair_Display',serif]">
                Role &amp; Job Description
              </h4>
              <p className="text-[#4A384F] leading-relaxed">{modalDrive.jobDescription}</p>
            </div>

            {/* Detailed Selection Stages & Topics */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-[#28052B] text-sm font-['Playfair_Display',serif]">
                Assessment Stages &amp; Detailed Syllabus
              </h4>
              <div className="space-y-2">
                {modalDrive.roundsDetail.map((rd, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white border border-[#E7D6C1] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-bold text-[#28052B]">
                        Stage {i + 1}: {rd.name}
                      </div>
                      <div className="text-[11px] text-[#4A384F]/80">Topics: {rd.topics}</div>
                    </div>
                    <span className="text-[10px] font-bold bg-[#FAF7F2] text-[#BD8E36] px-2 py-0.5 rounded-md border border-[#E7D6C1] shrink-0 self-start sm:self-center">
                      Duration: {rd.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinator Contacts */}
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs space-y-1.5">
              <div className="font-bold text-[#28052B] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#BD8E36]" />
                <span>Drive Coordinators &amp; Contact Desk:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#4A384F]">
                <div>
                  Faculty In-Charge: <strong>{modalDrive.coordinator.faculty}</strong>
                </div>
                <div>
                  Student Lead: <strong>{modalDrive.coordinator.student}</strong>
                </div>
                <div>
                  Helpline Phone: <strong>{modalDrive.coordinator.phone}</strong>
                </div>
                <div>
                  Portal Email: <strong>{modalDrive.coordinator.email}</strong>
                </div>
              </div>
            </div>

            {/* Registration Form / Confirmation */}
            {modalDrive.status === 'Registration Open' ? (
              <div className="pt-2 border-t border-[#E7D6C1] space-y-3">
                <h4 className="font-bold text-[#28052B] text-sm font-['Playfair_Display',serif]">
                  One-Click Student Registration
                </h4>

                {registrationSuccess ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 space-y-2 animate-fade-in">
                    <div className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Registration Confirmed!</span>
                    </div>
                    <p>{registrationSuccess}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => alert('Simulated Hall Ticket PDF downloaded.')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-800 text-white font-bold text-[11px] flex items-center gap-1 hover:bg-emerald-900 cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Hall Ticket Preview</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleRegisterSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block text-[11px] font-bold text-[#28052B] mb-1">
                          University KTU Roll No *
                        </label>
                        <input
                          type="text"
                          required
                          value={studentRegNo}
                          onChange={(e) => setStudentRegNo(e.target.value.toUpperCase())}
                          placeholder="e.g. JEC23CS042"
                          className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs font-mono uppercase focus:outline-none focus:border-[#BD8E36]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#28052B] mb-1">
                          B.Tech Department *
                        </label>
                        <select
                          value={studentBranch}
                          onChange={(e) => setStudentBranch(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs focus:outline-none focus:border-[#BD8E36]"
                        >
                          {modalDrive.eligibleBranches.map((b, i) => (
                            <option key={i} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-[11px] text-[#4A384F]/70">
                        Deadline: {modalDrive.registrationDeadline}
                      </span>
                      <button
                        type="submit"
                        disabled={isRegistering}
                        className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs transition-all shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        {isRegistering ? (
                          <span>Verifying Credentials...</span>
                        ) : (
                          <>
                            <span>Confirm &amp; Register</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Registration for this drive is currently{' '}
                  <strong>{modalDrive.status.toLowerCase()}</strong>. Please check your official college PAT email for schedule notifications.
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default UpcomingDrivesPage;
