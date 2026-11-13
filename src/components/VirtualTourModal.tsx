import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X, MapPin, Eye, Compass, Layers, CheckCircle2, ChevronLeft, ChevronRight,
  Maximize2, Minimize2, ZoomIn, ZoomOut, Play, Pause, Volume2, VolumeX,
  Navigation, RotateCcw, Info, Sparkles, Map, Footprints, ArrowUp, ExternalLink
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Hotspot {
  id: string;
  title: string;
  category: string;
  yaw: number; // horizontal angle in degrees (0 - 360)
  pitch: number; // vertical angle (-20 to +20)
  desc: string;
  image?: string;
  keyMetric?: string;
}

interface TourSpot {
  id: string;
  name: string;
  tag: string;
  category: 'Administration' | 'Innovation & Labs' | 'Academics & Library' | 'Sports & Athletics' | 'Sustainability';
  coordinates: { x: number; y: number }; // percentage on radar map (0-100)
  gps: string;
  image: string;
  panoramaWidth?: number; // virtual panorama factor
  desc: string;
  highlights: string[];
  audioNarration: string;
  hotspots: Hotspot[];
  nextSpotId: string;
  nextSpotLabel: string;
  prevSpotId: string;
  prevSpotLabel: string;
}

const CAMPUS_STOPS: TourSpot[] = [
  {
    id: "admin",
    name: "Main Administrative Portico & Decennial Pavilion",
    tag: "Autonomous Headquarters",
    category: "Administration",
    coordinates: { x: 48, y: 52 },
    gps: "10.7428° N, 76.2872° E",
    image: "/assets/jyothi_campus_hero.jpg",
    desc: "The iconic neoclassical administrative entrance of Jyothi Engineering College, framed by manicured royal palm courtyards and the central green esplanade. Houses the Principal's Secretariat, autonomous examination wing, and institutional governance chambers.",
    highlights: ["Autonomous Examination Center", "Central Governing Boardroom", "Principal's Office", "Visitor Lounge"],
    audioNarration: "Welcome to Jyothi Hills, Cheruthuruthy. Established in 2002 under the Catholic Archdiocese of Trichur, our autonomous campus spans over 30 serene green acres nestled in the Western Ghats foothills.",
    nextSpotId: "fablab",
    nextSpotLabel: "Walk to FabLab Kerala & Robotics",
    prevSpotId: "solar",
    prevSpotLabel: "View 100 kW Green Solar Farm",
    hotspots: [
      {
        id: "exam-cell",
        title: "Autonomous Examination Wing",
        category: "Academic Governance",
        yaw: 40,
        pitch: -4,
        desc: "High-security autonomous examination control center equipped with digital script barcoding and confidential processing vaults.",
        keyMetric: "UGC Autonomous 2024"
      },
      {
        id: "secretariat",
        title: "Principal & Dean's Secretariat",
        category: "Administration",
        yaw: 155,
        pitch: -2,
        desc: "Executive administrative suite overseeing 3,000+ engineering scholars and 180+ distinguished doctoral faculty.",
        keyMetric: "Level 1 Portico"
      },
      {
        id: "courtyard",
        title: "Lush Botanical Quadrangle",
        category: "Campus Ecology",
        yaw: 310,
        pitch: -12,
        desc: "Manicured gardens featuring rare native flora, outdoor student debate kiosks, and LED architectural solar lanterns.",
        keyMetric: "30+ Acres Greenery"
      }
    ]
  },
  {
    id: "fablab",
    name: "FabLab Kerala & Advanced Robotics Cell",
    tag: "MIT-Affiliated Prototyping",
    category: "Innovation & Labs",
    coordinates: { x: 62, y: 38 },
    gps: "10.7434° N, 76.2881° E",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop",
    desc: "State-of-the-art MIT-modeled fabrication laboratory established in partnership with Kerala Startup Mission (KSUM). Features 6-Axis KUKA industrial robotic arms, SLA/FDM 3D printing suites, laser cutters, and rapid IoT prototyping stations.",
    highlights: ["6-Axis KUKA Robotic Arm", "Ultimaker S5 3D Printing Farm", "Epilog Laser Cutter / Engraver", "PCB Milling & SMD Soldering"],
    audioNarration: "Here in FabLab Kerala, ideas turn into physical prototypes within hours. Students collaborate across robotics, mechatronics, and artificial intelligence to build hardware startups.",
    nextSpotId: "library",
    nextSpotLabel: "Proceed to Central Technical Library",
    prevSpotId: "admin",
    prevSpotLabel: "Return to Administrative Portico",
    hotspots: [
      {
        id: "kuka",
        title: "KUKA KR-6 Industrial Robot",
        category: "Robotics & Automation",
        yaw: 65,
        pitch: 2,
        desc: "6-Axis high-speed manipulator for palletizing, MIG welding simulations, and ROS2-integrated motion planning.",
        keyMetric: "0.03 mm Precision"
      },
      {
        id: "print3d",
        title: "Additive Rapid Prototyping Farm",
        category: "3D Fabrication",
        yaw: 195,
        pitch: -6,
        desc: "Suite of high-resolution FDM/SLA 3D printers producing carbon-fiber reinforced functional parts for aerospace and drone projects.",
        keyMetric: "Dual Extrusion"
      },
      {
        id: "circuit",
        title: "SMD Surface-Mount Electronics Station",
        category: "Hardware Prototyping",
        yaw: 290,
        pitch: -10,
        desc: "Microscopic inspection and reflow soldering stations for high-frequency antenna and IoT sensor nodes.",
        keyMetric: "IPC-Class Standards"
      }
    ]
  },
  {
    id: "library",
    name: "Central Technical Library & Digital Hub",
    tag: "Knowledge Sanctuary",
    category: "Academics & Library",
    coordinates: { x: 35, y: 42 },
    gps: "10.7422° N, 76.2865° E",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
    desc: "Spanning over 15,000 square feet, the Central Library houses 42,000+ volumes, 120+ peer-reviewed international print journals, automated RFID book-drop kiosks, and 60+ dedicated IEEE Xplore / ScienceDirect e-resource workstations.",
    highlights: ["42,000+ Technical Volumes", "IEEE Xplore Digital Access", "RFID Self-Service Terminals", "Silent Research Cubicles"],
    audioNarration: "The Central Library is the academic heart of Jyothi, fully automated with RFID technology and offering seamless access to high-impact journals from IEEE, Springer, and Elsevier.",
    nextSpotId: "computing",
    nextSpotLabel: "Enter AI & Supercomputing Center",
    prevSpotId: "fablab",
    prevSpotLabel: "Return to FabLab Kerala",
    hotspots: [
      {
        id: "ieee",
        title: "IEEE Digital Learning Hub",
        category: "Digital Repositories",
        yaw: 80,
        pitch: 0,
        desc: "High-speed terminals providing unmetered campus-wide access to 5+ million IEEE Xplore research papers and conference proceedings.",
        keyMetric: "5M+ Research Papers"
      },
      {
        id: "stacks",
        title: "Engineering Stack Wings",
        category: "Print Archive",
        yaw: 220,
        pitch: -4,
        desc: "Curated textbook holdings across Computer Science, Robotics, VLSI, Artificial Intelligence, and Mechanical Sciences.",
        keyMetric: "42,000+ Volumes"
      }
    ]
  },
  {
    id: "computing",
    name: "Decennial Supercomputing & AI Research Cluster",
    tag: "NVIDIA Compute Labs",
    category: "Innovation & Labs",
    coordinates: { x: 55, y: 65 },
    gps: "10.7420° N, 76.2878° E",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    desc: "High-performance enterprise compute cluster equipped with NVIDIA Tensor Core GPUs, 10 Gbps fiber backbone, and private AI cloud environments for deep learning model training, computer vision pipelines, and student hackathons.",
    highlights: ["NVIDIA A100 GPU Nodes", "10 Gbps Fiber Backbone", "Private AI Model Cloud", "Cybersecurity Sandbox"],
    audioNarration: "Equipped with NVIDIA accelerator nodes, this center powers autonomous student projects in large language models, computer vision for drone navigation, and malware forensics.",
    nextSpotId: "sports",
    nextSpotLabel: "Head to Sports Complex & Turf",
    prevSpotId: "library",
    prevSpotLabel: "Back to Central Library",
    hotspots: [
      {
        id: "gpu",
        title: "NVIDIA Tensor Core Compute Rack",
        category: "AI Infrastructure",
        yaw: 120,
        pitch: 4,
        desc: "Dedicated enterprise GPU server cluster accelerating multimodal transformer training and neural rendering.",
        keyMetric: "Tensor Core FP16"
      },
      {
        id: "lan",
        title: "10 Gbps Campus Fiber Core",
        category: "Network Backbone",
        yaw: 270,
        pitch: -5,
        desc: "Redundant Cisco core routing architecture linking all academic blocks with 1 Gbps symmetrical internet.",
        keyMetric: "99.98% Uptime"
      }
    ]
  },
  {
    id: "sports",
    name: "Sports Complex & Athletic Stadium",
    tag: "Olympic-Standard Athletics",
    category: "Sports & Athletics",
    coordinates: { x: 75, y: 72 },
    gps: "10.7412° N, 76.2895° E",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
    desc: "Expansive multi-discipline athletic arena set amidst the rolling hills of Cheruthuruthy. Features a regulation football turf, 400m running track, floodlit basketball and volleyball courts, and a modernized strength training pavilion.",
    highlights: ["Standard Football Arena", "Floodlit Basketball Courts", "Indoor Badminton Complex", "Modern Strength Pavilion"],
    audioNarration: "Jyothi's sports facilities nurture university champions and provide a balanced collegiate lifestyle with year-round inter-collegiate tournaments and fitness training.",
    nextSpotId: "auditorium",
    nextSpotLabel: "Visit Fr. Thekkekara Auditorium",
    prevSpotId: "computing",
    prevSpotLabel: "Back to Computing Center",
    hotspots: [
      {
        id: "turf",
        title: "Natural Grass Football Arena",
        category: "Field Sports",
        yaw: 35,
        pitch: -8,
        desc: "Full-size football pitch meeting university sports board specifications, host to annual KTU tournaments.",
        keyMetric: "Full Regulation Pitch"
      },
      {
        id: "court",
        title: "Floodlit Hardcourt Arenas",
        category: "Court Sports",
        yaw: 190,
        pitch: -6,
        desc: "Polyurethane coated surface for basketball and volleyball with high-intensity LED floodlight towers.",
        keyMetric: "Night Tournaments"
      }
    ]
  },
  {
    id: "auditorium",
    name: "Fr. Thekkekara Central Auditorium",
    tag: "1,500-Seat Acoustic Arena",
    category: "Administration",
    coordinates: { x: 42, y: 25 },
    gps: "10.7439° N, 76.2860° E",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    desc: "Acoustically calibrated 1,500-seat central auditorium engineered for international engineering symposiums, national technical summits, convocation ceremonies, and Jyothi's signature cultural fest 'Tharang'.",
    highlights: ["1,500+ Seating Capacity", "Dolby Digital Cinema Audio", "Motorized Proscenium Rigging", "Central Climate Control"],
    audioNarration: "Fr. Thekkekara Central Auditorium is where Jyothi celebrates milestones: convocation days, international conferences, and the annual Tharang arts gala.",
    nextSpotId: "solar",
    nextSpotLabel: "Inspect 100 kW Solar Farm",
    prevSpotId: "sports",
    prevSpotLabel: "Back to Athletic Stadium",
    hotspots: [
      {
        id: "stage",
        title: "Motorized Main Proscenium",
        category: "Conference Technology",
        yaw: 10,
        pitch: 2,
        desc: "State-of-the-art stage with motorized backdrop screens, LED matrix walls, and professional acoustic baffles.",
        keyMetric: "1,500 Guests"
      }
    ]
  },
  {
    id: "solar",
    name: "100 kW Rooftop Solar Farm & Green Microgrid",
    tag: "Eco-Campus Initiative",
    category: "Sustainability",
    coordinates: { x: 50, y: 15 },
    gps: "10.7445° N, 76.2870° E",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    desc: "Jyothi Hills is powered by a high-efficiency 100 kW photovoltaic solar microgrid with bidirectional grid-tie inverters and student monitoring SCADA telemetry, generating over 140,000 green units annually.",
    highlights: ["100 kW PV Capacity", "IoT Real-Time SCADA Telemetry", "140,000+ kWh Annual Clean Energy", "Carbon Offset 110+ Tons/Yr"],
    audioNarration: "As part of our commitment to sustainable engineering, Jyothi Hills harnesses the tropical sun, generating clean solar power that feeds our classrooms and research labs.",
    nextSpotId: "admin",
    nextSpotLabel: "Return to Main Portico",
    prevSpotId: "auditorium",
    prevSpotLabel: "Back to Central Auditorium",
    hotspots: [
      {
        id: "panels",
        title: "Monocrystalline Solar PV Array",
        category: "Renewable Energy",
        yaw: 85,
        pitch: 10,
        desc: "320+ high-efficiency monocrystalline solar panels with weather-adaptive solar tracking and automated water cleaning.",
        keyMetric: "100 kW Grid-Tie"
      },
      {
        id: "scada",
        title: "Live Cloud SCADA Telemetry Unit",
        category: "Electrical Engineering",
        yaw: 260,
        pitch: -4,
        desc: "Cloud dashboard accessible by students to study microgrid load shedding, power factors, and inverter harmonics.",
        keyMetric: "Real-Time Telemetry"
      }
    ]
  }
];

const parseGps = (gps: string): { lat: number; lon: number } => {
  const nums = gps.match(/[\d.]+/g);
  if (!nums || nums.length < 2) return { lat: 10.7428, lon: 76.2872 };
  return { lat: parseFloat(nums[0]), lon: parseFloat(nums[1]) };
};

const latLonToTileFloat = (lat: number, lon: number, zoom: number) => {
  const n = Math.pow(2, zoom);
  const x = ((lon + 180) / 360) * n;
  const latRad = (lat * Math.PI) / 180;
  const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;
  return { x, y };
};

export const VirtualTourModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeSpot, setActiveSpot] = useState<TourSpot>(CAMPUS_STOPS[0]);
  const [viewMode, setViewMode] = useState<'streetview' | 'radar'>('streetview');
  const [mapLayer, setMapLayer] = useState<'satellite' | 'osm'>('satellite');
  const [satZoom, setSatZoom] = useState<number>(17);
  
  // 360 Camera Pan & Tilt State
  const [yaw, setYaw] = useState<number>(0); // 0 to 360 degrees
  const [pitch, setPitch] = useState<number>(0); // -25 to +25 degrees
  const [zoom, setZoom] = useState<number>(1.1); // 1.0 to 2.2
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);
  const [isWarping, setIsWarping] = useState<boolean>(false);
  const [showCarousel, setShowCarousel] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; yaw: number; pitch: number }>({ x: 0, y: 0, yaw: 0, pitch: 0 });
  const animFrameRef = useRef<number | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') setYaw(prev => (prev - 10 + 360) % 360);
        if (e.key === 'ArrowRight') setYaw(prev => (prev + 10) % 360);
        if (e.key === 'ArrowUp') setPitch(prev => Math.min(25, prev + 5));
        if (e.key === 'ArrowDown') setPitch(prev => Math.max(-25, prev - 5));
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  // Auto-Rotation animation loop
  useEffect(() => {
    let lastTime = performance.now();
    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (isAutoRotate && !isDraggingRef.current && isOpen && viewMode === 'streetview') {
        setYaw(prev => (prev + delta * 8) % 360);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAutoRotate, isOpen, viewMode]);

  // Smooth Street-View Warp Transition between stops
  const navigateToSpot = useCallback((spotId: string) => {
    const target = CAMPUS_STOPS.find(s => s.id === spotId);
    if (!target) return;
    
    setIsWarping(true);
    setSelectedHotspot(null);
    setTimeout(() => {
      setActiveSpot(target);
      setYaw(0);
      setPitch(0);
      setZoom(1.1);
      setTimeout(() => {
        setIsWarping(false);
      }, 350);
    }, 250);
  }, []);

  // Pointer Drag Handlers for 360 degree pan & tilt
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only drag with primary mouse button or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      yaw: yaw,
      pitch: pitch
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    // Sensitivity factor based on zoom
    const sensitivity = 0.22 / zoom;
    const newYaw = (dragStartRef.current.yaw - deltaX * sensitivity + 720) % 360;
    const newPitch = Math.max(-25, Math.min(25, dragStartRef.current.pitch + deltaY * sensitivity * 0.8));

    setYaw(newYaw);
    setPitch(newPitch);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Zoom with wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom(prev => Math.min(2.2, prev + 0.1));
    } else {
      setZoom(prev => Math.max(1.0, prev - 0.1));
    }
  };

  // Calculate Street View Hotspot 2D screen positions based on spherical yaw/pitch
  const getHotspotStyle = (hYaw: number, hPitch: number) => {
    // Field of view in degrees (horizontally visible window)
    const fov = 90 / zoom;
    
    // Angular difference between camera yaw and hotspot yaw
    let diffYaw = hYaw - yaw;
    while (diffYaw < -180) diffYaw += 360;
    while (diffYaw > 180) diffYaw -= 360;

    const diffPitch = hPitch - pitch;

    // Check if within visible frustum
    const isVisible = Math.abs(diffYaw) < fov * 0.7 && Math.abs(diffPitch) < 35;
    
    // Normalized screen coordinates (50% is center)
    const leftPercent = 50 + (diffYaw / fov) * 50;
    const topPercent = 50 - (diffPitch / 40) * 45;

    return {
      left: `${leftPercent}%`,
      top: `${topPercent}%`,
      visible: isVisible,
      opacity: isVisible ? Math.max(0, 1 - Math.pow(Math.abs(diffYaw) / (fov * 0.7), 2)) : 0
    };
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  if (!isOpen) return null;

  const activeCoords = parseGps(activeSpot.gps);
  const centerTileFloat = latLonToTileFloat(activeCoords.lat, activeCoords.lon, satZoom);
  const centerTileX = Math.floor(centerTileFloat.x);
  const centerTileY = Math.floor(centerTileFloat.y);
  const TILE_SIZE = 256;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-3 md:p-6 bg-[#08020F]/92 backdrop-blur-xl animate-fade-in select-none">

      {/* Modal Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[100dvh] sm:h-[92vh] sm:max-h-[900px] max-w-[1500px] bg-[#0E0318] sm:rounded-3xl shadow-2xl border-0 sm:border sm:border-[#DFC06A]/30 overflow-hidden text-white flex flex-col"
      >

        {/* ============================================================== */}
        {/* 1. HEADER OVERLAY (RESPONSIVE FOR MOBILE, TABLET & DESKTOP) */}
        {/* ============================================================== */}
        <div
          className={`z-30 p-2.5 sm:p-4 lg:p-5 flex flex-col gap-2 pointer-events-none ${
            viewMode === 'radar'
              ? 'relative shrink-0 bg-[#12031E] border-b border-[#DFC06A]/20'
              : 'absolute top-0 inset-x-0 bg-gradient-to-b from-black/85 via-black/45 to-transparent'
          }`}
        >
          <div className="flex items-start justify-between gap-2 sm:gap-3">

            {/* Top-Left: Campus Tour Identity Badge */}
            <div className="pointer-events-auto flex items-center sm:items-start gap-2.5 sm:gap-3 bg-[#13031F]/90 backdrop-blur-md p-2 sm:p-3.5 rounded-2xl border border-[#DFC06A]/40 shadow-xl min-w-0 max-w-[68%] sm:max-w-md">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#DFC06A] to-[#B88029] p-0.5 shrink-0 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#1A052A] rounded-[9px] flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFC06A]" />
                </div>
              </div>

              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#DFC06A] text-[#190527]">
                    360° Virtual Campus
                  </span>
                  <span className="text-[10px] text-[#DFC06A] font-semibold hidden md:inline">
                    • Satellite &amp; OpenStreetMap
                  </span>
                </div>
                <h2 className="text-xs sm:text-base font-black font-brand text-white truncate">
                  {activeSpot.name}
                </h2>
                <p className="text-[10px] sm:text-[11px] text-slate-300 truncate">
                  <span className="hidden sm:inline">Jyothi Hills, Cheruthuruthy, Kerala • </span>
                  <span className="font-mono text-[#DFC06A]">{activeSpot.gps}</span>
                </p>
              </div>
            </div>

            {/* Top-Right: Action Controls */}
            <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 shrink-0">

              {/* View Mode Toggle (Desktop & Tablet) */}
              <div className="hidden md:flex bg-[#19052A]/90 backdrop-blur-md p-1 rounded-xl border border-white/10 shadow-lg text-xs font-semibold">
                <button
                  onClick={() => setViewMode('streetview')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'streetview'
                      ? 'bg-[#DFC06A] text-[#190527] font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>360° View</span>
                </button>
                <button
                  onClick={() => setViewMode('radar')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'radar'
                      ? 'bg-[#DFC06A] text-[#190527] font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Satellite &amp; Map</span>
                </button>
              </div>

              {/* Audio Ambience Narration Toggle */}
              <button
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className={`p-2 sm:p-2.5 rounded-xl border shadow-lg transition-all cursor-pointer ${
                  !isAudioMuted
                    ? 'bg-[#DFC06A] text-[#190527] border-[#DFC06A]'
                    : 'bg-[#19052A]/90 text-slate-300 hover:text-white border-white/10 hover:bg-[#250836]'
                }`}
                title={isAudioMuted ? "Enable Campus Audio Guide" : "Mute Campus Audio"}
              >
                {!isAudioMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Auto-Rotation Toggle */}
              {viewMode === 'streetview' && (
                <button
                  onClick={() => setIsAutoRotate(!isAutoRotate)}
                  className={`p-2 sm:p-2.5 rounded-xl border shadow-lg transition-all cursor-pointer ${
                    isAutoRotate
                      ? 'bg-[#DFC06A]/20 text-[#DFC06A] border-[#DFC06A]/50'
                      : 'bg-[#19052A]/90 text-slate-300 hover:text-white border-white/10 hover:bg-[#250836]'
                  }`}
                  title={isAutoRotate ? "Pause 360° Auto-Pan" : "Start 360° Auto-Pan"}
                >
                  {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              )}

              {/* Fullscreen Toggle */}
              <button
                onClick={toggleFullscreen}
                className="p-2.5 rounded-xl bg-[#19052A]/90 text-slate-300 hover:text-white border border-white/10 shadow-lg hover:bg-[#250836] transition-all cursor-pointer hidden lg:flex"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Close Modal Button */}
              <button
                onClick={onClose}
                className="p-2 sm:p-2.5 rounded-xl bg-[#19052A]/90 text-slate-200 hover:text-white hover:bg-rose-950/80 border border-white/10 hover:border-rose-500/40 shadow-lg transition-all cursor-pointer"
                title="Close Virtual Tour (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile & Small Tablet View Switcher */}
          <div className="md:hidden pointer-events-auto flex items-center justify-center">
            <div className="inline-flex bg-[#13031F]/90 backdrop-blur-md p-1 rounded-xl border border-[#DFC06A]/30 shadow-lg text-[11px] font-semibold">
              <button
                onClick={() => setViewMode('streetview')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'streetview'
                    ? 'bg-[#DFC06A] text-[#190527] font-bold shadow-sm'
                    : 'text-slate-300'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>360° View</span>
              </button>
              <button
                onClick={() => setViewMode('radar')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'radar'
                    ? 'bg-[#DFC06A] text-[#190527] font-bold shadow-sm'
                    : 'text-slate-300'
                }`}
              >
                <Map className="w-3 h-3" />
                <span>Satellite &amp; OpenStreetMap</span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. MAIN 360° PANORAMIC VIEWPORT */}
        {/* ============================================================== */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onWheel={handleWheel}
          className={`relative flex-1 w-full h-full overflow-hidden cursor-grab active:cursor-grabbing touch-none select-none transition-opacity duration-300 ${
            isWarping ? 'opacity-30 scale-105 filter blur-sm' : 'opacity-100 scale-100 filter blur-0'
          }`}
        >
          {viewMode === 'streetview' ? (
            <>
              {/* Virtual 360 Panorama Cylinder (Simulated via High-Fidelity Multi-Offset Image Transformation) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none transition-transform ease-out will-change-transform"
                style={{
                  transform: `scale(${zoom}) translate(${((yaw % 360) / 360) * -18}%, ${pitch * 0.45}%)`,
                  transformOrigin: 'center center'
                }}
              >
                <img
                  src={activeSpot.image}
                  alt={activeSpot.name}
                  className="w-[140%] h-[120%] -left-[20%] -top-[10%] relative object-cover object-center max-w-none brightness-[0.98] contrast-[1.05]"
                  draggable={false}
                />
              </div>

              {/* Realistic Vignette & Google Street View Spherical Lensing Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-black/60" />

              {/* Drag Prompt Hint */}
              <div className="hidden sm:block absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none opacity-85 animate-pulse-subtle">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#DFC06A]/40 text-[#FDE68A] text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <Compass className="w-3.5 h-3.5 text-[#DFC06A] animate-spin-slow" />
                  <span>Click &amp; Drag to Look Around 360° • Scroll to Zoom</span>
                </div>
              </div>

              {/* ========================================================== */}
              {/* INTERACTIVE 3D FLOATING HOTSPOTS */}
              {/* ========================================================== */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {activeSpot.hotspots.map((hotspot) => {
                  const style = getHotspotStyle(hotspot.yaw, hotspot.pitch);
                  if (!style.visible) return null;

                  const isSelected = selectedHotspot?.id === hotspot.id;

                  return (
                    <div
                      key={hotspot.id}
                      style={{
                        left: style.left,
                        top: style.top,
                        opacity: style.opacity,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className="absolute pointer-events-auto transition-opacity duration-200 z-20 group"
                    >
                      {/* Hotspot Target Pin */}
                      <button
                        onClick={() => setSelectedHotspot(isSelected ? null : hotspot)}
                        className={`relative p-2 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#DFC06A] text-[#1A052A] scale-125 ring-4 ring-[#DFC06A]/40'
                            : 'bg-[#1E052B]/90 text-[#DFC06A] border-2 border-[#DFC06A] hover:scale-115 hover:bg-[#DFC06A] hover:text-[#1A052A]'
                        } shadow-2xl`}
                        title={`View ${hotspot.title}`}
                      >
                        <Sparkles className="w-4 h-4 animate-spin-slow" />
                        <span className="absolute -inset-1 rounded-full bg-[#DFC06A]/30 animate-ping -z-10" />
                      </button>

                      {/* Hotspot Hover Label */}
                      {!isSelected && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          <div className="px-2.5 py-1 rounded-lg bg-[#19052A]/95 text-white text-[11px] font-bold border border-[#DFC06A]/40 shadow-xl flex items-center gap-1.5">
                            <span className="text-[#DFC06A] font-mono">[{hotspot.keyMetric}]</span>
                            <span>{hotspot.title}</span>
                          </div>
                        </div>
                      )}

                      {/* Hotspot Details Card */}
                      {isSelected && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 bg-[#170424]/95 backdrop-blur-md rounded-2xl border border-[#DFC06A] p-4 text-white shadow-2xl space-y-2 animate-slide-up z-30">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFC06A]">
                                {hotspot.category}
                              </span>
                              <h4 className="text-xs sm:text-sm font-bold font-brand text-white leading-tight">
                                {hotspot.title}
                              </h4>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); setSelectedHotspot(null); }}
                              className="text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-white/10"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            {hotspot.desc}
                          </p>

                          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                            <span className="text-[#DFC06A] font-semibold">{hotspot.keyMetric}</span>
                            <span className="text-slate-400">Autonomous Spec</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* ========================================================== */}
              {/* GOOGLE STREET VIEW GROUND NAVIGATION CHEVRONS */}
              {/* ========================================================== */}
              <div className="absolute bottom-24 sm:bottom-28 inset-x-0 flex items-center justify-center gap-4 pointer-events-none z-20">
                
                {/* Previous Landmark Step */}
                <button
                  onClick={() => navigateToSpot(activeSpot.prevSpotId)}
                  className="pointer-events-auto px-4 py-2 rounded-full bg-[#180424]/90 hover:bg-[#250836] text-white text-xs font-semibold border border-white/20 hover:border-[#DFC06A] shadow-xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-[#DFC06A]" />
                  <span className="hidden sm:inline">{activeSpot.prevSpotLabel}</span>
                  <span className="sm:hidden">Back</span>
                </button>

                {/* Forward Street View Walk Chevron (Google Street View Ground Ring) */}
                <button
                  onClick={() => navigateToSpot(activeSpot.nextSpotId)}
                  className="pointer-events-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#250836] via-[#3C1361] to-[#250836] hover:from-[#DFC06A] hover:via-[#FDE68A] hover:to-[#C9902C] text-[#DFC06A] hover:text-[#180424] font-bold text-xs sm:text-sm border border-[#DFC06A] shadow-glow-gold backdrop-blur-md flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#DFC06A] group-hover:bg-[#180424] text-[#180424] group-hover:text-[#DFC06A] flex items-center justify-center transition-colors">
                    <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                  <span>{activeSpot.nextSpotLabel}</span>
                </button>

              </div>
            </>
          ) : (
            /* ============================================================ */
            /* REAL SATELLITE VIEW & LIVE OPENSTREETMAP CAMPUS MAP */
            /* ============================================================ */
            <div className="relative w-full h-full bg-[#0D0417] flex flex-col pt-2.5 sm:pt-3 pb-2 px-2.5 sm:px-5 lg:px-8">

              {/* Map Top Toolbar: Layer Switcher (Satellite vs OpenStreetMap) + Zoom + External Link */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 z-20">
                <div className="inline-flex bg-[#19052A]/95 p-1 rounded-xl border border-[#DFC06A]/35 shadow-md text-[11px] sm:text-xs font-semibold">
                  <button
                    onClick={() => setMapLayer('satellite')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      mapLayer === 'satellite'
                        ? 'bg-[#DFC06A] text-[#190527] font-bold shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Satellite View
                  </button>
                  <button
                    onClick={() => setMapLayer('osm')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      mapLayer === 'osm'
                        ? 'bg-[#DFC06A] text-[#190527] font-bold shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    OpenStreetMap (Live)
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {mapLayer === 'satellite' && (
                    <div className="inline-flex items-center rounded-xl bg-[#19052A]/95 border border-white/15 overflow-hidden text-xs">
                      <button
                        onClick={() => setSatZoom(z => Math.min(18, z + 1))}
                        className="px-2.5 py-1.5 hover:bg-white/10 text-slate-200 cursor-pointer border-r border-white/10"
                        title="Zoom In Satellite"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 font-mono text-[11px] text-[#DFC06A]">Z{satZoom}</span>
                      <button
                        onClick={() => setSatZoom(z => Math.max(16, z - 1))}
                        className="px-2.5 py-1.5 hover:bg-white/10 text-slate-200 cursor-pointer border-l border-white/10"
                        title="Zoom Out Satellite"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  <a
                    href={`https://www.openstreetmap.org/?mlat=${activeCoords.lat}&mlon=${activeCoords.lon}#map=18/${activeCoords.lat}/${activeCoords.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#19052A]/95 hover:bg-[#250836] border border-[#DFC06A]/40 text-[#FDE68A] text-[11px] sm:text-xs font-semibold transition-colors"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Interactive Map Viewport */}
              <div className="relative flex-1 w-full rounded-2xl sm:rounded-3xl border border-[#DFC06A]/40 shadow-2xl overflow-hidden bg-[#12061E]">
                {mapLayer === 'satellite' ? (
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Real Esri World Imagery Satellite Tile Grid */}
                    <div
                      className="absolute left-1/2 top-1/2 pointer-events-none"
                      style={{
                        width: TILE_SIZE * 5,
                        height: TILE_SIZE * 3,
                        transform: `translate(${-((centerTileFloat.x - centerTileX + 2) * TILE_SIZE)}px, ${-((centerTileFloat.y - centerTileY + 1) * TILE_SIZE)}px)`,
                      }}
                    >
                      {[-1, 0, 1].map(dy =>
                        [-2, -1, 0, 1, 2].map(dx => {
                          const tx = centerTileX + dx;
                          const ty = centerTileY + dy;
                          return (
                            <img
                              key={`${satZoom}-${tx}-${ty}`}
                              src={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${satZoom}/${ty}/${tx}`}
                              alt="Jyothi Engineering College Satellite Imagery"
                              width={TILE_SIZE}
                              height={TILE_SIZE}
                              className="absolute select-none"
                              style={{
                                left: (dx + 2) * TILE_SIZE,
                                top: (dy + 1) * TILE_SIZE,
                                width: TILE_SIZE,
                                height: TILE_SIZE,
                              }}
                              draggable={false}
                            />
                          );
                        })
                      )}
                    </div>

                    {/* Subtle Vignette for Pin Readability */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/25" />

                    {/* GPS-Projected Campus Landmark Pins */}
                    {CAMPUS_STOPS.map((spot, idx) => {
                      const spotCoords = parseGps(spot.gps);
                      const spotTile = latLonToTileFloat(spotCoords.lat, spotCoords.lon, satZoom);
                      const offsetX = (spotTile.x - centerTileFloat.x) * TILE_SIZE;
                      const offsetY = (spotTile.y - centerTileFloat.y) * TILE_SIZE;
                      const isActive = spot.id === activeSpot.id;

                      return (
                        <button
                          key={spot.id}
                          onClick={() => { navigateToSpot(spot.id); setViewMode('streetview'); }}
                          style={{
                            left: `calc(50% + ${offsetX}px)`,
                            top: `calc(50% + ${offsetY}px)`,
                          }}
                          title={`${idx + 1}. ${spot.name}`}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all cursor-pointer flex items-center gap-1.5 shadow-xl ${
                            isActive
                              ? 'z-30 px-2.5 py-1.5 rounded-xl bg-[#DFC06A] text-[#190527] scale-105 ring-4 ring-[#DFC06A]/45 font-black'
                              : 'z-20 p-1.5 sm:px-2.5 sm:py-1.5 rounded-full sm:rounded-xl bg-[#19052A]/95 text-white border border-[#DFC06A]/70 hover:bg-[#DFC06A] hover:text-[#190527]'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                            isActive ? 'bg-[#190527] text-[#DFC06A]' : 'bg-[#DFC06A]/20 text-[#FDE68A]'
                          }`}>
                            {idx + 1}
                          </span>
                          <span className={`text-[10px] sm:text-[11px] font-bold whitespace-nowrap ${
                            isActive ? 'inline max-w-[160px] truncate' : 'hidden sm:inline'
                          }`}>
                            {spot.name.split('&')[0].trim()}
                          </span>
                        </button>
                      );
                    })}

                    {/* Satellite Attribution & Legend */}
                    <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm p-2.5 sm:p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs space-y-0.5 z-20">
                      <div className="font-bold text-[#DFC06A] flex items-center gap-1.5 text-[11px]">
                        <Map className="w-3.5 h-3.5 shrink-0" />
                        <span>Jyothi Hills Live Satellite View • {activeSpot.gps}</span>
                      </div>
                      <p className="text-[10px] text-slate-300">
                        Tap any campus pin to open its 360° panoramic view. Imagery © Esri World Imagery.
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    title={`OpenStreetMap - ${activeSpot.name}`}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${activeCoords.lon - 0.0042}%2C${activeCoords.lat - 0.0026}%2C${activeCoords.lon + 0.0042}%2C${activeCoords.lat + 0.0026}&layer=mapnik&marker=${activeCoords.lat}%2C${activeCoords.lon}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                )}
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* 3. STREET VIEW HUD CHROME (COMPASS, ZOOM & RADAR MINIMAP) */}
          {/* ============================================================== */}
          {viewMode === 'streetview' && (
            <div className="absolute right-2.5 bottom-3 sm:right-4 sm:bottom-4 z-30 flex flex-col items-end gap-2 sm:gap-2.5 pointer-events-none">
              
              {/* Dynamic Interactive Compass Needle */}
              <button
                onClick={() => setYaw(0)}
                className="pointer-events-auto p-2 sm:p-2.5 rounded-2xl bg-[#170424]/90 backdrop-blur-md border border-white/15 hover:border-[#DFC06A] shadow-xl text-slate-300 hover:text-white transition-all cursor-pointer group"
                title="Reset to True North (0°)"
              >
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center relative transition-transform duration-100"
                  style={{ transform: `rotate(${-yaw}deg)` }}
                >
                  {/* Compass Red/White Needle */}
                  <div className="w-1.5 h-6 sm:h-7 relative flex flex-col items-center justify-between">
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[11px] border-b-rose-500" />
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[11px] border-t-white" />
                  </div>
                </div>
                <div className="text-[9px] font-mono font-bold text-center mt-1 text-[#DFC06A]">
                  {Math.round(yaw)}° N
                </div>
              </button>

              {/* Zoom Buttons (+ / -) */}
              <div className="pointer-events-auto flex flex-col rounded-2xl bg-[#170424]/90 backdrop-blur-md border border-white/15 shadow-xl overflow-hidden">
                <button
                  onClick={() => setZoom(prev => Math.min(2.2, prev + 0.15))}
                  className="p-2 sm:p-2.5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer border-b border-white/10"
                  title="Zoom In (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoom(prev => Math.max(1.0, prev - 0.15))}
                  className="p-2 sm:p-2.5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Zoom Out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom-Right Live Satellite Minimap with FOV Cone */}
              <button
                type="button"
                onClick={() => setViewMode('radar')}
                className="pointer-events-auto w-32 h-24 sm:w-40 sm:h-28 rounded-2xl bg-[#12031E]/95 border-2 border-[#DFC06A]/60 shadow-2xl overflow-hidden relative cursor-pointer hover:border-[#DFC06A] transition-all group hidden sm:block text-left"
                title="Click to Expand Satellite & OpenStreetMap"
              >
                {/* Live Esri Satellite Tile Preview */}
                <img
                  src={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/${centerTileY}/${centerTileX}`}
                  alt="Campus Satellite Preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Live Rotating FOV Cone */}
                <div
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${yaw}deg)`
                  }}
                  className="absolute pointer-events-none transition-transform duration-75"
                >
                  <div
                    className="w-16 h-16 -mt-8 -ml-8 bg-gradient-to-t from-transparent via-[#DFC06A]/35 to-[#DFC06A]/60"
                    style={{ clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)' }}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#DFC06A] ring-2 ring-[#180424]" />
                </div>

                <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-[#FDE68A] uppercase tracking-wider flex items-center gap-1 drop-shadow">
                  <Map className="w-2.5 h-2.5 text-[#DFC06A]" />
                  <span>Satellite Map</span>
                </div>
              </button>

            </div>
          )}
        </div>

        {/* ============================================================== */}
        {/* 4. BOTTOM LANDMARK STOPS CAROUSEL */}
        {/* ============================================================== */}
        <div className="relative z-30 bg-[#12031E]/95 backdrop-blur-md border-t border-[#DFC06A]/30 p-2.5 sm:p-3 shrink-0">
          
          <div className="flex items-center justify-between px-2 mb-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#DFC06A] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Campus Landmark Directory ({CAMPUS_STOPS.length} Stops)</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium hidden md:inline">
                {activeSpot.desc.slice(0, 75)}...
              </span>
              <button
                onClick={() => setShowCarousel(!showCarousel)}
                className="text-[10px] text-[#DFC06A] hover:underline cursor-pointer"
              >
                {showCarousel ? 'Hide Stops' : 'Show Stops'}
              </button>
            </div>
          </div>

          {showCarousel && (
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 no-scrollbar">
              {CAMPUS_STOPS.map((spot, idx) => {
                const isCurrent = spot.id === activeSpot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => navigateToSpot(spot.id)}
                    className={`shrink-0 flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl transition-all cursor-pointer border text-left ${
                      isCurrent
                        ? 'bg-[#250836] border-[#DFC06A] text-white shadow-lg ring-1 ring-[#DFC06A]'
                        : 'bg-[#19052A]/60 border-white/10 text-slate-300 hover:bg-[#250836]/60 hover:text-white'
                    }`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 border border-white/10 relative">
                      <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                      <span className="absolute top-0.5 left-0.5 px-1 py-0.2 rounded bg-black/70 text-[9px] font-bold text-[#DFC06A]">
                        {idx + 1}
                      </span>
                    </div>

                    <div className="min-w-[120px] max-w-[160px] truncate">
                      <div className="text-[9px] font-bold text-[#DFC06A] uppercase truncate">{spot.tag}</div>
                      <div className="text-xs font-bold text-white truncate leading-tight">{spot.name.split('&')[0]}</div>
                      <div className="text-[10px] text-slate-400 truncate">{spot.category}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Audio Subtitles Bar if Voice is Unmuted */}
          {!isAudioMuted && (
            <div className="mt-2 px-3 py-1.5 rounded-xl bg-black/60 border border-[#DFC06A]/30 text-xs text-[#FDE68A] flex items-center gap-2 animate-fade-in">
              <Volume2 className="w-3.5 h-3.5 text-[#DFC06A] shrink-0 animate-pulse" />
              <span className="truncate italic">"{activeSpot.audioNarration}"</span>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
