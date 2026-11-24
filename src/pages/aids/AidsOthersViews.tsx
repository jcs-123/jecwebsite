import React, { useState } from 'react';
import {
  Calendar, FileText, Image as ImageIcon, Sparkles, MessageSquare,
  Download, MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2,
  Users, Trophy, Star
} from 'lucide-react';

/* 1. Department Events Page */
export const AidsEventsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Conclaves, Workshops & Datathons</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Events & Workshops
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Annual Event Calendar
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          The Department of AI & DS actively hosts state and national technical symposia, 36-hour hackathons, hands-on GPU bootcamps, and faculty development programs in partnership with industry leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#C79628]">Flagship National Datathon</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Annual</span>
          </div>
          <h4 className="font-bold text-base text-[#28052B]">COGNISCIENCE 2024</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            A 36-hour national hackathon focused on Generative AI and Foundation Model applications for agriculture, healthcare, and Malayalam speech transcription. Over 450 participants from 32 engineering institutions competed for cash prizes worth ₹1.5 Lakhs.
          </p>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]">
            Date: September 20–21, 2024 • Venue: JEC Auditorium
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#C79628]">Hands-On Intensive</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">Bootcamp</span>
          </div>
          <h4 className="font-bold text-base text-[#28052B]">NVIDIA Jetson Edge BootCamp</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            A 5-day deep technical bootcamp on deploying computer vision and object tracking models on NVIDIA Jetson Orin Nano modules. Guided by certified instructors from NVIDIA Deep Learning Institute.
          </p>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]">
            Date: June 15–19, 2024 • Venue: NVIDIA GPU Lab
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-[#C79628]">Expert Lecture Series</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold">Industry Series</span>
          </div>
          <h4 className="font-bold text-base text-[#28052B]">LLM Production Deployments</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            An interactive masterclass series featuring distinguished guest speakers from Google Cloud, Microsoft Research, and Amazon Web Services detailing RAG architectures, model quantization, and vLLM serving.
          </p>
          <div className="text-xs text-[#7A647F] pt-2 border-t border-[#E7D6C1]">
            Date: Monthly Colloquium • Online & Offline Hybrid
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Bulletin ("AI Horizons") Page */
export const AidsBulletinPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Department Technical Periodical</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Bulletin ("AI Horizons")
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Quarterly Issue
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          "AI Horizons" is the official technical journal and newsletter published quarterly by the Department of Artificial Intelligence & Data Science. It documents student capstone breakthroughs, faculty editorial commentaries on AI governance, patent releases, and campus technical triumphs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Latest Issue • 2024</span>
              <h4 className="font-bold text-base text-[#28052B] mt-0.5">AI Horizons – Volume 4, Issue 2</h4>
              <div className="text-xs text-[#7A647F] mt-1">Theme: Autonomous Edge Robotics & LLM Safety</div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-[#28052B] text-white font-bold">Oct 2024</span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Features an in-depth editorial by HOD Dr. Deepa V. on ethical guardrails in autonomous decision agents, student research papers on plant pathology vision systems, and alumnus career stories from Germany.
          </p>

          <button
            onClick={() => alert("Downloading AI Horizons Vol. 4 Issue 2 PDF")}
            className="w-full py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#C79628]" />
            <span>Download Edition (PDF • 8.4 MB)</span>
          </button>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C79628]">Archived Issue • 2024</span>
              <h4 className="font-bold text-base text-[#28052B] mt-0.5">AI Horizons – Volume 4, Issue 1</h4>
              <div className="text-xs text-[#7A647F] mt-1">Theme: Deep Learning in Healthcare Diagnostics</div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-slate-200 text-slate-800 font-bold">May 2024</span>
          </div>

          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Spotlights our patent grant on multi-modal assistive navigation, SIH hackathon team journeys, faculty Scopus publications overview, and technical tutorials on LoRA fine-tuning on consumer GPUs.
          </p>

          <button
            onClick={() => alert("Downloading AI Horizons Vol. 4 Issue 1 PDF")}
            className="w-full py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DFC06A] text-[#28052B] hover:bg-[#28052B] hover:text-[#DFC06A] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#C79628]" />
            <span>Download Edition (PDF • 7.9 MB)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* 3. Gallery Page */
export const AidsGalleryPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Campus Moments & Infrastructure</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Department Gallery
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            High-Definition Highlights
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          A visual glimpse into our high-performance GPU laboratories, student collaboration spaces, hackathon project exhibitions, and association inaugurations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'NVIDIA GPU Cluster Lab', cat: 'Laboratory', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
          { title: 'COGNISCIENCE Datathon Arena', cat: 'Hackathon', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop' },
          { title: 'Edge AI Robotics Prototyping', cat: 'Prototyping', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop' },
          { title: 'Department Advisory Board Meet', cat: 'Governance', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop' },
          { title: 'Big Data Sandbox Session', cat: 'Lab Session', src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop' },
          { title: 'AIDA Association Tech Fest', cat: 'Student Body', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop' },
        ].map((img, idx) => (
          <div key={idx} className="rounded-3xl overflow-hidden border border-[#E7D6C1] bg-white shadow-xs group">
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#28052B]">{img.title}</h4>
                <div className="text-[10px] text-[#C79628] font-semibold mt-0.5">{img.cat}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 4. Association (AIDA) Page */
export const AidsAssociationPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Official Student Body</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                AIDA – AI & DS Department Association
              </h2>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DFC06A]/50 text-xs font-mono font-bold text-[#28052B]">
            Estd. 2021
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          AIDA (Artificial Intelligence & Data Science Association) is the premier student organization run by undergraduate scholars of the department. AIDA fosters peer learning, weekly algorithmic problem-solving circles, hackathon teams, industry mentoring webinars, and community technology initiatives for schools across the region.
        </p>
      </div>

      {/* Office Bearers */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm space-y-5">
        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#28052B]">
          AIDA Executive Committee 2024–2025
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
            <span className="text-[10px] font-bold text-[#C79628] uppercase">President</span>
            <div className="font-bold text-xs text-[#28052B]">Er. Nevin Paul</div>
            <div className="text-[11px] text-[#7A647F]">Final Year (S7/S8)</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
            <span className="text-[10px] font-bold text-[#C79628] uppercase">Secretary</span>
            <div className="font-bold text-xs text-[#28052B]">Er. Sneha M.</div>
            <div className="text-[11px] text-[#7A647F]">Third Year (S5/S6)</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
            <span className="text-[10px] font-bold text-[#C79628] uppercase">Joint Secretary</span>
            <div className="font-bold text-xs text-[#28052B]">Er. Alwin K.</div>
            <div className="text-[11px] text-[#7A647F]">Second Year (S3/S4)</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7D6C1] space-y-1">
            <span className="text-[10px] font-bold text-[#C79628] uppercase">Staff Advisor</span>
            <div className="font-bold text-xs text-[#28052B]">Prof. Anoop V.</div>
            <div className="text-[11px] text-[#7A647F]">Associate Professor, AI & DS</div>
          </div>
        </div>
      </div>

      {/* Flagship Activities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">CodeAI Weekly Contests</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Weekly algorithmic speed programming competitions hosted on HackerRank and LeetCode with leaderboard rankings and prizes.
          </p>
        </div>
        <div className="p-5 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">Peer Tutoring Circles</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Senior students mentor junior batches in Data Structures, Python for ML, Linux commands, and version control best practices.
          </p>
        </div>
        <div className="p-5 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-[#28052B]">School AI Outreach</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed font-light">
            Interactive workshops introducing higher-secondary school pupils to robotics, AI ethics, and interactive Scratch programming.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 5. Reach Us Page */
export const AidsReachUsPage: React.FC<{ onOpenApply: () => void }> = ({ onOpenApply }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7D6C1] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E7D6C1]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#28052B] flex items-center justify-center text-[#DFC06A] shadow-sm">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C79628]">Department Contact & Secretariat</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#28052B]">
                Reach the Department of AI & DS
              </h2>
            </div>
          </div>
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F6CE5E] via-[#F2BE42] to-[#E8AE2F] text-[#28052B] font-extrabold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Admissions Inquiry
          </button>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-[#4A384F] leading-relaxed font-light">
          Whether you are an aspiring student, parent, corporate recruiter, or academic research collaborator, we are delighted to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Campus Location</h4>
          <p className="text-xs text-[#4A384F] leading-relaxed">
            Department of Artificial Intelligence & Data Science<br />
            3rd Floor, St. Thomas Central Academic Block<br />
            Jyothi Engineering College (Autonomous)<br />
            Cheruthuruthy, Thrissur, Kerala – 679531
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Email & Direct Extensions</h4>
          <div className="text-xs text-[#4A384F] space-y-2">
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">HOD Email:</div>
              <a href="mailto:deepav@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">deepav@jecc.ac.in</a>
            </div>
            <div>
              <div className="text-[10px] text-[#C79628] font-bold uppercase">Secretariat:</div>
              <a href="mailto:aids@jecc.ac.in" className="hover:underline text-[#28052B] font-semibold">aids@jecc.ac.in</a>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E7D6C1] shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#28052B] text-[#DFC06A] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#28052B]">Telephones & Visiting Hours</h4>
          <div className="text-xs text-[#4A384F] space-y-1.5">
            <div>• Tel: <strong>+91 4884 259000</strong> (Ext. 312)</div>
            <div>• Direct Helpline: <strong>+91 95269 24455</strong></div>
            <div>• Office Hours: Monday – Friday, 9:00 AM – 4:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
