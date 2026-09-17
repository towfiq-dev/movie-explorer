import React from "react";
import { 
  HiStar, 
  HiCalendar, 
  HiClock, 
  HiTrash, 
  HiPlay, 
  HiInformationCircle 
} from "react-icons/hi2";

const FALLBACK_POSTER = "https://placehold.co/210x295?text=No+Poster";

const WatchlistListItem = ({ show, isWatchlist, onDetails, onRemove }) => {
  const poster = show.image?.medium || show.image?.original || FALLBACK_POSTER;
  const year = show.premiered ? new Date(show.premiered).getFullYear() : "N/A";
  const rating = show.rating?.average;
  const cleanSummary = show.summary
    ? show.summary.replace(/<[^>]*>?/gm, "")
    : "No detailed storyline recorded for this title.";

  return (
    <div className="group relative flex flex-col sm:flex-row items-center sm:items-stretch bg-base-100 border border-base-200/90 hover:border-primary/40 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 gap-5 overflow-hidden">
      {/* Background Subtle Gradient Bar */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-primary transition-colors duration-300" />

      {/* Poster Image Container */}
      <div className="w-full sm:w-36 md:w-44 h-52 sm:h-auto rounded-2xl overflow-hidden bg-base-300 shrink-0 relative shadow-sm">
        <img
          src={poster}
          alt={show.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Rating Floating Tag */}
        <div className="absolute top-2.5 left-2.5 badge badge-warning gap-1 font-extrabold text-xs shadow-md backdrop-blur-md bg-warning/90">
          <HiStar className="text-sm" />
          <span>{rating ? rating.toFixed(1) : "—"}</span>
        </div>
      </div>

      {/* Content & Metadata */}
      <div className="flex-1 flex flex-col justify-between w-full space-y-3">
        <div>
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-base-content/60 mb-2 font-medium">
            <span className="flex items-center gap-1">
              <HiCalendar className="text-primary text-sm" /> {year}
            </span>
            <span>•</span>
            {show.runtime && (
              <>
                <span className="flex items-center gap-1">
                  <HiClock className="text-primary text-sm" /> {show.runtime}m
                </span>
                <span>•</span>
              </>
            )}
            <span className="badge badge-sm badge-neutral font-semibold tracking-wide">
              {show.status || "Completed"}
            </span>
            {show.downloadedAt && (
              <span className="badge badge-sm badge-outline badge-primary font-semibold">
                Saved on {show.downloadedAt}
              </span>
            )}
          </div>

          {/* Show Title */}
          <h3 
            onClick={onDetails}
            className="text-lg sm:text-2xl font-black text-base-content group-hover:text-primary transition-colors cursor-pointer line-clamp-1"
          >
            {show.name}
          </h3>

          {/* Genre Chips */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {show.genres?.slice(0, 4).map((genre) => (
              <span 
                key={genre} 
                className="badge badge-ghost badge-sm text-[11px] font-semibold bg-base-200/80 border border-base-content/5"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-base-content/70 mt-3 line-clamp-2 leading-relaxed">
            {cleanSummary}
          </p>
        </div>

        {/* Action Controls */}
        <div className="pt-3 flex items-center justify-between border-t border-base-content/10 gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={onDetails}
              className="btn btn-primary btn-sm rounded-xl px-4 text-xs font-bold gap-2 shadow-xs hover:shadow-primary/30"
            >
              <HiInformationCircle className="text-base" />
              <span>View Details</span>
            </button>

            {!isWatchlist && (
              <a
                href={show.officialSite || `https://www.google.com/search?q=${encodeURIComponent(show.name + " watch online")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm rounded-xl px-4 text-xs font-bold gap-1.5"
              >
                <HiPlay className="text-sm" />
                <span>Play Offline</span>
              </a>
            )}
          </div>

          <button
            onClick={onRemove}
            className="btn btn-ghost btn-sm text-error hover:bg-error/10 rounded-xl text-xs font-semibold gap-1.5 transition-all"
            title="Remove from collection"
          >
            <HiTrash className="text-base" />
            <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistListItem;