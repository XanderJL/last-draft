import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity"
import { config } from "./config"
import { Box, Heading, Image, Text } from "@chakra-ui/react"

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node

      switch (style) {
        case "h1":
          return (
            <Heading size="2xl" textTransform="uppercase" pb="0.5rem">
              {props.children}
            </Heading>
          )
        case "h2":
          return (
            <Heading as="h2" size="xl" textTransform="uppercase" pb="0.5rem">
              {props.children}
            </Heading>
          )
        case "h3":
          return (
            <Heading as="h3" size="lg" textTransform="uppercase" pb="0.5rem">
              {props.children}
            </Heading>
          )
        default:
          return <Text pb="1rem">{props.children}</Text>
      }
    },
    hr: ({ node }) => {
      switch (node.style) {
        case "elipses":
          return <Box as="hr" m="3rem auto" />
        default:
          return <Box as="hr" m="3rem auto" />
      }
    },
    blockImage: ({ node }) => {
      const { image, alt, caption } = node
      return (
        <>
          <Image
            src={urlFor(image)}
            alt={alt}
            style={{ margin: "1rem auto" }}
          />
          <Text color="gray.400" fontStyle="italic">
            {caption && <span>{caption}</span>}
          </Text>
        </>
      )
    },
    embed: ({ node }) => {
      const { url } = node

      // Instagram embeds
      if (rx("instagram").test(url)) {
        return (
          <div style={embedStyle}>
            <InstagramEmbed url={url} hideCaption={true} />
          </div>
        )
      }

      // Youtube embeds
      if (rx("youtube").test(url)) {
        return (
          <ReactPlayer
            url={url}
            controls={true}
            width={"100%"}
            style={embedStyle}
          />
        )
      }

      // Twitter embeds
      if (rx("twitter").test(url)) {
        return (
          <div style={embedStyle}>
            <Tweet url={url} />
          </div>
        )
      }

      return <span>Missing url</span>
    },
    podBeanEmbed: ({ node }) => {
      const { url, title } = node
      return <div />
    },
  },
}

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers,
})

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
