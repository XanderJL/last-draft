import React from "react"
import Layout from "../components/Layout"

export default function Success() {
  return (
    <Layout>
      <section className="section">
          <div className="container is-widescreen">
              <h1>Excellent!</h1>
              <p>Your message has been successfully sent.</p>
          </div>
      </section>
    </Layout>
  )
}
