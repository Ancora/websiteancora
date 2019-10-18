import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/services">Nossos Serviços</Link>
      </li>
      <li>
        <Link to="/cybersul">ERP Solution 3</Link>
      </li>
      <li>
        <Link to="/contact">Fale Conosco</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
