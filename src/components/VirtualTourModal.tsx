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
        title: "10 Gbps Campus Core Fiber Core",
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

export const VirtualTourModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeSpot, setActiveSpot] = useState<TourSpot>(CAMPUS_STOPS[0]);
  const [viewMode, setViewMode] = useState<'streetview' | 'radar'>('streetview');
  
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-3 md:p-6 bg-[#08020F]/90 backdrop-blur-xl animate-fade-in select-none">
      
      {/* Modal Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full max-w-[1500px] max-h-[96vh] bg-[#0E0318] sm:rounded-3xl shadow-2xl border border-[#DFC06A]/30 overflow-hidden text-white flex flex-col"
      >

        {/* ============================================================== */}
        {/* 1. GOOGLE MAPS / STREET VIEW HEADER OVERLAY */}
        {/* ============================================================== */}
        <div className="absolute top-0 inset-x-0 z-30 p-3 sm:p-5 flex items-start justify-between pointer-events-none gap-3 bg-gradient-to-b from-black/85 via-black/40 to-transparent">
          
          {/* Top-Left: Google Street View Identity Badge */}
          <div className="pointer-events-auto flex items-start gap-3 bg-[#13031F]/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#DFC06A]/40 shadow-xl max-w-sm sm:max-w-md">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#DFC06A] to-[#B88029] p-0.5 shrink-0 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#1A052A] rounded-[10px] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#DFC06A]" />
              </div>
            </div>

            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#DFC06A] text-[#190527]">
                  Google 360° Street View
                </span>
                <span className="text-[10px] text-[#DFC06A] font-semibold hidden sm:inline">
                  • 8K Aerial Radar
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-black font-brand text-white truncate">
                {activeSpot.name}
              </h2>
              <p className="text-[11px] text-slate-300 truncate">
                Jyothi Hills, Cheruthuruthy, Kerala 679531 • <span className="font-mono text-[#DFC06A]">{activeSpot.gps}</span>
              </p>
            </div>
          </div>

          {/* Top-Right: Street View Action Controls */}
          <div className="pointer-events-auto flex items-center gap-2">
            
            {/* View Mode Toggle: Street View vs Satellite Radar */}
            <div className="hidden sm:flex bg-[#19052A]/90 backdrop-blur-md p-1 rounded-xl border border-white/10 shadow-lg text-xs font-semibold">
              <button
                onClick={() => setViewMode('streetview')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'streetview'
                    ? 'bg-[#DFC06A] text-[#190527] font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>360° Street View</span>
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
                <span>Satellite Campus Map</span>
              </button>
            </div>

            {/* Audio Ambience Narration Toggle */}
            <button
              onClick={() => setIsAudioMuted(!isAudioMuted)}
              className={`p-2.5 sm:p-3 rounded-xl border shadow-lg transition-all cursor-pointer ${
                !isAudioMuted
                  ? 'bg-[#DFC06A] text-[#190527] border-[#DFC06A]'
                  : 'bg-[#19052A]/90 text-slate-300 hover:text-white border-white/10 hover:bg-[#250836]'
              }`}
              title={isAudioMuted ? "Enable Campus Audio Guide" : "Mute Campus Audio"}
            >
              {!isAudioMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Auto-Rotation Toggle */}
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={`p-2.5 sm:p-3 rounded-xl border shadow-lg transition-all cursor-pointer ${
                isAutoRotate
                  ? 'bg-[#DFC06A]/20 text-[#DFC06A] border-[#DFC06A]/50'
                  : 'bg-[#19052A]/90 text-slate-300 hover:text-white border-white/10 hover:bg-[#250836]'
              }`}
              title={isAutoRotate ? "Pause 360° Auto-Pan" : "Start 360° Auto-Pan"}
            >
              {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2.5 sm:p-3 rounded-xl bg-[#19052A]/90 text-slate-300 hover:text-white border border-white/10 shadow-lg hover:bg-[#250836] transition-all cursor-pointer hidden md:flex"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="p-2.5 sm:p-3 rounded-xl bg-[#19052A]/90 text-slate-200 hover:text-white hover:bg-rose-950/80 border border-white/10 hover:border-rose-500/40 shadow-lg transition-all cursor-pointer"
              title="Close Virtual Tour (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
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

              {/* Drag Prompt Hint (Disappears after first interaction) */}
              <div className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none opacity-85 animate-pulse-subtle">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#DFC06A]/40 text-[#FDE68A] text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <Compass className="w-3.5 h-3.5 text-[#DFC06A] animate-spin-slow" />
                  <span>Click & Drag to Look Around 360° • Scroll to Zoom</span>
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
            /* RADAR / GOOGLE SATELLITE CAMPUS MAP MODE */
            /* ============================================================ */
            <div className="relative w-full h-full bg-[#11051D] flex items-center justify-center p-4 sm:p-8">
              
              {/* Satellite Architectural Map Canvas */}
              <div className="relative w-full max-w-4xl aspect-[16/10] bg-[#1A082C] rounded-3xl border-2 border-[#DFC06A]/40 shadow-2xl overflow-hidden p-6">
                
                {/* Architectural Grid Lines */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#DFC06A 1px, transparent 1px), linear-gradient(90deg, #DFC06A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                {/* Satellite Campus Vector Outline */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1000 600">
                  <path d="M 100 150 Q 250 80, 500 120 T 900 200 L 850 500 Q 500 550, 150 480 Z" fill="#240D3A" stroke="#DFC06A" strokeWidth="2" strokeDasharray="6 4" />
                  {/* Road Network */}
                  <path d="M 0 300 Q 300 320, 500 280 T 1000 340" stroke="#DFC06A" strokeWidth="6" strokeOpacity="0.3" fill="none" />
                  <path d="M 480 120 L 480 500" stroke="#DFC06A" strokeWidth="4" strokeOpacity="0.2" fill="none" />
                </svg>

                {/* Campus Stops on Satellite Radar */}
                {CAMPUS_STOPS.map((spot, idx) => {
                  const isActive = spot.id === activeSpot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => { navigateToSpot(spot.id); setViewMode('streetview'); }}
                      style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-2xl transition-all cursor-pointer z-20 flex items-center gap-2 group ${
                        isActive
                          ? 'bg-[#DFC06A] text-[#190527] scale-125 ring-4 ring-[#DFC06A]/40 shadow-glow-gold'
                          : 'bg-[#19052A]/90 text-white border border-[#DFC06A]/50 hover:bg-[#DFC06A] hover:text-[#190527]'
                      }`}
                    >
                      <MapPin className="w-4 h-4 shrink-0" />
                      <div className="text-left hidden sm:block">
                        <div className="text-[10px] font-black">{idx + 1}. {spot.name.split('&')[0]}</div>
                        <div className="text-[9px] opacity-80">{spot.tag}</div>
                      </div>

                      {/* Radar Beam Effect for Active Spot */}
                      {isActive && (
                        <div className="absolute -inset-4 rounded-full border border-[#DFC06A]/60 animate-ping pointer-events-none" />
                      )}
                    </button>
                  );
                })}

                {/* Satellite Radar Legend */}
                <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-[#DFC06A] flex items-center gap-1.5">
                    <Map className="w-3.5 h-3.5" />
                    <span>Jyothi Hills Satellite Radar</span>
                  </div>
                  <p className="text-[10px] text-slate-300">Click any landmark stop to launch 360° Street View at that coordinate.</p>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* 3. STREET VIEW HUD CHROME (COMPASS, ZOOM & RADAR MINIMAP) */}
          {/* ============================================================== */}
          {viewMode === 'streetview' && (
            <div className="absolute right-4 bottom-24 sm:bottom-28 z-30 flex flex-col items-end gap-3 pointer-events-none">
              
              {/* Dynamic Interactive Compass Needle */}
              <button
                onClick={() => setYaw(0)}
                className="pointer-events-auto p-2.5 rounded-2xl bg-[#170424]/90 backdrop-blur-md border border-white/15 hover:border-[#DFC06A] shadow-xl text-slate-300 hover:text-white transition-all cursor-pointer group"
                title="Reset to True North (0°)"
              >
                <div
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center relative transition-transform duration-100"
                  style={{ transform: `rotate(${-yaw}deg)` }}
                >
                  {/* Compass Red/White Needle */}
                  <div className="w-1.5 h-7 relative flex flex-col items-center justify-between">
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[12px] border-b-rose-500" />
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[12px] border-t-white" />
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
                  className="p-2.5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer border-b border-white/10"
                  title="Zoom In (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoom(prev => Math.max(1.0, prev - 0.15))}
                  className="p-2.5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Zoom Out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom-Right Satellite Radar Minimap with Live FOV Flashlight Cone */}
              <div
                onClick={() => setViewMode('radar')}
                className="pointer-events-auto w-32 h-24 sm:w-40 sm:h-28 rounded-2xl bg-[#12031E]/95 border-2 border-[#DFC06A]/50 shadow-2xl overflow-hidden relative cursor-pointer hover:border-[#DFC06A] transition-all group hidden sm:block"
                title="Click to Expand Satellite Campus Map"
              >
                {/* Radar Grid Graphic */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #DFC06A 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                
                {/* Live Rotating FOV Cone */}
                <div
                  style={{
                    left: `${activeSpot.coordinates.x}%`,
                    top: `${activeSpot.coordinates.y}%`,
                    transform: `translate(-50%, -50%) rotate(${yaw}deg)`
                  }}
                  className="absolute pointer-events-none transition-transform duration-75"
                >
                  {/* Flashlight Viewing Cone */}
                  <div
                    className="w-16 h-16 -mt-8 -ml-8 bg-gradient-to-t from-transparent via-[#DFC06A]/30 to-[#DFC06A]/50"
                    style={{ clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)' }}
                  />
                  {/* Center Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#DFC06A] ring-2 ring-[#180424]" />
                </div>

                <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-[#DFC06A] uppercase tracking-wider flex items-center gap-1">
                  <Map className="w-2.5 h-2.5" />
                  <span>Radar Map</span>
                </div>
              </div>

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
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-thin">
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
