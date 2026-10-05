import { STREAMS, COLLEGES, COURSES, EXAMS, REVIEWS, QUESTIONS, ARTICLES } from '@/data/mockData';
import { College, Course, Exam, Review, Question, Article, Stream, PredictorResult, CategoryType } from '@/types';
import { supabase, isSupabaseConfigured } from './supabaseClient';

export interface CollegeFilters {
  streamSlug?: string;
  search?: string;
  city?: string;
  state?: string;
  ownership?: string;
  maxFees?: number;
  acceptedExam?: string;
  sortBy?: 'nirf' | 'rating' | 'placement' | 'fees_low';
}

export async function getStreams(): Promise<Stream[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('streams').select('*').order('display_order');
      if (!error && data && data.length > 0) {
        return data.map(d => ({
          id: d.id,
          name: d.name,
          slug: d.slug,
          shortCode: d.short_code,
          iconName: d.icon_name,
          tagline: d.tagline,
          description: d.description,
          displayOrder: d.display_order
        }));
      }
    } catch {
      // Fallback to local
    }
  }
  return STREAMS;
}

export async function getStreamBySlug(slug: string): Promise<Stream | undefined> {
  const streams = await getStreams();
  return streams.find(s => s.slug === slug);
}

export async function getColleges(filters: CollegeFilters = {}): Promise<College[]> {
  let list = [...COLLEGES];

  if (filters.streamSlug && filters.streamSlug !== 'all') {
    list = list.filter(c => c.streamSlugs.includes(filters.streamSlug!));
  }

  if (filters.search) {
    const q = filters.search.toLowerCase();
    list = list.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q) ||
      c.city.toLowerCase().includes(q) ||
      c.state.toLowerCase().includes(q) ||
      c.courses.some(cr => cr.name.toLowerCase().includes(q))
    );
  }

  if (filters.city) {
    list = list.filter(c => c.city.toLowerCase() === filters.city!.toLowerCase());
  }

  if (filters.state) {
    list = list.filter(c => c.state.toLowerCase() === filters.state!.toLowerCase());
  }

  if (filters.ownership && filters.ownership !== 'all') {
    list = list.filter(c => c.ownership.toLowerCase() === filters.ownership!.toLowerCase());
  }

  if (filters.maxFees) {
    list = list.filter(c => c.courses.some(cr => cr.feesTotal <= filters.maxFees!));
  }

  if (filters.acceptedExam) {
    list = list.filter(c => c.acceptedExams.some(e => e.toLowerCase().includes(filters.acceptedExam!.toLowerCase())));
  }

  // Sorting
  if (filters.sortBy === 'nirf') {
    list.sort((a, b) => (a.nirfRank ?? 999) - (b.nirfRank ?? 999));
  } else if (filters.sortBy === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  } else if (filters.sortBy === 'placement') {
    list.sort((a, b) => {
      const pA = a.placements[0]?.avgPackage ?? 0;
      const pB = b.placements[0]?.avgPackage ?? 0;
      return pB - pA;
    });
  } else if (filters.sortBy === 'fees_low') {
    list.sort((a, b) => {
      const fA = a.courses[0]?.feesTotal ?? 9999999;
      const fB = b.courses[0]?.feesTotal ?? 9999999;
      return fA - fB;
    });
  }

  return list;
}

export async function getCollegeBySlug(slug: string): Promise<College | undefined> {
  return COLLEGES.find(c => c.slug === slug);
}

export async function getExams(streamSlug?: string): Promise<Exam[]> {
  if (streamSlug && streamSlug !== 'all') {
    return EXAMS.filter(e => e.streamSlug === streamSlug);
  }
  return EXAMS;
}

export async function getExamBySlug(slug: string): Promise<Exam | undefined> {
  return EXAMS.find(e => e.slug === slug);
}

export async function getCourses(streamSlug?: string): Promise<Course[]> {
  if (streamSlug && streamSlug !== 'all') {
    return COURSES.filter(c => c.streamSlug === streamSlug);
  }
  return COURSES;
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  return COURSES.find(c => c.slug === slug);
}

export async function getReviews(collegeId?: string): Promise<Review[]> {
  if (collegeId) {
    return REVIEWS.filter(r => r.collegeId === collegeId);
  }
  return REVIEWS;
}

export async function getQuestions(collegeId?: string, streamSlug?: string): Promise<Question[]> {
  let list = [...QUESTIONS];
  if (collegeId) {
    list = list.filter(q => q.collegeId === collegeId);
  }
  if (streamSlug) {
    list = list.filter(q => q.streamSlug === streamSlug);
  }
  return list;
}

export async function getArticles(streamSlug?: string): Promise<Article[]> {
  if (streamSlug && streamSlug !== 'all') {
    return ARTICLES.filter(a => a.streamSlug === streamSlug);
  }
  return ARTICLES;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return ARTICLES.find(a => a.slug === slug);
}

// Predictor algorithm: returns categorized colleges by user exam rank & category
export async function predictColleges(params: {
  examSlug: string;
  rank: number;
  category?: CategoryType;
  streamSlug?: string;
}): Promise<PredictorResult[]> {
  const { examSlug, rank, category = 'GEN' } = params;
  const exam = EXAMS.find(e => e.slug === examSlug);
  if (!exam) return [];

  const results: PredictorResult[] = [];

  for (const college of COLLEGES) {
    // Check if college matches the exam
    const hasExam = college.acceptedExams.some(e => e.toLowerCase().includes(exam.shortName.toLowerCase()));
    if (!hasExam) continue;

    // Look for matching cutoff
    const cutoff = college.cutoffs.find(c => 
      c.examName.toLowerCase().includes(exam.shortName.toLowerCase()) &&
      c.category === category
    );

    if (cutoff) {
      const rankDiff = cutoff.closingRank - rank;
      let chanceCategory: 'Safe' | 'Moderate' | 'Ambitious';

      if (rankDiff >= 300) {
        chanceCategory = 'Safe';
      } else if (rankDiff >= 0 && rankDiff < 300) {
        chanceCategory = 'Moderate';
      } else if (rankDiff < 0 && rankDiff >= -250) {
        chanceCategory = 'Ambitious';
      } else {
        continue; // Too far from cutoff
      }

      results.push({
        college,
        courseName: cutoff.courseName,
        examName: exam.name,
        userRank: rank,
        closingRank: cutoff.closingRank,
        rankDifference: rankDiff,
        chanceCategory
      });
    } else {
      // Synthetic estimation for demonstration if specific cutoff entry is absent
      const baseEstimateRank = college.nirfRank ? college.nirfRank * 350 : 2500;
      const rankDiff = baseEstimateRank - rank;
      let chanceCategory: 'Safe' | 'Moderate' | 'Ambitious';

      if (rankDiff >= 500) {
        chanceCategory = 'Safe';
      } else if (rankDiff >= -200 && rankDiff < 500) {
        chanceCategory = 'Moderate';
      } else if (rankDiff < -200 && rankDiff >= -800) {
        chanceCategory = 'Ambitious';
      } else {
        continue;
      }

      results.push({
        college,
        courseName: college.courses[0]?.name || 'Flagship Program',
        examName: exam.name,
        userRank: rank,
        closingRank: baseEstimateRank,
        rankDifference: rankDiff,
        chanceCategory
      });
    }
  }

  // Sort by chance: Safe first, then Moderate, then Ambitious, then by closing rank
  const priority = { Safe: 1, Moderate: 2, Ambitious: 3 };
  results.sort((a, b) => priority[a.chanceCategory] - priority[b.chanceCategory] || a.closingRank - b.closingRank);

  return results;
}
