import React, { useState, useRef, useEffect } from 'react';
import {
  Bus, MapPin, ShieldCheck, Clock, Navigation,
  ArrowRight, PhoneCall, Map, X
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
}> = ({ onNavigate }) => {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictKey>('thrissur');
  const [activeMapRoute, setActiveMapRoute] = useState<RouteCorridor | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [busCoords, setBusCoords] = useState({ x: 55, y: 175 });
  const [stopNodes, setStopNodes] = useState<{ x: number; y: number }[]>([]);
  const roadPathRef = useRef<SVGPathElement>(null);
  const stopsScrollRef = useRef<HTMLDivElement>(null);

  const activeData = DISTRICT_ROUTES[selectedDistrict];
  const featuredRoute = activeData.corridors[0];

  const scrollToCorridors = () => {
    const el = document.getElementById('district-corridors-detail');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openRouteMap = (route: RouteCorridor) => {
    setActiveMapRoute(route);
    setScrollProgress(0);
    if (stopsScrollRef.current) {
      stopsScrollRef.current.scrollTop = 0;
    }
    setTimeout(() => {
      const el = document.getElementById('route-road-map');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 60);
  };

  useEffect(() => {
    const path = roadPathRef.current;
    if (!path || !activeMapRoute) return;
    const totalLength = path.getTotalLength();
    const clamped = Math.max(0, Math.min(1, scrollProgress));
    const pt = path.getPointAtLength(clamped * totalLength);
    setBusCoords({ x: pt.x, y: pt.y });

    const stops = getStopList(activeMapRoute);
    const nodes = stops.map((_, idx) => {
      const ratio = stops.length > 1 ? idx / (stops.length - 1) : 0;
      const p = path.getPointAtLength(ratio * totalLength);
      return { x: p.x, y: p.y };
    });
    setStopNodes(nodes);
  }, [scrollProgress, activeMapRoute]);

  const handleStopsScroll = () => {
    const el = stopsScrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    setScrollProgress(el.scrollTop / maxScroll);
  };

  const jumpToStop = (index: number, total: number) => {
    const el = stopsScrollRef.current;
    if (!el || total <= 1) return;
    const ratio = index / (total - 1);
    const maxScroll = el.scrollHeight - el.clientHeight;
    el.scrollTo({ top: ratio * maxScroll, behavior: 'smooth' });
    setScrollProgress(ratio);
  };

  const getStopList = (route: RouteCorridor) => {
    const rawStops = route.stops.split('•').map((s) => s.trim()).filter(Boolean);
    return [...rawStops, 'Jyothi Hills Campus'];
  };

  const parseTimeToMinutes = (timeStr: string) => {
    const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return 445;
    let hours = parseInt(match[1], 10);
    const mins = parseInt(match[2], 10);
    const period = match[3].toUpperCase();
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return hours * 60 + mins;
  };

  const formatMinutesToTime = (totalMins: number) => {
    const rounded = Math.round(totalMins);
    const h24 = Math.floor(rounded / 60) % 24;
    const mins = rounded % 60;
    const period = h24 >= 12 ? 'PM' : 'AM';
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    return `${String(h12).padStart(2, '0')}:${String(mins).padStart(2, '0')} ${period}`;
  };

  const getStopTimes = (route: RouteCorridor, count: number) => {
    const startMins = parseTimeToMinutes(route.departure);
    const endMins = parseTimeToMinutes(route.arrival);
    if (count <= 1) return [route.departure];
    return Array.from({ length: count }, (_, idx) => {
      if (idx === 0) return route.departure;
      if (idx === count - 1) return route.arrival;
      const ratio = idx / (count - 1);
      return formatMinutesToTime(startMins + ratio * (endMins - startMins));
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#210532] overflow-x-clip">
      <FacilitiesSubNav activeRoute="bus-fleet" onNavigate={onNavigate} />

      {/* Sweeping Curved Editorial Hero + Floating Route Finder Strip */}
      <section className="relative bg-[#FAF7F0] overflow-hidden pb-10 sm:pb-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0 min-h-[360px] lg:min-h-[400px]">
            {/* Left Editorial Content */}
            <RevealBlock direction="left" className="lg:col-span-5 relative z-20 lg:pr-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C79628]">
                    <Bus size={15} className="text-[#C79628]" />
                    Campus Transport Network
                  </span>
                  <span className="hidden sm:flex items-center flex-1 max-w-[90px]">
                    <span className="h-[1px] flex-1 bg-[#DFC06A]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79628]" />
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] font-black text-[#210532] leading-[1.03]">
                  College Bus Fleet
                  <span className="block italic font-bold text-[#C79628] mt-0.5">
                    Network
                  </span>
                </h1>

                <p className="text-sm sm:text-[15px] text-[#4A2559] leading-relaxed max-w-md">
                  GPS-monitored institutional transport connecting 25+ routes across Thrissur, Palakkad and Malappuram to the Jyothi Hills campus.
                </p>

                <div className="pt-2">
                  <button
                    onClick={scrollToCorridors}
                    className="px-6 py-3 rounded-full bg-[#360E44] hover:bg-[#210532] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2.5 shadow-md transition-colors cursor-pointer"
                  >
                    <span>Explore District Corridors</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </RevealBlock>

            {/* Right Sweeping Curved Bus Photo */}
            <RevealBlock direction="right" delay={80} className="lg:col-span-7 relative">
              <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-3xl lg:rounded-none lg:rounded-tl-[180px] lg:rounded-bl-[80px] lg:rounded-tr-3xl overflow-hidden shadow-xl border border-[#DFC06A]/35">
                <img
                  src="/assets/bus_fleet_hero.jpg"
                  alt="Jyothi Engineering College Yellow Bus on Kerala Campus Road"
                  className="w-full h-full object-cover object-center"
                />
                <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAF7F0]/35 to-transparent pointer-events-none" />
              </div>
            </RevealBlock>
          </div>

          {/* Floating Overlapping Interactive Route Finder + Fleet Telemetry Strip */}
          <div className="relative z-30 mt-6 lg:-mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Left Interactive Route Finder Card */}
            <RevealBlock direction="up" delay={120} className="lg:col-span-9">
              <div className="h-full rounded-3xl bg-[#FCF9F2]/95 backdrop-blur-md border border-[#DFC06A]/55 shadow-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-5 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C79628]">
                    Interactive Route Finder
                  </span>
                  <h2 className="text-xl sm:text-2xl font-['Playfair_Display',serif] font-bold text-[#210532]">
                    Explore District Corridors
                  </h2>
                  <p className="text-xs text-[#4A2559] leading-relaxed">
                    {activeData.summary}
                  </p>
                </div>

                <div className="md:col-span-7 md:border-l md:border-[#DFC06A]/45 md:pl-5 space-y-3">
                  <div className="text-[11px] font-bold text-[#210532]">Select District</div>
                  <div className="flex flex-wrap gap-2">
                    {(['thrissur', 'palakkad', 'malappuram'] as DistrictKey[]).map((key) => {
                      const isActive = selectedDistrict === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedDistrict(key)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#360E44] text-white shadow-sm'
                              : 'bg-[#FAF7F0] text-[#4A2559] border border-[#DFC06A]/55 hover:border-[#C79628]'
                          }`}
                        >
                          {DISTRICT_ROUTES[key].label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#FAF7F0] border border-[#DFC06A]/45">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#360E44] text-[#FDE68A] text-[10px] font-bold tracking-wider">
                      {featuredRoute.code}
                    </span>
                    <span className="text-xs font-semibold text-[#210532]">
                      {featuredRoute.title}
                    </span>
                    <button
                      onClick={() => openRouteMap(featuredRoute)}
                      className="ml-auto px-3 py-1 rounded-full bg-[#250836] hover:bg-[#3B1047] text-[#FDE68A] text-[11px] font-bold inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Map size={12} />
                      <span>View Map</span>
                    </button>
                  </div>
                </div>
              </div>
            </RevealBlock>

            {/* Right Dark Plum Fleet Telemetry Card */}
            <RevealBlock direction="up" delay={180} className="lg:col-span-3">
              <div className="h-full rounded-3xl bg-[#2B083B] text-white p-5 sm:p-6 shadow-xl border border-[#DFC06A]/35 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-[#C79628]/15 blur-xl pointer-events-none" />
                <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/10 border border-[#DFC06A]/40 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFC06A] mb-3">
                  <Navigation size={11} /> Fleet Telemetry
                </span>
                <div className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#DFC06A] leading-none">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-sm font-semibold text-white mt-1.5">
                  GPS-Tracked Buses
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Full District Corridors List + Interactive Stop-Wise Road Map */}
      <section id="district-corridors-detail" className="py-10 sm:py-12 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeData.corridors.map((route) => {
              const isSelected = activeMapRoute?.code === route.code;
              return (
                <div
                  key={route.code}
                  className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all shadow-2xs ${
                    isSelected
                      ? 'border-[#C79628] ring-2 ring-[#DFC06A]/40'
                      : 'border-[#DFC06A]/40 hover:border-[#C79628]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-[#210532] flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#250836] text-[#DFC06A] text-[10px] tracking-wider">
                        {route.code}
                      </span>
                      {route.title}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#C79628] whitespace-nowrap">
                        {route.departure} – {route.arrival}
                      </span>
                      <button
                        onClick={() => openRouteMap(route)}
                        className={`px-3 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#C79628] text-white'
                            : 'bg-[#FAF7F0] hover:bg-[#250836] text-[#210532] hover:text-[#FDE68A] border border-[#DFC06A]/60'
                        }`}
                      >
                        <Map size={12} />
                        <span>View Map</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-[#4A2559] leading-relaxed flex items-start gap-1.5">
                    <MapPin size={13} className="text-[#C79628] shrink-0 mt-0.5" />
                    <span>{route.stops}</span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Schematic Stop-Wise Road Map Panel */}
          {activeMapRoute && (() => {
            const stopList = getStopList(activeMapRoute);
            const stopTimes = getStopTimes(activeMapRoute, stopList.length);
            const activeStopIndex = Math.min(
              stopList.length - 1,
              Math.round(scrollProgress * (stopList.length - 1))
            );
            return (
              <div
                id="route-road-map"
                className="rounded-3xl bg-[#FAF7F0] text-[#210532] border border-[#DFC06A]/55 shadow-xl overflow-hidden animate-fade-in"
              >
                {/* Top Cream Header with Bus Selector & Curved Plum Corner */}
                <div className="relative px-5 sm:px-7 py-4 border-b border-[#DFC06A]/35 flex flex-wrap items-center justify-between gap-4 bg-[#FCF9F2] overflow-hidden">
                  <div className="hidden sm:block absolute -top-10 -right-10 w-44 h-28 bg-[#4B1040] rounded-bl-[100px] border-b-2 border-l-2 border-[#DFC06A] pointer-events-none" />

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#210532]">Bus</span>
                      <select
                        value={activeMapRoute.code}
                        onChange={(e) => {
                          const found = activeData.corridors.find((c) => c.code === e.target.value);
                          if (found) openRouteMap(found);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white border border-[#DFC06A]/65 text-xs font-bold text-[#210532] focus:outline-none focus:border-[#4B1040] cursor-pointer"
                      >
                        {activeData.corridors.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.code}
                          </option>
                        ))}
                      </select>
                    </div>

                    <span className="hidden sm:block h-8 w-[1px] bg-[#DFC06A]/55" />

                    <div>
                      <h3 className="text-lg sm:text-xl font-['Playfair_Display',serif] font-bold text-[#210532] leading-tight">
                        {activeMapRoute.title}
                      </h3>
                      <p className="text-xs text-[#4A2559]">
                        Stop-wise route &amp; timings
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveMapRoute(null)}
                    className="relative z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#210532] border border-[#DFC06A]/50 shadow-xs transition-colors cursor-pointer"
                    aria-label="Close route map"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* 2-Column Schematic Map + Stops & Timings Table */}
                <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                  {/* Left: Light Schematic Map Canvas */}
                  <div className="lg:col-span-7 rounded-2xl bg-white border border-[#DFC06A]/45 p-4 sm:p-5 flex flex-col justify-between shadow-2xs relative overflow-hidden">
                    <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
                      <span className="px-3 py-1 rounded-md bg-[#FAF7F0] border border-[#DFC06A]/40 text-[10px] font-bold uppercase tracking-[0.14em] text-[#4A2559]">
                        Schematic Route • Not Live
                      </span>
                      <span className="text-[11px] font-semibold text-[#C79628]">
                        Scroll stops list to move bus →
                      </span>
                    </div>

                    <div className="relative w-full aspect-[600/260] min-h-[230px]">
                      <svg
                        viewBox="0 0 600 260"
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Subtle Schematic Street Network */}
                        <g stroke="#F1EDE4" strokeWidth="2" fill="none">
                          <path d="M 0 60 L 180 110 L 340 40 L 600 95" />
                          <path d="M 40 240 L 170 150 L 310 225 L 540 140" />
                          <path d="M 110 0 L 160 120 L 95 260" />
                          <path d="M 270 0 L 245 145 L 330 260" />
                          <path d="M 435 0 L 405 155 L 495 260" />
                          <path d="M 0 185 L 220 190 L 440 105 L 600 185" />
                        </g>

                        {/* Gold Curved Route Path */}
                        <path
                          ref={roadPathRef}
                          d="M 65 188 C 145 180, 175 110, 260 120 C 345 130, 355 185, 430 168 C 485 155, 515 125, 540 112"
                          fill="none"
                          stroke="#CFA33A"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Numbered Stop Nodes along the Gold Curve */}
                      {stopNodes.map((node, idx) => {
                        const isActive = idx === activeStopIndex;
                        const isFirst = idx === 0;
                        const isLast = idx === stopNodes.length - 1;
                        return (
                          <button
                            key={stopList[idx]}
                            onClick={() => jumpToStop(idx, stopList.length)}
                            style={{
                              left: `${(node.x / 600) * 100}%`,
                              top: `${(node.y / 260) * 100}%`,
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                            title={stopList[idx]}
                          >
                            {isFirst && (
                              <span className="absolute top-6 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#FAF7F0] border border-[#DFC06A]/70 text-[10px] font-bold text-[#210532] whitespace-nowrap shadow-xs">
                                {stopList[idx]}
                              </span>
                            )}
                            {isLast && (
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#FAF7F0] border border-[#DFC06A]/70 text-[10px] font-bold text-[#210532] whitespace-nowrap shadow-xs">
                                Jyothi Hills
                              </span>
                            )}
                            <span
                              className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center transition-all border-2 ${
                                isActive
                                  ? 'bg-[#DFC06A] text-[#210532] border-[#4B1040] scale-110 shadow-md'
                                  : 'bg-white text-[#210532] border-[#4B1040] group-hover:bg-[#FAF7F0]'
                              }`}
                            >
                              {idx + 1}
                            </span>
                          </button>
                        );
                      })}

                      {/* Moving Bus Icon + Active Stop Tooltip */}
                      <div
                        className="absolute -translate-x-1/2 -translate-y-full pointer-events-none transition-all duration-200 ease-out z-20 pb-3.5"
                        style={{
                          left: `${(busCoords.x / 600) * 100}%`,
                          top: `${(busCoords.y / 260) * 100}%`,
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <span className="px-3 py-1 rounded-lg bg-[#4B1040] text-white text-[11px] font-bold whitespace-nowrap shadow-md mb-1">
                            {stopList[activeStopIndex]}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-[#210532] text-[#FDE68A] border-2 border-white shadow-lg flex items-center justify-center">
                            <Bus size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Stops & Timings Table Card */}
                  <div className="lg:col-span-5 rounded-2xl bg-white border border-[#DFC06A]/45 shadow-2xs overflow-hidden flex flex-col">
                    <div className="bg-[#4B1040] text-white px-5 py-3.5">
                      <h4 className="text-base font-['Playfair_Display',serif] font-bold">
                        Stops &amp; timings
                      </h4>
                    </div>

                    <div className="px-5 py-2.5 border-b border-[#DFC06A]/30 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#4A2559]">
                      <span>Stop</span>
                      <span>Time</span>
                    </div>

                    <div
                      ref={stopsScrollRef}
                      onScroll={handleStopsScroll}
                      className="flex-1 max-h-[250px] overflow-y-auto divide-y divide-[#DFC06A]/20"
                    >
                      {stopList.map((stop, idx) => {
                        const isCurrent = idx === activeStopIndex;
                        return (
                          <button
                            key={stop}
                            onClick={() => jumpToStop(idx, stopList.length)}
                            className={`w-full text-left px-5 py-2.5 flex items-center justify-between gap-3 transition-colors cursor-pointer focus:outline-none ${
                              isCurrent
                                ? 'bg-[#F8ECCE]'
                                : 'bg-white hover:bg-[#FAF7F0]'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${
                                  isCurrent
                                    ? 'bg-[#C79628] text-[#210532]'
                                    : 'bg-[#4B1040] text-white'
                                }`}
                              >
                                {idx + 1}
                              </span>
                              <span
                                className={`text-xs sm:text-sm truncate ${
                                  isCurrent ? 'font-bold text-[#210532]' : 'font-medium text-[#210532]'
                                }`}
                              >
                                {stop}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-[#210532] shrink-0 tabular-nums">
                              {stopTimes[idx]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="px-5 py-2.5 border-t border-[#DFC06A]/30 bg-[#FCF9F2] text-[11px] text-[#4A2559]">
                      Estimated pickup times • Arrive 5 mins early at boarding stop
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Safety, Telemetry & Bus-Pass Guidelines */}
      <section className="py-12 sm:py-14 bg-white border-t border-[#DFC06A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C79628]">
                Commuter Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',serif] font-bold text-[#210532] mt-1">
                Safety, Telemetry &amp; Bus-Pass Guidelines
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A2559] max-w-md">
              Streamlined onboarding for first-year and continuing day scholars through the College Transport Office.
            </p>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealBlock className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/35">
              <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532] mb-2">
                Safety &amp; GPS Compliance
              </h3>
              <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                All coaches undergo periodic fitness inspections, feature speed governors, first-aid kits, fire extinguishers, and verified experienced drivers.
              </p>
            </RevealBlock>

            <RevealBlock delay={80} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/35">
              <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532] mb-2">
                Boarding &amp; Pass Issuance
              </h3>
              <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                Students select their nearest boarding point during admission or semester registration. Smart RFID-linked bus passes are issued within 48 hours.
              </p>
            </RevealBlock>

            <RevealBlock delay={160} className="p-6 rounded-3xl bg-[#FAF7F0] border border-[#DFC06A]/35">
              <div className="w-11 h-11 rounded-2xl bg-[#250836] text-[#DFC06A] flex items-center justify-center mb-4">
                <PhoneCall size={20} />
              </div>
              <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#210532] mb-2">
                Transport Helpdesk
              </h3>
              <p className="text-xs sm:text-sm text-[#4A2559] leading-relaxed">
                Dedicated route coordinators assist with stop adjustments, exam-day schedules, and Shoranur railway station shuttle timings.
              </p>
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
};
