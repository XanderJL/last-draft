import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/Layout"
import Contact from "../components/Contact"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "about/about-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      typeWriterImage: file(relativePath: { eq: "about/type-writer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const headerImage = data.headerImage.childImageSharp.fluid
  const typeWriterImage = data.typeWriterImage.childImageSharp.fluid

  return (
    <Layout
      title="About"
      description="Last Draft is grounded in a firm belief that ethical stories are the catalysts of technological development, economic progress, social evolution, and positive change."
    >
      <BackgroundImage
        fluid={headerImage}
        className="hero-about is-fullheight-with-navbar"
      >
        <div className="hero-body">
          <div className="card-about">
            <div className="card-content">
              <h1 className="title is-montserrat is-uppercase has-text-black">
                A Story Company
              </h1>
              <p>
                Last Draft is a personal brand management and content writing
                company for professionals with personality.
              </p>
              <br />
              <p>
                We represent narrative integrity. We restore the element of
                human connection between our clients and their publics through
                the practice of ethical storytelling.
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <section className="section-storytelling">
        <div className="container">
          <div className="copy">
            <h1 className="title is-montserrat is-uppercase has-text-black is-size-4-mobile">
              What Is Ethical Storytelling?
            </h1>
            <p>
              Stories construct and define the lens through which we see the
              world. They are the catalysts of technological development,
              economic progress, social evolution, and positive change.
            </p>
            <br />
            <p>
              When we say we practice ethical storytelling, we mean the creation
              and promotion of narratives that are honest, accurate, and
              grounded in a practice of mutual respect.
            </p>
            <br />
            <p>
              We are all in relationship with one another. It’s why we are
              relationship-focused in everything we do.
            </p>
          </div>
          <div className="image">
            <Img className="type-writer" fluid={typeWriterImage} />
          </div>
        </div>
      </section>
      <Contact />
    </Layout>
  )
}
