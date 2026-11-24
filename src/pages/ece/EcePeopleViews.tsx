import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, Cpu, Radio,
  Microchip, Waves, CircuitBoard
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page */
export const EceBOSPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Statutory Academic Body</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Board of Studies (BOS)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            UGC Autonomous Board
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Board of Studies (BOS) for Electronics &amp; Communication Engineering is the statutory academic authority under UGC Autonomous Regulations. The board curates the 4-year B.Tech and M.Tech ECE curricula, benchmarking against IEEE/ACM guidelines, ABET criteria, and cutting-edge semiconductor industry standards including Sub-micron VLSI Design, Edge AI Embedded Systems, 5G/6G Wireless Networks, and Quantum Photonics.
        </p>
      </div>

      {/* BOS Committee Table */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            BOS Committee Members
          </h3>
          <span className="text-xs text-[#7A647F] font-medium">Tenure: 2024–2027</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Sl. No.</th>
                <th className="py-3 px-4 font-semibold">Member Name</th>
                <th className="py-3 px-4 font-semibold">Designation &amp; Institution</th>
                <th className="py-3 px-4 font-semibold">Role in BOS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">1</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Sindhu S.</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor &amp; Head, Dept. of ECE, Jyothi Engineering College</td>
                <td className="py-3 px-4 font-bold text-[#C79628]">Chairman</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">2</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. B. Yamuna</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor in ECE, Government Engineering College, Thrissur</td>
                <td className="py-3 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">3</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Deepthi P. P.</td>
                <td className="py-3 px-4 text-[#4A384F]">Professor in ECE, National Institute of Technology Calicut</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Communication &amp; Coding)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">4</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Subrahmanyam Mula</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in Electrical Engineering, IIT Palakkad</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (VLSI &amp; Embedded Systems)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">5</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Mathew Abraham</td>
                <td className="py-3 px-4 text-[#4A384F]">Senior Director of Hardware Engineering, Qualcomm India</td>
                <td className="py-3 px-4 text-[#4A384F]">Industry Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">6</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Er. Vishnu K. Menon</td>
                <td className="py-3 px-4 text-[#4A384F]">Principal ASIC Verification Engineer, Texas Instruments (Alumnus)</td>
                <td className="py-3 px-4 text-[#4A384F]">Meritorious Alumnus Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">7</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Prajoon P.</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in ECE, JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Internal Member (Academics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">8</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Prof. Bindhu K. Rajan</td>
                <td className="py-3 px-4 text-[#4A384F]">Assistant Professor in ECE, JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Internal Member (Member Secretary)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Responsibilities & Resolutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#C79628]" />
            Key Mandates of ECE BOS
          </h4>
          <ul className="text-xs text-[#4A384F] space-y-2 leading-relaxed">
            <li>• Formulating and updating the 165-credit Autonomous CBCS curriculum for B.Tech ECE.</li>
            <li>• Structuring industry-aligned Honours tracks in VLSI Design and Embedded Systems with IoT.</li>
            <li>• Integrating Cadence EDA suites, Synopsys tools, and ARM Cortex/RISC-V design studios into laboratory rubrics.</li>
            <li>• Appointing external examiners from premier institutes like IISc, IITs, NITs, and semiconductor leaders.</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C79628]" />
            Recent BOS Meeting Minutes
          </h4>
          <div className="space-y-2">
            {[
              { title: 'BOS Meeting V Minutes - Scheme 2024 RISC-V & Edge AI Integration', date: 'July 22, 2024' },
              { title: 'BOS Meeting IV Minutes - Cadence Custom IC Design Flow Approval', date: 'January 15, 2024' },
              { title: 'BOS Meeting III Minutes - Optical Communication & 5G MIMO Syllabus', date: 'June 12, 2023' },
            ].map((min, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs">
                <div>
                  <div className="font-bold text-[#28052B]">{min.title}</div>
                  <div className="text-[10px] text-[#7A647F]">{min.date}</div>
                </div>
                <button className="flex items-center gap-1 text-[#28052B] hover:text-[#C79628] font-bold text-xs cursor-pointer">
                  <Download className="w-3.5 h-3.5" /> PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Department Advisory Board (DAB) Page */
export const EceAdvisoryBoardPage: React.FC = () => {
  const advisors = [
    {
      name: 'Dr. M. V. Rajesh',
      designation: 'Professor & Head of Electronics, Model Engineering College & Chair, IEEE Kochi',
      affiliation: 'IEEE Signal Processing & Communication Society',
      contribution: 'Strategic mentoring on IEEE student branch technical colloquiums, DSP curriculum calibration, and signal processing hackathons.',
    },
    {
      name: 'Er. Sreekanth S.',
      designation: 'Director of SoC Verification, Intel Technology India Pvt. Ltd.',
      affiliation: 'Semiconductor SoC Architecture & Verification',
      contribution: 'Guiding SystemVerilog, UVM verification methodologies, and ASIC physical design flow integration in postgraduate and B.Tech studios.',
    },
    {
      name: 'Er. C. P. Saseendran',
      designation: 'Deputy Director (Retd.), ISRO Satellite Centre (URSC) / VSSC',
      affiliation: 'Satellite Communication & Avionics Instrumentation',
      contribution: 'Mentoring on space telemetry protocols, radiation-hardened electronics, RF antenna design, and student satellite initiatives.',
    },
    {
      name: 'Dr. Babita Roslind Jose',
      designation: 'Associate Professor, School of Engineering, CUSAT',
      affiliation: 'Low-Power VLSI & Biomedical Signal Processing',
      contribution: 'Advising on funded research grant formulations with DST-SERB, MeitY chip-to-startup schemes, and biomedical sensing.',
    },
    {
      name: 'Er. George Joseph',
      designation: 'Vice President - Embedded Systems, Tata Elxsi',
      affiliation: 'Automotive Embedded Systems & Autonomous Vehicles',
      contribution: 'Directing AUTOSAR compliance courses, ADAS sensor fusion laboratories, and campus-to-automotive corporate hiring.',
    },
    {
      name: 'Er. Biju N. S.',
      designation: 'Engineering Manager, Texas Instruments India',
      affiliation: 'Analog Mixed-Signal ICs & Power Management',
      contribution: 'Facilitating Texas Instruments Innovation Lab hardware grants, analog design contests, and microcontroller workshops.',
    },
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Department Governance</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Advisory Board (DAB)
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Strategic Industry Council
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department Advisory Board (DAB) brings together senior ASIC directors from Intel and Qualcomm, ISRO satellite scientists, automotive embedded executives from Tata Elxsi, and premier academic researchers to align curriculum and labs with India's Semiconductor Mission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisors.map((adv, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                  {adv.name}
                </h4>
                <div className="text-xs font-semibold text-[#C79628] mt-0.5">
                  {adv.designation}
                </div>
                <div className="text-[11px] text-[#7A647F]">{adv.affiliation}</div>
              </div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {adv.contribution}
              </p>
            </div>
            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E7D6C1] text-[10px] font-semibold text-[#28052B]">
                <CheckCircle2 className="w-3 h-3 text-[#C79628]" /> Strategic Mentor
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* DAB Strategic Roadmap */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-[#28052B] to-[#3B0840] rounded-3xl text-white space-y-4">
        <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#DFC06A]">
          Semiconductor &amp; Telecom Strategic Agenda
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/80 font-light">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">India Semiconductor Mission (ISM)</div>
            <p>Participation in C2S (Chips to Startup) programs, tape-out of student ASIC designs through SCL Chandigarh foundry.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">5G/6G &amp; RF Testbeds</div>
            <p>Expanding the Microwave &amp; Antenna lab with Vector Network Analyzers (VNA) and software-defined radio (SDR) pods.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Automotive Embedded &amp; EV Tech</div>
            <p>Developing specialized modules in Battery Management Systems (BMS), CAN bus networks, and AUTOSAR architecture.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. Faculty Members Page */
export const EceFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const facultyData = [
    {
      name: 'Dr. Sindhu S.',
      role: 'Professor & Head of Department',
      qualification: 'Ph.D. (Optoelectronics & Fiber Optics), M.Tech (ECE)',
      discipline: 'communication',
      disciplineLabel: 'Communication & Photonics',
      experience: '22 Years Exp.',
      specialization: 'Optical Fiber Sensors, Photonic Crystal Fibers, DWDM Communication, Non-linear Optics',
      email: 'sindhus@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 510',
    },
    {
      name: 'Dr. Prajoon P.',
      role: 'Associate Professor',
      qualification: 'Ph.D. (VLSI Design), M.Tech (VLSI & Embedded Systems)',
      discipline: 'vlsi',
      disciplineLabel: 'VLSI & Microelectronics',
      experience: '16 Years Exp.',
      specialization: 'Low-Power CMOS Digital Design, FinFET Architectures, ASIC Design Flow, System-on-Chip (SoC)',
      email: 'prajoonp@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 511',
    },
    {
      name: 'Dr. Jisha P. Abraham',
      role: 'Associate Professor',
      qualification: 'Ph.D. (Wireless Communication), M.Tech (ECE)',
      discipline: 'communication',
      disciplineLabel: 'Communication & Photonics',
      experience: '15 Years Exp.',
      specialization: 'MIMO Wireless Systems, 5G Beamforming, Cognitive Radio Networks, Cooperative Communications',
      email: 'jishapabraham@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 512',
    },
    {
      name: 'Prof. Bindhu K. Rajan',
      role: 'Assistant Professor & Member Secretary BOS',
      qualification: 'M.Tech (Embedded Systems), (Ph.D. pursuing)',
      discipline: 'embedded',
      disciplineLabel: 'Embedded Systems & IoT',
      experience: '13 Years Exp.',
      specialization: 'ARM Cortex Architectures, Real-Time Operating Systems (RTOS), Automotive CAN Protocols, Edge IoT',
      email: 'bindhukrajan@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 513',
    },
    {
      name: 'Prof. Anoop V.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Signal Processing)',
      discipline: 'signal',
      disciplineLabel: 'Signal Processing & AI',
      experience: '11 Years Exp.',
      specialization: 'Biomedical Signal Processing, Wavelet Transforms, Deep Learning for ECG/EEG Classification',
      email: 'anoopv@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 514',
    },
    {
      name: 'Prof. Niveditha P. R.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (VLSI & Embedded Systems)',
      discipline: 'vlsi',
      disciplineLabel: 'VLSI & Microelectronics',
      experience: '9 Years Exp.',
      specialization: 'FPGA Prototyping, Verilog HDL, Static Timing Analysis (STA), Cadence Virtuoso Custom IC',
      email: 'nivedithapr@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 515',
    },
    {
      name: 'Prof. Ponmani Raja M.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Applied Electronics)',
      discipline: 'embedded',
      disciplineLabel: 'Embedded Systems & IoT',
      experience: '10 Years Exp.',
      specialization: 'Robotics Control Systems, Sensor Interfacing, LoRaWAN IoT Networks, Microcontroller Programming',
      email: 'ponmaniraja@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 516',
    },
    {
      name: 'Prof. Ambily Francis',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Microwave & TV Engineering)',
      discipline: 'rf',
      disciplineLabel: 'Microwave & RF Engineering',
      experience: '8 Years Exp.',
      specialization: 'Microstrip Patch Antennas, RF Filter Design, Metamaterials, Microwave Integrated Circuits (MIC)',
      email: 'ambilyfrancis@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 517',
    },
    {
      name: 'Prof. Ragesh G. K.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Communication Engineering & Signal Processing)',
      discipline: 'signal',
      disciplineLabel: 'Signal Processing & AI',
      experience: '8 Years Exp.',
      specialization: 'Computer Vision, Image Super-Resolution, Speech Enhancement, Neural Audio Synthesis',
      email: 'rageshgk@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 518',
    },
    {
      name: 'Prof. Soumya C.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Electronic Systems)',
      discipline: 'vlsi',
      disciplineLabel: 'VLSI & Microelectronics',
      experience: '7 Years Exp.',
      specialization: 'Analog CMOS Circuits, Operational Transconductance Amplifiers (OTA), Cadence Spectre Simulations',
      email: 'soumyac@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 519',
    },
  ];

  const filteredFaculty = facultyData.filter(f => {
    const matchesFilter = filter === 'all' || f.discipline === filter;
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
                          f.specialization.toLowerCase().includes(search.toLowerCase()) ||
                          f.role.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Academic Directory</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Faculty Members
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            20 Faculty Members
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: 'all', label: 'All Specializations' },
              { id: 'vlsi', label: 'VLSI & Microelectronics' },
              { id: 'embedded', label: 'Embedded Systems & IoT' },
              { id: 'communication', label: 'Communication & Photonics' },
              { id: 'signal', label: 'Signal Processing & AI' },
              { id: 'rf', label: 'Microwave & RF' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer font-medium ${
                  filter === tab.id
                    ? 'bg-[#28052B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#7A647F]" />
            <input
              type="text"
              placeholder="Search faculty or specialization..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[#E7D6C1] bg-[#FAF7F2] text-[#28052B] focus:outline-none focus:border-[#C79628]"
            />
          </div>
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((f, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-base shadow-sm">
                  {f.name.split(' ').slice(1).map(n => n[0]).join('') || 'EC'}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  {f.experience}
                </span>
              </div>

              <div>
                <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                  {f.name}
                </h4>
                <div className="text-xs font-semibold text-[#C79628]">{f.role}</div>
                <div className="text-[11px] text-[#7A647F] mt-0.5">{f.qualification}</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs space-y-1">
                <div className="font-bold text-[#28052B]">{f.disciplineLabel}</div>
                <p className="text-[11px] text-[#4A384F] font-light leading-relaxed">
                  <strong>Specialization:</strong> {f.specialization}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7D6C1] text-xs space-y-1.5 text-[#4A384F]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                <span className="truncate text-[11px]">{f.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C79628] shrink-0" />
                <span className="text-[11px]">{f.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Non Teaching Staff Page */
export const EceNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Shaju P. O.',
      designation: 'Senior Technical Officer (VLSI & EDA)',
      lab: 'Cadence VLSI Design & Microelectronics Laboratory',
      qualification: 'Diploma in Electronics Engineering, Cadence Certified Specialist',
      experience: '18 Years Experience',
      responsibilities: 'Administering Cadence Virtuoso custom IC, Genus synthesis, Innovus place-and-route licenses, and Xilinx Vivado FPGA suites.',
    },
    {
      name: 'Mr. Manoj Kumar T.',
      designation: 'Hardware Specialist & Lab Instructor',
      lab: 'Texas Instruments Embedded Systems & IoT Studio',
      qualification: 'B.Sc. Electronics, ARM Certified Developer',
      experience: '15 Years Experience',
      responsibilities: 'Maintenance and issuance of Texas Instruments MSP430, CC3200 SimpleLink Wi-Fi LaunchPads, BeagleBone Black, and oscilloscopes.',
    },
    {
      name: 'Ms. Latha K. V.',
      designation: 'Trade Instructor',
      lab: 'Microwave, Optical & Antenna Testing Laboratory',
      qualification: 'Diploma in Electronics & Communication',
      experience: '14 Years Experience',
      responsibilities: 'Operating Agilent Vector Network Analyzers (VNA), optical power meters, Gunn oscillator testbenches, and fiber fusion splicers.',
    },
    {
      name: 'Mr. Sijo Joseph',
      designation: 'Technical Assistant (PCB & Prototyping)',
      lab: 'Electronic Circuits & PCB Fabrication Workshop',
      qualification: 'ITI Electronic Mechanic, NCVT Certified',
      experience: '12 Years Experience',
      responsibilities: 'Managing CNC PCB mechanical milling machines, chemical etching baths, SMD rework soldering stations, and function generators.',
    },
    {
      name: 'Ms. Bindu P. R.',
      designation: 'Lab Assistant',
      lab: 'Digital Signal Processing & Microcontroller Lab',
      qualification: 'Diploma in Electronics & Avionics',
      experience: '11 Years Experience',
      responsibilities: 'Calibrating Texas Instruments TMS320C6713 DSP starter kits, Keil uVision simulators, and mixed-domain digital oscilloscopes.',
    },
    {
      name: 'Mr. Davis V. L.',
      designation: 'Department Office Secretary',
      lab: 'ECE Department Secretariat',
      qualification: 'B.Com, PGDCA',
      experience: '12 Years Experience',
      responsibilities: 'Student records management, autonomous examination logistics, laboratory inventory maintenance, and communications.',
    },
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laboratory &amp; Technical Support</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Non Teaching Staff
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            6 Dedicated Professionals
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our certified engineers and laboratory instructors maintain complex multi-GHz RF analyzers, optical fusion benches, high-tier Cadence EDA servers, and FPGA prototyping hardware for academic and research testing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((st, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  {st.experience}
                </span>
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {st.name}
              </h4>
              <div className="text-xs font-semibold text-[#C79628]">{st.designation}</div>
              <div className="text-[11px] text-[#7A647F] font-medium">{st.lab}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {st.responsibilities}
              </p>
            </div>
            <div className="pt-2 text-[10.5px] font-mono text-[#7A647F] bg-[#FAF7F2] p-2 rounded-xl border border-[#E7D6C1]">
              {st.qualification}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Adjunct Faculty Page */
export const EceAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Dr. K. P. Ray',
      designation: 'Former Scientist G & Head, Microwave Engineering, SAMEER, Mumbai',
      qualification: 'Ph.D. (IIT Bombay), IEEE Fellow, Fellow IETE',
      domain: 'Broadband Microstrip Antennas & Radar Transceivers',
      association: 'Conducting advanced masterclasses on phased-array radar antennas, SAR imaging, and CST Microwave Studio simulations.',
      sessions: 'Design and Optimization of Microstrip Antennas for Satellite & Radar Systems',
    },
    {
      name: 'Er. Sreekanth S.',
      designation: 'Chief ASIC Architect, NXP Semiconductors, Bengaluru',
      qualification: 'M.Tech VLSI Design (IIT Madras)',
      domain: 'System-on-Chip (SoC) Power Architectures & RISC-V Cores',
      association: 'Leading chip-level low power design workshops, clock-gating methodologies, and RISC-V open-source core tape-out clinics.',
      sessions: 'Advanced Low Power ASIC Design Flow: Dynamic Power Reduction, Multi-VT, and UPF Standards',
    },
    {
      name: 'Dr. C. P. Saseendran',
      designation: 'Distinguished Scientist & Former Deputy Director, ISRO VSSC',
      qualification: 'Ph.D. (Aerospace Avionics)',
      domain: 'Launch Vehicle Avionics & Spacecraft Telemetry',
      association: 'Mentoring undergraduate honor students on fault-tolerant onboard guidance computers and space-grade electronic packaging.',
      sessions: 'Avionics Architecture for Launch Vehicles: Telemetry, Tracking, and Redundant Flight Computers',
    },
    {
      name: 'Er. Rajesh K. V.',
      designation: 'Principal Systems Architect - ADAS, Continental Automotive',
      qualification: 'M.S. Automotive Electronics (Germany)',
      domain: 'Autonomous Driving Radar Sensors, LiDAR, and AUTOSAR',
      association: 'Directing the elective course on Automotive Electronic Systems and Functional Safety (ISO 26262).',
      sessions: 'Automotive Sensor Fusion: 77 GHz Radar, Vision AI, and Real-Time Electronic Control Units (ECUs)',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <School className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Eminent Semiconductor &amp; Space Fellows</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Adjunct Faculty
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            ISRO • NXP • SAMEER • Continental
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Former ISRO space scientists, NXP chip architects, SAMEER radar experts, and Continental ADAS automotive leads impart cutting-edge industrial silicon methodologies and space electronics design directly to our engineering scholars.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adjuncts.map((adj, idx) => (
          <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
                  {adj.name}
                </h4>
                <div className="text-xs font-semibold text-[#C79628]">{adj.designation}</div>
                <div className="text-[11px] text-[#7A647F]">{adj.qualification}</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#28052B]">
                Visiting Mentor
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs space-y-1.5">
              <div className="font-bold text-[#28052B]">{adj.domain}</div>
              <p className="text-[#4A384F] font-light leading-relaxed">{adj.association}</p>
            </div>

            <div className="pt-2 text-xs text-[#7A647F]">
              <span className="font-semibold text-[#28052B]">Key Masterclass Series:</span> {adj.sessions}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 6. Student List Page */
export const EceStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('2021-25');

  const batches: Record<string, { year: string; strength: number; reps: string[]; sections: string; students: { roll: string; name: string; track: string }[] }> = {
    '2021-25': {
      year: 'Final Year (Semester VII & VIII)',
      strength: 120,
      reps: ['Kevin Thomas', 'Sneha M. Nair', 'Akshay Raj'],
      sections: 'Divisions A & B (60 students each)',
      students: [
        { roll: 'JEC21EC001', name: 'Aaron Varghese', track: 'Honours in VLSI Design' },
        { roll: 'JEC21EC002', name: 'Abhinav Krishna', track: 'Embedded Systems & IoT' },
        { roll: 'JEC21EC003', name: 'Aiswarya Mohan', track: 'Honours in VLSI Design' },
        { roll: 'JEC21EC004', name: 'Akshay Raj', track: '5G Wireless & Telecom' },
        { roll: 'JEC21EC005', name: 'Anagha Joy', track: 'Honours in VLSI Design' },
        { roll: 'JEC21EC006', name: 'Basil K. Eldho', track: 'Robotics & Automation' },
        { roll: 'JEC21EC007', name: 'Devika Suresh', track: 'Honours in VLSI Design' },
        { roll: 'JEC21EC008', name: 'Kevin Thomas', track: 'Embedded Systems & IoT' },
        { roll: 'JEC21EC009', name: 'Maria Teresa', track: 'Signal Processing & AI' },
        { roll: 'JEC21EC010', name: 'Naveen Raj P.', track: 'Honours in VLSI Design' },
        { roll: 'JEC21EC011', name: 'Rohit Balakrishnan', track: 'Embedded Systems & IoT' },
        { roll: 'JEC21EC012', name: 'Sneha M. Nair', track: 'Honours in VLSI Design' },
      ],
    },
    '2022-26': {
      year: 'Third Year (Semester V & VI)',
      strength: 120,
      reps: ['Alan Jose', 'Bhavya Nair', 'Deepak Devassy'],
      sections: 'Divisions A & B (60 students each)',
      students: [
        { roll: 'JEC22EC001', name: 'Alan Jose', track: 'Honours in VLSI Design' },
        { roll: 'JEC22EC002', name: 'Anandhu C. V.', track: 'Embedded Systems & IoT' },
        { roll: 'JEC22EC003', name: 'Angel Rose Shaju', track: 'Honours in VLSI Design' },
        { roll: 'JEC22EC004', name: 'Bhavya Nair', track: 'Signal Processing & AI' },
        { roll: 'JEC22EC005', name: 'Deepak Devassy', track: 'Embedded Systems & IoT' },
        { roll: 'JEC22EC006', name: 'Fidha Fathima', track: '5G Wireless & Telecom' },
        { roll: 'JEC22EC007', name: 'Gokul Ramdas', track: 'Honours in VLSI Design' },
        { roll: 'JEC22EC008', name: 'Sandra Maria', track: 'Embedded Systems & IoT' },
      ],
    },
    '2023-27': {
      year: 'Second Year (Semester III & IV)',
      strength: 120,
      reps: ['Jithin V. S.', 'Meenakshi K.'],
      sections: 'Divisions A & B (60 students each)',
      students: [
        { roll: 'JEC23EC001', name: 'Adarsh S. Pillai', track: 'Standard Track' },
        { roll: 'JEC23EC002', name: 'Aleena K. B.', track: 'VLSI Track Eligible' },
        { roll: 'JEC23EC003', name: 'Amal Roy', track: 'Standard Track' },
        { roll: 'JEC23EC004', name: 'Archana M. Menon', track: 'VLSI Track Eligible' },
        { roll: 'JEC23EC005', name: 'Jithin V. S.', track: 'Embedded Track Eligible' },
        { roll: 'JEC23EC006', name: 'Meenakshi K.', track: 'VLSI Track Eligible' },
        { roll: 'JEC23EC007', name: 'Nikhil K. B.', track: 'Standard Track' },
        { roll: 'JEC23EC008', name: 'Varun Nair', track: 'Standard Track' },
      ],
    },
    '2024-28': {
      year: 'First Year (Autonomous Batch - Sem I & II)',
      strength: 120,
      reps: ['Adharsh Joy', 'Ann Treesa Mathew'],
      sections: 'Divisions A & B (60 students each)',
      students: [
        { roll: 'JEC24EC001', name: 'Abhijith S. Kumar', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24EC002', name: 'Adharsh Joy', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24EC003', name: 'Ann Treesa Mathew', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24EC004', name: 'Edwin C. Francis', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24EC005', name: 'Gowri Nandana', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24EC006', name: 'Mohammed Rayan', track: 'Autonomous Scheme 2024' },
        { roll: 'JEC24EC007', name: 'Sneha Treesa', track: 'Autonomous Scheme 2024' },
      ],
    },
  };

  const currentBatch = batches[selectedBatch];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Enrolled Technologists</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Student List
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            4 Batches • 480 Students
          </span>
        </div>

        {/* Batch selector tabs */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {Object.keys(batches).map(batchKey => (
            <button
              key={batchKey}
              onClick={() => setSelectedBatch(batchKey)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer font-bold ${
                selectedBatch === batchKey
                  ? 'bg-[#28052B] text-white shadow-xs'
                  : 'bg-[#FAF7F2] text-[#28052B] border border-[#E7D6C1] hover:bg-[#E7D6C1]/40'
              }`}
            >
              Batch {batchKey} ({batches[batchKey].year.split(' ')[0]} Year)
            </button>
          ))}
        </div>
      </div>

      {/* Batch Overview Banner */}
      <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase font-bold text-[#C79628] tracking-widest">Cohort Details</div>
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
            {currentBatch.year}
          </h3>
          <p className="text-xs text-[#7A647F] mt-0.5">
            Class Reps: <strong className="text-[#28052B]">{currentBatch.reps.join(', ')}</strong> • {currentBatch.sections}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-2xl font-bold text-[#28052B]">{currentBatch.strength}</div>
            <div className="text-[11px] text-[#7A647F]">Total Enrolled</div>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-bold text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] transition-all cursor-pointer">
            <Download className="w-4 h-4" /> Export Nominal Roll
          </button>
        </div>
      </div>

      {/* Student Table */}
      <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E7D6C1] rounded-2xl overflow-hidden">
            <thead className="bg-[#28052B] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Sl. No.</th>
                <th className="py-3 px-4 font-semibold">Register Number</th>
                <th className="py-3 px-4 font-semibold">Student Name</th>
                <th className="py-3 px-4 font-semibold">Program Track</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7D6C1] bg-[#FAF7F2]/40">
              {currentBatch.students.map((st, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]">
                  <td className="py-2.5 px-4 font-bold text-[#28052B]">{idx + 1}</td>
                  <td className="py-2.5 px-4 font-mono font-medium text-[#4A384F]">{st.roll}</td>
                  <td className="py-2.5 px-4 font-bold text-[#28052B]">{st.name}</td>
                  <td className="py-2.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-[#DFC06A]/20 text-[#28052B] font-semibold text-[10.5px]">
                      {st.track}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Enrolled
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

/* 7. Alumni Page */
export const EceAlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Er. Vishnu K. Menon',
      batch: 'Batch of 2008–12',
      role: 'Staff ASIC Verification Engineer, Texas Instruments, Dallas, USA',
      qualification: 'B.Tech ECE, M.S. Electrical & Computer Engg (UT Austin)',
      achievement: 'Led verification architectures for TI high-speed serializer/deserializer (SerDes) communication transceivers.',
    },
    {
      name: 'Er. Divya Lakshmi',
      batch: 'Batch of 2011–15',
      role: 'Principal Physical Design Engineer, Intel Corporation, Bengaluru',
      qualification: 'B.Tech ECE (First Rank)',
      achievement: 'Tape-out of sub-5nm low-power Xeon multi-core processor floorplans and clock-tree synthesis.',
    },
    {
      name: 'Er. Rahul S. Warrier',
      batch: 'Batch of 2013–17',
      role: 'Hardware Systems Architect, Apple Inc., Cupertino, USA',
      qualification: 'M.S. Embedded Systems (TU Delft, Netherlands)',
      achievement: 'Core engineering contributor to wireless power management and MagSafe inductive sensors.',
    },
    {
      name: 'Er. Karthik R. Pillai',
      batch: 'Batch of 2015–19',
      role: 'Scientist / Engineer ‘SD’, ISRO Satellite Centre (URSC), Bengaluru',
      qualification: 'B.Tech ECE, M.Tech (Communication Systems, IIT Kharagpur)',
      achievement: 'Designed Ka-band satellite transponders and telemetry subsystems aboard Chandrayaan and Aditya-L1 missions.',
    },
    {
      name: 'Er. Swathi Mohan',
      batch: 'Batch of 2017–21',
      role: 'Senior Embedded Firmware Engineer, Qualcomm Technologies',
      qualification: 'B.Tech ECE',
      achievement: 'Developed real-time low-latency Bluetooth audio codec drivers deployed on flagship Snapdragon smartphones.',
    },
    {
      name: 'Er. Jerry Joy',
      batch: 'Batch of 2018–22',
      role: 'Automotive Software Engineer, Robert Bosch Engineering',
      qualification: 'B.Tech ECE',
      achievement: 'Architected Electronic Stability Program (ESP) braking firmware for next-generation electric vehicle platforms.',
    },
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Global Silicon Pioneers</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Distinguished Alumni
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Global Semiconductor &amp; Aerospace Leaders
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of the Department of Electronics &amp; Communication Engineering lead worldwide innovations in semiconductor tape-outs, 5G RF chipsets, satellite transponders, and automotive robotics at Intel, Texas Instruments, Apple, Qualcomm, ISRO, and Bosch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((al, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm hover:border-[#C79628] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold text-sm">
                  {al.name.split(' ').slice(-1)[0][0]}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  {al.batch}
                </span>
              </div>
              <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
                {al.name}
              </h4>
              <div className="text-xs font-semibold text-[#28052B]">{al.role}</div>
              <div className="text-[11px] text-[#7A647F]">{al.qualification}</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed pt-2 border-t border-[#E7D6C1]/60">
                {al.achievement}
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C79628]">
                <Star className="w-3.5 h-3.5" /> Alumni Mentorship Network
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
