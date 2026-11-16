import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    fontFamily: {
      'courier': ["Courier Prime", "serif"],
      'fira': ["Fira Sans", "serif"]
    },
    extend: {},
  },
  plugins: [animate],
}
