import React from 'react';
import {
  Briefcase, Video, ShieldCheck, Users, CheckCircle2
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

export const BoardRoomPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="board-room" onNavigate={onNavigate} />

      {/* 3-Column Responsive Executive Architectural Showcase */}
      <section className="py-6 sm:py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Column: Cream Editorial Card */}
            <RevealBlock direction="left" className="lg:col-span-3 flex">
              <div className="w-full rounded-3xl bg-[#FCF9F2] border border-[#DFC06A]/55 p-6 flex flex-col justify-between shadow-sm space-y-5 relative">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DFC06A]/65 text-[#C79628] text-[9.5px] font-bold uppercase tracking-[0.16em]">
                    <Briefcase size={11} /> Executive Governance Suite
                  </div>

                  <div className="flex items-stretch gap-3">
                    <div className="flex gap-1 py-1 opacity-65 shrink-0">
                      <span className="w-[1px] h-full bg-[#DFC06A]" />
                      <span className="w-[1px] h-4/5 my-auto bg-[#DFC06A]/70" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.03]">
                      Executive
                      <span className="block italic font-bold text-[#C79628] mt-0.5">
                        Board Room
                      </span>
                    </h1>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#4A2559] leading-relaxed">
                    An acoustically treated conference suite for Academic Council meetings, Governing Body deliberations, peer-team reviews and corporate MoU signings.
                  </p>
                </div>
              </div>
            </RevealBlock>

            {/* Center Column: Clean Full-Height Board Room Photograph */}
            <RevealBlock delay={60} className="lg:col-span-6 flex">
              <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-[#DFC06A]/45 bg-[#250836] min-h-[260px] sm:min-h-[340px]">
                <img
                  src="/assets/board_room_hero.jpg"
                  alt="Jyothi Executive Board Room"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </RevealBlock>

            {/* Right Column: Deep Plum "Room at a glance" Card */}
            <RevealBlock direction="right" delay={120} className="lg:col-span-3 flex">
              <div className="w-full rounded-3xl bg-[#3B0A3E] text-white p-6 shadow-xl border border-[#DFC06A]/40 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <h2 className="text-lg font-['Playfair_Display',serif] italic font-semibold text-white/95">
                    Room at a glance
                  </h2>

                  <div className="space-y-3.5">
                    <div className="border-l-2 border-[#DFC06A] pl-3.5 pb-3 border-b border-[#DFC06A]/25">
                      <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-white leading-none">
                        <AnimatedCounter end={28} />
                      </div>
                      <div className="text-[11px] text-white/80 mt-1">Executive Seats</div>
                    </div>

                    <div className="border-l-2 border-[#DFC06A] pl-3.5 pb-3 border-b border-[#DFC06A]/25">
                      <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-white leading-none">
                        4K
                      </div>
                      <div className="text-[11px] text-white/80 mt-1">Telepresence</div>
                    </div>

                    <div className="border-l-2 border-[#DFC06A] pl-3.5">
                      <div className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-white leading-none">
                        100%
                      </div>
                      <div className="text-[11px] text-white/80 mt-1">Acoustic Seal</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DFC06A]/30">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DFC06A]">
                    Administrative Block • Level 2
                  </div>
                  <div className="text-xs text-white/85 mt-1 leading-snug">
                    Dual 85-inch Interactive Displays &amp; Tabletop Array Mics
                  </div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Capabilities Strip */}
      <section className="py-12 bg-white border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Video,
              title: '4K Hybrid Conferencing',
              desc: 'Auto-tracking PTZ cameras and echo-cancelling ceiling arrays for seamless global university and recruiter board meetings.',
            },
            {
              icon: Users,
              title: 'Autonomous Governance Hub',
              desc: 'Dedicated venue for Board of Studies, IQAC audits, Academic Council sessions, and international accreditation panels.',
            },
            {
              icon: ShieldCheck,
              title: 'Wireless Casting & Security',
              desc: 'One-click encrypted screen sharing from any executive laptop alongside high-speed redundant fiber connectivity.',
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/40 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532]">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">{card.desc}</p>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C79628]">
                  <CheckCircle2 size={13} /> Verified Campus Facility
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Institutional Governance Bodies & Acoustic Specs */}
      <section className="py-12 sm:py-14 bg-[#FAF7F0] border-t border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DFC06A]/45 p-7 sm:p-8 shadow-xs space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
                Governance &amp; Accreditation
              </span>
              <h2 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
                Councils &amp; Conclaves Hosted
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Governing Body & Trust', desc: 'Archdiocesan management reviews, strategic capital roadmaps, and policy approvals.' },
                { title: 'Academic Council', desc: 'Autonomous KTU curriculum ratification, examination reforms, and credit frameworks.' },
                { title: 'NBA & NAAC Peer Teams', desc: 'Accreditation exit meetings, IQAC documentation audits, and quality benchmarking.' },
                { title: 'Corporate MoU Conclaves', desc: 'Executive briefings with Tier-1 recruiters, R&D partners, and visiting Deans.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/35 space-y-1">
                  <h3 className="text-sm font-bold text-[#210532]">{item.title}</h3>
                  <p className="text-xs text-[#4A2559] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#250836] text-white rounded-3xl border border-[#DFC06A]/45 p-7 sm:p-8 shadow-xl flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFC06A]">
                Technical Architecture
              </span>
              <h3 className="text-2xl font-['Playfair_Display',serif] font-bold">
                Suite Specifications
              </h3>
              <div className="space-y-2.5 text-xs pt-2">
                {[
                  ['Seating Layout', '28-Seat Executive Oak Table'],
                  ['Visual Systems', 'Dual 85" 4K Interactive Panels'],
                  ['Audio Pickup', '14 Gooseneck Array Microphones'],
                  ['Connectivity', 'Redundant 1 Gbps Fiber + Wi-Fi 6'],
                  ['Environment', 'Silent VRV Climate Control'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/75">{label}</span>
                    <span className="font-bold text-[#FDE68A]">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

