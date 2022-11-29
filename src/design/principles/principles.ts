import { Colors } from "./color.type";
import { Sizings } from "./sizing.type";

export const sizings: Sizings = {
  nano: "4px",
  micro: "8px",
  mini: "12px",
  base: "16px",
  large: "24px",
  huge: "32px",
  giant: "40px",
  "3x": "48px",
  "4x": "64px",
  "5x": "80px",
  massive: "120px",
  "10x": "160px",
  colossal: "200px",
  xl: "600px",
  xls: "700px",
  100: "100%",
  75: "75%",
  50: "50%",
  25: "25%",
};

export const themeLight: Colors = {
  default: {
    low: {
      DEFAULT: "#2d3436",
      100: "#dfe6e9",
      400: "#b2bec3",
      700: "#636e72",
    },
    high: {
      DEFAULT: "#ffffff",
      100: "#f1f2f6",
      400: "#a4b0be",
      700: "#747d8c",
    },
  },
  brand: {
    primary: {
      DEFAULT: "#3c6382",
      100: "#82ccdd",
      400: "#60a3bc",
      700: "#0a3d62",
    },
    premium: {
      DEFAULT: "#38ada9",
      100: "#b8e994",
      400: "#78e08f",
      700: "#079992",
    },
    secondary: {
      DEFAULT: "#1e3799",
      100: "#6a89cc",
      400: "#4a69bd",
      700: "#0c2461",
    },
    highlight: {
      DEFAULT: "#fa983a",
      100: "#fad390",
      400: "#f6b93b",
      700: "#e58e26",
    },
  },
  feedback: {
    alert: {
      DEFAULT: "#eb2f06",
      100: "#f8c291",
      400: "#e55039",
      700: "#b71540",
    },
    success: {
      DEFAULT: "#009432",
      100: "#C4E538",
      400: "#A3CB38",
      700: "#006266",
    },
  },
  gradient: {
    secondary: `
      background: rgb(255,255,255);
      background: linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(30,55,153,1) 100%);
    `,
    primary: `
      background: rgb(255,255,255);
      background: linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(60,99,130,1) 100%);
    `,
    premium: `
      background: rgb(255,255,255);
      background: linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(56,173,169,1) 100%);
    `,
    DEFAULT: `
      background: rgb(250,152,58);
      background: linear-gradient(160deg, rgba(250,152,58,1) 0%, rgba(56,173,169,1) 50%, rgba(30,55,153,1) 100%);
    `,
  },
};

export const themeDark: Colors = {
  default: {
    high: {
      DEFAULT: "#2d3436",
      100: "#dfe6e9",
      400: "#b2bec3",
      700: "#636e72",
    },
    low: {
      DEFAULT: "#ffffff",
      100: "#f1f2f6",
      400: "#a4b0be",
      700: "#747d8c",
    },
  },
  brand: {
    primary: {
      DEFAULT: "#3c6382",
      100: "#82ccdd",
      400: "#60a3bc",
      700: "#0a3d62",
    },
    premium: {
      DEFAULT: "#38ada9",
      100: "#b8e994",
      400: "#78e08f",
      700: "#079992",
    },
    secondary: {
      DEFAULT: "#1e3799",
      100: "#6a89cc",
      400: "#4a69bd",
      700: "#0c2461",
    },
    highlight: {
      DEFAULT: "#fa983a",
      100: "#fad390",
      400: "#f6b93b",
      700: "#e58e26",
    },
  },
  feedback: {
    alert: {
      DEFAULT: "#eb2f06",
      100: "#f8c291",
      400: "#e55039",
      700: "#b71540",
    },
    success: {
      DEFAULT: "#009432",
      100: "#C4E538",
      400: "#A3CB38",
      700: "#006266",
    },
  },
  gradient: {
    secondary: `
      background: rgb(255,255,255);
      background: linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(30,55,153,1) 100%);
    `,
    primary: `
      background: rgb(255,255,255);
      background: linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(60,99,130,1) 100%);
    `,
    premium: `
      background: rgb(255,255,255);
      background: linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(56,173,169,1) 100%);
    `,
    DEFAULT: `
      background: rgb(250,152,58);
      background: linear-gradient(160deg, rgba(250,152,58,1) 0%, rgba(56,173,169,1) 50%, rgba(30,55,153,1) 100%);
    `,
  },
};
