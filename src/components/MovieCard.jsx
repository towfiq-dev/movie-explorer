import React, { useState } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import { 
  HiOutlineHeart, 
  HiHeart, 
  HiOutlineArrowDownTray, 
  HiCheckCircle, 
  HiEye 
} from 'react-icons/hi2';

const FALLBACK_POSTER = "https://placehold.co/210x295?text=No+Image";

const MovieCard = ({ show, onClick = () => {} }) => {
  const { toggleWatchlist, addDownload, isBookmarked, isDownloaded } = useWatchlist();
  const [isDownloading, setIsDownloading] = useState(false);

  if (!show) return null;

  const posterUrl = show.image?.medium || FALLBACK_POSTER;
  const year = show.premiered ? new Date(show.premiered).getFullYear() : "—";
  const rating = show.rating?.average;
  const bookmarked = isBookmarked(show.id);
  const downloaded = isDownloaded(show.id);

  const handleDownload = (e) => {
    e.stopPropagation();
    if (downloaded || isDownloading) return;

    setIsDownloading(true);
    setTimeout(() => {
      addDownload(show);
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div
      onClick={() => onClick(show)}
      className="card bg-base-100 border border-base-200/80 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden flex flex-col justify-between"
    >
      <figure className="relative h-64 overflow-hidden bg-base-300">
        <img
          src={posterUrl}
          alt={show.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWatchlist(show);
          }}
          className={`btn btn-circle btn-sm absolute top-2.5 left-2.5 z-10 backdrop-blur-md border border-white/20 ${
            bookmarked ? "bg-rose-500 text-white" : "bg-black/50 text-white"
          }`}
        >
          {bookmarked ? <HiHeart className="text-base" /> : <HiOutlineHeart className="text-base" />}
        </button>

        <div className="absolute top-2.5 right-2.5 badge badge-warning gap-1 font-bold text-xs shadow-md">
          ⭐ {rating ? rating.toFixed(1) : "N/A"}
        </div>
      </figure>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <div className="flex items-center justify-between text-xs text-base-content/60 mb-1 font-medium">
            <span>📅 {year}</span>
            {show.genres?.[0] && (
              <span className="badge badge-ghost badge-sm text-[11px] font-semibold">
                {show.genres[0]}
              </span>
            )}
          </div>
          <h3 className="text-sm font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {show.name}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(show);
            }}
            className="btn btn-outline btn-primary btn-sm rounded-xl text-xs font-semibold flex items-center justify-center gap-1 hover:text-white"
          >
            <HiEye className="text-sm" />
            <span>Details</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`btn btn-sm rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              downloaded
                ? "bg-emerald-600/15 text-emerald-600 border border-emerald-600/30 cursor-default"
                : "btn-primary shadow-xs"
            }`}
          >
            {isDownloading ? (
              <span className="loading loading-spinner loading-xs" />
            ) : downloaded ? (
              <>
                <HiCheckCircle className="text-emerald-600 text-sm" />
                <span>Saved</span>
              </>
            ) : (
              <>
                <HiOutlineArrowDownTray className="text-sm" />
                <span>Download</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;