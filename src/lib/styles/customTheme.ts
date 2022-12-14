import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    heading: "Outfit, sans-serif",
    body: "Outfit, sans-serif",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 24,
      },
    },
    Input: {
      defaultProps: {
        variant: "filled",
      },
    },
    Select: {
      defaultProps: {
        variant: "filled",
      },
    },
  },
});

export default customTheme;
