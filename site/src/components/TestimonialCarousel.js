import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import PortableText from "@sanity/block-content-to-react"
import Slider from "react-slick"
import { Link } from "@chakra-ui/react"

export default function Testimonials() {
  const slickSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const data = useStaticQuery(graphql`
    {
      testimonials: sanityIndexPage {
        testimonials {
          _rawTestimonial
          brandName
          brandRep
          repTitle
          brandUrl
          id
        }
      }
    }
  `)
  const serializers = {
    types: {
      block: props => (
        <p className="has-text-centered has-text-weight-light is-italic is-size-5">
          {props.children}
        </p>
      ),
    },
  }
  const testimonials = data.testimonials.testimonials

  return (
    <section className="section-testimonials">
      <Slider {...slickSettings} className="quote-carousel">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="quote">
            <PortableText
              blocks={testimonial._rawTestimonial}
              serializers={serializers}
            />
            <Link href={testimonial.brandUrl} isExternal>
              <div className="client has-text-centered is-size-5">
                <p>{testimonial.brandRep}</p>
                <p>
                  {testimonial.repTitle}, {testimonial.brandName}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  )
}
