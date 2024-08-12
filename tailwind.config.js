/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{jsx,tsx,mdx}",
    "./components/**/*.{jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
  safelist: [{ pattern: /text-[0-9xl]/ }],
  plugins: [],
  mode: "jit",
};
