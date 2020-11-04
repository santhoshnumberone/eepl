import React from "react"

import Layout from "../components/global/Layout"
import SEO from "../components/global/seo"
import LandingPage from "../components/sections/LandingPage";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
  </Layout>
)

export default IndexPage
