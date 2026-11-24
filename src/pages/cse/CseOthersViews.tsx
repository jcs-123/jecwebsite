import React, { useState } from 'react';
import {
  Calendar, Sparkles, Image as ImageIcon, Users, Phone,
  Mail, MapPin, Download, ExternalLink, Clock, Building2,
  CheckCircle2, ArrowRight, BookOpen, Star, Award, ShieldCheck,
  Code2, Terminal, Laptop
} from 'lucide-react';

/* 1. Department Events Page */
export const CseEventsPage: React.FC = () => {
  const events = [
    {
      title: 'HACK-JEC 2024: 24-Hour National Hackathon',
      date: 'February 23–24, 2024',
      type: 'National Hackathon',
      desc: 'Annual 24-hour overnight codeathon featuring tracks in Generative AI, Web3 & DeFi, Smart Healthcare, and Cybersecurity. Over 65 teams pitched working prototypes to corporate venture judges.',
      attendees: '380+ Hackers from 45 Engineering Institutes • ₹1,50,000 Prize Pool',
    },
    {
      title: 'TURING 2024: National Civil & Computer Science Technical Colloquium',
      date: 'April 05–06, 2024',
      type: 'Tech Fest',
      desc: 'Coding competitions including Speed-Debug, Code-Golf, Capture the Flag (CTF), UI/UX Figma Design Sprint, and Paper Presentations on Large Language Models.',
      attendees: '500+ Participants across South India',
    },
    {
      title: 'Google Cloud Community Study Jam & Generative AI Workshop',
      date: 'November 10–12, 2023',
      type: 'Developer Bootcamp',
      desc: 'Hands-on three-day immersion into Google Cloud Vertex AI, prompt design, and deploying containerized microservices to Google Kubernetes Engine (GKE).',
      attendees: '180 Student Developers Certified',
    },
    {
      title: 'Zero-Day Defensive Cyber Drill & Red-Team CTF',
      date: 'September 15, 2023',
      type: 'Cybersecurity Simulation',
      desc: 'In collaboration with Kerala Police Cyberdome. Live attack-defense cyber war simulation analyzing SQL injection vectors, buffer overflows, and memory exploits.',
      attendees: '110 Student Participants',
    },
    {
      title: 'DevOps & Docker Microservices Masterclass',
      date: 'July 28, 2023',
      type: 'Industry Workshop',
      desc: 'Conducted by Red Hat certified instructors covering Dockerfile multi-stage builds, Kubernetes pod deployments, and Helm package managers.',
      attendees: 'Pre-final & Final Year CSE Cohorts',
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
            Active Hackathon Culture
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          From 24-hour overnight codeathons and developer masterclasses to national Capture-The-Flag (CTF) cyber drills and cloud study jams, our department fosters continuous hands-on creation.
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
export const CseBulletinPage: React.FC = () => {
  const bulletins = [
    {
      title: 'KERNEL 2024 - Annual Technical Magazine',
      edition: 'Volume 15 • Annual Edition',
      date: 'Published June 2024',
      theme: 'Theme: Generative AI, Quantum Computing & Beyond',
      highlight: 'Features exclusive interviews with Microsoft and Google engineering alumni, articles on local LLM quantization, and student GSoC journeys.',
      size: '18.4 MB',
    },
    {
      title: 'The ByteStream - Quarterly CSE Newsletter',
      edition: 'Vol. 10, Issue 2',
      date: 'March 2024',
      theme: 'Quarterly Research & Hackathon Digest',
      highlight: 'Coverage of HACK-JEC 2024 winning projects, SIH national awards, and Tier-1 placement offer highlights.',
      size: '4.6 MB',
    },
    {
      title: 'The ByteStream - Quarterly CSE Newsletter',
      edition: 'Vol. 10, Issue 1',
      date: 'December 2023',
      theme: 'Winter Tech Edition',
      highlight: 'Reports on Red Hat OpenShift certification camp, ACM ICPC regional qualifiers, and faculty patents.',
      size: '5.2 MB',
    },
    {
      title: 'KERNEL 2023 - Annual Technical Magazine',
      edition: 'Volume 14 • Annual Edition',
      date: 'Published June 2023',
      theme: 'Theme: Decentralized Systems & Zero-Trust Cloud',
      highlight: 'Articles on Ethereum layer-2 rollups, post-quantum cryptography, and student-founded startups.',
      size: '15.9 MB',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Publications &amp; Newsletters</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Bulletin
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            KERNEL &amp; The ByteStream
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          "KERNEL" is the annual peer-reviewed departmental technical magazine created by student editors and faculty mentors, complemented by our quarterly newsletter "The ByteStream".
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
export const CseGalleryPage: React.FC = () => {
  const images = [
    { title: 'HACK-JEC 24-Hour Overnight Codeathon Pitch Arena', category: 'Hackathons', date: '2024' },
    { title: 'High Performance GPU Lab Deep Learning Training Session', category: 'Computing Labs', date: '2024' },
    { title: 'Cyber Security Capture-the-Flag (CTF) War Room', category: 'Cyber Security', date: '2024' },
    { title: 'Google Cloud Study Jam Hands-on Cloud Deployments', category: 'Cloud Workshop', date: '2023' },
    { title: 'Smart India Hackathon (SIH) National Winners Felicitation', category: 'Achievements', date: '2023' },
    { title: 'TURING Tech Fest Speed Coding Finals in Central Lab', category: 'Tech Fest', date: '2023' },
    { title: 'Red Hat OpenShift Container Workshop in Linux Suite', category: 'Red Hat Academy', date: '2023' },
    { title: 'Graduating Batch Project Expo & Prototype Showcase', category: 'Project Expo', date: '2023' },
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
            Coding Arenas &amp; Hackathons
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          A glimpse into hackathon coding war rooms, advanced computing GPU suites, national tech symposia, and project prototype exhibitions.
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
                <Terminal className="w-10 h-10 text-[#DFC06A]/40 group-hover:scale-110 group-hover:text-[#DFC06A] transition-all" />
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
export const CseAssociationPage: React.FC = () => {
  const bearers = [
    { role: 'Staff Coordinator', name: 'Prof. Swapna B.', designation: 'Associate Professor' },
    { role: 'Student President', name: 'Adithya Krishna', designation: 'Final Year B.Tech CSE' },
    { role: 'Student Secretary', name: 'Fathima Zahra', designation: 'Final Year B.Tech CSE' },
    { role: 'Joint Secretary', name: 'Devanand K.', designation: 'Third Year B.Tech CSE' },
    { role: 'Treasurer', name: 'Rohit Balakrishnan', designation: 'Final Year B.Tech CSE' },
    { role: 'ACM Chapter Lead', name: 'Alan Jose P.', designation: 'Final Year B.Tech CSE' },
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Professional Bodies</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Computer Science &amp; Engineering Students Association (CSESA) &amp; ACM Chapter
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            CSESA &amp; ACM Student Chapter
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          CSESA and the ACM Student Chapter organize hackathons, weekly competitive coding meetups, peer developer workshops, open-source code sprints, and tech conferences.
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
            HACK-JEC 24-Hr Hackathon
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Hosting the flagship annual overnight software innovation marathon connecting student developers with angel investors and tech founders.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            Weekly LeetCode Coding Club
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Peer-led problem-solving sessions focusing on dynamic programming, trees, and graph algorithms preparing students for Google and Amazon interviews.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs space-y-2">
          <div className="font-bold text-[#28052B] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C79628]" />
            Open Source &amp; Dev Community
          </div>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Guiding students on contributing to open source, participating in Hacktoberfest, and securing Google Summer of Code (GSoC) fellowships.
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

export const CseReachUsPage: React.FC<ReachUsProps> = ({ onOpenApply }) => {
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
            Computer Science Block
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring engineering student inquiring about autonomous B.Tech admissions, an enterprise seeking campus hiring collaborations, or a researcher exploring funded computing projects, our department office is ready to assist you.
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
                <strong className="text-[#28052B] block text-sm">Department of Computer Science &amp; Engineering</strong>
                Floor 3, Computer Science &amp; IT Block,<br />
                Jyothi Engineering College (Autonomous),<br />
                Jyothi Hills, Panjal Road, Vettikkattiri P.O., Cheruthuruthy, Thrissur - 679531, Kerala, India.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Official Email</strong>
                <a href="mailto:cse@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  cse@jecc.ac.in
                </a>{' / '}
                <a href="mailto:hodcse@jecc.ac.in" className="text-[#28052B] hover:text-[#C79628] font-mono">
                  hodcse@jecc.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C79628] shrink-0" />
              <div>
                <strong className="text-[#28052B] block">Telephone &amp; Extensions</strong>
                <span>+91 4884 259000 (Office PBX)</span><br />
                <span className="text-[#7A647F]">HOD Desk: Ext. 310 • Placement Liaison: Ext. 315</span>
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

        {/* Action Panel: Admissions & Hiring */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#28052B] to-[#3B0840] text-white shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#DFC06A] border border-white/15">
              Admissions &amp; Industry Placement
            </span>

            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              Join B.Tech CSE or Hire Our Technologists
            </h3>

            <p className="text-xs text-white/80 font-light leading-relaxed">
              Inquire about B.Tech CSE admissions under Autonomous Merit or Management quotas, or schedule campus recruitment drives for your software engineering teams:
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>Admissions Helpline: +91 95269 24455 / +91 95269 34455</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC06A]" />
                <span>Corporate Placement Desk: placements@jecc.ac.in</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            {onOpenApply && (
              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 rounded-full bg-[#DFC06A] text-[#28052B] font-bold text-xs hover:bg-[#F3CF7A] transition-all cursor-pointer shadow-md"
              >
                Apply for B.Tech CSE Admission
              </button>
            )}
            <a
              href="mailto:cse@jecc.ac.in?subject=Campus Hiring Inquiry"
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs hover:bg-white/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              Hire From CSE <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
