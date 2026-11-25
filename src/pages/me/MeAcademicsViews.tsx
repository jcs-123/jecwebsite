import React, { useState } from 'react';
import {
  GraduationCap, BookOpen, Award, CheckCircle2, Download,
  ExternalLink, Briefcase, Wrench, Cog, Flame, FileText,
  Search, Layers, Sparkles, Building2, Gauge, Activity,
  Lightbulb, Compass, Star, Radio, ShieldCheck, Hammer
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const MeCourseBtechPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
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
                B.Tech in Mechanical Engineering
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Intake: 90 Seats
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#28052B] text-white text-xs font-mono font-bold">
              NBA Accredited Tier-1
            </span>
            {onOpenApply && (
              <button
                onClick={onOpenApply}
                className="px-4 py-1.5 rounded-full bg-[#DFC06A] text-[#28052B] text-xs font-bold hover:bg-[#F3CF7A] transition-all cursor-pointer shadow-xs ml-1"
              >
                Apply Online
              </button>
            )}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Bachelor of Technology (B.Tech) in Mechanical Engineering at Jyothi Engineering College provides an exhaustive 4-year engineering foundation rooted in classical principles and modern technological revolutions. Operating under autonomous regulations, the program blends heavy mechanical machining, thermal engines, and metallurgy with digital twins, 3D additive manufacturing, computational fluid dynamics (CFD), and electric vehicle powertrain engineering.
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
            <div className="text-xl font-bold text-[#28052B]">25,000 Sq. Ft.</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">Workshops &amp; FabLab</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
            <div className="text-xl font-bold text-[#28052B]">Honours / Minor</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">Robotics &amp; EV</div>
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
              <span><strong>PEO 1:</strong> Apply sound mathematical and engineering fundamentals to solve complex thermal, fluid, and mechanical structural problems.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PEO 2:</strong> Master modern manufacturing tools including CNC machining, CAD/CAM simulation, and 3D printing.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PEO 3:</strong> Foster ethical engineering practices, environmental sustainability, and entrepreneurship in mobility and aerospace.</span>
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
              <span><strong>PSO 1 (Thermal &amp; Fluids):</strong> Design, analyze, and optimize heat exchangers, refrigeration cycles, and internal combustion/EV powertrains.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PSO 2 (Design &amp; Manufacturing):</strong> Develop mechanical components utilizing advanced CAD/CAE tools, composite materials, and precision CNC manufacturing.</span>
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
              <strong className="text-[#28052B]">Industrial Robotics &amp; Automation:</strong> Manipulator kinematics, ROS, industrial PLC integration, machine vision.
            </li>
            <li className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/30">
              <strong className="text-[#28052B]">Computational Fluid Dynamics (CFD):</strong> ANSYS Fluent, turbulence modeling, aerodynamic drag reduction, multiphase flows.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page */
export const MeCareerPlacementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'placement' | 'higher-studies' | 'entrepreneurship'>('placement');

  const placements = [
    { company: 'Tata Motors', role: 'Graduate Engineer Trainee (Design & R&D)', package: '8.5 LPA', count: '6 Offers' },
    { company: 'Mahindra & Mahindra', role: 'Automotive Powertrain Specialist', package: '9.0 LPA', count: '4 Offers' },
    { company: 'Ashok Leyland', role: 'Vehicle Integration Engineer', package: '7.8 LPA', count: '5 Offers' },
    { company: 'L&T Heavy Engineering', role: 'Manufacturing & QA Engineer', package: '7.5 LPA', count: '7 Offers' },
    { company: 'Bosch Mobility Solutions', role: 'Chassis Systems Engineer', package: '8.2 LPA', count: '4 Offers' },
    { company: 'Hyundai Motor India', role: 'Production Planning Specialist', package: '7.0 LPA', count: '5 Offers' },
    { company: 'Quest Global', role: 'Aerospace Structural Analyst', package: '6.5 LPA', count: '8 Offers' },
    { company: 'Federal-Mogul Goetze', role: 'Piston & Ring Design Trainee', package: '6.8 LPA', count: '4 Offers' }
  ];

  const higherStudies = [
    { student: 'Arun S. Menon', inst: 'Cranfield University, UK', prog: 'M.Sc in Motorsport Aerodynamics', year: '2021' },
    { student: 'Akhil S. Nair', inst: 'ETH Zurich, Switzerland', prog: 'M.Sc & Ph.D in Advanced Materials & Manufacturing', year: '2022' },
    { student: 'Siddharth R.', inst: 'IIT Madras', prog: 'M.Tech in Thermal Engineering', year: '2023' },
    { student: 'Gautham Mohan', inst: 'Technical University of Munich (TUM), Germany', prog: 'M.Sc in Automotive Engineering', year: '2023' },
    { student: 'Kevin Jose', inst: 'Purdue University, USA', prog: 'M.S in Mechanical Engineering & Robotics', year: '2024' }
  ];

  const startups = [
    { name: 'AeroKinetics Propulsion Labs', founder: 'Er. Jithu K. Varghese (Alumnus)', desc: 'Designs heavy-lift UAV hybrid propulsion engines and micro gas turbines; recipient of ₹1.5 Cr iDEX Defence Innovation grant.' },
    { name: 'RapidPro 3D Labs', founder: 'Er. Sanju Joy (Alumnus)', desc: 'On-demand industrial SLS/SLA additive manufacturing and topology-optimized tooling facility based out of Kochi Maker Village.' },
    { name: 'EcoThermal HVAC Solutions', founder: 'Er. Manu Varghese (Alumnus)', desc: 'Custom energy-recovery ventilation systems and heat pump solutions for industrial cleanrooms and commercial facilities.' }
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
            88.6% Placement &amp; Higher Studies
          </span>
        </div>

        {/* Section Tabs */}
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
            Higher Studies (IITs, TUM, ETH Zurich)
          </button>
          <button
            onClick={() => setActiveTab('entrepreneurship')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'entrepreneurship'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Mechanical &amp; Aerospace Startups
          </button>
        </div>
      </div>

      {/* Tab 1: Placements */}
      {activeTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#C79628]">12.5 LPA</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Highest Salary Package</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#28052B]">5.8 LPA</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Average Salary Package</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#C79628]">65+ Offers</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Batch 2024 Core Offers</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
              Top Automotive, Aerospace &amp; Heavy Engineering Recruiters
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
            Global Master's Degrees &amp; Research Fellowships
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
            Mechanical &amp; Aerospace Startups Incubated by ME
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {startups.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <Wrench className="w-5 h-5 text-[#C79628]" />
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
export const MeFacilitiesPage: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<'labs' | 'library'>('labs');

  const labs = [
    {
      name: 'Central Machine Shop & CNC Machining Center',
      area: '5,500 Sq. Ft.',
      equipments: 'All-geared heavy lathes, universal milling machines, radial drills, Fanuc CNC 3-axis VMC milling center, CNC turning lathe.',
      desc: 'Precision machining of metals and alloys, gear hobbing, spline cutting, and automated G-code/M-code CNC production.'
    },
    {
      name: 'Thermal Engineering & IC Engines Laboratory',
      area: '3,200 Sq. Ft.',
      equipments: 'Computerized twin-cylinder diesel engine testbed with piezoelectric pressure sensor, variable compression ratio (VCR) engine, bomb calorimeter, exhaust gas analyzer.',
      desc: 'Combustion flame propagation analysis, alternative biofuel performance, heat balance sheet evaluation, and emission compliance testing.'
    },
    {
      name: 'Fluid Mechanics & Hydraulic Machinery Laboratory',
      area: '3,000 Sq. Ft.',
      equipments: 'Pelton wheel turbine test rig, Francis reaction turbine, Kaplan turbine, multi-stage centrifugal pumps, venturimeter, orifice meter, Bernoulli apparatus.',
      desc: 'Characteristic curves of hydraulic turbines, cavitation analysis, flow through pipes, and head loss evaluations.'
    },
    {
      name: 'CAD / CAM & CAE Supercomputing Studio',
      area: '2,200 Sq. Ft.',
      equipments: '60 High-end Dell Precision Workstations, NVIDIA Quadro GPUs, ANSYS Fluent & Mechanical, SolidWorks Premium, CATIA V5, Autodesk Fusion 360.',
      desc: 'Finite element structural stress analysis, aerodynamic drag simulation around Formula car bodies, thermal heat sink simulations.'
    },
    {
      name: 'Metallurgy & Materials Testing Laboratory',
      area: '2,800 Sq. Ft.',
      equipments: '1000 kN Computerized Universal Testing Machine (UTM), Torsion tester, Charpy & Izod impact tester, Rockwell/Brinell hardness testers, metallurgical inverted microscope.',
      desc: 'Tensile, compressive, shear, and fatigue testing of metals and composites; microstructural phase analysis of heat-treated steels.'
    },
    {
      name: 'FabLab & Additive Manufacturing Studio',
      area: '2,500 Sq. Ft.',
      equipments: 'Fused Deposition Modeling (FDM) 3D printers, SLA resin printer, Epilog 50W CO2 laser cutting system, Roland vinyl plotter, vacuum forming machine.',
      desc: 'Rapid prototyping of student inventions, drone chassis fabrication, topology-optimized lightweight bracket printing.'
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure &amp; Workshops</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Facilities
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Over ₹5.2 Crore Workshop Assets
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
            Specialized Laboratories &amp; Machine Shops (6 Facilities)
          </button>
          <button
            onClick={() => setActiveFacility('library')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFacility === 'library'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Departmental Library &amp; ASME Portal
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
                <Wrench className="w-5 h-5 text-[#C79628]" />
              </div>

              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                {lab.desc}
              </p>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs text-[#28052B] space-y-1">
                <div className="text-[10px] font-bold text-[#C79628] uppercase tracking-wider">Key Machinery &amp; Tooling</div>
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
              Mechanical Departmental Library &amp; ASME Digital Knowledge Repository
            </h3>
            <span className="text-xs text-[#7A647F] font-mono">Location: Mechanical Block, Level 2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">3,100+</div>
              <div className="text-xs text-[#4A384F] mt-1">Specialized Handbooks &amp; Textbooks</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">ASME &amp; SAE</div>
              <div className="text-xs text-[#4A384F] mt-1">Digital Journal Subscriptions</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">18 Workstations</div>
              <div className="text-xs text-[#4A384F] mt-1">ANSYS, SolidWorks &amp; MATLAB</div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-[#28052B] uppercase tracking-wider">Key Resources Available:</h4>
            <ul className="space-y-2 text-xs text-[#4A384F]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Complete ASME Digital Collection spanning Heat Transfer, Applied Mechanics, and Dynamic Systems &amp; Control.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Design Data Handbooks: PSG Design Data Book, Mahadevan &amp; Balaveera Reddy Heat &amp; Mass Transfer Tables.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                SAE Technical Papers on Formula racing, electric vehicle batteries, and aerodynamic ground effect modeling.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Comprehensive archive of student Formula Bharat vehicle blueprints, CFD telemetry logs, and patent specifications.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up (MOUs) Page */
export const MeIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      partner: 'Tata Motors Limited',
      validity: '2023 – 2028 (5 Years)',
      scope: 'Joint curriculum design for commercial vehicle powertrains, annual student plant internships at Pune and Pantnagar, placement sponsorship.',
      outcomes: '18 students completed summer internships; 6 direct graduate engineer selections.'
    },
    {
      partner: 'Bosch Automotive Aftermarket Division',
      validity: '2022 – 2027 (5 Years)',
      scope: 'Establishment of Bosch Automotive Joint Training Center, hands-on diagnostics for common rail diesel injection (CRDI) and ABS brakes.',
      outcomes: '120 students certified in advanced automotive diagnostic tools.'
    },
    {
      partner: 'Larsen & Toubro (L&T) Heavy Engineering',
      validity: '2023 – 2026 (3 Years)',
      scope: 'Industrial immersion in boiler fabrication, submerged arc welding inspection, non-destructive testing (NDT Level II certification).',
      outcomes: '45 students certified in Ultrasonic & Magnetic Particle NDT methods.'
    },
    {
      partner: 'Dassault Systèmes / DesignTech Systems',
      validity: '2022 – 2025 (3 Years)',
      scope: 'Center of Excellence in 3DEXPERIENCE platform, CATIA V5 certified training, and generative structural shape design.',
      outcomes: '85 students certified in CATIA Part & Assembly Design.'
    },
    {
      partner: 'Ashok Leyland Driver Care & Heavy Vehicle Division',
      validity: '2024 – 2027 (3 Years)',
      scope: 'Vehicle chassis telemetry analysis, live telemetry access from Euro-6 diesel and LNG commercial haulers for thermal modeling.',
      outcomes: 'Joint research project on waste heat recovery from commercial truck exhausts.'
    },
    {
      partner: 'Vikram Sarabhai Space Centre (ISRO VSSC)',
      validity: '2021 – 2026 (5 Years)',
      scope: 'Student project internships in rocket nozzle thermal barrier coatings, lightweight carbon-carbon composites, and vibration testing.',
      outcomes: '8 major student dissertations guided by ISRO scientists.'
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
          Active Memoranda of Understanding (MOUs) with world leaders in automotive manufacturing, space propulsion, heavy fabrication, and engineering software ensure our students gain immediate industrial credibility.
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
export const MeAchievementsPage: React.FC = () => {
  const [tab, setTab] = useState<'student' | 'staff'>('student');

  const studentAchievements = [
    {
      title: 'Formula Bharat 2024 - Top 5 National Finish (Combustion Category)',
      event: 'Formula Bharat National Student Competition, Kari Motor Speedway',
      team: 'Team "AeroJec Motorsports" (24 Mechanical Students)',
      desc: 'Designed, built, and raced a custom tubular spaceframe single-seater race car powered by a tuned 390cc engine, securing 4th overall in Skidpad and Acceleration.'
    },
    {
      title: 'SAE BAJA India - Best Suspension Design Award',
      event: 'Society of Automotive Engineers (SAE India), Pithampur',
      team: 'Team "RoughRiders"',
      desc: 'Fabricated an all-terrain vehicle (ATV) with custom double wishbone suspension, surviving the punishing 4-hour endurance test with zero structural failures.'
    },
    {
      title: 'Smart India Hackathon (SIH 2023) - Hardware Edition 1st Prize',
      event: 'Ministry of Heavy Industries & AICTE, New Delhi',
      team: 'MechInnovators Team',
      desc: 'Invented an automated CNC plasma cutter with optical torch height controller costing 60% less than imported equivalents, winning ₹1,00,000 cash award.'
    },
    {
      title: 'Best Technical Research Paper - ASME IMECE 2023',
      event: 'International Mechanical Engineering Congress & Exposition',
      team: 'Akshay Krishna & Dr. Biju P. L.',
      desc: 'Research paper titled "Experimental Study on Waste Cooking Oil Biodiesel Blends with Cerium Oxide Nanoparticles in Compression Ignition Engines".'
    }
  ];

  const staffAchievements = [
    {
      title: 'Indian Patent Granted: Multi-fuel Biogas-Diesel Dual Fuel Injection System',
      inventor: 'Dr. Deepanraj B. & Dr. Biju P. L.',
      org: 'Patent Office, Government of India (Patent No. 448192)',
      desc: 'A patented dual-fuel injection mechanism delivering electronically metered biogas directly into intake manifolds, slashing NOx and soot emissions by 38%.'
    },
    {
      title: 'DST-SERB Core Research Grant of ₹34.2 Lakhs',
      inventor: 'Dr. Manoj Kumar V.',
      org: 'Science and Engineering Research Board, Govt. of India',
      desc: 'Research funding for "Development and Ballistic Impact Characterization of Carbon Fiber / Silicon Carbide Functionally Graded Armor Plates".'
    },
    {
      title: 'Best Mechanical Engineering Faculty Award 2023',
      inventor: 'Prof. Praveen Raj',
      org: 'Kerala State Council for Science, Technology and Environment (KSCSTE)',
      desc: 'Recognized for pioneering FabLab Maker education and guiding over 30 student patent disclosures across Kerala.'
    },
    {
      title: 'AICTE Research Promotion Scheme (RPS) Grant of ₹18.5 Lakhs',
      inventor: 'Dr. Biju P. L.',
      org: 'All India Council for Technical Education, New Delhi',
      desc: 'Grant for investigating "Microchannel Evaporator Performance with Phase Change Nanofluids for Electric Vehicle Fast-Charging Thermal Management".'
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
            Formula Cars • Patents • National Wins
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
            Student Achievements &amp; Motorsports
          </button>
          <button
            onClick={() => setTab('staff')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'staff'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Staff Achievements &amp; Research Grants
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
export const MeResearchPage: React.FC = () => {
  const researchDomains = [
    {
      title: 'Alternative Biofuels & Nanofluid Combustion in Engines',
      lead: 'Dr. Deepanraj B. & Dr. Biju P. L.',
      funding: 'Funded by AICTE & KSCSTE (₹26 Lakhs)',
      highlights: 'Focuses on transesterification of non-edible waste cooking oils, metal-oxide nanoparticle blending (TiO2, CeO2), and in-cylinder pressure transducer telemetry.'
    },
    {
      title: 'Computational Fluid Dynamics (CFD) of Microchannel Heat Sinks',
      lead: 'Dr. Biju P. L.',
      funding: 'Funded by DST-SERB & Industry Co-Sponsors',
      highlights: 'Simulating two-phase boiling heat transfer in pin-fin microchannels for EV inverter cooling and space avionics thermal management using high-performance ANSYS clusters.'
    },
    {
      title: 'Lightweight Metal Matrix Composites (MMC) for Aerospace',
      lead: 'Dr. Manoj Kumar V.',
      funding: 'DST-SERB Core Grant (₹34.2 Lakhs)',
      highlights: 'Stir casting fabrication and ballistic fracture analysis of magnesium/aluminum alloy matrix reinforced with boron carbide (B4C) and graphene nanoplatelets.'
    },
    {
      title: 'Additive Manufacturing & Topological Shape Optimization',
      lead: 'Prof. Praveen Raj & Prof. Cijo Mathew',
      funding: 'Supported by FabLab Kerala & Maker Village',
      highlights: 'Generating generative design algorithms to minimize component weight while maximizing rigidity for automotive suspension uprights and aerospace brackets.'
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
            130+ Scopus/SCI Indexed Papers
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Mechanical Engineering at Jyothi drives advanced scientific inquiry in sustainable fuels, microscale electronics thermal management, lightweight composite materials, and AI-enabled additive manufacturing.
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
export const MeSyllabusPage: React.FC = () => {
  const [selectedSem, setSelectedSem] = useState<number>(1);

  const semesterData: Record<number, Array<{ code: string; title: string; credits: number; type: string }>> = {
    1: [
      { code: 'MA101', title: 'Calculus and Linear Algebra', credits: 4, type: 'Basic Science' },
      { code: 'PH101', title: 'Engineering Physics (Mechanics & Waves)', credits: 4, type: 'Basic Science' },
      { code: 'ME101', title: 'Basics of Mechanical Engineering', credits: 3, type: 'Engineering Science' },
      { code: 'ME102', title: 'Engineering Graphics & Computer Aided Drawing', credits: 3, type: 'Engineering Science' },
      { code: 'ME103', title: 'Central Workshop Practice (Fitting, Carpentry, Smithy)', credits: 1.5, type: 'Laboratory' }
    ],
    2: [
      { code: 'MA102', title: 'Differential Equations and Numerical Methods', credits: 4, type: 'Basic Science' },
      { code: 'CH101', title: 'Engineering Chemistry & Materials Science', credits: 4, type: 'Basic Science' },
      { code: 'CS102', title: 'Programming for Engineers (Python & C)', credits: 3, type: 'Engineering Science' },
      { code: 'EE101', title: 'Basics of Electrical & Electronics Engineering', credits: 3, type: 'Engineering Science' },
      { code: 'ME104', title: 'Basic Mechanical & CAD Modeling Workshop', credits: 1.5, type: 'Laboratory' }
    ],
    3: [
      { code: 'ME201', title: 'Mechanics of Solids', credits: 4, type: 'Program Core' },
      { code: 'ME202', title: 'Engineering Thermodynamics', credits: 4, type: 'Program Core' },
      { code: 'ME203', title: 'Metallurgy & Materials Engineering', credits: 3, type: 'Program Core' },
      { code: 'ME205', title: 'Computer Aided Machine Drawing', credits: 3, type: 'Program Core' },
      { code: 'ME207', title: 'Materials Testing & Metallurgy Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'ME209', title: 'Machine Shop Practice I', credits: 1.5, type: 'Laboratory' }
    ],
    4: [
      { code: 'ME204', title: 'Fluid Mechanics and Hydraulic Machines', credits: 4, type: 'Program Core' },
      { code: 'ME206', title: 'Manufacturing Technology & Casting', credits: 4, type: 'Program Core' },
      { code: 'ME208', title: 'Kinematics of Machinery', credits: 4, type: 'Program Core' },
      { code: 'MA202', title: 'Probability & Statistics for Mechanical Engineers', credits: 3, type: 'Basic Science' },
      { code: 'ME210', title: 'Fluid Mechanics & Hydraulic Machinery Lab', credits: 1.5, type: 'Laboratory' },
      { code: 'ME212', title: 'Machine Shop Practice II (Lathe & Shaper)', credits: 1.5, type: 'Laboratory' }
    ],
    5: [
      { code: 'ME301', title: 'Dynamics of Machinery & Vibration', credits: 4, type: 'Program Core' },
      { code: 'ME302', title: 'Thermal Engineering & IC Engines', credits: 4, type: 'Program Core' },
      { code: 'ME303', title: 'Design of Machine Elements I', credits: 4, type: 'Program Core' },
      { code: 'MPE01', title: 'Professional Elective I (Automotive Engineering / CFD)', credits: 3, type: 'Elective' },
      { code: 'ME305', title: 'Thermal Engineering & IC Engines Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'ME307', title: 'CAD/CAM Simulation & CNC Laboratory', credits: 1.5, type: 'Laboratory' }
    ],
    6: [
      { code: 'ME304', title: 'Heat and Mass Transfer', credits: 4, type: 'Program Core' },
      { code: 'ME306', title: 'Design of Machine Elements II', credits: 4, type: 'Program Core' },
      { code: 'ME308', title: 'Advanced Manufacturing & Metrology', credits: 3, type: 'Program Core' },
      { code: 'MPE02', title: 'Professional Elective II (Robotics & Automation / FEA)', credits: 3, type: 'Elective' },
      { code: 'ME310', title: 'Heat Transfer Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'ME312', title: 'Mini Project & Product Fabrication', credits: 2, type: 'Project' }
    ],
    7: [
      { code: 'ME401', title: 'Mechatronics & Industrial Automation', credits: 3, type: 'Program Core' },
      { code: 'ME402', title: 'Operations Research & Industrial Management', credits: 3, type: 'Program Core' },
      { code: 'MPE03', title: 'Professional Elective III (Additive Manufacturing / Cryogenics)', credits: 3, type: 'Elective' },
      { code: 'OE001', title: 'Open Elective (Electric Vehicle Design & Dynamics)', credits: 3, type: 'Open Elective' },
      { code: 'ME405', title: 'Mechatronics & Robotics Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'ME407', title: 'Major Project Phase I', credits: 3, type: 'Project' }
    ],
    8: [
      { code: 'ME404', title: 'Power Plant Engineering & Clean Energy', credits: 3, type: 'Program Core' },
      { code: 'MPE04', title: 'Professional Elective IV (Aerospace Propulsion / Nanomaterials)', credits: 3, type: 'Elective' },
      { code: 'OE002', title: 'Open Elective (Renewable Energy Technologies)', credits: 3, type: 'Open Elective' },
      { code: 'ME410', title: 'Major Project Phase II & Prototype Defense', credits: 6, type: 'Project' }
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
          The autonomous curriculum harmonizes traditional design and thermo-fluid mechanics with cutting-edge CAD/CAM, robotics, and additive manufacturing. Supported by over 35 intensive lab sessions across all 8 semesters, students develop true industrial engineering competence.
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
