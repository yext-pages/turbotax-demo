module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1C2E5E",
        orange: "#DC7138",
        black: "#000000",
        white: "#FFFFFF",
        "gray-dark": "#333333",
        "gray-middle": "#777777",
        "gray-light": "#F9FAFB",
        "gray-disabled": "#C4CBD0",
      },
      fontFamily: {
        "lato-bold": ["Lato-Bold"],
        "lato-regular": ["Lato-Regular"],
      },
      fontSize: {
        sm: ["14px", "22px"],
        base: ["16px", "24px"],
        lg: ["18px", "24px"],
        xl: ["24px", "30px"],
        "2xl": ["34px", "40px"],
        "3xl": ["48px", "64px"],
      },
      backgroundImage: {
        "hero":
          "url('https://a.mktgcdn.com/p/zLdSJhB5bxsOkKegHhmFSwwRqwcWvs0n1SY64JpxXw8/2680x1600.jpg')",
      },
    },
  },
  plugins: [],
};
