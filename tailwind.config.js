/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8C30F5",
        accent_cotton_candy: "#FFC3D8",
        accent_cyan: "#A0DCFF",
        accent_light_beach: "#FDD9D9",
        brand: "#D5FAFC",
        black: "#0B0D17"
    
      },
      spacing:{
        18: "72px",
      },
      fontSize:{
        H1: ["72px", "98px"],
        H2: ["48px", "64px"],
        H5: ["24px", "32px"],
        body1: ["16px", "26px"],
        subtitle: ["16px", "28px"],
        body: ["14px", "24px"],
        lead1: ["18px", "32px"]
      },
      font: "inter"
    },
  },
  plugins: [],
}

