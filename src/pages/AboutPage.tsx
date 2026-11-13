import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, Award, GraduationCap, Building2, 
  CheckCircle2, Compass, ArrowRight, UserCheck, HeartHandshake, 
  BookOpen, Sparkles, Calendar, Layers, MapPin, Bus, Sun,
  Microscope, Lightbulb, Users, Trophy, ExternalLink, ChevronRight,
  TrendingUp, Star, Globe, Clock, Check, ChevronDown, Play, Landmark
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { RevealBlock } from '../components/RevealBlock';

// Reusable Scroll Reveal Observer Hook
function useScrollReveal(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
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

interface Milestone {
  year: string;
  era: 'foundation' | 'expansion' | 'innovation' | 'autonomy';
  eraLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stat?: string;
  statLabel?: string;
  icon: any;
  color: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2002",
    era: "foundation",
    eraLabel: "Foundations (2002–2008)",
    badge: "The Genesis",
    title: "Foundation of Jyothi Hills",
    subtitle: "Consecrated by the Catholic Archdiocese of Trichur",
    description: "Conceived by visionary church leadership to bring world-class, value-anchored technical education to rural Kerala. Built on a sprawling 30+ acre scenic hilltop in Cheruthuruthy along the historic Bharathapuzha river. Inception with 4 foundational B.Tech branches: CSE, ECE, EEE, and Mechanical Engineering under AICTE and University of Calicut approval.",
    highlights: [
      "Inaugurated by Archbishop Mar Jacob Thoomkuzhy",
      "Inaugural batch of 240 aspiring engineering scholars",
      "High-speed campus network and initial mechanical workshops",
      "Merit-first scholarship charter established for deserving students"
    ],
    stat: "240",
    statLabel: "Inaugural Intake",
    icon: Landmark,
    color: "from-amber-600 to-amber-800"
  },
  {
    year: "2006",
    era: "foundation",
    eraLabel: "Foundations (2002–2008)",
    badge: "Academic Triumph",
    title: "First Graduating Cohort & University Ranks",
    subtitle: "100% University Pass and High-Tier Placements",
    description: "The pioneer batch graduated with flying colors, claiming University of Calicut top ranks. Industry recruitment kicked off with major tech firms visiting the campus, cementing Jyothi's reputation for discipline, ethical character, and technical mastery.",
    highlights: [
      "First Convocation Ceremony with over 200 graduates",
      "Calicut University top rank holders across CSE & EEE",
      "Initial campus placement drives by national IT leaders",
      "Establishment of the Jyothi Alumni Association (JAA)"
    ],
    stat: "Top 3",
    statLabel: "University Ranks",
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-800"
  },
  {
    year: "2010",
    era: "expansion",
    eraLabel: "Expansion & NBA (2009–2016)",
    badge: "PG & Research",
    title: "Postgraduate Expansion & Advanced R&D",
    subtitle: "Launch of M.Tech Programs & CAD/CAM Centers",
    description: "Transitioning from undergraduate focus to a high-caliber research center. Jyothi introduced advanced M.Tech programs in Computer Science & Engineering and Power Electronics, commissioning high-end computing clusters and industrial automation testbeds.",
    highlights: [
      "M.Tech programs in CSE and Power Electronics launched",
      "Dedicated Central Computing Facility with 500+ systems",
      "Advanced Siemens CAD/CAM & Industrial Pneumatics lab",
      "First inter-collegiate national technical symposium 'Tharang'"
    ],
    stat: "₹1.5 Cr",
    statLabel: "R&D Lab Upgrade",
    icon: BookOpen,
    color: "from-purple-600 to-purple-900"
  },
  {
    year: "2014",
    era: "expansion",
    eraLabel: "Expansion & NBA (2009–2016)",
    badge: "National Benchmark",
    title: "National Board of Accreditation (NBA) Milestone",
    subtitle: "Tier-II Outcome-Based Education Accreditations",
    description: "Core engineering disciplines received prestigious accreditation from the National Board of Accreditation (NBA), validating Jyothi's strict adherence to international Washington Accord benchmarks and industry-integrated pedagogy.",
    highlights: [
      "NBA Accreditation awarded to CSE, ECE, EEE & ME",
      "Adoption of Outcome-Based Education (OBE) framework",
      "Automated student performance and outcome tracking",
      "Expansion of smart multimedia interactive lecture theaters"
    ],
    stat: "4 Depts",
    statLabel: "NBA Accredited",
    icon: Award,
    color: "from-emerald-600 to-teal-800"
  },
  {
    year: "2016",
    era: "expansion",
    eraLabel: "Expansion & NBA (2009–2016)",
    badge: "University Shift",
    title: "Affiliation to APJ Abdul Kalam Technological University (KTU)",
    subtitle: "Pioneering the Statewide Technical Curriculum Shift",
    description: "Jyothi seamlessly transitioned into the newly formed APJ Abdul Kalam Technological University (KTU) as one of its most distinguished engineering colleges. Introduced B.Tech in Civil Engineering to meet nation-building infrastructure demands.",
    highlights: [
      "Founding affiliated college under APJ KTU",
      "Introduction of Civil Engineering department & concrete labs",
      "State-of-the-art geotechnical and environmental engineering testing",
      "Ranked among the Top 5 self-financing colleges in Kerala"
    ],
    stat: "Top 5",
    statLabel: "In Kerala State",
    icon: Compass,
    color: "from-sky-600 to-blue-800"
  },
  {
    year: "2017",
    era: "innovation",
    eraLabel: "Deep-Tech & Innovation (2017–2022)",
    badge: "MIT Ecosystem",
    title: "Launch of MIT-Modeled FabLab & TBI Incubator",
    subtitle: "In Partnership with Kerala Startup Mission (KSUM)",
    description: "Marking a quantum leap into hardware prototyping, Jyothi established Kerala's elite FabLab modeled on MIT's Center for Bits and Atoms. Equipped with precision CNC milling machines, laser cutters, vinyl cutters, and industrial 3D printers, triggering a wave of student-led deep-tech startups.",
    highlights: [
      "Modelled on MIT Center for Bits & Atoms standards",
      "Over ₹1.2 Cr in seed grants facilitated via Jyothi TBI",
      "Direct patent filing mentorship and prototype development",
      "First commercial hardware startups incubated on campus"
    ],
    stat: "MIT",
    statLabel: "Certified FabLab",
    icon: Microscope,
    color: "from-amber-500 to-orange-700"
  },
  {
    year: "2019",
    era: "innovation",
    eraLabel: "Deep-Tech & Innovation (2017–2022)",
    badge: "Green Sanctuary",
    title: "100 kW Solar Power Plant & Smart Eco-Campus",
    subtitle: "Sustainable Energy Independence & NAAC Preparation",
    description: "Commissioning a 100 kW rooftop grid-tied solar photovoltaic array, transforming Jyothi into a green eco-sanctuary with rainwater harvesting, zero-discharge wastewater recycling, and automated energy monitoring systems.",
    highlights: [
      "100 kW solar array offsetting 120+ tonnes of CO2 annually",
      "Over 30+ acres certified for biodiversity and green coverage",
      "Automated RFID central computerized library with 42,000+ volumes",
      "25+ fleet smart GPS-tracked college buses covering 3 districts"
    ],
    stat: "100 kW",
    statLabel: "Clean Solar Energy",
    icon: Sun,
    color: "from-green-600 to-emerald-800"
  },
  {
    year: "2020",
    era: "innovation",
    eraLabel: "Deep-Tech & Innovation (2017–2022)",
    badge: "Future Tech",
    title: "Pioneering AI & Data Science and Robotics Programs",
    subtitle: "New-Age Undergraduate Degrees for Industry 4.0",
    description: "Responding proactively to the Fourth Industrial Revolution, Jyothi launched B.Tech in Artificial Intelligence & Data Science (AI & DS) alongside B.Tech in Robotics & Automation (R&A) with dedicated NVIDIA accelerated computing labs and robotic arm workcells.",
    highlights: [
      "B.Tech in Artificial Intelligence & Data Science launched",
      "B.Tech in Robotics & Automation with industrial robot workcells",
      "Bosch Rexroth Automation & Mechatronics Training Center",
      "NVIDIA DGX GPU workstations for deep learning model training"
    ],
    stat: "Industry 4.0",
    statLabel: "Next-Gen Curricula",
    icon: Lightbulb,
    color: "from-rose-600 to-pink-800"
  },
  {
    year: "2021",
    era: "innovation",
    eraLabel: "Deep-Tech & Innovation (2017–2022)",
    badge: "Excellence Grade",
    title: "NAAC 'A' Grade Accreditation Conferred",
    subtitle: "National Recognition for Holistic Institutional Quality",
    description: "Following a rigorous multi-day inspection by peer teams from the National Assessment and Accreditation Council (NAAC), Jyothi was awarded the coveted 'A' Grade, celebrating its teaching excellence, research productivity, and student welfare ecosystem.",
    highlights: [
      "Awarded prestigious 'A' Grade by NAAC",
      "350+ published peer-reviewed research papers and book chapters",
      "Over 40+ patent applications filed with Indian Patent Office",
      "100% smart classroom adoption across all academic blocks"
    ],
    stat: "NAAC 'A'",
    statLabel: "National Quality Stamp",
    icon: ShieldCheck,
    color: "from-purple-700 to-indigo-900"
  },
  {
    year: "2023",
    era: "autonomy",
    eraLabel: "UGC Autonomy & Future (2023–2027+)",
    badge: "Historic Milestone",
    title: "Conferral of UGC & KTU Autonomous Status",
    subtitle: "Academic Freedom to Redefine Engineering Education",
    description: "In an epochal achievement, the University Grants Commission (UGC) and APJ Abdul Kalam Technological University officially granted Autonomous Status to Jyothi Engineering College. This empowered Jyothi to design annual modern curricula, introduce industry minors, and control examination schedules.",
    highlights: [
      "10-Year Autonomous Status conferred by UGC & KTU",
      "Freedom to update syllabi every year with industry leaders",
      "Specialized minors in Generative AI, Cloud Systems, and EVs",
      "Autonomous examination control board for punctual degree completion"
    ],
    stat: "Autonomous",
    statLabel: "UGC Approved",
    icon: Sparkles,
    color: "from-amber-500 to-yellow-600"
  },
  {
    year: "2024–2025",
    era: "autonomy",
    eraLabel: "UGC Autonomy & Future (2023–2027+)",
    badge: "Placement Glory",
    title: "Record 462+ Offers & ₹24 LPA Peak CTC",
    subtitle: "Over ₹3 Crores Institutional Scholarships Disbursed",
    description: "Experiencing an unprecedented placement cycle with 462+ job offers from tech titans including TCS, Infosys, Bosch, Cognizant, and Tata Elxsi. Meanwhile, Jyothi disbursed over ₹3 Crores in scholarships, ensuring no deserving student was held back by financial constraints.",
    highlights: [
      "462+ job offers recorded in the 2024-25 placement season",
      "Highest CTC offered: ₹24 LPA; average package scaled to ₹5.2 LPA",
      "₹3.0 Cr+ awarded in Management and Merit Scholarships",
      "18+ student startups functioning from campus TBI incubator"
    ],
    stat: "₹24 LPA",
    statLabel: "Highest CTC",
    icon: Trophy,
    color: "from-emerald-600 to-green-800"
  },
  {
    year: "2026–2027+",
    era: "autonomy",
    eraLabel: "UGC Autonomy & Future (2023–2027+)",
    badge: "Silver Jubilee",
    title: "25-Year Silver Jubilee & Vision 2030",
    subtitle: "Centers of Excellence in Generative AI & Micro-Mobility",
    description: "Marking 25 glorious years of engineering leadership, Jyothi is launching high-impact Centers of Excellence in Generative Artificial Intelligence, Autonomous Robotics, and Carbon-Neutral Micro-Mobility, scaling international university linkages and dual-degree programs.",
    highlights: [
      "Silver Jubilee Celebration (2002–2027) with global alumni summits",
      "Advanced Center of Excellence in Generative AI & Quantum Systems",
      "Target of 50+ student patents and 30+ venture-backed spinouts",
      "Global exchange partnerships with premier overseas technical universities"
    ],
    stat: "25 Years",
    statLabel: "Silver Jubilee Era",
    icon: Star,
    color: "from-purple-800 to-jyothi-purple-950"
  }
];

const LEADERSHIP = [
  {
    name: "Mar Andrews Thazhath",
    role: "Archbishop of Trichur",
    title: "Patron & Spiritual Guide",
    desc: "Provides moral guidance, community vision, and archdiocesan patronage, ensuring Jyothi remains steadfast in empowering students from all socioeconomic strata through ethical, value-based education.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    quote: "Our mission is to form technocrats whose intellectual prowess is anchored firmly in integrity, social responsibility, and selfless service."
  },
  {
    name: "Rev. Fr. Thomas Kakkassery",
    role: "Executive Director",
    title: "Institutional Steward",
    desc: "Oversees strategic capital development, autonomous academic policies, faculty excellence, and campus infrastructure expansion across the 30+ acre Cheruthuruthy sanctuary.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote: "Autonomy has granted us the wings to innovate fearlessly. We are shaping a culture where every classroom idea has a direct path to our FabLab and global markets."
  },
  {
    name: "Dr. Jose P. Therattil",
    role: "Principal",
    title: "Academic & Research Head",
    desc: "Renowned academician and researcher guiding curriculum modernization, NBA/NAAC compliance, doctoral research programs, and global corporate talent partnerships.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quote: "With autonomous KTU governance, our students do not wait for obsolete textbook updates. They write modern code, design real hardware, and lead Industry 4.0."
  }
];

interface Props {
  subSection?: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const AboutPage: React.FC<Props> = ({ subSection, onNavigate, onOpenApply, onOpenTour }) => {
  const [selectedEra, setSelectedEra] = useState<'all' | 'foundation' | 'expansion' | 'innovation' | 'autonomy'>('all');
  const [expandedYear, setExpandedYear] = useState<string | null>("2023");
  const [activePillarTab, setActivePillarTab] = useState<'vision' | 'mission' | 'values' | 'autonomy'>('autonomy');

  // Auto-scroll to target section on subSection navigation (e.g. #about/vision, #about/leadership)
  useEffect(() => {
    if (subSection) {
      if (['vision', 'mission', 'values'].includes(subSection)) {
        setActivePillarTab(subSection as any);
      }
      const timer = setTimeout(() => {
        const targetId = subSection === 'overview' ? 'overview' : subSection;
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [subSection]);

  // Scroll reveal triggers
  const [statsRef, statsInView] = useScrollReveal(0.08);
  const [timelineRef, timelineInView] = useScrollReveal(0.06);
  const [pillarsRef, pillarsInView] = useScrollReveal(0.08);
  const [leadershipRef, leadershipInView] = useScrollReveal(0.08);
  const [infraRef, infraInView] = useScrollReveal(0.08);

  const filteredMilestones = selectedEra === 'all' 
    ? MILESTONES 
    : MILESTONES.filter(m => m.era === selectedEra);

  return (
    <div className="space-y-16 sm:space-y-20 md:space-y-28 overflow-x-hidden bg-white text-slate-800 selection:bg-jyothi-purple-900 selection:text-jyothi-gold-300">
      
      {/* ============================================================== */}
      {/* 1. LUXURY EDITORIAL HERO: 25-YEAR INSTITUTIONAL PROFILE */}
      {/* ============================================================== */}
      <section id="overview" className="relative w-full overflow-hidden bg-[#FAF7F0] border-b border-slate-200/80 pt-6 pb-12 sm:pb-16 md:pb-20 scroll-mt-24">
        
        {/* Subtle Architectural Blueprint Arc Lines Background */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] pointer-events-none opacity-20 z-0">
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
            <circle cx="450" cy="50" r="180" stroke="#C9902C" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="450" cy="50" r="320" stroke="#C9902C" strokeWidth="0.8" />
            <circle cx="450" cy="50" r="420" stroke="#C9902C" strokeWidth="0.6" strokeDasharray="4 8" />
            <line x1="450" y1="50" x2="50" y2="450" stroke="#C9902C" strokeWidth="0.8" />
            <circle cx="450" cy="50" r="6" fill="#C9902C" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Navigation Anchor Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-200/70 mb-8 sm:mb-10 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-jyothi-purple-900 cursor-pointer hover:underline" onClick={() => onNavigate('home')}>Home</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#250836] font-bold">About Jyothi</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-[#250836]">
              <a href="#vision" className="font-medium hover:text-[#A87627] transition-colors">
                Vision &amp; Values
              </a>
              <span className="text-amber-300/90 select-none">|</span>
              <a href="#roadmap" className="font-medium hover:text-[#A87627] transition-colors">
                25-Year Roadmap
              </a>
              <span className="text-amber-300/90 select-none">|</span>
              <a href="#autonomy" className="font-medium hover:text-[#A87627] transition-colors">
                Autonomous KTU
              </a>
              <span className="text-amber-300/90 select-none">|</span>
              <a href="#leadership" className="font-medium hover:text-[#A87627] transition-colors">
                Leadership
              </a>
              <span className="text-amber-300/90 select-none">|</span>
              <a href="#campus" className="font-medium hover:text-[#A87627] transition-colors">
                30-Acre Campus
              </a>
              <span className="text-amber-300/90 select-none">|</span>
              <a href="#accreditations" className="font-medium hover:text-[#A87627] transition-colors">
                Accreditations
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Silver Jubilee Pill Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FBF2DC] border border-[#DFC06A] text-[#5C3A14] text-xs font-semibold shadow-2xs">
                  <span>Celebrating 25 Years of Excellence (2002–2027)</span>
                </div>
              </div>

              {/* Majestic Headline with Playfair Serif */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-[#250836] leading-[1.08]">
                  <span className="font-['Playfair_Display',serif] block">
                    Engineering Human Values,
                  </span>
                  <span className="font-['Playfair_Display',serif] italic font-bold text-[#A87627] block">
                    Shaping Global Technocrats.
                  </span>
                </h1>
                <div className="flex items-center gap-3 pt-1">
                  <span className="w-8 h-[2.5px] bg-[#C9902C] rounded-full shrink-0" />
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.22em] text-[#250836] uppercase">
                    CATHOLIC ARCHDIOCESE OF TRICHUR • ESTD 2002
                  </span>
                </div>
              </div>

              {/* Deep Editorial Overview */}
              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                Founded in <strong>2002</strong> under the visionary patronage of the <strong>Catholic Archdiocese of Trichur</strong>, Jyothi Engineering College (Autonomous) stands as a monument to transformative higher technical education in Kerala. Nestled amidst <strong>30+ scenic acres</strong> on the peaceful Jyothi Hills of Cheruthuruthy, the institution bridges cutting-edge engineering acumen with deep ethical values.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                In 2023, Jyothi achieved historic <strong>UGC &amp; APJ KTU Autonomous Status</strong>. Autonomy grants Jyothi&apos;s engineering students an unbeatable edge: agile annual curricula, industry-aligned learning, and an on-campus FabLab ecosystem.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#29073D] via-[#3B1159] to-[#250638] text-white font-semibold text-xs sm:text-sm shadow-md border border-[#D4A346] flex items-center gap-2 hover:brightness-115 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Apply for Admissions</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <button
                  onClick={onOpenTour}
                  className="px-6 py-3 rounded-full bg-[#FFFDFA] hover:bg-white text-[#250836] font-semibold text-xs sm:text-sm border border-[#D8C5A0] shadow-xs flex items-center gap-2 transition-all duration-300"
                >
                  <span>360° Virtual Campus Tour</span>
                </button>
              </div>

            </div>

            {/* Right Architectural Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#240637] group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/jyothi_campus_hero.jpg"
                    alt="Jyothi Engineering College Autonomous Main Building & Colonnade"
                    className="w-full h-full object-cover object-[50%_35%] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Overlaid Institutional Accreditations Floating Bar */}
                <div className="p-5 bg-gradient-to-br from-[#2C0844] via-[#250639] to-[#1A032A] text-white space-y-3.5">
                  <div className="flex items-center justify-between text-xs pb-1">
                    <span className="font-bold text-[#FDE68A] uppercase tracking-wider text-[11px]">Autonomous Accord</span>
                    <span className="text-white/90 font-medium">UGC &amp; APJ KTU</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                    <div className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/15">
                      <div className="font-bold text-[#FDE68A] text-sm">NAAC A</div>
                    </div>
                    <div className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/15">
                      <div className="font-bold text-[#FDE68A] text-sm">NBA</div>
                    </div>
                    <div className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/15">
                      <div className="font-bold text-[#FDE68A] text-sm">AICTE</div>
                    </div>
                  </div>

                  <div className="pt-0.5 text-[11px] text-[#DFC06A] font-medium">
                    <span className="truncate block">Jyothi Hills, Cheruthuruthy, Thrissur, Kerala</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SIX ANIMATED INSTITUTIONAL STATS (COUNTER REVEAL) */}
      {/* ============================================================== */}
      <section ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#210532] via-[#2D0944] to-[#180222] text-white border border-[#D4A346]/40 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
            
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FDE68A] font-brand">
                {statsInView ? <AnimatedCounter end={25} suffix="+" duration={1800} /> : '25+'}
              </div>
              <div className="text-xs text-slate-200 font-medium mt-1">Years of Legacy</div>
              <div className="text-[10px] text-amber-300/80">Since 2002</div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FDE68A] font-brand">
                {statsInView ? <AnimatedCounter end={30} suffix="+" duration={1800} /> : '30+'}
              </div>
              <div className="text-xs text-slate-200 font-medium mt-1">Acres Eco-Campus</div>
              <div className="text-[10px] text-amber-300/80">Lush Green Sanctuary</div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FDE68A] font-brand">
                {statsInView ? <AnimatedCounter end={3} prefix="₹" suffix=" Cr+" duration={1800} /> : '₹3 Cr+'}
              </div>
              <div className="text-xs text-slate-200 font-medium mt-1">Scholarships Disbursed</div>
              <div className="text-[10px] text-amber-300/80">Merit & Archdiocesan</div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FDE68A] font-brand">
                {statsInView ? <AnimatedCounter end={462} suffix="+" duration={1800} /> : '462+'}
              </div>
              <div className="text-xs text-slate-200 font-medium mt-1">Job Offers (24-25)</div>
              <div className="text-[10px] text-amber-300/80">Peak CTC ₹24 LPA</div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FDE68A] font-brand">
                {statsInView ? <AnimatedCounter end={18} suffix="+" duration={1800} /> : '18+'}
              </div>
              <div className="text-xs text-slate-200 font-medium mt-1">Startups Incubated</div>
              <div className="text-[10px] text-amber-300/80">Via MIT FabLab & TBI</div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FDE68A] font-brand">
                {statsInView ? <AnimatedCounter end={42} suffix="+" duration={1800} /> : '42+'}
              </div>
              <div className="text-xs text-slate-200 font-medium mt-1">Patents Filed</div>
              <div className="text-[10px] text-amber-300/80">Faculty & Students</div>
            </div>

          </div>
        </div>
        </RevealBlock>
      </section>

      {/* ============================================================== */}
      {/* 3. INTERACTIVE 25-YEAR ROADMAP & MILESTONES (2002 TO 2027+) */}
      {/* ============================================================== */}
      <section id="roadmap" ref={timelineRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>The Historic 25-Year Chronology (2002–2027)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            From Holy Foundations to UGC Autonomous Stature
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Trace the transformative quarter-century journey of Jyothi Engineering College. Click on any milestone node to explore archival achievements, pivotal turning points, and institutional breakthroughs.
          </p>
        </div>

        {/* Era Filter Navigation Tabs */}
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar lg:overflow-visible items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-1.5 bg-[#FAF7F0] rounded-2xl border border-amber-200/80 w-full lg:w-fit max-w-full mx-auto shadow-2xs">
          {[
            { id: 'all', label: 'All 25 Years' },
            { id: 'foundation', label: '2002–08: Genesis' },
            { id: 'expansion', label: '2009–16: NBA & PG' },
            { id: 'innovation', label: '2017–22: MIT FabLab & AI' },
            { id: 'autonomy', label: '2023–27+: Autonomy & Future' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedEra(tab.id as any)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                selectedEra === tab.id
                  ? 'bg-[#250836] text-[#FDE68A] shadow-md'
                  : 'text-slate-700 hover:text-[#250836] hover:bg-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visual Roadmap Timeline Container */}
        <div className="relative pt-6 pb-4">
          
          {/* Central Vertical Golden Spire on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#DFC06A] via-[#C9902C] to-[#250836] -translate-x-1/2 rounded-full pointer-events-none opacity-40 shadow-sm" />

          {/* Mobile Left Golden Spire */}
          <div className="lg:hidden absolute left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-[#DFC06A] via-[#C9902C] to-[#250836] rounded-full pointer-events-none opacity-40" />

          <div className="space-y-8 sm:space-y-12">
            {filteredMilestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedYear === m.year;
              const Icon = m.icon;

              return (
                <div 
                  key={m.year}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Pulsing Center Marker */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <button
                      onClick={() => setExpandedYear(isExpanded ? null : m.year)}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        isExpanded 
                          ? 'bg-[#250836] text-[#FDE68A] scale-115 ring-4 ring-[#DFC06A]/40' 
                          : 'bg-gradient-to-br from-[#DFC06A] to-[#B88029] text-[#250836] hover:scale-110'
                      }`}
                      title={`Click to view ${m.year} highlights`}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Milestone Card */}
                  <div className="w-full lg:w-[calc(50%-44px)] pl-16 lg:pl-0">
                    <RevealBlock direction={isEven ? 'right' : 'left'} delay={0}>
                    <div 
                      onClick={() => setExpandedYear(isExpanded ? null : m.year)}
                      className={`p-5 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer text-left ${
                        isExpanded
                          ? 'bg-gradient-to-br from-white via-[#FFFDF8] to-[#FAF5EB] border-[#D4A346] shadow-xl ring-1 ring-[#D4A346]/50'
                          : 'bg-white hover:bg-[#FFFDFA] border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-300'
                      }`}
                    >
                      
                      {/* Year Badge & Category Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#250836] text-[#FDE68A] font-extrabold text-xs sm:text-sm font-brand tracking-wide shadow-2xs">
                            {m.year}
                          </span>
                          <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                            {m.badge}
                          </span>
                        </div>
                        {m.stat && (
                          <div className="text-right">
                            <span className="text-sm font-black text-[#250836]">{m.stat}</span>
                            <span className="text-[10px] text-slate-500 block leading-tight">{m.statLabel}</span>
                          </div>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div className="pt-3 space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif] text-[#250836] group-hover:text-amber-800 transition-colors">
                          {m.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#A87627]">
                          {m.subtitle}
                        </p>
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed pt-2">
                        {m.description}
                      </p>

                      {/* Expanded Archival Highlights */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-amber-200/60 space-y-3 animate-fadeIn">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#250836] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                            <span>Pivotal Achievements & Evidence</span>
                          </div>
                          <ul className="space-y-2">
                            {m.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Click to Toggle Indicator */}
                      <div className="pt-3 flex items-center justify-between text-[11px] font-semibold text-amber-800">
                        <span>{isExpanded ? "Collapse Record" : "View Full Record & Highlights"}</span>
                        <ChevronDown className={`w-4 h-4 text-amber-700 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>

                    </div>
                    </RevealBlock>
                  </div>

                  {/* Empty Spacer Column for Desktop alternating layout */}
                  <div className="hidden lg:block w-[calc(50%-44px)]" />

                </div>
              );
            })}
          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 4. VISION, MISSION & CORE INSTITUTIONAL VALUES (ID: vision) */}
      {/* ============================================================== */}
      <section id="vision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Guiding Principles & Moral Anchor</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Vision, Mission & Institutional Values
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Rooted in the Catholic Archdiocesan educational philosophy, Jyothi equips aspiring engineers to lead with intellectual mastery, profound compassion, and unwavering ethical courage.
          </p>
        </div>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <RevealBlock direction="left" delay={0} className="h-full">
          <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white via-[#FFFDF8] to-[#FAF5EB] border-2 border-amber-300/80 shadow-md hover:shadow-xl transition-all space-y-4 text-left relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#250836] to-[#3C1361] text-[#FDE68A] flex items-center justify-center font-bold shadow-md">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-extrabold tracking-widest text-[#B5802B] uppercase">Institutional North Star</span>
              <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                Our Vision
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic font-serif">
              "Creating technology leaders who foster groundbreaking innovation, maintain the highest standards of professional ethics, and dedicate their intellectual potential towards sustainable national and global progress."
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Technology Grounded in Human Values</span>
            </div>
          </div>
          </RevealBlock>

          {/* Mission Card */}
          <RevealBlock direction="right" delay={150} className="h-full">
          <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white via-[#FBF8FF] to-[#F5EEFB] border-2 border-purple-200 shadow-md hover:shadow-xl transition-all space-y-4 text-left relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center font-bold shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-extrabold tracking-widest text-jyothi-purple-900 uppercase">Educational Mandate</span>
              <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                Our Mission
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>Deliver rigorous technical education through agile autonomous curricula benchmarked with international industry standards.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>Stimulate multidisciplinary research, student entrepreneurship, and intellectual property creation via the MIT FabLab & TBI.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>Nurture high ethical standards, social sensitivity, and environmental stewardship among emerging technocrats.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>Cultivate global professional competitiveness anchored in selfless service to humanity.</span>
              </li>
            </ul>
          </div>
          </RevealBlock>

        </div>

        {/* 5 Core Institutional Values */}
        <div className="pt-4 space-y-4 text-left">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">The Five Pillars of Character</span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#250836] mt-1">
              Core Institutional Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
            {[
              {
                title: "Faith & Moral Truth",
                desc: "Spiritual discernment, unyielding integrity, and moral fortitude guiding every engineering decision.",
                icon: HeartHandshake,
                color: "text-amber-800 bg-amber-50 border-amber-200"
              },
              {
                title: "Academic Rigor",
                desc: "Continuous autonomous learning, Washington Accord standards, and deep technical competencies.",
                icon: BookOpen,
                color: "text-purple-900 bg-purple-50 border-purple-200"
              },
              {
                title: "Creative Innovation",
                desc: "Hands-on prototype mastery in the MIT FabLab, filing patents, and solving societal challenges.",
                icon: Lightbulb,
                color: "text-blue-900 bg-blue-50 border-blue-200"
              },
              {
                title: "Social Justice",
                desc: "Equitable empowerment through ₹3 Cr+ scholarships, NSS community service, and accessible education.",
                icon: Users,
                color: "text-emerald-900 bg-emerald-50 border-emerald-200"
              },
              {
                title: "Eco Stewardship",
                desc: "100 kW solar energy, rainwater harvesting, zero-discharge campus, and green technology commitment.",
                icon: Sun,
                color: "text-teal-900 bg-teal-50 border-teal-200"
              }
            ].map((val, idx) => {
              const VIcon = val.icon;
              return (
                <RevealBlock
                  key={idx}
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                  delay={(idx % 5) * 150}
                  className="h-full"
                >
                <div className="h-full p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold border ${val.color}`}>
                    <VIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#250836] font-brand">{val.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* 5. THE AUTONOMOUS ADVANTAGE BREAKTHROUGH (EDUCATIONAL FREEDOM) */}
      {/* ============================================================== */}
      <section id="autonomy" ref={pillarsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-jyothi-purple-900 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-jyothi-purple-800" />
            <span>The UGC & KTU Autonomous Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Why Autonomy gives Jyothi Students an Unbeatable Edge
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            In conventional engineering colleges, curricula take 4–6 years to update. At Jyothi Autonomous, we update our courses annually in consultation with Fortune 500 tech giants.
          </p>
        </div>

        {/* 4 Feature Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <RevealBlock direction="left" delay={0} className="h-full">
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all space-y-3 text-left group">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-base font-brand text-[#250836]">
              Annual Industry Co-Design
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curricula are updated every single academic year directly with TCS, Bosch, and Infosys advisory boards to incorporate Generative AI, Cloud DevOps, and Electric Mobility.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>Zero outdated textbooks</span>
            </div>
          </div>
          </RevealBlock>

          <RevealBlock direction="right" delay={150} className="h-full">
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all space-y-3 text-left group">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-900 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-jyothi-purple-900" />
            </div>
            <h3 className="font-bold text-base font-brand text-[#250836]">
              Honors & Minor Degrees
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every student can earn dual credentials: a core B.Tech degree plus a specialized Minor in Robotics, Cyber Forensics, or Artificial Intelligence without extra years.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>Multidisciplinary mastery</span>
            </div>
          </div>
          </RevealBlock>

          <RevealBlock direction="left" delay={300} className="h-full">
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all space-y-3 text-left group">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-blue-800" />
            </div>
            <h3 className="font-bold text-base font-brand text-[#250836]">
              Autonomous Exam Controller
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our autonomous examination control board guarantees punctual examination timetables, transparent digital revaluations, and on-time graduation records with zero strike delays.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>Punctual degree conferral</span>
            </div>
          </div>
          </RevealBlock>

          <RevealBlock direction="right" delay={450} className="h-full">
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all space-y-3 text-left group">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Microscope className="w-5 h-5 text-emerald-800" />
            </div>
            <h3 className="font-bold text-base font-brand text-[#250836]">
              Mandatory FabLab Credits
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Academic credits awarded for real hardware prototypes built in the MIT FabLab, student-filed patents, and revenue-generating startups incubated in the campus TBI.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>Hands-on prototype grades</span>
            </div>
          </div>
          </RevealBlock>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 6. PATRONAGE & INSPIRING LEADERSHIP (ARCHDIOCESAN LEGACY) */}
      {/* ============================================================== */}
      <section id="leadership" ref={leadershipRef} className="bg-[#FAF7F0] py-16 sm:py-20 border-y border-amber-200/70 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-white px-3.5 py-1.5 rounded-full border border-amber-300 shadow-2xs">
              Visionary Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
              Archdiocesan Trust & Academic Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Guided by the Catholic Archdiocese of Trichur, Jyothi blends moral rectitude and social justice with world-class engineering discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <RevealBlock
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 150}
                className="h-full"
              >
              <div 
                className="h-full rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="h-72 sm:h-80 w-full overflow-hidden bg-slate-100 relative">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#250836]/90 via-transparent to-transparent flex items-end p-5">
                      <div className="text-white">
                        <div className="text-[11px] font-bold text-[#FDE68A] uppercase tracking-wider">{leader.title}</div>
                        <h3 className="text-lg font-bold font-['Playfair_Display',serif]">{leader.name}</h3>
                        <div className="text-xs text-white/80">{leader.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs italic text-[#704812]">
                    "{leader.quote}"
                  </div>
                </div>

              </div>
              </RevealBlock>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. 30+ ACRE HILLTOP CAMPUS INFRASTRUCTURE (BENTO GRID) */}
      {/* ============================================================== */}
      <section id="campus" ref={infraRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold tracking-wide">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Campus Infrastructure & Sanctuary</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            30+ Acres of Scenic Green Hilltop Sanctuary
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Located in Cheruthuruthy along the banks of the Bharathapuzha, Jyothi provides an inspiring physical environment equipped with state-of-the-art academic and residential amenities.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Central Automated RFID Library */}
          <RevealBlock direction="left" delay={0} className="md:col-span-2 h-full">
          <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5 text-amber-700" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                Computerized Central RFID Library
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Housing over 42,000+ volumes, 120+ national and international print journals, 24/7 digital IEEE Xplore, ScienceDirect access, and automated RFID self-checkout kiosks across a 3-tier reading pavilion.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] font-semibold bg-white border border-amber-200 px-3 py-1 rounded-full text-slate-700">42,000+ Volumes</span>
              <span className="text-[11px] font-semibold bg-white border border-amber-200 px-3 py-1 rounded-full text-slate-700">IEEE Digital Access</span>
              <span className="text-[11px] font-semibold bg-white border border-amber-200 px-3 py-1 rounded-full text-slate-700">RFID Self-Issue</span>
            </div>
          </div>
          </RevealBlock>

          {/* Card 2: MIT FabLab Hardware Incubator */}
          <RevealBlock direction="right" delay={150} className="h-full">
          <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-white to-purple-50/50 border border-purple-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
              <Microscope className="w-5 h-5 text-jyothi-purple-900" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                MIT-Model FabLab & TBI
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipped with laser cutters, 3D printers, PCB routing machines, and CNC mills for rapid deep-tech prototyping.
              </p>
            </div>
            <div className="text-[11px] font-bold text-jyothi-purple-900">
              ₹1.2 Cr+ Seed Funding Access
            </div>
          </div>
          </RevealBlock>

          {/* Card 3: 25+ Fleet Bus Routes */}
          <RevealBlock direction="left" delay={300} className="h-full">
          <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Bus className="w-5 h-5 text-blue-800" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                25+ Fleet Bus Network
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Smart GPS-enabled fleet connecting Cheruthuruthy across Thrissur, Palakkad, Malappuram, and Shoranur.
              </p>
            </div>
            <div className="text-[11px] font-bold text-blue-800">
              Safe & Punctual Daily Commute
            </div>
          </div>
          </RevealBlock>

          {/* Card 4: 100 kW Solar Power Array */}
          <RevealBlock direction="right" delay={0} className="h-full">
          <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
              <Sun className="w-5 h-5 text-emerald-800" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                100 kW Solar Clean Power
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rooftop grid-tied solar panels powering laboratories, hostels, and academic halls with clean green energy.
              </p>
            </div>
            <div className="text-[11px] font-bold text-emerald-800">
              120+ Tonnes CO2 Offset Annually
            </div>
          </div>
          </RevealBlock>

          {/* Card 5: Separate Modern Hostels & Dining */}
          <RevealBlock direction="left" delay={150} className="md:col-span-2 h-full">
          <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5 text-amber-700" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                Separate Men & Women Smart Hostels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                On-campus residential complexes featuring round-the-clock biometric security, Wi-Fi connectivity, hygienic steam-cooked multi-cuisine dining, study lounges, gym, and outdoor sports courts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] font-semibold bg-white border border-amber-200 px-3 py-1 rounded-full text-slate-700">24/7 Security & Wardens</span>
              <span className="text-[11px] font-semibold bg-white border border-amber-200 px-3 py-1 rounded-full text-slate-700">Hygienic Mess</span>
              <span className="text-[11px] font-semibold bg-white border border-amber-200 px-3 py-1 rounded-full text-slate-700">Gymnasium & Sports</span>
            </div>
          </div>
          </RevealBlock>

          {/* Card 6: Sports Pavilion & Amphitheater */}
          <RevealBlock direction="right" delay={300} className="h-full">
          <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-white to-purple-50/50 border border-purple-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5 text-jyothi-purple-900" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                Sports Pavilion & Amphitheatre
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard football turf, basketball, badminton courts, and open-air cultural arena for college events.
              </p>
            </div>
            <div className="text-[11px] font-bold text-jyothi-purple-900">
              State Inter-Collegiate Champions
            </div>
          </div>
          </RevealBlock>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 8. NATIONAL ACCREDITATIONS & RECOGNITIONS (ID: accreditations) */}
      {/* ============================================================== */}
      <section id="accreditations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>National Standards of Quality</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Recognized & Accredited by Apex National Bodies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every academic degree conferred at Jyothi adheres strictly to rigorous Washington Accord benchmarks, verified by supreme regulatory and accreditation councils.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: "UGC Autonomous", desc: "10-Year Academic Autonomy", badge: "2023 Conferred", icon: ShieldCheck, color: "text-purple-900 bg-purple-50 border-purple-200" },
            { title: "NAAC 'A' Grade", desc: "Top Institutional Quality Rating", badge: "Grade A", icon: Award, color: "text-amber-800 bg-amber-50 border-amber-200" },
            { title: "NBA Accredited", desc: "CSE, ECE, EEE & Mech B.Tech", badge: "Tier-II Washington", icon: GraduationCap, color: "text-blue-900 bg-blue-50 border-blue-200" },
            { title: "APJ KTU Affiliated", desc: "State Technological University", badge: "Charter Member", icon: Compass, color: "text-emerald-900 bg-emerald-50 border-emerald-200" },
            { title: "AICTE Approved", desc: "Ministry of Education, GoI", badge: "Since 2002", icon: Building2, color: "text-rose-900 bg-rose-50 border-rose-200" },
            { title: "ISO 9001:2015", desc: "Certified Educational Processes", badge: "Certified", icon: CheckCircle2, color: "text-teal-900 bg-teal-50 border-teal-200" },
          ].map((acc, idx) => {
            const AIcon = acc.icon;
            return (
              <RevealBlock
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={(idx % 6) * 150}
                className="h-full"
              >
              <div className="h-full p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-center space-y-2 group">
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center font-bold border ${acc.color} group-hover:scale-110 transition-transform`}>
                  <AIcon className="w-5 h-5" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#250836] font-brand">{acc.title}</div>
                <div className="text-[10px] text-slate-500 leading-tight">{acc.desc}</div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#250836] text-[#FDE68A]">
                  {acc.badge}
                </span>
              </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. ADMISSIONS & 360° TOUR CTA BANNER */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
        <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-r from-[#210532] via-[#2E0946] to-[#170221] text-white border-2 border-[#D4A346] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          
          {/* Subtle Background Emblem Watermark */}
          <div className="absolute right-[-20px] bottom-[-20px] w-72 h-72 opacity-10 pointer-events-none">
            <img src="/assets/jyothi_emblem.svg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-amber-300/30 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              <span>Admissions 2025–26 Open</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-['Playfair_Display',serif] text-white leading-tight">
              Begin Your Autonomous Engineering Journey at Jyothi
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              Experience modern curricula, world-class MIT FabLab prototyping, and high-impact placement training. Apply online under Merit or Management Quota, or schedule a campus visit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] text-[#250836] font-extrabold text-xs sm:text-sm shadow-lg hover:brightness-110 hover:scale-102 transition-all duration-300 text-center"
            >
              Apply for Admissions 2025
            </button>
            <button
              onClick={onOpenTour}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-xs flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>360° Virtual Tour</span>
            </button>
          </div>

        </div>
        </RevealBlock>
      </section>

    </div>
  );
};
