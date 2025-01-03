import path from "path";
import mizuPreset from "./src/styles/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [mizuPreset],
  content: [path.join(__dirname, "src/**/*.{ts,tsx,js,jsx}")],
};
