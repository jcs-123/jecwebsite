import React, { useState, useEffect } from 'react';
import {
  Zap, Users, GraduationCap, Sparkles, BookOpen,
  Award, Phone, Mail, Calendar, CheckCircle2, ChevronRight,
  Download, ExternalLink, FileText, MapPin, Laptop, Briefcase,
  Layers, ArrowRight, ShieldCheck, UserCheck, Compass, BatteryCharging,
  Sun, Gauge, Activity, PlugZap, Power
} from 'lucide-react';
import { EeeDepartmentSubNav, EeeTabId } from '../components/EeeDepartmentSubNav';

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
      {/* 1. Institutional Top Brand Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-1">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#E7D6C1]/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-lg shadow-sm border border-[#DFC06A]/40">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#28052B] tracking-tight">
                Jyothi Engineering College
              </h1>
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#7A647F] uppercase">
                ( A U T O N O M O U S )
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs italic font-serif text-[#C79628]">
            <span className="w-10 h-px bg-[#DFC06A]" />
            <span>Powering the Green Energy &amp; EV Transition.</span>
          </div>
        </div>
      </section>

      {/* 2. Top Category Pill Tabs Bar (People, Academics, Others) */}
      <EeeDepartmentSubNav activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* 3. Hero Header Section for Electrical & Electronics Engineering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-5">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#28052B] via-[#350A3A] to-[#1E0221] text-white p-6 sm:p-9 lg:p-10 overflow-hidden shadow-xl border border-[#DFC06A]/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFC06A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#F3CF7A] font-semibold">
                <Power className="w-4 h-4 text-[#DFC06A]" />
                <span>
                  {activeTab === 'people' && 'Electrical & Electronics • Grid Pioneers, EV Architects & Energy Fellows'}
                  {activeTab === 'academics' && 'Electrical & Electronics • Autonomous B.Tech, EV Drives & 100 kW Solar Microgrid'}
                  {activeTab === 'others' && 'Electrical & Electronics • DYNA-FEST, CURRENT Bulletin & EEEA / IEEE PES'}
                </span>
              </div>

              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {activeTab === 'people' && (
                  <>Visionary <span className="italic text-[#DFC06A]">Power Engineers</span>, Researchers &amp; Mentors</>
                )}
                {activeTab === 'academics' && (
                  <>Future-Ready <span className="italic text-[#DFC06A]">Clean Energy Curricula</span>, EV Labs &amp; Placements</>
                )}
                {activeTab === 'others' && (
                  <>Dynamic <span className="italic text-[#DFC06A]">DYNA-FEST Symposium, Publications</span> &amp; IEEE Chapters</>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light max-w-2xl">
                Empowering the future through sustainable electrical engineering: smart grid automation, electric vehicle motor drives, 100 kWp campus solar microgrids, and high-voltage testing.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-xl font-bold text-[#DFC06A]">60</div>
                  <div className="text-[10px] text-white/70">Seats Intake</div>
                </div>
                <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-xl font-bold text-[#DFC06A]">16.5 LPA</div>
                  <div className="text-[10px] text-white/70">Highest Package</div>
                </div>
                <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-xl font-bold text-[#DFC06A]">91.5%</div>
                  <div className="text-[10px] text-white/70">Placements</div>
                </div>
              </div>
              <div className="text-[10.5px] text-white/70 text-center font-mono">
                NBA Tier-1 Accredited • 100 kWp Solar Plant • Schneider Electric CoE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN BODY CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* ----------------- SECTION 1: PEOPLE TABS BAR & SEPARATE PAGES ----------------- */}
        {activeTab === 'people' && (
          <div className="space-y-6">
            {/* Horizontal Sub-Navigation Bar for People (Clean, unnumbered) */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs">
              <span className="text-xs font-bold text-[#28052B] flex items-center gap-1.5 shrink-0">
                <Users className="w-4 h-4 text-[#C79628]" />
                <span>People Sections:</span>
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  { id: 'bos', label: 'BOS' },
                  { id: 'advisory-board', label: 'Department Advisory Board' },
                  { id: 'faculty', label: 'Faculty Members' },
                  { id: 'non-teaching', label: 'Non Teaching Staff' },
                  { id: 'adjunct-faculty', label: 'Adjunct Faculty' },
                  { id: 'students', label: 'Student List' },
                  { id: 'alumni', label: 'Alumni' },
                ].map(item => {
                  const isActive = peopleSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectPeopleSection(item.id as EeePeopleSectionId)}
                      className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold border border-[#28052B] shadow-xs'
                          : 'bg-[#FAF7F2] text-[#28052B] font-medium border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Separate Page Views for People */}
            <div className="pt-1">
              {peopleSection === 'bos' && <EeeBOSPage />}
              {peopleSection === 'advisory-board' && <EeeAdvisoryBoardPage />}
              {peopleSection === 'faculty' && <EeeFacultyPage />}
              {peopleSection === 'non-teaching' && <EeeNonTeachingPage />}
              {peopleSection === 'adjunct-faculty' && <EeeAdjunctFacultyPage />}
              {peopleSection === 'students' && <EeeStudentListPage />}
              {peopleSection === 'alumni' && <EeeAlumniPage />}
            </div>
          </div>
        )}

        {/* ----------------- SECTION 2: ACADEMICS TABS BAR & SEPARATE PAGES ----------------- */}
        {activeTab === 'academics' && (
          <div className="space-y-6">
            {/* Horizontal Sub-Navigation Bar for Academics (Clean, unnumbered) */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs">
              <span className="text-xs font-bold text-[#28052B] flex items-center gap-1.5 shrink-0">
                <GraduationCap className="w-4 h-4 text-[#C79628]" />
                <span>Academics Sections:</span>
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  { id: 'course-btech', label: 'Course B.Tech' },
                  { id: 'career-placement', label: 'Career & Placement' },
                  { id: 'facilities', label: 'Facilities' },
                  { id: 'industry-tieup', label: 'Industry Tie-up' },
                  { id: 'achievements', label: 'Achievements' },
                  { id: 'research', label: 'Research' },
                  { id: 'syllabus', label: 'Syllabus & Curriculum' },
                ].map(item => {
                  const isActive = academicsSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectAcademicsSection(item.id as EeeAcademicsSectionId)}
                      className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold border border-[#28052B] shadow-xs'
                          : 'bg-[#FAF7F2] text-[#28052B] font-medium border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Separate Page Views for Academics */}
            <div className="pt-1">
              {academicsSection === 'course-btech' && <EeeCourseBtechPage />}
              {academicsSection === 'career-placement' && <EeeCareerPlacementPage />}
              {academicsSection === 'facilities' && <EeeFacilitiesPage />}
              {academicsSection === 'industry-tieup' && <EeeIndustryTieupPage />}
              {academicsSection === 'achievements' && <EeeAchievementsPage />}
              {academicsSection === 'research' && <EeeResearchPage />}
              {academicsSection === 'syllabus' && <EeeSyllabusPage />}
            </div>
          </div>
        )}

        {/* ----------------- SECTION 3: OTHERS TABS BAR & SEPARATE PAGES ----------------- */}
        {activeTab === 'others' && (
          <div className="space-y-6">
            {/* Horizontal Sub-Navigation Bar for Others (Clean, unnumbered) */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-[#E7D6C1] shadow-xs">
              <span className="text-xs font-bold text-[#28052B] flex items-center gap-1.5 shrink-0">
                <Sparkles className="w-4 h-4 text-[#C79628]" />
                <span>Others Sections:</span>
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  { id: 'events', label: 'Department Events' },
                  { id: 'bulletin', label: 'Department Bulletin' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'association', label: 'Association' },
                  { id: 'reach-us', label: 'Reach Us' },
                ].map(item => {
                  const isActive = othersSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectOthersSection(item.id as EeeOthersSectionId)}
                      className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                        isActive
                          ? 'bg-[#28052B] text-white font-bold border border-[#28052B] shadow-xs'
                          : 'bg-[#FAF7F2] text-[#28052B] font-medium border border-[#DFC06A]/40 hover:bg-[#28052B] hover:text-[#DFC06A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Separate Page Views for Others */}
            <div className="pt-1">
              {othersSection === 'events' && <EeeEventsPage />}
              {othersSection === 'bulletin' && <EeeBulletinPage />}
              {othersSection === 'gallery' && <EeeGalleryPage />}
              {othersSection === 'association' && <EeeAssociationPage />}
              {othersSection === 'reach-us' && <EeeReachUsPage />}
            </div>
          </div>
        )}

      </main>

      {/* 5. Bottom Admissions CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#28052B] via-[#350A3A] to-[#1E0221] text-white border border-[#DFC06A]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#DFC06A]">
              Admissions Open 2024–25
            </span>
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold">
              Join B.Tech in Electrical &amp; Electronics Engineering
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl font-light">
              Pioneer the future of electric mobility, renewable microgrids, and high-voltage power networks at Jyothi Engineering College.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={onOpenApply}
              className="px-6 py-3 rounded-xl bg-[#DFC06A] text-[#28052B] font-bold text-xs sm:text-sm hover:bg-[#F3CF7A] transition-all cursor-pointer shadow-md"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => handleSelectOthersSection('reach-us')}
              className="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-xs sm:text-sm hover:bg-white/20 transition-all cursor-pointer"
            >
              Contact EEE Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EeeDepartmentPage;
