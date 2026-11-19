import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  Users,
  Layers,
  FileCheck2,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Briefcase,
  Cpu,
  Search,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface PartnershipMoU {
  partner: string;
  category: 'Cloud & Software' | 'Automotive & Embedded' | 'Robotics & Manufacturing' | 'Power & Energy';
  badge: string;
  established: string;
  scope: string;
  deliverables: string[];
  coELab?: string;
  logoCode: string;
  logoBg: string;
  logoText: string;
}

const ACTIVE_MOUS: PartnershipMoU[] = [
  {
    partner: 'Tata Technologies',
    category: 'Robotics & Manufacturing',
    badge: 'TATA IIIC CoE',
    established: '2021 (Renewed 2024)',
    logoCode: 'TATA',
    logoBg: 'bg-gradient-to-br from-[#0055A2] to-[#003A70]',
    logoText: 'text-white',
    scope:
      'Establishment of the TATA Industry-Institute Interaction Cell (IIIC) with specialized CAD/CAM simulation, electric mobility powertrains, and industrial robotics.',
    deliverables: [
      'Joint curriculum development for Autonomous Mechanical & Mechatronics',
      'Industrial training on Catia, Delmia & 3DExperience platforms',
      'Direct internship pipeline for top student design cohorts',
    ],
    coELab: 'TATA IIIC Advanced Manufacturing Lab',
  },
  {
    partner: 'IBM India',
    category: 'Cloud & Software',
    badge: 'IBM Software CoE',
    established: '2019 (Ongoing)',
    logoCode: 'IBM',
    logoBg: 'bg-gradient-to-br from-[#054ADA] to-[#002D9C]',
    logoText: 'text-white',
    scope:
      'Enterprise cloud systems, AI analytics, and distributed software engineering center delivering professional certifications.',
    deliverables: [
      'Authorized IBM Software Center of Excellence on campus',
      'Curriculum integration with IBM Cloud Pak and Watson AI tools',
      'Faculty Development Programmes (FDP) conducted by IBM architects',
    ],
    coELab: 'IBM Big Data & Cloud Innovation Center',
  },
  {
    partner: 'Amazon Web Services (AWS) Academy',
    category: 'Cloud & Software',
    badge: 'Cloud Academy',
    established: '2022',
    logoCode: 'AWS',
    logoBg: 'bg-gradient-to-br from-[#232F3E] to-[#111827]',
    logoText: 'text-[#FF9900]',
    scope:
      'Institutional membership in AWS Academy enabling certified curriculum pathways for Cloud Solutions Architect and DevOps engineer certifications.',
    deliverables: [
      'Accredited faculty trainers delivering hands-on AWS lab sandbox hours',
      '50% discount vouchers on official AWS certification examinations',
      'Direct recruitment opportunities in AWS partner network companies',
    ],
    coELab: 'AWS Cloud Virtualization Sandbox',
  },
  {
    partner: 'Oracle Academy',
    category: 'Cloud & Software',
    badge: 'Enterprise Software',
    established: '2018',
    logoCode: 'ORCL',
    logoBg: 'bg-gradient-to-br from-[#C74634] to-[#8C1D0E]',
    logoText: 'text-white',
    scope:
      'Comprehensive educational licenses for Oracle Autonomous Database, SQL/PL-SQL architectures, and Java Enterprise Edition curricula.',
    deliverables: [
      'Full curriculum mapping into B.Tech CSE and AI&DS database tracks',
      'Oracle Cloud Infrastructure (OCI) free credits for student capstones',
      'Certified student developer credentials upon semester completion',
    ],
    coELab: 'Oracle Enterprise Systems Lab',
  },
  {
    partner: 'Texas Instruments',
    category: 'Automotive & Embedded',
    badge: 'Hardware & IoT CoE',
    established: '2017',
    logoCode: 'TI',
    logoBg: 'bg-gradient-to-br from-[#CC0000] to-[#8A0000]',
    logoText: 'text-white',
    scope:
      'State-of-the-art microcontroller, DSP, and sensor interface laboratory supporting IoT and wireless sensor research in ECE and EEE.',
    deliverables: [
      'Donation of advanced TI LaunchPad hardware testing kits',
      'Annual Texas Instruments University Innovation Challenge hosting',
      'Hands-on training in ultra-low power wireless sensor architectures',
    ],
    coELab: 'TI Embedded Systems & IoT Lab',
  },
  {
    partner: 'Bosch Global Software Technologies (BGSW)',
    category: 'Automotive & Embedded',
    badge: 'Core Automotive',
    established: '2020',
    logoCode: 'BOSCH',
    logoBg: 'bg-gradient-to-br from-[#EA1B23] to-[#8A0B10]',
    logoText: 'text-white',
    scope:
      'Collaborative development of automotive engineering electives, CAN bus telemetry, and embedded software for ECU control.',
    deliverables: [
      'Curriculum advisory for B.Tech ECE and Mechatronics degrees',
      'Annual Bosch hackathons and student automotive prototype mentorship',
      'Pre-placement offers (PPO) for high-performing student interns',
    ],
    coELab: 'Bosch Automotive Electronics Lab',
  },
  {
    partner: 'Red Hat Academy',
    category: 'Cloud & Software',
    badge: 'Open Source CoE',
    established: '2021',
    logoCode: 'RHEL',
    logoBg: 'bg-gradient-to-br from-[#EE0000] to-[#8B0000]',
    logoText: 'text-white',
    scope:
      'Bridging the open-source enterprise gap through Red Hat Enterprise Linux (RHEL), OpenShift containerization, and Ansible automation training.',
    deliverables: [
      'RHEL system administration embedded in IT electives',
      'Certified Red Hat System Administrator (RHCSA) prep bootcamps',
      'Containerization and microservices sandboxes for student projects',
    ],
  },
  {
    partner: 'Schneider Electric',
    category: 'Power & Energy',
    badge: 'Power Systems CoE',
    established: '2022',
    logoCode: 'SCHN',
    logoBg: 'bg-gradient-to-br from-[#009E4D] to-[#005B2C]',
    logoText: 'text-white',
    scope:
      'Industrial power automation, SCADA systems, smart distribution switchgear, and solar renewable integration testing rigs.',
    deliverables: [
      'Industrial electrical control and PLC automation training rigs',
      'Specialized curriculum for B.Tech Electrical & Electronics (EEE)',
      'Site visits to regional high-voltage transmission substations',
    ],
    coELab: 'Schneider Industrial Automation Suite',
  },
];

const COLLABORATION_PILLARS = [
  {
    number: '01',
    icon: FileCheck2,
    title: 'Autonomous Board of Studies (BoS)',
    desc: 'Senior corporate vice presidents and engineering directors sit on our autonomous BoS to audit, calibrate, and future-proof academic syllabi annually.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Co-Funded Corporate CoE Labs',
    desc: 'Leading multinationals co-invest in dedicated campus laboratories, providing industrial software suites, licensed EDA platforms, and robotic rigs.',
  },
  {
    number: '03',
    icon: Briefcase,
    title: '6-Month Internships to PPO',
    desc: 'Over 250+ engineering students complete semester-long industrial internships, with over 40% successfully converting into high-CTC Pre-Placement Offers.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Corporate Faculty Immersion',
    desc: 'Regular corporate FDPs ensure faculty stay conversant with bleeding-edge industry paradigms like Generative AI, VLSI tape-out, and EV powertrains.',
  },
];

export const IndustryCollaborationsPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Cloud & Software', 'Automotive & Embedded', 'Robotics & Manufacturing', 'Power & Energy'];

  const filteredMoUs = useMemo(() => {
    return ACTIVE_MOUS.filter((mou) => {
      const matchCat = selectedCategory === 'All' || mou.category === selectedCategory;
      const matchQuery =
        !searchQuery ||
        mou.partner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mou.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mou.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-20 space-y-12 selection:bg-[#210532] selection:text-[#FDE68A]">
      {/* Sub Navigation Bar for Placements Section */}
      <PlacementsSubNav activeRoute="industry-collaborations" onNavigate={onNavigate} />

      {/* Hero Section: Exact Shared Theme (Top Editorial Split + Bottom Bento Grid) */}
      <section className="relative w-full overflow-x-clip pt-4 sm:pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Editorial Split Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Eyebrow + Headline */}
            <div className="lg:col-span-6 space-y-4">
              <RevealBlock direction="left">
                <div className="space-y-4">
                  {/* Eyebrow flanked by gold dashes */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-[1.5px] bg-[#C79628]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#210532]">
                      INDUSTRY PARTNERSHIPS
                    </span>
                    <span className="w-10 h-[1.5px] bg-[#C79628]" />
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black font-['Playfair_Display',serif] text-[#210532] leading-[1.08] tracking-tight">
                    Industry Collaborations &amp; <br />
                    <span className="italic font-bold text-[#A87E2B]">
                      Corporate Alliances
                    </span>
                  </h1>
                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Narrative + Action Buttons */}
            <div className="lg:col-span-6">
              <RevealBlock direction="right" delay={100}>
                <div className="flex items-start gap-4 max-w-xl">
                  {/* Slanted gold decorative tick */}
                  <span className="w-[2px] h-14 bg-[#C79628] rotate-[22deg] shrink-0 hidden sm:block mt-0.5" />

                  <div className="space-y-4">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      Connecting academic learning with industry through partnerships, centres of excellence and internship opportunities.
                    </p>

                    <div className="flex flex-wrap items-center gap-3.5">
                      <button
                        onClick={onOpenApply}
                        className="px-7 py-3 rounded-full bg-[#C9943B] hover:bg-[#B8832A] text-[#210532] font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
                      >
                        <span>Apply for Admissions</span>
                        <ArrowRight className="w-4 h-4 text-[#210532] group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => onNavigate('corporate-recruiters')}
                        className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-[#210532] border border-[#210532]/70 font-semibold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>View Corporate Recruiters</span>
                      </button>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>

          {/* Bottom Bento Split: Left Plum Stats Card + Right Framed Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2">
            
            {/* Left Bento: Partnerships At A Glance Card */}
            <div className="lg:col-span-5 flex">
              <RevealBlock direction="up" delay={50} className="w-full">
                <div className="w-full h-full rounded-3xl bg-[#210532] text-white p-7 sm:p-9 shadow-xl border border-[#DFC06A]/35 flex flex-col justify-between space-y-6 relative overflow-hidden">
                  {/* Card Header Row */}
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FDE68A] whitespace-nowrap">
                      PARTNERSHIPS AT A GLANCE
                    </span>
                    <span className="h-[1.5px] flex-1 bg-[#C79628]/60" />
                  </div>

                  {/* 2x2 Stats Grid with Gold Crosshair Dividers */}
                  <div className="grid grid-cols-2 divide-x divide-y divide-[#DFC06A]/35 border-t border-b border-[#DFC06A]/35 my-auto">
                    {/* Stat 1: 18+ */}
                    <div className="p-4 sm:p-6 space-y-1.5">
                      <div className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] text-[#DFC06A] leading-none">
                        18+
                      </div>
                      <div className="text-xs sm:text-[13px] font-medium text-white/90">
                        Active Corporate MoUs
                      </div>
                    </div>

                    {/* Stat 2: 8 */}
                    <div className="p-4 sm:p-6 space-y-1.5">
                      <div className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] text-[#DFC06A] leading-none">
                        8
                      </div>
                      <div className="text-xs sm:text-[13px] font-medium text-white/90">
                        Corporate CoEs on Campus
                      </div>
                    </div>

                    {/* Stat 3: 250+ */}
                    <div className="p-4 sm:p-6 space-y-1.5">
                      <div className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] text-[#DFC06A] leading-none">
                        250+
                      </div>
                      <div className="text-xs sm:text-[13px] font-medium text-white/90">
                        Annual Internships
                      </div>
                    </div>

                    {/* Stat 4: 40%+ */}
                    <div className="p-4 sm:p-6 space-y-1.5">
                      <div className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] text-[#DFC06A] leading-none">
                        40%+
                      </div>
                      <div className="text-xs sm:text-[13px] font-medium text-white/90">
                        PPO Conversion Rate
                      </div>
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="flex items-center justify-between text-xs text-[#FDE68A]/80 font-mono pt-1">
                    <span>Autonomous Syllabi R2024</span>
                    <span className="text-[#DFC06A]">Industry 4.0 Ready</span>
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Bento: Symmetrically Framed Robotics Laboratory Photo */}
            <div className="lg:col-span-7 flex">
              <RevealBlock direction="up" delay={100} className="w-full">
                <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[340px]">
                  {/* Decorative Symmetrical Gold Wireframe Lines */}
                  <svg
                    className="absolute -inset-3 sm:-inset-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] pointer-events-none z-0"
                    viewBox="0 0 600 360"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    {/* Top-Left Corner Bracket */}
                    <path
                      d="M 15 110 L 15 32 Q 15 16 32 16 L 200 16"
                      stroke="#C79628"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Bottom-Right Corner Bracket */}
                    <path
                      d="M 400 344 L 568 344 Q 585 344 585 328 L 585 240"
                      stroke="#C79628"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Main Image Container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#210532] border border-[#DFC06A]/35 z-10 group">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                      alt="Engineering students and faculty working with robotic rover prototype at Center of Excellence lab"
                      className="w-full h-full object-cover object-[50%_35%] filter contrast-[1.03] group-hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#210532]/35 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Luxury CoE Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 rounded-2xl bg-[#210532]/95 backdrop-blur-md border border-[#DFC06A]/60 px-4 py-2.5 shadow-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#DFC06A]/20 flex items-center justify-center text-[#DFC06A]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-[13px] font-bold text-white font-['Playfair_Display',serif] leading-tight">
                          8 Campus CoEs
                        </div>
                        <div className="text-[10px] text-[#DFC06A] font-medium leading-tight mt-0.5">
                          Tata IIIC • IBM • TI • Bosch Labs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>

          </div>
        </div>

        {/* Full-width Divider Line */}
        <div className="w-full border-t border-[#DFC06A]/40 mt-12 pt-1" />
      </section>

      {/* 4 Pillars of Strategic Industry Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628] flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#C79628]" />
            INSTITUTIONAL ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            The Four Pillars of Industry Collaboration
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Our corporate relationships shape the core academic curriculum, laboratory facilities, research capstones, and placement trajectories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLABORATION_PILLARS.map((col, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm hover:border-[#DFC06A] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#210532] group-hover:scale-105 transition-transform">
                    <col.icon className="w-5 h-5 text-[#210532]" />
                  </div>
                  <span className="font-['Playfair_Display',serif] text-xl font-bold text-[#DFC06A]">
                    {col.number}
                  </span>
                </div>
                <h3 className="font-bold text-base text-[#210532] group-hover:text-[#A87E2B] transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {col.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Corporate MoUs Roster & Center of Excellence Directory */}
      <section id="mous-directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#DFC06A]/30">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              BILATERAL ALLIANCES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
              Active Corporate MoUs &amp; Technology Partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Showing {filteredMoUs.length} institutional tech alliances driving research, curriculum development, and campus placements.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C79628] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search partners, domains, or CoE labs..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full border border-[#DFC06A]/50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#210532] shadow-2xs transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills with Luxury Styling */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#210532] text-[#FDE68A] shadow-md border border-[#DFC06A]/40'
                  : 'bg-white text-slate-700 border border-[#DFC06A]/35 hover:bg-amber-50/60 hover:text-[#210532]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MoUs Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMoUs.map((mou, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm hover:border-[#DFC06A] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              {/* Subtle gold corner highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-50 to-transparent pointer-events-none rounded-tr-3xl" />

              <div className="space-y-4 relative z-10">
                {/* Header row: Brand Emblem + Established Year */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-12 h-12 rounded-2xl ${mou.logoBg} ${mou.logoText} flex items-center justify-center text-xs font-black tracking-wider shadow-sm shrink-0 select-none border border-white/20`}
                    >
                      {mou.logoCode}
                    </span>
                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#A87E2B] block">
                        {mou.category}
                      </span>
                      <h3 className="font-bold text-lg sm:text-xl font-['Playfair_Display',serif] text-[#210532] leading-tight">
                        {mou.partner}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-[#FAF7F0] text-slate-600 border border-[#DFC06A]/40 shrink-0">
                    Est. {mou.established}
                  </span>
                </div>

                {/* Badge Row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFE8F6] text-[#210532] border border-purple-200">
                    {mou.badge}
                  </span>
                </div>

                {/* Scope of Agreement */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {mou.scope}
                </p>

                {/* Co-Funded Laboratory Card Box */}
                {mou.coELab && (
                  <div className="p-3.5 bg-[#FAF7F0] rounded-2xl border border-[#DFC06A]/35 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C79628] shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A87E2B] block">
                        Co-Funded Campus Infrastructure
                      </span>
                      <span className="text-xs font-bold text-[#210532]">
                        {mou.coELab}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Deliverables & Outcomes */}
              <div className="pt-4 border-t border-slate-100 space-y-2 relative z-10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Deliverables &amp; Student Outcomes:
                </div>
                <div className="space-y-1.5">
                  {mou.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Consultancy & JCS Integration Bento Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#210532] via-[#2D0744] to-[#170324] text-white p-8 md:p-12 border border-[#DFC06A]/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] bg-[#DFC06A]/20 px-3 py-1 rounded-full border border-[#DFC06A]/40 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span>Live Problem Solving &amp; Tech Consulting</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-white">
              Jyothi Consultancy Services (JCS)
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              Through our dedicated software development and industrial engineering wing — Jyothi Consultancy Services (JCS) — faculty specialists and student cohorts solve mission-critical challenges for corporate clients. This includes custom cloud applications, IoT telemetry benches, embedded firmware, and structural seismic diagnostics.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onNavigate('jyothi-consultancy')}
                className="px-7 py-3 rounded-full bg-[#C9943B] hover:bg-[#B8832A] text-[#210532] font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Learn More About JCS</span>
                <ArrowRight className="w-4 h-4 text-[#210532]" />
              </button>
              <button
                onClick={() => onNavigate('tata-iiic')}
                className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore TATA IIIC Prototyping</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate MoU Enquiry & Liaison Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#DFC06A]/45 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-1.5">
              <span className="w-5 h-[1.5px] bg-[#C79628]" />
              INDUSTRY PARTNERSHIPS LIAISON DESK
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#210532]">
              Propose an MoU or Co-Funded Center of Excellence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Corporations and engineering industries seeking to establish funded laboratories, sponsor capstone research projects, or execute bilateral MoUs with Jyothi Engineering College (Autonomous) are invited to connect with the Directorate of Industry Relations.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-700">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#C79628]" />
                <span>+91 4884 259000 / Extn 108</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#C79628]" />
                <span>industryrelations@jecc.ac.in</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('corporate-recruiters')}
              className="px-6 py-2.5 rounded-full bg-[#210532] hover:bg-[#340A4E] text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Briefcase className="w-4 h-4 text-[#DFC06A]" />
              <span>Corporate Recruiters</span>
            </button>
            <button
              onClick={() => onNavigate('placement-records')}
              className="px-5 py-2.5 rounded-full bg-[#FAF7F0] hover:bg-amber-100/60 border border-[#DFC06A]/60 text-[#210532] font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Placement Records</span>
              <ArrowRight className="w-4 h-4 text-[#C79628]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
