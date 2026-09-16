import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFire, 
  FaRocket, 
  FaMasksTheater, 
  FaGhost, 
  FaHeart, 
  FaBrain, 
  FaMagnifyingGlass, 
  FaHatCowboy 
} from "react-icons/fa6";

const genres = [
  {
    name: "Action",
    count: "450+ Shows",
    icon: FaFire,
    color: "from-rose-500/20 to-orange-500/20 text-rose-500 border-rose-500/30",
  },
  {
    name: "Drama",
    count: "620+ Shows",
    icon: FaMasksTheater,
    color: "from-blue-500/20 to-cyan-500/20 text-blue-500 border-blue-500/30",
  },
  {
    name: "Science-Fiction",
    count: "280+ Shows",
    icon: FaRocket,
    color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
  },
  {
    name: "Thriller",
    count: "310+ Shows",
    icon: FaBrain,
    color: "from-amber-500/20 to-yellow-500/20 text-amber-500 border-amber-500/30",
  },
  {
    name: "Horror",
    count: "190+ Shows",
    icon: FaGhost,
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    name: "Romance",
    count: "240+ Shows",
    icon: FaHeart,
    color: "from-pink-500/20 to-rose-500/20 text-pink-500 border-pink-500/30",
  },
  {
    name: "Crime",
    count: "340+ Shows",
    icon: FaMagnifyingGlass,
    color: "from-sky-500/20 to-blue-600/20 text-sky-400 border-sky-500/30",
  },
  {
    name: "Adventure",
    count: "210+ Shows",
    icon: FaHatCowboy,
    color: "from-violet-500/20 to-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
  },
];

const ExploreByGenre = () => {
  return (
    <section className="py-14 px-4 md:px-10 max-w-7xl mx-auto border-t border-base-content/5">
      {/* Section Heading */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-2">
        <div>
          <span className="badge badge-primary badge-outline text-xs font-semibold uppercase tracking-wider mb-2">
            Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Explore by Genre
          </h2>
          <p className="text-sm text-base-content/60 mt-1">
            Hand-picked selections tailored to your favorite cinematic mood
          </p>
        </div>

        <Link
          to="/movies"
          className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
        >
          View all categories &rarr;
        </Link>
      </div>

      {/* Genres Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {genres.map(({ name, count, icon: Icon, color }) => (
          <Link
            key={name}
            to="/movies"
            className="group relative p-4 sm:p-5 rounded-2xl bg-base-200/50 hover:bg-base-200 border border-base-content/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col justify-between"
          >
            {/* Background Glow on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            />

            <div className="relative z-10 flex items-center justify-between">
              <div
                className={`p-3 rounded-xl border bg-base-100 shadow-sm ${color} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="text-xl" />
              </div>
              <span className="text-[11px] font-medium text-base-content/50">
                {count}
              </span>
            </div>

            <div className="relative z-10 mt-5">
              <h3 className="font-bold text-base text-base-content group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-xs text-base-content/60 flex items-center gap-1 mt-0.5 group-hover:translate-x-0.5 transition-transform">
                Browse catalog &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreByGenre;