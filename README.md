# Kenya Near Dates

Location-based online dating app for people in Kenya.

Connect with nearby Kenyans using GPS location, filter by county, age, interests, tribe, and more.

## Core Features (MVP)

- User profiles with photos, bio, age, county, interests
- Geolocation to find nearby users
- Swipe / Like / Match interface
- Filters: county, distance, age range
- Mock data for demo (ready to connect to real backend)
- Safety placeholders

## Tech Stack

- **Frontend**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Hosting**: Netlify
- **Version Control**: GitHub
- **Recommended Backend** (for production): Supabase (Auth, Postgres with PostGIS, Realtime, Storage)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Netlify

1. Push this repo to GitHub (already done if created via tools)
2. In Netlify: Import from Git → select this repo
3. Build settings are auto-detected or use the `netlify.toml`
4. Deploy!

## Next Steps for Full App

1. **Auth**: Supabase Auth or NextAuth.js
2. **Database**: Supabase Postgres + PostGIS for location queries
3. **Photos**: Supabase Storage or Cloudinary
4. **Real-time Chat**: Supabase Realtime
5. **Payments**: M-Pesa (Daraja API)
6. **Notifications**: Web Push or Firebase
7. **Safety**: Report/block system
8. **Filters**: Tribe, religion, lifestyle, student/professional mode

Built for Kenyans — localized for counties like Nairobi, Mombasa, Kisumu, Kiambu, etc.