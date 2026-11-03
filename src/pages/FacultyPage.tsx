import React, { useState, useMemo } from 'react';
import { Users, Search, Mail, Award, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import { FACULTY_MEMBERS, DEPARTMENTS } from '../data/collegeData';
import { VerificationBadge } from '../components/VerificationBadge';

export const FacultyPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter(fac => {
      const matchesDept = selectedDept === 'all' || fac.department.toLowerCase().includes(selectedDept.toLowerCase());
      const matchesSearch = fac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            fac.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            fac.department.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="space-y-12 py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-jyothi-purple-950 via-jyothi-purple-900 to-jyothi-purple-950 text-white p-8 md:p-14 border border-jyothi-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-gold-500/20 text-jyothi-gold-300 border border-jyothi-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              Academic Mentorship
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-brand leading-tight">
              Distinguished Faculty Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Our faculty comprises esteemed academicians, doctorates from premier national institutions, and experienced industry veterans dedicated to personalized student mentoring, research inquiry, and academic integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, research area..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-jyothi-purple-800 focus:outline-none"
            />
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedDept('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedDept === 'all'
                  ? 'bg-jyothi-purple-800 text-jyothi-gold-300 shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Departments
            </button>
            {DEPARTMENTS.slice(0, 5).map(d => (
              <button
                key={d.id}
                onClick={() => setSelectedDept(d.name)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedDept === d.name
                    ? 'bg-jyothi-purple-800 text-jyothi-gold-300 shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d.code}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((fac) => (
            <div 
              key={fac.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-jyothi-purple-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-52 relative overflow-hidden bg-slate-100">
                  <img 
                    src={fac.image} 
                    alt={fac.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-jyothi-gold-400 text-jyothi-purple-950 font-bold uppercase">
                      {fac.experience}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-base font-brand text-jyothi-purple-950 leading-tight">
                    {fac.name}
                  </h3>
                  <p className="text-xs font-semibold text-jyothi-purple-800">
                    {fac.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {fac.department}
                  </p>
                  
                  <div className="pt-2 text-[11px] text-slate-600 space-y-1">
                    <p><strong className="text-slate-700">Qualification:</strong> {fac.qualification}</p>
                    <p className="line-clamp-2"><strong className="text-slate-700">Focus:</strong> {fac.specialization}</p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <a 
                  href={`mailto:${fac.email}`}
                  className="font-medium text-jyothi-purple-800 hover:text-jyothi-purple-950 flex items-center gap-1.5 truncate"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{fac.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="py-16 text-center text-slate-500 bg-white rounded-3xl border border-slate-200">
            <p className="text-base font-semibold">No faculty members found matching your search.</p>
            <p className="text-xs text-slate-400 mt-1">Try resetting the department filter or search terms.</p>
          </div>
        )}
      </section>

    </div>
  );
};

