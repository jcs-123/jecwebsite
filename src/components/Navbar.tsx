import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, Search, Sparkles, Phone, Compass,
  ExternalLink, GraduationCap, Building2, Users, BookOpen,
  Briefcase, Award, ShieldCheck, Microscope, HeartHandshake,
  ChevronRight, MapPin, Layers, LogIn
} from 'lucide-react';
import { DEPARTMENTS, COLLEGE_INFO } from '../data/collegeData';

interface Props {
  currentPage: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenSearch: () => void;
  onOpenAlumni?: () => void;
}

export const Navbar: React.FC<Props> = ({
  currentPage,
  onNavigate,
  onOpenApply,
  onOpenTour,
  onOpenSearch,
  onOpenAlumni
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current && !mobileMenuOpen) {
        setHeaderHeight(navRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [mobileMenuOpen, isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Safe hover with debounce delay to avoid accidental closes
  const handleMouseEnter = (itemId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms grace period prevents flicker
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'about',
      label: 'About',
      dropdown: [
        { label: 'Overview & History', page: 'about', section: 'overview', desc: 'Estd. 2002 by Trichur Archdiocese' },
        { label: 'Vision, Mission & Values', page: 'about', section: 'vision', desc: 'Creating technology leaders', badge: 'Core' },
        { label: '25-Year Roadmap', page: 'about', section: 'roadmap', desc: '2002 to 2027+ Silver Jubilee milestones', badge: 'Milestones' },
        { label: 'Autonomous Governance & Syllabi', page: 'autonomous', desc: 'Governing Body, BoS, Regulations, CBCS & Calendar', badge: 'UGC' },
        { label: 'Administration', page: 'autonomous', desc: 'Academic & administrative governance' },
        { label: 'Management', page: 'about', section: 'leadership', desc: 'Catholic Archdiocese of Trichur & JCS' },
        { label: 'Leadership & Trust', page: 'about', section: 'leadership', desc: 'Governing board and trustees' },
        { label: '30-Acre Campus & Labs', page: 'about', section: 'campus', desc: 'Eco-sanctuary & MIT FabLab' },
        { label: 'Accreditation NAAC and NBA', page: 'iqac', desc: 'NAAC A Grade, NBA & NIRF', badge: 'IQAC' },
        { label: 'Policy Documents', page: 'iqac', section: 'policies', desc: 'Institutional charters & quality policies' },
        { label: 'JEC News', page: 'home', section: 'jec-news', desc: 'Latest campus news, events & circulars' },
      ]
    },
    {
      id: 'departments',
      label: 'Departments',
      isWide: true,
      dropdown: DEPARTMENTS.map(d => ({
        label: d.name,
        page: 'departments',
        section: d.id,
        badge: d.code,
        desc: `${d.intake} Seats • ${d.degree}`
      }))
    },
    { id: 'faculty', label: 'Faculty' },
    {
      id: 'student-life',
      label: 'Student Life',
      dropdown: [
        { label: 'Clubs and Societies', page: 'clubs-societies', desc: 'IEEE, CSI, IEDC, FOSS & creative clubs' },
        { label: 'Tharang National Fest', page: 'tharang-fest', desc: 'South India tech-cultural fiesta', badge: 'Fest' },
        { label: 'Celebrations', page: 'celebrations', desc: 'Onam, Christmas, Arts Day & Graduation' },
        { label: 'Sports Complex and Arena', page: 'sports-arena', desc: 'Football turf, floodlit courts & gym' },
        { label: 'NSS and Social Outreach', page: 'nss-outreach', desc: 'NSS Units 140 & 591 community welfare' },
      ]
    },
    {
      id: 'research',
      label: 'Research',
      dropdown: [
        { label: 'MIT FabLab Kerala', page: 'research', section: 'centres', desc: 'Rapid hardware prototyping center' },
        { label: 'Jyothi TBI Incubator', page: 'research', section: 'tbi', desc: '18+ incubated startups' },
        { label: 'Patents & Publications', page: 'research', section: 'patents', desc: '42+ filed patents & papers' },
        { label: 'Funded Projects & MoUs', page: 'research', section: 'projects', desc: 'Govt & industry sponsored' },
      ]
    },
    {
      id: 'admissions',
      label: 'Admissions',
      dropdown: [
        { label: 'B.Tech Admissions 2025-26', page: 'admissions', section: 'btech', desc: '7 Engineering streams' },
        { label: 'M.Tech & Ph.D. Research', page: 'admissions', section: 'pg', desc: 'Postgraduate specializations' },
        { label: 'Eligibility & Seat Matrix', page: 'admissions', section: 'eligibility', desc: 'KEAM, Management & NRI' },
        { label: 'Merit Scholarships', page: 'admissions', section: 'scholarships', desc: '₹3+ Crores yearly grant pool' },
        { label: 'Admission Enquiry', page: 'admissions', section: 'enquiry', desc: 'Direct counselor assistance' },
      ]
    },
    {
      id: 'placements',
      label: 'Placements',
      dropdown: [
        { label: 'Placement Records & Stats', page: 'placements', section: 'stats', desc: '₹24 LPA highest package' },
        { label: 'Corporate Recruiters', page: 'placements', section: 'recruiters', desc: '94+ companies visited' },
        { label: 'Career Guidance Cell', page: 'placements', section: 'training', desc: '4-year training curriculum' },
        { label: 'Industry Collaborations', page: 'placements', section: 'mous', desc: 'Corporate tech partnerships' },
      ]
    },
    {
      id: 'facilities',
      label: 'Facilities',
      dropdown: [
        { label: 'Central Digital Library', page: 'facilities', section: 'fac-library', desc: '42,000+ volumes and e-journals' },
        { label: 'Campus Hostels & Dining', page: 'facilities', section: 'fac-hostel', desc: 'Separate modern residences' },
        { label: 'College Bus Fleet Network', page: 'facilities', section: 'fac-transport', desc: '25+ routes across 3 districts' },
        { label: 'Auditorium & Sports Ground', page: 'facilities', section: 'fac-sports', desc: '1,200 capacity hall & athletic turf' },
      ]
    },
  ];

  const handleNavClick = (pageId: string, subId?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(pageId, subId);
    if (!subId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileDropdown = (id: string) => {
    setMobileExpanded(mobileExpanded === id ? null : id);
  };

  return (
    <>
    <header ref={navRef} className="fixed top-0 left-0 right-0 md:relative md:top-auto md:left-auto md:right-auto z-50 w-full transition-all duration-300">

      {/* 1. Top Utility Info Bar (Desktop & Tablet only; mobile uses Quick Links in drawer) */}
      <div className="hidden md:block bg-[#170524] text-slate-200 text-xs py-2 px-6 md:px-8 border-b border-[#DFC06A]/25 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-3">

          {/* Credentials / Affiliations (Left) */}
          <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-[10.5px] sm:text-xs py-0.5">
            <button
              onClick={() => handleNavClick('autonomous')}
              className="inline-flex items-center gap-1 text-[#DFC06A] hover:text-white transition-colors font-bold tracking-wide cursor-pointer group whitespace-nowrap"
              title="Click to view UGC Autonomous Governance, Regulations & Syllabi"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FDE68A] group-hover:scale-110 transition-transform shrink-0" />
              <span className="group-hover:underline">Autonomous Institution</span>
            </button>
            <span className="text-slate-600 select-none font-light">|</span>
            <button
              onClick={() => handleNavClick('iqac')}
              className={`inline-flex items-center gap-1 transition-colors font-medium cursor-pointer group whitespace-nowrap ${
                currentPage === 'iqac'
                  ? 'text-[#DFC06A] font-bold'
                  : 'text-slate-200 hover:text-[#DFC06A]'
              }`}
              title="Internal Quality Assurance Cell (IQAC) - NAAC A Grade & NBA Accreditations"
            >
              <Award className="w-3.5 h-3.5 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0 hidden sm:inline" />
              <span className="group-hover:underline">
                NAAC A Grade • NBA<span className="hidden sm:inline"> Accredited B.Tech</span>
              </span>
            </button>
            <span className="text-slate-600 select-none font-light hidden lg:inline">|</span>
            <span className="hidden lg:inline text-slate-300">
              Affiliated to KTU • Managed by Thrissur Archdiocese
            </span>
          </div>

          {/* Quick Contact, 360 Tour, Alumni & Portals (Right) */}
          <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-2.5 gap-y-1 text-[10.5px] sm:text-xs md:ml-auto py-0.5">

            {/* 360° Campus Tour Button (Desktop Only) */}
            <button
              onClick={onOpenTour}
              className="hidden md:inline-flex items-center gap-1.5 text-[#FDE68A] hover:text-white transition-colors font-bold cursor-pointer group"
              title="Launch 360° Virtual Campus Experience"
            >
              <Compass className="w-3.5 h-3.5 text-[#DFC06A] group-hover:rotate-45 transition-transform shrink-0 animate-spin-slow" />
              <span>360° Campus Tour</span>
            </button>

            <span className="text-slate-600 select-none font-light hidden md:inline">|</span>

            {/* Helpline Phone */}
            <a
              href="tel:+919526924455"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#DFC06A] transition-colors font-semibold"
              title="Call Admissions Helpline"
            >
              <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>+91 95269 24455</span>
            </a>

            <span className="text-slate-600 select-none font-light">|</span>

            {/* Alumni Network Button */}
            <button
              onClick={() => handleNavClick('alumni')}
              className={`inline-flex items-center gap-1.5 transition-colors font-semibold cursor-pointer group ${currentPage === 'alumni'
                  ? 'text-[#DFC06A] font-bold'
                  : 'text-slate-200 hover:text-[#DFC06A]'
                }`}
              title="Jyothi Alumni Association & Global Directory"
            >
              <GraduationCap className={`w-3.5 h-3.5 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0 ${currentPage === 'alumni' ? 'scale-110' : ''
                }`} />
              <span>Alumni</span>
            </button>

            <span className="text-slate-600 select-none font-light">|</span>

            {/* Campus Portals Login */}
            <button
              onClick={() => handleNavClick('login')}
              className={`inline-flex items-center gap-1.5 transition-colors font-semibold cursor-pointer group ${currentPage === 'login'
                  ? 'text-[#DFC06A] font-bold'
                  : 'text-slate-200 hover:text-[#DFC06A]'
                }`}
              title="Campus Portals Login (Student, Faculty, Parent, Hostel)"
            >
              <LogIn className="w-3.5 h-3.5 text-[#DFC06A] group-hover:scale-110 transition-transform shrink-0" />
              <span>Login</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Pristine White Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-white ${isScrolled
            ? 'shadow-md md:shadow-xs py-2 md:py-3 border-b border-slate-200'
            : 'py-2.5 sm:py-3 border-b border-slate-200/80 shadow-xs'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-2">

          {/* Brand Vector Logo (Dark Royal Purple on White Canvas) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left focus:outline-none shrink-0"
            aria-label="Jyothi Engineering College Home"
          >
            <div className="h-8 xs:h-9 sm:h-10 md:h-11 xl:h-11 w-auto transition-transform group-hover:scale-[1.02]">
              <img
                src="/assets/jyothi_logo_dark.svg"
                alt="Jyothi Engineering College (Autonomous)"
                className="h-full w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop Navigation Links (Never wraps, perfect spacing, hover bridge) */}
          <div className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 shrink-0">
            {navItems.map((item) => {
              const isOpen = activeDropdown === item.id;
              const hasDropdown = Boolean(item.dropdown);

              return (
                <div
                  key={item.id}
                  className="relative group shrink-0"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => {
                      if (hasDropdown) {
                        setActiveDropdown(isOpen ? null : item.id);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                    className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-xl transition-all flex items-center gap-1 select-none whitespace-nowrap shrink-0 ${currentPage === item.id || isOpen
                        ? 'text-jyothi-purple-900 bg-jyothi-purple-50 font-bold border border-jyothi-purple-200/80 shadow-xs'
                        : 'text-slate-700 hover:text-jyothi-purple-900 hover:bg-slate-100/90'
                      }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-jyothi-purple-900' : 'text-slate-400'
                        }`} />
                    )}
                  </button>

                  {/* Desktop Dropdown Flyout with Zero-Gap Hover Bridge (pt-2 wrapper) */}
                  {hasDropdown && isOpen && (
                    <div
                      className={`absolute top-full pt-2 z-50 animate-fade-in ${item.id === 'facilities' || item.id === 'placements' || item.id === 'admissions'
                          ? 'right-0'
                          : 'left-0'
                        }`}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={`rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2.5 ring-1 ring-black/5 ${item.isWide ? 'w-96' : 'w-80'
                        }`}>

                        {/* Dropdown Header Card */}
                        <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold text-jyothi-purple-950 uppercase tracking-wider">
                            {item.label} Explorer
                          </span>
                          <button
                            onClick={() => handleNavClick(item.id)}
                            className="text-[11px] text-jyothi-purple-700 hover:text-jyothi-purple-950 font-semibold flex items-center gap-0.5 hover:underline"
                          >
                            <span>Overview</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Dropdown Items List */}
                        <div className="space-y-1">
                          {item.dropdown?.map((sub, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavClick(sub.page, sub.section)}
                              className="w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start justify-between gap-2 group/item hover:bg-jyothi-purple-50 text-slate-700 hover:text-jyothi-purple-950"
                            >
                              <div className="min-w-0">
                                <div className="font-bold flex items-center gap-1.5 text-slate-800 group-hover/item:text-jyothi-purple-900 whitespace-nowrap">
                                  <span>{sub.label}</span>
                                </div>
                                {'desc' in sub && (
                                  <div className="text-[11px] text-slate-400 group-hover/item:text-slate-600 truncate mt-0.5">
                                    {sub.desc}
                                  </div>
                                )}
                              </div>

                              {'badge' in sub && (
                                <span className="px-2 py-0.5 rounded-md text-[10px] bg-jyothi-purple-100 text-jyothi-purple-900 font-mono font-bold shrink-0 mt-0.5">
                                  {sub.badge}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Right Action Buttons (Search & Apply Now & Mobile Menu Toggle) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="w-9 h-9 xl:w-auto xl:h-auto xl:px-3 xl:py-1.5 rounded-full xl:rounded-xl bg-[#F3F1F7] hover:bg-[#EAE5F2] border border-slate-200/70 text-[#250836] text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-2xs whitespace-nowrap shrink-0"
              title="Search Courses, Faculty & Facilities"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-[#250836] shrink-0" />
              <span className="hidden 2xl:inline">Search</span>
            </button>

            {/* Fast Apply Now Button */}
            <button
              onClick={onOpenApply}
              className="px-3.5 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#F6CE5E] via-[#F2BE42] to-[#E8AE2F] text-[#250836] font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1.5 active:scale-[0.97] whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#250836] shrink-0" />
              <span>Apply Now</span>
            </button>

            {/* Responsive Hamburger Toggle for Tablet & Mobile (visible on < xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded-xl bg-white hover:bg-slate-50 border border-[#250836]/75 text-[#250836] flex items-center justify-center transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

          </div>

        </div>

        {/* 3. Fully Responsive Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-7 space-y-5 max-h-[85vh] overflow-y-auto animate-fade-in shadow-2xl">

            {/* Mobile Navigation List with Clean Bordered Cards */}
            <div className="space-y-1.5">
              {/* Home Row */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-2.5 px-4 text-[13.5px] rounded-xl border transition-colors flex items-center justify-between ${
                  currentPage === 'home'
                    ? 'bg-[#EFE8F6] border-[#E4D7F0] text-[#250836] font-bold'
                    : 'bg-white border-slate-200/80 text-[#250836] font-semibold hover:bg-slate-50'
                }`}
              >
                <span>Home</span>
              </button>

              {navItems.map((item) => {
                const hasDropdown = Boolean(item.dropdown);
                const isExpanded = mobileExpanded === item.id;
                const isCurrent = currentPage === item.id;

                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border overflow-hidden transition-colors ${
                      isCurrent
                        ? 'bg-[#EFE8F6] border-[#E4D7F0]'
                        : 'bg-white border-slate-200/80'
                    }`}
                  >

                    {/* Header Row */}
                    <button
                      onClick={() => {
                        if (hasDropdown) {
                          toggleMobileDropdown(item.id);
                        } else {
                          handleNavClick(item.id);
                        }
                      }}
                      className={`w-full text-left py-2.5 px-4 text-[13.5px] transition-colors flex items-center justify-between ${
                        isCurrent
                          ? 'text-[#250836] font-bold'
                          : 'text-[#250836] font-semibold hover:bg-slate-50/80'
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#250836]' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Accordion Sub-Menu */}
                    {hasDropdown && isExpanded && (
                      <div className="px-3 py-2 space-y-1 bg-[#FAF8FC] border-t border-slate-200/70">
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className="w-full text-left py-2 px-3 rounded-lg text-xs font-bold text-[#250836] bg-[#EFE8F6]/70 flex items-center justify-between"
                        >
                          <span>{item.label} Overview Page</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {item.dropdown?.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => handleNavClick(sub.page, sub.section)}
                            className="w-full text-left py-2 px-3 text-xs text-slate-700 hover:text-[#250836] flex items-center justify-between rounded-lg hover:bg-white transition-colors"
                          >
                            <span className="font-medium truncate">{sub.label}</span>
                            {'badge' in sub && (
                              <span className="text-[10px] px-2 py-0.5 bg-[#EFE8F6] text-[#250836] rounded-md font-mono font-bold">
                                {sub.badge}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

            {/* Quick Links Section */}
            <div className="space-y-2 pt-1">
              <h3 className="text-[15px] font-extrabold text-[#250836] px-0.5">
                Quick Links
              </h3>

              <div className="space-y-1.5">
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavClick('autonomous'); }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-jyothi-purple-300 hover:bg-slate-50/80 flex items-center justify-between text-[13px] font-semibold text-[#250836] transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#250836] shrink-0" />
                    <span>Autonomous Institution</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>

                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavClick('iqac'); }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-jyothi-purple-300 hover:bg-slate-50/80 flex items-center justify-between text-[13px] font-semibold text-[#250836] transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#250836] shrink-0" />
                    <span>NAAC A Grade • NBA</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>

                <a
                  href="tel:+919526924455"
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-jyothi-purple-300 hover:bg-slate-50/80 flex items-center justify-between text-[13px] font-semibold text-[#250836] transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Admissions Helpline: <strong className="font-bold">+91 95269 24455</strong>
                    </span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </a>

                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavClick('alumni'); }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-jyothi-purple-300 hover:bg-slate-50/80 flex items-center justify-between text-[13px] font-semibold text-[#250836] transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#250836] shrink-0" />
                    <span>Alumni</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>

                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavClick('login'); }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-jyothi-purple-300 hover:bg-slate-50/80 flex items-center justify-between text-[13px] font-semibold text-[#250836] transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <LogIn className="w-4 h-4 text-[#250836] shrink-0" />
                    <span>Login</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>

                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenTour(); }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-jyothi-purple-300 hover:bg-slate-50/80 flex items-center justify-between text-[13px] font-semibold text-[#250836] transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[#250836] shrink-0" />
                    <span>360° Virtual Campus Tour</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>
              </div>
            </div>

          </div>
        )}

      </nav>

    </header>
    <div
      aria-hidden="true"
      className={`md:hidden ${headerHeight ? '' : 'h-[58px] sm:h-[64px]'}`}
      style={headerHeight ? { height: `${headerHeight}px` } : undefined}
    />
    </>
  );
};
export default Navbar;
