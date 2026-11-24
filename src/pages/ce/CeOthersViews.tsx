import React, { useState } from 'react';
import {
  Calendar, Sparkles, Image as ImageIcon, Users, Phone,
  Mail, MapPin, Download, ExternalLink, Clock, Building2,
  CheckCircle2, ArrowRight, BookOpen, Star, Award, ShieldCheck
} from 'lucide-react';

/* 1. Department Events Page */
export const CeEventsPage: React.FC = () => {
  const events = [
    {
      title: 'CONSTRUX 2024 - National Level Civil Technical Colloquium',
      date: 'March 15–16, 2024',
      type: 'National Tech Fest',
      desc: 'Annual flagship technical symposium featuring Bridge-It (Palsa bridge load test), Cast-O-Mania (High-Strength Concrete Cube competition), CADD-Master, Survey Hunt, and National Paper Presentation.',
      attendees: '450+ Participants from 32 Engineering Colleges',
    },
    {
      title: 'Annual 10-Day Intensive Geodetic Survey Camp at Wayanad',
      date: 'December 2–12, 2023',
      type: 'Field Camp',
      desc: 'Hands-on topographic contour mapping, highway alignment curve setting, and trigonometric leveling across rugged hill terrain using high-precision Electronic Total Stations.',
      attendees: 'Final Year Batch (60 Students) + 4 Faculty Instructors',
    },
    {
      title: 'National Workshop on BIM & Digital Twin in Infrastructure',
      date: 'October 18–19, 2023',
      type: 'Technical Workshop',
      desc: 'Two-day hands-on workshop in association with Bentley Systems focusing on OpenRoads designer and 4D construction sequencing using Autodesk Revit.',
      attendees: '120 Student Delegates',
    },
    {
      title: 'Concrete Mix Design & Non-Destructive Testing Masterclass',
      date: 'August 24, 2023',
      type: 'Industry Masterclass',
      desc: 'Conducted in partnership with UltraTech Cement Limited. Students designed M40 and M60 concrete mixes and evaluated ultrasonic pulse velocity and rebound hammer correlations.',
      attendees: 'Pre-final Year Students & Faculty',
    },
    {
      title: 'Industrial Field Study to Cochin Metro Rail Viaduct & Tunnel Sites',
      date: 'May 06, 2023',
      type: 'Industrial Field Visit',
      desc: 'Comprehensive on-site exposure to precast segmental box girder launching, U-girder erection, and metro station pile foundation construction in Kakkanad corridor.',
      attendees: 'Third Year Civil Batch',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Campus Happenings</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Events
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Active Academic Calendar
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          From the national flagship symposium "CONSTRUX" and 10-day field surveying camps to specialized NDT masterclasses and mega-project industrial visits, the department provides experiential learning outside traditional classrooms.
        </p>
      </div>

      <div className="space-y-4">
        {events.map((ev, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#C79628]">
                  {ev.type}
                </span>
                <span className="text-xs text-[#7A647F] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {ev.date}
                </span>
              </div>
              <span className="text-xs font-semibold text-[#28052B]">{ev.attendees}</span>
            </div>

            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              {ev.title}
            </h3>

            <p className="text-xs text-[#4A384F] font-light leading-relaxed">
              {ev.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 2. Department Bulletin Page */
export const CeBulletinPage: React.FC = () => {
  const bulletins = [
    {
      title: 'CIVITAS 2024 - Annual Civil Engineering Magazine',
      edition: 'Volume 12 • Annual Issue',
      date: 'Published June 2024',
      theme: 'Theme: Smart Infrastructure & Decarbonized Construction',
      highlight: 'Features keynote articles on 3D Concrete Printing, BIM Digital Twins, and interviews with L&T Metro project directors.',
      size: '14.2 MB',
    },
    {
      title: 'The Cornerstone - Quarterly Department Newsletter',
      edition: 'Vol. 8, Issue 2',
      date: 'March 2024',
      theme: 'Quarterly Research & Campus Digest',
      highlight: 'Coverage of CONSTRUX 2024 winners, KSCSTE student project grants, and faculty Scopus publication lists.',
      size: '4.8 MB',
    },
    {
      title: 'The Cornerstone - Quarterly Department Newsletter',
      edition: 'Vol. 8, Issue 1',
      date: 'December 2023',
      theme: 'Autumn Term & Survey Camp Review',
      highlight: 'Report on Wayanad Survey Camp, UltraTech Concrete Testing Workshops, and Semester VII placements.',
      size: '5.1 MB',
    },
    {
      title: 'CIVITAS 2023 - Annual Civil Engineering Magazine',
      edition: 'Volume 11 • Annual Issue',
      date: 'Published June 2023',
      theme: 'Theme: Resilient Cities & Disaster Mitigation',
      highlight: 'Special section on landslide stabilization in the Western Ghats and flood-resilient bridge foundations in Kerala.',
      size: '12.8 MB',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Publications & Newsletters</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Bulletin
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            CIVITAS &amp; The Cornerstone
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          "CIVITAS" is the flagship annual technical magazine edited and curated by student editorial boards and faculty advisors, complemented by our quarterly newsletter "The Cornerstone".
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bulletins.map((b, idx) => (
          <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  {b.edition}
                </span>
                <span className="text-xs text-[#7A647F]">{b.date}</span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
                {b.title}
              </h3>
              <div className="text-xs font-semibold text-[#28052B]">{b.theme}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-1">
                {b.highlight}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#7A647F]">PDF Size: {b.size}</span>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#28052B] text-white text-xs font-bold hover:bg-[#3B0840] transition-all cursor-pointer">
                <Download className="w-3.5 h-3.5" /> Download Edition
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 3. Gallery Page */
export const CeGalleryPage: React.FC = () => {
  const images = [
    { title: 'Electronic Total Station Field Survey Practice', category: 'Surveying Fieldwork', date: '2024' },
    { title: '1000 kN Computerized UTM Steel Tensile Test', category: 'Materials Testing Lab', date: '2024' },
    { title: 'CONSTRUX Bridge Load Testing Finals', category: 'Technical Fest', date: '2024' },
    { title: 'Triaxial Shear Testing in Geotechnical Lab', category: 'Soil Mechanics Lab', date: '2023' },
    { title: 'Cochin Metro Viaduct Industrial Study Visit', category: 'Industrial Visit', date: '2023' },
    { title: '10-Day Survey Camp Topographic Contouring', category: 'Survey Camp', date: '2023' },
    { title: 'BIM 3D Model Building Design in CAD Lab', category: 'Computation & CAD', date: '2023' },
    { title: 'UltraTech Concrete Mix Design Workshop Session', category: 'Industry Workshop', date: '2023' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Visual Glimpses</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Gallery
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Moments &amp; Fieldwork
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          A visual record of rigorous experimental testing, precision geodetic fieldwork, national tech symposium competitions, and industrial site explorations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {images.map((img, idx) => (
          <div key={idx} className="group rounded-3xl overflow-hidden bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all flex flex-col justify-between">
            <div className="h-44 bg-gradient-to-br from-[#28052B]/90 via-[#350A3A]/85 to-[#1E0221] p-4 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[#DFC06A]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-center relative z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono text-[#DFC06A]">
                  {img.category}
                </span>
                <span className="text-[10px] text-white/70">{img.date}</span>
              </div>
              <div className="relative z-10 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-[#DFC06A]/40 group-hover:scale-110 group-hover:text-[#DFC06A] transition-all" />
              </div>
              <div className="text-[11px] font-medium text-white/90 line-clamp-2 relative z-10">
                {img.title}
              </div>
            </div>
            <div className="p-3 bg-white text-center">
              <span className="text-[11px] font-bold text-[#28052B] group-hover:text-[#C79628] transition-colors">
                View Full Frame
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Association Page */
export const CeAssociationPage: React.FC = () => {
  const bearers = [
    { role: 'Staff Advisor', name: 'Prof. Vincy Verghese', designation: 'Assistant Professor' },
    { role: 'Student President', name: 'Kevin Paul', designation: 'Final Year B.Tech' },
    { role: 'Student Secretary', name: 'Devika Suresh', designation: 'Final Year B.Tech' },
    { role: 'Joint Secretary', name: 'Aaron K. George', designation: 'Third Year B.Tech' },
    { role: 'Treasurer', name: 'Chris Thomas', designation: 'Final Year B.Tech' },
    { role: 'Technical Lead', name: 'Sandra Maria', designation: 'Third Year B.Tech' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Professional Chapters</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Civil Engineering Association (CEA) &amp; ICI Student Chapter
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            CEA &amp; ICI Chapter
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Civil Engineering Association (CEA) operates in tandem with the Indian Concrete Institute (ICI) Student Chapter. The association organizes student symposia, software hackathons, guest lectures by infrastructure chief engineers, and community social engineering outreach initiatives.
        </p>
      </div>

      {/* Office Bearers Table / Grid */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
          Executive Office Bearers (2024–2025)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bearers.map((b, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#28052B] text-white text-[10px] font-bold">
                {b.role}
              </span>
              <div className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] pt-1">
                {b.name}
              </div>
              <div className="text-xs text-[#7A647F]">{b.designation}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Flagship Activities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            CONSTRUX Tech Fest
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Organizing the annual state-level civil festival featuring concrete casting competitions, CAD drafting, and structural paper symposia.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            Community Outreach &amp; Habitat
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Partnering with local panchayats to provide free structural stability surveys and low-cost building plans for underprivileged families.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            Software Masterclasses
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Conducting weekend peer-learning tutorials on AutoCAD, Revit, SketchUp, Lumion, and STAAD.Pro for junior cohorts.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 5. Reach Us Page */
interface ReachUsProps {
  onOpenApply?: () => void;
}

export const CeReachUsPage: React.FC<ReachUsProps> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Connect With The Department</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Reach Us
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Civil Engineering Block
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are a prospective student inquiring about admissions, an industry enterprise requiring NABL-aligned material testing and geotechnical soil investigation, or an academic partner, our departmental secretariat is at your service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-5">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-2 border-b border-[#E7D6C1]">
            Departmental Secretariat
          </h3>

          <div className="space-y-4 text-xs text-[#4A384F]">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C79628] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#28052B] block text-sm">Department of Civil Engineering</strong>
                Floor 2, Civil Engineering Block (South Wing),<br />
                Jyothi Engineering College (Autonomous),<br />
                Jyothi Hills, Panjal Road, Vettikkattiri P.O., Cheruthuruthy, Thrissur - 679531, Kerala, India.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Official Email</strong>
                <a href="mailto:ce@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  ce@jecc.ac.in
                </a>{' / '}
                <a href="mailto:jaisonmathew@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  hodce@jecc.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Telephone &amp; Extensions</strong>
                <span>+91 4884 259000 (Office PBX)</span><br />
                <span className="text-[#7A647F]">HOD Desk: Ext. 210 • Lab Testing Cell: Ext. 215</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Visiting &amp; Consultation Hours</strong>
                <span>Monday to Friday: 9:00 AM – 4:30 PM • Saturday: 9:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel: Material Testing & Admissions */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#28052B] to-[#3B0840] text-white shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#DFC06A] border border-white/15">
              Testing &amp; Admissions Desk
            </span>

            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              Consultancy &amp; Admission Enquiries
            </h3>

            <p className="text-xs text-white/80 font-light leading-relaxed">
              For testing requisitions regarding concrete compressive strength, steel tensile properties, soil plate load and bearing tests, or admissions to B.Tech Civil Engineering under Autonomous Merit and Management quotas:
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>Authorized Government &amp; PWD Structural Testing Center</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>Admissions Helpline: +91 95269 24455 / +91 95269 34455</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            {onOpenApply && (
              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 rounded-full bg-[#DFC06A] text-[#28052B] font-bold text-xs hover:bg-[#F3CF7A] transition-all cursor-pointer shadow-md"
              >
                Apply for B.Tech Admission
              </button>
            )}
            <a
              href="mailto:ce@jecc.ac.in?subject=Material Testing Inquiry"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs hover:bg-white/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              Book Lab Testing <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
