import React from 'react';
import {
  ArrowRight,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Layers,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { ResearchSubNav } from '../components/ResearchSubNav';

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

const JCS_SERVICES = [
  {
    icon: Globe,
    tag: 'Web Engineering',
    title: 'Web Applications & Portals',
    desc: 'Responsive, high-performance web applications, institutional portals, e-governance dashboards, and scalable cloud-backed platforms.',
  },
  {
    icon: Smartphone,
    tag: 'Mobile Platforms',
    title: 'Android & iOS Mobile Apps',
    desc: 'Cross-platform and native mobile applications engineered with intuitive UI, real-time sync, and secure API integrations.',
  },
  {
    icon: Code2,
    tag: 'Custom Software',
    title: 'Enterprise Software & ERP',
    desc: 'Tailored ERP modules, workflow automation, inventory & billing systems, and academic/business management software.',
  },
  {
    icon: Cloud,
    tag: 'Cloud & DevOps',
    title: 'Cloud Migration & Hosting',
    desc: 'Reliable cloud architecture, CI/CD pipelines, database optimization, and high-availability deployment for growing organizations.',
  },
  {
    icon: Cpu,
    tag: 'AI & Data',
    title: 'AI Integration & Analytics',
    desc: 'Applied machine learning, predictive reporting dashboards, smart chatbots, and IoT telemetry platforms.',
  },
  {
    icon: Layers,
    tag: 'IT Advisory',
    title: 'IT Consulting & Digital Audits',
    desc: 'Technology roadmap consulting, cybersecurity reviews, UX modernization, and end-to-end technical advisory.',
  },
];

const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    desc: 'Organizations share their digital goals, operational bottlenecks, and target user workflows with the JCS consultancy team.',
  },
  {
    step: '02',
    title: 'Architecture & Agile Build',
    desc: 'Faculty mentors and student engineers design, prototype, and build clean, tested web, mobile, and software deliverables.',
  },
  {
    step: '03',
    title: 'Deployment & Ongoing Support',
    desc: 'Full production rollout, team training, documentation, and post-launch IT consulting support.',
  },
];

export const JyothiConsultancyPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
}) => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      {/* Sub-Navigation Pills */}
      <ResearchSubNav activeRoute="jyothi-consultancy" onNavigate={onNavigate} />

      {/* Editorial Magazine Hero: Split Header Row + Left Curved Photo & Right Numbered Capabilities */}
      <section className="relative w-full overflow-x-clip pt-7 sm:pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Top Editorial Header Row */}
          <RevealBlock direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Headline */}
              <div className="lg:col-span-7 space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5C3A14]">
                    JCS / IT Services &amp; Consultancy
                  </span>
                  <span className="hidden sm:block h-[1px] flex-1 max-w-[160px] bg-[#DFC06A]/85" />
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.06] text-[#250836]">
                  <span className="block">
                    <span className="font-sans font-black">Jyothi </span>
                    <span className="font-['Playfair_Display',serif] italic font-normal text-[#A87627]">
                      Consultancy
                    </span>
                  </span>
                  <span className="flex items-center gap-3 mt-1">
                    <span className="hidden sm:block h-[1.5px] w-16 bg-[#DFC06A]" />
                    <span className="font-sans font-black">
                      Services{' '}
                      <span className="text-xl sm:text-3xl font-bold text-[#250836]/85">
                        (JCS)
                      </span>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Right Description + Action Buttons */}
              <div className="lg:col-span-5 lg:border-l lg:border-[#DFC06A]/65 lg:pl-8 space-y-4">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Delivering software solutions, web and mobile applications, and IT consultancy for organisations.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                  <button
                    onClick={onOpenApply}
                    className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-lg bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Apply for Admissions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('tata-iiic')}
                    className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-lg bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/45 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Explore TATA IIIC</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </RevealBlock>

          {/* Bottom Split: Left Curved Team Photo + Right 01-04 Numbered Capability List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-8">
              <RevealBlock direction="left">
                <div className="relative">
                  {/* Deep Purple Top-Left Architectural Accent */}
                  <div
                    aria-hidden="true"
                    className="hidden sm:block absolute -top-3 -left-3 w-40 h-40 rounded-tl-[4.5rem] bg-[#250836] z-0"
                  />
                  <div className="relative z-10 rounded-tl-[3.5rem] rounded-tr-2xl rounded-br-[4.5rem] rounded-bl-2xl overflow-hidden shadow-2xl border border-[#DFC06A]/65 bg-white aspect-[16/9]">
                    <img
                      src="/assets/club_coding.jpg"
                      alt="Jyothi Consultancy Services IT and software engineering team"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </RevealBlock>
            </div>

            <div className="lg:col-span-4">
              <RevealBlock direction="right" delay={140}>
                <div className="divide-y divide-[#DFC06A]/45 border-y border-[#DFC06A]/45">
                  {[
                    { num: '01', label: 'Web Applications' },
                    { num: '02', label: 'Mobile Apps' },
                    { num: '03', label: 'Software Solutions' },
                    { num: '04', label: 'IT Consulting' },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="py-4 sm:py-5 flex items-center gap-4 group"
                    >
                      <span className="text-xs font-bold text-[#A87627] tracking-wider shrink-0">
                        {item.num}
                      </span>
                      <span className="text-[#DFC06A] font-light select-none">/</span>
                      <span className="text-base sm:text-lg font-extrabold text-[#250836] group-hover:text-[#A87627] transition-colors">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex items-center gap-4">
          <span className="h-[1px] flex-1 bg-amber-300/80" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
            Software, Web &amp; IT Consultancy Services
          </h2>
          <span className="h-[1px] flex-1 bg-amber-300/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JCS_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <RevealBlock
                key={srv.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={(idx % 3) * 120}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                        {srv.tag}
                      </span>
                      <Icon className="w-5 h-5 text-[#A87627]" />
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-amber-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Enterprise-Grade Delivery</span>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* Engagement Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Client Engagement Workflow
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Structured agile delivery from discovery to production deployment and IT support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_STEPS.map((st, idx) => (
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

      {/* The People of JCS — Our Development Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <RevealBlock direction="up">
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <span className="w-1 h-12 rounded-full bg-[#250836] shrink-0 mt-1" />
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A87627]">
                  The People of JCS
                </div>
                <h2 className="text-2xl sm:text-4xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  Meet the minds behind the code.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                  Our development team creates thoughtful digital solutions for organisations.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="h-[2px] w-48 sm:w-72 bg-[#250836]" />
              <span className="h-[2px] w-12 bg-[#DFC06A]" />
            </div>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: '01', name: 'Arjun Menon', role: 'Software Developer', img: '/assets/jcs_dev_01.jpg' },
            { num: '02', name: 'Ananya Krishnan', role: 'Software Developer', img: '/assets/jcs_dev_02.jpg' },
            { num: '03', name: 'Rohan Nair', role: 'Software Developer', img: '/assets/jcs_dev_03.jpg' },
            { num: '04', name: 'Meera Jose', role: 'Software Developer', img: '/assets/jcs_dev_04.jpg' },
            { num: '05', name: 'Karthik Varma', role: 'Software Developer', img: '/assets/jcs_dev_05.jpg' },
            { num: '06', name: 'Sneha Thomas', role: 'Software Developer', img: '/assets/jcs_dev_06.jpg' },
          ].map((member, idx) => (
            <RevealBlock
              key={member.num}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-white border border-[#DFC06A]/65 shadow-sm hover:shadow-xl transition-all group">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#FAF7F0]">
                  <img
                    src={member.img}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3.5 bg-[#FCF9F2] border-t border-amber-100 flex items-center gap-3.5">
                  <span className="text-sm font-bold text-[#A87627] shrink-0">
                    {member.num}
                  </span>
                  <span className="h-7 w-[1px] bg-[#DFC06A]/70 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-bold font-['Playfair_Display',serif] text-[#250836] truncate">
                      {member.name}
                    </div>
                    <div className="text-xs text-slate-600">{member.role}</div>
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </div>
  );
};
