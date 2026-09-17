import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem("movie_watchlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("movie_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    const exists = watchlist.some((item) => item.id === movie.id);

    if (exists) {
      setWatchlist((prev) => prev.filter((item) => item.id !== movie.id));
      toast.error(`Removed "${movie.name}" from Watchlist`, {
        id: `watchlist-${movie.id}`, // ডুপ্লিকেট টোস্ট ব্লক রাখার জন্য ইউনিক আইডি
        icon: "🗑️",
        style: {
          borderRadius: "16px",
          background: "#1e1e2d",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          fontSize: "14px",
          fontWeight: "500",
        },
      });
    } else {
      setWatchlist((prev) => [...prev, movie]);
      toast.success(`Added "${movie.name}" to Watchlist`, {
        id: `watchlist-${movie.id}`, // ডুপ্লিকেট টোস্ট ব্লক রাখার জন্য ইউনিক আইডি
        icon: "❤️",
        style: {
          borderRadius: "16px",
          background: "#1e1e2d",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          fontSize: "14px",
          fontWeight: "500",
        },
      });
    }
  };

  const isBookmarked = (id) => {
    return watchlist.some((item) => item.id === id);
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, toggleWatchlist, isBookmarked }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);