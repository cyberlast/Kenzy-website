/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Borsok: ["Borsok"],
        Circular: ["Circular STD"],
        Poppins: ["Poppins"],
      },
      colors: {
        baseY: ["#FFDAA6"],
        baseX: ["#FF9843"],
        blueX: ["#3468C0"],
        blueY: ["#86A7FC"],
        grey: ["#222831"],
        yellow: ["#FDF907"],
        red: ["#BA0000"],
        chocolate: ["#5C2707"],
      },
    },
  },
  plugins: [],
};
