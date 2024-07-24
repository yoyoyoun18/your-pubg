import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};

export default config;
