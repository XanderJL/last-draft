import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/Layout"
import NewsLetter from "../components/NewsLetter"
import Testimonials from "../components/TestimonialCarousel"
import ContactForm from "../components/Contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "index/header-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      newsLetterImage: file(
        relativePath: { eq: "index/newsletter-header.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassesImage: file(relativePath: { eq: "index/glasses-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const headerImage = data.headerImage.childImageSharp.fluid
  const newsLetterImage = data.newsLetterImage.childImageSharp.fluid
  // const glassesImage = data.glassesImage.childImageSharp.fluid

  return (
    <Layout
      title="Home"
      description="Last Draft is grounded in a firm belief that ethical stories are the catalysts of technological development, economic progress, social evolution, and positive change."
    >
      <BackgroundImage
        className="hero-landing is-fullheight-with-navbar"
        fluid={headerImage}
        style={{
          objectPosition: "60% 40%",
          backgroundAttachment: "fixed",
        }}
      >
        <Img
          fluid={headerImage}
          className="is-hidden-desktop"
          objectFit="contain"
          alt="Image of beer"
        />
        <div className="hero-body">
          <div className="container is-widescreen">
            <h1 className="is-montserrat is-uppercase title is-size-1 has-text-white is-spaced is-size-4-mobile">
              a story company
            </h1>
            <h2 className="is-montserrat is-uppercase subtitle is-size-3 has-text-white is-size-5-mobile">
              Personal Brand Management
              <br />
              Content Writing
            </h2>
            <h2 className="is-montserrat is-uppercase subtitle is-size-3 has-text-white"></h2>
          </div>
        </div>
      </BackgroundImage>
      <section className="section-ethical-storytelling">
        <div className="container is-widescreen">
          <div className="copy">
            <h1 className="title-heading has-text-centered is-montserrat is-size-4-mobile">
              amplifying authenticity for{" "}
              <span className="no-wrap">artists + professionals</span>
            </h1>
          </div>
          <div className="grid-wrapper">
            <div className="ethical">
              <Link to="/about">
                <h2 className="is-size-3 is-size-4-mobile">ethical</h2>
              </Link>
              <p className="has-text-centered">
                We practice{" "}
                <span className="has-text-weight-bold">
                  ethical storytelling
                </span>
                . We feel an obligation to communicate with honesty{" "}
                <span className="no-wrap">and respect.</span>
              </p>
            </div>
            <div className="sustainable">
              <Link to="/about">
                <h2 className="is-size-3 is-size-4-mobile">engaging</h2>
              </Link>
              <p className="has-text-centered">
                Connection is rooted in authentic{" "}
                <span className="has-text-weight-bold">engagement</span>. We
                create content that calls people{" "}
                <span className="no-wrap">into conversation.</span>
              </p>
            </div>
            <div className="human">
              <Link to="/about">
                <h2 className="is-size-3 is-size-4-mobile">human</h2>
              </Link>
              <p className="has-text-centered">
                We believe stories define us. We restore the element of{" "}
                <span className="has-text-weight-bold">human connection</span>{" "}
                between brands{" "}
                <span className="no-wrap">and their publics.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter image={newsLetterImage} />
      <Testimonials />
      <ContactForm inverted={true} />
    </Layout>
  )
}

export default IndexPage
