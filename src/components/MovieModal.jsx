import { useEffect, useState } from "react";
import { getShowById } from "../api/tvmaze";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");
const CLOSE_ANIMATION_MS = 200;
const FALLBACK_POSTER = "https://placehold.co/210x295?text=No+Image";

const MovieModal = ({ show, onClose = () => {} }) => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!show?.id) return;
    let isCancelled = false;

    setIsLoading(true);
    setError(null);

    getShowById(show.id)
      .then((data) => {
        if (!isCancelled) setDetails(data);
      })
      .catch(() => {
        if (!isCancelled) setError("Couldn't load full details for this title.");
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [show?.id]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, CLOSE_ANIMATION_MS);
  };

  if (!show) return null;

  const data = details || show;
  const posterUrl = data.image?.original || data.image?.medium || FALLBACK_POSTER;
  const year = data.premiered ? new Date(data.premiered).getFullYear() : "—";
  const rating = data.rating?.average;
  const summary = data.summary
    ? stripHtml(data.summary)
    : "No overview available for this title.";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 transition-all duration-300 ${
        isVisible ? "opacity-100 backdrop-blur-md" : "opacity-0"
      }`}
      onClick={handleClose}
      role="presentation"
    >
      {/* Dark Ambient Backdrop */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Main Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={data.name}
        className={`relative bg-base-100 text-base-content border border-base-content/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col transition-all duration-300 transform ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Top Decorative Ambient Glow */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="btn btn-circle btn-sm btn-ghost absolute right-4 top-4 z-20 bg-base-200/70 hover:bg-base-300 backdrop-blur-md border border-base-content/10 transition-transform active:scale-90"
        >
          ✕
        </button>

        {/* Scrollable Content Container */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Top Hero Layout: Poster & Identity */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* Crisp Poster Card with Glow Shadow */}
            <div className="relative group shrink-0">
              <div className="w-36 sm:w-44 rounded-2xl overflow-hidden shadow-2xl border border-base-content/10 bg-base-300 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={posterUrl}
                  alt={data.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_POSTER;
                  }}
                  className="w-full h-auto aspect-[2/3] object-cover"
                />
              </div>
            </div>

            {/* Title & Quick Metadata */}
            <div className="flex-1 text-center sm:text-left space-y-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  {data.name}
                </h2>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs text-base-content/60 mt-1.5 font-medium">
                  <span className="flex items-center gap-1">📅 {year}</span>
                  <span>•</span>
                  <span>⏱️ {data.runtime ? `${data.runtime} min` : "Variable"}</span>
                  {data.network?.name && (
                    <>
                      <span>•</span>
                      <span className="text-primary font-semibold">{data.network.name}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Badges / Micro Tags */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                {/* Rating Badge */}
                <div className="badge badge-warning gap-1.5 py-3 px-3 font-bold text-xs shadow-sm">
                  ⭐ {rating ? rating.toFixed(1) : "N/A"}
                </div>

                {/* Status Badge */}
                {data.status && (
                  <div className="badge badge-outline badge-success py-3 px-3 text-xs font-semibold">
                    ● {data.status}
                  </div>
                )}
              </div>

              {/* Genre Pills */}
              {data.genres?.length > 0 && (
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
                  {data.genres.map((genre) => (
                    <span
                      key={genre}
                      className="bg-base-200/80 hover:bg-base-200 text-base-content/80 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-base-300"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-base-200/50 rounded-2xl border border-base-content/5 text-center">
            <div>
              <span className="text-[11px] text-base-content/60 font-medium block uppercase tracking-wider">Score</span>
              <span className="text-sm font-bold text-warning">{rating ? `${rating} / 10` : "Unrated"}</span>
            </div>
            <div className="border-x border-base-content/10">
              <span className="text-[11px] text-base-content/60 font-medium block uppercase tracking-wider">Language</span>
              <span className="text-sm font-bold truncate block">{data.language || "English"}</span>
            </div>
            <div>
              <span className="text-[11px] text-base-content/60 font-medium block uppercase tracking-wider">Type</span>
              <span className="text-sm font-bold truncate block">{data.type || "Scripted"}</span>
            </div>
          </div>

          {/* Overview Storyline */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-base-content/50">
              Storyline & Overview
            </h3>
            {isLoading ? (
              <div className="space-y-2.5 animate-pulse pt-1">
                <div className="h-3 bg-base-300 rounded w-full" />
                <div className="h-3 bg-base-300 rounded w-5/6" />
                <div className="h-3 bg-base-300 rounded w-4/6" />
              </div>
            ) : error ? (
              <p className="text-error text-xs font-medium">{error}</p>
            ) : (
              <p className="text-sm text-base-content/80 leading-relaxed font-normal">
                {summary}
              </p>
            )}
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="p-4 bg-base-200/40 border-t border-base-content/5 flex justify-end">
          <button
            onClick={handleClose}
            className="btn btn-primary btn-sm rounded-xl px-7 font-medium shadow-md shadow-primary/20 transition-transform active:scale-95"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;