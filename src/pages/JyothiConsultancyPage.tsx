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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-white border border-amber-200/70 shadow-2xs">
          {RESEARCH_TABS.map((tab) => (
            <button
              key={tab.route}
              onClick={() => onNavigate(tab.route)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                tab.route === 'jyothi-consultancy'
                  ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                  : 'text-[#250836] hover:bg-amber-50/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Dark-Royal-Purple Bento & Terminal Showcase Hero */}
      <section className="relative w-full overflow-x-clip pt-5 sm:pt-7 pb-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-[#210532] via-[#2B0840] to-[#170324] border border-[#DFC06A]/55 p-4 sm:p-10 lg:p-12 shadow-2xl overflow-hidden text-white">
            {/* Subtle Ambient Gold & Purple Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#DFC06A]/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#6E2594]/25 blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6">
                <RevealBlock direction="left">
                  <div className="space-y-5 text-left">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#DFC06A]/65 text-[#FDE68A] text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                        <span>JCS &bull; IT Services &amp; Consultancy</span>
                      </div>
                      <span className="hidden sm:block h-[1px] w-16 bg-[#DFC06A]/55" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08]">
                      <span className="font-['Playfair_Display',serif] block text-white">
                        Jyothi Consultancy
                      </span>
                      <span className="font-['Playfair_Display',serif] italic font-bold text-[#FDE68A] block mt-0.5">
                        Services (JCS).
                      </span>
                    </h1>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
                      Delivering software solutions, web and mobile applications, and IT consultancy for organisations.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Full-Stack Web', 'Mobile Apps', 'Cloud & ERP', 'IT Advisory'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/8 border border-white/15 text-xs font-medium text-amber-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                      <button
                        onClick={onOpenApply}
                        className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#DFC06A] hover:bg-[#ebd082] text-[#210532] font-bold text-xs sm:text-sm shadow-lg inline-flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Apply for Admissions</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onNavigate('tata-iiic')}
                        className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-[#DFC06A]/65 inline-flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Explore TATA IIIC</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </RevealBlock>
              </div>

              {/* Right VS Code IDE Showcase */}
              <div className="lg:col-span-6 relative">
                <RevealBlock direction="right" delay={140}>
                  <div className="rounded-2xl overflow-hidden border border-[#DFC06A]/50 bg-[#1E1E1E] shadow-2xl text-slate-200 font-mono">
                  {/* VS Code Title Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-[#323233] border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-300 truncate px-2">
                      jcs-platform &mdash; Visual Studio Code
                    </span>
                    <span className="text-[11px] font-bold text-[#DFC06A]">
                      &lt;/&gt;
                    </span>
                  </div>

                  {/* VS Code Workspace Body */}
                  <div className="flex min-h-[235px] sm:min-h-[285px]">
                    {/* Activity Bar */}
                    <div className="w-7 sm:w-9 bg-[#333333] border-r border-white/10 flex flex-col items-center py-2.5 sm:py-3 gap-3 sm:gap-3.5 text-slate-400 shrink-0">
                      <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Compact Explorer Sidebar (sm+) */}
                    <div className="hidden sm:flex flex-col w-36 bg-[#252526] border-r border-white/10 p-2.5 text-[10px] space-y-1.5 shrink-0">
                      <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold pb-1">
                        Explorer
                      </div>
                      <div className="text-slate-300 font-semibold">▾ JCS-PORTAL</div>
                      <div className="pl-2 text-[#FDE68A] bg-[#37373D] rounded px-1.5 py-0.5">
                        jcs.service.ts
                      </div>
                      <div className="pl-2 text-slate-400 px-1.5 py-0.5">
                        mobile.app.tsx
                      </div>
                      <div className="pl-2 text-slate-400 px-1.5 py-0.5">
                        cloud.config.json
                      </div>
                      <div className="pl-2 text-slate-400 px-1.5 py-0.5">
                        team.preview
                      </div>
                    </div>

                    {/* Editor Pane */}
                    <div className="flex-1 flex flex-col min-w-0 bg-[#1E1E1E]">
                      {/* Editor Tabs */}
                      <div className="flex items-center bg-[#252526] border-b border-white/10 text-[10px] overflow-x-auto">
                        <div className="px-3 py-1.5 bg-[#1E1E1E] text-[#FDE68A] border-t-2 border-[#DFC06A] whitespace-nowrap">
                          jcs.service.ts
                        </div>
                        <div className="px-3 py-1.5 text-slate-400 border-r border-white/5 whitespace-nowrap">
                          live-preview
                        </div>
                      </div>

                      {/* Code Header + Live Team Preview */}
                      <div className="px-3 py-2 text-[10px] leading-relaxed bg-[#1E1E1E] border-b border-white/10 text-slate-300 overflow-hidden">
                        <div>
                          <span className="text-[#C586C0]">export const</span>{' '}
                          <span className="text-[#DCDCAA]">deliverSolution</span>{' '}
                          <span className="text-slate-400">= () =&gt; (&#123;</span>{' '}
                          <span className="text-[#9CDCFE]">stack</span>:{' '}
                          <span className="text-[#CE9178]">'Web • Mobile • Cloud'</span>{' '}
                          <span className="text-slate-400">&#125;);</span>
                        </div>
                      </div>

                      <div className="relative flex-1 min-h-[175px] sm:min-h-[200px]">
                        <img
                          src="/assets/club_coding.jpg"
                          alt="Jyothi Consultancy Services IT and software engineering team"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/75 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-[#1E1E1E]/90 border border-[#DFC06A]/55 text-[#FDE68A] text-[10px] font-sans font-semibold backdrop-blur-xs">
                            Enterprise Software &amp; Consultancy
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* VS Code Status Bar */}
                  <div className="flex items-center justify-between px-3 py-1 bg-[#007ACC] text-white text-[10px] font-sans">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">main*</span>
                      <span>0 Errors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline">TypeScript React</span>
                      <span>UTF-8</span>
                    </div>
                  </div>
                </div>
                </RevealBlock>
              </div>
            </div>
          </div>

          {/* Rounded-Full 4-Column Capability Strip */}
          <div className="mt-6 sm:mt-7">
            <RevealBlock direction="up">
              <div className="rounded-2xl lg:rounded-full bg-white/90 border border-[#DFC06A]/50 shadow-sm px-3 sm:px-8 py-4 sm:py-5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center lg:divide-x lg:divide-[#DFC06A]/55">
                  <div className="py-1 sm:py-0 lg:px-4">
                    <div className="text-sm sm:text-lg font-black font-['Playfair_Display',serif] text-[#250836]">
                      Web Applications
                    </div>
                  </div>
                  <div className="py-1 sm:py-0 lg:px-4">
                    <div className="text-sm sm:text-lg font-black font-['Playfair_Display',serif] text-[#250836]">
                      Mobile Apps
                    </div>
                  </div>
                  <div className="py-1 sm:py-0 lg:px-4">
                    <div className="text-sm sm:text-lg font-black font-['Playfair_Display',serif] text-[#250836]">
                      Software Solutions
                    </div>
                  </div>
                  <div className="py-1 sm:py-0 lg:px-4">
                    <div className="text-sm sm:text-lg font-black font-['Playfair_Display',serif] text-[#250836]">
                      IT Consulting
                    </div>
                  </div>
                </div>
              </div>
            </RevealBlock>
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
    </div>
  );
};
