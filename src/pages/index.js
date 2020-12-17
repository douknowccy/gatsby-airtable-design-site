import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero projects={projects} />
      <About />
      {/* <Projects projects={projects} title="latest projects" /> */}
      <GridProjects projects={projects} title="latest projects" />
      <Survey />
      <Slider />
    </Layout>
  )
}
export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        id
      }
    }
  }
`

export default HomePage