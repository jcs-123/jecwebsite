import React, { useState, useEffect } from 'react';
import {
  Atom, Users, GraduationCap, Sparkles, BookOpen, Building2,
  Award, Phone, Mail, Calendar, CheckCircle2, ChevronRight,
  Download, ExternalLink, FileText, MapPin, Laptop, Briefcase,
  Layers, ArrowRight, ShieldCheck, UserCheck, Compass, Cpu
} from 'lucide-react';

// Subpage Views for Basic Science & Humanities
import {
  BshBOSPage,
  BshFacultyPage,
  BshAdjunctFacultyPage,
  BshStudentListPage,
  BshAlumniPage
} from './bsh/BshPeopleViews';

import {
  BshFacilitiesPage,
  BshAchievementsPage,
  BshResearchPage,
  BshSyllabusPage
} from './bsh/BshAcademicsViews';

import {
  BshEventsPage,
  BshGalleryPage,
  BshReachUsPage
} from './bsh/BshOthersViews';

interface Props {
  subSection?: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

export type BshTabId = 'people' | 'academics' | 'others';
export type BshPeopleSectionId = 'bos' | 'faculty' | 'adjunct-faculty' | 'students' | 'alumni';
export type BshAcademicsSectionId = 'facilities' | 'achievements' | 'research' | 'syllabus';
export type BshOthersSectionId = 'events' | 'gallery' | 'reach-us';

export const BshDepartmentPage: React.FC<Props> = ({ subSection, onNavigate, onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<BshTabId>('people');
  const [peopleSection, setPeopleSection] = useState<BshPeopleSectionId>('bos');
  const [academicsSection, setAcademicsSection] = useState<BshAcademicsSectionId>('facilities');
  const [othersSection, setOthersSection] = useState<BshOthersSectionId>('events');

  // Handle incoming subSection prop from URL / Navigation
  useEffect(() => {
    if (subSection) {
      if (['bos', 'faculty', 'adjunct-faculty', 'students', 'alumni'].includes(subSection)) {
        setActiveTab('people');
        setPeopleSection(subSection as BshPeopleSectionId);
      } else if (['facilities', 'achievements', 'research', 'syllabus'].includes(subSection)) {
        setActiveTab('academics');
        setAcademicsSection(subSection as BshAcademicsSectionId);
      } else if (['events', 'gallery', 'reach-us'].includes(subSection)) {
        setActiveTab('others');
        setOthersSection(subSection as BshOthersSectionId);
      } else if (subSection === 'people') {
        setActiveTab('people');
      } else if (subSection === 'academics') {
        setActiveTab('academics');
      } else if (subSection === 'others') {
        setActiveTab('others');
      }
    }
  }, [subSection]);

  const handleTabChange = (tab: BshTabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSelectPeopleSection = (secId: BshPeopleSectionId) => {
    setPeopleSection(secId);
    onNavigate('dept-bsh', secId);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleSelectAcademicsSection = (secId: BshAcademicsSectionId) => {
    setAcademicsSection(secId);
    onNavigate('dept-bsh', secId);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleSelectOthersSection = (secId: BshOthersSectionId) => {
    setOthersSection(secId);
    onNavigate('dept-bsh', secId);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#28052B] pb-24 selection:bg-[#28052B] selection:text-[#F3CF7A]">
      {/* 1. Institutional Top Brand Header Bar matching the luxury layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#E7D6C1]/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-lg shadow-sm border border-[#DFC06A]/40 shrink-0">
              <Atom className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#28052B] tracking-tight leading-none">
                Jyothi Engineering College
              </h1>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#7A647F] uppercase mt-1">
                ( A U T O N O M O U S )
              </div>
            </div>

            <div className="hidden lg:block h-7 w-px bg-[#E7D6C1] mx-3" />

            <div className="hidden lg:block text-xs sm:text-sm text-[#28052B] font-medium tracking-tight">
              Department of Basic Science &amp; Humanities
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            {/* Top Navigation Pill Group */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/90 border border-[#E5D7B7] shadow-2xs">
              {[
                { id: 'people', label: 'People' },
                { id: 'academics', label: 'Academics' },
                { id: 'others', label: 'Others' }
              ].map(t => {
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleTabChange(t.id as BshTabId)}
                    className={`px-5 sm:px-6 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#28052B] text-white shadow-xs font-bold'
                        : 'text-[#28052B] hover:bg-[#FAF7F2] hover:text-[#BD8E36]'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Institutional Tagline */}
            <div className="hidden xl:flex items-center gap-2 text-xs italic font-serif text-[#C79628]">
              <span className="w-6 h-px bg-[#DFC06A]" />
              <span>Excellence, Integrity, Trust.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation Bar matching luxury design (Category label + Pill Buttons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-3">
        <div className="flex flex-wrap items-center gap-3">
          {/* Active Category Title with separator */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B] capitalize">
              {activeTab}
            </span>
            <span className="h-5 w-px bg-[#C79628]/60" />
          </div>

          {/* Sub-Tabs Pills Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs overflow-x-auto no-scrollbar py-1">
            {activeTab === 'people' && (
              <>
                {[
                  { id: 'bos', label: 'BOS' },
                  { id: 'faculty', label: 'Faculty Members' },
                  { id: 'adjunct-faculty', label: 'Adjunct Faculty' },
                  { id: 'students', label: 'Student List' },
                  { id: 'alumni', label: 'Alumni' },
                ].map(item => {
                  const isActive = peopleSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectPeopleSection(item.id as BshPeopleSectionId)}
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
                  { id: 'facilities', label: 'Facilities' },
                  { id: 'achievements', label: 'Achievements' },
                  { id: 'research', label: 'Research' },
                  { id: 'syllabus', label: 'Syllabus & Curriculum' },
                ].map(item => {
                  const isActive = academicsSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectAcademicsSection(item.id as BshAcademicsSectionId)}
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
                  { id: 'events', label: 'Department Events' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'reach-us', label: 'Reach Us' },
                ].map(item => {
                  const isActive = othersSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectOthersSection(item.id as BshOthersSectionId)}
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

      {/* 3. Hero Header Section (Deep Plum Gradient + Science / Faculty Discussion Photo + Gold Curve) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#28052B] via-[#350A3A] to-[#250328] text-white overflow-hidden shadow-xl border border-[#DFC06A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[260px] sm:min-h-[290px]">
            {/* Left Column: Heading & Lead */}
            <div className="lg:col-span-6 p-6 sm:p-9 lg:p-10 flex flex-col justify-center space-y-3 z-10">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#DFC06A]">
                <span className="w-5 h-px bg-[#DFC06A]" />
                <span>Department of Basic Science &amp; Humanities</span>
              </div>

              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {activeTab === 'people' && (
                  <>
                    Distinguished Mathematicians,<br />
                    <span className="italic text-[#DFC06A] font-normal">Scientists &amp; Educators</span>
                  </>
                )}
                {activeTab === 'academics' && (
                  <>
                    Foundational Curricula,<br />
                    <span className="italic text-[#DFC06A] font-normal">Advanced Labs &amp; Scientific Inquiry</span>
                  </>
                )}
                {activeTab === 'others' && (
                  <>
                    National Science Symposia,<br />
                    <span className="italic text-[#DFC06A] font-normal">Freshers Induction &amp; Outreach</span>
                  </>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light max-w-xl">
                Nurturing the mathematical precision, physical intuition, chemical analytical rigor, and communicative eloquence essential for world-class engineers.
              </p>
            </div>

            {/* Right Column: Faculty Team / Science Photo with Golden Curved Mask */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[240px] lg:min-h-full bg-gradient-to-br from-[#28052B] via-[#350A3A] to-[#1E0221] flex items-center justify-center">
              {/* Subtle Science Grid Pattern Fallback */}
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
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200"
                alt="Basic Science & Humanities laboratory and academic research"
                className="w-full h-full object-cover object-center lg:object-right filter brightness-95"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = '1';
                    target.src = '/assets/jyothi_campus_hero.jpg';
                  } else if (target.dataset.triedFallback === '1') {
                    target.dataset.triedFallback = '2';
                    target.src = 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200';
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
            {peopleSection === 'bos' && <BshBOSPage />}
            {peopleSection === 'faculty' && <BshFacultyPage />}
            {peopleSection === 'adjunct-faculty' && <BshAdjunctFacultyPage />}
            {peopleSection === 'students' && <BshStudentListPage />}
            {peopleSection === 'alumni' && <BshAlumniPage />}
          </div>
        )}

        {/* ----------------- ACADEMICS SECTION ----------------- */}
        {activeTab === 'academics' && (
          <div className="pt-1">
            {academicsSection === 'facilities' && <BshFacilitiesPage />}
            {academicsSection === 'achievements' && <BshAchievementsPage />}
            {academicsSection === 'research' && <BshResearchPage />}
            {academicsSection === 'syllabus' && <BshSyllabusPage />}
          </div>
        )}

        {/* ----------------- OTHERS SECTION ----------------- */}
        {activeTab === 'others' && (
          <div className="pt-1">
            {othersSection === 'events' && <BshEventsPage />}
            {othersSection === 'gallery' && <BshGalleryPage />}
            {othersSection === 'reach-us' && <BshReachUsPage onOpenApply={onOpenApply} />}
          </div>
        )}

      </main>

      {/* 5. Bottom Admissions CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#28052B] via-[#350A3A] to-[#1E0221] text-white border border-[#DFC06A]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#DFC06A]">
              Foundational Engineering Excellence
            </span>
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold">
              Explore First-Year Sciences at Jyothi
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl font-light">
              Building profound analytical depth in Mathematics, Physics, Chemistry, and Humanities to empower visionary engineers.
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
              Contact BSH Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BshDepartmentPage;
