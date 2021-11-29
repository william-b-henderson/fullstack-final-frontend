import { Box, useStyleConfig } from "@chakra-ui/react"

function Background(props) {
  const { children, ...rest } = props

  const styles = useStyleConfig("Background");

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest}>{children}</Box>
}

export default Background;