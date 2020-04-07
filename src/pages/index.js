import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Landing from "../components/Home/Landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
