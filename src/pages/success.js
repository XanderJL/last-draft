import React from "react"
import Layout from "../components/layout"

export default function Success() {
  return (
    <Layout>
      <section className="section">
          <div className="container">
              <h1>Excellent!</h1>
              <p>Your message has been successfully sent.</p>
          </div>
      </section>
    </Layout>
  )
}
