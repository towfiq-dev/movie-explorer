import React, { useState } from "react";
import MovieModal from "./MovieModal";

const highlights = [
  {
    id: 169,
    name: "Breaking Bad",
    rating: { average: 9.5 },
    premiered: "2008-01-20",
    genres: ["Drama", "Crime", "Thriller"],
    runtime: 60,
    status: "Ended",
    image: {
      original: "https://static.tvmaze.com/uploads/images/original_untouched/501/1253519.jpg",
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg",
    },
    summary:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    tagline: "All hail the king.",
  },
  {
    id: 82,
    name: "Game of Thrones",
    rating: { average: 9.3 },
    premiered: "2011-04-17",
    genres: ["Drama", "Action", "Fantasy"],
    runtime: 60,
    status: "Ended",
    image: {
      original: "https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg",
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/1/2668.jpg",
    },
    summary:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    tagline: "Winter is coming.",
  },
  {
    id: 73,
    name: "The Walking Dead",
    rating: { average: 8.1 },
    premiered: "2010-10-31",
    genres: ["Drama", "Action", "Horror"],
    runtime: 45,
    status: "Ended",
    image: {
      original: "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg",
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg",
    },
    summary:
      "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
    tagline: "Fight the dead. Fear the living.",
  },
];

const TopRatedHighlights = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <section className="py-14 px-4 md:px-10 max-w-7xl mx-auto border-t border-base-content/5">
      {/* Section Heading */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-2">
        <div>
          <span className="badge badge-warning badge-outline text-xs font-semibold uppercase tracking-wider mb-2">
            Hall of Fame
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            All-Time Masterpieces
          </h2>
          <p className="text-sm text-base-content/60 mt-1">
            Critically acclaimed stories that defined a generation of television
          </p>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((show) => (
          <div
            key={show.id}
            className="group relative rounded-3xl overflow-hidden bg-base-200 border border-base-content/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Header with Badge Overlay */}
            <div className="relative h-60 w-full overflow-hidden bg-base-300">
              <img
                src={show.image.original}
                alt={show.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-black/40" />

              {/* Top Pill Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="badge badge-warning font-bold text-xs shadow-md">
                  ⭐ {show.rating.average}
                </span>
                <span className="badge badge-neutral text-xs backdrop-blur-md bg-black/60 text-white border-0">
                  {new Date(show.premiered).getFullYear()}
                </span>
              </div>

              {/* Tagline */}
              <p className="absolute bottom-3 left-4 text-xs italic font-semibold text-white/90 drop-shadow-md">
                "{show.tagline}"
              </p>
            </div>

            {/* Card Info */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-base-content group-hover:text-primary transition-colors">
                  {show.name}
                </h3>
                <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
                  {show.summary}
                </p>
              </div>

              {/* Genres and Action */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {show.genres.map((g) => (
                    <span
                      key={g}
                      className="badge badge-ghost badge-sm text-[11px] font-medium"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedShow(show)}
                  className="btn btn-outline btn-primary btn-sm w-full rounded-xl normal-case font-semibold gap-1 group-hover:btn-primary group-hover:text-white transition-all"
                >
                  Quick Overview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reused Existing MovieModal */}
      {selectedShow && (
        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </section>
  );
};

export default TopRatedHighlights;