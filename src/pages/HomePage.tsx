import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles, ArrowRight, ShieldCheck, GraduationCap, Briefcase,
  Microscope, Building2, BellRing, CheckCircle2,
  Compass, ChevronRight, Layers, FileText, MapPin,
  Calendar, Award, Globe, Quote, ExternalLink, ChevronLeft,
  Search, Cpu, Zap, Car, BookOpen, Check, Phone, Users,
  Landmark, Flame, Play, Star, ChevronDown, TrendingUp,
  ArrowUpRight, Download, Laptop, Radio, Wrench, Shield,
  HeartHandshake, Coffee, Bus, CheckCircle
} from 'lucide-react';
import {
  COLLEGE_INFO, ANNOUNCEMENTS, DEPARTMENTS,
  RECRUITERS, FACILITIES, STUDENT_CLUBS, RESEARCH_CENTRES, ALUMNI_TESTIMONIALS
} from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';
import { AnimatedCounter } from '../components/AnimatedCounter';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

// Reusable Scroll Reveal Observer Hook
function useScrollReveal(threshold = 0.12) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -24px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [elementRef, isInView] as const;
}

function RevealBlock({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}) {
  const [ref, inView] = useScrollReveal(0.08);
  const reducedMotion = usePrefersReducedMotion();

  const hiddenTransform =
    direction === 'left'
      ? '-translate-x-5'
      : direction === 'right'
        ? 'translate-x-5'
        : 'translate-y-4';

  return (
    <div
      ref={ref}
      style={reducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
      className={`${
        reducedMotion
          ? ''
          : `transition-all duration-500 ease-out will-change-transform ${
              inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenTransform}`
            }`
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

// Hero typing animation rotating dialog phrases
const TYPING_PHRASES = [
  "Creative Engineering",
  "Shaping Tomorrow",
  "Ready to Lead",
  "Future Starts Here"
];

const HERO_CAROUSEL_IMAGES = [
  {
    src: "/assets/jyothi_campus_hero.jpg",
    alt: "Jyothi Engineering College Autonomous Main Building & Lush Green Campus",
    objectPos: "object-[50%_32%] lg:object-[50%_34%]",
  },
  {
    src: "/assets/autonomous_campus_hero.jpg",
    alt: "Jyothi Engineering College Autonomous Academic Campus",
    objectPos: "object-center",
  },
  {
    src: "/assets/portals_hero.jpg",
    alt: "Jyothi Engineering College Students Collaborating on Campus Lawn",
    objectPos: "object-[50%_30%]",
  },
];

export const HomePage: React.FC<Props> = ({ onNavigate, onOpenApply, onOpenTour }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'computer' | 'circuits' | 'core'>('all');
  const [activeNewsTab, setActiveNewsTab] = useState<'notices' | 'events' | 'calendar'>('notices');
  const [activePillar, setActivePillar] = useState<number>(0);
  const [selectedStreamId, setSelectedStreamId] = useState<string>('cse');
  const [activeLifeTab, setActiveLifeTab] = useState<'tharang' | 'clubs' | 'sports' | 'hostel'>('tharang');
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  // Trigger smooth hero entrance animation on mount
  useEffect(() => {
    if (reducedMotion) {
      setHeroReady(true);
      return;
    }
    const raf = window.requestAnimationFrame(() => setHeroReady(true));
    return () => window.cancelAnimationFrame(raf);
  }, [reducedMotion]);

  // Auto-advance hero 3-image carousel (mobile & desktop)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  // Typewriter typing animation state for rotating hero dialog
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(TYPING_PHRASES[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[textIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex(prev => prev - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % TYPING_PHRASES.length);
        timer = setTimeout(() => { }, 280);
      }
    } else {
      if (charIndex < currentPhrase.length) {
        timer = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 70);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused, textIndex]);

  // Scroll Reveal triggers for interactive staggered card entries
  const [portalsRef, portalsInView] = useScrollReveal(0.08);
  const [pillarsRef, pillarsInView] = useScrollReveal(0.08);
  const [bentoRef, bentoInView] = useScrollReveal(0.06);
  const [statsRef, statsInView] = useScrollReveal(0.08);

  // Interactive quick course lookup
  const selectedDept = DEPARTMENTS.find(d => d.id === selectedStreamId) || DEPARTMENTS[0];

  const pillars = [
    {
      title: "UGC Autonomous Freedom",
      badge: "Curriculum Innovation",
      subtitle: "Industry-Aligned KTU Syllabi",
      desc: "Autonomy gives Jyothi students an unbeatable edge: updated annual curricula co-designed with industry, modern credits in Generative AI, Cloud Systems, and Electric Mobility, along with transparent semester evaluations.",
      stat: "UGC & KTU",
      statLabel: "Autonomous Since 2023",
      icon: GraduationCap,
      highlights: ["Specialized Industry Minors", "Flexible Credit Transfers", "Transparent Grading", "Regular Syllabus Updates"]
    },
    {
      title: "MIT FabLab & TBI Incubator",
      badge: "Deep-Tech Prototyping",
      subtitle: "From Classroom Idea to Global Patent",
      desc: "In partnership with Kerala Startup Mission (KSUM) and modeled on MIT's Center for Bits and Atoms, our on-campus FabLab features precision laser cutters, CNC mills, and industrial 3D printers alongside the Jyothi TBI startup launchpad.",
      stat: "18+ Startups",
      statLabel: "Incubated On Campus",
      icon: Microscope,
      highlights: ["₹1.2 Cr+ Seed Funds", "42+ Filed Patents", "Rapid 3D Prototyping", "Direct Angel Pitching"]
    },
    {
      title: "Verified 87.4% Placements",
      badge: "Industry Careers",
      subtitle: "Hired by Global Tech & Fortune 500s",
      desc: "Our Career Guidance and Placement Cell conducts 4-year continuous training covering algorithmic coding, core engineering problem-solving, and mock HR rounds. 462+ job offers recorded in 2024-25.",
      stat: "₹24 LPA",
      statLabel: "Highest CTC Offered",
      icon: Briefcase,
      highlights: ["94+ Recruiting Giants", "₹5.2 LPA Average CTC", "TCS & Bosch Day-1", "Alumni at AWS & ISRO"]
    },
    {
      title: "30+ Acre Eco-Sanctuary",
      badge: "Campus Infrastructure",
      subtitle: "Scenic Hilltop Sanctuary in Cheruthuruthy",
      desc: "Nestled amidst the peaceful greenery of Cheruthuruthy, Thrissur, Jyothi features separate modern hostels with hygienic dining, a 42,000+ volume computerized central library, sports complex, and a 25+ fleet bus network.",
      stat: "30+ Acres",
      statLabel: "Lush Green Smart Campus",
      icon: Landmark,
      highlights: ["Automated RFID Library", "Separate Men & Women Hostels", "25+ College Bus Routes", "100 kW Solar Array"]
    }
  ];

  const filteredDepts = DEPARTMENTS.filter(d => {
    if (activeTab === 'computer') return ['cse', 'aids'].includes(d.id);
    if (activeTab === 'circuits') return ['ece', 'eee', 'ra'].includes(d.id);
    if (activeTab === 'core') return ['me', 'ce'].includes(d.id);
    return true;
  });

  return (
    <div className="overflow-x-clip bg-white text-jyothi-charcoal-800 selection:bg-jyothi-purple-900 selection:text-jyothi-gold-300">

      {/* ============================================================== */}
      {/* 1. LUXURY EDITORIAL ARCHITECTURAL HERO (1:1 TARGET MATCH) */}
      {/* ============================================================== */}
      <section className="relative w-full md:min-h-[600px] lg:h-[620px] xl:h-[640px] flex flex-col justify-between overflow-x-clip md:overflow-hidden bg-transparent md:bg-[#FFFDFA] border-b border-slate-200/80">

        {/* MOBILE TOP CAMPUS CAROUSEL (< 768px): Physically Fixed Under Mobile Header */}
        <div className="md:hidden fixed top-[56px] sm:top-[64px] left-0 right-0 z-0 w-full h-60 sm:h-72 overflow-hidden bg-[#1B0428]">
          {HERO_CAROUSEL_IMAGES.map((slide, idx) => {
            const isActive = idx === heroSlide;
            return (
              <img
                key={`mobile-${slide.src}`}
                src={slide.src}
                alt={slide.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full object-cover ${slide.objectPos} transition-all duration-1000 ease-out will-change-transform ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
                }`}
              />
            );
          })}

          {/* Subtle bottom depth gradient */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#1B0428]/40" />

          {/* Mobile Carousel Indicator Dots */}
          <div className="absolute bottom-8 right-3.5 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
            {HERO_CAROUSEL_IMAGES.map((slide, idx) => (
              <button
                key={`mobile-dot-${slide.src}`}
                type="button"
                onClick={() => setHeroSlide(idx)}
                aria-label={`View campus slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === heroSlide
                    ? 'w-4 bg-[#DFC06A]'
                    : 'w-1.5 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Spacer reserving mobile fixed campus image height so content starts below it */}
        <div aria-hidden="true" className="md:hidden w-full h-60 sm:h-72 shrink-0 pointer-events-none" />

        {/* DESKTOP & TABLET RIGHT SIDE (>= 768px): 3-Image Auto-Moving Campus Carousel */}
        <div className="hidden md:block absolute top-0 right-0 w-[72%] lg:w-[70%] xl:w-[68%] h-full z-0 overflow-hidden bg-[#1B0428]">
          {HERO_CAROUSEL_IMAGES.map((slide, idx) => {
            const isActive = idx === heroSlide;
            return (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full object-cover ${slide.objectPos} brightness-[1.0] contrast-[1.02] transition-all duration-1000 ease-out will-change-transform ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
                }`}
              />
            );
          })}

          {/* Subtle Carousel Indicator Dots */}
          <div className="absolute bottom-28 right-6 z-20 flex items-center gap-2 bg-black/35 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/15">
            {HERO_CAROUSEL_IMAGES.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setHeroSlide(idx)}
                aria-label={`View campus slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === heroSlide
                    ? 'w-5 bg-[#DFC06A]'
                    : 'w-1.5 bg-white/55 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* TABLET & DESKTOP: PROPORTIONAL ORGANIC IVORY CANVAS WITH 3D GOLD SWOOPING DIVIDER */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-[2]">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 640"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldSwooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFC06A" />
                <stop offset="25%" stopColor="#FDE68A" />
                <stop offset="55%" stopColor="#C9902C" />
                <stop offset="85%" stopColor="#F3D580" />
                <stop offset="100%" stopColor="#8A5A12" />
              </linearGradient>
              <linearGradient id="purpleShadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B0326" />
                <stop offset="50%" stopColor="#2A073E" />
                <stop offset="100%" stopColor="#15021E" />
              </linearGradient>
              <filter id="softRibbonShadow" x="-5%" y="-5%" width="115%" height="115%">
                <feDropShadow dx="5" dy="0" stdDeviation="8" floodColor="#15021E" floodOpacity="0.16" />
              </filter>
            </defs>

            {/* Left Warm Ivory Editorial Surface (Seamlessly flows down to bottom y=640 behind purple banner) */}
            <path
              d="M 0 0 L 425 0 C 460 80 440 200 400 340 C 368 450 376 540 392 640 L 0 640 Z"
              fill="#FFFDFA"
              filter="url(#softRibbonShadow)"
            />

            {/* 3D Under-Ribbon Deep Purple Shadow Contour */}
            <path
              d="M 429 0 C 464 80 444 200 404 340 C 372 450 380 540 396 640"
              stroke="url(#purpleShadowGrad)"
              strokeWidth="7"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />

            {/* Primary Golden Metallic Swooshing Ribbon Along Curve */}
            <path
              d="M 425 0 C 460 80 440 200 400 340 C 368 450 376 540 392 640"
              stroke="url(#goldSwooshGrad)"
              strokeWidth="4.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              fill="none"
            />

            {/* Inner Metallic Gold Hairline Accent */}
            <path
              d="M 433 0 C 468 82 448 202 408 342 C 376 452 384 542 400 640"
              stroke="url(#goldSwooshGrad)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              strokeOpacity="0.75"
              fill="none"
            />
          </svg>
        </div>

        {/* UPPER-LEFT ARCHITECTURAL DRAFTING BLUEPRINT ARCS (SUBTLE GOLD LINE ART) */}
        <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 lg:w-[420px] h-64 sm:h-80 md:h-96 lg:h-[420px] pointer-events-none z-[3] opacity-20 sm:opacity-25">
          <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
            <circle cx="30" cy="40" r="140" stroke="#C9902C" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="30" cy="220" r="180" stroke="#C9902C" strokeWidth="0.6" />
            <circle cx="30" cy="40" r="300" stroke="#C9902C" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="30" y1="40" x2="380" y2="190" stroke="#C9902C" strokeWidth="0.6" />
            <line x1="30" y1="40" x2="280" y2="340" stroke="#C9902C" strokeWidth="0.6" />
            <line x1="30" y1="40" x2="160" y2="390" stroke="#C9902C" strokeWidth="0.6" />
            <circle cx="30" cy="40" r="3.5" fill="#C9902C" />
          </svg>
        </div>

        {/* HERO EDITORIAL CONTENT CONTAINER */}
        <div
          className={`max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 pt-6 pb-6 sm:pt-7 md:pt-10 lg:pt-12 md:pb-2 relative z-10 w-full bg-[#FFFDFA] md:bg-transparent rounded-t-[24px] md:rounded-none -mt-5 md:mt-0 border-t-2 border-[#DFC06A]/75 md:border-t-0 shadow-[0_-12px_32px_rgba(37,8,54,0.14)] md:shadow-none ${
            reducedMotion
              ? ''
              : `transition-all duration-[600ms] ease-out ${
                  heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`
          }`}
        >
          <div className="w-full md:max-w-[44%] lg:max-w-[41%] xl:max-w-[480px] space-y-3.5 sm:space-y-4 text-left">

            {/* Elegant Capsule Badge: Admissions Open 2025–26 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FAF3E6]/95 backdrop-blur-xs border border-[#E7D3B0] text-[#7E5218] shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A87627] shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-wide font-sans">
                Admissions Open 2025–26
              </span>
            </div>

            {/* Majestic Editorial Typography: "Where Passion Meets Creative Engineering" */}
            <div className="space-y-1 sm:space-y-1.5">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold tracking-tight text-[#250836] leading-[1.08]">
                <span
                  className={`font-['Playfair_Display',serif] block font-bold ${
                    reducedMotion
                      ? ''
                      : `transition-all duration-500 ease-out delay-[100ms] ${
                          heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                        }`
                  }`}
                >
                  Where Passion Meets
                </span>
                <span
                  className={`font-['Playfair_Display',serif] italic font-normal text-[#B5802B] min-h-[1.2em] flex items-center pt-0.5 ${
                    reducedMotion
                      ? ''
                      : `transition-all duration-500 ease-out delay-[240ms] ${
                          heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                        }`
                  }`}
                >
                  <span>{TYPING_PHRASES[textIndex].substring(0, charIndex)}</span>
                  <span className="inline-block w-[3px] h-[0.8em] bg-[#B5802B] ml-1.5 animate-pulse rounded-full shrink-0" />
                </span>
              </h1>

              {/* Gold Bar & All-Caps Institution Tagline */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-0.5">
                <span className="w-6 sm:w-8 h-[2px] sm:h-[2.5px] bg-[#C99638] rounded-full shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-[#250836] uppercase font-sans truncate">
                  JYOTHI ENGINEERING COLLEGE
                </span>
              </div>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-xs sm:text-[13px] text-slate-700 font-normal leading-relaxed max-w-md pt-0.5">
              Managed by the <strong className="text-slate-900 font-semibold">Catholic Archdiocese of Trichur</strong> since 2002. Set on 30+ scenic green acres in Cheruthuruthy, Jyothi equips aspiring engineers with autonomous curricula, MIT-modeled FabLab prototyping, and high-impact global careers.
            </p>

            {/* Responsive CTA Buttons */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 pt-1">
              
              {/* Button 1: Purple -> Golden on Hover, Tap Press + Arrow Shift */}
              <button
                onClick={onOpenApply}
                className={`relative px-5 sm:px-6 py-2.5 rounded-full bg-[#29073D] text-white font-bold text-xs sm:text-sm shadow-md border-2 border-[#D4A346] hover:border-[#250836] flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.97] hover:shadow-glow-gold transition-all duration-300 cursor-pointer group overflow-hidden ${
                  reducedMotion
                    ? ''
                    : `delay-[320ms] ${heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`
                }`}
              >
                {/* Smooth Golden Hover Layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#250836]">
                  Apply for Admissions
                </span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#250836] group-hover:translate-x-1 group-active:translate-x-2 transition-all duration-300" />
              </button>

              {/* Button 2: White/Gold -> Royal Purple on Hover, Tap Press + Icon Shift */}
              <button
                onClick={onOpenTour}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full bg-white text-[#250836] font-bold text-xs sm:text-sm border-2 border-[#D4A346] hover:border-[#DFC06A] shadow-xs hover:shadow-glow-purple hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group overflow-hidden ${
                  reducedMotion
                    ? ''
                    : `delay-[400ms] ${heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`
                }`}
              >
                {/* Smooth Royal Purple Hover Layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#29073D] via-[#3C1361] to-[#250836] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#250836] group-hover:border-[#DFC06A] group-hover:bg-[#DFC06A]/20 flex items-center justify-center group-hover:scale-115 group-active:translate-x-0.5 transition-all duration-300 shrink-0">
                  <Play className="w-2.5 h-2.5 text-[#250836] fill-[#250836] group-hover:text-[#DFC06A] group-hover:fill-[#DFC06A] ml-0.5 transition-all duration-300" />
                </div>
                <span className="relative z-10 whitespace-nowrap transition-colors duration-300 group-hover:text-[#FDE68A]">
                  360° Virtual Campus Tour
                </span>
              </button>
            </div>

            {/* Responsive Stream Finder Bar */}
            <div className="pt-0.5 w-full max-w-sm sm:max-w-md">
              <div className="p-1 pl-3.5 sm:pl-4 rounded-full bg-white/98 border border-[#E2D8C7] shadow-xs flex items-center justify-between gap-2 sm:gap-3">
                <span className="font-bold text-[11px] sm:text-xs text-[#250836] whitespace-nowrap shrink-0">
                  Find Your Stream
                </span>
                <span className="text-slate-300 shrink-0">|</span>
                <select
                  value={selectedStreamId}
                  onChange={(e) => setSelectedStreamId(e.target.value)}
                  className="bg-transparent text-[11px] sm:text-xs text-slate-800 font-medium focus:outline-none cursor-pointer w-full py-1 truncate"
                >
                  {DEPARTMENTS.map(d => (
                    <option key={d.id} value={d.id}>
                      {d.code} – {d.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => onNavigate('departments', selectedStreamId)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#250836] hover:bg-[#3C1361] text-white flex items-center justify-center shrink-0 transition-all shadow-2xs"
                  title="View Stream"
                  aria-label="View Stream"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM ARCHITECTURAL PURPLE & GOLD SWOOPING BANNER */}
        <div className="relative w-full z-20 mt-auto">
          {/* Mobile 3-Card Pill Strip + Curved Purple/Gold Wave (< 768px) */}
          <div className="md:hidden bg-[#FFFDFA]">
            <div className="px-3 pb-3 pt-1">
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-2xl bg-[#FFFDFA] border border-[#E7D3B0] shadow-2xs">
                  <Layers className="w-4 h-4 text-[#C9902C] shrink-0" />
                  <span className="text-[10px] leading-tight font-bold text-[#250836]">
                    KTU Autonomous Scheme
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-2xl bg-[#FFFDFA] border border-[#E7D3B0] shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-[#C9902C] shrink-0" />
                  <span className="text-[10px] leading-tight font-bold text-[#250836]">
                    ₹3 Cr+ Scholarships
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-2xl bg-[#FFFDFA] border border-[#E7D3B0] shadow-2xs">
                  <Bus className="w-4 h-4 text-[#C9902C] shrink-0" />
                  <span className="text-[10px] leading-tight font-bold text-[#250836]">
                    25+ Fleet Bus Routes
                  </span>
                </div>
              </div>
            </div>
            {/* Sleek Curved Purple & Gold Bottom Wave */}
            <svg className="w-full h-7 block" viewBox="0 0 400 28" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mobileWavePurple" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#210532" />
                  <stop offset="50%" stopColor="#2E0946" />
                  <stop offset="100%" stopColor="#170221" />
                </linearGradient>
                <linearGradient id="mobileWaveGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DFC06A" />
                  <stop offset="50%" stopColor="#FDE68A" />
                  <stop offset="100%" stopColor="#C9902C" />
                </linearGradient>
              </defs>
              <path d="M 0 18 Q 100 10, 220 18 T 400 6 L 400 28 L 0 28 Z" fill="url(#mobileWavePurple)" />
              <path d="M 0 18 Q 100 10, 220 18 T 400 6" stroke="url(#mobileWaveGold)" strokeWidth="2.5" fill="none" />
            </svg>
          </div>

          {/* Desktop & Tablet Swooping Wave Banner (>= 768px) */}
          <div className="hidden md:block relative w-full h-[114px] lg:h-[124px] overflow-hidden">
            
            {/* Full-Width SVG Swooping Banner Surface with Dual Metallic Gold Waves */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1440 120" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="purpleBottomWaveGrad" x1="0%" y1="0%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#210532" />
                  <stop offset="35%" stopColor="#2E0946" />
                  <stop offset="70%" stopColor="#230635" />
                  <stop offset="100%" stopColor="#170221" />
                </linearGradient>
                <linearGradient id="goldContourGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DFC06A" />
                  <stop offset="25%" stopColor="#FDE68A" />
                  <stop offset="55%" stopColor="#C9902C" />
                  <stop offset="85%" stopColor="#FDE68A" />
                  <stop offset="100%" stopColor="#DFC06A" />
                </linearGradient>
                <filter id="bannerShadow" x="0" y="-15%" width="100%" height="130%">
                  <feDropShadow dx="0" dy="-4" stdDeviation="6" floodColor="#15021E" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Main Purple Banner Surface: Rounded corner on left, flat across text, dip, then swoops up on right */}
              <path
                d="M 0 120 L 0 105 C 18 80, 42 72, 70 72 L 600 72 C 700 72, 790 88, 860 88 C 1020 88, 1220 38, 1440 12 L 1440 120 Z"
                fill="url(#purpleBottomWaveGrad)"
                filter="url(#bannerShadow)"
              />

              {/* Primary Metallic Gold Contour Line along the wave */}
              <path
                d="M 0 105 C 18 80, 42 72, 70 72 L 600 72 C 700 72, 790 88, 860 88 C 1020 88, 1220 38, 1440 12"
                stroke="url(#goldContourGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />

              {/* Glowing Hairline Specular Highlight along top wave edge */}
              <path
                d="M 0 105 C 18 80, 42 72, 70 72 L 600 72 C 700 72, 790 88, 860 88 C 1020 88, 1220 38, 1440 12"
                stroke="#FFF8D6"
                strokeWidth="1.2"
                strokeOpacity="0.9"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />

              {/* Subtle Continuous Gold Hairline along Bottom */}
              <line
                x1="0"
                y1="110"
                x2="1440"
                y2="110"
                stroke="url(#goldContourGrad)"
                strokeWidth="1.2"
                strokeOpacity="0.75"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Engineering Compass Draft Illustration in Bottom-Right Corner (Unclipped & Crisp) */}
            <div className="absolute right-2 sm:right-6 md:right-10 bottom-0 pointer-events-none opacity-90 hidden sm:block">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <defs>
                  <linearGradient id="compassGoldTool" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D076" />
                    <stop offset="100%" stopColor="#B88029" />
                  </linearGradient>
                </defs>
                {/* Radiating Drafting Blueprint Arcs */}
                <path d="M 15 110 A 87 87 0 0 1 150 25" stroke="url(#compassGoldTool)" strokeWidth="0.8" strokeDasharray="3 3" />
                <path d="M 45 110 A 67 67 0 0 1 155 45" stroke="url(#compassGoldTool)" strokeWidth="0.8" />
                <path d="M -10 110 A 115 115 0 0 1 150 0" stroke="url(#compassGoldTool)" strokeWidth="0.6" strokeDasharray="2 4" />

                {/* Engineering Drafting Divider / Compass Tool */}
                <g>
                  {/* Top Hinge Circle */}
                  <circle cx="134" cy="23" r="6" stroke="url(#compassGoldTool)" strokeWidth="1.8" />
                  <circle cx="134" cy="23" r="2.5" fill="#FDE68A" />
                  {/* Compass Legs */}
                  <line x1="131" y1="28" x2="102" y2="110" stroke="url(#compassGoldTool)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="137" y1="28" x2="166" y2="110" stroke="url(#compassGoldTool)" strokeWidth="2" strokeLinecap="round" />
                  {/* Horizontal Cross Strut & Dial */}
                  <line x1="116" y1="56" x2="152" y2="56" stroke="url(#compassGoldTool)" strokeWidth="1.4" />
                  <circle cx="134" cy="56" r="4" stroke="url(#compassGoldTool)" strokeWidth="1.2" fill="#250836" />
                </g>
              </svg>
            </div>

            {/* Banner Text Items - Completely Clean, Sharp & Unobstructed */}
            <div className="max-w-[1440px] h-full mx-auto px-4 sm:px-8 md:px-10 lg:px-14 flex flex-wrap items-end justify-start gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-[13px] md:text-sm text-white font-medium relative z-10 pb-3.5 sm:pb-4 md:pb-5">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#F5CB6C] shrink-0" />
                <span className="whitespace-nowrap font-semibold">KTU Autonomous Scheme</span>
              </div>
              <span className="text-[#8F6B27] hidden sm:inline select-none">|</span>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#F5CB6C] shrink-0" />
                <span className="whitespace-nowrap font-semibold">₹3 Cr+ Scholarships</span>
              </div>
              <span className="text-[#8F6B27] hidden sm:inline select-none">|</span>
              <div className="flex items-center gap-2.5">
                <Bus className="w-4 h-4 text-[#F5CB6C] shrink-0" />
                <span className="whitespace-nowrap font-semibold">25+ Fleet Bus Routes</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      <div className="relative z-10 bg-white space-y-12 sm:space-y-16 md:space-y-24 pt-12 sm:pt-16 md:pt-24">
      {/* ============================================================== */}
      {/* 2. SIX QUICK ACCESS DESTINATIONS (STAGGERED SCROLL REVEAL) */}
      {/* ============================================================== */}
      <section ref={portalsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            {
              title: "Admissions 2025",
              desc: "Eligibility & Quota",
              icon: GraduationCap,
              action: onOpenApply,
              badge: "Open",
              color: "text-jyothi-purple-900 bg-jyothi-purple-50 group-hover:bg-jyothi-purple-900 group-hover:text-jyothi-gold-300"
            },
            {
              title: "Autonomous Syllabi",
              desc: "KTU Approved",
              icon: BookOpen,
              action: () => onNavigate('departments'),
              badge: "2024 Reg",
              color: "text-blue-900 bg-blue-50 group-hover:bg-blue-900 group-hover:text-white"
            },
            {
              title: "MIT FabLab & TBI",
              desc: "Startup Incubator",
              icon: Microscope,
              action: () => onNavigate('research'),
              badge: "KSUM",
              color: "text-amber-900 bg-amber-50 group-hover:bg-amber-900 group-hover:text-white"
            },
            {
              title: "Placement Cell",
              desc: "₹24 LPA Records",
              icon: Briefcase,
              action: () => onNavigate('placements'),
              badge: "462+ Offers",
              color: "text-emerald-900 bg-emerald-50 group-hover:bg-emerald-900 group-hover:text-white"
            },
            {
              title: "Central Library",
              desc: "42,000+ Volumes",
              icon: Landmark,
              action: () => onNavigate('facilities', 'library'),
              badge: "E-Journals",
              color: "text-indigo-900 bg-indigo-50 group-hover:bg-indigo-900 group-hover:text-white"
            },
            {
              title: "Campus 360° Tour",
              desc: "30+ Green Acres",
              icon: Compass,
              action: onOpenTour,
              badge: "VR Live",
              color: "text-purple-900 bg-purple-50 group-hover:bg-purple-900 group-hover:text-jyothi-gold-300"
            }
          ].map((portal, i) => {
            const Icon = portal.icon;
            const fromLeft = i % 2 === 0;
            const hiddenDirection = fromLeft ? '-translate-x-8' : 'translate-x-8';
            return (
              <button
                key={i}
                onClick={portal.action}
                style={
                  reducedMotion
                    ? undefined
                    : { transitionDelay: `${i * 90}ms` }
                }
                className={`p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-jyothi-purple-300 text-left group flex flex-col justify-between ${
                  reducedMotion
                    ? 'transition-all duration-300'
                    : `transition-all duration-700 ease-out transform will-change-transform ${
                        portalsInView
                          ? 'opacity-100 translate-x-0 scale-100'
                          : `opacity-0 ${hiddenDirection} scale-95 pointer-events-none`
                      }`
                } hover:-translate-y-1.5`}
              >
                <div className="flex items-center justify-between mb-3 w-full">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${portal.color}`}>
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-jyothi-gold-100 group-hover:text-jyothi-gold-900 transition-colors">
                    {portal.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm font-brand text-jyothi-purple-950 group-hover:text-jyothi-purple-800 transition-colors">
                    {portal.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {portal.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. DYNAMIC ANNOUNCEMENTS & TICKER (CLEAN WHITE CARD) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
        <div className="bg-white rounded-3xl shadow-xs border border-slate-200 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-jyothi-purple-100 text-jyothi-purple-900 font-bold flex items-center gap-2 text-xs uppercase tracking-wider">
              <BellRing className="w-4 h-4 text-jyothi-purple-800 animate-bounce" />
              <span>Announcements</span>
            </span>
          </div>

          <div className="flex-1 overflow-hidden min-w-0 w-full md:w-auto">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
              <span className="px-2.5 py-0.5 rounded-full bg-jyothi-gold-100 text-jyothi-gold-900 font-bold text-[11px] shrink-0">
                {ANNOUNCEMENTS[0].tag}
              </span>
              <span className="font-semibold text-jyothi-purple-950 truncate" title={ANNOUNCEMENTS[0].title}>
                {ANNOUNCEMENTS[0].title}
              </span>
              <span className="text-xs text-slate-400 hidden lg:inline">({ANNOUNCEMENTS[0].date})</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('admissions')}
            className="text-xs font-bold text-jyothi-purple-800 hover:text-jyothi-purple-950 flex items-center gap-1 shrink-0 ml-auto md:ml-0 group"
          >
            <span>View All Circulars</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        </RevealBlock>
      </section>

      {/* ============================================================== */}
      {/* 4. FOUR PILLARS OF DISTINCTION (CASUAL, FRIENDLY & ELEGANT TABS) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 border border-jyothi-purple-200/80 px-3.5 py-1 rounded-full">
            Institutional Distinction
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-brand text-jyothi-purple-950">
            The Jyothi Advantage
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Four foundational pillars that give every student an agile curriculum, practical maker-lab access, and verified corporate placement.
          </p>
        </div>

        {/* 4 Pillar Selection Cards */}
        <div ref={pillarsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePillar === idx;
            const fromLeft = idx % 2 === 0;
            return (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                style={
                  reducedMotion
                    ? undefined
                    : { transitionDelay: `${idx * 100}ms` }
                }
                className={`p-4 sm:p-5 rounded-3xl text-left border ${
                  reducedMotion
                    ? 'transition-all duration-300'
                    : `transition-all duration-700 ease-out transform will-change-transform ${
                        pillarsInView
                          ? 'opacity-100 translate-x-0 scale-100'
                          : `opacity-0 ${fromLeft ? '-translate-x-8' : 'translate-x-8'} scale-95 pointer-events-none`
                      }`
                } ${isSelected
                    ? 'bg-jyothi-purple-900 text-white border-jyothi-purple-900 shadow-xl'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-xs'
                  }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isSelected ? 'bg-jyothi-gold-400 text-jyothi-purple-950' : 'bg-slate-100 text-jyothi-purple-900'
                    }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-jyothi-gold-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                    0{idx + 1}
                  </span>
                </div>
                <h3 className={`font-bold text-sm sm:text-base font-brand ${isSelected ? 'text-white' : 'text-jyothi-purple-950'}`}>
                  {p.title}
                </h3>
                <p className={`text-[11px] sm:text-xs mt-1 line-clamp-1 ${isSelected ? 'text-jyothi-gold-200' : 'text-slate-500'}`}>
                  {p.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Showcase Card */}
        <RevealBlock direction="up">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 px-3 py-1 rounded-full border border-jyothi-purple-200">
              {pillars[activePillar].badge} • {pillars[activePillar].subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-brand text-jyothi-purple-950">
              {pillars[activePillar].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {pillars[activePillar].desc}
            </p>

            {/* Pillar key highlights list */}
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              {pillars[activePillar].highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={onOpenApply}
                className="px-6 py-3 rounded-2xl bg-jyothi-purple-900 hover:bg-jyothi-purple-950 text-jyothi-gold-300 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Apply for Admissions 2025</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate(activePillar === 0 ? 'about' : activePillar === 1 ? 'research' : activePillar === 2 ? 'placements' : 'facilities')}
                className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-jyothi-purple-950 font-bold text-xs sm:text-sm transition-all"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-50 text-jyothi-purple-950 text-center space-y-3 border border-slate-200">
            <div className="w-12 h-12 rounded-2xl bg-jyothi-purple-100 text-jyothi-purple-900 mx-auto flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-brand text-jyothi-purple-900">
              {pillars[activePillar].stat}
            </div>
            <div className="text-xs font-semibold text-slate-600">
              {pillars[activePillar].statLabel}
            </div>
            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-200">
              Authentic Institutional Record
            </div>
          </div>
        </div>
        </RevealBlock>
      </section>

      {/* ============================================================== */}
      {/* 5. ACADEMIC PROGRAMMES (CLEAN WHITE BENTO MATRIX) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 border border-jyothi-purple-200/80 px-3.5 py-1 rounded-full">
              Engineering Degrees
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-brand text-jyothi-purple-950 mt-2">
              Autonomous B.Tech Programmes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Affiliated to APJ Abdul Kalam Technological University with industry-tailored curricula.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full">
            {[
              { id: 'all', label: 'All 7 Programmes' },
              { id: 'computer', label: 'Computer & AI' },
              { id: 'circuits', label: 'Electronics & EEE' },
              { id: 'core', label: 'Mechanical & Civil' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${activeTab === tab.id
                  ? 'bg-jyothi-purple-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-jyothi-purple-900'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout (each card reveals individually as you scroll) */}
        <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredDepts.map((dept, i) => (
            <RevealBlock
              key={dept.id}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={50}
              className="h-full"
            >
            <div
              className={`h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-jyothi-purple-300 transition-all duration-500 flex flex-col justify-between group space-y-4 ${
                bentoInView ? '' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-xl bg-jyothi-purple-100 text-jyothi-purple-900 font-mono font-bold text-xs">
                    {dept.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {dept.intake} Approved Seats
                  </span>
                </div>

                <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3.5">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-jyothi-gold-400" />
                      {dept.degree}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg font-brand text-jyothi-purple-950 group-hover:text-jyothi-purple-800 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> NBA / NAAC 'A' Accredited
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Check className="w-3.5 h-3.5 text-jyothi-gold-600" /> Autonomous KTU Curriculum
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('departments', dept.id)}
                  className="font-bold text-xs text-jyothi-purple-800 hover:text-jyothi-purple-950 flex items-center gap-1 group/btn"
                >
                  <span>Curriculum & Labs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onOpenApply}
                  className="px-3.5 py-1.5 rounded-xl bg-jyothi-gold-400 hover:bg-jyothi-gold-300 text-jyothi-purple-950 font-bold text-xs shadow-xs"
                >
                  Apply
                </button>
              </div>
            </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. RESEARCH & INNOVATION: FABLAB KERALA & TBI INCUBATOR */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#160524] via-[#220937] to-[#12041E] text-white border border-[#DFC06A]/50 shadow-2xl relative overflow-hidden">

          {/* Subtle Gold Architectural Curve & Drafting Accents */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full opacity-45"
              viewBox="0 0 1200 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 670 0 C 610 140 605 330 660 500"
                stroke="#DFC06A"
                strokeWidth="1.2"
                strokeOpacity="0.45"
              />
              <circle cx="1115" cy="45" r="72" stroke="#DFC06A" strokeWidth="0.8" strokeOpacity="0.22" strokeDasharray="3 4" />
              <circle cx="1115" cy="45" r="44" stroke="#DFC06A" strokeWidth="0.7" strokeOpacity="0.22" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#DFC06A] bg-[#280C40]/85 px-3.5 py-1 rounded-full border border-[#DFC06A]/45 inline-block">
                  Innovation Powerhouse
                </span>
                <span className="hidden sm:block h-px flex-1 max-w-[140px] bg-gradient-to-r from-[#DFC06A]/50 to-transparent" />
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold font-['Playfair_Display',serif] leading-[1.12] tracking-tight">
                <span className="block text-white">MIT FabLab Kerala &amp;</span>
                <span className="block text-[#DFC06A] mt-0.5">Jyothi Tech Business Incubator</span>
              </h2>

              <p className="text-xs sm:text-[13.5px] text-slate-300 max-w-xl leading-relaxed">
                Jyothi Engineering College powers prototyping, research and entrepreneurship through one of Kerala&apos;s earliest mini-FabLabs, in collaboration with the APJ Abdul Kalam Technological University and Kerala Startup Mission (KSUM). Students build working prototypes, conduct applied research, and launch startups in a hands-on innovation ecosystem.
              </p>

              {/* 3 Gold-Outlined Prototyping Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1.5">
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#1E0831]/90 border border-[#DFC06A]/35">
                  <Layers className="w-5 h-5 text-[#DFC06A] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-100 leading-tight">
                    3D Printing &amp; Laser Engraving
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#1E0831]/90 border border-[#DFC06A]/35">
                  <Cpu className="w-5 h-5 text-[#DFC06A] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-100 leading-tight">
                    SMD Rework &amp; IoT Stations
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#1E0831]/90 border border-[#DFC06A]/35">
                  <Zap className="w-5 h-5 text-[#DFC06A] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-100 leading-tight">
                    Student Startups
                  </span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('research')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#DFC06A] via-[#F4DA84] to-[#C9902C] text-[#1D052D] font-bold text-xs sm:text-sm shadow-md hover:shadow-glow-gold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore FabLab &amp; Patents</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 rounded-full bg-[#1C072E]/85 hover:bg-[#2B0C44] text-white font-semibold text-xs sm:text-sm border border-[#DFC06A]/60 hover:border-[#DFC06A] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Join Innovation Clubs</span>
                  <ArrowRight className="w-4 h-4 text-[#DFC06A] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Innovation Stats Grid with Gold Corner Fold */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
              <RevealBlock direction="left" delay={40}>
              <div className="h-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#230B38]/90 to-[#160524]/95 border border-[#DFC06A]/35 hover:border-[#DFC06A]/70 text-center relative overflow-hidden transition-all">
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-t-[#DFC06A]/85 border-l-[18px] border-l-transparent pointer-events-none" />
                <TrendingUp className="w-6 h-6 text-[#DFC06A] mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-white">
                  <AnimatedCounter end={18} suffix="+" duration={1600} />
                </div>
                <div className="text-xs font-bold text-white mt-1">Startups Incubated</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Kerala Startup Mission</div>
              </div>
              </RevealBlock>

              <RevealBlock direction="right" delay={110}>
              <div className="h-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#230B38]/90 to-[#160524]/95 border border-[#DFC06A]/35 hover:border-[#DFC06A]/70 text-center relative overflow-hidden transition-all">
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-t-[#DFC06A]/85 border-l-[18px] border-l-transparent pointer-events-none" />
                <FileText className="w-6 h-6 text-[#DFC06A] mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-white">
                  <AnimatedCounter end={42} suffix="+" duration={1700} />
                </div>
                <div className="text-xs font-bold text-white mt-1">Patents &amp; Papers</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Student &amp; Faculty IPR</div>
              </div>
              </RevealBlock>

              <RevealBlock direction="left" delay={180}>
              <div className="h-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#230B38]/90 to-[#160524]/95 border border-[#DFC06A]/35 hover:border-[#DFC06A]/70 text-center relative overflow-hidden transition-all">
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-t-[#DFC06A]/85 border-l-[18px] border-l-transparent pointer-events-none" />
                <Award className="w-6 h-6 text-[#DFC06A] mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#DFC06A]">
                  <AnimatedCounter end={1.2} prefix="₹" suffix=" Cr+" decimals={1} duration={1800} />
                </div>
                <div className="text-xs font-bold text-white mt-1">Seed Grants Pool</div>
                <div className="text-[10px] text-slate-400 mt-0.5">IEDC &amp; Institutional</div>
              </div>
              </RevealBlock>

              <RevealBlock direction="right" delay={250}>
              <div className="h-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#230B38]/90 to-[#160524]/95 border border-[#DFC06A]/35 hover:border-[#DFC06A]/70 text-center relative overflow-hidden transition-all">
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-t-[#DFC06A]/85 border-l-[18px] border-l-transparent pointer-events-none" />
                <Wrench className="w-6 h-6 text-[#DFC06A] mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-white tracking-wider">MIT</div>
                <div className="text-xs font-bold text-white mt-1">Modeled FabLab</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Rapid Hardware Prototyping</div>
              </div>
              </RevealBlock>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. VERIFIED PLACEMENTS & RECRUITER WALL (CLEAN WHITE CARDS) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 border border-jyothi-purple-200/80 px-3.5 py-1 rounded-full">
              Placement Record
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-brand text-jyothi-purple-950 mt-2">
              Verified Career Achievements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Top tech and core employers hiring graduates across Bangalore, Kochi, Chennai, and overseas.
            </p>
          </div>
          <VerificationBadge status="Confirmed by College" />
        </div>

        {/* 4 Stats Cards with Counting Animation */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { end: 24, prefix: "₹", suffix: " LPA", label: "Highest CTC Offered", sub: "Premier Tech Recruiter", color: "text-jyothi-purple-900", subColor: "text-jyothi-purple-700" },
            { end: 462, suffix: "+", label: "Total Job Offers", sub: "Season 2024-25", color: "text-jyothi-purple-900", subColor: "text-emerald-600" },
            { end: 94, suffix: "+", label: "Companies Visited", sub: "MNCs & Core Leaders", color: "text-jyothi-purple-900", subColor: "text-jyothi-purple-700" },
            { end: 87.4, suffix: "%", decimals: 1, label: "Placement Rate", sub: "Eligible Graduates", color: "text-jyothi-purple-900", subColor: "text-emerald-600" },
          ].map((stat, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <div
                key={i}
                style={
                  reducedMotion
                    ? undefined
                    : { transitionDelay: `${i * 100}ms` }
                }
                className={`p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg text-center ${
                  reducedMotion
                    ? 'transition-all duration-300'
                    : `transition-all duration-700 ease-out transform will-change-transform ${
                        statsInView
                          ? 'opacity-100 translate-x-0 scale-100'
                          : `opacity-0 ${fromLeft ? '-translate-x-8' : 'translate-x-8'} scale-95 pointer-events-none`
                      }`
                }`}
              >
              <div className={`text-3xl sm:text-4xl font-black font-brand ${stat.color}`}>
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                  decimals={stat.decimals || 0}
                  duration={1800}
                />
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-1">{stat.label}</div>
              <div className={`text-[11px] mt-0.5 ${stat.subColor}`}>{stat.sub}</div>
            </div>
            );
          })}
        </div>

        {/* Continuous Dual-Direction Infinite Recruiter Marquee */}
        <div className="p-5 sm:p-7 bg-slate-50 rounded-3xl border border-slate-200 space-y-4 overflow-hidden">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Corporate Hiring Partners
            </span>
            <span className="text-xs font-semibold text-jyothi-purple-800 hidden sm:inline-flex items-center gap-1">
              <span>94+ Visiting MNCs & Global Tech Leaders</span>
            </span>
          </div>

          {/* Row 1: Forward Infinite Scroll */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)] py-1">
            <div className="infinite-marquee-track gap-3.5">
              {[...RECRUITERS, ...RECRUITERS].map((r, i) => (
                <div
                  key={`r1-${i}`}
                  className="px-4 py-3 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-2.5 shrink-0 hover:border-jyothi-purple-400 hover:shadow-md hover:scale-[1.03] transition-all cursor-pointer group"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-jyothi-gold-400 to-jyothi-gold-500 shadow-xs" />
                  <span className="text-xs font-bold text-jyothi-purple-950 group-hover:text-jyothi-purple-800 transition-colors whitespace-nowrap">
                    {r.name}
                  </span>
                  <span className="text-[11px] text-slate-400 whitespace-nowrap">
                    • {r.sector}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 text-slate-600 font-medium whitespace-nowrap group-hover:bg-jyothi-purple-100 group-hover:text-jyothi-purple-900 transition-colors">
                    {r.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Reverse Infinite Scroll */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)] py-1">
            <div className="infinite-marquee-track-reverse gap-3.5">
              {[...RECRUITERS.slice().reverse(), ...RECRUITERS.slice().reverse()].map((r, i) => (
                <div
                  key={`r2-${i}`}
                  className="px-4 py-3 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-2.5 shrink-0 hover:border-jyothi-gold-400 hover:shadow-md hover:scale-[1.03] transition-all cursor-pointer group"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-jyothi-purple-800 shadow-xs" />
                  <span className="text-xs font-bold text-jyothi-purple-950 group-hover:text-jyothi-purple-800 transition-colors whitespace-nowrap">
                    {r.name}
                  </span>
                  <span className="text-[11px] text-slate-400 whitespace-nowrap">
                    • {r.sector}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] bg-jyothi-gold-50 text-jyothi-gold-900 font-medium whitespace-nowrap group-hover:bg-jyothi-gold-100 transition-colors">
                    {r.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. ALUMNI IN GLOBAL TECH (AWS, BOSCH, ISRO) */}
      {/* ============================================================== */}
      <section id="alumni" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 border border-jyothi-purple-200/80 px-3.5 py-1 rounded-full">
            Alumni Success
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-brand text-jyothi-purple-950">
            Powering Global Tech
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Meet graduates from Jyothi leading missions across international cloud infrastructures, autonomous mobility, and aerospace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {ALUMNI_TESTIMONIALS.map((alumni, idx) => (
            <RevealBlock
              key={alumni.id}
              direction={idx === 0 ? 'left' : idx === 2 ? 'right' : 'up'}
              delay={idx * 90}
              className="h-full"
            >
            <div
              className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-jyothi-purple-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3.5">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-jyothi-gold-400 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-jyothi-purple-950">{alumni.name}</h4>
                    <p className="text-xs text-jyothi-purple-800 font-semibold">{alumni.role}</p>
                    <p className="text-[11px] text-slate-500">{alumni.company} • {alumni.location}</p>
                  </div>
                </div>

                <div className="relative pt-1">
                  <Quote className="w-5 h-5 text-jyothi-gold-400/40 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-xs text-slate-600 italic leading-relaxed pl-4">
                    "{alumni.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-jyothi-purple-900">{alumni.programme}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 font-mono">{alumni.batch}</span>
              </div>
            </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. CAMPUS LIFE & CULTURAL VIBRANCE */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 border border-jyothi-purple-200/80 px-3.5 py-1 rounded-full">
              Student Life
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-brand text-jyothi-purple-950 mt-2">
              Beyond the Classroom
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              From the iconic "Tharang" national fest to IEEE and sports championships on our 30-acre campus.
            </p>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {[
              { id: 'tharang', label: 'Tharang Fest' },
              { id: 'clubs', label: 'IEEE & Tech Clubs' },
              { id: 'sports', label: 'Sports Complex' },
              { id: 'hostel', label: 'Hostels & Dining' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveLifeTab(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${activeLifeTab === tab.id
                  ? 'bg-jyothi-purple-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-jyothi-purple-900'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Campus Life Spotlight */}
        <RevealBlock direction="up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeLifeTab === 'tharang' && (
            <>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-gold-100 text-jyothi-gold-900">National Fest</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">Tharang National Cultural Fest</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Three days of electrifying musical performances, inter-collegiate pro-shows, dance battles, and literary competitions drawing 5,000+ students across South India.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-purple-100 text-jyothi-purple-900">Tech Conclave</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">HackJyothi 24-Hour Hackathon</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Overnight code marathon sponsored by IT partners. Teams tackle real-world problem statements in generative AI, IoT, and embedded robotics with cash prizes.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">Social Initiative</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">NSS & Community Outreach</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Blood donation camps, solar lighting drives in nearby villages, and flood relief operations exemplifying the college's moral and ethical mission.
                </p>
              </div>
            </>
          )}

          {activeLifeTab === 'clubs' && (
            <>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-purple-100 text-jyothi-purple-900">Global Chapter</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">IEEE Student Branch</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active student branch organizing international paper presentation conferences, workshops on robotics, and Women in Engineering (WIE) symposiums.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-gold-100 text-jyothi-gold-900">Startup Cell</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">IEDC Innovation & Entrepreneurship</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Supported by Kerala Startup Mission, IEDC guides students through patent filings, business pitching, and bootcamps with industry founders.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-900">Coding Circle</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">CSI & FOSS Club</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Weekly open-source development meetups, Linux install fests, and competitive programming practice on LeetCode and CodeChef.
                </p>
              </div>
            </>
          )}

          {activeLifeTab === 'sports' && (
            <>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">Outdoor Arena</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">Athletic Ground & Football Turf</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full-sized football ground with natural grass, 400m running track, and annual inter-collegiate KTU sports meets.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-purple-100 text-jyothi-purple-900">Court Games</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">Floodlit Basketball & Volleyball</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated synthetic basketball and volleyball courts open for evening matches with tournament-grade floodlighting.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-gold-100 text-jyothi-gold-900">Fitness Center</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">Multi-Gymnasium & Badminton</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Modern fitness multi-station gym and indoor badminton wooden courts for physical wellness of hostellers and day scholars.
                </p>
              </div>
            </>
          )}

          {activeLifeTab === 'hostel' && (
            <>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-purple-100 text-jyothi-purple-900">Residential</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">Separate Men & Women Hostels</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sanatana (Men) and Vimal (Women) hostels offering secure, clean accommodation with 24/7 power backup, Wi-Fi, and resident wardens.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">Dining</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">Hygienic Central Cafeteria</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Multi-cuisine mess offering nutritious vegetarian and non-vegetarian Kerala meals, snack counters, and fresh juice stalls.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-jyothi-gold-100 text-jyothi-gold-900">Fleet</span>
                <h3 className="font-bold text-lg font-brand text-jyothi-purple-950">25+ Bus Network Routes</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extensive bus fleet connecting Cheruthuruthy to Thrissur, Palakkad, Shoranur, Ottapalam, Wadakkanchery, and Kunnamkulam.
                </p>
              </div>
            </>
          )}
        </div>
        </RevealBlock>
      </section>

      {/* ============================================================== */}
      {/* 10. NOTICES & ACADEMIC CALENDAR BULLETIN (CLEAN WHITE FEED) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 border border-jyothi-purple-200/80 px-3.5 py-1 rounded-full">
            Bulletin Board
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-brand text-jyothi-purple-950">
            News, Events & Examination Schedule
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveNewsTab('notices')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${activeNewsTab === 'notices'
                ? 'bg-jyothi-purple-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-jyothi-purple-900'
                }`}
            >
              Circulars & Notices
            </button>
            <button
              onClick={() => setActiveNewsTab('events')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${activeNewsTab === 'events'
                ? 'bg-jyothi-purple-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-jyothi-purple-900'
                }`}
            >
              Campus Events
            </button>
            <button
              onClick={() => setActiveNewsTab('calendar')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${activeNewsTab === 'calendar'
                ? 'bg-jyothi-purple-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-jyothi-purple-900'
                }`}
            >
              Academic Calendar
            </button>
          </div>
        </div>

        <RevealBlock direction="up">
        <div className="p-5 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs max-w-4xl mx-auto">
          {activeNewsTab === 'notices' && (
            <div className="space-y-3 sm:space-y-4">
              {ANNOUNCEMENTS.map((ann) => (
                <div key={ann.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3 hover:border-jyothi-purple-300 transition-all">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-jyothi-purple-100 text-jyothi-purple-900 font-bold uppercase">
                        {ann.tag}
                      </span>
                      <span className="text-xs text-slate-400">{ann.date}</span>
                      {ann.isNew && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">NEW</span>
                      )}
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-jyothi-purple-950">{ann.title}</div>
                  </div>
                  <button
                    onClick={() => onNavigate('admissions')}
                    className="p-2 text-jyothi-purple-800 hover:bg-jyothi-purple-100 rounded-xl shrink-0"
                    aria-label="View Notice"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeNewsTab === 'events' && (
            <div className="space-y-3 sm:space-y-4">
              {[
                { title: "Tharang 2026 - All-Kerala Tech & Cultural Fest", date: "Jan 15-17, 2026", venue: "Father Thekkekara Auditorium" },
                { title: "HackJyothi 24-Hour Autonomous Robotics Hackathon", date: "Dec 05-06, 2025", venue: "FabLab Kerala Prototyping Centre" },
                { title: "Archdiocesan Inter-Collegiate Basketball Tournament", date: "Nov 28, 2025", venue: "Sports Stadium" },
              ].map((ev, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-jyothi-purple-100 text-jyothi-purple-900 text-center shrink-0 w-16">
                    <Calendar className="w-5 h-5 mx-auto mb-0.5" />
                    <div className="text-[10px] font-bold uppercase">Event</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-jyothi-purple-950">{ev.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">{ev.date} • {ev.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeNewsTab === 'calendar' && (
            <div className="space-y-2.5 sm:space-y-3">
              {[
                { event: "Commencement of B.Tech Even Semesters", date: "January 2026" },
                { event: "First Internal Assessment (Series Tests)", date: "February 2026" },
                { event: "FabLab Hackathon & Project Expo", date: "March 2026" },
                { event: "Autonomous End Semester Examinations", date: "May 2026" },
                { event: "Summer Industry Internships", date: "June-July 2026" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs py-2.5 border-b border-slate-100 last:border-0 gap-1 sm:gap-0">
                  <span className="font-medium text-slate-700">{item.event}</span>
                  <span className="font-bold text-jyothi-purple-900 bg-jyothi-gold-50 px-2.5 py-1 rounded-lg border border-jyothi-gold-200 self-start sm:self-auto">{item.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        </RevealBlock>
      </section>

      {/* ============================================================== */}
      {/* 11. IMMERSIVE ADMISSIONS & CAMPUS VISIT CALL TO ACTION */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <RevealBlock direction="up">
        <div className="rounded-3xl bg-gradient-to-r from-jyothi-purple-900 via-jyothi-purple-800 to-jyothi-purple-950 text-white p-8 sm:p-12 md:p-16 border border-jyothi-purple-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">

          {/* Ambient Glow */}
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-jyothi-gold-500/10 blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl relative z-10 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-gold-400 bg-white/10 px-3.5 py-1 rounded-full border border-jyothi-gold-400/20 inline-block">
              Admissions Open 2025-26
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-brand leading-tight">
              Begin Your Engineering Journey at Jyothi
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Merit scholarships up to 100%, advanced autonomous KTU curriculum, MIT-collaborated FabLab prototyping, and dedicated placement training.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10 w-full md:w-auto">
            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-jyothi-gold-400 via-jyothi-gold-500 to-jyothi-gold-400 text-jyothi-purple-950 font-black text-sm shadow-md hover:shadow-xl transition-all"
            >
              Apply Online Now
            </button>
            <button
              onClick={onOpenTour}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-sm transition-all text-center"
            >
              Explore Campus 360°
            </button>
          </div>

        </div>
        </RevealBlock>
      </section>
      </div>

    </div>
  );
};
