import React, { useState } from 'react';
import { 
  Building2, Layers, Compass, CheckCircle2, 
  MapPin, ShieldCheck, Bus, Coffee, BookOpen, Dumbbell, Users 
} from 'lucide-react';
import { FACILITIES } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';

interface Props {
  selectedFacilityId?: string;
  onOpenTour: () => void;
}

export const FacilitiesPage: React.FC<Props> = ({ selectedFacilityId, onOpenTour }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFacilities = FACILITIES.filter(f => {
    if (selectedCategory === 'all') return true;
    return f.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              Campus Infrastructure
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              World-Class Campus Facilities
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Nestled on a scenic 30+ acre eco-friendly campus in Cheruthuruthy, Jyothi provides modern research laboratories, FabLab Kerala, an automated central library, comfortable on-campus residences, and an extensive 25+ bus fleet network.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenTour}
                className="px-6 py-3 rounded-xl bg-jyothi-gold-400 text-jyothi-purple-950 font-bold text-xs sm:text-sm shadow-glow-gold hover:bg-jyothi-gold-300 transition-all inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>Launch 360° Virtual Campus Tour</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Facilities' },
              { id: 'academic', label: 'Academic & Labs' },
              { id: 'residential', label: 'Hostels & Residential' },
              { id: 'recreation', label: 'Sports & Recreation' },
              { id: 'support', label: 'Transport & Support Services' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-jyothi-purple-800 text-jyothi-gold-300 shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium self-end sm:self-auto">
            Showing {filteredFacilities.length} Verified Facilities
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFacilities.map((fac) => (
            <div 
              key={fac.id}
              id={fac.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover hover:border-jyothi-purple-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-jyothi-gold-300 font-bold text-xs">
                      {fac.category}
                    </span>
                    <VerificationBadge status={fac.status} />
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold font-brand text-jyothi-purple-950">
                    {fac.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Verified Specifications & Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {fac.specs.map((spec, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Location: Jyothi Hills, Cheruthuruthy Campus</span>
                <button
                  onClick={onOpenTour}
                  className="font-bold text-jyothi-purple-800 hover:text-jyothi-purple-950 flex items-center gap-1"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>View on 360° Tour</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bus Fleet Route Network Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center gap-2">
            <Bus className="w-6 h-6 text-jyothi-gold-400" />
            <h3 className="text-xl font-bold font-brand text-white">
              Extensive 25+ Fleet College Bus Network
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Jyothi provides safe, convenient, GPS-tracked transportation for day scholars covering major transit points across Thrissur, Palakkad, and Malappuram districts:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
            {[
              "Thrissur City & Swaraj Round",
              "Wadakkanchery & Kechery",
              "Kunnamkulam & Guruvayoor",
              "Shornur & Ottapalam",
              "Pattambi & Cherpulassery",
              "Palakkad Town Route"
            ].map((route, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-medium text-center">
                {route}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

