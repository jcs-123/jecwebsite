import React, { useState } from 'react';
import {
  GraduationCap, Briefcase, Building2, Handshake, Trophy,
  FileText, CheckCircle2, Download, ExternalLink, BookOpen,
  Award, Sparkles, Cpu, Layers, Library, Compass, Users, MapPin,
  TrendingUp, Lightbulb, Target, ShieldAlert, KeyRound, Lock,
  Terminal, ShieldCheck, Bug, Radio, Server
} from 'lucide-react';

/* 1. Course B.Tech Page */
export const CyberCourseBtechPage: React.FC = () => {
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
                B.Tech in CSE (Cyber Security)
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
              Sanctioned Intake: 60 Seats
            </span>
            <span className="px-3 py-1 rounded-full bg-[#28052B] text-white text-xs font-mono font-bold">
              Autonomous Tier-1 Program
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering (Cyber Security) at Jyothi Engineering College provides an intensive, defense-grade curriculum that transforms students into elite cybersecurity architects, penetration testers, forensic investigators, and threat intelligence analysts safeguarding sovereign and corporate digital assets.
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
              <strong className="text-[#28052B] block mb-1">PEO 1: Cyber Defense &amp; Security Engineering</strong>
              Graduates will demonstrate technical excellence in identifying, analyzing, and mitigating sophisticated cyber threats across networks, applications, and cloud environments.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 2: Modern Forensic &amp; Cryptographic Acumen</strong>
              Graduates will master digital evidence preservation, malware triage, post-quantum cryptography, and regulatory compliance adhering to CERT-In and NIST guidelines.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PEO 3: Ethical Leadership &amp; Responsible Disclosure</strong>
              Graduates will uphold uncompromising ethical standards, legal responsibility, and professional leadership in vulnerability research and public security disclosures.
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
              <strong className="text-[#28052B] block mb-1">PSO 1: Offensive Pen-Testing &amp; Bug Bounty</strong>
              Ability to conduct red-team vulnerability assessments, exploit proof-of-concept development, and automated web/API penetration testing.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 2: Security Operations (SOC) &amp; Threat Intelligence</strong>
              Ability to monitor, detect, and neutralize advanced persistent threats (APTs) using SIEM platforms, YARA rules, and incident response playbooks.
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <strong className="text-[#28052B] block mb-1">PSO 3: Digital Forensics &amp; Malware Reverse Engineering</strong>
              Ability to perform static/dynamic disassembly of malicious executables, extract forensic disk/memory artifacts, and compile court-admissible forensic dossiers.
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
            <div className="font-bold text-[#DFC06A]">Honours in Offensive Security &amp; Red Teaming</div>
            <p className="text-white/80">Kernel Exploitation, Binary Disassembly with Ghidra, Buffer Overflow Exploits, Active Directory Attacks, and Automated Fuzzing.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Honours in Cloud Security &amp; DevSecOps</div>
            <p className="text-white/80">AWS/Azure Identity &amp; Access Management (IAM), Kubernetes Container Hardening, CI/CD Pipeline Scanning, and Zero Trust Architecture.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="font-bold text-[#DFC06A]">Minor in Cyber Law, Policy &amp; Compliance</div>
            <p className="text-white/80">IT Act 2000/2008, DPDP Act 2023, ISO/IEC 27001 Lead Auditor Preparation, GDPR Regulations, and Electronic Evidence Law.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Career and Placement Page (Placement, Higher Studies, Entrepreneurship) */
export const CyberCareerPlacementPage: React.FC = () => {
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
          With the global cybersecurity talent deficit exceeding 3.5 million professionals, graduates of our Cyber Security program enjoy commanding placement premiums across global cyber intelligence agencies, Big Four consulting firms, and financial institutions.
        </p>
      </div>

      {/* VIEW A: PLACEMENT */}
      {subTab === 'placement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-emerald-700">95.2%</div>
              <div className="text-xs text-[#7A647F] mt-1">Placement Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#C79628]">₹18.5 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Highest Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">₹5.8 LPA</div>
              <div className="text-xs text-[#7A647F] mt-1">Average Package</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E7D6C1] text-center shadow-xs">
              <div className="text-2xl font-bold text-[#28052B]">40+</div>
              <div className="text-xs text-[#7A647F] mt-1">Hiring Security Firms</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
              Key Cybersecurity &amp; Consulting Recruiters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
              {[
                { name: 'Palo Alto Networks', type: 'Threat Intelligence / EDR' },
                { name: 'Cisco Systems', type: 'Network & Cloud Security' },
                { name: 'CrowdStrike', type: 'Falcon Platform / Incident Response' },
                { name: 'Ernst & Young (EY)', type: 'Cyber Risk Advisory' },
                { name: 'Deloitte Cyber', type: 'Enterprise Threat Management' },
                { name: 'PwC India', type: 'Vulnerability Assessment & Pen-Testing' },
                { name: 'KPMG Cyber', type: 'ISO 27001 & Compliance' },
                { name: 'Federal Bank', type: 'SOC Analysts & IT Security Officers' },
                { name: 'Razorpay', type: 'Application Security / FinTech' },
                { name: 'TCS Cyber Defense', type: 'Managed Security Services' },
                { name: 'Infosys Cyber Security', type: 'Cloud Threat Defense' },
                { name: 'Wipro CyberShield', type: 'Identity & Access Governance' },
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
              Post-Graduate Cyber Research &amp; International Fellowships
            </h3>
            <span className="text-xs text-[#C79628] font-bold">Top Global Cyber Institutes</span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Our students gain admission to top-ranked computer security master's and doctoral programs in the United States, Europe, and premier Indian technical universities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { institute: 'Carnegie Mellon University (CMU)', course: 'M.S. in Information Security (MSIS)', student: 'Sujith Somarajan (Alumnus)' },
              { institute: 'Georgia Institute of Technology', course: 'M.S. in Cybersecurity - Information Security', student: 'Keerthi V. Menon (Alumna)' },
              { institute: 'Royal Holloway, University of London', course: 'M.Sc. in Information Security', student: 'Jerry Thomas (Batch 2020)' },
              { institute: 'Purdue University', course: 'M.S. in Computer & Information Technology (Cyber Focus)', student: 'Alan Jose (Batch 2023)' },
              { institute: 'NIT Calicut', course: 'M.Tech in Computer Science & Information Security', student: 'Aishwarya Rajesh (GATE CS AIR 320)' },
              { institute: 'Technical University of Darmstadt, Germany', course: 'M.Sc. in IT-Security', student: 'Gokul Chandran (Batch 2022)' },
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
              Incubated Cyber Defense Ventures
            </h3>
            <span className="text-xs text-[#C79628] font-bold">Jyothi TBI &amp; Kerala Startup Mission</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Bug className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">PentestX Labs</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Continuous Threat Exposure SaaS</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Automated continuous penetration testing and external attack surface management platform founded by students, serving 25+ e-commerce clients.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">AuditShield Cyber</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">DPDP Act &amp; ISO 27001 Compliance</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                AI-assisted compliance automation tool assisting regional financial institutions to comply with the Indian Digital Personal Data Protection Act.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#28052B]">SentinelGate IoT</h4>
              <div className="text-[11px] text-[#C79628] font-semibold">Hardware Firmware Security</div>
              <p className="text-xs text-[#4A384F] font-light leading-relaxed">
                Hardware write-protection and real-time firmware anomaly intrusion detection sensors for industrial automation and smart grid gateways.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 3. Facilities Page (Lab & Library) */
export const CyberFacilitiesPage: React.FC = () => {
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Infrastructure &amp; Specialized Labs</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Facilities (Lab &amp; Library)
              </h2>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'lab', label: 'i. Cyber Defense Laboratories' },
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
          Purpose-built isolated computing environments including an air-gapped cyber range, real-time Security Operations Center (SOC) simulation suite, hardware forensic imaging stations, and high-security cryptographic testing sandboxes.
        </p>
      </div>

      {activeFacility === 'lab' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Air-Gapped Cyber Range & Malware Sandbox */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Air-Gapped Cyber Defense Range</h4>
                <div className="text-xs text-[#C79628] font-semibold">Malware Analysis &amp; Purple-Teaming</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Physically isolated, air-gapped laboratory containing 40 high-performance workstations configured with Cuckoo Automated Malware Sandbox, REMnux, Ghidra disassembler, x64dbg, and live enterprise target emulators.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Tools:</strong> Ghidra, IDA Free, Wireshark, Metasploit Pro, Burp Suite Enterprise.</div>
              <div>• <strong>Safety:</strong> Complete physical isolation with hardware firewall kill-switches.</div>
            </div>
          </div>

          {/* SOC Operations & SIEM Simulation Lab */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">SOC Operations &amp; SIEM Simulation Lab</h4>
                <div className="text-xs text-[#C79628] font-semibold">Live Threat Hunting &amp; Incident Triage</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Mock enterprise Security Operations Center (SOC) equipped with dual-screen monitoring consoles streaming live honeypot telemetry, Wazuh SIEM, Elastic Security, Splunk Enterprise, and Suricata intrusion detection systems.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Simulations:</strong> Ransomware outbreak triage, DDoS mitigation, MITRE ATT&amp;CK mapping.</div>
              <div>• <strong>Capacity:</strong> 45 High-Throughput SOC analyst consoles.</div>
            </div>
          </div>

          {/* Digital Forensics & Hardware Extraction Suite */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Digital Forensics &amp; Hardware Extraction Suite</h4>
                <div className="text-xs text-[#C79628] font-semibold">Forensic Write-Blockers &amp; Disk Carving</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Equipped with Tableau forensic hardware write-blockers, Autopsy Forensic Browser, Volatility memory analysis framework, Cellebrite mobile data extraction kits, and RF-shielded Faraday isolation enclosures.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Capabilities:</strong> RAM dump acquisition, deleted file carving, mobile JTAG extraction.</div>
              <div>• <strong>Legal Compliance:</strong> Adheres to Indian Evidence Act Section 65B standards.</div>
            </div>
          </div>

          {/* Cloud Security & Cryptography Studio */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#28052B]">Cloud Security &amp; Cryptography Studio</h4>
                <div className="text-xs text-[#C79628] font-semibold">Post-Quantum Ciphers &amp; Cloud Sandboxes</div>
              </div>
            </div>
            <p className="text-xs text-[#4A384F] leading-relaxed font-light">
              Dedicated cloud sandboxes linked to AWS and Microsoft Azure for auditing IAM privileges, configuring AWS GuardDuty, running OpenVAS vulnerability scans, and implementing lattice-based cryptographic algorithms.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] text-xs text-[#7A647F] space-y-1">
              <div>• <strong>Cloud Security:</strong> Terraform security linters, Checkov, Trivy, Kubernetes bench.</div>
              <div>• <strong>Research:</strong> OpenSSL 3.0 Post-Quantum crypto libraries implementation.</div>
            </div>
          </div>
        </div>
      )}

      {activeFacility === 'library' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E7D6C1]">
            <Library className="w-6 h-6 text-[#C79628]" />
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#28052B]">
              Departmental Cyber Security Library &amp; Repositories
            </h3>
          </div>

          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Houses over 3,800 dedicated cybersecurity reference books, NIST Special Publications (SP 800 series), ISO/IEC 27001 documentation frameworks, and direct digital subscriptions to IEEE Security &amp; Privacy, ACM Transactions on Information and System Security (TISSEC), and USENIX Security proceedings.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">3,800+</div>
              <div className="text-[11px] text-[#7A647F]">Volumes &amp; Threat Manuals</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#C79628]">Full Access</div>
              <div className="text-[11px] text-[#7A647F]">IEEE S&amp;P &amp; ACM CCS Digital</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">150+</div>
              <div className="text-[11px] text-[#7A647F]">NIST &amp; ISO Standards</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
              <div className="text-xl font-bold text-[#28052B]">350+</div>
              <div className="text-[11px] text-[#7A647F]">Threat Intel &amp; Bug Bounty Theses</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 4. Industry Tie-up Page (MOUs) */
export const CyberIndustryTieupPage: React.FC = () => {
  const mous = [
    {
      company: 'EC-Council (International Council of E-Commerce Consultants)',
      validity: 'Active (Accredited Training Center - ATC)',
      scope: 'Authorized academic partner for Certified Ethical Hacker (CEH v12), Computer Hacking Forensic Investigator (CHFI), and Certified SOC Analyst (CSA) global credentials with official lab access and discounted voucher pricing.',
      lead: 'Dr. Shaju K. Y. (Coordinator)',
    },
    {
      company: 'Palo Alto Networks Cybersecurity Academy',
      validity: 'Active (2022 - 2026)',
      scope: 'Curriculum integration of Next-Generation Firewalls (NGFW), Cloud Security Fundamentals, and Security Operating Platform micro-certifications.',
      lead: 'Prof. Reshma K. R. (Coordinator)',
    },
    {
      company: 'Cisco Networking Academy (CyberOps & CCNA Security)',
      validity: 'Active (Premier Partner)',
      scope: 'Hands-on laboratory access to Cisco CyberOps Associate, Network Defense, and CCNA Security training environments with industrial certification support.',
      lead: 'Prof. Sreejith R. (Coordinator)',
    },
    {
      company: 'Kerala Police Cyberdome',
      validity: 'Active (Institutional Collaboration)',
      scope: 'Student internship placements in digital forensic investigation units, Darknet monitoring hackathons, and cyber awareness community drills.',
      lead: 'Prof. Deepak V. K. (Coordinator)',
    },
    {
      company: 'Fortinet Network Security Academy',
      validity: 'Active (2023 - 2026)',
      scope: 'Access to Fortinet Network Security Expert (NSE) level 1 to 4 certifications, FortiGate firewall VMs, and enterprise network defense modules.',
      lead: 'Prof. Jency Jose (Coordinator)',
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Global Defense Partnerships</span>
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
          Strategic Memorandums of Understanding (MOUs) connect our students with global cyber credentialing authorities (EC-Council, Fortinet, Palo Alto Networks), law enforcement cyber units, and enterprise defense vendors.
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
export const CyberAchievementsPage: React.FC = () => {
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
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Laurels &amp; Hackathon Triumphs</span>
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
          Celebrating national Capture-The-Flag (CTF) championships, responsible bug bounty disclosures in global platforms, Kerala Police commendations, and faculty defense research grants.
        </p>
      </div>

      {activeTab === 'student' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Champions - Kerala Police Cyberdome National Hackathon (Hac’KP)',
              organization: 'Cyberdome, Kerala Police Headquarters',
              team: 'Gokul Chandran & Aishwarya Rajesh (Final Year)',
              desc: 'Built an automated deepfake audio synthesis detection framework identifying voice cloning fraud in banking voiceprints, bagging ₹50,000 cash prize.',
            },
            {
              title: 'Google Vulnerability Reward Program (VRP) Hall of Fame',
              organization: 'Google Security Team',
              team: 'Siddharth M. (Final Year Cyber Security)',
              desc: 'Identified and responsibly disclosed an authentication bypass flaw in Google Cloud Identity IAM microservices, rewarded with $3,133 bounty and Hall of Fame ranking.',
            },
            {
              title: '1st Place - InCTF National Collegiate Cyber Defense Contest',
              organization: 'Amrita Center for Cyber Security & AICTE',
              team: 'Team "NullByte" - 4 Cyber Security Scholars',
              desc: 'Solved 14 complex reverse engineering, binary exploitation, and cryptographic challenge flags in a grueling 36-hour attack-defense sprint.',
            },
            {
              title: 'Top 50 HackerOne Global Bug Bounty Researcher',
              organization: 'HackerOne Platform',
              team: 'Alan Varghese (Third Year)',
              desc: 'Discovered over 35 high-severity cross-site scripting (XSS) and server-side request forgery (SSRF) vulnerabilities across Fortune 500 public bounty scopes.',
            },
          ].map((ach, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/40 text-[10px] font-bold text-[#C79628]">
                  National Cyber Distinction
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
              title: 'Granted Patent for Zero-Knowledge Healthcare Access Control',
              faculty: 'Dr. Shaju K. Y. (HOD & Associate Professor)',
              agency: 'Indian Patent Office (Patent No: 412093)',
              desc: 'Patent Granted: "A Decentralized Cryptographic Access Framework for Electronic Health Records utilizing Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge (zk-SNARKs)".',
            },
            {
              title: 'Kerala Police State Cyber Safety Citation',
              faculty: 'Prof. Sreejith R. (Assistant Professor)',
              agency: 'Cyber Crime Police Station, Kerala Police',
              desc: 'Awarded Official Letter of Commendation for conducting digital forensic examination of seized mobile hardware in high-profile cyber financial fraud cases.',
            },
            {
              title: 'KTU CERD Research Grant for SCADA Intrusion Detection',
              faculty: 'Prof. Reshma K. R. & Prof. Deepak V. K.',
              agency: 'APJ Abdul Kalam Technological University',
              desc: 'Sanctioned ₹3.2 Lakhs research grant for developing lightweight anomalous packet inspection algorithms for Modbus and DNP3 industrial protocols.',
            },
            {
              title: 'EC-Council Master Instructor of the Year 2023',
              faculty: 'Dr. Shaju K. Y.',
              agency: 'EC-Council Academic Division, South Asia',
              desc: 'Conferred recognition for mentoring over 150 students to complete Certified Ethical Hacker (CEH) credentials with a 98% first-attempt pass rate.',
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
export const CyberResearchPage: React.FC = () => {
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
            45+ Scopus / SCI Publications
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Faculty research in Cyber Security addresses urgent threat frontiers—including zero-day exploit discovery, post-quantum cryptography, AI-driven malware evasion, and SCADA industrial automation protection.
        </p>
      </div>

      {/* Research Thrust Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Post-Quantum Lattice Cryptography
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Designing hardware-efficient implementations of NIST-standardized Crystals-Kyber and Dilithium algorithms capable of running on resource-constrained embedded microcontrollers.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Autonomous AI Threat Hunting &amp; EDR
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Developing unsupervised transformer neural networks that parse gigabyte-scale Windows Event Logs (Sysmon) to detect living-off-the-land binaries (LOLBins) and memory-injected payloads.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="font-['Playfair_Display',serif] text-base font-bold text-[#28052B]">
            Critical Infrastructure &amp; SCADA Security
          </h4>
          <p className="text-xs text-[#4A384F] font-light leading-relaxed">
            Creating hardware-in-the-loop cyber testbeds to evaluate command injection vulnerabilities across Modbus/TCP, IEC 60870-5-104, and smart energy distribution relays.
          </p>
        </div>
      </div>

      {/* Security Testing & Vulnerability Assessment Cell */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E7D6C1]">
          <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
            Cyber Security Auditing &amp; VAPT Consultancy Cell
          </h3>
          <span className="text-xs font-mono font-bold text-emerald-700">CERT-In Aligned Auditing</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#4A384F]">
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Web &amp; Mobile VAPT</strong>
            OWASP Top 10 web application vulnerability assessments, source code reviews, and mobile app API penetration tests for banks and government agencies.
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Network &amp; Firewall Audits</strong>
            Internal/external network penetration testing, Cisco/Fortinet rule set compliance, and wireless rogue access point identification.
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1]">
            <strong className="text-[#28052B] block mb-1">Digital Evidence Analysis</strong>
            Certified computer forensic imaging, mobile artifact triage, and expert witness documentation for cyber legal litigation.
          </div>
        </div>
      </div>
    </div>
  );
};

/* 7. Syllabus and Curriculum Page */
export const CyberSyllabusPage: React.FC = () => {
  const semesters = [
    {
      sem: 'Semester I',
      credits: '20 Credits',
      subjects: [
        'Linear Algebra & Calculus',
        'Engineering Physics / Chemistry',
        'Programming in C & Secure Coding Practices',
        'Basics of Electrical & Electronics Engineering',
        'C Programming & Shell Scripting Laboratory',
        'Life Skills & Professional Communication',
      ],
    },
    {
      sem: 'Semester II',
      credits: '20 Credits',
      subjects: [
        'Vector Calculus & Differential Equations',
        'Digital Logic Design & Computer Organization',
        'Object-Oriented Programming with Java',
        'Cyber Ethics, Laws & Cyber Crime Fundamentals',
        'Object-Oriented Programming Lab',
        'Universal Human Values',
      ],
    },
    {
      sem: 'Semester III',
      credits: '22 Credits',
      subjects: [
        'Discrete Mathematics & Number Theory',
        'Data Structures & Algorithms',
        'Operating Systems & Kernel Architecture',
        'Principles of Information Security',
        'Data Structures Laboratory',
        'Linux Administration & Security Hardening Lab',
      ],
    },
    {
      sem: 'Semester IV',
      credits: '22 Credits',
      subjects: [
        'Classical & Modern Cryptography',
        'Computer Networks & Protocols',
        'Database Management Systems & SQL Security',
        'Formal Languages & Automata Theory',
        'Cryptography & Network Security Lab',
        'Database Systems & Injection Mitigation Lab',
      ],
    },
    {
      sem: 'Semester V',
      credits: '23 Credits',
      subjects: [
        'Offensive Security & Penetration Testing',
        'Web Application Security & OWASP Top 10',
        'Wireless & Mobile Device Security',
        'Professional Elective I (Cloud Security / Secure Coding in C++)',
        'Penetration Testing & Bug Bounty Lab',
        'Web Application Security Assessment Lab',
      ],
    },
    {
      sem: 'Semester VI',
      credits: '23 Credits',
      subjects: [
        'Digital Forensics & Incident Response',
        'Malware Analysis & Reverse Engineering',
        'Security Operations Center (SOC) & SIEM',
        'Professional Elective II (Blockchain & Smart Contracts / IoT Security)',
        'Digital Forensics & Evidence Carving Lab',
        'Malware Triage & Reverse Engineering Studio',
      ],
    },
    {
      sem: 'Semester VII',
      credits: '20 Credits',
      subjects: [
        'Zero Trust Architecture & Identity Governance',
        'Threat Intelligence & Hunting with MITRE ATT&CK',
        'Professional Elective III (Post-Quantum Cryptography / SCADA Defense)',
        'Open Elective I (Interdisciplinary)',
        'SOC Simulation & Purple Teaming Lab',
        'Capstone Project Phase I',
      ],
    },
    {
      sem: 'Semester VIII',
      credits: '18 Credits',
      subjects: [
        'IT Act, DPDP 2023 & ISO 27001 Auditing',
        'Professional Elective IV (AI in Cyber Defense / Hardware Security)',
        'Open Elective II (Interdisciplinary)',
        'Capstone Project Phase II & Defense Viva-Voce',
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
          The autonomous curriculum follows a 165-credit structure adhering to NIST-NICE workforce frameworks, EC-Council CEH alignment, and hands-on offensive/defensive lab simulations across all 8 semesters.
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
