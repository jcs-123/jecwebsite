import React from 'react';
import {
  Trophy, Mic2, Dumbbell, Clock, Calendar,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

const SPORTS_STATS = [
  { target: 1200, suffix: '', label: 'Auditorium Seats', sub: 'Acoustically Tuned Hall' },
  { target: 400, suffix: 'm', label: 'Athletic Track', sub: 'Championship Turf' },
  { target: 6, suffix: '+', label: 'Outdoor Courts', sub: 'Floodlit & Synthetic' },
  { target: 2, suffix: '', label: 'Fitness Gyms', sub: 'Men & Women Zones' },
];

const ARENA_CARDS = [
  {
    icon: Mic2,
    tag: 'Cultural & Convocation Hub',
    title: 'Father Thekkekara Auditorium',
    desc: 'A 1,200-seat air-conditioned cultural and academic theatre equipped with cinema-grade projection, line-array acoustics, green rooms, and live streaming infrastructure for national conferences, TEDx talks, and Tharang.',
    highlights: ['1,200 Tiered Seating', 'Dolby-Grade Acoustics', '4K LED Stage Backdrop'],
    image: '/assets/auditorium_hall.jpg',
  },
  {
    icon: Trophy,
    tag: 'Outdoor Athletics',
    title: '400m Track & Football Turf',
    desc: 'Expansive hilltop sports ground housing a standard 400m athletic track, regulation football pitch, cricket practice nets, and spectator pavilion overlooking the green Cheruthuruthy valley.',
    highlights: ['Regulation Football Field', 'Cricket Practice Pitches', 'Covered Spectator Pavilion'],
    image: '/assets/sports_turf.jpg',
  },
  {
    icon: Dumbbell,
    tag: 'Indoor & Court Sports',
    title: 'Multi-Sport Courts & Gymnasiums',
    desc: 'Dedicated floodlit basketball, volleyball, and shuttle badminton courts alongside separate strength-and-conditioning gymnasiums, table tennis arenas, and chess lounges.',
    highlights: ['Floodlit Basketball & Volleyball', 'Indoor Badminton Courts', 'Certified Fitness Trainers'],
    image: '/assets/indoor_gym.jpg',
  },
];

export const AuditoriumSportsPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="auditorium-sports" onNavigate={onNavigate} />

      {/* Warm Cream Editorial Header + 2-Column Asymmetric Bento Showcase */}
      <section className="relative py-8 sm:py-10 lg:py-12 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-3 mb-2.5">
              <span className="h-[1px] w-10 bg-[#DFC06A]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#210532]">
                Culture &amp; Athletics
              </span>
              <span className="h-[1px] w-10 bg-[#DFC06A]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.08] mb-2.5">
              Auditorium &amp; <span className="italic font-bold text-[#C79628]">Sports Ground</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
              Spaces for symposia, cultural festivals and university-level sports at Jyothi.
            </p>
          </RevealBlock>

          {/* 2-Column Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Large Tall Card: Father Thekkekara Auditorium */}
            <RevealBlock direction="left" className="lg:col-span-5 flex">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-[#DFC06A]/45 bg-[#3D0F3B] flex flex-col">
                <div className="relative flex-1 min-h-[260px] sm:min-h-[320px] overflow-hidden">
                  <img
                    src="/assets/auditorium_hall.jpg"
                    alt="Father Thekkekara Auditorium at Jyothi Engineering College"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="bg-[#3D0F3B] text-white px-6 py-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-['Playfair_Display',serif] font-bold text-white leading-snug">
                      Father Thekkekara Auditorium
                    </h2>
                    <p className="text-xs text-white/80 mt-0.5">
                      A venue for convocations and cultural events.
                    </p>
                  </div>
                  <div className="pl-4 border-l border-[#DFC06A]/40 shrink-0">
                    <span className="inline-block px-3.5 py-1.5 rounded-full border border-[#DFC06A]/70 bg-[#2A0829]/70 text-[11px] font-bold text-[#FDE68A] whitespace-nowrap">
                      1,200 Seats
                    </span>
                  </div>
                </div>
              </div>
            </RevealBlock>

            {/* Right Column: Stacked 400m Athletic Turf + Indoor Sports Centre */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Top-Right Card: 400m Athletic Turf & Pavilion */}
              <RevealBlock direction="right" delay={80}>
                <div className="rounded-3xl overflow-hidden shadow-md border border-[#DFC06A]/45 bg-white">
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <img
                      src="/assets/sports_turf.jpg"
                      alt="400m Athletic Turf and Spectator Pavilion"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="px-6 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4 bg-white">
                    <div>
                      <h2 className="text-lg sm:text-xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                        400m Athletic Turf &amp; Pavilion
                      </h2>
                      <p className="text-xs text-[#4A2559] mt-0.5">
                        Football ground, athletic track and floodlit courts.
                      </p>
                    </div>
                    <div className="pl-4 border-l border-[#DFC06A]/45">
                      <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#DFC06A]/65 text-[11px] font-bold text-[#4A2559] whitespace-nowrap">
                        KTU Zone Host
                      </span>
                    </div>
                  </div>
                </div>
              </RevealBlock>

              {/* Bottom-Right Horizontal Card: Indoor Sports & Fitness Centre */}
              <RevealBlock direction="right" delay={140} className="flex-1">
                <div className="h-full rounded-3xl overflow-hidden shadow-md border border-[#DFC06A]/45 bg-white p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-5 h-40 sm:h-36 rounded-2xl overflow-hidden">
                    <img
                      src="/assets/indoor_gym.jpg"
                      alt="Indoor Sports and Fitness Centre"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="sm:col-span-7 px-2 sm:pr-4 py-1 space-y-1.5">
                    <h2 className="text-lg sm:text-xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                      Indoor Sports &amp; Fitness Centre
                    </h2>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A87627]">
                      <Clock size={13} />
                      <span>06:00 AM – 08:00 PM</span>
                    </div>
                    <p className="text-xs text-[#4A2559] leading-relaxed">
                      Gymnasiums, badminton courts and indoor recreation.
                    </p>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stat AnimatedCounter Strip */}
      <section className="bg-[#250836] border-y border-[#DFC06A]/30 py-8 sm:py-10 text-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {SPORTS_STATS.map((stat) => (
              <div key={stat.label} className="px-3">
                <div className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#DFC06A]">
                  <AnimatedCounter end={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-white/65 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auditorium, Outdoor & Indoor Arena Cards */}
      <section className="py-14 sm:py-16 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C79628]">
              Explore Every Arena
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-2 mb-3">
              Where Talent Meets Opportunity
            </h2>
            <p className="text-sm text-[#4A2559]">
              Dedicated spaces supporting year-round inter-collegiate tournaments, cultural showcases, and daily student wellness.
            </p>
          </RevealBlock>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ARENA_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <RevealBlock
                  key={card.title}
                  delay={idx * 80}
                  className="bg-white rounded-3xl border border-[#DFC06A]/40 overflow-hidden shadow-sm flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden bg-[#250836]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#250836]/90 border border-[#DFC06A]/40 text-[10px] font-bold uppercase tracking-wider text-[#DFC06A]">
                      {card.tag}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#FAF7F0] border border-[#DFC06A]/40 text-[#210532] flex items-center justify-center">
                          <Icon size={18} />
                        </div>
                        <h3 className="text-xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#4A2559] leading-relaxed mb-5">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#DFC06A]/25 space-y-2">
                      {card.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs font-medium text-[#210532]">
                          <CheckCircle2 size={14} className="text-[#C79628] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealBlock>
              );
            })}
          </div>

          {/* Bottom Callout Banner */}
          <RevealBlock className="mt-12 bg-[#250836] text-[#FAF7F0] rounded-3xl p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#DFC06A] mb-2">
                <Calendar size={14} /> Annual Calendar Highlights
              </span>
              <h3 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-white">
                Tharang Tech-Cultural Fest &amp; Jyothi Sports Meet
              </h3>
              <p className="text-sm text-white/75 mt-1.5 max-w-2xl">
                Hosting 5,000+ visiting students across Kerala for national hackathons, pro-shows, and KTU inter-zone athletics.
              </p>
            </div>
            <button
              onClick={() => onNavigate('admission-enquiry')}
              className="px-6 py-3.5 rounded-xl bg-[#DFC06A] text-[#210532] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer"
            >
              Enquire Now <ArrowRight size={14} />
            </button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
