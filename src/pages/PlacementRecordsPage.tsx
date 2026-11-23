import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ChevronRight,
  TrendingUp,
  Award,
  GraduationCap,
  Building2,
  Download,
  Users,
  Search,
  Filter,
  Sparkles,
  Phone,
  Mail,
  FileText,
  BarChart3,
  DollarSign,
  Laptop,
  Layers,
  Landmark,
  Check,
} from 'lucide-react';
import { PLACEMENT_STATS } from '../data/collegeData';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface DepartmentStat {
  dept: string;
  code: string;
  category: 'Computing & AI' | 'Circuit & Electronics' | 'Core Engineering';
  placed: string;
  placedNum: number;
  offers: number;
  highest: string;
  highestNum: number;
  avg: string;
  avgNum: number;
  topRecruiters: string[];
}

const DEPARTMENT_BREAKDOWN: DepartmentStat[] = [
  {
    dept: 'Computer Science & Engineering',
    code: 'CSE',
    category: 'Computing & AI',
    placed: '98.2%',
    placedNum: 98.2,
    offers: 172,
    highest: '₹24.0 LPA',
    highestNum: 24.0,
    avg: '₹6.2 LPA',
    avgNum: 6.2,
    topRecruiters: ['Amazon AWS', 'TCS Digital', 'Infosys', 'Cognizant'],
  },
  {
    dept: 'Artificial Intelligence & Data Science',
    code: 'AI & DS',
    category: 'Computing & AI',
    placed: '96.5%',
    placedNum: 96.5,
    offers: 64,
    highest: '₹21.0 LPA',
    highestNum: 21.0,
    avg: '₹5.9 LPA',
    avgNum: 5.9,
    topRecruiters: ['SOTI Inc.', 'Experion', 'UST Global', 'Cognizant'],
  },
  {
    dept: 'Electronics & Communication Engineering',
    code: 'ECE',
    category: 'Circuit & Electronics',
    placed: '89.4%',
    placedNum: 89.4,
    offers: 96,
    highest: '₹14.2 LPA',
    highestNum: 14.2,
    avg: '₹5.1 LPA',
    avgNum: 5.1,
    topRecruiters: ['Bosch Global', 'Federal Bank', 'TCS', 'IBS Software'],
  },
  {
    dept: 'Electrical & Electronics Engineering',
    code: 'EEE',
    category: 'Circuit & Electronics',
    placed: '85.7%',
    placedNum: 85.7,
    offers: 51,
    highest: '₹10.0 LPA',
    highestNum: 10.0,
    avg: '₹4.8 LPA',
    avgNum: 4.8,
    topRecruiters: ['Bosch', 'LTTS', 'MRF Tyres', 'Infosys'],
  },
  {
    dept: 'Mechatronics & Robotics Engineering',
    code: 'MR',
    category: 'Core Engineering',
    placed: '87.5%',
    placedNum: 87.5,
    offers: 31,
    highest: '₹12.0 LPA',
    highestNum: 12.0,
    avg: '₹5.0 LPA',
    avgNum: 5.0,
    topRecruiters: ['Bosch Global', 'Quest Global', 'Tata Advanced', 'LTTS'],
  },
  {
    dept: 'Mechanical Engineering',
    code: 'ME',
    category: 'Core Engineering',
    placed: '83.3%',
    placedNum: 83.3,
    offers: 54,
    highest: '₹9.5 LPA',
    highestNum: 9.5,
    avg: '₹4.6 LPA',
    avgNum: 4.6,
    topRecruiters: ['L&T Tech Services', 'Quest Global', 'MRF', 'TCS Ninja'],
  },
  {
    dept: 'Civil Engineering',
    code: 'CE',
    category: 'Core Engineering',
    placed: '79.1%',
    placedNum: 79.1,
    offers: 35,
    highest: '₹7.2 LPA',
    highestNum: 7.2,
    avg: '₹4.2 LPA',
    avgNum: 4.2,
    topRecruiters: ['Sobha Developers', 'L&T Construction', 'Tata Projects', 'Cognizant'],
  },
];

const SALARY_TIERS = [
  {
    tier: 'Super Dream Offers',
    range: '> ₹10 LPA to ₹24 LPA',
    badge: 'Super Dream',
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-300',
    count: '48 Offers',
    percentage: '10.4%',
    companies: ['Amazon AWS', 'SOTI Inc.', 'Bosch Global', 'Federal Bank', 'IBM Systems'],
    roles: ['Cloud Support Associate', 'Embedded Firmware Trainee', 'FinTech Cyber Defense', 'AI Mobility Engineer'],
    desc: 'Elite global technology product leaders, core R&D roles, and high-frequency fintech architecture.',
  },
  {
    tier: 'Dream Tier Offers',
    range: '₹6.5 LPA to ₹10 LPA',
    badge: 'Dream Tier',
    badgeColor: 'bg-purple-50 text-[#28052B] border-purple-200',
    count: '142 Offers',
    percentage: '30.7%',
    companies: ['TCS Digital', 'Infosys DSE', 'Cognizant GenC Elevate', 'Experion', 'IBS Software'],
    roles: ['Digital Specialist Engineer', 'Full Stack Product Engineer', 'Aviation Tech Developer'],
    desc: 'Specialized digital engineering, cloud platform consulting, and enterprise product engineering profiles.',
  },
  {
    tier: 'Premier & Core Engineering',
    range: '₹4.0 LPA to ₹6.5 LPA',
    badge: 'Core / IT Tier',
    badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-300',
    count: '272 Offers',
    percentage: '58.9%',
    companies: ['TCS Ninja', 'Wipro Turbo', 'L&T Technology Services', 'Quest Global', 'UST Global'],
    roles: ['Graduate Engineer Trainee', 'Systems Associate', 'Aerospace CAD Trainee', 'Cloud Ops Engineer'],
    desc: 'High-volume engineering delivery, embedded software systems, and core automotive/infrastructure projects.',
  },
];

interface SectorItem {
  id: string;
  sector: string;
  share: number;
  offers: number;
  color: string;
  hex: string;
  delay: number;
  duration: number;
}

const SECTOR_DISTRIBUTION: SectorItem[] = [
  {
    id: 'it-cloud',
    sector: 'IT Services & Cloud Computing',
    share: 42,
    offers: 194,
    color: 'bg-[#28052B]',
    hex: '#28052B',
    delay: 150,
    duration: 750,
  },
  {
    id: 'product-saas',
    sector: 'Product Engineering & Enterprise SaaS',
    share: 26,
    offers: 120,
    color: 'bg-[#BD8E36]',
    hex: '#BD8E36',
    delay: 750,
    duration: 650,
  },
  {
    id: 'core-hardware',
    sector: 'Core Automotive, Embedded & Hardware',
    share: 18,
    offers: 83,
    color: 'bg-teal-700',
    hex: '#0F766E',
    delay: 1300,
    duration: 550,
  },
  {
    id: 'fintech-infra',
    sector: 'Banking, FinTech & Heavy Infrastructure',
    share: 14,
    offers: 65,
    color: 'bg-purple-800',
    hex: '#6B21A8',
    delay: 1750,
    duration: 500,
  },
];

const SectorDistributionCard: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs space-y-4 sm:space-y-5 transition-all"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-base sm:text-lg font-bold font-['Playfair_Display',serif] text-[#28052B]">
            Recruitment Industry Sector Share
          </h3>
          <p className="text-xs text-[#4A384F]/70 mt-0.5">
            Diversified placement distribution across corporate domains (2024–25 batch)
          </p>
        </div>
        <div className="text-xs font-bold text-[#BD8E36] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#E7D6C1] self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#BD8E36] animate-pulse" />
          <span>
            {isInView ? <AnimatedCounter end={462} suffix=" Total Placements" duration={1600} /> : '462 Total Placements'}
          </span>
        </div>
      </div>

      {/* Multi-segment stacked visual bar with Color-Wise Loading Animation */}
      <div className="space-y-2">
        <div className="relative w-full h-3.5 sm:h-4 rounded-full overflow-hidden flex bg-slate-100 p-0 border border-[#E7D6C1]/50 shadow-inner">
          {SECTOR_DISTRIBUTION.map((sec, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            return (
              <div
                key={sec.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`h-full ${sec.color} relative cursor-pointer shrink-0 transition-all ${
                  isHovered ? 'brightness-115 scale-y-110 z-10' : isAnyHovered ? 'opacity-60' : 'opacity-100'
                }`}
                style={{
                  width: isInView ? `${sec.share}%` : '0%',
                  transitionProperty: 'width, transform, opacity, filter',
                  transitionDuration: `${sec.duration}ms, 200ms, 200ms, 200ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1), ease, ease, ease',
                  transitionDelay: isInView ? `${sec.delay}ms, 0ms, 0ms, 0ms` : '0ms',
                }}
                title={`${sec.sector}: ${sec.share}% (${sec.offers} offers)`}
              >
                {/* Thin dividing border between colors */}
                {idx > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-white/30 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* Hover Details Pip / Active Tooltip */}
        <div className="min-h-[20px] text-[11px] font-semibold text-[#28052B] flex items-center gap-2 transition-all">
          {hoveredIdx !== null ? (
            <div className="flex items-center gap-1.5 animate-fadeIn">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                style={{ backgroundColor: SECTOR_DISTRIBUTION[hoveredIdx].hex }}
              />
              <span className="font-bold text-[#28052B]">{SECTOR_DISTRIBUTION[hoveredIdx].sector}:</span>
              <strong className="text-[#BD8E36]">{SECTOR_DISTRIBUTION[hoveredIdx].share}%</strong>
              <span className="text-[#4A384F]/70">({SECTOR_DISTRIBUTION[hoveredIdx].offers} offers verified)</span>
            </div>
          ) : (
            <span className="text-[10.5px] text-[#4A384F]/50 italic">
              Hover over color segments or categories to inspect breakdown
            </span>
          )}
        </div>
      </div>

      {/* Legend with matching color-wise entrance animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs pt-1">
        {SECTOR_DISTRIBUTION.map((sec, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={sec.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`flex items-center gap-2 p-1.5 rounded-xl transition-all cursor-pointer ${
                isHovered ? 'bg-[#FAF7F2] -translate-y-0.5 shadow-2xs' : 'hover:bg-[#FAF7F2]/60'
              }`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(8px)',
                transition: `all 500ms cubic-bezier(0.16, 1, 0.3, 1) ${sec.delay + 120}ms`,
              }}
            >
              <span
                className={`w-3 h-3 rounded-full shrink-0 ${sec.color} transition-transform ${
                  isHovered ? 'scale-125 ring-2 ring-[#DFC06A]' : ''
                }`}
              />
              <span className="text-[11px] text-[#4A384F] leading-tight">
                <strong className="text-[#28052B] font-bold">
                  {isInView ? (
                    <AnimatedCounter end={sec.share} suffix="%" duration={sec.duration + 200} />
                  ) : (
                    `${sec.share}%`
                  )}
                </strong>{' '}
                <span className={isHovered ? 'text-[#28052B] font-semibold' : ''}>
                  {sec.sector}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const STUDENT_SPOTLIGHTS = [
  {
    name: 'Anjali Menon',
    dept: 'B.Tech Computer Science & Engineering',
    company: 'Amazon AWS',
    package: '₹24.0 LPA',
    role: 'Cloud Support Associate',
    batch: 'Batch of 2025',
    avatar: '/assets/student_anjali.jpg',
    quote:
      'The algorithmic bootcamps, continuous mock technical rounds, and AWS Academy training at Jyothi prepared me to clear rigorous interview loops effortlessly.',
    badge: 'Super Dream Offer',
  },
  {
    name: 'Rahul K. Varma',
    dept: 'B.Tech Electronics & Communication',
    company: 'Bosch Global Software',
    package: '₹14.2 LPA',
    role: 'Embedded Systems Trainee',
    batch: 'Batch of 2025',
    avatar: '/assets/student_rahul.jpg',
    quote:
      'Hands-on practice at Jyothi’s Texas Instruments Lab and VLSI simulation suites gave me the exact practical edge Bosch sought in their core engineering drive.',
    badge: 'Core Super Dream',
  },
  {
    name: 'Gautham S. Pillai',
    dept: 'B.Tech AI & Data Science',
    company: 'SOTI Inc.',
    package: '₹11.0 LPA',
    role: 'Software Developer - Mobility',
    batch: 'Batch of 2025',
    avatar: '/assets/student_gautham.jpg',
    quote:
      'The autonomous curriculum gave us freedom to build end-to-end full stack ML prototypes on the GPU cluster, which became the center of discussion during my interview.',
    badge: 'Dream Product Offer',
  },
  {
    name: 'Meera Joseph',
    dept: 'B.Tech Electrical & Electronics',
    company: 'Federal Bank Ltd.',
    package: '₹12.5 LPA',
    role: 'Probationary IT Officer',
    batch: 'Batch of 2025',
    avatar: '/assets/student_meera.jpg',
    quote:
      'The finishing school personality sessions, technical GD workshops, and FinTech domain seminars conducted by PAT Cell made the selection process smooth.',
    badge: 'FinTech Super Dream',
  },
];

export const PlacementRecordsPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [selectedDeptCategory, setSelectedDeptCategory] = useState<string>('All');
  const [tableYearFilter, setTableYearFilter] = useState<string>('All');
  const [activeViewMode, setActiveViewMode] = useState<'table' | 'trends'>('table');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Filtered department list
  const filteredDepartments = useMemo(() => {
    if (selectedDeptCategory === 'All') return DEPARTMENT_BREAKDOWN;
    return DEPARTMENT_BREAKDOWN.filter((d) => d.category === selectedDeptCategory);
  }, [selectedDeptCategory]);

  // Filtered yearly table stats
  const filteredPlacementStats = useMemo(() => {
    if (tableYearFilter === 'All') return PLACEMENT_STATS;
    return PLACEMENT_STATS.filter((s) => s.year === tableYearFilter);
  }, [tableYearFilter]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A] scroll-smooth">
      {/* 1. Sub Navigation Bar matching royal ivory & plum theme */}
      <PlacementsSubNav activeRoute="placement-records" onNavigate={onNavigate} />

      {/* 2. Main Hero Section (High-End Royal Bento Theme) */}
      {/* 2. Main Hero Section (Pixel-perfect match to the design) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <RevealBlock direction="left">
              <div className="space-y-4 sm:space-y-5">
                {/* Flanked Eyebrow */}
                <div className="flex items-center gap-3">
                  <div className="w-8 sm:w-12 h-[1px] bg-[#C59B4E]" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#28052B]">
                    CAMPUS PLACEMENT RECORDS
                  </span>
                  <div className="w-8 sm:w-12 h-[1px] bg-[#C59B4E]" />
                </div>

                {/* Serif Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.14]">
                  Campus Placement Records &amp;
                  <span className="block italic text-[#BD8E36] font-normal mt-1 sm:mt-1.5 font-['Playfair_Display',serif]">
                    Salary Trajectory
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-xl">
                  Explore branch-wise placement, salary milestones and outcomes across 94+ global technology recruiters.
                </p>

                {/* Action Pill Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => scrollToSection('department-breakdown')}
                    className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <span>View Branch Breakdown</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onNavigate('upcoming-drives')}
                    className="px-6 py-2.5 rounded-full bg-transparent hover:bg-[#28052B]/5 text-[#28052B] font-semibold text-xs sm:text-sm border border-[#28052B] transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Check Upcoming Drives</span>
                  </button>
                </div>
              </div>
            </RevealBlock>
          </div>

          {/* Right Column: High-End Framed Photo of Students around Laptop */}
          <div className="lg:col-span-5 relative">
            <RevealBlock direction="right" delay={150}>
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border-[1.5px] border-[#DFC06A] shadow-md group bg-white">
                <img
                  src="/assets/placement_hero_students.jpg"
                  alt="Jyothi engineering students celebrating placement offers"
                  className="w-full h-auto object-cover rounded-[28px] sm:rounded-[32px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </RevealBlock>
          </div>
        </div>

        {/* 3. Placement Overview Horizontal Card (Pixel-perfect match to the design strip) */}
        <RevealBlock direction="up" delay={200}>
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-[#FAF4EB]/80 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-[#E7D6C1] shadow-2xs">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-0 md:divide-x md:divide-[#E7D6C1] items-center">
              {/* Col 1: Placement Overview Label */}
              <div className="col-span-2 md:col-span-1 pb-3 md:pb-0 border-b md:border-b-0 border-[#E7D6C1]/60 pr-0 md:pr-4">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#28052B]/75 block">
                  PLACEMENT OVERVIEW
                </span>
                <div className="text-base sm:text-lg font-['Playfair_Display',serif] italic text-[#BD8E36] font-semibold mt-0.5">
                  Academic Year 2024–2025
                </div>
              </div>

              {/* Col 2: Highest CTC */}
              <div className="px-2 sm:px-3 md:px-5 py-2 md:py-0 border-r md:border-r-0 border-[#E7D6C1]/60">
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight">
                  ₹24.0 LPA
                </div>
                <div className="text-xs text-[#4A384F] font-normal mt-0.5">
                  Highest CTC · Amazon AWS
                </div>
              </div>

              {/* Col 3: Total Offers */}
              <div className="px-2 sm:px-3 md:px-5 py-2 md:py-0">
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight">
                  462+
                </div>
                <div className="text-xs text-[#4A384F] font-normal mt-0.5">
                  Total Campus Offers
                </div>
              </div>

              {/* Col 4: Average Package */}
              <div className="px-2 sm:px-3 md:px-5 pt-3 md:pt-0 border-t md:border-t-0 border-r md:border-r-0 border-[#E7D6C1]/60">
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight">
                  ₹5.4 LPA
                </div>
                <div className="text-xs text-[#4A384F] font-normal mt-0.5">
                  Average Batch Package
                </div>
              </div>

              {/* Col 5: Peak Rate */}
              <div className="px-2 sm:px-3 md:px-5 pt-3 md:pt-0 border-t md:border-t-0 border-[#E7D6C1]/60">
                <div className="text-2xl sm:text-3xl font-black text-[#28052B] tracking-tight">
                  98.2%
                </div>
                <div className="text-xs text-[#4A384F] font-normal mt-0.5">
                  Peak Department Placement
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* 4. Placement dimensions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 space-y-4 sm:space-y-5">
        {/* Section Heading with Hairline Gold Rule */}
        <RevealBlock direction="up">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B] whitespace-nowrap">
              Placement dimensions
            </h2>
            <div className="h-[1px] bg-[#E7D6C1] flex-1" />
          </div>
        </RevealBlock>

        {/* 3 Interactive Quick-Jump Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Card 1: Four-year trajectory */}
          <RevealBlock direction="up" delay={50} className="h-full">
            <button
              onClick={() => scrollToSection('yearly-trajectory')}
              className="w-full h-full p-4 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#C59B4E] transition-all text-left flex items-center justify-between group shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#F8EBEB] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#28052B]" />
                </div>
                <div className="w-[1px] h-7 bg-[#E7D6C1] shrink-0" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-[#28052B] block">
                    Four-year trajectory
                  </span>
                  <span className="text-[11px] text-[#4A384F]/70 font-medium">
                    2021–2025
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
            </button>
          </RevealBlock>

          {/* Card 2: Branch performance */}
          <RevealBlock direction="up" delay={120} className="h-full">
            <button
              onClick={() => scrollToSection('department-breakdown')}
              className="w-full h-full p-4 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#C59B4E] transition-all text-left flex items-center justify-between group shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#F8EBEB] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#28052B]" />
                </div>
                <div className="w-[1px] h-7 bg-[#E7D6C1] shrink-0" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-[#28052B] block">
                    Branch performance
                  </span>
                  <span className="text-[11px] text-[#4A384F]/70 font-medium">
                    7 B.Tech engineering disciplines
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
            </button>
          </RevealBlock>

          {/* Card 3: Compensation tiers */}
          <RevealBlock direction="up" delay={190} className="h-full">
            <button
              onClick={() => scrollToSection('salary-tiers')}
              className="w-full h-full p-4 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#C59B4E] transition-all text-left flex items-center justify-between group shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#F8EBEB] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#28052B]" />
                </div>
                <div className="w-[1px] h-7 bg-[#E7D6C1] shrink-0" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-[#28052B] block">
                    Compensation tiers
                  </span>
                  <span className="text-[11px] text-[#4A384F]/70 font-medium">
                    Super Dream, Dream &amp; Core
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
            </button>
          </RevealBlock>
        </div>
      </section>

      {/* 4. Verified Four-Year Historical Records Section */}
      <section id="yearly-trajectory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
        <RevealBlock direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD8E36]">
                  Institutional Data Archive
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
                Four-Year Campus Placement Trajectory
              </h2>
              <p className="text-xs sm:text-sm text-[#4A384F]/80">
                Verified year-on-year growth showing surge in total offers, corporate visits, and average packages.
              </p>
            </div>

            {/* Table / Trends Switcher + Year Filter */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-white p-1 rounded-xl border border-[#E7D6C1] flex items-center shadow-2xs text-xs">
                <button
                  onClick={() => setActiveViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeViewMode === 'table'
                      ? 'bg-[#28052B] text-white shadow-xs'
                      : 'text-[#28052B] hover:text-[#BD8E36]'
                  }`}
                >
                  Table View
                </button>
                <button
                  onClick={() => setActiveViewMode('trends')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeViewMode === 'trends'
                      ? 'bg-[#28052B] text-white shadow-xs'
                      : 'text-[#28052B] hover:text-[#BD8E36]'
                  }`}
                >
                  Growth Matrix
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-xl border border-[#E7D6C1]">
                <Calendar className="w-3.5 h-3.5 text-[#BD8E36]" />
                <select
                  value={tableYearFilter}
                  onChange={(e) => setTableYearFilter(e.target.value)}
                  className="bg-transparent font-semibold text-[#28052B] focus:outline-none cursor-pointer"
                  aria-label="Filter placement records by batch year"
                >
                  <option value="All">All Batches (2021–25)</option>
                  {PLACEMENT_STATS.map((s) => (
                    <option key={s.year} value={s.year}>
                      Batch {s.year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </RevealBlock>

        {/* View Mode 1: Table */}
        {activeViewMode === 'table' ? (
          <RevealBlock direction="up" delay={100}>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-3xl border border-[#E7D6C1] overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#28052B] text-white text-[11px] font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4 pl-6">Recruitment Batch</th>
                    <th className="p-4">Total Offers</th>
                    <th className="p-4">Highest Package</th>
                    <th className="p-4">Average Package</th>
                    <th className="p-4">Participating MNCs</th>
                    <th className="p-4 pr-6 text-right">Placement Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FAF7F2]">
                  {filteredPlacementStats.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors group">
                      <td className="p-4 pl-6 font-bold text-[#28052B] flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#BD8E36] group-hover:scale-125 transition-transform" />
                        <span className="font-['Playfair_Display',serif] text-base">Batch {row.year}</span>
                      </td>
                      <td className="p-4 font-semibold text-emerald-800">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200">
                          {row.offers} Offers
                        </span>
                      </td>
                      <td className="p-4 font-bold text-[#28052B] text-sm sm:text-base">
                        {row.highestPackage}
                      </td>
                      <td className="p-4 font-medium text-[#4A384F]">
                        {row.averagePackage}
                      </td>
                      <td className="p-4 text-[#4A384F]">
                        <span className="font-semibold text-[#28052B]">{row.participatingCompanies}</span> Companies
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200 inline-flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>{row.placementPercentage} Placed</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3.5">
              {filteredPlacementStats.map((row, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-[#E7D6C1] shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold font-['Playfair_Display',serif] text-base text-[#28052B]">
                      Batch {row.year}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                      {row.placementPercentage}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7D6C1]/60">
                      <span className="text-[#4A384F]/60 block text-[10px] uppercase font-bold">Total Offers</span>
                      <span className="font-black text-emerald-800 text-sm sm:text-base">{row.offers} Offers</span>
                    </div>
                    <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7D6C1]/60">
                      <span className="text-[#4A384F]/60 block text-[10px] uppercase font-bold">Highest Package</span>
                      <span className="font-black text-[#28052B] text-sm sm:text-base">{row.highestPackage}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#4A384F] pt-1 border-t border-[#FAF7F2]">
                    <span>Average Package: <strong className="text-[#28052B]">{row.averagePackage}</strong></span>
                    <span>Recruiters: <strong className="text-[#28052B]">{row.participatingCompanies} Visited</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </RevealBlock>
        ) : (
          /* View Mode 2: Four-Year Visual Growth Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLACEMENT_STATS.map((s, idx) => {
              const isLatest = idx === 0;
              return (
                <RevealBlock
                  key={s.year}
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                  delay={(idx % 4) * 100}
                  className="h-full"
                >
                  <div
                    className={`h-full p-6 rounded-3xl border transition-all space-y-4 flex flex-col justify-between ${
                      isLatest
                        ? 'bg-white border-[#C59B4E] ring-2 ring-[#C59B4E]/20 shadow-md'
                        : 'bg-white border-[#E7D6C1] shadow-2xs hover:border-[#BD8E36]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1]">
                          Batch {s.year}
                        </span>
                        {isLatest && (
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Current Season
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-black text-[#28052B]">
                          {s.offers}
                        </div>
                        <div className="text-xs font-semibold text-[#4A384F]">
                          Offers Issued Across Branches
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#FAF7F2] text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#4A384F]/70">Highest CTC:</span>
                        <strong className="text-emerald-800">{s.highestPackage}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#4A384F]/70">Average CTC:</span>
                        <strong className="text-[#28052B]">{s.averagePackage}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#4A384F]/70">Placement Rate:</span>
                        <strong className="text-[#BD8E36]">{s.placementPercentage}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#4A384F]/70">Visiting MNCs:</span>
                        <strong className="text-[#28052B]">{s.participatingCompanies}</strong>
                      </div>
                    </div>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Department-Wise Placement Rigor Breakdown */}
      <section id="department-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
        <RevealBlock direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD8E36]">
                  Academic Disciplines
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
                Branch-Wise Placement Performance (2024–25)
              </h2>
              <p className="text-xs sm:text-sm text-[#4A384F]/80">
                Disciplinary placement rates, highest salary achievements, and key recruiters per engineering branch.
              </p>
            </div>

            {/* Department Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Computing & AI', 'Circuit & Electronics', 'Core Engineering'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedDeptCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedDeptCategory === cat
                      ? 'bg-[#28052B] text-[#DFC06A] shadow-2xs font-bold'
                      : 'bg-white text-[#28052B] border border-[#E7D6C1] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* Detailed Department Performance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredDepartments.map((dept, idx) => (
            <RevealBlock
              key={`${selectedDeptCategory}-${dept.code}`}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div className="h-full p-5 sm:p-6 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#C59B4E] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  {/* Header: Branch code badge + placement rate pill */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1]">
                      {dept.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {dept.placed} Placed
                    </span>
                  </div>

                  {/* Department Name */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-['Playfair_Display',serif] text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                      {dept.dept}
                    </h3>
                    <div className="text-xs text-[#4A384F]/70 font-medium mt-0.5">
                      {dept.offers} Total Offers Issued
                    </div>
                  </div>

                  {/* Progress bar visual for placement % */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-[#4A384F]">
                      <span>Placement Ratio</span>
                      <span className="text-[#28052B]">{dept.placed}</span>
                    </div>
                    <div className="w-full h-2 bg-[#FAF7F2] rounded-full overflow-hidden border border-[#E7D6C1]/50">
                      <div
                        className="h-full bg-gradient-to-r from-[#BD8E36] to-[#E5B656] rounded-full"
                        style={{ width: `${dept.placedNum}%` }}
                      />
                    </div>
                  </div>

                  {/* 2-Metric Bento inside card */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7D6C1]/60">
                      <span className="text-[10px] uppercase font-bold text-[#4A384F]/60 block">Highest CTC</span>
                      <strong className="text-emerald-800 text-sm">{dept.highest}</strong>
                    </div>
                    <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7D6C1]/60">
                      <span className="text-[10px] uppercase font-bold text-[#4A384F]/60 block">Average CTC</span>
                      <strong className="text-[#28052B] text-sm">{dept.avg}</strong>
                    </div>
                  </div>
                </div>

                {/* Bottom: Top Recruiters */}
                <div className="pt-3 border-t border-[#FAF7F2] space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A384F]/60 block">
                    Top Recruiters:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {dept.topRecruiters.map((r, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1]/70"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 6. Compensation Tiers & Salary Distribution */}
      <section id="salary-tiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
        <RevealBlock direction="up">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD8E36]">
                Package Categorization
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
              Compensation Tiers &amp; Role Categories
            </h2>
            <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-2xl">
              Our placement opportunities span structured salary bands catering to core researchers, digital specialists, and full-stack software engineers.
            </p>
          </div>
        </RevealBlock>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SALARY_TIERS.map((tier, idx) => (
            <RevealBlock key={idx} direction="up" delay={idx * 120}>
              <div className="h-full p-6 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#C59B4E] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${tier.badgeColor}`}>
                      {tier.badge}
                    </span>
                    <span className="text-xs font-bold text-[#28052B] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#E7D6C1]">
                      {tier.count} ({tier.percentage})
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#28052B]">
                      {tier.tier}
                    </h3>
                    <div className="text-base font-black text-[#BD8E36] mt-0.5 font-sans">
                      {tier.range}
                    </div>
                  </div>

                  <p className="text-xs text-[#4A384F]/80 leading-relaxed">
                    {tier.desc}
                  </p>

                  {/* Key Roles */}
                  <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/60 space-y-1.5 text-xs">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#4A384F]/70 block">
                      Representative Profiles:
                    </span>
                    <div className="text-[11px] text-[#28052B] font-medium leading-relaxed">
                      {tier.roles.join(' • ')}
                    </div>
                  </div>
                </div>

                {/* Featured Recruiters */}
                <div className="pt-3 border-t border-[#FAF7F2]">
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#4A384F]/60 mb-2">
                    Featured Recruiters:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.companies.map((c, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>

        {/* Sector Distribution Strip with Color-Wise Loading Animation */}
        <RevealBlock direction="up" delay={150}>
          <SectorDistributionCard />
        </RevealBlock>
      </section>

      {/* 7. Student Hall of Fame • Star Achievers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
        <RevealBlock direction="up">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD8E36]">
                Student Testimonials &amp; Achievers
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
              Hall of Fame • Flagship Achievers
            </h2>
            <p className="text-xs sm:text-sm text-[#4A384F]/80">
              Meet a few of our exceptional graduates who secured flagship placements at leading multinational conglomerates.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STUDENT_SPOTLIGHTS.map((s, idx) => (
            <RevealBlock key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={(idx % 4) * 80} className="h-full">
              <div className="h-full p-4 sm:p-5 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#BD8E36] shadow-xs hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between space-y-4 group relative overflow-hidden">
                {/* Subtle top gold accent glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DFC06A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="space-y-3.5">
                  {/* Student Portrait Banner with Optimal Proportional Fit & Zero Cutoff (Matching Reference) */}
                  <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden border-[1.5px] border-[#DFC06A]/80 shadow-xs bg-[#28052B]/5">
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Tier Badge with Glassmorphism */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#28052B]/90 text-[#DFC06A] border border-[#DFC06A]/50 backdrop-blur-md shadow-md">
                      {s.badge}
                    </div>
                  </div>

                  {/* Student Name & Dept */}
                  <div className="pt-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-bold text-base sm:text-lg text-[#28052B] leading-tight font-['Playfair_Display',serif] group-hover:text-[#BD8E36] transition-colors truncate">
                          {s.name}
                        </h3>
                        <p className="text-xs text-[#4A384F]/85 mt-0.5 leading-snug font-medium line-clamp-1">
                          {s.dept}
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#BD8E36] border border-[#E7D6C1] shrink-0">
                        {s.batch}
                      </span>
                    </div>
                  </div>

                  {/* Offer detail box */}
                  <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/80 group-hover:border-[#DFC06A]/50 transition-colors flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-[9px] text-[#4A384F]/60 font-bold uppercase tracking-wider">Hired By</div>
                      <div className="text-xs sm:text-sm font-bold text-[#28052B] truncate">{s.company}</div>
                      <div className="text-[10.5px] text-[#4A384F]/80 truncate">{s.role}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[9px] text-[#4A384F]/60 font-bold uppercase tracking-wider">Annual CTC</div>
                      <div className="text-sm sm:text-base font-black text-emerald-800 tracking-tight">{s.package}</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-[#4A384F] italic leading-relaxed line-clamp-3">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                </div>

                {/* Verified badge */}
                <div className="pt-3 border-t border-[#FAF7F2] flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-emerald-800 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified On-Campus Offer</span>
                  </span>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 8. Placement Cell Control Desk & Brochure Download (Aubergine Bento Matching Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <RevealBlock direction="up">
          <div className="relative">
            {/* Subtle Decorative Curved Gold Corner Brackets */}
            <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

            <div className="rounded-3xl bg-[#28052B] text-white p-7 sm:p-10 border border-[#3E1043] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#390F3B] text-[#DFC06A] border border-[#DFC06A]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                  <span>Placement Advisory &amp; Recruiter Desk</span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                  Download Official Placement Brochure 2025–26
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  Get full audited departmental stats, laboratory infrastructure specifications, curriculum blueprints, and recruiter guidelines in the official Jyothi Autonomous Campus Placement Brochure.
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
                    href="mailto:placements@jecc.ac.in"
                    className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#DFC06A]" />
                    <span>placements@jecc.ac.in / pat@jecc.ac.in</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Placement Brochure (PDF)</span>
                </button>

                <button
                  onClick={() => onNavigate('corporate-recruiters')}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-[#DFC06A]" />
                  <span>Explore 94+ Recruiters Directory</span>
                </button>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* 9. Interactive Download Brochure Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full border border-[#E7D6C1] shadow-2xl p-6 sm:p-7 space-y-4 relative">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1]">
                Official Publication
              </span>
              <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
                Campus Placement Brochure
              </h3>
              <p className="text-xs text-[#4A384F]">
                Academic Year 2024–25 Consolidated Edition (PDF, 4.2 MB)
              </p>
            </div>

            <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] text-xs space-y-2">
              <div className="font-semibold text-[#28052B]">Brochure includes:</div>
              <ul className="list-disc list-inside space-y-1 text-[#4A384F]/80 text-[11px]">
                <li>Audited department-wise placement lists</li>
                <li>Recruiter invitation procedure &amp; campus facilities</li>
                <li>MIT FabLab &amp; TATA IIIC technological capabilities</li>
                <li>Student placement cell coordinator roster</li>
              </ul>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <button
                onClick={() => {
                  alert('Jyothi Engineering College Placement Brochure (2024-25) download started.');
                  setDownloadModalOpen(false);
                }}
                className="flex-1 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF File</span>
              </button>
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="px-4 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-slate-100 text-[#4A384F] font-semibold text-xs border border-slate-200 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacementRecordsPage;
