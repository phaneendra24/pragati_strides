/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-svg": "url('/vercel.svg')",
        "home-bg": "url('/home-bg.jpg')",
        "poster-bg": "url('/poster.jpg')",
        "adventureQuest-bg": "url('/AdventureQuest.jpg')",
        // "techconnect": "url('/eventsPhotos/technook.jpg')",
        // "trickyzone": "url('/eventsPhotos/trcikyZone.jpg')",
        // "heuristicFlick": "url('/eventsPhotos/trcikyZone.jpg')",
      },
    },
  },
  plugins: [],
};
