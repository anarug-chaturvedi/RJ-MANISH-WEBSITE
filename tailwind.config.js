/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px", 
    },
    // screens: {
    //   '425': '425px',
    // },
    fontFamily: {
      primary: "var(--font-outfit)",
      // pacifico: ["var-(--font-pacifico)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        // "loop-scroll":"loop-scroll 50s linear infinite",
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          // to:{transform :"translateX(-100%)"}
          to: { transform: "translateX(-100%)" },
        },
      },
      // fontFamily: {
      //   roboto: ["Roboto", "sans-serif"],
      //   poppins: ["Poppins", "sans-serif"],
      //   inter: ["Inter", "sans-serif"],
      //   publicSans: ["Public Sans", "sans-serif"],
      //   ds: ["Pacifico", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
