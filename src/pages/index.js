import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HomeContents from "../components/HomeContents"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContents />
  </Layout>
)

export default IndexPage
