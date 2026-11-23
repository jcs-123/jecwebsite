import React from 'react';
import {
  Rocket, CheckCircle2, Award, Users, ShieldCheck, ArrowRight
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

export const TbiPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="tbi" onNavigate={onNavigate} />

      {/* Editorial Horizontal Header + Curved Showcase Hero */}
      <section className="py-8 sm:py-12 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Top 3-Part Header Row */}
          <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-5 space-y-2">
              <div className="border-l-2 border-[#C79628] pl-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#4A2559]">
                  Technology Business Incubator
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.06]">
                Jyothi TBI <span className="italic font-bold text-[#C79628]">Startup Hub</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#DFC06A]/55 lg:pl-6">
              <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                Recognized by Kerala Startup Mission (KSUM) &amp; MSME, Jyothi Technology Business Incubator supports student and alumni founders from prototype validation to market launch.
              </p>
            </div>

            <div className="lg:col-span-2 flex lg:justify-end">
              <button
                onClick={() => onNavigate('fab-lab')}
                className="px-5 py-2.5 rounded-full bg-[#360E44] hover:bg-[#210532] text-white font-semibold text-xs inline-flex items-center gap-2 shadow-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Explore MIT Fab Lab</span>
                <ArrowRight size={14} className="text-[#DFC06A]" />
              </button>
            </div>
          </RevealBlock>

          {/* Main 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Sweeping Curved-Top-Left Startup Photo */}
            <RevealBlock direction="left" className="lg:col-span-6">
              <div className="rounded-tl-[110px] sm:rounded-tl-[140px] rounded-tr-3xl rounded-b-3xl overflow-hidden border border-[#DFC06A]/45 shadow-xl bg-[#250836] h-64 sm:h-80 lg:h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Jyothi TBI Startup Co-working Space"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </RevealBlock>

            {/* Right Founder Support + Warm Sand Stat Bar */}
            <RevealBlock direction="right" delay={100} className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#210532] whitespace-nowrap">
                  Founder Support
                </h2>
                <span className="h-[1px] flex-1 bg-[#DFC06A]/60" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  'KSUM IEDC & MSME Incubation',
                  'Dedicated Co-Working & Pitch Arena',
                  'Patent & IP Commercialization Cell',
                  'Seed Grant & Prototype Funding',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full border border-[#DFC06A] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-[#C79628]" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#210532] leading-snug">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#F3ECE0] border border-[#DFC06A]/45 p-5 sm:p-6 grid grid-cols-3 gap-3 items-center text-center divide-x divide-[#DFC06A]/45">
                <div>
                  <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <div className="text-[11px] font-medium text-[#4A2559] mt-1">Startups</div>
                </div>
                <div className="pl-2">
                  <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                    <AnimatedCounter end={40} suffix="+" />
                  </div>
                  <div className="text-[11px] font-medium text-[#4A2559] mt-1">Patents Filed</div>
                </div>
                <div className="pl-2">
                  <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                    MSME
                  </div>
                  <div className="text-[11px] font-medium text-[#4A2559] mt-1">Host Institute</div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Incubation Pillars */}
      <section className="py-12 bg-white border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Rocket,
              title: 'Venture Acceleration',
              desc: 'Structured mentorship cohorts guiding student teams through customer discovery, MVP design, and investor pitch decks.',
            },
            {
              icon: Award,
              title: 'IPR & Patent Assistance',
              desc: 'Dedicated patent facilitation desk helping innovators draft provisional and complete specifications with financial grant support.',
            },
            {
              icon: Users,
              title: 'Alumni & Angel Network',
              desc: 'Direct access to industry founders, KSUM innovation grants, and hardware prototyping inside the adjacent MIT-model Fab Lab.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/40 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532]">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C79628]">
                  <ShieldCheck size={13} /> KSUM &amp; MSME Supported
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

