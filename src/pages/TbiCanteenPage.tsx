import React, { useState } from 'react';
import {
  Rocket, Utensils, Coffee, Lightbulb, CheckCircle2,
  ArrowRight, CreditCard, Sparkles
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

export const TbiCanteenPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate, onOpenTour }) => {
  const [activeWing, setActiveWing] = useState<'tbi' | 'canteen'>('tbi');

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="tbi-canteen" onNavigate={onNavigate} />

      {/* Dual-Wing Interactive Showcase */}
      <section className="py-10 sm:py-14 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C79628]">
                <Sparkles size={13} /> Entrepreneurship &amp; Campus Hospitality
              </span>
              <h1 className="text-3xl sm:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.08]">
                TBI &amp; <span className="italic font-bold text-[#C79628]">Campus Canteen</span>
              </h1>
            </div>

            {/* Interactive Wing Switcher */}
            <div className="inline-flex p-1.5 rounded-full bg-white border border-[#DFC06A]/60 shadow-2xs self-start">
              <button
                onClick={() => setActiveWing('tbi')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  activeWing === 'tbi' ? 'bg-[#250836] text-[#FDE68A]' : 'text-[#210532] hover:bg-[#FAF7F0]'
                }`}
              >
                <Rocket size={13} /> TBI Startup Hub
              </button>
              <button
                onClick={() => setActiveWing('canteen')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  activeWing === 'canteen' ? 'bg-[#250836] text-[#FDE68A]' : 'text-[#210532] hover:bg-[#FAF7F0]'
                }`}
              >
                <Utensils size={13} /> Campus Canteen
              </button>
            </div>
          </RevealBlock>

          {activeWing === 'tbi' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <RevealBlock direction="left" className="lg:col-span-7 bg-[#250836] text-white rounded-3xl p-7 sm:p-10 border border-[#DFC06A]/45 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#DFC06A]/45 text-[10px] font-bold uppercase tracking-wider text-[#DFC06A]">
                    <Lightbulb size={13} /> Technology Business Incubator
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-['Playfair_Display',serif] font-bold">
                    Nurturing Student Startups from Idea to Market
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Recognized by Kerala Startup Mission (KSUM) &amp; MSME, Jyothi TBI provides co-working pods, seed funding linkages, patent filing assistance, and direct mentorship from angel investors and alumni founders.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'KSUM IEDC & MSME Incubation',
                      'Dedicated Co-Working & Pitch Arena',
                      'Patent & IP Commercialization Cell',
                      'Seed Grant & Prototype Funding',
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-[#FDE68A]">
                        <CheckCircle2 size={14} className="shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('fab-lab')}
                    className="px-5 py-2.5 rounded-full bg-[#DFC06A] text-[#210532] font-bold text-xs hover:bg-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    Explore MIT Fab Lab <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={onOpenTour}
                    className="px-5 py-2.5 rounded-full bg-white/10 border border-white/25 text-white font-semibold text-xs hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Virtual Tour
                  </button>
                </div>
              </RevealBlock>

              <RevealBlock direction="right" delay={100} className="lg:col-span-5 flex flex-col gap-5">
                <div className="rounded-3xl overflow-hidden border border-[#DFC06A]/45 shadow-md h-60">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                    alt="Jyothi TBI Startup Co-working Space"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-3xl bg-white border border-[#DFC06A]/45 p-6 grid grid-cols-2 gap-4 items-center text-center">
                  <div>
                    <div className="text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                      <AnimatedCounter end={25} suffix="+" />
                    </div>
                    <div className="text-xs font-semibold text-[#4A2559] mt-1">Incubated Startups</div>
                  </div>
                  <div className="border-l border-[#DFC06A]/35">
                    <div className="text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                      <AnimatedCounter end={40} suffix="+" />
                    </div>
                    <div className="text-xs font-semibold text-[#4A2559] mt-1">Patents &amp; IP Filings</div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <RevealBlock direction="left" className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#DFC06A]/45 shadow-lg bg-white">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                  alt="Jyothi Campus Canteen and Coffee Hub"
                  className="w-full h-72 sm:h-full object-cover"
                />
              </RevealBlock>

              <RevealBlock direction="right" delay={100} className="lg:col-span-6 bg-white rounded-3xl border border-[#DFC06A]/45 p-7 sm:p-9 shadow-md flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#DFC06A]/55 text-[10px] font-bold uppercase tracking-wider text-[#C79628]">
                    <Coffee size={13} /> Hygienic Dining &amp; Café
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                    Central Campus Canteen &amp; Refreshment Lounge
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                    A vibrant, spacious dining courtyard serving wholesome South Indian, North Indian, and quick-bite snacks prepared in an FSSAI-compliant kitchen from 07:30 AM to 06:30 PM.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/35 flex items-center gap-3">
                      <CreditCard size={18} className="text-[#C79628] shrink-0" />
                      <div className="text-xs">
                        <div className="font-bold text-[#210532]">UPI &amp; Smart Card</div>
                        <div className="text-[#4A2559]">Zero-queue billing</div>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/35 flex items-center gap-3">
                      <Utensils size={18} className="text-[#C79628] shrink-0" />
                      <div className="text-xs">
                        <div className="font-bold text-[#210532]">250+ Seating</div>
                        <div className="text-[#4A2559]">Open &amp; shaded bays</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onOpenTour}
                  className="self-start px-6 py-3 rounded-full bg-[#250836] hover:bg-[#3B1047] text-white font-semibold text-xs inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  Tour Canteen &amp; TBI <ArrowRight size={14} />
                </button>
              </RevealBlock>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

