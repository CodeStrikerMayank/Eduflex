import { Stream, College, Course, Exam, Review, Question, Article } from '@/types';

export const STREAMS: Stream[] = [
  {
    id: '11111111-1111-1111-1111-111111111101',
    name: 'Engineering',
    slug: 'engineering',
    shortCode: 'B.Tech',
    iconName: 'Cpu',
    tagline: "Build tomorrow's technology & systems",
    description: 'Explore 4,500+ engineering institutes across India. Compare NIRF rankings, JEE Main/Advanced cutoffs, tech placements, and modern laboratories.',
    displayOrder: 1,
    popularExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'MHT CET'],
    topCourses: ['B.Tech CSE', 'B.Tech AI & DS', 'B.Tech ECE', 'B.Tech Mechanical']
  },
  {
    id: '11111111-1111-1111-1111-111111111102',
    name: 'Management',
    slug: 'management',
    shortCode: 'MBA',
    iconName: 'Briefcase',
    tagline: 'Lead global enterprises and strategic ventures',
    description: 'Find top business schools, IIMs, PGDM colleges, CAT percentiles, consulting recruiters, and high-ROI leadership education.',
    displayOrder: 2,
    popularExams: ['CAT', 'XAT', 'MAT', 'CMAT', 'NMAT'],
    topCourses: ['MBA Core', 'PGDM Business Analytics', 'MBA Finance', 'MBA Marketing']
  },
  {
    id: '11111111-1111-1111-1111-111111111103',
    name: 'Medical',
    slug: 'medical',
    shortCode: 'MBBS',
    iconName: 'Stethoscope',
    tagline: 'Heal, research, and advance clinical healthcare',
    description: 'Explore premier medical colleges, AIIMS, MBBS seat matrix, NEET UG cutoffs, hospital bed counts, and clinical rotations.',
    displayOrder: 3,
    popularExams: ['NEET UG', 'NEET PG', 'INI-CET'],
    topCourses: ['MBBS', 'BDS', 'MD General Medicine', 'MS Surgery']
  },
  {
    id: '11111111-1111-1111-1111-111111111104',
    name: 'Law',
    slug: 'law',
    shortCode: 'LL.B',
    iconName: 'Scale',
    tagline: 'Champion constitutional justice and corporate practice',
    description: 'Discover 24 National Law Universities (NLUs), 5-year integrated BA LLB programs, CLAT opening & closing ranks, and moot court excellence.',
    displayOrder: 4,
    popularExams: ['CLAT', 'AILET', 'SLAT', 'LSAT India'],
    topCourses: ['BA LLB (Hons)', 'BBA LLB (Hons)', 'LLM Corporate Law']
  },
  {
    id: '11111111-1111-1111-1111-111111111105',
    name: 'Design',
    slug: 'design',
    shortCode: 'B.Des',
    iconName: 'Palette',
    tagline: 'Create aesthetic products and digital futures',
    description: 'Search leading design academies including NID, NIFT, IIT Design schools, UI/UX interaction design programs, and creative portfolios.',
    displayOrder: 5,
    popularExams: ['NID DAT', 'UCEED', 'CEED', 'NIFT Entrance'],
    topCourses: ['B.Des UI/UX', 'B.Des Product Design', 'B.Des Fashion Design']
  }
];

export const COURSES: Course[] = [
  {
    id: '33333333-3333-3333-3333-333333333301',
    streamId: '11111111-1111-1111-1111-111111111101',
    streamSlug: 'engineering',
    name: 'Bachelor of Technology in Computer Science & Engineering',
    shortName: 'B.Tech CSE',
    slug: 'btech-cse',
    level: 'Undergraduate',
    durationYears: 4.0,
    avgStartingSalary: '₹14 - 28 LPA',
    isPopular: true,
    eligibilitySummary: '10+2 with Physics, Mathematics, Chemistry (Min 75% in PCM) + JEE Main / Advanced qualification.',
    overview: 'B.Tech in Computer Science and Engineering equips students with solid mathematical foundations, systems architecture, distributed computing, algorithms, algorithms analysis, cybersecurity, and modern cloud technologies.'
  },
  {
    id: '33333333-3333-3333-3333-333333333302',
    streamId: '11111111-1111-1111-1111-111111111101',
    streamSlug: 'engineering',
    name: 'Bachelor of Technology in Artificial Intelligence & Data Science',
    shortName: 'B.Tech AI & DS',
    slug: 'btech-ai-ds',
    level: 'Undergraduate',
    durationYears: 4.0,
    avgStartingSalary: '₹16 - 32 LPA',
    isPopular: true,
    eligibilitySummary: '10+2 with PCM (Min 75%) + Valid JEE score.',
    overview: 'Specialized 4-year undergraduate degree diving deep into neural networks, natural language processing, LLM architectures, machine learning infrastructure, and big data engineering.'
  },
  {
    id: '33333333-3333-3333-3333-333333333303',
    streamId: '11111111-1111-1111-1111-111111111101',
    streamSlug: 'engineering',
    name: 'Bachelor of Technology in Electronics & Communication',
    shortName: 'B.Tech ECE',
    slug: 'btech-ece',
    level: 'Undergraduate',
    durationYears: 4.0,
    avgStartingSalary: '₹10 - 22 LPA',
    isPopular: false,
    eligibilitySummary: '10+2 with PCM (Min 75%) + JEE.',
    overview: 'Covers semiconductor physics, VLSI chip design, embedded IoT architectures, and 5G wireless telecommunication networks.'
  },
  {
    id: '33333333-3333-3333-3333-333333333304',
    streamId: '11111111-1111-1111-1111-111111111102',
    streamSlug: 'management',
    name: 'Master of Business Administration (Core / General)',
    shortName: 'MBA Core',
    slug: 'mba-core',
    level: 'Postgraduate',
    durationYears: 2.0,
    avgStartingSalary: '₹22 - 36 LPA',
    isPopular: true,
    eligibilitySummary: "Bachelor's degree in any discipline (Min 50%) + Valid CAT / XAT percentile.",
    overview: 'Flagship 2-year residential postgraduate management program designed to cultivate strategic leadership, corporate finance, market mastery, and operations management.'
  },
  {
    id: '33333333-3333-3333-3333-333333333305',
    streamId: '11111111-1111-1111-1111-111111111102',
    streamSlug: 'management',
    name: 'Post Graduate Diploma in Management (Business Analytics)',
    shortName: 'PGDM Analytics',
    slug: 'pgdm-business-analytics',
    level: 'Postgraduate',
    durationYears: 2.0,
    avgStartingSalary: '₹20 - 34 LPA',
    isPopular: true,
    eligibilitySummary: 'Undergraduate degree with quantitative acumen + CAT / GMAT score.',
    overview: 'Prepares data-driven business consultants, product analysts, and strategy leaders with expertise in predictive modeling and quantitative finance.'
  },
  {
    id: '33333333-3333-3333-3333-333333333306',
    streamId: '11111111-1111-1111-1111-111111111103',
    streamSlug: 'medical',
    name: 'Bachelor of Medicine & Bachelor of Surgery',
    shortName: 'MBBS',
    slug: 'mbbs',
    level: 'Undergraduate',
    durationYears: 5.5,
    avgStartingSalary: '₹10 - 18 LPA',
    isPopular: true,
    eligibilitySummary: '10+2 with Physics, Chemistry, Biology (Min 50%) + NEET UG qualification.',
    overview: 'The primary qualification for practicing medical physicians in India, incorporating comprehensive preclinical anatomy, clinical pharmacology, patient pathology, and a compulsory 1-year rotatory hospital internship.'
  },
  {
    id: '33333333-3333-3333-3333-333333333307',
    streamId: '11111111-1111-1111-1111-111111111104',
    streamSlug: 'law',
    name: 'B.A. LL.B. (Honours) 5-Year Integrated',
    shortName: 'BA LLB Hons',
    slug: 'ba-llb-hons',
    level: 'Undergraduate',
    durationYears: 5.0,
    avgStartingSalary: '₹12 - 20 LPA',
    isPopular: true,
    eligibilitySummary: '10+2 in any stream (Min 45%) + CLAT All India Rank.',
    overview: 'Holistic integrated humanities and law degree imparting deep knowledge of constitutional jurisprudence, corporate mergers & acquisitions, intellectual property, and arbitration.'
  },
  {
    id: '33333333-3333-3333-3333-333333333308',
    streamId: '11111111-1111-1111-1111-111111111105',
    streamSlug: 'design',
    name: 'Bachelor of Design (Interaction & Product Design)',
    shortName: 'B.Des UI/UX',
    slug: 'bdes-interaction-product',
    level: 'Undergraduate',
    durationYears: 4.0,
    avgStartingSalary: '₹9 - 20 LPA',
    isPopular: true,
    eligibilitySummary: '10+2 in any stream + NID DAT / UCEED entrance qualification.',
    overview: 'Interdisciplinary studio education combining human-computer interaction, ergonomics, design thinking, micro-interactions, hardware enclosures, and digital design systems.'
  }
];

export const EXAMS: Exam[] = [
  {
    id: '44444444-4444-4444-4444-444444444401',
    name: 'Joint Entrance Examination (Main)',
    shortName: 'JEE Main',
    slug: 'jee-main',
    streamSlug: 'engineering',
    level: 'National',
    conductingBody: 'National Testing Agency (NTA)',
    mode: 'CBT (Online Computer Based)',
    durationMinutes: 180,
    isPopular: true,
    description: 'The single most widely taken engineering entrance examination in India, facilitating admissions across 31 NITs, 26 IIITs, 38 GFTIs and serving as qualifying gate for JEE Advanced.',
    syllabusSummary: 'Class 11 & 12 Physics (Mechanics, Electrodynamics, Modern Physics), Chemistry (Organic, Inorganic, Physical), Mathematics (Calculus, Coordinate Geometry, Algebra).',
    eligibilityCriteria: 'Passed or appearing in 10+2 examination with Physics and Mathematics along with Chemistry/Biotech. Minimum 75% aggregate marks for NIT/IIIT admission.',
    examPatternSummary: '90 Questions (30 each from Physics, Chemistry, Math). Candidates need to attempt 75 questions. 4 marks for correct, -1 for incorrect.',
    acceptedByCollegesCount: 1450,
    upcomingEvents: [
      { eventName: 'Session 1 Registration Starts', startDate: '2026-11-01', endDate: '2026-11-30', year: 2027, isTentative: false },
      { eventName: 'Session 1 Admit Card Release', startDate: '2027-01-15', year: 2027, isTentative: false },
      { eventName: 'Session 1 Exam Window', startDate: '2027-01-22', endDate: '2027-01-31', year: 2027, isTentative: false },
      { eventName: 'Session 1 Results', startDate: '2027-02-12', year: 2027, isTentative: false }
    ]
  },
  {
    id: '44444444-4444-4444-4444-444444444402',
    name: 'Joint Entrance Examination (Advanced)',
    shortName: 'JEE Advanced',
    slug: 'jee-advanced',
    streamSlug: 'engineering',
    level: 'National',
    conductingBody: 'IITs (Rotational Organization)',
    mode: 'CBT (Online)',
    durationMinutes: 360,
    isPopular: true,
    description: 'The gateway to all 23 prestigious Indian Institutes of Technology (IITs). Only the top 2,50,000 rank holders of JEE Main are eligible to sit for this test.',
    syllabusSummary: 'Rigorous conceptual physics, thermodynamics, advanced chemical bonding, integral calculus, vectors, 3D geometry.',
    eligibilityCriteria: 'Top 2.5 lakh candidates in JEE Main (all categories). Maximum 2 attempts in consecutive years.',
    examPatternSummary: 'Two mandatory papers of 3 hours each on the same day. Mix of MCQs with single/multiple correct answers, numerical value answers, and matching lists.',
    acceptedByCollegesCount: 23,
    upcomingEvents: [
      { eventName: 'Registration Commences', startDate: '2027-04-25', endDate: '2027-05-07', year: 2027, isTentative: false },
      { eventName: 'Admit Card Available', startDate: '2027-05-14', year: 2027, isTentative: false },
      { eventName: 'Exam Day (Paper 1 & 2)', startDate: '2027-05-23', year: 2027, isTentative: false },
      { eventName: 'JoSAA Counselling Starts', startDate: '2027-06-12', year: 2027, isTentative: false }
    ]
  },
  {
    id: '44444444-4444-4444-4444-444444444403',
    name: 'Common Admission Test',
    shortName: 'CAT',
    slug: 'cat',
    streamSlug: 'management',
    level: 'National',
    conductingBody: 'IIMs (Rotational)',
    mode: 'CBT (Online)',
    durationMinutes: 120,
    isPopular: true,
    description: 'Premier national-level management exam conducted annually for admission into postgraduate business administration programs across 21 IIMs, FMS, SPJIMR, MDI, and top B-schools.',
    syllabusSummary: 'Section 1: Verbal Ability & Reading Comprehension (VARC); Section 2: Data Interpretation & Logical Reasoning (DILR); Section 3: Quantitative Ability (QA).',
    eligibilityCriteria: "Bachelor's degree with at least 50% marks or equivalent CGPA (45% for SC/ST/PwD). Final year students are eligible.",
    examPatternSummary: '66 Questions in 120 minutes (40 minutes per section with strict sectional switching restriction). +3 for correct, -1 for incorrect MCQs, 0 for TITA.',
    acceptedByCollegesCount: 650,
    upcomingEvents: [
      { eventName: 'Registration Window', startDate: '2026-08-01', endDate: '2026-09-18', year: 2026, isTentative: false },
      { eventName: 'Admit Card Download', startDate: '2026-10-25', year: 2026, isTentative: false },
      { eventName: 'CAT Exam Date', startDate: '2026-11-29', year: 2026, isTentative: false },
      { eventName: 'CAT Scorecard Release', startDate: '2027-01-05', year: 2027, isTentative: false }
    ]
  },
  {
    id: '44444444-4444-4444-4444-444444444404',
    name: 'National Eligibility cum Entrance Test (UG)',
    shortName: 'NEET UG',
    slug: 'neet-ug',
    streamSlug: 'medical',
    level: 'National',
    conductingBody: 'National Testing Agency (NTA)',
    mode: 'Pen & Paper (OMR)',
    durationMinutes: 200,
    isPopular: true,
    description: 'Sole unified medical entrance test for admission to undergraduate MBBS, BDS, BAMS, BHMS, and BSMS seats in all medical colleges across India, including AIIMS and JIPMER.',
    syllabusSummary: 'NCERT Class 11 & 12 Biology (Diversity in Living World, Human Physiology, Genetics, Biotechnology), Physics, and Chemistry.',
    eligibilityCriteria: 'Candidate must have completed 17 years of age. Must have passed 10+2 with Physics, Chemistry, Biology/Biotechnology and English with minimum 50% aggregate.',
    examPatternSummary: '200 Questions (attempt 180). 720 Marks total. Biology carries 360 marks, Physics 180, Chemistry 180. +4 for correct, -1 for incorrect.',
    acceptedByCollegesCount: 710,
    upcomingEvents: [
      { eventName: 'Application Start', startDate: '2027-02-09', endDate: '2027-03-12', year: 2027, isTentative: false },
      { eventName: 'Admit Card Issued', startDate: '2027-04-28', year: 2027, isTentative: false },
      { eventName: 'NEET UG Exam Day', startDate: '2027-05-02', year: 2027, isTentative: false },
      { eventName: 'Result & All India Ranks', startDate: '2027-06-14', year: 2027, isTentative: false }
    ]
  },
  {
    id: '44444444-4444-4444-4444-444444444405',
    name: 'Common Law Admission Test',
    shortName: 'CLAT',
    slug: 'clat',
    streamSlug: 'law',
    level: 'National',
    conductingBody: 'Consortium of National Law Universities',
    mode: 'Offline OMR',
    durationMinutes: 120,
    isPopular: true,
    description: 'Centralized national examination for admission into 24 participating National Law Universities across India for 5-year integrated law degree programs.',
    syllabusSummary: 'Comprehension-based questions testing English, Current Affairs including GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.',
    eligibilityCriteria: '10+2 or equivalent with minimum 45% marks (40% for SC/ST). No upper age limit.',
    examPatternSummary: '120 passage-based multiple choice questions. 120 minutes. +1 mark for right, -0.25 mark for incorrect.',
    acceptedByCollegesCount: 85,
    upcomingEvents: [
      { eventName: 'Registration Starts', startDate: '2026-07-15', endDate: '2026-10-20', year: 2026, isTentative: false },
      { eventName: 'CLAT Exam Day', startDate: '2026-12-06', year: 2026, isTentative: false },
      { eventName: 'Counselling Process Starts', startDate: '2026-12-20', year: 2026, isTentative: false }
    ]
  },
  {
    id: '44444444-4444-4444-4444-444444444406',
    name: 'National Institute of Design Design Aptitude Test',
    shortName: 'NID DAT',
    slug: 'nid-dat',
    streamSlug: 'design',
    level: 'National',
    conductingBody: 'National Institute of Design (NID)',
    mode: 'Prelims (Pen-Paper) + Mains (Studio Test)',
    durationMinutes: 180,
    isPopular: true,
    description: 'Prestigious two-tier aptitude test for admission into Bachelor of Design (B.Des) programs at NID Ahmedabad, Gandhinagar, Bengaluru, Haryana, Andhra Pradesh, and Madhya Pradesh.',
    syllabusSummary: 'Visual perception, drawing skills, design sensibilities, storyboarding, observation, critical problem solving.',
    eligibilityCriteria: 'Candidates who have passed or are appearing for 10+2 exam in any stream (Science, Commerce, Arts).',
    examPatternSummary: 'Prelims: Written test with subjective drawing and MCQs. Mains: Hands-on studio workshop test and portfolio interview.',
    acceptedByCollegesCount: 12,
    upcomingEvents: [
      { eventName: 'Application Window', startDate: '2026-09-08', endDate: '2026-11-20', year: 2026, isTentative: false },
      { eventName: 'DAT Prelims Exam', startDate: '2027-01-03', year: 2027, isTentative: false },
      { eventName: 'DAT Mains Studio Test', startDate: '2027-04-18', year: 2027, isTentative: false }
    ]
  }
];

export const COLLEGES: College[] = [
  {
    id: '55555555-5555-5555-5555-555555555501',
    name: 'Indian Institute of Technology Madras',
    shortName: 'IIT Madras',
    slug: 'iit-madras',
    city: 'Chennai',
    state: 'Tamil Nadu',
    ownership: 'Government',
    establishedYear: 1959,
    website: 'https://www.iitm.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'IIT Madras has consistently maintained the #1 spot in NIRF Overall and Engineering rankings. Home to the pioneering IITM Research Park, India’s top deep-tech incubation ecosystem, and world-class faculty in computational science, robotics, and advanced materials.',
    campusSizeAcres: 630,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    approvedBy: 'AICTE, UGC',
    nirfRank: 1,
    nirfScore: 89.79,
    rating: 4.8,
    reviewCount: 428,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Advanced', 'GATE'],
    facilities: ['IITM Research Park', 'Supercomputing Center', 'Central Library (500k+ books)', 'Hostels with High-Speed WiFi', 'Olympic Size Swimming Pool', 'Open Air Theatre'],
    courses: [
      {
        id: 'cc-01',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        specialization: 'Artificial Intelligence & Systems',
        feesTotal: 850000,
        feesAnnual: 212500,
        seats: 87,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      },
      {
        id: 'cc-02',
        courseId: '33333333-3333-3333-3333-333333333302',
        name: 'B.Tech in Artificial Intelligence & Data Science',
        feesTotal: 850000,
        feesAnnual: 212500,
        seats: 50,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      },
      {
        id: 'cc-03',
        courseId: '33333333-3333-3333-3333-333333333303',
        name: 'B.Tech in Electronics & Communication',
        feesTotal: 850000,
        feesAnnual: 212500,
        seats: 75,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 21.48,
        medianPackage: 17.50,
        highestPackage: 131.00,
        placementPct: 88.5,
        topRecruiters: ['Google', 'Qualcomm', 'Microsoft', 'Texas Instruments', 'Goldman Sachs', 'Airbus', 'McKinsey']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'GEN', roundNo: 6, openingRank: 85, closingRank: 148, quota: 'All India' },
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'OBC', roundNo: 6, openingRank: 40, closingRank: 110, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555502',
    name: 'Indian Institute of Technology Bombay',
    shortName: 'IIT Bombay',
    slug: 'iit-bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    ownership: 'Government',
    establishedYear: 1958,
    website: 'https://www.iitb.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=500&fit=crop',
    description: 'Situated alongside Powai Lake in Mumbai, IIT Bombay is India’s most coveted destination for top JEE Advanced rankers. Known for pioneering research in quantum computing, climate studies, SINE startup incubator, and Mood Indigo—Asia’s largest cultural festival.',
    campusSizeAcres: 550,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    approvedBy: 'AICTE, UGC',
    nirfRank: 3,
    nirfScore: 80.74,
    rating: 4.9,
    reviewCount: 612,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Advanced', 'GATE', 'UCEED', 'CEED'],
    facilities: ['SINE Incubator', 'Powai Lakefront Green Campus', '24x7 Digital Library', 'World-class Athletics Complex', 'Student Hostels & Cafeterias', 'Nanoelectronics Center'],
    courses: [
      {
        id: 'cc-04',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        specialization: 'Software Systems & Theory',
        feesTotal: 920000,
        feesAnnual: 230000,
        seats: 171,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      },
      {
        id: 'cc-05',
        courseId: '33333333-3333-3333-3333-333333333303',
        name: 'B.Tech in Electrical Engineering',
        feesTotal: 920000,
        feesAnnual: 230000,
        seats: 120,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 23.50,
        medianPackage: 19.00,
        highestPackage: 168.00,
        placementPct: 91.2,
        topRecruiters: ['Apple', 'Jane Street', 'Uber', 'Nvidia', 'Rubrik', 'Citadel', 'Optiver', 'Morgan Stanley']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'GEN', roundNo: 6, openingRank: 1, closingRank: 68, quota: 'All India' },
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'OBC', roundNo: 6, openingRank: 15, closingRank: 62, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555503',
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    slug: 'iit-delhi',
    city: 'New Delhi',
    state: 'Delhi NCR',
    ownership: 'Government',
    establishedYear: 1961,
    website: 'https://home.iitd.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200&h=500&fit=crop',
    description: 'Located in Hauz Khas, IIT Delhi is renowned for research output, startup unicorn founders, and high industrial synergy. Features specialized AI institutes (ScAI), central research facilities, and dynamic student bodies.',
    campusSizeAcres: 320,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    approvedBy: 'AICTE, UGC',
    nirfRank: 2,
    nirfScore: 88.08,
    rating: 4.8,
    reviewCount: 530,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Advanced', 'GATE'],
    facilities: ['Yardi School of AI', 'Innovation & Incubation Hub', 'Central Research Facility', 'Multipurpose Sports Hall', 'Modern Hostels'],
    courses: [
      {
        id: 'cc-06',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        feesTotal: 890000,
        feesAnnual: 222500,
        seats: 120,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 22.80,
        medianPackage: 18.20,
        highestPackage: 150.00,
        placementPct: 89.0,
        topRecruiters: ['Microsoft', 'Tower Research', 'DE Shaw', 'Amazon', 'Intel', 'Bain & Co', 'Google']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'GEN', roundNo: 6, openingRank: 25, closingRank: 116, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555504',
    name: 'Birla Institute of Technology and Science, Pilani',
    shortName: 'BITS Pilani',
    slug: 'bits-pilani',
    city: 'Pilani',
    state: 'Rajasthan',
    ownership: 'Deemed',
    establishedYear: 1964,
    website: 'https://www.bits-pilani.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=500&fit=crop',
    description: 'Premier autonomous technical university celebrated for its zero mandatory attendance policy, structured 6-month Practice School corporate internship program, and top-tier alumni network across Silicon Valley and Indian startups.',
    campusSizeAcres: 330,
    accreditation: 'Institute of Eminence (IoE), NAAC A',
    approvedBy: 'UGC',
    nirfRank: 20,
    nirfScore: 60.12,
    rating: 4.7,
    reviewCount: 340,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['BITSAT'],
    facilities: ['Practice School Program', 'B-Dome Iconic Clock Tower', 'Innovation & Maker Labs', 'Student Activity Center', 'High-Speed Residential Campus'],
    courses: [
      {
        id: 'cc-07',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.E. in Computer Science',
        feesTotal: 1980000,
        feesAnnual: 495000,
        seats: 240,
        durationYears: 4.0,
        degreeType: 'B.E.'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 19.80,
        medianPackage: 16.00,
        highestPackage: 60.75,
        placementPct: 87.0,
        topRecruiters: ['Cisco', 'Oracle', 'JPMorgan Chase', 'Samsung R&D', 'Adobe', 'Amazon', 'Media.net']
      }
    ],
    cutoffs: [
      { courseName: 'B.E. CSE', examName: 'BITSAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 330, closingRank: 338, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555505',
    name: 'Indian Institute of Management Ahmedabad',
    shortName: 'IIM Ahmedabad',
    slug: 'iim-ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    ownership: 'Government',
    establishedYear: 1961,
    website: 'https://www.iima.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=500&fit=crop',
    description: 'The pinnacle of business education in India. Ranked #1 in NIRF Management. Known for intensive Harvard case pedagogy, Louis Kahn red-brick architecture, and unmatched placement recruitment in management consulting, private equity, and investment banking.',
    campusSizeAcres: 106,
    accreditation: 'EQUIS, AACSB Accredited',
    approvedBy: 'MHRD, MoE',
    nirfRank: 1,
    nirfScore: 83.20,
    rating: 4.9,
    reviewCount: 310,
    isFeatured: true,
    streamSlugs: ['management'],
    acceptedExams: ['CAT', 'GMAT'],
    facilities: ['Vikram Sarabhai Library', 'Louis Kahn Plaza', 'CIIE.CO Startup Incubator', 'Executive Dormitories', 'Modern Case-Discussion Amphitheatres'],
    courses: [
      {
        id: 'cc-08',
        courseId: '33333333-3333-3333-3333-333333333304',
        name: 'Post Graduate Programme in Management (MBA Equivalent)',
        specialization: 'General Management & Strategy',
        feesTotal: 2500000,
        feesAnnual: 1250000,
        seats: 395,
        durationYears: 2.0,
        degreeType: 'PGDM / MBA'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 34.36,
        medianPackage: 31.50,
        highestPackage: 115.00,
        placementPct: 100.0,
        topRecruiters: ['McKinsey & Co', 'BCG', 'Bain & Company', 'Goldman Sachs', 'Blackstone', 'Avendus Capital', 'Tata Sons']
      }
    ],
    cutoffs: [
      { courseName: 'PGP Management', examName: 'CAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 99, closingRank: 100, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555506',
    name: 'Indian Institute of Management Bangalore',
    shortName: 'IIM Bangalore',
    slug: 'iim-bangalore',
    city: 'Bengaluru',
    state: 'Karnataka',
    ownership: 'Government',
    establishedYear: 1973,
    website: 'https://www.iimb.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Renowned for its granite stone architecture designed by B.V. Doshi, IIM Bangalore excels in product management, data science, strategy, and tech venture incubation at NSRCEL.',
    campusSizeAcres: 100,
    accreditation: 'EQUIS Accredited',
    approvedBy: 'MoE',
    nirfRank: 2,
    nirfScore: 80.52,
    rating: 4.9,
    reviewCount: 280,
    isFeatured: true,
    streamSlugs: ['management'],
    acceptedExams: ['CAT', 'GMAT'],
    facilities: ['NSRCEL Incubation Center', 'State-of-the-Art Bloomberg Financial Terminals', 'Stone Architecture Courtyards', 'Executive Accommodation', 'Green Canopy Trails'],
    courses: [
      {
        id: 'cc-09',
        courseId: '33333333-3333-3333-3333-333333333304',
        name: 'Master of Business Administration (MBA)',
        feesTotal: 2450000,
        feesAnnual: 1225000,
        seats: 480,
        durationYears: 2.0,
        degreeType: 'MBA'
      },
      {
        id: 'cc-10',
        courseId: '33333333-3333-3333-3333-333333333305',
        name: 'MBA in Business Analytics',
        feesTotal: 2450000,
        feesAnnual: 1225000,
        seats: 75,
        durationYears: 2.0,
        degreeType: 'MBA'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 35.31,
        medianPackage: 33.00,
        highestPackage: 110.00,
        placementPct: 100.0,
        topRecruiters: ['Kearney', 'Strategy&', 'Accenture Strategy', 'Amazon', 'Microsoft', 'Morgan Stanley', 'Info Edge']
      }
    ],
    cutoffs: [
      { courseName: 'MBA', examName: 'CAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 99, closingRank: 99, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555507',
    name: 'All India Institute of Medical Sciences, New Delhi',
    shortName: 'AIIMS Delhi',
    slug: 'aiims-new-delhi',
    city: 'New Delhi',
    state: 'Delhi NCR',
    ownership: 'Government',
    establishedYear: 1956,
    website: 'https://www.aiims.edu',
    logoUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=500&fit=crop',
    description: 'The supreme authority in Indian medical education and tertiary patient care. Features negligible academic fees (subsidized by central government), unparalleled clinical patient exposure, and cutting-edge surgical robotics.',
    campusSizeAcres: 115,
    accreditation: 'Institute of National Importance (INI)',
    approvedBy: 'NMC, MoHFW',
    nirfRank: 1,
    nirfScore: 91.22,
    rating: 4.9,
    reviewCount: 490,
    isFeatured: true,
    streamSlugs: ['medical'],
    acceptedExams: ['NEET UG', 'INI-CET'],
    facilities: ['2500+ Bedded Tertiary Hospital', 'Trauma Centre', 'Advanced Genomics Lab', 'Robotic Surgery Theater', 'Doctoral Hostels'],
    courses: [
      {
        id: 'cc-11',
        courseId: '33333333-3333-3333-3333-333333333306',
        name: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
        feesTotal: 7500,
        feesAnnual: 1500,
        seats: 125,
        durationYears: 5.5,
        degreeType: 'MBBS'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 18.00,
        medianPackage: 16.50,
        highestPackage: 35.00,
        placementPct: 100.0,
        topRecruiters: ['AIIMS Internal Residency', 'NHS UK', 'USMLE Fellowships', 'Max Healthcare', 'Fortis Clinical']
      }
    ],
    cutoffs: [
      { courseName: 'MBBS', examName: 'NEET UG', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1, closingRank: 57, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555508',
    name: 'National Law School of India University',
    shortName: 'NLSIU Bengaluru',
    slug: 'nlsiu-bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    ownership: 'Government',
    establishedYear: 1987,
    website: 'https://www.nls.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=500&fit=crop',
    description: 'Consistently ranked #1 in Law by NIRF. Known as the crown jewel of legal education in South Asia, NLSIU pioneered the 5-year integrated BA LLB format and dominates international Jessup moot court competitions.',
    campusSizeAcres: 23,
    accreditation: 'BCI Recognised, UGC Category 1',
    approvedBy: 'Bar Council of India',
    nirfRank: 1,
    nirfScore: 80.52,
    rating: 4.8,
    reviewCount: 175,
    isFeatured: true,
    streamSlugs: ['law'],
    acceptedExams: ['CLAT'],
    facilities: ['Narayan Rao Melgiri National Law Library', 'Moot Court Auditoriums', 'Legal Aid Clinic', 'Hostels with High-Speed LAN', 'Sports Complex'],
    courses: [
      {
        id: 'cc-12',
        courseId: '33333333-3333-3333-3333-333333333307',
        name: 'B.A. LL.B. (Honours)',
        feesTotal: 1600000,
        feesAnnual: 320000,
        seats: 300,
        durationYears: 5.0,
        degreeType: 'B.A. LL.B.'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 17.20,
        medianPackage: 16.00,
        highestPackage: 32.00,
        placementPct: 96.0,
        topRecruiters: ['Shardul Amarchand Mangaldas', 'Trilegal', 'AZB & Partners', 'Khaitan & Co', 'Cyril Amarchand Mangaldas', 'Linklaters London']
      }
    ],
    cutoffs: [
      { courseName: 'B.A. LL.B. (Hons)', examName: 'CLAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1, closingRank: 114, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555509',
    name: 'National Institute of Design Ahmedabad',
    shortName: 'NID Ahmedabad',
    slug: 'nid-ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    ownership: 'Government',
    establishedYear: 1961,
    website: 'https://www.nid.edu',
    logoUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=500&fit=crop',
    description: 'Internationally acclaimed apex design institution instituted following the seminal Eames Report. Known for hands-on studio pedagogy, material exploration, ergonomics, and digital interaction design.',
    campusSizeAcres: 20,
    accreditation: 'Institute of National Importance',
    approvedBy: 'DPIIT, Ministry of Commerce',
    nirfRank: 1,
    nirfScore: 75.30,
    rating: 4.8,
    reviewCount: 140,
    isFeatured: true,
    streamSlugs: ['design'],
    acceptedExams: ['NID DAT'],
    facilities: ['Prototyping & 3D Fabrication Studio', 'Ceramics & Glass Center', 'Textile Printing Studio', 'Usability & Eye-tracking Lab', 'Knowledge Management Centre'],
    courses: [
      {
        id: 'cc-13',
        courseId: '33333333-3333-3333-3333-333333333308',
        name: 'Bachelor of Design in Interaction Design & Industrial Design',
        feesTotal: 1140000,
        feesAnnual: 285000,
        seats: 125,
        durationYears: 4.0,
        degreeType: 'B.Des'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 14.50,
        medianPackage: 12.00,
        highestPackage: 36.00,
        placementPct: 92.0,
        topRecruiters: ['Google UX', 'Samsung Design Delhi', 'Microsoft Studio India', 'Tata Motors Design', 'IKEA', 'Cognizant Interactive']
      }
    ],
    cutoffs: [
      { courseName: 'B.Des', examName: 'NID DAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1, closingRank: 52, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555510',
    name: 'Vellore Institute of Technology',
    shortName: 'VIT Vellore',
    slug: 'vit-vellore',
    city: 'Vellore',
    state: 'Tamil Nadu',
    ownership: 'Private',
    establishedYear: 1984,
    website: 'https://vit.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Premier private technology university celebrated for flexible credit system (FFCS), ABET engineering accreditation, global semester exchange, and recording some of India’s largest corporate campus recruitment drives.',
    campusSizeAcres: 372,
    accreditation: 'NAAC A++, ABET Accredited',
    approvedBy: 'AICTE, UGC',
    nirfRank: 11,
    nirfScore: 65.51,
    rating: 4.4,
    reviewCount: 820,
    isFeatured: false,
    streamSlugs: ['engineering'],
    acceptedExams: ['VITEEE', 'JEE Main'],
    facilities: ['Smart Classrooms', 'International Food Court', 'High-Speed Computing Labs', 'Multi-level Central Library', 'Indoor Sports Stadium'],
    courses: [
      {
        id: 'cc-14',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        feesTotal: 780000,
        feesAnnual: 195000,
        seats: 1200,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 9.90,
        medianPackage: 8.00,
        highestPackage: 102.00,
        placementPct: 82.4,
        topRecruiters: ['Microsoft', 'Amazon', 'TCS Ninja/Digital', 'Infosys', 'Deloitte', 'Cognizant', 'Wipro Turbo']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Main', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1000, closingRank: 7500, quota: 'All India' }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    collegeId: '55555555-5555-5555-5555-555555555502',
    collegeName: 'IIT Bombay',
    reviewerName: 'Rohit Sen',
    courseName: 'B.Tech Computer Science',
    graduationYear: 2024,
    ratingOverall: 4.9,
    ratingInfrastructure: 4.8,
    ratingFaculty: 4.9,
    ratingPlacements: 5.0,
    ratingCampusLife: 5.0,
    title: 'Life-changing experience with unmatched opportunities and culture',
    pros: 'The peer group is undeniably the best in India. You learn just as much from late night hostel debates as you do in lecture halls. Highest placement compensation globally, active maker spaces (Mars Rover, Formula Student), and Mood Indigo fest.',
    cons: 'Academic pressure can become intense during midterms. The humid Mumbai weather takes some getting used to if coming from North India.',
    createdAt: '2025-08-14'
  },
  {
    id: 'rev-02',
    collegeId: '55555555-5555-5555-5555-555555555505',
    collegeName: 'IIM Ahmedabad',
    reviewerName: 'Ananya Deshmukh',
    courseName: 'PGP Management',
    graduationYear: 2023,
    ratingOverall: 4.9,
    ratingInfrastructure: 4.9,
    ratingFaculty: 5.0,
    ratingPlacements: 5.0,
    ratingCampusLife: 4.7,
    title: 'The gold standard of business and leadership education',
    pros: 'The case pedagogy forces you to put yourself in the shoes of Fortune 500 CEOs daily. WAC assignments are legendary for building razor-sharp communication. Alumni responsiveness is near 100%.',
    cons: 'Term 1 is brutally rigorous with virtually 3-4 hours of sleep per night.',
    createdAt: '2025-09-02'
  },
  {
    id: 'rev-03',
    collegeId: '55555555-5555-5555-5555-555555555501',
    collegeName: 'IIT Madras',
    reviewerName: 'Karthik Raja',
    courseName: 'B.Tech CSE',
    graduationYear: 2024,
    ratingOverall: 4.8,
    ratingInfrastructure: 5.0,
    ratingFaculty: 4.8,
    ratingPlacements: 4.9,
    ratingCampusLife: 4.7,
    title: 'Serene green sanctuary with exceptional incubation support',
    pros: 'IITM Research Park has no equivalent in India. Watching deer and monkeys while heading to high-performance computing labs is surreal. Faculty members are deeply connected with industry consulting.',
    cons: 'Hostel mess food can take a little time to adjust to if you have specific regional dietary preferences.',
    createdAt: '2025-10-18'
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 'q-01',
    collegeId: '55555555-5555-5555-5555-555555555502',
    collegeName: 'IIT Bombay',
    streamSlug: 'engineering',
    authorName: 'Aditya Verma',
    title: 'What JEE Advanced rank is practically needed for IIT Bombay CSE in OBC category?',
    body: 'I scored well in coaching mock tests and am estimating around AIR 60-70 in OBC category. Does IIT Bombay CSE close before that in JoSAA round 6?',
    upvotes: 24,
    answersCount: 1,
    createdAt: '2025-11-04',
    answers: [
      {
        id: 'ans-01',
        questionId: 'q-01',
        authorName: 'Aryan Nair (IITB 3rd Year)',
        authorBadge: 'Verified Student',
        body: 'For IIT Bombay Computer Science, the OBC category closing rank in Round 6 of JoSAA typically stays within AIR 50 to 65. If you secure under AIR 55 in OBC, you are in a safe zone!',
        upvotes: 19,
        isVerified: true,
        createdAt: '2025-11-05'
      }
    ]
  },
  {
    id: 'q-02',
    collegeId: '55555555-5555-5555-5555-555555555505',
    collegeName: 'IIM Ahmedabad',
    streamSlug: 'management',
    authorName: 'Priya Kulkarni',
    title: 'Does IIM Ahmedabad shortlist non-engineers with 98.5 percentile in CAT?',
    body: 'I hold a B.Com degree with 90%+ in Class 10 and 12. How much academic diversity benefit does IIMA grant in stage 1 shortlisting?',
    upvotes: 38,
    answersCount: 1,
    createdAt: '2025-11-12',
    answers: [
      {
        id: 'ans-02',
        questionId: 'q-02',
        authorName: 'Rohan Mehta (IIMA PGP2)',
        authorBadge: 'Alumni',
        body: 'Yes! Non-engineers fall into Academic Category AC-4. Because of the diversity multiplier, a 98.5+ with consistent 90/90 academics stands a very high chance of getting the WAT-PI call.',
        upvotes: 27,
        isVerified: true,
        createdAt: '2025-11-12'
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'JEE Main 2027 Registration Schedule & Blueprint: Step-by-Step Guide',
    slug: 'jee-main-2027-registration-blueprint',
    streamSlug: 'engineering',
    category: 'Exam Updates',
    summary: 'NTA releases official timeline for Session 1. Learn key changes in registration, exam center biometric rules, and preparation milestones.',
    content: 'The National Testing Agency (NTA) has officially released the schedule for the Joint Entrance Examination (Main) 2027 Session 1. Aspiring candidates can fill out the online application forms starting November 2026. The key changes this year include strict Aadhaar verification and unified exam centers.',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop',
    authorName: 'Dr. Ramesh Sharma',
    readTimeMinutes: 5,
    publishedAt: '2026-10-01'
  },
  {
    id: 'art-02',
    title: 'CAT 2026 Strategy: How to Score 99+ Percentile in VARC & DILR',
    slug: 'cat-2026-strategy-99-percentile-varc-dilr',
    streamSlug: 'management',
    category: 'Preparation',
    summary: 'Tactical breakdown of time management, passage reading techniques, and set selection for securing IIM Blacki shortlists.',
    content: 'Cracking the CAT exam requires a nuanced approach where accuracy beats volume. For VARC, reading diverse subjects like philosophy, sociology, and economics develops speed. In DILR, spending the first 8 minutes scanning all 4 sets is the single biggest differentiator.',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=450&fit=crop',
    authorName: 'Tanvi Mathur (CAT 99.89)',
    readTimeMinutes: 7,
    publishedAt: '2026-09-24'
  },
  {
    id: 'art-03',
    title: 'NIRF Rankings 2025 Breakdown: Top Engineering, Medical & B-Schools',
    slug: 'nirf-rankings-2025-top-institutes-breakdown',
    streamSlug: 'engineering',
    category: 'Rankings',
    summary: 'Ministry of Education reveals NIRF 2025. IIT Madras, IIM Ahmedabad, and AIIMS New Delhi continue supreme reign at rank #1.',
    content: 'The Ministry of Education released the National Institutional Ranking Framework (NIRF) 2025 rankings today. IIT Madras bagged the first position in the Overall category for the sixth consecutive year, while IIM Ahmedabad continues its supremacy in Management studies.',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=450&fit=crop',
    authorName: 'EduFlex Editorial Desk',
    readTimeMinutes: 4,
    publishedAt: '2026-09-15'
  }
];
