import React, { useState, useEffect, useRef } from 'react';
import {
  Award, BookOpen, BarChart3, FileText, CheckCircle2,
  Calendar, Layers, ShieldCheck, Download, ChevronRight,
  ExternalLink, Sparkles, Users, ArrowRight, X, Clock,
  Check, FileCheck, Building2, HelpCircle, Phone, Mail
} from 'lucide-react';
import {
  IQAC_PILLARS,
  IQAC_REPORTS,
  IQAC_COMMITTEE,
  AccreditationPillar,
  IQACReportItem
} from '../data/iqacData';

interface Props {
  subSection?: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

// Reusable ScrollReveal component for smooth scroll animations
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    switch (direction) {
      case 'up': return 'translate-y-10 opacity-0';
      case 'down': return '-translate-y-10 opacity-0';
      case 'left': return 'translate-x-10 opacity-0';
      case 'right': return '-translate-x-10 opacity-0';
      default: return 'translate-y-10 opacity-0';
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

export const IQACPage: React.FC<Props> = ({ subSection, onNavigate, onOpenApply, onOpenTour }) => {
  const [selectedPillar, setSelectedPillar] = useState<AccreditationPillar | null>(null);
  const [selectedReport, setSelectedReport] = useState<IQACReportItem | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<string>('all');

  // Handle URL sub-hash navigation (e.g. #iqac/naac)
  useEffect(() => {
    if (subSection) {
      const pillarMatch = IQAC_PILLARS.find(p => p.id === subSection);
      if (pillarMatch) setSelectedPillar(pillarMatch);
      const reportMatch = IQAC_REPORTS.find(r => r.id === subSection);
      if (reportMatch) setSelectedReport(reportMatch);
    }
  }, [subSection]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedPillar || selectedReport) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedPillar(null);
          setSelectedReport(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedPillar, selectedReport]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E092B] selection:bg-[#250836] selection:text-[#DFC06A] pb-24 overflow-x-hidden">

      {/* ============================================================== */}
      {/* 1. LUXURY HERO BANNER (1:1 USER MOCKUP & FULLY RESPONSIVE) */}
      {/* ============================================================== */}

      {/* A. TABLET & DESKTOP BANNER (>= 640px): 1:1 Pixel-Perfect Match with User Mockup */}
      <section className="hidden sm:block relative w-full overflow-hidden bg-[#1B0428] border-b border-amber-900/20 shadow-md">
        {/* Top Gold Trim Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9902C] via-[#FDE68A] to-[#C9902C] z-30" />

        <div className="w-full relative aspect-[1024/294] max-h-[540px]">
          <img
            src="/assets/iqac_hero_banner_top.jpg"
            alt="Internal Quality Assurance Cell (IQAC) - Jyothi Engineering College"
            className="w-full h-full object-cover object-center select-none"
            loading="eager"
          />

          {/* Accessible Screen Reader Information */}
          <div className="sr-only">
            <span>QUALITY • EXCELLENCE • IMPROVEMENT</span>
            <h1>Internal Quality Assurance Cell (IQAC)</h1>
            <p>Building a culture of quality and continuous improvement.</p>
            <span>NAAC 'A' Grade • NBA Washington Accord • Autonomous Cycle</span>
          </div>
        </div>
      </section>

      {/* B. MOBILE OPTIMIZED HERO BANNER (< 640px): Large Legible Typography & High-Res Faculty Team Photo */}
      <section className="sm:hidden relative w-full overflow-hidden bg-[#1B0428] border-b border-amber-900/20">
        {/* Top Gold Trim Accent Line */}
        <div className="h-1 bg-gradient-to-r from-[#C9902C] via-[#FDE68A] to-[#C9902C]" />

        {/* IQAC Faculty Team Photo */}
        <div className="relative w-full h-52 overflow-hidden bg-slate-900">
          <img
            src="/assets/iqac_hero.jpg"
            alt="Internal Quality Assurance Cell Faculty Team at Jyothi Engineering College"
            className="w-full h-full object-cover object-[center_28%]"
            loading="eager"
          />
          {/* Smooth Gradient Transition to Branded Purple Surface */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B0428] via-[#1B0428]/45 to-transparent" />
        </div>

        {/* Mobile Branded Typography Section */}
        <div className="px-5 pb-7 pt-2 bg-[#1B0428] text-white space-y-3 relative z-10">
          {/* Quality Motto */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#DFC06A] uppercase">
            <span>QUALITY</span>
            <span>•</span>
            <span>EXCELLENCE</span>
            <span>•</span>
            <span>IMPROVEMENT</span>
          </div>

          {/* Main Headline with Vertical Gold Line */}
          <div className="pl-3.5 border-l-2 border-[#DFC06A]">
            <h1 className="text-2xl font-black font-brand leading-tight text-white tracking-tight">
              Internal Quality<br />
              Assurance Cell<br />
              (IQAC)
            </h1>
          </div>

          {/* Subtitle in Cursive / Italic Serif */}
          <p className="text-sm italic font-serif text-[#FDE68A]">
            Building a culture of quality and continuous improvement.
          </p>

          {/* Official Accreditation Endorsement Badges */}
          <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-300 font-medium">
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[#FDE68A] border border-[#DFC06A]/40 font-bold">
              NAAC 'A' Grade
            </span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold">
              NBA Washington Accord
            </span>
            <span>•</span>
            <span className="text-slate-300">Autonomous Cycle</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SUB-NAVIGATION STRIP (1:1 USER MOCKUP MATCH) */}
      {/* ============================================================== */}
      <nav className="w-full bg-[#250836] border-b border-[#DFC06A]/30 py-3 sm:py-3.5 shadow-md sticky top-[68px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-around flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-white">
          
          <button
            onClick={() => { scrollToSection('accreditation-pillars'); setSelectedPillar(IQAC_PILLARS[0]); }}
            className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-3 py-1.5 rounded-xl hover:bg-white/5"
          >
            <Award className="w-4 h-4 text-[#DFC06A] group-hover:scale-110 transition-transform" />
            <span>NAAC</span>
          </button>

          <span className="text-[#DFC06A]/40 select-none">|</span>

          <button
            onClick={() => { scrollToSection('accreditation-pillars'); setSelectedPillar(IQAC_PILLARS[1]); }}
            className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-3 py-1.5 rounded-xl hover:bg-white/5"
          >
            <Layers className="w-4 h-4 text-[#DFC06A] group-hover:scale-110 transition-transform" />
            <span>NBA</span>
          </button>

          <span className="text-[#DFC06A]/40 select-none">|</span>

          <button
            onClick={() => { scrollToSection('accreditation-pillars'); setSelectedPillar(IQAC_PILLARS[2]); }}
            className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-3 py-1.5 rounded-xl hover:bg-white/5"
          >
            <BarChart3 className="w-4 h-4 text-[#DFC06A] group-hover:scale-110 transition-transform" />
            <span>NIRF</span>
          </button>

          <span className="text-[#DFC06A]/40 select-none">|</span>

          <button
            onClick={() => scrollToSection('reports-section')}
            className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-3 py-1.5 rounded-xl hover:bg-white/5"
          >
            <FileText className="w-4 h-4 text-[#DFC06A] group-hover:scale-110 transition-transform" />
            <span>Reports</span>
          </button>

        </div>
      </nav>

      {/* ============================================================== */}
      {/* 3. QUALITY & ACCREDITATION (3-CARD GRID 1:1 REFERENCE MATCH) */}
      {/* ============================================================== */}
      <section id="accreditation-pillars" className="relative w-full bg-[#FAF7F2] py-14 sm:py-20 border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading with Gold Lines and Diamond Flourish */}
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center space-y-2 mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#8A5A12]">
                QUALITY & ACCREDITATION
              </span>
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-[#DFC06A] w-20 sm:w-36" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-brand text-[#250836]">
                  Our commitment to quality
                </h2>
                <div className="h-[1px] bg-gradient-to-l from-transparent to-[#DFC06A] w-20 sm:w-36" />
              </div>
              <div className="text-xs text-[#DFC06A] font-bold tracking-widest">
                ✧ ◇ ✧
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Accreditation Cards: NAAC, NBA, NIRF */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            
            {/* CARD 1: NAAC */}
            <ScrollReveal direction="up" delay={50}>
              <div
                onClick={() => setSelectedPillar(IQAC_PILLARS[0])}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-2xl hover:shadow-[#250836]/10 hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 h-full overflow-hidden"
              >
                {/* Subtle Decorative Golden Hairlines in Bottom Left */}
                <svg className="absolute bottom-0 left-0 w-28 h-20 pointer-events-none opacity-30 group-hover:opacity-45 transition-opacity" viewBox="0 0 120 80" fill="none">
                  <path d="M 0 35 C 35 42, 70 55, 110 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 47 C 30 52, 60 62, 95 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 59 C 25 62, 50 70, 80 80" stroke="#DFC06A" strokeWidth="0.8" />
                </svg>

                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    {/* Golden Icon Container */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-7 h-7 text-[#DFC06A]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors leading-snug">
                        NAAC
                      </h3>
                      <span className="text-[10px] font-bold text-[#8A5A12] uppercase tracking-wider">
                        Grade 'A' (3.25 CGPA)
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal min-h-[38px]">
                    Quality assessment and continuous enhancement of institutional processes.
                  </p>
                </div>

                <div className="pt-4 mt-2 flex items-center justify-end border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CARD 2: NBA */}
            <ScrollReveal direction="up" delay={150}>
              <div
                onClick={() => setSelectedPillar(IQAC_PILLARS[1])}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-2xl hover:shadow-[#250836]/10 hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 h-full overflow-hidden"
              >
                {/* Subtle Decorative Golden Hairlines in Bottom Left */}
                <svg className="absolute bottom-0 left-0 w-28 h-20 pointer-events-none opacity-30 group-hover:opacity-45 transition-opacity" viewBox="0 0 120 80" fill="none">
                  <path d="M 0 35 C 35 42, 70 55, 110 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 47 C 30 52, 60 62, 95 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 59 C 25 62, 50 70, 80 80" stroke="#DFC06A" strokeWidth="0.8" />
                </svg>

                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    {/* Golden Icon Container */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Layers className="w-7 h-7 text-[#DFC06A]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors leading-snug">
                        NBA
                      </h3>
                      <span className="text-[10px] font-bold text-[#8A5A12] uppercase tracking-wider">
                        Tier-II Washington Accord
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal min-h-[38px]">
                    Promotion of outcome-based education and programme quality.
                  </p>
                </div>

                <div className="pt-4 mt-2 flex items-center justify-end border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CARD 3: NIRF */}
            <ScrollReveal direction="up" delay={250}>
              <div
                onClick={() => setSelectedPillar(IQAC_PILLARS[2])}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-2xl hover:shadow-[#250836]/10 hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 h-full overflow-hidden"
              >
                {/* Subtle Decorative Golden Hairlines in Bottom Left */}
                <svg className="absolute bottom-0 left-0 w-28 h-20 pointer-events-none opacity-30 group-hover:opacity-45 transition-opacity" viewBox="0 0 120 80" fill="none">
                  <path d="M 0 35 C 35 42, 70 55, 110 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 47 C 30 52, 60 62, 95 80" stroke="#DFC06A" strokeWidth="0.8" />
                  <path d="M 0 59 C 25 62, 50 70, 80 80" stroke="#DFC06A" strokeWidth="0.8" />
                </svg>

                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    {/* Golden Icon Container */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <BarChart3 className="w-7 h-7 text-[#DFC06A]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors leading-snug">
                        NIRF
                      </h3>
                      <span className="text-[10px] font-bold text-[#8A5A12] uppercase tracking-wider">
                        Ministry of Education (MoE)
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal min-h-[38px]">
                    Institutional performance assessment and holistic improvement.
                  </p>
                </div>

                <div className="pt-4 mt-2 flex items-center justify-end border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. REPORTS & DOCUMENTS (1:1 USER MOCKUP MATCH) */}
      {/* ============================================================== */}
      <section id="reports-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        
        {/* Dark Purple Ribbon Title Banner */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#250836] via-[#380D4F] to-[#250836] text-white shadow-md border-l-4 border-[#DFC06A]">
              <FileText className="w-5 h-5 text-[#DFC06A]" />
              <h3 className="text-lg sm:text-xl font-bold font-brand text-white">
                Reports & Documents
              </h3>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#DFC06A] to-transparent hidden sm:block" />
          </div>
        </ScrollReveal>

        {/* 4 Report Cards (2 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* REPORT 1: Academic Calendar */}
          <ScrollReveal direction="up" delay={50}>
            <div
              onClick={() => setSelectedReport(IQAC_REPORTS[0])}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Calendar className="w-6 h-6 text-[#DFC06A]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Academic Calendar
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Odd & Even Semesters • 2024–2025
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </ScrollReveal>

          {/* REPORT 2: Meeting Minutes & ATR */}
          <ScrollReveal direction="up" delay={150}>
            <div
              onClick={() => setSelectedReport(IQAC_REPORTS[1])}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileCheck className="w-6 h-6 text-[#DFC06A]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Meeting Minutes & ATR
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Quarterly Proceedings & Resolutions
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </ScrollReveal>

          {/* REPORT 3: Annual Reports */}
          <ScrollReveal direction="up" delay={250}>
            <div
              onClick={() => setSelectedReport(IQAC_REPORTS[2])}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-6 h-6 text-[#DFC06A]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Annual Reports
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    AQAR Institutional Audits
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </ScrollReveal>

          {/* REPORT 4: Student Satisfaction Survey */}
          <ScrollReveal direction="up" delay={350}>
            <div
              onClick={() => setSelectedReport(IQAC_REPORTS[3])}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FBEBC6] border border-[#DFC06A]/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-[#DFC06A]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Student Satisfaction Survey
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Teaching-Learning Quality & Campus Feedback
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#250836] text-[#DFC06A] flex items-center justify-center shadow-md group-hover:bg-[#3C1361] group-hover:scale-110 transition-all shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </ScrollReveal>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 5. IQAC STATUTORY COMMITTEE COMPOSITION */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal direction="up" delay={50}>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            <div className="max-w-3xl space-y-2 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A12] bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#DFC06A]/40">
                Statutory Governance Body
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B]">
                IQAC Committee Members
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As per NAAC statutory guidelines, the Internal Quality Assurance Cell consists of institutional leadership, senior department chairs, academic stalwarts, industry experts, and student representatives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {IQAC_COMMITTEE.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200/80 hover:border-[#DFC06A] transition-colors space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#250836] text-[#DFC06A]">
                      {m.role}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      0{i + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1E092B] pt-1">
                    {m.name}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    {m.designation}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {m.department}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================== */}
      {/* 6. MODAL: ACCREDITATION PILLAR DETAILS (NAAC / NBA / NIRF) */}
      {/* ============================================================== */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none overflow-y-auto">
          <div onClick={() => setSelectedPillar(null)} className="fixed inset-0 bg-transparent" />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800 my-auto max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#180323] text-white p-6 relative border-b border-[#DFC06A]/30 shrink-0">
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="space-y-1 pr-8">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/30 uppercase">
                  {selectedPillar.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-brand text-white">
                  {selectedPillar.fullName} ({selectedPillar.shortName})
                </h3>
                <p className="text-xs text-slate-300">
                  {selectedPillar.validity}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 space-y-6 overflow-y-auto">
              
              {/* Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedPillar.stats.map((st, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-amber-50/60 border border-[#DFC06A]/30 text-center space-y-0.5">
                    <div className="text-base sm:text-lg font-black font-brand text-[#250836]">
                      {st.value}
                    </div>
                    <div className="text-[10px] font-bold text-[#8A5A12]">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedPillar.description}
              </p>

              {/* Criteria / Branches List */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#1E092B] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#DFC06A]" />
                  <span>Evaluation Criteria & Compliance Breakdown:</span>
                </h4>
                <div className="space-y-2">
                  {selectedPillar.criteria.map((c, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#FCFBF8] border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-[#250836]">
                        <span>{c.title}</span>
                        <span className="px-2 py-0.5 rounded-md bg-[#250836] text-[#DFC06A] text-[10px]">
                          {c.score}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
              <span className="text-slate-500">Official Institutional Certification Record</span>
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-4 py-2 rounded-xl bg-[#250836] text-[#DFC06A] font-bold hover:bg-[#340b4d] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 7. MODAL: REPORT & DOCUMENT DETAILS */}
      {/* ============================================================== */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none overflow-y-auto">
          <div onClick={() => setSelectedReport(null)} className="fixed inset-0 bg-transparent" />

          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800 my-auto max-h-[92vh] flex flex-col">
            
            <div className="bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#180323] text-white p-6 relative border-b border-[#DFC06A]/30 shrink-0">
              <button
                onClick={() => setSelectedReport(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="space-y-1 pr-8">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/30 uppercase">
                  {selectedReport.category} • {selectedReport.academicYear}
                </span>
                <h3 className="text-xl font-black font-brand text-white">
                  {selectedReport.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {selectedReport.subtitle}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedReport.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider">
                  Key Document Highlights:
                </h4>
                {selectedReport.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>File Size: {selectedReport.fileSize}</span>
                <span>Published: {selectedReport.datePublished}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  alert(`Downloading ${selectedReport.title} (${selectedReport.fileSize})...`);
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] text-[#1E052B] font-bold hover:scale-[1.02] transition-transform cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PDF</span>
              </button>
              <button
                onClick={() => setSelectedReport(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-100"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
