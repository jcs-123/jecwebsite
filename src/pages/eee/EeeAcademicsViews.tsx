import React, { useState } from 'react';
import {
  GraduationCap, BookOpen, Award, CheckCircle2, Download,
  ExternalLink, Briefcase, Zap, BatteryCharging, Sun, FileText,
  Search, Layers, Sparkles, Building2, Flame, Gauge, Activity,
  Lightbulb, Compass, Star, Radio, ShieldCheck, Power
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const EeeCourseBtechPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Undergraduate Degree Program</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                B.Tech in Electrical &amp; Electronics Engineering
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Intake: 60 Seats
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#28052B] text-white text-xs font-mono font-bold">
              NBA Accredited Tier-1
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Bachelor of Technology (B.Tech) program in Electrical &amp; Electronics Engineering at Jyothi Engineering College provides an intensive 4-year engineering curriculum designed to prepare world-class power engineers, electric vehicle designers, industrial automation experts, and smart grid architects. Operating under autonomous regulations, the course integrates real-world power equipment, hardware-in-the-loop (HIL) simulators, and industry-grade testing standards.
        </p>

        {/* Program Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
            <div className="text-xl font-bold text-[#28052B]">4 Years</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">8 Semesters</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
            <div className="text-xl font-bold text-[#28052B]">162 Credits</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">UGC Autonomous</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
            <div className="text-xl font-bold text-[#28052B]">Honours / Minor</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">EV &amp; Clean Energy</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
            <div className="text-xl font-bold text-[#28052B]">100 kWp</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">Live Solar Microgrid</div>
          </div>
        </div>
      </div>

      {/* PEOs, POs, PSOs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#FAF7F2]">
            <Sparkles className="w-4 h-4 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
              Program Educational Objectives (PEOs)
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-[#4A384F] leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PEO 1:</strong> Excel in core power systems, electric vehicles, industrial drive systems, and renewable microgrid design.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PEO 2:</strong> Demonstrate professional ethics, sustainability compliance, and energy auditing proficiency.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PEO 3:</strong> Pursue advanced postgraduate research, entrepreneurial ventures, and leadership in electrical innovations.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#FAF7F2]">
            <Award className="w-4 h-4 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
              Program Specific Outcomes (PSOs)
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-[#4A384F] leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PSO 1 (Power &amp; Drives):</strong> Design and validate solid-state power converters, EV electric motors, and closed-loop speed controllers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PSO 2 (Clean Energy &amp; Smart Grid):</strong> Model, operate, and safeguard high-voltage electrical grid networks integrated with solar and wind microgrids.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#FAF7F2]">
            <BookOpen className="w-4 h-4 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
              Specialization Tracks (Honours &amp; Minors)
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-[#4A384F] leading-relaxed">
            <li className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/30">
              <strong className="text-[#28052B]">Electric Mobility &amp; Powertrains:</strong> Battery management systems, PMSM/BLDC motor drives, regenerative braking.
            </li>
            <li className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/30">
              <strong className="text-[#28052B]">Smart Renewable Grids:</strong> Solar PV modeling, MPPT algorithms, SCADA automation, IEC 61850 substation protocols.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page */
export const EeeCareerPlacementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'placement' | 'higher-studies' | 'entrepreneurship'>('placement');

  const placements = [
    { company: 'Schneider Electric', role: 'Graduate Engineer Trainee (R&D)', package: '10.5 LPA', count: '4 Offers' },
    { company: 'ABB India Power Grids', role: 'Associate Application Engineer', package: '11.2 LPA', count: '3 Offers' },
    { company: 'Siemens Energy', role: 'Substation Automation Trainee', package: '8.5 LPA', count: '5 Offers' },
    { company: 'L&T Electrical & Automation', role: 'Switchgear Systems Specialist', package: '7.5 LPA', count: '6 Offers' },
    { company: 'Tata Power / Tata Motors EV', role: 'EV Powertrain Engineer', package: '8.0 LPA', count: '5 Offers' },
    { company: 'Ather Energy', role: 'Battery Hardware Engineer', package: '9.5 LPA', count: '2 Offers' },
    { company: 'KSEB (Govt. of Kerala)', role: 'Assistant Engineer (Kerala PSC)', package: 'Govt. Pay Scale', count: '8 Selected' },
    { company: 'Bosch Mobility Solutions', role: 'Embedded Power Trainee', package: '8.2 LPA', count: '4 Offers' }
  ];

  const higherStudies = [
    { student: 'Arjun K. Nair', inst: 'Purdue University, USA', prog: 'MS & Ph.D in Power Systems Engineering', year: '2022' },
    { student: 'Meera Vinod', inst: 'IIT Madras', prog: 'M.Tech in Power Electronics and Drives', year: '2023' },
    { student: 'Gautham S.', inst: 'TU Delft, Netherlands', prog: 'M.Sc in Sustainable Energy Technology', year: '2023' },
    { student: 'Sneha P.', inst: 'NIT Calicut', prog: 'M.Tech in Industrial Power and Automation', year: '2024' },
    { student: 'Kevin Jose', inst: 'National University of Singapore (NUS)', prog: 'M.Sc in Energy Systems', year: '2024' }
  ];

  const startups = [
    { name: 'VoltCraft Energy Technologies', founder: 'Er. Harikrishnan S. (Alumnus)', desc: 'Manufactures modular smart solar microgrid inverters and portable EV fast charging units with patented MPPT architecture.' },
    { name: 'AmpSafe Diagnostic Labs', founder: 'Er. Rohit Thomas (Alumnus)', desc: 'Provides infrared thermography, partial discharge testing, and BEE compliance energy auditing for industrial plants across South India.' },
    { name: 'TerraWatt Mobility', founder: 'Er. Sanjay Menon (Alumnus)', desc: 'Designs smart dual-battery swappable platforms for electric delivery scooters, incubated at JEC TBI.' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Professional Pathways</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Career &amp; Placement
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            91.5% Placement &amp; Higher Studies
          </span>
        </div>

        {/* Section Tabs (Placement, Higher Studies, Entrepreneurship) */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            onClick={() => setActiveTab('placement')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'placement'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Placement Statistics
          </button>
          <button
            onClick={() => setActiveTab('higher-studies')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'higher-studies'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Higher Studies (IITs, Global MS)
          </button>
          <button
            onClick={() => setActiveTab('entrepreneurship')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'entrepreneurship'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Clean-Tech Entrepreneurship
          </button>
        </div>
      </div>

      {/* Tab 1: Placements */}
      {activeTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#C79628]">16.5 LPA</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Highest Salary Package</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#28052B]">6.2 LPA</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Average Salary Package</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#C79628]">45+ Offers</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Batch 2024 Core Offers</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
              Top Core Electrical &amp; Energy Recruiters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {placements.map((p, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#28052B]">{p.company}</h4>
                    <p className="text-xs text-[#4A384F]">{p.role}</p>
                    <span className="text-[10px] font-mono text-[#7A647F]">{p.count}</span>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-lg bg-[#28052B] text-[#DFC06A] text-xs font-mono font-bold">
                      {p.package}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Higher Studies */}
      {activeTab === 'higher-studies' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
            Global Graduate Studies &amp; Research Fellowships
          </h3>
          <div className="space-y-3">
            {higherStudies.map((h, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm text-[#28052B]">{h.student} ({h.year})</h4>
                  <p className="text-xs text-[#4A384F]">{h.prog}</p>
                  <p className="text-[11px] font-mono text-[#C79628] font-semibold">{h.inst}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#28052B] border border-[#DFC06A]/40">
                  Admitted / Fellow
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Entrepreneurship */}
      {activeTab === 'entrepreneurship' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
            Clean-Tech &amp; Energy Startups Incubated by EEE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {startups.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <Zap className="w-5 h-5 text-[#C79628]" />
                    <span className="text-[10px] font-bold text-[#28052B] uppercase">TBI Incubated</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#28052B] mt-2">{s.name}</h4>
                  <p className="text-[11px] font-mono text-[#7A647F]">{s.founder}</p>
                  <p className="text-xs text-[#4A384F] mt-2 leading-relaxed font-light">{s.desc}</p>
                </div>
                <div className="pt-3 border-t border-[#DFC06A]/30 text-[11px] text-[#28052B] font-semibold">
                  Funded &amp; Supported by JEC TBI
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* 3. Facilities Page (Labs & Library) */
export const EeeFacilitiesPage: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<'labs' | 'library'>('labs');

  const labs = [
    {
      name: 'Electric Machines & Drives Laboratory',
      area: '2,800 Sq. Ft.',
      equipments: 'DC shunt/compound motors, 3-phase slip ring induction motors, salient pole alternators, dynamometers, digital power analyzers.',
      desc: 'Hands-on performance analysis of AC/DC rotating machinery, parallel operation of alternators, speed control using Ward-Leonard systems.'
    },
    {
      name: 'Power Electronics & EV Powertrain Testbed',
      area: '2,200 Sq. Ft.',
      equipments: 'DSP TMS320F28379D launchpads, SiC/GaN dual inverter testbenches, 4-quadrant chopper drives, digital storage oscilloscopes (Keysight 200 MHz).',
      desc: 'Prototyping high-efficiency DC-DC boost converters, regenerative braking simulation, and BLDC/PMSM motor vector control for electric 2-wheelers.'
    },
    {
      name: 'High Voltage & Relay Protection Laboratory',
      area: '2,400 Sq. Ft.',
      equipments: '100 kV AC testing transformer, 100 kV DC test set, 280 kV Marx impulse voltage generator, numerical micro-processor overcurrent relays, transformer differential protection panels.',
      desc: 'Dielectric breakdown testing of transformer oil, flashover testing of pin/suspension insulators, relay trip coordination curves.'
    },
    {
      name: 'Control Systems & Industrial Automation Studio',
      area: '1,800 Sq. Ft.',
      equipments: 'Siemens SIMATIC S7-1200 PLCs, Allen Bradley Micrologix controllers, SCADA WinCC software, AC/DC servo position control kits, process PID loops.',
      desc: 'Industry 4.0 automation programming, bottle-filling plant simulation, temperature/pressure closed loop feedback controllers.'
    },
    {
      name: 'Solar Microgrid & Renewable Energy Studio',
      area: '1,600 Sq. Ft. + Rooftop 100 kWp Plant',
      equipments: 'Grid-tied solar string inverters, solar irradiance pyranometers, battery charge controllers, power quality data loggers (Fluke 435-II).',
      desc: 'Real-time monitoring of college 100 kWp rooftop solar plant, net-metering harmonic analysis, MPPT algorithm implementation.'
    },
    {
      name: 'Circuits, Measurements & Basic Electrical Workshop',
      area: '2,000 Sq. Ft.',
      equipments: 'Kelvin double bridges, Maxwell AC bridges, LVDT kits, current transformers (CT), potential transformers (PT), industrial conduit boards.',
      desc: 'Precision measurement of resistance, inductance, and capacitance; domestic and industrial wiring standards; earth pit resistance measurement.'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure &amp; Laboratories</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Facilities
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Over ₹3.8 Crore Research Equipment
          </span>
        </div>

        {/* Facility Selector */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            onClick={() => setActiveFacility('labs')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFacility === 'labs'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Specialized Laboratories (6 Labs)
          </button>
          <button
            onClick={() => setActiveFacility('library')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFacility === 'library'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Departmental Library &amp; IEEE PES Portal
          </button>
        </div>
      </div>

      {/* Facilities: Labs */}
      {activeFacility === 'labs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {labs.map((lab, i) => (
            <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3 hover:border-[#C79628] transition-all">
              <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DFC06A]/30">
                    Area: {lab.area}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] mt-1.5">
                    {lab.name}
                  </h3>
                </div>
                <Zap className="w-5 h-5 text-[#C79628]" />
              </div>

              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                {lab.desc}
              </p>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs text-[#28052B] space-y-1">
                <div className="text-[10px] font-bold text-[#C79628] uppercase tracking-wider">Key Test Equipment</div>
                <div className="text-[11px] text-[#4A384F] font-mono leading-relaxed">{lab.equipments}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Facilities: Library */}
      {activeFacility === 'library' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              EEE Departmental Library &amp; IEEE Digital Knowledge Repository
            </h3>
            <span className="text-xs text-[#7A647F] font-mono">Location: Electrical Block, Level 2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">2,400+</div>
              <div className="text-xs text-[#4A384F] mt-1">Specialized Volumes &amp; Handbooks</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">IEEE PES / IAS</div>
              <div className="text-xs text-[#4A384F] mt-1">Digital Journal Subscriptions</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">15 Workstations</div>
              <div className="text-xs text-[#4A384F] mt-1">MATLAB, PSIM, ETAP &amp; PSCAD</div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-[#28052B] uppercase tracking-wider">Key Resources Available:</h4>
            <ul className="space-y-2 text-xs text-[#4A384F]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Complete IEEE Transactions on Power Systems, Power Electronics, and Smart Grid from 2005 to date.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Standard Reference Handbooks: Standard Handbook for Electrical Engineers (Fink &amp; Beaty), Kimbark Power System Stability.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Indian Standards (IS Codes) for Electrical Wiring, Transformer Testing, and Lightning Protection (IS 732, IS 2026, IS 2309).
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Repository of B.Tech &amp; M.Tech Capstone Project Dissertations and EV prototype blueprints.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up (MOUs) Page */
export const EeeIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      partner: 'Schneider Electric India Pvt. Ltd.',
      validity: '2023 – 2028 (5 Years)',
      scope: 'Center of Excellence in Substation Automation, donation of smart switchgears, annual summer internships, joint hackathons.',
      outcomes: '12 students trained annually on EcoStruxure Grid architecture; 4 direct placements in R&D.'
    },
    {
      partner: 'Kerala State Electricity Board (KSEB)',
      validity: '2022 – 2027 (5 Years)',
      scope: 'Field visits to 220 kV Madakkathara Substation and Idukki Hydroelectric project; student apprenticeships; grid stability consulting.',
      outcomes: 'Over 120 students completed 15-day industrial sub-station immersions.'
    },
    {
      partner: 'Siemens Digital Industries Software & Automation',
      validity: '2023 – 2026 (3 Years)',
      scope: 'Siemens Certified Training on SIMATIC S7-1200 / TIA Portal PLC programming, SCADA configuration, and industrial IoT sensors.',
      outcomes: '55 students certified in PLC Automation Level 1 & 2.'
    },
    {
      partner: 'Agency for New and Renewable Energy Research and Technology (ANERT)',
      validity: '2022 – 2025 (3 Years)',
      scope: 'Decentralized solar PV rooftop installations, battery storage integration research, electric vehicle charging station pilots.',
      outcomes: 'Design verification of campus 100 kWp solar array and energy yield forecasting model.'
    },
    {
      partner: 'Bosch Mobility Solutions India',
      validity: '2024 – 2027 (3 Years)',
      scope: 'EV powertrain simulation, motor controller hardware testing, guest lectures on functional safety (ISO 26262).',
      outcomes: 'Curriculum updates in Scheme 2024 for Electric Vehicle Powertrains.'
    },
    {
      partner: 'Energy Management Centre (EMC) Kerala',
      validity: '2021 – 2026 (5 Years)',
      scope: 'Certified student energy auditor training, walk-through energy audits for government and charitable institutions.',
      outcomes: 'Conducted 8 external energy audits saving over 35,000 kWh annually for partner institutions.'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Corporate Collaboration</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Industry Tie-up (MOUs)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            6 Active Strategic MOUs
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Through active Memoranda of Understanding (MOUs) with world-leading electrical equipment conglomerates, public sector power utilities, and clean-energy state boards, the EEE department ensures that students graduate with hands-on industrial competency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mous.map((mou, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                  {mou.validity}
                </span>
                <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] mt-2">
                  {mou.partner}
                </h3>
              </div>
              <Sparkles className="w-4 h-4 text-[#C79628]" />
            </div>

            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              <strong className="text-[#28052B] font-semibold">Scope of Collaboration: </strong>
              {mou.scope}
            </p>

            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs space-y-1">
              <div className="text-[10px] font-bold text-[#C79628] uppercase tracking-wider">Key Impact &amp; Outcomes</div>
              <p className="text-[11.5px] text-[#28052B] font-medium">{mou.outcomes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Achievements Page (Student & Staff Achievements) */
export const EeeAchievementsPage: React.FC = () => {
  const [tab, setTab] = useState<'student' | 'staff'>('student');

  const studentAchievements = [
    {
      title: 'National Champions - Solar Kart Championship 2023',
      event: 'Society of Automotive Engineers (SAE India) & ISIE',
      team: 'Team "VoltRiders" (18 EEE & ME students)',
      desc: 'Designed and fabricated an all-electric solar hybrid kart with custom lithium-iron battery pack and regenerative braking, securing 1st prize and ₹1,00,000 cash award.'
    },
    {
      title: 'Smart India Hackathon (SIH 2023) - Hardware Edition Winners',
      event: 'Ministry of Power & AICTE, New Delhi',
      team: 'GridGuard Innovators (EEE Batch 2021-25)',
      desc: 'Developed an IoT-enabled non-intrusive load monitoring (NILM) device for detecting power theft and unauthorized phase tapping in distribution transformers.'
    },
    {
      title: 'IEEE PES Student Humanitarian Technology Project Grant',
      event: 'IEEE Power & Energy Society Global Chapter',
      team: 'Aiswarya Lakshmi & Alan Varghese',
      desc: 'Received $3,000 international grant to install a solar-powered DC microgrid water pump in an off-grid tribal settlement in Attappadi, Palakkad.'
    },
    {
      title: 'Best Technical Paper Award - IEEE ICPEC 2024',
      event: 'International Conference on Power, Energy & Control',
      team: 'Ananya S. Kumar & Dr. Jarin T.',
      desc: 'Paper titled "High Gain Interleaved DC-DC Converter for EV Fast Charging Stations" recognized as the top research presentation.'
    }
  ];

  const staffAchievements = [
    {
      title: 'Indian Patent Granted: Multi-port Inverter for Hybrid Solar-Wind Systems',
      inventor: 'Dr. Jarin T. & Prof. Ratnan P.',
      org: 'Patent Office, Government of India (Patent No. 439281)',
      desc: 'A patented multi-port solid-state inverter capable of simultaneous MPPT extraction from solar arrays and small wind turbines with unified single-stage conversion.'
    },
    {
      title: 'Bureau of Energy Efficiency (BEE) Certified Energy Auditor Citation',
      inventor: 'Prof. Ratnan P.',
      org: 'Ministry of Power, Govt. of India',
      desc: 'Successfully conducted and certified statutory energy audits for 14 major healthcare and educational institutions across Central Kerala.'
    },
    {
      title: 'Best Research Faculty Award 2023-24',
      inventor: 'Dr. Shijoh V.',
      org: 'APJ Abdul Kalam Technological University (KTU)',
      desc: 'Honored for outstanding research contributions with over 35 SCI/Scopus journal papers in robust control of renewable microgrids.'
    },
    {
      title: 'DST-SERB Core Research Grant of ₹28.5 Lakhs',
      inventor: 'Dr. Agnes V. Joseph',
      org: 'Department of Science and Technology, Govt. of India',
      desc: 'Grant sanctioned for research on "Design and Hardware Emulation of Gallium Nitride (GaN) Based Bidirectional Inverters for Electric Vehicle V2G Capabilities".'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Honours &amp; Laurels</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Achievements
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Patents • National Wins • Research Grants
          </span>
        </div>

        {/* Tab Buttons (Student vs Staff) */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            onClick={() => setTab('student')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'student'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Student Achievements
          </button>
          <button
            onClick={() => setTab('staff')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'staff'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Staff Achievements &amp; Patents
          </button>
        </div>
      </div>

      {tab === 'student' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {studentAchievements.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3 hover:border-[#C79628] transition-all">
              <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DFC06A]/30">
                    {item.event}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] mt-2">
                    {item.title}
                  </h3>
                </div>
                <Award className="w-5 h-5 text-[#C79628]" />
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">{item.desc}</p>
              <div className="pt-2 border-t border-[#FAF7F2] text-[11px] font-mono text-[#7A647F]">
                Team: {item.team}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'staff' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {staffAchievements.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3 hover:border-[#C79628] transition-all">
              <div className="flex items-start justify-between pb-2 border-b border-[#FAF7F2]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DFC06A]/30">
                    {item.org}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] mt-2">
                    {item.title}
                  </h3>
                </div>
                <Sparkles className="w-5 h-5 text-[#C79628]" />
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">{item.desc}</p>
              <div className="pt-2 border-t border-[#FAF7F2] text-[11px] font-mono text-[#28052B] font-bold">
                Lead: {item.inventor}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* 6. Research Page (Faculty Research) */
export const EeeResearchPage: React.FC = () => {
  const researchDomains = [
    {
      title: 'Smart Microgrids & Distributed Energy Resources (DER)',
      lead: 'Dr. Jarin T. & Dr. Agnes V. Joseph',
      funding: 'Funded by DST-SERB & AICTE (₹42 Lakhs Total)',
      highlights: 'Focuses on secondary voltage and frequency regulation in islanded microgrids, seamless transfer between grid-connected and islanded modes, and virtual synchronous generator (VSG) algorithms.'
    },
    {
      title: 'Power Electronics for Electric Mobility & V2G Storage',
      lead: 'Prof. Jenson Jose & Dr. Jarin T.',
      funding: 'Funded by Industry Partner Co-Sponsorship',
      highlights: 'Prototyping high-efficiency gallium nitride (GaN) onboard EV chargers, dual-active bridge (DAB) DC-DC converters, and bi-directional vehicle-to-grid (V2G) power interfaces.'
    },
    {
      title: 'Smart Substation Automation & IEC 61850 Protocols',
      lead: 'Prof. Ratnan P. & Prof. Della David',
      funding: 'KSEB Research Cell & Schneider Electric CoE',
      highlights: 'Implementation of Goose messaging, sampled measured values (SMV), and automated fault diagnosis in digital substations using synchrophasor PMU measurements.'
    },
    {
      title: 'Industrial Energy Efficiency & Power Quality Mitigation',
      lead: 'Prof. Ratnan P. (Certified Energy Auditor)',
      funding: 'Energy Management Centre Kerala Consultancy Grants',
      highlights: 'Total Harmonic Distortion (THD) suppression using active power filters (APF), dynamic voltage restorers (DVR), and life-cycle energy optimization for commercial enterprises.'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Innovation &amp; Consultancy</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Faculty Research &amp; Publications
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            110+ Scopus/SCI Indexed Papers
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Electrical &amp; Electronics Engineering at Jyothi drives cutting-edge research in microgrid stability, silicon carbide / gallium nitride power converters, EV drivetrain motor control, and AI-enabled power quality management. The department actively consults for industrial power audits and smart grid implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {researchDomains.map((domain, i) => (
          <div key={i} className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4 hover:border-[#C79628] transition-all">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C79628] bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#DFC06A]/30">
                  {domain.funding}
                </span>
                <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] mt-2">
                  {domain.title}
                </h3>
              </div>
              <Activity className="w-4 h-4 text-[#C79628]" />
            </div>

            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              {domain.highlights}
            </p>

            <div className="pt-3 border-t border-[#E7D6C1] flex items-center justify-between text-xs text-[#7A647F]">
              <span className="font-semibold text-[#28052B]">Lead Investigators:</span>
              <span className="font-mono text-[11px] text-[#C79628] font-bold">{domain.lead}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 7. Syllabus and Curriculum Page */
export const EeeSyllabusPage: React.FC = () => {
  const [selectedSem, setSelectedSem] = useState<number>(1);

  const semesterData: Record<number, Array<{ code: string; title: string; credits: number; type: string }>> = {
    1: [
      { code: 'MA101', title: 'Calculus and Linear Algebra', credits: 4, type: 'Basic Science' },
      { code: 'PH101', title: 'Engineering Physics (Electromagnetism & Solid State)', credits: 4, type: 'Basic Science' },
      { code: 'EE101', title: 'Basics of Electrical Engineering & Safety Standards', credits: 3, type: 'Engineering Science' },
      { code: 'ME102', title: 'Engineering Graphics & Computer Aided Drawing', credits: 3, type: 'Engineering Science' },
      { code: 'EE103', title: 'Basic Electrical Wiring and Safety Laboratory', credits: 1, type: 'Laboratory' }
    ],
    2: [
      { code: 'MA102', title: 'Differential Equations and Transforms', credits: 4, type: 'Basic Science' },
      { code: 'CH101', title: 'Engineering Chemistry & Electrochemistry of Batteries', credits: 4, type: 'Basic Science' },
      { code: 'CS102', title: 'Programming for Problem Solving (Python & C)', credits: 3, type: 'Engineering Science' },
      { code: 'EC101', title: 'Basics of Electronics & Solid State Devices', credits: 3, type: 'Engineering Science' },
      { code: 'EE104', title: 'Circuits & Measurements Hands-on Workshop', credits: 1, type: 'Laboratory' }
    ],
    3: [
      { code: 'EE201', title: 'Electric Circuits and Network Theory', credits: 4, type: 'Program Core' },
      { code: 'EE202', title: 'DC Machines and Transformers', credits: 4, type: 'Program Core' },
      { code: 'EE203', title: 'Electromagnetic Field Theory & Wave Propagation', credits: 3, type: 'Program Core' },
      { code: 'EC205', title: 'Analog & Digital Electronic Circuits', credits: 4, type: 'Engineering Science' },
      { code: 'EE205', title: 'DC Machines and Transformers Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'EC207', title: 'Electronics Circuits Simulation Laboratory', credits: 1.5, type: 'Laboratory' }
    ],
    4: [
      { code: 'EE204', title: 'Synchronous and Induction Machines', credits: 4, type: 'Program Core' },
      { code: 'EE206', title: 'Power Electronics & Switching Converters', credits: 4, type: 'Program Core' },
      { code: 'EE208', title: 'Signals, Systems & DSP Fundamentals', credits: 3, type: 'Program Core' },
      { code: 'EE210', title: 'Electrical Measurements and Instrumentation', credits: 3, type: 'Program Core' },
      { code: 'EE212', title: 'AC Machines Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'EE214', title: 'Power Electronics Simulation Laboratory', credits: 1.5, type: 'Laboratory' }
    ],
    5: [
      { code: 'EE301', title: 'Power Systems I: Generation, Transmission & Modeling', credits: 4, type: 'Program Core' },
      { code: 'EE302', title: 'Linear Control Systems Engineering', credits: 4, type: 'Program Core' },
      { code: 'EE303', title: 'Microprocessors & Embedded Microcontrollers', credits: 3, type: 'Program Core' },
      { code: 'EPE01', title: 'Professional Elective I (Electric Vehicle Powertrains / Solar PV)', credits: 3, type: 'Elective' },
      { code: 'EE305', title: 'Control Systems and Microcontrollers Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'EE307', title: 'Power Electronics Hardware-in-Loop Laboratory', credits: 1.5, type: 'Laboratory' }
    ],
    6: [
      { code: 'EE304', title: 'Power Systems II: Operation, Control & Protection', credits: 4, type: 'Program Core' },
      { code: 'EE306', title: 'Industrial Drives & Motor Control Systems', credits: 3, type: 'Program Core' },
      { code: 'EE308', title: 'High Voltage Engineering & Insulation Technology', credits: 3, type: 'Program Core' },
      { code: 'EPE02', title: 'Professional Elective II (Smart Grids / Battery Management)', credits: 3, type: 'Elective' },
      { code: 'EE310', title: 'Power Systems & High Voltage Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'EE312', title: 'Mini Project & EV Prototyping Workshop', credits: 2, type: 'Project' }
    ],
    7: [
      { code: 'EE401', title: 'Power System Protection & Switchgear Technology', credits: 3, type: 'Program Core' },
      { code: 'EE402', title: 'Energy Auditing, Conservation & Management (BEE)', credits: 3, type: 'Program Core' },
      { code: 'EPE03', title: 'Professional Elective III (Industrial Automation & PLC / SCADA)', credits: 3, type: 'Elective' },
      { code: 'OE001', title: 'Open Elective (Renewable Energy for Smart Cities)', credits: 3, type: 'Open Elective' },
      { code: 'EE405', title: 'Industrial Automation & Relay Testing Lab', credits: 1.5, type: 'Laboratory' },
      { code: 'EE407', title: 'Major Project Phase I', credits: 3, type: 'Project' }
    ],
    8: [
      { code: 'EE404', title: 'Power Quality Mitigation & FACTS Controllers', credits: 3, type: 'Program Core' },
      { code: 'EPE04', title: 'Professional Elective IV (AI in Energy / Grid Cyber Security)', credits: 3, type: 'Elective' },
      { code: 'OE002', title: 'Open Elective (Electric Vehicles & Battery Swap Tech)', credits: 3, type: 'Open Elective' },
      { code: 'EE410', title: 'Major Project Phase II & Capstone Defense', credits: 6, type: 'Project' }
    ]
  };

  const currentCourses = semesterData[selectedSem] || [];
  const totalSemCredits = currentCourses.reduce((sum, c) => sum + c.credits, 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">UGC Autonomous Scheme 2024</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Syllabus &amp; Curriculum
              </h2>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#28052B] text-[#DFC06A] text-xs font-bold hover:bg-[#350A3A] transition-all cursor-pointer shadow-xs">
            <Download className="w-4 h-4" />
            <span>Download Scheme 2024 (PDF)</span>
          </button>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The autonomous curriculum blends deep mathematical modeling with cutting-edge clean-energy applications. Incorporating 30+ practical lab modules across all 8 semesters, the program ensures students master circuit theory, rotating machines, power converters, microgrid SCADA, and electric vehicle architectures.
        </p>

        {/* Semester Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <span className="text-xs font-bold text-[#28052B] mr-2">Select Semester:</span>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
            <button
              key={s}
              onClick={() => setSelectedSem(s)}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSem === s
                  ? 'bg-[#28052B] text-white shadow-xs'
                  : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
              }`}
            >
              S{s}
            </button>
          ))}
        </div>
      </div>

      {/* Semester Table */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Semester {selectedSem} Course Structure
          </h3>
          <span className="text-xs font-mono font-bold text-[#C79628]">Total Credits: {totalSemCredits}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Course Code</th>
                <th className="py-3 px-4 font-semibold">Course Title</th>
                <th className="py-3 px-4 font-semibold">Course Category</th>
                <th className="py-3 px-4 font-semibold">Credits</th>
                <th className="py-3 px-4 font-semibold text-right">Syllabus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              {currentCourses.map((c, i) => (
                <tr key={i} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{c.code}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{c.title}</td>
                  <td className="py-3 px-4 text-[#4A384F]">
                    <span className="px-2 py-0.5 rounded-md bg-white border border-[#DFC06A]/30 text-[10px] font-semibold text-[#7A647F]">
                      {c.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-[#C79628] font-bold">{c.credits}</td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-[11px] text-[#28052B] hover:text-[#C79628] font-bold inline-flex items-center gap-1 cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
