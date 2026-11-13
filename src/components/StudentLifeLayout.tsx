import React, { useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RevealBlock } from './RevealBlock';

export interface HeroStat {
  value: string;
  label: string;
  sub?: string;
}

export interface StudentLifePageShellProps {
  activeRoute: string;
  badge: string;
  title: string;
  accentTitle?: string;
  subtitle: string;
  heroImage?: string;
  heroCaption?: string;
  heroVariant?: 'card' | 'wave' | 'arch';
  stats?: HeroStat[];
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
  children: React.ReactNode;
}

const STUDENT_LIFE_LINKS = [
  { route: 'student-life', label: 'All Student Life' },
  { route: 'clubs-societies', label: 'Clubs & Societies' },
  { route: 'tharang-fest', label: 'Tharang National Fest' },
  { route: 'celebrations', label: 'Celebrations' },
  { route: 'sports-arena', label: 'Sports Complex & Arena' },
  { route: 'nss-outreach', label: 'NSS & Social Outreach' },
];

export const StudentLifeLayout: React.FC<StudentLifePageShellProps> = ({
  activeRoute,
  badge,
  title,
  accentTitle,
  subtitle,
  heroImage = '/assets/club_hero.jpg',
  heroVariant = 'card',
  stats,
  onNavigate,
  onOpenApply,
  children,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeRoute]);

  return (
    <div className="bg-[#FAF7F0] min-h-screen overflow-x-clip">
      {/* Centered Sub-Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-white border border-amber-200/70 shadow-2xs">
          {STUDENT_LIFE_LINKS.map((item) => (
            <button
              key={item.route}
              onClick={() => onNavigate(item.route)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeRoute === item.route
                  ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                  : 'text-[#250836] hover:bg-amber-50/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="relative w-full overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10">
        {(heroVariant === 'wave' || heroVariant === 'arch') && (
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 520"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full opacity-55"
          >
            <path
              d="M-60,90 C220,10 420,170 680,70 C920,-20 1160,110 1500,40"
              fill="none"
              stroke="#DFC06A"
              strokeWidth="1.2"
              strokeOpacity="0.45"
            />
            <path
              d="M-60,440 C260,510 520,350 860,420 C1120,475 1290,370 1500,410"
              fill="none"
              stroke="#DFC06A"
              strokeWidth="1.4"
              strokeOpacity="0.5"
            />
          </svg>
        )}

        {heroVariant === 'wave' && (
          <>
            {/* Right Sweeping Curved Hero Image (Desktop) */}
            <div className="hidden lg:block absolute top-0 right-0 w-[56%] h-[440px] pointer-events-none select-none overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <defs>
                  <clipPath id="tharangHeroWaveClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0.24 0 C 0.08 0.26, 0.14 0.56, 0.02 0.88 C 0.01 0.94, 0.0 0.98, 0 1 L 1 1 L 1 0 Z" />
                  </clipPath>
                </defs>
                <image
                  href={heroImage}
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#tharangHeroWaveClip)"
                />
                <path
                  d="M 24 0 C 8 26, 14 56, 2 88 C 1 94, 0 98, 0 100"
                  fill="none"
                  stroke="#D4A346"
                  strokeWidth="0.65"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F0] via-transparent to-transparent opacity-45" />
            </div>
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className={`${heroVariant === 'wave' ? 'lg:col-span-6 lg:py-6' : 'lg:col-span-6'} space-y-5 text-left`}>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF2DC] border border-[#DFC06A] text-[#5C3A14] text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#A87627]" />
                  <span>{badge}</span>
                </div>
                {heroVariant === 'arch' && (
                  <span className="hidden sm:block h-[1px] w-24 bg-[#DFC06A]/70" />
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#250836] leading-[1.08]">
                <span className="font-['Playfair_Display',serif] block">{title}</span>
                {accentTitle && (
                  <span className="font-['Playfair_Display',serif] italic font-bold text-[#A87627] block mt-0.5">
                    {accentTitle}
                  </span>
                )}
              </h1>

              {heroVariant === 'wave' && (
                <div className="w-14 h-[2px] bg-[#D4A346]/80 rounded-full" />
              )}

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
                {subtitle}
              </p>

              <div className="pt-1">
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#29073D] via-[#3B1159] to-[#250638] text-white font-semibold text-xs sm:text-sm shadow-md border border-[#D4A346] inline-flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer"
                >
                  <span>Apply for Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`lg:col-span-6 ${heroVariant === 'wave' ? 'lg:hidden' : ''}`}>
              <div
                className={
                  heroVariant === 'arch'
                    ? 'p-1.5 rounded-tl-[76px] rounded-br-[76px] rounded-tr-3xl rounded-bl-3xl bg-gradient-to-br from-[#F3DFAB] via-[#DFC06A]/65 to-[#FAF7F0] shadow-2xl group'
                    : 'rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group'
                }
              >
                <div
                  className={
                    heroVariant === 'arch'
                      ? 'aspect-[16/10] w-full overflow-hidden rounded-tl-[70px] rounded-br-[70px] rounded-tr-2xl rounded-bl-2xl bg-white'
                      : 'aspect-[16/10] w-full overflow-hidden'
                  }
                >
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Royal Purple 4-Stat Bar */}
          {stats && stats.length > 0 && (
            <RevealBlock direction="up">
              <div
                className={`px-5 py-5 sm:px-6 sm:py-6 ${
                  heroVariant === 'arch' ? 'rounded-3xl lg:rounded-full' : 'rounded-3xl'
                } bg-gradient-to-r from-[#210532] via-[#2D0944] to-[#180222] text-white border border-[#D4A346]/45 shadow-xl`}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-center lg:divide-x lg:divide-white/15">
                  {stats.map((s, idx) => (
                    <div key={idx} className="py-1 sm:py-0 lg:px-3">
                      <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#FDE68A]">
                        {s.value}
                      </div>
                      <div className="text-xs font-semibold text-white mt-0.5">{s.label}</div>
                      {heroVariant === 'wave' ? (
                        <div className="w-8 h-[1.5px] bg-[#D4A346]/80 mx-auto mt-2 rounded-full" />
                      ) : (
                        s.sub && heroVariant !== 'arch' && (
                          <div className="text-[10px] text-amber-200/80 mt-0.5">{s.sub}</div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>
          )}
        </div>
      </section>

      {/* Page Body */}
      <div className="space-y-14 sm:space-y-16 pb-14">
        {children}

        {/* Bottom Split Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock direction="up">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#210532] via-[#2E0946] to-[#170221] text-white border border-[#D4A346]/40 shadow-2xl grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-5 h-44 md:h-48 relative overflow-hidden">
                <img
                  src="/assets/campus_students_banner.jpg"
                  alt="Students at Jyothi Hills Campus"
                  className="w-full h-full object-cover"
                />
                <div className="hidden md:block absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#240736] to-transparent" />
              </div>
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="space-y-1 text-left">
                  <h3 className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] italic text-[#FDE68A]">
                    Life at Jyothi Hills
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Experience Our Vibrant 30-Acre Campus
                  </p>
                </div>
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 rounded-full bg-[#FBF2DC] hover:bg-white text-[#250836] font-bold text-xs sm:text-sm shadow-lg inline-flex items-center gap-2 shrink-0 transition-all cursor-pointer"
                >
                  <span>Apply for Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RevealBlock>
        </section>
      </div>
    </div>
  );
};
