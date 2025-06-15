/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // src altındaki tüm dosyalarda Tailwind'i kullan
  ],
  theme: {
    extend: {}, // İstersen özel renkler, fontlar burada tanımlanır
  },
  plugins: [],
};
