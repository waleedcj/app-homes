/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"], // Primary font
        jakarta: ["Plus Jakarta Sans", "sans-serif"], // Secondary font
      },
     colors: {
        primary: "var(--fresh-green-dark)",
        "primary-light": "var(--fresh-green-light)",
        secondary: "var(--forest-green)",
        tertiary: "var(--sage-green)",
        accent: "var(--earth-brown)",
        neutral: "var(--cream)",
        "brand-white": "var(--light-green)",
        "brand-black": "var(--slate-gray)",
        "brand-gray": "var(--slate-gray)",
        "dark-bg": "var(--background-dark)",
        "light-bg": "var(--background-light)",
        "icon-bg": "var(--background-icon)"
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      backgroundImage: {
        'grid-pattern': "var(--gradient)",
        'dot-pattern': "var(--radial-gradient)"
      },
    },
  },
  plugins: [],
};
