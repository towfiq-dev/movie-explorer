# 🎬 MovieExplorer

A fully responsive movie/show browsing web app built with React, powered by the free, keyless [TVMaze API](https://www.tvmaze.com/api). Browse shows, search by title, and view full details in an interactive modal.

## Features

- **Home page** — hero banner with an "Explore Now" CTA into the listing page
- **Movie Listing page** — debounced search (400ms) with a responsive card grid
- **Details Modal** — full show info (genres, status, network, runtime, overview), closes on ✕, outside click, or `Esc`
- **Loading / error / empty states** on every API call
- **Poster fallback** for missing or broken images
- **Fully responsive**: 1-column grid on mobile, 2 on tablet, 3–5 on desktop, with 44px+ touch targets throughout

## Tech Stack

- React 19 + Vite
- react-router-dom v7 (client-side routing)
- Tailwind CSS v4 + DaisyUI
- react-icons
- TVMaze API (no API key required)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # lint src/
```

## Environment Variables

**None are required.** The TVMaze API (`https://api.tvmaze.com`) is public and doesn't need an API key, so there is no `.env` file in this project. If you later swap in an API that requires a key, add a `VITE_`-prefixed variable (e.g. `VITE_API_KEY`) to a local `.env` file (already git-ignored) and set the same variable in your Vercel project's Environment Variables settings — never commit real keys to source control.

## Deploying to Vercel

This project is Vercel-ready out of the box:

1. Push this repo to GitHub.
2. Import it in Vercel — it auto-detects the Vite framework preset (build command `vite build`, output directory `dist`).
3. No environment variables need to be configured (see above).
4. `vercel.json` includes a rewrite rule so client-side routes (e.g. `/movies`) work correctly on direct load / page refresh instead of 404ing.

That's it — no manual configuration needed after deploy.

## Project Structure

```
src/
  api/          # TVMaze API helper functions
  components/   # Navbar, Footer, HeroBanner, SearchBar, MovieCard, MovieGrid, MovieModal
  pages/        # Home, MovieListing
```
