import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronDown, MapPin, Sparkles, Users } from 'lucide-react';
import { STUDENT_CLUBS } from '../data/collegeData';
import { RevealBlock } from '../components/RevealBlock';
import { StudentLifeLayout } from '../components/StudentLifeLayout';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

interface ClubExtraMeta {
  category: 'technical' | 'innovation' | 'cultural';
  venue: string;
  schedule: string;
  highlights: string[];
}

const CLUB_META: Record<string, ClubExtraMeta> = {
  'IEEE Student Branch': {
    category: 'technical',
    venue: 'Research & Seminar Hall, Main Block',
    schedule: 'Wednesdays • 4:15 PM',
    highlights: ['IEEE WiE Affinity Group', 'Technical Paper Symposiums', 'Hardware & IoT Workshops'],
  },
  'Tharang Tech & Cultural Fest': {
    category: 'cultural',
    venue: 'Central Auditorium & Open Amphitheatre',
    schedule: 'Annual Core Committee',
    highlights: ['45+ Inter-Collegiate Events', '₹3L+ Prize Pool', 'Live Pro-Show Concerts'],
  },
  'NSS Unit No. 140 & 591': {
    category: 'cultural',
    venue: 'NSS Cell & Adopted Panchayats',
    schedule: 'Saturdays • 9:30 AM',
    highlights: ['Solar Lantern Drives', 'Blood & Medical Camps', '7-Day Rural Special Camp'],
  },
  'Developer Student Club / ACM': {
    category: 'technical',
    venue: 'Central Computing Facility (CSE Block)',
    schedule: 'Fridays • 4:15 PM',
    highlights: ['24-Hr HackJyothi Sprints', 'Open-Source & Git Clinics', 'LeetCode & ICPC Prep'],
  },
  'Team Jyothi Racing (SAE)': {
    category: 'innovation',
    venue: 'SAE Fabrication & Mechanical Bay',
    schedule: 'Daily Evening Lab Hours',
    highlights: ['SAE BAJA & Formula Fabrication', 'CAD/CAE Simulation', 'Powertrain & EV Design'],
  },
  'Natya & Swara Cultural Club': {
    category: 'cultural',
    venue: 'Fine Arts Studio & Auditorium',
    schedule: 'Thursdays • 4:30 PM',
    highlights: ['Classical & Fusion Dance', 'Campus Acoustic & Rock Band', 'Short Film & Theatre'],
  },
};

const CLUB_BENEFITS = [
  {
    image: '/assets/club_coding.jpg',
    title: 'Global Technical Chapters',
    badge: 'IEEE • CSI • ACM',
    desc: 'Be part of international student chapters, collaborate on real technical projects, and get mentored by experienced peers.',
  },
  {
    image: '/assets/club_iedc.jpg',
    title: 'IEDC & Startup Incubation',
    badge: 'KSUM & MIT FabLab',
    desc: 'Turn ideas into impact with startup support, hands-on prototyping, and guidance to build viable solutions.',
  },
  {
    image: '/assets/club_music.jpg',
    title: 'Creative & Cultural Collectives',
    badge: 'Music • Media • Drama',
    desc: 'Explore your creative side through music, filmmaking, photography, and a wide range of creative arts with like-minded peers.',
  },
];

const JOIN_STEPS = [
  {
    step: '01',
    title: 'Freshers Club Expo',
    desc: 'Discover all clubs and societies, meet current members, and explore opportunities that match your interests.',
  },
  {
    step: '02',
    title: 'Pick Your Chapters',
    desc: 'Join the clubs and technical chapters you are passionate about — from innovation and coding to cultural and creative arts.',
  },
  {
    step: '03',
    title: 'Lead & Earn Activity Points',
    desc: 'Take up roles in events and projects, build leadership skills, and earn activity points for your overall development.',
  },
];

export const ClubsSocietiesPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
}) => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'innovation' | 'cultural'>('all');
  const [expandedClub, setExpandedClub] = useState<string | null>(null);

  const filteredClubs = STUDENT_CLUBS.filter((club) => {
    if (filter === 'all') return true;
    return CLUB_META[club.name]?.category === filter;
  });

  return (
    <StudentLifeLayout
      activeRoute="clubs-societies"
      badge="Clubs and Societies"
      title="Clubs, Chapters &"
      accentTitle="Creative Collectives."
      subtitle="Join international technical societies, innovation cells, coding collectives, and cultural clubs led by Jyothi students across every department."
      heroImage="/assets/club_hero.jpg"
      heroVariant="arch"
      stats={[
        { value: '18+', label: 'Active Student Clubs' },
        { value: '1,800+', label: 'Student Members' },
        { value: '60+', label: 'Annual Workshops' },
        { value: 'IEEE / IEDC', label: 'National Chapters' },
      ]}
      onNavigate={onNavigate}
      onOpenApply={onOpenApply}
      onOpenTour={onOpenTour}
    >
      {/* Active Student Organizations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <span className="h-[1px] flex-1 bg-amber-300/80" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
              Active Student Organizations at Jyothi
            </h2>
            <span className="h-[1px] flex-1 bg-amber-300/80" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar items-center justify-start sm:justify-center gap-2 p-1.5 rounded-2xl bg-white border border-amber-200/80 w-full sm:w-fit mx-auto shadow-2xs">
            {[
              { id: 'all', label: 'All Clubs (6)' },
              { id: 'technical', label: 'Technical & Coding' },
              { id: 'innovation', label: 'Motorsports & FabLab' },
              { id: 'cultural', label: 'Arts, Fest & NSS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#250836] text-[#FDE68A] shadow-sm'
                    : 'text-[#250836] hover:bg-amber-50/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club, idx) => {
            const meta = CLUB_META[club.name];
            const isExpanded = expandedClub === club.name;
            return (
              <RevealBlock
                key={club.name}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={(idx % 3) * 150}
                className="h-full"
              >
                <div className="h-full bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-xl hover:border-[#DFC06A] transition-all flex flex-col justify-between gap-4 group">
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#250836]/75 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#250836] bg-[#FBF2DC]/95 border border-[#DFC06A] px-2.5 py-1 rounded-full">
                          {club.tag}
                        </span>
                        <span className="text-[10px] font-bold text-[#FDE68A] bg-[#250836]/85 backdrop-blur-xs border border-[#DFC06A]/40 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {club.members}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 px-1">
                      <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                        {club.name}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {club.desc}
                      </p>

                      {meta && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {meta.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-[#FAF7F0] border border-amber-200/70 text-[#5C3A14]"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {meta && (
                    <div className="pt-3 border-t border-slate-100 px-1 space-y-2.5">
                      <button
                        onClick={() => setExpandedClub(isExpanded ? null : club.name)}
                        className="w-full flex items-center justify-between text-xs font-bold text-[#250836] hover:text-[#A87627] transition-colors cursor-pointer"
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#A87627]" />
                          {isExpanded ? 'Hide Club Details' : 'Schedule & Venue Details'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180 text-[#A87627]' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-3 rounded-2xl bg-[#FAF7F0] border border-amber-200/70 space-y-1.5 text-[11px] text-slate-700">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#A87627] shrink-0" />
                            <span>{meta.venue}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-[#A87627] shrink-0" />
                            <span>{meta.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>Open to All B.Tech &amp; M.Tech Students</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* Beyond Classroom Learning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Beyond Classroom Learning
          </h2>
          <div className="flex items-center gap-4">
            <span className="h-[1px] flex-1 bg-amber-300/80" />
            <p className="text-sm sm:text-base font-['Playfair_Display',serif] italic text-[#A87627]">
              Leadership, Prototyping &amp; Peer Mentorship
            </p>
            <span className="h-[1px] flex-1 bg-amber-300/80" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CLUB_BENEFITS.map((item, idx) => (
            <RevealBlock
              key={idx}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full p-4 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="w-full sm:w-36 md:w-40 aspect-[16/10] sm:aspect-square rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1.5 text-left">
                  <h3 className="text-base sm:text-lg font-bold font-['Playfair_Display',serif] text-[#250836] leading-snug">
                    {item.title}
                  </h3>
                  <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/60">
                    {item.badge}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* Getting Started in Semester 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-4">
          <span className="h-[1px] flex-1 bg-amber-300/80" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
            Getting Started in Semester 1
          </h2>
          <span className="h-[1px] flex-1 bg-amber-300/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {JOIN_STEPS.map((s, idx) => (
            <RevealBlock
              key={idx}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 150}
              className="h-full"
            >
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-full border-2 border-[#DFC06A] bg-white text-[#250836] font-['Playfair_Display',serif] italic font-bold text-lg flex items-center justify-center shrink-0 shadow-2xs">
                  {s.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base font-brand text-[#250836]">{s.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </StudentLifeLayout>
  );
};
