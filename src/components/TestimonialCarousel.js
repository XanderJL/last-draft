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
        {/* <div className="quote">
          <p className="has-text-centered has-text-weight-light is-italic is-size-5">
            "Working with Last Draft over the past three years has been
            invaluable to CEO Quest. The content strategies they executed
            expanded our reach and helped us form several strategic
            partnerships. Their superior writing skills helped bolster our
            position as company-building experts."
          </p>
          <div className="client has-text-centered is-size-5">
            <p>Tom Mohr</p>
            <p>Founder, CEO Quest</p>
          </div>
          <a
            href="http://ceoquest.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Img
              className="testimonial-logo"
              fluid={ceoLogo}
              alt="CEO Quest logo"
              objectFit="contain"
            />
          </a>
        </div>
        <div className="quote">
          <p className="has-text-centered has-text-weight-light is-italic is-size-5">
            “Last Draft has been an invaluable partner in helping us develop our
            brand positioning and content marketing strategies. They take the
            time to listen, understand and research our point of view, resulting
            in high quality content that’s written in our voice.”
          </p>
          <div className="client has-text-centered is-size-5">
            <p>Bob Bausmith</p>
            <p>Founder, Accelerate Innovation</p>
          </div>
          <a
            href="https://www.accelerateinnovation.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Img
              className="testimonial-logo"
              fluid={accelerateLogo}
              alt="Accelerate Innovation logo"
              objectFit="contain"
            />
          </a>
        </div> */}
      </Slider>
    </section>
  )
}
