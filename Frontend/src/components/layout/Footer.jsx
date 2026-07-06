import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
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

const Footer = () => {
  return (
    <>
      <footer>
        <FilmStrip flip />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span
              className="rh-display text-2xl block mb-3"
              style={{ color: COLORS.ivory }}
            >
              REEL<span style={{ color: COLORS.amber }}>HOUSE</span>
            </span>
            <p className="text-sm mb-4" style={{ color: COLORS.muted }}>
              A small screening room for the whole internet. Curated, not
              algorithmic.
            </p>
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: COLORS.card,
                      color: COLORS.muted,
                    }}
                  >
                    <Icon size={13} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: COLORS.amber }}
            >
              EXPLORE
            </p>
            <ul
              className="flex flex-col gap-2 text-sm"
              style={{ color: COLORS.muted }}
            >
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Series</a>
              </li>
              <li>
                <a href="#">New Releases</a>
              </li>
              <li>
                <a href="#">Genres</a>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: COLORS.amber }}
            >
              SUPPORT
            </p>
            <ul
              className="flex flex-col gap-2 text-sm"
              style={{ color: COLORS.muted }}
            >
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Devices</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: COLORS.amber }}
            >
              STAY IN THE LOOP
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="flex items-center gap-2 px-3 py-2 rounded flex-1"
                style={{
                  backgroundColor: COLORS.card,
                  border: `1px solid ${COLORS.cardBorder}`,
                }}
              >
                <FaEnvelope size={13} color={COLORS.muted} />
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="bg-transparent text-sm outline-none w-full"
                  style={{ color: COLORS.ivory }}
                />
              </div>
            </div>
            <button
              className="w-full py-2 rounded text-sm font-semibold"
              style={{ backgroundColor: COLORS.amber, color: COLORS.bg }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: `1px solid ${COLORS.cardBorder}`,
            color: COLORS.mutedDark,
          }}
        >
          <span>© 2026 Reelhouse. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <FaClock size={11} />
            <span>New titles added every Friday at 9pm</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
