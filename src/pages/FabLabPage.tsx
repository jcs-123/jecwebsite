import React, { useState } from 'react';
import {
  Wrench, Cpu, Zap, CheckCircle2, ArrowRight, PlayCircle, Box
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

const FAB_TOOLS = [
  {
    id: 'laser',
    label: 'Laser Cutters',
    title: 'Epilog & CO₂ Precision Laser Cutting',
    desc: 'High-speed vector cutting and raster engraving on acrylic, birch plywood, leather, and anodized aluminum for rapid enclosures and architectural models.',
    specs: ['0.01mm Positioning Precision', 'Acrylic, MDF & Wood', 'CAD-to-Cut in Minutes'],
  },
  {
    id: '3dprint',
    label: '3D Printers',
    title: 'FDM & Resin SLA Additive Manufacturing',
    desc: 'Multi-material industrial 3D printing farm supporting PLA, ABS, PETG, TPU, and high-detail engineering resins for functional mechanical prototypes.',
    specs: ['Dual-Extruder FDM Fleet', 'High-Res SLA Resin', 'Overnight Print Queue'],
  },
  {
    id: 'cnc',
    label: 'CNC & PCB',
    title: 'Roland MDX CNC Milling & Electronics Bench',
    desc: 'Precision desktop CNC routers for custom single/double-sided PCB fabrication alongside SMD reflow soldering stations, oscilloscopes, and logic analyzers.',
    specs: ['Custom PCB Milling', 'SMD Reflow & BGA Station', 'ShopBot Large-Format CNC'],
  },
];

export const FabLabPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate, onOpenTour }) => {
  const [selectedTool, setSelectedTool] = useState(0);
  const activeTool = FAB_TOOLS[selectedTool] ?? FAB_TOOLS[0];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="fab-lab" onNavigate={onNavigate} />

      {/* 3-Column MIT-Model Fab Lab Hero */}
      <section className="py-8 sm:py-12 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Intro Column */}
            <RevealBlock direction="left" className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DFC06A]/65 text-[#C79628] text-[10px] font-bold uppercase tracking-[0.18em]">
                <Wrench size={12} /> MIT-Model Maker Sanctuary
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.06]">
                  MIT-Model <span className="italic font-bold text-[#C79628]">Fab Lab</span>
                </h1>
                <div className="w-12 h-[1.5px] bg-[#DFC06A]" />
              </div>

              <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                A digital fabrication laboratory equipped with laser cutters, 3D printers, CNC routers and embedded electronics benches, where students turn classroom concepts into working hardware.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <button
                  onClick={onOpenTour}
                  className="px-5 py-2.5 rounded-full bg-[#360E44] hover:bg-[#210532] text-white font-semibold text-xs inline-flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <PlayCircle size={15} />
                  <span>Tour the Fab Lab</span>
                </button>
                <button
                  onClick={() => onNavigate('computer-center')}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FCF9F2] text-[#210532] font-semibold text-xs border border-[#DFC06A]/65 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Next: Computer Center</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </RevealBlock>

            {/* Center Framed Photo */}
            <RevealBlock delay={60} className="lg:col-span-6">
              <div className="rounded-3xl bg-white border border-[#DFC06A]/55 p-1.5 shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1743056586194-837401d75e0a?q=80&w=1100&auto=format&fit=crop"
                  alt="MIT-Model FabLab 3D Printing & Hardware Prototyping"
                  className="w-full h-64 sm:h-80 lg:h-[320px] object-cover rounded-[20px]"
                />
              </div>
            </RevealBlock>

            {/* Right Vertical Equipment Stack */}
            <RevealBlock direction="right" delay={120} className="lg:col-span-2">
              <div className="rounded-3xl bg-white border border-[#DFC06A]/50 px-4 py-3 shadow-sm divide-y divide-[#DFC06A]/35 flex flex-col justify-between">
                {[
                  { icon: Box, label: '3D Printing', idx: 1 },
                  { icon: Zap, label: 'Laser Cutting', idx: 0 },
                  { icon: Cpu, label: 'CNC & Electronics', idx: 2 },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = selectedTool === item.idx;
                  return (
                    <button
                      key={item.label}
                      onClick={() => setSelectedTool(item.idx)}
                      className="py-4 flex items-center gap-3 text-left group cursor-pointer"
                    >
                      <span
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#250836] text-[#DFC06A] border-[#250836]'
                            : 'bg-[#FAF7F0] text-[#C79628] border-[#DFC06A]/45 group-hover:border-[#C79628]'
                        }`}
                      >
                        <Icon size={17} />
                      </span>
                      <span className="text-xs font-bold text-[#210532] leading-tight">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Dark Purple 4-Stat Strip */}
      <section className="bg-[#250836] text-white border-y border-[#DFC06A]/45 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:divide-x lg:divide-white/15">
          <div>
            <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#DFC06A]">
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className="text-xs text-slate-200 mt-1">3D Printers &amp; Cutters</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#DFC06A]">
              MIT
            </div>
            <div className="text-xs text-slate-200 mt-1">CBA Standard Inventory</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#DFC06A]">
              <AnimatedCounter end={120} suffix="+" />
            </div>
            <div className="text-xs text-slate-200 mt-1">Annual Student Prototypes</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#DFC06A]">
              24/7
            </div>
            <div className="text-xs text-slate-200 mt-1">Hackathon Access</div>
          </div>
        </div>
      </section>

      {/* Interactive Equipment Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
              Hardware Arsenal
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
              Explore Fabrication Stations
            </h2>
          </div>

          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#DFC06A]/55 shadow-2xs overflow-x-auto no-scrollbar max-w-full">
            {FAB_TOOLS.map((tool, idx) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedTool === idx
                    ? 'bg-[#250836] text-[#FDE68A]'
                    : 'text-[#210532] hover:bg-[#FAF7F0]'
                }`}
              >
                {tool.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#DFC06A]/45 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C79628] uppercase tracking-wider">
              <Wrench size={15} /> Workstation Spotlight
            </div>
            <h3 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#210532]">
              {activeTool.title}
            </h3>
            <p className="text-sm text-[#4A2559] leading-relaxed">{activeTool.desc}</p>
          </div>
          <div className="lg:col-span-4 space-y-2.5 bg-[#FAF7F0] p-5 rounded-2xl border border-[#DFC06A]/35">
            {activeTool.specs.map((spec) => (
              <div key={spec} className="flex items-center gap-2 text-xs font-semibold text-[#210532]">
                <CheckCircle2 size={14} className="text-[#C79628] shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

