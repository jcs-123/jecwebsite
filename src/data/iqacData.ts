export interface AccreditationPillar {
  id: string;
  shortName: string;
  fullName: string;
  tagline: string;
  badge: string;
  validity: string;
  description: string;
  stats: { label: string; value: string }[];
  criteria: { title: string; score: string; description: string }[];
  downloadUrl?: string;
}

export interface IQACReportItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  academicYear: string;
  fileSize: string;
  datePublished: string;
  description: string;
  highlights: string[];
}

export interface IQACMember {
  name: string;
  role: string;
  designation: string;
  department: string;
}

export const IQAC_PILLARS: AccreditationPillar[] = [
  {
    id: "naac",
    shortName: "NAAC",
    fullName: "National Assessment and Accreditation Council",
    tagline: "Quality assessment and continuous enhancement of institutional processes.",
    badge: "Accredited with Grade 'A' (3.25 CGPA)",
    validity: "Autonomous Cycle Valid through 2028",
    description: "The National Assessment and Accreditation Council (NAAC), an autonomous body of the University Grants Commission (UGC), has accredited Jyothi Engineering College with an illustrious 'A' Grade (3.25 CGPA on a 4-point scale). The accreditation affirms excellence in learner-centric pedagogy, innovation infrastructure, faculty research, and stakeholder governance.",
    stats: [
      { label: "Institutional CGPA", value: "3.25 / 4.0" },
      { label: "NAAC Grade", value: "Grade 'A'" },
      { label: "Criteria Assessed", value: "7 Core Dimensions" },
      { label: "Validity Period", value: "5 Years (2023–2028)" }
    ],
    criteria: [
      { title: "Criterion 1: Curricular Aspects", score: "3.42 / 4.0", description: "Autonomous curriculum with industry-aligned electives, honors & minors tracks, and CBCS credit flexibility." },
      { title: "Criterion 2: Teaching-Learning & Evaluation", score: "3.38 / 4.0", description: "Outcome-based education (OBE), Bloom's taxonomy assessments, smart audio-visual amphitheaters, and faculty mentoring." },
      { title: "Criterion 3: Research, Innovations & Extension", score: "3.15 / 4.0", description: "Tata-Jyothi IIIC, FabLab Kerala prototyping node, 45+ Ph.D. scholars, 180+ Scopus papers, and active community outreach." },
      { title: "Criterion 4: Infrastructure & Learning Resources", score: "3.55 / 4.0", description: "30-acre eco-sanctuary, automated central library with IEEE Xplore, 1 Gbps NKN fiber, and high-performance computing clusters." },
      { title: "Criterion 5: Student Support & Progression", score: "3.28 / 4.0", description: "Over ₹1.2 Crores in annual management merit scholarships, comprehensive campus placement training, and student clubs." },
      { title: "Criterion 6: Governance, Leadership & Management", score: "3.30 / 4.0", description: "Decentralized autonomous governance, strategic institutional planning, financial transparency, and faculty welfare policies." },
      { title: "Criterion 7: Institutional Values & Best Practices", score: "3.45 / 4.0", description: "Green campus initiative, 500 kWp rooftop solar micro-grid, zero-waste bio-digestive units, and universal ethical education." }
    ]
  },
  {
    id: "nba",
    shortName: "NBA",
    fullName: "National Board of Accreditation",
    tagline: "Promotion of outcome-based education and programme quality.",
    badge: "Washington Accord Tier-II Accredited",
    validity: "Accredited B.Tech Programmes",
    description: "The National Board of Accreditation (NBA) evaluates and certifies professional technical degree programs under the prestigious Washington Accord framework. Graduating from an NBA-accredited branch ensures universal international recognition of student engineering degrees across member countries including the USA, UK, Canada, Australia, Japan, and Singapore.",
    stats: [
      { label: "Accredited Branches", value: "5 Major Core Branches" },
      { label: "Accord Alignment", value: "Washington Accord Tier-II" },
      { label: "Placement Acceptance", value: "100% Fortune 500 Eligible" },
      { label: "Faculty Cadre Ratio", value: "1:15 Cadre Compliant" }
    ],
    criteria: [
      { title: "B.Tech Computer Science & Engineering", score: "Accredited till 2026", description: "Specialized labs in AI/ML, cloud computing, and cyber security with 94%+ placement record." },
      { title: "B.Tech Electronics & Communication Engineering", score: "Accredited till 2026", description: "Advanced VLSI design, embedded systems suites, and industrial robotics integration." },
      { title: "B.Tech Electrical & Electronics Engineering", score: "Accredited till 2025", description: "High-voltage testing labs, electric vehicle (EV) powertrains, and solar micro-grid monitoring." },
      { title: "B.Tech Mechanical Engineering", score: "Accredited till 2025", description: "Industry 4.0 CNC machining, CAD/CAM/CAE clusters, and additive manufacturing testing suites." },
      { title: "B.Tech Civil Engineering", score: "Accredited till 2025", description: "Structural dynamics testing, environmental engineering labs, and total station GIS surveying." }
    ]
  },
  {
    id: "nirf",
    shortName: "NIRF",
    fullName: "National Institutional Ranking Framework",
    tagline: "Institutional performance assessment and holistic improvement.",
    badge: "Ministry of Education (MoE), Govt of India",
    validity: "Annual National Assessment",
    description: "The National Institutional Ranking Framework (NIRF), approved by the Ministry of Education (MoE), ranks top higher educational institutions in India across five rigorous parameters: Teaching, Learning & Resources (TLR), Research and Professional Practice (RPC), Graduation Outcomes (GO), Outreach and Inclusivity (OI), and Perception (PR).",
    stats: [
      { label: "MoE Assessment", value: "Top Tier in Kerala" },
      { label: "Graduation Outcome", value: "88.4% Employment & MS" },
      { label: "Research Revenue", value: "₹4.5+ Crores Sponsored" },
      { label: "Gender Diversity", value: "40%+ Female STEM Scholars" }
    ],
    criteria: [
      { title: "Teaching, Learning & Resources (TLR)", score: "68.4 / 100", description: "Student-faculty ratio, permanent Ph.D. faculty proportion, library access, and laboratory capital expenditure." },
      { title: "Research & Professional Practice (RPC)", score: "54.8 / 100", description: "Publications in Scopus/WoS, citation index, registered and granted patents, and external sponsored research grants." },
      { title: "Graduation Outcomes (GO)", score: "78.2 / 100", description: "Campus placement median salary packages, pass percentages in university examinations, and scholars enrolled in Ivy League/NIT/IIT." },
      { title: "Outreach & Inclusivity (OI)", score: "72.6 / 100", description: "Regional diversity, percentage of female students and faculty, economically disadvantaged scholar scholarships, and differently-abled friendly campus." },
      { title: "Peer Perception (PR)", score: "62.5 / 100", description: "Reputation amongst academic peer educators, industrial recruiters, and employer hiring satisfaction surveys." }
    ]
  }
];

export const IQAC_REPORTS: IQACReportItem[] = [
  {
    id: "academic-calendar",
    title: "Academic Calendar",
    subtitle: "Autonomous Academic Schedule (2024–2025)",
    category: "Academic Planning",
    academicYear: "2024–2025",
    fileSize: "2.4 MB (Official PDF)",
    datePublished: "June 2024",
    description: "The official autonomous academic calendar delineating odd and even semester commencement dates, Continuous Internal Evaluation (CIE) series exam windows, end-semester examination schedules, Board of Studies (BOS) conclaves, Academic Council milestones, sports meets, and cultural festivals.",
    highlights: [
      "180 instructional working days per academic year as per UGC norms",
      "Dedicated slots for mid-term industrial internships and research symposia",
      "Pre-announced schedule for publication of semester results and revaluation",
      "Notification of PTA conclaves and technical festival Tharang"
    ]
  },
  {
    id: "meeting-minutes",
    title: "Meeting Minutes & ATR",
    subtitle: "Action Taken Reports & Statutory Proceedings",
    category: "Governance & ATR",
    academicYear: "2023–2024",
    fileSize: "4.8 MB (Verified PDF)",
    datePublished: "Quarterly Proceedings",
    description: "Detailed documentation of quarterly IQAC statutory meetings with internal and external stakeholders, tracking the Action Taken Report (ATR) for continuous curriculum enrichment, lab upgradation, outcome-based education audits, and pedagogical training.",
    highlights: [
      "Sanction of ₹25 Lakhs for AI & Robotics prototyping workstation expansion",
      "Implementation of digital continuous evaluation portal on Linways ERP",
      "Faculty publication financial incentive policy approval (up to ₹25,000 per paper)",
      "Establishment of student mental health and peer mentorship helpline"
    ]
  },
  {
    id: "annual-reports",
    title: "Annual Reports",
    subtitle: "Comprehensive Institutional Audit & AQAR Summary",
    category: "Annual Audit",
    academicYear: "2023–2024",
    fileSize: "8.2 MB (Full Report)",
    datePublished: "November 2024",
    description: "The Annual Quality Assurance Report (AQAR) and institutional review presenting a complete audit of student academic triumphs, campus placements, research grants, sporting achievements, social extension activities, and annual expenditure budgets.",
    highlights: [
      "850+ placement offers with highest domestic package of ₹18 LPA",
      "Publication of 115+ Scopus/WoS journal papers and 18 filed patents",
      "Over ₹1.2 Crores awarded in merit and community financial scholarships",
      "Clean financial audit endorsement by certified chartered accountants"
    ]
  },
  {
    id: "student-satisfaction-survey",
    title: "Student Satisfaction Survey",
    subtitle: "Teaching-Learning Quality & Campus Life Feedback",
    category: "Student Voice",
    academicYear: "2023–2024",
    fileSize: "3.1 MB (Analytics PDF)",
    datePublished: "August 2024",
    description: "National NAAC format Student Satisfaction Survey (SSS) conducted across 2,800+ scholars evaluating curriculum relevance, mentoring effectiveness, laboratory practical exposure, library digital accessibility, and grievance redressal efficiency.",
    highlights: [
      "92.4% overall student satisfaction score across all engineering streams",
      "94.8% rating for faculty subject preparation and laboratory guidance",
      "High commendation for campus placement cell and internship facilitation",
      "Concrete feedback incorporated for canteen menu and hostel Wi-Fi upgrades"
    ]
  }
];

export const IQAC_COMMITTEE: IQACMember[] = [
  { name: "Dr. K. K. Babu", role: "Chairperson", designation: "Principal & Head of Institution", department: "College Administration" },
  { name: "Dr. Biju P. L.", role: "Director / Coordinator", designation: "Professor & Dean (Quality Assurance)", department: "Mechanical Engineering" },
  { name: "Fr. Thomas Kakkassery", role: "Management Representative", designation: "Executive Manager", department: "Jyothi Management Trust" },
  { name: "Dr. Jose P. Therattil", role: "Member (Faculty)", designation: "Professor & Head", department: "Electronics & Communication" },
  { name: "Prof. Manoj Kumar M. V.", role: "Member (Faculty)", designation: "Professor & Head", department: "Computer Science & Engineering" },
  { name: "Dr. Jarin T.", role: "Member (Faculty)", designation: "Professor & Head", department: "Electrical & Electronics" },
  { name: "Er. George Mathew", role: "Industry Expert", designation: "Managing Director, Geotech Infra", department: "External Nominee" },
  { name: "Dr. S. Radhakrishnan", role: "Academic Expert", designation: "Former Director of Technical Education", department: "External Nominee" },
  { name: "Er. Binu Thomas ('08)", role: "Alumni Nominee", designation: "General Manager, Gulf Tech", department: "Alumni Representative" },
  { name: "Ms. Ananya Menon", role: "Student Nominee", designation: "Chairperson, Student Council", department: "B.Tech CSE Final Year" }
];
