import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import PortableText from "@sanity/block-content-to-react"
import Slider from "react-slick"

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
      ceoLogo: file(relativePath: { eq: "index/ceo-quest-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accelerateLogo: file(
        relativePath: { eq: "index/accelerate-innovation-logo.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      testimonials: sanityIndexPage {
        testimonials {
          _rawTestimonial
          logo {
            asset {
              id
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
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
            <div className="client has-text-centered is-size-5">
              <p>{testimonial.brandRep}</p>
              <p>
                {testimonial.repTitle}, {testimonial.brandName}
              </p>
            </div>
            <a
              href={testimonial.brandUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img
                className="testimonial-logo"
                fluid={testimonial.logo.asset.fluid}
                alt={testimonial.alt}
                objectFit="contain"
              />
            </a>
          </div>
        ))}
      </Slider>
    </section>
  )
}
