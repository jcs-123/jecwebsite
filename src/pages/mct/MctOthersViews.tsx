import React, { useState } from 'react';
import {
  Calendar, BookOpen, Image, Users, Mail, Phone,
  MapPin, ExternalLink, Download, Sparkles, CheckCircle2,
  Bot, Cpu, Cog, Eye, Activity, Send, ShieldCheck,
  Compass, Clock, Building, CircuitBoard
} from 'lucide-react';

/* 1. Department Events Page */
export const MctEventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'workshops' | 'visits'>('all');

  const events = [
    {
      title: 'AUTOPRISM 2024: National Robotics & Mechatronics Symposium',
      category: 'flagship',
      categoryLabel: 'Flagship Fest & Robo-Wars',
      date: 'March 1–2, 2024',
      venue: 'Main Auditorium & Indoor Drone Flight Arena',
      participants: '800+ Delegates from 54 Engineering Colleges',
      desc: 'Annual national extravaganza featuring Robowars (15kg & 30kg combat categories), Autonomous Maze Solver (Micro-Mouse), Quadcopter Drone Obstacle Sprint, Line Follower with PID tuning, and PLC Automation Hackathon.',
      highlights: 'Over ₹1.75 Lakhs in cash prizes; co-sponsored by Festo India and Tata Technologies.'
    },
    {
      title: 'Hands-on Bootcamp: ROS 2 & Autonomous Mobile Robot (AMR) Navigation',
      category: 'workshops',
      categoryLabel: 'Technical Workshop',
      date: 'October 26–28, 2023',
      venue: 'Advanced Robotics & ROS Testbed',
      participants: '75 Undergraduate Students',
      desc: 'Intensive 3-day bootcamp on installing ROS 2 Humble on Ubuntu, configuring TurtleBot 4 LiDAR nodes, building 2D maps using Cartographer SLAM, and executing autonomous waypoint routes with Nav2.',
      highlights: 'Instructed by senior roboticists from Maker Village Robotics Hub.'
    },
    {
      title: 'Industrial Technical Immersion: Titan Engineering & Automation Limited (TEAL)',
      category: 'visits',
      categoryLabel: 'Industrial Visit',
      date: 'November 18, 2023',
      venue: 'TEAL Automation Division, Hosur, Tamil Nadu',
      participants: 'Batch 2021-25 (52 Students)',
      desc: 'Live observation of high-speed cam indexing rotary tables, 6-axis articulated assembly robots, automated optical inspection cells, and ultrasonic plastic welding machines.',
      highlights: 'Guided by Senior Automation Directors at TEAL.'
    },
    {
      title: 'Field Visit to Festo Regional Technology Experience Centre',
      category: 'visits',
      categoryLabel: 'Industrial Visit',
      date: 'January 24, 2024',
      venue: 'Festo India Corporate Center, Bangalore',
      participants: 'Batch 2022-26 (54 Students)',
      desc: 'Hands-on study of bionic learning network robots (BionicCobot), smart valve terminals with CPX-IoT cloud communication, and modular production system assembly lines.',
      highlights: 'Exclusive didactic masterclass conducted by Festo engineers.'
    },
    {
      title: 'National Conference on Intelligent Autonomous Systems & Cybernetics (NCIASC 2024)',
      category: 'flagship',
      categoryLabel: 'National Conference',
      date: 'February 16–17, 2024',
      venue: 'Mechatronics Seminar Complex',
      participants: '150 Researchers & Faculty',
      desc: 'Keynote lectures on human-robot collaboration safety standards (ISO/TS 15066), neural network visual odometry, and surgical telemanipulation, organized in association with IEEE RAS.',
      highlights: '44 peer-reviewed research papers published in Scopus-indexed proceedings.'
    },
    {
      title: 'Certified Course in Siemens TIA Portal PLC & SCADA Programming',
      category: 'workshops',
      categoryLabel: 'Certification Course',
      date: 'December 4–9, 2023',
      venue: 'Festo Automation & IIIC Studio',
      participants: '60 Final-Year Mechatronics Students',
      desc: 'Hands-on training in SIMATIC S7-1200 / S7-1500 ladder logic, function block diagrams (FBD), WinCC SCADA HMI design, and industrial Profinet network commissioning.',
      highlights: 'Joint certification awarded with Siemens Authorized Training Center.'
    }
  ];

  const filtered = events.filter(e => filter === 'all' || e.category === filter);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Conferences, Hackathons &amp; Robowars</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Events
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Annual Calendar 2023–24
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            { id: 'all', label: 'All Events' },
            { id: 'flagship', label: 'Flagship Fest & Robowars' },
            { id: 'workshops', label: 'Hands-on Workshops' },
            { id: 'visits', label: 'Robotics & Automation Industry Visits' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === t.id
                  ? 'bg-[#28052B] text-white shadow-xs'
                  : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                  {item.categoryLabel}
                </span>
                <span className="text-xs font-mono text-[#7A647F] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C79628]" />
                  {item.date}
                </span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] pt-1">
                {item.title}
              </h3>
            </div>

            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              {item.desc}
            </p>

            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-1">
              <div className="text-[10px] font-bold text-[#C79628] uppercase tracking-wider">Venue &amp; Impact</div>
              <p className="text-[11.5px] text-[#28052B] font-medium">{item.venue} • {item.participants}</p>
              <p className="text-[11px] text-[#7A647F] pt-0.5">{item.highlights}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 2. Department Bulletin Page */
export const MctBulletinPage: React.FC = () => {
  const publications = [
    {
      title: 'SYNAPSE: Annual Technical Magazine 2023–24',
      issue: 'Volume VIII • Annual Print Edition',
      editor: 'Student Editorial Board & Prof. Melvinraj C. R.',
      theme: 'Embodied AI: From Bipedal Humanoids to Autonomous Factory Swarms',
      desc: 'Contains student research papers on visual SLAM using depth cameras, interview with ABB Robotics leads, e-Yantra winning algorithms, and capstone abstracts.',
      pages: '88 Pages • Full Color',
      file: 'SYNAPSE-Vol-8-2024.pdf'
    },
    {
      title: 'RoboPulse: Biannual Department Newsletter (Issue 16)',
      issue: 'Issue 16 • Spring 2024',
      editor: 'Mechatronics Editorial Cell',
      theme: 'e-Yantra National Champions & Placements',
      desc: 'Highlights our students winning All India 1st Prize at IIT Bombay e-Yantra, Tata Technologies campus selections, and faculty patent grants on compliant soft robotic grippers.',
      pages: '16 Pages',
      file: 'RoboPulse-Issue-16.pdf'
    },
    {
      title: 'RoboPulse: Biannual Department Newsletter (Issue 15)',
      issue: 'Issue 15 • Autumn 2023',
      editor: 'Mechatronics Editorial Cell',
      theme: 'Industry 4.0 Learning Factory & Cobot Deployments',
      desc: 'Coverage of Festo electro-pneumatic training courses, student drone autonomous navigation trials, and alumni profile on Motional driverless robotaxi engineers.',
      pages: '14 Pages',
      file: 'RoboPulse-Issue-15.pdf'
    },
    {
      title: 'Compendium of B.Tech Major Project Abstracts 2023',
      issue: 'Special Robotics Research Monograph',
      editor: 'Department Project Review Committee',
      theme: 'Intelligent Robotics & Cyber-Physical Systems',
      desc: 'Detailed documentation of 16 final-year mechatronic hardware prototypes covering warehouse AMRs, myoelectric prosthetic hands, automated coconut tree climbers, and surgical end-effectors.',
      pages: '64 Pages',
      file: 'MCT-Projects-Compendium-2023.pdf'
    }
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Official Periodicals &amp; Publications</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Bulletin &amp; Magazines
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            ISSN Registered Publications
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Mechatronics Engineering proudly issues "SYNAPSE" (Annual Technical Magazine) and "RoboPulse" (Biannual Newsletter) to celebrate student robotics victories, technological think-pieces, and industry automation breakthroughs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {publications.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 flex flex-col justify-between hover:border-[#C79628] transition-all">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                    {item.issue}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] mt-2">
                    {item.title}
                  </h3>
                </div>
                <Bot className="w-5 h-5 text-[#C79628]" />
              </div>

              <div className="text-xs text-[#28052B] font-semibold">
                Theme: <span className="font-normal text-[#4A384F] italic">{item.theme}</span>
              </div>

              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1] flex items-center justify-between">
              <span className="text-xs font-mono text-[#7A647F]">{item.pages}</span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#28052B] text-[#DFC06A] text-xs font-bold hover:bg-[#350A3A] transition-all cursor-pointer">
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 3. Gallery Page */
export const MctGalleryPage: React.FC = () => {
  const images = [
    {
      title: 'KUKA KR-6 Industrial Articulated Robot Arm Programming',
      cat: 'Industrial Robotics',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      caption: 'Students training 6-axis KUKA industrial robot for high-speed pick-and-place precision assembly.'
    },
    {
      title: 'Autonomous Mobile Robot (AMR) LiDAR SLAM Navigation',
      cat: 'Autonomous Systems',
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      caption: 'Testing TurtleBot 4 indoor mapping and dynamic obstacle avoidance using 2D LiDAR and ROS 2.'
    },
    {
      title: 'Festo Electro-Pneumatics Modular Production Station',
      cat: 'Industry 4.0 Lab',
      url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
      caption: 'Commissioning automated pneumatic cylinders and Siemens S7-1200 PLC ladder logic programs.'
    },
    {
      title: 'e-Yantra National Champions - Team RoboJec',
      cat: 'Student Laurels',
      url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800',
      caption: 'Mechatronics students celebrating their All India 1st Prize victory at IIT Bombay e-Yantra Challenge.'
    },
    {
      title: 'Machine Vision Deep Learning Defect Detection Rig',
      cat: 'Computer Vision',
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
      caption: 'Cognex industrial camera capturing micro-crack anomalies on PCB surfaces at 120 FPS.'
    },
    {
      title: 'Indoor Drone Navigation & Hovering Flight Arena',
      cat: 'Aerial Robotics',
      url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
      caption: 'Autonomous quadcopter executing optical-flow waypoint stabilization inside the protective flight cage.'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Image className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Photographic Showcase</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Gallery
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Glimpses of Mechatronics &amp; Robotics Life
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Witness the vibrant world of Mechatronics at Jyothi: industrial robotic arms dancing to precision code, autonomous drones soaring in flight cages, Festo smart factories, and high-energy national hackathons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img, i) => (
          <div key={i} className="p-4 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3 hover:border-[#C79628] transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-48 rounded-2xl overflow-hidden border border-[#DFC06A]/30 relative">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-[#28052B]/80 backdrop-blur-sm text-[10px] text-[#DFC06A] font-bold">
                  {img.cat}
                </span>
              </div>
              <h4 className="font-['Playfair_Display',serif] text-sm font-bold text-[#28052B]">{img.title}</h4>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">{img.caption}</p>
            </div>
            <div className="pt-2 border-t border-[#FAF7F2] text-[10px] font-mono text-[#7A647F] text-right">
              Jyothi MCT Archives
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Association Page */
export const MctAssociationPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Professional Student Bodies</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                MESA &amp; IEEE RAS Student Branch Chapter
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Active Chapters
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Mechatronics Engineering Student Association (MESA) operates in close harmony with the internationally chartered IEEE Robotics and Automation Society (RAS) Student Branch Chapter, fostering competitive robotics, open-source ROS development, and distinguished global lecture series.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Association 1: MESA */}
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                Departmental Body
              </span>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] mt-2">
                Mechatronics Engineering Student Association (MESA)
              </h3>
            </div>
            <Bot className="w-5 h-5 text-[#C79628]" />
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Founded in 2015, MESA is the heart of student life, orchestrating the national festival AUTOPRISM, drone grand prix, Arduino/Raspberry Pi robotics workshops for school students, and peer learning circles.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-2">
            <h4 className="font-bold text-xs text-[#28052B]">Office Bearers 2024–25:</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#4A384F]">
              <div><strong>President:</strong> Abhijith S. Nair (S7 MR)</div>
              <div><strong>Secretary:</strong> Anagha K. Menon (S7 MR)</div>
              <div><strong>Joint Sec:</strong> Adithya R. Nair (S5 MR)</div>
              <div><strong>Staff Advisor:</strong> Prof. Melvinraj C. R.</div>
            </div>
          </div>
        </div>

        {/* Association 2: IEEE RAS Chapter */}
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                International Chapter
              </span>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] mt-2">
                IEEE Robotics &amp; Automation Society (RAS) Chapter
              </h3>
            </div>
            <Sparkles className="w-5 h-5 text-[#C79628]" />
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Affiliated with the IEEE Kerala Section, the RAS chapter organizes international webinars by Stanford and CMU researchers, humanitarian myoelectric prosthetic hand drives, and robotic coding bootcamps.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-2">
            <h4 className="font-bold text-xs text-[#28052B]">Chapter Key Laurels:</h4>
            <ul className="space-y-1.5 text-[11px] text-[#4A384F]">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                IEEE RAS Outstanding Student Branch Chapter Award (2023).
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                Recipient of $2,500 IEEE Humanitarian Technology Grant for Prosthetics.
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                RAS Chapter Advisor: Dr. Jose P. Therattil (Senior Member IEEE).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MctReachProps {
  onOpenApply?: () => void;
}

/* 5. Reach Us Page */
export const MctReachUsPage: React.FC<MctReachProps> = ({ onOpenApply }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Contact &amp; Location Desk</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Reach Us
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Mechatronics Block Ground Floor
            </span>
            {onOpenApply && (
              <button
                onClick={onOpenApply}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C79628] to-[#DFC06A] text-[#28052B] font-bold text-xs hover:opacity-90 shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Apply Online</span>
              </button>
            )}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring student inquiring about B.Tech admissions in Mechatronics, an industrial enterprise seeking robot system integration or machine vision audits, or an alumnus reconnecting with your alma mater, our department doors are always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] pb-2 border-b border-[#FAF7F2]">
              Head of Department
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-[#C79628] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#28052B]">Dr. Jose P. Therattil, M.Tech, Ph.D</div>
                  <div className="text-[#7A647F]">Professor &amp; Head, Dept. of Mechatronics Engineering</div>
                  <div className="text-[#4A384F]">Cabin MR-G01, Ground Floor, Mechatronics Block</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C79628] shrink-0" />
                <a href="mailto:mct@jecc.ac.in" className="font-mono text-[#28052B] hover:text-[#C79628]">
                  mct@jecc.ac.in / hod_mr@jecc.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C79628] shrink-0" />
                <span className="font-mono text-[#4A384F]">+91 4884 259000 (Extn: 251)</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
            <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] pb-2 border-b border-[#FAF7F2]">
              Industrial Robotics &amp; Vision Consultancy Cell
            </h3>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              For automated optical inspection (AOI) feasibility studies, robot pick-and-place cell programming, and PLC migration audits:
            </p>
            <div className="text-xs space-y-1 font-mono text-[#28052B]">
              <div><strong>Email:</strong> roboticsconsultancy@jecc.ac.in</div>
              <div><strong>Direct:</strong> +91 94465 67890 (Prof. Melvinraj C. R.)</div>
            </div>
          </div>
        </div>

        {/* Interactive Query Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
            Send an Inquiry to Mechatronics Department
          </h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-[#28052B]">Inquiry Received</h4>
              <p className="text-xs text-[#4A384F]">
                Thank you for contacting the Department of Mechatronics Engineering. Our faculty coordinator will respond within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-[#28052B] text-white text-xs font-bold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#28052B] uppercase tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Panicker"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs text-[#28052B] focus:outline-none focus:ring-1 focus:ring-[#C79628]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#28052B] uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs text-[#28052B] focus:outline-none focus:ring-1 focus:ring-[#C79628]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#28052B] uppercase tracking-wider">Contact Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs text-[#28052B] focus:outline-none focus:ring-1 focus:ring-[#C79628]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#28052B] uppercase tracking-wider">Nature of Query</label>
                  <select className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs text-[#28052B] focus:outline-none focus:ring-1 focus:ring-[#C79628]">
                    <option>B.Tech Admissions &amp; Lateral Entry</option>
                    <option>Robotics Integration &amp; Vision Consultancy</option>
                    <option>Tata IIIC Automation Courses</option>
                    <option>Campus Recruitment &amp; Internships</option>
                    <option>Alumni &amp; Other Matters</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#28052B] uppercase tracking-wider">Your Message / Requirements</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please state details regarding your query..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs text-[#28052B] focus:outline-none focus:ring-1 focus:ring-[#C79628]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#28052B] text-[#DFC06A] font-bold text-xs hover:bg-[#350A3A] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
