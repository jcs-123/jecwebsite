import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Building2,
  Briefcase,
  Search,
  CheckCircle2,
  Users,
  ArrowRight,
  Globe2,
  Phone,
  Mail,
  Building,
  MonitorCheck,
  Coffee,
  Sparkles,
  Quote,
  Laptop,
  Cpu,
  Landmark,
  Settings,
  Coins,
  Award,
  TrendingUp,
  Layers,
  ExternalLink,
  Star,
  X,
  FileText,
  Calendar,
  Check,
  MapPin,
  ChevronRight,
  Filter,
  SlidersHorizontal,
} from 'lucide-react';
import { PlacementsSubNav } from '../components/PlacementsSubNav';
import { RevealBlock } from '../components/RevealBlock';

interface Props {
  onNavigate: (page: string, subId?: string) => void;
  onOpenApply: () => void;
}

interface Recruiter {
  name: string;
  category: 'Tier 1 IT & Cloud' | 'Product & Software' | 'Core Engineering & Auto' | 'Banking & FinTech';
  tier: 'Super Dream' | 'Dream Offer' | 'Flagship Day-1';
  badge: string;
  rolesHired: string;
  location: string;
  hiringType: 'On-Campus Flagship' | 'Pool Campus Drive' | 'Super Dream Track';
  partnershipYears: string;
  ctc: string;
  eligibility: string;
  rounds: string[];
  description: string;
}

const BRAND_BADGES: Record<string, { code: string; bg: string; text: string; ring?: string }> = {
  'Tata Consultancy Services (TCS)': { code: 'TCS', bg: 'bg-gradient-to-br from-[#0055A2] to-[#003A70]', text: 'text-white' },
  'Infosys Technologies': { code: 'INFY', bg: 'bg-gradient-to-br from-[#007CC3] to-[#005A8D]', text: 'text-white' },
  'Cognizant (CTS)': { code: 'CTS', bg: 'bg-gradient-to-br from-[#0033A0] to-[#001F60]', text: 'text-white' },
  'Wipro Technologies': { code: 'WIP', bg: 'bg-gradient-to-br from-[#3B0764] to-[#581C87]', text: 'text-[#FDE68A]' },
  'Capgemini India': { code: 'CAP', bg: 'bg-gradient-to-br from-[#0070AD] to-[#123048]', text: 'text-white' },
  'IBM India': { code: 'IBM', bg: 'bg-gradient-to-br from-[#054ADA] to-[#002D9C]', text: 'text-white' },
  'UST Global': { code: 'UST', bg: 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]', text: 'text-[#2DD4BF]' },
  'Mindtree / LTIMindtree': { code: 'LTI', bg: 'bg-gradient-to-br from-[#D9381E] to-[#8C1D0E]', text: 'text-white' },
  'Amazon AWS': { code: 'AWS', bg: 'bg-gradient-to-br from-[#232F3E] to-[#111827]', text: 'text-[#FF9900]', ring: 'ring-1 ring-[#FF9900]/40' },
  'SOTI Inc.': { code: 'SOTI', bg: 'bg-gradient-to-br from-[#1D4ED8] to-[#1E3A8A]', text: 'text-white' },
  'IBS Software': { code: 'IBS', bg: 'bg-gradient-to-br from-[#C8102E] to-[#780016]', text: 'text-white' },
  'Experion Technologies': { code: 'EXP', bg: 'bg-gradient-to-br from-[#6C5CE7] to-[#4834D4]', text: 'text-white' },
  'Zoho Corporation': { code: 'ZOHO', bg: 'bg-gradient-to-br from-[#DF2029] to-[#990008]', text: 'text-white' },
  'Bosch Global Software (BGSW)': { code: 'BOSCH', bg: 'bg-gradient-to-br from-[#E20015] to-[#991B1B]', text: 'text-white' },
  'Tata Motors': { code: 'TATA', bg: 'bg-gradient-to-br from-[#003A70] to-[#001D38]', text: 'text-white' },
  'L&T Technology Services (LTTS)': { code: 'LTTS', bg: 'bg-gradient-to-br from-[#1E293B] to-[#0F172A]', text: 'text-[#FBBF24]', ring: 'ring-1 ring-[#FBBF24]/40' },
  'Quest Global': { code: 'QG', bg: 'bg-gradient-to-br from-[#1E3A8A] to-[#0F172A]', text: 'text-white' },
  'V-Guard Industries Ltd.': { code: 'VG', bg: 'bg-gradient-to-br from-[#E67E22] to-[#B95C00]', text: 'text-white' },
  'MRF Tyres Ltd.': { code: 'MRF', bg: 'bg-gradient-to-br from-[#C0392B] to-[#7B1F16]', text: 'text-white' },
  'Schneider Electric': { code: 'SE', bg: 'bg-gradient-to-br from-[#009530] to-[#005A1D]', text: 'text-white' },
  'Federal Bank Ltd.': { code: 'FB', bg: 'bg-gradient-to-br from-[#004B8D] to-[#00315C]', text: 'text-[#FDE047]', ring: 'ring-1 ring-[#FACC15]/50' },
  'South Indian Bank': { code: 'SIB', bg: 'bg-gradient-to-br from-[#800020] to-[#4A0013]', text: 'text-white' },
  'HDFC Bank Ltd.': { code: 'HDFC', bg: 'bg-gradient-to-br from-[#004C8F] to-[#00274B]', text: 'text-white' },
  'Muthoot FinTech': { code: 'MFIN', bg: 'bg-gradient-to-br from-[#D32F2F] to-[#801010]', text: 'text-white' },
};

const RECRUITERS_DATA: Recruiter[] = [
  {
    name: 'Amazon AWS',
    category: 'Product & Software',
    tier: 'Super Dream',
    badge: 'Super Dream • ₹24.0 LPA',
    rolesHired: 'Cloud Support Associate & DevOps Engineer',
    location: 'Hyderabad / Bangalore',
    hiringType: 'Super Dream Track',
    partnershipYears: '6+ Years',
    ctc: '₹24.0 LPA',
    eligibility: 'B.Tech CSE, AI&DS, ECE • 7.5+ CGPA',
    rounds: ['Online Coding & Cloud Diagnostic', 'Technical System Architecture', 'Bar Raiser Leadership Round', 'Executive HR'],
    description: 'Amazon Web Services visits Jyothi annually through a specialized Super Dream recruitment track evaluating distributed cloud infrastructure, Linux internals, and algorithmic mastery.',
  },
  {
    name: 'Bosch Global Software (BGSW)',
    category: 'Core Engineering & Auto',
    tier: 'Super Dream',
    badge: 'Core Super Dream • ₹14.2 LPA',
    rolesHired: 'Embedded Systems & Mobility ECU Engineer',
    location: 'Bangalore / Coimbatore',
    hiringType: 'Super Dream Track',
    partnershipYears: '12+ Years',
    ctc: '₹14.2 LPA',
    eligibility: 'B.Tech ECE, EEE, MR, ME • 7.0+ CGPA',
    rounds: ['Hardware Aptitude & Embedded C', 'Microcontroller Telemetry & RTOS Loop', 'Managerial Technical Panel', 'Behavioral HR'],
    description: 'Bosch leverages Jyothi’s Texas Instruments and TATA IIIC embedded laboratories for hands-on automotive software hiring across ADAS and electric powertrain domains.',
  },
  {
    name: 'Federal Bank Ltd.',
    category: 'Banking & FinTech',
    tier: 'Super Dream',
    badge: 'Flagship Banking • ₹12.5 LPA',
    rolesHired: 'Probationary IT Officer & Associate Manager',
    location: 'Aluva / Pan-India',
    hiringType: 'Super Dream Track',
    partnershipYears: '17+ Years',
    ctc: '₹12.5 LPA',
    eligibility: 'All B.Tech Streams • 6.5+ CGPA',
    rounds: ['Online Cognitive & Quantitative Aptitude', 'Group Discussion & Leadership Case', 'Technical Systems Interview', 'Executive Final Panel'],
    description: 'Federal Bank recruits top graduating engineers across branches into its digital banking engineering cohorts for core fintech backend, cyber security, and analytics operations.',
  },
  {
    name: 'SOTI Inc.',
    category: 'Product & Software',
    tier: 'Super Dream',
    badge: 'Product Leader • ₹11.0 LPA',
    rolesHired: 'Enterprise Mobility Developer (C# / Android / ML)',
    location: 'Kochi / Toronto',
    hiringType: 'Super Dream Track',
    partnershipYears: '8+ Years',
    ctc: '₹11.0 LPA',
    eligibility: 'B.Tech CSE, AI&DS, ECE • 7.0+ CGPA',
    rounds: ['Online Algorithmic Coding Challenge', 'Live Whiteboard Programming', 'Enterprise Systems Architecture', 'HR Discussion'],
    description: 'Canadian enterprise mobility titan SOTI hires core product developers from Jyothi for cross-platform device telemetry and next-generation IoT enterprise architectures.',
  },
  {
    name: 'Tata Consultancy Services (TCS)',
    category: 'Tier 1 IT & Cloud',
    tier: 'Dream Offer',
    badge: 'Tier 1 Prime • ₹11.5 LPA',
    rolesHired: 'TCS Digital / Ninja / Innovator',
    location: 'Pan-India & Global',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '18+ Years',
    ctc: '₹3.6 – ₹11.5 LPA',
    eligibility: 'All Engineering Streams • 6.0+ CGPA',
    rounds: ['TCS NQT National Employability Test', 'Coding & Advanced Algorithmic Round', 'Technical Panel Interview', 'HR Behavioral Round'],
    description: 'India’s largest multinational tech consultancy has visited Jyothi for 18 continuous batches, regularly issuing over 80+ offers per season across Digital and Ninja tracks.',
  },
  {
    name: 'Quest Global',
    category: 'Core Engineering & Auto',
    tier: 'Super Dream',
    badge: 'Aerospace & CAD • ₹12.0 LPA',
    rolesHired: 'Aerospace & Mechanical Design Trainee',
    location: 'Trivandrum / Bangalore',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '12+ Years',
    ctc: '₹6.5 – ₹12.0 LPA',
    eligibility: 'B.Tech ME, MR, EEE, ECE • 6.8+ CGPA',
    rounds: ['Mechanical/Aero Domain Assessment', 'CAD/CAM & FEA Design Challenge', 'Technical Panel', 'Executive HR'],
    description: 'Global aerospace and engineering services firm hiring mechanical, robotics, and electrical engineers for aero-structure design and powertrain simulations.',
  },
  {
    name: 'Infosys Technologies',
    category: 'Tier 1 IT & Cloud',
    tier: 'Dream Offer',
    badge: 'Tier 1 Recruiter • ₹9.5 LPA',
    rolesHired: 'Power Programmer, DSE & SE',
    location: 'Bangalore / Trivandrum',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '16+ Years',
    ctc: '₹3.6 – ₹9.5 LPA',
    eligibility: 'All Engineering Streams • 6.0+ CGPA',
    rounds: ['HackWithInfy / InfyTQ Qualifier', 'Advanced Data Structures & DP', 'Technical Architecture Round', 'Behavioral HR'],
    description: 'Longstanding partner hiring through flagship on-campus drives and InfyTQ national challenges, providing specialized enterprise training at Infosys Mysore campus.',
  },
  {
    name: 'Cognizant (CTS)',
    category: 'Tier 1 IT & Cloud',
    tier: 'Dream Offer',
    badge: 'Tier 1 Recruiter • ₹8.5 LPA',
    rolesHired: 'GenC Elevate & GenC Next',
    location: 'Kochi / Chennai',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '14+ Years',
    ctc: '₹4.0 – ₹8.5 LPA',
    eligibility: 'All Engineering Streams • 6.0+ CGPA',
    rounds: ['Online Cognitive & Analytical Matrix', 'Domain Coding Test', 'Technical Systems Interview', 'HR Verification'],
    description: 'Strategic tier-1 recruiter onboarding students into digital experience, cloud migration, and intelligent enterprise automation divisions.',
  },
  {
    name: 'L&T Technology Services (LTTS)',
    category: 'Core Engineering & Auto',
    tier: 'Dream Offer',
    badge: 'Heavy & Industrial • ₹10.0 LPA',
    rolesHired: 'Design Engineer & Automation Trainee',
    location: 'Vadodara / Chennai',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '13+ Years',
    ctc: '₹5.5 – ₹10.0 LPA',
    eligibility: 'B.Tech ME, EEE, ECE, MR, CE • 6.5+ CGPA',
    rounds: ['Core Engineering Technical Assessment', 'Domain CAD & PLC Simulation Round', 'Technical Director Panel', 'HR Interview'],
    description: 'L&T Technology Services recruits across all core branches for smart mobility, industrial automation, and plant engineering consulting projects.',
  },
  {
    name: 'Wipro Technologies',
    category: 'Tier 1 IT & Cloud',
    tier: 'Flagship Day-1',
    badge: 'Tier 1 Recruiter • ₹6.5 LPA',
    rolesHired: 'Turbo & Elite Developers',
    location: 'Bangalore / Kochi',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '15+ Years',
    ctc: '₹3.5 – ₹6.5 LPA',
    eligibility: 'All Engineering Streams • 6.0+ CGPA',
    rounds: ['National Qualifier Assessment', 'Technical Coding Round', 'HR Behavioral Round'],
    description: 'Wipro Elite and Turbo hiring initiatives recruit graduating engineers across enterprise application development and cyber security practices.',
  },
  {
    name: 'IBS Software',
    category: 'Product & Software',
    tier: 'Dream Offer',
    badge: 'Aviation Tech • ₹8.5 LPA',
    rolesHired: 'Travel & Aviation Domain Software Engineer',
    location: 'Kochi / Trivandrum',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '14+ Years',
    ctc: '₹5.0 – ₹8.5 LPA',
    eligibility: 'B.Tech CSE, AI&DS, ECE • 6.5+ CGPA',
    rounds: ['Online Programming Assessment', 'Technical Architecture Round', 'Director Interview', 'HR Round'],
    description: 'World-leading SaaS provider for commercial airlines, cruise lines, and hospitality conglomerates, recruiting top full-stack engineers from Kerala.',
  },
  {
    name: 'Experion Technologies',
    category: 'Product & Software',
    tier: 'Dream Offer',
    badge: 'Product Specialist • ₹8.0 LPA',
    rolesHired: 'Product Engineering Associate',
    location: 'Trivandrum / Kochi',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '11+ Years',
    ctc: '₹4.8 – ₹8.0 LPA',
    eligibility: 'B.Tech CSE, AI&DS, ECE • 6.5+ CGPA',
    rounds: ['Online Problem Solving Matrix', 'Full Stack Coding Challenge', 'Client Interaction Readiness Panel', 'HR Round'],
    description: 'Global product engineering firm building digital products for healthcare, logistics, and retail enterprises across North America and Europe.',
  },
  {
    name: 'Zoho Corporation',
    category: 'Product & Software',
    tier: 'Dream Offer',
    badge: 'Product Titan • ₹8.5 LPA',
    rolesHired: 'Software Development Engineer',
    location: 'Chennai / Tenkasi',
    hiringType: 'Super Dream Track',
    partnershipYears: '7+ Years',
    ctc: '₹6.0 – ₹8.5 LPA',
    eligibility: 'All Streams (Pure Coding Aptitude) • No CGPA Filter',
    rounds: ['Complex Logic & Pattern Assessment', 'Advanced Algorithm Implementation', 'Technical Project Defense', 'HR Culture Fit'],
    description: 'Famous for its zero-CGPA, pure-skill recruitment philosophy, Zoho identifies pure algorithmic problem solvers and passionate hackers.',
  },
  {
    name: 'Tata Motors',
    category: 'Core Engineering & Auto',
    tier: 'Dream Offer',
    badge: 'Core Mechanical • ₹7.5 LPA',
    rolesHired: 'Graduate Engineer Trainee (GET)',
    location: 'Pune / Chennai',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '10+ Years',
    ctc: '₹6.0 – ₹7.5 LPA',
    eligibility: 'B.Tech ME, MR, EEE • 6.5+ CGPA',
    rounds: ['Mechanical Engineering Technical Test', 'Group Discussion on Mobility Trends', 'Technical Interview', 'HR Round'],
    description: 'India’s pioneering automaker visits for mechanical, mechatronics, and electrical engineers for commercial EV and passenger vehicle manufacturing plants.',
  },
  {
    name: 'V-Guard Industries Ltd.',
    category: 'Core Engineering & Auto',
    tier: 'Dream Offer',
    badge: 'Electrical R&D • ₹7.2 LPA',
    rolesHired: 'R&D Embedded Systems & Power GET',
    location: 'Kochi / Coimbatore',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '14+ Years',
    ctc: '₹5.5 – ₹7.2 LPA',
    eligibility: 'B.Tech EEE, ECE, ME • 6.5+ CGPA',
    rounds: ['Power Electronics Technical Screening', 'Circuit Design & Simulation Review', 'Technical Interview', 'HR Panel'],
    description: 'Consumer electronics and power technology leader hiring core electrical and electronics engineers for smart home power systems R&D.',
  },
  {
    name: 'MRF Tyres Ltd.',
    category: 'Core Engineering & Auto',
    tier: 'Dream Offer',
    badge: 'Manufacturing Titan • ₹7.5 LPA',
    rolesHired: 'Production & Quality Engineer (GET)',
    location: 'Chennai / Kottayam',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '15+ Years',
    ctc: '₹5.5 – ₹7.5 LPA',
    eligibility: 'B.Tech ME, EEE, CE • 6.0+ CGPA',
    rounds: ['Engineering Technical Paper', 'Physical GD / Case Discussion', 'Technical Plant Panel', 'HR Interview'],
    description: 'India’s tyre and rubber manufacturing giant recruiting core mechanical and electrical engineers for high-precision automated manufacturing hubs.',
  },
  {
    name: 'Schneider Electric',
    category: 'Core Engineering & Auto',
    tier: 'Super Dream',
    badge: 'Energy & Smart Grid • ₹9.0 LPA',
    rolesHired: 'Smart Grid & Power Switchgear GET',
    location: 'Bangalore / Chennai',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '8+ Years',
    ctc: '₹7.0 – ₹9.0 LPA',
    eligibility: 'B.Tech EEE, ECE, ME • 7.0+ CGPA',
    rounds: ['Digital Energy Systems Assessment', 'Microgrid & IoT Problem Round', 'Technical Panel', 'HR Discussion'],
    description: 'European energy management and industrial automation leader hiring engineers dedicated to smart grid digitization and sustainable power systems.',
  },
  {
    name: 'South Indian Bank',
    category: 'Banking & FinTech',
    tier: 'Dream Offer',
    badge: 'FinTech & Banking • ₹7.5 LPA',
    rolesHired: 'Probationary IT Officer',
    location: 'Thrissur / Pan-India',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '16+ Years',
    ctc: '₹5.5 – ₹7.5 LPA',
    eligibility: 'All Engineering Streams • 6.0+ CGPA',
    rounds: ['Aptitude & Banking Logic Test', 'Group Discussion', 'Technical Systems Round', 'Executive Interview'],
    description: 'Historic banking giant headquartered in Thrissur, recruiting engineers for core banking migration, IT security, and mobile banking applications.',
  },
  {
    name: 'HDFC Bank Ltd.',
    category: 'Banking & FinTech',
    tier: 'Dream Offer',
    badge: 'FinTech Banking • ₹8.2 LPA',
    rolesHired: 'Data Analyst & Systems Officer',
    location: 'Mumbai / Kochi',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '7+ Years',
    ctc: '₹6.5 – ₹8.2 LPA',
    eligibility: 'B.Tech CSE, AI&DS, ECE, EEE • 6.5+ CGPA',
    rounds: ['Data Analytics & Math Reasoning', 'SQL & Python Problem Solving', 'Technical Manager Interview', 'HR Verification'],
    description: 'India’s largest private sector bank recruiting data analysts and infrastructure engineers for digital payments and fraud analytics engines.',
  },
  {
    name: 'Muthoot FinTech',
    category: 'Banking & FinTech',
    tier: 'Dream Offer',
    badge: 'Digital Lending • ₹8.0 LPA',
    rolesHired: 'FinTech Backend Architect',
    location: 'Kochi / Bangalore',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '9+ Years',
    ctc: '₹5.5 – ₹8.0 LPA',
    eligibility: 'B.Tech CSE, AI&DS, ECE • 6.5+ CGPA',
    rounds: ['Backend Programming Challenge', 'Database & API Design Round', 'Technical Director Panel', 'HR Round'],
    description: 'Fintech arm of Muthoot Group building microservices, AI credit appraisal platforms, and high-volume transaction switches.',
  },
  {
    name: 'Capgemini India',
    category: 'Tier 1 IT & Cloud',
    tier: 'Flagship Day-1',
    badge: 'Tier 1 MNC • ₹7.5 LPA',
    rolesHired: 'Senior Analyst & Cloud Engineer',
    location: 'Bangalore / Mumbai',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '10+ Years',
    ctc: '₹4.0 – ₹7.5 LPA',
    eligibility: 'All Engineering Streams • 6.0+ CGPA',
    rounds: ['Game-Based Aptitude & Pseudo Code', 'Spoken English & Communication Diagnostic', 'Technical Interview', 'HR Discussion'],
    description: 'French multinational information technology and consulting company providing digital transformation and cloud consulting roles.',
  },
  {
    name: 'IBM India',
    category: 'Tier 1 IT & Cloud',
    tier: 'Dream Offer',
    badge: 'Cloud & AI Titan • ₹8.5 LPA',
    rolesHired: 'Cloud Solutions Associate & AI Engineer',
    location: 'Bangalore / Kochi',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '12+ Years',
    ctc: '₹5.5 – ₹8.5 LPA',
    eligibility: 'B.Tech CSE, AI&DS, ECE • 6.8+ CGPA',
    rounds: ['Cognitive Ability & Coding Assessment', 'English Language Benchmark', 'Technical Architecture Round', 'Behavioral HR'],
    description: 'IBM recruits for hybrid cloud (Red Hat OpenShift), enterprise AI integrations, and quantum computing foundational tracks.',
  },
  {
    name: 'UST Global',
    category: 'Tier 1 IT & Cloud',
    tier: 'Dream Offer',
    badge: 'Strategic Partner • ₹8.0 LPA',
    rolesHired: 'Full Stack & DevOps Specialist',
    location: 'Trivandrum / Kochi',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '15+ Years',
    ctc: '₹4.5 – ₹8.0 LPA',
    eligibility: 'All Engineering Streams • 6.2+ CGPA',
    rounds: ['Online Analytical & Coding Assessment', 'Live Problem Solving Session', 'Technical Panel', 'HR Interview'],
    description: 'Digital transformation company with extensive operations in Kerala Technopark and Infopark, offering global enterprise project exposure.',
  },
  {
    name: 'Mindtree / LTIMindtree',
    category: 'Tier 1 IT & Cloud',
    tier: 'Dream Offer',
    badge: 'Enterprise IT • ₹7.5 LPA',
    rolesHired: 'Digital Software Engineer',
    location: 'Bangalore / Chennai',
    hiringType: 'On-Campus Flagship',
    partnershipYears: '9+ Years',
    ctc: '₹4.5 – ₹7.5 LPA',
    eligibility: 'All Engineering Streams • 6.0+ CGPA',
    rounds: ['Online Assessment (Quantitative & Coding)', 'Technical Panel Round', 'HR Interview'],
    description: 'L&T Group IT services powerhouses hiring engineers for digital engineering, cloud native transformation, and enterprise CRM solutions.',
  },
];

const MARQUEE_LEADERS = [
  { name: 'Amazon AWS', ctc: '₹24.0 LPA', role: 'Cloud Support & DevOps', tag: 'Super Dream', code: 'AWS', bg: 'bg-[#232F3E]', text: 'text-[#FF9900]' },
  { name: 'Bosch Global Software', ctc: '₹14.2 LPA', role: 'Embedded Systems & Mobility', tag: 'Core Super Dream', code: 'BOSCH', bg: 'bg-[#991B1B]', text: 'text-white' },
  { name: 'Federal Bank Ltd.', ctc: '₹12.5 LPA', role: 'Probationary IT Officer', tag: 'Prime Banking', code: 'FB', bg: 'bg-[#00315C]', text: 'text-[#FDE047]' },
  { name: 'SOTI Inc.', ctc: '₹11.0 LPA', role: 'Enterprise Mobility & ML', tag: 'Product Titan', code: 'SOTI', bg: 'bg-[#1E3A8A]', text: 'text-white' },
  { name: 'TCS Digital / Prime', ctc: '₹11.5 LPA', role: 'Enterprise Systems Architect', tag: 'Tier 1 Digital', code: 'TCS', bg: 'bg-[#003A70]', text: 'text-white' },
  { name: 'Quest Global', ctc: '₹12.0 LPA', role: 'Aerospace & Mechanical CAD', tag: 'Core MNC', code: 'QG', bg: 'bg-[#0F172A]', text: 'text-white' },
];

const TESTIMONIALS = [
  {
    company: 'Tata Consultancy Services',
    person: 'Subhashish Das',
    role: 'Head of Regional Campus Talent Acquisition',
    text: 'Jyothi Engineering College has consistently proven to be a prime hunting ground for agile software talent. Their autonomous curriculum has ensured students arrive with strong algorithmic grounding and commendable workplace values.',
    experience: '18-Year Recruiter Partnership',
  },
  {
    company: 'Bosch Global Software',
    person: 'Naveen Chandran',
    role: 'Lead Technical Recruiter (Mobility & Embedded)',
    text: 'We are very impressed by the hardware and embedded systems readiness of Jyothi’s ECE and Mechatronics students. Their exposure to modern simulation tools and hands-on FabLab prototyping makes on-boarding frictionless.',
    experience: 'Super Dream Tier Recruiter',
  },
  {
    company: 'Federal Bank Ltd.',
    person: 'Rhea Kurian',
    role: 'Talent Acquisition Partner (Digital)',
    text: 'Students from Jyothi showcase a remarkable combination of technical acumen, problem-solving confidence, and professional ethics. They integrate into our digital banking engineering cohorts seamlessly.',
    experience: 'Flagship Banking Partner',
  },
];

const SECTORS_DISTRIBUTION = [
  { name: 'IT Services & Cloud', pct: 42, offers: 194, color: 'bg-[#0055A2]', category: 'Tier 1 IT & Cloud' },
  { name: 'Product Engineering & SaaS', pct: 26, offers: 120, color: 'bg-[#C59B4E]', category: 'Product & Software' },
  { name: 'Core Auto & Embedded', pct: 18, offers: 83, color: 'bg-[#0D7A68]', category: 'Core Engineering & Auto' },
  { name: 'Banking & FinTech', pct: 14, offers: 65, color: 'bg-[#581C87]', category: 'Banking & FinTech' },
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'All': Building2,
  'Tier 1 IT & Cloud': Laptop,
  'Product & Software': Sparkles,
  'Core Engineering & Auto': Cpu,
  'Banking & FinTech': Landmark,
};

export const CorporateRecruitersPage: React.FC<Props> = ({ onNavigate, onOpenApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<Recruiter | null>(null);

  const categories = ['All', 'Tier 1 IT & Cloud', 'Product & Software', 'Core Engineering & Auto', 'Banking & FinTech'];
  const tiers = ['All', 'Super Dream', 'Dream Offer', 'Flagship Day-1'];

  const filteredRecruiters = useMemo(() => {
    return RECRUITERS_DATA.filter((r) => {
      const matchCat = selectedCategory === 'All' || r.category === selectedCategory;
      const matchTier = selectedTier === 'All' || r.tier === selectedTier;
      const matchQuery =
        !searchQuery ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.rolesHired.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchTier && matchQuery;
    });
  }, [selectedCategory, selectedTier, searchQuery]);

  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-20 space-y-16 selection:bg-[#210532] selection:text-[#FDE68A] scroll-smooth">
      {/* Sub Navigation Bar for Placements Section */}
      <PlacementsSubNav activeRoute="corporate-recruiters" onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: EDITORIAL SPLIT SHOWCASE (EXACT MATCH TO MOCKUP)         */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Asymmetric Framed Photo with Royal Plum Architectural Accents */}
            <div className="lg:col-span-6 relative">
              <RevealBlock direction="left">
                <div className="relative pt-2 sm:pt-4 pb-2 sm:pb-4 px-2 sm:px-3">
                  
                  {/* Top-Left Outer Royal Plum Solid Crest Chevron */}
                  <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#28052B] rounded-tl-[44px] sm:rounded-tl-[56px] rounded-br-[70px] sm:rounded-br-[90px] -z-0 pointer-events-none" />

                  {/* Bottom-Right Outer Royal Plum Solid Crest Chevron */}
                  <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#28052B] rounded-br-[44px] sm:rounded-br-[56px] rounded-tl-[70px] sm:rounded-tl-[90px] -z-0 pointer-events-none" />

                  {/* Outer Contour Gold Border Line hugging the shape */}
                  <div className="absolute inset-0 rounded-tl-[48px] sm:rounded-tl-[60px] rounded-tr-[30px] sm:rounded-tr-[42px] rounded-br-[48px] sm:rounded-br-[60px] rounded-bl-[30px] sm:rounded-bl-[42px] border-[1.5px] border-[#DFC06A] pointer-events-none z-10" />

                  {/* Main Image Container */}
                  <div className="relative z-10 rounded-tl-[40px] sm:rounded-tl-[52px] rounded-tr-[24px] sm:rounded-tr-[36px] rounded-br-[40px] sm:rounded-br-[52px] rounded-bl-[24px] sm:rounded-bl-[36px] overflow-hidden shadow-2xl border border-[#DFC06A]/40 bg-[#28052B] group">
                    <img
                      src="/assets/corporate_recruiters_connections.jpg"
                      alt="Connections that shape careers - Jyothi students with corporate recruitment partner"
                      className="w-full h-full object-cover object-center aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11] group-hover:scale-[1.02] transition-transform duration-700"
                    />

                    {/* Subtle warm lighting vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#28052B]/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                </div>
              </RevealBlock>
            </div>

            {/* Right Column: Eyebrow, Main Headline, Subtitle, Description, Action Buttons, Shortcuts */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <RevealBlock direction="right">
                <div className="space-y-4 sm:space-y-4.5">
                  
                  {/* Eyebrow flanked on right by gold rule */}
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#BD8E36]">
                      CORPORATE RELATIONS
                    </span>
                    <span className="h-[1.5px] w-12 sm:w-16 bg-[#BD8E36]" />
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black font-['Playfair_Display',serif] text-[#28052B] leading-[1.12] tracking-tight">
                    <span className="block">Connections that</span>
                    <span className="block mt-0.5 sm:mt-1">
                      <span className="text-[#28052B]">shape </span>
                      <span className="italic font-normal text-[#BD8E36]">careers.</span>
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#28052B] pt-0.5">
                    Corporate Recruiters &amp; Hiring Partners
                  </h2>

                  {/* Description with Vertical Gold Slash */}
                  <div className="flex items-start gap-3 pt-1">
                    <span className="w-[2px] h-9 bg-[#BD8E36] shrink-0 mt-0.5 inline-block" />
                    <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed max-w-md font-normal">
                      Connecting Jyothi students with employers across technology, engineering and beyond.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => scrollToSection('recruiting-community')}
                      className="px-6 sm:px-7 py-3 rounded-full bg-[#C59B4E] hover:bg-[#B3893C] text-[#28052B] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer group"
                    >
                      <span>Browse Recruiting Partners</span>
                      <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onNavigate('placement-records')}
                      className="px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-[#FAF7F2] text-[#28052B] border border-[#28052B] font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
                    >
                      <span>View Placement Records</span>
                      <ArrowRight className="w-4 h-4 text-[#28052B] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hairline Divider */}
                  <div className="h-[1px] bg-[#E7D6C1] w-full pt-2" />

                  {/* 3 Inline Category Shortcuts with Icons and Dividers */}
                  <div className="flex items-center flex-wrap gap-4 sm:gap-6 pt-1 text-xs sm:text-sm font-semibold text-[#28052B]">
                    <button
                      onClick={() => {
                        setSelectedCategory('Tier 1 IT & Cloud');
                        scrollToSection('recruiters-grid');
                      }}
                      className="inline-flex items-center gap-2 hover:text-[#BD8E36] transition-colors cursor-pointer group"
                    >
                      <Laptop className="w-4 h-4 text-[#28052B] group-hover:text-[#BD8E36] transition-colors" />
                      <span>Technology</span>
                    </button>

                    <span className="h-4 w-[1px] bg-[#E7D6C1]" />

                    <button
                      onClick={() => {
                        setSelectedCategory('Core Engineering & Auto');
                        scrollToSection('recruiters-grid');
                      }}
                      className="inline-flex items-center gap-2 hover:text-[#BD8E36] transition-colors cursor-pointer group"
                    >
                      <Settings className="w-4 h-4 text-[#28052B] group-hover:text-[#BD8E36] transition-colors" />
                      <span>Engineering</span>
                    </button>

                    <span className="h-4 w-[1px] bg-[#E7D6C1]" />

                    <button
                      onClick={() => {
                        setSelectedCategory('Banking & FinTech');
                        scrollToSection('recruiters-grid');
                      }}
                      className="inline-flex items-center gap-2 hover:text-[#BD8E36] transition-colors cursor-pointer group"
                    >
                      <Coins className="w-4 h-4 text-[#28052B] group-hover:text-[#BD8E36] transition-colors" />
                      <span>Finance</span>
                    </button>
                  </div>

                </div>
              </RevealBlock>
            </div>

          </div>
          {/* Explore Our Recruiting Community Section */}
          <div id="recruiting-community" className="space-y-6 pt-2">
            <RevealBlock direction="up">
              {/* Header with Hairline Rule */}
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Playfair_Display',serif] text-[#28052B] whitespace-nowrap">
                  Explore our <span className="italic font-normal text-[#BD8E36]">recruiting community</span>
                </h2>
                <div className="h-[1px] bg-[#E7D6C1] flex-1 ml-4 hidden sm:block" />
              </div>
            </RevealBlock>

            {/* 3 Quick Action Category Cards */}
            <RevealBlock direction="up" delay={80}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Card 1: Technology & Consulting */}
                <button
                  onClick={() => {
                    setSelectedCategory('Tier 1 IT & Cloud');
                    scrollToSection('recruiters-grid');
                  }}
                  className="bg-white rounded-2xl border border-[#E7D6C1] p-4 sm:p-5 hover:border-[#DFC06A] shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center text-[#28052B] group-hover:scale-105 transition-transform shrink-0">
                      <Laptop className="w-5 h-5 text-[#28052B]" />
                    </div>
                    <span className="h-5 w-[1px] bg-[#E7D6C1] shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                      Technology &amp; Consulting
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#BD8E36] group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                {/* Card 2: Core Engineering */}
                <button
                  onClick={() => {
                    setSelectedCategory('Core Engineering & Auto');
                    scrollToSection('recruiters-grid');
                  }}
                  className="bg-white rounded-2xl border border-[#E7D6C1] p-4 sm:p-5 hover:border-[#DFC06A] shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center text-[#28052B] group-hover:scale-105 transition-transform shrink-0">
                      <Settings className="w-5 h-5 text-[#28052B]" />
                    </div>
                    <span className="h-5 w-[1px] bg-[#E7D6C1] shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                      Core Engineering
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#BD8E36] group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                {/* Card 3: Banking & Finance */}
                <button
                  onClick={() => {
                    setSelectedCategory('Banking & FinTech');
                    scrollToSection('recruiters-grid');
                  }}
                  className="bg-white rounded-2xl border border-[#E7D6C1] p-4 sm:p-5 hover:border-[#DFC06A] shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1] flex items-center justify-center text-[#28052B] group-hover:scale-105 transition-transform shrink-0">
                      <Coins className="w-5 h-5 text-[#28052B]" />
                    </div>
                    <span className="h-5 w-[1px] bg-[#E7D6C1] shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors">
                      Banking &amp; Finance
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#BD8E36] group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </RevealBlock>

            {/* Center CTA Button: Invite for a Hiring Drive */}
            <RevealBlock direction="up" delay={120}>
              <div className="flex justify-center pt-2">
                <a
                  href="mailto:pat@jecc.ac.in?subject=Campus%20Recruitment%20Drive%20Invitation"
                  className="px-6 sm:px-7 py-2.5 rounded-full bg-[#28052B] hover:bg-[#3B0740] text-white border border-[#DFC06A]/60 font-bold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Mail className="w-4 h-4 text-[#DFC06A]" />
                  <span>Invite for a Hiring Drive</span>
                </a>
              </div>
            </RevealBlock>

            {/* Illustrative Partners Strip */}
            <RevealBlock direction="up" delay={160}>
              <div className="pt-4 space-y-2.5">
                <div className="flex items-center justify-center gap-3">
                  <span className="h-[1px] w-12 sm:w-20 bg-[#E7D6C1]" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#BD8E36]">
                    ILLUSTRATIVE PARTNERS
                  </span>
                  <span className="h-[1px] w-12 sm:w-20 bg-[#E7D6C1]" />
                </div>
                <div className="flex items-center justify-center gap-6 sm:gap-10 text-base sm:text-xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
                  <span>TCS</span>
                  <span className="text-[#E7D6C1] font-light">|</span>
                  <span>Infosys</span>
                  <span className="text-[#E7D6C1] font-light">|</span>
                  <span>Wipro</span>
                  <span className="text-[#E7D6C1] font-light">|</span>
                  <span>IBM</span>
                </div>
              </div>
            </RevealBlock>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. RECRUITMENT SECTOR DISTRIBUTION (ANALYTICS BAR)                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
          <div className="p-5 sm:p-7 bg-white rounded-3xl border border-[#DFC06A]/50 shadow-sm space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#FAF7F2]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD8E36] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7D6C1]">
                  Industry Domain Distribution • 2024–25 Batch
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#28052B] mt-1.5">
                  Diversified Hiring Across Corporate Verticals
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-bold text-slate-500 block">Total Offers Issued</span>
                <span className="text-2xl font-black text-[#28052B]">462+ Campus Offers</span>
              </div>
            </div>

            {/* Proportion Bar */}
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
              {SECTORS_DISTRIBUTION.map((sec, i) => (
                <div
                  key={i}
                  style={{ width: `${sec.pct}%` }}
                  className={`${sec.color} h-full transition-all duration-700 hover:brightness-110 cursor-pointer`}
                  title={`${sec.name}: ${sec.pct}% (${sec.offers} Offers)`}
                  onClick={() => {
                    setSelectedCategory(sec.category);
                    const el = document.getElementById('recruiters-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              ))}
            </div>

            {/* Sector Clickable Legend Chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SECTORS_DISTRIBUTION.map((sec, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedCategory(sec.category);
                    const el = document.getElementById('recruiters-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] hover:border-[#BD8E36] hover:bg-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${sec.color} shrink-0`} />
                    <span className="text-xs font-bold text-[#28052B] group-hover:text-[#BD8E36] transition-colors truncate">
                      {sec.name}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-1 pt-1 border-t border-[#E7D6C1]/50 text-xs">
                    <span className="text-base font-black text-[#28052B]">{sec.pct}%</span>
                    <span className="text-slate-500 font-semibold">{sec.offers} Offers</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>
      </section>

      {/* ========================================================================= */}
      {/* 3. MARQUEE RECRUITER SPOTLIGHT: ELITE SUPER DREAM & FLAGSHIP PARTNERS     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <RevealBlock direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-2 border-b border-[#DFC06A]/30">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#C79628]" />
                FLAGSHIP SPOTLIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#28052B]">
                Tier-1 Marquee Hiring Partners
              </h2>
              <p className="text-xs sm:text-sm text-[#4A384F]/80 max-w-2xl mt-0.5">
                Premier multinational conglomerates offering flagship Super Dream and core specialized engineering roles to Jyothi graduates.
              </p>
            </div>
            <a
              href="#recruiters-grid"
              className="text-xs font-bold text-[#BD8E36] hover:underline flex items-center gap-1 self-start md:self-auto shrink-0"
            >
              <span>Explore All 24 Companies Below</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MARQUEE_LEADERS.map((lead, idx) => {
            const fullRecruiter = RECRUITERS_DATA.find((r) => r.name.includes(lead.name) || lead.name.includes(r.name));

            return (
              <RevealBlock key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 80} className="h-full">
                <div
                  onClick={() => fullRecruiter && setSelectedCompany(fullRecruiter)}
                  className="h-full p-6 bg-white rounded-3xl border border-[#DFC06A]/40 shadow-xs hover:border-[#BD8E36] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DFC06A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-3.5">
                    {/* Top Row: Brand Crest + Tag */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-12 h-12 rounded-2xl ${lead.bg} ${lead.text} flex items-center justify-center text-xs font-black tracking-wider shadow-md shrink-0 border border-white/20 group-hover:scale-105 transition-transform`}
                        >
                          {lead.code}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A87E2B] block">
                            {lead.tag}
                          </span>
                          <h3 className="font-bold text-base text-[#28052B] font-['Playfair_Display',serif] group-hover:text-[#BD8E36] transition-colors leading-tight">
                            {lead.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* CTC Badge Box */}
                    <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] group-hover:border-[#DFC06A]/70 transition-colors flex items-center justify-between">
                      <div>
                        <span className="text-[9.5px] uppercase font-bold text-slate-500 block">Maximum Offered CTC</span>
                        <span className="text-base font-black text-emerald-800">{lead.ctc}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#28052B] text-[#DFC06A]">
                        Verified
                      </span>
                    </div>

                    {/* Role Hired */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Flagship Role:</span>
                      <p className="text-xs font-semibold text-slate-800 mt-0.5">{lead.role}</p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#BD8E36]">
                    <span>View Hiring Criteria &amp; Rounds</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REDESIGNED INTERACTIVE CORPORATE RECRUITER DIRECTORY                   */}
      {/* ========================================================================= */}
      <section id="recruiters-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <RevealBlock direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#DFC06A]/30">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C79628] flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#C79628]" />
                CAMPUS RECRUITER DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#28052B]">
                Explore Visiting Companies &amp; Roles
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Displaying {filteredRecruiters.length} verified hiring partners recruiting from our autonomous degree batches.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#C79628] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search company, profile, or city..."
                className="w-full pl-10 pr-9 py-2.5 bg-white rounded-full border border-[#DFC06A]/50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#28052B] shadow-2xs transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
            </div>
          </div>
        </RevealBlock>

        {/* Dual Filtering: Sector Filter + Tier Filter */}
        <RevealBlock direction="up" delay={50}>
          <div className="space-y-3">
            {/* Sector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const count = cat === 'All'
                  ? RECRUITERS_DATA.length
                  : RECRUITERS_DATA.filter((r) => r.category === cat).length;
                const isSelected = selectedCategory === cat;
                const IconComponent = CATEGORY_ICONS[cat] || Building2;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#210532] text-[#FDE68A] shadow-md border border-[#DFC06A]/60 font-bold'
                        : 'bg-white text-slate-700 border border-[#DFC06A]/35 hover:bg-amber-50/60 hover:text-[#210532]'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-[#DFC06A]' : 'text-[#BD8E36]'}`} />
                    <span>{cat}</span>
                    <span
                      className={`px-2 py-0.2 rounded-full text-[10px] font-bold ${
                        isSelected
                          ? 'bg-white/20 text-[#DFC06A]'
                          : 'bg-[#FAF7F2] text-slate-500 border border-[#E7D6C1]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Compensation Tier Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#BD8E36]" />
                <span>Filter By Package Tier:</span>
              </span>
              {tiers.map((tier) => {
                const count = tier === 'All'
                  ? RECRUITERS_DATA.length
                  : RECRUITERS_DATA.filter((r) => r.tier === tier).length;
                const isSelected = selectedTier === tier;

                return (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#E5B656] text-[#28052B] font-bold shadow-2xs'
                        : 'bg-[#FAF7F2] text-slate-600 border border-[#E7D6C1] hover:bg-white'
                    }`}
                  >
                    {tier} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </RevealBlock>

        {/* Directory Grid with Redesigned Recruiter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecruiters.map((r, idx) => {
            const brand = BRAND_BADGES[r.name] || {
              code: r.name.slice(0, 3).toUpperCase(),
              bg: 'bg-gradient-to-br from-[#210532] to-[#340A4E]',
              text: 'text-[#FDE68A]',
            };

            return (
              <RevealBlock key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={(idx % 3) * 60}>
                <div
                  onClick={() => setSelectedCompany(r)}
                  className="h-full group p-6 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-xs hover:border-[#BD8E36] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden cursor-pointer"
                >
                  {/* Subtle top gold accent glow line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DFC06A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-3.5 relative z-10">
                    {/* Card Header: Brand Emblem + Category & Title */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-12 h-12 rounded-2xl ${brand.bg} ${brand.text} ${brand.ring || ''} flex items-center justify-center text-xs font-black tracking-wider shadow-md shrink-0 select-none border border-white/20 group-hover:scale-105 transition-transform duration-300`}
                        >
                          {brand.code}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A87E2B] block">
                            {r.category}
                          </span>
                          <h3 className="font-bold text-base sm:text-[17px] text-[#210532] leading-tight group-hover:text-[#BD8E36] transition-colors font-['Playfair_Display',serif]">
                            {r.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Badge Row */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#FAF7F2] text-[#28052B] border border-[#DFC06A]/50 shadow-2xs">
                        {r.badge}
                      </span>
                      <span className="text-[10.5px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {r.partnershipYears}
                      </span>
                    </div>

                    {/* Roles Hired Card Box */}
                    <div className="p-3 bg-[#FAF7F0] rounded-2xl border border-[#DFC06A]/30 group-hover:border-[#DFC06A]/60 transition-colors space-y-1 text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3 h-3 text-[#BD8E36]" />
                          <span>Roles Recruited</span>
                        </span>
                        <span className="font-mono font-bold text-emerald-800">{r.ctc}</span>
                      </div>
                      <div className="font-semibold text-slate-800 text-[11.5px] leading-snug">
                        {r.rolesHired}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Globe2 className="w-3.5 h-3.5 text-[#BD8E36] shrink-0" />
                        <span className="text-[11px] truncate">{r.location}</span>
                      </div>
                      <span className="text-[10.5px] text-[#28052B] font-bold group-hover:text-[#BD8E36] flex items-center gap-1">
                        <span>Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
                    <span className="text-emerald-800 font-bold flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{r.hiringType}</span>
                    </span>
                    <span className="text-[10.5px] text-[#210532] font-bold px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200/80">
                      On-Campus
                    </span>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>

        {filteredRecruiters.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
            <Building2 className="w-12 h-12 text-[#C79628] mx-auto opacity-40" />
            <p className="text-base font-semibold text-slate-800">No recruiters match your search filter</p>
            <p className="text-xs text-slate-500">Try searching for &quot;TCS&quot;, &quot;Bosch&quot;, &quot;Federal Bank&quot;, or &quot;Embedded&quot;.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedTier('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#C79628] hover:underline pt-2 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE COMPANY HIRING DETAIL MODAL                                 */}
      {/* ========================================================================= */}
      {selectedCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#FAF7F0] rounded-3xl border-2 border-[#DFC06A] shadow-2xl overflow-hidden my-8">
            {/* Modal Header */}
            <div className="p-6 bg-[#28052B] text-white flex items-center justify-between border-b border-[#DFC06A]/40 relative">
              <div className="flex items-center gap-3.5">
                {(() => {
                  const b = BRAND_BADGES[selectedCompany.name] || {
                    code: selectedCompany.name.slice(0, 3).toUpperCase(),
                    bg: 'bg-white/20',
                    text: 'text-[#FDE68A]',
                  };
                  return (
                    <span className={`w-12 h-12 rounded-2xl ${b.bg} ${b.text} flex items-center justify-center text-sm font-black border border-white/20 shadow-md`}>
                      {b.code}
                    </span>
                  );
                })()}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#DFC06A]">
                    {selectedCompany.category} • {selectedCompany.tier}
                  </div>
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-white">
                    {selectedCompany.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedCompany(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-7 space-y-5 bg-white max-h-[75vh] overflow-y-auto">
              {/* Compensation & Partnership Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] text-center">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Package CTC</span>
                  <span className="text-sm font-black text-emerald-800">{selectedCompany.ctc}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Hiring Mode</span>
                  <span className="text-xs font-bold text-[#28052B]">{selectedCompany.hiringType}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Association</span>
                  <span className="text-xs font-bold text-[#28052B]">{selectedCompany.partnershipYears}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Base Hub</span>
                  <span className="text-xs font-bold text-[#28052B]">{selectedCompany.location}</span>
                </div>
              </div>

              {/* Company Description */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#BD8E36]">
                  About The Corporate Partnership:
                </h4>
                <p className="text-xs sm:text-sm text-[#4A384F] leading-relaxed">
                  {selectedCompany.description}
                </p>
              </div>

              {/* Roles & Eligibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] space-y-1">
                  <div className="text-[10.5px] uppercase font-bold text-slate-500 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#BD8E36]" />
                    <span>Designations Recruited:</span>
                  </div>
                  <p className="text-xs font-bold text-[#28052B]">{selectedCompany.rolesHired}</p>
                </div>

                <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E7D6C1] space-y-1">
                  <div className="text-[10.5px] uppercase font-bold text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Eligibility Benchmark:</span>
                  </div>
                  <p className="text-xs font-bold text-[#28052B]">{selectedCompany.eligibility}</p>
                </div>
              </div>

              {/* Selection Process Stages */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#BD8E36]">
                  Typical Multi-Stage Campus Selection Loop:
                </h4>
                <div className="space-y-1.5">
                  {selectedCompany.rounds.map((round, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7D6C1]/70 text-xs">
                      <span className="w-5 h-5 rounded-full bg-[#28052B] text-[#DFC06A] font-bold text-[10px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-[#28052B]">{round}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Close Window
                </button>
                <a
                  href={`mailto:pat@jecc.ac.in?subject=Recruitment%20Query%20Regarding%20${encodeURIComponent(selectedCompany.name)}`}
                  className="px-6 py-2 rounded-full bg-[#28052B] hover:bg-[#3E1043] text-[#DFC06A] font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact PAT Placement Officer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. "WHY CORPORATE LEADERS PREFER JYOTHI" EDITORIAL BENTO                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealBlock direction="up">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
              INSTITUTIONAL ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
              Why Corporate Leaders Prefer Jyothi Engineers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our autonomous governance allows us to calibrate syllabi in real time with industry expectations, delivering job-ready talent on day one.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RevealBlock direction="left" delay={50}>
            <div className="h-full p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-4 hover:border-[#DFC06A] hover:shadow-md transition-all relative overflow-hidden group">
              <div className="text-4xl font-black font-['Playfair_Display',serif] text-[#C79628]/30 group-hover:text-[#C79628]/60 transition-colors">
                01
              </div>
              <h3 className="font-bold text-lg text-[#210532]">Autonomous Syllabi &amp; Electives</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tailored credit courses in Generative AI, Cloud Native Microservices, Electric Vehicle Powertrains, and Cyber Forensics designed in direct consultation with corporate Board of Studies advisors.
              </p>
              <div className="pt-2 text-xs font-bold text-[#A87E2B] flex items-center gap-1">
                <span>Industry 4.0 Calibrated</span>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock direction="up" delay={150}>
            <div className="h-full p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-4 hover:border-[#DFC06A] hover:shadow-md transition-all relative overflow-hidden group">
              <div className="text-4xl font-black font-['Playfair_Display',serif] text-[#C79628]/30 group-hover:text-[#C79628]/60 transition-colors">
                02
              </div>
              <h3 className="font-bold text-lg text-[#210532]">MIT FabLab &amp; TATA IIIC Labs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rigorous hands-on exposure to rapid electronic hardware prototyping, 3D additive printing, industrial robotics, and modern CNC machinery ensures day-one productivity in core engineering.
              </p>
              <div className="pt-2 text-xs font-bold text-[#A87E2B] flex items-center gap-1">
                <span>Hardware &amp; Prototyping Rigor</span>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock direction="right" delay={250}>
            <div className="h-full p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm space-y-4 hover:border-[#DFC06A] hover:shadow-md transition-all relative overflow-hidden group">
              <div className="text-4xl font-black font-['Playfair_Display',serif] text-[#C79628]/30 group-hover:text-[#C79628]/60 transition-colors">
                03
              </div>
              <h3 className="font-bold text-lg text-[#210532]">Catholic Ethics &amp; Integrity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nurtured by the Catholic Archdiocese of Trichur with deep emphasis on moral integrity, workplace accountability, teamwork, and lifelong learning dedication that sets our graduates apart.
              </p>
              <div className="pt-2 text-xs font-bold text-[#A87E2B] flex items-center gap-1">
                <span>High Cultural &amp; Ethical Values</span>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CAMPUS HIRING INFRASTRUCTURE WITH PHOTO BENTO                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealBlock direction="up">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
              HIRING INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
              World-Class Campus Recruitment Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Engineered to support large-scale simultaneous testing and seamless panel interviews with high-speed optical connectivity and VIP hospitality.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <RevealBlock direction="left" delay={50} className="h-full">
            <div className="h-full rounded-3xl overflow-hidden border border-[#DFC06A]/40 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src="/assets/computer_center_hero.jpg"
                  alt="900+ PC Online Testing Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  900+ PC Assessment Matrix
                </span>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated 1 Gbps optical fibre NKN line supporting simultaneous computer-based assessments across multiple air-conditioned halls.
                </p>
                <div className="text-[10.5px] font-bold text-[#BD8E36]">1 Gbps Dedicated Pipeline</div>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock direction="left" delay={150} className="h-full">
            <div className="h-full rounded-3xl overflow-hidden border border-[#DFC06A]/40 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src="/assets/board_room_hero.jpg"
                  alt="12 AC Interview Cabins"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  12 Corporate Interview Cabins
                </span>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acoustically soundproofed, air-conditioned corporate interview suites with high-speed video conferencing nodes.
                </p>
                <div className="text-[10.5px] font-bold text-[#BD8E36]">Acoustic Telemetry Suites</div>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock direction="right" delay={200} className="h-full">
            <div className="h-full rounded-3xl overflow-hidden border border-[#DFC06A]/40 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src="/assets/auditorium_hall.jpg"
                  alt="1,200-Seat Auditorium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  1,200-Seat Main Auditorium
                </span>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with dual laser projection and surround acoustic telemetry for Pre-Placement Talks (PPT) and large pool drives.
                </p>
                <div className="text-[10.5px] font-bold text-[#BD8E36]">Laser Projection PPT Hall</div>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock direction="right" delay={300} className="h-full">
            <div className="h-full rounded-3xl overflow-hidden border border-[#DFC06A]/40 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src="/assets/seminar_hall_ac.jpg"
                  alt="Executive Corporate Hospitality"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  VIP Corporate Dining Lounge
                </span>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  VIP corporate dining lounge and on-campus guest suites for visiting talent acquisition delegates and recruitment directors.
                </p>
                <div className="text-[10.5px] font-bold text-[#BD8E36]">Executive Guest Accommodations</div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TALENT ACQUISITION LEADER TESTIMONIALS                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealBlock direction="up">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C79628]">
              EMPLOYER VOICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-[#210532]">
              What Talent Leaders Say About Jyothi
            </h2>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <RevealBlock key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
              <div
                className="h-full p-7 bg-white rounded-3xl border border-[#DFC06A]/35 shadow-sm hover:border-[#BD8E36] hover:shadow-xl transition-all flex flex-col justify-between space-y-5 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-[#C79628]/40" />
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-[#210532]">{t.person}</div>
                    <div className="text-[11px] text-slate-500">{t.role}</div>
                    <div className="text-xs font-bold text-[#A87E2B] mt-0.5">{t.company}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#EFE8F6] text-[#210532] shrink-0">
                    {t.experience}
                  </span>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. RECRUITER INVITATION & DIRECT PLACEMENT LIAISON DESK                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock direction="up">
          <div className="relative">
            <div className="hidden sm:block absolute -top-2.5 -left-2.5 w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-[#DFC06A] rounded-tl-lg pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-[#DFC06A] rounded-br-lg pointer-events-none" />

            <div className="rounded-3xl bg-[#28052B] text-white border border-[#3E1043] p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#DFC06A]/20 text-[#FDE68A] border border-[#DFC06A]/40">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFC06A]" />
                  Recruiter Invitation 2025–26
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] leading-tight text-white">
                  Invite Jyothi Engineers for Your Upcoming Hiring Season
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  Connect directly with our Directorate of Corporate Relations &amp; Placement (PAT Cell) to book prime campus recruitment slots, configure custom online assessments, or organize pooled hiring drives.
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-white/90">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#DFC06A]" />
                    <span>Direct Placement Desk: <strong>+91 4884 259000 (Extn 224 / 225)</strong></span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#DFC06A]" />
                    <span>Email: <strong>pat@jecc.ac.in / placements@jecc.ac.in</strong></span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  onClick={() => onNavigate('career-guidance')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C79628] to-[#DFC06A] text-[#170525] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-[#170525]" />
                  <span>Career Guidance Cell Details</span>
                </button>
                <button
                  onClick={() => onNavigate('placement-records')}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Placement Trajectory</span>
                  <ArrowRight className="w-4 h-4 text-[#DFC06A]" />
                </button>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>
    </div>
  );
};
