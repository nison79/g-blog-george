import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Hero from '../components/Hero/Hero'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Hero />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
