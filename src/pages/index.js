import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = ({ data }) => {
  return (
    <Layout isHome={true}>
      <SiteMetadata title="Home" description="Portfolio of John Doe" />

      <Hero />

      <div className="bg-gray-100 py-12 lg:py-16">
        <Cards items={data.portfolio.nodes} />
      </div>
      <Newsletter />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`