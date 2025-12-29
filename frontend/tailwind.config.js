/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. I COLORI UFFICIALI HARLEY & TEXTURE DARK
      colors: {
        'hd-orange': '#FF6600', // L'unico vero arancione
        'hd-black': '#000000',  // Nero assoluto
        'hd-charcoal': '#121212', // Grigio scuro "Material" (per le card)
        'hd-steel': '#2a2a2a',    // Grigio metallico per bordi sottili
        'hd-light': '#e5e5e5',    // Bianco sporco (meno sparato del bianco puro)
      },
      
      // 2. I FONT DEL BRAND
      fontFamily: {
        sans: ['1903Sans', 'Helvetica Neue', 'sans-serif'], // Testi lunghi
        condensed: ['1903Condensed', 'Impact', 'sans-serif'], // TITOLI GIGANTI
      },

      // 3. ANIMAZIONI CUSTOM (Per l'effetto "Wow")
      animation: {
        'marquee': 'marquee 25s linear infinite', // Testo che scorre
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards', // Entrata dal basso
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Respiro lento
        'spin-slow': 'spin 12s linear infinite', // Rotazione lentissima (per loghi background)
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },

      // 4. DIMENSIONI CUSTOM PER TITOLI ENORMI
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem',
      },
      
      // 5. Z-INDEX ESTESI (Per sovrapposizioni complesse)
      zIndex: {
        '60': '60',
        '70': '70',
      }
    },
  },
  plugins: [],
}