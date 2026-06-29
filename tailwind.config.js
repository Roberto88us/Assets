module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3ec",
        "cream-deep": "#efe8dc",
        navy: "#082a3c",
        "navy-hover": "#0c3a52",
        teal: "#25B2B8",
        "teal-light": "#25B2B8",
        sage: "#7c97a0",
        body: "#46626d",
        line: "#e7e1d6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(135deg, #25B2B8, #25B2B8)",
      },
    },
  },
  plugins: [],
};
