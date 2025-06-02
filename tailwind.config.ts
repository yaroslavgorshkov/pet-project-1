import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lapis': '#07484A',
        'mint': '#70908B',
        'white': '#FDFBF8',
        'white-blue': '#E0EFF6',
        'darken-white': '#F0F0F0',
        'absolute-white': '#fff',
        'lite-green': "#E0F6F1",
        'lazuli-green': '#CAF3E5',
        'skin': '#FFF4E7',
        'dark-skin': '#ada489',
        'purple': '#EEEBFF',
        "absolute-black": '#000',
        'clay': '#C4C4C4',
        'rose': '#F9D9DA',
        'bg-gray': '#888',
        'header': '#7070703e'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        roboto: ["Roboto", "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
  },
  plugins: [],
} satisfies Config;
