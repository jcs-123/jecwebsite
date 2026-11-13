import React from 'react';
import { Award, Dumbbell, Flag, ShieldCheck, Trophy } from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { StudentLifeLayout } from '../components/StudentLifeLayout';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

const SPORTS_FACILITIES = [
  {
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop',
    title: 'Archdiocesan & KTU Tournaments',
    desc: 'Annual hosts of major APJ KTU zone and Archdiocesan inter-collegiate tournaments in football, basketball, and table tennis.',
    badge: 'State Level Hosts',
  },
  {
    icon: Flag,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop',
    title: '400m Athletic Track & Football',
    desc: 'Sprawling natural-grass football ground, 400m athletics track, and dedicated cricket practice nets for morning and evening training.',
    badge: 'Outdoor Arena',
  },
  {
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    title: 'Floodlit Courts & Multi-Gymnasium',
    desc: 'Synthetic floodlit basketball and volleyball courts, indoor wooden badminton courts, and separate modern fitness gyms for men and women.',
    badge: 'Indoor & Evening',
  },
];

const DISCIPLINES = [
  {
    name: 'Cricket',
    badge: 'Turf & Practice Nets',
    image: 'https://images.unsplash.com/photo-1674986778924-7a33c1531443?q=80&w=900&auto=format&fit=crop',
    detail:
      'Dedicated cricket practice nets with turf and matting pitches, bowling machines, and full match-day kits for KTU inter-collegiate and Archdiocesan cricket championships.',
  },
  {
    name: 'Indoor Badminton',
    badge: 'Wooden Courts',
    image: 'https://images.unsplash.com/photo-1626721105368-a69248e93b32?q=80&w=900&auto=format&fit=crop',
    detail:
      'All-weather indoor wooden badminton courts inside the Sports Pavilion with tournament-grade lighting, regular coaching sessions, and evening hostel play.',
  },
  {
    name: 'Volleyball',
    badge: 'Floodlit Synthetic Court',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=900&auto=format&fit=crop',
    detail:
      'Regulation floodlit outdoor volleyball courts hosting inter-department leagues, evening varsity team drills, and APJ KTU zonal selection matches.',
  },
  {
    name: 'Football & Futsal',
    badge: 'Natural Grass Pitch',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=900&auto=format&fit=crop',
    detail:
      'Full-size natural grass football ground inside the 400m stadium oval, supporting 11s varsity conditioning and floodlit 7s campus tournaments.',
  },
  {
    name: 'Basketball',
    badge: 'Floodlit Court',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop',
    detail:
      'Synthetic outdoor basketball arena equipped with high-mast floodlights, glass backboards, and regular inter-collegiate invitational tournaments.',
  },
  {
    name: 'Fitness & Multi-Gym',
    badge: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    detail:
      'Separate modern multi-gymnasiums for men and women with cardio stations, free weights, and guided athletic conditioning programs.',
  },
];

export const SportsArenaPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
}) => {
  return (
    <StudentLifeLayout
      activeRoute="sports-arena"
      badge="Sports Complex and Arena"
      title="Championship Athletics"
      accentTitle="& Fitness Facilities."
      subtitle="400m athletic track, natural football turf, floodlit basketball & volleyball courts, indoor wooden badminton courts, and modern multi-gyms."
      heroImage="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop"
      heroCaption="Outdoor Stadium & Indoor Conditioning"
      heroVariant="arch"
      stats={[
        { value: '400m', label: 'Athletic Track', sub: 'Full-Sized Stadium' },
        { value: '6+', label: 'Sports Courts', sub: 'Floodlit & Indoor' },
        { value: '2 Gyms', label: 'Fitness Centers', sub: 'Separate Men & Women' },
        { value: 'KTU Zone', label: 'Tournament Hosts', sub: 'Inter-Collegiate Champions' },
      ]}
      onNavigate={onNavigate}
      onOpenApply={onOpenApply}
      onOpenTour={onOpenTour}
    >
      {/* Core Sports Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-4">
          <span className="h-[1px] flex-1 bg-amber-300/80" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
            Courts, Grounds &amp; Indoor Conditioning
          </h2>
          <span className="h-[1px] flex-1 bg-amber-300/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPORTS_FACILITIES.map((sp, idx) => {
            const Icon = sp.icon;
            return (
              <RevealBlock
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 150}
                className="h-full"
              >
                <div className="h-full p-4 sm:p-5 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between gap-4 group">
                  <div className="space-y-4">
                    <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                      <img
                        src={sp.image}
                        alt={sp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-2 px-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                          {sp.badge}
                        </span>
                        <Icon className="w-4 h-4 text-[#A87627]" />
                      </div>
                      <h4 className="font-bold text-lg text-[#250836] font-['Playfair_Display',serif]">
                        {sp.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {sp.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5 px-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Open to Hostellers &amp; Day Scholars</span>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* Sports Disciplines & Coaching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Active Varsity Teams
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
              Sports Disciplines &amp; Coaching Support
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Morning 6:00 AM – 8:00 AM &amp; Evening 4:30 PM – 7:30 PM
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((d, idx) => (
            <RevealBlock
              key={d.name}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div className="h-full rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#250836]/65 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#FBF2DC]/95 text-[#5C3A14] border border-[#DFC06A] shadow-xs">
                    {d.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-lg font-['Playfair_Display',serif] text-[#250836]">
                      {d.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{d.detail}</p>
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </StudentLifeLayout>
  );
};
