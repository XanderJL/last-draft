import { Container, Heading, Text } from "@chakra-ui/react"
import Layout from "@components/Layout"
import Section from "@components/Layout/Section"

export default function Success() {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Section>
          <Heading>Excellent!</Heading>
          <Text>Your message has been successfully sent.</Text>
        </Section>
      </Container>
    </Layout>
  )
}
