import React from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  GraduationCap,
  Layers,
  Wrench,
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

const IIIC_PILLARS = [
  {
    icon: Factory,
    badge: 'Industry Readiness',
    title: 'Industry-Aligned Skill Labs',
    desc: 'Hands-on training modules developed with Tata Technologies and industry partners covering modern manufacturing, CAD/CAM, and automation workflows.',
  },
  {
    icon: Briefcase,
    badge: 'Corporate Immersion',
    title: 'Live Projects & Internships',
    desc: 'Guided industrial problem statements, summer internships, and capstone mentorship connecting students directly with engineering leaders.',
  },
  {
    icon: GraduationCap,
    badge: 'Faculty & Curriculum',
    title: 'Curriculum Co-Design & FDPs',
    desc: 'Annual Board of Studies consultations and Faculty Development Programmes ensuring autonomous syllabi match real-world Industry 4.0 standards.',
  },
  {
    icon: Award,
    badge: 'Certifications',
    title: 'Joint Industry Certifications',
    desc: 'Verified competency credentials and technical workshops that boost core engineering placement readiness across mechanical, EEE, ECE, and CSE.',
  },
];

const FOCUS_DOMAINS = [
  {
    icon: Cpu,
    title: 'Industrial Automation, PLC & Robotics',
    points: [
      'PLC, SCADA & smart factory sensor integration',
      'Industrial robotic arm programming & kinematics',
      'Embedded real-time control systems',
    ],
  },
  {
    icon: Wrench,
    title: 'EV Powertrain, CAD/CAE & Product Design',
    points: [
      'Electric vehicle battery & thermal management',
      'Advanced 3D parametric modeling & FEA validation',
      'Rapid prototyping with MIT FabLab Kerala',
    ],
  },
  {
    icon: Layers,
    title: 'Enterprise Software, Cloud & AI Systems',
    points: [
      'Full-stack industrial dashboards & IIoT telemetry',
      'Predictive maintenance using machine learning',
      'Cloud-native DevOps & cybersecurity practices',
    ],
  },
];

export const TataIiicPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
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
                tab.route === 'tata-iiic'
                  ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                  : 'text-[#250836] hover:bg-amber-50/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Diagonal Split Hero (Photo Left + Royal Purple Right) */}
      <section className="relative w-full overflow-hidden mt-4 bg-[#210532] text-white border-y border-[#DFC06A]/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Photo with Gold Diagonal Edge on Desktop */}
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px] overflow-hidden bg-[#180222]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop"
              alt="TATA IIIC Industrial Automation and Engineering Lab"
              className="w-full h-full object-cover object-center"
            />
            {/* Diagonal Cut Overlay for Seamless Split on Desktop */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="hidden lg:block absolute inset-y-0 right-0 h-full w-24 pointer-events-none"
            >
              <polygon points="100,0 100,100 0,100" fill="#210532" />
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="#DFC06A"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* Right Royal Purple Content Panel */}
          <div className="lg:col-span-6 px-6 py-10 sm:px-10 sm:py-14 lg:pr-14 flex flex-col justify-center">
            <RevealBlock direction="right" delay={120}>
              <div className="space-y-5 text-left">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B0840]/90 border border-[#DFC06A]/70 text-[#FDE68A] text-[11px] font-bold uppercase tracking-wider">
                    <span>TATA IIIC &bull; Industry Interaction</span>
                  </div>
                  <span className="hidden sm:block h-[1px] w-16 bg-[#DFC06A]/65" />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08]">
                  <span className="font-['Playfair_Display',serif] block text-white">
                    TATA Industry-Institute
                  </span>
                  <span className="font-['Playfair_Display',serif] italic font-bold text-[#FDE68A] block mt-0.5">
                    Interaction Cell.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
                  Bridging classroom engineering with real-world industrial innovation through Tata-aligned skill labs, live corporate problem statements, and Industry 4.0 readiness programmes.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                  <button
                    onClick={onOpenApply}
                    className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-lg border border-[#DFC06A] inline-flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Apply for Admissions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('jyothi-consultancy')}
                    className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#FAF7F0] hover:bg-white text-[#250836] font-semibold text-xs sm:text-sm border border-[#DFC06A] shadow-md transition-all cursor-pointer"
                  >
                    Explore JCS Consultancy
                  </button>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Warm Cream 4-Stat Strip */}
      <section className="bg-white/80 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
          <RevealBlock direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:divide-x lg:divide-[#DFC06A]/55">
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  30+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Industry MoUs</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  2,500+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Trained Students</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  Industry 4.0
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Skill Lab Tracks</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  100%
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Project Mentorship</div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex items-center gap-4">
          <span className="h-[1px] flex-1 bg-amber-300/80" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
            How TATA IIIC Empowers Students
          </h2>
          <span className="h-[1px] flex-1 bg-amber-300/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IIIC_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealBlock
                key={item.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 120}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                        {item.badge}
                      </span>
                      <Icon className="w-5 h-5 text-[#A87627]" />
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-amber-100 text-[11px] font-semibold text-[#A87627] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Autonomous Industry Cell</span>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* Key Collaboration Domains */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5C3A14] bg-[#FBF2DC] px-3 py-1 rounded-full border border-[#DFC06A]">
            <Factory className="w-3.5 h-3.5 text-[#A87627]" />
            Technical Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Core Training &amp; Collaboration Domains
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOCUS_DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <RevealBlock
                key={domain.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 140}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#FDE68A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg font-['Playfair_Display',serif] text-[#250836]">
                    {domain.title}
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {domain.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>
    </div>
  );
};

