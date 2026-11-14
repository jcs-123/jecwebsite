import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { FacultyPage } from './pages/FacultyPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { ClubsSocietiesPage } from './pages/ClubsSocietiesPage';
import { TharangFestPage } from './pages/TharangFestPage';
import { CelebrationsPage } from './pages/CelebrationsPage';
import { SportsArenaPage } from './pages/SportsArenaPage';
import { NssOutreachPage } from './pages/NssOutreachPage';
import { ResearchPage } from './pages/ResearchPage';
import { TataIiicPage } from './pages/TataIiicPage';
import { JyothiConsultancyPage } from './pages/JyothiConsultancyPage';
import { MitFabLabPage } from './pages/MitFabLabPage';
import { JyothiTbiPage } from './pages/JyothiTbiPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { AutonomousPage } from './pages/AutonomousPage';
import { AlumniPage } from './pages/AlumniPage';
import { LoginPage } from './pages/LoginPage';
import { IQACPage } from './pages/IQACPage';
import { ApplyModal } from './components/ApplyModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { SearchModal } from './components/SearchModal';
import { AlumniModal } from './components/AlumniModal';
import { Phone, MessageSquare, Sparkles, ArrowUp } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [subParam, setSubParam] = useState<string | undefined>(undefined);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAlumniOpen, setIsAlumniOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with URL Hash for seamless routing and back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const [page, sub] = hash.split('/');
        setCurrentPage(page || 'home');
        setSubParam(sub);
      } else {
        setCurrentPage('home');
        setSubParam(undefined);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll for "scroll to top" button
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const navigateTo = (page: string, subId?: string) => {
    setCurrentPage(page);
    setSubParam(subId);
    if (subId) {
      window.location.hash = `${page}/${subId}`;
    } else {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-jyothi-charcoal-800 font-sans selection:bg-jyothi-purple-800 selection:text-jyothi-gold-300">
      
      {/* Primary Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAlumni={() => navigateTo('alumni')}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            subSection={subParam}
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            subSection={subParam}
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'departments' && (
          <DepartmentsPage
            selectedDeptId={subParam}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'faculty' && (
          <FacultyPage />
        )}

        {currentPage === 'student-life' && (
          <StudentLifePage
            subSection={subParam}
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'clubs-societies' && (
          <ClubsSocietiesPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'tharang-fest' && (
          <TharangFestPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'celebrations' && (
          <CelebrationsPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'sports-arena' && (
          <SportsArenaPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'nss-outreach' && (
          <NssOutreachPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'research' && (
          <ResearchPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'tata-iiic' && (
          <TataIiicPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'jyothi-consultancy' && (
          <JyothiConsultancyPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'mit-fablab' && (
          <MitFabLabPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'jyothi-tbi' && (
          <JyothiTbiPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'admissions' && (
          <AdmissionsPage
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'placements' && (
          <PlacementsPage
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage
            selectedFacilityId={subParam}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'autonomous' && (
          <AutonomousPage
            subSection={subParam}
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'alumni' && (
          <AlumniPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'login' && (
          <LoginPage
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentPage === 'iqac' && (
          <IQACPage
            subSection={subParam}
            onNavigate={navigateTo}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
      />

      {/* Floating Quick Action Buttons - Only appears after scrolling down, with sleek non-blocking placement */}
      {showScrollTop && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 animate-slide-up">
          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-jyothi-purple-900 border border-slate-200 shadow-xl hover:bg-jyothi-purple-50 hover:text-jyothi-purple-700 flex items-center justify-center transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Quick Admission Helpline Float */}
          <a
            href="tel:+919526924455"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-jyothi-purple-950/95 backdrop-blur-md text-jyothi-gold-300 font-bold text-xs shadow-xl border border-jyothi-gold-400/40 hover:scale-105 transition-transform"
          >
            <Phone className="w-3.5 h-3.5 text-jyothi-gold-400 animate-bounce" />
            <span>Admissions: +91 95269 24455</span>
          </a>

          {/* Fast Apply Now Pill */}
          <button
            onClick={() => setIsApplyOpen(true)}
            className="px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-jyothi-gold-400 via-jyothi-gold-300 to-jyothi-gold-500 text-jyothi-purple-950 font-black text-xs sm:text-sm shadow-glow-gold hover:shadow-2xl transition-all flex items-center gap-2 transform hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-jyothi-purple-950 animate-pulse" />
            <span>Apply Now 2025</span>
          </button>
        </div>
      )}

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />

      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      <AlumniModal
        isOpen={isAlumniOpen}
        onClose={() => setIsAlumniOpen(false)}
        onNavigateHomeAlumni={() => {
          navigateTo('home');
          setTimeout(() => {
            const el = document.getElementById('alumni');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }}
      />

    </div>
  );
}
export default App;

