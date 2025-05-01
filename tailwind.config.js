module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gryffindor: "#7F0909", // Deep red
        slytherin: "#0D6217", // Forest green
        ravenclaw: "#0A1D56", // Navy blue
        hufflepuff: "#FFB107", // Golden yellow (used sparingly)
        parchment: "#FDF6E3", // Parchment beige
        wand: "#4A2F1A", // Dark brown
        silver: "#C0C0C0", // Silver for highlights
      },
      fontFamily: {
        lumos: ['"Cinzel"', "serif"],
        potter: ['"Times New Roman"', "serif"],
      },
      boxShadow: {
        magical: "0 0 10px rgba(192, 192, 192, 0.5)", // Silver glow
      },
    },
  },
  plugins: [],
};
