import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "about/about-header.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      typeWriterImage: file(relativePath: { eq: "about/type-writer.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jacobImage: file(relativePath: { eq: "about/jacob.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="About"
        description="Last Draft is grounded in a firm belief that ethical stories are the catalysts of technological development, economic progress, social evolution, and positive change."
      />
      <BackgroundImage
        fluid={data.headerImage.childImageSharp.fluid}
        className="hero-about is-fullheight-with-navbar"
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="hero-body">
          <div className="card-about">
            <div className="card-content">
              <h1 className="title is-montserrat is-uppercase has-text-black">
                A Story Company
              </h1>
              <p>
                Last Draft is a boutique Public Relations, Communications, and
                Content Marketing agency.
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
            <h1 className="title is-montserrat is-uppercase has-text-black">
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
            <Img
              className="type-writer"
              fluid={data.typeWriterImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <section className="section-who-we-are">
        <div className="container">
          <div className="jacob">
            <Img
              className="jacob-image"
              fluid={data.jacobImage.childImageSharp.fluid}
            />
            <div className="card">
              <div className="card-content">
                <div className="quote">
                  <p>
                    “Stories are existential. Not just inseparable from the way
                    we communicate and play out our lives, but actually the very
                    basis of our existence.”
                  </p>
                </div>
                <div className="author">
                  <p>Jacob Sandler</p>
                  <p>Founder + CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card copy">
            <div className="card-content">
              <h1 className="title is-montserrat is-uppercase has-text-black">
                Who We Are
              </h1>
              <p>
                Jacob founded Last Draft in early 2018 while working as an
                Associate for the Silicon Valley-based CEO advisory firm, CEO
                Quest. His first company, Last Draft Editors (2016-2019), helped
                more than 50 Canadian doctors obtain residency positions in top
                choice specialties.
              </p>
              <br />
              <p>
                Jacob holds a combined honours BA in English & Canadian Studies
                from Dalhousie University. He received the University Medal in
                Canadian Studies for highest academic standing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </Layout>
  )
}
