import React, { useState } from 'react';
import {
  Calendar, Sparkles, Image as ImageIcon, Users, Phone,
  Mail, MapPin, Download, ExternalLink, Clock, Building2,
  CheckCircle2, ArrowRight, BookOpen, Star, Award, ShieldCheck,
  Cpu, Radio, Microchip, CircuitBoard, Waves, Terminal
} from 'lucide-react';

/* 1. Department Events Page */
export const EceEventsPage: React.FC = () => {
  const events = [
    {
      title: 'LUMEN 2024: National Electronics & Communication Tech Fest',
      date: 'March 22–23, 2024',
      type: 'National Tech Fest',
      desc: 'Annual flagship symposium featuring Circuit-Tronics (rapid breadboard debugging), Silicon-Wars (Verilog HDL coding sprint), Robo-Soccer, Antenna Design Sprint, and Paper Presentations on 5G/6G communication.',
      attendees: '400+ Participants from 35 Engineering Colleges • ₹80,000 Prize Pool',
    },
    {
      title: 'Cadence Custom IC Design & Analog Layout Masterclass',
      date: 'December 14–16, 2023',
      type: 'Hands-on Workshop',
      desc: 'Three-day intensive training in Cadence Virtuoso covering schematic capture, transient simulation, DRC/LVS physical verification, and post-layout parasitics extraction.',
      attendees: '90 Student Designers & Faculty Scholars',
    },
    {
      title: 'Texas Instruments IoT & Embedded Systems Hackathon',
      date: 'October 06–07, 2023',
      type: 'Hardware Hackathon',
      desc: '24-hour hardware innovation sprint utilizing TI CC3200 LaunchPads and MSP430 controllers to prototype edge healthcare and smart campus monitoring systems.',
      attendees: '32 Selected Teams',
    },
    {
      title: 'Industrial Study Visit to ISRO VSSC & Thumba Rocket Launching Station',
      date: 'August 11, 2023',
      type: 'Field Exposure',
      desc: 'Comprehensive on-site exposure to satellite avionics assembly clean rooms, launch vehicle telemetry tracking antennas, and acoustic testing bays.',
      attendees: 'Third Year ECE Cohort',
    },
    {
      title: '5G mmWave Beamforming & SDR Workshop',
      date: 'June 02, 2023',
      type: 'Telecom Masterclass',
      desc: 'Practical software-defined radio (SDR) demonstrations using USRP transceivers, evaluating QAM modulation constellations and beam-steering array algorithms.',
      attendees: 'Pre-final & Final Year Students',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Department Events</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Events
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Active Hardware Culture
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          From the flagship national technical fest "LUMEN" and Cadence custom IC design workshops to Texas Instruments embedded hackathons and ISRO satellite facility study visits.
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
export const EceBulletinPage: React.FC = () => {
  const bulletins = [
    {
      title: 'PULSE 2024 - Annual Electronics Engineering Magazine',
      edition: 'Volume 14 • Annual Edition',
      date: 'Published June 2024',
      theme: 'Theme: India Semiconductor Mission, RISC-V Silicon & 6G Horizons',
      highlight: 'Keynote technical articles on sub-3nm FinFET scaling, automotive ADAS radar integration, and interviews with Intel and Qualcomm engineering directors.',
      size: '15.8 MB',
    },
    {
      title: 'The WaveGuide - Quarterly ECE Newsletter',
      edition: 'Vol. 9, Issue 2',
      date: 'March 2024',
      theme: 'LUMEN 2024 Retrospective & Innovation Awards',
      highlight: 'Coverage of LUMEN 2024 project winners, Texas Instruments Innovation Challenge laurels, and Tier-1 core placement statistics.',
      size: '4.4 MB',
    },
    {
      title: 'The WaveGuide - Quarterly ECE Newsletter',
      edition: 'Vol. 9, Issue 1',
      date: 'December 2023',
      theme: 'Winter Semiconductor Edition',
      highlight: 'Summary of Cadence VLSI design masterclass, ISRO satellite study tour, and student patent publications.',
      size: '4.9 MB',
    },
    {
      title: 'PULSE 2023 - Annual Electronics Engineering Magazine',
      edition: 'Volume 13 • Annual Edition',
      date: 'Published June 2023',
      theme: 'Theme: Optical Biosensors & Autonomous Embedded Robotics',
      highlight: 'Special section on Photonic Crystal Fiber sensors, space-grade radiation tolerant ICs, and alumni startups.',
      size: '13.6 MB',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Publications &amp; Technical Bulletins</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Bulletin
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            PULSE &amp; The WaveGuide
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          "PULSE" is the flagship annual technical journal edited and curated by the student editorial board and faculty mentors, complemented by our quarterly newsletter "The WaveGuide".
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
export const EceGalleryPage: React.FC = () => {
  const images = [
    { title: 'Cadence EDA Suite Sub-Micron CMOS Layout Session', category: 'VLSI Design Studio', date: '2024' },
    { title: 'Texas Instruments Embedded Innovation Lab Prototyping', category: 'Embedded Systems', date: '2024' },
    { title: 'Vector Network Analyzer (VNA) High-Frequency S-Parameter Test', category: 'Microwave Lab', date: '2024' },
    { title: 'LUMEN National Tech Fest Circuit Debugging War Arena', category: 'Tech Fest', date: '2024' },
    { title: 'Automated Rapid CNC PCB Mechanical Milling Demonstration', category: 'PCB Workshop', date: '2023' },
    { title: 'Optical Fiber Fusion Splicing and OTDR Attenuation Profiling', category: 'Photonics Lab', date: '2023' },
    { title: 'ISRO Thumba Rocket Launching Station Industrial Visit', category: 'Industrial Visit', date: '2023' },
    { title: 'Final Year Robotics & Edge AI Prototype Exhibition', category: 'Project Expo', date: '2023' },
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Visual Chronicle</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Gallery
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Hardware Studios &amp; Silicon Labs
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          A visual record of silicon circuit design studios, RF analyzer test benches, Texas Instruments embedded prototyping, and industrial robotics exhibitions.
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
                <Microchip className="w-10 h-10 text-[#DFC06A]/40 group-hover:scale-110 group-hover:text-[#DFC06A] transition-all" />
              </div>
              <div className="text-[11px] font-medium text-white/90 line-clamp-2 relative z-10">
                {img.title}
              </div>
            </div>
            <div className="p-3 bg-white text-center">
              <span className="text-[11px] font-bold text-[#28052B] group-hover:text-[#C79628] transition-colors cursor-pointer">
                View Photo
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Association Page */
export const EceAssociationPage: React.FC = () => {
  const bearers = [
    { role: 'Staff Coordinator', name: 'Prof. Bindhu K. Rajan', designation: 'Assistant Professor' },
    { role: 'Student President', name: 'Kevin Thomas', designation: 'Final Year B.Tech ECE' },
    { role: 'Student Secretary', name: 'Sneha M. Nair', designation: 'Final Year B.Tech ECE' },
    { role: 'Joint Secretary', name: 'Alan Jose', designation: 'Third Year B.Tech ECE' },
    { role: 'Treasurer', name: 'Akshay Raj', designation: 'Final Year B.Tech ECE' },
    { role: 'IEEE Student Branch Lead', name: 'Devika Suresh', designation: 'Final Year B.Tech ECE' },
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
                Electronics &amp; Communication Engineering Association (ECESA) &amp; IEEE Chapter
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            ECESA &amp; IEEE ECE Chapter
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          ECESA operates in collaboration with the IEEE Photonics and Microwave Theory &amp; Technology Society (MTT-S) Student Chapters. The association organizes tech symposiums, embedded circuit hackathons, semiconductor webinars, and hardware fabrication clinics.
        </p>
      </div>

      {/* Office Bearers Grid */}
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
            LUMEN Tech Fest
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Hosting the flagship annual national electronics festival featuring circuit debug wars, Verilog HDL coding, and autonomous robotics competitions.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            Weekend PCB &amp; SMD Clinics
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Hands-on peer tutorials guiding junior cohorts through schematic design in KiCad, automated PCB routing, chemical etching, and SMD soldering.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            Silicon &amp; Core Industry Talks
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Monthly technical webinars hosted by distinguished alumni working at Intel, Qualcomm, Texas Instruments, Apple, and ISRO.
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

export const EceReachUsPage: React.FC<ReachUsProps> = ({ onOpenApply }) => {
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
            Electronics Block
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring student inquiring about autonomous B.Tech or M.Tech admissions, an enterprise seeking hardware/PCB consultancy testing, or a research partner exploring collaborative silicon development, our secretariat is at your service.
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
                <strong className="text-[#28052B] block text-sm">Department of Electronics &amp; Communication Engineering</strong>
                Floor 2, Electronics &amp; Electrical Block,<br />
                Jyothi Engineering College (Autonomous),<br />
                Jyothi Hills, Panjal Road, Vettikkattiri P.O., Cheruthuruthy, Thrissur - 679531, Kerala, India.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Official Email</strong>
                <a href="mailto:ece@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  ece@jecc.ac.in
                </a>{' / '}
                <a href="mailto:sindhus@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  hodece@jecc.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Telephone &amp; Extensions</strong>
                <span>+91 4884 259000 (Office PBX)</span><br />
                <span className="text-[#7A647F]">HOD Desk: Ext. 510 • Cadence VLSI Studio: Ext. 515</span>
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

        {/* Action Panel: Admissions & PCB Consultancy */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#28052B] to-[#3B0840] text-white shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#DFC06A] border border-white/15">
              Admissions &amp; Prototyping Desk
            </span>

            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              Enroll in B.Tech ECE or Request PCB Prototyping
            </h3>

            <p className="text-xs text-white/80 font-light leading-relaxed">
              Inquire about B.Tech/M.Tech ECE admissions under Autonomous Merit or Management quotas, or request custom PCB rapid prototyping and RF S-parameter characterization testing:
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>Admissions Helpline: +91 95269 24455 / +91 95269 34455</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>PCB Fabrication Cell: pcblab@jecc.ac.in</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            {onOpenApply && (
              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 rounded-full bg-[#DFC06A] text-[#28052B] font-bold text-xs hover:bg-[#F3CF7A] transition-all cursor-pointer shadow-md"
              >
                Apply for B.Tech ECE Admission
              </button>
            )}
            <a
              href="mailto:ece@jecc.ac.in?subject=PCB Prototyping Inquiry"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs hover:bg-white/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              Request Lab Services <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
