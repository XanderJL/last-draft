import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
      glassesImage: file(relativePath: { eq: "index/glasses.jpeg" }) {
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
        className="is-hidden-touch hero landing-hero is-fullheight-with-navbar"
        fluid={headerImage}
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="hero-content">
          <div className="container">
            <div className="hero-copy">
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
        </div>
      </BackgroundImage>
      <section className="is-hidden-desktop">
        <div className="image">
          <Img fluid={headerImage} alt="Beer" />
        </div>
        <div className="hero-content">
          <div className="hero-copy">
            <h1 className="is-montserrat is-uppercase title is-size-4-mobile has-text-white">
              a story company
            </h1>
            <h2 className="is-montserrat is-uppercase title is-size-6-mobile has-text-white is-marginless">
              pr + communications
            </h2>
            <h2 className="is-montserrat is-uppercase title is-size-6-mobile has-text-white">
              content marketing
            </h2>
          </div>
        </div>
      </section>
      <section className="section-ethical-storytelling">
        <div className="container">
          <div className="grid-wrapper">
            <div className="ethical">
              <h2 className="is-size-3">ethical</h2>
              <p className="has-text-centered">
                We practice{" "}
                <span className="has-text-weight-bold">
                  ethical storytelling
                </span>
                . We feel a moral obligation to communicate with honesty,
                accuracy, and respect.
              </p>
            </div>
            <div className="sustainable">
              <h2 className="is-size-3">sustainable</h2>
              <p className="has-text-centered">
                We recognize the power of longevity. We forge impactful{" "}
                <span className="has-text-weight-bold">brand legacies</span>{" "}
                that stand the test of time.
              </p>
            </div>
            <div className="human">
              <h2 className="is-size-3">human</h2>
              <p className="has-text-centered">
                We believe stories define us. We restore the element of{" "}
                <span className="has-text-weight-bold">human connection</span>{" "}
                between brands and their publics.
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
          objectPosition="50% 60%"
        />
        <div className="title-wrapper">
          <h2 className="title">
            There's power in language.
            <br />
            Your words matter.
          </h2>
        </div>
      </section>
      {/* <ContactForm /> */}
    </Layout>
  )
}

export default IndexPage
