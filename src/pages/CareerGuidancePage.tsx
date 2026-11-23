import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Compass,
  Code2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  Lightbulb,
  Building2,
  Sparkles,
  Layers,
  MonitorCheck,
  Award,
  BookOpen,
  Clock,
  Users,
  Laptop,
  Target,
  Star,
  ChevronRight,
  ExternalLink,
  Calendar,
  Heart,
  MessageCircle,
  UserCheck,
  MapPin,
  X,
  Check,
  AlertCircle,
  Quote,
  Telescope,
  Rocket,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface YearModule {
  year: string;
  badge: string;
  title: string;
  focus: string;
  image: string;
  facility: string;
  skills: string[];
  hours: string;
  diagnostic: string;
}

interface Counselor {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
  experience: string;
  credentialsBadge: string;
  philosophy: string;
  cabin: string;
  availability: string;
  specialties: string[];
}

interface StudentTransformation {
  name: string;
  branch: string;
  offer: string;
  company: string;
  packageLpa: string;
  avatar: string;
  badge: string;
  struggle: string;
  mentorshipTurningPoint: string;
  quote: string;
  mentorAssigned: string;
}

const HUMAN_COUNSELORS: Counselor[] = [
  {
    id: 'thomas',
    name: 'Prof. Thomas Mathew',
    title: 'Principal Career Mentor & Head of Training (PAT)',
    department: 'Department of Training & Placement',
    image: '/assets/jcs_dev_01.jpg',
    experience: '18+ Years Corporate Advisory',
    credentialsBadge: 'Executive Coach',
    philosophy: 'No student should ever walk into an interview room feeling unprepared, unheard, or defined by past setbacks.',
    cabin: 'Eastern Academic Block • Suite 204',
    availability: 'Mon - Fri • 3:30 PM - 5:00 PM',
    specialties: ['Leadership Presence', 'Salary Negotiation', 'Career Strategy', 'Executive Mindset'],
  },
  {
    id: 'divya',
    name: 'Ms. Divya K. Nair',
    title: 'Lead Verbal Fluency & Soft Skills Counselor',
    department: 'Centre for Communicative Excellence',
    image: '/assets/jcs_dev_02.jpg',
    experience: '12+ Years British Council Certified',
    credentialsBadge: 'Verbal & Soft Skills',
    philosophy: 'Fluency is not about complex vocabulary; it is about self-belief, clarity of thought, and authentic listening.',
    cabin: 'Multimedia Language Laboratory • Cabin B',
    availability: 'Mon - Thu • 2:00 PM - 4:30 PM',
    specialties: ['Overcoming Stage Fright', 'Accent Neutralization', 'Mock HR Interviews', 'Public Oratory'],
  },
  {
    id: 'jithin',
    name: 'Er. Jithin Varghese',
    title: 'Senior Technical Architect & Algorithmic Coach',
    department: 'Software Engineering & Coding Cell',
    image: '/assets/jcs_dev_04.jpg',
    experience: 'Ex-Enterprise Systems Architect',
    credentialsBadge: 'Algorithmic Mastery',
    philosophy: 'Code is logic made tangible. When fundamentals are rock-solid, no corporate technical loop can intimidate you.',
    cabin: 'Central Computing Complex • Room 108',
    availability: 'Tue - Sat • 3:00 PM - 5:30 PM',
    specialties: ['DSA & System Design', 'HackerRank Sprints', 'Cloud & Full Stack', 'Live Coding Rounds'],
  },
  {
    id: 'neetha',
    name: 'Dr. Neetha George',
    title: 'Higher Studies, GATE & Global Admissions Counselor',
    department: 'Postgraduate & Research Advisory',
    image: '/assets/jcs_dev_05.jpg',
    experience: 'Ph.D., IIT Madras • Global Scholar',
    credentialsBadge: 'Higher Ed & Research',
    philosophy: 'Your undergraduate degree is a launchpad. We build your scholarly portfolio and Statement of Purpose from Year 1.',
    cabin: 'Central Research Library • Level 3',
    availability: 'Mon - Fri • 10:00 AM - 1:00 PM',
    specialties: ['GATE Mentorship', 'GRE & IELTS Prep', 'Global University SOPs', 'Research Fellowships'],
  },
];

const STUDENT_TRANSFORMATIONS: StudentTransformation[] = [
  {
    name: 'Anjali Menon',
    branch: 'B.Tech Computer Science & Engineering',
    offer: 'Super Dream Placement',
    company: 'Amazon AWS',
    packageLpa: '₹24.0 LPA',
    avatar: '/assets/student_anjali.jpg',
    badge: 'Regional Medium to Big Tech',
    struggle: 'Coming from a Malayalam-medium schooling background, speaking up in English gave me heart palpitations and crippling imposter syndrome.',
    mentorshipTurningPoint: 'Ms. Divya conducted 1-on-1 accent drills and video mock reviews with me twice every week until my natural confidence took over.',
    quote: 'Jyothi PAT Cell didn’t just train me for an interview; they gave me a voice I didn’t know I had. Clearing Amazon AWS with ₹24 LPA was a dream come true for my entire family.',
    mentorAssigned: 'Ms. Divya K. Nair',
  },
  {
    name: 'Rahul K. Varma',
    branch: 'B.Tech Electronics & Communication',
    offer: 'Core Super Dream Offer',
    company: 'Bosch Global Software',
    packageLpa: '₹14.2 LPA',
    avatar: '/assets/student_rahul.jpg',
    badge: 'Hardware Passion Realized',
    struggle: 'I loved hands-on microcontrollers but continually failed rapid software aptitude tests and timed DSA challenges.',
    mentorshipTurningPoint: 'Er. Jithin patiently mapped RTOS concepts to real automotive hardware, sitting with me after college hours in the Texas Instruments Lab.',
    quote: 'During my Bosch interview, the panel was amazed that an undergrad could architect CAN bus protocols and RTOS scheduling. That was all Jyothi’s hands-on lab training.',
    mentorAssigned: 'Er. Jithin Varghese',
  },
  {
    name: 'Gautham S. Pillai',
    branch: 'B.Tech AI & Data Science',
    offer: 'Enterprise Product Offer',
    company: 'SOTI Inc.',
    packageLpa: '₹11.0 LPA',
    avatar: '/assets/student_gautham.jpg',
    badge: 'Academic Theory to Production Code',
    struggle: 'I had great grades in theory, but my GitHub was empty and I had no idea how enterprise machine learning deployments actually worked.',
    mentorshipTurningPoint: 'Through PAT hackathon clinics, I built 3 end-to-end production microservices under direct industry mentor supervision.',
    quote: 'When SOTI evaluated my portfolio, they said my code looked like someone with 2 years of industry experience. That was the finishing school edge.',
    mentorAssigned: 'Prof. Thomas Mathew',
  },
  {
    name: 'Meera Joseph',
    branch: 'B.Tech Electrical & Electronics',
    offer: 'FinTech Banking Specialist',
    company: 'Federal Bank Ltd.',
    packageLpa: '₹12.5 LPA',
    avatar: '/assets/student_meera.jpg',
    badge: 'Core Electrical to Digital FinTech',
    struggle: 'Entering the competitive banking and software domain as an electrical engineer felt overwhelmingly intimidating.',
    mentorshipTurningPoint: 'Dr. Neetha and Prof. Thomas structured a hybrid domain bridge plan for me, combining quantitative stamina with FinTech case studies.',
    quote: 'The empathetic encouragement from the PAT counselors meant everything when I was anxious. They believed in me before I believed in myself.',
    mentorAssigned: 'Dr. Neetha George',
  },
];

const FOUR_YEAR_MODULES: YearModule[] = [
  {
    year: 'Year 1 (Semesters 1 & 2)',
    badge: 'Foundation Phase',
    title: 'Professional Communication & Personality Development',
    focus: 'Overcoming stage fright, mastering communicative English, professional etiquette, accent neutralization, and collaborative team ethics.',
    image: '/assets/language_lab_hero.jpg',
    facility: 'Multimedia Language Laboratory & Acoustics Lab',
    skills: [
      'Language Laboratory & Accent Neutralization Drills',
      'Extempore Speaking, Debate & Public Oratory',
      'Active Listening, Email Etiquette & Business Writing',
      'Team Dynamics & Cross-Disciplinary Problem Solving',
      'Personal Branding, Confidence & Habit Engineering',
    ],
    hours: '60+ Training Hours',
    diagnostic: 'British Council & CEFR Fluency Benchmark',
  },
  {
    year: 'Year 2 (Semesters 3 & 4)',
    badge: 'Analytical Rigor',
    title: 'Quantitative Aptitude, Logic & Coding Bootcamps',
    focus: 'Mastering numerical reasoning, speed mental math, logical deduction puzzles, and fundamental data structures in Python, C++, and Java.',
    image: '/assets/computer_center_hero.jpg',
    facility: 'Central Computing Complex & Algorithmic Lab',
    skills: [
      'Quantitative Aptitude & High-Speed Math Shortcuts',
      'Logical, Deductive, Data Sufficiency & Abstract Reasoning',
      'Data Structures & Algorithms (Arrays, Trees, Graphs, DP)',
      'Object Oriented Programming & Git/GitHub Version Control',
      'Weekly Competitive Coding Sprints on HackerRank / LeetCode',
    ],
    hours: '90+ Training Hours',
    diagnostic: 'HackerRank Automated Code Evaluation',
  },
  {
    year: 'Year 3 (Semesters 5 & 6)',
    badge: 'Domain Mastery',
    title: 'Domain Certifications, Full-Stack & Diagnostic Benchmarks',
    focus: 'Industry-aligned track specializations, hackathons, mini-projects, cloud certifications, and national employability benchmarking assessments.',
    image: '/assets/tata_iiic_lab.jpg',
    facility: 'TATA IIIC Industry Innovation Lab & IoT Suites',
    skills: [
      'Cloud Architecture (AWS Academy & Azure Foundations)',
      'Full Stack Web / Mobile App Development (React, Node.js)',
      'Embedded IoT, ARM Microcontrollers & VLSI Simulation',
      'AMCAT, CoCubes & Wheebox Diagnostic Mock Examinations',
      'Summer Industrial Internships with Corporate Mentors',
    ],
    hours: '120+ Training Hours',
    diagnostic: 'National Employability Test (AMCAT / CoCubes)',
  },
  {
    year: 'Year 4 (Semesters 7 & 8)',
    badge: 'Finishing School',
    title: 'Intensive Company Mock Rounds & Executive Panels',
    focus: 'Simulated multi-stage corporate hiring loops with real-world HR directors, resume clinics, and high-frequency company-specific test series.',
    image: '/assets/seminar_hall_ac.jpg',
    facility: 'Executive Corporate Boardroom & AC Seminar Suites',
    skills: [
      'Company-Specific Test Series (TCS, Infosys, Bosch, Amazon)',
      'Simulated Technical Coding & System Architecture Rounds',
      'Mock Group Discussions Evaluated by Corporate HR Directors',
      'One-on-One HR Behavioral Interviews & Video Feedback',
      'Offer Negotiation, Professional Ethics & Transition Coaching',
    ],
    hours: '100+ Training Hours',
    diagnostic: 'Direct Corporate HR Panel Assessments',
  },
];

const ALTERNATIVE_PATHWAYS = [
  {
    title: 'Higher Studies & Global Admissions',
    icon: GraduationCap,
    badge: 'Master’s & Ph.D.',
    image: '/assets/library_hero_students.jpg',
    desc: 'Structured guidance for competitive entrance examinations and master’s admissions at top universities in India, Europe, USA, and Singapore.',
    highlights: [
      'GATE Coaching in CSE, ECE, EEE, ME & CE Disciplines',
      'GRE, IELTS & TOEFL Specialized Preparation Workshops',
      'Statement of Purpose (SOP) & Letter of Recommendation Desk',
      'Global Alumni Mentorship from RWTH Aachen, NUS & UT Austin',
    ],
  },
  {
    title: 'Civil Services & Defence Careers',
    icon: ShieldCheck,
    badge: 'UPSC / IES / PSU',
    image: '/assets/board_room_hero.jpg',
    desc: 'Equipping ambitious engineers to serve the nation through Indian Engineering Services (IES), Civil Services, Defence (CDS/AFCAT/SSB), and PSUs.',
    highlights: [
      'Indian Engineering Services (IES) Technical Syllabus Orientation',
      'PSU Navratna Selection Guidance via High GATE Scorecards',
      'SSB Interview Personality Drills by Ex-Defence Officers',
      'Kerala PSC Technical Gazetted Assistant Engineer Coaching',
    ],
  },
  {
    title: 'Entrepreneurship & Startup Incubation',
    icon: Lightbulb,
    badge: 'Jyothi TBI & KSUM',
    image: '/assets/sketch_fablab.jpg',
    desc: 'For students aspiring to build their own technology ventures, supported by Jyothi Technology Business Incubator and MIT FabLab Kerala.',
    highlights: [
      'Incubation Space at Jyothi TBI (18+ Active Startups)',
      'Seed Funding Grants & Kerala Startup Mission (KSUM) Schemes',
      'Rapid Hardware Prototyping at MIT Super FabLab Kerala',
      'Patent Drafting, Trademark & Intellectual Property Guidance',
    ],
  },
];

const ASSESSMENT_PLATFORMS = [
  {
    name: 'HackerRank',
    type: 'Algorithmic Coding Benchmarks',
    metric: '400+ Coding Problems',
    desc: 'Weekly code sprints and algorithmic battles evaluated on automated test suites with real-time leaderboards.',
    badge: 'Coding Sprints',
  },
  {
    name: 'AMCAT (Aspiring Minds)',
    type: 'National Employability Test',
    metric: '98th Percentile Scores',
    desc: 'Standardized benchmarking across quantitative aptitude, logical reasoning, and English business fluency.',
    badge: 'Employability Index',
  },
  {
    name: 'CoCubes / Aon',
    type: 'Industry Hiring Assessment',
    metric: 'Pre-Screening Drills',
    desc: 'Pre-assessment drills used directly by Fortune 500 tech firms for recruitment shortlisting.',
    badge: 'Tier-1 IT Filter',
  },
  {
    name: 'Wheebox ETS',
    type: 'Cognitive & Soft Skill Matrix',
    metric: 'Comprehensive Diagnostic',
    desc: 'Multi-dimensional evaluation measuring behavioral traits, emotional quotient, and problem-solving velocity.',
    badge: 'Cognitive Scoring',
  },
];

const HIGHLIGHT_MARQUEE = [
  { title: 'Language Lab & Accent Neutralization', tag: '60+ Hrs', phase: 'Year 1' },
  { title: 'HackerRank & LeetCode Sprints', tag: '90+ Hrs', phase: 'Year 2' },
  { title: 'Full Stack & IoT Cloud Track', tag: '120+ Hrs', phase: 'Year 3' },
  { title: 'Executive HR Simulated Loops', tag: '100+ Hrs', phase: 'Year 4' },
  { title: 'AMCAT & CoCubes Benchmarking', tag: '100% Cohort', phase: 'Diagnostic' },
  { title: 'GATE & Global Higher Studies Desk', tag: 'Specialized', phase: 'All Years' },
];

const FOUR_YEAR_STEPS = [
  {
    step: '01',
    title: 'Discover',
    focus: 'Career awareness',
    icon: Telescope,
  },
  {
    step: '02',
    title: 'Build',
    focus: 'Skills & aptitude',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Apply',
    focus: 'Industry practice',
    icon: Laptop,
  },
  {
    step: '04',
    title: 'Launch',
    focus: 'Interview readiness',
    icon: Rocket,
  },
];

export const CareerGuidancePage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [activeYearIndex, setActiveYearIndex] = useState<number>(0);
  const [interactiveLabTab, setInteractiveLabTab] = useState<number>(0);

  // 1-on-1 Counseling Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedCounselorId, setSelectedCounselorId] = useState<string>('thomas');
  const [selectedTopic, setSelectedTopic] = useState<string>('Verbal Fluency & Stage Fright');
  const [studentName, setStudentName] = useState<string>('');
  const [studentRoll, setStudentRoll] = useState<string>('');
  const [studentBranch, setStudentBranch] = useState<string>('Computer Science & Engineering');
  const [studentSem, setStudentSem] = useState<string>('Semester 5');
  const [studentEmail, setStudentEmail] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('2026-11-25');
  const [preferredSlot, setPreferredSlot] = useState<string>('3:30 PM - 4:15 PM');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingRefId, setBookingRefId] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (counselorId?: string, topic?: string) => {
    if (counselorId) setSelectedCounselorId(counselorId);
    if (topic) setSelectedTopic(topic);
    setBookingSuccess(false);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'PAT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRefId(randomRef);
    setBookingSuccess(true);
  };

  const selectedCounselor = HUMAN_COUNSELORS.find((c) => c.id === selectedCounselorId) || HUMAN_COUNSELORS[0];

  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-20 space-y-16 selection:bg-[#210532] selection:text-[#FDE68A] scroll-smooth">
      {/* Sub Navigation Bar for Placements Section */}
      <PlacementsSubNav activeRoute="career-guidance" onNavigate={onNavigate} />

      {/* 1. HERO SECTION: PREMIUM EDITORIAL SPLIT SHOWCASE (EXACT PIXEL MATCH TO MOCKUP) */}
      <section className="relative w-full pt-4 sm:pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, Hero Headline, Subtitles, Action Pills */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <RevealBlock direction="up">
                {/* Eyebrow with extending gold rule */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#BD8E36]">
                    CAREER GUIDANCE CELL
                  </span>
                  <span className="h-[1.5px] w-24 sm:w-32 bg-[#DFC06A]/75" />
                </div>
              </RevealBlock>

              <RevealBlock direction="up" delay={80}>
                {/* Serif Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.08] tracking-tight">
                  Build a <span className="italic font-normal text-[#BD8E36]">future</span>
                  <span className="block mt-1 sm:mt-2 text-[#28052B]">with purpose.</span>
                </h1>
              </RevealBlock>

              <RevealBlock direction="up" delay={140}>
                {/* Secondary Head & Description */}
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#28052B] tracking-tight">
                    Career Guidance &amp; Finishing School
                  </h2>
                  <p className="text-sm sm:text-base text-[#4A384F]/85 leading-relaxed max-w-lg font-normal">
                    From your first semester to your first opportunity, discover guidance, skill-building and placement preparation.
                  </p>
                </div>
              </RevealBlock>

              {/* Action Buttons */}
              <RevealBlock direction="up" delay={200}>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => scrollToSection('career-journey')}
                    className="px-6 sm:px-7 py-3 rounded-full bg-[#C59B4E] hover:bg-[#B3893C] text-[#28052B] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer group"
                  >
                    <span>Explore the 4-Year Journey</span>
                    <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleOpenBooking()}
                    className="px-6 sm:px-7 py-3 rounded-full bg-transparent hover:bg-white/80 text-[#28052B] border-[1.5px] border-[#28052B] font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <Calendar className="w-4 h-4 text-[#28052B]" />
                    <span>Book Career Counselling</span>
                  </button>
                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Organic Curved Luxury Visual with Floating Pill Badge */}
            <div className="lg:col-span-6 relative">
              <RevealBlock direction="right" delay={150}>
                <div className="relative pt-4 sm:pt-6">
                  {/* Architectural Plum Ribbon/Crest Arched Wave hugging top curve */}
                  <div className="absolute top-0 left-12 sm:left-20 right-16 sm:right-28 h-10 sm:h-12 bg-[#28052B] rounded-t-[100px] -z-0 opacity-95 pointer-events-none transform -rotate-1" />

                  {/* Organic Curved Container matching mockup shape */}
                  <div className="relative z-10 rounded-tl-[70px] sm:rounded-tl-[120px] rounded-tr-[36px] sm:rounded-tr-[54px] rounded-br-[36px] sm:rounded-br-[54px] rounded-bl-[44px] sm:rounded-bl-[74px] overflow-hidden border-[1.5px] border-[#DFC06A] shadow-2xl bg-[#28052B]/5 group">
                    <img
                      src="/assets/career_guidance_counseling.jpg"
                      alt="Personalized 1-on-1 career counselling and guidance session at Jyothi"
                      className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle warm amber/plum vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#28052B]/35 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Glassmorphism Pill Card at Bottom Right */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#E7D6C1] shadow-xl rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-2.5 sm:py-3.5 flex items-center gap-3 sm:gap-3.5 z-20">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#BD8E36] bg-[#FAF7F0] flex items-center justify-center shrink-0 shadow-2xs">
                        <Compass className="w-5 h-5 text-[#BD8E36]" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-xs sm:text-sm text-[#28052B] leading-tight">
                          Career Guidance
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#4A384F]/75 mt-0.5 font-medium">
                          A journey built around you
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* 2. YOUR 4-YEAR CAREER JOURNEY (STEPPER & INTERACTIVE TIMELINE ROADMAP) */}
      <section id="career-journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <RevealBlock direction="up">
          {/* Header row with Title, Hairline Divider, and Explore Roadmap Link */}
          <div className="flex items-center justify-between gap-4 pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B] whitespace-nowrap">
              Your 4-Year Career Journey
            </h2>
            <div className="h-[1px] bg-[#E7D6C1] flex-1 mx-2 sm:mx-6 hidden sm:block" />
            <button
              onClick={() => scrollToSection('progressive-model')}
              className="text-xs sm:text-sm font-bold text-[#28052B] hover:text-[#BD8E36] transition-colors inline-flex items-center gap-1.5 shrink-0 group cursor-pointer"
            >
              <span>Explore the roadmap</span>
              <ArrowRight className="w-4 h-4 text-[#BD8E36] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealBlock>

        {/* Stepper Timeline Axis with Connecting Line & Circular Nodes */}
        <div className="relative pt-2 pb-6">
          {/* Horizontal Connecting Rail (Hidden on small mobile, visible sm+) */}
          <div className="hidden sm:block absolute top-[14px] left-[10%] right-[10%] h-[1.5px] bg-[#DFC06A]/60 -z-0" />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {FOUR_YEAR_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = activeYearIndex === idx;
              return (
                <RevealBlock key={step.step} direction="up" delay={idx * 70} className="h-full">
                  <div className="flex flex-col items-center">
                    {/* Node Dot above Card */}
                    <div className="hidden sm:flex items-center justify-center mb-3">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                          isSelected
                            ? 'bg-[#BD8E36] border-[#28052B] ring-4 ring-[#DFC06A]/30 scale-125'
                            : 'bg-[#FAF7F0] border-[#BD8E36]'
                        }`}
                      />
                    </div>

                    {/* Step Card */}
                    <button
                      onClick={() => {
                        setActiveYearIndex(idx);
                        scrollToSection('progressive-model');
                      }}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer group ${
                        isSelected
                          ? 'bg-white border-[#BD8E36] shadow-lg ring-2 ring-[#DFC06A]/30 -translate-y-1'
                          : 'bg-white/80 hover:bg-white border-[#E7D6C1] hover:border-[#BD8E36] shadow-2xs hover:shadow-md'
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${
                          isSelected
                            ? 'bg-[#28052B] text-[#DFC06A] border-[#DFC06A]/50'
                            : 'bg-[#FAF2E6] text-[#BD8E36] border-[#DFC06A]/40'
                        }`}
                      >
                        <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base sm:text-lg text-[#BD8E36] font-['Playfair_Display',serif] leading-none">
                            {step.step}
                          </span>
                          <span className="h-3.5 w-[1px] bg-[#E7D6C1]" />
                          <span className="font-extrabold text-sm sm:text-base text-[#28052B] leading-none">
                            {step.title}
                          </span>
                        </div>
                        <div className="text-xs text-[#4A384F]/75 font-medium mt-1 truncate">
                          {step.focus}
                        </div>
                      </div>
                    </button>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Year Progressive Employability Model Section */}
      <section id="progressive-model" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <RevealBlock direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#DFC06A]/30">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#C79628]" />
                PROGRESSIVE ROADMAP
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
                The 4-Year PAT Employability Journey
              </h2>
              <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-2xl">
                Each academic year targets a specific dimension of student growth, transforming freshmen into polished, confident engineering professionals.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#BD8E36] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#E7D6C1] shadow-2xs">
                Active Year: {FOUR_YEAR_MODULES[activeYearIndex].year.split(' ')[0]} {FOUR_YEAR_MODULES[activeYearIndex].year.split(' ')[1]}
              </span>
            </div>
          </div>
        </RevealBlock>

        {/* Year Selector Tabs */}
        <RevealBlock direction="up" delay={50}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FOUR_YEAR_MODULES.map((m, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveYearIndex(idx);
                  setInteractiveLabTab(idx);
                }}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer ${
                  activeYearIndex === idx
                    ? 'bg-[#28052B] text-white shadow-md border border-[#DFC06A]/70 ring-2 ring-[#DFC06A]/20'
                    : 'bg-white text-slate-700 border border-[#E7D6C1] hover:bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${activeYearIndex === idx ? 'text-[#DFC06A]' : 'text-[#BD8E36]'}`}>
                    {m.badge}
                  </span>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${activeYearIndex === idx ? 'bg-white/10 text-white' : 'bg-[#FAF7F2] text-slate-600'}`}>
                    {m.hours}
                  </span>
                </div>
                <span className="font-bold text-xs sm:text-sm mt-1.5 block">
                  {m.year}
                </span>
              </button>
            ))}
          </div>
        </RevealBlock>

        {/* Detailed Year Module Card with High-Res Facility Imagery */}
        {(() => {
          const mod = FOUR_YEAR_MODULES[activeYearIndex];
          return (
            <RevealBlock direction="up" delay={100}>
              <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-md space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Left Column: Image of the dedicated lab facility */}
                  <div className="lg:col-span-5 relative">
                    <div className="h-full min-h-[260px] sm:min-h-[300px] rounded-2xl overflow-hidden border-[1.5px] border-[#DFC06A] shadow-xs relative group">
                      <img
                        src={mod.image}
                        alt={mod.facility}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#28052B]/90 via-[#28052B]/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-[10px] uppercase font-bold text-[#DFC06A] tracking-wider">
                          Dedicated Laboratory Facility
                        </div>
                        <div className="text-sm font-bold font-['Playfair_Display',serif] text-white">
                          {mod.facility}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Detailed curriculum & skills checklist */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#FAF7F2]">
                        <div>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1]">
                            {mod.badge} • {mod.year}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#28052B] mt-2">
                            {mod.title}
                          </h3>
                        </div>
                        <div className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 self-start sm:self-auto shrink-0">
                          {mod.hours}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed mt-3">
                        {mod.focus}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-[#BD8E36]">
                          Core Competencies &amp; Training Modules Covered:
                        </h4>
                        <span className="text-[10.5px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {mod.diagnostic}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {mod.skills.map((skill, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1]/70">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs font-medium text-[#28052B]">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealBlock>
          );
        })()}
      </section>

      {/* 3. Meet Your Dedicated Life Counselors & Mentors (Humanized Guidance Team) */}
      <section id="counselors-team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6">
        <RevealBlock direction="up">
          <div className="space-y-1 pb-2 border-b border-[#DFC06A]/30">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              EMPATHETIC MENTORSHIP • HUMANIZED GUIDANCE
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
                  Meet Your Dedicated Life Counselors &amp; Mentors
                </h2>
                <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-2xl mt-1">
                  Guidance is deeply personal. Our counselors and industry mentors do not just address lecture halls—they listen, advise, and walk with every student 1-on-1 throughout their four years at Jyothi.
                </p>
              </div>
              <button
                onClick={() => handleOpenBooking()}
                className="px-5 py-2.5 rounded-full bg-[#28052B] hover:bg-[#3E1043] text-[#DFC06A] border border-[#DFC06A]/50 text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule 1-on-1 Session</span>
              </button>
            </div>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HUMAN_COUNSELORS.map((c, idx) => (
            <RevealBlock key={c.id} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 80} className="h-full">
              <div className="h-full p-5 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#BD8E36] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-4 group relative overflow-hidden">
                {/* Subtle top gold accent glow line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DFC06A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="space-y-3.5">
                  {/* Portrait Photo with Zero Cutoff and Top Positioning */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-[1.5px] border-[#DFC06A]/70 shadow-xs bg-[#28052B]/5">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Credentials Badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#28052B]/90 text-[#DFC06A] border border-[#DFC06A]/50 backdrop-blur-xs shadow-md">
                      {c.credentialsBadge}
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs border border-white/20">
                        {c.experience}
                      </span>
                    </div>
                  </div>

                  {/* Counselor Info */}
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#28052B] leading-tight font-['Playfair_Display',serif] group-hover:text-[#BD8E36] transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#BD8E36] mt-0.5 leading-snug">
                      {c.title}
                    </p>
                    <p className="text-[11px] text-[#4A384F]/70 font-medium">
                      {c.department}
                    </p>
                  </div>

                  {/* Philosophy Quote */}
                  <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1]/70 text-xs text-[#28052B] italic leading-relaxed">
                    <Quote className="w-3 h-3 text-[#BD8E36] inline mr-1 -mt-1" />
                    &ldquo;{c.philosophy}&rdquo;
                  </div>

                  {/* Availability & Cabin Location */}
                  <div className="space-y-1.5 text-[11px] text-[#4A384F] border-t border-[#FAF7F2] pt-2.5">
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#BD8E36] shrink-0" />
                      <span className="truncate">{c.cabin}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{c.availability}</span>
                    </div>
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {c.specialties.map((s, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAF7F0] text-[#28052B] border border-[#E7D6C1]/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action: Book 1-on-1 */}
                <button
                  onClick={() => handleOpenBooking(c.id)}
                  className="w-full py-2.5 rounded-xl bg-[#28052B] hover:bg-[#3E1043] text-[#DFC06A] text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#BD8E36] group-hover:text-[#28052B]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book 1-on-1 Counseling</span>
                </button>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 4. Human Transformation Journeys (From Self-Doubt to Super Dream Offer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6">
        <RevealBlock direction="up">
          <div className="space-y-1 pb-2 border-b border-[#DFC06A]/30">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              AUTHENTIC STUDENT EXPERIENCES • VULNERABILITY TO VICTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
              Real Human Transformations: Overcoming Career Hurdles
            </h2>
            <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-3xl">
              Engineers are not manufactured on a mechanical assembly line. True career readiness begins when apprehension meets empathetic, dedicated 1-on-1 counseling.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDENT_TRANSFORMATIONS.map((st, idx) => (
            <RevealBlock key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100} className="h-full">
              <div className="h-full p-6 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#BD8E36] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden">
                <div className="space-y-4">
                  {/* Top Bar with Student Avatar, Info & Hired Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#DFC06A] shadow-md shrink-0 bg-[#28052B]/5">
                        <img
                          src={st.avatar}
                          alt={st.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-base sm:text-lg text-[#28052B] font-['Playfair_Display',serif]">
                            {st.name}
                          </h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {st.offer}
                          </span>
                        </div>
                        <p className="text-xs text-[#4A384F]/80 font-medium">
                          {st.branch}
                        </p>
                        <div className="text-xs font-black text-[#28052B] mt-0.5">
                          Hired by <span className="text-emerald-800 font-bold">{st.company}</span> • <span className="text-[#BD8E36]">{st.packageLpa}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#28052B] border border-[#DFC06A]/50 shrink-0 hidden sm:inline-block">
                      {st.badge}
                    </span>
                  </div>

                  {/* The Struggle & The Turning Point Bento */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {/* The Initial Struggle */}
                    <div className="p-3.5 bg-rose-50/60 rounded-2xl border border-rose-200/60 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>The Initial Hurdle</span>
                      </div>
                      <p className="text-xs text-[#4A384F] leading-relaxed">
                        {st.struggle}
                      </p>
                    </div>

                    {/* The Mentorship Turning Point */}
                    <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/60 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#BD8E36] shrink-0" />
                        <span>Mentorship Turning Point</span>
                      </div>
                      <p className="text-xs text-[#4A384F] leading-relaxed">
                        {st.mentorshipTurningPoint}
                      </p>
                    </div>
                  </div>

                  {/* Student's Personal Quote */}
                  <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] text-xs text-[#28052B] italic leading-relaxed flex items-start gap-2">
                    <Quote className="w-4 h-4 text-[#BD8E36] shrink-0 mt-0.5" />
                    <span>&ldquo;{st.quote}&rdquo;</span>
                  </div>
                </div>

                {/* Footer with Mentor Credit */}
                <div className="pt-3 border-t border-[#FAF7F2] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Guided by: <strong className="text-[#28052B]">{st.mentorAssigned}</strong></span>
                  </span>
                  <button
                    onClick={() => handleOpenBooking(undefined, 'Resume & Portfolio Audit')}
                    className="text-[11px] font-bold text-[#BD8E36] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Similar Guidance</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* Alternative Career Pathways (Beyond Campus IT Placements) with High-Res Photographic Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <RevealBlock direction="up">
          <div className="space-y-1 pb-2 border-b border-[#DFC06A]/30">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              DIVERSE ASPIRATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
              Beyond IT Placements: Multi-Track Guidance
            </h2>
            <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-2xl">
              Not every engineer aspires to a standard corporate desk. Our Career Guidance Cell provides tailored mentorship for higher studies, public administration, and technology entrepreneurship.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALTERNATIVE_PATHWAYS.map((p, idx) => (
            <RevealBlock key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100} className="h-full">
              <div className="h-full bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#BD8E36] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group">
                {/* Visual Top Photo Banner */}
                <div className="relative h-44 w-full overflow-hidden border-b border-[#E7D6C1]/80">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#28052B]/90 text-[#DFC06A] border border-[#DFC06A]/40 backdrop-blur-xs">
                      {p.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                      <p.icon className="w-4 h-4 text-[#DFC06A]" />
                    </div>
                    <h3 className="text-base font-bold font-['Playfair_Display',serif] text-white leading-tight">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#4A384F] leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="pt-3 border-t border-[#FAF7F2] space-y-2">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#BD8E36]">
                      Key Support Highlights:
                    </div>
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[#28052B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* Diagnostic Assessment Testing Platforms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <RevealBlock direction="up">
          <div className="space-y-1 pb-2 border-b border-[#DFC06A]/30">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C79628]" />
              DIAGNOSTIC BENCHMARKING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
              Industry-Standard Assessment Partners
            </h2>
            <p className="text-xs sm:text-sm text-[#4A384F]/80">
              We partner with leading national testing engines so students gain real-time metrics and diagnostic benchmarking before the actual corporate drives.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ASSESSMENT_PLATFORMS.map((ap, i) => (
            <RevealBlock key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 4) * 80} className="h-full">
              <div className="h-full p-5 bg-white rounded-3xl border border-[#E7D6C1] hover:border-[#BD8E36] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center text-[#28052B] group-hover:bg-[#28052B] group-hover:text-[#DFC06A] transition-colors">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#BD8E36] border border-[#E7D6C1]">
                      {ap.badge}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#28052B] font-['Playfair_Display',serif]">{ap.name}</h4>
                    <p className="text-[11px] font-semibold text-[#BD8E36]">{ap.type}</p>
                  </div>
                  <p className="text-xs text-[#4A384F] leading-relaxed">{ap.desc}</p>
                </div>

                <div className="pt-2 border-t border-[#FAF7F2] flex items-center justify-between text-[11px] font-bold text-emerald-800">
                  <span>Audit Benchmark:</span>
                  <span>{ap.metric}</span>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* PAT Cell Advisory Desk & Contact Section (Royal Plum Bento Matching Corporate Page) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <RevealBlock direction="up">
          <div className="relative">
            <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

            <div className="rounded-3xl bg-[#28052B] text-white p-7 sm:p-10 border border-[#3E1043] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#390F3B] text-[#DFC06A] border border-[#DFC06A]/30">
                  <Compass className="w-3.5 h-3.5 text-[#DFC06A]" />
                  <span>Personalized Mentorship Desk</span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                  Need One-on-One Career Mentorship &amp; Counseling?
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  The Career Guidance Cell is open daily from 9:00 AM to 5:00 PM on Level 2 of the Eastern Academic Block. Dedicated counselors assist with resume audits, mock technical prep, higher education roadmaps, and internship placement queries.
                </p>

                <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/90">
                  <a
                    href="tel:+914884259000"
                    className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#DFC06A]" />
                    <span>+91 4884 259000 (Extn: 224 / 225)</span>
                  </a>
                  <a
                    href="mailto:careerguidance@jecc.ac.in"
                    className="flex items-center gap-2 hover:text-[#DFC06A] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#DFC06A]" />
                    <span>careerguidance@jecc.ac.in / pat@jecc.ac.in</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  onClick={() => handleOpenBooking()}
                  className="px-6 py-2.5 rounded-full bg-[#E5B656] hover:bg-[#DCA93F] text-[#28052B] font-bold text-xs sm:text-sm transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#28052B]" />
                  <span>Schedule 1-on-1 Counseling</span>
                </button>

                <button
                  onClick={() => onNavigate('career-navigator')}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#DFC06A]" />
                  <span>Launch Career Navigator</span>
                </button>

                <button
                  onClick={() => onNavigate('corporate-recruiters')}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-[#DFC06A]" />
                  <span>Explore Corporate Recruiters</span>
                </button>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* 1-on-1 Counseling Appointment Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#FAF7F0] rounded-3xl border-2 border-[#DFC06A] shadow-2xl overflow-hidden my-8">
            {/* Modal Header */}
            <div className="p-6 bg-[#28052B] text-white flex items-center justify-between border-b border-[#DFC06A]/40 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DFC06A]/20 border border-[#DFC06A]/40 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#DFC06A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-white">
                    Book Confidential 1-on-1 Mentorship
                  </h3>
                  <p className="text-xs text-[#DFC06A]/90 font-medium">
                    Personalized career counseling &amp; interview preparation
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsBookingOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            {bookingSuccess ? (
              <div className="p-8 text-center space-y-5 bg-white">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Booking Confirmed • {bookingRefId}
                  </span>
                  <h4 className="text-2xl font-bold font-['Playfair_Display',serif] text-[#28052B] pt-2">
                    Your 1-on-1 Counseling Session is Scheduled!
                  </h4>
                  <p className="text-xs text-[#4A384F] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#28052B]">{studentName || 'Student'}</strong>. A calendar invite and prep instructions have been dispatched to your email.
                  </p>
                </div>

                {/* Session Summary Card */}
                <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#DFC06A]/60 max-w-md mx-auto text-left space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
                    <img
                      src={selectedCounselor.image}
                      alt={selectedCounselor.name}
                      className="w-12 h-12 rounded-xl object-cover object-top border border-[#DFC06A]"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#28052B]">{selectedCounselor.name}</div>
                      <div className="text-xs text-[#BD8E36]">{selectedCounselor.title}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Topic Focus</span>
                      <span className="font-semibold text-[#28052B]">{selectedTopic}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Slot &amp; Date</span>
                      <span className="font-semibold text-[#28052B]">{preferredDate} • {preferredSlot}</span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-[#E7D6C1]">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Venue / Office</span>
                      <span className="font-semibold text-[#28052B]">{selectedCounselor.cabin}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setStudentName('');
                      setStudentRoll('');
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#EFE8F6] text-[#28052B] font-bold text-xs border border-[#E7D6C1] transition-all cursor-pointer"
                  >
                    Book Another Session
                  </button>
                  <button
                    onClick={() => setIsBookingOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#28052B] hover:bg-[#3E1043] text-[#DFC06A] font-bold text-xs transition-all shadow-md cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="p-6 sm:p-7 space-y-5 bg-white max-h-[80vh] overflow-y-auto">
                {/* Counselor Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#28052B] uppercase tracking-wider block">
                    1. Select Dedicated Counselor:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {HUMAN_COUNSELORS.map((c) => {
                      const isSelected = selectedCounselorId === c.id;
                      return (
                        <div
                          key={c.id}
                          onClick={() => setSelectedCounselorId(c.id)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                            isSelected
                              ? 'bg-[#28052B] text-white border-[#DFC06A] shadow-md'
                              : 'bg-[#FAF7F2] text-[#28052B] border-[#E7D6C1] hover:border-[#BD8E36]'
                          }`}
                        >
                          <img
                            src={c.image}
                            alt={c.name}
                            className="w-10 h-10 rounded-xl object-cover object-top border border-[#DFC06A]"
                          />
                          <div className="min-w-0">
                            <div className="text-xs font-bold truncate">{c.name}</div>
                            <div className={`text-[10px] truncate ${isSelected ? 'text-[#DFC06A]' : 'text-[#BD8E36]'}`}>
                              {c.credentialsBadge}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Topic Focus */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#28052B] uppercase tracking-wider block">
                    2. Select Counseling Focus Topic:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Verbal Fluency & Stage Fright',
                      'Resume & Portfolio Audit',
                      'Mock HR Behavioral Interview',
                      'DSA & Live Coding Technical Loop',
                      'GATE & Global University Roadmap',
                      'Career Anxiety & Personal Guidance',
                    ].map((topic) => {
                      const isSelected = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#28052B] text-[#DFC06A] border border-[#DFC06A] font-bold shadow-xs'
                              : 'bg-[#FAF7F2] text-slate-700 border border-[#E7D6C1] hover:bg-amber-50'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#28052B] uppercase tracking-wider block mb-1">
                      3. Preferred Date:
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#28052B] focus:border-[#BD8E36] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#28052B] uppercase tracking-wider block mb-1">
                      Time Slot:
                    </label>
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#28052B] focus:border-[#BD8E36] focus:outline-none"
                    >
                      <option value="2:00 PM - 2:45 PM">2:00 PM - 2:45 PM</option>
                      <option value="3:00 PM - 3:45 PM">3:00 PM - 3:45 PM</option>
                      <option value="3:30 PM - 4:15 PM">3:30 PM - 4:15 PM</option>
                      <option value="4:15 PM - 5:00 PM">4:15 PM - 5:00 PM</option>
                      <option value="10:30 AM - 11:15 AM">10:30 AM - 11:15 AM (Dr. Neetha)</option>
                    </select>
                  </div>
                </div>

                {/* Student Contact Info */}
                <div className="space-y-3 pt-2 border-t border-[#FAF7F2]">
                  <label className="text-xs font-bold text-[#28052B] uppercase tracking-wider block">
                    4. Student Information:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#28052B] focus:border-[#BD8E36] focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="KTU Roll No. / Reg ID (e.g., JEC22CS045)"
                      value={studentRoll}
                      onChange={(e) => setStudentRoll(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#28052B] focus:border-[#BD8E36] focus:outline-none"
                      required
                    />
                    <select
                      value={studentBranch}
                      onChange={(e) => setStudentBranch(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#28052B] focus:border-[#BD8E36] focus:outline-none"
                    >
                      <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                      <option value="AI & Data Science">AI & Data Science</option>
                      <option value="Electronics & Communication">Electronics & Communication</option>
                      <option value="Electrical & Electronics">Electrical & Electronics</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Mechatronics & Robotics">Mechatronics & Robotics</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                    </select>
                    <input
                      type="email"
                      placeholder="Student Email (for calendar invite)"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#28052B] focus:border-[#BD8E36] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Confidentiality note */}
                <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BD8E36] shrink-0" />
                  <span>All counseling sessions are 100% confidential and free of judgment. We are here to support you.</span>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-7 py-2.5 rounded-full bg-[#28052B] hover:bg-[#3E1043] text-[#DFC06A] border border-[#DFC06A]/60 font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Confirm 1-on-1 Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
