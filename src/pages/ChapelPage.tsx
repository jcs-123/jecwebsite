import React from 'react';
import {
  Sparkles, Clock, HeartHandshake, Sun
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

export const ChapelPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="chapel" onNavigate={onNavigate} />

      {/* Serene Arch-Swept Sanctuary Hero */}
      <section className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 bg-[#FAF7F0] overflow-hidden">
        {/* Subtle Decorative Gold Arch Outline on Top Right */}
        <div className="hidden lg:block absolute right-10 top-14 w-36 h-48 rounded-t-full border border-[#DFC06A]/35 pointer-events-none">
          <div className="w-24 h-36 mx-auto mt-6 rounded-t-full border border-[#DFC06A]/25" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Editorial Intro + Sweeping Curved Chapel Photo */}
            <div className="lg:col-span-7 space-y-7">
              <RevealBlock direction="left" className="border-l border-[#DFC06A] pl-5 space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#C79628]">
                  <span className="h-[1px] w-7 bg-[#DFC06A]" />
                  <span>Spiritual &amp; Moral Anchor</span>
                  <span className="h-[1px] w-7 bg-[#DFC06A]" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.06]">
                  Campus <span className="italic font-bold text-[#C79628]">Chapel</span>
                </h1>
                <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                  Guided by the Catholic Archdiocese of Trichur, the Jyothi Campus Chapel welcomes students and faculty of all faiths for quiet reflection and prayer.
                </p>
              </RevealBlock>

              <RevealBlock direction="up" delay={80}>
                <div className="relative rounded-tl-3xl rounded-tr-[180px] sm:rounded-tr-[260px] rounded-b-3xl overflow-hidden shadow-xl border border-[#DFC06A]/55 bg-white">
                  <img
                    src="/assets/chapel_sanctuary.jpg"
                    alt="Jyothi Campus Chapel Sanctuary"
                    className="w-full h-64 sm:h-80 lg:h-[320px] object-cover object-center"
                  />
                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Floating Daily Sanctuary Hours Card + Pill CTA */}
            <RevealBlock direction="right" delay={120} className="lg:col-span-5 flex flex-col items-center space-y-5">
              <div className="w-full rounded-3xl bg-white/95 backdrop-blur-sm border border-[#DFC06A]/50 p-6 sm:p-7 shadow-lg space-y-5">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#C79628] shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#210532] whitespace-nowrap">
                    Daily Sanctuary Hours
                  </span>
                  <span className="h-[1px] flex-1 bg-[#DFC06A]/55" />
                </div>

                <div className="divide-y divide-[#DFC06A]/25">
                  <div className="py-3.5 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#210532]">
                      Morning Holy Mass
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-[#FAF7F0] border border-[#DFC06A]/45 text-xs font-semibold text-[#9A6E21]">
                      07:15 AM (Mon – Sat)
                    </span>
                  </div>

                  <div className="py-3.5 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#210532]">
                      Silent Meditation &amp; Prayer
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-[#FAF7F0] border border-[#DFC06A]/45 text-xs font-semibold text-[#9A6E21]">
                      06:30 AM – 07:30 PM Daily
                    </span>
                  </div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Pillars of Serenity */}
      <section className="py-12 bg-white border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Sun,
              title: 'Daylight & Sacred Geometry',
              desc: 'Designed with natural ventilation, stained-glass accents, and tranquil hilltop views fostering stillness amidst busy academic weeks.',
            },
            {
              icon: HeartHandshake,
              title: 'Student Counseling & Care',
              desc: 'Warm spiritual guidance, mentorship, and emotional wellness support accessible to every resident and day scholar.',
            },
            {
              icon: Sparkles,
              title: 'Inter-Faith Harmony',
              desc: 'Welcomes students from every background for silent contemplation, annual Thanksgiving services, and campus community gatherings.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/40 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Annual Liturgical Calendar & Pastoral Support */}
      <section className="py-12 sm:py-14 bg-[#FAF7F0] border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#DFC06A]/45 p-7 sm:p-8 shadow-xs space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
                Sacred Gatherings
              </span>
              <h2 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
                Annual Liturgical &amp; Community Observances
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Academic Blessing Mass', time: 'Start of Each Semester', desc: 'Invoking wisdom and grace for incoming first-year students, faculty, and researchers.' },
                { title: 'Weekly Eucharistic Adoration', time: 'First Fridays • 12:30 PM', desc: 'Dedicated hour of quiet contemplation, hymns, and thanksgiving during lunch recess.' },
                { title: 'Christmas Carols & Vigil', time: 'December Campus Celebration', desc: 'Inter-faith choir melodies, candlelit fellowship, and outreach gift drives.' },
                { title: 'Graduating Batch Thanksgiving', time: 'Annual Convocation Week', desc: 'Special blessing service for final-year B.Tech, M.Tech, and Ph.D. scholars.' },
              ].map((ev) => (
                <div key={ev.title} className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/35 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-[#210532]">{ev.title}</h3>
                    <span className="text-[10px] font-bold text-[#C79628] shrink-0">{ev.time}</span>
                  </div>
                  <p className="text-xs text-[#4A2559] leading-relaxed">{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#250836] text-white rounded-3xl border border-[#DFC06A]/45 p-7 sm:p-8 shadow-xl flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFC06A]">
                Campus Ministry
              </span>
              <h3 className="text-2xl font-['Playfair_Display',serif] font-bold">
                Pastoral Care &amp; Quiet Reflection
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Resident spiritual directors and faculty mentors are available daily for personal guidance, value-education dialogues, and holistic student well-being.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-[#DFC06A]/35 text-xs text-[#FDE68A]">
              Open to students, faculty, and visiting parents of all faiths throughout campus hours.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

