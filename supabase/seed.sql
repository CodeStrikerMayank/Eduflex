-- EduFlex Seed Data for All 5 Streams: Engineering, MBA, Medical, Law, Design
-- Comprehensive seed data for colleges, courses, placements, exams, cutoffs, rankings, reviews, Q&A, and news.

BEGIN;

-- 1. Insert Streams
INSERT INTO public.streams (id, name, slug, short_code, icon_name, tagline, description, display_order) VALUES
('11111111-1111-1111-1111-111111111101', 'Engineering', 'engineering', 'B.Tech', 'Cpu', 'Build tomorrow''s technology and infrastructure', 'Explore premier engineering colleges, B.Tech/M.Tech programs, JEE Main/Advanced cutoffs and tech placements.', 1),
('11111111-1111-1111-1111-111111111102', 'Management', 'management', 'MBA', 'Briefcase', 'Lead enterprises, strategy and startups', 'Compare top business schools, IIMs, MBA/PGDM programs, CAT percentiles, and executive leadership tracks.', 2),
('11111111-1111-1111-1111-111111111103', 'Medical', 'medical', 'MBBS', 'Stethoscope', 'Heal, research and save lives', 'Discover prestigious medical institutes, AIIMS, MBBS seats, NEET cutoffs, and hospital clinical infrastructure.', 3),
('11111111-1111-1111-1111-111111111104', 'Law', 'law', 'LL.B', 'Scale', 'Champion justice, governance and corporate law', 'Find top National Law Universities (NLUs), 5-year integrated law courses, and CLAT score brackets.', 4),
('11111111-1111-1111-1111-111111111105', 'Design', 'design', 'B.Des', 'Palette', 'Shape aesthetics, products and digital experiences', 'Explore NID, NIFT, IIT Design studios, UI/UX, product design, and fashion communication careers.', 5)
ON CONFLICT (slug) DO NOTHING;

-- 2. Insert Locations
INSERT INTO public.locations (id, city, state, slug, is_metro) VALUES
('22222222-2222-2222-2222-222222222201', 'Bengaluru', 'Karnataka', 'bengaluru-karnataka', true),
('22222222-2222-2222-2222-222222222202', 'New Delhi', 'Delhi NCR', 'new-delhi-delhi', true),
('22222222-2222-2222-2222-222222222203', 'Mumbai', 'Maharashtra', 'mumbai-maharashtra', true),
('22222222-2222-2222-2222-222222222204', 'Chennai', 'Tamil Nadu', 'chennai-tamil-nadu', true),
('22222222-2222-2222-2222-222222222205', 'Hyderabad', 'Telangana', 'hyderabad-telangana', true),
('22222222-2222-2222-2222-222222222206', 'Pune', 'Maharashtra', 'pune-maharashtra', false),
('22222222-2222-2222-2222-222222222207', 'Ahmedabad', 'Gujarat', 'ahmedabad-gujarat', false),
('22222222-2222-2222-2222-222222222208', 'Kolkata', 'West Bengal', 'kolkata-west-bengal', true),
('22222222-2222-2222-2222-222222222209', 'Pilani', 'Rajasthan', 'pilani-rajasthan', false),
('22222222-2222-2222-2222-222222222210', 'Vellore', 'Tamil Nadu', 'vellore-tamil-nadu', false)
ON CONFLICT (slug) DO NOTHING;

-- 3. Insert Courses
INSERT INTO public.courses (id, stream_id, name, short_name, slug, level, duration_years, avg_starting_salary, is_popular, eligibility_summary) VALUES
('33333333-3333-3333-3333-333333333301', '11111111-1111-1111-1111-111111111101', 'Bachelor of Technology (Computer Science & Engineering)', 'B.Tech CSE', 'btech-cse', 'Undergraduate', 4.0, '12-25 LPA', true, '10+2 with Physics, Mathematics, Chemistry (Min 75% in PCM)'),
('33333333-3333-3333-3333-333333333302', '11111111-1111-1111-1111-111111111101', 'Bachelor of Technology (Artificial Intelligence & Data Science)', 'B.Tech AI & DS', 'btech-ai-ds', 'Undergraduate', 4.0, '14-28 LPA', true, '10+2 with PCM (Min 75%)'),
('33333333-3333-3333-3333-333333333303', '11111111-1111-1111-1111-111111111101', 'Bachelor of Technology (Electronics & Communication)', 'B.Tech ECE', 'btech-ece', 'Undergraduate', 4.0, '10-20 LPA', false, '10+2 with PCM'),
('33333333-3333-3333-3333-333333333304', '11111111-1111-1111-1111-111111111102', 'Master of Business Administration (General / Core)', 'MBA Core', 'mba-core', 'Postgraduate', 2.0, '18-35 LPA', true, 'Bachelor''s Degree (Min 50%) + Valid CAT/XAT score'),
('33333333-3333-3333-3333-333333333305', '11111111-1111-1111-1111-111111111102', 'Post Graduate Diploma in Management (Business Analytics)', 'PGDM Analytics', 'pgdm-business-analytics', 'Postgraduate', 2.0, '20-32 LPA', true, 'Graduation in STEM/Commerce + CAT/XAT/GMAT'),
('33333333-3333-3333-3333-333333333306', '11111111-1111-1111-1111-111111111103', 'Bachelor of Medicine & Bachelor of Surgery', 'MBBS', 'mbbs', 'Undergraduate', 5.5, '9-18 LPA', true, '10+2 with PCB (Min 50%) + Qualified NEET UG'),
('33333333-3333-3333-3333-333333333307', '11111111-1111-1111-1111-111111111104', 'B.A. LL.B. (Hons.) 5-Year Integrated', 'BA LLB Hons', 'ba-llb-hons', 'Undergraduate', 5.0, '10-18 LPA', true, '10+2 in any stream (Min 45%) + CLAT score'),
('33333333-3333-3333-3333-333333333308', '11111111-1111-1111-1111-111111111105', 'Bachelor of Design (Interaction & Product Design)', 'B.Des UI/UX', 'bdes-interaction-product', 'Undergraduate', 4.0, '8-18 LPA', true, '10+2 in any stream + NID DAT / UCEED score')
ON CONFLICT (slug) DO NOTHING;

-- 4. Insert Entrance Exams
INSERT INTO public.exams (id, name, short_name, slug, stream_id, level, conducting_body, mode, duration_minutes, is_popular, description, syllabus_summary) VALUES
('44444444-4444-4444-4444-444444444401', 'Joint Entrance Examination (Main)', 'JEE Main', 'jee-main', '11111111-1111-1111-1111-111111111101', 'National', 'National Testing Agency (NTA)', 'CBT (Online)', 180, true, 'Gateway examination for admission to NITs, IIITs, CFTIs and qualifying round for JEE Advanced.', 'Class 11 & 12 Physics, Chemistry, and Mathematics.'),
('44444444-4444-4444-4444-444444444402', 'Joint Entrance Examination (Advanced)', 'JEE Advanced', 'jee-advanced', '11111111-1111-1111-1111-111111111101', 'National', 'IITs (Rotational)', 'CBT (Online)', 360, true, 'Sole national competitive exam for admission into all 23 Indian Institutes of Technology (IITs).', 'In-depth conceptual Physics, Chemistry, and Higher Mathematics.'),
('44444444-4444-4444-4444-444444444403', 'Common Admission Test', 'CAT', 'cat', '11111111-1111-1111-1111-111111111102', 'National', 'IIMs (Rotational)', 'CBT (Online)', 120, true, 'The premier entrance test for 21 IIMs, FMS, SPJIMR, and top MBA colleges in India.', 'Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), Quantitative Aptitude (QA).'),
('44444444-4444-4444-4444-444444444404', 'National Eligibility cum Entrance Test (UG)', 'NEET UG', 'neet-ug', '11111111-1111-1111-1111-111111111103', 'National', 'National Testing Agency (NTA)', 'Pen & Paper (OMR)', 200, true, 'Mandatory unified entrance examination for MBBS, BDS, and AYUSH admissions across India.', 'Class 11 & 12 Biology (Botany & Zoology), Chemistry, and Physics.'),
('44444444-4444-4444-4444-444444444405', 'Common Law Admission Test', 'CLAT', 'clat', '11111111-1111-1111-1111-111111111104', 'National', 'Consortium of NLUs', 'Offline OMR', 120, true, 'Centralized test for admission to 24 premier National Law Universities in India.', 'English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, Quantitative Techniques.'),
('44444444-4444-4444-4444-444444444406', 'National Institute of Design Design Aptitude Test', 'NID DAT', 'nid-dat', '11111111-1111-1111-1111-111111111105', 'National', 'National Institute of Design', 'Prelims (Pen & Paper) + Mains (Studio Test)', 180, true, 'Gateway to B.Des and M.Des programs across all NID campuses.', 'Visual perception, drawing skills, design sensibilities, mental agility, creative problem solving.')
ON CONFLICT (slug) DO NOTHING;

-- 5. Insert Exam Dates (Current Cycle)
INSERT INTO public.exam_dates (exam_id, event_name, start_date, end_date, year, is_tentative) VALUES
('44444444-4444-4444-4444-444444444401', 'Session 1 Registration', '2026-11-01', '2026-11-30', 2027, false),
('44444444-4444-4444-4444-444444444401', 'Session 1 Exam Window', '2027-01-22', '2027-01-31', 2027, false),
('44444444-4444-4444-4444-444444444401', 'Session 1 Result', '2027-02-12', '2027-02-12', 2027, false),
('44444444-4444-4444-4444-444444444402', 'Registration Window', '2027-04-25', '2027-05-07', 2027, false),
('44444444-4444-4444-4444-444444444402', 'Exam Date (Paper 1 & 2)', '2027-05-23', '2027-05-23', 2027, false),
('44444444-4444-4444-4444-444444444403', 'CAT 2026 Registration', '2026-08-01', '2026-09-18', 2026, false),
('44444444-4444-4444-4444-444444444403', 'CAT 2026 Exam Date', '2026-11-29', '2026-11-29', 2026, false),
('44444444-4444-4444-4444-444444444404', 'NEET UG 2027 Exam Date', '2027-05-02', '2027-05-02', 2027, false),
('44444444-4444-4444-4444-444444444405', 'CLAT 2027 Exam Date', '2026-12-06', '2026-12-06', 2026, false),
('44444444-4444-4444-4444-444444444406', 'NID DAT Prelims', '2027-01-03', '2027-01-03', 2027, false);

-- 6. Insert Colleges
INSERT INTO public.colleges (id, name, short_name, slug, location_id, ownership, established_year, website, logo_url, banner_url, description, campus_size_acres, accreditation, approved_by, nirf_rank, nirf_score, rating, review_count, is_featured) VALUES
-- Engineering
('55555555-5555-5555-5555-555555555501', 'Indian Institute of Technology Madras', 'IIT Madras', 'iit-madras', '22222222-2222-2222-2222-222222222204', 'Government', 1959, 'https://www.iitm.ac.in', 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop', 'Ranked #1 Engineering Institute in India by NIRF consistently. Known for cutting-edge research, IITM Research Park, world-class faculty, and vibrant campus life with deep tech startups.', 630, 'IoE, NAAC A++', 'AICTE, UGC', 1, 89.79, 4.8, 428, true),

('55555555-5555-5555-5555-555555555502', 'Indian Institute of Technology Bombay', 'IIT Bombay', 'iit-bombay', '22222222-2222-2222-2222-222222222203', 'Government', 1958, 'https://www.iitb.ac.in', 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=500&fit=crop', 'India''s most sought-after engineering institute situated in Powai, Mumbai. Top choice for JEE Advanced AIR 1-100 toppers with exceptional global alumni network and entrepreneurship culture.', 550, 'IoE, NAAC A++', 'AICTE, UGC', 3, 80.74, 4.9, 612, true),

('55555555-5555-5555-5555-555555555503', 'Indian Institute of Technology Delhi', 'IIT Delhi', 'iit-delhi', '22222222-2222-2222-2222-222222222202', 'Government', 1961, 'https://home.iitd.ac.in', 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200&h=500&fit=crop', 'Premier engineering college in the heart of New Delhi. Outstanding research citations, high placement averages, and top incubators for tech ventures.', 320, 'IoE, NAAC A++', 'AICTE, UGC', 2, 88.08, 4.8, 530, true),

('55555555-5555-5555-5555-555555555504', 'Birla Institute of Technology and Science, Pilani', 'BITS Pilani', 'bits-pilani', '22222222-2222-2222-2222-222222222209', 'Deemed', 1964, 'https://www.bits-pilani.ac.in', 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=500&fit=crop', 'Renowned private institute with zero-attendance policy, Practice School internship program, and peer network matching top IITs.', 330, 'NAAC A, IoE', 'UGC', 20, 60.12, 4.7, 340, true),

-- Management
('55555555-5555-5555-5555-555555555505', 'Indian Institute of Management Ahmedabad', 'IIM Ahmedabad', 'iim-ahmedabad', '22222222-2222-2222-2222-222222222207', 'Government', 1961, 'https://www.iima.ac.in', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=500&fit=crop', 'Ranked #1 Management institution in India. Renowned case study pedagogy, iconic Louis Kahn campus, and unparalleled executive recruitment across global consulting and PE firms.', 106, 'EQUIS, AACSB', 'MHRD', 1, 83.20, 4.9, 310, true),

('55555555-5555-5555-5555-555555555506', 'Indian Institute of Management Bangalore', 'IIM Bangalore', 'iim-bangalore', '22222222-2222-2222-2222-222222222201', 'Government', 1973, 'https://www.iimb.ac.in', 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop', 'Sprawling stone-architecture campus in India''s tech capital. World-class center for entrepreneurship (NSRCEL), analytics, and management consulting.', 100, 'EQUIS', 'MHRD', 2, 80.52, 4.9, 280, true),

-- Medical
('55555555-5555-5555-5555-555555555507', 'All India Institute of Medical Sciences, New Delhi', 'AIIMS Delhi', 'aiims-new-delhi', '22222222-2222-2222-2222-222222222202', 'Government', 1956, 'https://www.aiims.edu', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=500&fit=crop', 'The undisputed leader of medical education and tertiary healthcare in South Asia. Subsidized fees, unmatched patient clinical exposure, and stellar research facilities.', 115, 'Institute of National Importance', 'NMC, MoHFW', 1, 91.22, 4.9, 490, true),

-- Law
('55555555-5555-5555-5555-555555555508', 'National Law School of India University', 'NLSIU Bengaluru', 'nlsiu-bengaluru', '22222222-2222-2222-2222-222222222201', 'Government', 1987, 'https://www.nls.ac.in', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=500&fit=crop', 'Ranked #1 Law School in India by NIRF. Known as the Harvard of the East for Indian jurisprudence, international moot courts, and Magic Circle law firm placements.', 23, 'BCI Recognised', 'BCI, UGC', 1, 80.52, 4.8, 175, true),

-- Design
('55555555-5555-5555-5555-555555555509', 'National Institute of Design Ahmedabad', 'NID Ahmedabad', 'nid-ahmedabad', '22222222-2222-2222-2222-222222222207', 'Government', 1961, 'https://www.nid.edu', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=500&fit=crop', 'Apex institution for industrial, textile, and communication design in India with global design accreditation and industry tie-ups.', 20, 'Institute of National Importance', 'DPIIT, MoCI', 1, 75.30, 4.8, 140, true),

('55555555-5555-5555-5555-555555555510', 'Vellore Institute of Technology', 'VIT Vellore', 'vit-vellore', '22222222-2222-2222-2222-222222222210', 'Private', 1984, 'https://vit.ac.in', 'https://images.unsplash.com/photo-1562774053-701939374585?w=160&h=160&fit=crop', 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=500&fit=crop', 'Top-ranked private engineering and technology university with modern smart classrooms, international dual-degree programs, and massive campus placement record.', 372, 'NAAC A++, ABET', 'AICTE, UGC', 11, 65.51, 4.4, 820, false)
ON CONFLICT (slug) DO NOTHING;

-- 7. Insert College Courses & Fees
INSERT INTO public.college_courses (college_id, course_id, fees_total, fees_annual, seats, duration_years, degree_type) VALUES
('55555555-5555-5555-5555-555555555501', '33333333-3333-3333-3333-333333333301', 850000, 212500, 87, 4.0, 'B.Tech'),
('55555555-5555-5555-5555-555555555502', '33333333-3333-3333-3333-333333333301', 920000, 230000, 171, 4.0, 'B.Tech'),
('55555555-5555-5555-5555-555555555503', '33333333-3333-3333-3333-333333333301', 890000, 222500, 120, 4.0, 'B.Tech'),
('55555555-5555-5555-5555-555555555504', '33333333-3333-3333-3333-333333333301', 1980000, 495000, 240, 4.0, 'B.E.'),
('55555555-5555-5555-5555-555555555505', '33333333-3333-3333-3333-333333333304', 2500000, 1250000, 395, 2.0, 'PGDM / MBA'),
('55555555-5555-5555-5555-555555555506', '33333333-3333-3333-3333-333333333304', 2450000, 1225000, 480, 2.0, 'MBA'),
('55555555-5555-5555-5555-555555555507', '33333333-3333-3333-3333-333333333306', 7500, 1500, 125, 5.5, 'MBBS'),
('55555555-5555-5555-5555-555555555508', '33333333-3333-3333-3333-333333333307', 1600000, 320000, 300, 5.0, 'B.A. LL.B.'),
('55555555-5555-5555-5555-555555555509', '33333333-3333-3333-3333-333333333308', 1140000, 285000, 125, 4.0, 'B.Des'),
('55555555-5555-5555-5555-555555555510', '33333333-3333-3333-3333-333333333301', 780000, 195000, 1200, 4.0, 'B.Tech');

-- 8. Insert Placements
INSERT INTO public.placements (college_id, year, avg_package, median_package, highest_package, placement_pct, top_recruiters) VALUES
('55555555-5555-5555-5555-555555555501', 2025, 21.48, 17.50, 131.00, 88.5, ARRAY['Google', 'Qualcomm', 'Microsoft', 'Texas Instruments', 'Goldman Sachs']),
('55555555-5555-5555-5555-555555555502', 2025, 23.50, 19.00, 168.00, 91.2, ARRAY['Apple', 'Jane Street', 'Uber', 'Nvidia', 'Rubrik']),
('55555555-5555-5555-5555-555555555503', 2025, 22.80, 18.20, 150.00, 89.0, ARRAY['Microsoft', 'Tower Research', 'DE Shaw', 'Amazon', 'Intel']),
('55555555-5555-5555-5555-555555555504', 2025, 19.80, 16.00, 60.75, 87.0, ARRAY['Cisco', 'Oracle', 'JPMorgan Chase', 'Samsung R&D', 'Adobe']),
('55555555-5555-5555-5555-555555555505', 2025, 34.36, 31.50, 115.00, 100.0, ARRAY['McKinsey & Co', 'BCG', 'Bain & Company', 'Goldman Sachs', 'Blackstone']),
('55555555-5555-5555-5555-555555555506', 2025, 35.31, 33.00, 110.00, 100.0, ARRAY['Kearney', 'Strategy&', 'Accenture Strategy', 'Amazon', 'Microsoft']),
('55555555-5555-5555-5555-555555555508', 2025, 17.20, 16.00, 32.00, 96.0, ARRAY['Shardul Amarchand Mangaldas', 'Trilegal', 'AZB & Partners', 'Khaitan & Co', 'Cyril Amarchand']),
('55555555-5555-5555-5555-555555555509', 2025, 14.50, 12.00, 36.00, 92.0, ARRAY['Google UX', 'Samsung Design', 'Microsoft Studio', 'Tata Motors', 'IKEA']),
('55555555-5555-5555-5555-555555555510', 2025, 9.90, 8.00, 102.00, 82.4, ARRAY['Microsoft', 'Amazon', 'TCS Ninja/Digital', 'Infosys', 'Deloitte']);

-- 9. Insert Cutoffs (for Predictor and college tabs)
INSERT INTO public.cutoffs (college_id, course_id, exam_id, year, category, round_no, opening_rank, closing_rank, quota) VALUES
('55555555-5555-5555-5555-555555555502', '33333333-3333-3333-3333-333333333301', '44444444-4444-4444-4444-444444444402', 2025, 'GEN', 6, 1, 68, 'All India'),
('55555555-5555-5555-5555-555555555503', '33333333-3333-3333-3333-333333333301', '44444444-4444-4444-4444-444444444402', 2025, 'GEN', 6, 25, 116, 'All India'),
('55555555-5555-5555-5555-555555555501', '33333333-3333-3333-3333-333333333301', '44444444-4444-4444-4444-444444444402', 2025, 'GEN', 6, 85, 148, 'All India'),
('55555555-5555-5555-5555-555555555502', '33333333-3333-3333-3333-333333333301', '44444444-4444-4444-4444-444444444402', 2025, 'OBC', 6, 15, 62, 'All India'),
('55555555-5555-5555-5555-555555555501', '33333333-3333-3333-3333-333333333301', '44444444-4444-4444-4444-444444444402', 2025, 'OBC', 6, 40, 110, 'All India'),
('55555555-5555-5555-5555-555555555507', '33333333-3333-3333-3333-333333333306', '44444444-4444-4444-4444-444444444404', 2025, 'GEN', 1, 1, 57, 'All India'),
('55555555-5555-5555-5555-555555555508', '33333333-3333-3333-3333-333333333307', '44444444-4444-4444-4444-444444444405', 2025, 'GEN', 1, 1, 114, 'All India'),
('55555555-5555-5555-5555-555555555509', '33333333-3333-3333-3333-333333333308', '44444444-4444-4444-4444-444444444406', 2025, 'GEN', 1, 1, 52, 'All India'),
('55555555-5555-5555-5555-555555555510', '33333333-3333-3333-3333-333333333301', '44444444-4444-4444-4444-444444444401', 2025, 'GEN', 1, 1000, 7500, 'All India');

-- 10. Insert College-Exam Accepted Links
INSERT INTO public.college_exams (college_id, exam_id, min_score_percentile, notes) VALUES
('55555555-5555-5555-5555-555555555501', '44444444-4444-4444-4444-444444444402', 99.8, 'Must qualify JEE Main before JEE Advanced'),
('55555555-5555-5555-5555-555555555502', '44444444-4444-4444-4444-444444444402', 99.9, 'Top AIR ranks for CSE'),
('55555555-5555-5555-5555-555555555503', '44444444-4444-4444-4444-444444444402', 99.85, 'Direct JoSAA counselling'),
('55555555-5555-5555-5555-555555555505', '44444444-4444-4444-4444-444444444403', 99.5, 'Sectional minimum 80 percentile in each section'),
('55555555-5555-5555-5555-555555555506', '44444444-4444-4444-4444-444444444403', 99.0, 'Balanced profile, work-ex given weightage'),
('55555555-5555-5555-5555-555555555507', '44444444-4444-4444-4444-444444444404', 99.99, 'MCC All India Quota counseling'),
('55555555-5555-5555-5555-555555555508', '44444444-4444-4444-4444-444444444405', 99.2, 'Consortium of NLUs centralized rounds'),
('55555555-5555-5555-5555-555555555509', '44444444-4444-4444-4444-444444444406', 95.0, 'DAT Prelims followed by Studio Test & Interview');

-- 11. Insert Sample Reviews
INSERT INTO public.reviews (college_id, reviewer_name, course_name, graduation_year, rating_overall, rating_infrastructure, rating_faculty, rating_placements, rating_campus_life, title, pros, cons, status) VALUES
('55555555-5555-5555-5555-555555555502', 'Rohit Sen', 'B.Tech Computer Science', 2024, 4.9, 4.8, 4.9, 5.0, 5.0, 'Life-changing experience with unmatched opportunities', 'Brilliant peer group where everyone is an achiever. Highest caliber professors, active tech teams (Formula Student, Mars Rover), and huge campus life with Mood Indigo fest.', 'Academic pressure can get overwhelming during midterms; Powai humidity during monsoon takes getting used to.', 'approved'),
('55555555-5555-5555-5555-555555555505', 'Ananya Deshmukh', 'PGDM / MBA', 2023, 4.9, 4.9, 5.0, 5.0, 4.7, 'The gold standard of management education', 'The WAC assignments and Harvard case methodology transform your decision-making. Incredible alumni network in McKinsey, BCG, and Silicon Valley.', 'Extremely demanding schedule with almost zero sleep in Term 1.', 'approved'),
('55555555-5555-5555-5555-555555555501', 'Karthik Raja', 'B.Tech CSE', 2024, 4.8, 5.0, 4.8, 4.9, 4.7, 'Green sanctuary with top tier research lab support', 'IIT Madras Research Park is unbeatable for incubation. Deer roaming around the lush green campus, great supercomputing facilities.', 'Mess food is predominantly South Indian which takes a while for North Indian students to adapt to.', 'approved');

-- 12. Insert Q&A
INSERT INTO public.questions (id, college_id, stream_id, author_name, title, body, upvotes, answers_count, status) VALUES
('66666666-6666-6666-6666-666666666601', '55555555-5555-5555-5555-555555555502', '11111111-1111-1111-1111-111111111101', 'Aditya Verma', 'What JEE Advanced rank is generally required for IIT Bombay CSE for OBC category?', 'I scored well in test series and am targeting IIT Bombay CSE. Does OBC NCL have a realistic chance up to rank 80?', 24, 1, 'approved'),
('66666666-6666-6666-6666-666666666602', '55555555-5555-5555-5555-555555555505', '11111111-1111-1111-1111-111111111102', 'Priya Kulkarni', 'Does IIM Ahmedabad accept non-engineers with 98.5 percentile in CAT?', 'I have a B.Com degree with 90% in 10th and 12th. How much academic diversity benefit does IIMA grant during shortlist?', 38, 1, 'approved');

INSERT INTO public.answers (question_id, author_name, author_badge, body, upvotes, is_verified, status) VALUES
('66666666-6666-6666-6666-666666666601', 'Aryan Nair (IITB 3rd Year)', 'Verified Student', 'For IIT Bombay Computer Science, the OBC category closing rank in Round 6 of JoSAA usually hovers strictly between AIR 50 to 65. If you secure around AIR 55 or below in OBC category, your seat is virtually guaranteed.', 19, true, 'approved'),
('66666666-6666-6666-6666-666666666602', 'Rohan Mehta (IIMA PGP2)', 'Alumni', 'Yes! Non-engineers receive substantial Academic Diversity points (Category AC-4 for Commerce). With 90/90 academics and a 98.5+ percentile, you have a very strong shot at the WAT-PI call stage.', 27, true, 'approved');

-- 13. Insert News & Articles
INSERT INTO public.articles (title, slug, stream_id, category, summary, content, cover_image, author_name, read_time_minutes) VALUES
('JEE Main 2027 Registration Dates Announced: Step-by-Step Application Guide', 'jee-main-2027-registration-guide', '11111111-1111-1111-1111-111111111101', 'Exam Updates', 'NTA announces session 1 timeline for JEE Main 2027. Everything you need to know about eligibility, syllabus changes, and form filling.', 'The National Testing Agency (NTA) has officially released the schedule for the Joint Entrance Examination (Main) 2027 Session 1. Aspiring candidates can fill out the online application forms starting November 2026. The key changes this year include strict Aadhaar verification and unified exam centers.', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop', 'Dr. Ramesh Sharma', 5),
('CAT 2026 Strategy: How to Score 99+ Percentile in VARC and DILR', 'cat-2026-strategy-99-percentile-varc-dilr', '11111111-1111-1111-1111-111111111102', 'Preparation', 'Proven breakdown of time management, passage reading techniques, and set selection for IIM calls.', 'Cracking the CAT exam requires a nuanced approach where accuracy beats volume. For VARC, reading diverse subjects like philosophy, sociology, and economics develops speed. In DILR, spending the first 8 minutes scanning all 4 sets is the single biggest differentiator.', 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=450&fit=crop', 'Tanvi Mathur (CAT 99.89)', 7),
('NIRF Rankings 2025 Breakdown: Top Engineering & Management Institutes', 'nirf-rankings-2025-top-engineering-management', '11111111-1111-1111-1111-111111111101', 'News', 'Ministry of Education announces NIRF 2025. IIT Madras and IIM Ahmedabad retain apex rankings.', 'The Ministry of Education released the National Institutional Ranking Framework (NIRF) 2025 rankings today. IIT Madras bagged the first position in the Overall category for the sixth consecutive year, while IIM Ahmedabad continues its supremacy in Management studies.', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=450&fit=crop', 'EduFlex Bureau', 4);

COMMIT;
