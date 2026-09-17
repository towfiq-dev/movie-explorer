import React from "react";
import { Link } from "react-router-dom";
import { HiHeart, HiArrowDownTray, HiFilm } from "react-icons/hi2";

const WatchlistEmptyState = ({ activeTab }) => {
  const isWatchlist = activeTab === "watchlist";

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-3xl bg-base-200/40 border border-base-content/10">
      <div className="w-20 h-20 rounded-2xl bg-base-100 border border-base-content/10 shadow-md flex items-center justify-center text-3xl mb-5">
        {isWatchlist ? (
          <HiHeart className="text-rose-500 animate-pulse" />
        ) : (
          <HiArrowDownTray className="text-primary animate-bounce" />
        )}
      </div>

      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-base-content">
        {isWatchlist ? "Your Watchlist is empty" : "No downloaded shows yet"}
      </h3>

      <p className="text-xs sm:text-sm text-base-content/60 max-w-md mt-1.5 mb-6 leading-relaxed">
        {isWatchlist
          ? "Browse our catalogue and click the heart icon on any movie poster to preserve your favorite titles here."
          : "Tap the download button on any title card to save it into your offline cached storage."}
      </p>

      <Link
        to="/movies"
        className="btn btn-primary rounded-xl btn-sm px-6 font-bold gap-2 shadow-sm"
      >
        <HiFilm className="text-base" />
        <span>Explore Catalogue</span>
      </Link>
    </div>
  );
};

export default WatchlistEmptyState;