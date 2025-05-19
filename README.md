// ===============================
// Part 10: README.md - Project Summary & Developer Manual
// ===============================
/*
# StreamFinder

## Project Overview
StreamFinder is a full-stack movie and TV show recommendation app built using the TMDb API, Node.js, Express, Supabase, and HTML/CSS/JS. It allows users to view trending content, search for shows and movies, see detailed information, and rate titles to build a personal profile.

### Target Browsers
- Chrome (desktop & mobile)
- Firefox
- Safari (iOS)
- Edge

---

## Developer Manual

### Requirements
- Node.js v18+
- Vercel account (for deployment)
- Supabase project
- TMDb API Key

### Setup Instructions
1. Clone the repo:
```bash
git clone https://github.com/your-username/streamsage.git
cd streamsage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env`:
```
TMDB_API_KEY=your_tmdb_api_key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_anon_key
```

4. Create Supabase table using the `schema.sql` file.

5. Start the development server:
```bash
node server/index.js
```
Visit: http://localhost:3000

---

### API Routes
#### TMDb Proxy
- `GET /api/tmdb/trending` – trending content
- `GET /api/tmdb/search?q=` – search by title
- `GET /api/tmdb/details/:type/:id` – full movie/show details

#### User API (Supabase)
- `GET /api/user/ratings` – get all ratings
- `POST /api/user/ratings` – add a rating (JSON: `{ title, type, rating }`)

---

### Known Issues
- No login system – all ratings are public
- Ratings can't be edited/deleted yet

### Roadmap
- Add user authentication via Supabase
- Add genre filter on Search page
- Let users sort ratings by score or title

---

### Deployment
Deployed to Vercel: https://streamsage.vercel.app

*/
