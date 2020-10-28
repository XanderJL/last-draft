import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import InstagramEmbed from "react-instagram-embed"

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 15) {
        edges {
          node {
            id
            timestamp
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const [openPost, setOpenPost] = useState(false)
  const [postId, setPostID] = useState("")
  const modalRef = useRef()

  const InstagramModal = () => {
    useEffect(() => {
      modalRef.current.focus()
    })

    return (
      <div
        ref={modalRef}
        className="modal is-active"
        tabIndex={-1}
        onKeyDown={e => (e.key === "Escape" ? setOpenPost(!openPost) : null)}
      >
        <div
          role="button"
          tabIndex={0}
          className="modal-background"
          onClick={() => setOpenPost(!openPost)}
          onKeyDown={e => (e.key === "Escape" ? setOpenPost(!openPost) : null)}
        ></div>
        <div className="modal-content">
          <figure className="image">
            <InstagramEmbed url={"https://instagram.com/p/" + postId} />
          </figure>
        </div>
        <button
          tabIndex={0}
          className="modal-close is-large"
          onClick={() => setOpenPost(!openPost)}
          onKeyDown={e => (e.key === "Escape" ? setOpenPost(!openPost) : null)}
        ></button>
      </div>
    )
  }

  return (
    <>
      <section className="section-insta-feed">
        <div className="container">
          <h1 className="title is-montserrat is-uppercase has-text-black has-text-centered is-size-4-mobile">
            <a
              href="https://instagram.com/lastdraftinc"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lastdraftinc
            </a>
          </h1>
          <div className="grid-wrapper">
            {data.allInstaNode.edges.map(({ node: post }) => (
              <button
                key={post.id}
                onClick={() => {
                  setOpenPost(!openPost)
                  setPostID(post.id)
                }}
                onKeyDown={e =>
                  e.key === "Enter" ? setOpenPost(!openPost) : null
                }
                style={{
                  cursor: "pointer",
                  border: "0",
                  padding: "0",
                }}
              >
                <Img fluid={post.localFile.childImageSharp.fluid} />
              </button>
            ))}
          </div>
        </div>
      </section>
      {openPost ? <InstagramModal /> : null}
    </>
  )
}

export default InstagramFeed
