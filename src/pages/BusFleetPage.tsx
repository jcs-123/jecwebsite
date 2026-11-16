import React, { useState } from 'react';
import {
  Bus, MapPin, ShieldCheck, Clock, Navigation,
  Radio, CheckCircle2, ArrowRight, PhoneCall, Compass
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FacilitiesSubNav } from '../components/FacilitiesSubNav';

type DistrictKey = 'thrissur' | 'palakkad' | 'malappuram';

interface RouteCorridor {
  code: string;
  title: string;
  stops: string;
  departure: string;
  arrival: string;
}

const DISTRICT_ROUTES: Record<DistrictKey, { label: string; summary: string; corridors: RouteCorridor[] }> = {
  thrissur: {
    label: 'Thrissur',
    summary: 'Comprehensive city, coastal, and northern corridor coverage connecting major residential hubs directly to Jyothi Hills.',
    corridors: [
      { code: 'JEC-01', title: 'Thrissur Swaraj Round & Punkunnam', stops: 'Sakthan Stand • Swaraj Round • Punkunnam • Poonkunnam • Medical College • Wadakkanchery', departure: '07:25 AM', arrival: '08:30 AM' },
      { code: 'JEC-04', title: 'Kunnamkulam & Guruvayur Corridor', stops: 'Guruvayur • Chavakkad • Kunnamkulam • Kecheri • Mundur • Erumapetty', departure: '07:15 AM', arrival: '08:30 AM' },
      { code: 'JEC-08', title: 'Irinjalakuda & Chalakudy Express', stops: 'Chalakudy • Kodakara • Irinjalakuda • Ollur • Mannuthy Bypass • Athani', departure: '07:05 AM', arrival: '08:30 AM' },
      { code: 'JEC-12', title: 'Chelakkara & Pazhayannur Link', stops: 'Pazhayannur • Chelakkara • Elanad • Thozhuppadam • Cheruthuruthy', departure: '07:40 AM', arrival: '08:30 AM' },
    ],
  },
  palakkad: {
    label: 'Palakkad',
    summary: 'Dedicated highway coaches serving Palakkad town, Ottapalam, and southern panchayat junctions with single-seat comfort.',
    corridors: [
      { code: 'JEC-15', title: 'Palakkad Town & Stadium Bypass', stops: 'Palakkad KSRTC • Stadium Stand • Chandranagar • Parali • Pathiripala • Ottapalam', departure: '07:10 AM', arrival: '08:30 AM' },
      { code: 'JEC-18', title: 'Mannarkkad & Kongad Route', stops: 'Mannarkkad • Kumaramputhur • Kongad • Mundur • Cherpulassery • Shoranur', departure: '07:15 AM', arrival: '08:30 AM' },
      { code: 'JEC-21', title: 'Alathur & Vadakkanchery (PKD)', stops: 'Alathur • Vadakkanchery • Kuthiran • Pattikkad • Peechi Junction • Thrissur Bypass', departure: '07:10 AM', arrival: '08:30 AM' },
    ],
  },
  malappuram: {
    label: 'Malappuram & Shoranur',
    summary: 'Fast transit across the Bharathapuzha bridge linking Pattambi, Perinthalmanna, Valanchery, and Shoranur railhead.',
    corridors: [
      { code: 'JEC-23', title: 'Perinthalmanna & Cherpulassery', stops: 'Perinthalmanna • Angadipuram • Cherpulassery • Kulappully • Shoranur • Cheruthuruthy', departure: '07:20 AM', arrival: '08:30 AM' },
      { code: 'JEC-25', title: 'Pattambi & Kuttippuram Express', stops: 'Kuttippuram • Edappal • Pattambi • Ongallur • Shoranur Junction • Jyothi Hills', departure: '07:25 AM', arrival: '08:30 AM' },
      { code: 'JEC-27', title: 'Shoranur Railway Feeder Shuttle', stops: 'Shoranur Railway Station • Kulappully • Cheruthuruthy Town • Campus Main Gate', departure: '08:05 AM', arrival: '08:25 AM' },
    ],
  },
};

export const BusFleetPage: React.FC<{
  onNavigate: (page: string, subId?: string) => void;
  onOpenTour: () => void;
}> = ({ onNavigate, onOpenTour }) => {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictKey>('thrissur');

  const activeData = DISTRICT_ROUTES[selectedDistrict];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] pt-24 sm:pt-32 overflow-x-clip">
      <FacilitiesSubNav activeRoute="bus-fleet" onNavigate={onNavigate} />

      {/* Centered Editorial Header + 3-Column Bento Showcase */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#FAF7F0] border-b border-[#DFC06A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#C79628] mb-3">
              <Bus size={14} /> Campus Transport Network
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#210532] leading-[1.08] mb-4">
              College Bus Fleet <span className="italic font-normal text-[#C79628]">Network</span>
            </h1>
            <p className="text-base sm:text-lg text-[#4A2559] leading-relaxed">
              Punctual, GPS-monitored institutional transport connecting 25+ routes across Thrissur, Palakkad, and Malappuram districts directly to the Jyothi Hills campus.
            </p>
          </RevealBlock>

          {/* 3-Column Bento Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Sketch Illustration + Fleet Highlights */}
            <RevealBlock className="lg:col-span-4 flex flex-col justify-between bg-white rounded-3xl border border-[#DFC06A]/40 p-5 sm:p-6 shadow-sm">
              <div>
                <div className="rounded-2xl overflow-hidden border border-[#DFC06A]/30 bg-[#FAF7F0] aspect-[4/3] mb-5">
                  <img
                    src="/assets/sketch_bus.jpg"
                    alt="Jyothi Engineering College Bus Fleet Sketch"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C79628]">
                  Door-to-Campus Connectivity
                </span>
                <h2 className="text-2xl font-['Playfair_Display'] font-bold text-[#210532] mt-1.5 mb-2.5">
                  Synchronized Arrival at 08:30 AM
                </h2>
                <p className="text-sm text-[#4A2559] leading-relaxed">
                  Every coach is dispatched to reach Jyothi Hills 15 minutes before the first lecture bell, with evening departures at 04:20 PM and late-lab shuttles for project teams.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DFC06A]/25 flex items-center justify-between text-xs font-semibold text-[#210532]">
                <span className="inline-flex items-center gap-1.5">
                  <Radio size={14} className="text-[#C79628]" /> Live Telemetry Enabled
                </span>
                <span className="text-[#C79628]">3 Districts</span>
              </div>
            </RevealBlock>

            {/* Middle Column: Interactive District Route Finder */}
            <RevealBlock delay={80} className="lg:col-span-5 bg-white rounded-3xl border border-[#DFC06A]/40 p-5 sm:p-7 shadow-sm flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
                    Interactive Route Finder
                  </span>
                  <h2 className="text-xl sm:text-2xl font-['Playfair_Display'] font-bold text-[#210532]">
                    Explore District Corridors
                  </h2>
                </div>
                <Compass size={20} className="text-[#C79628]" />
              </div>

              {/* District Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(['thrissur', 'palakkad', 'malappuram'] as DistrictKey[]).map((key) => {
                  const isActive = selectedDistrict === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedDistrict(key)}
                      className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#250836] text-[#FAF7F0] shadow-sm'
                          : 'bg-[#FAF7F0] text-[#4A2559] border border-[#DFC06A]/40 hover:border-[#C79628]'
                      }`}
                    >
                      {DISTRICT_ROUTES[key].label}
                    </button>
                  );
                })}
              </div>

              <p className="text-xs sm:text-sm text-[#4A2559] mb-4 leading-relaxed">
                {activeData.summary}
              </p>

              <div className="space-y-3 flex-1">
                {activeData.corridors.map((route) => (
                  <div
                    key={route.code}
                    className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/30 hover:border-[#C79628] transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-[#210532] flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-[#250836] text-[#DFC06A] text-[10px] tracking-wider">
                          {route.code}
                        </span>
                        {route.title}
                      </span>
                      <span className="text-[11px] font-semibold text-[#C79628] whitespace-nowrap">
                        {route.departure}
                      </span>
                    </div>
                    <p className="text-xs text-[#4A2559] leading-relaxed flex items-start gap-1.5">
                      <MapPin size={12} className="text-[#C79628] shrink-0 mt-0.5" />
                      <span>{route.stops}</span>
                    </p>
                  </div>
                ))}
              </div>
            </RevealBlock>

            {/* Right Column: Royal Purple CTA Card */}
            <RevealBlock delay={160} className="lg:col-span-3 bg-[#250836] text-[#FAF7F0] rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#C79628]/15 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#DFC06A]/35 text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFC06A] mb-5">
                  <Navigation size={12} /> Fleet Telemetry
                </span>
                <div className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-[#DFC06A] mb-2">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <h3 className="text-xl font-['Playfair_Display'] font-bold text-white mb-3">
                  25+ GPS-Tracked Buses
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                  Real-time route monitoring, speed governors, CCTV surveillance, and instant parent alerts ensure safe daily commutes across Central Kerala.
                </p>

                <div className="space-y-2.5 text-xs text-white/85 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#DFC06A] shrink-0" />
                    <span>Dedicated Transport Officer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#DFC06A] shrink-0" />
                    <span>Shoranur Rail Feeder Shuttle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#DFC06A] shrink-0" />
                    <span>Semester & Annual Pass Desk</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-2.5">
                <button
                  onClick={() => onNavigate('admission-enquiry')}
                  className="w-full py-3 px-4 rounded-xl bg-[#DFC06A] text-[#210532] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Apply for Bus Pass <ArrowRight size={14} />
                </button>
                <button
                  onClick={onOpenTour}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-xs hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Plan Campus Visit
                </button>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Safety, Telemetry & Bus-Pass Guidelines */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C79628]">
                Commuter Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#210532] mt-1">
                Safety, Telemetry &amp; Bus-Pass Guidelines
              </h2>
            </div>
            <p className="text-sm text-[#4A2559] max-w-md">
              Streamlined onboarding for first-year and continuing day scholars through the College Transport Office.
            </p>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealBlock className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/35">
              <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#210532] mb-2">
                Safety &amp; GPS Compliance
              </h3>
              <p className="text-sm text-[#4A2559] leading-relaxed">
                All coaches undergo periodic fitness inspections, feature speed governors, first-aid kits, fire extinguishers, and verified experienced drivers.
              </p>
            </RevealBlock>

            <RevealBlock delay={80} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/35">
              <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#210532] mb-2">
                Boarding &amp; Pass Issuance
              </h3>
              <p className="text-sm text-[#4A2559] leading-relaxed">
                Students select their nearest boarding point during admission or semester registration. Smart RFID-linked bus passes are issued within 48 hours.
              </p>
            </RevealBlock>

            <RevealBlock delay={160} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/35">
              <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center mb-4">
                <PhoneCall size={20} />
              </div>
              <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#210532] mb-2">
                Transport Helpdesk
              </h3>
              <p className="text-sm text-[#4A2559] leading-relaxed">
                Dedicated route coordinators assist with stop adjustments, exam-day schedules, and Shoranur railway station shuttle timings.
              </p>
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
};
