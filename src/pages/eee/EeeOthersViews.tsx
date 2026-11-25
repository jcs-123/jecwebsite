import React, { useState } from 'react';
import {
  Calendar, BookOpen, Image, Users, Mail, Phone,
  MapPin, ExternalLink, Download, Sparkles, CheckCircle2,
  Zap, BatteryCharging, Sun, Activity, Flame, Radio,
  Send, ShieldCheck, HeartHandshake, Compass, Clock, Building
} from 'lucide-react';

/* 1. Department Events Page */
export const EeeEventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'workshops' | 'visits'>('all');

  const events = [
    {
      title: 'DYNA-FEST 2024: National Electrical Tech Symposium & EV Challenge',
      category: 'flagship',
      categoryLabel: 'Flagship Symposium',
      date: 'March 14–15, 2024',
      venue: 'Main Auditorium & EV Testing Grounds',
      participants: '650+ Participants from 42 Engineering Colleges',
      desc: 'Annual national extravaganza featuring EV Solar Kart Grand Prix, Paper Presentation on Grid Modernization, Circuit Debugging (Wire-o-Wire), and Industrial Automation Hackathon.',
      highlights: 'Over ₹1.25 Lakhs in cash prizes; sponsored by Schneider Electric and KSEB Engineers Association.'
    },
    {
      title: 'Hands-on Bootcamp: EV Motor Controller Prototyping & DSP Programming',
      category: 'workshops',
      categoryLabel: 'Technical Workshop',
      date: 'October 18–20, 2023',
      venue: 'Power Electronics & EV Testbed',
      participants: '85 Undergraduate Students',
      desc: 'Intensive 3-day immersion on designing space-vector pulse width modulation (SVPWM) algorithms for PMSM traction drives using TI C2000 launchpads.',
      highlights: 'Led by senior powertrain engineers from Ather Energy and Bosch.'
    },
    {
      title: 'Industrial Technical Immersion: 220 kV Madakkathara Substation & SCADA Center',
      category: 'visits',
      categoryLabel: 'Industrial Visit',
      date: 'November 22, 2023',
      venue: 'KSEB Madakkathara 220/110 kV Substation, Thrissur',
      participants: 'Batch 2021-25 (56 Students)',
      desc: 'Live observation of SF6 gas-insulated switchgear (GIS), 100 MVA power transformers, numerical busbar protection schemes, and real-time SCADA control desks.',
      highlights: 'Guided by Executive Engineers from Kerala State Electricity Board.'
    },
    {
      title: 'Field Visit to Idukki Hydroelectric Power Station (780 MW)',
      category: 'visits',
      categoryLabel: 'Industrial Visit',
      date: 'January 12–13, 2024',
      venue: 'Idukki Underground Powerhouse, Moolamattom',
      participants: 'Batch 2022-26 (58 Students)',
      desc: 'In-depth study of underground Pelton impulse turbines, spherical inlet valves, excitation systems, and 220 kV SF6 switchyard inside the mountain caverns.',
      highlights: 'Exclusive technical authorization granted by KSEB Generation Wing.'
    },
    {
      title: 'National Conference on Advances in Clean Energy & Smart Grids (NCACESG 2024)',
      category: 'flagship',
      categoryLabel: 'National Conference',
      date: 'February 2–3, 2024',
      venue: 'Seminar Hall, Electrical Block',
      participants: '140 Delegates & Researchers',
      desc: 'Keynote addresses on green hydrogen production, floating solar farms, and machine learning in transformer health monitoring, with IEEE PES co-sponsorship.',
      highlights: '48 peer-reviewed research papers published in conference proceedings.'
    },
    {
      title: 'BEE Certified Workshop on Industrial Energy Auditing & Electrical Safety',
      category: 'workshops',
      categoryLabel: 'Certification Course',
      date: 'December 4–6, 2023',
      venue: 'Circuits & Measurements Studio',
      participants: '60 Final-Year EEE Students',
      desc: 'Practical walk-through energy audit training, power factor correction calculations, and thermal imaging demonstrations for building safety compliance.',
      highlights: 'Certification issued jointly with Energy Management Centre Kerala.'
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Conferences, Bootcamps &amp; Expos</span>
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
            { id: 'flagship', label: 'Flagship Symposium & Tech Fest' },
            { id: 'workshops', label: 'Hands-on Workshops' },
            { id: 'visits', label: 'Power Plant & Substation Visits' }
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
export const EeeBulletinPage: React.FC = () => {
  const publications = [
    {
      title: 'CURRENT: Annual Technical Magazine 2023–24',
      issue: 'Volume XVI • Annual Edition',
      editor: 'Student Editorial Board & Prof. Della David',
      theme: 'Net Zero 2050: The Electric Mobility & Hydrogen Fuel Cell Era',
      desc: 'Contains student articles on solid-state battery chemistry, smart substation cybersecurity, interviews with KSEB Chief Engineers, and capstone project abstracts.',
      pages: '84 Pages • Full Color',
      file: 'CURRENT-Vol-16-2024.pdf'
    },
    {
      title: 'The Spark: Biannual Department Newsletter (Issue 28)',
      issue: 'Issue 28 • Spring 2024',
      editor: 'EEE Editorial Cell',
      theme: 'Semester Highlights, Placements & Research Grants',
      desc: 'Chronicles student solar kart championship wins, Schneider Electric recruitment statistics, faculty patent grants, and upcoming conference schedules.',
      pages: '16 Pages',
      file: 'The-Spark-Issue-28.pdf'
    },
    {
      title: 'The Spark: Biannual Department Newsletter (Issue 27)',
      issue: 'Issue 27 • Autumn 2023',
      editor: 'EEE Editorial Cell',
      theme: 'Industry 4.0 in Electrical Power Systems',
      desc: 'Coverage of Siemens PLC automation certifications, 100 kWp rooftop solar plant energy yield statistics, and alumni spotlight on Tesla and ABB engineers.',
      pages: '14 Pages',
      file: 'The-Spark-Issue-27.pdf'
    },
    {
      title: 'Compendium of B.Tech Major Project Abstracts 2023',
      issue: 'Special Monograph Series',
      editor: 'Department Project Review Committee',
      theme: 'Hardware Prototypes & Sustainable Energy Systems',
      desc: 'Detailed documentation of 18 undergraduate capstone inventions covering solar microgrids, EV battery swap bays, wireless power transmission, and NILM meters.',
      pages: '68 Pages',
      file: 'EEE-Projects-Compendium-2023.pdf'
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
          The EEE department publishes "CURRENT" (Annual Technical Magazine) and "The Spark" (Biannual Newsletter) to chronicle student innovations, technical essays, alumni achievements, and breakthroughs in renewable energy and electric vehicles.
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
                <Zap className="w-5 h-5 text-[#C79628]" />
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
export const EeeGalleryPage: React.FC = () => {
  const images = [
    {
      title: 'High Voltage Marx Impulse Testing in Progress',
      cat: 'Laboratories & Testing',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      caption: 'Students demonstrating dielectric breakdown spark gap tests in the High Voltage Engineering Lab.'
    },
    {
      title: 'Campus 100 kWp Rooftop Solar PV Microgrid',
      cat: 'Renewable Infrastructure',
      url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800',
      caption: 'Aerial perspective of the grid-tied solar photovoltaic array generating green energy for Jyothi campus.'
    },
    {
      title: 'Electric Vehicle Powertrain Dynamometer Rig',
      cat: 'Electric Mobility',
      url: 'https://images.unsplash.com/photo-1558441719-8b489c63f5c7?auto=format&fit=crop&q=80&w=800',
      caption: 'Testing 3 kW BLDC motor torque and thermal characteristics using digital dynamometer and telemetry.'
    },
    {
      title: 'Siemens PLC & SCADA Automation Training',
      cat: 'Industrial Automation',
      url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
      caption: 'Students programming SIMATIC S7-1200 logic controllers for automated sorting and conveyor lines.'
    },
    {
      title: 'National Solar Kart Champions - Team VoltRiders',
      cat: 'Student Laurels',
      url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800',
      caption: 'Team VoltRiders with their championship-winning solar electric kart trophy at the national level.'
    },
    {
      title: 'Industrial Delegation at 220 kV Madakkathara Substation',
      cat: 'Industrial Visits',
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
      caption: 'Final year EEE students inspecting power transformers and switchgear equipment with KSEB engineers.'
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
            Glimpses of Academic Life
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Experience the vibrant life of Electrical &amp; Electronics Engineering at Jyothi: high-voltage lightning testing, hands-on EV powertrain fabrication, solar farm telemetry, and student team victories across India.
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
              Jyothi EEE Archives
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Association Page */
export const EeeAssociationPage: React.FC = () => {
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
                EEEA &amp; IEEE PES Student Branch
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Active Chapters
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Electrical &amp; Electronics Engineering Association (EEEA) operates in tandem with the internationally chartered IEEE Power &amp; Energy Society (PES) and IEEE Industry Applications Society (IAS) student branch chapters, giving students unprecedented leadership exposure, international paper presentation opportunities, and humanitarian engineering grants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Association 1: EEEA */}
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                Departmental Body
              </span>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] mt-2">
                Electrical &amp; Electronics Engineering Association (EEEA)
              </h3>
            </div>
            <Zap className="w-5 h-5 text-[#C79628]" />
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Founded in 2002, EEEA is the vibrant student heart of the department. It orchestrates the national symposium DYNA-FEST, technical quizzes, school outreach clean-energy workshops, and student peer mentoring sessions.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-2">
            <h4 className="font-bold text-xs text-[#28052B]">Office Bearers 2024–25:</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#4A384F]">
              <div><strong>President:</strong> Abhijith Krishna (S7 EEE)</div>
              <div><strong>Secretary:</strong> Aiswarya Lakshmi (S7 EEE)</div>
              <div><strong>Joint Sec:</strong> Alan Varghese (S5 EEE)</div>
              <div><strong>Staff Advisor:</strong> Prof. Jenson Jose</div>
            </div>
          </div>
        </div>

        {/* Association 2: IEEE PES / IAS Chapter */}
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
          <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                International Chapter
              </span>
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] mt-2">
                IEEE Power &amp; Energy Society (PES) Chapter
              </h3>
            </div>
            <Sparkles className="w-5 h-5 text-[#C79628]" />
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Affiliated with the IEEE Kerala Section, the PES chapter organizes global Distinguished Lecturer Programs (DLP), humanitarian solar lighting projects, and student paper competitions across South India.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-2">
            <h4 className="font-bold text-xs text-[#28052B]">Chapter Key Laurels:</h4>
            <ul className="space-y-1.5 text-[11px] text-[#4A384F]">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                IEEE PES High Performing Student Branch Chapter Award (2022 &amp; 2023).
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                Recipient of $3,000 IEEE Humanitarian Activities Committee (HAC) Microgrid Grant.
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" />
                PES Chapter Advisor: Dr. Jarin T. (Senior Member IEEE).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 5. Reach Us Page */
export const EeeReachUsPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
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
            Electrical Block Ground Floor
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring student inquiring about B.Tech admissions, an industry enterprise seeking high-voltage testing or energy auditing consultancy, or an alumnus reconnecting with your alma mater, our department doors are always open.
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
                  <div className="font-bold text-[#28052B]">Dr. Jarin T., M.E, Ph.D</div>
                  <div className="text-[#7A647F]">Professor &amp; Head, Dept. of EEE</div>
                  <div className="text-[#4A384F]">Cabin EE-G01, Ground Floor, Electrical Block</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C79628] shrink-0" />
                <a href="mailto:eee@jecc.ac.in" className="font-mono text-[#28052B] hover:text-[#C79628]">
                  eee@jecc.ac.in / hod_eee@jecc.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C79628] shrink-0" />
                <span className="font-mono text-[#4A384F]">+91 4884 259000 (Extn: 231)</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
            <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] pb-2 border-b border-[#FAF7F2]">
              Consultancy &amp; Energy Audit Cell
            </h3>
            <p className="text-xs text-[#4A384F] leading-relaxed">
              For Bureau of Energy Efficiency (BEE) compliant electrical audits, transformer oil testing, and rooftop solar microgrid design:
            </p>
            <div className="text-xs space-y-1 font-mono text-[#28052B]">
              <div><strong>Email:</strong> energyaudit@jecc.ac.in</div>
              <div><strong>Direct:</strong> +91 94471 05672 (Prof. Ratnan P.)</div>
            </div>
          </div>
        </div>

        {/* Interactive Query Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
            Send an Inquiry to EEE Department
          </h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-[#28052B]">Inquiry Received</h4>
              <p className="text-xs text-[#4A384F]">
                Thank you for contacting the Department of Electrical &amp; Electronics Engineering. Our faculty coordinator will respond within 24 business hours.
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
                    placeholder="e.g. Rahul Nair"
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
                    <option>Energy Auditing &amp; BEE Consulting</option>
                    <option>High Voltage Testing Facilities</option>
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
