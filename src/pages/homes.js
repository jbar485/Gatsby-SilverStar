import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home/Home"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default HomePage