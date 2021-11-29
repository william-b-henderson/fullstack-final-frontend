import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Background: {
      // 1. We can update the base styles
      baseStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        w: "100vw",
        h: "100vh",
        bgGradient: "linear(to-t, red.300, white)"
      },
    },
  },
})

export default theme;