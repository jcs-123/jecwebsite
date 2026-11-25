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
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Events &amp; Workshops
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          From the national flagship symposium "CONSTRUX" and 10-day field surveying camps to specialized NDT masterclasses and mega-project industrial visits, the department provides experiential learning outside traditional classrooms.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((ev, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3.5 flex flex-col justify-between hover:border-[#C79628] transition-all">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[#C79628]">{ev.type}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E7D6C1] text-[#28052B] text-[10px] font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C79628]" /> {ev.date}
                </span>
              </div>
              <h4 className="font-['Playfair_Display',serif] font-bold text-base text-[#28052B] leading-snug">
                {ev.title}
              </h4>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                {ev.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#7A647F] font-medium">
              <strong className="text-[#28052B]">Participation:</strong> {ev.attendees}
            </div>
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
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Bulletin ("CIVITAS")
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          "CIVITAS" is the flagship annual technical magazine edited and curated by student editorial boards and faculty advisors, complemented by our quarterly newsletter "The Cornerstone".
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bulletins.map((b, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4 flex flex-col justify-between hover:border-[#C79628] transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#E7D6C1]">
                <span className="text-[10px] uppercase font-bold text-[#C79628]">
                  {b.edition}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E7D6C1] text-xs font-semibold text-[#28052B]">
                  {b.date}
                </span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
                {b.title}
              </h3>
              <div className="text-xs font-semibold text-[#C79628]">{b.theme}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-1">
                {b.highlight}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#7A647F]">PDF Size: {b.size}</span>
              <button
                onClick={() => alert(`Downloading ${b.title}`)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#28052B] text-white text-xs font-bold hover:bg-[#3B0840] transition-all cursor-pointer"
              >
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
    { title: 'Electronic Total Station Field Survey Practice', category: 'Surveying Fieldwork', src: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?q=80&w=600&auto=format&fit=crop' },
    { title: '1000 kN Computerized UTM Steel Tensile Test', category: 'Materials Testing Lab', src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop' },
    { title: 'CONSTRUX Bridge Load Testing Finals', category: 'Technical Fest', src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop' },
    { title: 'Triaxial Shear Testing in Geotechnical Lab', category: 'Soil Mechanics Lab', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
    { title: 'Cochin Metro Viaduct Industrial Study Visit', category: 'Industrial Visit', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop' },
    { title: 'BIM 3D Model Building Design in CAD Lab', category: 'Computation & CAD', src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <ImageIcon className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Gallery
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          A visual record of rigorous experimental testing, precision geodetic fieldwork, national tech symposium competitions, and industrial site explorations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img, idx) => (
          <div key={idx} className="rounded-3xl overflow-hidden border border-[#E7D6C1] bg-white shadow-xs group">
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#28052B]">{img.title}</h4>
                <div className="text-[10px] text-[#C79628] font-semibold mt-0.5">{img.category}</div>
              </div>
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
    { role: 'Staff Advisor', name: 'Prof. Vincy Verghese', designation: 'Assistant Professor', initials: 'VV' },
    { role: 'Student President', name: 'Kevin Paul', designation: 'Final Year B.Tech', initials: 'KP' },
    { role: 'Student Secretary', name: 'Devika Suresh', designation: 'Final Year B.Tech', initials: 'DS' },
    { role: 'Joint Secretary', name: 'Aaron K. George', designation: 'Third Year B.Tech', initials: 'AG' },
    { role: 'Treasurer', name: 'Chris Thomas', designation: 'Final Year B.Tech', initials: 'CT' },
    { role: 'Technical Lead', name: 'Sandra Maria', designation: 'Third Year B.Tech', initials: 'SM' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Civil Engineering Association (CEA) &amp; ICI Chapter
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Civil Engineering Association (CEA) operates in tandem with the Indian Concrete Institute (ICI) Student Chapter. The association organizes student symposia, software hackathons, guest lectures by infrastructure chief engineers, and community social engineering outreach initiatives.
        </p>
      </div>

      {/* Office Bearers Grid */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            CEA Executive Committee
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Tenure: 2024–2025
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bearers.map((b, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#C79628] uppercase">{b.role}</span>
                <div className="w-7 h-7 rounded-full bg-[#F5EEDB] text-[#7A5B28] font-bold text-xs flex items-center justify-center">
                  {b.initials}
                </div>
              </div>
              <div>
                <div className="font-bold text-xs text-[#28052B]">{b.name}</div>
                <div className="text-[11px] text-[#7A647F] mt-0.5">{b.designation}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flagship Activities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">CONSTRUX Tech Fest</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Organizing the annual state-level civil festival featuring concrete casting competitions, CAD drafting, and structural paper symposia.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">Community Outreach &amp; Habitat</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Partnering with local panchayats to provide free structural stability surveys and low-cost building plans for underprivileged families.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">Software Masterclasses</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Conducting weekend peer-learning tutorials on AutoCAD, Revit, SketchUp, Lumion, and STAAD.Pro for junior cohorts.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 5. Reach Us Page */
export const CeReachUsPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Reach the Department of Civil Engineering
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          {onOpenApply && (
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 rounded-full bg-[#28052B] text-[#DFC06A] hover:bg-[#3B0A40] transition-colors font-bold text-xs shadow-sm cursor-pointer flex items-center gap-2 border border-[#DFC06A]/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Admissions Inquiry</span>
            </button>
          )}
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you require material testing consultancy, structural audit services, academic admission guidance, or industry internship collaborations, we welcome your inquiries.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Department Location</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Department of Civil Engineering<br />
            Ground &amp; 1st Floor, Civil Engineering Block<br />
            Jyothi Engineering College (Autonomous)<br />
            Cheruthuruthy, Thrissur, Kerala – 679531
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Email &amp; Direct Extensions</h4>
          <div className="text-xs text-[#4A384F] space-y-2 font-light">
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">HOD Email:</div>
              <a href="mailto:jaisonmathew@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">jaisonmathew@jecc.ac.in</a>
            </div>
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">Testing &amp; Consultancy Cell:</div>
              <a href="mailto:ceconsultancy@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">ceconsultancy@jecc.ac.in</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Telephones &amp; Visiting Hours</h4>
          <div className="text-xs text-[#4A384F] space-y-1.5 font-light">
            <div>• College EPABX: <strong className="text-[#28052B] font-semibold">+91 4884 259000</strong> (Ext. 210)</div>
            <div>• Testing Cell Direct: <strong className="text-[#28052B] font-semibold">+91 4884 259015</strong></div>
            <div>• Working Hours: Monday – Friday, 9:00 AM – 4:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
