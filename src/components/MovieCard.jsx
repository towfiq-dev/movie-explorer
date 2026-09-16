// Clicking anywhere on the card (or the "See Details" button) opens
// the MovieModal with the full details.
const FALLBACK_POSTER = "https://placehold.co/210x295?text=No+Image";

const MovieCard = ({ show, onClick = () => {} }) => {
  if (!show) return null;

  const posterUrl = show.image?.medium || FALLBACK_POSTER;
  const year = show.premiered ? new Date(show.premiered).getFullYear() : "—";
  const rating = show.rating?.average;

  // If the poster URL exists but the image itself fails to load (dead
  // link, network hiccup), swap in the placeholder instead of showing
  // a broken-image icon.
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_POSTER;
  };

  const handleSeeDetails = (e) => {
    e.stopPropagation();
    onClick(show);
  };

  return (
    <div
      onClick={() => onClick(show)}
      className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
    >
      <figure className="overflow-hidden">
        <img
          src={posterUrl}
          alt={show.name}
          onError={handleImageError}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </figure>
      <div className="card-body p-3 gap-2">
        <h3 className="card-title text-sm line-clamp-1">{show.name}</h3>

        <div className="flex items-center gap-3 text-xs text-base-content/60">
          <span className="flex items-center gap-1">
            ⭐ {rating ? rating.toFixed(1) : "N/A"}
          </span>
          <span className="flex items-center gap-1">📅 {year}</span>
        </div>

        <button
          onClick={handleSeeDetails}
          className="btn btn-primary btn-sm mt-1 rounded-full min-h-11"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
