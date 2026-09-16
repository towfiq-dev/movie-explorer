import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: FaGithub },
  { href: "https://twitter.com", label: "Twitter", icon: FaTwitter },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
];

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold text-base-content flex items-center justify-center sm:justify-start gap-1">
            <span>🎬</span>
            <span>MovieExplorer</span>
          </p>
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} MovieExplorer. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-base-content/60 hover:text-primary transition-colors text-lg"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-base-content/40 pb-4">
        Movie data provided by{" "}
        <a
          href="https://www.tvmaze.com/api"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          TVMaze API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
