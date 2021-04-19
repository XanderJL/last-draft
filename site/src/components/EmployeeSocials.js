import { HStack, Icon, Link } from "@chakra-ui/react"
import * as React from "react"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const EmployeeSocials = ({ socials }) => {
  return (
    <HStack align="center">
      {socials.linkedin && (
        <Link href={socials.linkedin}>
          <Icon
            color="gray.500"
            boxSize={6}
            as={FaLinkedin}
            _hover={{ color: "cyan.400" }}
          />
        </Link>
      )}
      {socials.instagram && (
        <Link href={socials.instagram}>
          <Icon
            color="gray.500"
            boxSize={6}
            as={FaInstagram}
            _hover={{ color: "cyan.400" }}
          />
        </Link>
      )}
      {socials.facebook && (
        <Link href={socials.facebook}>
          <Icon
            color="gray.500"
            boxSize={6}
            as={FaFacebookSquare}
            _hover={{ color: "cyan.400" }}
          />
        </Link>
      )}
      {socials.twitter && (
        <Link href={socials.twitter}>
          <Icon
            color="gray.500"
            boxSize={6}
            as={FaTwitterSquare}
            _hover={{ color: "cyan.400" }}
          />
        </Link>
      )}
    </HStack>
  )
}

export default EmployeeSocials
