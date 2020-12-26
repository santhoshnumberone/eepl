import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClimateChange from "../components/ClimateChange"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ClimateChange />
  </Layout>
)

export default IndexPage
