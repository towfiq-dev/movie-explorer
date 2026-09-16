import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import { getShows } from '../api/tvmaze';

const TrendingMovies = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const data = await getShows(0);
        const popular = data.filter((item) => item.rating?.average);
        setShows(popular.length > 0 ? popular : data);
      } catch (err) {
        console.error("Failed to load trending shows:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  // ঠিক ৪টি ডেটা দেখানোর জন্য slice(0, 4)
  const displayedShows = shows.slice(0, 4);

  return (
    <section className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Shows</h2>
          <p className="text-sm text-base-content/60 mt-1">Top picked movies &amp; series for you</p>
        </div>
        
        <Link 
          to="/movies" 
          className="btn btn-sm btn-outline btn-primary rounded-full px-5 normal-case"
        >
          View All &rarr;
        </Link>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-md border border-base-200 animate-pulse">
              <div className="h-64 bg-base-300 w-full rounded-t-2xl" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-base-300 rounded w-3/4" />
                <div className="h-3 bg-base-300 rounded w-1/2" />
                <div className="h-8 bg-base-300 rounded-xl w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* 4 Movies Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedShows.map((movie) => (
            <MovieCard
              key={movie.id}
              show={movie}
              onClick={(clickedShow) => setSelectedMovie(clickedShow)}
            />
          ))}
        </div>
      )}

      {/* Details Modal */}
      {selectedMovie && (
        <MovieModal
          show={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </section>
  );
};

export default TrendingMovies;