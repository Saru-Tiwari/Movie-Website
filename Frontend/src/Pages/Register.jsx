import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";

/**
 * REELHOUSE — Register page
 * Matches the landing page palette/typography and reuses the
 * film-strip sprocket-hole motif as a framing device.
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
  danger: "#E5484D",
};

const FilmStrip = ({ flip = false }) => (
  <div
    className="w-full flex"
    style={{
      backgroundColor: COLORS.crimson,
      height: "10px",
      transform: flip ? "scaleY(-1)" : "none",
    }}
    aria-hidden="true"
  >
    <div className="w-full flex items-center justify-around">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "1px",
            backgroundColor: COLORS.bg,
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  </div>
);

function Field({ label, icon, error, children }) {
  return (
    <div className="mb-4">
      <label
        className="text-xs font-semibold tracking-wide mb-1.5 block"
        style={{ color: COLORS.muted }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-2 px-3 py-2.5 rounded"
        style={{
          backgroundColor: COLORS.bgAlt,
          border: `1px solid ${error ? COLORS.danger : COLORS.cardBorder}`,
        }}
      >
        <span style={{ color: COLORS.muted }}>{icon}</span>
        {children}
      </div>
      {error && (
        <p className="text-xs mt-1" style={{ color: COLORS.danger }}>
          {error}
        </p>
      )}
    </div>
  );
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.password) {
      next.password = "Choose a password.";
    } else if (form.password.length < 8) {
      next.password = "Use at least 8 characters.";
    }
    if (form.confirmPassword !== form.password || !form.confirmPassword) {
      next.confirmPassword = "Passwords do not match.";
    }
    if (!agreed) next.agreed = "You must accept the terms to continue.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div
      style={{ backgroundColor: COLORS.bg }}
      className="min-h-screen w-full flex flex-col"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:wght@400;500;600&display=swap');
        .rh-body { font-family: 'Work Sans', sans-serif; }
        .rh-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
      `}</style>

      <FilmStrip />

      <div className="rh-body flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link
              to="/"
              className="rh-display text-3xl inline-block mb-2"
              style={{ color: COLORS.ivory }}
            >
              REEL<span style={{ color: COLORS.amber }}>HOUSE</span>
            </Link>
            <h1 className="rh-display text-2xl" style={{ color: COLORS.ivory }}>
              Create your account
            </h1>
            <p className="text-sm mt-1" style={{ color: COLORS.muted }}>
              Join Reelhouse and start streaming tonight.
            </p>
          </div>

          <div
            className="rounded-lg p-6 sm:p-8"
            style={{
              backgroundColor: COLORS.card,
              border: `1px solid ${COLORS.cardBorder}`,
            }}
          >
            {submitted ? (
              <div className="text-center py-6">
                <p
                  className="rh-display text-2xl mb-2"
                  style={{ color: COLORS.amber }}
                >
                  You're in!
                </p>
                <p className="text-sm" style={{ color: COLORS.muted }}>
                  Your account has been created. Check your inbox to confirm
                  your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <Field
                  label="Full Name"
                  icon={<FaUser size={13} />}
                  error={errors.name}
                >
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Jordan Reyes"
                    className="bg-transparent text-sm outline-none w-full"
                    style={{ color: COLORS.ivory }}
                  />
                </Field>

                <Field
                  label="Email"
                  icon={<FaEnvelope size={13} />}
                  error={errors.email}
                >
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@email.com"
                    className="bg-transparent text-sm outline-none w-full"
                    style={{ color: COLORS.ivory }}
                  />
                </Field>

                <Field
                  label="Password"
                  icon={<FaLock size={13} />}
                  error={errors.password}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange("password")}
                    placeholder="At least 8 characters"
                    className="bg-transparent text-sm outline-none w-full"
                    style={{ color: COLORS.ivory }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ color: COLORS.muted }}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={14} />
                    ) : (
                      <FaEye size={14} />
                    )}
                  </button>
                </Field>

                <Field
                  label="Confirm Password"
                  icon={<FaLock size={13} />}
                  error={errors.confirmPassword}
                >
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    placeholder="Re-enter your password"
                    className="bg-transparent text-sm outline-none w-full"
                    style={{ color: COLORS.ivory }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    style={{ color: COLORS.muted }}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirm ? (
                      <FaEyeSlash size={14} />
                    ) : (
                      <FaEye size={14} />
                    )}
                  </button>
                </Field>

                <div className="mb-5">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5"
                    />
                    <span className="text-xs" style={{ color: COLORS.muted }}>
                      I agree to the{" "}
                      <a href="#" style={{ color: COLORS.amber }}>
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" style={{ color: COLORS.amber }}>
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                  {errors.agreed && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: COLORS.danger }}
                    >
                      {errors.agreed}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded font-semibold transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: COLORS.amber, color: COLORS.bg }}
                >
                  Create Account
                </button>

                <div className="flex items-center gap-3 my-6">
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: COLORS.cardBorder }}
                  />
                  <span className="text-xs" style={{ color: COLORS.mutedDark }}>
                    OR SIGN UP WITH
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: COLORS.cardBorder }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 rounded text-sm font-medium border transition-colors"
                    style={{
                      borderColor: COLORS.cardBorder,
                      color: COLORS.ivory,
                    }}
                  >
                    <FaGoogle size={14} />
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 rounded text-sm font-medium border transition-colors"
                    style={{
                      borderColor: COLORS.cardBorder,
                      color: COLORS.ivory,
                    }}
                  >
                    <FaFacebookF size={14} />
                    Facebook
                  </button>
                </div>
              </form>
            )}
          </div>

          <p
            className="text-center text-sm mt-6"
            style={{ color: COLORS.muted }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold"
              style={{ color: COLORS.amber }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <FilmStrip flip />
    </div>
  );
};

export default Register;
