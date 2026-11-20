import React, { useEffect, useRef } from 'react';

export const EXAMINATION_TABS = [
  { label: 'Office of CoE', route: 'office-of-coe' },
  { label: 'Notification', route: 'examination-notifications' },
  { label: 'Timetable', route: 'examination-timetable' },
  { label: 'General Guideline', route: 'examination-guidelines' },
  { label: 'Malpractices & Punishment', route: 'examination-malpractices' },
  { label: 'Results', route: 'examination-results' },
  { label: 'Grievance Redressal', route: 'examination-grievances' },
] as const;

interface ExaminationSubNavProps {
  activeRoute: string;
  onNavigate: (page: string) => void;
}

export const ExaminationSubNav: React.FC<ExaminationSubNavProps> = ({
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
      <div
        ref={containerRef}
        className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start lg:justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white/90 border border-[#E5D7B7] shadow-xs"
      >
        {EXAMINATION_TABS.map((tab) => {
          const isActive =
            tab.route === activeRoute ||
            (activeRoute === 'examination' && tab.route === 'office-of-coe');
          return (
            <button
              key={tab.route}
              ref={isActive ? activeBtnRef : undefined}
              onClick={() => onNavigate(tab.route)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#28052B] text-white shadow-sm font-bold'
                  : 'text-[#28052B] hover:bg-[#FAF7F2] hover:text-[#BD8E36]'
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
