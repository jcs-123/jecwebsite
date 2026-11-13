import React from 'react';
import {
  Award,
  Calendar,
  Flame,
  Music,
  Sparkles,
  Star,
  Trophy,
  Users,
} from 'lucide-react';
import { RevealBlock } from '../components/RevealBlock';
import { StudentLifeLayout } from '../components/StudentLifeLayout';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

const THARANG_ACTIVITIES = [
  {
    category: 'Technical',
    title: 'HackJyothi 24-Hr Coding Sprint',
    image: '/assets/club_coding.jpg',
    desc: '24-hour AI, IoT, and full-stack hackathons judged by industry engineers with cash prizes and internship offers.',
    meta: '₹1,00,000+ Prize Pool',
  },
  {
    category: 'Robotics',
    title: 'RoboWars & Autonomous Maze',
    image: '/assets/club_iedc.jpg',
    desc: 'High-voltage combat robotics, autonomous line followers, and drone obstacle races powered by the MIT FabLab.',
    meta: '₹75,000+ Prize Pool',
  },
  {
    category: 'Pro-Show',
    title: 'Musical Pro-Nights & Live Bands',
    image: '/assets/club_music.jpg',
    desc: 'Open-air amphitheatre concerts featuring celebrated South Indian playback singers, indie bands, and EDM artists.',
    meta: '3,500+ Live Audience',
  },
  {
    category: 'Cultural',
    title: 'Choreo Night & Stage Showcase',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=900&auto=format&fit=crop',
    desc: 'Electrifying inter-collegiate group dance, stage choreography, and rhythm battles at the main auditorium.',
    meta: 'National Rolling Trophy',
  },
  {
    category: 'Auto Expo',
    title: 'SAE Formula & Mobility Showcase',
    image: '/assets/club_racing.jpg',
    desc: 'Student-built formula race car demonstrations, CAD design challenges, and automotive engineering exhibitions.',
    meta: 'Live Track Exhibition',
  },
  {
    category: 'Grand Gala',
    title: 'Fashion Walk & Cultural Finale',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=900&auto=format&fit=crop',
    desc: 'Flagship designer ramp walk, spotlight theatre, and grand valedictory celebrations closing the 3-day fest.',
    meta: '45+ Fest Competitions',
  },
];

const FESTIVAL_DAYS = [
  {
    day: 'Day 01',
    theme: 'Inauguration & Tech Expo',
    items: [
      'Grand Opening Ceremony & Lighting of the Lamp',
      'Departmental Innovation & Prototype Exhibition',
      'Paper Presentations, CAD Challenge & Circuit Debugging',
    ],
  },
  {
    day: 'Day 02',
    theme: 'Robotics, Hackathons & Esports',
    items: [
      '24-Hour HackJyothi Coding Marathon Finale',
      'RoboWars Arena & Drone Obstacle Time Trials',
      'Inter-Collegiate Quiz, Debate & Esports Knockouts',
    ],
  },
  {
    day: 'Day 03',
    theme: 'Cultural Pro-Night & Valedictory',
    items: [
      'Choreo Night, Battle of Bands & Fashion Showcase',
      'Mega Prize Distribution (₹3,00,000+ Pool)',
      'Live Concert Pro-Show at the Open Amphitheatre',
    ],
  },
];

export const TharangFestPage: React.FC<Props> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
}) => {
  return (
    <StudentLifeLayout
      activeRoute="tharang-fest"
      badge="THARANG NATIONAL FEST"
      title="THARANG: National Tech"
      accentTitle="& Cultural Extravaganza."
      subtitle="Our flagship inter-collegiate festival uniting 3,500+ innovators, coders, roboticists, and artists from engineering colleges across South India."
      heroImage="/assets/club_tharang.jpg"
      heroCaption="Annual 3-Day Techno-Cultural Fiesta"
      heroVariant="wave"
      stats={[
        { value: '3,500+', label: 'Visiting Participants', sub: 'Across South India' },
        { value: '45+', label: 'Competitions & Shows', sub: 'Tech, Robotics & Arts' },
        { value: '₹3L+', label: 'Total Prize Pool', sub: 'Cash & Internships' },
        { value: '3 Days', label: 'Non-Stop Energy', sub: 'Hackathons & Pro-Nights' },
      ]}
      onNavigate={onNavigate}
      onOpenApply={onOpenApply}
      onOpenTour={onOpenTour}
    >
      {/* Signature Tharang Festival Split Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#210532] via-[#2E0946] to-[#170221] text-white border border-[#D4A346]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] overflow-hidden">
              <img
                src="/assets/club_tharang.jpg"
                alt="Tharang National Tech and Cultural Fest"
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#260739] to-transparent" />
            </div>

            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center space-y-6">
              <div className="space-y-2.5">
                <span className="px-3 py-1 rounded-full bg-[#DFC06A] text-[#250836] text-[11px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  Signature Annual Festival
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] leading-tight">
                  Where Engineering Brilliance{' '}
                  <span className="italic font-bold text-[#FDE68A]">Meets Stage Magic</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Organized by Jyothi&apos;s student senate and technical chapters, Tharang transforms the 30-acre campus into an electrifying hub of 24-hour coding sprints, combat robotics, and star-studded musical nights.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1 border-t border-white/15">
                <div className="flex items-start gap-2.5 pt-3">
                  <Users className="w-5 h-5 text-[#FDE68A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base sm:text-lg font-black text-white leading-none">
                      3,500+
                    </div>
                    <div className="text-[11px] text-amber-100/80 mt-1">Participants</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-3">
                  <Trophy className="w-5 h-5 text-[#FDE68A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base sm:text-lg font-black text-white leading-none">
                      45+
                    </div>
                    <div className="text-[11px] text-amber-100/80 mt-1">Competitions</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-1">
                  <Award className="w-5 h-5 text-[#FDE68A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base sm:text-lg font-black text-white leading-none">
                      ₹3,00,000+
                    </div>
                    <div className="text-[11px] text-amber-100/80 mt-1">Prize Pool</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-1">
                  <Star className="w-5 h-5 text-[#FDE68A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm sm:text-base font-black text-white leading-tight">
                      Pro-Nights &amp; Celebrities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* Tharang Activities & Function Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-amber-200/70 pb-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5C3A14] bg-[#FBF2DC] px-3 py-1 rounded-full border border-[#DFC06A]">
              <Music className="w-3.5 h-3.5 text-[#A87627]" />
              Tharang Function &amp; Event Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-['Playfair_Display',serif] text-[#250836]">
              Tharang Competitions,{' '}
              <span className="italic font-bold text-[#A87627]">Shows &amp; Arena</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Every technical sprint, robotics battle, and cultural pro-show hosted under the Tharang National Fest banner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {THARANG_ACTIVITIES.map((ev, idx) => (
            <RevealBlock
              key={ev.title}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div className="h-full rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#250836]/75 via-transparent to-transparent" />
                  <span className="absolute top-3.5 left-3.5 text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-[#FBF2DC]/95 text-[#5C3A14] border border-[#DFC06A] shadow-xs">
                    {ev.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#250836]">
                      {ev.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{ev.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-[#A87627]">
                    <span>{ev.meta}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A346]" />
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 3-Day Schedule Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-jyothi-purple-900 bg-jyothi-purple-50 px-3.5 py-1 rounded-full border border-jyothi-purple-200 inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            3-Day Festival Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif] text-[#250836]">
            Inside the Tharang Schedule
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FESTIVAL_DAYS.map((d, idx) => (
            <RevealBlock
              key={d.day}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm hover:shadow-lg transition-all space-y-4">
                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <span className="px-3 py-1 rounded-full bg-[#250836] text-[#FDE68A] text-xs font-extrabold">
                    {d.day}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#A87627]" />
                </div>
                <h3 className="font-bold text-lg font-brand text-[#250836]">{d.theme}</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {d.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A87627] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>
    </StudentLifeLayout>
  );
};
