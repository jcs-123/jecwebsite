import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap, Globe, Users, Briefcase, Award, Building2,
  ExternalLink, Mail, MapPin, HeartHandshake, Sparkles, CheckCircle2,
  ChevronRight, ArrowUpRight, Search, Star, Calendar, Clock,
  ArrowRight, ShieldCheck, X, Camera, Share2, Compass, Phone,
  Lock, UserCheck, Eye, LogIn, UserPlus, Filter, ThumbsUp, MessageSquare
} from 'lucide-react';
import {
  ALUMNI_METRICS,
  ALUMNI_SUCCESS_REVIEWS,
  ALUMNI_MEET_GALLERIES,
  ALUMNI_CHAPTERS,
  UPCOMING_ALUMNI_EVENTS,
  AlumniReview,
  AlumniGalleryItem,
  AlumniChapter,
  AlumniEvent
} from '../data/alumniData';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

// ============================================================================
// SCROLL REVEAL ANIMATION WRAPPER
// ============================================================================
const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transformStyle = isVisible
    ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
    : direction === 'left'
    ? 'opacity-0 -translate-x-10 scale-[0.98]'
    : direction === 'right'
    ? 'opacity-0 translate-x-10 scale-[0.98]'
    : direction === 'down'
    ? 'opacity-0 -translate-y-10 scale-[0.98]'
    : direction === 'none'
    ? 'opacity-0 scale-[0.98]'
    : 'opacity-0 translate-y-12 scale-[0.98]';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${transformStyle} ${className}`}
    >
      {children}
    </div>
  );
};

// ============================================================================
// ANIMATED COUNTING STATISTIC (SCROLL-TRIGGERED WITH PREFIX/SUFFIX SUPPORT)
// ============================================================================
const AnimatedCounter: React.FC<{ value: string; delay?: number }> = ({ value, delay = 0 }) => {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const hasMatch = Boolean(match);
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2] : '0';
  const suffix = match ? match[3] : '';
  const target = parseInt(numStr.replace(/,/g, ''), 10) || 0;
  const hasCommas = numStr.includes(',');

  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const hasCompletedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || !hasMatch || hasCompletedRef.current) return;

    let rafId = 0;
    let timeoutId = 0;
    const duration = 1400;

    timeoutId = window.setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextVal = Math.round(target * eased);
        setDisplayValue(nextVal);
        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick);
        } else {
          hasCompletedRef.current = true;
        }
      };
      rafId = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [hasStarted, hasMatch, target, delay]);

  if (!hasMatch) {
    return <span>{value}</span>;
  }

  const formatted = hasCommas ? displayValue.toLocaleString('en-US') : String(displayValue);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

// ============================================================================
// SCROLL ANIMATED SUCCESS REVIEW CARD (1-BY-1 ENTRANCE)
// ============================================================================
const ScrollAnimatedReviewCard: React.FC<{
  review: AlumniReview;
  index: number;
  onSelect: (r: AlumniReview) => void;
}> = ({ review, index, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

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
  const staggerDelay = (index % 3) * 150;

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: isVisible ? `${staggerDelay}ms` : '0ms',
      }}
      className={`group bg-white rounded-3xl border border-slate-200/90 hover:border-[#DFC06A] shadow-xs hover:shadow-2xl hover:shadow-[#250836]/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-2 relative transform-gpu ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-16 scale-[0.95] pointer-events-none'
      }`}
      onClick={() => onSelect(review)}
    >
      <div>
        {/* Top Header with Photo and Quick Info */}
        <div className="p-6 pb-4 flex items-start gap-4">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-[#DFC06A]/60 shadow-md shrink-0 bg-slate-100">
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-full object-cover object-[center_18%] group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className={`text-[9px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                review.category === 'Big Tech & AI'
                  ? 'bg-purple-100 text-purple-900 border border-purple-200'
                  : review.category === 'Aerospace & Core'
                  ? 'bg-amber-100 text-amber-900 border border-amber-200'
                  : review.category === 'Founders & CXOs'
                  ? 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
              }`}>
                {review.category}
              </span>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-0.5 text-[#DFC06A]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>

            <h4 className="font-bold text-base sm:text-lg font-brand text-[#1E092B] group-hover:text-[#250836] transition-colors truncate">
              {review.name}
            </h4>

            <p className="text-xs font-semibold text-[#8A5A12] truncate">
              {review.role}
            </p>
            <p className="text-[11px] text-slate-500 font-medium truncate">
              {review.company} • {review.location}
            </p>
          </div>
        </div>

        {/* Batch and Degree Pill */}
        <div className="px-6 pb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-medium w-full">
            <GraduationCap className="w-3.5 h-3.5 text-[#DFC06A] shrink-0" />
            <span className="truncate">{review.degree} • <strong className="text-slate-800">{review.batch}</strong></span>
          </div>
        </div>

        {/* Review Quote Body */}
        <div className="px-6 py-2">
          <div className="relative pl-3 border-l-2 border-[#DFC06A]/70 italic text-xs text-slate-600 leading-relaxed font-normal">
            "{review.quote}"
          </div>
        </div>
      </div>

      {/* Card Footer with CTA */}
      <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#250836] group-hover:bg-[#250836] group-hover:text-[#DFC06A] transition-all mt-4">
        <span className="flex items-center gap-1.5">
          <span>Read Full Career Journey</span>
          <Sparkles className="w-3 h-3 text-[#DFC06A]" />
        </span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </div>
  );
};

// ============================================================================
// MAIN ALUMNI PAGE COMPONENT
// ============================================================================
export const AlumniPage: React.FC<Props> = ({ onNavigate, onOpenApply, onOpenTour }) => {
  const [selectedReview, setSelectedReview] = useState<AlumniReview | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<AlumniGalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Login & Portal Modal State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [portalTab, setPortalTab] = useState<'login' | 'register' | 'directory'>('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [regSubmitted, setRegSubmitted] = useState(false);
  const [rsvpEvent, setRsvpEvent] = useState<AlumniEvent | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedReview || selectedGallery || isLoginModalOpen || rsvpEvent) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedReview(null);
          setSelectedGallery(null);
          setIsLoginModalOpen(false);
          setRsvpEvent(null);
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
  }, [selectedReview, selectedGallery, isLoginModalOpen, rsvpEvent]);

  // Filtered reviews
  const filteredReviews = ALUMNI_SUCCESS_REVIEWS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.batch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filtered galleries
  const filteredGalleries = ALUMNI_MEET_GALLERIES.filter((item) => {
    if (activeGalleryTab === 'All') return true;
    return item.category === activeGalleryTab;
  });

  const handleDemoLogin = () => {
    setLoginEmail('jerin.paul@alumni.jecc.ac.in');
    setLoginPassword('••••••••••••');
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E092B] selection:bg-[#250836] selection:text-[#DFC06A] pb-24">
      
      {/* ============================================================== */}
      {/* 1. LUXURY EDITORIAL ALUMNI HERO BANNER (1:1 REFERENCE MATCH) */}
      {/* ============================================================== */}
      <section className="relative w-full md:min-h-[480px] lg:h-[520px] flex flex-col md:flex-row overflow-hidden bg-[#1B0428] border-b border-slate-200">
        
        {/* MOBILE TOP PHOTO (< 768px): Crisp Gala Photo Above Editorial Block */}
        <div className="md:hidden relative w-full h-52 sm:h-60 overflow-hidden shrink-0">
          <img
            src="/assets/alumni_reunion_gala.jpg"
            alt="Jyothi Alumni Global Reunion Gala Celebration"
            className="w-full h-full object-cover object-[center_28%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B0428] via-[#1B0428]/30 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#C9902C] via-[#FDE68A] to-[#C9902C]" />
        </div>

        {/* DESKTOP RIGHT SIDE (>= 768px): Authentic Alumni Reunion Gala Photo */}
        <div className="hidden md:block absolute top-0 right-0 w-[62%] lg:w-[60%] h-full z-0 overflow-hidden">
          <img
            src="/assets/alumni_reunion_gala.jpg"
            alt="Jyothi Alumni Global Reunion Gala Celebration"
            className="w-full h-full object-cover object-[center_35%] scale-100 brightness-[1.02] contrast-[1.02]"
          />
        </div>

        {/* LEFT SIDE: Deep Royal Purple Curved Architectural Surface with Gold Trim */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-[2]">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 520"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purpleAlumniSurface" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B0428" />
                <stop offset="50%" stopColor="#28073C" />
                <stop offset="100%" stopColor="#170322" />
              </linearGradient>
              <linearGradient id="goldAlumniBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFC06A" />
                <stop offset="30%" stopColor="#FDE68A" />
                <stop offset="65%" stopColor="#C9902C" />
                <stop offset="100%" stopColor="#DFC06A" />
              </linearGradient>
              <filter id="alumniSwoopShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="6" dy="0" stdDeviation="12" floodColor="#100218" floodOpacity="0.55" />
              </filter>
            </defs>

            {/* Left Purple Canvas with Organic S-Curve */}
            <path
              d="M 0 0 L 590 0 C 570 120, 520 250, 470 360 C 440 430, 420 480, 430 520 L 0 520 Z"
              fill="url(#purpleAlumniSurface)"
              filter="url(#alumniSwoopShadow)"
            />

            {/* Primary Metallic Gold Contour Line */}
            <path
              d="M 590 0 C 570 120, 520 250, 470 360 C 440 430, 420 480, 430 520"
              stroke="url(#goldAlumniBorder)"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Inner Metallic Gold Hairline Accent */}
            <path
              d="M 584 0 C 564 120, 514 250, 464 360 C 434 430, 414 480, 424 520"
              stroke="#FFF8D6"
              strokeWidth="1.2"
              strokeOpacity="0.75"
              fill="none"
            />

            {/* Subtle Decorative Golden Hairline Curves at Bottom Left */}
            <path d="M 0 450 C 120 470, 240 490, 380 520" stroke="#DFC06A" strokeWidth="1" strokeOpacity="0.35" fill="none" />
            <path d="M 0 475 C 100 488, 200 500, 320 520" stroke="#DFC06A" strokeWidth="1" strokeOpacity="0.22" fill="none" />
            <path d="M 0 498 C 80 505, 160 512, 260 520" stroke="#DFC06A" strokeWidth="1" strokeOpacity="0.14" fill="none" />
          </svg>
        </div>

        {/* HERO EDITORIAL TEXT CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 pt-6 pb-8 md:py-16 flex items-center">
          <div className="max-w-xl md:max-w-lg lg:max-w-xl space-y-3.5 sm:space-y-4 text-white">
            
            {/* Top Label with Underline */}
            <div className="space-y-1.5 animate-fade-in">
              <span className="text-[11px] sm:text-xs font-bold text-[#DFC06A] tracking-widest uppercase">
                Jyothi Alumni Association
              </span>
              <div className="w-12 h-[2px] bg-[#DFC06A] rounded-full" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black font-brand leading-[1.08] text-white tracking-tight animate-slide-up">
              A lifelong<br />
              connection<br />
              to Jyothi
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal pt-1 max-w-md animate-slide-up">
              Reconnect with your batchmates, relive shared memories, and stay part of the ever-growing Jyothi community.
            </p>

            {/* Extended Connection Narrative */}
            <p className="text-[11px] sm:text-xs text-slate-300/80 leading-relaxed max-w-md animate-slide-up">
              From our scenic 30-acre campus along the Bharatapuzha valley to global technology epicenters in Silicon Valley, Dublin, and Dubai—our 18,500+ engineers stay united through lifelong mentorship, startup incubation, and shared memories.
            </p>

            {/* Key Quick Highlight Tags */}
            <div className="flex flex-wrap gap-2 pt-1 animate-slide-up">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] font-semibold border border-white/15 backdrop-blur-xs">
                <Globe className="w-3 h-3 text-[#DFC06A]" />
                <span>34+ Global Nations</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] font-semibold border border-white/15 backdrop-blur-xs">
                <Users className="w-3 h-3 text-[#DFC06A]" />
                <span>18 Graduating Batches</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] font-semibold border border-white/15 backdrop-blur-xs">
                <Sparkles className="w-3 h-3 text-[#DFC06A]" />
                <span>Lifelong Mentorship</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5 animate-slide-up">
              
              {/* Alumni Portal Login Button */}
              <button
                onClick={() => {
                  setPortalTab('login');
                  setIsLoginModalOpen(true);
                }}
                className="px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F2D682] to-[#B8860B] text-[#1E052B] font-bold text-xs sm:text-sm shadow-lg shadow-[#DFC06A]/20 hover:scale-[1.02] transition-all cursor-pointer border border-[#FFF8D6]"
              >
                Alumni Portal Login
              </button>

              {/* Meet Galleries Button */}
              <a
                href="#meet-galleries"
                className="px-5 py-2.5 sm:py-3 rounded-xl border border-[#DFC06A]/80 hover:bg-[#DFC06A]/15 text-[#DFC06A] font-bold text-xs sm:text-sm transition-all cursor-pointer backdrop-blur-xs"
              >
                Meet Galleries
              </a>

            </div>

          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* 2. ONCE JYOTHI, ALWAYS JYOTHI ARCHITECTURAL SECTION (1:1 MATCH) */}
      {/* ============================================================== */}
      <section className="relative w-full bg-[#FAF7F2] py-14 sm:py-20 border-b border-amber-900/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Editorial Narrative with ScrollReveal */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal direction="left" delay={0}>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-brand text-[#250836] leading-[1.12]">
                  Once Jyothi,<br />
                  Always Jyothi
                </h2>
                
                <div className="w-14 h-[3px] bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] rounded-full my-3" />
                
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                  Welcome to the Jyothi Alumni Association — a vibrant community that keeps the Jyothi spirit alive, from campus days to every new chapter beyond.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                  Rooted in ethical engineering, academic freedom, and human values, the Jyothi experience doesn't end at graduation. Our global alumni fraternity stands united—investing in student scholarships, pioneering deep-tech ventures, and building meaningful professional pathways across every generation.
                </p>
              </ScrollReveal>

              {/* 3 Core Highlights / Badges with ScrollReveal */}
              <div className="space-y-3 pt-2">
                <ScrollReveal direction="up" delay={150}>
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#DFC06A] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#250836] flex items-center justify-center shrink-0 mt-0.5">
                      <HeartHandshake className="w-4 h-4 text-[#250836]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#250836]">Lifelong Fellowship & Fraternity</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed pt-0.5">
                        Stay connected with professors, mentors, and batchmates with lifelong access to campus events, reunions, and digital repositories.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={250}>
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#DFC06A] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-[#8A5A12] flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-[#8A5A12]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#250836]">Endowed Scholarships & Giving Back</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed pt-0.5">
                        Over ₹25 Lakhs contributed annually by alumni batches to fund full-tuition merit grants for aspiring young engineers.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={350}>
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#DFC06A] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 text-emerald-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#250836]">Executive Mentorship & Global Referrals</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed pt-0.5">
                        Direct industry networking, resume clinics, and campus referrals at Amazon, Bosch, ISRO, Tesla, and Siemens.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>

            {/* Right Sunlit Campus Building Photo with ScrollReveal */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={100}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white shadow-amber-900/10 group">
                  <img
                    src="/assets/autonomous_campus_hero.jpg"
                    alt="Jyothi Engineering College Autonomous Campus"
                    className="w-full h-80 sm:h-[440px] lg:h-[500px] object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700 brightness-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Heritage Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#FDE68A] border border-[#DFC06A]/40 text-xs font-bold flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#DFC06A]" />
                      <span>Estd. 2002 • 18 Batches</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-brand font-bold text-sm sm:text-base tracking-wide text-white drop-shadow-md block">
                        Jyothi Engineering College (Autonomous)
                      </span>
                      <span className="text-[11px] text-slate-300 drop-shadow-md">
                        30-Acre Eco-Sanctuary • Cheruthuruthy, Thrissur
                      </span>
                    </div>
                    <span className="text-[11px] text-[#FDE68A] font-bold drop-shadow-md bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 self-start sm:self-auto">
                      18,500+ Engineers Graduated
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. MEET GALLERIES (EXACT BENTO/MOSAIC 1:1 REFERENCE MATCH) */}
      {/* ============================================================== */}
      <section id="meet-galleries" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Section Heading with Gold Lines and Diamond Flourish */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center space-y-2 mb-10">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-[#DFC06A] w-20 sm:w-36" />
              <h3 className="text-2xl sm:text-3xl font-black font-brand text-[#250836]">
                Meet Galleries
              </h3>
              <div className="h-[1px] bg-gradient-to-l from-transparent to-[#DFC06A] w-20 sm:w-36" />
            </div>
            <div className="text-xs text-[#DFC06A] font-bold tracking-widest">
              ✧ ◇ ✧
            </div>
          </div>
        </ScrollReveal>

        {/* Mosaic Grid: Left tall card, Right column with top wide and bottom 2-split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* CARD 1: Left Large Tall Card (Alumni Meet & Reunion - Selfie) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0} className="h-full">
              <div
                onClick={() => setSelectedGallery(ALUMNI_MEET_GALLERIES[0])}
                className="h-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#250836]/15 hover:border-[#DFC06A]/60 transition-all duration-500 cursor-pointer flex flex-col group hover:-translate-y-1.5"
              >
                <div className="relative h-80 sm:h-96 lg:h-[460px] w-full overflow-hidden bg-slate-900">
                  <img
                    src="/assets/alumni_meet_selfie.jpg"
                    alt="Alumni Meet & Reunion"
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 brightness-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Tag Under Meet Gallery Image */}
                <div className="py-3 sm:py-3.5 px-4 bg-[#F8F4EC] border-t border-[#DFC06A]/30 text-center transition-colors group-hover:bg-[#FFFDF7]">
                  <span className="font-serif italic text-sm sm:text-base text-[#250836] font-normal tracking-wide select-none group-hover:text-[#64148C] transition-colors">
                    Alumni Meet & Reunion
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6">
            
            {/* CARD 2: Right Top Wide Card (Alumni Evening) */}
            <ScrollReveal direction="up" delay={150}>
              <div
                onClick={() => setSelectedGallery(ALUMNI_MEET_GALLERIES[1])}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#250836]/15 hover:border-[#DFC06A]/60 transition-all duration-500 cursor-pointer flex flex-col group hover:-translate-y-1.5"
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/assets/alumni_evening_concert.jpg"
                    alt="Alumni Evening"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Tag Under Meet Gallery Image */}
                <div className="py-2.5 sm:py-3 px-4 bg-[#F8F4EC] border-t border-[#DFC06A]/30 text-center transition-colors group-hover:bg-[#FFFDF7]">
                  <span className="font-serif italic text-sm sm:text-base text-[#250836] font-normal tracking-wide select-none group-hover:text-[#64148C] transition-colors">
                    Alumni Evening
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* BOTTOM ROW: Split into 2 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* CARD 3: Batchmates Reconnect */}
              <ScrollReveal direction="up" delay={300}>
                <div
                  onClick={() => setSelectedGallery(ALUMNI_MEET_GALLERIES[3])}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#250836]/15 hover:border-[#DFC06A]/60 transition-all duration-500 cursor-pointer flex flex-col group hover:-translate-y-1.5"
                >
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src="/assets/alumni_batchmates_reconnect.jpg"
                      alt="Batchmates Reconnect"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  {/* Tag Under Meet Gallery Image */}
                  <div className="py-2.5 sm:py-3 px-4 bg-[#F8F4EC] border-t border-[#DFC06A]/30 text-center transition-colors group-hover:bg-[#FFFDF7]">
                    <span className="font-serif italic text-sm sm:text-base text-[#250836] font-normal tracking-wide select-none group-hover:text-[#64148C] transition-colors">
                      Batchmates Reconnect
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* CARD 4: Across Generations */}
              <ScrollReveal direction="up" delay={450}>
                <div
                  onClick={() => setSelectedGallery(ALUMNI_MEET_GALLERIES[4])}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#250836]/15 hover:border-[#DFC06A]/60 transition-all duration-500 cursor-pointer flex flex-col group hover:-translate-y-1.5"
                >
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src="/assets/alumni_across_generations.jpg"
                      alt="Across Generations"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  {/* Tag Under Meet Gallery Image */}
                  <div className="py-2.5 sm:py-3 px-4 bg-[#F8F4EC] border-t border-[#DFC06A]/30 text-center transition-colors group-hover:bg-[#FFFDF7]">
                    <span className="font-serif italic text-sm sm:text-base text-[#250836] font-normal tracking-wide select-none group-hover:text-[#64148C] transition-colors">
                      Across Generations
                    </span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 4. ELEVATED FLOATING ALUMNI METRICS STRIP */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 relative z-20">
        <ScrollReveal direction="up" delay={50}>
          <div className="bg-white/98 backdrop-blur-md p-3 sm:p-5 rounded-3xl border border-[#DFC06A]/40 shadow-xl shadow-[#250836]/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {ALUMNI_METRICS.map((stat, idx) => (
                <div key={idx} className="pt-2 sm:pt-0 sm:px-3 text-center space-y-1">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black font-brand text-[#250836] tracking-tight">
                    <AnimatedCounter value={stat.value} delay={idx * 90} />
                  </div>
                  <div className="text-xs font-bold text-[#8A5A12]">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================== */}
      {/* 5. ABOUT JYOTHI ALUMNI ASSOCIATION (JAA) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <ScrollReveal direction="up" delay={100}>
          <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs overflow-hidden">
            
            {/* Subtle Colonnade / Landmark Graphic Watermark */}
            <div className="absolute right-0 top-0 bottom-0 w-80 opacity-5 pointer-events-none hidden md:block">
              <GraduationCap className="w-full h-full text-[#250836]" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-4">
              
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF8D6] text-[#8A5A12] border border-[#DFC06A]/30 text-[10px] font-bold uppercase tracking-wider">
                Directorate of Alumni Relations
              </div>

              <div className="flex items-center gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-brand text-[#1E092B]">
                  About Jyothi Alumni Association
                </h2>
                <div className="flex-1 hidden sm:flex items-center">
                  <div className="h-[1px] bg-gradient-to-r from-[#DFC06A] to-transparent w-full" />
                  <span className="text-[#DFC06A] px-2 text-xs">✧</span>
                  <div className="h-[1px] bg-gradient-to-l from-[#DFC06A] to-transparent w-16" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Founded in 2006 under the Catholic Archdiocese of Trichur, the <strong>Jyothi Alumni Association (JAA)</strong> serves as a lifelong bridge between Jyothi Engineering College and its global alumni community. With 14 established regional and international chapters across North America, the Middle East, Europe, and India, JAA empowers graduating engineers through senior executive mentorship, student project micro-grants, startup incubation, and worldwide chapter networking.
              </p>

              {/* 4 Pillars of Alumni Impact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                
                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200/80 space-y-2 hover:border-[#DFC06A] transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1E092B]">Global Career Referrals</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Direct recruitment channels & interview guidance across Fortune 500 tech firms and core engineering companies.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200/80 space-y-2 hover:border-[#DFC06A] transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1E092B]">FabLab Seed Fund</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    ₹25 Lakhs+ endowed annually by alumni founders to sponsor prototype hardware, robotics, and patent filings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200/80 space-y-2 hover:border-[#DFC06A] transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1E092B]">Student Mentorship</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    One-on-one coaching pairings connecting 3rd & 4th-year undergraduates with industry specialists in their domain.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-slate-200/80 space-y-2 hover:border-[#DFC06A] transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1E092B]">Global Chapter Relocation</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Immediate local support, housing guidance, and professional networking for alumni migrating abroad.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================== */}
      {/* 4. ALUMNI SUCCESS REVIEWS & HALL OF FAME (SCROLL-TRIGGERED 1-BY-1) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#C9902C] rounded-full" />
              <h3 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] tracking-tight">
                Alumni Success Reviews & Hall of Fame
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Verified career testimonials and journeys from distinguished engineers across global industries.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, company, batch..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-slate-200 focus:border-[#DFC06A] focus:outline-none focus:ring-1 focus:ring-[#DFC06A]"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mt-5 overflow-x-auto no-scrollbar pb-2">
          {['All', 'Big Tech & AI', 'Aerospace & Core', 'Founders & CXOs', 'Public Service & Research'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/40'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Member Cards Grid (Scroll-Triggered Sequential 1-by-1 Entrance) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review, idx) => (
              <ScrollAnimatedReviewCard
                key={review.id}
                review={review}
                index={idx}
                onSelect={setSelectedReview}
              />
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-slate-400">
              <GraduationCap className="w-12 h-12 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold">No alumni profiles found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 text-xs text-[#DFC06A] font-bold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 6. GLOBAL CHAPTER CONCLAVES & COMPLETE PHOTO ARCHIVES */}
      {/* ============================================================== */}
      <section id="all-archives" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#DFC06A] rounded-full" />
              <h3 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] tracking-tight">
                Global Conclaves & Photo Archives
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Complete photographic records from homecomings, international chapter galas, and silver milestone reunions.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {['All', 'Homecoming', 'Gulf Chapters', 'USA & Europe', 'Tech Summits', 'Milestones'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryTab(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeGalleryTab === cat
                    ? 'bg-[#250836] text-[#DFC06A] shadow-md border border-[#DFC06A]/40'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredGalleries.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGallery(item)}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#250836]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="h-56 sm:h-60 w-full relative overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B0428]/80 via-transparent to-transparent" />
                  
                  {/* Category Pill Top Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-lg bg-[#250836]/90 text-[#DFC06A] border border-[#DFC06A]/40 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Year Top Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  {/* Attendees Bottom Left */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white text-[11px] font-medium">
                    <span className="flex items-center gap-1.5 drop-shadow-md">
                      <Users className="w-3.5 h-3.5 text-[#DFC06A]" />
                      <span>{item.attendees}</span>
                    </span>
                    <span className="flex items-center gap-1 drop-shadow-md text-slate-200 text-[10px]">
                      <MapPin className="w-3 h-3 text-[#DFC06A]" />
                      <span className="truncate max-w-[140px]">{item.location.split(',')[0]}</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 space-y-2">
                  <h4 className="font-bold text-base font-brand text-[#1E092B] group-hover:text-[#250836] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* View Album CTA */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#250836] group-hover:bg-[#250836] group-hover:text-[#DFC06A] transition-all">
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#DFC06A]" />
                  <span>View Event Album & Highlights</span>
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* ============================================================== */}
      {/* 7. UPCOMING REUNIONS & EVENTS CALENDAR */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
        
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-[#C9902C] rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-black font-brand text-[#1E092B] tracking-tight">
              Upcoming Alumni Reunions & Conclaves
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_ALUMNI_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#DFC06A] transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFF8D6] text-[#8A5A12] border border-[#DFC06A]/30">
                    {evt.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    evt.mode === 'In-Person'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {evt.mode}
                  </span>
                </div>

                <h4 className="font-bold text-base font-brand text-[#1E092B] leading-snug">
                  {evt.title}
                </h4>

                <div className="space-y-1 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#DFC06A]" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#DFC06A]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#DFC06A]" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {evt.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  <strong>{evt.rsvpCount}</strong> attending
                </span>
                <button
                  onClick={() => {
                    setRsvpEvent(evt);
                    setRsvpSuccess(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#250836] text-[#DFC06A] font-bold text-xs hover:bg-[#340b4d] transition-colors cursor-pointer"
                >
                  RSVP for Meet
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 8. GIVING BACK & STUDENT MENTORSHIP CALLOUT */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-[#250836] via-[#380D4E] to-[#1E052B] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-[#DFC06A]/40 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/40 uppercase tracking-wider">
              Empower the Next Generation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-brand text-white">
              Give Back to Your Alma Mater
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Whether offering campus interview referrals, delivering a guest workshop, mentoring undergraduate innovators, or contributing to student FabLab seed grants—your support shapes tomorrow's engineering trailblazers.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setPortalTab('register');
                  setIsLoginModalOpen(true);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] text-[#1E052B] font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                Join as Student Mentor
              </button>
              <a
                href="mailto:alumni@jecc.ac.in"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
              >
                Contact Alumni Relations (alumni@jecc.ac.in)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* MODAL 1: ALUMNI SUCCESS JOURNEY DETAIL MODAL */}
      {/* ============================================================== */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none">
          <div onClick={() => setSelectedReview(null)} className="fixed inset-0 bg-transparent" />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800 max-h-[92vh] flex flex-col">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#180323] text-white p-6 sm:p-7 relative border-b border-[#DFC06A]/30 shrink-0">
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#DFC06A] shadow-md shrink-0 bg-slate-100">
                  <img
                    src={selectedReview.image}
                    alt={selectedReview.name}
                    className="w-full h-full object-cover object-[center_18%]"
                  />
                </div>

                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/30 uppercase">
                      {selectedReview.category}
                    </span>
                    <span className="text-xs text-[#DFC06A] font-bold">★ 5.0 Rating</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-brand text-white">
                    {selectedReview.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#DFC06A]">
                    {selectedReview.role} • {selectedReview.company}
                  </p>
                  <p className="text-[11px] text-slate-300">
                    {selectedReview.location} • {selectedReview.degree} ({selectedReview.batch})
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Modal Content Body */}
            <div className="p-6 space-y-5 overflow-y-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
              
              {/* Quote */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-[#DFC06A]/30 italic text-slate-700">
                "{selectedReview.quote}"
              </div>

              {/* Full Career Narrative */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[#1E092B] text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#DFC06A]" />
                  <span>Career Journey & Jyothi Experience</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedReview.fullJourney}
                </p>
              </div>

              {/* Key Career Highlights */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#1E092B] text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#DFC06A]" />
                  <span>Notable Achievements</span>
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {selectedReview.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Patents / Publications */}
              {selectedReview.patentsOrPapers && (
                <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200 text-purple-900 text-xs font-medium">
                  <strong>Research & Patents:</strong> {selectedReview.patentsOrPapers}
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Verified Jyothi Engineering College Alumnus</span>
              <button
                onClick={() => setSelectedReview(null)}
                className="px-4 py-2 rounded-xl bg-[#250836] text-[#DFC06A] font-bold hover:bg-[#320b4a] transition-colors"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 2: ALUMNI MEET GALLERY LIGHTBOX PREVIEW */}
      {/* ============================================================== */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/85 backdrop-blur-md animate-fade-in select-none">
          <div onClick={() => setSelectedGallery(null)} className="fixed inset-0 bg-transparent" />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800 max-h-[92vh] flex flex-col">
            
            {/* Header Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={selectedGallery.image}
                alt={selectedGallery.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              <button
                onClick={() => setSelectedGallery(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DFC06A] text-[#1E052B]">
                  {selectedGallery.category} • {selectedGallery.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-brand text-white">
                  {selectedGallery.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#DFC06A]" />
                    <span>{selectedGallery.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#DFC06A]" />
                    <span>{selectedGallery.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#DFC06A]" />
                    <span>{selectedGallery.attendees}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4 overflow-y-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p className="text-slate-700 leading-relaxed">
                {selectedGallery.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1E092B] text-xs uppercase tracking-wider">
                  Event Highlights & Milestones:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedGallery.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <Sparkles className="w-3.5 h-3.5 text-[#DFC06A] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Official Jyothi Alumni Event Archive</span>
              <button
                onClick={() => setSelectedGallery(null)}
                className="px-4 py-2 rounded-xl bg-[#250836] text-[#DFC06A] font-bold hover:bg-[#320b4a] transition-colors"
              >
                Close Gallery
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 3: INTERACTIVE ALUMNI PORTAL LOGIN & DIRECTORY */}
      {/* ============================================================== */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none">
          <div onClick={() => setIsLoginModalOpen(false)} className="fixed inset-0 bg-transparent" />

          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1E052B] via-[#2E0946] to-[#180323] text-white p-6 relative border-b border-[#DFC06A]/30">
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/30 uppercase">
                  Single Sign-On Directorate
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-brand text-white">
                  Alumni Portal Access
                </h3>
                <p className="text-xs text-slate-300">
                  Access the verified global directory, alumni job board, and mentorship exchange.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 mt-4 pt-2 border-t border-white/10 text-xs font-semibold">
                <button
                  onClick={() => setPortalTab('login')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    portalTab === 'login'
                      ? 'bg-[#DFC06A] text-[#1E052B] font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Alumnus Sign In
                </button>
                <button
                  onClick={() => setPortalTab('register')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    portalTab === 'register'
                      ? 'bg-[#DFC06A] text-[#1E052B] font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Register New Alumnus
                </button>
              </div>
            </div>

            {/* Tab 1: Login Form */}
            {portalTab === 'login' && (
              <div className="p-6 space-y-4">
                {isLoggedIn ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg text-[#1E092B]">Welcome back, Jerin Paul!</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      You are authenticated as <strong>Senior Cloud Solutions Architect (AWS Dublin)</strong>.
                    </p>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
                      <div>• <strong>Alumni ID:</strong> JECC/ALM/2018/0421</div>
                      <div>• <strong>Primary Chapter:</strong> Europe & UK (Dublin)</div>
                      <div>• <strong>Mentorship Status:</strong> Active (4 Mentees Assigned)</div>
                    </div>
                    <button
                      onClick={() => setIsLoginModalOpen(false)}
                      className="w-full py-2.5 rounded-xl bg-[#250836] text-[#DFC06A] font-bold text-xs"
                    >
                      Enter Member Dashboard
                    </button>
                  </div>
                ) : (
                  <>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsLoggedIn(true);
                      }}
                      className="space-y-3.5"
                    >
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Alumni Email or Registration ID
                        </label>
                        <input
                          type="text"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="e.g. yourname@alumni.jecc.ac.in or JECC/ALM/2018/0421"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#DFC06A]"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-700">
                            Password
                          </label>
                          <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to registered email.'); }} className="text-[11px] text-[#8A5A12] hover:underline">
                            Forgot Password?
                          </a>
                        </div>
                        <input
                          type="password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#DFC06A]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] text-[#1E052B] font-bold text-xs sm:text-sm shadow-md hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Sign In to Alumni Directorate</span>
                      </button>
                    </form>

                    {/* Quick Demo Credentials Helper */}
                    <div className="p-3 rounded-2xl bg-amber-50/70 border border-[#DFC06A]/30 text-xs text-slate-700 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-bold text-[#8A5A12]">Quick Demo Alumnus:</div>
                        <div className="text-[11px] text-slate-500">jerin.paul@alumni.jecc.ac.in</div>
                      </div>
                      <button
                        type="button"
                        onClick={handleDemoLogin}
                        className="px-3 py-1.5 rounded-lg bg-[#250836] text-[#DFC06A] font-bold text-[11px] hover:bg-[#340b4d] transition-colors"
                      >
                        Auto Fill & Login
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Tab 2: Register Form */}
            {portalTab === 'register' && (
              <div className="p-6 space-y-4">
                {regSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg text-[#1E092B]">Registration Received!</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Your alumni profile has been submitted for verification with college registrar records. You will receive an official portal invite within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setRegSubmitted(false);
                        setPortalTab('login');
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#250836] text-[#DFC06A] font-bold text-xs"
                    >
                      Back to Sign In
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRegSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input type="text" required placeholder="e.g. Rahul Nambiar" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#DFC06A] focus:outline-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Batch Year</label>
                        <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#DFC06A] focus:outline-none bg-white">
                          {[...Array(19)].map((_, i) => (
                            <option key={i} value={2024 - i}>{2024 - i}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                        <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#DFC06A] focus:outline-none bg-white">
                          <option>CSE</option>
                          <option>ECE</option>
                          <option>EEE</option>
                          <option>ME</option>
                          <option>CE</option>
                          <option>MR</option>
                          <option>AD (AI&DS)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Current Company</label>
                        <input type="text" required placeholder="e.g. Google" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#DFC06A] focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Role / Designation</label>
                        <input type="text" required placeholder="e.g. Software Engineer" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#DFC06A] focus:outline-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Current City & Country</label>
                      <input type="text" required placeholder="e.g. London, United Kingdom" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#DFC06A] focus:outline-none" />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#250836] text-[#DFC06A] font-bold text-xs sm:text-sm hover:bg-[#320b4a] transition-all cursor-pointer mt-2"
                    >
                      Submit Alumnus Registration
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 4: RSVP EVENT CONFIRMATION MODAL */}
      {/* ============================================================== */}
      {rsvpEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#0D0214]/80 backdrop-blur-md animate-fade-in select-none">
          <div onClick={() => setRsvpEvent(null)} className="fixed inset-0 bg-transparent" />

          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#DFC06A]/40 overflow-hidden z-10 animate-slide-up text-slate-800 p-6 space-y-4">
            
            <button
              onClick={() => setRsvpEvent(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {rsvpSuccess ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg text-[#1E092B]">RSVP Confirmed!</h4>
                <p className="text-xs text-slate-500">
                  Your registration for <strong>{rsvpEvent.title}</strong> is confirmed. A digital guest pass has been sent to your email.
                </p>
                <button
                  onClick={() => setRsvpEvent(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#250836] text-[#DFC06A] font-bold text-xs"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF8D6] text-[#8A5A12]">
                    Event Registration
                  </span>
                  <h3 className="text-lg font-black font-brand text-[#1E092B]">
                    RSVP: {rsvpEvent.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {rsvpEvent.date} • {rsvpEvent.venue}
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRsvpSuccess(true);
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input type="text" required placeholder="e.g. Priya Nair" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-[#DFC06A] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                    <input type="email" required placeholder="you@example.com" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-[#DFC06A] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Batch Year & Branch</label>
                    <input type="text" required placeholder="e.g. 2019 CSE" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-[#DFC06A] focus:outline-none" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#250836] text-[#DFC06A] font-bold text-xs hover:bg-[#340b4d] transition-colors"
                  >
                    Confirm Attendance
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

