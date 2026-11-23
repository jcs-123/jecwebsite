import React, { useState } from 'react';
import {
  Headphones, Mic, Globe2, MessageSquare, CheckCircle2, Award
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

const LAB_MODULES = [
  {
    id: 'phonetics',
    label: 'Phonetics & Accent',
    title: 'Interactive Phonetics & Neutral Accent Studio',
    desc: 'Equipped with digital audio-comparison consoles, waveform pitch analyzers, and individual acoustic headsets for mastering articulation, stress, and intonation.',
    highlights: ['Real-Time Voice Waveform Feedback', 'IPA Phonetic Drill Library', 'One-on-One Faculty Monitoring'],
    icon: Mic,
  },
  {
    id: 'placement',
    label: 'GD & Interviews',
    title: 'Corporate Communication & Placement Readiness',
    desc: 'Simulated Group Discussion arenas, mock HR/technical interview recording pods, and executive presentation coaching tailored for Tier-1 campus recruiters.',
    highlights: ['Mock Interview Video Playback', 'GD Moderator & Rubric Scoring', 'Resume & Elevator Pitch Lab'],
    icon: MessageSquare,
  },
  {
    id: 'global',
    label: 'Global Certifications',
    title: 'IELTS, BEC & Foreign Language Modules',
    desc: 'Structured preparatory tracks aligned with CEFR (A1–C2) benchmarks, Cambridge Business English Certificate (BEC), and introductory German/Japanese modules.',
    highlights: ['CEFR-Aligned Listening Labs', 'Cambridge BEC Practice Suites', 'Technical Writing & Documentation'],
    icon: Globe2,
  },
];

export const LanguageLabPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = LAB_MODULES[activeTab] ?? LAB_MODULES[0];
  const Icon = current.icon;

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="language-lab" onNavigate={onNavigate} />

      {/* Premium Warm Cream Split Showcase Hero */}
      <section className="relative py-8 sm:py-12 bg-[#FAF7F0] overflow-hidden">
        {/* Subtle Gold Soundwave SVG Accent */}
        <svg
          viewBox="0 0 320 120"
          className="hidden lg:block absolute right-0 top-24 w-72 h-28 opacity-45 pointer-events-none"
          fill="none"
        >
          {[0, 6, 12, 18, 24, 30].map((offset) => (
            <path
              key={offset}
              d={`M 0 ${70 + offset * 0.4} C 60 ${20 + offset}, 110 ${105 - offset * 0.5}, 180 ${55 + offset * 0.6} C 240 ${15 + offset * 0.4}, 280 ${85 - offset * 0.3}, 320 ${45 + offset * 0.4}`}
              stroke="#DFC06A"
              strokeWidth="1"
            />
          ))}
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Framed Photo with Asymmetric Curved Plum Corner Accents */}
            <RevealBlock direction="left" className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#4B1040] overflow-hidden shadow-xl">
                <div className="relative rounded-tl-[84px] rounded-br-[84px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-[#DFC06A]/55 bg-[#250836] aspect-[4/4.2] sm:aspect-[4/4.3]">
                  <img
                    src="/assets/language_lab_hero.jpg"
                    alt="Students in Digital Language Lab"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </RevealBlock>

            {/* Right Editorial Content + Acoustic Banner + 2x2 Stats */}
            <RevealBlock direction="right" delay={80} className="lg:col-span-7 space-y-5">
              <div className="border-l-2 border-[#C79628] pl-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#4A2559]">
                  Communication &amp; Soft Skills
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.06]">
                Digital <span className="italic font-bold text-[#C79628]">Language Lab</span>
              </h1>

              <p className="text-sm sm:text-[15px] text-[#4A2559] leading-relaxed max-w-xl">
                A 60-console sound-insulated digital language studio designed to transform engineering undergraduates into articulate, globally confident communicators and placement-ready leaders.
              </p>

              <div>
                <button
                  onClick={() => onNavigate('placements')}
                  className="px-6 py-2.5 rounded-full bg-[#4B1040] hover:bg-[#32092A] text-white font-semibold text-xs sm:text-sm border border-[#DFC06A]/55 shadow-sm transition-colors cursor-pointer"
                >
                  Placement Training
                </button>
              </div>

              {/* Dark Plum Acoustic Studio Banner */}
              <div className="rounded-2xl bg-[#4B1040] text-white px-5 py-4 border border-[#DFC06A]/40 shadow-md flex items-center gap-4 relative overflow-hidden">
                <svg
                  viewBox="0 0 180 72"
                  className="absolute right-0 inset-y-0 h-full w-40 opacity-25 pointer-events-none"
                  fill="none"
                >
                  {[0, 5, 10, 15, 20].map((o) => (
                    <path
                      key={o}
                      d={`M 0 ${62 - o} C 45 ${48 - o * 0.6}, 90 ${20 + o * 0.4}, 180 ${12 + o}`}
                      stroke="#DFC06A"
                      strokeWidth="1"
                    />
                  ))}
                </svg>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#DFC06A] shrink-0 relative z-10">
                  <Headphones size={20} />
                </div>
                <div className="border-l border-[#DFC06A]/45 pl-4 relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFC06A]">
                    Acoustic Studio
                  </div>
                  <div className="text-sm sm:text-base font-['Playfair_Display',serif] font-semibold text-white">
                    60 Individual Audio-Visual Consoles
                  </div>
                </div>
              </div>

              {/* 2x2 Stat Grid */}
              <div className="grid grid-cols-2 pt-2">
                <div className="py-3 pr-4 border-b border-r border-[#DFC06A]/40">
                  <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                    <AnimatedCounter end={60} suffix="+" />
                  </div>
                  <div className="text-xs font-medium text-[#4A2559] mt-0.5">Digital Consoles</div>
                </div>
                <div className="py-3 pl-5 border-b border-[#DFC06A]/40">
                  <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                    <AnimatedCounter end={20} suffix="" />
                  </div>
                  <div className="text-xs font-medium text-[#4A2559] mt-0.5">Acoustic GD Booths</div>
                </div>
                <div className="py-3 pr-4 border-r border-[#DFC06A]/40">
                  <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                    CEFR
                  </div>
                  <div className="text-xs font-medium text-[#4A2559] mt-0.5">Global Proficiency Track</div>
                </div>
                <div className="py-3 pl-5">
                  <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-black text-[#210532]">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-xs font-medium text-[#4A2559] mt-0.5">B.Tech Soft-Skills Integration</div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Interactive Training Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
              Curriculum Modules
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
              Interactive Communication Suites
            </h2>
          </div>

          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#DFC06A]/55 shadow-2xs overflow-x-auto no-scrollbar max-w-full">
            {LAB_MODULES.map((mod, idx) => (
              <button
                key={mod.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#250836] text-[#FDE68A]'
                    : 'text-[#250836] hover:bg-[#FAF7F0]'
                }`}
              >
                {mod.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#DFC06A]/45 p-7 sm:p-9 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/60 flex items-center justify-center text-[#C79628]">
                <Icon size={22} />
              </div>
              <h3 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                {current.title}
              </h3>
              <p className="text-sm text-[#4A2559] leading-relaxed">{current.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {current.highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#DFC06A]/55 text-xs font-semibold text-[#210532]"
                >
                  <CheckCircle2 size={13} className="text-[#C79628]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#250836] text-white rounded-3xl p-7 border border-[#DFC06A]/45 flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#DFC06A]">
                <Award size={14} /> Career Impact
              </span>
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold">
                Placement &amp; Higher Studies Advantage
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Dedicated weekly lab hours from Semester 1 through Semester 7 prepare every Jyothi student for global interviews, technical seminars, and international fellowships.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tata-iiic-seminar')}
              className="w-full py-3 rounded-xl bg-[#DFC06A] text-[#210532] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Explore TATA IIIC &amp; Seminar Halls →
            </button>
          </div>
        </div>

        {/* 4-Year Semester-Wise Communication Roadmap */}
        <div className="pt-6 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C79628]">
              Structured Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
              4-Year Communication &amp; Career Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                sem: 'Semesters 1 & 2',
                title: 'Phonetics & Fluency',
                desc: 'IPA articulation drills, listening comprehension, vocabulary building, and stage-fright elimination.',
              },
              {
                step: '02',
                sem: 'Semesters 3 & 4',
                title: 'Technical Writing',
                desc: 'IEEE report structuring, email etiquette, executive summaries, and analytical presentation delivery.',
              },
              {
                step: '03',
                sem: 'Semesters 5 & 6',
                title: 'GD & Leadership',
                desc: 'Moderated group discussions, debate panels, negotiation role-plays, and Cambridge BEC preparation.',
              },
              {
                step: '04',
                sem: 'Semesters 7 & 8',
                title: 'Interview Mastery',
                desc: 'Recorded mock HR & technical interviews, IELTS/GRE speaking practice, and corporate onboarding polish.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-white border border-[#DFC06A]/45 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-['Playfair_Display',serif] font-black text-[#C79628]">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F0] border border-[#DFC06A]/55 text-[10px] font-bold text-[#210532]">
                      {item.sem}
                    </span>
                  </div>
                  <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A2559] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

