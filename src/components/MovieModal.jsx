import { useEffect, useState } from "react";
import { getShowById } from "../api/tvmaze";

// TVMaze's `summary` field comes back as raw HTML (e.g. "<p>...</p>").
// We only want plain text here.
const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");

const CLOSE_ANIMATION_MS = 200;

const MovieModal = ({ show, onClose = () => {} }) => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  // Trigger the enter animation on mount (starts at opacity/scale 0,
  // flips to 1 right after mount so the transition actually plays).
  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Close on Escape.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch full show details (genres, status, network, runtime, summary...)
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

  // Play the exit animation, then actually unmount (via parent's onClose).
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, CLOSE_ANIMATION_MS);
  };

  if (!show) return null;

  // Use full details once loaded, fall back to the card's basic data meanwhile.
  const data = details || show;
  const backdropUrl = data.image?.original || data.image?.medium;
  const year = data.premiered ? new Date(data.premiered).getFullYear() : "—";
  const rating = data.rating?.average;
  const summary = data.summary
    ? stripHtml(data.summary)
    : "No overview available.";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
      role="presentation"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal box (click inside must NOT close the modal) */}
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={data.name}
        className={`relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transition-all duration-200 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="btn btn-circle btn-ghost min-h-11 min-w-11 h-11 w-11 absolute right-3 top-3 z-10 bg-base-100/80 hover:bg-base-100"
        >
          ✕
        </button>

        {/* Backdrop / poster image */}
        <div className="w-full h-56 md:h-72 bg-base-300 rounded-t-2xl overflow-hidden">
          {backdropUrl && !imageFailed ? (
            <img
              src={backdropUrl}
              alt={data.name}
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-base-content/40 text-sm">
              No image available
            </div>
          )}
        </div>

        <div className="p-5 md:p-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{data.name}</h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-base-content/70">
            <span>⭐ Rating: {rating ? rating.toFixed(1) : "N/A"}</span>
            <span>📅 Release: {year}</span>
            {data.status && <span>📺 Status: {data.status}</span>}
            {data.runtime && <span>⏱️ Runtime: {data.runtime} min</span>}
            {data.network?.name && <span>📡 Network: {data.network.name}</span>}
          </div>

          {data.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.genres.map((genre) => (
                <span key={genre} className="badge badge-outline badge-sm">
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-1">Overview</h3>
            {isLoading ? (
              <div className="space-y-2 animate-pulse">
                <div className="h-3 bg-base-300 rounded w-full" />
                <div className="h-3 bg-base-300 rounded w-5/6" />
                <div className="h-3 bg-base-300 rounded w-2/3" />
              </div>
            ) : error ? (
              <p className="text-error text-sm">{error}</p>
            ) : (
              <p className="text-sm text-base-content/70 leading-relaxed">
                {summary}
              </p>
            )}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleClose}
              className="btn btn-outline btn-sm rounded-full min-h-11"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
