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
      {/* 1. HERO BANNER (MATCHING USER MOCKUP) */}
      {/* ============================================================== */}
      <section className="relative w-full overflow-hidden bg-[#1B0428] border-b border-amber-900/20 shadow-md">
        {/* Top Metallic Gold Trim */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9902C] via-[#FDE68A] to-[#C9902C] z-30" />

        {/* DESKTOP & TABLET HERO (>= 768px): IQAC Team Photo + Translucent Purple Panel */}
        <div className="hidden md:block relative w-full h-[380px] lg:h-[440px] xl:h-[490px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/iqac_hero.jpg"
              alt="Internal Quality Assurance Cell Faculty Team at Jyothi Engineering College"
              className="w-full h-full object-cover object-[center_32%] select-none"
              loading="eager"
            />
          </div>

          {/* Left Translucent Deep Purple Gradient Backdrop */}
          <div
            className="absolute inset-y-0 left-0 w-[64%] lg:w-[56%] z-10 flex items-center"
            style={{
              background: 'linear-gradient(90deg, rgba(24,4,38,0.94) 0%, rgba(37,8,54,0.86) 62%, rgba(37,8,54,0) 100%)',
            }}
          >
            <div className="pl-8 lg:pl-14 xl:pl-20 pr-12 max-w-xl space-y-2.5">
              {/* Top Gold Hairline */}
              <div className="w-36 h-[1px] bg-gradient-to-r from-[#DFC06A] to-transparent mb-1" />

              {/* Quality Motto */}
              <div className="text-[10px] lg:text-[11px] font-bold tracking-[0.22em] text-[#DFC06A] uppercase">
                QUALITY • EXCELLENCE • IMPROVEMENT
              </div>

              {/* Headline with Left Gold Bar */}
              <div className="pl-3.5 border-l-2 border-[#DFC06A]">
                <h1 className="text-2xl lg:text-[34px] xl:text-[38px] font-black font-brand leading-[1.1] text-white tracking-tight">
                  Internal Quality<br />
                  Assurance Cell (IQAC)
                </h1>
              </div>

              {/* Italic Serif Subtitle */}
              <p className="text-xs lg:text-sm italic font-serif text-[#F3E2B3]">
                Building a culture of quality and continuous improvement.
              </p>

              {/* NAAC 'A' Grade • NBA Accredited */}
              <div className="pt-0.5 inline-flex items-center gap-2 text-[11px] font-semibold text-[#FDE68A]/95">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-[#DFC06A]/40">
                  NAAC &apos;A&apos; Grade • NBA Accredited
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE HERO (< 768px): Photo + Purple Branded Card */}
        <div className="md:hidden relative w-full overflow-hidden bg-[#1B0428]">
          <div className="relative w-full h-52 overflow-hidden">
            <img
              src="/assets/iqac_hero.jpg"
              alt="Internal Quality Assurance Cell Faculty Team at Jyothi Engineering College"
              className="w-full h-full object-cover object-[center_26%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B0428] via-[#1B0428]/45 to-transparent" />
          </div>

          <div className="px-5 pb-6 pt-2 bg-[#1B0428] text-white space-y-2.5 relative z-10">
            <div className="text-[10px] font-bold tracking-widest text-[#DFC06A] uppercase">
              QUALITY • EXCELLENCE • IMPROVEMENT
            </div>
            <div className="pl-3 border-l-2 border-[#DFC06A]">
              <h1 className="text-2xl font-black font-brand leading-tight text-white">
                Internal Quality Assurance Cell (IQAC)
              </h1>
            </div>
            <p className="text-xs italic font-serif text-[#FDE68A]">
              Building a culture of quality and continuous improvement.
            </p>
            <div className="pt-0.5">
              <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-[#FDE68A] border border-[#DFC06A]/40">
                NAAC &apos;A&apos; Grade • NBA Accredited
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SUB-NAVIGATION STRIP (NAAC | NBA | NIRF | REPORTS) */}
      {/* ============================================================== */}
      <nav className="w-full bg-[#250836] border-b border-[#DFC06A]/30 py-2.5 sm:py-3 shadow-md sticky top-[68px] z-30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 flex items-center justify-around flex-nowrap gap-1 sm:gap-4 text-[11px] sm:text-sm font-bold text-white">
          <button
            onClick={() => { scrollToSection('accreditation-pillars'); setSelectedPillar(IQAC_PILLARS[0]); }}
            className="flex items-center gap-1 sm:gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-1.5 sm:px-3 py-1 rounded-lg hover:bg-white/5 whitespace-nowrap"
          >
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0" />
            <span>NAAC</span>
          </button>

          <span className="text-[#DFC06A]/40 select-none">|</span>

          <button
            onClick={() => { scrollToSection('accreditation-pillars'); setSelectedPillar(IQAC_PILLARS[1]); }}
            className="flex items-center gap-1 sm:gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-1.5 sm:px-3 py-1 rounded-lg hover:bg-white/5 whitespace-nowrap"
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0" />
            <span>NBA</span>
          </button>

          <span className="text-[#DFC06A]/40 select-none">|</span>

          <button
            onClick={() => { scrollToSection('accreditation-pillars'); setSelectedPillar(IQAC_PILLARS[2]); }}
            className="flex items-center gap-1 sm:gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-1.5 sm:px-3 py-1 rounded-lg hover:bg-white/5 whitespace-nowrap"
          >
            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0" />
            <span>NIRF</span>
          </button>

          <span className="text-[#DFC06A]/40 select-none">|</span>

          <button
            onClick={() => scrollToSection('reports-section')}
            className="flex items-center gap-1 sm:gap-2 hover:text-[#DFC06A] transition-colors cursor-pointer group px-1.5 sm:px-3 py-1 rounded-lg hover:bg-white/5 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0" />
            <span>Reports</span>
          </button>
        </div>
      </nav>

      {/* ============================================================== */}
      {/* 3. OUR COMMITMENT TO QUALITY (SPLIT ARCHITECTURAL BANNER) */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#FAF7F2] overflow-hidden border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy Column */}
            <ScrollReveal direction="right" className="lg:col-span-6 relative z-10">
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#C9902C]">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-brand text-[#250836] leading-tight">
                    Our commitment<br />
                    to quality
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 text-[#C9902C] text-xs font-bold pl-4">
                  <span>◇</span>
                  <span>◇</span>
                  <span>◇</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl pl-4">
                  We foster a culture of continuous improvement in higher education, strengthening academic processes, enhancing learning experiences, and ensuring excellence across all domains of the institution.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Soft Architectural Campus Illustration */}
            <ScrollReveal direction="left" delay={100} className="lg:col-span-6 relative">
              <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden border border-[#DFC06A]/30 bg-[#F5F0FA]">
                <img
                  src="/assets/jyothi_campus_hero.jpg"
                  alt="Jyothi Engineering College Campus Architecture"
                  className="w-full h-full object-cover object-center grayscale opacity-45 contrast-110 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/30 to-transparent" />
                <div className="hidden sm:block absolute top-5 right-8 w-28 h-20 border-t border-l border-[#C9902C]/55 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. ACCREDITATION & RANKINGS (3-CARD GRID MATCHING MOCKUP) */}
      {/* ============================================================== */}
      <section id="accreditation-pillars" className="relative w-full bg-[#FAF7F2] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Centered Heading with Gold Hairlines and Three Diamonds */}
          <ScrollReveal direction="up">
            <div className="text-center space-y-1.5 mb-10">
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-[#DFC06A] w-16 sm:w-36" />
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black font-brand text-[#250836]">
                  Accreditation &amp; Rankings
                </h2>
                <div className="h-[1px] bg-gradient-to-l from-transparent to-[#DFC06A] w-16 sm:w-36" />
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#C9902C] text-xs font-bold">
                <span>◇</span>
                <span>◇</span>
                <span>◇</span>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Accreditation Cards: NAAC (Lavender), NBA (Warm Cream), NIRF (Lavender) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* CARD 1: NAAC */}
            <ScrollReveal direction="up" delay={50}>
              <button
                type="button"
                onClick={() => setSelectedPillar(IQAC_PILLARS[0])}
                className="w-full h-full text-left relative overflow-hidden rounded-2xl bg-[#F2EBF8] border border-[#E5D8F0] p-6 shadow-xs hover:shadow-xl hover:border-[#DFC06A] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/80 border border-[#DFC06A]/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-[#250836]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                      NAAC
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Quality enhancement through assessment and continuous improvement.
                    </p>
                    <div className="pt-2 inline-flex items-center gap-1 text-[#8A5A12] group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>

            {/* CARD 2: NBA */}
            <ScrollReveal direction="up" delay={140}>
              <button
                type="button"
                onClick={() => setSelectedPillar(IQAC_PILLARS[1])}
                className="w-full h-full text-left relative overflow-hidden rounded-2xl bg-[#FBF6EE] border border-[#EFE3D0] p-6 shadow-xs hover:shadow-xl hover:border-[#DFC06A] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/90 border border-[#DFC06A]/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6 text-[#250836]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                      NBA
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Strengthening programme quality and outcome-based education.
                    </p>
                    <div className="pt-2 inline-flex items-center gap-1 text-[#8A5A12] group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>

            {/* CARD 3: NIRF */}
            <ScrollReveal direction="up" delay={230}>
              <button
                type="button"
                onClick={() => setSelectedPillar(IQAC_PILLARS[2])}
                className="w-full h-full text-left relative overflow-hidden rounded-2xl bg-[#F2EBF8] border border-[#E5D8F0] p-6 shadow-xs hover:shadow-xl hover:border-[#DFC06A] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/80 border border-[#DFC06A]/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <BarChart3 className="w-6 h-6 text-[#250836]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                      NIRF
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Supporting institutional benchmarking and holistic improvement.
                    </p>
                    <div className="pt-2 inline-flex items-center gap-1 text-[#8A5A12] group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. REPORTS & DOCUMENTS (SOFT LAVENDER 2x2 GRID MATCHING MOCKUP) */}
      {/* ============================================================== */}
      <section id="reports-section" className="w-full bg-[#F2ECF7] py-12 sm:py-16 border-t border-b border-[#E4D7EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Centered Heading with Gold Hairlines and Three Diamonds */}
          <ScrollReveal direction="up">
            <div className="text-center space-y-1.5 mb-9">
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-[#DFC06A] w-16 sm:w-36" />
                <h3 className="text-2xl sm:text-3xl font-black font-brand text-[#250836]">
                  Reports &amp; Documents
                </h3>
                <div className="h-[1px] bg-gradient-to-l from-transparent to-[#DFC06A] w-16 sm:w-36" />
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#C9902C] text-xs font-bold">
                <span>◇</span>
                <span>◇</span>
                <span>◇</span>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Report Cards (2 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* REPORT 1: Academic Calendar */}
            <ScrollReveal direction="up" delay={50}>
              <button
                type="button"
                onClick={() => setSelectedReport(IQAC_REPORTS[0])}
                className="w-full text-left bg-[#FCF9F3] rounded-xl px-5 py-4 border border-[#EBDDC7] shadow-xs hover:shadow-lg hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <Calendar className="w-6 h-6 text-[#250836] shrink-0" />
                  <span className="h-6 w-[1px] bg-[#DFC06A]/60 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Academic Calendar
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A5A12] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </ScrollReveal>

            {/* REPORT 2: Meeting Minutes & ATR */}
            <ScrollReveal direction="up" delay={120}>
              <button
                type="button"
                onClick={() => setSelectedReport(IQAC_REPORTS[1])}
                className="w-full text-left bg-[#FCF9F3] rounded-xl px-5 py-4 border border-[#EBDDC7] shadow-xs hover:shadow-lg hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <FileCheck className="w-6 h-6 text-[#250836] shrink-0" />
                  <span className="h-6 w-[1px] bg-[#DFC06A]/60 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Meeting Minutes &amp; ATR
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A5A12] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </ScrollReveal>

            {/* REPORT 3: Annual Reports */}
            <ScrollReveal direction="up" delay={190}>
              <button
                type="button"
                onClick={() => setSelectedReport(IQAC_REPORTS[2])}
                className="w-full text-left bg-[#FCF9F3] rounded-xl px-5 py-4 border border-[#EBDDC7] shadow-xs hover:shadow-lg hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <BarChart3 className="w-6 h-6 text-[#250836] shrink-0" />
                  <span className="h-6 w-[1px] bg-[#DFC06A]/60 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Annual Reports
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A5A12] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </ScrollReveal>

            {/* REPORT 4: Student Satisfaction Survey */}
            <ScrollReveal direction="up" delay={260}>
              <button
                type="button"
                onClick={() => setSelectedReport(IQAC_REPORTS[3])}
                className="w-full text-left bg-[#FCF9F3] rounded-xl px-5 py-4 border border-[#EBDDC7] shadow-xs hover:shadow-lg hover:border-[#DFC06A] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-[#250836] shrink-0" />
                  <span className="h-6 w-[1px] bg-[#DFC06A]/60 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold font-brand text-[#250836] group-hover:text-[#3C1361] transition-colors">
                    Student Satisfaction Survey
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A5A12] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </ScrollReveal>
          </div>
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
