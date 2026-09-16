import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Browse" },
];

const Navbar = () => {
  return (
    <header className="navbar bg-base-100/90 backdrop-blur border-b border-base-200 sticky top-0 z-50 px-4 md:px-10">
      {/* Brand */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-base-content flex items-center gap-1"
        >
          <span>🎬</span>
          <span>
            Movie<span className="text-primary">Explorer</span>
          </span>
        </Link>
      </div>

      {/* Center nav links (hidden on very small screens to keep it clean) */}
      <nav className="hidden sm:flex items-center gap-6 mr-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-base-content/70 hover:text-base-content"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex-none">
        <Link to="/movies" className="btn btn-primary btn-sm md:btn-md rounded-full">
          Movies
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
