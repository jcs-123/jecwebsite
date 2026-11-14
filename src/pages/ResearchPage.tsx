import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate?: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

const RESEARCH_TABS = [
  { route: 'research', label: 'Research & Innovation' },
  { route: 'tata-iiic', label: 'TATA IIIC' },
  { route: 'jyothi-consultancy', label: 'Jyothi Consultancy Services' },
  { route: 'mit-fablab', label: 'MIT FabLab Kerala' },
  { route: 'jyothi-tbi', label: 'Jyothi TBI Incubator' },
];

const AREAS_OF_INQUIRY = [
  {
    title: 'AI & Computing',
    image: '/assets/club_coding.jpg',
    desc: 'Exploring intelligent systems, data-driven methods and next-generation computing solutions for real-world applications.',
  },
  {
    title: 'Energy & Sustainability',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=900&auto=format&fit=crop',
    desc: 'Advancing clean energy, resource efficiency and sustainable engineering practices for a more resilient and greener tomorrow.',
  },
  {
    title: 'Advanced Engineering',
    image: '/assets/club_ieee.jpg',
    desc: 'Developing innovative materials, intelligent systems and engineering solutions that enhance performance, safety and reliability.',
  },
];

export const ResearchPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const scrollToAreas = () => {
    const el = document.getElementById('research-areas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      {/* Sub-Navigation Pills */}
      {onNavigate && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-white border border-amber-200/70 shadow-2xs">
            {RESEARCH_TABS.map((tab) => (
              <button
                key={tab.route}
                onClick={() => onNavigate(tab.route)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  tab.route === 'research'
                    ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                    : 'text-[#250836] hover:bg-amber-50/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Unique Split Editorial Hero: Left Content + Right Architectural Image Frame */}
      <section className="relative w-full overflow-x-clip pt-6 sm:pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Content */}
            <div className="lg:col-span-6">
              <RevealBlock direction="left">
                <div className="space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-white border border-[#DFC06A]/80 text-[#5C3A14] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] shadow-xs">
                      Research Overview
                    </span>
                    <span className="hidden sm:block h-[1px] w-20 bg-[#DFC06A]/80" />
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#250836] leading-[1.08] font-['Playfair_Display',serif]">
                    Research that{' '}
                    <span className="italic font-bold text-[#A87627] block sm:inline">
                      shapes tomorrow.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-lg">
                    Driven by inquiry, collaboration and engineering for a better future across interdisciplinary laboratories and industry-backed centres.
                  </p>

                  <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={scrollToAreas}
                      className="w-full sm:w-auto justify-center px-6 py-2.5 sm:py-3 rounded-full bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-md border border-[#D4A346]/70 inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Explore Research Areas</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {onNavigate && (
                      <button
                        onClick={() => onNavigate('tata-iiic')}
                        className="w-full sm:w-auto justify-center px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-[#FAF5EB] text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/40 shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Explore TATA IIIC</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Unique Asymmetric Double-Framed Engineering Lab Showcase */}
            <div className="lg:col-span-6 lg:pl-4">
              <RevealBlock direction="right" delay={140}>
                <div className="relative">
                  {/* Offset Gold & Purple Geometric Backdrop Frame */}
                  <div
                    aria-hidden="true"
                    className="hidden sm:block absolute -top-3 right-0 lg:-right-2 w-[94%] h-full rounded-tl-[4.5rem] rounded-tr-3xl rounded-br-[4.5rem] rounded-bl-3xl border-2 border-[#DFC06A]/80 bg-gradient-to-br from-[#29073D]/8 to-[#DFC06A]/10 z-0"
                  />

                  {/* Main Asymmetric Framed Image */}
                  <div className="relative z-10 rounded-tl-[2.5rem] sm:rounded-tl-[4.5rem] rounded-tr-2xl sm:rounded-tr-3xl rounded-br-[2.5rem] sm:rounded-br-[4.5rem] rounded-bl-2xl sm:rounded-bl-3xl overflow-hidden border border-[#DFC06A]/75 shadow-2xl bg-[#210532] aspect-[16/10]">
                    <img
                      src="/assets/club_ieee.jpg"
                      alt="Engineering research, electronics, and robotics laboratory at Jyothi"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#210532]/70 via-transparent to-transparent pointer-events-none" />

                    {/* Top-Right Dark Purple Accent Pill */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#29073D]/90 border border-[#DFC06A]/70 text-[#FDE68A] text-[11px] font-semibold tracking-wide backdrop-blur-xs shadow-md">
                      Interdisciplinary Labs
                    </div>

                    {/* Bottom-Left Editorial Tagline */}
                    <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3 text-[#FDE68A] text-xs sm:text-sm font-['Playfair_Display',serif] italic">
                      <span className="h-[1px] w-8 bg-[#DFC06A]/80" />
                      <span>Curiosity &bull; Collaboration &bull; Impact</span>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Cream 4-Column Pillar Strip */}
      <section className="bg-white/80 border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
          <RevealBlock direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:divide-x lg:divide-[#DFC06A]/55">
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-xl sm:text-2xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  Curiosity
                </div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-xl sm:text-2xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  Collaboration
                </div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-xl sm:text-2xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  Innovation
                </div>
              </div>
              <div className="py-1 sm:py-0 lg:px-4">
                <div className="text-xl sm:text-2xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  Impact
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Research at Jyothi Split Statement */}
      <section className="border-y border-amber-200/70 bg-white/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <RevealBlock direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
                  Research at Jyothi
                </h2>
                <div className="w-12 h-[2px] bg-[#D4A346] rounded-full" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">
                  A vibrant and inclusive research environment that encourages original thinking, interdisciplinary learning and the application of engineering knowledge to meaningful challenges.
                </p>
              </div>

              <div className="lg:col-span-6 lg:border-l lg:border-[#DFC06A]/70 lg:pl-10">
                <p className="text-xl sm:text-2xl font-['Playfair_Display',serif] italic text-[#250836] leading-relaxed">
                  Rooted in curiosity, strengthened by collaboration and focused on real-world impact.
                </p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Areas of Inquiry */}
      <section
        id="research-areas"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 space-y-8"
      >
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
            Areas of Inquiry
          </h2>
          <div className="w-12 h-[2px] bg-[#D4A346] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AREAS_OF_INQUIRY.map((area, idx) => (
            <RevealBlock
              key={area.title}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 120}
              className="h-full"
            >
              <div className="h-full rounded-2xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group">
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-2.5 flex-1">
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* Collaborate. Discover. Create. CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <RevealBlock direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#210532] via-[#2E0946] to-[#170221] text-white border border-[#D4A346]/45 shadow-2xl px-7 py-9 sm:px-10 sm:py-11 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 600 220"
              preserveAspectRatio="none"
              className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
            >
              <path
                d="M120,220 C220,120 340,180 600,30"
                fill="none"
                stroke="#DFC06A"
                strokeWidth="1.5"
              />
              <path
                d="M180,220 C310,90 420,150 600,80"
                fill="none"
                stroke="#DFC06A"
                strokeWidth="1"
              />
            </svg>

            <div className="relative z-10 space-y-3 max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif]">
                Collaborate. Discover. Create.
              </h2>
              <div className="w-12 h-[2px] bg-[#D4A346] rounded-full" />
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Partner with us to explore ideas, solve real-world challenges and create meaningful engineering solutions.
              </p>
            </div>

            <button
              onClick={onOpenApply}
              className="relative z-10 px-6 py-3.5 rounded-xl bg-[#DFC06A] text-[#250836] font-extrabold text-xs sm:text-sm shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2 self-start md:self-center shrink-0 cursor-pointer"
            >
              <span>Research Enquiries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </RevealBlock>
      </section>
    </div>
  );
};
