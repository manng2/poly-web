/** @type {import('tailwindcss').Config} */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        header: "#5A0867",
        arbitrumBg: "#45A5FE",
        metamaskBg: "#FFFFFF",
        linearPurple: {
          from: "#1A0938",
          to: "#005B14",
        },
        linearYellow: {
          from: "#E8D457",
          to: "#896E00",
        },
        linearPink: {
          from: "#DF2EE2",
          to: "#54005B",
        },
        linearBlue: {
          from: "#221663",
          to: "#090039",
        },
        linearDarkGreen: {
          from: "#165263",
          to: "#002D39",
        },
        darkGreen: "#003D0D78",
        darkYellow: "#810805",
        darkPink: "#810805",
        darkBlue: "#0B0332",
        darkPurple: "#1F1554",
        darkMossGreen: "#052B37",
        yellow: "#FFF500",
        money: "#00FFD1",
        tealBlue: "#326C89",
        chineseBlack: "#0D0922",
        metallicSeaweed: "#0D7D95",
        vividSkyBlue: "#00D1FF",
        activeNavBtn: "#C10065",
        inactiveNavBtn: "#9F587D",
        primaryYellow: "#F9B707",
        navMenuBackground: "#283a5ad9",
        greenSaveButton: "#2AFF0D75",
        toastSuccess: "#15a724e6",
        overlay: "#00000085",
        gray: '#D0D0D0',
        prussianBlue: '#053253',
        brightYellow: '#b27a0b',
        darkPurple: '#1A0938',
        darkBlue: '#151c3b',
        primary: 'rgba(185, 130, 255, 1)',
        success: 'rgba(4, 255, 74, 1)'
      },
      backgroundImage: {
      },
      height: {
        125: "31.25rem",
        100: "25rem",
        60: "15rem",
      },
      text: {
        "5xl": {
          fontSize: "3rem",
          lineHeight: "3rem",
        },
      },
      screens: {
        desktop: "1164px",
        mobile: "320px",
      },
      keyframes: {
        reverseSpin: {
          "0%": {
            transform: "rotate(360deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        moveToLeft: {
          "0%": {
            right: "-50%",
          },
          "100%": {
            right: "0",
          },
        },
        moveToRight: {
          "0%": {
            // right: '0%',
            width: "80%",
          },
          "100%": {
            // right: '-50%',
            width: "0%",
          },
        },
        jump: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-1rem)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        }
      },
      animation: {
        "reverse-pin": "reverseSpin 1s linear infinite",
      },
    },
  },
};
