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
  },
  plugins: [],
  mode: "jit",
};
