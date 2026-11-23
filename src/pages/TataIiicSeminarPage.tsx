import React, { useState } from 'react';
import {
  Presentation, Users, Sparkles, Monitor, Layers
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

const HALL_SPACES = [
  {
    id: 'main-seminar',
    name: 'Central AC Seminar Hall',
    capacity: '250 Seats',
    specs: '4K Laser Projection • Line-Array Audio • Live Stream Ready',
    use: 'National Symposia, Industry Keynotes & Placement Drives',
  },
  {
    id: 'tata-studio',
    name: 'TATA IIIC Innovation Studio',
    capacity: '80 Seats',
    specs: 'Modular Collaboration Pods • Industrial Automation Kits',
    use: 'TATA-Certified Skill Workshops & Product Design Sprints',
  },
  {
    id: 'dept-halls',
    name: 'Departmental Seminar Halls (4)',
    capacity: '120 Seats Each',
    specs: 'Interactive Smart Boards • Dual Projectors • Acoustic Panels',
    use: 'M.Tech Thesis Defenses, IEEE Chapter Talks & Hackathons',
  },
];

export const TataIiicSeminarPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate, onOpenTour }) => {
  const [selectedHall, setSelectedHall] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="tata-iiic-seminar" onNavigate={onNavigate} />

      {/* Centered Editorial Header + Alternating Horizontal Showcase Cards */}
      <section className="py-8 sm:py-12 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RevealBlock className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="h-[1px] w-10 bg-[#DFC06A]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C79628]">
                Industry &amp; Academic Conclave
              </span>
              <span className="h-[1px] w-10 bg-[#DFC06A]" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.08] mb-2.5">
              TATA IIIC &amp; <span className="italic font-bold text-[#C79628]">Seminar Halls</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
              Bridging industry innovation and academic exchange through hands-on learning and modern seminar spaces.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-[#DFC06A]/65" />
              <span className="w-2 h-2 rotate-45 border border-[#C79628]" />
              <span className="h-[1px] w-16 bg-[#DFC06A]/65" />
            </div>
          </RevealBlock>

          {/* Row 1: TATA IIIC Excellence Centre (Image Left, Text Right) */}
          <RevealBlock direction="up" delay={40}>
            <div className="rounded-3xl bg-white border border-[#DFC06A]/45 p-3 sm:p-4 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 h-56 sm:h-72 rounded-2xl overflow-hidden bg-[#250836]">
                <img
                  src="/assets/tata_iiic_lab.jpg"
                  alt="TATA IIIC Robotics and Smart Manufacturing Lab"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="lg:col-span-6 px-3 sm:px-5 py-2 space-y-5">
                <div className="border-l-2 border-[#C79628] pl-4">
                  <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                    TATA IIIC Excellence Centre
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                  Established in partnership with TATA Technologies, the centre supports hands-on learning in Industry 4.0, PLM, EV systems and smart manufacturing.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#DFC06A]/25">
                  <div className="flex items-center gap-2.5">
                    <Monitor size={18} className="text-[#C79628] shrink-0" />
                    <span className="text-xs font-semibold text-[#210532] leading-snug">
                      CAD, PLM &amp; Mechatronics
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Layers size={18} className="text-[#C79628] shrink-0" />
                    <span className="text-xs font-semibold text-[#210532] leading-snug">
                      Corporate Problem-Solving
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users size={18} className="text-[#C79628] shrink-0" />
                    <span className="text-xs font-semibold text-[#210532] leading-snug">
                      Faculty–Industry Mentorship
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>

          {/* Row 2: Air-Conditioned Seminar Halls (Text Left, Image Right) */}
          <RevealBlock direction="up" delay={100}>
            <div className="rounded-3xl bg-white border border-[#DFC06A]/45 p-3 sm:p-4 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 px-3 sm:px-6 py-3 space-y-5 order-2 lg:order-1">
                <div className="space-y-2">
                  <div className="border-l-2 border-[#C79628] pl-4">
                    <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                      Air-Conditioned Seminar Halls
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed pl-4">
                    Spaces for conferences, pre-placement talks and academic events.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#DFC06A]/35 text-center divide-x divide-[#DFC06A]/35">
                  <div className="px-2">
                    <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                      <AnimatedCounter end={6} suffix="+" />
                    </div>
                    <div className="text-[11px] font-medium text-[#4A2559] mt-0.5">Seminar Venues</div>
                  </div>
                  <div className="px-2">
                    <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                      <AnimatedCounter end={800} suffix="+" />
                    </div>
                    <div className="text-[11px] font-medium text-[#4A2559] mt-0.5">Combined Seats</div>
                  </div>
                  <div className="px-2">
                    <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                      4K
                    </div>
                    <div className="text-[11px] font-medium text-[#4A2559] mt-0.5">AV Projection</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 h-56 sm:h-72 rounded-2xl overflow-hidden bg-[#250836] order-1 lg:order-2">
                <img
                  src="/assets/seminar_hall_ac.jpg"
                  alt="Air-conditioned Seminar Hall at Jyothi"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Interactive Venue Selector */}
      <section className="py-12 bg-white border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
                Space Specifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                Venue Matrix
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {HALL_SPACES.map((h, i) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedHall(i)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedHall === i
                      ? 'bg-[#250836] text-[#FDE68A]'
                      : 'bg-[#FAF7F0] text-[#210532] border border-[#DFC06A]/50'
                  }`}
                >
                  {h.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/45 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center shrink-0">
                <Presentation size={22} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-[#C79628]">Selected Venue</div>
                <div className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532]">
                  {HALL_SPACES[selectedHall].name}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users size={18} className="text-[#C79628] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#210532]">{HALL_SPACES[selectedHall].capacity}</div>
                <div className="text-xs text-[#4A2559]">{HALL_SPACES[selectedHall].specs}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-[#C79628] shrink-0" />
              <div className="text-xs text-[#4A2559]">{HALL_SPACES[selectedHall].use}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TATA Technologies Industry 4.0 Certification Tracks */}
      <section className="py-12 sm:py-14 bg-[#FAF7F0] border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C79628]">
                Specialized Skill Tracks
              </span>
              <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
                TATA IIIC Competency Modules &amp; Event Protocol
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#4A2559]">
              Open to UG, PG &amp; Doctoral Researchers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01',
                title: 'EV Powertrain & Battery',
                desc: 'Hands-on diagnostics of electric vehicle motor controllers, BMS thermal testing, and hybrid drive architecture.',
              },
              {
                num: '02',
                title: 'PLM & Digital Twin',
                desc: 'End-to-end product lifecycle workflows, parametric CAD assemblies, and virtual factory simulation.',
              },
              {
                num: '03',
                title: 'Robotics & PLC',
                desc: '6-axis articulated robot arm programming, vision-guided pick-and-place, and industrial HMI integration.',
              },
              {
                num: '04',
                title: 'Smart IIoT & Audits',
                desc: 'Sensor telemetry pipelines, predictive maintenance dashboards, and seminar-hall technical symposium hosting.',
              },
            ].map((track) => (
              <div
                key={track.num}
                className="p-6 rounded-3xl bg-white border border-[#DFC06A]/45 shadow-xs space-y-2.5"
              >
                <span className="text-2xl font-['Playfair_Display',serif] font-black text-[#C79628]">
                  {track.num}
                </span>
                <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532]">
                  {track.title}
                </h3>
                <p className="text-xs text-[#4A2559] leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

