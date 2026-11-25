import React, { useState } from 'react';
import {
  GraduationCap, Briefcase, Building2, Handshake, Trophy,
  FileText, CheckCircle2, Download, ExternalLink, BookOpen,
  Award, Sparkles, Cpu, Layers, Library, Compass, Users, MapPin,
  TrendingUp, Lightbulb, Target, Globe, Star, ChevronRight
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const CeCourseBtechPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              B.Tech in Civil Engineering
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          {onOpenApply && (
            <button
              onClick={onOpenApply}
              className="px-5 py-2.5 rounded-full bg-[#28052B] text-[#DFC06A] hover:bg-[#3B0A40] transition-colors font-bold text-xs shadow-sm cursor-pointer flex items-center gap-2 border border-[#DFC06A]/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
              <span>Apply for Admission</span>
            </button>
          )}
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light max-w-4xl">
          The 4-Year Bachelor of Technology (B.Tech) in Civil Engineering at Jyothi Engineering College is an autonomous program accredited by the NBA and approved by AICTE. It blends fundamental structural mechanics, soil engineering, and hydraulics with cutting-edge Building Information Modelling (BIM), Total Station/Drone Geomatics, and Green Concrete technology.
        </p>
      </div>

      {/* Program Architecture & Key Metrics */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Program Architecture &amp; Key Metrics
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Scheme 2024 (Autonomous)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">4 Years</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">8 Full-Time Semesters</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">60 Seats</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Annual Approved Intake</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">160 Credits</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">CBCS Degree Framework</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">NBA &amp; NABL</div>
            <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Tier-1 Accreditation</div>
          </div>
        </div>
      </div>

      {/* PEOs and PSOs Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PEOs Card */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <CheckCircle2 className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Program Educational Objectives (PEOs)
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
          <ul className="space-y-3.5 text-xs text-[#4A384F] leading-relaxed font-light">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PEO 1 – Professional Competence:</strong> Graduates will demonstrate technical excellence in analysis, design, and construction of sustainable infrastructure adhering to IS and international codes.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PEO 2 – Modern Technology Adaptability:</strong> Graduates will harness contemporary computational tools like BIM, STAAD.Pro, ETABS, and GIS to deliver resilient architectural solutions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PEO 3 – Leadership &amp; Ethics:</strong> Graduates will practice engineering with high ethical standards, environmental stewardship, societal empathy, and entrepreneurial prowess.
              </div>
            </li>
          </ul>
        </div>

        {/* PSOs Card */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Compass className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Program Specific Outcomes (PSOs)
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>
          <ul className="space-y-3.5 text-xs text-[#4A384F] leading-relaxed font-light">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PSO 1 – Structural &amp; Geotech Design:</strong> Ability to analyze and detail complex concrete and steel structures, foundations, and earth retaining systems under static, seismic, and wind loads.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PSO 2 – Sustainable Water Systems:</strong> Ability to formulate sustainable water supply schemes, wastewater treatment plants, and smart urban highway corridors using eco-friendly materials.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C79628] shrink-0 mt-1.5" />
              <div>
                <strong className="text-[#28052B] font-semibold">PSO 3 – Spatial Surveying &amp; BIM:</strong> Proficiency in geodetic spatial surveying (Total Station, Drones), quantity estimation, and digital project scheduling using Primavera and MS Project.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page */
export const CeCareerPlacementPage: React.FC = () => {
  const [subTab, setSubTab] = useState<'placement' | 'higher-studies' | 'entrepreneurship'>('placement');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Career and Placement
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of Civil Engineering enjoy holistic training through the Department’s Placement Cell, GATE training club, and Jyothi TBI. They transition seamlessly into multinational EPC corporations, top global graduate schools, or launch disruptive construction-tech ventures.
        </p>

        {/* Sub-Tab Navigation Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: 'placement', label: 'Placement Records' },
            { id: 'higher-studies', label: 'Higher Studies' },
            { id: 'entrepreneurship', label: 'Entrepreneurship' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSubTab(tab.id as any)}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer text-xs font-semibold ${
                subTab === tab.id
                  ? 'bg-[#28052B] text-white shadow-xs font-bold'
                  : 'bg-white text-[#28052B] border border-[#E7D6C1] hover:bg-[#FAF7F2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW A: PLACEMENT */}
      {subTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">85%+</div>
              <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Placement Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#C79628]">₹12.0 LPA</div>
              <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Highest Annual CTC</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">₹4.8 LPA</div>
              <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Average Annual CTC</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-emerald-700">35+</div>
              <div className="text-[11px] text-[#7A647F] mt-1 font-medium">Recruiting Companies</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                Key Infrastructure &amp; Core Recruiting Partners
              </h3>
              <span className="text-xs text-[#7A647F]">200+ Hours Site &amp; Soft Skill Prep</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-1">
              {[
                'Larsen & Toubro (L&T)', 'Sobha Limited', 'Shapoorji Pallonji', 'Afcons Infra',
                'Tata Projects', 'Atkins (SNC-Lavalin)', 'Ramboll India', 'UltraTech Cement',
                'Total Environment', 'Prestige Group', 'Skyline Builders', 'Infosys GIS'
              ].map((co, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center font-bold text-xs text-[#28052B] flex items-center justify-center h-14 hover:border-[#DFC06A] transition-colors">
                  {co}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW B: HIGHER STUDIES */}
      {subTab === 'higher-studies' && (
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Post-Graduate Admissions &amp; GATE Accolades
            </h3>
            <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
              IITs • NITs • Global Admits
            </span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            The department organizes specialized GATE and GRE coaching workshops beginning in Semester V. In recent years, our scholars have secured admits to prestigious Master’s and Doctoral programs worldwide.
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
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Incubated Startups &amp; Construction Ventures
            </h3>
            <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
              Jyothi TBI Incubation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-3xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">GeoStruct Solutions</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Structural &amp; Soil Consultancy</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Incubated by alumni to provide economical geotechnical soil investigations, plate load testing, and seismic structural drawings.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">AeroGeo Surveys</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Drone Topography &amp; BIM</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Student-led drone surveying startup providing 3D digital elevation models, orthomosaic mapping, and quarry volume computations.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
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

/* 3. Facilities Page */
export const CeFacilitiesPage: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<'lab' | 'library'>('lab');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Department Facilities (Lab &amp; Library)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          State-of-the-art testing equipment conforming to Bureau of Indian Standards (BIS), ASTM, and BS codes. Our laboratories also serve as an authorized Testing and Consultancy Center for government and private infrastructure projects.
        </p>

        {/* Facility Toggle Pills */}
        <div className="flex gap-2 pt-2">
          {[
            { id: 'lab', label: 'Laboratories' },
            { id: 'library', label: 'Department Library' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFacility(tab.id as any)}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer text-xs font-semibold ${
                activeFacility === tab.id
                  ? 'bg-[#28052B] text-white shadow-xs font-bold'
                  : 'bg-white text-[#28052B] border border-[#E7D6C1] hover:bg-[#FAF7F2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeFacility === 'lab' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Concrete Lab */}
          <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Concrete &amp; Materials Testing Lab</h4>
                  <div className="text-xs text-[#C79628] font-semibold">Destructive &amp; Non-Destructive Testing (NDT)</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
                1000 kN Rig
              </span>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Equipped with a computerized 1000 kN Universal Testing Machine (UTM), 2000 kN Digital Compression Testing Machine (CTM), flexure testing frame, Vee-Bee consistometer, and ultrasonic pulse velocity tester.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong className="text-[#28052B]">Rigs:</strong> 1000 kN UTM, 2000 kN CTM, Rebound Hammer, Core Cutter</div>
              <div>• <strong className="text-[#28052B]">Capacity:</strong> 35 Workstations • Authorized PWD Quality Audit Cell</div>
            </div>
          </div>

          {/* Geotechnical Lab */}
          <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Geotechnical &amp; Highway Lab</h4>
                  <div className="text-xs text-[#C79628] font-semibold">Soil Mechanics &amp; Pavement Engineering</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
                Soil Mechanics
              </span>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Features digital triaxial shear test apparatus, motor driven direct shear apparatus, automatic CBR machine, consolidation cells, and bitumen penetration, ductility, and flash point testing apparatus.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong className="text-[#28052B]">Rigs:</strong> Triaxial Test System, Permeability cells, Los Angeles Abrasion</div>
              <div>• <strong className="text-[#28052B]">Testing:</strong> Safe Bearing Capacity (SBC) and Subgrade California Bearing Ratio</div>
            </div>
          </div>

          {/* Environmental Lab */}
          <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Environmental Engineering Lab</h4>
                  <div className="text-xs text-[#C79628] font-semibold">Water &amp; Wastewater Quality Assessment</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
                Water Quality
              </span>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Equipped for comprehensive environmental assays including BOD incubators, COD digesters, flame photometers, UV-Vis spectrophotometers, jar test apparatus for coagulation, and microbial colony counters.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong className="text-[#28052B]">Apparatus:</strong> Turbidity meters, Digital pH &amp; Conductivity, Air Samplers</div>
              <div>• <strong className="text-[#28052B]">Consultancy:</strong> Municipal drinking water potability and effluent assays</div>
            </div>
          </div>

          {/* Surveying & BIM Studio */}
          <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#28052B]">Surveying &amp; CAD/BIM Studio</h4>
                  <div className="text-xs text-[#C79628] font-semibold">Geomatics, Drone Mapping &amp; 3D Modeling</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
                40 Workstations
              </span>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Maintains 6 Topcon / Leica Electronic Total Stations, handheld survey-grade GPS, surveying drones, and 40 high-performance workstations with AutoCAD, STAAD.Pro, ETABS, Revit, and QGIS licenses.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong className="text-[#28052B]">Software:</strong> STAAD.Pro, ETABS, Revit Architecture/Structure, ArcGIS</div>
              <div>• <strong className="text-[#28052B]">Hardware:</strong> Total Stations, Digital Levels, Mapping Drone, A0 Plotters</div>
            </div>
          </div>
        </div>
      )}

      {activeFacility === 'library' && (
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Library className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Department Reference Library</h4>
                <div className="text-xs text-[#C79628] font-semibold">Codes, Standards &amp; Research Journals</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5EEDB] text-[#7A5B28] text-[10px] font-bold">
              1,800+ Volumes
            </span>
          </div>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Houses over 1,800 specialized reference books, comprehensive Bureau of Indian Standards (IS Codes), IRC codes, SP publications, and bound volumes of ASCE and Springer journals.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
            <div>• <strong className="text-[#28052B]">Codes Archive:</strong> Complete IS 456, IS 800, IS 1893, IS 13920, IRC 37, IRC 58</div>
            <div>• <strong className="text-[#28052B]">Digital Portals:</strong> ASCE Library, ScienceDirect, SpringerLink, NPTEL Offline Server</div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up Page */
export const CeIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      partner: 'Larsen & Toubro (L&T) Construction',
      tag: 'EPC Multinational Leader',
      scope: 'Collaborative curriculum design, student site internships on elevated rail and bridge corridors, faculty industrial sabbaticals, and pre-placement evaluations.',
      benefit: 'Priority campus recruitment and 4-week structured site internships'
    },
    {
      partner: 'Bentley Systems Academic Alliance',
      tag: 'Global Infrastructure Software',
      scope: 'Establishment of the Bentley BIM Training Centre on campus. Provides access to STAAD.Pro, OpenRoads Designer, and MicroStation with international certifications.',
      benefit: 'Authorized student software licenses and Bentley global credentials'
    },
    {
      partner: 'UltraTech Cement Limited',
      tag: 'Building Materials Major',
      scope: 'Joint concrete mix-design workshops, sponsored student competitions, non-destructive testing demos, and technical paper sponsorships.',
      benefit: 'Material testing sponsorship and plant visits'
    },
    {
      partner: 'Builders Association of India (BAI)',
      tag: 'National Contractor Apex Body',
      scope: 'Practical apprenticeship mapping, guest lectures by renowned project directors, and hands-on site exposure to high-rise building projects.',
      benefit: 'Internship placement across 50+ affiliated contractor firms'
    },
    {
      partner: 'Kerala Public Works Department (PWD)',
      tag: 'State Infrastructure Authority',
      scope: 'Third-party quality auditing, road pavement core testing, structural health monitoring of public bridges, and government engineering internships.',
      benefit: 'Live involvement in state infrastructure quality auditing'
    },
    {
      partner: 'Indian Green Building Council (IGBC)',
      tag: 'Green Architecture Council',
      scope: 'Student IGBC Chapter activities, green building rating certification modules, and net-zero carbon architecture workshops.',
      benefit: 'IGBC Accredited Professional (AP) exam mentoring'
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Industry Tie-up (MOUs)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department maintains strategic institutional collaborations and signed Memorandums of Understanding (MOUs) with top construction conglomerates, software developers, and professional engineering councils.
        </p>
      </div>

      {/* MOUs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mous.map((mou, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79628]">{mou.tag}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#E8F8EE] text-[#1E824C] text-[10px] font-semibold">✓ Active MOU</span>
              </div>
              <h4 className="font-bold text-base text-[#28052B] leading-snug">{mou.partner}</h4>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">{mou.scope}</p>
            </div>
            <div className="pt-3 border-t border-[#E7D6C1] text-[11px] text-[#28052B] font-medium">
              <span className="text-[#C79628] font-bold">Key Benefit:</span> {mou.benefit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Achievements Page */
export const CeAchievementsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Achievements (Student &amp; Staff)
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Students and faculty of the Civil Engineering department continuously earn distinction across national design hackathons, technical Olympiads, and funded state research initiatives.
        </p>
      </div>

      {/* Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Achievements */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Trophy className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Student Laurels &amp; Honors
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>

          <div className="space-y-3.5">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">National Bridge Design Championship (IIT Bombay)</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">1st Prize</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Our third-year student team secured First Prize nationally for designing a high load-to-weight ratio truss bridge model using sustainable bamboo composites.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">UltraTech Sparkling Stars Concrete Contest</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">State Champion</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Awarded Gold Trophy across Kerala engineering institutions for formulating self-compacting M60 concrete utilizing fly-ash and GGBS.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Bentley Academic BIM Design Challenge</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 font-bold">All-India Finalist</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Team designed a 4D BIM digital twin for an elevated highway interchange in OpenRoads, commended by Bentley global judges.
              </p>
            </div>
          </div>
        </div>

        {/* Staff Achievements */}
        <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Star className="w-5 h-5 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#28052B]">
              Staff Accolades &amp; Consultancy Grants
            </h3>
            <div className="flex-1 h-px bg-[#E5D7B7] hidden sm:block" />
          </div>

          <div className="space-y-3.5">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Kerala PWD Bridge Health Monitoring Sanction</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 font-bold">₹15.0 Lakhs</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Dr. Jaison Mathew and structural team sanctioned consulting contract for non-destructive testing and structural rehabilitation of river bridges.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">Patent Published on Geopolymer Paving</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">Patent Grant</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Prof. Vincy Verghese published an official Indian Patent for "Eco-friendly Carbon-Neutral Interlocking Paver Blocks from Industrial Waste".
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#28052B]">APJ AKTU Best Civil Researcher Award</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">State Commendation</span>
              </div>
              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                Dr. Agnes George recognized by the university for extensive publications in high-impact international hydrological journals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 6. Research Page */
export const CeResearchPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
            Faculty &amp; Department Research
          </h2>
          <div className="flex-1 h-px bg-[#DFC06A]/40 hidden sm:block" />
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Scholarly inquiries in Civil Engineering investigate geopolymer green concretes, slope stability modelling in the Western Ghats, urban runoff management, and seismic response of tall buildings, indexed in Scopus, ASCE, and Springer.
        </p>
      </div>

      {/* Research Output Summary Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Research Impact &amp; Scholarly Metrics
          </h3>
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-xs font-mono font-bold text-[#28052B]">
            Scopus / SCI Indexed
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">52+</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Scopus / SCI Papers</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#C79628]">₹55.0 L</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Consultancy &amp; Grants</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-[#28052B]">3</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Patents Filed</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-center">
            <div className="text-2xl font-bold text-emerald-700">740+</div>
            <div className="text-[11px] text-[#4A384F] mt-1 font-medium">Google Scholar Citations</div>
          </div>
        </div>
      </div>

      {/* Featured Publications Card */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Featured Peer-Reviewed Publications
          </h3>
          <span className="text-xs text-[#7A647F]">High-Impact Journals</span>
        </div>

        <div className="space-y-3">
          {[
            { title: 'Mechanical Behavior and Microstructural Characterization of Alkali-Activated Slag-Fly Ash Concrete with Recycled Aggregates', authors: 'Dr. Jaison Mathew, Prof. Vincy Verghese', journal: 'Construction and Building Materials (Elsevier)', doi: '10.1016/j.conbuildmat.2024.135210' },
            { title: 'Probabilistic Landslide Hazard Assessment in Mountainous Watersheds of Western Ghats Using GIS-Based Machine Learning', authors: 'Prof. Carol V. D’souza, Dr. Agnes George', journal: 'Natural Hazards (Springer)', doi: '10.1007/s11069-023-06281-4' },
            { title: 'Performance Evaluation of Waste Plastic-Modified Bituminous Concrete for Heavy-Traffic Highway Pavements', authors: 'Prof. Neeraja P. G., Dr. Jaison Mathew', journal: 'ASCE Journal of Materials in Civil Engineering', doi: '10.1061/(ASCE)MT.1943-5533.0004921' },
            { title: 'Heavy Metal Adsorption Kinetics from Industrial Effluents using Chemically Activated Agricultural Biochar', authors: 'Prof. Sooraj M. S., Dr. Agnes George', journal: 'Journal of Environmental Chemical Engineering (Elsevier)', doi: '10.1016/j.jece.2023.109842' },
          ].map((p, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1.5 hover:border-[#DFC06A] transition-colors">
              <h4 className="font-bold text-xs sm:text-sm text-[#28052B] leading-snug">{p.title}</h4>
              <div className="text-xs text-[#C79628] font-medium">{p.authors}</div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-[#7A647F]">
                <span>{p.journal}</span>
                <span className="font-mono text-[#28052B] font-semibold">DOI: {p.doi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 7. Syllabus Page */
export const CeSyllabusPage: React.FC = () => {
  const [activeSem, setActiveSem] = useState('s3s4');

  const syllabusMap: Record<string, { title: string; desc: string; courses: { code: string; name: string; cred: number; cat: string }[] }> = {
    s1s2: {
      title: 'First Year (Semester 1 & 2)',
      desc: 'Foundational engineering mathematics, physics, chemistry, basic civil and mechanical engineering workshops.',
      courses: [
        { code: 'MAT101', name: 'Linear Algebra and Differential Calculus', cred: 4, cat: 'Basic Science' },
        { code: 'PHY100', name: 'Engineering Physics / Chemistry', cred: 4, cat: 'Basic Science' },
        { code: 'EST100', name: 'Basics of Civil & Mechanical Engineering', cred: 4, cat: 'Engineering Science' },
        { code: 'EST110', name: 'Engineering Graphics & CAD Studio', cred: 3, cat: 'Engineering Science' },
        { code: 'CEL120', name: 'Civil Engineering Workshop Practice', cred: 1.5, cat: 'Laboratory' },
      ]
    },
    s3s4: {
      title: 'Second Year (Semester 3 & 4)',
      desc: 'Core structural mechanics, fluid mechanics, surveying using Total Station, and geotechnical engineering.',
      courses: [
        { code: 'MAT201', name: 'Partial Differential Equations & Numerical Methods', cred: 4, cat: 'Basic Science' },
        { code: 'CET201', name: 'Mechanics of Solids', cred: 4, cat: 'Program Core' },
        { code: 'CET203', name: 'Fluid Mechanics & Hydraulic Machinery', cred: 4, cat: 'Program Core' },
        { code: 'CET205', name: 'Advanced Surveying & Geomatics', cred: 4, cat: 'Program Core' },
        { code: 'CEL201', name: 'Civil Engineering Planning & Drafting Lab', cred: 1.5, cat: 'Laboratory' },
        { code: 'CEL203', name: 'Surveying Field Lab (Total Station)', cred: 1.5, cat: 'Laboratory' },
      ]
    },
    s5s6: {
      title: 'Third Year (Semester 5 & 6)',
      desc: 'Structural analysis, reinforced concrete design, geotechnical testing, transportation engineering, and 10-day Survey Camp.',
      courses: [
        { code: 'CET301', name: 'Structural Analysis I & II', cred: 4, cat: 'Program Core' },
        { code: 'CET303', name: 'Design of Concrete Structures (IS 456)', cred: 4, cat: 'Program Core' },
        { code: 'CET305', name: 'Geotechnical Engineering & Foundation Design', cred: 4, cat: 'Program Core' },
        { code: 'CET307', name: 'Transportation Engineering & Highway Design', cred: 3, cat: 'Program Core' },
        { code: 'CEL301', name: 'Material Testing Lab (1000 kN UTM)', cred: 1.5, cat: 'Laboratory' },
        { code: 'CEL303', name: 'Geotechnical Engineering Lab', cred: 1.5, cat: 'Laboratory' },
        { code: 'CEL305', name: 'Annual 10-Day Intensive Survey Camp', cred: 2, cat: 'Field Camp' },
      ]
    },
    s7s8: {
      title: 'Final Year (Semester 7 & 8)',
      desc: 'Design of steel structures, environmental engineering, BIM workflows, estimation & costing, and year-long Capstone Project.',
      courses: [
        { code: 'CET401', name: 'Design of Steel Structures (IS 800)', cred: 4, cat: 'Program Core' },
        { code: 'CET403', name: 'Environmental Engineering & Pollution Control', cred: 4, cat: 'Program Core' },
        { code: 'CET405', name: 'Building Information Modelling (BIM) Studio', cred: 3, cat: 'Program Core' },
        { code: 'CET41X', name: 'Program Elective (Earthquake Engg / Prestressed Concrete)', cred: 3, cat: 'Elective' },
        { code: 'CED491', name: 'Major Capstone Consultancy Project (Phase 1 & 2)', cred: 8, cat: 'Capstone' },
      ]
    }
  };

  const current = syllabusMap[activeSem];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Title Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B] tracking-tight">
              Syllabus &amp; Curriculum (Scheme 2024)
            </h2>
            <div className="flex-1 h-px bg-[#DFC06A]/40 hidden md:block" />
          </div>
          <button
            onClick={() => alert("Downloading full Civil Engineering Scheme 2024 Curriculum PDF")}
            className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C79628]" />
            <span>Download Scheme PDF</span>
          </button>
        </div>
        <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The autonomous curriculum follows a Choice Based Credit System (CBCS) aligned with the National Education Policy (NEP 2020), integrating advanced structural design, drone photogrammetry, BIM studio courses, and field surveying camps.
        </p>
      </div>

      {/* Semester Switcher Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { id: 's1s2', label: 'Semester 1 & 2', subtitle: 'Year 1: Foundations' },
          { id: 's3s4', label: 'Semester 3 & 4', subtitle: 'Year 2: Core Civil' },
          { id: 's5s6', label: 'Semester 5 & 6', subtitle: 'Year 3: Structural & Soil' },
          { id: 's7s8', label: 'Semester 7 & 8', subtitle: 'Year 4: BIM & Capstone' },
        ].map(s => {
          const isActive = activeSem === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSem(s.id)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#28052B] text-white border-[#28052B] shadow-sm'
                  : 'bg-white border-[#E7D6C1] hover:bg-[#FAF7F2] text-[#28052B]'
              }`}
            >
              <div className={`text-xs font-bold ${isActive ? 'text-[#DFC06A]' : 'text-[#28052B]'}`}>
                {s.label}
              </div>
              <div className="text-[11px] opacity-80 mt-1">{s.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Semester Course Table */}
      <div className="bg-white rounded-3xl border border-[#E7D6C1] shadow-xs overflow-hidden">
        <div className="p-5 sm:p-6 pb-4 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            {current.title}
          </h3>
          <p className="text-xs text-[#7A647F] mt-0.5 font-light">
            {current.desc}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Course Code</th>
                <th className="py-3 px-4 font-semibold">Course Title</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Credits</th>
                <th className="py-3 px-4 font-semibold text-right">Syllabus PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-white">
              {current.courses.map((c, i) => (
                <tr key={i} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#28052B]">{c.code}</td>
                  <td className="py-3 px-4 font-bold text-[#28052B]">{c.name}</td>
                  <td className="py-3 px-4 text-[#4A384F]">{c.cat}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[#C79628]">{c.cred}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => alert(`Downloading syllabus for ${c.code} - ${c.name}`)}
                      className="inline-flex items-center gap-1 text-[#C79628] hover:text-[#28052B] font-semibold cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
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
