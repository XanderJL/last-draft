import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react"
import Link from "@components/Link"
import routes from "@lib/routes.json"
import Logo from "./Logo"

function Footer() {
  return (
    <>
      <Box bg="white" p="3rem 1.25rem">
        <Container maxW="container.xl">
          <Stack align="flex-end" spacing={6}>
            <Link display="flex" alignItems="center" href="/">
              <Logo boxSize={12} />
              <Heading
                as="h3"
                pl="1rem"
                fontFamily="heading"
                fontSize="xl"
                textTransform="uppercase"
              >
                Last Draft
              </Heading>
            </Link>
            <Flex direction="row-reverse" flexWrap="wrap">
              {routes.map((route, i) => {
                const { slug, title } = route
                return (
                  <Link
                    pl={3}
                    key={i}
                    href={slug}
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    {title}
                  </Link>
                )
              })}
              <Link
                href="mailto: jacob@lastdraft.ca"
                textTransform="uppercase"
                isExternal
              >
                Email Us
              </Link>
            </Flex>
            <Box as="span" className="copyright">
              &copy; Copyright {new Date().getFullYear()} by Last Draft
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Footer
