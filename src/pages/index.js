import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTACard from '../components/cta-card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CTACard />
  </Layout>
)

export default IndexPage
