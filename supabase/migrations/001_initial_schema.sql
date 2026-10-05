-- EduFlex Core Schema Migration 001
-- PostgreSQL / Supabase Migration for Education Discovery Portal

-- Enable UUID and text search extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 1. Streams (Engineering, Management, Medical, Law, Design, etc.)
CREATE TABLE IF NOT EXISTS public.streams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    short_code VARCHAR(20) NOT NULL,
    icon_name VARCHAR(50) DEFAULT 'GraduationCap',
    tagline VARCHAR(255),
    description TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Locations (Indian Cities & States)
CREATE TABLE IF NOT EXISTS public.locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    is_metro BOOLEAN DEFAULT false,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_locations_state_city ON public.locations(state, city);

-- 3. Courses (B.Tech, MBA, MBBS, BA LLB, B.Des, etc.)
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    stream_id UUID NOT NULL REFERENCES public.streams(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    short_name VARCHAR(50) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    level VARCHAR(50) NOT NULL CHECK (level IN ('Undergraduate', 'Postgraduate', 'Diploma', 'Doctorate')),
    duration_years DECIMAL(3,1) NOT NULL,
    description TEXT,
    eligibility_summary TEXT,
    avg_starting_salary VARCHAR(50),
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_courses_stream ON public.courses(stream_id);

-- 4. Specializations (e.g. Computer Science, Artificial Intelligence, Finance, Cyber Law)
CREATE TABLE IF NOT EXISTS public.specializations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL,
    demand_level VARCHAR(50) DEFAULT 'High',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(course_id, slug)
);

-- 5. Colleges
CREATE TABLE IF NOT EXISTS public.colleges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    short_name VARCHAR(100),
    slug VARCHAR(255) NOT NULL UNIQUE,
    location_id UUID REFERENCES public.locations(id) ON DELETE SET NULL,
    ownership VARCHAR(50) NOT NULL CHECK (ownership IN ('Government', 'Private', 'Autonomous', 'Deemed')),
    established_year INT,
    website VARCHAR(255),
    logo_url TEXT,
    banner_url TEXT,
    description TEXT,
    campus_size_acres INT,
    accreditation VARCHAR(100), -- e.g. NAAC A++, NBA
    approved_by VARCHAR(100),   -- UGC, AICTE, BCI, NMC
    nirf_rank INT,
    nirf_score DECIMAL(5,2),
    rating DECIMAL(2,1) DEFAULT 4.0 CHECK (rating >= 1.0 AND rating <= 5.0),
    review_count INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    fts TSVECTOR GENERATED ALWAYS AS (
        to_tsvector('english', coalesce(name, '') || ' ' || coalesce(short_name, '') || ' ' || coalesce(description, ''))
    ) STORED,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_colleges_fts ON public.colleges USING gin(fts);
CREATE INDEX IF NOT EXISTS idx_colleges_nirf ON public.colleges(nirf_rank ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS idx_colleges_location ON public.colleges(location_id);
CREATE INDEX IF NOT EXISTS idx_colleges_ownership ON public.colleges(ownership);

-- 6. College Courses (Offerings, fees, seats, duration)
CREATE TABLE IF NOT EXISTS public.college_courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    specialization_id UUID REFERENCES public.specializations(id) ON DELETE SET NULL,
    fees_total INT, -- INR
    fees_annual INT, -- INR
    seats INT,
    duration_years DECIMAL(3,1),
    eligibility TEXT,
    degree_type VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_college_courses_college ON public.college_courses(college_id);
CREATE INDEX IF NOT EXISTS idx_college_courses_course ON public.college_courses(course_id);

-- 7. Placements
CREATE TABLE IF NOT EXISTS public.placements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    year INT NOT NULL,
    avg_package DECIMAL(6,2), -- in Lakhs per Annum (LPA)
    median_package DECIMAL(6,2),
    highest_package DECIMAL(6,2),
    placement_pct DECIMAL(5,2),
    top_recruiters TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(college_id, year)
);

-- 8. Entrance Exams (JEE Main, CAT, NEET, CLAT, NID DAT, etc.)
CREATE TABLE IF NOT EXISTS public.exams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    short_name VARCHAR(50) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    stream_id UUID NOT NULL REFERENCES public.streams(id) ON DELETE CASCADE,
    level VARCHAR(50) NOT NULL CHECK (level IN ('National', 'State', 'University')),
    conducting_body VARCHAR(150),
    frequency VARCHAR(50) DEFAULT 'Annual',
    mode VARCHAR(50) DEFAULT 'Computer Based Test (CBT)',
    duration_minutes INT DEFAULT 180,
    description TEXT,
    eligibility_criteria TEXT,
    exam_pattern_summary TEXT,
    registration_link TEXT,
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_exams_stream ON public.exams(stream_id);

-- 9. Exam Dates & Timeline
CREATE TABLE IF NOT EXISTS public.exam_dates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    event_name VARCHAR(150) NOT NULL, -- 'Application Start', 'Admit Card', 'Exam Date', 'Result'
    start_date DATE NOT NULL,
    end_date DATE,
    year INT NOT NULL,
    is_tentative BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_exam_dates_exam ON public.exam_dates(exam_id, year);

-- 10. College-Exam Accepted relationship
CREATE TABLE IF NOT EXISTS public.college_exams (
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    min_score_percentile DECIMAL(5,2),
    notes VARCHAR(255),
    PRIMARY KEY (college_id, exam_id)
);

-- 11. Cutoffs
CREATE TABLE IF NOT EXISTS public.cutoffs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    year INT NOT NULL,
    category VARCHAR(50) NOT NULL DEFAULT 'GEN' CHECK (category IN ('GEN', 'OBC', 'SC', 'ST', 'EWS', 'PWD')),
    round_no INT NOT NULL DEFAULT 1,
    opening_rank INT,
    closing_rank INT NOT NULL,
    percentile_cutoff DECIMAL(5,2),
    quota VARCHAR(50) DEFAULT 'All India',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_cutoffs_lookup ON public.cutoffs(exam_id, year, category, closing_rank);

-- 12. Rankings & Ranking Entries
CREATE TABLE IF NOT EXISTS public.rankings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    publishing_body VARCHAR(100) NOT NULL, -- 'NIRF', 'India Today', 'The Week', 'Outlook'
    year INT NOT NULL,
    stream_id UUID NOT NULL REFERENCES public.streams(id) ON DELETE CASCADE,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(publishing_body, year, stream_id)
);

CREATE TABLE IF NOT EXISTS public.ranking_entries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ranking_id UUID NOT NULL REFERENCES public.rankings(id) ON DELETE CASCADE,
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    rank INT NOT NULL,
    score DECIMAL(5,2),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(ranking_id, college_id)
);

-- 13. Profiles (Linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY,
    full_name VARCHAR(150),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    city VARCHAR(100),
    target_stream_id UUID REFERENCES public.streams(id) ON DELETE SET NULL,
    avatar_url TEXT,
    role VARCHAR(50) DEFAULT 'student' CHECK (role IN ('student', 'counselor', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. Reviews (User Generated Content)
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    reviewer_name VARCHAR(100) NOT NULL,
    course_name VARCHAR(100),
    graduation_year INT,
    rating_overall DECIMAL(2,1) NOT NULL CHECK (rating_overall >= 1 AND rating_overall <= 5),
    rating_infrastructure DECIMAL(2,1) CHECK (rating_infrastructure >= 1 AND rating_infrastructure <= 5),
    rating_faculty DECIMAL(2,1) CHECK (rating_faculty >= 1 AND rating_faculty <= 5),
    rating_placements DECIMAL(2,1) CHECK (rating_placements >= 1 AND rating_placements <= 5),
    rating_campus_life DECIMAL(2,1) CHECK (rating_campus_life >= 1 AND rating_campus_life <= 5),
    title VARCHAR(200) NOT NULL,
    pros TEXT NOT NULL,
    cons TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_reviews_college ON public.reviews(college_id, status);

-- 15. Questions & Answers (Community Q&A)
CREATE TABLE IF NOT EXISTS public.questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID REFERENCES public.colleges(id) ON DELETE CASCADE,
    stream_id UUID REFERENCES public.streams(id) ON DELETE SET NULL,
    author_name VARCHAR(100) NOT NULL,
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT,
    upvotes INT DEFAULT 0,
    answers_count INT DEFAULT 0,
    views_count INT DEFAULT 0,
    status VARCHAR(50) DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    author_name VARCHAR(100) NOT NULL,
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    author_badge VARCHAR(50) DEFAULT 'Student',
    body TEXT NOT NULL,
    upvotes INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT false,
    status VARCHAR(50) DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 16. Articles & News
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    stream_id UUID REFERENCES public.streams(id) ON DELETE SET NULL,
    category VARCHAR(50) DEFAULT 'News', -- 'News', 'Admissions', 'Preparation', 'Exam Updates'
    summary TEXT,
    content TEXT NOT NULL,
    cover_image TEXT,
    author_name VARCHAR(100) DEFAULT 'EduFlex Editorial',
    read_time_minutes INT DEFAULT 4,
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 17. Saved Colleges & Exam Alerts
CREATE TABLE IF NOT EXISTS public.saved_colleges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, college_id)
);

CREATE TABLE IF NOT EXISTS public.alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    exam_id UUID REFERENCES public.exams(id) ON DELETE CASCADE,
    college_id UUID REFERENCES public.colleges(id) ON DELETE CASCADE,
    event_type VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 18. Counseling Leads
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    city VARCHAR(100),
    target_stream_id UUID REFERENCES public.streams(id) ON DELETE SET NULL,
    college_id UUID REFERENCES public.colleges(id) ON DELETE SET NULL,
    course_interest VARCHAR(150),
    source VARCHAR(100) DEFAULT 'Website Modal',
    consent_captured BOOLEAN DEFAULT true,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================
-- 19. Predictor Stored Procedure
-- Returns colleges categorized as Safe, Moderate, or Ambitious based on user rank vs cutoffs
-- =========================================================
CREATE OR REPLACE FUNCTION public.predict_colleges(
    p_exam_slug TEXT,
    p_rank INT,
    p_category TEXT DEFAULT 'GEN',
    p_stream_slug TEXT DEFAULT NULL
)
RETURNS TABLE (
    college_id UUID,
    college_name VARCHAR,
    college_slug VARCHAR,
    city VARCHAR,
    state VARCHAR,
    course_name VARCHAR,
    closing_rank INT,
    rank_difference INT,
    chance_category VARCHAR,
    nirf_rank INT,
    avg_package DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    WITH latest_cutoffs AS (
        SELECT 
            c.id AS college_id,
            c.name AS college_name,
            c.slug AS college_slug,
            loc.city,
            loc.state,
            cr.name AS course_name,
            cut.closing_rank,
            (cut.closing_rank - p_rank) AS rank_diff,
            c.nirf_rank,
            p.avg_package,
            ROW_NUMBER() OVER (PARTITION BY c.id ORDER BY cut.closing_rank DESC) as rn
        FROM public.cutoffs cut
        JOIN public.exams ex ON cut.exam_id = ex.id
        JOIN public.colleges c ON cut.college_id = c.id
        JOIN public.courses cr ON cut.course_id = cr.id
        LEFT JOIN public.locations loc ON c.location_id = loc.id
        LEFT JOIN public.placements p ON p.college_id = c.id
        LEFT JOIN public.streams st ON cr.stream_id = st.id
        WHERE ex.slug = p_exam_slug
          AND cut.category = p_category
          AND (p_stream_slug IS NULL OR st.slug = p_stream_slug)
    )
    SELECT 
        college_id,
        college_name,
        college_slug,
        city,
        state,
        course_name,
        closing_rank,
        rank_diff AS rank_difference,
        CASE 
            WHEN rank_diff >= 1500 THEN 'Safe'
            WHEN rank_diff >= 0 AND rank_diff < 1500 THEN 'Moderate'
            WHEN rank_diff < 0 AND rank_diff >= -1500 THEN 'Ambitious'
            ELSE 'High Risk'
        END::VARCHAR AS chance_category,
        nirf_rank,
        avg_package
    FROM latest_cutoffs
    WHERE rn = 1
      AND (closing_rank - p_rank) >= -3000
    ORDER BY closing_rank ASC;
END;
$$ LANGUAGE plpgsql;

-- =========================================================
-- 20. Row Level Security (RLS) Policies
-- =========================================================

ALTER TABLE public.streams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.specializations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.college_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_dates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cutoffs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rankings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ranking_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Public READ on catalog tables
CREATE POLICY "Public Read Streams" ON public.streams FOR SELECT USING (true);
CREATE POLICY "Public Read Locations" ON public.locations FOR SELECT USING (true);
CREATE POLICY "Public Read Courses" ON public.courses FOR SELECT USING (true);
CREATE POLICY "Public Read Specializations" ON public.specializations FOR SELECT USING (true);
CREATE POLICY "Public Read Colleges" ON public.colleges FOR SELECT USING (true);
CREATE POLICY "Public Read College Courses" ON public.college_courses FOR SELECT USING (true);
CREATE POLICY "Public Read Placements" ON public.placements FOR SELECT USING (true);
CREATE POLICY "Public Read Exams" ON public.exams FOR SELECT USING (true);
CREATE POLICY "Public Read Exam Dates" ON public.exam_dates FOR SELECT USING (true);
CREATE POLICY "Public Read Cutoffs" ON public.cutoffs FOR SELECT USING (true);
CREATE POLICY "Public Read Rankings" ON public.rankings FOR SELECT USING (true);
CREATE POLICY "Public Read Ranking Entries" ON public.ranking_entries FOR SELECT USING (true);
CREATE POLICY "Public Read Articles" ON public.articles FOR SELECT USING (true);

-- Public Read on Approved Reviews & QA
CREATE POLICY "Public Read Approved Reviews" ON public.reviews FOR SELECT USING (status = 'approved');
CREATE POLICY "Public Read Approved Questions" ON public.questions FOR SELECT USING (status = 'approved');
CREATE POLICY "Public Read Approved Answers" ON public.answers FOR SELECT USING (status = 'approved');

-- Authenticated Insert for Reviews, QA, Leads
CREATE POLICY "Insert Leads With Consent" ON public.leads FOR INSERT WITH CHECK (consent_captured = true);
