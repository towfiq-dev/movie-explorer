import MovieCard from "./MovieCard";

const GRID_CLASSES =
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4";

const SkeletonCard = () => (
  <div className="card bg-base-100 shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-64 bg-base-300" />
    <div className="card-body p-3 gap-2">
      <div className="h-4 bg-base-300 rounded w-3/4" />
      <div className="h-3 bg-base-300 rounded w-1/2" />
      <div className="h-7 bg-base-300 rounded-full w-full mt-1" />
    </div>
  </div>
);

const MovieGrid = ({
  shows = [],
  onSelect = () => {},
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return (
      <div className={GRID_CLASSES}>
        {Array.from({ length: 10 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-error font-medium">{error}</p>
      </div>
    );
  }

  if (shows.length === 0) {
    return (
      <p className="text-center text-base-content/60 py-16">
        No results found. Try a different search term.
      </p>
    );
  }

  return (
    <div className={GRID_CLASSES}>
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onClick={onSelect} />
      ))}
    </div>
  );
};

export default MovieGrid;
