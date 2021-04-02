import * as React from "react"
import PortableText from "@sanity/block-content-to-react"
import Slider from "react-slick"
import { Box, Link, Text } from "@chakra-ui/react"

export default function Testimonials({ testimonials }) {
  const slickSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const serializers = {
    types: {
      block: props => (
        <Text
          as="p"
          textAlign="center"
          fontWeight="light"
          fontStyle="italic"
          fontSize="lg"
          color="white"
        >
          {props.children}
        </Text>
      ),
    },
  }

  return (
    <Slider {...slickSettings}>
      {testimonials.map(testimonial => {
        const {
          id,
          _rawTestimonial,
          brandUrl,
          brandRep,
          repTitle,
          brandName,
        } = testimonial
        return (
          <Box key={id}>
            <PortableText blocks={_rawTestimonial} serializers={serializers} />
            <Box mt="1.25rem" fontSize="lg" fontWeight={600}>
              <Link href={brandUrl} isExternal>
                <Text color="white" textAlign="center">
                  {brandRep}
                  <Text>
                    {repTitle}, {brandName}
                  </Text>
                </Text>
              </Link>
            </Box>
          </Box>
        )
      })}
    </Slider>
  )
}
