// import React from "react";
import {
  FaFilm,
  FaGlobeAmericas,
  FaAward,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";
import FilmStrip from "../components/ui/FilmStrip";

/**
 * REELHOUSE — About page
 * Matches the landing/auth pages' palette, typography, and
 * film-strip sprocket-hole motif.
 */

const COLORS = {
  bg: "#0B0B0C",
  bgAlt: "#141317",
  card: "#1B1A1F",
  cardBorder: "#2A282E",
  amber: "#E8A33D",
  crimson: "#B3231C",
  ivory: "#F2EEE6",
  muted: "#948F87",
  mutedDark: "#5C5952",
};

const stats = [
  { label: "Titles Streaming", value: "12,400+" },
  { label: "Members Worldwide", value: "3.2M" },
  { label: "Countries", value: "48" },
  { label: "Curator's Picks Weekly", value: "25" },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Curated, Not Algorithmic",
    text: "Every title on Reelhouse is chosen by real programmers who watch the full film first — no auto-recommendations padding out the catalog.",
  },
  {
    icon: FaHeart,
    title: "Made for Film Lovers",
    text: "From arthouse debuts to blockbuster favorites, we build the catalog around the way people actually talk about movies.",
  },
  {
    icon: FaShieldAlt,
    title: "Fair to Filmmakers",
    text: "We pay licensing fees upfront and share performance bonuses with independent creators, not just major studios.",
  },
];

const team = [
  {
    name: "Maya Okonkwo",
    role: "Co-Founder & CEO",
    initials: "MO",
    from: "#3A2E52",
    to: "#171224",
  },
  {
    name: "Daniel Reyes",
    role: "Co-Founder & Head of Curation",
    initials: "DR",
    from: "#1E3A3A",
    to: "#0C1616",
  },
  {
    name: "Priya Nair",
    role: "VP of Engineering",
    initials: "PN",
    from: "#4A2A1E",
    to: "#1A0F0B",
  },
  {
    name: "Sam Whitfield",
    role: "Head of Partnerships",
    initials: "SW",
    from: "#5A2A3E",
    to: "#1F0F17",
  },
];

function StatCard({ label, value }) {
  return (
    <div
      className="rounded-lg p-6 text-center"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${COLORS.cardBorder}`,
      }}
    >
      <p
        className="rh-display text-3xl sm:text-4xl mb-1"
        style={{ color: COLORS.amber }}
      >
        {value}
      </p>
      <p className="text-xs tracking-wide" style={{ color: COLORS.muted }}>
        {label}
      </p>
    </div>
  );
}

function ValueCard({ icon: Icon, title, text }) {
  return (
    <div
      className="rounded-lg p-6"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${COLORS.cardBorder}`,
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: COLORS.bgAlt, color: COLORS.amber }}
      >
        <Icon size={16} />
      </div>
      <h3 className="rh-display text-xl mb-2" style={{ color: COLORS.ivory }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
        {text}
      </p>
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <div className="text-center">
      <div
        className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-3 rh-display text-2xl"
        style={{
          background: `linear-gradient(160deg, ${member.from}, ${member.to})`,
          color: COLORS.ivory,
          border: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        {member.initials}
      </div>
      <p className="text-sm font-semibold" style={{ color: COLORS.ivory }}>
        {member.name}
      </p>
      <p className="text-xs" style={{ color: COLORS.muted }}>
        {member.role}
      </p>
    </div>
  );
}

const About = () => {
  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:wght@400;500;600&display=swap');
        .rh-body { font-family: 'Work Sans', sans-serif; }
        .rh-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
      `}</style>

      <div className="rh-body">
        {/* HERO */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-14 text-center">
          <p
            className="text-xs font-semibold tracking-[0.25em] mb-4"
            style={{ color: COLORS.amber }}
          >
            OUR STORY
          </p>
          <h1
            className="rh-display leading-[0.95] mb-5"
            style={{
              color: COLORS.ivory,
              fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
            }}
          >
            Built by people who
            <br />
            actually watch movies.
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: COLORS.muted }}
          >
            Reelhouse started as a shared spreadsheet of favorite films passed
            between friends. Today it's a home for the titles that deserve a
            second look — chosen by hand, screened in full, and streamed without
            the noise.
          </p>
        </section>

        <FilmStrip />

        {/* STATS */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </section>

        {/* STORY BLOCK */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div
            className="rounded-lg overflow-hidden order-2 md:order-1"
            style={{
              aspectRatio: "4/3",
              background: "linear-gradient(160deg, #2A2E4A, #0F111C)",
              border: `1px solid ${COLORS.cardBorder}`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <FaFilm size={48} style={{ color: COLORS.amber, opacity: 0.5 }} />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2
              className="rh-display text-3xl mb-4"
              style={{ color: COLORS.ivory }}
            >
              From a spare bedroom to a screening room for millions
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed mb-4"
              style={{ color: COLORS.muted }}
            >
              We launched Reelhouse because we were tired of scrolling for
              twenty minutes just to land on the same ten titles. So we built a
              catalog around taste instead of traffic — every film vetted by a
              working programmer before it ever reaches the homepage.
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              Years later, that same principle still runs the company: fewer,
              better recommendations, and a real human behind every "Now
              Screening" pick.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section
          className="w-full py-16 px-5 sm:px-8"
          style={{
            backgroundColor: COLORS.bgAlt,
            borderTop: `1px solid ${COLORS.cardBorder}`,
            borderBottom: `1px solid ${COLORS.cardBorder}`,
          }}
        >
          <div className="max-w-5xl mx-auto">
            <h2
              className="rh-display text-3xl mb-8 text-center"
              style={{ color: COLORS.ivory }}
            >
              What We Stand For
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((v) => (
                <ValueCard key={v.title} {...v} />
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
          <h2
            className="rh-display text-3xl mb-2 text-center"
            style={{ color: COLORS.ivory }}
          >
            Meet the Team
          </h2>
          <p
            className="text-sm text-center mb-10"
            style={{ color: COLORS.muted }}
          >
            A small crew obsessed with getting the catalog right.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </section>

        {/* MISSION STRIP */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16">
          <div
            className="rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8"
            style={{
              backgroundColor: COLORS.card,
              border: `1px solid ${COLORS.cardBorder}`,
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: COLORS.bgAlt, color: COLORS.amber }}
            >
              <FaGlobeAmericas size={26} />
            </div>
            <div>
              <h3
                className="rh-display text-2xl mb-2"
                style={{ color: COLORS.ivory }}
              >
                Global stories, close to home
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                Half our catalog comes from outside the usual major markets. We
                built dedicated subtitling and dubbing pipelines so a film from
                any country can land on your screen the same week it premieres.
              </p>
            </div>
          </div>
        </section>

        {/* AWARDS / CTA */}
        <section
          className="w-full py-14 px-5 sm:px-8"
          style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: COLORS.card, color: COLORS.amber }}
              >
                <FaAward size={18} />
              </div>
              <div>
                <h3
                  className="rh-display text-2xl"
                  style={{ color: COLORS.ivory }}
                >
                  Want to build this with us?
                </h3>
                <p className="text-sm" style={{ color: COLORS.muted }}>
                  We're hiring curators, engineers, and storytellers.
                </p>
              </div>
            </div>
            <button
              className="px-7 py-3 rounded font-semibold transition-transform hover:scale-105 flex-shrink-0"
              style={{ backgroundColor: COLORS.amber, color: COLORS.bg }}
            >
              View Open Roles
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
