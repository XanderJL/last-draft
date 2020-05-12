import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/Layout"
import Brands from "../components/Brands"
import InstagramFeed from "../components/InstagramFeed"

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
      publicationImage: file(relativePath: { eq: "about/the-last-draft.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beerImage: file(relativePath: { eq: "about/beers-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
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
              <div className="content">
                <h1 className="title is-montserrat is-uppercase has-text-black">
                  A Story Company
                </h1>
                <p>
                  Last Draft is a personal brand management and content writing
                  company for professionals with personality.
                </p>
                <p>
                  We represent narrative integrity. We restore the element of
                  human connection between our clients and their publics through
                  the practice of ethical storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <section className="section-storytelling">
        <div className="container">
          <div className="copy">
            <div className="content">
              <h1 className="title is-montserrat is-uppercase has-text-black is-size-4-mobile">
                What Is Ethical Storytelling?
              </h1>
              <p>
                Stories construct and define the lens through which we see the
                world. They are the catalysts of technological development,
                economic progress, social evolution, and positive change.
              </p>
              <p>
                When we say we practice ethical storytelling, we mean the
                creation and promotion of narratives that are honest, accurate,
                and grounded in a practice of mutual respect.
              </p>
              <p>
                We are all in relationship with one another. It’s why we are
                relationship-focused in everything we do.
              </p>
            </div>
          </div>
          <div className="image">
            <Img className="type-writer" fluid={typeWriterImage} />
          </div>
        </div>
      </section>
      <Brands />
      <section className="section-publication">
        <div className="container">
          <div className="card-publication">
            <div className="card-content">
              <div className="content">
                <h1 className="title is-montserrat is-uppercase has-text-black is-size-4-mobile">
                  Multimedia Publication:
                </h1>
                <a
                  role="button"
                  href="https://medium.com/lastdraft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img
                    fluid={data.publicationImage.childImageSharp.fluid}
                    alt="The Last Draft publication"
                    style={{
                      flex: 1,
                      margin: "2rem 0",
                      maxWidth: "400px",
                    }}
                  />
                </a>
                <p>
                  Art and narrative are portals through which we explore new
                  ways to see in ourselves and each other. Through these
                  experiences, we become kinder, more connected beings.
                </p>
                <p>
                  The Last Draft is a stage that has been set to take readers
                  and viewers into artists homes, histories, and imaginations.
                  It is a virtual space for artists to share their work, discuss
                  their creative process, and learn from industry experts. We
                  aim to traverse the intersection of art, technology, and
                  business, curating a publication that functions both as
                  information hub and as creative outlet. Stories and content
                  are produced and shared through a variety of mediums.
                </p>
                <a
                  role="button"
                  href="https://medium.com/lastdraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-solid is-montserrat is-uppercase"
                >
                  &nbsp; stories &rang;
                </a>
              </div>
              <Img
                className="image"
                fluid={data.beerImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </section>
      <InstagramFeed />
    </Layout>
  )
}
