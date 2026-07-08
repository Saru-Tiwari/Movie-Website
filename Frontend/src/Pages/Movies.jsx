import { useMemo, useState } from "react";
import { FaSearch, FaTimes, FaChevronDown } from "react-icons/fa";
import PosterCard from "../components/ui/PosterCard";
import MovieList from "../components/home/MovieList";

/**
 * REELHOUSE — Movies listing page (page content only)
 * Header/Footer/background come from components/layout/Layout via <Outlet />.
 */

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

const allMovies = [
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
  {
    title: "Salt & Embers",
    genre: "Drama",
    rating: 7.4,
    year: 2024,
    from: "#4A3324",
    to: "#1A1210",
  },
  {
    title: "Neon Requiem",
    genre: "Sci-Fi",
    rating: 8.6,
    year: 2026,
    from: "#1E3A3A",
    to: "#0C1616",
  },
  {
    title: "Hollow Harbor",
    genre: "Horror",
    rating: 6.9,
    year: 2023,
    from: "#2A2E4A",
    to: "#0F111C",
  },
  {
    title: "The Understudy",
    genre: "Comedy",
    rating: 7.1,
    year: 2025,
    from: "#4A2A1E",
    to: "#1A0F0B",
  },
  {
    title: "Late Bloom",
    genre: "Romance",
    rating: 7.8,
    year: 2024,
    from: "#5A2A3E",
    to: "#1F0F17",
  },
  {
    title: "Fault Lines",
    genre: "Action",
    rating: 8.0,
    year: 2023,
    from: "#4A2A1E",
    to: "#1A0F0B",
  },
  {
    title: "The Cartographer",
    genre: "Documentary",
    rating: 8.2,
    year: 2025,
    from: "#3A2E52",
    to: "#171224",
  },
  {
    title: "Wildfire Season",
    genre: "Thriller",
    rating: 7.5,
    year: 2022,
    from: "#3A2E52",
    to: "#171224",
  },
  {
    title: "Tin Can Dreams",
    genre: "Animation",
    rating: 8.3,
    year: 2026,
    from: "#5A2A3E",
    to: "#1F0F17",
  },
  {
    title: "The Last Frame",
    genre: "Mystery",
    rating: 7.7,
    year: 2022,
    from: "#2A2E4A",
    to: "#0F111C",
  },
];

const genres = [
  "All",
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

const sortOptions = [
  { value: "trending", label: "Trending" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
  { value: "az", label: "A–Z" },
];

export default function Movies() {
  const [query, setQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const [sortBy, setSortBy] = useState("trending");
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = allMovies.filter((m) => {
      const matchesGenre = activeGenre === "All" || m.genre === activeGenre;
      const matchesQuery = m.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesGenre && matchesQuery;
    });

    switch (sortBy) {
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = [...result].sort((a, b) => b.year - a.year);
        break;
      case "az":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break; // "trending" keeps original curated order
    }
    return result;
  }, [query, activeGenre, sortBy]);

  const activeSortLabel = sortOptions.find((o) => o.value === sortBy)?.label;

  return (
    <>
      <div
        style={{ backgroundColor: COLORS.bg }}
        className="min-h-screen w-full"
      >
        {/* PAGE HEADER */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">
          <p
            className="text-xs font-semibold tracking-[0.25em] mb-3"
            style={{ color: COLORS.amber }}
          >
            THE FULL LIBRARY
          </p>
          <h1
            className="rh-display leading-[0.95] mb-3"
            style={{
              color: COLORS.ivory,
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            }}
          >
            Movies
          </h1>
          <p
            className="text-sm sm:text-base max-w-xl"
            style={{ color: COLORS.muted }}
          >
            Search and filter every title currently streaming on Reelhouse.
          </p>
        </section>

        {/* CONTROLS */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded flex-1"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              <FaSearch size={14} style={{ color: COLORS.muted }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search titles..."
                className="bg-transparent text-sm outline-none w-full"
                style={{ color: COLORS.ivory }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  style={{ color: COLORS.muted }}
                >
                  <FaTimes size={13} />
                </button>
              )}
            </div>

            <div className="relative flex-shrink-0">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded text-sm font-medium w-full md:w-48 justify-between"
                style={{
                  backgroundColor: COLORS.card,
                  border: `1px solid ${COLORS.cardBorder}`,
                  color: COLORS.ivory,
                }}
              >
                {activeSortLabel}
                <FaChevronDown size={11} style={{ color: COLORS.muted }} />
              </button>
              {sortOpen && (
                <div
                  className="absolute right-0 mt-2 w-full md:w-48 rounded-md overflow-hidden z-10"
                  style={{
                    backgroundColor: COLORS.card,
                    border: `1px solid ${COLORS.cardBorder}`,
                  }}
                >
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                      style={{
                        color:
                          opt.value === sortBy ? COLORS.amber : COLORS.ivory,
                        backgroundColor:
                          opt.value === sortBy ? COLORS.bgAlt : "transparent",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-colors"
                style={{
                  borderColor:
                    g === activeGenre ? COLORS.amber : COLORS.cardBorder,
                  color: g === activeGenre ? COLORS.bg : COLORS.ivory,
                  backgroundColor:
                    g === activeGenre ? COLORS.amber : COLORS.card,
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
          <p className="text-xs mb-5" style={{ color: COLORS.mutedDark }}>
            {filtered.length} {filtered.length === 1 ? "title" : "titles"} found
          </p>

          {filtered.length === 0 ? (
            <div
              className="rounded-lg py-16 text-center"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              <p
                className="rh-display text-2xl mb-2"
                style={{ color: COLORS.ivory }}
              >
                No titles match
              </p>
              <p className="text-sm" style={{ color: COLORS.muted }}>
                Try a different search term or clear the genre filter.
              </p>
            </div>
          ) : (
            <MovieList />
          )}
        </section>
      </div>
    </>
  );
}
