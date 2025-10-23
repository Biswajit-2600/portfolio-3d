module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: { neonBlue: "#00FFFF" },
      keyframes: {
        neonPulse: {
          '0%, 100%': { textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' },
          '50%': { textShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF' },
        },
      },
      animation: { neonPulse: 'neonPulse 1.5s infinite' },
    },
  },
  plugins: [],
};
