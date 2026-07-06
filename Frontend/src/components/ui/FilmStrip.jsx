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

const FilmStrip = ({ flip = false }) => {
  return (
    <div
      className="w-full flex"
      style={{
        backgroundColor: COLORS.crimson,
        height: "14px",
        transform: flip ? "scaleY(-1)" : "none",
      }}
      aria-hidden="true"
    >
      <div className="w-full flex items-center justify-around">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "1px",
              backgroundColor: COLORS.bg,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmStrip;
