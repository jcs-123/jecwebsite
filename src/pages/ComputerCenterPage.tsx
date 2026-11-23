import React, { useState } from 'react';
import {
  Monitor, Wifi, ShieldCheck, CheckCircle2, ArrowRight
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

const COMPUTE_SUITES = [
  {
    id: 'ai',
    label: 'AI & GPU Nodes',
    title: 'Deep Learning & Data Science Compute Cluster',
    desc: 'High-memory workstations accelerated with NVIDIA RTX GPUs pre-configured with PyTorch, TensorFlow, CUDA, and JupyterHub for capstone AI & Robotics research.',
    highlights: ['NVIDIA GPU Acceleration', 'Linux & Windows Dual Boot', 'Datasets & Model Hosting'],
  },
  {
    id: 'cad',
    label: 'CAD & Simulation',
    title: 'Engineering Design, FEA & CFD Suites',
    desc: 'Licensed enterprise software including MATLAB, Simulink, ANSYS, AutoCAD, SolidWorks, and Xilinx Vivado for core mechanical, civil, EEE, and ECE projects.',
    highlights: ['ANSYS & SolidWorks Licenses', 'MATLAB & Simulink Toolboxes', 'VLSI & Embedded Compilers'],
  },
  {
    id: 'exam',
    label: 'Coding & Online Exams',
    title: 'Proctored Assessment & Competitive Coding Arena',
    desc: '500+ networked terminals powered by dual-ISP 1 Gbps fiber redundancy and online UPS backup for GATE mock tests, TCS CodeVita, and placement assessments.',
    highlights: ['1 Gbps Dual-ISP Fiber', 'Online Redundant UPS', 'Zero-Latency Exam LAN'],
  },
];

export const ComputerCenterPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate }) => {
  const [activeSuite, setActiveSuite] = useState(0);
  const suite = COMPUTE_SUITES[activeSuite] ?? COMPUTE_SUITES[0];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="computer-center" onNavigate={onNavigate} />

      {/* 3-Column Editorial Gallery Showcase Hero */}
      <section className="py-8 sm:py-12 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Framed Photo with Architectural Corner Brackets */}
            <RevealBlock direction="left" className="lg:col-span-5">
              <div className="relative p-2">
                <div className="hidden sm:block absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#3D0F3B] pointer-events-none" />
                <div className="hidden sm:block absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C79628] pointer-events-none" />
                <div className="overflow-hidden shadow-xl bg-[#1B0329] h-72 sm:h-80 lg:h-[400px]">
                  <img
                    src="/assets/computer_center_hero.jpg"
                    alt="Jyothi Central Computer Center Workstations"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </RevealBlock>

            {/* Center Editorial Content */}
            <RevealBlock delay={80} className="lg:col-span-4 space-y-5">
              <div className="border-l-2 border-[#C79628] pl-3.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#4A2559]">
                  Central Computing Facility
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.03]">
                  Central
                  <span className="block italic font-bold text-[#C79628] mt-0.5">
                    Computer Center
                  </span>
                </h1>
                <div className="w-12 h-[2px] bg-[#C79628]" />
              </div>

              <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                A high-speed, air-conditioned computing facility with 500+ workstations, GPU-accelerated AI clusters and 1 Gbps campus-wide fiber connectivity.
              </p>

              <div className="pt-1">
                <button
                  onClick={() => onNavigate('central-library')}
                  className="inline-flex items-center gap-2 pb-1.5 border-b border-[#C79628] text-xs font-bold text-[#210532] hover:text-[#C79628] transition-colors cursor-pointer"
                >
                  <span>Back to Digital Library</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </RevealBlock>

            {/* Right Deep Plum Stat Card */}
            <RevealBlock direction="right" delay={140} className="lg:col-span-3">
              <div className="rounded-2xl bg-[#3D0F3B] text-white p-6 sm:p-7 shadow-xl border border-[#DFC06A]/35 space-y-4">
                <div className="pb-4 border-b border-[#DFC06A]/35">
                  <div className="text-3xl font-['Playfair_Display',serif] font-bold text-[#DFC06A] leading-none">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-xs text-white/85 mt-1.5">Workstations</div>
                </div>

                <div className="pb-4 border-b border-[#DFC06A]/35">
                  <div className="text-3xl font-['Playfair_Display',serif] font-bold text-[#DFC06A] leading-none">
                    1 Gbps
                  </div>
                  <div className="text-xs text-white/85 mt-1.5">Leased Fiber</div>
                </div>

                <div className="pb-4 border-b border-[#DFC06A]/35">
                  <div className="text-3xl font-['Playfair_Display',serif] font-bold text-[#DFC06A] leading-none">
                    GPU
                  </div>
                  <div className="text-xs text-white/85 mt-1.5">AI/ML Cluster</div>
                </div>

                <div>
                  <div className="text-3xl font-['Playfair_Display',serif] font-bold text-[#DFC06A] leading-none">
                    100%
                  </div>
                  <div className="text-xs text-white/85 mt-1.5">UPS Redundancy</div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Interactive Software & Compute Suites */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
              Software &amp; Network Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
              Specialized Computing Environments
            </h2>
          </div>

          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#DFC06A]/55 shadow-2xs overflow-x-auto no-scrollbar max-w-full">
            {COMPUTE_SUITES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSuite(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeSuite === idx
                    ? 'bg-[#250836] text-[#FDE68A]'
                    : 'text-[#210532] hover:bg-[#FAF7F0]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#DFC06A]/45 p-7 sm:p-9 shadow-sm space-y-4">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/55 flex items-center justify-center text-[#C79628]">
              <Monitor size={21} />
            </div>
            <h3 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#210532]">
              {suite.title}
            </h3>
            <p className="text-sm text-[#4A2559] leading-relaxed">{suite.desc}</p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {suite.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#DFC06A]/55 text-xs font-semibold text-[#210532]"
                >
                  <CheckCircle2 size={13} className="text-[#C79628]" />
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#250836] text-white rounded-3xl p-7 border border-[#DFC06A]/45 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFC06A]">
                <Wifi size={15} /> Campus Network Ops
              </div>
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold">
                Firewall-Secured Gigabit Backbone
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Managed by dedicated Systems &amp; Network Engineers with LDAP single sign-on, Fortinet security, and cloud sandbox access for every student.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FDE68A]">
              <ShieldCheck size={15} /> Open 08:30 AM – 06:00 PM (Extended for Hackathons)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

