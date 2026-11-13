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
    icon: <GraduationCap className="w-7 h-7 text-[#DFC06A]" />,
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
    isFeatured: true, // Matching the highlighted state in user mockup
    icon: <BookOpen className="w-7 h-7 text-[#DFC06A]" />,
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
    icon: <Users className="w-7 h-7 text-[#DFC06A]" />,
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
      <div className="w-7 h-7 flex items-center justify-center font-bold text-[#DFC06A] text-xl border-2 border-[#DFC06A] rounded-lg">
        ₹
      </div>
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
    icon: <Building2 className="w-7 h-7 text-[#DFC06A]" />,
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
    icon: <Building2 className="w-7 h-7 text-[#DFC06A]" />,
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
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E092B] selection:bg-[#250836] selection:text-[#DFC06A] pb-24 overflow-x-hidden">
      
      {/* ============================================================== */}
      {/* 1. LUXURY HERO BANNER (1:1 USER MOCKUP & FULLY RESPONSIVE) */}
      {/* ============================================================== */}
      
      {/* A. TABLET & DESKTOP BANNER (>= 640px): 1:1 Pixel-Perfect Match with User Mockup */}
      <section className="hidden sm:block relative w-full overflow-hidden bg-[#1B0428] shadow-md">
        {/* Top Gold Trim Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9902C] via-[#FDE68A] to-[#C9902C] z-30" />

        <div className="w-full relative aspect-[1024/295] max-h-[560px]">
          <img
            src="/assets/portals_hero_banner.jpg"
            alt="All your portals, in one place - Jyothi Engineering College Campus Portals"
            className="w-full h-full object-cover object-center select-none"
            loading="eager"
          />

          {/* Accessible Screen Reader Information */}
          <div className="sr-only">
            <h1>All your portals, in one place</h1>
            <p>Choose a portal to continue</p>
          </div>
        </div>
      </section>

      {/* B. MOBILE OPTIMIZED HERO BANNER (< 640px): Large Legible Typography & High-Res Campus Photo */}
      <section className="sm:hidden relative w-full overflow-hidden bg-[#1B0428]">
        {/* Top Gold Trim Accent Line */}
        <div className="h-1 bg-gradient-to-r from-[#C9902C] via-[#FDE68A] to-[#C9902C]" />

        {/* Jyothi Engineering College Students & Main Building Photo */}
        <div className="relative w-full h-52 overflow-hidden bg-slate-900">
          <img
            src="/assets/portals_hero.jpg"
            alt="Jyothi Engineering College Students Collaborating on Campus"
            className="w-full h-full object-cover object-[center_28%]"
            loading="eager"
          />
          {/* Smooth Gradient Transition to Branded Purple Surface */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B0428] via-[#1B0428]/45 to-transparent" />
        </div>

        {/* Mobile Branded Typography Section */}
        <div className="px-5 pb-7 pt-2 bg-[#1B0428] text-white space-y-3 relative z-10">
          {/* Gold Bar Accent */}
          <div className="w-12 h-1 bg-[#DFC06A] rounded-full" />

          {/* Main Headline */}
          <h1 className="text-3xl font-black font-brand leading-tight text-white tracking-tight">
            All your portals,<br />
            in one place
          </h1>

          {/* Subtitle in Cursive / Italic Serif */}
          <p className="text-sm italic font-serif text-[#FDE68A] pb-1">
            Choose a portal to continue
          </p>
        </div>
      </section>

      {/* C. UNDER PORTION ACCENT: Small Same Image Grass Strip with Gold Hairline Trim */}
      <div className="relative w-full h-3 sm:h-4 overflow-hidden border-t border-b border-[#DFC06A]/40 shadow-xs z-20">
        <img
          src="/assets/portals_hero.jpg"
          alt="Campus Lawn Grass"
          className="w-full h-full object-cover object-[center_92%] brightness-[1.02]"
        />
        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B0428]/35 via-transparent to-[#1B0428]/25" />
      </div>

      {/* ============================================================== */}
      {/* 2. CHOOSE YOUR LOGIN SECTION (1:1 6-CARD GRID MATCH) */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#FAF7F2] py-14 sm:py-20 border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading with Gold Lines and Diamond Flourish */}
          <div className="text-center space-y-2 mb-12">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-[#DFC06A] w-20 sm:w-36" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-brand text-[#250836]">
                Choose Your Login
              </h2>
              <div className="h-[1px] bg-gradient-to-l from-transparent to-[#DFC06A] w-20 sm:w-36" />
            </div>
            <div className="text-xs text-[#DFC06A] font-bold tracking-widest">
              ✧ ◇ ✧
            </div>
          </div>

          {/* 6 Portal Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {PORTALS_LIST.map((portal) => (
              <div
                key={portal.id}
                onClick={() => handleOpenPortal(portal)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:-translate-y-1.5 ${
                  portal.isFeatured
                    ? 'bg-gradient-to-br from-white via-[#FAF5FE] to-[#FFFBF0] border-2 border-[#DFC06A] shadow-xl shadow-[#DFC06A]/15 ring-2 ring-[#DFC06A]/20'
                    : 'bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-[#250836]/8 hover:border-[#DFC06A]'
                }`}
              >
                {/* Subtle Radiant Bottom Light Glow for Featured Faculty Card */}
                {portal.isFeatured && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-4 bg-gradient-to-r from-transparent via-[#DFC06A]/60 to-transparent blur-md pointer-events-none" />
                )}

                {/* Subtle bottom-left decorative watermark contour lines (1:1 Reference Match) */}
                <svg className="absolute bottom-0 left-0 w-28 h-20 pointer-events-none opacity-30 group-hover:opacity-45 transition-opacity" viewBox="0 0 120 80" fill="none">
                  <path d="M 0 35 C 35 42, 70 55, 110 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 47 C 30 52, 60 62, 95 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 59 C 25 62, 50 70, 80 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 71 C 20 72, 40 76, 65 80" stroke="#DFC06A" strokeWidth="0.8" />
                </svg>

                <div className="space-y-4">
                  
                  {/* Top Row: Icon Container and Title */}
                  <div className="flex items-center gap-3.5">
                    
                    {/* Golden Icon Container */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {portal.icon}
                    </div>

                    {/* Portal Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors leading-snug">
                      {portal.title}
                    </h3>
                  </div>

                  {/* Subtitle Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal min-h-[36px]">
                    {portal.subtitle}
                  </p>
                </div>

                {/* Bottom Row: Circular Purple Arrow Action Button */}
                <div className="pt-4 mt-2 flex items-center justify-end border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help & Assistance Bar */}
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

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. INTERACTIVE PORTAL FEATURES & SERVICES MATRIX */}
      {/* ============================================================== */}
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

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 max-w-3xl mx-auto mb-8">
          {PORTAL_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#250836] text-[#DFC06A] shadow-md scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
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

      {/* ============================================================== */}
      {/* 5. STEP-BY-STEP SELF-SERVICE & FIRST-TIME SCHOLAR GUIDES */}
      {/* ============================================================== */}
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

      {/* ============================================================== */}
      {/* 6. INTERACTIVE FAQS ACCORDION */}
      {/* ============================================================== */}
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

      {/* ============================================================== */}
      {/* 6. SECURITY & INSTITUTIONAL COMPLIANCE NOTICE */}
      {/* ============================================================== */}
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
