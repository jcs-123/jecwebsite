import React, { useState } from 'react';
import { X, MapPin, Eye, Compass, Layers, CheckCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TOUR_SPOTS = [
  {
    id: "admin",
    name: "Administrative & Decennial Block",
    tag: "Academic Core",
    image: "/assets/jyothi_campus_hero.jpg",
    desc: "The iconic main entrance and administrative pavilion of Jyothi Engineering College, housing the Principal's office, autonomous examination wing, and boardrooms.",
    highlights: ["Autonomous Examination Center", "Central Boardroom", "Dean's Secretariat", "Green Courtyard"]
  },
  {
    id: "fablab",
    name: "FabLab Kerala & Advanced Robotics Cell",
    tag: "Innovation & Prototyping",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop",
    desc: "State-of-the-art MIT-affiliated fabrication laboratory funded by KSUM with high precision CNC mills, SLA/FDM 3D printers, and industrial KUKA robot arms.",
    highlights: ["Ultimaker 3D Printing suite", "Epilog Laser Engravers", "Electronics Workbench", "Student Startup Incubation"]
  },
  {
    id: "library",
    name: "Central Technical Library & Digital Hub",
    tag: "Knowledge Repository",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    desc: "A 15,000+ sq.ft modern learning sanctuary with 42,000+ technical volumes, digital journals, IEEE Xplore terminals, and silent research cubicles.",
    highlights: ["42,000+ Books & Manuals", "IEEE Digital Library Access", "RFID Automation Gate", "Multimedia Conference Room"]
  },
  {
    id: "sports",
    name: "Sports Complex & Athletic Stadium",
    tag: "Recreation & Athletics",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    desc: "Sprawling multi-sport facilities set amidst lush greenery, featuring a standard football field, floodlit basketball court, volleyball arena, and modern gymnasium.",
    highlights: ["Standard Football Turf", "Floodlit Basketball Courts", "Indoor Badminton Arena", "Fitness Gymnasium"]
  },
  {
    id: "auditorium",
    name: "Fr. Thekkekara Central Auditorium",
    tag: "Auditorium & Arts",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    desc: "Acoustically engineered 1,500-seat auditorium that hosts international conferences, convocation ceremonies, and the signature cultural festival 'Tharang'.",
    highlights: ["1,500+ Seating Capacity", "Dolby Digital Surround Sound", "Large Proscenium Stage", "Acoustic Wall Treatment"]
  }
];

export const VirtualTourModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeSpot, setActiveSpot] = useState(TOUR_SPOTS[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-jyothi-purple-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-jyothi-purple-950 rounded-2xl sm:rounded-3xl shadow-2xl border border-jyothi-gold-400/40 overflow-hidden text-white flex flex-col max-h-[94vh] my-auto">
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-jyothi-purple-900 border-b border-jyothi-purple-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-jyothi-gold-500/20 text-jyothi-gold-400 rounded-xl border border-jyothi-gold-400/30 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-bold font-brand tracking-wide text-white leading-tight">
                Jyothi Hills 360° Virtual Campus Experience
              </h3>
              <p className="text-[10px] sm:text-xs text-jyothi-gold-300">
                Explore our 30+ Acre Autonomous Campus in Cheruthuruthy, Thrissur
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto lg:overflow-hidden">
          
          {/* Main Visual Display */}
          <div className="lg:col-span-8 relative bg-black flex flex-col justify-end min-h-[260px] sm:min-h-[340px] lg:min-h-[480px]">
            <img 
              src={activeSpot.image} 
              alt={activeSpot.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jyothi-purple-950 via-jyothi-purple-950/40 to-transparent" />
            
            {/* Spot Details Overlay */}
            <div className="relative p-4 sm:p-6 space-y-2 sm:space-y-3 z-10">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-jyothi-gold-500 text-jyothi-purple-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {activeSpot.tag}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-brand text-white leading-tight">
                {activeSpot.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                {activeSpot.desc}
              </p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                {activeSpot.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-lg bg-black/60 border border-jyothi-gold-400/30 text-[11px] sm:text-xs text-jyothi-gold-200">
                    <CheckCircle className="w-3 h-3 text-jyothi-gold-400" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Side Spot Selector */}
          <div className="lg:col-span-4 bg-jyothi-purple-900/90 border-t lg:border-t-0 lg:border-l border-jyothi-purple-800 p-3 sm:p-4 overflow-y-auto space-y-2 max-h-[220px] sm:max-h-[260px] lg:max-h-none">
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-jyothi-gold-300 px-2 py-1 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Campus Landmark Stops
            </div>

            {TOUR_SPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(spot)}
                className={`w-full text-left p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all flex items-center gap-2.5 sm:gap-3 border ${
                  activeSpot.id === spot.id 
                    ? 'bg-jyothi-purple-800 border-jyothi-gold-400 text-white shadow-lg' 
                    : 'bg-jyothi-purple-950/60 border-jyothi-purple-800/80 text-slate-300 hover:bg-jyothi-purple-800/50'
                }`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-jyothi-gold-400/40">
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs text-jyothi-gold-400 font-medium">{spot.tag}</div>
                  <div className="font-bold text-xs sm:text-sm truncate">{spot.name}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Eye className="w-3 h-3" /> View stop
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-jyothi-purple-950 border-t border-jyothi-purple-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] sm:text-xs text-slate-400 gap-1 sm:gap-0">
          <span>Physical Campus: Jyothi Hills, Cheruthuruthy, Thrissur</span>
          <span className="text-jyothi-gold-300 font-medium">Campus Visits: Mon-Sat 9 AM - 5 PM</span>
        </div>

      </div>
    </div>
  );
};

