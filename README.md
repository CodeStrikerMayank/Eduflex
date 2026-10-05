# EduFlex | Indian College, Course & Exam Discovery Portal

A modern, high-performance Shiksha-style education discovery platform for Indian colleges, courses, entrance examinations, cutoff predictors, and peer reviews.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and backed by **PostgreSQL / Supabase**.

---

## 🌟 Key Features

1. **Academic Stream Hubs:** Dedicated discovery hubs across 5 major streams:
   - **Engineering** (B.Tech, B.E.)
   - **Management** (MBA, PGDM)
   - **Medical** (MBBS, BDS)
   - **Law** (BA LL.B, BBA LL.B)
   - **Design** (B.Des, M.Des)

2. **AI-Calibrated College Predictor:**
   - Input exam rank/score (JEE Main, JEE Advanced, CAT, NEET UG, CLAT, NID DAT).
   - Select reservation category (GEN, OBC-NCL, SC, ST, EWS).
   - Instantly calculates admission probabilities and buckets results into **Safe**, **Moderate**, and **Ambitious** colleges based on historical Round 6 closing ranks.

3. **Side-by-Side College Comparison:**
   - Compare up to 3 colleges simultaneously across NIRF rankings, total tuition fees, average & highest placement packages, campus size, and accepted entrance exams.

4. **Multi-Faceted College Directory:**
   - Filter by Stream, Ownership (Government, Private, Deemed), State/Region, Max Fees, and Accepted Exam.
   - Sort by NIRF Rank, Rating, Highest Placement, or Lowest Fees.

5. **Deep College Profiles:**
   - Tabbed layout covering Overview, Courses & Fees, Placements (Average, Median, Highest), Cutoffs by category & round, Verified Reviews, and Student Q&A.

6. **Regulatory Compliance & Data Integrity:**
   - Mandatory explicit user consent checkboxes on all counseling inquiry forms.
   - Grounded in official data sources (NIRF, AICTE, UGC, JoSAA, NMC).

---

## 🚀 Deployment on Render

This repository is pre-configured for seamless deployment as a **Web Service** on [Render](https://render.com).

### Render Service Settings:
- **Environment:** `Node`
- **Region:** Any (e.g., Singapore, Frankfurt, or Oregon)
- **Branch:** `main`
- **Build Command:**
  ```bash
  npm install --legacy-peer-deps && npm run build
  ```
- **Start Command:**
  ```bash
  npm run start
  ```
- **Environment Variables:**
  | Variable | Value | Required |
  |---|---|---|
  | `NODE_VERSION` | `20.18.0` | Recommended |
  | `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Optional (fallback enabled) |
  | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Optional (fallback enabled) |

Alternatively, use the included [`render.yaml`](render.yaml) file by choosing **"Blueprints"** on your Render dashboard.

---

## 💻 Local Development

### 1. Clone the repository:
```bash
git clone https://github.com/CodeStrikerMayank/Eduflex.git
cd Eduflex
```

### 2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

### 3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Database Setup (Supabase)

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Run the migration script in [`supabase/migrations/001_initial_schema.sql`](supabase/migrations/001_initial_schema.sql).
4. Run the seed data script in [`supabase/seed.sql`](supabase/seed.sql).
5. Copy your project URL and anon public key into `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
*(Note: If no Supabase credentials are provided, EduFlex seamlessly hydrates with its built-in in-memory dataset).*

---

## 🧪 Testing

To run the predictor verification unit test suite:
```bash
node scripts/verify-predictor.js
```
All 7 admission cutoff margin tests will run against known JEE Advanced, NEET UG, and CLAT benchmarks.
