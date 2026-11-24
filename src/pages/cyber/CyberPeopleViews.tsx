import React, { useState } from 'react';
import {
  ShieldCheck, Users, GraduationCap, Award, Mail, Phone,
  MapPin, CheckCircle2, Download, Search, Briefcase, Star,
  BookOpen, Compass, School, Sparkles, FileText, ShieldAlert,
  KeyRound, Lock, Terminal
} from 'lucide-react';

/* 1. BOS (Board of Studies) Page */
export const CyberBOSPage: React.FC = () => {
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
          The Board of Studies (BOS) for Computer Science &amp; Engineering (Cyber Security) is the statutory academic authority under UGC Autonomous Regulations. The board architects a high-rigor, defense-in-depth curriculum aligned with NIST Cybersecurity Framework (CSF), ISO/IEC 27001 standards, MITRE ATT&amp;CK matrices, and national cyber defense mandates from CERT-In and AICTE.
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
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Shaju K. Y.</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor &amp; Head, Dept. of Cyber Security, JEC</td>
                <td className="py-3 px-4 font-bold text-[#C79628]">Chairman</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">2</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Jimmy Jose</td>
                <td className="py-3 px-4 text-[#4A384F]">Associate Professor in Computer Science, NIT Calicut</td>
                <td className="py-3 px-4 text-[#4A384F]">University Nominee (KTU)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">3</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Vivek Balachandran</td>
                <td className="py-3 px-4 text-[#4A384F]">Senior Cybersecurity Research Scientist, CUSAT</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Malware &amp; Forensics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">4</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Dr. Satyajit Das</td>
                <td className="py-3 px-4 text-[#4A384F]">Assistant Professor in Cyber-Physical Systems, IIT Palakkad</td>
                <td className="py-3 px-4 text-[#4A384F]">Subject Expert (Hardware Security)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">5</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Mr. Manu Zacharia</td>
                <td className="py-3 px-4 text-[#4A384F]">President, Cyber Security Association of India &amp; Advisor to Kerala Police</td>
                <td className="py-3 px-4 text-[#4A384F]">Industry &amp; Law Enforcement Expert</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">6</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Mr. Sujith Somarajan</td>
                <td className="py-3 px-4 text-[#4A384F]">Lead Threat Intel Researcher, Palo Alto Networks (Alumnus)</td>
                <td className="py-3 px-4 text-[#4A384F]">Meritorious Alumnus Representative</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">7</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Prof. Sreejith R.</td>
                <td className="py-3 px-4 text-[#4A384F]">Assistant Professor in Cyber Security, JEC</td>
                <td className="py-3 px-4 text-[#4A384F]">Internal Member (Academics)</td>
              </tr>
              <tr className="hover:bg-[#FAF7F2]">
                <td className="py-3 px-4 font-bold text-[#28052B]">8</td>
                <td className="py-3 px-4 font-bold text-[#28052B]">Prof. Reshma K. R.</td>
                <td className="py-3 px-4 text-[#4A384F]">Assistant Professor in Cyber Security, JEC</td>
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
            Key Mandates of Cyber Security BOS
          </h4>
          <ul className="text-xs text-[#4A384F] space-y-2 leading-relaxed">
            <li>• Formulating and ratifying the Scheme 2024 Autonomous B.Tech Cyber Security curriculum.</li>
            <li>• Structuring hands-on Offensive Security, Malware Reverse Engineering, and Cloud Threat Hunting labs.</li>
            <li>• Integrating Certified Ethical Hacker (CEH) and CompTIA Security+ syllabus mapping into credit courses.</li>
            <li>• Establishing mandatory ethical conduct charters, bug bounty disclosures, and air-gapped lab safety protocols.</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-3">
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C79628]" />
            Recent BOS Meeting Minutes
          </h4>
          <div className="space-y-2">
            {[
              { title: 'BOS Meeting IV Minutes - SOC Simulation & SIEM Syllabus Ratification', date: 'August 02, 2024' },
              { title: 'BOS Meeting III Minutes - Cloud Security & DevSecOps Course Ratification', date: 'February 16, 2024' },
              { title: 'BOS Meeting II Minutes - Bug Bounty & Vulnerability Disclosure Norms', date: 'July 19, 2023' },
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
export const CyberAdvisoryBoardPage: React.FC = () => {
  const advisors = [
    {
      name: 'Mr. Sudheesh K. S.',
      designation: 'Chief Information Security Officer (CISO), Federal Bank',
      affiliation: 'Banking Sector Threat Governance & Regulatory Compliance',
      contribution: 'Strategic mentoring on RBI cyber compliance, payment gateway security, and enterprise SOC monitoring frameworks.',
    },
    {
      name: 'Er. Vinod S.',
      designation: 'Deputy Superintendent of Police, Cyber Crime Police Station / Cyberdome',
      affiliation: 'Kerala Police Cyberdome & Law Enforcement',
      contribution: 'Directing students on digital evidence chain-of-custody, Darknet reconnaissance, and cybercrime investigation drills.',
    },
    {
      name: 'Ms. Priyamvada Rao',
      designation: 'Director - Cyber Risk Services, Deloitte India',
      affiliation: 'Enterprise Cyber Resilience & ISO 27001 Audits',
      contribution: 'Guiding corporate risk assessments, threat modelling methodologies, and compliance with the Digital Personal Data Protection (DPDP) Act.',
    },
    {
      name: 'Mr. Anoop G.',
      designation: 'Principal Threat Intelligence Architect, CrowdStrike',
      affiliation: 'Endpoint Detection & Response (EDR) Systems',
      contribution: 'Mentoring on nation-state cyber threat actor profiling, YARA rule writing, and automated endpoint threat containment.',
    },
    {
      name: 'Dr. R. Sanjeev',
      designation: 'Professor & Head of Information Security, CUSAT',
      affiliation: 'Applied Cryptography & Lattice Cryptosystems',
      contribution: 'Advising on post-quantum cryptographic algorithms, zero-knowledge proofs, and secure multiparty computation research.',
    },
    {
      name: 'Mr. Jithu Mohan',
      designation: 'Head of Application Security, Razorpay',
      affiliation: 'Fintech DevSecOps & Cloud Security Architecture',
      contribution: 'Formulating automated static/dynamic code analysis (SAST/DAST) labs and Kubernetes container security benchmarks.',
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
            Elite Defense Council
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department Advisory Board (DAB) convenes senior CISOs, cyber law enforcement directors, threat intelligence researchers from CrowdStrike and Palo Alto Networks, and big-four security partners to ensure our cyber defense education matches the real-world frontline.
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
          Strategic Defense Priorities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/80 font-light">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Live Cyber Range Simulations</div>
            <p>Deploying purple-teaming attack/defense drills simulating ransomware outbreaks and SCADA critical infrastructure threats.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Industry Certifications</div>
            <p>Facilitating student credentials in CEH (Master), CompTIA Security+, AWS Security Specialty, and Cisco CyberOps.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
            <div className="font-bold text-[#DFC06A]">Law Enforcement Collaboration</div>
            <p>Collaborative cyber forensic analysis and student volunteer assistance for Kerala Police Cyberdome digital initiatives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. Faculty Members Page */
export const CyberFacultyPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const facultyData = [
    {
      name: 'Dr. Shaju K. Y.',
      role: 'Associate Professor & Head of Department',
      qualification: 'Ph.D. (Cyber Security), M.Tech (Network Security), CEH',
      discipline: 'offensive',
      disciplineLabel: 'Offensive Security & Pen-Testing',
      experience: '16 Years Exp.',
      specialization: 'Penetration Testing, Exploit Development, Cryptographic Protocols, Zero-Trust Architecture',
      email: 'shajuky@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 410',
    },
    {
      name: 'Prof. Sreejith R.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Cyber Security & Digital Forensics), (Ph.D. pursuing)',
      discipline: 'forensics',
      disciplineLabel: 'Digital Forensics & Incident Response',
      experience: '9 Years Exp.',
      specialization: 'Memory Forensics, Disk Imaging, Network Packet Carving, Mobile Device Extraction',
      email: 'sreejithr@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 411',
    },
    {
      name: 'Prof. Reshma K. R.',
      role: 'Assistant Professor & Member Secretary BOS',
      qualification: 'M.Tech (Information Security & Cyber Defense)',
      discipline: 'cloud',
      disciplineLabel: 'Cloud Security & DevSecOps',
      experience: '8 Years Exp.',
      specialization: 'AWS/Azure Cloud Defense, Container Hardening, CI/CD Security Scanning, Identity Governance',
      email: 'reshmakr@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 412',
    },
    {
      name: 'Prof. Deepak V. K.',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Computer Science & Cryptography)',
      discipline: 'crypto',
      disciplineLabel: 'Cryptography & Blockchain',
      experience: '7 Years Exp.',
      specialization: 'Post-Quantum Lattice Ciphers, Homomorphic Encryption, Smart Contract Auditing',
      email: 'deepakvk@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 413',
    },
    {
      name: 'Prof. Jency Jose',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Network Security & Wireless Defense)',
      discipline: 'offensive',
      disciplineLabel: 'Offensive Security & Pen-Testing',
      experience: '6 Years Exp.',
      specialization: 'Wireless Network Vulnerabilities, IoT Botnet Detection, Web Application Firewalls (WAF)',
      email: 'jencyjose@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 414',
    },
    {
      name: 'Prof. Ashwin K. Nair',
      role: 'Assistant Professor',
      qualification: 'M.Tech (Cyber Forensics & Information Security)',
      discipline: 'forensics',
      disciplineLabel: 'Digital Forensics & Incident Response',
      experience: '5 Years Exp.',
      specialization: 'Malware Reverse Engineering, Ghidra Disassembly, Ransomware Behavioral Triage',
      email: 'ashwinknair@jecc.ac.in',
      phone: '+91 4884 259000 Ext. 415',
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
            Certified Cyber Defense Educators
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: 'all', label: 'All Specializations' },
              { id: 'offensive', label: 'Offensive Security' },
              { id: 'forensics', label: 'Forensics & Incident Response' },
              { id: 'cloud', label: 'Cloud Security & DevSecOps' },
              { id: 'crypto', label: 'Cryptography & Blockchain' },
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
              placeholder="Search faculty or domain..."
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
                  {f.name.split(' ').slice(1).map(n => n[0]).join('') || 'CY'}
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
export const CyberNonTeachingPage: React.FC = () => {
  const staff = [
    {
      name: 'Mr. Santhosh P. C.',
      designation: 'Cyber Range Technical Officer',
      lab: 'Air-Gapped Cyber Defense Range & Malware Sandbox Lab',
      qualification: 'B.Sc. CS, Certified Ethical Hacker (CEH v12), CCNA Security',
      experience: '15 Years Experience',
      responsibilities: 'Administering isolated VLAN hypervisors, Cuckoo malware sandbox environments, Fortinet firewalls, and air-gapped forensic test stations.',
    },
    {
      name: 'Ms. Reena V. J.',
      designation: 'Security Analyst & Lab Programmer',
      lab: 'SOC Operations & SIEM Simulation Lab',
      qualification: 'MCA, CompTIA Security+, Splunk Certified User',
      experience: '11 Years Experience',
      responsibilities: 'Configuring Wazuh SIEM, Elastic Security log pipelines, Snort/Suricata IDS/IPS rule sets, and student threat hunting sandboxes.',
    },
    {
      name: 'Mr. Prasanth K. R.',
      designation: 'Digital Forensics Lab Specialist',
      lab: 'Digital Forensics & Hardware Extraction Suite',
      qualification: 'Diploma in Computer Hardware, EnCase Certified Examiner (EnCE)',
      experience: '13 Years Experience',
      responsibilities: 'Maintaining Tableau forensic write-blockers, Cellebrite UFED extraction pods, Faraday isolation bags, and hardware toolkits.',
    },
    {
      name: 'Mr. Lijo Davis',
      designation: 'Department Office Secretary',
      lab: 'Cyber Security Department Secretariat',
      qualification: 'B.Com, PGDCA',
      experience: '10 Years Experience',
      responsibilities: 'Student records, ethical hacking code-of-conduct registry, hackathon logistics, and official communications.',
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
            Certified Technical Staff
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Our certified lab administrators maintain complex, high-risk air-gapped malware containment sandboxes, hardware write-blockers, SIEM telemetry collectors, and isolated intrusion testing network pods with strict ethical adherence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
export const CyberAdjunctFacultyPage: React.FC = () => {
  const adjuncts = [
    {
      name: 'Adv. Jiyan K. Paul',
      designation: 'Cyber Law Advocate, High Court of Kerala & Legal Counsel (Cyber Crime)',
      qualification: 'LL.M. (Cyber Law & Information Technology), Cyber Law Expert',
      domain: 'IT Act 2000/2008, DPDP Act 2023, Digital Evidence & Admissibility',
      association: 'Conducting court-admissible digital forensics modules, 65B Indian Evidence Act certification, and ethical disclosure studios.',
      sessions: 'Legal Admissibility of Electronic Evidence, Section 65B Compliance, and Cyber Law Jurisprudence',
    },
    {
      name: 'Mr. Sujith Somarajan',
      designation: 'Staff Security Researcher, Unit 42, Palo Alto Networks',
      qualification: 'M.S. Cybersecurity, OSCP, OSCE',
      domain: 'Advanced Persistent Threats (APTs) & Zero-Day Exploit Analysis',
      association: 'Directing live kernel exploitation masterclasses, reverse engineering nation-state malware payloads, and MITRE profiling.',
      sessions: 'Dissecting Modern APT Payloads, Heap Spraying, ROP Chains, and Kernel Rootkit Detection',
    },
    {
      name: 'Mr. Rahul S. Nair',
      designation: 'Associate Director - Cyber Defense, Ernst & Young (EY)',
      qualification: 'B.Tech CSE, CISSP, CRISC, CISM',
      domain: 'Enterprise Security Architecture, Threat Hunting & Red Teaming',
      association: 'Leading purple-teaming simulations, breach and attack simulation (BAS), and corporate threat resilience frameworks.',
      sessions: 'Building Resilient Cyber Defense Centers, Cloud Posture Management, and Zero Trust Architecture',
    },
    {
      name: 'Ms. Arya V. Menon',
      designation: 'Senior Cloud Threat Analyst, AWS Security Operations',
      qualification: 'M.Tech Cyber Security, AWS Certified Security Specialist',
      domain: 'Cloud Threat Detection, GuardDuty Automation & IAM Least Privilege',
      association: 'Mentoring undergraduate researchers on serverless telemetry analytics and automated cloud incident response scripts.',
      sessions: 'Automated Cloud Incident Response in AWS: Lambda Forensics, GuardDuty Triggers, and CloudTrail Auditing',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Visiting Cyber Practitioners</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Adjunct Faculty
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Unit 42 • EY • AWS • Cyber Advocates
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Practicing red-teamers, cloud security analysts from AWS and Palo Alto Networks, and High Court cyber legal advisors bring battlefield exploit analysis, regulatory jurisprudence, and purple-teaming protocols directly to the classroom.
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
export const CyberStudentListPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('2021-25');

  const batches: Record<string, { year: string; strength: number; reps: string[]; certifications: string; students: { roll: string; name: string; cert: string }[] }> = {
    '2021-25': {
      year: 'Final Year (Semester VII & VIII)',
      strength: 60,
      reps: ['Gokul Chandran', 'Aishwarya Rajesh'],
      certifications: 'CEH Certified: 22 Students • CompTIA Security+: 34 Students',
      students: [
        { roll: 'JEC21CY001', name: 'Abhijith S. Kumar', cert: 'CEH v12 • CompTIA Security+' },
        { roll: 'JEC21CY002', name: 'Adarsh P. Nair', cert: 'CompTIA Security+' },
        { roll: 'JEC21CY003', name: 'Aishwarya Rajesh', cert: 'CEH v12 • AWS Certified Security' },
        { roll: 'JEC21CY004', name: 'Alan Varghese', cert: 'CompTIA PenTest+' },
        { roll: 'JEC21CY005', name: 'Anjaly Menon', cert: 'CompTIA Security+' },
        { roll: 'JEC21CY006', name: 'Basil Eldhose', cert: 'CEH v12' },
        { roll: 'JEC21CY007', name: 'Devanand K.', cert: 'OSCP Candidate • CEH v12' },
        { roll: 'JEC21CY008', name: 'Gokul Chandran', cert: 'CEH v12 • Cisco CyberOps' },
        { roll: 'JEC21CY009', name: 'Megha Paul', cert: 'CompTIA Security+' },
        { roll: 'JEC21CY010', name: 'Naveen Antony', cert: 'CEH v12' },
        { roll: 'JEC21CY011', name: 'Riya Elsa', cert: 'CompTIA Security+' },
        { roll: 'JEC21CY012', name: 'Siddharth M.', cert: 'OSCP • CEH v12' },
      ],
    },
    '2022-26': {
      year: 'Third Year (Semester V & VI)',
      strength: 60,
      reps: ['Arjun Ramesh', 'Haripriya V.'],
      certifications: 'CompTIA Security+: 28 Students • Cisco CyberOps: 32 Students',
      students: [
        { roll: 'JEC22CY001', name: 'Aaron K. George', cert: 'Cisco CyberOps' },
        { roll: 'JEC22CY002', name: 'Aleena K. B.', cert: 'CompTIA Security+' },
        { roll: 'JEC22CY003', name: 'Arjun Ramesh', cert: 'CompTIA Security+ • CEH Pursuing' },
        { roll: 'JEC22CY004', name: 'Athul Krishna', cert: 'Cisco CyberOps' },
        { roll: 'JEC22CY005', name: 'Haripriya V.', cert: 'CompTIA Security+' },
        { roll: 'JEC22CY006', name: 'Joel Mathew', cert: 'CompTIA Security+' },
        { roll: 'JEC22CY007', name: 'Meenakshi K.', cert: 'Cisco CyberOps' },
        { roll: 'JEC22CY008', name: 'Rohit M.', cert: 'CompTIA Security+' },
      ],
    },
    '2023-27': {
      year: 'Second Year (Semester III & IV)',
      strength: 60,
      reps: ['Kavya S.', 'Mohammed Rayan'],
      certifications: 'Cisco Networking Fundamentals: 100% Certified',
      students: [
        { roll: 'JEC23CY001', name: 'Alan Roy', cert: 'Cisco Networking Basics' },
        { roll: 'JEC23CY002', name: 'Blessy Maria', cert: 'Cisco Networking Basics' },
        { roll: 'JEC23CY003', name: 'Farhan K. A.', cert: 'Linux Fundamentals' },
        { roll: 'JEC23CY004', name: 'Kavya S.', cert: 'Cisco Networking Basics' },
        { roll: 'JEC23CY005', name: 'Mohammed Rayan', cert: 'Linux Fundamentals' },
        { roll: 'JEC23CY006', name: 'Nikhil K. B.', cert: 'Cisco Networking Basics' },
        { roll: 'JEC23CY007', name: 'Roshni Thomas', cert: 'Cisco Networking Basics' },
      ],
    },
    '2024-28': {
      year: 'First Year (Autonomous Batch - Sem I & II)',
      strength: 60,
      reps: ['Ashwin Paul', 'Gauri Nandana'],
      certifications: 'Induction Track • Cyber Ethics Certified',
      students: [
        { roll: 'JEC24CY001', name: 'Abhijith S. Kumar', cert: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CY002', name: 'Anjana Rajesh', cert: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CY003', name: 'Ashwin Paul', cert: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CY004', name: 'Gauri Nandana', cert: 'Autonomous Scheme 2024' },
        { roll: 'JEC24CY005', name: 'Sneha Treesa', cert: 'Autonomous Scheme 2024' },
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Enrolled Cyber Defenders</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Student List
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            4 Batches • 240 Students
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
          <div className="text-xs uppercase font-bold text-[#C79628] tracking-widest">Selected Cohort</div>
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
            {currentBatch.year}
          </h3>
          <p className="text-xs text-[#7A647F] mt-0.5">
            Class Reps: <strong className="text-[#28052B]">{currentBatch.reps.join(', ')}</strong> • {currentBatch.certifications}
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
                <th className="py-3 px-4 font-semibold">Industry Credentials</th>
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
                      {st.cert}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Enrolled
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
export const CyberAlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Mr. Sujith Somarajan',
      batch: 'Batch of 2012–16',
      role: 'Staff Threat Researcher, Unit 42, Palo Alto Networks, San Jose, USA',
      qualification: 'B.Tech CSE, OSCP, OSCE',
      achievement: 'Authored breakthrough research papers dissecting Lazarus Group advanced persistent threat (APT) spear-phishing campaigns.',
    },
    {
      name: 'Ms. Keerthi V. Menon',
      batch: 'Batch of 2014–18',
      role: 'Lead Cloud Security Engineer, Cisco Systems, Bengaluru',
      qualification: 'B.Tech (First Class with Distinction), CCIE Security',
      achievement: 'Architects zero-trust container access proxies and software-defined WAN encryption policies for Fortune 100 clients.',
    },
    {
      name: 'Mr. Jerry Thomas',
      batch: 'Batch of 2016–20',
      role: 'Senior Incident Response Consultant, Mandiant (Google Cloud)',
      qualification: 'B.Tech CSE (Cyber Focus)',
      achievement: 'Led emergency triage and forensic ransomware containment for major European critical healthcare networks.',
    },
    {
      name: 'Ms. Anjali R. Nair',
      batch: 'Batch of 2017–21',
      role: 'Senior Cyber Risk Consultant, Ernst & Young (EY) Global Delivery Services',
      qualification: 'B.Tech, CISSP, CISA',
      achievement: 'Conducted over 40 global bank vulnerability audits and SWIFT payment network penetration tests.',
    },
    {
      name: 'Mr. Rohit K. Varghese',
      batch: 'Batch of 2018–22',
      role: 'Threat Hunter & SOC Lead, Federal Bank Cyber Defense Center',
      qualification: 'B.Tech Cyber Security',
      achievement: 'Neutralized high-volume distributed credential stuffing attacks targeted at retail net-banking portals.',
    },
    {
      name: 'Mr. Alan Jose',
      batch: 'Batch of 2019–23',
      role: 'Application Security Engineer, Razorpay',
      qualification: 'B.Tech Cyber Security, Top 10 HackerOne Hunter',
      achievement: 'Discovered and responsibly disclosed critical IDOR vulnerabilities in prominent fintech payment APIs.',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Guardians of Cyberspace</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Distinguished Alumni
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Global Cyber Defense Leaders
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Graduates of the Cyber Security division protect critical international financial backbones, sovereign defense clouds, and multinational enterprise networks at Palo Alto Networks, Google Mandiant, Cisco, Ernst &amp; Young, and major banks.
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
                <Star className="w-3.5 h-3.5" /> Cyber Defense Mentor
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
