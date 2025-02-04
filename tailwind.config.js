/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors: {
        primary: "var(--fresh-green)",
        secondary: "var(--forest-green)",
        tertiary: "var(--sage-green)",
        accent: "var(--earth-brown)",
        neutral: "var(--cream)",
        "brand-black": "var(--slate-gray)",
        "brand-gray": "var(--slate-gray)",
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
