import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(236,72,153,0.3), transparent 50%), linear-gradient(135deg, #0f0f1a 0%, #1a1033 55%, #0b0c1e 100%)",
      }}
    >
      {/* subtle film-grain / dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative hero-content flex-col text-center py-20 md:py-28 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight drop-shadow-lg">
          DISCOVER MOVIES
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg text-white/70">
          Explore and discover your favorite movies from around the world.
        </p>
        <Link
          to="/movies"
          className="btn btn-primary btn-lg mt-8 rounded-full px-10 shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
