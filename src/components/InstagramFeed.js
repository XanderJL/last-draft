import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import InstagramEmbed from "react-instagram-embed"

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
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
        ></div>
        <div className="modal-content">
          <figure className="image">
            <InstagramEmbed url={"https://instagram.com/p/" + postId} />
          </figure>
        </div>
        <button
          role="button"
          tabIndex={0}
          className="modal-close is-large"
          onClick={() => setOpenPost(!openPost)}
        ></button>
      </div>
    )
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title is-montserrat is-uppercase has-text-black">
            instagram feed
          </h1>
          <div className="grid-wrapper">
            {data.allInstaNode.edges.map(({ node: post }) => (
              <button
                key={post.id}
                role="button"
                onClick={() => {
                  setOpenPost(!openPost)
                  setPostID(post.id)
                }}
                style={{
                  border: "none",
                  outline: "none",
                  "&:hover": {
                    color: "#fefefefe",
                  },
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
