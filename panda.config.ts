import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import indigo from "@park-ui/panda-preset/colors/indigo";
import slate from "@park-ui/panda-preset/colors/slate";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    createPreset({ accentColor: indigo, grayColor: slate, radius: "lg" }),
  ],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  theme: {
    extend: {
      tokens: {
        fonts: {
          body: {
            value: "Nunito, sans-serif",
          },
          header: {
            value: "Oswald, serif",
          },
        },
      },
    },
  },
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
});
