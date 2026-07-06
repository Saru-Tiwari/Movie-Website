import { FaPlay, FaStar, FaChevronRight } from "react-icons/fa";
import FilmStrip from "../components/ui/FilmStrip";
import { COLORS } from "../theme";

/**
 * REELHOUSE — movie discovery landing page (page content only)
 * Header/Footer now live in components/layout/Layout, which wraps this
 * page via <Outlet /> along with the shared background and fonts.
 */

const movies = [
  {
    title: "Midnight Static",
    genre: "Thriller",
    rating: 8.4,
    year: 2026,
    from: "#3A2E52",
    to: "#171224",
  },
  {
    title: "The Glass Orchard",
    genre: "Drama",
    rating: 7.9,
    year: 2025,
    from: "#4A3324",
    to: "#1A1210",
  },
  {
    title: "Vantablack",
    genre: "Sci-Fi",
    rating: 8.8,
    year: 2026,
    from: "#1E3A3A",
    to: "#0C1616",
  },
  {
    title: "Paper Moths",
    genre: "Romance",
    rating: 7.2,
    year: 2025,
    from: "#5A2A3E",
    to: "#1F0F17",
  },
  {
    title: "Iron Tide",
    genre: "Action",
    rating: 8.1,
    year: 2026,
    from: "#4A2A1E",
    to: "#1A0F0B",
  },
  {
    title: "The Quiet Hour",
    genre: "Mystery",
    rating: 7.6,
    year: 2025,
    from: "#2A2E4A",
    to: "#0F111C",
  },
];

const genres = [
  "Action",
  "Drama",
  "Sci-Fi",
  "Horror",
  "Comedy",
  "Romance",
  "Thriller",
  "Documentary",
  "Animation",
  "Mystery",
];

function PosterCard({ movie }) {
  return (
    <div className="flex-shrink-0 w-44 sm:w-52 group cursor-pointer">
      <div
        className="relative w-full rounded-md overflow-hidden mb-3"
        style={{
          aspectRatio: "2/3",
          background: `linear-gradient(160deg, ${movie.from}, ${movie.to})`,
          border: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        <div
          className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
          style={{
            backgroundColor: "rgba(11,11,12,0.75)",
            color: COLORS.amber,
          }}
        >
          <FaStar size={11} color={COLORS.amber} />
          {movie.rating}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: "rgba(11,11,12,0.45)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: COLORS.amber }}
          >
            <FaPlay size={16} color={COLORS.bg} className="ml-0.5" />
          </div>
        </div>
        <p
          className="absolute bottom-3 left-3 right-3 leading-tight"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: COLORS.ivory,
            fontSize: "22px",
            letterSpacing: "0.02em",
          }}
        >
          {movie.title}
        </p>
      </div>
      <div
        className="flex items-center justify-between text-xs"
        style={{ color: COLORS.muted }}
      >
        <span>{movie.genre}</span>
        <span>{movie.year}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p
            className="text-xs font-semibold tracking-[0.25em] mb-4"
            style={{ color: COLORS.amber }}
          >
            NOW SCREENING
          </p>
          <h1
            className="rh-display leading-[0.95] mb-5"
            style={{
              color: COLORS.ivory,
              fontSize: "clamp(2.75rem, 6vw, 4.75rem)",
            }}
          >
            Your next obsession
            <br />
            is playing tonight.
          </h1>
          <p
            className="text-base sm:text-lg mb-8 max-w-md"
            style={{ color: COLORS.muted }}
          >
            Stream thousands of films and series, curated nightly by people who
            actually watch them — no algorithm filler, just the good stuff.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: COLORS.amber, color: COLORS.bg }}
            >
              <FaPlay size={14} color={COLORS.bg} />
              Watch Trailer
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold border transition-colors"
              style={{ borderColor: COLORS.cardBorder, color: COLORS.ivory }}
            >
              Browse Library
              <FaChevronRight size={13} />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div
            className="relative w-56 sm:w-64 rounded-lg overflow-hidden"
            style={{
              aspectRatio: "2/3",
              background: "linear-gradient(160deg, #3A2E52, #171224)",
              border: `1px solid ${COLORS.cardBorder}`,
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
            }}
          >
            <div
              className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
              style={{
                backgroundColor: "rgba(11,11,12,0.75)",
                color: COLORS.amber,
              }}
            >
              <FaStar size={11} color={COLORS.amber} />
              8.8 Featured
            </div>
            <p
              className="absolute bottom-4 left-4 right-4 leading-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                color: COLORS.ivory,
                fontSize: "30px",
              }}
            >
              Vantablack
            </p>
          </div>
          <div
            className="absolute -bottom-6 -left-6 hidden sm:block w-40 rounded-lg overflow-hidden"
            style={{
              aspectRatio: "2/3",
              background: "linear-gradient(160deg, #1E3A3A, #0C1616)",
              border: `1px solid ${COLORS.cardBorder}`,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </section>

      <FilmStrip />

      {/* TRENDING */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="rh-display text-3xl" style={{ color: COLORS.ivory }}>
            Trending Tonight
          </h2>
          <a
            href="#"
            className="text-sm flex items-center gap-1"
            style={{ color: COLORS.amber }}
          >
            View all <FaChevronRight size={12} />
          </a>
        </div>
        <div
          className="flex gap-5 overflow-x-auto pb-3"
          style={{ scrollbarWidth: "thin" }}
        >
          {movies.map((m) => (
            <PosterCard key={m.title} movie={m} />
          ))}
        </div>
      </section>

      {/* GENRES */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <h2
          className="rh-display text-3xl mb-6"
          style={{ color: COLORS.ivory }}
        >
          Browse by Genre
        </h2>
        <div className="flex flex-wrap gap-3">
          {genres.map((g) => (
            <button
              key={g}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors"
              style={{
                borderColor: COLORS.cardBorder,
                color: COLORS.ivory,
                backgroundColor: COLORS.card,
              }}
            >
              {g}
            </button>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="w-full py-14 px-5 sm:px-8"
        style={{
          backgroundColor: COLORS.bgAlt,
          borderTop: `1px solid ${COLORS.cardBorder}`,
          borderBottom: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3
              className="rh-display text-2xl sm:text-3xl mb-2"
              style={{ color: COLORS.ivory }}
            >
              First month, on the house.
            </h3>
            <p className="text-sm" style={{ color: COLORS.muted }}>
              Cancel anytime. No hidden fees, just film.
            </p>
          </div>
          <button
            className="px-7 py-3 rounded font-semibold transition-transform hover:scale-105 flex-shrink-0"
            style={{ backgroundColor: COLORS.amber, color: COLORS.bg }}
          >
            Start Watching
          </button>
        </div>
      </section>
    </>
  );
}
