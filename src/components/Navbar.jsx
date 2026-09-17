import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useWatchlist } from "../context/WatchlistContext";
import { 
  HiOutlineHome, 
  HiOutlineFilm, 
  HiOutlineBookmark, 
  HiOutlineSupport,
  HiOutlineHeart,
  HiOutlineTrash,
  HiMenuAlt3
} from "react-icons/hi";

const navItems = [
  { path: "/", label: "Home", icon: HiOutlineHome },
  { path: "/movies", label: "Browse", icon: HiOutlineFilm },
  { path: "/watchlist", label: "Watchlist", icon: HiOutlineBookmark, showBadge: true },
  { path: "/contact", label: "Support", icon: HiOutlineSupport },
];

const Navbar = () => {
  const { watchlist, toggleWatchlist } = useWatchlist();

  return (
    <header className="sticky top-0 z-50 bg-base-100/85 backdrop-blur-md border-b border-base-content/10 shadow-xs">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-10 h-16 justify-between">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 font-black text-xl tracking-tight transition-transform duration-200 active:scale-95"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-xs text-lg">
            🎬
          </span>
          <span className="text-base-content">
            Movie<span className="text-primary">Explorer</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-base-200/50 p-1 rounded-full border border-base-content/5">
          {navItems.map(({ path, label, icon: Icon, showBadge }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-content shadow-sm shadow-primary/30"
                    : "text-base-content/70 hover:text-base-content hover:bg-base-200"
                }`
              }
            >
              <Icon className="text-base" />
              <span>{label}</span>
              {showBadge && watchlist.length > 0 && (
                <span className="badge badge-xs badge-neutral bg-base-100/30 text-current border-0 font-bold px-1.5 py-0.5 ml-0.5">
                  {watchlist.length}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Action: Watchlist Dropdown & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Watchlist Quick View Menu */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle btn-sm relative bg-base-200/60 hover:bg-base-200 border border-base-content/10"
              aria-label="View Watchlist"
            >
              <HiOutlineHeart className="text-rose-500 text-lg" />
              {watchlist.length > 0 && (
                <span className="badge badge-secondary badge-xs absolute -top-1 -right-1 font-bold shadow-xs">
                  {watchlist.length}
                </span>
              )}
            </label>

            <div
              tabIndex={0}
              className="dropdown-content z-60 menu p-3 shadow-2xl bg-base-100 rounded-2xl w-72 sm:w-80 border border-base-content/10 mt-3"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-base-content/10 mb-2 px-1">
                <span className="font-bold text-xs uppercase tracking-wider text-base-content/70">
                  Your Watchlist
                </span>
                <span className="badge badge-sm badge-neutral font-semibold">
                  {watchlist.length} items
                </span>
              </div>

              {watchlist.length === 0 ? (
                <p className="text-center py-6 text-xs text-base-content/50">
                  No saved items yet. Tap ❤️ on any movie poster!
                </p>
              ) : (
                <div className="max-h-60 overflow-y-auto space-y-2 pr-1 scrollbar-none">
                  {watchlist.map((show) => (
                    <div
                      key={show.id}
                      className="flex items-center justify-between gap-2.5 p-2 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <img
                          src={show.image?.medium || "https://placehold.co/40x55"}
                          alt={show.name}
                          className="w-8 h-11 object-cover rounded-lg shrink-0 border border-base-content/10"
                        />
                        <span className="text-xs font-semibold truncate text-base-content">
                          {show.name}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleWatchlist(show)}
                        className="btn btn-ghost btn-xs btn-circle text-error hover:bg-error/10"
                        title="Remove"
                      >
                        <HiOutlineTrash className="text-sm" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {watchlist.length > 0 && (
                <Link
                  to="/watchlist"
                  className="btn btn-primary btn-xs rounded-xl mt-3 w-full font-medium"
                >
                  Go to Watchlist Page &rarr;
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="dropdown dropdown-end md:hidden">
            <label 
              tabIndex={0} 
              className="btn btn-ghost btn-circle btn-sm bg-base-200/60 border border-base-content/10"
              aria-label="Open Navigation Menu"
            >
              <HiMenuAlt3 className="text-lg" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-60 p-3 shadow-2xl bg-base-100 rounded-2xl w-56 border border-base-content/10 gap-1"
            >
              {navItems.map(({ path, label, icon: Icon, showBadge }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-2.5 rounded-xl font-semibold text-xs ${
                        isActive ? "bg-primary text-primary-content" : ""
                      }`
                    }
                  >
                    <Icon className="text-base" />
                    <span>{label}</span>
                    {showBadge && watchlist.length > 0 && (
                      <span className="badge badge-xs badge-secondary ml-auto">
                        {watchlist.length}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;