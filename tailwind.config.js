module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3ec",
        "cream-deep": "#efe8dc",
        navy: "#082a3c",
        "navy-hover": "#0c3a52",
        teal: "#14857a",
        "teal-light": "#7fd1c4",
        sage: "#7c97a0",
        body: "#46626d",
        line: "#e7e1d6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(135deg, #16a394, #0c7468)",
      },
    },
  },
  plugins: [],
};
