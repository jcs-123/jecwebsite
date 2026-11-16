import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BadgePercent,
  GraduationCap,
  Layers,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AdmissionsSubNav } from '../components/AdmissionsSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

const SCHOLARSHIP_SLABS = [
  {
    tier: 'Tier 01 • 100% Tuition Waiver',
    title: 'KEAM Top-Rank Excellence Grant',
    criteria: 'KEAM Rank ≤ 5,000 or 95%+ in +2 PCM',
    desc: 'Full tuition fee waiver across all 4 years subject to maintaining SGPA ≥ 8.0 in Autonomous semester examinations.',
    icon: Trophy,
  },
  {
    tier: 'Tier 02 • 50% Tuition Waiver',
    title: 'Archdiocesan & Merit Scholarship',
    criteria: 'KEAM Rank 5,001 – 12,000 or 90%+ PCM',
    desc: 'Substantial annual tuition concession backed by the Thrissur Archdiocese Education Trust for high-achieving entrants.',
    icon: Award,
  },
  {
    tier: 'Tier 03 • 25% Tuition Waiver',
    title: 'Jyothi Founder’s Merit Concession',
    criteria: 'KEAM Rank 12,001 – 20,000 or 85%+ PCM',
    desc: 'Direct institutional fee support for deserving students admitted under Management Merit quota.',
    icon: BadgePercent,
  },
  {
    tier: 'Govt • AICTE TFWS',
    title: 'Tuition Fee Waiver Scheme',
    criteria: 'KEAM Rank + Family Income Norms',
    desc: '5% supernumerary seats per branch under CEE Kerala allotment with 100% government-mandated tuition fee waiver.',
    icon: ShieldCheck,
  },
  {
    tier: 'Special Grant',
    title: 'Sports, Arts & Innovation Waiver',
    criteria: 'State / National Representation',
    desc: 'Dedicated concessions for state/national athletes, cultural laureates, and national science/hackathon awardees.',
    icon: Sparkles,
  },
  {
    tier: 'Continuation',
    title: 'Semester Topper & E-Grantz Support',
    criteria: 'Top 5% Branch Performers',
    desc: 'Ongoing merit awards for semester toppers plus guided assistance for State E-Grantz, MCM, and AICTE Pragati/Saksham.',
    icon: GraduationCap,
  },
];

export const MeritScholarshipsPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
}) => {
  const [selectedBand, setSelectedBand] = useState<'top' | 'high' | 'merit' | 'tfws'>('top');

  const BAND_RESULT: Record<
    'top' | 'high' | 'merit' | 'tfws',
    { waiver: string; title: string; note: string }
  > = {
    top: {
      waiver: '100% Tuition Fee Waiver',
      title: 'KEAM Top-Rank Excellence Grant',
      note: 'Renewable each year with SGPA ≥ 8.0 in Autonomous semester exams.',
    },
    high: {
      waiver: '50% Tuition Fee Waiver',
      title: 'Archdiocesan & Merit Scholarship',
      note: 'Supported by the Thrissur Archdiocese Education Trust.',
    },
    merit: {
      waiver: '25% Tuition Fee Waiver',
      title: 'Jyothi Founder’s Merit Concession',
      note: 'Applicable directly for Management Merit entrants.',
    },
    tfws: {
      waiver: '100% Govt Tuition Waiver',
      title: 'AICTE TFWS Supernumerary Seat',
      note: 'Allotted via CEE Kerala KEAM based on rank & family income norms.',
    },
  };

  const activeResult = BAND_RESULT[selectedBand];

  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      <AdmissionsSubNav activeRoute="merit-scholarships" onNavigate={onNavigate} />

      {/* Split Photo + Royal Purple Bento Showcase Hero */}
      <section className="relative w-full overflow-x-clip pt-5 sm:pt-7 pb-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DFC06A]/55 shadow-2xl grid grid-cols-1 lg:grid-cols-12 bg-[#2B0840]">
            {/* Left Full-Bleed Campus Students Photo */}
            <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]">
              <RevealBlock direction="left" className="h-full">
                <img
                  src="/assets/admissions_scholarships_hero.jpg"
                  alt="Jyothi Engineering College Scholarship Recipients"
                  className="w-full h-full object-cover object-center"
                />
              </RevealBlock>
            </div>

            {/* Right Deep Royal Purple Content Panel */}
            <div className="lg:col-span-6 relative p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#34094E] via-[#26063A] to-[#1B032B] text-white">
              <RevealBlock direction="right" delay={120}>
                <div className="space-y-4 text-left">
                  <span className="block w-10 h-[2px] bg-[#DFC06A]" />

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08]">
                    <span className="font-['Playfair_Display',serif] block text-white">
                      Merit Scholarships
                    </span>
                    <span className="font-['Playfair_Display',serif] italic font-bold text-[#FDE68A] block mt-0.5">
                      &amp; Fee Waivers.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
                    Rewarding academic brilliance, KEAM top rankers, and financial need through Archdiocesan grants, institutional waivers, and AICTE TFWS seats.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#DFC06A] to-[#F2D98D] text-[#210532] text-xs font-extrabold shadow-md">
                      ₹3+ Crores Yearly Grant Pool
                    </span>
                    <span className="text-xs italic text-amber-200/80 border-l border-white/25 pl-3">
                      Merit &amp; Need Verified
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                    <button
                      onClick={onOpenApply}
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#DFC06A] hover:bg-[#ebd082] text-[#210532] font-bold text-xs sm:text-sm shadow-lg inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Apply for Scholarship</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('admission-enquiry')}
                      className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-[#DFC06A]/65 inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Talk to Scholarship Desk</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Scholarship Pillars + Interactive Tier Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <RevealBlock direction="up">
          <div className="flex items-center gap-4">
            <span className="h-[1px] flex-1 bg-amber-300/80" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
              Scholarship Slabs &amp; Concessions
            </h2>
            <span className="h-[1px] flex-1 bg-amber-300/80" />
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: Trophy,
              title: 'Merit-based Scholarships',
              desc: 'Rewarding KEAM top rankers and +2 PCM high achievers across all 7 branches.',
            },
            {
              icon: Users,
              title: 'Need-based Support',
              desc: 'Archdiocesan & institutional financial aid for deserving students based on eligibility.',
            },
            {
              icon: Layers,
              title: 'Fee Waivers & Concessions',
              desc: 'Up to 100% tuition fee waivers plus AICTE TFWS, E-Grantz & Pragati assistance.',
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <RevealBlock key={pillar.title} direction="up" delay={idx * 90}>
                <div className="p-5 rounded-2xl bg-white border border-amber-200/80 shadow-xs flex items-start gap-4 h-full">
                  <div className="w-11 h-11 rounded-full bg-[#FBF2DC] border border-[#DFC06A]/65 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#A87627]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>

        {/* Interactive Scholarship Tier Estimator */}
        <RevealBlock direction="up">
          <div className="rounded-3xl bg-white border border-[#DFC06A]/65 shadow-md p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#A87627]">
                Quick Eligibility Estimator
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'top' as const, label: 'KEAM ≤ 5,000 / 95%+ PCM' },
                  { id: 'high' as const, label: 'KEAM 5k–12k / 90%+ PCM' },
                  { id: 'merit' as const, label: 'KEAM 12k–20k / 85%+ PCM' },
                  { id: 'tfws' as const, label: 'AICTE TFWS Quota' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedBand(opt.id)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                      selectedBand === opt.id
                        ? 'bg-[#250836] text-[#FDE68A] border-[#250836] shadow-sm'
                        : 'bg-[#FAF7F0] text-[#250836] border-amber-200 hover:bg-amber-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#250836] text-white px-5 py-4 border border-[#DFC06A]/60 lg:min-w-[320px]">
              <div className="text-xs font-bold text-[#DFC06A] uppercase tracking-wider">
                {activeResult.waiver}
              </div>
              <div className="text-base font-bold font-['Playfair_Display',serif] mt-0.5">
                {activeResult.title}
              </div>
              <div className="text-[11px] text-slate-200 mt-1">{activeResult.note}</div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* Scholarship Slabs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOLARSHIP_SLABS.map((slab, idx) => {
            const Icon = slab.icon;
            return (
              <RevealBlock
                key={slab.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 90}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                        {slab.tier}
                      </span>
                      <Icon className="w-5 h-5 text-[#A87627]" />
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {slab.title}
                    </h3>
                    <div className="text-xs font-bold text-[#250836] bg-[#FAF7F0] px-3 py-1.5 rounded-xl border border-amber-200/70">
                      {slab.criteria}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{slab.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between text-[11px] font-semibold text-[#A87627]">
                    <span>Auto-evaluated at Admission</span>
                    <button
                      onClick={onOpenApply}
                      className="text-[#250836] hover:text-[#A87627] font-bold inline-flex items-center gap-1 cursor-pointer"
                    >
                      Claim <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>
    </div>
  );
};

