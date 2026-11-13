import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, Award, Users, BookOpen, Calendar, FileText,
  DollarSign, CheckCircle2, ChevronRight, Download, ExternalLink,
  Layers, Landmark, GraduationCap, Briefcase, Clock, Compass,
  Sparkles, ArrowRight, ArrowUpRight, Scale, CheckCircle, Search,
  X, MapPin, Building2, UserCheck
} from 'lucide-react';
import {
  GOVERNING_BODY_MEMBERS,
  ACADEMIC_COUNCIL_MEMBERS,
  FINANCE_COMMITTEE_MEMBERS,
  BOS_STREAMS,
  AUTONOMOUS_REGULATIONS,
  ACADEMIC_CALENDAR_SEMESTERS,
  BoardOfStudiesStream,
  CommitteeMember
} from '../data/autonomousData';
import { DEPARTMENTS } from '../data/collegeData';

interface Props {
  subSection?: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

type TabType =
  | 'governing-body'
  | 'academic-council'
  | 'finance-committee'
  | 'board-of-studies'
  | 'regulations'
  | 'curriculum-syllabus'
  | 'academic-calendar';

interface MemberCardProps {
  member: CommitteeMember;
  index: number;
  onSelect: (m: CommitteeMember) => void;
}

const ScrollAnimatedMemberCard: React.FC<MemberCardProps> = ({ member, index, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Trigger sequential 1-by-1 entrance animation as cards scroll into the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stagger calculation: 1-by-1 entrance per row as you scroll (160ms cascade)
  const staggerDelay = (index % 3) * 160;

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: isVisible ? `${staggerDelay}ms` : '0ms',
      }}
      className={`group bg-white rounded-2xl border border-slate-200/90 hover:border-[#DFC06A] shadow-xs hover:shadow-2xl hover:shadow-[#250836]/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-2 relative transform-gpu ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-16 scale-[0.95] pointer-events-none'
      }`}
      onClick={() => onSelect(member)}
    >
      <div>
        {/* Photo Container with Centered Framing & Headroom */}
        <div className="h-60 sm:h-64 w-full relative overflow-hidden bg-slate-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Subtle Category Badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <span
              className={`text-[10px] font-bold px-3 py-1 rounded-lg shadow-sm backdrop-blur-md ${
                member.category === 'Management'
                  ? 'bg-purple-100/95 text-purple-900 border border-purple-200'
                  : member.category === 'Faculty'
                  ? 'bg-amber-100/95 text-amber-900 border border-amber-200'
                  : member.category === 'UGC Nominee'
                  ? 'bg-blue-100/95 text-blue-900 border border-blue-200'
                  : member.category === 'State Govt Nominee'
                  ? 'bg-emerald-100/95 text-emerald-900 border border-emerald-200'
                  : member.category === 'Industry Stalwart'
                  ? 'bg-indigo-100/95 text-indigo-900 border border-indigo-200'
                  : 'bg-purple-100/95 text-purple-900 border border-purple-200'
              }`}
            >
              {member.category}
            </span>
          </div>
        </div>

        {/* Member Body */}
        <div className="p-5 space-y-1">
          <h4 className="font-bold text-base sm:text-lg font-brand text-[#1E092B] group-hover:text-[#250836] transition-colors leading-snug">
            {member.name}
          </h4>
          <p className="text-xs font-semibold text-[#8A5A12]">
            {member.role}
          </p>
        </div>
      </div>

      {/* Card Footer with Animated View Profile CTA */}
      <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#250836] group-hover:bg-[#250836] group-hover:text-[#DFC06A] transition-all">
        <span className="text-xs font-bold">View Profile</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </div>
  );
};

export const AutonomousPage: React.FC<Props> = ({ subSection, onNavigate, onOpenApply, onOpenTour }) => {
  const [activeTab, setActiveTab] = useState<TabType>('governing-body');
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);
  const [selectedBos, setSelectedBos] = useState<BoardOfStudiesStream>(BOS_STREAMS[0]);
  const [selectedDeptCode, setSelectedDeptCode] = useState<string>('CSE');
  const [selectedSemester, setSelectedSemester] = useState<number>(3);
  const [calendarSem, setCalendarSem] = useState<number>(0); // 0 = Monsoon, 1 = Spring

  // Map subSection prop to activeTab
  useEffect(() => {
    if (subSection) {
      const clean = subSection.toLowerCase().replace(/_/g, '-');
      if (
        [
          'governing-body',
          'academic-council',
          'finance-committee',
          'board-of-studies',
          'regulations',
          'curriculum-syllabus',
          'academic-calendar'
        ].includes(clean)
      ) {
        setActiveTab(clean as TabType);
      }
    }
  }, [subSection]);

  // Lock body scroll when profile modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedMember(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedMember]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.location.hash = `autonomous/${tab}`;
  };

  // Sample course syllabus breakdown per semester for Choice-Based Credit System
  const SAMPLE_SEMESTER_COURSES: Record<string, { code: string; title: string; ltp: string; credits: number; category: string }[]> = {
    '1': [
      { code: "24MAT101", title: "Linear Algebra and Calculus", ltp: "3-1-0", credits: 4, category: "Basic Science" },
      { code: "24PHT100", title: "Engineering Physics for Computing", ltp: "3-1-0", credits: 4, category: "Basic Science" },
      { code: "24EST100", title: "Engineering Mechanics & Dynamics", ltp: "2-1-0", credits: 3, category: "Engineering Science" },
      { code: "24EST102", title: "Programming for Problem Solving (Python)", ltp: "3-0-2", credits: 4, category: "Core Foundation" },
      { code: "24HUN101", title: "Life Skills & Professional Ethics", ltp: "2-0-0", credits: 2, category: "Humanities" },
      { code: "24PHL120", title: "Engineering Physics Laboratory", ltp: "0-0-2", credits: 1, category: "Practical Lab" },
      { code: "24ESL130", title: "Computer Programming Laboratory", ltp: "0-0-2", credits: 1, category: "Practical Lab" }
    ],
    '3': [
      { code: "24MAT203", title: "Discrete Mathematical Structures", ltp: "3-1-0", credits: 4, category: "Basic Science" },
      { code: "24CST201", title: "Data Structures & Algorithm Design", ltp: "3-1-0", credits: 4, category: "Program Core" },
      { code: "24CST203", title: "Object Oriented Programming using Java", ltp: "3-0-0", credits: 3, category: "Program Core" },
      { code: "24CST205", title: "Computer Organization & Architecture", ltp: "3-1-0", credits: 4, category: "Program Core" },
      { code: "24MCN201", title: "Sustainable Engineering & Ethics", ltp: "2-0-0", credits: 2, category: "Mandatory Non-Credit" },
      { code: "24CSL201", title: "Data Structures Laboratory", ltp: "0-0-3", credits: 2, category: "Practical Lab" },
      { code: "24CSL203", title: "Object Oriented Programming Laboratory", ltp: "0-0-3", credits: 2, category: "Practical Lab" },
      { code: "24HON201", title: "[Honours/Minor Option] Foundations of Deep Learning", ltp: "3-1-0", credits: 4, category: "Honours Track" }
    ],
    '5': [
      { code: "24CST301", title: "Formal Languages and Automata Theory", ltp: "3-1-0", credits: 4, category: "Program Core" },
      { code: "24CST303", title: "Computer Networks & Protocol Suite", ltp: "3-1-0", credits: 4, category: "Program Core" },
      { code: "24CST305", title: "System Software & Microprocessors", ltp: "3-0-0", credits: 3, category: "Program Core" },
      { code: "24CST307", title: "Database Management Systems", ltp: "3-1-0", credits: 4, category: "Program Core" },
      { code: "24CSE311", title: "Professional Elective I: Cloud Architecture & DevOps", ltp: "3-0-0", credits: 3, category: "Elective" },
      { code: "24CSL301", title: "Database Management Systems Lab", ltp: "0-0-3", credits: 2, category: "Practical Lab" },
      { code: "24CSD303", title: "Mini Project & Product Prototyping (FabLab)", ltp: "0-0-3", credits: 2, category: "Design Lab" }
    ],
    '7': [
      { code: "24CST401", title: "Artificial Intelligence & Expert Systems", ltp: "3-0-0", credits: 3, category: "Program Core" },
      { code: "24CST403", title: "Cryptography and Cyber Security", ltp: "3-0-0", credits: 3, category: "Program Core" },
      { code: "24CSE413", title: "Professional Elective III: Natural Language Processing", ltp: "3-0-0", credits: 3, category: "Elective" },
      { code: "24CSE425", title: "Professional Elective IV: Blockchain Technologies", ltp: "3-0-0", credits: 3, category: "Elective" },
      { code: "24CSO401", title: "Open Elective: Introduction to Robotics & ROS", ltp: "3-0-0", credits: 3, category: "Open Elective" },
      { code: "24CSP401", title: "Capstone Project Phase - 1", ltp: "0-0-6", credits: 3, category: "Project Core" }
    ]
  };

  const currentCourseList = SAMPLE_SEMESTER_COURSES[selectedSemester.toString()] || SAMPLE_SEMESTER_COURSES['3'];

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E092B] selection:bg-[#250836] selection:text-[#DFC06A] pb-24">

      {/* ============================================================== */}
      {/* 1. LUXURY EDITORIAL HERO BANNER (1:1 TARGET MATCH) */}
      {/* ============================================================== */}
      <section className="relative w-full min-h-[380px] sm:min-h-[420px] lg:h-[460px] flex overflow-hidden bg-[#1B0428] border-b border-slate-200">
        
        {/* RIGHT SIDE: Authentic Sunlit Campus Building & Palm Tree Esplanade */}
        <div className="absolute top-0 right-0 w-full md:w-[62%] lg:w-[60%] h-full z-0 overflow-hidden">
          <img
            src="/assets/autonomous_campus_hero.jpg"
            alt="Jyothi Engineering College Autonomous Main Building & Lush Campus"
            className="w-full h-full object-cover object-[right_30%] scale-100 brightness-[1.02] contrast-[1.02]"
          />
          {/* Mobile Adaptive Dark Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B0428] via-[#1B0428]/95 to-[#1B0428]/70 md:hidden z-[1]" />
        </div>

        {/* LEFT SIDE: Deep Royal Purple Curved Architectural Surface with Gold Trim */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-[2]">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 460"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purpleHeroSurface" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B0428" />
                <stop offset="50%" stopColor="#28073C" />
                <stop offset="100%" stopColor="#170322" />
              </linearGradient>
              <linearGradient id="goldSwoopBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFC06A" />
                <stop offset="30%" stopColor="#FDE68A" />
                <stop offset="65%" stopColor="#C9902C" />
                <stop offset="100%" stopColor="#DFC06A" />
              </linearGradient>
              <filter id="heroSwoopShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="6" dy="0" stdDeviation="12" floodColor="#100218" floodOpacity="0.55" />
              </filter>
            </defs>

            {/* Left Purple Canvas with Smooth Organic Arching S-Curve */}
            <path
              d="M 0 0 L 590 0 C 575 100, 520 220, 475 320 C 450 375, 430 420, 440 460 L 0 460 Z"
              fill="url(#purpleHeroSurface)"
              filter="url(#heroSwoopShadow)"
            />

            {/* Primary Metallic Gold Contour Line */}
            <path
              d="M 590 0 C 575 100, 520 220, 475 320 C 450 375, 430 420, 440 460"
              stroke="url(#goldSwoopBorder)"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Inner Metallic Gold Hairline Accent */}
            <path
              d="M 584 0 C 569 100, 514 220, 469 320 C 444 375, 424 420, 434 460"
              stroke="#FFF8D6"
              strokeWidth="1.2"
              strokeOpacity="0.75"
              fill="none"
            />
          </svg>
        </div>

        {/* HERO EDITORIAL TEXT CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex items-center">
          <div className="max-w-xl md:max-w-lg lg:max-w-xl space-y-3.5 text-white">
            
            {/* Top Outline Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFC06A]/60 bg-[#1E052B]/80 text-[#FDE68A] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm animate-fade-in">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFC06A] shrink-0" />
              <span>UGC & KTU Autonomous Institution Governance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-black font-brand leading-[1.12] text-white tracking-tight animate-slide-up">
              Academic Autonomy &<br />
              Institutional<br />
              Governance
            </h1>

            {/* Horizontal Gold Accent Bar (1:1 Reference Match) */}
            <div className="w-14 h-[3.5px] bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] rounded-full my-3 shadow-sm animate-fade-in" />

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal pt-1 max-w-md animate-slide-up">
              A framework for academic excellence and responsible governance, fostering institutional autonomy, academic quality, and stakeholder accountability at Jyothi Engineering College.
            </p>

          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* 2. ELEVATED FLOATING SUB-HEADING NAVIGATION PILL (7 BODIES) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-7 relative z-20">
        <div className="bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-[#DFC06A]/40 shadow-xl shadow-[#250836]/10 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 min-w-max">
            
            {/* 1. Governing Body */}
            <button
              onClick={() => handleTabChange('governing-body')}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'governing-body'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/30'
                  : 'text-[#250836] hover:bg-amber-50/70 hover:text-[#250836]'
              }`}
            >
              <Landmark className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Governing Body</span>
            </button>

            {/* 2. Academic Council */}
            <button
              onClick={() => handleTabChange('academic-council')}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'academic-council'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/30'
                  : 'text-[#250836] hover:bg-amber-50/70 hover:text-[#250836]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Academic Council</span>
            </button>

            {/* 3. Finance Committee */}
            <button
              onClick={() => handleTabChange('finance-committee')}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'finance-committee'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/30'
                  : 'text-[#250836] hover:bg-amber-50/70 hover:text-[#250836]'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Finance Committee</span>
            </button>

            {/* 4. Board of Studies */}
            <button
              onClick={() => handleTabChange('board-of-studies')}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'board-of-studies'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/30'
                  : 'text-[#250836] hover:bg-amber-50/70 hover:text-[#250836]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Board of Studies</span>
            </button>

            {/* 5. Regulations */}
            <button
              onClick={() => handleTabChange('regulations')}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'regulations'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/30'
                  : 'text-[#250836] hover:bg-amber-50/70 hover:text-[#250836]'
              }`}
            >
              <Scale className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Regulations</span>
            </button>

            {/* 6. Curriculum and Syllabus */}
            <button
              onClick={() => handleTabChange('curriculum-syllabus')}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'curriculum-syllabus'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/30'
                  : 'text-[#250836] hover:bg-amber-50/70 hover:text-[#250836]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Curriculum & Syllabus</span>
            </button>

            {/* 7. Academic Calendar */}
            <button
              onClick={() => handleTabChange('academic-calendar')}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'academic-calendar'
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/30'
                  : 'text-[#250836] hover:bg-amber-50/70 hover:text-[#250836]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Academic Calendar</span>
            </button>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SUB-HEADING SECTION CONTENTS */}
      {/* ============================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* ============================================================ */}
        {/* TAB 1: GOVERNING BODY (EXACT MATCH TO REFERENCE DESIGN) */}
        {/* ============================================================ */}
        {activeTab === 'governing-body' && (
          <div className="space-y-10 animate-fade-in">
            
            {/* Header Description & Colonnade Background Arches */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs overflow-hidden">
              
              {/* Neoclassical Colonnade Watermark Graphic */}
              <div className="absolute right-0 top-0 bottom-0 w-80 opacity-10 pointer-events-none hidden md:block">
                <svg className="w-full h-full" viewBox="0 0 300 200" fill="none">
                  <path d="M 40 180 L 40 40 Q 75 10, 110 40 L 110 180" stroke="#250836" strokeWidth="3" />
                  <path d="M 130 180 L 130 40 Q 165 10, 200 40 L 200 180" stroke="#250836" strokeWidth="3" />
                  <path d="M 220 180 L 220 40 Q 255 10, 290 40 L 290 180" stroke="#250836" strokeWidth="3" />
                  <line x1="10" y1="180" x2="300" y2="180" stroke="#250836" strokeWidth="4" />
                </svg>
              </div>

              <div className="relative z-10 max-w-3xl space-y-3">
                {/* Gold Pill Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#FFF8D6] text-[#8A5A12] border border-[#DFC06A]/30 text-[10px] font-bold uppercase tracking-wider">
                  Apex Statutory Authority
                </div>

                {/* Title with Ornamental Gold Line */}
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] whitespace-nowrap">
                    Governing Body
                  </h2>
                  <div className="flex-1 flex items-center">
                    <div className="h-[1px] bg-gradient-to-r from-[#DFC06A] to-transparent w-full" />
                    <span className="text-[#DFC06A] px-2 text-xs">✧</span>
                    <div className="h-[1px] bg-gradient-to-l from-[#DFC06A] to-transparent w-16" />
                  </div>
                </div>

                {/* Statutory Scope Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                  The Governing Body is the highest decision-making authority of Jyothi Engineering College (Autonomous). It shapes strategic institutional direction, approves annual operating budgets, sanctions new academic departments, endorses Academic Council recommendations, and ensures compliance with UGC and state regulatory mandates.
                </p>
              </div>
            </div>

            {/* Distinguished Members Heading & Subtitle */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-5 bg-[#C9902C] rounded-full" />
                  <h3 className="text-xl font-bold font-brand text-[#1E092B] tracking-tight">
                    Distinguished Members
                  </h3>
                </div>
                <span className="text-xs italic text-slate-400">
                  Illustrative portraits
                </span>
              </div>

              {/* 3-Column Staggered Animated Member Cards (Scroll-Triggered 1-by-1 Entrance Sequence) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {GOVERNING_BODY_MEMBERS.map((member, idx) => (
                  <ScrollAnimatedMemberCard
                    key={idx}
                    member={member}
                    index={idx}
                    onSelect={setSelectedMember}
                  />
                ))}
              </div>

            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: ACADEMIC COUNCIL */}
        {/* ============================================================ */}
        {activeTab === 'academic-council' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full">
                    Academic Governance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] mt-2">
                    Academic Council (AC)
                  </h2>
                </div>
                <div className="text-xs text-slate-500 max-w-sm">
                  Statutory council responsible for academic standards, CBCS curricula approvals, and degree evaluation rules.
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                The Academic Council scrutinizes and approves recommendations made by department Boards of Studies. It dictates admission rules, curriculum structures, continuous assessment protocols, relative grading boundaries, and student eligibility for Honours and Minors degrees.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#1E092B]">Academic Council Composition (2024–2026)</h3>
                <span className="text-xs text-[#DFC06A] font-bold bg-[#250836] px-3 py-1 rounded-full">
                  12 Key Members
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {ACADEMIC_COUNCIL_MEMBERS.map((member, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="font-bold text-slate-900 text-sm">{member.name}</div>
                      <div className="text-slate-600">{member.designation} • {member.organization}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2.5 py-1 rounded-lg bg-[#250836]/10 text-[#250836] font-bold">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: FINANCE COMMITTEE */}
        {/* ============================================================ */}
        {activeTab === 'finance-committee' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full">
                    Fiscal Stewardship
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] mt-2">
                    Finance Committee (FC)
                  </h2>
                </div>
                <div className="text-xs text-slate-500 max-w-sm">
                  Advisory body to the Governing Body on financial allocations, laboratory grants, and statutory audits.
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                The Finance Committee reviews recurring and non-recurring autonomous budget proposals, library book grants, doctoral research fellowships, DST project matching funds, and student entrepreneurship seed money from the Jyothi TBI incubator.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FINANCE_COMMITTEE_MEMBERS.map((member, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 inline-block">
                    {member.category}
                  </div>
                  <h4 className="font-bold text-sm text-[#1E092B]">{member.name}</h4>
                  <p className="text-xs font-semibold text-[#8A5A12]">{member.role}</p>
                  <p className="text-[11px] text-slate-500">{member.designation}, {member.organization}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: BOARD OF STUDIES */}
        {/* ============================================================ */}
        {activeTab === 'board-of-studies' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full">
                    Curriculum Engineering
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] mt-2">
                    Board of Studies (BoS)
                  </h2>
                </div>
                <div className="text-xs text-slate-500 max-w-sm">
                  Autonomous departmental committees tasked with drafting curricula, industry electives, and syllabi.
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                Each autonomous department operates its own Board of Studies comprising internal senior academicians, two external subject matter experts from IITs/NITs, one APJ KTU nominee, one Fortune 500 corporate representative, and one meritorious alumnus.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {BOS_STREAMS.map((stream) => (
                <button
                  key={stream.id}
                  onClick={() => setSelectedBos(stream)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedBos.id === stream.id
                      ? 'bg-[#250836] text-[#DFC06A] shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{stream.code}</span>
                  <span className="text-[10px] opacity-80">({stream.membersCount} Members)</span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFC06A] bg-[#250836] px-3 py-1 rounded-full">
                    Department Board
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-brand text-[#1E092B] mt-2">
                    Board of Studies in {selectedBos.deptName}
                  </h3>
                  <p className="text-xs text-slate-600 font-semibold mt-1">
                    Chairman: <strong className="text-[#8A5A12]">{selectedBos.chairman}</strong>
                  </p>
                </div>

                <div className="text-xs bg-slate-50 border border-slate-200 p-3 rounded-2xl space-y-1 shrink-0">
                  <div className="text-slate-500">Board Size: <strong className="text-slate-900">{selectedBos.membersCount} Experts</strong></div>
                  <div className="text-slate-500">Syllabus Dossier: <strong className="text-[#250836]">{selectedBos.syllabusDocSize}</strong></div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-slate-400">KTU University Nominee</div>
                  <div className="font-bold text-slate-900">{selectedBos.universityNominee}</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Industry Expert</div>
                  <div className="font-bold text-slate-900">{selectedBos.industryExpert}</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Academic Experts (IIT/NIT)</div>
                  <div className="font-bold text-slate-900">{selectedBos.academicExperts.join(', ')}</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Alumni Representative</div>
                  <div className="font-bold text-slate-900">{selectedBos.alumniRepresentative}</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A5A12] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                  Curricular Modernizations Introduced in R-2024 Scheme
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedBos.keyInnovations.map((item, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: REGULATIONS */}
        {/* ============================================================ */}
        {activeTab === 'regulations' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full">
                    Academic Ordinance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] mt-2">
                    Autonomous Academic Regulations (2024 Scheme)
                  </h2>
                </div>
                <div className="text-xs text-slate-500 max-w-sm">
                  Statutory guidelines governing degrees, examination evaluation, credit awards, and grading policies.
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                Jyothi's Autonomous Regulations (R-2024) are benchmarked against the Washington Accord and National Credit Framework (NCrF). They offer unmatched academic agility, allowing engineering students to undertake honours streams, interdisciplinary minors, and full-semester corporate internships.
              </p>
            </div>

            <div className="space-y-5">
              {AUTONOMOUS_REGULATIONS.map((reg) => (
                <div
                  key={reg.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-[#DFC06A] transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#250836] text-[#DFC06A] font-mono">
                        {reg.code}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-brand text-[#1E092B] mt-1.5">
                        {reg.title}
                      </h3>
                      <p className="text-xs text-[#8A5A12] font-semibold">{reg.targetDegree} • Effective {reg.effectiveYear}</p>
                    </div>

                    <div className="text-right sm:text-left text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200 shrink-0">
                      <div>Total Credits: <strong className="text-[#250836]">{reg.creditTotal}</strong></div>
                      <div>Scale: <strong className="text-slate-800">{reg.gradingScale}</strong></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Regulatory Highlights</h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {reg.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#DFC06A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-slate-500">Approved by Academic Council & Governing Body</span>
                    <button
                      onClick={() => alert(`Downloading Official Ordinance: ${reg.title} (PDF)`)}
                      className="px-4 py-2 rounded-xl bg-[#250836] hover:bg-[#3C1361] text-[#DFC06A] font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Full Regulations PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: CURRICULUM AND SYLLABUS */}
        {/* ============================================================ */}
        {activeTab === 'curriculum-syllabus' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full">
                    Choice-Based Credit System (CBCS)
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] mt-2">
                    Curriculum and Syllabus (R-2024 Scheme)
                  </h2>
                </div>
                <div className="text-xs text-slate-500 max-w-sm">
                  160 Regular Credits + 20 Optional Honours/Minors Credits across 8 Semesters.
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                Explore the autonomous semester-wise course breakdown. Jyothi engineering students select specialized electives in Generative AI, Cloud Infrastructure, Automotive Embedded Systems, and Clean Energy directly from Semester 5 onwards.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-slate-500 shrink-0">Stream:</span>
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDeptCode(dept.code)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedDeptCode === dept.code
                        ? 'bg-[#250836] text-[#DFC06A]'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {dept.code}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-slate-500 shrink-0">Semester:</span>
                {[1, 3, 5, 7].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setSelectedSemester(sem)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedSemester === sem
                        ? 'bg-[#DFC06A] text-[#1E092B]'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    S{sem}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm text-[#1E092B]">
                    {selectedDeptCode} • Semester {selectedSemester} Autonomous Syllabus
                  </h3>
                  <p className="text-xs text-slate-500">Choice-Based Credit System (CBCS) • Total Semester Credits: 21 Credits</p>
                </div>
                <button
                  onClick={() => alert(`Downloading ${selectedDeptCode} Semester ${selectedSemester} Syllabus (PDF)`)}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-[#250836] font-bold text-xs flex items-center gap-1.5 shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Syllabus PDF</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FCFBF8] text-slate-600 border-b border-slate-200 uppercase text-[10px] font-bold tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Course Code</th>
                      <th className="py-3 px-4">Course Title</th>
                      <th className="py-3 px-4">L-T-P</th>
                      <th className="py-3 px-4">Credits</th>
                      <th className="py-3 px-4">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {currentCourseList.map((c, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#250836]">{c.code}</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">{c.title}</td>
                        <td className="py-3.5 px-4 text-slate-600">{c.ltp}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-md bg-[#FFF8D6] text-[#8A5A12] font-bold">
                            {c.credits} Credits
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">{c.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 7: ACADEMIC CALENDAR */}
        {/* ============================================================ */}
        {activeTab === 'academic-calendar' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full">
                    Autonomous Schedule
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] mt-2">
                    Official Academic Calendar (2025–2026)
                  </h2>
                </div>
                <div className="text-xs text-slate-500 max-w-sm">
                  Punctual examination schedules, internal assessment windows, and guaranteed degree timelines.
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                Under autonomy, Jyothi adheres strictly to published semester milestones with zero strike interruptions. End-semester examination marks are verified by external boards and digital grade cards are issued within 20 days of exam completion.
              </p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCalendarSem(0)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    calendarSem === 0
                      ? 'bg-[#250836] text-[#DFC06A] shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Monsoon Semester (Odd Semesters)
                </button>
                <button
                  onClick={() => setCalendarSem(1)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    calendarSem === 1
                      ? 'bg-[#250836] text-[#DFC06A] shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Spring Semester (Even Semesters)
                </button>
              </div>

              <button
                onClick={() => alert("Downloading Official Jyothi Academic Calendar 2025-26 (PDF)")}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-[#250836] font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#DFC06A]" />
                <span>Download Calendar PDF</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-bold text-base font-brand text-[#1E092B]">
                  {ACADEMIC_CALENDAR_SEMESTERS[calendarSem].semester}
                </h3>
                <p className="text-xs text-slate-500">{ACADEMIC_CALENDAR_SEMESTERS[calendarSem].period}</p>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {ACADEMIC_CALENDAR_SEMESTERS[calendarSem].events.map((evt, eIdx) => (
                  <div key={eIdx} className="relative group">
                    <div className={`absolute -left-6 sm:-left-8 top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 ${
                      evt.status === 'Completed'
                        ? 'bg-slate-300 border-white'
                        : evt.status === 'Active'
                        ? 'bg-[#DFC06A] border-[#250836] ring-4 ring-[#DFC06A]/30'
                        : 'bg-[#250836] border-[#DFC06A]'
                    }`} />

                    <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200 hover:border-[#DFC06A] transition-all space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-[#8A5A12] bg-[#FFF8D6] px-2.5 py-0.5 rounded-full">
                          {evt.date}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          evt.category === 'Exam'
                            ? 'bg-rose-100 text-rose-800'
                            : evt.category === 'Cultural'
                            ? 'bg-purple-100 text-purple-800'
                            : evt.category === 'Audit'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {evt.category}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm text-[#1E092B]">{evt.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{evt.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* ============================================================== */}
      {/* 4. INTERACTIVE MEMBER PROFILE MODAL */}
      {/* ============================================================== */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none">
          <div
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-transparent"
          />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#180323] text-white p-6 sm:p-7 relative border-b border-[#DFC06A]/30">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#DFC06A] shadow-md shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/30 uppercase">
                    {selectedMember.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-brand text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#DFC06A]">
                    {selectedMember.role}
                  </p>
                  <p className="text-[11px] text-slate-300">
                    {selectedMember.designation} • {selectedMember.organization}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Content Body */}
            <div className="p-6 space-y-4 text-xs text-slate-700">
              {selectedMember.statutoryTerm && (
                <div className="p-3.5 rounded-xl bg-[#FCFBF8] border border-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Statutory Term:</span>
                  <span className="font-bold text-[#250836]">{selectedMember.statutoryTerm}</span>
                </div>
              )}

              {selectedMember.qualifications && (
                <div className="p-3.5 rounded-xl bg-[#FCFBF8] border border-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Qualifications:</span>
                  <span className="font-bold text-slate-900">{selectedMember.qualifications}</span>
                </div>
              )}

              <div className="space-y-1.5 pt-1">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#8A5A12]">
                  Governance Role & Contributions
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedMember.bio || `${selectedMember.name} serves with distinction on the statutory board, ensuring rigorous adherence to UGC Autonomous Regulations and fostering student research initiatives.`}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 rounded-xl bg-[#250836] hover:bg-[#3C1361] text-[#DFC06A] font-bold text-xs transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default AutonomousPage;
