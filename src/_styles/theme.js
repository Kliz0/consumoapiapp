import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  lg1: "1025px",
  xl: "1440px",
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  components: {
    Button: {
      variants: {
        link: ({ colorMode }) => ({
          color: colorMode === "dark" ? "blue.400" : "blue.600",
        }),
      },
    },
    Input: {
      variants: {
        outline: ({ colorMode }) => ({
          field: {
            bg: colorMode === "dark" ? "gray.900" : "gray.50",
            borderColor: colorMode === "dark" ? "rgba(0,0,0,0.15)" : "inherit",
          },
        }),
      },
    },
    Textarea: {
      variants: {
        outline: ({ colorMode }) => ({
          bg: colorMode === "dark" ? "gray.900" : "gray.50",
          borderColor: colorMode === "dark" ? "rgba(0,0,0,0.15)" : "inherit",
        }),
      },
    },
  },
  styles: {
    global: (props) => ({
      html: {
        fontSize: {
          base: "14px",
          lg: "16px",
        },
      },
      h1: {
        fontSize: "2.488rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2.074rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: "1.728rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h4: {
        fontSize: "1.44rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        color: props.colorMode === "dark" ? "gray.100" : "gray.700",
        touchAction: "manipulation",
      },
    }),
  },
});
