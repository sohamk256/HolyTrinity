/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        dark: {
          900: "#0a0a1a",
          800: "#0f0f23",
          700: "#161630",
          600: "#1e1e3f",
        },
        cyan: {
          400: "#00d4ff",
          500: "#00b8e6",
        },
        purple: {
          400: "#7b61ff",
          500: "#6b4fd6",
        },
        mint: {
          400: "#00ff88",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%)",
        "gradient-dark": "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(123,97,255,0.1) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(123,97,255,0.1)",
        "glow-sm": "0 0 20px rgba(0,212,255,0.1)",
        "glow-lg": "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(123,97,255,0.15)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
