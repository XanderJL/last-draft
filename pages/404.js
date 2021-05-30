import { Container, Heading, Text } from "@chakra-ui/react"
import Layout from "@components/Layout"
import Section from "@components/Layout/Section"
import Link from "@components/Link"

const NotFoundPage = () => (
  <Layout>
    <Container maxW="container.xl">
      <Section>
        <Heading>Oops!</Heading>
        <Text>
          The page you're looking for doesn't exist. Please{" "}
          <Link href="/" textDecor="underline">
            return home.
          </Link>
        </Text>
      </Section>
    </Container>
  </Layout>
)

export default NotFoundPage
