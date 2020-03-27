import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import ContactForm from "../components/contact"
import Testimonials from "../components/testimonial-carousel"
import SEO from "../components/seo"

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
  const glassesImage = data.glassesImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title="Home"
        description="Last Draft is grounded in a firm belief that ethical stories are the catalysts of technological development, economic progress, social evolution, and positive change."
      />
      <BackgroundImage
        className="hero-landing is-fullheight-with-navbar"
        fluid={headerImage}
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="is-montserrat is-uppercase title is-size-1 has-text-white">
              a story company
            </h1>
            <h2 className="is-montserrat is-uppercase subtitle is-size-3 has-text-white">
              pr + communications
            </h2>
            <h2 className="is-montserrat is-uppercase subtitle is-size-3 has-text-white">
              content marketing
            </h2>
          </div>
        </div>
      </BackgroundImage>
      <section className="section-ethical-storytelling">
        <div className="container">
          <div className="grid-wrapper">
            <div className="ethical">
              <Link to="/about">
                <h2 className="is-size-3">ethical</h2>
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
                <h2 className="is-size-3">engaging</h2>
              </Link>
              <p className="has-text-centered">
                Connection is rooted in{" "}
                <span className="has-text-weight-bold">engagement</span>. We
                create content that calls people{" "}
                <span className="no-wrap">into conversation.</span>
              </p>
            </div>
            <div className="human">
              <Link to="/about">
                <h2 className="is-size-3">human</h2>
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
      <div className="is-hidden-touch hero newsletter-hero is-fullheight">
        <BackgroundImage
          className="hero-content"
          fluid={newsLetterImage}
          style={{ backgroundAttachment: "fixed" }}
        >
          <div className="newsletter">
            <form action="">
              <div className="field">
                <h1 className="title is-montserrat has-text-white">
                  Sign Up For Our Newsletter
                </h1>
              </div>
              <div className="field">
                <input type="text" className="input" placeholder="Email" />
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-white is-montserrat is-uppercase">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </BackgroundImage>
      </div>
      <section className="is-hidden-desktop">
        <div className="newsletter">
          <form action="">
            <div className="field">
              <h1 className="title is-montserrat has-text-white">
                Sign Up For Our Newsletter
              </h1>
            </div>
            <div className="field">
              <input type="text" className="input" placeholder="Email" />
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-white is-montserrat is-uppercase">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="image">
          <Img fluid={newsLetterImage} alt="Typewriter" />
        </div>
      </section>
      <Testimonials />
      <section className="section-content-block">
        <Img
          className="image-container"
          fluid={glassesImage}
          alt="image of glasses on a table"
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="title-wrapper">
          <h2 className="title">
            There's power in language.
            <br />
            Your words matter.
          </h2>
        </div>
      </section>
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
