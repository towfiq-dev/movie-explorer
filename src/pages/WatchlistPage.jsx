import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWatchlist } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { FaHeart, FaFilm, FaQuestionCircle } from "react-icons/fa";

const WatchlistPage = () => {
  const { watchlist } = useWatchlist();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-base-content/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold mb-2">
            <FaHeart /> Personal Library
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            My Watchlist
          </h1>
          <p className="text-sm text-base-content/60 mt-1">
            Shows and movies you have bookmarked to stream later.
          </p>
        </div>

        <div className="badge badge-lg badge-neutral font-semibold">
          Total: {watchlist.length} {watchlist.length === 1 ? "Item" : "Items"}
        </div>
      </div>

      {/* Movies Grid / Empty State */}
      {watchlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-base-200 flex items-center justify-center text-3xl text-base-content/40">
            <FaFilm />
          </div>
          <h2 className="text-xl font-bold">Your Watchlist is empty</h2>
          <p className="text-sm text-base-content/60 max-w-sm">
            Explore our curated catalog and tap the heart icon on any poster to save it here.
          </p>
          <Link
            to="/movies"
            className="btn btn-primary rounded-full px-8 btn-sm"
          >
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-8">
          {watchlist.map((show) => (
            <MovieCard
              key={show.id}
              show={show}
              onClick={(clicked) => setSelectedShow(clicked)}
            />
          ))}
        </div>
      )}

      {/* Help & Support Accordion Section */}
      <section className="mt-16 pt-10 border-t border-base-content/10">
        <div className="flex items-center gap-2 mb-6">
          <FaQuestionCircle className="text-primary text-xl" />
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 max-w-3xl">
          <div className="collapse collapse-plus bg-base-200/50 border border-base-content/10 rounded-2xl">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-sm sm:text-base font-semibold">
              Where is my Watchlist saved?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-base-content/70">
              Your bookmarks are instantly saved locally in your browser's local storage. They remain intact even after closing the tab or reloading.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200/50 border border-base-content/10 rounded-2xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-sm sm:text-base font-semibold">
              Where does the movie information come from?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-base-content/70">
              All show details, cast profiles, ratings, and artwork are retrieved in real-time using the free TVMaze REST API.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200/50 border border-base-content/10 rounded-2xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-sm sm:text-base font-semibold">
              Need more help or want to suggest a feature?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-base-content/70">
              Feel free to reach out through our official GitHub repository linked in the footer.
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedShow && (
        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </div>
  );
};

export default WatchlistPage;