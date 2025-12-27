/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pubnubRed: '#CE2029',        // वीडियो में बटन का लाल रंग
        pubnubDarkBlue: '#020b2c',   // हीरो सेक्शन का गहरा नीला बैकग्राउंड
        pubnubBlueBtn: '#1d4aff',    // "Start Building" बटन का नीला रंग
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // PubNub जैसा फॉन्ट
      }
    },
  },
  plugins: [],
}