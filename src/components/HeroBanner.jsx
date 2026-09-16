import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[560px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* High Quality Cinematic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* Multi-layered Vignette & Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-slate-950/70 to-slate-950/90" />
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 py-20 flex flex-col items-center">
        {/* Floating Top Pill / Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider uppercase text-primary-content mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Unlimited Movies, TV Shows &amp; More
        </div>

        {/* Cinematic Heading with Gradient Accent */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight uppercase drop-shadow-2xl">
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">Movies</span> &amp; Shows
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
          Explore thousands of top-rated films, trending television shows, and timeless classics from around the world.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/movies"
            className="btn btn-primary rounded-full px-8 text-sm sm:text-base font-semibold shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300 gap-2 min-h-12"
          >
            <span>Explore Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <a
            href="#trending"
            className="btn btn-ghost bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white rounded-full px-7 text-sm sm:text-base font-semibold transition-all duration-300 min-h-12"
          >
            Trending Now
          </a>
        </div>
      </div>

      {/* Smooth Bottom Blend with the Page */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroBanner;