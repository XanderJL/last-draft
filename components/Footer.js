import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"
import Link from "@components/Link"
import routes from "@lib/routes.json"

function Footer() {
  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <Flex direction="column" align="center">
            <Link display="flex" alignItems="center" href="/" pb="1rem">
              {/* <Image boxSize={12} src={Logo} alt="Last Draft logo" />{" "} */}
              <Text
                pl="1rem"
                fontFamily="heading"
                fontWeight={600}
                fontSize="xl"
                textTransform="uppercase"
              >
                Last Draft
              </Text>
            </Link>
            <Flex>
              {routes.map((route, i) => {
                const { slug, title } = route
                return (
                  <Link key={i} href={slug}>
                    {title}
                  </Link>
                )
              })}
              <a
                href="mailto: jacob@lastdraft.ca"
                className="navbar-item is-montserrat is-uppercase"
                target="_blank"
                rel="noreferrer noopener"
              >
                Email Us
              </a>
            </Flex>
            <Box as="span" className="copyright">
              &copy; Copyright {new Date().getFullYear()} by Last Draft
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Footer
