import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Globe2,
  Users,
  Compass,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  Search,
  Quote,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface AlumniSpotlight {
  name: string;
  batch: string;
  dept: string;
  currentRole: string;
  currentCompany: string;
  location: string;
  campusPlacement: string;
  careerPath: string;
  avatar: string;
  quote: string;
  domain: 'Big Tech & Cloud' | 'Hardware & Silicon' | 'Automotive & EV' | 'Founders & Startups';
  companyCode: string;
  companyBg: string;
  companyText: string;
}

const ALUMNI_SPOTLIGHTS: AlumniSpotlight[] = [
  {
    name: 'Dr. Arun Mathew',
    batch: 'Class of 2008',
    dept: 'B.Tech Computer Science & Engineering',
    currentRole: 'Senior Staff Software Engineer',
    currentCompany: 'Google Cloud Platform',
    location: 'Sunnyvale, California, USA',
    campusPlacement: 'Infosys Technologies (Campus Offer)',
    careerPath: 'Infosys (2 yrs) ➔ M.S. at Carnegie Mellon University (CMU) ➔ Senior Staff at Google',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    quote: 'The rigorous data structures foundation and open-source labs at Jyothi instilled the problem-solving mindset I rely on daily designing planetary-scale distributed cloud infrastructure.',
    domain: 'Big Tech & Cloud',
    companyCode: 'GOOG',
    companyBg: 'bg-gradient-to-br from-[#4285F4] to-[#1A73E8]',
    companyText: 'text-white',
  },
  {
    name: 'Pooja Radhakrishnan',
    batch: 'Class of 2012',
    dept: 'B.Tech Electronics & Communication',
    currentRole: 'Principal Silicon Hardware Architect',
    currentCompany: 'Apple Inc.',
    location: 'Cupertino, California, USA',
    campusPlacement: 'Bosch Global Software (Core Offer)',
    careerPath: 'Bosch Automotive (3 yrs) ➔ Qualcomm Silicon Design ➔ Principal Architect at Apple Silicon',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    quote: 'Working on hands-on VLSI design suites and the Texas Instruments Lab at Jyothi gave me the exact silicon debugging edge needed for next-gen consumer hardware chips.',
    domain: 'Hardware & Silicon',
    companyCode: 'APPL',
    companyBg: 'bg-gradient-to-br from-[#1C1C1E] to-[#2C2C2E]',
    companyText: 'text-[#F5F5F7]',
  },
  {
    name: 'Deepak V. Menon',
    batch: 'Class of 2010',
    dept: 'B.Tech Mechanical Engineering',
    currentRole: 'Director of Advanced Manufacturing',
    currentCompany: 'Tesla Gigafactory',
    location: 'Berlin-Brandenburg, Germany',
    campusPlacement: 'Tata Motors (GET Campus Offer)',
    careerPath: 'Tata Motors (3 yrs) ➔ M.Sc. at RWTH Aachen ➔ Senior Manager BMW ➔ Director at Tesla',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    quote: 'From SAE Baja racecar design in our campus workshops to robotic manufacturing lines at Tesla, Jyothi nurtured my passion for precision automation and sustainable mobility.',
    domain: 'Automotive & EV',
    companyCode: 'TSLA',
    companyBg: 'bg-gradient-to-br from-[#E82127] to-[#A31115]',
    companyText: 'text-white',
  },
  {
    name: 'Sreeram K. Nair',
    batch: 'Class of 2014',
    dept: 'B.Tech Electrical & Electronics',
    currentRole: 'Co-Founder & Chief Technology Officer',
    currentCompany: 'VoltDynamics (CleanTech AI)',
    location: 'Bengaluru / San Francisco',
    campusPlacement: 'Schneider Electric (Campus Offer)',
    careerPath: 'Schneider R&D ➔ Jyothi TBI Incubator Grantee ➔ Raised $12M Series A ➔ Acquired for $45M',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    quote: 'Jyothi TBI and the MIT FabLab gave us space, seed mentorship, and high-voltage test rigs when we were just third-year students experimenting with smart battery algorithms.',
    domain: 'Founders & Startups',
    companyCode: 'VOLT',
    companyBg: 'bg-gradient-to-br from-[#0F766E] to-[#115E59]',
    companyText: 'text-[#5EEAD4]',
  },
  {
    name: 'Nikhil Thomas',
    batch: 'Class of 2016',
    dept: 'B.Tech Computer Science & Engineering',
    currentRole: 'Principal Cloud Architect',
    currentCompany: 'Microsoft Azure',
    location: 'Redmond, Washington, USA',
    campusPlacement: 'TCS Digital (Dream Offer)',
    careerPath: 'TCS Digital (2 yrs) ➔ Senior Cloud Consultant at AWS ➔ Principal Architect at Microsoft',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
    quote: 'The 4-year finishing school training and AWS Academy modules at JEC ensured my transition from a campus recruit into a hyperscale cloud architect was accelerated.',
    domain: 'Big Tech & Cloud',
    companyCode: 'MSFT',
    companyBg: 'bg-gradient-to-br from-[#00A4EF] to-[#0078D4]',
    companyText: 'text-white',
  },
  {
    name: 'Aparna Nambiar',
    batch: 'Class of 2015',
    dept: 'B.Tech Civil Engineering',
    currentRole: 'Associate Director - Resilient Infrastructure',
    currentCompany: 'Arup Consulting Engineers',
    location: 'London, United Kingdom',
    campusPlacement: 'L&T Construction (Campus Offer)',
    careerPath: 'L&T Infrastructure ➔ M.Sc. at Imperial College London ➔ Associate Director at Arup',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    quote: 'The geotechnical testing rigs and structural dynamics labs at Jyothi instilled a deep respect for sustainability and seismic durability in mega-structures.',
    domain: 'Hardware & Silicon',
    companyCode: 'ARUP',
    companyBg: 'bg-gradient-to-br from-[#991B1B] to-[#7F1D1D]',
    companyText: 'text-white',
  },
];

const ADVANCEMENT_PROGRAMS = [
  {
    number: '01',
    icon: Users,
    title: 'Alumni Mock Interview Marathon',
    desc: 'Each recruitment season, 80+ senior alumni in Fortune 500 companies conduct 1-on-1 simulated technical architecture and behavioural mock interviews for graduating students.',
    badge: '1-on-1 Practice',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Global Employee Referral Network',
    desc: 'Exclusive internal corporate referral pipelines connecting graduating students directly to hiring managers at Google, Microsoft, Amazon, Bosch, and Tier-1 MNCs.',
    badge: 'Direct Referrals',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Global MS & Higher Studies Advisory',
    desc: 'Alumni pursuing or having completed Master’s and Ph.D. degrees at CMU, Stanford, TU Munich, and NUS guide current students through SOPs, GRE prep, and funding.',
    badge: 'Postgrad Mentoring',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Founder-in-Residence & Angel Circle',
    desc: 'Successful alumni entrepreneurs provide technical mentorship, market validation, and seed pitch feedback to student startups incubating at Jyothi TBI.',
    badge: 'Venture Backing',
  },
];

const GLOBAL_CHAPTERS = [
  { region: 'North America (USA & Canada)', alumniCount: '2,400+', topFirms: 'Google, Microsoft, Amazon, Apple, Meta, Tesla, Qualcomm, Intel' },
  { region: 'Europe & United Kingdom', alumniCount: '1,800+', topFirms: 'BMW, Bosch Germany, ASML, SAP, Airbus, Siemens, Arup' },
  { region: 'Middle East (GCC & UAE)', alumniCount: '3,200+', topFirms: 'Aramco, Emirates NBD, Schlumberger, ADNOC, Petrofac' },
  { region: 'Asia Pacific (Singapore & Australia)', alumniCount: '1,100+', topFirms: 'Grab, Shopee, DBS Bank, Telstra, Atlassian, Rio Tinto' },
  { region: 'India Tech Hubs (Bengaluru, Kochi, Hyd)', alumniCount: '4,500+', topFirms: 'TCS, Infosys, Wipro, Cognizant, Federal Bank, UST, Zoho' },
];

export const CareerAdvancementAlumniPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filters = ['All', 'Big Tech & Cloud', 'Hardware & Silicon', 'Automotive & EV', 'Founders & Startups'];

  const filteredSpotlights = useMemo(() => {
    return ALUMNI_SPOTLIGHTS.filter((item) => {
      const matchCat = activeFilter === 'All' || item.domain === activeFilter;
      const matchQuery =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.currentCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.currentRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-20 space-y-12 selection:bg-[#210532] selection:text-[#FDE68A]">
      {/* Sub Navigation Bar for Placements Section */}
      <PlacementsSubNav activeRoute="career-advancement-alumni" onNavigate={onNavigate} />

      {/* Hero Section: Exact Shared Theme (Left Editorial Copy + Right Framed Team Photo) */}
      <section className="relative w-full overflow-x-clip pt-4 sm:pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Eyebrow + Headline + Globe Watermark + Action Buttons */}
            <div className="lg:col-span-6 space-y-5 lg:pr-2 relative">
              {/* Subtle Gold Globe Line Watermark behind copy */}
              <div className="absolute -top-10 -left-6 w-96 h-96 pointer-events-none opacity-[0.14] -z-10 text-[#C79628]">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" />
                  <ellipse cx="100" cy="100" rx="90" ry="40" stroke="currentColor" strokeWidth="1" />
                  <ellipse cx="100" cy="100" rx="40" ry="90" stroke="currentColor" strokeWidth="1" />
                  <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              <RevealBlock direction="left">
                <div className="space-y-4">
                  {/* Eyebrow flanked by gold dashes */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-[1.5px] bg-[#C79628]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#210532]">
                      THE JYOTHI ALUMNI NETWORK
                    </span>
                    <span className="w-10 h-[1.5px] bg-[#C79628]" />
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black font-['Playfair_Display',serif] text-[#210532] leading-[1.08] tracking-tight">
                    Career Advancement <br />
                    Alumni &amp; <br />
                    <span className="italic font-bold text-[#A87E2B]">
                      Global Leadership
                    </span>
                  </h1>

                  {/* Subtitle / Paragraph */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-lg">
                    From campus to careers around the world, our alumni continue to learn, lead and build.
                  </p>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      onClick={() => onNavigate('alumni')}
                      className="px-7 py-3 rounded-full bg-[#C9943B] hover:bg-[#B8832A] text-[#210532] font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Visit Global Alumni Directory</span>
                      <ArrowRight className="w-4 h-4 text-[#210532] group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onNavigate('placement-records')}
                      className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-[#210532] border border-[#210532]/70 font-semibold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>View Placement Trajectory</span>
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Framed Alumni Collaboration Team Photo */}
            <div className="lg:col-span-6 relative">
              <RevealBlock direction="right" delay={100}>
                <div className="relative w-full h-[320px] sm:h-[390px] lg:h-[430px] p-2">
                  {/* Decorative Symmetrical Gold Wireframe Lines */}
                  <svg
                    className="absolute -inset-3 sm:-inset-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] pointer-events-none z-0"
                    viewBox="0 0 600 400"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    {/* Top-Left Corner Bracket */}
                    <path
                      d="M 15 110 L 15 32 Q 15 16 32 16 L 220 16"
                      stroke="#C79628"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Bottom-Right Corner Bracket */}
                    <path
                      d="M 380 384 L 568 384 Q 585 384 585 368 L 585 270"
                      stroke="#C79628"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Main Image Container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#210532] border border-[#DFC06A]/40 z-10 group">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                      alt="Jyothi alumni and young engineering professionals collaborating around laptop"
                      className="w-full h-full object-cover object-[50%_35%] filter contrast-[1.03] group-hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#210532]/35 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Luxury Alumni Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 rounded-2xl bg-[#210532]/95 backdrop-blur-md border border-[#DFC06A]/60 px-4 py-2.5 shadow-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#DFC06A]/20 flex items-center justify-center text-[#DFC06A]">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-[13px] font-bold text-white font-['Playfair_Display',serif] leading-tight">
                          12,000+ Alumni
                        </div>
                        <div className="text-[10px] text-[#DFC06A] font-medium leading-tight mt-0.5">
                          Across 45+ Nations Globally
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>

          </div>
        </div>

        {/* Bottom 4-Pillar Stat Divider Strip (Exact Match to Screenshot) */}
        <div className="w-full border-t border-b border-[#DFC06A]/40 mt-10 py-7 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#DFC06A]/40">
              {/* Pillar 1: 12,000+ */}
              <div className="space-y-1.5 px-4">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  12,000+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Alumni Engineers Worldwide
                </div>
              </div>

              {/* Pillar 2: 45+ */}
              <div className="space-y-1.5 px-4 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  45+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Countries with Jyothi Alumni
                </div>
              </div>

              {/* Pillar 3: 350+ */}
              <div className="space-y-1.5 px-4 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  350+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Directors, VPs &amp; Staff Leads
                </div>
              </div>

              {/* Pillar 4: 85+ */}
              <div className="space-y-1.5 px-4 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  85+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Startups &amp; Tech Ventures
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Trajectory Spotlights Section */}
      <section id="alumni-spotlights" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#DFC06A]/30">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              LEADERSHIP TRAJECTORIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
              From Campus Placement to Global Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Showing {filteredSpotlights.length} verified alumni leading engineering at Fortune 500 enterprises and deep tech startups.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C79628] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search alumni, companies, or cities..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full border border-[#DFC06A]/50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#210532] shadow-2xs transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills with Luxury Styling */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-[#210532] text-[#FDE68A] shadow-md border border-[#DFC06A]/40'
                  : 'bg-white text-slate-700 border border-[#DFC06A]/35 hover:bg-amber-50/60 hover:text-[#210532]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Alumni Spotlights Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpotlights.map((alumnus, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm hover:border-[#DFC06A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group"
            >
              {/* Subtle gold corner highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-50 to-transparent pointer-events-none rounded-tr-3xl" />

              <div className="space-y-4 relative z-10">
                {/* Header row: Alumnus Avatar + Name + Company Monogram */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={alumnus.avatar}
                      alt={alumnus.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-[#DFC06A] shadow-xs shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#210532] group-hover:text-[#A87E2B] transition-colors leading-tight">
                        {alumnus.name}
                      </h3>
                      <p className="text-[11px] text-[#A87E2B] font-bold mt-0.5">{alumnus.batch}</p>
                      <p className="text-[11px] text-slate-500 truncate max-w-[170px]">{alumnus.dept}</p>
                    </div>
                  </div>

                  <span
                    className={`w-10 h-10 rounded-xl ${alumnus.companyBg} ${alumnus.companyText} flex items-center justify-center text-[11px] font-black tracking-wider shadow-sm shrink-0 select-none border border-white/20`}
                  >
                    {alumnus.companyCode}
                  </span>
                </div>

                {/* Current Executive Role Card */}
                <div className="p-3.5 bg-[#FAF7F0] rounded-2xl border border-[#DFC06A]/30 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-[#A87E2B] tracking-wider">
                    Current Leadership Role
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#210532] leading-snug">
                    {alumnus.currentRole}
                  </div>
                  <div className="text-xs font-semibold text-emerald-800">
                    {alumnus.currentCompany}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                    <span>{alumnus.location}</span>
                  </div>
                </div>

                {/* Campus Origin & Pathway */}
                <div className="space-y-1.5 text-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Campus Origin &amp; Career Trajectory:
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 text-[11px] text-slate-800 font-medium leading-relaxed">
                    <span className="font-bold text-[#C79628]">Started at: </span>
                    {alumnus.campusPlacement}
                    <div className="mt-1 text-slate-600 text-[10.5px]">
                      {alumnus.careerPath}
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pt-1">
                  <Quote className="w-4 h-4 text-[#DFC06A]/60 absolute -top-1 -left-1" />
                  <p className="text-xs text-slate-600 italic leading-relaxed pl-4 font-normal">
                    &ldquo;{alumnus.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Four Strategic Advancement Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628] flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#C79628]" />
            STUDENT MENTORING INITIATIVES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            Four Pillars of Alumni Career Advancement
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Our global alumni actively give back to graduating batches through high-impact mock interview loops, exclusive internal referrals, and startup angel mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANCEMENT_PROGRAMS.map((prog, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm hover:border-[#DFC06A] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF0F6] border border-purple-100 flex items-center justify-center text-[#210532] group-hover:scale-105 transition-transform">
                    <prog.icon className="w-5 h-5 text-[#210532]" />
                  </div>
                  <span className="font-['Playfair_Display',serif] text-xl font-bold text-[#DFC06A]">
                    {prog.number}
                  </span>
                </div>
                <h3 className="font-bold text-base text-[#210532] group-hover:text-[#A87E2B] transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#FAF7F0] text-[#210532] border border-[#DFC06A]/40 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{prog.badge}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Chapters Footprint Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#210532] via-[#2D0744] to-[#170324] text-white p-8 md:p-12 border border-[#DFC06A]/40 shadow-2xl relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] bg-[#DFC06A]/20 px-3 py-1 rounded-full border border-[#DFC06A]/40 inline-flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#FDE68A]" />
                <span>Worldwide Chapters Footprint</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-white">
                Global Alumni Chapter Communities
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                Spanning five continents, regional chapters organize executive roundtables, alumni meets, technical webinars, and direct referral drives for young graduates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {GLOBAL_CHAPTERS.map((chap, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#FDE68A] font-['Playfair_Display',serif]">
                      {chap.region}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#DFC06A]/20 text-[#DFC06A] border border-[#DFC06A]/30">
                      {chap.alumniCount}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-relaxed pt-1">
                    <strong className="text-white">Key Employers: </strong>
                    {chap.topFirms}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Engagement & Mentorship Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#DFC06A]/45 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-1.5">
              <span className="w-5 h-[1.5px] bg-[#C79628]" />
              ALUMNI RELATIONS &amp; CAREER ADVANCEMENT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#210532]">
              Connect with the Global Alumni Directorate
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are an alumnus offering campus recruitment referrals or a student seeking career path mentorship, connect with our dedicated Alumni Relations Office.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-700">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#C79628]" />
                <span>+91 4884 259000 / Extn 109</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#C79628]" />
                <span>alumni@jecc.ac.in</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('alumni')}
              className="px-6 py-2.5 rounded-full bg-[#210532] hover:bg-[#340A4E] text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <GraduationCap className="w-4 h-4 text-[#DFC06A]" />
              <span>Full Alumni Portal</span>
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
