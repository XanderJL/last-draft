import { Box, Heading, Image } from "@chakra-ui/react"
import Link from "@components/Link"

const PostCard = ({ title, image, placeholder, children, link }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="stretch"
      maxW="420px"
      boxShadow="lg"
    >
      <Box className="card-image">
        {image && (
          <Link href={link}>
            <Image
              w="100%"
              h="240px"
              src={image}
              objectFit="cover"
              objectPosition="center"
              bgImage={placeholder}
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              _hover={{ opacity: 0.8 }}
            />
          </Link>
        )}
      </Box>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p=" 1.25rem 1.25rem 2rem 1.25rem"
      >
        <Box pb="2rem">
          <Link href={link}>
            <Heading pb="0.75rem" size="md" textTransform="uppercase">
              {title}
            </Heading>
          </Link>
          <Box>{children}</Box>
        </Box>
        <Link
          href={link}
          maxW="max-content"
          p="0.75rem 1.25rem"
          bg="black"
          color="white"
          _hover={{
            bg: "cyan.400",
          }}
        >
          Read More &rsaquo;
        </Link>
      </Box>
    </Box>
  )
}

export default PostCard
