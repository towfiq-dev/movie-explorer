import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import { getShows, searchShows } from "../api/tvmaze";

const DEBOUNCE_DELAY_MS = 400;

const MovieListing = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounce: only update debouncedQuery after the user pauses typing,
  // so we don't fire an API call on every keystroke.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, DEBOUNCE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [query]);

  // Fetch shows whenever the debounced query changes.
  // Empty query -> full show list, non-empty -> TVMaze search endpoint.
  useEffect(() => {
    let isCancelled = false;

    const fetchShows = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = debouncedQuery
          ? await searchShows(debouncedQuery)
          : await getShows();

        if (!isCancelled) {
          setShows(data);
        }
      } catch {
        if (!isCancelled) {
          setError("Something went wrong while fetching movies. Please try again.");
          setShows([]);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchShows();

    return () => {
      isCancelled = true;
    };
  }, [debouncedQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
      <div className="flex flex-col items-center gap-6 mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Browse Movies &amp; Shows</h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <MovieGrid
        shows={shows}
        onSelect={setSelectedShow}
        isLoading={isLoading}
        error={error}
      />

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
};

export default MovieListing;
