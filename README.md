# MovieExplorer 🎬

MovieExplorer is an entertainment discovery web platform built with React, Tailwind CSS, DaisyUI, and the TVMaze API. It enables users to browse television shows and movies, view detailed synopses, explore genres, manage a personal watchlist, and contact support[cite: 1, 4, 9].

---

## Features

* **Cinematic Hero Experience:** Responsive hero banner featuring overlay gradients and instant navigation actions[cite: 1, 3].
* **Live Catalog & Search:** Debounced title searching alongside comprehensive show listings pulled directly from the TVMaze REST API[cite: 4, 5].
* **Detailed Show Modal:** Overlay dialog showcasing ratings, premiere years, status, runtime, genres, and storyline synopses[cite: 9].
* **Interactive Genre Catalog:** Browse titles organized by categories including Action, Drama, Sci-Fi, Crime, and Horror.
* **Featured & Hall of Fame Spotlights:** Curated carousels and highlight grids showcasing all-time top-rated television shows[cite: 3].
* **Persistent Watchlist (State & LocalStorage):** Global watchlist context that retains saved shows across browser sessions, backed by responsive badge counters and animated bookmark buttons[cite: 2].
* **Notification Feedback:** Toast notifications powered by `react-hot-toast` that trigger upon adding or removing watchlist items.
* **Customer Support Page:** Responsive feedback and support form complete with categorized contact channels.
* **Platform Metrics:** Visual analytics showcase indexing numbers, active viewers, and global network coverage.

---

## Tech Stack

* **Frontend Framework:** React (Vite)[cite: 2]
* **Routing:** React Router DOM[cite: 1, 2]
* **Styling:** Tailwind CSS, DaisyUI
* **Icons:** React Icons (`react-icons/fa`, `react-icons/hi`)[cite: 6]
* **Notifications:** React Hot Toast
* **Data Source:** [TVMaze Public REST API](https://www.tvmaze.com/api)[cite: 5]

---

## Project Structure

```text
src/
├── api/
│   └── tvmaze.js               # Centralized API fetch handlers
├── components/
│   ├── ExploreByGenre.jsx      # Genre category navigation grid
│   ├── Footer.jsx              # Responsive multi-column footer
│   ├── HeroBanner.jsx          # Cinematic hero section
│   ├── MovieCard.jsx           # Reusable poster & detail card
│   ├── MovieGrid.jsx           # Responsive show catalog grid
│   ├── MovieModal.jsx          # Pop-up modal for detailed information
│   ├── Navbar.jsx              # Sticky navigation with watchlist dropdown
│   ├── PlatformStats.jsx       # Platform analytics & statistics
│   ├── SearchBar.jsx           # Debounced input search component
│   ├── TopRatedHighlights.jsx  # All-time masterpiece spotlight
│   └── TrendingMovies.jsx      # Featured shows limited showcase
├── context/
│   └── WatchlistContext.jsx    # Global watchlist state & LocalStorage sync
├── pages/
│   ├── ContactPage.jsx         # Support & customer service page
│   ├── Home.jsx                # Landing page aggregating key sections
│   ├── MovieListing.jsx        # Searchable and paginated catalog page
│   └── WatchlistPage.jsx       # Personal saved library & FAQ
├── App.jsx                     # Global application layout & route setup
└── main.jsx                    # Root mount point with Router & Context