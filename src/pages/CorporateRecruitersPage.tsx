import React, { useState, useMemo } from 'react';
import {
  Building2,
  Briefcase,
  Search,
  CheckCircle2,
  Users,
  ArrowRight,
  Globe2,
  Phone,
  Mail,
  Building,
  MonitorCheck,
  Coffee,
  Sparkles,
  Quote,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface Recruiter {
  name: string;
  category: 'Tier 1 IT & Cloud' | 'Product & Software' | 'Core Engineering & Auto' | 'Banking & FinTech';
  badge: string;
  rolesHired: string;
  location: string;
  hiringType: 'On-Campus Flagship' | 'Pool Campus Drive' | 'Super Dream Track';
  partnershipYears: string;
}

const BRAND_BADGES: Record<string, { code: string; bg: string; text: string; ring?: string }> = {
  'Tata Consultancy Services (TCS)': { code: 'TCS', bg: 'bg-gradient-to-br from-[#0055A2] to-[#003A70]', text: 'text-white' },
  'Infosys Technologies': { code: 'INFY', bg: 'bg-gradient-to-br from-[#007CC3] to-[#005A8D]', text: 'text-white' },
  'Cognizant (CTS)': { code: 'CTS', bg: 'bg-gradient-to-br from-[#0033A0] to-[#001F60]', text: 'text-white' },
  'Wipro Technologies': { code: 'WIP', bg: 'bg-gradient-to-br from-[#3B0764] to-[#581C87]', text: 'text-[#FDE68A]' },
  'Capgemini India': { code: 'CAP', bg: 'bg-gradient-to-br from-[#0070AD] to-[#123048]', text: 'text-white' },
  'IBM India': { code: 'IBM', bg: 'bg-gradient-to-br from-[#054ADA] to-[#002D9C]', text: 'text-white' },
  'UST Global': { code: 'UST', bg: 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]', text: 'text-[#2DD4BF]' },
  'Mindtree / LTIMindtree': { code: 'LTI', bg: 'bg-gradient-to-br from-[#D9381E] to-[#8C1D0E]', text: 'text-white' },
  'Amazon AWS': { code: 'AWS', bg: 'bg-gradient-to-br from-[#232F3E] to-[#111827]', text: 'text-[#FF9900]', ring: 'ring-1 ring-[#FF9900]/40' },
  'SOTI Inc.': { code: 'SOTI', bg: 'bg-gradient-to-br from-[#1D4ED8] to-[#1E3A8A]', text: 'text-white' },
  'IBS Software': { code: 'IBS', bg: 'bg-gradient-to-br from-[#C8102E] to-[#780016]', text: 'text-white' },
  'Experion Technologies': { code: 'EXP', bg: 'bg-gradient-to-br from-[#6C5CE7] to-[#4834D4]', text: 'text-white' },
  'Zoho Corporation': { code: 'ZOHO', bg: 'bg-gradient-to-br from-[#DF2029] to-[#990008]', text: 'text-white' },
  'Bosch Global Software (BGSW)': { code: 'BOSCH', bg: 'bg-gradient-to-br from-[#E20015] to-[#991B1B]', text: 'text-white' },
  'Tata Motors': { code: 'TATA', bg: 'bg-gradient-to-br from-[#003A70] to-[#001D38]', text: 'text-white' },
  'L&T Technology Services (LTTS)': { code: 'LTTS', bg: 'bg-gradient-to-br from-[#1E293B] to-[#0F172A]', text: 'text-[#FBBF24]', ring: 'ring-1 ring-[#FBBF24]/40' },
  'Quest Global': { code: 'QG', bg: 'bg-gradient-to-br from-[#1E3A8A] to-[#0F172A]', text: 'text-white' },
  'V-Guard Industries Ltd.': { code: 'VG', bg: 'bg-gradient-to-br from-[#E67E22] to-[#B95C00]', text: 'text-white' },
  'MRF Tyres Ltd.': { code: 'MRF', bg: 'bg-gradient-to-br from-[#C0392B] to-[#7B1F16]', text: 'text-white' },
  'Schneider Electric': { code: 'SE', bg: 'bg-gradient-to-br from-[#009530] to-[#005A1D]', text: 'text-white' },
  'Federal Bank Ltd.': { code: 'FB', bg: 'bg-gradient-to-br from-[#004B8D] to-[#00315C]', text: 'text-[#FDE047]', ring: 'ring-1 ring-[#FACC15]/50' },
  'South Indian Bank': { code: 'SIB', bg: 'bg-gradient-to-br from-[#800020] to-[#4A0013]', text: 'text-white' },
  'HDFC Bank Ltd.': { code: 'HDFC', bg: 'bg-gradient-to-br from-[#004C8F] to-[#00274B]', text: 'text-white' },
  'Muthoot FinTech': { code: 'MFIN', bg: 'bg-gradient-to-br from-[#D32F2F] to-[#801010]', text: 'text-white' },
};

const RECRUITERS_DATA: Recruiter[] = [
  { name: 'Tata Consultancy Services (TCS)', category: 'Tier 1 IT & Cloud', badge: 'Tier 1 Recruiter', rolesHired: 'TCS Digital / Ninja / Innovator', location: 'Pan-India & Global', hiringType: 'On-Campus Flagship', partnershipYears: '18+ Years' },
  { name: 'Infosys Technologies', category: 'Tier 1 IT & Cloud', badge: 'Tier 1 Recruiter', rolesHired: 'Power Programmer, DSE & SE', location: 'Bangalore / Trivandrum', hiringType: 'On-Campus Flagship', partnershipYears: '16+ Years' },
  { name: 'Cognizant (CTS)', category: 'Tier 1 IT & Cloud', badge: 'Tier 1 Recruiter', rolesHired: 'GenC Elevate & GenC Next', location: 'Kochi / Chennai', hiringType: 'On-Campus Flagship', partnershipYears: '14+ Years' },
  { name: 'Wipro Technologies', category: 'Tier 1 IT & Cloud', badge: 'Tier 1 Recruiter', rolesHired: 'Turbo & Elite Developers', location: 'Bangalore / Kochi', hiringType: 'On-Campus Flagship', partnershipYears: '15+ Years' },
  { name: 'Capgemini India', category: 'Tier 1 IT & Cloud', badge: 'Tier 1 Recruiter', rolesHired: 'Senior Analyst & Cloud Engineer', location: 'Bangalore / Mumbai', hiringType: 'On-Campus Flagship', partnershipYears: '10+ Years' },
  { name: 'IBM India', category: 'Tier 1 IT & Cloud', badge: 'MNC Recruiter', rolesHired: 'Cloud Solutions Associate', location: 'Bangalore / Kochi', hiringType: 'On-Campus Flagship', partnershipYears: '12+ Years' },
  { name: 'UST Global', category: 'Tier 1 IT & Cloud', badge: 'Strategic Partner', rolesHired: 'Full Stack & DevOps Specialist', location: 'Trivandrum / Kochi', hiringType: 'On-Campus Flagship', partnershipYears: '15+ Years' },
  { name: 'Mindtree / LTIMindtree', category: 'Tier 1 IT & Cloud', badge: 'MNC Recruiter', rolesHired: 'Digital Software Engineer', location: 'Bangalore / Chennai', hiringType: 'On-Campus Flagship', partnershipYears: '9+ Years' },
  { name: 'Amazon AWS', category: 'Product & Software', badge: 'Super Dream (₹24 LPA)', rolesHired: 'Cloud Support & Systems Engineer', location: 'Hyderabad / Bangalore', hiringType: 'Super Dream Track', partnershipYears: '6+ Years' },
  { name: 'SOTI Inc.', category: 'Product & Software', badge: 'Product Leader', rolesHired: 'Enterprise Mobility Developer', location: 'Kochi / Toronto', hiringType: 'Super Dream Track', partnershipYears: '8+ Years' },
  { name: 'IBS Software', category: 'Product & Software', badge: 'Aviation Tech', rolesHired: 'Travel & Aviation Domain Dev', location: 'Kochi / Trivandrum', hiringType: 'On-Campus Flagship', partnershipYears: '14+ Years' },
  { name: 'Experion Technologies', category: 'Product & Software', badge: 'Product Specialist', rolesHired: 'Product Engineering Associate', location: 'Trivandrum / Kochi', hiringType: 'On-Campus Flagship', partnershipYears: '11+ Years' },
  { name: 'Zoho Corporation', category: 'Product & Software', badge: 'Product Leader', rolesHired: 'Software Development Engineer', location: 'Chennai / Tenkasi', hiringType: 'Super Dream Track', partnershipYears: '7+ Years' },
  { name: 'Bosch Global Software (BGSW)', category: 'Core Engineering & Auto', badge: 'Core Automotive', rolesHired: 'Embedded Systems & ECU Engineer', location: 'Bangalore / Coimbatore', hiringType: 'Super Dream Track', partnershipYears: '12+ Years' },
  { name: 'Tata Motors', category: 'Core Engineering & Auto', badge: 'Core Mechanical', rolesHired: 'Graduate Engineer Trainee (GET)', location: 'Pune / Chennai', hiringType: 'On-Campus Flagship', partnershipYears: '10+ Years' },
  { name: 'L&T Technology Services (LTTS)', category: 'Core Engineering & Auto', badge: 'Heavy & Industrial', rolesHired: 'Design Engineer & Automation Trainee', location: 'Vadodara / Chennai', hiringType: 'On-Campus Flagship', partnershipYears: '13+ Years' },
  { name: 'Quest Global', category: 'Core Engineering & Auto', badge: 'Core Mech / ECE', rolesHired: 'Aerospace & Mechanical Design Trainee', location: 'Trivandrum / Bangalore', hiringType: 'On-Campus Flagship', partnershipYears: '12+ Years' },
  { name: 'V-Guard Industries Ltd.', category: 'Core Engineering & Auto', badge: 'Electrical / Electronics', rolesHired: 'R&D Embedded Systems GET', location: 'Kochi / Coimbatore', hiringType: 'On-Campus Flagship', partnershipYears: '14+ Years' },
  { name: 'MRF Tyres Ltd.', category: 'Core Engineering & Auto', badge: 'Manufacturing Titan', rolesHired: 'Production & Quality Engineer', location: 'Chennai / Kottayam', hiringType: 'On-Campus Flagship', partnershipYears: '15+ Years' },
  { name: 'Schneider Electric', category: 'Core Engineering & Auto', badge: 'Power Automation', rolesHired: 'Smart Grid & Power Switchgear GET', location: 'Bangalore', hiringType: 'On-Campus Flagship', partnershipYears: '8+ Years' },
  { name: 'Federal Bank Ltd.', category: 'Banking & FinTech', badge: 'Prime Banking Partner', rolesHired: 'IT Officer & Associate Manager', location: 'Aluva / Pan-India', hiringType: 'Super Dream Track', partnershipYears: '17+ Years' },
  { name: 'South Indian Bank', category: 'Banking & FinTech', badge: 'FinTech & Banking', rolesHired: 'Probationary IT Officer', location: 'Thrissur / Pan-India', hiringType: 'On-Campus Flagship', partnershipYears: '16+ Years' },
  { name: 'HDFC Bank Ltd.', category: 'Banking & FinTech', badge: 'FinTech Banking', rolesHired: 'Data Analyst & Systems Officer', location: 'Mumbai / Kochi', hiringType: 'On-Campus Flagship', partnershipYears: '7+ Years' },
  { name: 'Muthoot FinTech', category: 'Banking & FinTech', badge: 'Digital Banking', rolesHired: 'FinTech Backend Architect', location: 'Kochi / Bangalore', hiringType: 'On-Campus Flagship', partnershipYears: '9+ Years' },
];

const TESTIMONIALS = [
  {
    company: 'Tata Consultancy Services',
    person: 'Subhashish Das',
    role: 'Head of Regional Campus Talent Acquisition',
    text: 'Jyothi Engineering College has consistently proven to be a prime hunting ground for agile software talent. Their autonomous curriculum has ensured students arrive with strong algorithmic grounding and commendable workplace values.',
    experience: '18-Year Recruiter Partnership',
  },
  {
    company: 'Bosch Global Software',
    person: 'Naveen Chandran',
    role: 'Lead Technical Recruiter (Mobility & Embedded)',
    text: 'We are very impressed by the hardware and embedded systems readiness of Jyothi’s ECE and Mechatronics students. Their exposure to modern simulation tools and hands-on FabLab prototyping makes on-boarding frictionless.',
    experience: 'Super Dream Tier Recruiter',
  },
  {
    company: 'Federal Bank Ltd.',
    person: 'Rhea Kurian',
    role: 'Talent Acquisition Partner (Digital)',
    text: 'Students from Jyothi showcase a remarkable combination of technical acumen, problem-solving confidence, and professional ethics. They integrate into our digital banking engineering cohorts seamlessly.',
    experience: 'Flagship Banking Partner',
  },
];

export const CorporateRecruitersPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Tier 1 IT & Cloud', 'Product & Software', 'Core Engineering & Auto', 'Banking & FinTech'];

  const filteredRecruiters = useMemo(() => {
    return RECRUITERS_DATA.filter((r) => {
      const matchCat = selectedCategory === 'All' || r.category === selectedCategory;
      const matchQuery =
        !searchQuery ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.rolesHired.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-20 space-y-16 selection:bg-[#210532] selection:text-[#FDE68A]">
      {/* Sub Navigation Bar for Placements Section */}
      <PlacementsSubNav activeRoute="corporate-recruiters" onNavigate={onNavigate} />

      {/* Exact Shared Editorial Slanted Bento Hero (Left Image, Right Editorial) */}
      <section className="relative w-full overflow-x-clip pt-4 sm:pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Elegantly Framed Photo with Symmetrical Gold Architectural Accents */}
            <div className="lg:col-span-6 relative">
              <RevealBlock direction="left">
                <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[430px] p-2">
                  {/* Outer Offset Gold Frame */}
                  <div className="absolute inset-0 rounded-[28px] border border-[#DFC06A]/45 pointer-events-none z-0" />

                  {/* Symmetrical Top-Left Gold Corner Accent Bracket */}
                  <svg
                    className="absolute -top-2.5 -left-2.5 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-20 text-[#C79628]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M 6 85 L 6 24 Q 6 6 24 6 L 85 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Symmetrical Bottom-Right Gold Corner Accent Bracket */}
                  <svg
                    className="absolute -bottom-2.5 -right-2.5 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-20 text-[#C79628]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M 94 15 L 94 76 Q 94 94 76 94 L 15 94"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Main Image Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#210532] border border-[#DFC06A]/40 z-10 group">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                      alt="Corporate recruiters and talent acquisition leaders interviewing Jyothi students"
                      className="w-full h-full object-cover object-[50%_30%] filter contrast-[1.03] group-hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#210532]/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Luxury Recruitment Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 rounded-2xl bg-[#210532]/95 backdrop-blur-md border border-[#DFC06A]/60 px-4 py-2.5 shadow-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#DFC06A]/20 flex items-center justify-center text-[#DFC06A]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-[13px] font-bold text-white font-['Playfair_Display',serif] leading-tight">
                          94+ Recruiters
                        </div>
                        <div className="text-[10px] text-[#DFC06A] font-medium leading-tight mt-0.5">
                          On-Campus Hiring Directorate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Clean Editorial Text & Action Buttons */}
            <div className="lg:col-span-6 space-y-6 lg:pl-2">
              <RevealBlock direction="right" delay={100}>
                <div className="space-y-4">
                  {/* Eyebrow with flanking gold dashes */}
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-[1.5px] bg-[#C79628]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#210532]">
                      CORPORATE RELATIONS
                    </span>
                    <span className="w-12 h-[1.5px] bg-[#C79628]" />
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-['Playfair_Display',serif] text-[#210532] leading-[1.08] tracking-tight">
                    Corporate Recruiters &amp; <br />
                    <span className="italic font-bold text-[#A87E2B]">
                      Hiring Partners.
                    </span>
                  </h1>

                  {/* Editorial Lead Paragraph */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
                    Connecting Jyothi students with employers across technology and core engineering.
                  </p>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <a
                      href="#recruiters-grid"
                      className="px-7 py-3 rounded-full bg-[#C9943B] hover:bg-[#B8832A] text-[#210532] font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Browse Recruiting Companies</span>
                      <ArrowRight className="w-4 h-4 text-[#210532] group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button
                      onClick={() => onNavigate('placement-records')}
                      className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-[#210532] border border-[#210532]/70 font-semibold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>View Placement Stats</span>
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>

          </div>
        </div>

        {/* Bottom 4-Pillar Stat Divider Strip (Exact Match to Shared Theme) */}
        <div className="w-full border-t border-b border-[#DFC06A]/40 mt-10 py-7 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#DFC06A]/40">
              {/* Pillar 1 */}
              <div className="space-y-1.5 px-4">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  94+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Companies Visited
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-1.5 px-4 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  462+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Job Offers Rolled Out
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-1.5 px-4 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  32+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Core Engineering Recruiters
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="space-y-1.5 px-4 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#210532] leading-none">
                  18+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#210532]">
                  Years Continuous Partnership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Recruiter Directory Grid */}
      <section id="recruiters-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#DFC06A]/30">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              Corporate Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
              Explore Our Campus Hiring Roster
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Showing {filteredRecruiters.length} verified hiring partners recruiting from autonomous batches.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C79628] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, profiles, or sectors..."
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

        {/* Recruiter Cards Grid - Elevated with Custom Luxury Badges & Crisp Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecruiters.map((r, idx) => {
            const brand = BRAND_BADGES[r.name] || {
              code: r.name.slice(0, 3).toUpperCase(),
              bg: 'bg-gradient-to-br from-[#210532] to-[#340A4E]',
              text: 'text-[#FDE68A]',
            };

            return (
              <div
                key={idx}
                className="group p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm hover:border-[#DFC06A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                {/* Subtle gold corner highlight */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-50 to-transparent pointer-events-none rounded-tr-3xl" />

                <div className="space-y-3.5 relative z-10">
                  {/* Card Header: Brand Emblem + Tenure Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-11 h-11 rounded-2xl ${brand.bg} ${brand.text} ${brand.ring || ''} flex items-center justify-center text-xs font-black tracking-wider shadow-sm shrink-0 select-none border border-white/20`}
                      >
                        {brand.code}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A87E2B] block">
                          {r.category}
                        </span>
                        <h3 className="font-bold text-base sm:text-[17px] text-[#210532] leading-tight group-hover:text-[#A87E2B] transition-colors">
                          {r.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Badge Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#EFE8F6] text-[#210532] border border-purple-200">
                      {r.badge}
                    </span>
                    <span className="text-[10.5px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {r.partnershipYears}
                    </span>
                  </div>

                  {/* Roles Hired Card Box */}
                  <div className="p-3 bg-[#FAF7F0] rounded-2xl border border-[#DFC06A]/25 space-y-1 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3 text-[#C79628]" />
                      <span>Roles Recruited</span>
                    </div>
                    <div className="font-semibold text-slate-800 text-[11.5px] leading-snug">
                      {r.rolesHired}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Globe2 className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                    <span className="text-[11px] truncate">{r.location}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{r.hiringType}</span>
                  </span>
                  <span className="text-[10.5px] text-[#210532] font-bold px-2 py-0.5 rounded bg-amber-50 border border-amber-200/80">
                    On-Campus
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRecruiters.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
            <Building2 className="w-12 h-12 text-[#C79628] mx-auto opacity-40" />
            <p className="text-base font-semibold text-slate-800">No recruiters match your search filter</p>
            <p className="text-xs text-slate-500">Try searching for &quot;TCS&quot;, &quot;Bosch&quot;, &quot;Federal Bank&quot;, or &quot;Embedded&quot;.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#C79628] hover:underline pt-2 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* "Why Recruit from Jyothi?" Section - Magazine Editorial Treatment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
            INSTITUTIONAL ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            Why Corporate Leaders Prefer Jyothi Engineers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our autonomous governance allows us to calibrate syllabi in real time with industry expectations, delivering job-ready talent on day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-4 hover:border-[#DFC06A] hover:shadow-md transition-all relative overflow-hidden group">
            <div className="text-4xl font-black font-['Playfair_Display',serif] text-[#C79628]/30 group-hover:text-[#C79628]/60 transition-colors">
              01
            </div>
            <h3 className="font-bold text-lg text-[#210532]">Autonomous Syllabi &amp; Electives</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tailored credit courses in Generative AI, Cloud Native Microservices, Electric Vehicle Powertrains, and Cyber Forensics designed in direct consultation with corporate Board of Studies advisors.
            </p>
            <div className="pt-2 text-xs font-bold text-[#A87E2B] flex items-center gap-1">
              <span>Industry 4.0 Calibrated</span>
            </div>
          </div>

          <div className="p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-4 hover:border-[#DFC06A] hover:shadow-md transition-all relative overflow-hidden group">
            <div className="text-4xl font-black font-['Playfair_Display',serif] text-[#C79628]/30 group-hover:text-[#C79628]/60 transition-colors">
              02
            </div>
            <h3 className="font-bold text-lg text-[#210532]">MIT FabLab &amp; TATA IIIC Labs</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rigorous hands-on exposure to rapid electronic hardware prototyping, 3D additive printing, industrial robotics, and modern CNC machinery ensures day-one productivity in core engineering.
            </p>
            <div className="pt-2 text-xs font-bold text-[#A87E2B] flex items-center gap-1">
              <span>Hardware &amp; Prototyping Rigor</span>
            </div>
          </div>

          <div className="p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-4 hover:border-[#DFC06A] hover:shadow-md transition-all relative overflow-hidden group">
            <div className="text-4xl font-black font-['Playfair_Display',serif] text-[#C79628]/30 group-hover:text-[#C79628]/60 transition-colors">
              03
            </div>
            <h3 className="font-bold text-lg text-[#210532]">Catholic Ethics &amp; Integrity</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nurtured by the Catholic Archdiocese of Trichur with deep emphasis on moral integrity, workplace accountability, teamwork, and lifelong learning dedication that sets our graduates apart.
            </p>
            <div className="pt-2 text-xs font-bold text-[#A87E2B] flex items-center gap-1">
              <span>High Cultural &amp; Ethical Values</span>
            </div>
          </div>
        </div>
      </section>

      {/* On-Campus Recruitment Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
            HIRING INFRASTRUCTURE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            World-Class Campus Recruitment Infrastructure
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Engineered to support large-scale simultaneous testing and seamless panel interviews with high-speed optical connectivity and VIP hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-[#EFE8F6] text-[#210532] flex items-center justify-center">
              <MonitorCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#210532]">900+ PC Online Labs</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated 1 Gbps optical fibre NKN line supporting simultaneous computer-based assessments across multiple air-conditioned halls.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF0E6] text-[#C79628] flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#210532]">12 Interview Cabins</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Acoustically soundproofed, air-conditioned corporate interview suites with high-speed video conferencing nodes.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#210532]">1,200-Seat Auditorium</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              State-of-the-art auditorium equipped with dual laser projection and surround acoustic telemetry for Pre-Placement Talks (PPT).
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#210532]">Executive Hospitality</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              VIP corporate dining lounge and on-campus guest suites for visiting talent acquisition delegates and recruitment directors.
            </p>
          </div>
        </div>
      </section>

      {/* Recruiter Testimonials - Editorial Executive Quotes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
            EMPLOYER VOICES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
            What Talent Leaders Say About Jyothi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-[#C79628]/40" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#210532]">{t.person}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                  <div className="text-xs font-bold text-[#A87E2B] mt-0.5">{t.company}</div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#EFE8F6] text-[#210532] shrink-0">
                  {t.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiter Invitation & VIP Liaison Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#210532] via-[#2F0B46] to-[#180325] text-white border border-[#DFC06A]/50 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gold crest watermark */}
          <div className="absolute right-[-20px] top-0 w-80 h-80 opacity-10 pointer-events-none">
            <Building2 className="w-full h-full text-[#DFC06A]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                Recruiter Invitation 2025-26
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] leading-tight text-white">
                Invite Jyothi Engineers for Your Upcoming Hiring Season
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Connect directly with our Directorate of Corporate Relations &amp; Placement (PAT Cell) to book prime campus recruitment slots, configure custom online assessments, or organize pooled hiring drives.
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-slate-200">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#DFC06A]" />
                  <span>Direct Placement Desk: <strong>+91 4884 259000 / Extn 224</strong></span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>Email: <strong>placements@jecc.ac.in</strong></span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('career-guidance')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C79628] to-[#DFC06A] text-[#170525] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-[#170525]" />
                <span>Career Guidance Cell Details</span>
              </button>
              <button
                onClick={() => onNavigate('placement-records')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Placement Trajectory</span>
                <ArrowRight className="w-4 h-4 text-[#DFC06A]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
