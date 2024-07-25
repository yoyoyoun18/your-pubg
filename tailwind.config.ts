import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Spoqa Han Sans Neo",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        SBAggro: ["SBAggro"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-container-img":
          "url('https://kimyoungjoforum1557.s3.ap-northeast-2.amazonaws.com/pubg-battlegrounds-rondo-map-1-1920x1080-3e95b77f1f14.png')",
        "latest-patch-thumbnail-1":
          "url('https://wstatic-prod-boc.krafton.com/common/content/news/20240708/Pc8FtroI_thumb.jpg')",
        "latest-patch-thumbnail-2":
          "url('https://wstatic-prod-boc.krafton.com/common/content/news/20240610/gwFclfBS_thumb.jpg')",
        "ernagel-map":
          "url('https://wstatic-prod.pubg.com/web/live/main_c2240d2/img/9b5d63e.jpg')",
      },
      height: {
        "100": "25rem", // h-100 클래스로 사용 가능
        "104": "26rem", // h-104 클래스로 사용 가능
        "108": "27rem", // h-108 클래스로 사용 가능
        "112": "28rem", // h-112 클래스로 사용 가능
        "116": "29rem", // h-116 클래스로 사용 가능
        "120": "30rem", // h-120 클래스로 사용 가능
        "128": "32rem", // h-128 클래스로 사용 가능
        "144": "36rem", // h-144 클래스로 사용 가능
        "160": "40rem", // h-160 클래스로 사용 가능
        "192": "48rem", // h-192 클래스로 사용 가능
        "256": "64rem", // h-256 클래스로 사용 가능
      },
      width: {
        "100": "25rem", // h-100 클래스로 사용 가능
        "104": "26rem", // h-104 클래스로 사용 가능
        "108": "27rem", // h-108 클래스로 사용 가능
        "112": "28rem", // h-112 클래스로 사용 가능
        "116": "29rem", // h-116 클래스로 사용 가능
        "120": "30rem", // h-120 클래스로 사용 가능
        "128": "32rem", // h-128 클래스로 사용 가능
        "144": "36rem", // h-144 클래스로 사용 가능
        "160": "40rem", // h-160 클래스로 사용 가능
        "192": "48rem", // h-192 클래스로 사용 가능
        "256": "64rem", // h-256 클래스로 사용 가능
      },
      keyframes: {
        "tracking-in-contract-bck": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0",
          },
          "40%": {
            opacity: "0.6",
          },
          "100%": {
            "letter-spacing": "normal",
            opacity: "1",
          },
        },
        "scale-up-ver-top": {
          "0%": {
            transform: "scale(0.5)",
            "transform-origin": "50% 0%",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            "transform-origin": "50% 0%",
            opacity: "1",
          },
        },
      },
      animation: {
        "tracking-in-contract-bck":
          "tracking-in-contract-bck 1s cubic-bezier(.215,.61,.355,1.000) both",
        "scale-up-ver-top":
          "scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  plugins: [],
};

export default config;
