import React, { useState } from 'react';
import {
  Utensils, Coffee, CreditCard, Clock, ShieldCheck, CheckCircle2
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

const CANTEEN_DISHES = [
  {
    id: 'masala-dosa',
    label: 'Masala Dosa',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'idli',
    label: 'Idli & Vada',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'alfaham',
    label: 'Alfaham',
    image: 'https://images.unsplash.com/photo-1641873933980-fcff60026f50?q=80&w=900&auto=format&fit=crop',
  },
];

export const CanteenPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate }) => {
  const [selectedDish, setSelectedDish] = useState(0);
  const currentDish = CANTEEN_DISHES[selectedDish] ?? CANTEEN_DISHES[0];
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="canteen" onNavigate={onNavigate} />

      {/* Overlapping Arch & Card Campus Canteen Hero */}
      <section className="py-8 sm:py-12 bg-[#FAF7F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Branding, Intro & South Indian Breakfast Card */}
            <RevealBlock direction="left" className="lg:col-span-5 space-y-6">
              <div className="border-l-2 border-[#C79628] pl-3.5">
                <div className="text-sm font-black tracking-wide text-[#210532]">JYOTHI /</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C79628]">
                  Campus Canteen
                </div>
              </div>

              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#F5EFE2] border border-[#DFC06A]/50 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A6E21]">
                  Hygienic Dining &amp; Café
                </span>

                <h1 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.06]">
                  Campus <span className="italic font-bold text-[#C79628]">Canteen</span>
                </h1>

                <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed max-w-md">
                  A welcoming campus dining space serving South Indian, North Indian and quick-bite meals.
                </p>
                <div className="w-14 h-[1.5px] bg-[#DFC06A]" />
              </div>

              <div className="pt-2 max-w-sm space-y-2.5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#DFC06A]/55 bg-white h-48 sm:h-52">
                  <img
                    src={currentDish.image}
                    alt={`${currentDish.label} at Jyothi Campus Canteen`}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                  />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#210532]/85 text-[#FDE68A] text-[10px] font-bold uppercase tracking-wider">
                    {currentDish.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {CANTEEN_DISHES.map((dish, idx) => (
                    <button
                      key={dish.id}
                      onClick={() => setSelectedDish(idx)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                        selectedDish === idx
                          ? 'bg-[#4B1040] text-[#FDE68A] shadow-xs'
                          : 'bg-white text-[#210532] border border-[#DFC06A]/55 hover:bg-[#FCF9F2]'
                      }`}
                    >
                      {dish.label}
                    </button>
                  ))}
                </div>
              </div>
            </RevealBlock>

            {/* Right Column: Sweeping Arch Dining Photo + Overlapping "Canteen at a glance" Card */}
            <RevealBlock direction="right" delay={100} className="lg:col-span-7 relative">
              <div className="relative rounded-tl-[160px] sm:rounded-tl-[220px] rounded-tr-3xl rounded-b-3xl overflow-hidden shadow-xl border border-[#DFC06A]/50 bg-[#250836] h-64 sm:h-80 lg:h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="Luxury 5-Star Campus Canteen Dining Hall"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Overlapping Floating "Canteen at a glance" Card */}
              <div className="relative z-20 -mt-12 sm:-mt-16 mx-2 sm:mx-6 rounded-3xl bg-white border border-[#DFC06A]/45 shadow-2xl p-5 sm:p-7 space-y-5">
                <h2 className="text-2xl sm:text-[26px] font-['Playfair_Display',serif] font-bold text-[#210532]">
                  Canteen at a <span className="italic text-[#C79628]">glance</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/40 flex items-center gap-3">
                    <CreditCard size={18} className="text-[#C79628] shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-[#210532]">UPI &amp; Smart Card</div>
                      <div className="text-[#4A2559]">Digital billing</div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/40 flex items-center gap-3">
                    <Clock size={18} className="text-[#C79628] shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-[#210532]">07:30 AM – 06:30 PM</div>
                      <div className="text-[#4A2559]">All academic &amp; lab days</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#4B1040] text-white py-4 px-4 grid grid-cols-3 gap-2 text-center divide-x divide-white/15">
                  <div>
                    <div className="text-xl sm:text-2xl font-['Playfair_Display',serif] font-bold text-white">
                      <AnimatedCounter end={250} suffix="+" />
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-white/80 mt-0.5">Dining Seats</div>
                  </div>
                  <div className="pl-2">
                    <div className="text-xl sm:text-2xl font-['Playfair_Display',serif] font-bold text-white">
                      FSSAI
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-white/80 mt-0.5">Certified Kitchen</div>
                  </div>
                  <div className="pl-2">
                    <div className="text-xl sm:text-2xl font-['Playfair_Display',serif] font-bold text-white">
                      100%
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-white/80 mt-0.5">RO Water &amp; Hygiene</div>
                  </div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Canteen Highlights */}
      <section className="py-12 bg-white border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Utensils,
              title: 'Kerala & Multi-Cuisine Meals',
              desc: 'Nutritious breakfast, wholesome sadya-style lunches, chapati combos, and evening snacks at student-friendly subsidized rates.',
            },
            {
              icon: Coffee,
              title: 'Juice Bar & Coffee Lounge',
              desc: 'Fresh seasonal fruit juices, filter coffee, tea, and bakery favorites perfect for quick breaks between studio and lab hours.',
            },
            {
              icon: ShieldCheck,
              title: 'Regular Quality Audits',
              desc: 'Monitored weekly by the Faculty–Student Canteen Committee for ingredient freshness, kitchen sanitation, and waste-free service.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/40 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532]">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C79628]">
                  <CheckCircle2 size={13} /> Student-Friendly &amp; Hygienic
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

