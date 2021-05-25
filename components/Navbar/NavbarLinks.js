import { Flex } from "@chakra-ui/react"
import Link from "@components/Link"

const NavbarLinks = ({ routes, ...rest }) => {
  return (
    <Flex {...rest}>
      {routes.map((route, i) => {
        const { slug, title } = route

        return (
          <Link
            key={i}
            href={slug}
            p="1.25rem 1rem"
            textTransform="uppercase"
            _hover={{ bg: "gray.50" }}
          >
            {title}
          </Link>
        )
      })}
    </Flex>
  )
}

export default NavbarLinks
