import React, { useState } from 'react';
import {
  Calendar, Sparkles, Image as ImageIcon, Users, Phone,
  Mail, MapPin, Download, ExternalLink, Clock, Building2,
  CheckCircle2, ArrowRight, BookOpen, Star, Award, ShieldCheck,
  ShieldAlert, KeyRound, Lock, Terminal, Radio, Bug
} from 'lucide-react';

/* 1. Department Events Page */
export const CyberEventsPage: React.FC = () => {
  const events = [
    {
      title: 'CYBERIA 2024: National Cyber Defense Conclave & 24-Hour CTF',
      date: 'April 19–20, 2024',
      type: 'National CTF & Conclave',
      desc: 'Annual 24-hour jeopardy and attack-defense Capture-The-Flag (CTF) tournament with flags across Web Exploitation, Reverse Engineering, Cryptography, Pwnable Binaries, and OSINT. Keynotes by CERT-In and Kerala Police officers.',
      attendees: '320+ Ethical Hackers from 40 Engineering Colleges • ₹1,00,000 Bounty',
    },
    {
      title: 'Dark Web Reconnaissance & OSINT Masterclass',
      date: 'January 12–13, 2024',
      type: 'Hands-on Workshop',
      desc: 'Specialized training on Tor routing, automated scraping of darknet forums, cryptocurrency transaction tracing, and operational security (OpSec) for investigators.',
      attendees: '140 Student Investigators',
    },
    {
      title: 'Purple Teaming Cyber War Simulation with Kerala Police Cyberdome',
      date: 'October 27, 2023',
      type: 'Law Enforcement Simulation',
      desc: 'Joint cyber exercise simulating real-time defense against coordinated ransomware intrusions, evaluating incident response playbooks and SIEM log analysis.',
      attendees: 'Third & Final Year Cyber Security Batches',
    },
    {
      title: 'Bug Bounty Live Hacking Sprint & Responsible Disclosure Camp',
      date: 'August 18, 2023',
      type: 'Live Hacking Camp',
      desc: 'Weekend live bug bounty hunting session where students audited real-world public target scopes on Bugcrowd and HackerOne under faculty mentor supervision.',
      attendees: '90 Registered Student Hackers • 14 Valid Bugs Submitted',
    },
    {
      title: 'EC-Council CEH v12 Certification Bootcamp',
      date: 'June 05–10, 2023',
      type: 'Professional Bootcamp',
      desc: 'Intensive 40-hour boot camp covering the 20 CEH modules including social engineering, sniffing, evasion, cloud attacks, and IoT hacking.',
      attendees: '60 Certified Students',
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
            Active CTF &amp; Defense Sprints
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          From 24-hour national Capture-The-Flag (CTF) war rooms and darknet threat intelligence bootcamps to live bug bounty sprints and Kerala Police Cyberdome purple-team simulations.
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
export const CyberBulletinPage: React.FC = () => {
  const bulletins = [
    {
      title: 'ZERO-DAY 2024 - Annual Cyber Defense Magazine',
      edition: 'Volume 4 • Annual Edition',
      date: 'Published July 2024',
      theme: 'Theme: Generative AI Exploits, Post-Quantum Ciphers & Cloud Red Teaming',
      highlight: 'In-depth write-ups on prompt injection vectors in LLMs, dissecting LockBit 3.0 ransomware source code, and interviews with CrowdStrike threat hunters.',
      size: '16.5 MB',
    },
    {
      title: 'The Firewall - Quarterly Cyber Newsletter',
      edition: 'Vol. 3, Issue 2',
      date: 'April 2024',
      theme: 'CYBERIA 2024 Retrospective & CTF Writeups',
      highlight: 'Complete solutions and walk-throughs for the hardest pwn and crypto flags from CYBERIA 2024 and Google VRP acknowledgments.',
      size: '4.2 MB',
    },
    {
      title: 'The Firewall - Quarterly Cyber Newsletter',
      edition: 'Vol. 3, Issue 1',
      date: 'January 2024',
      theme: 'Winter Threat Horizon',
      highlight: 'Summary of Kerala Police Cyberdome joint drill, new CVE disclosures by students, and EC-Council CEH pass rankings.',
      size: '4.8 MB',
    },
    {
      title: 'ZERO-DAY 2023 - Annual Cyber Defense Magazine',
      edition: 'Volume 3 • Annual Edition',
      date: 'Published July 2023',
      theme: 'Theme: Zero Trust, IoT Botnets & Cyber Warfare',
      highlight: 'Special analysis on critical infrastructure SCADA attacks, hardware side-channel analysis, and student bug bounty journeys.',
      size: '14.1 MB',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Publications &amp; Threat Reports</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Bulletin
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            ZERO-DAY &amp; The Firewall
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          "ZERO-DAY" is the flagship annual technical journal created and published by the student security research team, accompanied by "The Firewall" quarterly threat report.
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
                <Download className="w-3.5 h-3.5" /> Download Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 3. Gallery Page */
export const CyberGalleryPage: React.FC = () => {
  const images = [
    { title: 'CYBERIA 24-Hour Capture The Flag (CTF) War Room Arena', category: 'CTF War Room', date: '2024' },
    { title: 'Air-Gapped Malware Analysis Sandbox Lab Disassembly Session', category: 'Malware Lab', date: '2024' },
    { title: 'Digital Forensics Write-Blocker Imaging & Evidence Extraction', category: 'Digital Forensics', date: '2024' },
    { title: 'Kerala Police Cyberdome Hackathon Team Felicitation', category: 'Achievements', date: '2023' },
    { title: 'Mock SOC Operations Room Real-Time Telemetry Monitoring', category: 'SOC Operations', date: '2023' },
    { title: 'Darknet & OSINT Threat Intelligence Investigation Workshop', category: 'Threat Intel', date: '2023' },
    { title: 'Bug Bounty Live Exploitation & Vulnerability Hunting Sprint', category: 'Bug Bounty', date: '2023' },
    { title: 'EC-Council Certified Ethical Hacker (CEH) Graduation Ceremony', category: 'Certifications', date: '2023' },
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
            Defense Arenas &amp; SOC Rooms
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          A visual record of intense 24-hour CTF war rooms, isolated malware triage studios, mock SOC monitoring consoles, and law enforcement award ceremonies.
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
                <ShieldCheck className="w-10 h-10 text-[#DFC06A]/40 group-hover:scale-110 group-hover:text-[#DFC06A] transition-all" />
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
export const CyberAssociationPage: React.FC = () => {
  const bearers = [
    { role: 'Staff Coordinator', name: 'Prof. Sreejith R.', designation: 'Assistant Professor' },
    { role: 'Student President', name: 'Gokul Chandran', designation: 'Final Year B.Tech Cyber Security' },
    { role: 'Student Secretary', name: 'Aishwarya Rajesh', designation: 'Final Year B.Tech Cyber Security' },
    { role: 'Joint Secretary', name: 'Arjun Ramesh', designation: 'Third Year B.Tech Cyber Security' },
    { role: 'Treasurer', name: 'Siddharth M.', designation: 'Final Year B.Tech Cyber Security' },
    { role: 'OWASP Student Lead', name: 'Devanand K.', designation: 'Final Year B.Tech Cyber Security' },
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
                Cyber Security Students Association (CYBERSA) &amp; OWASP Chapter
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            CYBERSA &amp; OWASP Chapter
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          CYBERSA operates in collaboration with the OWASP Student Chapter. Together, they host weekly CTF challenge walkthroughs, peer vulnerability disclosure clinics, public cyber hygiene awareness drives in schools, and red-team coding workshops.
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
            CYBERIA National CTF
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Hosting South India's premier collegiate Capture-The-Flag championship testing reverse engineering, web security, and cryptography.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            Community Cyber Safety Outreach
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Student volunteers educate regional schools, senior citizens, and bank branch staff on avoiding UPI scams, phishing, and social engineering.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            OWASP Web Security Clinics
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Weekly peer tutorials auditing web architectures against OWASP Top 10 vulnerabilities like Broken Object Level Authorization (BOLA).
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

export const CyberReachUsPage: React.FC<ReachUsProps> = ({ onOpenApply }) => {
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
            Cyber Security Block
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring student inquiring about B.Tech Cyber Security admissions, an enterprise requesting a Vulnerability Assessment &amp; Penetration Testing (VAPT) audit, or a law enforcement agency seeking digital forensic advice, our department is here to support you.
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
                <strong className="text-[#28052B] block text-sm">Department of Cyber Security</strong>
                Floor 4, Computer Science &amp; Cyber Security Block,<br />
                Jyothi Engineering College (Autonomous),<br />
                Jyothi Hills, Panjal Road, Vettikkattiri P.O., Cheruthuruthy, Thrissur - 679531, Kerala, India.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Official Email</strong>
                <a href="mailto:cyber@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  cyber@jecc.ac.in
                </a>{' / '}
                <a href="mailto:shajuky@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  hodcyber@jecc.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Telephone &amp; Extensions</strong>
                <span>+91 4884 259000 (Office PBX)</span><br />
                <span className="text-[#7A647F]">HOD Desk: Ext. 410 • Cyber Range Lab: Ext. 415</span>
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

        {/* Action Panel: Admissions & VAPT */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#28052B] to-[#3B0840] text-white shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#DFC06A] border border-white/15">
              Admissions &amp; Security Audits
            </span>

            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              Enroll in Cyber Security or Request a Security Audit
            </h3>

            <p className="text-xs text-white/80 font-light leading-relaxed">
              Inquire about admissions to the 60-seat B.Tech Cyber Security program under Autonomous Merit or Management quotas, or request an institutional security penetration audit:
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>Admissions Helpline: +91 95269 24455 / +91 95269 34455</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>VAPT Security Cell: vapt@jecc.ac.in</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            {onOpenApply && (
              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 rounded-full bg-[#DFC06A] text-[#28052B] font-bold text-xs hover:bg-[#F3CF7A] transition-all cursor-pointer shadow-md"
              >
                Apply for B.Tech Cyber Security
              </button>
            )}
            <a
              href="mailto:cyber@jecc.ac.in?subject=VAPT Audit Inquiry"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs hover:bg-white/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              Request VAPT Audit <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
