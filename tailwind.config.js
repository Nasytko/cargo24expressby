/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,tsx,ts,jsx,js,md,mdx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: { 50:'#FFF3E9', 400:'#FF8A33', 500:'#FF6A00', 600:'#E85C00' },
        ink: { 900:'#121212', 700:'#1E1E1E', 500:'#53565A' },
        border: '#E5E7EB',
        surface: { 50:'#F7F7F8' }
      },
      fontFamily: { sans:['Inter','system-ui','sans-serif'], display:['Manrope','Inter','sans-serif'] },
      boxShadow: { card:'0 8px 24px rgba(0,0,0,.08)', glow:'0 0 0 6px rgba(255,106,0,.12), 0 10px 30px rgba(255,106,0,.2)' },
      borderRadius: { xl:'1rem','2xl':'1.25rem' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};