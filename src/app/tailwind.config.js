/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          inter: ["var(--font-inter)", "sans-serif"], // Use Inter variable from next/font
        },
        colors: {
          primary: "#1b2d58",
          secondary: "#173f7f",
          accent: "#a1cbfa",
          info: "#6386c8",
        },
      },
    },
    plugins: [],
  };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
                'pacific': ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}
