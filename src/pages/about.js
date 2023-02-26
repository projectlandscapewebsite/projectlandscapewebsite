import React from "react"
import Banner from "../components/banners/banner"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"

export default function index() {
  return (
    <Layout>
      <SEO title="about" description="" />
      <Banner
        title="welcome to a different kind of customer experience in landscaping"
        subheader="about project landscape"
      />
      <PortfolioBanner />
    </Layout>
  )
}
