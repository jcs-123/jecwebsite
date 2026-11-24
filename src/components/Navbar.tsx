import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, Search, Sparkles, Phone, Compass,
  GraduationCap, Building2, BookOpen, Award, ShieldCheck,
  ChevronRight, ChevronLeft, LogIn
} from 'lucide-react';

const FACILITIES_GRID_PAIRS = [
  {
    left: { label: 'Central Digital Library', page: 'central-library', desc: '42,000+ volumes and e-journals' },
    right: { label: 'Language Lab', page: 'language-lab', desc: '60-console digital phonetics studio' },
  },
  {
    left: { label: 'Campus Hostels & Dining', page: 'campus-hostels', desc: 'Santhome & Marian residences' },
    right: { label: 'TATA IIIC & Seminar Halls', page: 'tata-iiic-seminar', desc: 'Industry innovation & AC halls' },
  },
  {
    left: { label: 'College Bus Fleet Network', page: 'bus-fleet', desc: '25+ routes across 3 districts' },
    right: { label: 'Board Room', page: 'board-room', desc: 'Executive 4K governance suite' },
  },
  {
    left: { label: 'Auditorium & Sports Ground', page: 'auditorium-sports', desc: '1,200 capacity hall & athletic turf' },
    right: { label: 'Chapel', page: 'chapel', desc: 'Serene hilltop spiritual sanctuary' },
  },
  {
    left: { label: 'TBI', page: 'tbi', desc: 'Startup incubator & seed support' },
    right: { label: 'Campus Canteen', page: 'canteen', desc: 'Hygienic food court & café' },
  },
  {
    left: { label: 'Fab Lab', page: 'fab-lab', desc: 'MIT-model laser, 3D print & CNC' },
    right: { label: 'Computer Center', page: 'computer-center', desc: '500+ terminals & 1 Gbps fiber' },
  },
];

const ABOUT_LEFT_ITEMS = [
  { label: 'Overview & History', page: 'about', section: 'overview', desc: 'Estd. 2002 by Trichur Archdiocese' },
  { label: 'Vision, Mission & Values', page: 'about', section: 'vision', desc: 'Creating technology leaders', badge: 'Core' },
  { label: '25-Year Roadmap', page: 'about', section: 'roadmap', desc: '2002 to 2027+ Silver Jubilee milestones', badge: 'Milestones' },
  { label: 'Autonomous Governance & Syllabi', page: 'autonomous', desc: 'Governing Body, BoS, Regulations, CBCS & ...', badge: 'UGC' },
  { label: 'Administration', page: 'autonomous', desc: 'Academic & administrative governance' },
  { label: 'Management', page: 'about', section: 'leadership', desc: 'Catholic Archdiocese of Trichur & JCS' },
];

const ABOUT_RIGHT_ITEMS = [
  { label: 'Leadership & Trust', page: 'about', section: 'leadership', desc: 'Governing board and trustees' },
  { label: '30-Acre Campus & Labs', page: 'about', section: 'campus', desc: 'Eco-sanctuary & MIT FabLab' },
  { label: 'Accreditation NAAC and NBA', page: 'iqac', desc: 'NAAC A Grade, NBA & NIRF', badge: 'IQAC' },
  { label: 'Policy Documents', page: 'iqac', section: 'policies', desc: 'Institutional charters & quality policies' },
  { label: 'JEC News', page: 'home', section: 'jec-news', desc: 'Latest campus news, events & circulars' },
];

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
  const [mobileSubExpanded, setMobileSubExpanded] = useState<Record<string, boolean>>({
    Courses: true,
    Auxiliaries: false,
    'Professional Bodies': false,
    'Career Guidance Cell': false,
  });
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const facilitiesScrollRef = useRef<HTMLDivElement>(null);

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
      isWide: true,
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
      dropdown: [
        {
          label: 'Courses',
          page: 'departments',
          desc: '9 Engineering & Science streams',
          badge: '9 Programs',
          subDropdown: [
            { label: 'Artificial Intelligence & Data Science', page: 'dept-aids', badge: 'AI & DS', desc: '60 Seats • B.Tech' },
            { label: 'Basic Science & Humanities', page: 'departments', section: 'bsh', badge: 'BS&H', desc: 'Foundational Sciences & Mathematics' },
            { label: 'Civil Engineering', page: 'departments', section: 'ce', badge: 'CE', desc: '60 Seats • B.Tech & M.Tech' },
            { label: 'Computer Science & Engineering', page: 'departments', section: 'cse', badge: 'CSE', desc: '180 Seats • B.Tech & M.Tech' },
            { label: 'Cyber Security', page: 'departments', section: 'cyber', badge: 'CYBER', desc: '60 Seats • B.Tech' },
            { label: 'Electronics & Communication Engineering', page: 'departments', section: 'ece', badge: 'ECE', desc: '120 Seats • B.Tech & M.Tech' },
            { label: 'Electrical & Electronics Engineering', page: 'departments', section: 'eee', badge: 'EEE', desc: '60 Seats • B.Tech & M.Tech' },
            { label: 'Mechanical Engineering', page: 'departments', section: 'me', badge: 'ME', desc: '90 Seats • B.Tech' },
            { label: 'Mechatronics Engineering', page: 'departments', section: 'mct', badge: 'MCT', desc: '60 Seats • B.Tech' },
          ]
        },
        {
          label: 'Auxiliaries',
          page: 'facilities',
          desc: 'Academic & campus support units',
          badge: 'Services',
          subDropdown: [
            { label: 'Central Digital Library', page: 'central-library', badge: 'Library', desc: '42,000+ volumes & e-journals' },
            { label: 'Physical Education & Sports', page: 'sports-arena', badge: 'Sports', desc: 'Turf grounds, gym & floodlit courts' },
            { label: 'Career Guidance & Placement', page: 'career-guidance', badge: 'PAT', desc: 'Placement & aptitude training' },
            { label: 'Campus Hostels & Dining', page: 'campus-hostels', badge: 'Hostel', desc: 'Separate modern residences' },
            { label: 'College Bus Fleet Network', page: 'bus-fleet', badge: 'Transit', desc: '25+ routes across 3 districts' },
            { label: 'Health Care & Counseling Cell', page: 'facilities', section: 'support', badge: 'Wellness', desc: 'Medical clinic & psychological counselor' },
          ]
        },
        {
          label: 'Professional Bodies',
          page: 'clubs-societies',
          desc: 'National & international student chapters',
          badge: 'Chapters',
          subDropdown: [
            { label: 'IEEE Student Branch', page: 'clubs-societies', section: 'ieee', badge: 'IEEE', desc: 'Computer Society, PES & WiE Chapters' },
            { label: 'ISTE Chapter', page: 'clubs-societies', section: 'iste', badge: 'ISTE', desc: 'Indian Society for Technical Education' },
            { label: 'CSI Student Chapter', page: 'clubs-societies', section: 'csi', badge: 'CSI', desc: 'Computer Society of India student branch' },
            { label: 'IEI Students\' Chapter', page: 'clubs-societies', section: 'iei', badge: 'IEI', desc: 'Institution of Engineers (India)' },
            { label: 'SAEINDIA Collegiate Club', page: 'clubs-societies', section: 'sae', badge: 'SAE', desc: 'Team Jyothi Racing & BAJA design' },
            { label: 'ACM Student Chapter', page: 'clubs-societies', section: 'acm', badge: 'ACM', desc: 'Association for Computing Machinery' },
          ]
        },
      ]
    },
    {
      id: 'examination',
      label: 'Examination',
      dropdown: [
        { label: 'Office of CoE', page: 'office-of-coe', desc: 'Controller of Examinations & Evaluation Wing', badge: 'CoE' },
        { label: 'Notification', page: 'examination-notifications', desc: 'Exam fee, registration dates & circulars', badge: 'Alerts' },
        { label: 'Timetable', page: 'examination-timetable', desc: 'End semester & internal series schedules', badge: 'Schedule' },
        { label: 'General guideline', page: 'examination-guidelines', desc: 'Hall admission, attendance & grading rules', badge: 'Rules' },
        { label: 'Malpractices and punishment', page: 'examination-malpractices', desc: 'Integrity code & statutory penalties', badge: 'Policy' },
        { label: 'Results', page: 'examination-results', desc: 'Provisional grade cards & revaluation', badge: 'Portal' },
        { label: 'Grievance redressal committee', page: 'examination-grievances', desc: 'Dispute submission & redressal tribunal', badge: 'EGRC' },
      ]
    },
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
        { label: 'Research', page: 'research', desc: 'R&D centres, patents & funded projects' },
        { label: 'TATA IIIC', page: 'tata-iiic', desc: 'TATA Industry-Institute Interaction Cell', badge: 'Industry' },
        { label: 'Jyothi Consultancy Services', page: 'jyothi-consultancy', desc: 'Software, web, mobile apps & IT consulting', badge: 'JCS' },
        { label: 'MIT FabLab Kerala', page: 'mit-fablab', desc: 'Rapid hardware prototyping center', badge: 'MIT' },
        { label: 'Jyothi TBI Incubator', page: 'jyothi-tbi', desc: '18+ incubated startups', badge: 'TBI' },
      ]
    },
    {
      id: 'admissions',
      label: 'Admissions',
      dropdown: [
        { label: 'B.Tech Admissions 2025-26', page: 'admissions', desc: '7 Engineering streams' },
        { label: 'M.Tech & Ph.D. Research', page: 'mtech-phd-admissions', desc: 'Postgraduate specializations' },
        { label: 'Eligibility & Seat Matrix', page: 'eligibility-seat-matrix', desc: 'KEAM, Management & NRI' },
        { label: 'Merit Scholarships', page: 'merit-scholarships', desc: '₹3+ Crores yearly grant pool' },
        { label: 'Admission Enquiry', page: 'admission-enquiry', desc: 'Direct counselor assistance' },
      ]
    },
    {
      id: 'placements',
      label: 'Placements',
      dropdown: [
        { label: 'Placement Records & Stats', page: 'placement-records', desc: '₹24 LPA highest package', badge: 'Records' },
        { label: 'Corporate Recruiters', page: 'corporate-recruiters', desc: '94+ companies visited', badge: 'Recruiters' },
        {
          label: 'Career Guidance Cell',
          page: 'career-guidance',
          desc: '4-year training curriculum',
          badge: 'PAT Cell',
          subDropdown: [
            { label: 'Career Navigator', page: 'career-navigator', desc: 'Interactive career roadmap & skill finder', badge: 'Tool' },
          ]
        },
        { label: 'Industry Collaborations', page: 'industry-collaborations', desc: 'Corporate tech partnerships & MoUs', badge: 'MoUs' },
        { label: 'Career Advancement Alumni', page: 'career-advancement-alumni', desc: 'Global leadership & alumni mentoring', badge: 'Alumni' },
        { label: 'Upcoming Drives', page: 'upcoming-drives', desc: 'Live on-campus & pool drive schedules', badge: 'Drives' },
      ]
    },
    {
      id: 'facilities',
      label: 'Facilities',
      isWide: true,
      dropdown: [
        { label: 'Central Digital Library', page: 'central-library', desc: '42,000+ volumes and e-journals' },
        { label: 'Campus Hostels & Dining', page: 'campus-hostels', desc: 'Santhome & Marian residences' },
        { label: 'College Bus Fleet Network', page: 'bus-fleet', desc: '25+ routes across 3 districts' },
        { label: 'Auditorium & Sports Ground', page: 'auditorium-sports', desc: '1,200 capacity hall & athletic turf' },
        { label: 'Language Lab', page: 'language-lab', desc: '60-console digital phonetics studio' },
        { label: 'TATA IIIC & Seminar Halls', page: 'tata-iiic-seminar', desc: 'Industry innovation & AC halls' },
        { label: 'Board Room', page: 'board-room', desc: 'Executive 4K governance suite' },
        { label: 'Chapel', page: 'chapel', desc: 'Serene hilltop spiritual sanctuary' },
        { label: 'TBI', page: 'tbi', desc: 'Startup incubator & seed support' },
        { label: 'Campus Canteen', page: 'canteen', desc: 'Hygienic food court & café' },
        { label: 'Fab Lab', page: 'fab-lab', desc: 'MIT-model laser, 3D print & CNC' },
        { label: 'Computer Center', page: 'computer-center', desc: '500+ terminals & 1 Gbps fiber' },
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
                    className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-xl transition-all flex items-center gap-1 select-none whitespace-nowrap shrink-0 ${
                      currentPage === item.id ||
                      isOpen ||
                      item.dropdown?.some((d) => 
                        d.page === currentPage || 
                        ('subDropdown' in d && (d as any).subDropdown?.some((sd: any) => sd.page === currentPage))
                      )
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
                      {item.id === 'about' ? (
                        /* About Explorer: Dedicated 2-Column Luxury Dropdown Matching Mockup */
                        <div className="w-[580px] sm:w-[610px] rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-3 sm:p-3.5 ring-1 ring-black/5">
                          {/* Dropdown Header Card */}
                          <div className="px-2 pt-1 pb-2.5 flex items-center justify-between border-b border-slate-100 mb-2">
                            <span className="text-[11px] font-bold text-jyothi-purple-950 uppercase tracking-wider">
                              ABOUT EXPLORER
                            </span>
                            <button
                              onClick={() => handleNavClick('about')}
                              className="text-[11px] text-jyothi-purple-700 hover:text-jyothi-purple-950 font-semibold flex items-center gap-0.5 hover:underline cursor-pointer"
                            >
                              <span>Overview</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {/* Left Column (6 items) */}
                            <div className="space-y-1">
                              {ABOUT_LEFT_ITEMS.map((sub, idx) => {
                                const isActive = sub.page === currentPage;
                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleNavClick(sub.page, sub.section)}
                                    className={`w-full text-left px-2.5 py-2 rounded-xl text-xs transition-all flex flex-col cursor-pointer group ${
                                      isActive
                                        ? 'bg-[#FAF5FF] text-[#28052B]'
                                        : 'hover:bg-[#FAF5FF] text-slate-800'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-1.5 w-full">
                                      <span className={`font-bold text-[13px] leading-tight ${
                                        isActive ? 'text-[#28052B]' : 'text-slate-800 group-hover:text-[#28052B]'
                                      }`}>
                                        {sub.label}
                                      </span>
                                      {sub.badge && (
                                        <span className="px-2 py-0.5 rounded-md text-[10px] bg-purple-100 text-purple-900 font-bold shrink-0">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div className={`text-[11px] mt-0.5 leading-snug truncate w-full ${
                                      isActive ? 'text-[#6B5B75]' : 'text-slate-400 group-hover:text-slate-500'
                                    }`}>
                                      {sub.desc}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Right Column (5 items) */}
                            <div className="space-y-1">
                              {ABOUT_RIGHT_ITEMS.map((sub, idx) => {
                                const isActive = sub.page === currentPage;
                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleNavClick(sub.page, sub.section)}
                                    className={`w-full text-left px-2.5 py-2 rounded-xl text-xs transition-all flex flex-col cursor-pointer group ${
                                      isActive
                                        ? 'bg-[#FAF5FF] text-[#28052B]'
                                        : 'hover:bg-[#FAF5FF] text-slate-800'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-1.5 w-full">
                                      <span className={`font-bold text-[13px] leading-tight ${
                                        isActive ? 'text-[#28052B]' : 'text-slate-800 group-hover:text-[#28052B]'
                                      }`}>
                                        {sub.label}
                                      </span>
                                      {sub.badge && (
                                        <span className="px-2 py-0.5 rounded-md text-[10px] bg-purple-100 text-purple-900 font-bold shrink-0">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div className={`text-[11px] mt-0.5 leading-snug truncate w-full ${
                                      isActive ? 'text-[#6B5B75]' : 'text-slate-400 group-hover:text-slate-500'
                                    }`}>
                                      {sub.desc}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : item.id === 'facilities' ? (
                        /* Facilities Explorer: Dedicated 2-Column Luxury Dropdown Matching Mockup */
                        <div className="w-[580px] rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2.5 ring-1 ring-black/5 overflow-hidden">
                          {/* Dropdown Header Card */}
                          <div className="px-3 pt-1.5 pb-2">
                            <span className="text-[11px] font-bold text-jyothi-purple-950 uppercase tracking-wider">
                              FACILITIES EXPLORER
                            </span>
                          </div>

                          {/* 2-Column Scrollable Grid with Horizontal & Vertical Hairlines */}
                          <div
                            ref={facilitiesScrollRef}
                            className="max-h-[258px] overflow-y-auto divide-y divide-slate-100 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400"
                          >
                            {FACILITIES_GRID_PAIRS.map((row, rIdx) => (
                              <div key={rIdx} className="grid grid-cols-2 divide-x divide-slate-100">
                                {/* Left Cell */}
                                <div className="p-1">
                                  <button
                                    type="button"
                                    onClick={() => handleNavClick(row.left.page)}
                                    className={`w-full text-left px-3 py-2.5 rounded-xl transition-all cursor-pointer group ${
                                      row.left.page === currentPage
                                        ? 'bg-[#FAF5FF] text-[#28052B]'
                                        : 'hover:bg-[#FAF5FF] text-slate-800'
                                    }`}
                                  >
                                    <div
                                      className={`font-bold text-[13px] leading-tight ${
                                        row.left.page === currentPage
                                          ? 'text-[#28052B]'
                                          : 'text-slate-800 group-hover:text-[#28052B]'
                                      }`}
                                    >
                                      {row.left.label}
                                    </div>
                                    <div
                                      className={`text-[11px] mt-0.5 leading-snug truncate ${
                                        row.left.page === currentPage
                                          ? 'text-[#6B5B75]'
                                          : 'text-slate-400 group-hover:text-slate-500'
                                      }`}
                                    >
                                      {row.left.desc}
                                    </div>
                                  </button>
                                </div>

                                {/* Right Cell */}
                                <div className="p-1">
                                  <button
                                    type="button"
                                    onClick={() => handleNavClick(row.right.page)}
                                    className={`w-full text-left px-3 py-2.5 rounded-xl transition-all cursor-pointer group ${
                                      row.right.page === currentPage
                                        ? 'bg-[#FAF5FF] text-[#28052B]'
                                        : 'hover:bg-[#FAF5FF] text-slate-800'
                                    }`}
                                  >
                                    <div
                                      className={`font-bold text-[13px] leading-tight ${
                                        row.right.page === currentPage
                                          ? 'text-[#28052B]'
                                          : 'text-slate-800 group-hover:text-[#28052B]'
                                      }`}
                                    >
                                      {row.right.label}
                                    </div>
                                    <div
                                      className={`text-[11px] mt-0.5 leading-snug truncate ${
                                        row.right.page === currentPage
                                          ? 'text-[#6B5B75]'
                                          : 'text-slate-400 group-hover:text-slate-500'
                                      }`}
                                    >
                                      {row.right.desc}
                                    </div>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Footer: Scroll for more facilities */}
                          <div
                            onClick={() => {
                              if (facilitiesScrollRef.current) {
                                facilitiesScrollRef.current.scrollBy({ top: 130, behavior: 'smooth' });
                              }
                            }}
                            className="pt-2 pb-1 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs italic text-slate-500 hover:text-[#28052B] transition-colors cursor-pointer select-none"
                          >
                            <span>Scroll for more facilities</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                        </div>
                      ) : (
                        <div className={`rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2.5 ring-1 ring-black/5 ${item.isWide ? 'w-96' : 'w-80'}`}>

                          {/* Dropdown Header Card */}
                          <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold text-jyothi-purple-950 uppercase tracking-wider">
                              {item.label} Explorer
                            </span>
                            {item.id !== 'facilities' && item.id !== 'placements' && (
                              <button
                                onClick={() => handleNavClick(item.id)}
                                className="text-[11px] text-jyothi-purple-700 hover:text-jyothi-purple-950 font-semibold flex items-center gap-0.5 hover:underline cursor-pointer"
                              >
                                <span>Overview</span>
                                <ChevronRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>

                          {/* Dropdown Items List */}
                          <div className="space-y-1">
                            {item.dropdown?.map((sub, idx) => {
                              const hasSub = 'subDropdown' in sub && Boolean((sub as any).subDropdown?.length);
                              const subItems = hasSub ? (sub as any).subDropdown : null;
                              const isHoverOnly = hasSub || sub.label === 'Career Guidance Cell';
                              const flyoutToLeft = item.id === 'facilities' || item.id === 'placements' || item.id === 'admissions';

                              return (
                                <div key={idx} className="relative group/sub">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      if (isHoverOnly) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        return;
                                      }
                                      handleNavClick(sub.page, sub.section);
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start justify-between gap-2 group/item ${
                                      isHoverOnly ? 'cursor-default' : 'cursor-pointer'
                                    } ${
                                      sub.page === currentPage || (hasSub && subItems.some((s: any) => s.page === currentPage))
                                        ? 'bg-jyothi-purple-50 text-jyothi-purple-950 font-bold'
                                        : 'hover:bg-jyothi-purple-50 text-slate-700 hover:text-jyothi-purple-950'
                                    }`}
                                  >
                                    <div className="min-w-0 flex-1">
                                      <div className="font-bold flex items-center gap-1.5 text-slate-800 group-hover/item:text-jyothi-purple-900 whitespace-nowrap">
                                        <span>{sub.label}</span>
                                      </div>
                                      {'desc' in sub && (
                                        <div className="text-[11px] text-slate-400 group-hover/item:text-slate-600 truncate mt-0.5">
                                          {sub.desc}
                                        </div>
                                      )}
                                    </div>

                                    <div className="flex items-center gap-1 shrink-0 mt-0.5">
                                      {'badge' in sub && (
                                        <span className="px-2 py-0.5 rounded-md text-[10px] bg-jyothi-purple-100 text-jyothi-purple-900 font-mono font-bold">
                                          {sub.badge}
                                        </span>
                                      )}
                                      {hasSub && (
                                        flyoutToLeft ? (
                                          <ChevronLeft className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-jyothi-purple-900 group-hover/sub:-translate-x-0.5 transition-transform" />
                                        ) : (
                                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-jyothi-purple-900 group-hover/sub:translate-x-0.5 transition-transform" />
                                        )
                                      )}
                                    </div>
                                  </button>

                                  {/* Desktop Sub Dropdown Flyout */}
                                  {hasSub && (
                                    <div
                                      className={`hidden group-hover/sub:block absolute top-0 z-60 animate-fade-in ${
                                        flyoutToLeft ? 'right-full pr-2' : 'left-full pl-2'
                                      } ${sub.label === 'Courses' ? 'w-88 sm:w-96' : 'w-72 sm:w-80'}`}
                                    >
                                      <div className="rounded-2xl bg-white border border-[#DFC06A]/40 shadow-2xl p-2.5 ring-1 ring-black/5">
                                        <div className="px-2.5 py-1.5 border-b border-slate-100 flex items-center justify-between mb-1.5">
                                          <span className="text-[10.5px] font-bold text-jyothi-purple-950 uppercase tracking-wider flex items-center gap-1.5">
                                            {sub.label === 'Courses' ? (
                                              <BookOpen className="w-3.5 h-3.5 text-[#C79628]" />
                                            ) : sub.label === 'Auxiliaries' ? (
                                              <Building2 className="w-3.5 h-3.5 text-[#C79628]" />
                                            ) : sub.label === 'Professional Bodies' ? (
                                              <Award className="w-3.5 h-3.5 text-[#C79628]" />
                                            ) : (
                                              <Compass className="w-3.5 h-3.5 text-[#C79628]" />
                                            )}
                                            <span>{sub.label}</span>
                                          </span>
                                          {sub.label === 'Courses' && (
                                            <span className="text-[10px] text-[#C79628] font-bold font-mono">
                                              9 Programs
                                            </span>
                                          )}
                                        </div>

                                        <div className="space-y-1">
                                          {subItems.map((nested: any, nIdx: number) => (
                                            <button
                                              key={nIdx}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleNavClick(nested.page, nested.section);
                                              }}
                                              className={`w-full text-left px-2.5 py-2 rounded-xl text-xs transition-all flex items-start justify-between gap-2 group/nested hover:bg-jyothi-purple-50 text-slate-700 hover:text-jyothi-purple-950 cursor-pointer ${
                                                nested.page === currentPage || (nested.page === 'dept-aids' && currentPage === 'dept-aids')
                                                  ? 'bg-jyothi-purple-50 text-jyothi-purple-950 font-bold'
                                                  : ''
                                              }`}
                                            >
                                              <div className="min-w-0 flex-1">
                                                <div className="font-bold flex items-center gap-1 text-slate-800 group-hover/nested:text-jyothi-purple-900 text-xs">
                                                  <span>{nested.label}</span>
                                                </div>
                                                {nested.desc && (
                                                  <div className="text-[10.5px] text-slate-400 group-hover/nested:text-slate-600 truncate mt-0.5">
                                                    {nested.desc}
                                                  </div>
                                                )}
                                              </div>
                                              {nested.badge && (
                                                <span className="px-1.5 py-0.5 rounded text-[9.5px] bg-amber-100 text-amber-900 font-mono font-bold shrink-0 mt-0.5">
                                                  {nested.badge}
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

                        </div>
                      )}
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
                  className={`w-full text-left py-2.5 px-4 text-[13.5px] rounded-xl border transition-colors flex items-center justify-between ${currentPage === 'home'
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
                      className={`rounded-xl border overflow-hidden transition-colors ${isCurrent
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
                        className={`w-full text-left py-2.5 px-4 text-[13.5px] transition-colors flex items-center justify-between ${isCurrent
                          ? 'text-[#250836] font-bold'
                          : 'text-[#250836] font-semibold hover:bg-slate-50/80'
                          }`}
                      >
                        <span>{item.label}</span>
                        {hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#250836]' : ''
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

                          {item.dropdown?.map((sub, i) => {
                            const hasSub = 'subDropdown' in sub && Boolean((sub as any).subDropdown?.length);
                            const subItems = hasSub ? (sub as any).subDropdown : null;
                            const isHoverOnly = hasSub || sub.label === 'Career Guidance Cell';
                            const isSubOpen = Boolean(mobileSubExpanded[sub.label]);

                            return (
                              <div key={i} className="space-y-1">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    if (hasSub) {
                                      setMobileSubExpanded(prev => ({
                                        ...prev,
                                        [sub.label]: !prev[sub.label]
                                      }));
                                      return;
                                    }
                                    handleNavClick(sub.page, sub.section);
                                  }}
                                  className={`w-full text-left py-2 px-3 text-xs text-slate-700 hover:text-[#250836] flex items-center justify-between rounded-lg hover:bg-white transition-colors cursor-pointer`}
                                >
                                  <span className="font-semibold truncate">{sub.label}</span>
                                  <div className="flex items-center gap-1.5 shrink-0">
                                    {'badge' in sub && (
                                      <span className="text-[10px] px-2 py-0.5 bg-[#EFE8F6] text-[#250836] rounded-md font-mono font-bold">
                                        {sub.badge}
                                      </span>
                                    )}
                                    {hasSub && (
                                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`} />
                                    )}
                                  </div>
                                </button>

                                {hasSub && isSubOpen && (
                                  <div className="pl-3 pr-1 py-1.5 space-y-1 border-l-2 border-[#DFC06A]/50 ml-3 bg-white/70 rounded-r-xl">
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#250836] px-2 pt-0.5 flex items-center justify-between">
                                      <span className="flex items-center gap-1">
                                        {sub.label === 'Courses' ? (
                                          <BookOpen className="w-3 h-3 text-[#C79628]" />
                                        ) : sub.label === 'Auxiliaries' ? (
                                          <Building2 className="w-3 h-3 text-[#C79628]" />
                                        ) : sub.label === 'Professional Bodies' ? (
                                          <Award className="w-3 h-3 text-[#C79628]" />
                                        ) : (
                                          <Compass className="w-3 h-3 text-[#C79628]" />
                                        )}
                                        <span>{sub.label}</span>
                                      </span>
                                      {sub.label === 'Courses' && (
                                        <span className="text-[9px] text-[#C79628] font-bold font-mono">
                                          9 Programs
                                        </span>
                                      )}
                                    </div>
                                    {subItems.map((nested: any, nI: number) => (
                                      <button
                                        key={nI}
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          handleNavClick(nested.page, nested.section);
                                        }}
                                        className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-[#250836] flex items-center justify-between rounded hover:bg-white transition-colors cursor-pointer"
                                      >
                                        <span className="font-medium text-[11.5px] truncate">{nested.label}</span>
                                        {nested.badge && (
                                          <span className="text-[9px] px-1.5 py-0.5 bg-amber-100 text-amber-900 rounded font-mono font-bold shrink-0 ml-1">
                                            {nested.badge}
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
