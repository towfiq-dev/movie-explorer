import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: FaGithub },
  { href: "https://twitter.com", label: "Twitter", icon: FaTwitter },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
];

const Footer = () => {
  return (
    <footer className="bg-base-200/80 border-t border-base-content/10 pt-12 pb-6 text-base-content">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-base-content/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight">
              <span className="p-2 bg-primary/10 text-primary rounded-xl text-lg">🎬</span>
              <span>Movie<span className="text-primary">Explorer</span></span>
            </Link>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Your comprehensive destination to explore trending movies, top-rated TV shows, and cast details from across the globe.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="btn btn-circle btn-sm btn-ghost bg-base-300/60 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-base-content/70">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-primary transition-colors">Browse Movies</Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-primary transition-colors">Popular Shows</Link>
              </li>
              <li>
                <a href="#trending" className="hover:text-primary transition-colors">Trending Today</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Attribution */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/80 mb-4">
              Data &amp; API
            </h4>
            <p className="text-xs text-base-content/60 leading-relaxed mb-3">
              Film and television metadata is streamed dynamically utilizing public endpoints.
            </p>
            <a
              href="https://www.tvmaze.com/api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-300/80 hover:bg-base-300 text-xs font-semibold transition-colors border border-base-content/10"
            >
              <span>Powered by TVMaze API</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Col 4: Newsletter / Stay Updated */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/80">
              Stay Updated
            </h4>
            <p className="text-xs text-base-content/60">
              Get notified whenever new blockbusters or top-tier series are added.
            </p>
            <div className="join w-full">
              <input
                type="email"
                placeholder="Enter email..."
                className="input input-bordered input-sm join-item w-full focus:outline-primary text-xs"
              />
              <button className="btn btn-primary btn-sm join-item text-xs font-semibold px-4">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/60">
          <p>© {new Date().getFullYear()} MovieExplorer. Built with MovieExplorer.</p>
          <p className="flex items-center gap-1">
            Crafted with <FaHeart className="text-error text-[10px]" /> for film lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;