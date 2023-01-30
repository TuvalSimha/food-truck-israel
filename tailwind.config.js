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
    colors: {
      transparent: "transparent",
      background: {
        DEFAULT: "#E7BA9A",
      },
      text: {
        brown: "#4F2606",
        title: "#FAF2DE",
        description: "#EC9762",
      },
      button: {
        background: "#EFECE7",
        disable: "#BBBFB5",
      },
    },
  },
};
