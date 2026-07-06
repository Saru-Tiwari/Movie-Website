import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import FilmStrip from "../ui/FilmStrip";

const COLORS = {
  bg: "#0B0B0C",
  bgAlt: "#141317",
  card: "#1B1A1F",
  cardBorder: "#2A282E",
  amber: "#E8A33D",
  amberSoft: "#F2C879",
  crimson: "#B3231C",
  ivory: "#F2EEE6",
  muted: "#948F87",
  mutedDark: "#5C5952",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = ["Home", "Movies", "Series", "My List"];
  return (
    <>
      <header
        className="sticky top-0 z-40"
        style={{
          backgroundColor: "rgba(11,11,12,0.92)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span
              className="rh-display text-2xl"
              style={{ color: COLORS.ivory }}
            >
              REEL<span style={{ color: COLORS.amber }}>HOUSE</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className="text-sm tracking-wide transition-colors"
                style={{ color: i === 0 ? COLORS.ivory : COLORS.muted }}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="hidden sm:flex p-2 rounded-full transition-colors"
              style={{ color: COLORS.ivory }}
            >
              <FaSearch size={16} />
            </button>
            <button
              className="hidden sm:block px-4 py-2 rounded text-sm font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: COLORS.amber, color: COLORS.bg }}
            >
              Sign In
            </button>
            <button
              className="md:hidden p-2"
              style={{ color: COLORS.ivory }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-5 pb-4 flex flex-col gap-3"
            style={{ backgroundColor: COLORS.bgAlt }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm py-1"
                style={{ color: COLORS.ivory }}
              >
                {link}
              </a>
            ))}
            <button
              className="px-4 py-2 rounded text-sm font-semibold w-full mt-1"
              style={{ backgroundColor: COLORS.amber, color: COLORS.bg }}
            >
              Sign In
            </button>
          </div>
        )}

        <FilmStrip />
      </header>
    </>
  );
};

export default Header;
