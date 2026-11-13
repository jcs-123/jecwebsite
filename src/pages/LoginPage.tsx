import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap, BookOpen, Users, Building2,
  ArrowRight, ShieldCheck, Lock, CheckCircle2, X, HelpCircle,
  ExternalLink, Sparkles, Smartphone, Mail, Key, UserCheck,
  ChevronRight, AlertCircle, Home, Server, Wifi, CreditCard,
  FileText, Clock, PhoneCall, Download, Check, ChevronDown,
  Database, Cpu, Layers, Globe, Shield, LifeBuoy
} from 'lucide-react';

// Reusable ScrollReveal component for smooth parallax-feel scroll animations
const ScrollReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}> = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    switch (direction) {
      case 'up': return 'translate-y-8 opacity-0';
      case 'down': return '-translate-y-8 opacity-0';
      case 'left': return 'translate-x-8 opacity-0';
      case 'right': return '-translate-x-8 opacity-0';
      default: return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

interface PortalItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  isFeatured?: boolean;
  fields: {
    usernameLabel: string;
    usernamePlaceholder: string;
    demoUser: string;
    demoPass: string;
    userRole: string;
  };
}

const PORTALS_LIST: PortalItem[] = [
  {
    id: 'student',
    title: 'Student Login',
    subtitle: 'Access your academic details, courses, and campus services.',
    badge: 'Autonomous ERP Student Portal',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L6 17.5L22 25L38 17.5L22 10Z" stroke="#381053" />
        <path d="M12 20.5V29.5C12 31.5 16.5 34 22 34C27.5 34 32 31.5 32 29.5V20.5" stroke="#381053" />
        <path d="M35 19V28" stroke="#C9902C" strokeWidth="2" />
        <circle cx="35" cy="29.5" r="1.5" fill="#C9902C" stroke="none" />
      </svg>
    ),
    fields: {
      usernameLabel: 'Admission Number / Register No.',
      usernamePlaceholder: 'e.g. JEC21CS042',
      demoUser: 'JEC21CS042',
      demoPass: '••••••••••••',
      userRole: 'Undergraduate Scholar (B.Tech CSE - Semester 6)'
    }
  },
  {
    id: 'faculty',
    title: 'Faculty Login',
    subtitle: 'Manage academics, students, and institutional resources.',
    badge: 'Faculty Academic Management Suite',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12C8 10.9 8.9 10 10 10H18C20.2 10 22 11.8 22 14V33C22 31.5 20.5 30.5 18.5 30.5H10C8.9 30.5 8 29.6 8 28.5V12Z" stroke="#381053" />
        <path d="M36 12C36 10.9 35.1 10 34 10H26C23.8 10 22 11.8 22 14V33C22 31.5 23.5 30.5 25.5 30.5H34C35.1 30.5 36 29.6 36 28.5V12Z" stroke="#381053" />
        <path d="M26 10V21L28.5 19L31 21V10" stroke="#C9902C" strokeWidth="1.8" />
      </svg>
    ),
    fields: {
      usernameLabel: 'Faculty Employee ID',
      usernamePlaceholder: 'e.g. JEC/FAC/108',
      demoUser: 'JEC/FAC/108',
      demoPass: '••••••••••••',
      userRole: 'Associate Professor & Research Lead'
    }
  },
  {
    id: 'parent',
    title: 'Parent Login',
    subtitle: "Stay updated on your ward's academic progress.",
    badge: 'Parent Guardian Portal',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="15" cy="14" r="4" stroke="#381053" />
        <path d="M8 31V27C8 23.7 10.7 21 14 21H16C17.2 21 18.3 21.4 19.2 22" stroke="#381053" />
        <circle cx="29" cy="16" r="3.5" stroke="#381053" />
        <path d="M25.5 22.5C26.5 22 27.7 21.8 29 21.8C32.3 21.8 35 24.5 35 27.8V31" stroke="#381053" />
        <circle cx="22" cy="23.5" r="2.8" stroke="#C9902C" />
        <path d="M17.5 34V31.5C17.5 29.2 19.5 27.5 22 27.5C24.5 27.5 26.5 29.2 26.5 31.5V34" stroke="#C9902C" />
      </svg>
    ),
    fields: {
      usernameLabel: 'Registered Mobile Number or Ward Admission No.',
      usernamePlaceholder: 'e.g. +91 98470 12345 or JEC21CS042',
      demoUser: '9847012345',
      demoPass: '••••••••••••',
      userRole: 'Guardian of Student JEC21CS042'
    }
  },
  {
    id: 'feebook',
    title: 'Fee Book',
    subtitle: 'View and manage fee details and payment records.',
    badge: 'Online Fee Payment & Receipts',
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12C8 10.9 8.9 10 10 10H18C20.2 10 22 11.8 22 14V33C22 31.5 20.5 30.5 18.5 30.5H10C8.9 30.5 8 29.6 8 28.5V12Z" stroke="#381053" />
        <path d="M36 12C36 10.9 35.1 10 34 10H26C23.8 10 22 11.8 22 14V33C22 31.5 23.5 30.5 25.5 30.5H34C35.1 30.5 36 29.6 36 28.5V12Z" stroke="#381053" />
        <path d="M12 16H17.5M12 20H17.5M12 24H16" stroke="#381053" strokeWidth="1.5" />
        <path d="M26.5 15.5H32M26.5 19H32M27.5 15.5C29.5 15.5 30.5 16.7 30.5 18.2C30.5 19.7 29.5 21 27.5 21H26.5L31 26" stroke="#C9902C" strokeWidth="1.8" />
      </svg>
    ),
    fields: {
      usernameLabel: 'Admission Number & Date of Birth',
      usernamePlaceholder: 'e.g. JEC21CS042',
      demoUser: 'JEC21CS042',
      demoPass: '••••••••••••',
      userRole: 'Fee Account Statement (Academic Year 2024-25)'
    }
  },
  {
    id: 'girls-hostel',
    title: 'Girls Hostel Login',
    subtitle: 'Access hostel services, notices, and facilities for girl students.',
    badge: "Mary Matha Girls Hostel Portal",
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 34V14L17 9L27 14V18" stroke="#381053" />
        <path d="M5 34H23" stroke="#381053" />
        <rect x="11" y="16" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <rect x="17" y="16" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <rect x="11" y="22" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <rect x="17" y="22" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <path d="M13 34V29H16V34" stroke="#C9902C" />
        <circle cx="30" cy="22" r="3.5" stroke="#381053" />
        <path d="M25.5 22C25.5 18.8 27.5 17 30 17C32.5 17 34.5 18.8 34.5 22V25.5" stroke="#C9902C" />
        <path d="M23.5 34V31.5C23.5 28.8 26.2 27 30 27C33.8 27 36.5 28.8 36.5 31.5V34" stroke="#381053" />
      </svg>
    ),
    fields: {
      usernameLabel: 'Hostel Resident ID / Room Number',
      usernamePlaceholder: 'e.g. MM-H2-204',
      demoUser: 'MM-H2-204',
      demoPass: '••••••••••••',
      userRole: 'Resident Scholar (Mary Matha Hall, Room 204)'
    }
  },
  {
    id: 'boys-hostel',
    title: 'Boys Hostel Login',
    subtitle: 'Access hostel services, notices, and facilities for boy students.',
    badge: "San Thome Boys Hostel Portal",
    icon: (
      <svg viewBox="0 0 44 44" className="w-10 h-10" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 34V14L17 9L27 14V18" stroke="#381053" />
        <path d="M5 34H23" stroke="#381053" />
        <rect x="11" y="16" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <rect x="17" y="16" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <rect x="11" y="22" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <rect x="17" y="22" width="3" height="3" rx="0.5" fill="#381053" stroke="none" />
        <path d="M13 34V29H16V34" stroke="#C9902C" />
        <circle cx="30" cy="21.5" r="3.5" stroke="#381053" />
        <path d="M26.5 20.5C27.5 19 29 18.5 31.5 18.5C32.5 18.5 33.5 19.2 33.5 20.2" stroke="#C9902C" />
        <path d="M23.5 34V31.5C23.5 28.8 26.2 27 30 27C33.8 27 36.5 28.8 36.5 31.5V34" stroke="#381053" />
      </svg>
    ),
    fields: {
      usernameLabel: 'Hostel Resident ID / Room Number',
      usernamePlaceholder: 'e.g. ST-H1-312',
      demoUser: 'ST-H1-312',
      demoPass: '••••••••••••',
      userRole: 'Resident Scholar (San Thome Hall, Room 312)'
    }
  }
];

// Interactive Feature Tabs
interface PortalTabInfo {
  id: string;
  label: string;
  icon: React.ReactNode;
  heading: string;
  tagline: string;
  description: string;
  features: { title: string; desc: string; icon: React.ReactNode }[];
}

const PORTAL_TABS: PortalTabInfo[] = [
  {
    id: 'student-tab',
    label: 'Student ERP',
    icon: <GraduationCap className="w-4 h-4" />,
    heading: 'Student Academic Management Suite (Linways ERP 5.2)',
    tagline: 'Comprehensive single-window dashboard for coursework, grades, and campus services',
    description: 'Empowers over 3,200 scholars at Jyothi Engineering College (Autonomous) with real-time class attendance, lecture notes, Continuous Internal Evaluation (CIE) scorecards, digital hall tickets, and direct synchronization with the APJ KTU academic cloud and DigiLocker ABC ID.',
    features: [
      {
        title: 'Real-Time Attendance Tracker',
        desc: 'Lecture-by-lecture biometric attendance logs with automated threshold alerts whenever attendance approaches 75%.',
        icon: <Clock className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Continuous Internal Evaluation (CIE)',
        desc: 'Instant verification of internal series test marks, assignment rubrics, laboratory assessment sheets, and seminar evaluations.',
        icon: <FileText className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Autonomous Exam Hall Tickets',
        desc: 'One-click authenticated download of end-semester examination hall tickets with timetable and seating room allocations.',
        icon: <Download className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'DigiLocker ABC Integration',
        desc: 'Automated credit push to the National Academic Bank of Credits (ABC) repository under National Education Policy guidelines.',
        icon: <Database className="w-4 h-4 text-[#DFC06A]" />
      }
    ]
  },
  {
    id: 'faculty-tab',
    label: 'Faculty Suite',
    icon: <BookOpen className="w-4 h-4" />,
    heading: 'Faculty Academic Governance & OBE Suite',
    tagline: 'Automating curriculum delivery, outcome attainment, and research portfolios',
    description: 'Built for Jyothi’s 220+ distinguished professors and researchers to manage lesson plans, map Course Outcomes (CO) to Program Outcomes (PO), mark daily attendance, approve student leaves, and document funded research papers.',
    features: [
      {
        title: 'Outcome-Based Education (OBE) Engine',
        desc: "Automated direct and indirect attainment calculations for NBA & NAAC compliance with real-time Bloom's Taxonomy distribution.",
        icon: <Layers className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Biometric Attendance & Leave Sync',
        desc: 'Seamless attendance marking through smart classroom terminals, with duty leave, casual leave, and compensatory off tracking.',
        icon: <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Research & Patent Tracker',
        desc: 'Institutional repository logging Scopus / Web of Science indexed journals, conference grants, and industry consultancy MoUs.',
        icon: <Sparkles className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Student Ward Mentorship Portal',
        desc: 'Holistic mentoring records for assigned student cohorts, tracking academic performance, sports, and counseling sessions.',
        icon: <Users className="w-4 h-4 text-[#DFC06A]" />
      }
    ]
  },
  {
    id: 'parent-tab',
    label: 'Parent Portal',
    icon: <Users className="w-4 h-4" />,
    heading: 'Parent & Guardian Transparency Window',
    tagline: 'Direct, reliable visibility into your ward’s education and safety',
    description: 'Designed to ensure peace of mind for parents and guardians. Provides daily automated absence SMS, mid-term progress summaries, semester SGPA analytics, and direct contact channels to assigned faculty advisors and department heads.',
    features: [
      {
        title: 'Daily Automated SMS Alerts',
        desc: 'Instant notification dispatch by 10:00 AM in case your ward is absent or late for morning academic sessions.',
        icon: <Smartphone className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Comprehensive Progress Cards',
        desc: 'Detailed grade analytics, graphical attendance breakdown, and class ranking compared across academic semesters.',
        icon: <FileText className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Direct Faculty Advisor Contact',
        desc: 'One-click phone and email connect with your ward’s group tutor, academic mentor, and department head (HOD).',
        icon: <PhoneCall className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Campus Notifications & Calendar',
        desc: 'Official college announcements, semester break dates, parent-teacher meeting (PTA) circulars, and festival schedules.',
        icon: <Globe className="w-4 h-4 text-[#DFC06A]" />
      }
    ]
  },
  {
    id: 'feebook-tab',
    label: 'Fee Book & Accounts',
    icon: <CreditCard className="w-4 h-4" />,
    heading: 'Online Campus Fee Portal & Account Statement',
    tagline: 'Secure, paperless payment gateway for tuition, hostel, and exam fees',
    description: 'Enables 100% digital fee settlements through RBI-regulated payment gateways. Instant official tax receipts, scholarship deduction adjustments, hostel mess billing, and semester installment schedules.',
    features: [
      {
        title: 'Zero Convenience Fee UPI & NetBanking',
        desc: 'Supports all major Indian banks, BHIM UPI, debit/credit cards, and NEFT/RTGS challan generation without convenience charges.',
        icon: <CreditCard className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Instant Tax & Scholarship Receipts',
        desc: 'Digitally signed 80E / 10(23C) tax deduction receipts and official certificates for government educational loans.',
        icon: <FileText className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Scholarship Adjustments',
        desc: 'Automatic credit deduction for KEAM merit scholars, Catholic Archdiocese endowments, and E-Grantz state welfare recipients.',
        icon: <Sparkles className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Hostel Mess Ledger & Dues',
        desc: 'Transparent itemized breakdown of monthly mess bills, room charges, caution deposit balances, and rebate credits.',
        icon: <Building2 className="w-4 h-4 text-[#DFC06A]" />
      }
    ]
  },
  {
    id: 'hostel-tab',
    label: 'Hostel Services',
    icon: <Building2 className="w-4 h-4" />,
    heading: 'San Thome & Mary Matha Campus Hostels Life System',
    tagline: 'Digital residential services for 750+ hostellers living on campus',
    description: 'Manages room allocations, parent-authorized digital outing gate passes, mess menu feedback, maintenance service tickets, and resident student security across our on-campus hostels.',
    features: [
      {
        title: 'Digital Weekend Home Pass',
        desc: 'Parent SMS-verified digital gate pass approval by Resident Wardens for safe, contactless campus departure and return.',
        icon: <Key className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Mess Menu & Dynamic Rebates',
        desc: 'View daily vegetarian and non-vegetarian menus, rate dining quality, and automatically claim meal rebates during official leaves.',
        icon: <Clock className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Maintenance Ticket Logging',
        desc: 'Report electrical, plumbing, carpentry, or WiFi issues with real-time 24-hour campus estate team service resolution tracking.',
        icon: <LifeBuoy className="w-4 h-4 text-[#DFC06A]" />
      },
      {
        title: 'Parent Guest Room Bookings',
        desc: 'Reserve on-campus air-conditioned guest suites for visiting parents during convocation, tech fests, and campus interviews.',
        icon: <Building2 className="w-4 h-4 text-[#DFC06A]" />
      }
    ]
  }
];

// Self-Service Help Cards
const SELF_SERVICE_GUIDES = [
  {
    title: 'First-Year Student ERP Activation',
    badge: 'Fresher Onboarding',
    icon: <GraduationCap className="w-5 h-5 text-[#DFC06A]" />,
    steps: [
      'Locate your Admission Register Number on your fee receipt (e.g. JEC24CS012).',
      'Click Student Login and choose "First Time Scholar Activation".',
      'Verify the 6-digit OTP sent to your registered mobile and personal email.',
      'Set an 8-character password and link your ABC (Academic Bank of Credits) ID.'
    ]
  },
  {
    title: 'Forgot Password & Account Recovery',
    badge: 'Self-Service Recovery',
    icon: <Key className="w-5 h-5 text-[#DFC06A]" />,
    steps: [
      'Click "Forgot Password" on your respective portal login dialog.',
      'Enter your registered Register No. or Employee ID.',
      'Check your registered mobile number for the secure reset link (valid for 15 mins).',
      'For locked accounts due to 5 incorrect attempts, visit CCF Room D-204.'
    ]
  },
  {
    title: 'Online Fee Payment & Official Receipts',
    badge: 'Accounts & Receipts',
    icon: <CreditCard className="w-5 h-5 text-[#DFC06A]" />,
    steps: [
      'Access Fee Book using Admission Number and Date of Birth.',
      'Review pending semester tuition, bus, or hostel dues ledger.',
      'Pay via zero-fee UPI, NetBanking, or download NEFT/RTGS bank challan.',
      'Download official digitally signed PDF receipts for scholarship/tax filing.'
    ]
  },
  {
    title: 'Campus Wi-Fi & Eduroam Access',
    badge: 'High-Speed Connectivity',
    icon: <Wifi className="w-5 h-5 text-[#DFC06A]" />,
    steps: [
      'Connect your laptop or mobile to the "JECC-Campus-Secure" SSID.',
      'Open any browser to redirect automatically to the Cyberoam Captive Portal.',
      'Log in using your Student ERP credentials (username and password).',
      'Enjoy seamless, authenticated 1 Gbps internet across labs, hostels & library.'
    ]
  }
];

// FAQs
const FAQ_LIST = [
  {
    q: 'How do newly admitted first-year students log in for the first time?',
    a: 'Newly admitted B.Tech and M.Tech scholars receive their permanent Admission Register Number during the physical document verification day. Use this number as your username and enter your date of birth in DDMMYYYY format as the default password. Upon first sign-in, the system prompts you to verify your mobile OTP and create a personalized secure password.'
  },
  {
    q: 'What is the minimum attendance requirement in autonomous regulations?',
    a: 'As per UGC and APJ Abdul Kalam Technological University autonomous regulations, students must maintain a minimum of 75% attendance in each registered course to be eligible to appear for the End Semester Examinations. The ERP portal highlights courses in amber if attendance falls below 80% and in red if below 75%, allowing timely corrective consultation with faculty mentors.'
  },
  {
    q: 'How do parents receive daily attendance notifications and exam results?',
    a: 'The Jyothi Parent Portal automatically dispatches SMS alerts every working morning by 10:00 AM if a scholar is absent during the initial lecture hour. In addition, parents can log into the Parent Portal at any time using their registered mobile number to view live attendance graphs, mid-semester series test scores, and semester SGPA cards.'
  },
  {
    q: 'What should I do if my account is locked or OTP is not received?',
    a: 'Accounts are automatically temporarily locked for 30 minutes following 5 consecutive incorrect password entries to protect against brute-force attacks. If you do not receive an SMS OTP, check that your network allows transactional SMS, or use the "Send via Email" fallback. Alternatively, contact the Central Computing Facility (CCF) at erp@jecc.ac.in or +91 4884 259000 (Ext. 242) for instant credential unlocking.'
  },
  {
    q: 'How do hostel residents apply for weekend home passes and mess rebates?',
    a: 'Hostel residents must log into the Mary Matha Girls Hostel or San Thome Boys Hostel Portal by Thursday 8:00 PM to request a Weekend Home Pass. Once submitted, an automated SMS approval link is dispatched to the registered parent. Upon parental authorization, the Resident Warden validates the digital gate pass, and meal rebates for missed dining sessions are credited automatically to the next month’s mess ledger.'
  },
  {
    q: 'How do students download official semester grade cards and transcripts?',
    a: 'Under the Autonomous Academic Section in the Student ERP, navigate to "Grade Cards & Transcripts". Students can view semester-wise SGPA and cumulative CGPA and download digitally signed provisional grade cards with QR-code verification. These documents are directly accepted for campus placements and higher education applications.'
  }
];

export const LoginPage: React.FC<Props> = ({ onNavigate, onOpenApply, onOpenTour }) => {
  const [selectedPortal, setSelectedPortal] = useState<PortalItem | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('student-tab');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPortal) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedPortal(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
      setIsAuthenticated(false);
      setUsername('');
      setPassword('');
    }
  }, [selectedPortal]);

  const handleOpenPortal = (portal: PortalItem) => {
    setSelectedPortal(portal);
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handleDemoLogin = () => {
    if (!selectedPortal) return;
    setUsername(selectedPortal.fields.demoUser);
    setPassword('••••••••••••');
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 350);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const currentTabInfo = PORTAL_TABS.find(t => t.id === activeTab) || PORTAL_TABS[0];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E092B] selection:bg-[#250836] selection:text-[#DFC06A] pb-24 overflow-x-hidden">

      {/* ============================================================== */}
      {/* 1. HERO BANNER (MATCHING USER MOCKUP) */}
      {/* ============================================================== */}
      <section className="relative w-full overflow-hidden bg-[#1B0329] shadow-lg">
        {/* Top Metallic Gold Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9902C] via-[#FDE68A] to-[#C9902C] z-30" />

        {/* DESKTOP & TABLET HERO (>= 768px): Full-Framing Campus Photo + Slanted Purple Panel */}
        <div className="hidden md:block relative w-full h-[330px] lg:h-[380px] xl:h-[420px] overflow-hidden">
          {/* Right-side Campus Photo */}
          <div className="absolute inset-y-0 right-0 w-[68%] lg:w-[67%] overflow-hidden">
            <img
              src="/assets/portals_hero.jpg"
              alt="Jyothi Engineering College Students Collaborating on Campus"
              className="w-full h-full object-cover object-[center_20%] select-none"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B0329]/45 via-transparent to-transparent" />
          </div>

          {/* Left Slanted Deep Purple Panel */}
          <div
            className="absolute inset-y-0 left-0 w-[46%] lg:w-[44%] z-10 flex items-center"
            style={{
              background: 'linear-gradient(135deg, #2B0740 0%, #200431 55%, #160222 100%)',
              clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0 100%)',
            }}
          >
            {/* Subtle Architectural Facade & Palm Trees Line-Art Watermark */}
            <svg
              viewBox="0 0 560 220"
              fill="none"
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-[88%] max-w-[500px] opacity-[0.18] pointer-events-none select-none"
            >
              {/* Left Palm Trees */}
              <path d="M52 205 Q55 155 46 115" stroke="#B78EDB" strokeWidth="1.4" />
              <path d="M46 115 Q26 105 16 122 M46 115 Q28 96 20 98 M46 115 Q48 92 64 96 M46 115 Q68 104 78 122 M46 115 Q62 120 68 134" stroke="#B78EDB" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M88 205 Q91 168 85 138" stroke="#B78EDB" strokeWidth="1.2" />
              <path d="M85 138 Q68 130 60 144 M85 138 Q72 122 86 118 M85 138 Q102 128 110 142" stroke="#B78EDB" strokeWidth="1.1" strokeLinecap="round" />
              {/* Right Palm Trees */}
              <path d="M425 205 Q422 160 430 120" stroke="#B78EDB" strokeWidth="1.3" />
              <path d="M430 120 Q410 112 402 126 M430 120 Q425 98 442 100 M430 120 Q450 110 460 126" stroke="#B78EDB" strokeWidth="1.1" strokeLinecap="round" />
              {/* Main College Facade */}
              <rect x="112" y="132" width="286" height="72" stroke="#B78EDB" strokeWidth="1.2" />
              <path d="M188 132 L255 96 L322 132 Z" stroke="#B78EDB" strokeWidth="1.3" />
              <rect x="202" y="132" width="106" height="72" stroke="#B78EDB" strokeWidth="1.2" />
              {/* Arches & Columns */}
              <path d="M126 204 V166 A10 10 0 0 1 146 166 V204 M156 204 V166 A10 10 0 0 1 176 166 V204" stroke="#B78EDB" strokeWidth="1.1" />
              <path d="M214 204 V160 A12 12 0 0 1 238 160 V204 M243 204 V160 A12 12 0 0 1 267 160 V204 M272 204 V160 A12 12 0 0 1 296 160 V204" stroke="#B78EDB" strokeWidth="1.1" />
              <path d="M334 204 V166 A10 10 0 0 1 354 166 V204 M364 204 V166 A10 10 0 0 1 384 166 V204" stroke="#B78EDB" strokeWidth="1.1" />
              {/* Upper Windows */}
              <rect x="128" y="140" width="14" height="14" rx="2" stroke="#B78EDB" strokeWidth="1" />
              <rect x="158" y="140" width="14" height="14" rx="2" stroke="#B78EDB" strokeWidth="1" />
              <rect x="336" y="140" width="14" height="14" rx="2" stroke="#B78EDB" strokeWidth="1" />
              <rect x="366" y="140" width="14" height="14" rx="2" stroke="#B78EDB" strokeWidth="1" />
              <circle cx="255" cy="116" r="6" stroke="#B78EDB" strokeWidth="1.1" />
            </svg>

            {/* Hero Copy */}
            <div className="relative z-10 pl-6 md:pl-8 lg:pl-12 xl:pl-16 pr-10 max-w-md space-y-2.5">
              {/* Gold Horizontal Dash */}
              <div className="w-9 h-[2.5px] bg-gradient-to-r from-[#DFC06A] to-[#C9902C] rounded-full" />

              <h1 className="text-2xl md:text-[28px] lg:text-[36px] xl:text-[40px] font-black font-brand text-white leading-[1.08] tracking-tight drop-shadow-sm">
                All your portals,<br />
                in one place
              </h1>

              <p className="text-sm lg:text-base italic font-serif text-[#F3E2B3] tracking-wide">
                Choose a portal to continue
              </p>
            </div>
          </div>

          {/* Slanted Metallic Gold Diagonal Divider Line */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            <defs>
              <linearGradient id="heroGoldDiagonal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#DFC06A" />
                <stop offset="100%" stopColor="#B87E1E" />
              </linearGradient>
            </defs>
            <line
              x1="46"
              y1="0"
              x2="35.88"
              y2="100"
              stroke="url(#heroGoldDiagonal)"
              strokeWidth="0.45"
              className="lg:hidden"
            />
            <line
              x1="44"
              y1="0"
              x2="34.32"
              y2="100"
              stroke="url(#heroGoldDiagonal)"
              strokeWidth="0.4"
              className="hidden lg:block"
            />
          </svg>
        </div>

        {/* MOBILE HERO (< 768px): High-Res Campus Photo + Angled Purple Transition */}
        <div className="md:hidden relative w-full overflow-hidden bg-[#1B0329]">
          <div className="relative w-full h-56 overflow-hidden">
            <img
              src="/assets/portals_hero.jpg"
              alt="Jyothi Engineering College Students Collaborating on Campus"
              className="w-full h-full object-cover object-[center_30%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B0329] via-[#1B0329]/35 to-transparent" />
          </div>

          {/* Gold Diagonal Accent */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C]" />

          <div className="relative px-6 py-7 bg-gradient-to-br from-[#2B0740] via-[#200431] to-[#160222] text-white space-y-3">
            <div className="w-9 h-[2.5px] bg-[#DFC06A] rounded-full" />
            <h1 className="text-3xl font-black font-brand leading-tight tracking-tight text-white">
              All your portals,<br />
              in one place
            </h1>
            <p className="text-sm italic font-serif text-[#F3E2B3]">
              Choose a portal to continue
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CHOOSE YOUR LOGIN SECTION (MINIMALIST 6-CARD GRID) */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#FAF7F2] py-9 sm:py-12 lg:py-14 border-b border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading with Gold Lines and Three Diamond Outlines */}
          <ScrollReveal>
            <div className="text-center space-y-1.5 mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-[#DFC06A] w-16 sm:w-40" />
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black font-brand text-[#250836] tracking-tight">
                  Choose Your Login
                </h2>
                <div className="h-[1px] bg-gradient-to-l from-transparent to-[#DFC06A] w-16 sm:w-40" />
              </div>
              <div className="flex items-center justify-center gap-2 text-[#C9902C] text-xs font-semibold">
                <span>◇</span>
                <span>◇</span>
                <span>◇</span>
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Minimalist Portal Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {PORTALS_LIST.map((portal, idx) => (
              <ScrollReveal key={portal.id} delay={idx * 70}>
                <button
                  type="button"
                  onClick={() => handleOpenPortal(portal)}
                  className="w-full text-left relative overflow-hidden rounded-2xl bg-white border border-[#EDE6DC] px-5 py-5 sm:px-6 sm:py-5 shadow-[0_6px_22px_-8px_rgba(37,8,54,0.10)] hover:shadow-[0_16px_34px_-10px_rgba(37,8,54,0.18)] hover:border-[#DFC06A] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  {/* Soft Light-Purple Curved Corner Accent (Bottom-Right) */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-8 -right-8 w-36 h-24 rounded-[100%] bg-gradient-to-tl from-[#E9DDF4] via-[#F2EBF9]/80 to-transparent pointer-events-none transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="relative z-10 flex items-end justify-between gap-4">
                    <div className="space-y-3">
                      {/* Duo-Tone Purple & Gold Line-Art Icon */}
                      <div className="inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {portal.icon}
                      </div>

                      {/* Portal Title */}
                      <h3 className="text-lg sm:text-[19px] font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors leading-snug">
                        {portal.title}
                      </h3>

                      {/* Short Gold Accent Bar */}
                      <div className="w-8 h-[2px] bg-[#C9902C] rounded-full transition-all duration-300 group-hover:w-12" />
                    </div>

                    {/* Soft-Purple Circular Arrow Action Button */}
                    <div className="w-9 h-9 rounded-full bg-[#EFE7F6] text-[#381053] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#250836] group-hover:text-[#DFC06A] group-hover:scale-105 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {/* Quick Help & Assistance Bar */}
          <ScrollReveal delay={120}>
            <div className="mt-14 p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 shadow-xs">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#DFC06A] shrink-0" />
                <span>Need help logging in or forgot your credentials? Contact Jyothi IT Helpdesk:</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-[#250836]">
                <a href="tel:+914884259000" className="hover:text-[#DFC06A] transition-colors">
                  +91 4884 259000 (Ext. 242)
                </a>
                <span>•</span>
                <a href="mailto:erp@jecc.ac.in" className="hover:text-[#DFC06A] transition-colors">
                  erp@jecc.ac.in
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. INTERACTIVE PORTAL FEATURES & SERVICES MATRIX */}
      {/* ============================================================== */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#DFC06A]/40">
            Digital Campus Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-brand text-[#1E092B]">
            Portal Capabilities & Direct Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore dedicated toolsets configured for students, faculty members, parents, accounts, and hostel residents under Jyothi's autonomous academic framework.
          </p>
        </div>

        {/* Tab Selector Buttons (Single-Row Segmented Bar on Desktop, Balanced Grid on Mobile/Tablet) */}
        <div className="flex justify-center mb-8">
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 lg:inline-flex lg:flex-nowrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs">
            {PORTAL_TABS.map((tab, idx) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    idx === PORTAL_TABS.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                  } ${
                    isActive
                      ? 'bg-gradient-to-r from-[#250836] to-[#3A1053] text-[#DFC06A] shadow-md'
                      : 'text-[#250836]/75 hover:text-[#250836] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="space-y-6">
            
            {/* Tab Header Banner */}
            <div className="border-b border-slate-100 pb-5">
              <span className="text-[10px] font-bold text-[#8A5A12] uppercase tracking-wider">
                Module Breakdown
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-brand text-[#250836] mt-1">
                {currentTabInfo.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 italic font-serif mt-1">
                {currentTabInfo.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                {currentTabInfo.description}
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentTabInfo.features.map((feat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200/80 hover:border-[#DFC06A] transition-colors space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#250836] text-[#DFC06A] flex items-center justify-center shrink-0">
                      {feat.icon}
                    </div>
                    <h4 className="font-bold text-sm text-[#1E092B]">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-10">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ============================================================== */}
      {/* 5. STEP-BY-STEP SELF-SERVICE & FIRST-TIME SCHOLAR GUIDES */}
      {/* ============================================================== */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#DFC06A]/40">
              User Assistance & Guides
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-brand text-[#1E092B] mt-2">
              Self-Service & Onboarding Manuals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Step-by-step instructions for first-time password creation, WiFi device setup, and online fee receipt generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SELF_SERVICE_GUIDES.map((guide, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-[#DFC06A] transition-all flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#250836] flex items-center justify-center">
                      {guide.icon}
                    </div>
                    <h3 className="font-bold text-base text-[#1E092B]">
                      {guide.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-[#8A5A12] border border-[#DFC06A]/30">
                    {guide.badge}
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  {guide.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-[#250836] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        {sIdx + 1}
                      </div>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Standard Response: &lt; 2 mins</span>
                <button
                  onClick={() => {
                    const portal = PORTALS_LIST[idx % PORTALS_LIST.length];
                    handleOpenPortal(portal);
                  }}
                  className="font-bold text-[#8A5A12] hover:text-[#250836] flex items-center gap-1 cursor-pointer"
                >
                  <span>Launch Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ============================================================== */}
      {/* 6. INTERACTIVE FAQS ACCORDION */}
      {/* ============================================================== */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#DFC06A]/40">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-brand text-[#1E092B]">
            Common Inquiries & Troubleshooting
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about autonomous attendance policies, OTP verification, and parent portal access.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#250836] hover:text-[#3C1361] cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#DFC06A] font-mono text-xs">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#DFC06A]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FCFBF8]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      </ScrollReveal>

      {/* ============================================================== */}
      {/* 6. SECURITY & INSTITUTIONAL COMPLIANCE NOTICE */}
      {/* ============================================================== */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 py-3 px-6 rounded-full bg-slate-100/70 border border-slate-200">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>ISO 9001:2015 Certified IT Systems</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Lock className="w-3.5 h-3.5 text-amber-600" />
              <span>Digital Personal Data Protection (DPDP) Compliant</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Server className="w-3.5 h-3.5 text-purple-600" />
              <span>Automated Daily Backup & Disaster Recovery</span>
            </span>
          </div>
        </section>
      </ScrollReveal>

      {/* ============================================================== */}
      {/* 9. INTERACTIVE LOGIN MODAL FOR SELECTED PORTAL */}
      {/* ============================================================== */}
      {selectedPortal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none overflow-y-auto">
          <div onClick={() => setSelectedPortal(null)} className="fixed inset-0 bg-transparent" />

          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800 my-auto max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#180323] text-white p-6 relative border-b border-[#DFC06A]/30 shrink-0">
              <button
                onClick={() => setSelectedPortal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/30 uppercase">
                  {selectedPortal.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-brand text-white">
                  {selectedPortal.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {selectedPortal.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Form / Authenticated State */}
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              {isAuthenticated ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-[#1E092B]">
                    Authentication Successful!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Logged in as <strong>{selectedPortal.fields.userRole}</strong>.
                  </p>
                  
                  <div className="p-3.5 rounded-2xl bg-[#FCFBF8] border border-slate-200 text-left text-xs space-y-1 text-slate-700">
                    <div>• <strong>Session ID:</strong> JEC-SSO-94821</div>
                    <div>• <strong>Academic Year:</strong> 2024–2025 (Autonomous)</div>
                    <div>• <strong>Status:</strong> Active & Synchronized with APJ KTU</div>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={() => setSelectedPortal(null)}
                      className="flex-1 py-2.5 rounded-xl bg-[#250836] text-[#DFC06A] font-bold text-xs hover:bg-[#340b4d] transition-colors"
                    >
                      Enter Dashboard
                    </button>
                    <button
                      onClick={() => setIsAuthenticated(false)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {selectedPortal.fields.usernameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={selectedPortal.fields.usernamePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#DFC06A] focus:ring-1 focus:ring-[#DFC06A]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-slate-700">
                          Password / PIN
                        </label>
                        <a
                          href="#reset"
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Password reset instructions sent to registered phone/email for ${selectedPortal.title}.`);
                          }}
                          className="text-[11px] text-[#8A5A12] hover:underline"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#DFC06A] focus:ring-1 focus:ring-[#DFC06A]"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="rounded text-[#250836] focus:ring-[#DFC06A]"
                        />
                        <span className="text-slate-600 text-[11px]">Remember on this device</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] text-[#1E052B] font-bold text-xs sm:text-sm shadow-md hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Sign In to {selectedPortal.title}</span>
                    </button>
                  </form>

                  {/* Quick Demo Credentials Helper */}
                  <div className="p-3 rounded-2xl bg-amber-50/70 border border-[#DFC06A]/30 text-xs text-slate-700 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-bold text-[#8A5A12]">Quick Test Login:</div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {selectedPortal.fields.demoUser}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleDemoLogin}
                      className="px-3 py-1.5 rounded-lg bg-[#250836] text-[#DFC06A] font-bold text-[11px] hover:bg-[#340b4d] transition-colors cursor-pointer"
                    >
                      Auto-Fill & Sign In
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500">
              Jyothi Engineering College (Autonomous) • Approved by AICTE & Affiliated to KTU
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
