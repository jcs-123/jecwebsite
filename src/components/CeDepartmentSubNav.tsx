import React, { useEffect, useRef } from 'react';

export const CE_TABS = [
  { id: 'people', label: 'People' },
  { id: 'academics', label: 'Academics' },
  { id: 'others', label: 'Others' },
] as const;

export type CeTabId = (typeof CE_TABS)[number]['id'];

interface CeDepartmentSubNavProps {
  activeTab: CeTabId | string;
  onSelectTab: (tabId: CeTabId) => void;
}

export const CeDepartmentSubNav: React.FC<CeDepartmentSubNavProps> = ({
  activeTab,
  onSelectTab,
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
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div
        ref={containerRef}
        className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-center gap-1.5 sm:gap-3 p-1.5 rounded-full bg-white/95 border border-[#E5D7B7] shadow-xs max-w-xl mx-auto"
      >
        {CE_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={isActive ? activeBtnRef : undefined}
              onClick={() => onSelectTab(tab.id)}
              className={`px-5 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
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

export default CeDepartmentSubNav;
