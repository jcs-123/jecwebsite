import React from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Coins,
  FileCheck2,
  Rocket,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

const RESEARCH_TABS = [
  { route: 'research', label: 'Research & Innovation' },
  { route: 'tata-iiic', label: 'TATA IIIC' },
  { route: 'jyothi-consultancy', label: 'Jyothi Consultancy Services' },
  { route: 'mit-fablab', label: 'MIT FabLab Kerala' },
  { route: 'jyothi-tbi', label: 'Jyothi TBI Incubator' },
];

const TBI_OFFERINGS = [
  {
    icon: Rocket,
    tag: 'Pre-Incubation',
    title: 'IEDC Ideation & MVP Bootcamps',
    desc: 'Structured idea validation workshops, design thinking sprints, and business model canvas coaching for first-time student founders.',
  },
  {
    icon: Building2,
    tag: 'Workspace',
    title: 'Co-Working Pods & Startup Suites',
    desc: 'Dedicated plug-and-play office spaces, high-speed fiber connectivity, conference rooms, and prototyping access at MIT FabLab.',
  },
  {
    icon: Coins,
    tag: 'Funding Access',
    title: 'Seed Grants & KSUM Idea Support',
    desc: 'Direct guidance for Kerala Startup Mission Idea Grants, MSME innovation schemes, and angel investor pitch days.',
  },
  {
    icon: FileCheck2,
    tag: 'IP & Patents',
    title: 'Patent Filing & Technology Transfer',
    desc: 'Institutional IPR cell support for patent drafting, copyright registration, and commercialization of faculty-student research.',
  },
  {
    icon: Users,
    tag: 'Mentorship',
    title: 'Industry & Alumni Founder Network',
    desc: 'One-on-one mentoring from successful Jyothi alumni entrepreneurs, CTOs, and domain experts across hardware and SaaS.',
  },
  {
    icon: Briefcase,
    tag: 'Compliance Desk',
    title: 'Legal, Tax & Incorporation Aid',
    desc: 'Advisory for company registration, DPIIT Startup India recognition, GST compliance, and early customer acquisition.',
  },
];

const INCUBATION_STAGES = [
  {
    step: '01',
    title: 'Ideation & IEDC Validation',
    desc: 'Student teams pitch campus or societal problems at IEDC Jyothi and validate product-market fit with faculty mentors.',
  },
  {
    step: '02',
    title: 'MVP Build at FabLab & TBI',
    desc: 'Founders build hardware or software MVPs using MIT FabLab machines, cloud credits, and dedicated TBI co-working pods.',
  },
  {
    step: '03',
    title: 'Seed Funding & Market Scale',
    desc: 'Graduating startups secure KSUM grants, file patents, incorporate ventures, and launch commercially across India.',
  },
];

export const JyothiTbiPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      {/* Sub-Navigation Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-white border border-amber-200/70 shadow-2xs">
          {RESEARCH_TABS.map((tab) => (
            <button
              key={tab.route}
              onClick={() => onNavigate(tab.route)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                tab.route === 'jyothi-tbi'
                  ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                  : 'text-[#250836] hover:bg-amber-50/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cream Editorial Hero with Startup Founders Showcase */}
      <section className="relative w-full overflow-x-clip pt-6 sm:pt-8 pb-10">
        <div
          aria-hidden="true"
          className="hidden xl:block absolute top-16 -left-10 w-36 h-48 rounded-2xl overflow-hidden shadow-lg border border-[#DFC06A]/45 -rotate-6 opacity-90 pointer-events-none"
        >
          <img
            src="/assets/club_iedc.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <RevealBlock direction="left">
                <div className="space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/85 border border-[#DFC06A]/70 text-[#3B1159] text-[11px] font-bold uppercase tracking-wider shadow-xs">
                      <span>Jyothi TBI &bull; Startup Incubator</span>
                    </div>
                    <span className="hidden sm:block h-[1px] w-20 bg-[#DFC06A]/65" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08]">
                    <span className="font-['Playfair_Display',serif] block text-[#250836]">
                      Jyothi Technology
                    </span>
                    <span className="font-['Playfair_Display',serif] italic font-bold text-[#C79628] block mt-0.5">
                      Business Incubator.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                    Nurturing 18+ student and alumni startups from ideation and MIT FabLab prototyping to seed funding, mentorship, and market launch.
                  </p>

                  <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                    <button
                      onClick={onOpenApply}
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Apply for Admissions</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('mit-fablab')}
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/40 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Explore MIT FabLab</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>

            <div className="lg:col-span-6 relative">
              <RevealBlock direction="right" delay={140}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DFC06A]/55 bg-white aspect-[16/10]">
                  <img
                    src="/assets/club_hero.jpg"
                    alt="Jyothi TBI Incubator student founders collaborating"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#210532]/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="px-3 py-1 rounded-full bg-[#29073D]/90 border border-[#DFC06A]/65 text-[11px] font-semibold tracking-wide">
                      KSUM &amp; MSME Supported Hub
                    </span>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Cream 4-Column Stat Strip */}
      <section className="bg-white/80 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
          <RevealBlock direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:divide-x lg:divide-[#DFC06A]/55">
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  18+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Incubated Startups</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  ₹1.2 Cr+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Seed &amp; Grant Support</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  25+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Industry Mentors</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  KSUM &amp; MSME
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Recognized Host</div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex items-center gap-4">
          <span className="h-[1px] flex-1 bg-amber-300/80" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
            Incubation Support &amp; Founder Ecosystem
          </h2>
          <span className="h-[1px] flex-1 bg-amber-300/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TBI_OFFERINGS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealBlock
                key={item.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={(idx % 3) * 120}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                        {item.tag}
                      </span>
                      <Icon className="w-5 h-5 text-[#A87627]" />
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-amber-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Jyothi TBI &amp; IEDC Supported</span>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* 3-Stage Startup Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5C3A14] bg-[#FBF2DC] px-3 py-1 rounded-full border border-[#DFC06A]">
            <Award className="w-3.5 h-3.5 text-[#A87627]" />
            <span>3-Stage Incubation Path</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Your Startup Journey at Jyothi TBI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INCUBATION_STAGES.map((st, idx) => (
            <RevealBlock
              key={st.step}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 140}
              className="h-full"
            >
              <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-3">
                <div className="w-11 h-11 rounded-full border border-[#DFC06A] bg-[#FBF2DC] text-[#5C3A14] font-black font-['Playfair_Display',serif] flex items-center justify-center">
                  {st.step}
                </div>
                <h3 className="font-bold text-lg font-['Playfair_Display',serif] text-[#250836]">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </div>
  );
};

