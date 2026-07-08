import { FaPlay, FaStar } from "react-icons/fa";

/**
 * Reusable poster card — used on the Home trending row and the
 * full Movies listing grid.
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

export default function PosterCard({ title, movies }) {
  return (
    <div className="mb-12 ">
      <h1 className="text-2xl font-bold text-white mb-6">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {movies.map((movie) => (
          <div className="w-full group cursor-pointer">
            <div
              className="relative w-full rounded-md overflow-hidden mb-3"
              style={{
                aspectRatio: "2/3",
                background: `linear-gradient(160deg, ${movie.from}, ${movie.to})`,
                border: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                alt={movie.title}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=No+Poster";
                }}
              />
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
              <span>{movie.release_date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
