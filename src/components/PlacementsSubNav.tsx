import React, { useEffect, useRef } from 'react';

export const PLACEMENTS_TABS = [
  { label: 'Placement Records', route: 'placement-records' },
  { label: 'Corporate Recruiters', route: 'corporate-recruiters' },
  { label: 'Career Guidance Cell', route: 'career-guidance' },
  { label: 'Career Navigator', route: 'career-navigator' },
  { label: 'Industry Collaborations', route: 'industry-collaborations' },
  { label: 'Career Advancement Alumni', route: 'career-advancement-alumni' },
  { label: 'Upcoming Drives', route: 'upcoming-drives' },
] as const;

interface PlacementsSubNavProps {
  activeRoute: string;
  onNavigate: (page: string) => void;
}

export const PlacementsSubNav: React.FC<PlacementsSubNavProps> = ({
  activeRoute,
  onNavigate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const activeBtn = activeBtnRef.current;
    if (!container || !activeBtn) return;

    const targetLeft =
      activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.clientWidth / 2;
    container.scrollLeft = Math.max(0, targetLeft);
  }, [activeRoute]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-3 p-1.5 sm:p-2 rounded-2xl xl:rounded-full bg-white/95 border border-[#E5D7B7] shadow-xs backdrop-blur-md">
        {/* Left Branding Lockup (Pixel-perfect matching design mockup) */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 px-3 py-1 cursor-pointer group shrink-0 self-start xl:self-auto"
        >
          <div className="flex items-baseline gap-1.5 leading-tight">
            <span className="font-['Playfair_Display',serif] font-bold text-sm sm:text-base text-[#28052B] tracking-tight group-hover:text-[#BD8E36] transition-colors">
              Jyothi Engineering College
            </span>
            <span className="font-['Playfair_Display',serif] italic font-normal text-xs sm:text-sm text-[#28052B]/75">
              (Autonomous)
            </span>
          </div>
          <span className="hidden xl:inline-block h-6 w-[1.5px] bg-[#E7D6C1] ml-2" />
        </div>

        {/* Tab Links */}
        <div
          ref={containerRef}
          className="w-full xl:w-auto flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start gap-1 sm:gap-2 px-1 py-0.5"
        >
          {PLACEMENTS_TABS.map((tab) => {
            const isActive =
              tab.route === activeRoute ||
              (activeRoute === 'placements' && tab.route === 'placement-records');
            return (
              <button
                key={tab.route}
                ref={isActive ? activeBtnRef : undefined}
                onClick={() => onNavigate(tab.route)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#28052B] text-white shadow-sm font-bold ring-1 ring-[#DFC06A]/40'
                    : 'text-[#28052B]/85 hover:bg-[#FAF7F2] hover:text-[#BD8E36]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
