import React from 'react';
import {
  ArrowRight,
  Box,
  Cpu,
  Layers,
  Scissors,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { ResearchSubNav } from '../components/ResearchSubNav';
import { AnimatedCounter } from '../components/AnimatedCounter';

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

const FABLAB_EQUIPMENT = [
  {
    icon: Scissors,
    tag: 'Laser Fabrication',
    title: 'Epilog Precision Laser Cutters',
    desc: 'High-speed laser cutting and engraving for acrylic, wood, leather, and anodized enclosures for product housings and architectural models.',
  },
  {
    icon: Box,
    tag: 'Additive Manufacturing',
    title: 'Ultimaker & Resin 3D Printers',
    desc: 'Multi-material FDM and SLA 3D printing stations enabling rapid mechanical prototyping, functional gears, and ergonomic enclosures.',
  },
  {
    icon: Cpu,
    tag: 'Electronics & PCB',
    title: 'Precision PCB Milling & SMD Bench',
    desc: 'Roland Modela CNC PCB milling machines paired with reflow ovens, oscilloscopes, and SMD rework stations for custom circuit boards.',
  },
  {
    icon: Wrench,
    tag: 'Heavy Fabrication',
    title: 'ShopBot Large-Format CNC Router',
    desc: 'Full-sheet CNC woodworking and composite milling for modular furniture, drone frames, and robotics chassis.',
  },
  {
    icon: Layers,
    tag: 'Molding & Casting',
    title: 'Silicone Molding & Vinyl Plotting',
    desc: 'Precision vinyl cutters for flexible circuits and decals, alongside vacuum chambers for silicone and resin casting.',
  },
  {
    icon: Sparkles,
    tag: 'IoT & Robotics',
    title: 'Open-Source Embedded Workstations',
    desc: 'Dedicated microcontroller, sensor, and actuator testbeds for robotics competitions, smart agriculture, and assistive devices.',
  },
];

const MAKER_WORKFLOW = [
  {
    step: '01',
    title: 'Design & Digital CAD',
    desc: 'Students conceptualize solutions using Fusion 360, SolidWorks, or KiCad with guidance from trained FabLab technical staff.',
  },
  {
    step: '02',
    title: 'Rapid Hardware Fabrication',
    desc: 'Designs move directly from screen to laser cutters, 3D printers, CNC routers, and PCB mills within hours.',
  },
  {
    step: '03',
    title: 'Testing & Patent Readiness',
    desc: 'Working prototypes are validated for performance, showcased at hackathons, and supported for IP filing or Jyothi TBI incubation.',
  },
];

export const MitFabLabPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      {/* Sub-Navigation Pills */}
      <ResearchSubNav activeRoute="mit-fablab" onNavigate={onNavigate} />

      {/* Blueprint Editorial Hero: Left Slanted FabLab Photo + Right Content & Station Strip */}
      <section className="relative w-full overflow-x-clip bg-[#FCF9F2] pt-6 sm:pt-10 pb-8">
        {/* Subtle Blueprint Gear Watermark & 01 Number (Desktop) */}
        <div
          aria-hidden="true"
          className="hidden lg:block pointer-events-none select-none absolute top-4 right-8 text-[110px] font-['Playfair_Display',serif] italic font-bold text-[#DFC06A]/25 leading-none"
        >
          01
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          className="hidden lg:block pointer-events-none absolute bottom-10 -right-8 w-52 h-52 text-[#250836]/10"
        >
          <circle cx="60" cy="60" r="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
          <circle cx="60" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="60" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Slanted FabLab Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <RevealBlock direction="left">
                <div className="relative">
                  {/* Small Top-Left Purple Accent Tab */}
                  <div
                    aria-hidden="true"
                    className="hidden sm:block absolute -top-2.5 left-4 w-20 h-3 bg-[#250836] -skew-x-12 z-20"
                  />
                  <div className="relative rounded-2xl lg:rounded-none lg:rounded-l-2xl overflow-hidden aspect-[16/10] shadow-2xl border border-[#DFC06A]/65 lg:border-0 bg-[#190327] lg:[clip-path:polygon(0_0,100%_0,89%_100%,0_100%)]">
                    <img
                      src="/assets/fablab_kerala_hub.jpg"
                      alt="MIT FabLab Kerala rapid prototyping and 3D printing laboratory"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Bottom Gold Accent Bar */}
                  <div
                    aria-hidden="true"
                    className="hidden sm:block h-2 w-40 bg-[#C79628] mt-2 ml-6 -skew-x-12"
                  />
                </div>
              </RevealBlock>
            </div>

            {/* Right Editorial Content + 4-Station Strip */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <RevealBlock direction="right" delay={140}>
                <div className="space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5C3A14]">
                      Digital Fabrication / Rapid Prototyping
                    </span>
                    <span className="hidden sm:block h-[1px] w-16 bg-[#DFC06A]/80" />
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.06]">
                    <span className="font-['Playfair_Display',serif] block text-[#250836]">
                      MIT FabLab
                    </span>
                    <span className="font-['Playfair_Display',serif] italic font-bold text-[#C79628] block mt-0.5">
                      Kerala.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-lg">
                    Empowering students, makers, and researchers through digital fabrication and rapid prototyping in collaboration with MIT CBA and Kerala Startup Mission.
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
                      onClick={() => onNavigate('jyothi-tbi')}
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/55 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Explore Jyothi TBI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Integrated 4-Station Capability Bar */}
                  <div className="pt-2">
                    <div className="rounded-2xl bg-white/90 border border-[#DFC06A]/65 shadow-sm px-3 py-3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:divide-x sm:divide-[#DFC06A]/50">
                      {[
                        { icon: Box, label: '3D Printing' },
                        { icon: Scissors, label: 'Laser Cutting' },
                        { icon: Wrench, label: 'CNC Milling' },
                        { icon: Cpu, label: 'PCB Lab' },
                      ].map((station) => {
                        const Icon = station.icon;
                        return (
                          <div
                            key={station.label}
                            className="flex items-center justify-center gap-1.5 px-2 py-1 text-[#250836] text-xs font-bold"
                          >
                            <Icon className="w-4 h-4 text-[#A87627] shrink-0" />
                            <span>{station.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Royal Purple 4-Column Stat Strip */}
      <section className="bg-[#250836] text-white border-y border-[#DFC06A]/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
          <RevealBlock direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:divide-x lg:divide-white/15">
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-white">
                  MIT CBA
                </div>
                <div className="text-xs font-medium text-amber-100/85 mt-1">Global Fab Network</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-white">
                  <AnimatedCounter end={6} suffix="+ Stations" duration={1500} />
                </div>
                <div className="text-xs font-medium text-amber-100/85 mt-1">Digital Fabrication</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-white">
                  <AnimatedCounter end={50} suffix="+" duration={1600} />
                </div>
                <div className="text-xs font-medium text-amber-100/85 mt-1">Annual Prototypes</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-white">
                  KSUM
                </div>
                <div className="text-xs font-medium text-amber-100/85 mt-1">Supported Maker Hub</div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex items-center gap-4">
          <span className="h-[1px] flex-1 bg-amber-300/80" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
            Digital Fabrication &amp; Prototyping Machines
          </h2>
          <span className="h-[1px] flex-1 bg-amber-300/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FABLAB_EQUIPMENT.map((eq, idx) => {
            const Icon = eq.icon;
            return (
              <RevealBlock
                key={eq.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={(idx % 3) * 120}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                        {eq.tag}
                      </span>
                      <Icon className="w-5 h-5 text-[#A87627]" />
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {eq.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{eq.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-amber-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Open to Student Innovators</span>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* Maker Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            From Concept to Working Prototype
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Hands-on hardware creation integrated into autonomous B.Tech courses and student clubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MAKER_WORKFLOW.map((st, idx) => (
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

