import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Database,
  Laptop,
  Layers,
  ScanBarcode,
  Wifi,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}

const LIBRARY_COLLECTIONS = [
  {
    id: 'books',
    label: 'Print & Reference',
    title: '42,000+ Textbooks, Handbooks & Reference Volumes',
    desc: 'Curated across CSE, AI & Data Science, ECE, EEE, Mechanical, Civil, and Robotics with dedicated competitive-exam (GATE, GRE, IES) shelves.',
    highlights: ['42,000+ Print Books', '120+ National & Intl Journals', 'GATE & Competitive Wing'],
    icon: BookOpen,
  },
  {
    id: 'digital',
    label: 'Digital E-Resources',
    title: '24/7 IEEE Xplore, ScienceDirect & DELNET Access',
    desc: 'Campus-wide and remote VPN access to thousands of peer-reviewed engineering journals, conference proceedings, e-books, and NPTEL video lectures.',
    highlights: ['IEEE Xplore & ASPP', 'Elsevier ScienceDirect', 'Knimbus Remote Portal'],
    icon: Database,
  },
  {
    id: 'rfid',
    label: 'RFID & Smart Kiosks',
    title: 'Automated RFID Self-Issue & Return Stations',
    desc: 'Contactless smart-card check-in/check-out kiosks, OPAC web search terminals, and automated SMS/email due reminders for effortless borrowing.',
    highlights: ['RFID Self-Checkout', 'Web OPAC Discovery', 'Zero-Queue Returns'],
    icon: ScanBarcode,
  },
];

export const CentralLibraryPage: React.FC<Props> = ({
  onNavigate,
  onOpenTour,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = LIBRARY_COLLECTIONS[activeTab] ?? LIBRARY_COLLECTIONS[0];

  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      <FacilitiesSubNav activeRoute="central-library" onNavigate={onNavigate} />

      {/* Exact Slanted-Bento Editorial Hero */}
      <section className="relative w-full py-4 sm:py-6 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch lg:h-[430px]">
            {/* Left Column: Clean Borderless Editorial Text + Slanted Dark Plum Stats Card */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4 h-full">
              <RevealBlock direction="left" className="flex-1 flex flex-col justify-center">
                <div className="rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/35 p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#210532] whitespace-nowrap">
                        Central Digital Library
                      </span>
                      <span className="h-[1px] flex-1 bg-[#DFC06A]/65" />
                    </div>

                    <h1 className="text-3xl sm:text-[34px] font-['Playfair_Display',serif] font-black tracking-tight leading-[1.06] text-[#210532]">
                      Knowledge Hub &amp;
                      <span className="block italic font-bold text-[#C79628] mt-0.5">
                        RFID Digital Library.
                      </span>
                    </h1>

                    <p className="text-xs sm:text-[13.5px] text-[#3B1F47] leading-relaxed">
                      A 3-tier automated learning sanctuary housing 42,000+ volumes, 120+ journals, IEEE Xplore digital databases, and silent research carrels.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onNavigate('campus-hostels')}
                      className="px-6 py-2.5 rounded-full bg-[#4B1A43] hover:bg-[#361030] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Explore Hostels &amp; Dining</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealBlock>

              {/* Bottom-Left Dark Plum Stats Card with Slanted Right Edge */}
              <RevealBlock direction="up" delay={80}>
                <div className="relative rounded-2xl bg-[#4B1A43] text-white px-5 py-4 overflow-hidden shadow-md lg:[clip-path:polygon(0_0,100%_0,93%_100%,0_100%)]">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop"
                    alt="Library book volumes"
                    className="absolute inset-y-0 left-0 w-24 h-full object-cover opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4B1A43]/25 via-[#4B1A43]/95 to-[#4B1A43]" />
                  <div className="relative z-10 pl-16 sm:pl-20 space-y-2.5">
                    <div className="border-l-2 border-[#DFC06A] pl-3.5">
                      <div className="text-2xl font-['Playfair_Display',serif] font-bold text-white leading-none">
                        <AnimatedCounter end={42000} suffix="+" duration={1800} />
                      </div>
                      <div className="text-[11px] text-white/85 mt-1">Print Volumes</div>
                    </div>
                    <div className="h-[1px] bg-[#DFC06A]/45 mr-4" />
                    <div className="border-l-2 border-[#DFC06A] pl-3.5">
                      <div className="text-2xl font-['Playfair_Display',serif] font-bold text-white leading-none">
                        <AnimatedCounter end={120} suffix="+" duration={1600} />
                      </div>
                      <div className="text-[11px] text-white/85 mt-1">National &amp; Intl Journals</div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Center Column: Sunlit Library Study Photo with Jigsaw Slanted Edges */}
            <RevealBlock delay={60} className="lg:col-span-5 h-full min-h-0">
              <div className="relative h-64 sm:h-80 lg:h-full rounded-3xl overflow-hidden shadow-md bg-[#250836] lg:[clip-path:polygon(9%_0,100%_0,92%_100%,0_100%)]">
                <img
                  src="/assets/library_hero_students.jpg"
                  alt="Students studying inside the Central Digital Library"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </RevealBlock>

            {/* Right Column: Two Stacked Stat Cards with Matching Slanted Left Edges */}
            <div className="lg:col-span-3 flex flex-col gap-3.5 h-full">
              {/* Top-Right Cream Reading Pavilion Card */}
              <RevealBlock direction="right" delay={100} className="flex-1 min-h-0">
                <div className="relative h-full min-h-[150px] rounded-3xl bg-[#F6F1E7] border border-[#DFC06A]/35 p-6 flex items-center overflow-hidden shadow-sm lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
                  <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=700&auto=format&fit=crop"
                    alt="Reading pavilion seating"
                    className="absolute inset-y-0 right-0 w-3/5 h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E7] via-[#F6F1E7]/90 to-transparent" />
                  <div className="relative z-10 border-l-2 border-[#C79628] pl-4">
                    <div className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#210532] leading-none">
                      <AnimatedCounter end={250} suffix="+" duration={1600} />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#4A2559] mt-2 leading-snug">
                      Reading Pavilion
                      <br />
                      Seats
                    </div>
                  </div>
                </div>
              </RevealBlock>

              {/* Bottom-Right Dark Plum 24/7 IEEE Access Card */}
              <RevealBlock direction="right" delay={160} className="flex-1 min-h-0">
                <div className="relative h-full min-h-[150px] rounded-3xl bg-[#4B1A43] text-white p-6 flex items-center overflow-hidden shadow-md lg:[clip-path:polygon(0_0,100%_0,100%_100%,8%_100%)]">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=700&auto=format&fit=crop"
                    alt="24/7 IEEE Digital Access"
                    className="absolute inset-y-0 right-0 w-3/5 h-full object-cover opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4B1A43] via-[#4B1A43]/85 to-transparent" />
                  <div className="relative z-10 border-l-2 border-[#DFC06A] pl-4">
                    <div className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-white leading-none">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-white/85 mt-2 leading-snug">
                      IEEE Digital
                      <br />
                      Access
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Collections Explorer + Timings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-16 space-y-7">
        <RevealBlock direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5 text-left">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A87627]">
                Library Systems &amp; Collections
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
                Explore Digital &amp; Print Wings
              </h2>
            </div>

            <div className="inline-flex p-1.5 rounded-full bg-white border border-[#DFC06A]/65 shadow-2xs overflow-x-auto no-scrollbar max-w-full">
              {LIBRARY_COLLECTIONS.map((col, idx) => (
                <button
                  key={col.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#250836] text-[#FDE68A]'
                      : 'text-[#250836] hover:bg-amber-50'
                  }`}
                >
                  {col.label}
                </button>
              ))}
            </div>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8">
            <RevealBlock direction="left" className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FBF2DC] border border-[#DFC06A]/70 flex items-center justify-center">
                    <current.icon className="w-5 h-5 text-[#A87627]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {current.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {current.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#DFC06A]/65 text-xs font-semibold text-[#250836]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealBlock>
          </div>

          <div className="lg:col-span-4">
            <RevealBlock direction="right" delay={120} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-3xl bg-[#250836] text-white border border-[#DFC06A]/60 shadow-xl space-y-4 text-left">
                <div className="flex items-center gap-2.5 text-[#DFC06A] text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Library Hours &amp; Amenities</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-200">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon – Fri</span>
                    <span className="font-bold text-[#FDE68A]">8:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturdays</span>
                    <span className="font-bold text-[#FDE68A]">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exam Weeks</span>
                    <span className="font-bold text-[#FDE68A]">Extended Hours</span>
                  </div>
                </div>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] bg-white/10 px-3 py-1 rounded-full">
                    <Wifi className="w-3.5 h-3.5 text-[#DFC06A]" /> Gigabit Wi-Fi
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] bg-white/10 px-3 py-1 rounded-full">
                    <Laptop className="w-3.5 h-3.5 text-[#DFC06A]" /> 60+ Terminals
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] bg-white/10 px-3 py-1 rounded-full">
                    <Layers className="w-3.5 h-3.5 text-[#DFC06A]" /> 3 Tiers
                  </span>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
};

