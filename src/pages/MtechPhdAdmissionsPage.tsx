import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Compass,
  Cpu,
  FlaskConical,
  GraduationCap,
  Layers,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AdmissionsSubNav } from '../components/AdmissionsSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

const PG_PROGRAMMES = [
  {
    code: 'M.Tech',
    title: 'Power Electronics & Power Systems',
    dept: 'Electrical & Electronics Engineering',
    duration: '2 Years (4 Semesters)',
    intake: '18 Seats',
    desc: 'Advanced postgraduate research in smart grids, electric vehicle drives, high-efficiency converters, and renewable microgrids.',
    icon: Cpu,
  },
  {
    code: 'M.Tech',
    title: 'Computer Science & Engineering',
    dept: 'Computer Science & Engineering',
    duration: '2 Years (4 Semesters)',
    intake: '18 Seats',
    desc: 'Deep specialization in machine learning, cloud architecture, cybersecurity, and distributed high-performance systems.',
    icon: Layers,
  },
  {
    code: 'Ph.D.',
    title: 'KTU Approved Research Centre',
    dept: 'CSE • ECE • EEE • Mechanical',
    duration: 'Full-Time & Part-Time Tracks',
    intake: 'Research Scholars',
    desc: 'Doctoral research guided by 25+ KTU-approved supervisors with full access to TATA IIIC, MIT FabLab, and sponsored R&D labs.',
    icon: FlaskConical,
  },
];

const RESEARCH_FELLOWSHIPS = [
  {
    badge: 'GATE Qualified',
    title: 'AICTE PG Scholarship & Stipend',
    desc: 'Valid GATE qualifiers admitted to M.Tech programmes are eligible for monthly AICTE PG scholarship support and research travel grants.',
  },
  {
    badge: 'Institutional Grant',
    title: 'Teaching & Lab Assistantships',
    desc: 'Meritorious M.Tech and full-time Ph.D. scholars receive institutional assistantships, patent filing support, and IEEE/Springer publication funding.',
  },
  {
    badge: 'Industry Co-Guidance',
    title: 'TATA IIIC & Industry Theses',
    desc: 'Opportunity to execute live industrial dissertations in partnership with Tata Technologies, TCS, and incubated startups at Jyothi TBI.',
  },
];

export const MtechPhdAdmissionsPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<number>(0);
  const activeTrack = PG_PROGRAMMES[selectedTrack] ?? PG_PROGRAMMES[0];

  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      <AdmissionsSubNav activeRoute="mtech-phd-admissions" onNavigate={onNavigate} />

      {/* Editorial Header + 3-Column Bento Research Showcase */}
      <section className="relative w-full overflow-x-clip pt-7 sm:pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Top Editorial Header Row */}
          <RevealBlock direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
              <div className="lg:col-span-7 space-y-2.5 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5C3A14]">
                    Postgraduate &amp; Doctoral Admissions
                  </span>
                  <span className="hidden sm:block h-[1px] flex-1 max-w-[140px] bg-[#DFC06A]/80" />
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#250836] leading-[1.06] font-['Playfair_Display',serif]">
                  M.Tech &amp; Ph.D.{' '}
                  <span className="italic font-bold text-[#C79628]">
                    at Jyothi.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 lg:border-l lg:border-[#DFC06A]/65 lg:pl-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Advance into specialized engineering research with KTU-approved doctoral guides, GATE fellowships, and interdisciplinary laboratories.
                </p>
              </div>
            </div>
          </RevealBlock>

          {/* 3-Column Bento Grid: Lab Photo | Explore Programmes Accordion | Dark Purple CTA Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Full-Height Lab Photo */}
            <div className="lg:col-span-4">
              <RevealBlock direction="left" className="h-full">
                <div className="h-full min-h-[260px] lg:min-h-[340px] rounded-2xl overflow-hidden border border-[#DFC06A]/55 shadow-lg bg-[#210532]">
                  <img
                    src="/assets/admissions_mtech_hero.jpg"
                    alt="M.Tech and Ph.D. research laboratory at Jyothi Engineering College"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </RevealBlock>
            </div>

            {/* Middle Explore Programmes Accordion */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              <RevealBlock direction="up" delay={100}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                      Explore programmes
                    </h2>
                    <span className="h-[1px] flex-1 bg-[#DFC06A]/70" />
                  </div>

                  <div className="space-y-2.5">
                    {PG_PROGRAMMES.map((prog, idx) => {
                      const isActive = selectedTrack === idx;
                      const numLabel = `0${idx + 1}`;
                      return (
                        <div
                          key={prog.title}
                          className={`rounded-2xl overflow-hidden border transition-all ${
                            isActive
                              ? 'border-[#250836] bg-white shadow-md'
                              : 'border-[#DFC06A]/65 bg-white/90 hover:bg-white'
                          }`}
                        >
                          <button
                            onClick={() => setSelectedTrack(idx)}
                            className={`w-full px-4 py-3 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer ${
                              isActive
                                ? 'bg-[#250836] text-[#FDE68A]'
                                : 'text-[#250836] hover:bg-[#FAF7F0]'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className={`text-xs font-bold shrink-0 ${
                                  isActive ? 'text-[#DFC06A]' : 'text-[#A87627]'
                                }`}
                              >
                                {numLabel}
                              </span>
                              <span
                                className={`h-3.5 w-[1px] shrink-0 ${
                                  isActive ? 'bg-white/25' : 'bg-[#DFC06A]/60'
                                }`}
                              />
                              <span className="text-xs sm:text-sm font-bold truncate">
                                {prog.code}: {prog.title.split(' ').slice(0, 2).join(' ')}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 shrink-0" />
                          </button>

                          {isActive && (
                            <div className="p-4 space-y-1.5 bg-white">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs sm:text-sm font-bold font-['Playfair_Display',serif] text-[#250836]">
                                  {prog.title}
                                </span>
                                <span className="text-[11px] font-bold text-[#A87627] shrink-0">
                                  {prog.intake}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {prog.desc}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Dark Royal Purple Research Admissions CTA Card */}
            <div className="lg:col-span-3">
              <RevealBlock direction="right" delay={160} className="h-full">
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#34094E] via-[#250836] to-[#190327] text-white p-6 border border-[#DFC06A]/55 shadow-xl flex flex-col justify-between overflow-hidden space-y-5">
                  <div className="space-y-3 relative z-10">
                    <span className="block w-8 h-[2px] bg-[#DFC06A]" />
                    <h2 className="text-2xl font-black font-['Playfair_Display',serif] leading-tight">
                      Research Admissions{' '}
                      <span className="italic font-bold text-[#DFC06A] block">
                        at Jyothi.
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-2.5 relative z-10">
                    <button
                      onClick={onOpenApply}
                      className="w-full justify-center px-4 py-2.5 rounded-full bg-gradient-to-r from-[#E5C672] to-[#C89632] hover:brightness-105 text-[#210532] font-bold text-xs shadow-md inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Apply for PG / Ph.D.</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigate('research')}
                      className="w-full justify-center px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-[#DFC06A]/65 inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Explore Research Centres</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>

          {/* Bottom 3-Column Feature Strip */}
          <RevealBlock direction="up" delay={180}>
            <div className="pt-2 border-t border-amber-200/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:divide-x sm:divide-[#DFC06A]/55">
              <div className="py-2 sm:px-4">
                <div className="text-xl sm:text-2xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  GATE Stipend
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">AICTE Eligible</div>
              </div>
              <div className="py-2 sm:px-4">
                <div className="text-xl sm:text-2xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  KTU Centre
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">25+ Ph.D. Guides</div>
              </div>
              <div className="py-2 sm:px-4">
                <div className="text-xl sm:text-2xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  TATA IIIC
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">Industry Theses</div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Warm Cream 4-Column Stat Strip */}
      <section className="bg-white/80 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
          <RevealBlock direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:divide-x lg:divide-[#DFC06A]/55">
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  2 Streams
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">M.Tech Specializations</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  KTU Hub
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Approved Ph.D. Centre</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  GATE
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Stipend &amp; Assistantships</div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  25+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Doctoral Supervisors</div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <RevealBlock direction="up">
          <div className="flex items-center gap-4">
            <span className="h-[1px] flex-1 bg-amber-300/80" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
              Postgraduate &amp; Doctoral Tracks
            </h2>
            <span className="h-[1px] flex-1 bg-amber-300/80" />
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PG_PROGRAMMES.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <RevealBlock
                key={prog.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 110}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#250836] text-[#FDE68A]">
                        {prog.code} &bull; {prog.intake}
                      </span>
                      <Icon className="w-5 h-5 text-[#A87627]" />
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {prog.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#A87627]">
                      {prog.dept} &bull; {prog.duration}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{prog.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between text-[11px] font-semibold text-[#5C3A14]">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#A87627]" />
                      60% B.Tech / GATE Eligible
                    </span>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* Fellowships & Research Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        <RevealBlock direction="up">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5C3A14] bg-[#FBF2DC] px-3 py-1 rounded-full border border-[#DFC06A]">
              <Award className="w-3.5 h-3.5 text-[#A87627]" />
              Scholarships &amp; Fellowships
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
              Research Funding &amp; Assistantships
            </h2>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_FELLOWSHIPS.map((item, idx) => (
            <RevealBlock
              key={item.title}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 120}
              className="h-full"
            >
              <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-3">
                <span className="inline-block text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </div>
  );
};

