import React, { useState, useEffect } from 'react';
import {
  Zap, Users, GraduationCap, Sparkles, BookOpen,
  Award, Phone, Mail, Calendar, CheckCircle2, ChevronRight,
  Download, ExternalLink, FileText, MapPin, Laptop, Briefcase,
  Layers, ArrowRight, ShieldCheck, UserCheck, Compass, BatteryCharging,
  Sun, Gauge, Activity, PlugZap, Power, Server
} from 'lucide-react';

// Subpage Views for Electrical & Electronics Engineering
import {
  EeeBOSPage,
  EeeAdvisoryBoardPage,
  EeeFacultyPage,
  EeeNonTeachingPage,
  EeeAdjunctFacultyPage,
  EeeStudentListPage,
  EeeAlumniPage
} from './eee/EeePeopleViews';

import {
  EeeCourseBtechPage,
  EeeCareerPlacementPage,
  EeeFacilitiesPage,
  EeeIndustryTieupPage,
  EeeAchievementsPage,
  EeeResearchPage,
  EeeSyllabusPage
} from './eee/EeeAcademicsViews';

import {
  EeeEventsPage,
  EeeBulletinPage,
  EeeGalleryPage,
  EeeAssociationPage,
  EeeReachUsPage
} from './eee/EeeOthersViews';

interface Props {
  subSection?: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

export type EeeTabId = 'people' | 'academics' | 'others';

export type EeePeopleSectionId =
  | 'bos'
  | 'advisory-board'
  | 'faculty'
  | 'non-teaching'
  | 'adjunct-faculty'
  | 'students'
  | 'alumni';

export type EeeAcademicsSectionId =
  | 'course-btech'
  | 'career-placement'
  | 'facilities'
  | 'industry-tieup'
  | 'achievements'
  | 'research'
  | 'syllabus';

export type EeeOthersSectionId =
  | 'events'
  | 'bulletin'
  | 'gallery'
  | 'association'
  | 'reach-us';

export const EeeDepartmentPage: React.FC<Props> = ({ subSection, onNavigate, onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<EeeTabId>('people');
  const [peopleSection, setPeopleSection] = useState<EeePeopleSectionId>('bos');
  const [academicsSection, setAcademicsSection] = useState<EeeAcademicsSectionId>('course-btech');
  const [othersSection, setOthersSection] = useState<EeeOthersSectionId>('events');

  // Handle incoming subSection prop from URL / Navigation
  useEffect(() => {
    if (subSection) {
      if (['bos', 'advisory-board', 'faculty', 'non-teaching', 'adjunct-faculty', 'students', 'alumni'].includes(subSection)) {
        setActiveTab('people');
        setPeopleSection(subSection as EeePeopleSectionId);
      } else if (['course-btech', 'career-placement', 'facilities', 'industry-tieup', 'achievements', 'research', 'syllabus'].includes(subSection)) {
        setActiveTab('academics');
        setAcademicsSection(subSection as EeeAcademicsSectionId);
      } else if (['events', 'bulletin', 'gallery', 'association', 'reach-us'].includes(subSection)) {
        setActiveTab('others');
        setOthersSection(subSection as EeeOthersSectionId);
      } else if (subSection === 'people') {
        setActiveTab('people');
      } else if (subSection === 'academics') {
        setActiveTab('academics');
      } else if (subSection === 'others') {
        setActiveTab('others');
      }
    }
  }, [subSection]);

  const handleTabChange = (tab: EeeTabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleSelectPeopleSection = (secId: EeePeopleSectionId) => {
    setPeopleSection(secId);
    onNavigate('dept-eee', secId);
    window.scrollTo({ top: 220, behavior: 'smooth' });
  };

  const handleSelectAcademicsSection = (secId: EeeAcademicsSectionId) => {
    setAcademicsSection(secId);
    onNavigate('dept-eee', secId);
    window.scrollTo({ top: 220, behavior: 'smooth' });
  };

  const handleSelectOthersSection = (secId: EeeOthersSectionId) => {
    setOthersSection(secId);
    onNavigate('dept-eee', secId);
    window.scrollTo({ top: 220, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A]">
      {/* 1. Institutional Brand Strip with Category Selectors matching screenshot */}
      <section className="bg-[#FAF7F2] border-b border-[#E8DFC8]/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-md ring-2 ring-[#DFC06A]/40 shrink-0">
              <span className="font-['Playfair_Display',serif] font-bold text-lg">J</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B] tracking-tight">
                  Jyothi Engineering College
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8A704C] bg-[#EFE7D8] px-2 py-0.5 rounded-full">
                  Autonomous
                </span>
              </div>
              <div className="text-xs text-[#6B5E51] font-medium">
                Department of Electrical &amp; Electronics Engineering
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Top 3 Main Category Tabs: People | Academics | Others */}
            <div className="inline-flex p-1 rounded-full bg-[#EFE8DA] border border-[#E0D4C0] shadow-inner text-xs font-semibold">
              {[
                { id: 'people', label: 'People' },
                { id: 'academics', label: 'Academics' },
                { id: 'others', label: 'Others' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as EeeTabId)}
                  className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#28052B] text-white shadow-sm font-bold'
                      : 'text-[#5B4F43] hover:text-[#28052B] hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs italic font-serif text-[#C79628] pl-2 border-l border-[#DFC06A]/40">
              <span className="w-6 h-px bg-[#DFC06A]" />
              <span>Excellence. Integrity. Trust.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Secondary Sub-Navigation Bar matching exact pill capsules in screenshot */}
      <section className="bg-white/80 backdrop-blur-xs border-b border-[#EADFC7] sticky top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-[#DFC06A]/50">
            <span className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
              {activeTab === 'people' && 'People'}
              {activeTab === 'academics' && 'Academics'}
              {activeTab === 'others' && 'Others'}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-nowrap">
            {activeTab === 'people' && (
              <>
                {[
                  { id: 'bos', label: 'BOS' },
                  { id: 'advisory-board', label: 'Department Advisory board' },
                  { id: 'faculty', label: 'Faculty members' },
                  { id: 'non-teaching', label: 'Non teaching staff' },
                  { id: 'adjunct-faculty', label: 'Adjunct faculty' },
                  { id: 'students', label: 'Student list' },
                  { id: 'alumni', label: 'Alumni' },
                ].map(item => {
                  const isActive = peopleSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectPeopleSection(item.id as EeePeopleSectionId)}
                      className={`px-5 py-2 rounded-full transition-all cursor-pointer text-xs font-semibold whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold border border-[#28052B] shadow-xs'
                          : 'bg-white text-[#28052B] border border-[#E5D7B7] hover:bg-[#FAF7F2] hover:text-[#BD8E36]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </>
            )}

            {activeTab === 'academics' && (
              <>
                {[
                  { id: 'course-btech', label: 'Course (B.Tech)' },
                  { id: 'career-placement', label: 'Career and placement' },
                  { id: 'facilities', label: 'Facilities' },
                  { id: 'industry-tieup', label: 'Industry tie-up' },
                  { id: 'achievements', label: 'Achievements' },
                  { id: 'research', label: 'Research' },
                  { id: 'syllabus', label: 'Syllabus and curriculum' },
                ].map(item => {
                  const isActive = academicsSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectAcademicsSection(item.id as EeeAcademicsSectionId)}
                      className={`px-5 py-2 rounded-full transition-all cursor-pointer text-xs font-semibold whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold border border-[#28052B] shadow-xs'
                          : 'bg-white text-[#28052B] border border-[#E5D7B7] hover:bg-[#FAF7F2] hover:text-[#BD8E36]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </>
            )}

            {activeTab === 'others' && (
              <>
                {[
                  { id: 'events', label: 'Department events' },
                  { id: 'bulletin', label: 'Department bulletin' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'association', label: 'Association' },
                  { id: 'reach-us', label: 'Reach us' },
                ].map(item => {
                  const isActive = othersSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectOthersSection(item.id as EeeOthersSectionId)}
                      className={`px-5 py-2 rounded-full transition-all cursor-pointer text-xs font-semibold whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold border border-[#28052B] shadow-xs'
                          : 'bg-white text-[#28052B] border border-[#E5D7B7] hover:bg-[#FAF7F2] hover:text-[#BD8E36]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>

      {/* 3. Hero Header Section (Deep Plum Gradient + EEE Clean Energy Photo + Curved Gold SVG) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#28052B] via-[#350A3A] to-[#250328] text-white overflow-hidden shadow-xl border border-[#DFC06A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[260px] sm:min-h-[290px]">
            {/* Left Column: Heading & Lead */}
            <div className="lg:col-span-6 p-6 sm:p-9 lg:p-10 flex flex-col justify-center space-y-3 z-10">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#DFC06A]">
                <span className="w-5 h-px bg-[#DFC06A]" />
                <span>Department of Electrical &amp; Electronics Engineering</span>
              </div>

              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {activeTab === 'people' && (
                  <>
                    Distinguished Power Engineers,<br />
                    <span className="italic text-[#DFC06A] font-normal">Grid Researchers &amp; Mentors</span>
                  </>
                )}
                {activeTab === 'academics' && (
                  <>
                    Clean Energy Curricula,<br />
                    <span className="italic text-[#DFC06A] font-normal">Smart Microgrid &amp; EV Labs</span>
                  </>
                )}
                {activeTab === 'others' && (
                  <>
                    DYNA-FEST Tech Fests,<br />
                    <span className="italic text-[#DFC06A] font-normal">CURRENT Bulletins &amp; IEEE PES</span>
                  </>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light max-w-xl">
                Empowering the future through sustainable electrical engineering: smart grid automation, electric vehicle motor drives, 100 kWp campus solar microgrids, and high-voltage testing on an autonomous UGC curriculum.
              </p>
            </div>

            {/* Right Column: Electrical & Electronics Photo with Golden Curved Mask */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[240px] lg:min-h-full bg-gradient-to-br from-[#28052B] via-[#350A3A] to-[#1E0221] flex items-center justify-center">
              {/* Subtle Tech Power Grid Pattern Fallback */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#DFC06A_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Golden Curved Border Accent on the left of photo */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-16 z-10 pointer-events-none">
                <svg viewBox="0 0 100 500" preserveAspectRatio="none" className="w-full h-full text-[#350A3A] fill-current">
                  <path d="M0,0 L40,0 C10,200 90,300 10,500 L0,500 Z" />
                </svg>
                {/* Gold Highlight Line */}
                <svg viewBox="0 0 100 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full stroke-[#DFC06A] fill-none stroke-[3]">
                  <path d="M40,0 C10,200 90,300 10,500" />
                </svg>
              </div>

              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
                alt="Electrical and renewable energy power infrastructure"
                className="w-full h-full object-cover object-center lg:object-right filter brightness-95"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = '1';
                    target.src = '/assets/library_hero_students.jpg';
                  } else if (target.dataset.triedFallback === '1') {
                    target.dataset.triedFallback = '2';
                    target.src = 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1200';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* ----------------- PEOPLE SECTION ----------------- */}
        {activeTab === 'people' && (
          <div className="pt-1">
            {peopleSection === 'bos' && <EeeBOSPage />}
            {peopleSection === 'advisory-board' && <EeeAdvisoryBoardPage />}
            {peopleSection === 'faculty' && <EeeFacultyPage />}
            {peopleSection === 'non-teaching' && <EeeNonTeachingPage />}
            {peopleSection === 'adjunct-faculty' && <EeeAdjunctFacultyPage />}
            {peopleSection === 'students' && <EeeStudentListPage />}
            {peopleSection === 'alumni' && <EeeAlumniPage />}
          </div>
        )}

        {/* ----------------- ACADEMICS SECTION ----------------- */}
        {activeTab === 'academics' && (
          <div className="pt-1">
            {academicsSection === 'course-btech' && <EeeCourseBtechPage onOpenApply={onOpenApply} />}
            {academicsSection === 'career-placement' && <EeeCareerPlacementPage />}
            {academicsSection === 'facilities' && <EeeFacilitiesPage />}
            {academicsSection === 'industry-tieup' && <EeeIndustryTieupPage />}
            {academicsSection === 'achievements' && <EeeAchievementsPage />}
            {academicsSection === 'research' && <EeeResearchPage />}
            {academicsSection === 'syllabus' && <EeeSyllabusPage />}
          </div>
        )}

        {/* ----------------- OTHERS SECTION ----------------- */}
        {activeTab === 'others' && (
          <div className="pt-1">
            {othersSection === 'events' && <EeeEventsPage />}
            {othersSection === 'bulletin' && <EeeBulletinPage />}
            {othersSection === 'gallery' && <EeeGalleryPage />}
            {othersSection === 'association' && <EeeAssociationPage />}
            {othersSection === 'reach-us' && <EeeReachUsPage onOpenApply={onOpenApply} />}
          </div>
        )}

      </main>
    </div>
  );
};

export default EeeDepartmentPage;
