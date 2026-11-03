import React, { useState, useMemo } from 'react';
import { X, Search, BookOpen, User, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import { DEPARTMENTS, FACULTY_MEMBERS, FACILITIES } from '../data/collegeData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, subId?: string) => void;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { departments: [], faculty: [], facilities: [] };

    const departments = DEPARTMENTS.filter(d => 
      d.name.toLowerCase().includes(q) || 
      d.code.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    );

    const faculty = FACULTY_MEMBERS.filter(f => 
      f.name.toLowerCase().includes(q) || 
      f.department.toLowerCase().includes(q) || 
      f.specialization.toLowerCase().includes(q)
    );

    const facilities = FACILITIES.filter(f => 
      f.title.toLowerCase().includes(q) || 
      f.description.toLowerCase().includes(q)
    );

    return { departments, faculty, facilities };
  }, [query]);

  if (!isOpen) return null;

  const totalResults = results.departments.length + results.faculty.length + results.facilities.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 p-2.5 sm:p-4 bg-jyothi-purple-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-jyothi-gold-300 overflow-hidden text-jyothi-charcoal-800 my-auto">
        
        {/* Search input header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 flex items-center gap-2.5 sm:gap-3 bg-slate-50">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-jyothi-purple-800 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, faculty, research labs, facilities..."
            className="w-full bg-transparent text-xs sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-1.5 text-slate-500 hover:bg-slate-200 rounded-full">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {!query && (
            <div className="py-8 text-center text-slate-500 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-medium">Quick suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {['Artificial Intelligence', 'Cyber Security', 'Admissions 2025', 'Placements', 'Hostels', 'FabLab'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 rounded-full bg-slate-100 hover:bg-jyothi-purple-100 hover:text-jyothi-purple-900 text-xs text-slate-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm">No results found matching "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for CSE, ECE, Robotics, Placements, or Faculty.</p>
            </div>
          )}

          {/* Departments results */}
          {results.departments.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 flex items-center gap-1.5 px-2">
                <BookOpen className="w-4 h-4 text-jyothi-gold-600" />
                Academic Programmes & Departments ({results.departments.length})
              </div>
              {results.departments.map(d => (
                <button
                  key={d.id}
                  onClick={() => {
                    onNavigate('departments', d.id);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-jyothi-purple-50 border border-slate-200 hover:border-jyothi-purple-200 transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold text-sm text-jyothi-purple-950 group-hover:text-jyothi-purple-800">
                      {d.name} ({d.code})
                    </div>
                    <div className="text-xs text-slate-500">{d.degree} • Intake: {d.intake} seats</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-jyothi-purple-800 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          )}

          {/* Faculty results */}
          {results.faculty.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 flex items-center gap-1.5 px-2">
                <User className="w-4 h-4 text-jyothi-gold-600" />
                Faculty Members ({results.faculty.length})
              </div>
              {results.faculty.map(f => (
                <button
                  key={f.id}
                  onClick={() => {
                    onNavigate('faculty');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-jyothi-purple-50 border border-slate-200 hover:border-jyothi-purple-200 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <img src={f.image} alt={f.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-sm text-jyothi-purple-950">{f.name}</div>
                      <div className="text-xs text-slate-500">{f.role} • {f.department}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-jyothi-purple-800 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          )}

          {/* Facilities results */}
          {results.facilities.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 flex items-center gap-1.5 px-2">
                <Building className="w-4 h-4 text-jyothi-gold-600" />
                Campus Facilities ({results.facilities.length})
              </div>
              {results.facilities.map(fac => (
                <button
                  key={fac.id}
                  onClick={() => {
                    onNavigate('facilities');
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-jyothi-purple-50 border border-slate-200 hover:border-jyothi-purple-200 transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold text-sm text-jyothi-purple-950 flex items-center gap-2">
                      {fac.title}
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">Verified</span>
                    </div>
                    <div className="text-xs text-slate-500 truncate max-w-md">{fac.description}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-jyothi-purple-800 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-jyothi-purple-800" /> Official Jyothi Engineering College Autonomous Portal
          </span>
          <span>ESC to close</span>
        </div>

      </div>
    </div>
  );
};

