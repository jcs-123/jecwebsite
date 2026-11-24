import React, { useState } from 'react';
import {
  GraduationCap, BookOpen, Award, CheckCircle2, Download,
  ExternalLink, Briefcase, Bot, Cpu, Cog, Eye, FileText,
  Search, Layers, Sparkles, Building2, Gauge, Activity,
  Lightbulb, Compass, Star, Radio, ShieldCheck, CircuitBoard
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const MctCourseBtechPage: React.FC = () => {
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
                B.Tech in Mechatronics Engineering
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
          The Bachelor of Technology (B.Tech) program in Mechatronics Engineering at Jyothi Engineering College is an elite multidisciplinary program integrating mechanical engineering, electronics, computer science, and control systems. Designed under autonomous guidelines, the course trains students to engineer intelligent automated systems: 6-DOF industrial articulated robots, autonomous warehouse mobile robots (AMRs), cobots, smart medical devices, and cyber-physical Industry 4.0 production lines.
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
            <div className="text-xl font-bold text-[#28052B]">Tata IIIC &amp; KUKA</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">Robotics Centers</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
            <div className="text-xl font-bold text-[#28052B]">Honours / Minor</div>
            <div className="text-[10px] text-[#7A647F] uppercase tracking-wider font-semibold">AMR &amp; Vision AI</div>
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
              <span><strong>PEO 1:</strong> Apply synergistic principles of mechanics, electronics, and algorithms to design and operate intelligent robotic systems.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PEO 2:</strong> Master industrial PLC programming, electro-pneumatics, and machine vision inspection systems.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PEO 3:</strong> Lead global automation innovations, pursue specialized postgraduate research, and launch clean-tech robotics startups.</span>
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
              <span><strong>PSO 1 (Robotics &amp; Control):</strong> Formulate forward/inverse kinematics, dynamic trajectory planning, and ROS 2 navigation stacks for multi-axis robots.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628] shrink-0 mt-0.5" />
              <span><strong>PSO 2 (Industry 4.0 Automation):</strong> Architect cyber-physical manufacturing systems incorporating smart sensors, PLCs, SCADA, and machine vision.</span>
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
              <strong className="text-[#28052B]">Autonomous Mobile Robots (AMR):</strong> 2D/3D LiDAR SLAM, extended Kalman filter localization, path planning, ROS 2 Nav2.
            </li>
            <li className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/30">
              <strong className="text-[#28052B]">Industrial IoT &amp; Machine Vision:</strong> OpenCV, deep learning object detection, smart optical sorting, OPC-UA digital twins.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page */
export const MctCareerPlacementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'placement' | 'higher-studies' | 'entrepreneurship'>('placement');

  const placements = [
    { company: 'Tata Technologies Limited', role: 'Robotics & Automation Engineer', package: '8.5 LPA', count: '5 Offers' },
    { company: 'ABB Robotics India', role: 'Robotics Application Specialist', package: '10.0 LPA', count: '4 Offers' },
    { company: 'Titan Engineering & Automation (TEAL)', role: 'Automation Systems Designer', package: '7.8 LPA', count: '6 Offers' },
    { company: 'Festo India Private Limited', role: 'Pneumatics & Mechatronics Trainee', package: '7.2 LPA', count: '4 Offers' },
    { company: 'Bosch Mobility Solutions', role: 'Sensorics & Control Engineer', package: '8.2 LPA', count: '5 Offers' },
    { company: 'Cognex Corporation', role: 'Machine Vision Application Engineer', package: '9.0 LPA', count: '3 Offers' },
    { company: 'L&T Technology Services (LTTS)', role: 'Embedded Robotics Analyst', package: '7.0 LPA', count: '6 Offers' },
    { company: 'Quest Global', role: 'Robotics Software Trainee', package: '6.5 LPA', count: '5 Offers' }
  ];

  const higherStudies = [
    { student: 'Joel George', inst: 'ETH Zurich, Switzerland', prog: 'M.Sc in Robotics, Systems and Control', year: '2021' },
    { student: 'Gopika M. Pillai', inst: 'Imperial College London, UK', prog: 'M.Sc & Ph.D in Medical Surgical Robotics', year: '2022' },
    { student: 'Ashwin K. Varma', inst: 'Carnegie Mellon University (CMU), USA', prog: 'M.S in Robotic Systems Development', year: '2023' },
    { student: 'Siddharth Menon', inst: 'TU Delft, Netherlands', prog: 'M.Sc in Systems and Control Engineering', year: '2023' },
    { student: 'Naveen George', inst: 'IIT Madras', prog: 'M.Tech in Robotics & Automation', year: '2024' }
  ];

  const startups = [
    { name: 'BotCraft Robotics Solutions', founder: 'Er. Rahul S. Panicker (Alumnus)', desc: 'Designs intelligent autonomous mobile robots (AMRs) for warehouse e-commerce sorting; incubated at JEC TBI with 25+ live deployments.' },
    { name: 'SmartEye Vision Labs', founder: 'Er. Bibin Mathew (Alumnus)', desc: 'High-speed 3D surface defect inspection systems powered by edge AI cameras for pharmaceutical and automotive packaging.' },
    { name: 'DroneAero Systems', founder: 'Er. Alok Krishna (Alumnus)', desc: 'Precision agricultural multi-spectral drones and autonomous payload delivery hexacopters with RTK-GPS navigation.' }
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
            93.2% Placement &amp; Higher Studies
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
            Higher Studies (ETH Zurich, CMU, Imperial)
          </button>
          <button
            onClick={() => setActiveTab('entrepreneurship')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'entrepreneurship'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Robotics Startups Incubated
          </button>
        </div>
      </div>

      {/* Tab 1: Placements */}
      {activeTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#C79628]">15.0 LPA</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Highest Salary Package</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#28052B]">6.5 LPA</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Average Salary Package</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E7D6C1] shadow-xs text-center">
              <div className="text-2xl font-bold text-[#C79628]">48+ Offers</div>
              <div className="text-xs text-[#4A384F] mt-1 font-semibold">Batch 2024 Core Robotics Offers</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B] pb-3 border-b border-[#E7D6C1]">
              Top Robotics &amp; Industrial Automation Recruiters
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
            Global Master's Degrees in Robotics &amp; AI
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
            Robotics &amp; Vision AI Startups Incubated by Mechatronics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {startups.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <Bot className="w-5 h-5 text-[#C79628]" />
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
export const MctFacilitiesPage: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<'labs' | 'library'>('labs');

  const labs = [
    {
      name: 'Advanced Industrial Robotics & ROS 2 Testbed',
      area: '2,600 Sq. Ft.',
      equipments: 'KUKA KR-6 R900 sixx articulated 6-DOF industrial robot, ABB IRB 120 arm, TurtleBot 4 AMR platforms, 2D/3D Hokuyo LiDAR, teach pendants.',
      desc: 'Hands-on robot kinematics, pick-and-place offline programming, ROS 2 Nav2 navigation, SLAM mapping, and collaborative robot human safety zones.'
    },
    {
      name: 'Festo Electro-Pneumatics & Industry 4.0 Learning Factory',
      area: '2,400 Sq. Ft.',
      equipments: 'Festo modular production system (MPS) stations, electro-pneumatic training benches, Siemens S7-1500 / S7-1200 PLCs, proportional hydraulic valves.',
      desc: 'Automated modular sorting, pneumatic cylinder sequencing, electro-hydraulic proportional control, and cyber-physical digital twin simulation.'
    },
    {
      name: 'Machine Vision & Artificial Intelligence Studio',
      area: '1,800 Sq. Ft.',
      equipments: 'Cognex In-Sight 2000 smart vision sensors, Basler industrial area-scan cameras, NVIDIA Jetson AGX Orin development kits, telecentric lenses, ring illuminators.',
      desc: 'Real-time optical character recognition (OCR), barcode decoding, 2D surface defect detection, and deep learning YOLO model deployment on edge devices.'
    },
    {
      name: 'Sensors, Actuators & Embedded Prototyping Lab',
      area: '2,000 Sq. Ft.',
      equipments: 'STM32 Nucleo ARM Cortex-M4 boards, Texas Instruments MSP430 kits, rotary optical encoders, LVDTs, strain gauges, ultrasonic sensors, Keysight 4-channel DSOs.',
      desc: 'Analog/digital signal conditioning, sensor calibration curves, PID motor speed control, and FreeRTOS multi-threaded robotics firmware.'
    },
    {
      name: 'Tata Technologies IIIC Innovation Center',
      area: '3,500 Sq. Ft.',
      equipments: 'Advanced manufacturing machining cell, industrial robotic welding simulator, multi-axis CNC trainer, product life-cycle management (PLM) software suite.',
      desc: 'Comprehensive automotive body-in-white (BIW) robotics simulation, digital factory floor layouts, and certified Industry 4.0 competencies.'
    },
    {
      name: 'Drone Flight Arena & Autonomous Navigation Bay',
      area: '1,500 Sq. Ft. Enclosed Flight Cage',
      equipments: 'Quadcopter and hexacopter test airframes, Pixhawk 6C flight controllers, optical flow positioning cameras, motor thrust dynamometer rigs.',
      desc: 'Autonomous indoor hovering, obstacle avoidance using ultrasonic/LiDAR sensors, and waypoint navigation without GPS.'
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure &amp; Robotics Labs</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Facilities
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Over ₹4.5 Crore Robotics Infrastructure
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
            Specialized Robotics &amp; Automation Labs (6 Facilities)
          </button>
          <button
            onClick={() => setActiveFacility('library')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFacility === 'library'
                ? 'bg-[#28052B] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-[#28052B] hover:bg-[#28052B]/10 border border-[#DFC06A]/30'
            }`}
          >
            Departmental Library &amp; IEEE RAS Portal
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
                <Bot className="w-5 h-5 text-[#C79628]" />
              </div>

              <p className="text-xs text-[#4A384F] leading-relaxed font-light">
                {lab.desc}
              </p>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-xs text-[#28052B] space-y-1">
                <div className="text-[10px] font-bold text-[#C79628] uppercase tracking-wider">Key Test Equipment &amp; Rigs</div>
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
              Mechatronics Departmental Library &amp; IEEE RAS Digital Knowledge Repository
            </h3>
            <span className="text-xs text-[#7A647F] font-mono">Location: Mechatronics Block, Level 2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">2,200+</div>
              <div className="text-xs text-[#4A384F] mt-1">Specialized Robotics Handbooks</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">IEEE RAS / ACM</div>
              <div className="text-xs text-[#4A384F] mt-1">Digital Journal Subscriptions</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DFC06A]/30 text-center">
              <div className="text-2xl font-bold text-[#28052B]">16 Workstations</div>
              <div className="text-xs text-[#4A384F] mt-1">ROS 2, MATLAB, TIA Portal &amp; CoppeliaSim</div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-[#28052B] uppercase tracking-wider">Key Resources Available:</h4>
            <ul className="space-y-2 text-xs text-[#4A384F]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Complete IEEE Transactions on Robotics, IEEE/ASME Transactions on Mechatronics, and Autonomous Robots journals.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Standard Reference Handbooks: Springer Handbook of Robotics (Siciliano &amp; Khatib), Craig Introduction to Robotics.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                ISO Robot Safety Standards (ISO 10218-1/2, ISO/TS 15066 for Collaborative Robot operations).
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C79628]" />
                Comprehensive repository of B.Tech Capstone Project dissertations, e-Yantra competition codebases, and hardware schematics.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up (MOUs) Page */
export const MctIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      partner: 'Tata Technologies Limited (Tata IIIC Center)',
      validity: '2023 – 2028 (5 Years)',
      scope: 'Center of Excellence in Industrial Robotics, digital manufacturing simulation, multi-axis welding automation, co-op placements.',
      outcomes: 'Over 140 students certified annually; 5 direct campus placements in advanced manufacturing R&D.'
    },
    {
      partner: 'Festo India Private Limited / Festo Didactic',
      validity: '2022 – 2027 (5 Years)',
      scope: 'Joint certification on Modular Production Systems (MPS), electro-pneumatics, Industry 4.0 smart sensor islands, faculty enablement.',
      outcomes: '75 students certified in Festo Level 1 & 2 Industrial Automation.'
    },
    {
      partner: 'ABB Robotics India',
      validity: '2023 – 2026 (3 Years)',
      scope: 'Curriculum alignment for articulated robotic arm programming using RobotStudio, summer internships in robotic system integration.',
      outcomes: '4 students selected for core robotic automation roles.'
    },
    {
      partner: 'Titan Engineering & Automation Limited (TEAL)',
      validity: '2022 – 2025 (3 Years)',
      scope: 'Student capstones in high-speed cam-driven assembly machines, vision-guided robotics, automated testing rigs.',
      outcomes: '6 direct campus recruitments and 12 annual internship opportunities.'
    },
    {
      partner: 'FANUC India Private Limited',
      validity: '2024 – 2027 (3 Years)',
      scope: 'FANUC Certified Robot Operator training, robotic CNC loading/unloading cells, collaborative robot safety protocols.',
      outcomes: '50 students trained on FANUC ROBOGUIDE simulation.'
    },
    {
      partner: 'Cognex Machine Vision Solutions',
      validity: '2021 – 2026 (5 Years)',
      scope: 'Donation of smart vision sensors, industrial camera test rigs, training on In-Sight Explorer software and deep learning inspection.',
      outcomes: 'Conducted 6 industrial vision consultancy audits for packaging industries in Kerala.'
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
          Collaborations with world-renowned automation pioneers such as Tata Technologies, Festo Germany, ABB, TEAL, and FANUC empower our mechatronics students with real-world industrial robot programming, machine vision, and smart factory execution competencies.
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
export const MctAchievementsPage: React.FC = () => {
  const [tab, setTab] = useState<'student' | 'staff'>('student');

  const studentAchievements = [
    {
      title: 'e-Yantra National Robotics Competition (IIT Bombay) - All India 1st Prize',
      event: 'MHRD / e-Yantra Robotics Challenge, IIT Bombay',
      team: 'Team "RoboJec" (4 Mechatronics Students)',
      desc: 'Developed an autonomous swarm mobile robotics system for real-time agricultural harvest sorting using image classification and ROS communication, winning ₹1,00,000 cash award.'
    },
    {
      title: 'Smart India Hackathon (SIH 2023) - Hardware Edition Champions',
      event: 'Ministry of Heavy Industries & AICTE',
      team: 'MechaVision Innovators',
      desc: 'Engineered an edge AI-based automated optical inspection (AOI) sorting mechanism for micro-electronic surface mounts with sub-millimeter defect detection.'
    },
    {
      title: 'Robocon India - Best Autonomous Navigation Robot Award',
      event: 'Doordarshan & Asia-Pacific Broadcasting Union (ABU) Robocon',
      team: 'Team Mechatronix',
      desc: 'Fabricated dual autonomous robots featuring holonomic omni-directional wheels, optical odometry, and pneumatic ball launcher mechanism with 98% target accuracy.'
    },
    {
      title: 'IEEE RAS Student Humanitarian Project Grant ($2,500)',
      event: 'IEEE Robotics and Automation Society Global',
      team: 'Abhijith S. Nair & Anagha K. Menon',
      desc: 'Secured international grant to prototype a low-cost robotic myoelectric prosthetic hand for amputees in rural rehabilitation clinics.'
    }
  ];

  const staffAchievements = [
    {
      title: 'Indian Patent Granted: Compliant Soft Robotic Gripper for Fragile Agricultural Produce',
      inventor: 'Dr. Jose P. Therattil & Prof. Melvinraj C. R.',
      org: 'Patent Office, Government of India (Patent No. 451832)',
      desc: 'A patented pneumatically actuated elastomeric soft gripper capable of harvesting delicate fruits and berries without bruising, utilizing variable stiffness silicone chambers.'
    },
    {
      title: 'DST-SERB Core Research Grant of ₹31.8 Lakhs',
      inventor: 'Dr. Jose P. Therattil',
      org: 'Science and Engineering Research Board, Govt. of India',
      desc: 'Sanctioned research grant for "Development of Cable-Driven Parallel Robotic Rehabilitation System for Lower Limb Post-Stroke Gait Training".'
    },
    {
      title: 'Best Mechatronics Researcher Award 2023',
      inventor: 'Dr. Praveen N.',
      org: 'APJ Abdul Kalam Technological University (KTU)',
      desc: 'Honored for pioneering industrial automation consultancies and authoring 25+ Scopus-indexed papers in cyber-physical digital twin architectures.'
    },
    {
      title: 'AICTE Research Promotion Scheme (RPS) Grant of ₹17.2 Lakhs',
      inventor: 'Prof. Melvinraj C. R.',
      org: 'All India Council for Technical Education, New Delhi',
      desc: 'Funding for establishing an "Industrial Cobot Human-Machine Safety Testbed with Computer Vision Predictive Collision Avoidance".'
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
            e-Yantra National Champions • Patents • Grants
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
            Student Achievements &amp; Hackathons
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
export const MctResearchPage: React.FC = () => {
  const researchDomains = [
    {
      title: 'Autonomous Mobile Robots (AMR) & Multi-Agent SLAM',
      lead: 'Prof. Melvinraj C. R. & Dr. Jose P. Therattil',
      funding: 'Funded by AICTE & Maker Village (₹28 Lakhs Total)',
      highlights: 'Focuses on cooperative 2D/3D LiDAR SLAM, dynamic obstacle avoidance in crowded warehouse logistics, and ROS 2 Nav2 decentralized path planning algorithms.'
    },
    {
      title: 'Rehabilitation Robotics & Bio-Mechatronic Exoskeletons',
      lead: 'Dr. Jose P. Therattil',
      funding: 'DST-SERB Core Grant (₹31.8 Lakhs)',
      highlights: 'Design of cable-driven lower-limb gait trainers, electromyography (sEMG) intention decoding, and compliant pneumatic artificial muscles (PAM) for elderly mobility assistance.'
    },
    {
      title: 'Machine Vision Inspection & Edge AI Surface Metrology',
      lead: 'Prof. Alwin Poulose & Dr. Praveen N.',
      funding: 'Industry Sponsored by Cognex & TEAL',
      highlights: 'Deploying sub-pixel edge detection, photometric stereo 3D reconstruction, and quantized lightweight deep learning CNNs for real-time assembly line validation.'
    },
    {
      title: 'Digital Twin Cyber-Physical Systems for Industry 4.0',
      lead: 'Dr. Praveen N. & Prof. Sreekanth M.',
      funding: 'Supported by Tata Technologies IIIC Hub',
      highlights: 'Creating virtual physics-based real-time simulations of robotic cells, predictive maintenance via vibration anomaly models, and OPC-UA cloud synchronization.'
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
            90+ Scopus/SCI Indexed Papers
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of Mechatronics Engineering at Jyothi conducts pioneering research in autonomous warehouse robots, rehabilitative medical exoskeletons, edge AI machine vision, and digital twin manufacturing.
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
export const MctSyllabusPage: React.FC = () => {
  const [selectedSem, setSelectedSem] = useState<number>(1);

  const semesterData: Record<number, Array<{ code: string; title: string; credits: number; type: string }>> = {
    1: [
      { code: 'MA101', title: 'Calculus and Linear Algebra', credits: 4, type: 'Basic Science' },
      { code: 'PH101', title: 'Engineering Physics (Mechanics & Quantum Optics)', credits: 4, type: 'Basic Science' },
      { code: 'MR101', title: 'Introduction to Mechatronics & Robotics', credits: 3, type: 'Engineering Science' },
      { code: 'ME102', title: 'Engineering Graphics & Computer Aided Drawing', credits: 3, type: 'Engineering Science' },
      { code: 'MR103', title: 'Basic Mechatronics & Wiring Practice Lab', credits: 1.5, type: 'Laboratory' }
    ],
    2: [
      { code: 'MA102', title: 'Differential Equations and Numerical Analysis', credits: 4, type: 'Basic Science' },
      { code: 'CH101', title: 'Engineering Chemistry & Materials Science', credits: 4, type: 'Basic Science' },
      { code: 'CS102', title: 'Programming for Mechatronics (C++ & Python)', credits: 3, type: 'Engineering Science' },
      { code: 'EE101', title: 'Basics of Electrical & Electronics Engineering', credits: 3, type: 'Engineering Science' },
      { code: 'MR104', title: 'CAD Modeling & Prototyping Workshop', credits: 1.5, type: 'Laboratory' }
    ],
    3: [
      { code: 'MR201', title: 'Mechanics of Solids and Machine Kinematics', credits: 4, type: 'Program Core' },
      { code: 'MR202', title: 'Analog and Digital Electronic Circuits', credits: 4, type: 'Program Core' },
      { code: 'MR203', title: 'Sensors, Actuators & Signal Conditioning', credits: 3, type: 'Program Core' },
      { code: 'MR205', title: 'Microprocessors and Embedded Systems', credits: 3, type: 'Program Core' },
      { code: 'MR207', title: 'Sensors and Actuators Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'MR209', title: 'Electronics & Microcontroller Laboratory', credits: 1.5, type: 'Laboratory' }
    ],
    4: [
      { code: 'MR204', title: 'Control Systems Engineering', credits: 4, type: 'Program Core' },
      { code: 'MR206', title: 'Industrial Pneumatics and Electro-Hydraulics', credits: 4, type: 'Program Core' },
      { code: 'MR208', title: 'Manufacturing Technology & CNC Machining', credits: 3, type: 'Program Core' },
      { code: 'MA202', title: 'Probability, Random Processes & Optimization', credits: 3, type: 'Basic Science' },
      { code: 'MR210', title: 'Fluid Power and Pneumatics Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'MR212', title: 'Control Systems Simulation Laboratory', credits: 1.5, type: 'Laboratory' }
    ],
    5: [
      { code: 'MR301', title: 'Industrial Robotics & Robot Kinematics', credits: 4, type: 'Program Core' },
      { code: 'MR302', title: 'Programmable Logic Controllers (PLC) & SCADA', credits: 4, type: 'Program Core' },
      { code: 'MR303', title: 'Embedded RTOS & IoT for Cybernetics', credits: 3, type: 'Program Core' },
      { code: 'MRE01', title: 'Professional Elective I (Robot Operating System - ROS 2 / AMR)', credits: 3, type: 'Elective' },
      { code: 'MR305', title: 'Industrial Robotics & ROS 2 Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'MR307', title: 'PLC and Industrial Automation Laboratory', credits: 1.5, type: 'Laboratory' }
    ],
    6: [
      { code: 'MR304', title: 'Machine Vision and Digital Image Processing', credits: 4, type: 'Program Core' },
      { code: 'MR306', title: 'Design of Mechatronic Systems & MEMS', credits: 4, type: 'Program Core' },
      { code: 'MR308', title: 'Power Electronics and Electric Drives', credits: 3, type: 'Program Core' },
      { code: 'MRE02', title: 'Professional Elective II (Collaborative Robots / Drone Tech)', credits: 3, type: 'Elective' },
      { code: 'MR310', title: 'Machine Vision & AI Laboratory', credits: 1.5, type: 'Laboratory' },
      { code: 'MR312', title: 'Mini Project & Mechatronic Prototype Fab', credits: 2, type: 'Project' }
    ],
    7: [
      { code: 'MR401', title: 'Industry 4.0, Digital Twin & Industrial IoT', credits: 3, type: 'Program Core' },
      { code: 'MR402', title: 'Artificial Intelligence & Reinforcement Learning in Robotics', credits: 3, type: 'Program Core' },
      { code: 'MRE03', title: 'Professional Elective III (Medical Robotics / Micro-Robots)', credits: 3, type: 'Elective' },
      { code: 'OE001', title: 'Open Elective (Smart Sensors for Smart Cities)', credits: 3, type: 'Open Elective' },
      { code: 'MR405', title: 'Tata IIIC Advanced Robotics & CIM Lab', credits: 1.5, type: 'Laboratory' },
      { code: 'MR407', title: 'Major Project Phase I', credits: 3, type: 'Project' }
    ],
    8: [
      { code: 'MR404', title: 'Autonomous Navigation, SLAM & Motion Planning', credits: 3, type: 'Program Core' },
      { code: 'MRE04', title: 'Professional Elective IV (Bio-Mechatronics / Exoskeletons)', credits: 3, type: 'Elective' },
      { code: 'OE002', title: 'Open Elective (Robotic Automation in Healthcare)', credits: 3, type: 'Open Elective' },
      { code: 'MR410', title: 'Major Project Phase II & Autonomous Robot Defense', credits: 6, type: 'Project' }
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
          The autonomous curriculum harmonizes multi-domain competencies: mechanical mechanism design, electronic embedded boards, PLC ladder programming, machine vision, and ROS 2 robotics. Backed by 30+ hands-on lab courses across all 8 semesters, the program ensures students master industrial robotics.
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
