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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-white border border-amber-200/70 shadow-2xs">
          {RESEARCH_TABS.map((tab) => (
            <button
              key={tab.route}
              onClick={() => onNavigate(tab.route)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                tab.route === 'mit-fablab'
                  ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                  : 'text-[#250836] hover:bg-amber-50/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Unique Reversed Workshop Bento Hero: Left Purple-Framed FabLab Showcase + Right Content */}
      <section className="relative w-full overflow-x-clip bg-[#FCF9F2] pt-6 sm:pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Dark-Purple & Gold Framed Workshop Card */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <RevealBlock direction="left">
                <div className="rounded-3xl bg-[#210532] p-3 sm:p-4 border border-[#DFC06A]/70 shadow-2xl space-y-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#190327]">
                    <img
                      src="/assets/club_iedc.jpg"
                      alt="MIT FabLab Kerala rapid prototyping and 3D printing laboratory"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#29073D]/90 border border-[#DFC06A]/70 text-[#FDE68A] text-[11px] font-semibold tracking-wide backdrop-blur-xs">
                      MIT CBA &bull; Digital Fabrication
                    </div>
                  </div>

                  {/* Integrated Workshop Capabilities Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-1 pb-1 text-center">
                    {['3D Printing', 'Laser Cutting', 'CNC Milling', 'PCB Lab'].map((station) => (
                      <div
                        key={station}
                        className="py-1.5 px-2 rounded-xl bg-[#2E0945] border border-[#DFC06A]/35 text-[#FDE68A] text-[11px] font-semibold tracking-wide"
                      >
                        {station}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Editorial Content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <RevealBlock direction="right" delay={140}>
                <div className="space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/85 border border-[#DFC06A]/70 text-[#3B1159] text-[11px] font-bold uppercase tracking-wider shadow-xs">
                      <span>MIT FabLab Kerala &bull; Rapid Prototyping</span>
                    </div>
                    <span className="hidden sm:block h-[1px] w-20 bg-[#DFC06A]/65" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08]">
                    <span className="font-['Playfair_Display',serif] block text-[#250836]">
                      MIT FabLab
                    </span>
                    <span className="font-['Playfair_Display',serif] italic font-bold text-[#C79628] block mt-0.5">
                      Kerala.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
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
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/40 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Explore Jyothi TBI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
                  MIT CBA
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Global Fab Network</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  6+ Stations
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Digital Fabrication</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  50+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Annual Prototypes</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  KSUM
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Supported Maker Hub</div>
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

