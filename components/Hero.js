import { Box } from "@chakra-ui/react"

const Hero = ({ placeholder, image, children, ...rest }) => {
  return (
    <Box
      minH="300px"
      bgImage={`url(${placeholder})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      {...rest}
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        minH="inherit"
        bgImage={`url(${image})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
      >
        {children}
      </Box>
    </Box>
  )
}

export default Hero
