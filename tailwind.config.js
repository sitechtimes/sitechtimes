/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.vue", "./pages/**/*.{vue,js,ts,jsx,tsx}", "./components/**/*.{vue,js,ts,jsx,tsx}", "./layouts/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  darkMode: "selector",
  future: {
    // mobile support for hover until tailwind v4 is out and this is default behavior
    hoverOnlyWhenSupported: true
  }
};
