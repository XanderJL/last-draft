import { Box, Flex } from "@chakra-ui/layout"
import { NextSeo } from "next-seo"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ title, description, ogImage, children, ...rest }) => {
  return (
    <>
      <NextSeo
        title={`${title ? `${title} | ` : ""}Last Draft`}
        description={
          description
            ? description
            : "Last Draft is a writing agency for business-to-business (B2B) and business-to-government (B2G) companies. We specialize in producing research-based content that supports the validation of new business and value propositions. We write thought leadership, white papers, and other brand assets for consultants, investors, technology companies, and service providers in the healthcare and education spaces."
        }
        defaultTitle="Last Draft"
        openGraph={{
          type: "website",
          locale: "en_CA",
          site_name: "Last Draft",
          url: "https://www.lastdraft.ca",
          title: `${title ? `${title} | ` : ""}Last Draft`,
          description: description
            ? description
            : "Last Draft is a writing agency for business-to-business (B2B) and business-to-government (B2G) companies. We specialize in producing research-based content that supports the validation of new business and value propositions. We write thought leadership, white papers, and other brand assets for consultants, investors, technology companies, and service providers in the healthcare and education spaces.",
          images: ogImage && [
            {
              url: ogImage,
              alt: "Last Draft",
              width: 1200,
              height: 636,
            },
          ],
        }}
        twitter={{
          handle: "@LastDraftInc",
          site: "https://www.lastdraft.ca",
          cardType: "summary_large_image",
        }}
      />
      <Flex
        direction="column"
        minH="100vh"
        w="100%"
        overflow="hidden"
        {...rest}
      >
        <Navbar />
        <Box flex={1}>{children}</Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
