import React, { useEffect, useRef } from 'react';

export const RESEARCH_TABS = [
  { label: 'Research & Innovation', route: 'research' },
  { label: 'TATA IIIC', route: 'tata-iiic' },
  { label: 'Jyothi Consultancy Services', route: 'jyothi-consultancy' },
  { label: 'MIT FabLab Kerala', route: 'mit-fablab' },
  { label: 'Jyothi TBI Incubator', route: 'jyothi-tbi' },
] as const;

interface ResearchSubNavProps {
  activeRoute: string;
  onNavigate: (page: string) => void;
}

export const ResearchSubNav: React.FC<ResearchSubNavProps> = ({
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div
        ref={containerRef}
        className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-white border border-amber-200/70 shadow-2xs"
      >
        {RESEARCH_TABS.map((tab) => {
          const isActive = tab.route === activeRoute;
          return (
            <button
              key={tab.route}
              ref={isActive ? activeBtnRef : undefined}
              onClick={() => onNavigate(tab.route)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                  : 'text-[#250836] hover:bg-amber-50/80'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

