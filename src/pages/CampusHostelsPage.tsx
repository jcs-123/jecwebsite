import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Coffee,
  Compass,
  ShieldCheck,
  Utensils,
  Wifi,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}

const HOSTEL_BLOCKS = [
  {
    badge: 'Men’s Residence',
    name: 'Santhome Hostel',
    capacity: '450+ Residents',
    image: '/assets/hostel_santhome.jpg',
    desc: 'Spacious single, twin, and triple-sharing rooms with dedicated study desks, high-speed Wi-Fi, 24/7 power backup, and resident faculty wardens.',
    features: ['Biometric Entry & CCTV', 'Study & Reading Lounges', 'Indoor Games & Multi-Gym'],
  },
  {
    badge: 'Women’s Residence',
    name: 'Marian Hostel',
    capacity: '400+ Residents',
    image: '/assets/hostel_marian.jpg',
    desc: 'Safe, serene residential wing nestled inside the Jyothi Hills sanctuary with round-the-clock lady wardens, infirmary support, and recreation halls.',
    features: ['24/7 Lady Wardens & Security', 'Solar-Heated Water Supply', 'Dedicated Fitness & Badminton'],
  },
];

const DINING_HIGHLIGHTS = [
  {
    icon: Utensils,
    title: 'Steam-Cooked Kerala & Multi-Cuisine Mess',
    desc: 'Nutritious vegetarian and non-vegetarian meals prepared in an ISO-hygienic centralized kitchen with student mess-committee menu oversight.',
  },
  {
    icon: Coffee,
    title: 'Central Cafeteria & Refreshment Hub',
    desc: 'Open throughout academic hours serving healthy snacks, fresh juices, filter coffee, and quick lunches between lab sessions.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Wellness, Wi-Fi & Power Backup',
    desc: 'Uninterrupted campus Wi-Fi, RO drinking water stations on every floor, ambulance standby, and dedicated quiet study hours.',
  },
];

export const CampusHostelsPage: React.FC<Props> = ({
  onNavigate,
  onOpenTour,
}) => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      <FacilitiesSubNav activeRoute="campus-hostels" onNavigate={onNavigate} />

      {/* Overlapping Cream Editorial Card + Left Hostel Showcase */}
      <section className="relative w-full overflow-x-clip pt-6 sm:pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">
            <div className="lg:col-span-7">
              <RevealBlock direction="left">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-[#DFC06A]/65 bg-[#FCF9F2] grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5">
                  <div className="relative rounded-2xl overflow-hidden h-52 sm:h-72">
                    <img
                      src="/assets/hostel_santhome.jpg"
                      alt="Santhome Men's Hostel at Jyothi Engineering College"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#210532]/85 text-[#FDE68A] text-[10px] font-bold uppercase tracking-wider">
                      Santhome Hostel
                    </span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-52 sm:h-72">
                    <img
                      src="/assets/hostel_marian.jpg"
                      alt="Marian Women's Hostel at Jyothi Engineering College"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#210532]/85 text-[#FDE68A] text-[10px] font-bold uppercase tracking-wider">
                      Marian Hostel
                    </span>
                  </div>
                </div>
              </RevealBlock>
            </div>

            <div className="lg:col-span-5 lg:-ml-14 relative z-20">
              <RevealBlock direction="right" delay={120}>
                <div className="rounded-3xl bg-white border border-[#DFC06A]/70 shadow-2xl p-6 sm:p-8 lg:p-9 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5C3A14]">
                      Campus Hostels &amp; Dining
                    </span>
                    <span className="hidden sm:block h-[1px] flex-1 bg-[#DFC06A]/80" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#250836] leading-[1.08] font-['Playfair_Display',serif]">
                    <span className="block">Safe, Modern</span>
                    <span className="italic font-bold text-[#A87627] block">
                      Campus Living.
                    </span>
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Separate Men’s (Santhome Hostel) and Women’s (Marian Hostel) residential complexes with biometric security, Wi-Fi, and steam-cooked dining halls.
                  </p>

                  <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                    <button
                      onClick={onOpenTour}
                      className="w-full sm:w-auto justify-center px-5 py-2.5 sm:py-3 rounded-full bg-[#29073D] hover:bg-[#3B1159] text-white font-semibold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Tour Hostels in 360°</span>
                    </button>
                    <button
                      onClick={() => onNavigate('bus-fleet')}
                      className="w-full sm:w-auto justify-center px-5 py-2.5 sm:py-3 rounded-full bg-[#FAF7F0] hover:bg-amber-50 text-[#250836] font-semibold text-xs sm:text-sm border border-[#250836]/40 inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>View Bus Fleet</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Purple 4-Stat Strip */}
      <section className="bg-[#250836] text-white border-y border-[#DFC06A]/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <RevealBlock direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:divide-x lg:divide-white/15">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#FDE68A]">
                  <AnimatedCounter end={850} suffix="+" duration={1700} />
                </div>
                <div className="text-xs font-medium text-slate-200 mt-1">Residential Capacity</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#FDE68A]">
                  24/7
                </div>
                <div className="text-xs font-medium text-slate-200 mt-1">Security &amp; Wardens</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#FDE68A]">
                  <AnimatedCounter end={100} suffix="%" duration={1600} />
                </div>
                <div className="text-xs font-medium text-slate-200 mt-1">Wi-Fi &amp; Power Backup</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#FDE68A]">
                  ISO
                </div>
                <div className="text-xs font-medium text-slate-200 mt-1">Hygienic Steam Mess</div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Residential Complexes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <RevealBlock direction="up">
          <div className="flex items-center gap-4">
            <span className="h-[1px] flex-1 bg-amber-300/80" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
              Santhome &amp; Marian Residences
            </h2>
            <span className="h-[1px] flex-1 bg-amber-300/80" />
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOSTEL_BLOCKS.map((block, idx) => (
            <RevealBlock
              key={block.name}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 120}
              className="h-full"
            >
              <div className="h-full rounded-3xl bg-white border border-amber-200/80 shadow-sm overflow-hidden text-left flex flex-col">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={block.image}
                    alt={block.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/65">
                        {block.badge}
                      </span>
                      <span className="text-xs font-bold text-[#250836] flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#A87627]" />
                        {block.capacity}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {block.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{block.desc}</p>
                  </div>
                  <div className="pt-3 space-y-2 border-t border-amber-100">
                    {block.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs font-semibold text-[#250836]">
                        <CheckCircle2 className="w-4 h-4 text-[#A87627] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* Dining & Wellness Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DINING_HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealBlock
                key={item.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 100}
                className="h-full"
              >
                <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-3 text-left">
                  <div className="w-10 h-10 rounded-2xl bg-[#FBF2DC] border border-[#DFC06A]/65 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#A87627]" />
                  </div>
                  <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>
    </div>
  );
};

