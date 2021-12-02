import { Box, useStyleConfig } from "@chakra-ui/react"

function Background(props) {
  const { children, ...rest } = props
  const styles = useStyleConfig("Background");

  return <Box __css={styles} {...rest}>{children}</Box>
}

export default Background;