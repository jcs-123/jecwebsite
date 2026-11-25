import React, { useState } from 'react';
import {
  Calendar, BookOpen, Image, Users, Mail, Phone,
  MapPin, ExternalLink, Download, Sparkles, CheckCircle2,
  Wrench, Cog, Flame, Activity, Send, ShieldCheck,
  Compass, Clock, Building, Hammer
} from 'lucide-react';

/* 1. Department Events Page */
export const MeEventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'workshops' | 'visits'>('all');

  const events = [
    {
      title: 'MECHRONO 2024: National Mechanical Engineering Symposium & Auto-Expo',
      category: 'flagship',
      categoryLabel: 'Flagship Symposium',
      date: 'February 23–24, 2024',
      venue: 'Main Auditorium & Central Workshop Grounds',
      participants: '750+ Delegates from 50 Engineering Colleges',
      desc: 'Annual national technical festival featuring Formula SAE single-seater drag race, RC Nitro buggy championships, CAD speed drafting (CAD-Mania), Lathe Master machining challenge, and Engine Assembling showdown.',
      highlights: 'Over ₹1.5 Lakhs in cash prizes; sponsored by Tata Motors and Bosch India.'
    },
    {
      title: 'Hands-on Workshop: Advanced 3D Printing & Topology Optimization',
      category: 'workshops',
      categoryLabel: 'Technical Workshop',
      date: 'November 15–17, 2023',
      venue: 'FabLab & Additive Manufacturing Studio',
      participants: '90 Undergraduate Students',
      desc: 'Practical 3-day bootcamp on generative design in Autodesk Fusion 360, slicing strategies in Cura, and operating industrial SLA and FDM machines.',
      highlights: 'Led by design engineers from Maker Village and RapidPro Labs.'
    },
    {
      title: 'Industrial Technical Immersion: Cochin Shipyard Limited (CSL)',
      category: 'visits',
      categoryLabel: 'Industrial Visit',
      date: 'October 12, 2023',
      venue: 'Cochin Shipyard Dry Dock & Marine Hull Assembly, Kochi',
      participants: 'Batch 2021-25 (62 Students)',
      desc: 'Exclusive access to India’s premier shipbuilding docks: hull plate bending, submerged arc robotic welding, propulsion shaft alignment, and marine diesel test rigs.',
      highlights: 'Guided by Chief Naval Architects and Senior Hull Engineers.'
    },
    {
      title: 'Field Visit to Fertilisers and Chemicals Travancore (FACT) Udyogamandal',
      category: 'visits',
      categoryLabel: 'Industrial Visit',
      date: 'January 19, 2024',
      venue: 'FACT Petrochemical & Heavy Boiler Complex, Eloor',
      participants: 'Batch 2022-26 (58 Students)',
      desc: 'Study of industrial high-pressure steam boilers, centrifugal gas compressors, cryogenic ammonia storage spheres, and heat exchanger networks.',
      highlights: 'Comprehensive technical briefing by Plant General Managers.'
    },
    {
      title: 'National Conference on Recent Advances in Manufacturing & Thermal Sciences (RAMTS 2024)',
      category: 'flagship',
      categoryLabel: 'National Conference',
      date: 'March 8–9, 2024',
      venue: 'Mechanical Seminar Complex',
      participants: '160 Researchers & Faculty',
      desc: 'Keynotes on hydrogen internal combustion engines, cryogenic rocket engine cooling, and metal matrix composites, organized in association with ASME.',
      highlights: '52 peer-reviewed research papers published in Scopus-indexed proceedings.'
    },
    {
      title: 'Certified Course in Non-Destructive Testing (NDT Level II)',
      category: 'workshops',
      categoryLabel: 'Certification Course',
      date: 'December 11–16, 2023',
      venue: 'Materials Testing & Metallurgy Lab',
      participants: '55 Final-Year ME Students',
      desc: 'Intensive 6-day hands-on certification covering Ultrasonic Testing (UT), Magnetic Particle Testing (MPT), Radiographic Film Interpretation, and Dye Penetrant Testing.',
      highlights: 'Certification awarded in compliance with ASNT SNT-TC-1A standards.'
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Conferences, Expos &amp; Competitions</span>
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
            { id: 'flagship', label: 'Flagship Fest & Symposium' },
            { id: 'workshops', label: 'Hands-on Workshops' },
            { id: 'visits', label: 'Heavy Industry & Shipyard Visits' }
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
export const MeBulletinPage: React.FC = () => {
  const publications = [
    {
      title: 'TORQUE: Annual Technical Magazine 2023–24',
      issue: 'Volume XVIII • Annual Print Edition',
      editor: 'Student Editorial Board & Dr. Manoj Kumar V.',
      theme: 'Mobility 2030: Lightweight Composites, Bio-Hydrogen & Generative AI',
      desc: 'Features technical essays on Formula student chassis FEA, liquid hydrogen fuel tanks for aviation, interviews with McLaren Racing alumni, and project abstracts.',
      pages: '92 Pages • Full Color',
      file: 'TORQUE-Vol-18-2024.pdf'
    },
    {
      title: 'Crankshaft: Biannual Department Newsletter (Issue 32)',
      issue: 'Issue 32 • Spring 2024',
      editor: 'ME Editorial Cell',
      theme: 'Motorsports Laurels, Placements & Research Grants',
      desc: 'Highlights Team AeroJec Motorsports’ top-5 finish at Formula Bharat 2024, Tata Motors recruitment statistics, and faculty patent grants on dual-fuel injection.',
      pages: '16 Pages',
      file: 'Crankshaft-Issue-32.pdf'
    },
    {
      title: 'Crankshaft: Biannual Department Newsletter (Issue 31)',
      issue: 'Issue 31 • Autumn 2023',
      editor: 'ME Editorial Cell',
      theme: 'Industry 4.0, Additive Tooling & FabLab Innovations',
      desc: 'Coverage of NDT Level II certifications, 3D printing masterclasses, and alumni spotlight on Tesla Gigafactory Berlin operations engineers.',
      pages: '14 Pages',
      file: 'Crankshaft-Issue-31.pdf'
    },
    {
      title: 'Compendium of B.Tech Major Project Abstracts 2023',
      issue: 'Special Research Monograph',
      editor: 'Department Project Review Committee',
      theme: 'Hardware Prototypes & Sustainable Energy Technologies',
      desc: 'Engineering documentation of 22 final-year capstone inventions covering hybrid ATV gearboxes, solar Stirling engines, automated coconut harvesting claws, and UAV airframes.',
      pages: '76 Pages',
      file: 'ME-Projects-Compendium-2023.pdf'
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
          The Department of Mechanical Engineering proudly publishes "TORQUE" (Annual Technical Magazine) and "Crankshaft" (Biannual Newsletter) to celebrate student ingenuity, research milestones, and emerging technological trends.
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
                <Wrench className="w-5 h-5 text-[#C79628]" />
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
export const MeGalleryPage: React.FC = () => {
  const images = [
    {
      title: 'Formula Bharat Race Car Track Trials',
      cat: 'Motorsports & Automotive',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800',
      caption: 'Team AeroJec Motorsports fine-tuning suspension kinematics and tire telemetry on the Kari Motor Speedway track.'
    },
    {
      title: 'Precision CNC 3-Axis Milling Center Operation',
      cat: 'Advanced Manufacturing',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      caption: 'Machining aerospace-grade aluminum brackets using automated G-code toolpaths in the CNC Machining Center.'
    },
    {
      title: 'Computerized IC Engine Exhaust Emission Telemetry',
      cat: 'Thermal Sciences',
      url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800',
      caption: 'In-cylinder pressure analysis and flame velocity monitoring for biofuel blends in the Thermal Engineering Lab.'
    },
    {
      title: 'FabLab 3D Additive Manufacturing Prototyping',
      cat: 'FabLab Studio',
      url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
      caption: 'Students manufacturing topology-optimized drone chassis components using fused deposition modeling printers.'
    },
    {
      title: 'Heavy Machine Shop Lathe & Milling Training',
      cat: 'Central Workshops',
      url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      caption: 'Undergraduates turning precision shafts and knurled tools under certified workshop superintendent mentorship.'
    },
    {
      title: 'SAE BAJA All-Terrain Vehicle (ATV) Fabrication',
      cat: 'Student Laurels',
      url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      caption: 'Team RoughRiders welding the roll cage and integrating double wishbone suspension for the national endurance race.'
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
            Glimpses of Mechanical Engineering Life
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Step inside the workshops and labs of Jyothi Mechanical Engineering: high-octane Formula racing car design, precision CNC tooling, molten metal foundry casting, and CFD simulations.
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
              Jyothi ME Archives
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Association Page */
export const MeAssociationPage: React.FC = () => {
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
                MEA, SAE India &amp; ASME Chapters
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Active Chapters
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Mechanical Engineering Association (MEA) collaborates with international engineering societies including SAE India (Society of Automotive Engineers), ASME (American Society of Mechanical Engineers), and ISHRAE (Indian Society of Heating, Refrigerating and Air Conditioning Engineers) to provide unmatched competitive and professional avenues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Association 1: MEA */}
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                Departmental Body
              </span>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] mt-2">
                Mechanical Engineering Association (MEA)
              </h3>
            </div>
            <Wrench className="w-5 h-5 text-[#C79628]" />
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Founded in 2002, MEA drives the department’s cultural and technical vibrancy, organizing the national symposium MECHRONO, CAD design hackathons, go-karting challenges, and technical industrial tours.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-2">
            <h4 className="font-bold text-xs text-[#28052B]">Office Bearers 2024–25:</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#4A384F]">
              <div><strong>President:</strong> Abhiram V. S. (S7 ME)</div>
              <div><strong>Secretary:</strong> Adithya Narayanan (S7 ME)</div>
              <div><strong>Joint Sec:</strong> Aravind S. Kumar (S5 ME)</div>
              <div><strong>Staff Advisor:</strong> Prof. Christy V. Vazhappilly</div>
            </div>
          </div>
        </div>

        {/* Association 2: SAE India & ASME Chapter */}
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                International Chapters
              </span>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] mt-2">
                SAE India Collegiate Club &amp; ASME Chapter
              </h3>
            </div>
            <Sparkles className="w-5 h-5 text-[#C79628]" />
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Home to Team AeroJec Motorsports, the SAE India Collegiate Club fields student-built single-seater race cars in Formula Bharat and all-terrain vehicles in SAE BAJA, backed by ASME technical symposium access.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-2">
            <h4 className="font-bold text-xs text-[#28052B]">Chapter Key Laurels:</h4>
            <ul className="space-y-1.5 text-[11px] text-[#4A384F]">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                Top 5 National Overall Finish at Formula Bharat 2024 (Combustion).
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                Best Suspension &amp; Roll Cage Award at SAE BAJA India 2023.
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                Faculty Mentors: Prof. Christy V. Vazhappilly &amp; Prof. Sukesh O. P.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 5. Reach Us Page */
export const MeReachUsPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
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
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Mechanical Block Ground Floor
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring engineering student inquiring about B.Tech admissions, an enterprise seeking CNC machining, materials testing, or engine emission telemetry, our faculty and workshop superintendents welcome your inquiries.
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
                  <div className="font-bold text-[#28052B]">Dr. Biju P. L., M.Tech, Ph.D</div>
                  <div className="text-[#7A647F]">Professor &amp; Head, Dept. of Mechanical Engineering</div>
                  <div className="text-[#4A384F]">Cabin ME-G01, Ground Floor, Mechanical Block</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C79628] shrink-0" />
                <a href="mailto:me@jecc.ac.in" className="font-mono text-[#28052B] hover:text-[#C79628]">
                  me@jecc.ac.in / hod_me@jecc.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C79628] shrink-0" />
                <span className="font-mono text-[#4A384F]">+91 4884 259000 (Extn: 241)</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
            <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] pb-2 border-b border-[#FAF7F2]">
              Consultancy &amp; Material Testing Cell
            </h3>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              For Universal Testing Machine (UTM) tensile/compression tests, NDT inspections, IC engine emission telemetry, and precision CNC job orders:
            </p>
            <div className="text-xs space-y-1 font-mono text-[#28052B]">
              <div><strong>Email:</strong> meconsultancy@jecc.ac.in</div>
              <div><strong>Direct:</strong> +91 94478 34125 (Prof. Praveen Raj)</div>
            </div>
          </div>
        </div>

        {/* Interactive Query Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
            Send an Inquiry to Mechanical Department
          </h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-[#28052B]">Inquiry Received</h4>
              <p className="text-xs text-[#4A384F]">
                Thank you for contacting the Department of Mechanical Engineering. Our faculty coordinator will respond within 24 business hours.
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
                    placeholder="e.g. Arun Menon"
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
                    <option>Material Testing &amp; NDT Consultancy</option>
                    <option>CNC Machining &amp; 3D Printing Orders</option>
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
