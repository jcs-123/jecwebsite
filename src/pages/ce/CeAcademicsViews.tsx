import React, { useState } from 'react';
import {
  GraduationCap, Briefcase, Building2, Handshake, Trophy,
  FileText, CheckCircle2, Download, ExternalLink, BookOpen,
  Award, Sparkles, Cpu, Layers, Library, Compass, Users, MapPin,
  TrendingUp, Lightbulb, Target
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const CeCourseBtechPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Undergraduate Program</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                B.Tech in Civil Engineering
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Sanctioned Intake: 60 Seats
            </span>
            <span className="px-3 py-1 rounded-full bg-[#28052B] text-white text-xs font-mono font-bold">
              NBA Accredited
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Bachelor of Technology (B.Tech) in Civil Engineering at Jyothi Engineering College provides an intensive, industry-integrated curriculum bridging classic fundamentals—structural mechanics, geotechnical analysis, and hydraulics—with emerging technologies such as Building Information Modelling (BIM), Drone Photogrammetry, Remote Sensing, and Green Concrete technology.
        </p>
      </div>

      {/* Program Educational Objectives (PEOs) & Program Specific Outcomes (PSOs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E7D6C1]">
            <Target className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Program Educational Objectives (PEOs)
            </h3>
          </div>
          <div className="space-y-3 text-xs text-[#4A384F] font-light leading-relaxed">
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 1: Professional Engineering Competence</strong>
              Graduates will demonstrate technical excellence in analysis, design, and construction of sustainable civil engineering infrastructure adhering to IS and international codes.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 2: Modern Technological Adaptability</strong>
              Graduates will harness contemporary computational tools like BIM, STAAD.Pro, ETABS, and GIS to deliver optimized, resilient architectural solutions.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 3: Ethical Leadership & Entrepreneurship</strong>
              Graduates will exemplify ethical leadership, social accountability, environmental stewardship, and entrepreneurial prowess in executing public and private projects.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E7D6C1]">
            <Compass className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Program Specific Outcomes (PSOs)
            </h3>
          </div>
          <div className="space-y-3 text-xs text-[#4A384F] font-light leading-relaxed">
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 1: Structural & Geotechnical Design</strong>
              Ability to analyze and detail complex concrete and steel structures, foundations, and earth retaining systems under static, seismic, and wind loads.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 2: Sustainable Water & Transportation Systems</strong>
              Ability to formulate sustainable water supply schemes, wastewater treatment plants, and smart urban highway corridors using eco-friendly materials.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 3: Project Management & Survey Tech</strong>
              Proficiency in geodetic spatial surveying (Total Station, Drones), quantity estimation, and digital project scheduling using Primavera and MS Project.
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights & Honors/Minors */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#28052B] to-[#3B0840] rounded-3xl text-white space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">Autonomous Advantages</span>
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              B.Tech Honours & Minor Tracks
            </h3>
          </div>
          <span className="text-xs text-white/70">Choice Based Credit System (CBCS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light">
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Honours in Structural Engineering</div>
            <p className="text-white/80">Advanced Finite Element Analysis, Earthquake Resilient Structures, Prestressed Concrete Bridge Systems, and Blast-Resistant Design.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Minor in Smart Infrastructure & BIM</div>
            <p className="text-white/80">Digital Twin Modelling, Revit Architecture/Structure, Clash Detection, 4D/5D BIM Scheduling, and Smart City Geomatics.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Minor in Environmental Engineering</div>
            <p className="text-white/80">Solid Waste Valorization, Industrial Effluent Treatment, GIS Watershed Modelling, and Environmental Impact Assessment (EIA).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page (Placement, Higher Studies, Entrepreneurship) */
export const CeCareerPlacementPage: React.FC = () => {
  const [subTab, setSubTab] = useState<'placement' | 'higher-studies' | 'entrepreneurship'>('placement');

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
                Career and Placement
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'placement', label: 'i. Placement' },
              { id: 'higher-studies', label: 'ii. Higher Studies' },
              { id: 'entrepreneurship', label: 'iii. Entrepreneurship' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                  subTab === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of Civil Engineering enjoy holistic training through the Department’s Placement Cell, GATE training club, and Jyothi TBI. They transition seamlessly into multinational EPC corporations, top global graduate schools, or launch disruptive construction-tech ventures.
        </p>
      </div>

      {/* VIEW A: PLACEMENT */}
      {subTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">85%+</div>
              <div className="text-xs text-[#7A647F] mt-1">Placement Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#C79628]">₹12.0 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Highest Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">₹4.8 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Average Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">35+</div>
              <div className="text-xs text-[#7A647F] mt-1">Recruiting Companies</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Key Infrastructure & Core Recruiters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
              {[
                { name: 'Larsen & Toubro (L&T)', type: 'EPC Conglomerate' },
                { name: 'Sobha Limited', type: 'High-Rise Construction' },
                { name: 'Shapoorji Pallonji', type: 'Infrastructure & Real Estate' },
                { name: 'Afcons Infrastructure', type: 'Bridges & Tunnels' },
                { name: 'Tata Projects', type: 'Industrial & Urban Infra' },
                { name: 'Atkins (SNC-Lavalin)', type: 'BIM & Design Consulting' },
                { name: 'Ramboll India', type: 'Structural Consulting' },
                { name: 'UltraTech Cement Ltd.', type: 'Building Products' },
                { name: 'Total Environment', type: 'Architectural Construction' },
                { name: 'Prestige Group', type: 'Real Estate Development' },
                { name: 'Infosys / TCS / Cognizant', type: 'Enterprise Tech & GIS' },
                { name: 'Skyline Builders', type: 'Residential Structures' },
              ].map((co, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                  <div className="font-bold text-[#28052B]">{co.name}</div>
                  <div className="text-[10px] text-[#7A647F]">{co.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW B: HIGHER STUDIES */}
      {subTab === 'higher-studies' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Post-Graduate Admissions & GATE Accolades
            </h3>
            <span className="text-xs text-[#C79628] font-bold">IITs • NITs • Global Universities</span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            The department organizes specialized GATE and GRE coaching workshops beginning in Semester V. In recent years, our students have secured admission to prestigious Master's and Doctoral programs in India and abroad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { institute: 'IIT Madras', course: 'M.Tech in Structural Engineering', student: 'Arun V. (AIR 412 - GATE 2023)' },
              { institute: 'NIT Calicut', course: 'M.Tech in Transportation Planning', student: 'Divya S. (AIR 645 - GATE 2024)' },
              { institute: 'TU Delft, Netherlands', course: 'M.S. in Building Technology', student: 'Vivek Chandran (Batch 2021)' },
              { institute: 'National University of Singapore (NUS)', course: 'M.Sc. in Civil Engineering & BIM', student: 'Neha Maria (Batch 2022)' },
              { institute: 'BITS Pilani', course: 'M.E. in Structural Engineering', student: 'Sujith K. (GATE 2023)' },
              { institute: 'University of Melbourne, Australia', course: 'Master of Construction Management', student: 'Gautham R. (Batch 2020)' },
            ].map((hs, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
                <div className="font-bold text-sm text-[#28052B]">{hs.institute}</div>
                <div className="text-xs text-[#C79628] font-semibold">{hs.course}</div>
                <div className="text-[11px] text-[#7A647F]">{hs.student}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW C: ENTREPRENEURSHIP */}
      {subTab === 'entrepreneurship' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Incubated Startups & Construction Ventures
            </h3>
            <span className="text-xs text-[#C79628] font-bold">Jyothi TBI Incubation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">GeoStruct Solutions</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Structural & Soil Consultancy</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Incubated by alumni to provide economical geotechnical soil investigations, plate load testing, and seismic structural drawings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">AeroGeo Surveys</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Drone Topography & BIM</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Student-led drone surveying startup providing 3D digital elevation models, orthomosaic mapping, and quarry volume computations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">EcoPaver Tech</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Recycled Aggregate Paving</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Commercializing high-strength interlocking pavers manufactured using recycled plastic aggregates and fly-ash geopolymer binders.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 3. Facilities Page (Lab & Library) */
export const CeFacilitiesPage: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<'lab' | 'library'>('lab');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure & Learning Spaces</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Facilities (Lab & Library)
              </h2>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'lab', label: 'i. Laboratories' },
              { id: 'library', label: 'ii. Department Library' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFacility(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                  activeFacility === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          State-of-the-art testing equipment conforming to Bureau of Indian Standards (BIS), ASTM, and BS codes. Our laboratories also serve as an authorized Testing and Consultancy Center for government and private infrastructure projects.
        </p>
      </div>

      {activeFacility === 'lab' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Concrete & Materials Testing Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Concrete & Materials Testing Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Heavy Mechanical Testing & NDT</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Houses a 1000 kN Computerized Universal Testing Machine (UTM), 2000 kN Digital Compression Testing Machine (CTM), Rebound Hammer, Ultrasonic Pulse Velocity (UPV) tester, Tile Abrasion Testing machine, and Vicat apparatus.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Key Setups:</strong> Concrete mix design, flexural tensile test, steel rebar bend test, NDT.</div>
              <div>• <strong>Testing Capability:</strong> M10 to M80 Concrete, Fe 415/500/550D rebar certification.</div>
            </div>
          </div>

          {/* Advanced Surveying & Geomatics Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Advanced Surveying & Geomatics Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Total Station, GPS & Drones</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Equipped with high-precision Leica and Topcon Electronic Total Stations (1-second accuracy), Digital Auto Levels, Handheld Dual-Frequency GPS receivers, and DJI Surveying Drones for photogrammetry.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Key Setups:</strong> Trigonometric leveling, contour mapping, curve setting out, drone GIS.</div>
              <div>• <strong>Field Operations:</strong> Annual 10-day intensive field survey camp.</div>
            </div>
          </div>

          {/* Geotechnical Engineering Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Geotechnical Engineering Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Soil Mechanics & Foundation Testing</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Features motorized Triaxial Shear apparatus, Direct Shear test rigs, Unconfined Compression test apparatus, 3-gang Consolidometer, California Bearing Ratio (CBR) apparatus, and Standard Penetration Test (SPT) setup.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Soil Tests:</strong> Cohesion (c), angle of internal friction (φ), permeability, preconsolidation.</div>
              <div>• <strong>Consultancy:</strong> Soil investigation reports for multi-storey building foundations.</div>
            </div>
          </div>

          {/* CAD & Building Information Modelling (BIM) Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">CAD & BIM Computation Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Workstations & Licensed Software</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              45 high-end Intel Core i7 workstations loaded with licensed Autodesk AutoCAD 2024, Revit Architecture & Structure, Bentley STAAD.Pro, ETABS, SAP2000, and QGIS/ArcGIS suites.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Software Portfolio:</strong> AutoCAD, Revit, STAAD.Pro, ETABS, Primavera P6.</div>
              <div>• <strong>Training:</strong> Autodesk & Bentley certified training modules.</div>
            </div>
          </div>
        </div>
      )}

      {activeFacility === 'library' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Library className="w-6 h-6 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
              Departmental Technical Library
            </h3>
          </div>

          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            The Civil Engineering Department Library acts as an intellectual hub with over 3,500 hardbound technical volumes, comprehensive sets of Bureau of Indian Standards (BIS) and Indian Roads Congress (IRC) codes, national/international research journals, and student project dissertations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">3,500+</div>
              <div className="text-[11px] text-[#7A647F]">Volumes & Textbooks</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#C79628]">120+</div>
              <div className="text-[11px] text-[#7A647F]">IS & IRC Standard Codes</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">18</div>
              <div className="text-[11px] text-[#7A647F]">Subscribed Print Journals</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">500+</div>
              <div className="text-[11px] text-[#7A647F]">B.Tech/M.Tech Theses</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up Page (MOUs) */
export const CeIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      company: 'Bentley Systems India Pvt. Ltd.',
      validity: 'Active (2023 - 2026)',
      scope: 'Establishment of Bentley Academic Center of Excellence, STAAD.Pro and OpenRoads student software certifications, and real-world project assignments.',
      lead: 'Prof. Anju C. K. (Coordinator)',
    },
    {
      company: 'UltraTech Cement Limited',
      validity: 'Active (2022 - 2025)',
      scope: 'Technical lectures on concrete mix design, sponsored student cube testing competitions, site apprenticeships, and plant visits.',
      lead: 'Prof. Vincy Verghese (Coordinator)',
    },
    {
      company: 'Builders Association of India (BAI) - Thrissur Centre',
      validity: 'Active (Institutional MoU)',
      scope: 'Internship placement for 40+ students annually, on-site safety training, contractor-student mentoring, and construction management symposia.',
      lead: 'Dr. Jaison Mathew (HOD)',
    },
    {
      company: 'CREDAI Thrissur (Confederation of Real Estate Developers’ Associations)',
      validity: 'Active (2023 - 2026)',
      scope: 'Industry visits to large residential high-rise construction projects, green building audits, and campus recruitment drives.',
      lead: 'Prof. Carol V. D’souza (Coordinator)',
    },
    {
      company: 'Kerala Highway Research Institute (KHRI), PWD Kerala',
      validity: 'Active (Research Collaboration)',
      scope: 'Joint testing of modified asphalt bitumen, pavement durability analysis, and pavement condition index (PCI) field surveys.',
      lead: 'Prof. Neeraja P. G. (Coordinator)',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Corporate Partnerships</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Industry Tie-up (MOUs)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            5 Active Strategic MOUs
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Active Memorandums of Understanding (MOUs) connect our students with global engineering software creators, premier material manufacturers, and premier construction industry federations for live internships and technology transfer.
        </p>
      </div>

      <div className="space-y-4">
        {mous.map((m, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                    {m.company}
                  </h4>
                  <div className="text-[11px] text-[#7A647F]">{m.lead}</div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#C79628]">
                {m.validity}
              </span>
            </div>

            <p className="text-xs text-[#4A384F] font-light leading-relaxed pl-12">
              {m.scope}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Achievements Page (Student & Staff Achievements) */
export const CeAchievementsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'staff'>('student');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laurels & Recognition</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Achievements
              </h2>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'student', label: 'i. Student Achievements' },
              { id: 'staff', label: 'ii. Staff Achievements' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                  activeTab === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Celebrating the technical triumphs, state project honors, national competition awards, and research milestones achieved by our students and faculty members.
        </p>
      </div>

      {activeTab === 'student' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '1st Prize - All India Concrete Cube Test Competition',
              organization: 'Indian Concrete Institute (ICI) National Convention 2023',
              team: 'Kevin Paul, Devika Suresh, Chris Thomas (Final Year B.Tech)',
              desc: 'Engineered an ultra-high performance concrete mix (M90) using silica fume and nano-silica, clocking 94.6 MPa at 28-day testing with high workability.',
            },
            {
              title: 'Best B.Tech Engineering Project Award 2024',
              organization: 'Kerala State Council for Science, Technology and Environment (KSCSTE)',
              team: 'Anandhu C. V., Aiswarya Mohan, Basil Eldhose',
              desc: 'Project: "Development of Low-Carbon Geopolymer Bricks utilizing Sugarcane Bagasse Ash and Red Mud" - awarded ₹25,000 cash grant.',
            },
            {
              title: 'Grand Finalists - Smart India Hackathon (SIH) 2023',
              organization: 'Ministry of Education & AICTE, New Delhi',
              team: 'Team "TerraBIM" - 6 Civil & CS students',
              desc: 'Created an automated landslide early warning sensor grid combining soil pore pressure sensors and 3D GIS slope stability hazard mapping.',
            },
            {
              title: 'National Level Survey Hunt Champions',
              organization: 'National Civil Fest (Tathva), NIT Calicut',
              team: 'Akshay Kumar & Anitta Davis',
              desc: 'Secured First Place in the Total Station Precision Navigation and Blind Contouring Challenge competing against 40 engineering teams.',
            },
          ].map((ach, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  National Recognition
                </span>
                <Award className="w-5 h-5 text-[#C79628]" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {ach.title}
              </h4>
              <div className="text-xs text-[#28052B] font-semibold">{ach.organization}</div>
              <div className="text-[11px] text-[#7A647F]">Recipients: {ach.team}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'staff' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'State Structural Consultancy Citation for PWD Bridge',
              faculty: 'Dr. Jaison Mathew (HOD & Professor)',
              agency: 'Kerala Public Works Department (Bridges Wing)',
              desc: 'Recognized by Kerala PWD for structural integrity vetting and non-destructive load testing of the 120-meter prestressed concrete bridge over Kechery River.',
            },
            {
              title: 'CERD Research Grant for Sustainable Sludge Bricks',
              faculty: 'Prof. Vincy Verghese & Prof. Sooraj M. S.',
              agency: 'APJ Abdul Kalam Technological University (CERD)',
              desc: 'Sanctioned research grant of ₹2.5 Lakhs for developing eco-friendly hollow building blocks using treated sewage treatment plant sludge.',
            },
            {
              title: 'Best Research Paper Award - ICACSE 2024',
              faculty: 'Dr. Agnes George (Associate Professor)',
              agency: 'International Conference on Advances in Civil Engineering',
              desc: 'Paper: "Spatial Flood Inundation Modeling for Bharathapuzha River Basin using HEC-RAS and High-Resolution Sentinel-1 Radar SAR Data".',
            },
            {
              title: 'Granted Indian Patent for Porous Concrete Pavement',
              faculty: 'Prof. Carol V. D’souza & Team',
              agency: 'Intellectual Property India (Controller General of Patents)',
              desc: 'Patent Granted: "An Interlocking Permeable Concrete Pavement System with Integrated Stormwater Subsurface Recharge Filter Wells".',
            },
          ].map((ach, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  Faculty Distinction
                </span>
                <Sparkles className="w-5 h-5 text-[#C79628]" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {ach.title}
              </h4>
              <div className="text-xs text-[#28052B] font-semibold">{ach.faculty}</div>
              <div className="text-[11px] text-[#7A647F]">{ach.agency}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* 6. Research Page (Faculty Research) */
export const CeResearchPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Scholarly Investigations</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Research (Faculty Research)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            40+ Scopus / SCI Publications
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Faculty research in Civil Engineering addresses urgent societal challenges—including climate-resilient building envelopes, disaster-mitigating slope stability techniques for Kerala’s hill tracts, circular economy building materials, and hydrological water security.
        </p>
      </div>

      {/* Research Thrust Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Sustainable & Geopolymer Concrete
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Synthesis of ambient-cured geopolymer concretes replacing 100% Ordinary Portland Cement with GGBS and fly ash, evaluated for acid resistance, chloride penetration, and high-temperature fire resistance.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Slope Stability & Geosynthetics
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Finite element strength reduction methods for analyzing rainfall-triggered slope failures along the Western Ghats; field testing of coir geotextiles and biopolymer soil stabilization.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Watershed & Environmental Hydro-informatics
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Coupled SWAT-MODFLOW hydrological modelling to assess aquifer recharge, soil erosion risks, and micro-watershed conservation in Bharathapuzha river basin under changing climate scenarios.
          </p>
        </div>
      </div>

      {/* Testing & Consultancy Cell Highlights */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Civil Testing & Industrial Consultancy Cell (CTCC)
          </h3>
          <span className="text-xs font-mono font-bold text-emerald-700">₹24+ Lakhs Annual Revenue</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#4A384F]">
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Concrete & Steel Quality Audits</strong>
            Cube compressive strength, Rebound Hammer test, Ultrasonic pulse velocity, rebar tensile yield tests for PWD and private contractors.
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Geotechnical Soil Investigation</strong>
            Borehole drilling, Standard Penetration Test (SPT), safe bearing capacity (SBC) computation, foundation recommendations.
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Water Quality & Environment</strong>
            Chemical and bacteriological water potability testing, wastewater BOD/COD compliance tests for local industrial estates.
          </div>
        </div>
      </div>
    </div>
  );
};

/* 7. Syllabus and Curriculum Page */
export const CeSyllabusPage: React.FC = () => {
  const semesters = [
    {
      sem: 'Semester I',
      credits: '20 Credits',
      subjects: [
        'Linear Algebra & Calculus',
        'Engineering Physics / Chemistry',
        'Basics of Civil & Mechanical Engineering',
        'Engineering Graphics with CAD',
        'Civil Engineering Workshop Practice',
        'Life Skills & Professional Communication',
      ],
    },
    {
      sem: 'Semester II',
      credits: '20 Credits',
      subjects: [
        'Vector Calculus & Differential Equations',
        'Engineering Mechanics (Statics & Dynamics)',
        'Building Materials & Sustainable Construction',
        'Basics of Electrical & Electronics Engineering',
        'Basic Civil Engineering Materials Testing Lab',
        'Universal Human Values',
      ],
    },
    {
      sem: 'Semester III',
      credits: '22 Credits',
      subjects: [
        'Mechanics of Solids',
        'Fluid Mechanics',
        'Geodetic Surveying & Spatial Measurements',
        'Civil Engineering Geology',
        'Surveying Field Work Lab I',
        'Computer Aided Civil Drafting Lab',
      ],
    },
    {
      sem: 'Semester IV',
      credits: '22 Credits',
      subjects: [
        'Structural Analysis I',
        'Hydraulic Engineering & Open Channel Flow',
        'Advanced Surveying & Geomatics (Total Station)',
        'Concrete Technology & Smart Binders',
        'Fluid Mechanics & Machinery Lab',
        'Materials Testing Laboratory II',
      ],
    },
    {
      sem: 'Semester V',
      credits: '23 Credits',
      subjects: [
        'Structural Analysis II (Indeterminate Structures)',
        'Design of Reinforced Concrete Structures (IS 456)',
        'Geotechnical Engineering I (Soil Mechanics)',
        'Hydrology & Water Resources Engineering',
        'Professional Elective I (Prestressed Concrete / Green Buildings)',
        'Geotechnical Engineering Laboratory',
      ],
    },
    {
      sem: 'Semester VI',
      credits: '23 Credits',
      subjects: [
        'Design of Steel Structures (IS 800)',
        'Geotechnical Engineering II (Foundation Design)',
        'Transportation Engineering (Highway & Airport Design)',
        'Environmental Engineering I (Water Supply Systems)',
        'Professional Elective II (Ground Improvement / Air Pollution)',
        'Computer Aided Structural Analysis (STAAD / ETABS) Lab',
      ],
    },
    {
      sem: 'Semester VII',
      credits: '20 Credits',
      subjects: [
        'Environmental Engineering II (Sewage & Industrial Waste)',
        'Quantity Surveying & Estimation',
        'Construction Management & Project Scheduling (Primavera)',
        'Professional Elective III (Earthquake Resistant Design / BIM)',
        'Environmental Engineering & Transportation Lab',
        'Capstone Project Phase I',
      ],
    },
    {
      sem: 'Semester VIII',
      credits: '18 Credits',
      subjects: [
        'Professional Ethics & Construction Law',
        'Professional Elective IV (Bridge Engineering / Smart Cities)',
        'Open Elective (Disaster Management / Remote Sensing)',
        'Capstone Project Phase II & Viva-Voce',
        'Comprehensive Course Viva',
      ],
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Academic Structure</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Syllabus and Curriculum
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Autonomous Scheme 2024
            </span>
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28052B] text-white text-xs font-bold hover:bg-[#3B0840] transition-all">
              <Download className="w-3.5 h-3.5" /> Full Scheme PDF
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The autonomous curriculum follows a 168-credit structure with Outcome Based Education (OBE) principles, industry apprenticeships, field surveying camp, and hands-on BIM computation across all 8 semesters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {semesters.map((s, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E7D6C1]">
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {s.sem}
              </h4>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[11px] font-mono font-bold text-[#C79628] border border-[#DFC06A]/40">
                {s.credits}
              </span>
            </div>

            <ul className="text-xs text-[#4A384F] space-y-1.5 font-light">
              {s.subjects.map((sub, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
