import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  // Watchlist State
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem("movie_watchlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Downloads State
  const [downloads, setDownloads] = useState(() => {
    try {
      const saved = localStorage.getItem("movie_downloads");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("movie_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem("movie_downloads", JSON.stringify(downloads));
  }, [downloads]);

  // Watchlist Toggle
  const toggleWatchlist = (movie) => {
    const exists = watchlist.some((item) => item.id === movie.id);
    if (exists) {
      setWatchlist((prev) => prev.filter((item) => item.id !== movie.id));
      toast.error(`Removed "${movie.name}" from Watchlist`, {
        id: `watch-${movie.id}`,
        icon: "🗑️",
        style: {
          borderRadius: "16px",
          background: "#1e1e2d",
          color: "#fff",
        },
      });
    } else {
      setWatchlist((prev) => [...prev, movie]);
      toast.success(`Added "${movie.name}" to Watchlist`, {
        id: `watch-${movie.id}`,
        icon: "❤️",
        style: {
          borderRadius: "16px",
          background: "#1e1e2d",
          color: "#fff",
        },
      });
    }
  };

  // Downloads Toggle / Add
  const addDownload = (movie) => {
    const exists = downloads.some((item) => item.id === movie.id);
    if (!exists) {
      setDownloads((prev) => [...prev, { ...movie, downloadedAt: new Date().toLocaleDateString() }]);
      toast.success(`Downloaded "${movie.name}" successfully!`, {
        id: `dl-${movie.id}`,
        icon: "⬇️",
        style: {
          borderRadius: "16px",
          background: "#1e1e2d",
          color: "#fff",
        },
      });
    }
  };

  const removeDownload = (id, name) => {
    setDownloads((prev) => prev.filter((item) => item.id !== id));
    toast.error(`Removed "${name}" from Downloads`, {
      id: `dl-remove-${id}`,
      icon: "🗑️",
      style: {
        borderRadius: "16px",
        background: "#1e1e2d",
        color: "#fff",
      },
    });
  };

  const isBookmarked = (id) => watchlist.some((item) => item.id === id);
  const isDownloaded = (id) => downloads.some((item) => item.id === id);

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        downloads,
        toggleWatchlist,
        addDownload,
        removeDownload,
        isBookmarked,
        isDownloaded,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);