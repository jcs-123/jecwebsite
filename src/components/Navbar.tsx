import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, Search, Sparkles, Phone, Compass, 
  ExternalLink, GraduationCap, Building2, Users, BookOpen, 
  Briefcase, Award, ShieldCheck, Microscope, HeartHandshake,
  ChevronRight, MapPin, Layers
} from 'lucide-react';
import { DEPARTMENTS, COLLEGE_INFO } from '../data/collegeData';

interface Props {
  currentPage: string;
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<Props> = ({ 
  currentPage, 
  onNavigate, 
  onOpenApply, 
  onOpenTour, 
  onOpenSearch 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
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
        { label: 'Autonomous Advantage', page: 'about', section: 'autonomy', desc: 'UGC & KTU academic autonomy' },
        { label: 'Leadership & Trust', page: 'about', section: 'leadership', desc: 'Governing board and trustees' },
        { label: '30-Acre Campus & Labs', page: 'about', section: 'campus', desc: 'Eco-sanctuary & MIT FabLab' },
        { label: 'Accreditations (NAAC & NBA)', page: 'about', section: 'accreditations', desc: 'NAAC A Grade & NBA tier' },
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
        { label: 'Clubs & Societies', page: 'student-life', section: 'clubs', desc: 'IEEE, CSI, IEDC, and FOSS' },
        { label: 'Tharang National Fest', page: 'student-life', section: 'tharang', desc: 'South India tech-cultural fiesta' },
        { label: 'Sports Complex & Arena', page: 'student-life', section: 'sports', desc: 'Football turf, floodlit courts' },
        { label: 'NSS & Social Outreach', page: 'student-life', section: 'nss', desc: 'Community welfare initiatives' },
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
    <header ref={navRef} className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* 1. Top Utility Info Bar */}
      <div className="bg-jyothi-purple-950 text-slate-300 text-[11px] md:text-xs py-1.5 px-3 sm:px-6 md:px-8 border-b border-jyothi-gold-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Credentials / Affiliations */}
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-jyothi-gold-300 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-jyothi-gold-400" />
              Autonomous Institution
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              NAAC 'A' Grade • NBA Accredited B.Tech
            </span>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="hidden lg:inline text-slate-400">
              Affiliated to KTU • Catholic Archdiocese of Trichur
            </span>
          </div>

          {/* Quick Contact & Portals */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto text-[11px] sm:text-xs">
            <button 
              onClick={onOpenTour}
              className="inline-flex items-center gap-1 text-jyothi-gold-300 hover:text-white transition-colors font-semibold"
            >
              <Compass className="w-3.5 h-3.5 text-jyothi-gold-400 animate-spin-slow" />
              <span>360° Campus Tour</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href="tel:+919526924455" 
              className="hidden sm:inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 95269 24455</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a 
              href="https://jecc.ac.in" 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1 hover:text-jyothi-gold-300 transition-colors"
            >
              <span>Student ERP Login</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Pristine White Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-md py-2 border-b border-slate-200' 
            : 'bg-white py-2.5 sm:py-3 border-b border-slate-200/80 shadow-xs'
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
                    className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-xl transition-all flex items-center gap-1 select-none whitespace-nowrap shrink-0 ${
                      currentPage === item.id || isOpen
                        ? 'text-jyothi-purple-900 bg-jyothi-purple-50 font-bold border border-jyothi-purple-200/80 shadow-xs'
                        : 'text-slate-700 hover:text-jyothi-purple-900 hover:bg-slate-100/90'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-jyothi-purple-900' : 'text-slate-400'
                      }`} />
                    )}
                  </button>

                  {/* Desktop Dropdown Flyout with Zero-Gap Hover Bridge (pt-2 wrapper) */}
                  {hasDropdown && isOpen && (
                    <div 
                      className={`absolute top-full pt-2 z-50 animate-fade-in ${
                        item.id === 'facilities' || item.id === 'placements' || item.id === 'admissions' 
                          ? 'right-0' 
                          : 'left-0'
                      }`}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={`rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2.5 ring-1 ring-black/5 ${
                        item.isWide ? 'w-96' : 'w-80'
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
              className="p-2 xl:px-2.5 xl:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-jyothi-purple-950 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs whitespace-nowrap shrink-0"
              title="Search Courses, Faculty & Facilities"
            >
              <Search className="w-4 h-4 text-jyothi-purple-800 shrink-0" />
              <span className="hidden 2xl:inline">Search</span>
            </button>

            {/* Fast Apply Now Button */}
            <button
              onClick={onOpenApply}
              className="px-3 xs:px-3.5 sm:px-4 xl:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-jyothi-gold-400 via-jyothi-gold-500 to-jyothi-gold-400 text-jyothi-purple-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-jyothi-purple-950 animate-pulse shrink-0" />
              <span>Apply Now</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-jyothi-purple-950 animate-ping shrink-0" />
            </button>

            {/* Responsive Hamburger Toggle for Tablet & Mobile (visible on < xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-jyothi-purple-950 transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

          </div>

        </div>

        {/* 3. Fully Responsive Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[82vh] overflow-y-auto animate-fade-in shadow-2xl">
            
            {/* Admissions Banner inside Mobile Menu */}
            <div className="p-3.5 mb-2 rounded-2xl bg-jyothi-purple-50 border border-jyothi-purple-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-jyothi-purple-950">Admissions 2025-26 Open</p>
                <p className="text-[11px] text-slate-600">Autonomous B.Tech & M.Tech</p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="px-3 py-1.5 bg-jyothi-gold-400 text-jyothi-purple-950 font-bold text-xs rounded-xl shadow-xs"
              >
                Apply Online
              </button>
            </div>

            {/* Mobile Navigation List with Smooth Accordion Expand */}
            <div className="space-y-1">
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.dropdown);
                const isExpanded = mobileExpanded === item.id;
                const isCurrent = currentPage === item.id;

                return (
                  <div key={item.id} className="rounded-2xl border border-slate-150 overflow-hidden bg-slate-50/50">
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (hasDropdown) {
                            toggleMobileDropdown(item.id);
                          } else {
                            handleNavClick(item.id);
                          }
                        }}
                        className={`w-full text-left py-3 px-4 text-sm font-bold transition-colors flex items-center justify-between ${
                          isCurrent 
                            ? 'text-jyothi-purple-900 bg-jyothi-purple-100/70' 
                            : 'text-slate-800 hover:text-jyothi-purple-900'
                        }`}
                      >
                        <span>{item.label}</span>
                        {hasDropdown && (
                          <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-jyothi-purple-900' : ''
                          }`} />
                        )}
                      </button>
                    </div>

                    {/* Accordion Sub-Menu */}
                    {hasDropdown && isExpanded && (
                      <div className="px-3 py-2 space-y-1 bg-white border-t border-slate-150">
                        {/* Jump to parent overview page */}
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className="w-full text-left py-2 px-3 rounded-xl text-xs font-bold text-jyothi-purple-900 bg-jyothi-purple-50 flex items-center justify-between"
                        >
                          <span>{item.label} Overview Page</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {/* Sub-items */}
                        {item.dropdown?.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => handleNavClick(sub.page, sub.section)}
                            className="w-full text-left py-2.5 px-3 text-xs text-slate-700 hover:text-jyothi-purple-950 flex items-center justify-between rounded-xl hover:bg-slate-100 transition-colors"
                          >
                            <span className="font-medium truncate">{sub.label}</span>
                            {'badge' in sub && (
                              <span className="text-[10px] px-2 py-0.5 bg-jyothi-purple-100 text-jyothi-purple-900 rounded-md font-mono font-bold">
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

            {/* Mobile Helpline & 360 Tour Quick Launch */}
            <div className="pt-4 pb-2 space-y-2.5 text-xs text-slate-600 border-t border-slate-200 mt-3">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Admissions Helpline: <strong className="text-slate-900">+91 95269 24455</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-jyothi-purple-800 shrink-0" />
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenTour(); }} 
                  className="text-jyothi-purple-900 font-bold hover:underline"
                >
                  Launch 360° Virtual Campus Tour →
                </button>
              </div>
            </div>

          </div>
        )}

      </nav>

    </header>
  );
};
export default Navbar;
