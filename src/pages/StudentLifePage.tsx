import React from 'react';
import {
  ArrowRight,
  Award,
  Droplets,
  Dumbbell,
  Flame,
  Leaf,
  Lightbulb,
  Sparkles,
  Sun,
  Trophy,
  Users,
  Waves,
} from 'lucide-react';
import { STUDENT_CLUBS } from '../data/collegeData';
import { RevealBlock } from '../components/RevealBlock';
import { StudentLifeLayout } from '../components/StudentLifeLayout';

interface Props {
  subSection?: string;
  onNavigate?: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

const CELEBRATIONS = [
  {
    title: 'Onam & Harvest Festivities',
    season: 'August – September',
    image: '/assets/cel_onam.jpg',
    desc: "A vibrant celebration of Kerala's heritage, togetherness and the spirit of harvest.",
  },
  {
    title: 'Christmas & Carols Night',
    season: 'December',
    image: '/assets/cel_christmas.jpg',
    desc: 'A joyful season of carols, music and celebration that fills the campus with festivity.',
  },
  {
    title: 'JEC Arts Day (Kalolsavam)',
    season: 'February',
    image: '/assets/cel_arts.jpg',
    desc: 'A campus arts festival that showcases the diverse creative talent of JEC students.',
  },
  {
    title: 'Graduation & Honours Day',
    season: 'Annual Convocation',
    image: 'https://images.unsplash.com/photo-1789749958513-2b9ce2c93eaa?q=80&w=900&auto=format&fit=crop',
    desc: "A proud occasion to celebrate academic achievements and the next chapter in every student's journey.",
  },
];

const SPORTS_FACILITIES = [
  {
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop',
    title: 'Archdiocesan & KTU Tournaments',
    desc: 'Active participation in Archdiocesan and KTU inter-collegiate tournaments across a range of sports, fostering team spirit, discipline and excellence.',
  },
  {
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop',
    title: '400m Athletic Track & Football',
    desc: 'A standard 400m athletic track and well-maintained football ground for systematic training, fitness development and competitive preparation.',
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    title: 'Floodlit Courts & Multi-Gymnasium',
    desc: 'Floodlit courts for basketball, volleyball and badminton, along with a well-equipped multi-gymnasium for strength, conditioning and overall fitness.',
  },
];

const NSS_PILLARS = [
  { icon: Lightbulb, label: 'Village Electrification' },
  { icon: Droplets, label: 'Blood Donation' },
  { icon: Leaf, label: 'Eco-Sanitation' },
  { icon: Sun, label: 'Solar Lanterns' },
  { icon: Waves, label: 'Flood Relief' },
];

export const StudentLifePage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
}) => {
  const go = (page: string) => {
    onNavigate?.(page);
  };

  return (
    <StudentLifeLayout
      activeRoute="student-life"
      badge="Campus Culture & Community"
      title="Student Life at"
      accentTitle="Jyothi Hills."
      subtitle="Experience campus life where technical brilliance converges with cultural festivals, sports, student societies and social outreach."
      heroImage="/assets/campus_students_banner.jpg"
      heroVariant="arch"
      onNavigate={(page, subId) => onNavigate?.(page, subId)}
      onOpenApply={onOpenApply}
      onOpenTour={onOpenTour}
    >
      {/* 1. Clubs, Chapters & Creative Collectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Clubs, Chapters &amp; Creative Collectives
          </h2>
          <button
            onClick={() => go('clubs-societies')}
            className="text-xs font-bold text-[#250836] hover:text-[#A87627] inline-flex items-center gap-1.5 border-b border-[#DFC06A] pb-0.5 cursor-pointer self-start sm:self-auto"
          >
            <span>Open Clubs Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_CLUBS.map((club, idx) => (
            <RevealBlock
              key={idx}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={(idx % 3) * 150}
              className="h-full"
            >
              <div className="h-full bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col gap-4 group">
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 px-1 pb-1">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#5C3A14] bg-[#FBF2DC] border border-[#DFC06A]/70 px-3 py-1 rounded-full">
                    {club.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                    {club.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {club.desc}
                  </p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 2. THARANG: Diagonal Split Royal Purple Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#250836] via-[#340D4C] to-[#1A0328] text-white border border-[#DFC06A]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[300px] overflow-hidden">
              <img
                src="/assets/club_tharang.jpg"
                alt="Tharang National Tech & Cultural Fest"
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#2B0A40] to-transparent" />
            </div>

            <div className="lg:col-span-6 p-7 sm:p-10 space-y-5 flex flex-col justify-center">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#FDE68A] tracking-wide">
                  THARANG:
                </div>
                <h2 className="text-xl sm:text-3xl font-bold font-['Playfair_Display',serif] italic text-white">
                  National Tech &amp; Cultural Fest
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                JEC&apos;s annual national-level fest that brings together technology, creativity and culture, uniting students from across the country for a vibrant celebration of talent and ideas.
              </p>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/15">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#FDE68A] shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-white leading-tight">3,500+</div>
                    <div className="text-[11px] text-amber-200/80">Participants</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-[#FDE68A] shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-white leading-tight">45+</div>
                    <div className="text-[11px] text-amber-200/80">Competitions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#FDE68A] shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-white leading-tight">₹3,00,000+</div>
                    <div className="text-[11px] text-amber-200/80">Prize Pool</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#FDE68A] shrink-0" />
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-white leading-tight">Pro-Nights &amp;</div>
                    <div className="text-[11px] text-amber-200/80">Celebrities</div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => go('tharang-fest')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#DFC06A] via-[#FDE68A] to-[#C9902C] text-[#250836] font-extrabold text-xs sm:text-sm shadow-lg hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Tharang Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* 3. Celebrations & Cultural Milestones (2x2 Split Photo Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
              Celebrations &amp; Cultural Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              A year-round calendar of festive, creative and academic celebrations that enrich campus life and bring the JEC community together.
            </p>
          </div>
          <button
            onClick={() => go('celebrations')}
            className="text-xs font-bold text-[#250836] hover:text-[#A87627] inline-flex items-center gap-1.5 border-b border-[#DFC06A] pb-0.5 cursor-pointer self-start sm:self-auto"
          >
            <span>Open Celebrations Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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
                <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-center space-y-2.5 text-left">
                  <span className="inline-block w-fit text-[10px] font-bold px-3 py-1 rounded-full bg-[#FBF2DC] text-[#5C3A14] border border-[#DFC06A]/70">
                    {item.season}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif] text-[#250836] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 4. Sports Complex and Arena (3 Photo-Topped Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="flex items-center gap-4">
            <span className="h-[1px] flex-1 bg-amber-300/80" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
              Sports Complex and Arena
            </h2>
            <span className="h-[1px] flex-1 bg-amber-300/80" />
          </div>
          <p className="text-sm sm:text-base font-['Playfair_Display',serif] italic text-[#5C3A14]">
            Championship Athletics &amp; Fitness Facilities
          </p>
          <div>
            <button
              onClick={() => go('sports-arena')}
              className="text-xs font-bold text-[#250836] hover:text-[#A87627] inline-flex items-center gap-1.5 border-b border-[#DFC06A] pb-0.5 cursor-pointer"
            >
              <span>Open Sports Arena Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPORTS_FACILITIES.map((sp, idx) => (
            <RevealBlock
              key={idx}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col gap-4 group">
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={sp.image}
                    alt={sp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 px-1 pb-1 text-left">
                  <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif] text-[#250836]">
                    {sp.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {sp.desc}
                  </p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 5. NSS Units 140 & 591: Engineering for Society (Split Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#250836] via-[#340D4C] to-[#1A0328] text-white border border-[#DFC06A]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] overflow-hidden">
              <img
                src="/assets/club_nss.jpg"
                alt="NSS Units 140 and 591 Volunteers"
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2B0A40] to-transparent" />
            </div>

            <div className="lg:col-span-7 p-7 sm:p-10 space-y-5 flex flex-col justify-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] leading-tight text-white">
                  NSS Units 140 &amp; 591: Engineering for Society
                </h2>
                <div className="w-16 h-[2px] bg-[#DFC06A]" />
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Through NSS Units 140 &amp; 591, Jyothi Engineering College sensitizes students to community needs and promotes responsible, technology-driven service across <strong className="text-[#FDE68A]">Thrissur and Palakkad</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                {NSS_PILLARS.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={i}
                      className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1.5"
                    >
                      <Icon className="w-5 h-5 text-[#FDE68A] mx-auto" />
                      <div className="text-[11px] font-semibold text-white leading-tight">
                        {p.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-1">
                <button
                  onClick={() => go('nss-outreach')}
                  className="px-6 py-2.5 rounded-full bg-transparent hover:bg-[#DFC06A]/15 text-[#FDE68A] border border-[#DFC06A] font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore NSS &amp; Social Outreach</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>
    </StudentLifeLayout>
  );
};
