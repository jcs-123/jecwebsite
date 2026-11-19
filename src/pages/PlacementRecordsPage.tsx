import React, { useState, useMemo } from 'react';
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

const SECTOR_DISTRIBUTION = [
  { sector: 'IT Services & Cloud Computing', share: '42%', offers: 194, color: 'bg-[#28052B]' },
  { sector: 'Product Engineering & Enterprise SaaS', share: '26%', offers: 120, color: 'bg-[#BD8E36]' },
  { sector: 'Core Automotive, Embedded & Hardware', share: '18%', offers: 83, color: 'bg-teal-700' },
  { sector: 'Banking, FinTech & Heavy Infrastructure', share: '14%', offers: 65, color: 'bg-purple-800' },
];

const STUDENT_SPOTLIGHTS = [
  {
    name: 'Anjali Menon',
    dept: 'B.Tech Computer Science & Engineering',
    company: 'Amazon AWS',
    package: '₹24.0 LPA',
    role: 'Cloud Support Associate',
    batch: 'Batch of 2025',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=350&auto=format&fit=crop',
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
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=350&auto=format&fit=crop',
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
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=350&auto=format&fit=crop',
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
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=350&auto=format&fit=crop',
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
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A]">
      {/* 1. Sub Navigation Bar matching royal ivory & plum theme */}
      <PlacementsSubNav activeRoute="placement-records" onNavigate={onNavigate} />

      {/* 2. Main Hero Section (High-End Royal Bento Theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Flanked Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-12 h-[1px] bg-[#C59B4E]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#28052B]">
                CAMPUS PLACEMENT RECORDS &amp; STATS
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-[#C59B4E]" />
            </div>

            {/* Serif Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.14]">
              Campus Placement Records &amp;
              <span className="block italic text-[#BD8E36] font-normal mt-1 sm:mt-1.5">
                Salary Trajectory
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#4A384F] font-normal leading-relaxed max-w-xl">
              Audited campus placement statistics, branch-wise recruitment ratios, highest CTC milestones, and multi-year trajectory across 94+ global technology recruiters.
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

          {/* Right Column: Deep Plum Bento Card with Decorative Gold Corner Brackets */}
          <div className="lg:col-span-5 relative">
            {/* Top-Left Decorative Curved Gold Corner Bracket */}
            <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
            {/* Bottom-Right Decorative Curved Gold Corner Bracket */}
            <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

            {/* Deep Plum Card */}
            <div className="rounded-3xl bg-[#28052B] text-white p-6 sm:p-7 border border-[#3E1043] shadow-xl relative overflow-hidden">
              {/* Header inside bento */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-[#431A45]">
                {/* Trophy/Award icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#390F3B] border border-[#DFC06A]/30 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#DFC06A]" />
                </div>

                {/* Vertical Divider Line */}
                <div className="w-[1px] h-8 bg-[#DFC06A]/40 shrink-0" />

                {/* Placement Season Text */}
                <div>
                  <div className="text-xs text-white/90 font-medium tracking-wide">Audited placement season</div>
                  <div className="text-base sm:text-lg font-['Playfair_Display',serif] italic text-[#DFC06A] font-semibold">
                    Academic Year 2024 – 2025
                  </div>
                </div>
              </div>

              {/* 2x2 Divided Metric Grid */}
              <div className="grid grid-cols-2 pt-4">
                {/* Metric 1: Highest CTC */}
                <div className="p-3.5 pr-4 border-r border-b border-[#431A45]">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">₹24.0 LPA</div>
                  <div className="text-xs text-white/75 font-normal mt-0.5 leading-snug">
                    Highest CTC • Amazon AWS
                  </div>
                </div>

                {/* Metric 2: Total Offers */}
                <div className="p-3.5 pl-4 border-b border-[#431A45]">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">462+</div>
                  <div className="text-xs text-white/75 font-normal mt-0.5 leading-snug">
                    Total Campus Offers
                  </div>
                </div>

                {/* Metric 3: Average CTC */}
                <div className="p-3.5 pr-4 pt-4 border-r border-[#431A45]">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">₹5.4 LPA</div>
                  <div className="text-xs text-white/75 font-normal mt-0.5 leading-snug">
                    Average Batch Package
                  </div>
                </div>

                {/* Metric 4: Peak Rate */}
                <div className="p-3.5 pl-4 pt-4">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">98.2%</div>
                  <div className="text-xs text-white/75 font-normal mt-0.5 leading-snug">
                    Peak Department Placement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Explore placement dimensions" Strip (Matching format cards of Upcoming Drives) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-4 sm:space-y-5">
        {/* Section Heading with Hairline Gold Rule */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B] whitespace-nowrap">
            Placement dimensions
          </h2>
          <div className="h-[1px] bg-[#E7D6C1] flex-1" />
        </div>

        {/* 3 Interactive Quick-Jump Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Card 1: Year-on-year trajectory */}
          <button
            onClick={() => scrollToSection('yearly-trajectory')}
            className="p-4 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#C59B4E] transition-all text-left flex items-center justify-between group shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#F8EBEB] flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-[#28052B]" />
              </div>
              <div className="w-[1px] h-7 bg-[#E7D6C1] shrink-0" />
              <div>
                <span className="font-bold text-sm sm:text-base text-[#28052B] block">
                  Four-year trajectory
                </span>
                <span className="text-[11px] text-[#4A384F]/70 font-medium">
                  2021 – 2025 audited series
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card 2: Branch-wise breakdown */}
          <button
            onClick={() => scrollToSection('department-breakdown')}
            className="p-4 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#C59B4E] transition-all text-left flex items-center justify-between group shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#F8EBEB] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#28052B]" />
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

          {/* Card 3: Salary tiers */}
          <button
            onClick={() => scrollToSection('salary-tiers')}
            className="p-4 rounded-2xl bg-white border border-[#E7D6C1] hover:border-[#C59B4E] transition-all text-left flex items-center justify-between group shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#F8EBEB] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#28052B]" />
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
        </div>
      </section>

      {/* 4. Verified Four-Year Historical Records Section */}
      <section id="yearly-trajectory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
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

        {/* View Mode 1: Table */}
        {activeViewMode === 'table' ? (
          <>
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
          </>
        ) : (
          /* View Mode 2: Four-Year Visual Growth Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLACEMENT_STATS.map((s, idx) => {
              const isLatest = idx === 0;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all space-y-4 flex flex-col justify-between ${
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
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Department-Wise Placement Rigor Breakdown */}
      <section id="department-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
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

        {/* Detailed Department Performance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredDepartments.map((dept, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#C59B4E] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
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
          ))}
        </div>
      </section>

      {/* 6. Compensation Tiers & Salary Distribution */}
      <section id="salary-tiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
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

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SALARY_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#C59B4E] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
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
          ))}
        </div>

        {/* Sector Distribution Strip */}
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold font-['Playfair_Display',serif] text-[#28052B]">
                Recruitment Industry Sector Share
              </h3>
              <p className="text-xs text-[#4A384F]/70">
                Diversified placement distribution across corporate domains (2024–25 batch)
              </p>
            </div>
            <span className="text-xs font-bold text-[#BD8E36]">462 Total Placements</span>
          </div>

          {/* Multi-segment stacked visual bar */}
          <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-100">
            {SECTOR_DISTRIBUTION.map((sec, idx) => (
              <div
                key={idx}
                className={`${sec.color} h-full`}
                style={{ width: sec.share }}
                title={`${sec.sector}: ${sec.share} (${sec.offers} offers)`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs pt-1">
            {SECTOR_DISTRIBUTION.map((sec, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full shrink-0 ${sec.color}`} />
                <span className="text-[11px] text-[#4A384F]">
                  <strong className="text-[#28052B]">{sec.share}</strong> {sec.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Student Hall of Fame • Star Achievers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STUDENT_SPOTLIGHTS.map((s, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#C59B4E] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Avatar and basic info */}
                <div className="flex items-center gap-3">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-13 h-13 rounded-2xl object-cover border-2 border-[#DFC06A] shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-[#28052B] leading-tight">{s.name}</h3>
                    <p className="text-[11px] text-[#4A384F]/70 mt-0.5 leading-tight">{s.dept}</p>
                    <span className="text-[10px] text-[#BD8E36] font-bold">{s.batch}</span>
                  </div>
                </div>

                {/* Offer detail box */}
                <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/70 flex items-center justify-between">
                  <div>
                    <div className="text-[9.5px] text-[#4A384F]/60 font-bold uppercase tracking-wider">Hired By</div>
                    <div className="text-xs font-bold text-[#28052B]">{s.company}</div>
                    <div className="text-[10.5px] text-[#4A384F]/80 truncate max-w-[130px]">{s.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9.5px] text-[#4A384F]/60 font-bold uppercase tracking-wider">Annual CTC</div>
                    <div className="text-sm sm:text-base font-black text-emerald-800">{s.package}</div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-[#4A384F] italic leading-relaxed pt-1">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>

              {/* Verified badge */}
              <div className="pt-2 border-t border-[#FAF7F2] flex items-center justify-between text-[11px]">
                <span className="text-emerald-800 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified On-Campus Offer</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Placement Cell Control Desk & Brochure Download (Aubergine Bento Matching Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
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
