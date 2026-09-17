// import { Link, NavLink } from "react-router-dom";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/movies", label: "Browse" },
// ];

// const Navbar = () => {
//   return (
//     <header className="navbar bg-base-100/90 backdrop-blur border-b border-base-200 sticky top-0 z-50 px-4 md:px-10">
//       {/* Brand */}
//       <div className="flex-1">
//         <Link
//           to="/"
//           className="text-xl md:text-2xl font-extrabold tracking-tight text-base-content flex items-center gap-1"
//         >
//           <span>🎬</span>
//           <span>
//             Movie<span className="text-primary">Explorer</span>
//           </span>
//         </Link>
//       </div>

//       {/* Center nav links (hidden on very small screens to keep it clean) */}
//       <nav className="hidden sm:flex items-center gap-6 mr-4">
//         {navLinks.map((link) => (
//           <NavLink
//             key={link.to}
//             to={link.to}
//             end={link.to === "/"}
//             className={({ isActive }) =>
//               `text-sm font-medium transition-colors ${
//                 isActive
//                   ? "text-primary"
//                   : "text-base-content/70 hover:text-base-content"
//               }`
//             }
//           >
//             {link.label}
//           </NavLink>
//         ))}
//       </nav>

//       {/* CTA */}
//       <div className="flex-none">
//         <Link to="/movies" className="btn btn-primary btn-sm md:btn-md rounded-full">
//           Movies
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';
import { FaHeart, FaTrash } from 'react-icons/fa';

const Navbar = () => {
  const { watchlist, toggleWatchlist } = useWatchlist();

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-10 justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight">
          <span className="p-1.5 bg-primary/10 text-primary rounded-xl text-base">🎬</span>
          <span>Movie<span className="text-primary">Explorer</span></span>
        </Link>

        {/* Right Side: Links & Watchlist Indicator */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="flex items-center gap-1 sm:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn btn-sm btn-ghost normal-case text-sm font-medium ${
                  isActive ? "text-primary" : "text-base-content/70"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `btn btn-sm btn-ghost normal-case text-sm font-medium ${
                  isActive ? "text-primary" : "text-base-content/70"
                }`
              }
            >
              Browse
            </NavLink>
          </nav>

          {/* Watchlist Indicator Dropdown */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle btn-sm relative hover:bg-base-200"
            >
              <FaHeart className="text-rose-500 text-lg" />
              {watchlist.length > 0 && (
                <span className="badge badge-secondary badge-xs absolute -top-0.5 -right-0.5 font-bold shadow-sm">
                  {watchlist.length}
                </span>
              )}
            </label>

            {/* Watchlist Quick Menu */}
            <div
              tabIndex={0}
              className="dropdown-content z-[60] menu p-3 shadow-2xl bg-base-100 rounded-2xl w-72 sm:w-80 border border-base-200 mt-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-base-200 mb-2 px-1">
                <span className="font-bold text-sm">Your Watchlist</span>
                <span className="badge badge-sm badge-neutral">{watchlist.length} items</span>
              </div>

              {watchlist.length === 0 ? (
                <p className="text-center py-6 text-xs text-base-content/50">
                  No shows added yet. Click ❤️ on any card!
                </p>
              ) : (
                <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                  {watchlist.map((show) => (
                    <div
                      key={show.id}
                      className="flex items-center justify-between gap-3 p-2 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <img
                          src={show.image?.medium || "https://placehold.co/50x70"}
                          alt={show.name}
                          className="w-8 h-11 object-cover rounded-lg shrink-0"
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
                        <FaTrash className="text-xs" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;