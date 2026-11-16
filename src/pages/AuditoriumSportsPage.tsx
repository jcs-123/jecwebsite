import React from 'react';
import {
  Trophy, Mic2, Dumbbell, Sparkles, Calendar,
  ArrowRight, CheckCircle2, Users, Activity
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
    image: '/assets/club_tharang.jpg',
  },
  {
    icon: Trophy,
    tag: 'Outdoor Athletics',
    title: '400m Track & Football Turf',
    desc: 'Expansive hilltop sports ground housing a standard 400m athletic track, regulation football pitch, cricket practice nets, and spectator pavilion overlooking the green Cheruthuruthy valley.',
    highlights: ['Regulation Football Field', 'Cricket Practice Pitches', 'Covered Spectator Pavilion'],
    image: '/assets/sketch_sports.jpg',
  },
  {
    icon: Dumbbell,
    tag: 'Indoor & Court Sports',
    title: 'Multi-Sport Courts & Gymnasiums',
    desc: 'Dedicated floodlit basketball, volleyball, and shuttle badminton courts alongside separate strength-and-conditioning gymnasiums, table tennis arenas, and chess lounges.',
    highlights: ['Floodlit Basketball & Volleyball', 'Indoor Badminton Courts', 'Certified Fitness Trainers'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop',
  },
];

export const AuditoriumSportsPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate, onOpenTour }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] pt-24 sm:pt-32 overflow-x-clip">
      <FacilitiesSubNav activeRoute="auditorium-sports" onNavigate={onNavigate} />

      {/* Dark Royal Purple Bento Showcase */}
      <section className="relative bg-[#1B0329] text-[#FAF7F0] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(223,192,106,0.14),transparent_55%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Showcase: Auditorium & Turf Visual */}
            <RevealBlock className="lg:col-span-7 bg-[#250836] rounded-3xl border border-[#DFC06A]/30 overflow-hidden flex flex-col">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop"
                  alt="Jyothi Auditorium and Athletic Sports Turf"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#250836] via-[#250836]/30 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B0329]/85 border border-[#DFC06A]/40 text-[11px] font-bold uppercase tracking-[0.2em] text-[#DFC06A]">
                  <Sparkles size={12} /> Culture &amp; Athletics
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-white leading-tight mb-3">
                    Auditorium &amp; <span className="italic font-normal text-[#DFC06A]">Sports Ground</span>
                  </h1>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                    Home to the 1,200-Seat Father Thekkekara Auditorium and our 400m Athletic Turf — where national symposia, cultural festivals, and university-level championships come alive.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} className="text-[#DFC06A]" /> 1,200-Seat Father Thekkekara Auditorium
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Activity size={14} className="text-[#DFC06A]" /> 400m Athletic Turf &amp; Pavilion
                  </span>
                </div>
              </div>
            </RevealBlock>

            {/* Right Showcase: Gold-Accented Highlights */}
            <RevealBlock delay={100} className="lg:col-span-5 bg-[#250836] rounded-3xl border border-[#DFC06A]/35 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#DFC06A]">
                  Signature Venues
                </span>
                <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-bold text-white mt-2 mb-5">
                  Built for Stage Excellence &amp; Sporting Spirit
                </h2>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#1B0329]/75 border border-[#DFC06A]/25">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-[#DFC06A]">Father Thekkekara Auditorium</span>
                      <span className="text-[11px] font-semibold text-white/70">1,200 Seats</span>
                    </div>
                    <p className="text-xs text-white/75 leading-relaxed">
                      Acoustic wall paneling, motorized stage lighting, dual green rooms, and 4K projection for convocations and tech fests.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1B0329]/75 border border-[#DFC06A]/25">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-[#DFC06A]">400m Athletic Turf &amp; Pavilion</span>
                      <span className="text-[11px] font-semibold text-white/70">KTU Zone Host</span>
                    </div>
                    <p className="text-xs text-white/75 leading-relaxed">
                      Full-size football ground, athletic track, floodlit courts, and dedicated coaching by Physical Education faculty.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1B0329]/75 border border-[#DFC06A]/25">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-[#DFC06A]">Indoor Sports &amp; Fitness Centre</span>
                      <span className="text-[11px] font-semibold text-white/70">06:00 AM – 08:00 PM</span>
                    </div>
                    <p className="text-xs text-white/75 leading-relaxed">
                      Separate modern gyms for men and women, wooden-floor badminton courts, and indoor recreation zones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={onOpenTour}
                  className="flex-1 min-w-[160px] py-3 px-5 rounded-xl bg-[#DFC06A] text-[#210532] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Tour the Arenas <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => onNavigate('campus-life')}
                  className="py-3 px-5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-xs hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Campus Life
                </button>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* 4-Stat AnimatedCounter Strip */}
      <section className="bg-[#250836] border-y border-[#DFC06A]/30 py-8 sm:py-10 text-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {SPORTS_STATS.map((stat) => (
              <div key={stat.label} className="px-3">
                <div className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#DFC06A]">
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
      <section className="py-14 sm:py-20 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C79628]">
              Explore Every Arena
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#210532] mt-2 mb-3">
              Where Talent Meets Opportunity
            </h2>
            <p className="text-sm sm:text-base text-[#4A2559]">
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
                        <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#210532]">
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
              <h3 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-bold text-white">
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
