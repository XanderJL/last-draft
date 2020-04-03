import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/Layout"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import Headshot from "../components/Headshot"
import BioCard from "../components/BioCard"

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
      jacobImage: file(relativePath: { eq: "about/jacob-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lenaImage: file(relativePath: { eq: "about/lena-headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hillaryImage: file(relativePath: { eq: "about/hillary-headshot.jpg" }) {
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
  const jacobImage = data.jacobImage.childImageSharp.fluid
  const lenaImage = data.lenaImage.childImageSharp.fluid
  const hillaryImage = data.hillaryImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title="About"
        description="Last Draft is grounded in a firm belief that ethical stories are the catalysts of technological development, economic progress, social evolution, and positive change."
      />
      <BackgroundImage
        fluid={headerImage}
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
      <section className="section-jacob">
        <div className="container">
          <Headshot
            image={jacobImage}
            quote={`"Stories are existential. Not just inseparable from the way we
            communicate and play out our lives, but actually the very basis of our existence."`}
            employee="Jacob Sandler"
            title="Founder + CEO"
          />
          <BioCard linkedin="https://www.linkedin.com/in/jacobsandler/">
            <p>
              Jacob founded Last Draft in early 2018 while working as an
              Associate for the Silicon Valley-based CEO advisory firm, CEO
              Quest. His first company, Last Draft Editors (2016-2019), helped
              more than 50 Canadian doctors obtain residency positions in{" "}
              <span className="no-wrap">top choice specialties.</span>
            </p>
            <br />
            <p>
              Jacob holds a combined honours BA in English & Canadian Studies
              from Dalhousie University. He received the University Medal in
              Canadian Studies for{" "}
              <span className="no-wrap">highest academic standing.</span>
            </p>
          </BioCard>
        </div>
      </section>
      <section className="section-lena">
        <div className="container">
          <Headshot
            image={lenaImage}
            quote={`“Stories bring people together in the most universal ways and the most minuscule. They are both finite and infinite, reminding us how connected we inevitably are.”`}
            employee="Lena Slanisky"
            title="Content Manager"
          />
          <BioCard linkedin="https://www.linkedin.com/in/lena-slanisky-b82271163/​">
            <p>
              Lena is a poet, director, journalist, and creative collaborator.
              As a writer for a Montreal-based media outlet, Lena has penned
              articles that have resulted in over 9 million unique page views .
              As a copywriter for solopreneurs, Lena has managed marketing
              initiatives that have driven over $1M revenue. Her time working in
              both theatre and experiential marketing have honed an adept skill
              for facilitating and creating distinct and dynamic content.
            </p>
            <br />
            <p>
              Lena is an award-winning director, published fiction writer, and
              graduate of Dalhousie University’s Creative Writing program. Find
              her{" "}
              <a
                className="has-text-weight-bold has-text-black"
                href="https://www.lvbs.net/"
                target="_blank"
                rel="noreferrer noopener"
              >
                online
              </a>{" "}
              writing for your favourite entrepreneur or blogging about
              Montreal’s newest gourmet food hall.
            </p>
          </BioCard>
        </div>
      </section>
      <section className="section-hillary">
        <div className="container">
          <Headshot
            image={hillaryImage}
            quote={`“Stories provide connection. Connection to yourself, to others, to the earth, even across space and time.”`}
            employee="Hillary Watson"
            title="Illustrator + Editor"
            url="https://www.linkedin.com/in/hillary-watson-39919646/​"
          />
          <BioCard linkedin="">
            <p>
              Hillary is a singer-songwriter, illustrator, tattoo artist, and
              multi-disciplinary creative. She is a classically trained musician
              and a member of the London-based 3-part harmony folk group,{" "}
              <a
                className="has-text-weight-bold has-text-black"
                href="https://www.thepairsmusic.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                The Pairs
              </a>
              .
            </p>
            <br />
            <p>
              In her illustration, Hillary incorporates varied mediums,
              including writing, drawing, collage, watercolour, and photography.
              She is influenced heavily by her father, a surrealist painter and
              life-long visual artist, her mother, a piano teacher, and by time
              spent as crew on anti-whaling vessels patrolling the Southern
              Ocean. Her love of art and music were fostered early, over kitchen
              table art lessons and through play, song, and dance.
            </p>
          </BioCard>
        </div>
      </section>
      <Contact />
    </Layout>
  )
}
