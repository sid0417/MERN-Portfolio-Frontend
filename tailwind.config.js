/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors : {
        dark : "bg-gray-900",
        light : "bg-[#DFF6FF]",
      },
      backgroundColor: {
        dark: "#111827", 
        secondaryDark: "#1E293B", // Or #1F2937 (a bit lighter)
        light: "#EBF5FF",
        secondaryLight: "#FFFFFF" // Pure white for contrast in light mode
      },
      
      textColor: {
        dark: "#111827", // Light text for dark mode (near white)
        secondaryDark: "#374151", // Soft gray for less important text in dark mode
        light: "#F8FAFC", // Dark text for light mode (deep navy/charcoal)
        secondaryLight: "#CBD5E1" // Medium gray for subtle contrast in light mode
      },
      
      
    },
  },
  plugins: [],
}

