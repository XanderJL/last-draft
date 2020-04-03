import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <SEO title="404: Not found" />
        <h1 className="title">Oops!</h1>
        <p className="subtitle">It looks like the page you're after doesn't exist.</p>
        <Link className="button is-black" to="/">
          Return Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
