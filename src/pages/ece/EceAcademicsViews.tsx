import React, { useState } from 'react';
import {
  GraduationCap, Briefcase, Building2, Handshake, Trophy,
  FileText, CheckCircle2, Download, ExternalLink, BookOpen,
  Award, Sparkles, Cpu, Layers, Library, Compass, Users, MapPin,
  TrendingUp, Lightbulb, Target, Radio, Microchip, Waves,
  CircuitBoard, Wifi, Satellite
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const EceCourseBtechPage: React.FC<{ onOpenApply?: () => void }> = ({ onOpenApply }) => {
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
                B.Tech in Electronics &amp; Communication Engineering
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Sanctioned Intake: 120 Seats (2 Divisions)
            </span>
            <span className="px-3 py-1 rounded-full bg-[#28052B] text-white text-xs font-mono font-bold">
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
          The Bachelor of Technology (B.Tech) program in Electronics &amp; Communication Engineering at Jyothi Engineering College provides an intensive, industry-integrated curriculum that bridges silicon physics, analog/digital VLSI design, embedded microcontrollers, 5G wireless protocols, and machine learning on edge hardware.
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
              <strong className="text-[#28052B] block mb-1">PEO 1: Silicon &amp; Electronic Hardware Competence</strong>
              Graduates will demonstrate technical excellence in analysis, design, simulation, and physical fabrication of electronic circuits, VLSI systems, and embedded firmware.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 2: Modern Telecom &amp; Signal Intelligence</strong>
              Graduates will harness contemporary EDA software, RF testbenches, and DSP algorithms to engineer next-generation wireless, optical, and satellite communication links.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 3: Ethical Innovation &amp; Multidisciplinary Agility</strong>
              Graduates will practice ethical engineering, sustainable electronic lifecycle disposal, and entrepreneurial leadership in semiconductor, automotive, and IoT sectors.
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
              <strong className="text-[#28052B] block mb-1">PSO 1: VLSI Design &amp; Verification</strong>
              Ability to conceptualize, write HDL code (Verilog/VHDL), synthesize, and physically design sub-micron digital and analog integrated circuits using Cadence EDA tools.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 2: Embedded Systems &amp; Edge Robotics</strong>
              Ability to architect embedded hardware prototypes, write low-level RTOS device drivers, and integrate sensor fusion algorithms for automotive and industrial automation.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 3: RF, Antennas &amp; Optical Networks</strong>
              Ability to design high-frequency RF transmission components, planar microstrip antennas, and high-speed optical fiber links adhering to ITU and IEEE standards.
            </div>
          </div>
        </div>
      </div>

      {/* Honours & Minor Specializations */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#28052B] to-[#3B0840] rounded-3xl text-white space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFC06A]">Autonomous Specializations</span>
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
              B.Tech Honours &amp; Minor Tracks
            </h3>
          </div>
          <span className="text-xs text-white/70">Choice Based Credit System (CBCS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light">
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Honours in VLSI &amp; Microelectronics</div>
            <p className="text-white/80">Analog Mixed-Signal IC Design, Low-Power Static Timing Analysis, SystemVerilog UVM Verification, and RISC-V SoC Architecture.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Honours in Embedded Systems &amp; IoT</div>
            <p className="text-white/80">Real-Time Embedded Linux, ARM Cortex-M Architecture, Automotive CAN/LIN Protocols, and TinyML Edge Neural Networks.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Minor in Robotics &amp; Industrial Automation</div>
            <p className="text-white/80">Microcontroller Sensor Actuators, Robot Operating System (ROS), Autonomous Mobile Navigation, and PLC SCADA Automation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page (Placement, Higher Studies, Entrepreneurship) */
export const EceCareerPlacementPage: React.FC = () => {
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Professional Trajectories</span>
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
          Graduates of Electronics &amp; Communication Engineering are hired by elite global semiconductor multinational corporations, automotive electronics leaders, telecommunication service providers, and premier software enterprises.
        </p>
      </div>

      {/* VIEW A: PLACEMENT */}
      {subTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-emerald-700">92.8%</div>
              <div className="text-xs text-[#7A647F] mt-1">Placement Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#C79628]">₹21.5 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Highest Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">₹5.6 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Average Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">45+</div>
              <div className="text-xs text-[#7A647F] mt-1">Core &amp; IT Recruiters</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Top Semiconductor &amp; Core Electronics Recruiters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
              {[
                { name: 'Qualcomm India', type: 'VLSI & Wireless SoC' },
                { name: 'Intel Technology', type: 'Microprocessor Physical Design' },
                { name: 'Texas Instruments', type: 'Analog & Embedded Systems' },
                { name: 'Robert Bosch', type: 'Automotive Embedded Software' },
                { name: 'Tata Elxsi', type: 'Broadcast & Connected Vehicles' },
                { name: 'Continental Automotive', type: 'ADAS & Chassis Electronics' },
                { name: 'VVDN Technologies', type: '5G Telecom & Product Engineering' },
                { name: 'Tessolve Semiconductor', type: 'Silicon Test & ATE' },
                { name: 'Infosys (Specialist / Digital)', type: 'IoT & Cloud Systems' },
                { name: 'TCS Digital', type: 'Embedded Solutions' },
                { name: 'Cognizant', type: 'Systems Software' },
                { name: 'Federal Bank', type: 'IT Officers & Systems' },
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
              Premier Post-Graduate Admissions &amp; GATE Milestones
            </h3>
            <span className="text-xs text-[#C79628] font-bold">IISc • IITs • Global Universities</span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            With solid foundations in electromagnetics, analog circuits, and signals, our scholars regularly qualify for top ranks in GATE EC and secure admissions into prestigious Master’s and Doctoral programs worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { institute: 'IISc Bangalore', course: 'M.Tech in Electronic Systems Engineering (DESE)', student: 'Karthik R. Pillai (GATE EC AIR 74)' },
              { institute: 'IIT Madras', course: 'M.Tech in Microelectronics & VLSI Design', student: 'Vishnu K. Menon (GATE EC AIR 118)' },
              { institute: 'TU Delft, Netherlands', course: 'M.S. in Embedded Systems & Microelectronics', student: 'Rahul S. Warrier (Batch 2017)' },
              { institute: 'Georgia Institute of Technology', course: 'M.S. in Electrical & Computer Engineering', student: 'Divya Lakshmi (Batch 2015)' },
              { institute: 'IIT Bombay', course: 'M.Tech in Electronic Systems', student: 'Sneha M. Nair (GATE EC AIR 215)' },
              { institute: 'RWTH Aachen University, Germany', course: 'M.Sc. in Communications Engineering', student: 'Jerry Joy (Batch 2022)' },
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
              Incubated Hardware &amp; IoT Startups
            </h3>
            <span className="text-xs text-[#C79628] font-bold">Jyothi TBI &amp; MIT FabLab Support</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Microchip className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">AgriSense Systems</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">LoRa Smart Agriculture Sensors</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Solar-powered subterranean soil moisture and nitrogen sensor nodes communicating up to 10km via LoRaWAN gateways for automated drip irrigation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <CircuitBoard className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">VoltEdge Dynamics</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">EV Battery Management Units</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Active cell-balancing Battery Management System (BMS) controllers engineered with thermal runaway early detection for electric two-wheelers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">NanoWave Photonics</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Optical Fiber Biosensors</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Fiber Bragg Grating (FBG) optical interrogators developed for real-time biomedical analyte detection and structural health monitoring.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 3. Facilities Page (Lab & Library) */
export const EceFacilitiesPage: React.FC = () => {
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure &amp; Specialized Studios</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Facilities (Lab &amp; Library)
              </h2>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'lab', label: 'i. Specialized Laboratories' },
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
          World-class experimental facilities including full Cadence University EDA software suites, Texas Instruments embedded hardware studios, optical fiber fusion and OTDR analyzers, and microwave test benches up to 18 GHz.
        </p>
      </div>

      {activeFacility === 'lab' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cadence VLSI Design & Microelectronics Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Microchip className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Cadence VLSI &amp; EDA Design Studio</h4>
                <div className="text-xs text-[#C79628] font-semibold">Custom IC, ASIC &amp; FPGA Verification</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              45 high-end Linux workstations running licensed Cadence University Bundle (Virtuoso Schematic Editor, Spectre RF simulator, Genus synthesis, Innovus place-and-route), Synopsys tools, and Xilinx Zynq-7000 FPGA development boards.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>EDA Suite:</strong> Cadence Virtuoso 6.18, Genus, Innovus, Xilinx Vivado.</div>
              <div>• <strong>Foundry PDKs:</strong> 180nm, 90nm, and 45nm standard CMOS process design kits.</div>
            </div>
          </div>

          {/* Texas Instruments Embedded Systems & IoT Studio */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Texas Instruments Embedded &amp; IoT Studio</h4>
                <div className="text-xs text-[#C79628] font-semibold">ARM Cortex-M, MSP430 &amp; LoRa Systems</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Sponsored by Texas Instruments India. Features MSP430 LaunchPads, CC3200 SimpleLink Wi-Fi kits, STM32 ARM Cortex-M4 development boards, BeagleBone Black, and mixed-domain digital oscilloscopes.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Hardware:</strong> TI MSP430, CC3200, STM32 Nucleo, ESP32, Logic Analyzers.</div>
              <div>• <strong>Specialization:</strong> Real-time FreeRTOS scheduling and IoT cloud telemetry.</div>
            </div>
          </div>

          {/* Microwave, Optical & Antenna Testing Laboratory */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Microwave, Optical &amp; Antenna Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">RF Network Analyzers &amp; Fiber Splicers</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Equipped with Agilent/Keysight Vector Network Analyzers (VNA up to 14 GHz), Spectrum Analyzers, X-band Gunn and Reflex Klystron microwave benches, Optical Time Domain Reflectometers (OTDR), and optical arc fusion splicers.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Key Setups:</strong> S-parameter measurements, antenna radiation pattern plots, fiber attenuation.</div>
              <div>• <strong>Simulation:</strong> CST Microwave Studio and ANSYS HFSS licenses.</div>
            </div>
          </div>

          {/* Electronic Circuits & PCB Prototyping Workshop */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <CircuitBoard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">PCB Fabrication &amp; Prototyping Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">CNC Mechanical Milling &amp; SMD Rework</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Complete automated rapid electronic prototyping suite housing computer-controlled PCB mechanical isolation milling machines, chemical etching tanks, SMD hot-air rework soldering stations, and UV exposure units.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Capability:</strong> Single-sided and double-sided rapid PCB fabrication in-house.</div>
              <div>• <strong>Design Tools:</strong> Autodesk Eagle, KiCad, Altium Designer.</div>
            </div>
          </div>
        </div>
      )}

      {activeFacility === 'library' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Library className="w-6 h-6 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
              Departmental ECE Library &amp; Repositories
            </h3>
          </div>

          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Houses over 4,200 specialized textbook volumes, semiconductor device datasheets, ITU-T telecom recommendations, and online subscriptions to IEEE Xplore, IETE Technical Review, and Springer Lecture Notes in Electrical Engineering.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">4,200+</div>
              <div className="text-[11px] text-[#7A647F]">Hardware &amp; Telecom Volumes</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#C79628]">Full Access</div>
              <div className="text-[11px] text-[#7A647F]">IEEE Xplore &amp; IETE Digital</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">22</div>
              <div className="text-[11px] text-[#7A647F]">Print International Journals</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">650+</div>
              <div className="text-[11px] text-[#7A647F]">B.Tech/M.Tech VLSI Dissertations</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up Page (MOUs) */
export const EceIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      company: 'Texas Instruments India Pvt. Ltd.',
      validity: 'Active (Center of Excellence)',
      scope: 'Establishment of Texas Instruments Embedded Systems & IoT Innovation Center, hardware kit donations, student design contests, and faculty development training.',
      lead: 'Prof. Bindhu K. Rajan (Coordinator)',
    },
    {
      company: 'Cadence Design Systems India',
      validity: 'Active (Cadence University Program)',
      scope: 'Full university bundle licensing for custom IC design, Genus logic synthesis, Innovus place-and-route, and analog mixed-signal Spectre simulation suites.',
      lead: 'Dr. Prajoon P. (Coordinator)',
    },
    {
      company: 'Tata Elxsi Limited',
      validity: 'Active (2022 - 2026)',
      scope: 'Curriculum alignment for automotive embedded systems, priority campus hiring for connected vehicle divisions, and student final-year project sponsorships.',
      lead: 'Dr. Sindhu S. (HOD)',
    },
    {
      company: 'Intel FPGA Academic Program',
      validity: 'Active (Partner Institution)',
      scope: 'Intel Cyclone and MAX FPGA development boards, Quartus Prime EDA software suites, and digital logic synthesis workshop materials.',
      lead: 'Prof. Niveditha P. R. (Coordinator)',
    },
    {
      company: 'Entuple Technologies Pvt. Ltd.',
      validity: 'Active (Training & Research Partner)',
      scope: 'Advanced training in ANSYS HFSS high-frequency antenna simulation, Cadence analog design flows, and faculty sabbatical internships.',
      lead: 'Prof. Ambily Francis (Coordinator)',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Corporate Tech Alliances</span>
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
          Active Memorandums of Understanding with global semiconductor creators (Texas Instruments, Cadence, Intel FPGA) and automotive tier-1 leaders (Tata Elxsi, Entuple) provide licensed EDA software, real silicon development boards, and direct hiring pipelines.
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
export const EceAchievementsPage: React.FC = () => {
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laurels &amp; Hardware Recognition</span>
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
          Celebrating national Texas Instruments design awards, Smart India Hackathon hardware edition wins, IEEE best paper laurels, and funded semiconductor grants.
        </p>
      </div>

      {activeTab === 'student' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'All India 1st Prize - Texas Instruments Innovation Challenge (TIIEC)',
              organization: 'Texas Instruments India & AICTE',
              team: 'Kevin Thomas, Sneha M. Nair & Team',
              desc: 'Engineered an ultra-low power non-invasive hemoglobin estimation sensor using TI MSP430 and multi-wavelength optical PPG, awarded ₹1,50,000 cash grant.',
            },
            {
              title: 'Grand Winners - Smart India Hackathon (SIH) Hardware Edition',
              organization: 'Ministry of Railways & AICTE, New Delhi',
              team: 'Team "RailGuard" - 6 ECE & CSE Scholars',
              desc: 'Built an automated IoT optical track crack detection rover utilizing laser line triangulation and acoustic emission sensors for Indian Railways.',
            },
            {
              title: '1st Place - National IEEE Microwave Antennas Student Symposium',
              organization: 'IEEE Microwave Theory & Technology Society (MTT-S)',
              team: 'Aaron Varghese & Aiswarya Mohan',
              desc: 'Designed a wideband wearable dual-band circular patch antenna operating at 2.4 GHz and 5.8 GHz for medical telemetry applications.',
            },
            {
              title: 'Best B.Tech Engineering Project Award 2024',
              organization: 'Kerala State Council for Science, Technology and Environment (KSCSTE)',
              team: 'Devika Suresh, Akshay Raj & Basil K. Eldho',
              desc: 'Project: "Design and FPGA Implementation of a 32-Bit Pipelined RISC-V Processor with Custom Cryptographic Accelerators" - ₹25,000 state grant.',
            },
          ].map((ach, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  National Hardware Distinction
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
              title: 'Granted Indian Patent for Photonic Crystal Fiber Sensor',
              faculty: 'Dr. Sindhu S. (HOD & Professor)',
              agency: 'Indian Patent Office (Patent No: 398241)',
              desc: 'Patent Granted: "A Surface Plasmon Resonance (SPR) Based Photonic Crystal Fiber Sensor with Gold-Graphene Coating for High-Sensitivity Biomolecule Detection".',
            },
            {
              title: 'DST-SERB Research Grant for Sub-Threshold CMOS VLSI',
              faculty: 'Dr. Prajoon P. (Associate Professor)',
              agency: 'Science and Engineering Research Board (SERB), Govt. of India',
              desc: 'Sanctioned ₹24.5 Lakhs research grant for investigating near-threshold ultra-low-power SRAM cell topologies for biomedical implantable devices.',
            },
            {
              title: 'KTU CERD Grant for 5G Massive MIMO Antenna Systems',
              faculty: 'Dr. Jisha P. Abraham & Prof. Ambily Francis',
              agency: 'APJ Abdul Kalam Technological University',
              desc: 'Sanctioned ₹3.8 Lakhs grant for developing 28 GHz mmWave beam-steerable phased array antennas for high-speed dense urban mobile connectivity.',
            },
            {
              title: 'Best Research Paper Award - IEEE ICETET 2023',
              faculty: 'Prof. Anoop V. (Assistant Professor)',
              agency: 'IEEE Conference on Emerging Technologies',
              desc: 'Paper: "Real-Time Neurological Arrhythmia Classification using Deep Convolutional Neural Networks Implemented on Edge ARM Cortex-M7 Microcontrollers".',
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
export const EceResearchPage: React.FC = () => {
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
            60+ Scopus / SCI Publications
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Faculty research in Electronics &amp; Communication Engineering advances critical technology domains including sub-micron CMOS VLSI circuits, photonic crystal biosensors, 5G/6G millimeter-wave antenna arrays, and real-time biomedical edge AI.
        </p>
      </div>

      {/* Research Thrust Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Sub-Micron VLSI &amp; ASIC Design
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Investigation of FinFET and gate-all-around (GAA) transistor scaling, energy-harvesting power management integrated circuits (PMICs), and RISC-V open-source core tape-out methodologies.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Photonic Crystal &amp; Optical Sensors
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Surface Plasmon Resonance (SPR) refractive index sensing in microstructured optical fibers for non-invasive detection of malaria parasites, blood glucose, and chemical contaminants in groundwater.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            5G mmWave MIMO &amp; Radar Antennas
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Design of reconfigurable intelligent surfaces (RIS), 28 GHz mmWave MIMO phased arrays for high-density mobile base stations, and 77 GHz radar transceivers for autonomous vehicle navigation.
          </p>
        </div>
      </div>

      {/* Hardware Testing & Industrial Consultancy Cell */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Electronic Prototyping &amp; Industrial Consultancy Cell (EPCC)
          </h3>
          <span className="text-xs font-mono font-bold text-emerald-700">₹18+ Lakhs Consultancy Revenue</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#4A384F]">
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Custom PCB Fabrication</strong>
            Double-sided precision PCB routing, isolation milling, solder masking, and SMD component assembly for regional startups and robotics labs.
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">RF &amp; S-Parameter Characterization</strong>
            High-frequency return loss (S11), transmission (S21), and antenna impedance matching analysis up to 14 GHz using calibrated VNA testbenches.
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Embedded Firmware Development</strong>
            Turnkey industrial automation firmware programming on ARM Cortex-M and ESP32 with MQTT/LoRaWAN cloud telemetry integration.
          </div>
        </div>
      </div>
    </div>
  );
};

/* 7. Syllabus and Curriculum Page */
export const EceSyllabusPage: React.FC = () => {
  const semesters = [
    {
      sem: 'Semester I',
      credits: '20 Credits',
      subjects: [
        'Linear Algebra & Calculus',
        'Engineering Physics / Chemistry',
        'Basics of Electrical & Electronics Engineering',
        'Engineering Graphics with CAD',
        'Basic Electrical & Electronics Workshop',
        'Life Skills & Professional Communication',
      ],
    },
    {
      sem: 'Semester II',
      credits: '20 Credits',
      subjects: [
        'Vector Calculus & Differential Equations',
        'Engineering Mechanics',
        'Programming in C for Engineers',
        'Solid State Semiconductor Devices',
        'Electronic Devices & Circuit Simulation Lab',
        'Universal Human Values',
      ],
    },
    {
      sem: 'Semester III',
      credits: '22 Credits',
      subjects: [
        'Partial Differential Equations & Complex Analysis',
        'Network Theory & Circuit Analysis',
        'Analog Integrated Circuits (Op-Amps & PLL)',
        'Logic Circuit Design & Verilog HDL',
        'Analog Circuits Laboratory',
        'Digital Logic & HDL Simulation Lab',
      ],
    },
    {
      sem: 'Semester IV',
      credits: '22 Credits',
      subjects: [
        'Signals and Systems',
        'Analog Communication Systems',
        'Computer Organization & Architecture',
        'Electromagnetic Theory & Waveguides',
        'Signals, Systems & DSP Simulation Lab',
        'Analog Communication Laboratory',
      ],
    },
    {
      sem: 'Semester V',
      credits: '23 Credits',
      subjects: [
        'Digital Signal Processing (DSP)',
        'Digital Communication Techniques',
        'Microcontrollers & Embedded Systems (ARM Cortex)',
        'Professional Elective I (VLSI Design / Optical Communication)',
        'Microcontroller & Embedded Systems Lab',
        'Digital Signal Processing Hardware Lab',
      ],
    },
    {
      sem: 'Semester VI',
      credits: '23 Credits',
      subjects: [
        'VLSI Circuit Design (CMOS Analog & Digital)',
        'Microwave Engineering & Antennas',
        'Control Systems Engineering',
        'Professional Elective II (Embedded Linux / Biomedical Electronics)',
        'Cadence VLSI & IC Design Studio Lab',
        'Microwave & Optical Communication Lab',
      ],
    },
    {
      sem: 'Semester VII',
      credits: '20 Credits',
      subjects: [
        'Wireless & Cellular Communications (5G/6G)',
        'Information Theory & Error Control Coding',
        'Professional Elective III (Automotive Electronics / FPGA Prototyping)',
        'Open Elective I (Interdisciplinary)',
        'Advanced Communication & Networking Lab',
        'Capstone Project Phase I',
      ],
    },
    {
      sem: 'Semester VIII',
      credits: '18 Credits',
      subjects: [
        'Electronic Instrumentation & Sensor Technology',
        'Professional Elective IV (Satellite Communication / Edge AI Hardware)',
        'Open Elective II (Interdisciplinary)',
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
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28052B] text-white text-xs font-bold hover:bg-[#3B0840] transition-all cursor-pointer">
              <Download className="w-3.5 h-3.5" /> Full Scheme PDF
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The autonomous curriculum follows a 165-credit structure adhering to AICTE and IEEE/ACM guidelines, featuring project-based laboratories, hands-on Cadence VLSI simulations, Texas Instruments embedded studios, and Honours/Minor tracks.
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
