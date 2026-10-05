import { College } from '@/types';

export const ONBOARD_COLLEGES: College[] = [
  // ==========================================
  // ENGINEERING COLLEGES
  // ==========================================
  {
    id: '55555555-5555-5555-5555-555555555511',
    name: 'Indian Institute of Technology Kanpur',
    shortName: 'IIT Kanpur',
    slug: 'iit-kanpur',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    ownership: 'Government',
    establishedYear: 1959,
    website: 'https://www.iitk.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'IIT Kanpur is renowned for pioneering computer science education in India, housing the National Cyber Security Hub C3iHub, aerospace flight test laboratory, and world-leading research in quantum computing.',
    campusSizeAcres: 1055,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    approvedBy: 'AICTE, UGC',
    nirfRank: 4,
    nirfScore: 82.56,
    rating: 4.8,
    reviewCount: 395,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Advanced', 'GATE'],
    facilities: ['Airstrip & Flight Lab', 'National Cyber Security Hub', 'Supercomputer Center', 'Modern Hostels', 'Olympic Sports Complex'],
    courses: [
      {
        id: 'cc-15',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        specialization: 'Systems, Quantum & AI',
        feesTotal: 840000,
        feesAnnual: 210000,
        seats: 130,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 26.27,
        medianPackage: 22.07,
        highestPackage: 190.00,
        placementPct: 91.5,
        topRecruiters: ['Google', 'Jane Street', 'Microsoft', 'Databricks', 'Rubrik', 'Texas Instruments']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'GEN', roundNo: 6, openingRank: 125, closingRank: 248, quota: 'All India' },
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'OBC', roundNo: 6, openingRank: 65, closingRank: 142, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555512',
    name: 'Indian Institute of Technology Kharagpur',
    shortName: 'IIT Kharagpur',
    slug: 'iit-kharagpur',
    city: 'Kharagpur',
    state: 'West Bengal',
    ownership: 'Government',
    establishedYear: 1951,
    website: 'https://www.iitkgp.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'The first and largest IIT established in India, spanning over 2,100 acres. Offers diverse programs across engineering, law (RGSOIPL), medical science (Dr. BC Roy Institute), and business (VGSoM).',
    campusSizeAcres: 2100,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    approvedBy: 'AICTE, UGC',
    nirfRank: 5,
    nirfScore: 78.89,
    rating: 4.7,
    reviewCount: 512,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Advanced', 'GATE'],
    facilities: ['Param Shakti Supercomputer', 'Nehru Museum of Science', 'Multi-speciality Hospital', 'Techno-Commercial Park'],
    courses: [
      {
        id: 'cc-16',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        feesTotal: 850000,
        feesAnnual: 212500,
        seats: 95,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 22.80,
        medianPackage: 19.50,
        highestPackage: 152.00,
        placementPct: 89.2,
        topRecruiters: ['Apple', 'Qualcomm', 'Amazon', 'Goldman Sachs', 'ITC', 'TSMC']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'GEN', roundNo: 6, openingRank: 190, closingRank: 414, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555513',
    name: 'Indian Institute of Technology Roorkee',
    shortName: 'IIT Roorkee',
    slug: 'iit-roorkee',
    city: 'Roorkee',
    state: 'Uttarakhand',
    ownership: 'Government',
    establishedYear: 1847,
    website: 'https://www.iitr.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Originally founded as Thomason College of Civil Engineering in 1847, it is Asia’s oldest technical institution. Renowned for earthquake engineering, hydrology, computer science, and renewable energy.',
    campusSizeAcres: 365,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    approvedBy: 'AICTE, UGC',
    nirfRank: 6,
    nirfScore: 76.29,
    rating: 4.7,
    reviewCount: 380,
    isFeatured: false,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Advanced', 'GATE'],
    facilities: ['Earthquake Simulator', 'Param Ganga Supercomputing', 'Mahatma Gandhi Central Library', 'Student Activity Center'],
    courses: [
      {
        id: 'cc-17',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        feesTotal: 850000,
        feesAnnual: 212500,
        seats: 110,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 21.50,
        medianPackage: 18.20,
        highestPackage: 130.00,
        placementPct: 88.0,
        topRecruiters: ['Google', 'Microsoft', 'NVIDIA', 'Tower Research', 'Oracle', 'Schlumberger']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Advanced', year: 2025, category: 'GEN', roundNo: 6, openingRank: 220, closingRank: 412, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555514',
    name: 'National Institute of Technology Tiruchirappalli',
    shortName: 'NIT Trichy',
    slug: 'nit-trichy',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    ownership: 'Government',
    establishedYear: 1964,
    website: 'https://www.nitt.edu',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Consistently ranked the #1 National Institute of Technology in India by NIRF. Celebrated for industry research tie-ups, exemplary academic rigor, and stellar placements in software and manufacturing.',
    campusSizeAcres: 800,
    accreditation: 'Institute of National Importance, NAAC A++',
    approvedBy: 'AICTE, MoE',
    nirfRank: 9,
    nirfScore: 69.71,
    rating: 4.6,
    reviewCount: 460,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Main', 'DASA'],
    facilities: ['Octagon Computer Center', 'Siemens Center of Excellence', 'Central Library', 'Indoor Sports Complex'],
    courses: [
      {
        id: 'cc-18',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        feesTotal: 550000,
        feesAnnual: 137500,
        seats: 120,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 17.80,
        medianPackage: 15.00,
        highestPackage: 52.89,
        placementPct: 93.5,
        topRecruiters: ['Microsoft', 'Amazon', 'Morgan Stanley', 'DE Shaw', 'Samsung R&D', 'Qualcomm']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Main', year: 2025, category: 'GEN', roundNo: 6, openingRank: 1200, closingRank: 4500, quota: 'Other State' },
      { courseName: 'B.Tech CSE', examName: 'JEE Main', year: 2025, category: 'OBC', roundNo: 6, openingRank: 800, closingRank: 1900, quota: 'Other State' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555515',
    name: 'National Institute of Technology Karnataka, Surathkal',
    shortName: 'NIT Surathkal',
    slug: 'nit-surathkal',
    city: 'Surathkal',
    state: 'Karnataka',
    ownership: 'Government',
    establishedYear: 1960,
    website: 'https://www.nitk.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Premier coastal NIT featuring its own private Arabian Sea beach and lighthouse. Known for exceptional coding culture, high-throughput computational laboratories, and aerospace metallurgy.',
    campusSizeAcres: 295,
    accreditation: 'Institute of National Importance, NAAC A++',
    approvedBy: 'AICTE, MoE',
    nirfRank: 12,
    nirfScore: 65.26,
    rating: 4.6,
    reviewCount: 410,
    isFeatured: false,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Main', 'DASA'],
    facilities: ['Private Beach & Lighthouse', 'Central Research Facility', 'High Performance Data Center', 'Open Air Theatre'],
    courses: [
      {
        id: 'cc-19',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        feesTotal: 560000,
        feesAnnual: 140000,
        seats: 115,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 16.40,
        medianPackage: 14.50,
        highestPackage: 54.00,
        placementPct: 91.0,
        topRecruiters: ['Google', 'Atlassian', 'Uber', 'Cisco', 'Goldman Sachs', 'Intuit']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Main', year: 2025, category: 'GEN', roundNo: 6, openingRank: 950, closingRank: 3400, quota: 'Other State' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555516',
    name: 'International Institute of Information Technology, Hyderabad',
    shortName: 'IIIT Hyderabad',
    slug: 'iiit-hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    ownership: 'Private',
    establishedYear: 1998,
    website: 'https://www.iiit.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'India’s foremost research university in Artificial Intelligence, Computer Vision, Language Technologies, and Robotics. Students publish in top global conferences like CVPR, NeurIPS, and ACL while still undergraduates.',
    campusSizeAcres: 66,
    accreditation: 'NAAC A++, Autonomous Not-for-Profit',
    approvedBy: 'AICTE, UGC',
    nirfRank: 55,
    nirfScore: 54.21,
    rating: 4.9,
    reviewCount: 320,
    isFeatured: true,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Main', 'UGEE'],
    facilities: ['Kohli Center on Intelligent Systems', 'Robotics Research Center', 'CIE Startup Incubator', 'T-Hub Proximity'],
    courses: [
      {
        id: 'cc-20',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Science & Engineering',
        feesTotal: 1800000,
        feesAnnual: 450000,
        seats: 150,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 32.00,
        medianPackage: 29.50,
        highestPackage: 102.00,
        placementPct: 98.5,
        topRecruiters: ['Apple', 'Bloomberg', 'Meta', 'Google', 'Tower Research', 'Rubrik', 'Uber']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Main', year: 2025, category: 'GEN', roundNo: 1, openingRank: 250, closingRank: 1850, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555517',
    name: 'Delhi Technological University',
    shortName: 'DTU Delhi',
    slug: 'dtu-delhi',
    city: 'New Delhi',
    state: 'Delhi',
    ownership: 'Government',
    establishedYear: 1941,
    website: 'http://www.dtu.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Formerly Delhi College of Engineering (DCE), DTU is one of India’s most historic engineering colleges. Known for vibrant tech teams (Defianz Racing, UAS-DTU), colossal placement numbers, and illustrious alumni in civil services and unicorn startups.',
    campusSizeAcres: 164,
    accreditation: 'State University, NAAC A',
    approvedBy: 'UGC, AICTE',
    nirfRank: 29,
    nirfScore: 57.34,
    rating: 4.5,
    reviewCount: 650,
    isFeatured: false,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Main', 'JAC Delhi'],
    facilities: ['Automotive Research Center', 'Open-Air Amphitheatre', 'Indoor Gymnasium', 'Library with 300k+ Books'],
    courses: [
      {
        id: 'cc-21',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Engineering',
        feesTotal: 780000,
        feesAnnual: 195000,
        seats: 480,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 16.50,
        medianPackage: 14.00,
        highestPackage: 82.50,
        placementPct: 87.5,
        topRecruiters: ['Microsoft', 'Amazon', 'Google', 'Adobe', 'Bain & Company', 'Sprinklr']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Main', year: 2025, category: 'GEN', roundNo: 5, openingRank: 1800, closingRank: 8500, quota: 'Delhi Region' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555518',
    name: 'Thapar Institute of Engineering and Technology',
    shortName: 'Thapar Patiala',
    slug: 'thapar-patiala',
    city: 'Patiala',
    state: 'Punjab',
    ownership: 'Private',
    establishedYear: 1956,
    website: 'https://www.thapar.edu',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Premier Deemed-to-be University established in 1956 in collaboration with Trinity College Dublin. Features an expansive lush green campus, modern research parks, and exceptional placement conversion.',
    campusSizeAcres: 250,
    accreditation: 'NAAC A+, Deemed University',
    approvedBy: 'AICTE, UGC',
    nirfRank: 20,
    nirfScore: 61.12,
    rating: 4.3,
    reviewCount: 520,
    isFeatured: false,
    streamSlugs: ['engineering'],
    acceptedExams: ['JEE Main'],
    facilities: ['Trinity Academic Hub', 'Nava Nalanda Library', 'Modern Hostels', 'Sports Arena'],
    courses: [
      {
        id: 'cc-22',
        courseId: '33333333-3333-3333-3333-333333333301',
        name: 'B.Tech in Computer Engineering',
        feesTotal: 1650000,
        feesAnnual: 412500,
        seats: 600,
        durationYears: 4.0,
        degreeType: 'B.Tech'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 11.90,
        medianPackage: 10.00,
        highestPackage: 55.00,
        placementPct: 84.0,
        topRecruiters: ['JPMorgan Chase', 'Zomato', 'Deloitte', 'Apple', 'Schneider Electric', 'IBM']
      }
    ],
    cutoffs: [
      { courseName: 'B.Tech CSE', examName: 'JEE Main', year: 2025, category: 'GEN', roundNo: 1, openingRank: 12000, closingRank: 24000, quota: 'All India' }
    ]
  },

  // ==========================================
  // MANAGEMENT (MBA) COLLEGES
  // ==========================================
  {
    id: '55555555-5555-5555-5555-555555555519',
    name: 'Indian Institute of Management Calcutta',
    shortName: 'IIM Calcutta',
    slug: 'iim-calcutta',
    city: 'Kolkata',
    state: 'West Bengal',
    ownership: 'Government',
    establishedYear: 1961,
    website: 'https://www.iimcal.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'The first IIM established in India, holding Triple Crown accreditation (AACSB, AMBA, EQUIS). Revered globally as the undisputed "Finance Campus of Asia" with the highest representation on Wall Street and London banks.',
    campusSizeAcres: 135,
    accreditation: 'Triple Crown (AACSB, AMBA, EQUIS)',
    approvedBy: 'AICTE, MoE',
    nirfRank: 3,
    nirfScore: 78.43,
    rating: 4.9,
    reviewCount: 310,
    isFeatured: true,
    streamSlugs: ['management'],
    acceptedExams: ['CAT', 'GMAT'],
    facilities: ['Financial Research Trading Lab', '7 Iconic Lakes Campus', 'Management Center for Human Values', 'Executive Hostels'],
    courses: [
      {
        id: 'cc-23',
        courseId: '33333333-3333-3333-3333-333333333304',
        name: 'Master of Business Administration (MBA)',
        feesTotal: 2700000,
        feesAnnual: 1350000,
        seats: 460,
        durationYears: 2.0,
        degreeType: 'MBA'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 35.07,
        medianPackage: 33.67,
        highestPackage: 115.00,
        placementPct: 100.0,
        topRecruiters: ['Goldman Sachs', 'Morgan Stanley', 'McKinsey & Co', 'BCG', 'Bain & Co', 'Avendus Capital']
      }
    ],
    cutoffs: [
      { courseName: 'MBA', examName: 'CAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1, closingRank: 120, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555520',
    name: 'Faculty of Management Studies, University of Delhi',
    shortName: 'FMS Delhi',
    slug: 'fms-delhi',
    city: 'New Delhi',
    state: 'Delhi',
    ownership: 'Government',
    establishedYear: 1954,
    website: 'http://fms.edu',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Universally hailed as the greatest ROI (Return on Investment) business school in the world. With tuition fees under ₹2 Lakhs for the complete 2-year MBA, its graduates secure average starting compensation exceeding ₹34 LPA.',
    campusSizeAcres: 5,
    accreditation: 'Central University Faculty',
    approvedBy: 'UGC, AICTE',
    nirfRank: 35,
    nirfScore: 56.40,
    rating: 4.9,
    reviewCount: 290,
    isFeatured: true,
    streamSlugs: ['management'],
    acceptedExams: ['CAT'],
    facilities: ['Delhi University North Campus Access', 'Bloomberg Terminal Lab', 'Auditorium', 'Corporate Seminar Suites'],
    courses: [
      {
        id: 'cc-24',
        courseId: '33333333-3333-3333-3333-333333333304',
        name: 'Master of Business Administration (Full Time)',
        feesTotal: 200000,
        feesAnnual: 100000,
        seats: 251,
        durationYears: 2.0,
        degreeType: 'MBA'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 34.10,
        medianPackage: 31.00,
        highestPackage: 123.00,
        placementPct: 100.0,
        topRecruiters: ['Hindustan Unilever', 'ITC', 'Boston Consulting Group', 'Microsoft', 'Amazon', 'Procter & Gamble']
      }
    ],
    cutoffs: [
      { courseName: 'MBA', examName: 'CAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 15, closingRank: 180, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555521',
    name: 'XLRI Xavier School of Management',
    shortName: 'XLRI Jamshedpur',
    slug: 'xlri-jamshedpur',
    city: 'Jamshedpur',
    state: 'Jharkhand',
    ownership: 'Private',
    establishedYear: 1949,
    website: 'https://xlri.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'India’s oldest business school, founded in 1949. Unquestioned national leader in Human Resource Management (HRM) and General Business Management (BM), with AACSB and AMBA credentials.',
    campusSizeAcres: 50,
    accreditation: 'AACSB, AMBA, NBA',
    approvedBy: 'AICTE',
    nirfRank: 9,
    nirfScore: 71.02,
    rating: 4.8,
    reviewCount: 340,
    isFeatured: false,
    streamSlugs: ['management'],
    acceptedExams: ['XAT', 'GMAT'],
    facilities: ['Tata Auditorium', 'Sir Jehangir Ghandy Library', 'International Center', 'Jesuit Heritage Campus'],
    courses: [
      {
        id: 'cc-25',
        courseId: '33333333-3333-3333-3333-333333333304',
        name: 'PGDM in Human Resource Management',
        feesTotal: 2800000,
        feesAnnual: 1400000,
        seats: 180,
        durationYears: 2.0,
        degreeType: 'PGDM'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 32.70,
        medianPackage: 30.00,
        highestPackage: 110.00,
        placementPct: 100.0,
        topRecruiters: ['PwC Strategy&', 'Accenture Strategy', 'Amazon', 'Nestle', 'TAS', 'Kearney']
      }
    ],
    cutoffs: [
      { courseName: 'PGDM', examName: 'CAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 50, closingRank: 350, quota: 'All India' }
    ]
  },

  // ==========================================
  // MEDICAL (MBBS) COLLEGES
  // ==========================================
  {
    id: '55555555-5555-5555-5555-555555555522',
    name: 'Christian Medical College',
    shortName: 'CMC Vellore',
    slug: 'cmc-vellore',
    city: 'Vellore',
    state: 'Tamil Nadu',
    ownership: 'Private',
    establishedYear: 1900,
    website: 'https://www.cmch-vellore.edu',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'One of the most celebrated charitable healthcare and medical education teaching hospitals in the world. Performed India’s first open-heart surgery, first kidney transplant, and first bone marrow transplant.',
    campusSizeAcres: 200,
    accreditation: 'NABH, NABL, NAAC A',
    approvedBy: 'NMC, MoHFW',
    nirfRank: 3,
    nirfScore: 75.33,
    rating: 4.9,
    reviewCount: 310,
    isFeatured: true,
    streamSlugs: ['medical'],
    acceptedExams: ['NEET UG'],
    facilities: ['2800+ Bed Teaching Hospital', 'Ranipet Super-Specialty Campus', 'Advanced Virology Institute', 'Clinical Simulation Labs'],
    courses: [
      {
        id: 'cc-26',
        courseId: '33333333-3333-3333-3333-333333333306',
        name: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
        feesTotal: 153000,
        feesAnnual: 34000,
        seats: 100,
        durationYears: 5.5,
        degreeType: 'MBBS'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 18.00,
        medianPackage: 16.50,
        highestPackage: 28.00,
        placementPct: 100.0,
        topRecruiters: ['Apollo Hospitals', 'Fortis', 'Max Healthcare', 'NHS UK', 'AIIMS Residency']
      }
    ],
    cutoffs: [
      { courseName: 'MBBS', examName: 'NEET UG', year: 2025, category: 'GEN', roundNo: 1, openingRank: 15, closingRank: 180, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555523',
    name: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
    shortName: 'JIPMER',
    slug: 'jipmer-puducherry',
    city: 'Puducherry',
    state: 'Puducherry',
    ownership: 'Government',
    establishedYear: 1823,
    website: 'https://jipmer.edu.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Institute of National Importance operating under the Ministry of Health and Family Welfare. Offers world-class subsidized tertiary clinical care, robotics surgery, and pioneering medical education.',
    campusSizeAcres: 195,
    accreditation: 'Institute of National Importance (INI)',
    approvedBy: 'MoHFW, NMC',
    nirfRank: 5,
    nirfScore: 72.10,
    rating: 4.8,
    reviewCount: 290,
    isFeatured: false,
    streamSlugs: ['medical'],
    acceptedExams: ['NEET UG'],
    facilities: ['Regional Cancer Centre', 'Superspecialty Block', 'Advanced Trauma Care', 'Residential Campus'],
    courses: [
      {
        id: 'cc-27',
        courseId: '33333333-3333-3333-3333-333333333306',
        name: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
        feesTotal: 50000,
        feesAnnual: 11000,
        seats: 150,
        durationYears: 5.5,
        degreeType: 'MBBS'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 19.00,
        medianPackage: 18.00,
        highestPackage: 30.00,
        placementPct: 100.0,
        topRecruiters: ['AIIMS New Delhi', 'PGIMER', 'Cleveland Clinic', 'NHS UK', 'Medanta']
      }
    ],
    cutoffs: [
      { courseName: 'MBBS', examName: 'NEET UG', year: 2025, category: 'GEN', roundNo: 1, openingRank: 35, closingRank: 220, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555524',
    name: 'Maulana Azad Medical College',
    shortName: 'MAMC Delhi',
    slug: 'mamc-delhi',
    city: 'New Delhi',
    state: 'Delhi',
    ownership: 'Government',
    establishedYear: 1958,
    website: 'http://mamc.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Attached to four major hospitals in central Delhi (Lok Nayak, GB Pant, Guru Nanak Eye, and Chacha Nehru Bal Chikitsalaya) with a combined 2,800 bed strength providing unmatched clinical case exposure.',
    campusSizeAcres: 122,
    accreditation: 'State Medical College, University of Delhi',
    approvedBy: 'NMC',
    nirfRank: 15,
    nirfScore: 64.80,
    rating: 4.8,
    reviewCount: 380,
    isFeatured: false,
    streamSlugs: ['medical'],
    acceptedExams: ['NEET UG'],
    facilities: ['Lok Nayak Hospital', 'GB Pant Cardiac Sciences', 'Central Library', 'Air-Conditioned Lecture Halls'],
    courses: [
      {
        id: 'cc-28',
        courseId: '33333333-3333-3333-3333-333333333306',
        name: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
        feesTotal: 15000,
        feesAnnual: 3000,
        seats: 250,
        durationYears: 5.5,
        degreeType: 'MBBS'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 18.50,
        medianPackage: 17.00,
        highestPackage: 26.00,
        placementPct: 100.0,
        topRecruiters: ['LNJP Hospital', 'AIIMS Residency', 'Max Healthcare', 'Apollo Hospitals']
      }
    ],
    cutoffs: [
      { courseName: 'MBBS', examName: 'NEET UG', year: 2025, category: 'GEN', roundNo: 1, openingRank: 10, closingRank: 110, quota: 'All India' }
    ]
  },

  // ==========================================
  // LAW COLLEGES
  // ==========================================
  {
    id: '55555555-5555-5555-5555-555555555525',
    name: 'NALSAR University of Law',
    shortName: 'NALSAR Hyderabad',
    slug: 'nalsar-hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    ownership: 'Government',
    establishedYear: 1998,
    website: 'https://www.nalsar.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Premier residential National Law University situated in Shamirpet, Hyderabad. Legendary for international moot court victories (Jessup, Willem C. Vis), high judicial appointments, and premier corporate M&A recruitment.',
    campusSizeAcres: 55,
    accreditation: 'NAAC A++, State Legislative Assembly Act',
    approvedBy: 'BCI, UGC',
    nirfRank: 3,
    nirfScore: 78.10,
    rating: 4.8,
    reviewCount: 260,
    isFeatured: true,
    streamSlugs: ['law'],
    acceptedExams: ['CLAT'],
    facilities: ['Moot Court Complex', 'MK Nambyar SAARCLAW Library', 'Arbitration Center', 'Lakeview Hostels'],
    courses: [
      {
        id: 'cc-29',
        courseId: '33333333-3333-3333-3333-333333333307',
        name: 'B.A. LL.B. (Honours)',
        feesTotal: 1350000,
        feesAnnual: 270000,
        seats: 132,
        durationYears: 5.0,
        degreeType: 'B.A. LL.B.'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 17.00,
        medianPackage: 16.00,
        highestPackage: 28.00,
        placementPct: 96.0,
        topRecruiters: ['Shardul Amarchand Mangaldas', 'Cyril Amarchand Mangaldas', 'AZB & Partners', 'Trilegal', 'Linklaters London']
      }
    ],
    cutoffs: [
      { courseName: 'B.A. LL.B.', examName: 'CLAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 35, closingRank: 185, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555526',
    name: 'National Law University, Delhi',
    shortName: 'NLU Delhi',
    slug: 'nlu-delhi',
    city: 'New Delhi',
    state: 'Delhi',
    ownership: 'Government',
    establishedYear: 2008,
    website: 'https://nludelhi.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'The sole standalone NLU in Delhi, situated in Sector 14 Dwarka. Holds NIRF #2 in Law. Conducts its own prestigious All India Law Entrance Test (AILET) and is celebrated for constitutional litigation and policy drafting.',
    campusSizeAcres: 12,
    accreditation: 'NAAC A, State Law University',
    approvedBy: 'BCI, UGC',
    nirfRank: 2,
    nirfScore: 81.50,
    rating: 4.8,
    reviewCount: 220,
    isFeatured: false,
    streamSlugs: ['law'],
    acceptedExams: ['AILET'],
    facilities: ['Justice TPPS Chawla Library', 'E-Moot Court Hall', 'Digital Forensic Lab', 'Convention Hall'],
    courses: [
      {
        id: 'cc-30',
        courseId: '33333333-3333-3333-3333-333333333307',
        name: 'B.A. LL.B. (Honours)',
        feesTotal: 1400000,
        feesAnnual: 280000,
        seats: 123,
        durationYears: 5.0,
        degreeType: 'B.A. LL.B.'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 19.00,
        medianPackage: 17.50,
        highestPackage: 30.00,
        placementPct: 98.0,
        topRecruiters: ['Khaitan & Co', 'Luthra & Luthra', 'Herbert Smith Freehills', 'Clifford Chance', 'Supreme Court Chambers']
      }
    ],
    cutoffs: [
      { courseName: 'B.A. LL.B.', examName: 'CLAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1, closingRank: 95, quota: 'All India' }
    ]
  },

  // ==========================================
  // DESIGN COLLEGES
  // ==========================================
  {
    id: '55555555-5555-5555-5555-555555555527',
    name: 'National Institute of Fashion Technology',
    shortName: 'NIFT New Delhi',
    slug: 'nift-delhi',
    city: 'New Delhi',
    state: 'Delhi',
    ownership: 'Government',
    establishedYear: 1986,
    website: 'https://www.nift.ac.in/delhi',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'Pioneering design and fashion technology institute set up under the Ministry of Textiles. Renowned for accessory design, fashion communication, textile innovation, and incubation for India’s top designer labels.',
    campusSizeAcres: 12,
    accreditation: 'Statutory Institute of National Importance',
    approvedBy: 'MoT, Parliament Act 2006',
    nirfRank: 1,
    nirfScore: 78.50,
    rating: 4.6,
    reviewCount: 350,
    isFeatured: true,
    streamSlugs: ['design'],
    acceptedExams: ['NIFT Entrance'],
    facilities: ['Garment Construction Labs', 'Textile Testing Lab', 'Resource Centre', 'Amphitheatre'],
    courses: [
      {
        id: 'cc-31',
        courseId: '33333333-3333-3333-3333-333333333308',
        name: 'Bachelor of Design (Fashion & Communication)',
        feesTotal: 1250000,
        feesAnnual: 312500,
        seats: 180,
        durationYears: 4.0,
        degreeType: 'B.Des'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 8.50,
        medianPackage: 7.20,
        highestPackage: 24.00,
        placementPct: 88.0,
        topRecruiters: ['Aditya Birla Fashion', 'Myntra', 'Titan Company', 'Reliance Retail', 'H&M India', 'Zara']
      }
    ],
    cutoffs: [
      { courseName: 'B.Des', examName: 'NID DAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1, closingRank: 120, quota: 'All India' }
    ]
  },
  {
    id: '55555555-5555-5555-5555-555555555528',
    name: 'Industrial Design Centre, IIT Bombay',
    shortName: 'IDC IIT Bombay',
    slug: 'idc-iit-bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    ownership: 'Government',
    establishedYear: 1969,
    website: 'http://www.idc.iitb.ac.in',
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop',
    description: 'IDC School of Design at IIT Bombay is India’s premier academic center for interaction design, industrial product engineering, visual communication, and animation. Offers B.Des via UCEED entrance.',
    campusSizeAcres: 550,
    accreditation: 'Institute of Eminence (IoE), IIT Bombay',
    approvedBy: 'AICTE, MoE',
    nirfRank: 2,
    nirfScore: 84.10,
    rating: 4.9,
    reviewCount: 280,
    isFeatured: true,
    streamSlugs: ['design'],
    acceptedExams: ['UCEED', 'CEED'],
    facilities: ['Rapid Prototyping Labs', 'Virtual Reality & HCI Studio', 'Ergonomics Lab', 'IITB MakerSpace'],
    courses: [
      {
        id: 'cc-32',
        courseId: '33333333-3333-3333-3333-333333333308',
        name: 'Bachelor of Design (B.Des)',
        feesTotal: 850000,
        feesAnnual: 212500,
        seats: 37,
        durationYears: 4.0,
        degreeType: 'B.Des'
      }
    ],
    placements: [
      {
        year: 2025,
        avgPackage: 21.00,
        medianPackage: 19.50,
        highestPackage: 48.00,
        placementPct: 97.0,
        topRecruiters: ['Google UX', 'Microsoft Design', 'Samsung Design Delhi', 'Adobe', 'Apple', 'Flipkart']
      }
    ],
    cutoffs: [
      { courseName: 'B.Des', examName: 'NID DAT', year: 2025, category: 'GEN', roundNo: 1, openingRank: 1, closingRank: 45, quota: 'All India' }
    ]
  }
];
