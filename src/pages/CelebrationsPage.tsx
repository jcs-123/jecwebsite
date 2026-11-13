import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { StudentLifeLayout } from '../components/StudentLifeLayout';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

const CELEBRATIONS = [
  {
    title: 'Onam & Harvest Festivities',
    tag: 'Cultural Heritage',
    season: 'August – September',
    image: '/assets/cel_onam.jpg',
    desc: 'Campus-wide Athapookalam floral carpets, Thiruvathirakali, Chenda Melam, Tug-of-War, and traditional Onam Sadhya uniting all departments.',
    highlights: ['Inter-departmental Pookalam', 'Traditional Sadhya Feast', 'Maveli & Folk Procession'],
  },
  {
    title: 'Christmas & Carols Night',
    tag: 'Annual Celebration',
    season: 'December',
    image: '/assets/cel_christmas.jpg',
    desc: 'Illuminated campus cribs, choir carol competitions, Secret Santa exchanges, and festive charity drives across Cheruthuruthy.',
    highlights: ['Live Choir & Carols', 'Crib Making Contest', 'Charity Outreach'],
  },
  {
    title: 'JEC Arts Day (Kalolsavam)',
    tag: 'Fine Arts & Stage',
    season: 'February',
    image: '/assets/cel_arts.jpg',
    desc: 'Multi-stage showcase of classical dance, music, theatre, mime, photography, and literary arts celebrating student creativity.',
    highlights: ['Classical & Fusion Dance', 'Battle of Bands', 'Literary & Fine Arts'],
  },
  {
    title: 'Graduation & Honours Day',
    tag: 'Academic Milestone',
    season: 'Annual Convocation',
    image: 'https://images.unsplash.com/photo-1789749958513-2b9ce2c93eaa?q=80&w=900&auto=format&fit=crop',
    desc: 'Formal convocation ceremony honoring B.Tech and M.Tech graduates, rank holders, and student achievers with families and faculty.',
    highlights: ['Degree Conferral', 'Merit Gold Medals', 'Alumni Induction'],
  },
];

const SEASONAL_CALENDAR = [
  { month: 'Aug – Sep', event: 'Onam Fest & Freshers Induction', desc: 'Welcoming first-year cohorts with cultural warmth.' },
  { month: 'October', event: 'Ethnic Day & Cultural Parade', desc: 'Celebrating Kerala heritage and traditional attire.' },
  { month: 'December', event: 'Christmas Crib & Carol Fiesta', desc: 'Campus-wide illumination and choir nights.' },
  { month: 'Feb – Mar', event: 'JEC Arts Day & Graduation Gala', desc: 'Stage championships and formal convocation.' },
];

export const CelebrationsPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
}) => {
  return (
    <StudentLifeLayout
      activeRoute="celebrations"
      badge="Celebrations"
      title="Campus Celebrations &"
      accentTitle="Cultural Traditions."
      subtitle="From Onam Sadhya and Christmas Carols to JEC Arts Day and Graduation — cherished moments that build lifelong friendships at Jyothi Hills."
      heroImage="/assets/cel_onam.jpg"
      heroCaption="Annual Festivals & Convocation"
      heroVariant="arch"
      stats={[
        { value: '12+', label: 'Annual Celebrations', sub: 'Across All Semesters' },
        { value: '4,000+', label: 'Campus Community', sub: 'Students, Faculty & Families' },
        { value: '40+', label: 'Arts & Stage Events', sub: 'Dance, Music & Theatre' },
        { value: '100%', label: 'Student-Organized', sub: 'Senate & Arts Club' },
      ]}
      onNavigate={onNavigate}
      onOpenApply={onOpenApply}
      onOpenTour={onOpenTour}
    >
      {/* 4 Major Celebration Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-4">
          <span className="h-[1px] flex-1 bg-amber-300/80" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836] text-center">
            Annual Celebrations &amp; Cultural Milestones
          </h2>
          <span className="h-[1px] flex-1 bg-amber-300/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CELEBRATIONS.map((item, idx) => (
            <RevealBlock
              key={idx}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={(idx % 2) * 150}
              className="h-full"
            >
              <div className="h-full rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch group">
                <div className="sm:col-span-5 aspect-[16/10] sm:aspect-auto relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/70">
                      <Calendar className="w-3 h-3 text-[#A87627]" />
                      {item.season}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-[#FAF7F0] border border-amber-200/70 text-[#5C3A14]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* Seasonal Celebrations Calendar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 px-3.5 py-1 rounded-full border border-jyothi-purple-200 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Year-Round Festivity
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Cultural Calendar at Jyothi Hills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEASONAL_CALENDAR.map((cal, idx) => (
            <RevealBlock
              key={idx}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={(idx % 4) * 150}
              className="h-full"
            >
              <div className="h-full p-5 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#250836] text-[#FDE68A] text-[11px] font-bold">
                  {cal.month}
                </span>
                <h4 className="font-bold text-base font-brand text-[#250836] pt-1">{cal.event}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{cal.desc}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </StudentLifeLayout>
  );
};
