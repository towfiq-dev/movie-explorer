// import React from 'react';

// const FALLBACK_POSTER = "https://placehold.co/210x295?text=No+Image";

// const MovieCard = ({ show, onClick = () => {} }) => {
//   if (!show) return null;

//   const posterUrl = show.image?.medium || FALLBACK_POSTER;
//   const year = show.premiered ? new Date(show.premiered).getFullYear() : "—";
//   const rating = show.rating?.average;

//   const handleImageError = (e) => {
//     e.currentTarget.onerror = null;
//     e.currentTarget.src = FALLBACK_POSTER;
//   };

//   const handleSeeDetails = (e) => {
//     e.stopPropagation();
//     onClick(show);
//   };

//   return (
//     <div
//       onClick={() => onClick(show)}
//       className="card bg-base-100 border border-base-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden"
//     >
//       {/* Poster & Badges */}
//       <figure className="relative h-64 overflow-hidden bg-base-300">
//         <img
//           src={posterUrl}
//           alt={show.name}
//           onError={handleImageError}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           loading="lazy"
//         />

//         {/* Rating Floating Badge */}
//         <div className="absolute top-2.5 right-2.5 badge badge-warning gap-1 font-semibold text-xs shadow-md backdrop-blur-sm bg-warning/90">
//           ⭐ {rating ? rating.toFixed(1) : "N/A"}
//         </div>
//       </figure>

//       {/* Card Content */}
//       <div className="card-body p-4 gap-2.5 justify-between">
//         <div>
//           <div className="flex items-center justify-between text-xs text-base-content/60 mb-1 font-medium">
//             <span>📅 {year}</span>
//             {show.genres?.[0] && (
//               <span className="badge badge-ghost badge-sm text-[11px]">
//                 {show.genres[0]}
//               </span>
//             )}
//           </div>
//           <h3 className="card-title text-sm font-bold line-clamp-1 group-hover:text-primary transition-colors">
//             {show.name}
//           </h3>
//         </div>

//         <button
//           onClick={handleSeeDetails}
//           className="btn btn-primary btn-sm rounded-xl w-full font-medium transition-all shadow-sm hover:shadow-primary/30"
//         >
//           See Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

import React from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FALLBACK_POSTER = "https://placehold.co/210x295?text=No+Image";

const MovieCard = ({ show, onClick = () => {} }) => {
  const { toggleWatchlist, isBookmarked } = useWatchlist();

  if (!show) return null;

  const posterUrl = show.image?.medium || FALLBACK_POSTER;
  const year = show.premiered ? new Date(show.premiered).getFullYear() : "—";
  const rating = show.rating?.average;
  const bookmarked = isBookmarked(show.id);

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_POSTER;
  };

  const handleSeeDetails = (e) => {
    e.stopPropagation();
    onClick(show);
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    toggleWatchlist(show);
  };

  return (
    <div
      onClick={() => onClick(show)}
      className="card bg-base-100 border border-base-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden"
    >
      {/* Poster & Floating Action Buttons */}
      <figure className="relative h-64 overflow-hidden bg-base-300">
        <img
          src={posterUrl}
          alt={show.name}
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Floating Bookmark/Watchlist Button */}
        <button
          onClick={handleBookmarkClick}
          aria-label={bookmarked ? "Remove from watchlist" : "Add to watchlist"}
          className={`btn btn-circle btn-sm absolute top-2.5 left-2.5 z-10 backdrop-blur-md border border-white/20 transition-transform active:scale-90 ${
            bookmarked
              ? "bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/30"
              : "bg-black/50 hover:bg-black/70 text-white"
          }`}
        >
          {bookmarked ? (
            <FaHeart className="text-sm" />
          ) : (
            <FaRegHeart className="text-sm" />
          )}
        </button>

        {/* Rating Badge */}
        <div className="absolute top-2.5 right-2.5 badge badge-warning gap-1 font-semibold text-xs shadow-md backdrop-blur-sm bg-warning/90">
          ⭐ {rating ? rating.toFixed(1) : "N/A"}
        </div>
      </figure>

      {/* Card Content */}
      <div className="card-body p-4 gap-2.5 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-base-content/60 mb-1 font-medium">
            <span>📅 {year}</span>
            {show.genres?.[0] && (
              <span className="badge badge-ghost badge-sm text-[11px]">
                {show.genres[0]}
              </span>
            )}
          </div>
          <h3 className="card-title text-sm font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {show.name}
          </h3>
        </div>

        <button
          onClick={handleSeeDetails}
          className="btn btn-primary btn-sm rounded-xl w-full font-medium transition-all shadow-sm hover:shadow-primary/30"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;