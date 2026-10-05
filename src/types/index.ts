// EduFlex Core Types and Models

export type AcademicLevel = 'Undergraduate' | 'Postgraduate' | 'Diploma' | 'Doctorate';
export type OwnershipType = 'Government' | 'Private' | 'Autonomous' | 'Deemed';
export type ExamLevel = 'National' | 'State' | 'University';
export type CategoryType = 'GEN' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'PWD';
export type ChanceCategory = 'Safe' | 'Moderate' | 'Ambitious';

export interface Stream {
  id: string;
  name: string;
  slug: string;
  shortCode: string;
  iconName: string;
  tagline: string;
  description: string;
  displayOrder: number;
  popularExams?: string[];
  topCourses?: string[];
}

export interface Location {
  id: string;
  city: string;
  state: string;
  slug: string;
  isMetro: boolean;
}

export interface Course {
  id: string;
  streamId: string;
  streamSlug: string;
  name: string;
  shortName: string;
  slug: string;
  level: AcademicLevel;
  durationYears: number;
  avgStartingSalary: string;
  isPopular: boolean;
  eligibilitySummary: string;
  overview?: string;
}

export interface CollegeCourse {
  id: string;
  courseId: string;
  name: string;
  specialization?: string;
  feesTotal: number;
  feesAnnual: number;
  seats: number;
  durationYears: number;
  degreeType: string;
}

export interface Placement {
  year: number;
  avgPackage: number; // in LPA
  medianPackage: number; // in LPA
  highestPackage: number; // in LPA
  placementPct: number;
  topRecruiters: string[];
}

export interface CutoffEntry {
  courseName: string;
  examName: string;
  year: number;
  category: CategoryType;
  roundNo: number;
  openingRank?: number;
  closingRank: number;
  quota: string;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  city: string;
  state: string;
  ownership: OwnershipType;
  establishedYear: number;
  website: string;
  logoUrl: string;
  bannerUrl: string;
  description: string;
  campusSizeAcres: number;
  accreditation: string;
  approvedBy: string;
  nirfRank?: number;
  nirfScore?: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  streamSlugs: string[];
  courses: CollegeCourse[];
  placements: Placement[];
  cutoffs: CutoffEntry[];
  acceptedExams: string[];
  facilities: string[];
}

export interface ExamDate {
  eventName: string;
  startDate: string;
  endDate?: string;
  year: number;
  isTentative: boolean;
}

export interface Exam {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  streamSlug: string;
  level: ExamLevel;
  conductingBody: string;
  mode: string;
  durationMinutes: number;
  isPopular: boolean;
  description: string;
  syllabusSummary: string;
  eligibilityCriteria: string;
  examPatternSummary: string;
  upcomingEvents: ExamDate[];
  acceptedByCollegesCount: number;
}

export interface Review {
  id: string;
  collegeId: string;
  collegeName: string;
  reviewerName: string;
  courseName: string;
  graduationYear: number;
  ratingOverall: number;
  ratingInfrastructure: number;
  ratingFaculty: number;
  ratingPlacements: number;
  ratingCampusLife: number;
  title: string;
  pros: string;
  cons: string;
  createdAt: string;
}

export interface Answer {
  id: string;
  questionId: string;
  authorName: string;
  authorBadge: string;
  body: string;
  upvotes: number;
  isVerified: boolean;
  createdAt: string;
}

export interface Question {
  id: string;
  collegeId?: string;
  collegeName?: string;
  streamSlug?: string;
  authorName: string;
  title: string;
  body: string;
  upvotes: number;
  answersCount: number;
  createdAt: string;
  answers: Answer[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  streamSlug: string;
  category: 'News' | 'Admissions' | 'Preparation' | 'Exam Updates' | 'Rankings';
  summary: string;
  content: string;
  coverImage: string;
  authorName: string;
  readTimeMinutes: number;
  publishedAt: string;
}

export interface PredictorResult {
  college: College;
  courseName: string;
  examName: string;
  userRank: number;
  closingRank: number;
  rankDifference: number;
  chanceCategory: ChanceCategory;
}
