import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FaFacebookF,
    hoverBg: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[#1877F2]/30",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: FaTwitter,
    hoverBg: "hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:shadow-[#1DA1F2]/30",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: FaInstagram,
    hoverBg: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent hover:shadow-pink-500/30",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    hoverBg: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[#0A66C2]/30",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-base-200/90 border-t border-base-content/10 pt-14 pb-8 text-base-content overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-base-content/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2.5 text-xl font-black tracking-tight group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs group-hover:scale-105 transition-transform duration-300">
                🎬
              </span>
              <span>Movie<span className="text-primary">Explorer</span></span>
            </Link>
            
            <p className="text-sm text-base-content/70 leading-relaxed max-w-xs">
              Your comprehensive destination to explore trending movies, top-rated TV shows, and cast details from across the globe.
            </p>

            {/* Social Icons with Distinct Platform Glow */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map(({ href, label, icon: Icon, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center bg-base-100/80 border border-base-content/10 text-base-content/70 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${hoverBg}`}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-base-content/80 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-base-content/70">
              <li>
                <Link to="/" className="inline-flex items-center gap-1.5 hover:text-primary transition-all duration-200 hover:translate-x-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/movies" className="inline-flex items-center gap-1.5 hover:text-primary transition-all duration-200 hover:translate-x-1">
                  <span>Browse Movies</span>
                </Link>
              </li>
              <li>
                <Link to="/watchlist" className="inline-flex items-center gap-1.5 hover:text-primary transition-all duration-200 hover:translate-x-1">
                  <span>My Watchlist</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center gap-1.5 hover:text-primary transition-all duration-200 hover:translate-x-1">
                  <span>Help &amp; Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Attribution */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-base-content/80 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Data &amp; API
            </h4>
            <p className="text-xs text-base-content/60 leading-relaxed mb-4">
              All show metadata, imagery, and cast information are retrieved via public television indexing endpoints.
            </p>
            <a
              href="https://www.tvmaze.com/api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-base-100/90 hover:bg-base-100 text-xs font-semibold text-base-content/80 border border-base-content/10 shadow-xs hover:border-primary/40 hover:text-primary transition-all duration-200 group"
            >
              <span>Powered by TVMaze API</span>
              <HiArrowUpRight className="text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Col 4: Newsletter / Stay Updated */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-base-content/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Stay Updated
            </h4>
            <p className="text-xs text-base-content/60 leading-relaxed">
              Get notified whenever new blockbusters or top-tier series are added.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="join w-full shadow-xs">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="input input-bordered input-sm join-item w-full bg-base-100 text-xs focus:outline-primary border-base-content/15"
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-primary btn-sm join-item text-xs font-bold px-4"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/60">
          <p>© {new Date().getFullYear()} MovieExplorer. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <FaHeart className="text-rose-500 animate-pulse text-xs" /> for film lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;