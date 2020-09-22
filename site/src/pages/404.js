import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <section className="section">
      <div className="container">
        <h1 className="title">Oops!</h1>
        <p className="subtitle">
          It looks like the page you're after doesn't exist.
        </p>
        <Link className="button is-black" to="/">
          Return Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
