// https://stitches.dev/docs/installation
import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#63C2FF",
      secondary: "#FF6584",
      gray: "#3F3D56",
      lightGray: "#E6E6E6",
      black40: "rgba(0, 0, 0, 0.4)",
    },
    fontSizes: {
      small: "1.2rem",
      author: "1.4rem",
      medium: "1.8rem",
      title: "2rem",
      big: "2.4rem",
    },
  },
  utils: {
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginTop: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
  },
});
