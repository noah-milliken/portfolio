import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f9f6fd",
        100: "#e7dbf9",
        200: "#d2bcf3",
        300: "#b896ec",
        400: "#a980e9",
        500: "#9461e3",
        600: "#8145de",
        700: "#6926d0",
        800: "#5921b1",
        900: "#411881",
      },
    },
    fonts: {
      headint: `Montserrat, ${base.fonts.heading}`,
      body: `Inter, ${base.fonts.body}`,
    },
    config: {
      initialColorMode: "dark",
      useSystemColorMode: true,
    },
    semanticTokens: {
      colors: {
        "chakra-body-bg": {
          _light: "gray.50",
          _dark: "#0c1015",
        },
      },
    },
  },

  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  })
);

export default theme;
