import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#808080',
        mainAccent: '#808080', // not needed for shadcn components
        overlay: '#808080', // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#C0C0C0',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#202020',
        darkText: '#fff',
        darkBorder: '#000',
        secondaryBlack: '#808080', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '0px'
      },
      boxShadow: {
        light: '6px 6px 0px 0px #000',
        dark: '6px 6px 0px 0px #000',
      },
      translate: {
        boxShadowX: '6px',
        boxShadowY: '6px',
        reverseBoxShadowX: '-6px',
        reverseBoxShadowY: '-6px',
      },
      fontWeight: {
        base: '600',
        heading: '800',
      },
    },
  },
  darkMode: 'class',
  plugins: [tailwindAnimate],
}
export default config
