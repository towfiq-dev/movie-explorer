import React, { useState } from "react";
import { useWatchlist } from "../context/WatchlistContext";
import MovieModal from "../components/MovieModal";
import WatchlistTabsWrapper from "../components/watchlist/WatchlistTabsWrapper";

const WatchlistPage = () => {
  const { watchlist, downloads, toggleWatchlist, removeDownload } = useWatchlist();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10">
      {/* Top Heading Banner */}
      <div className="pb-6 mb-4 border-b border-base-content/10">
        <span className="badge badge-primary badge-outline text-xs font-bold uppercase tracking-wider mb-2">
          Personal Library
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Saved Collections
        </h1>
        <p className="text-xs sm:text-sm text-base-content/60 mt-1">
          Switch between your curated favorites and downloaded offline catalog.
        </p>
      </div>

      {/* React-Tabs Wrapper */}
      <WatchlistTabsWrapper
        watchlist={watchlist}
        downloads={downloads}
        onDetails={(show) => setSelectedShow(show)}
        onRemoveWatchlist={(show) => toggleWatchlist(show)}
        onRemoveDownload={(id, name) => removeDownload(id, name)}
      />

      {/* Global Movie Details Modal */}
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