import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import EmployeesCard from "../components/EmployeesCard"
import EmployeeSection from "../components/EmployeeSection"
import Hero from "../components/Hero"
import imageHotspot from "../hooks/imageHotspot"

const Team = ({ data }) => {
  return (
    <Layout title="Team">
      <Hero
        fluid={data.headerImage.childImageSharp.fluid}
        size="fullheight-with-navbar"
      >
        <EmployeesCard />
      </Hero>
      <div className="section-wrapper">
        {data.employees.edges.map(({ node: employee }) => (
          <EmployeeSection
            key={employee.id}
            slug={employee.slug.current}
            image={employee.headshot.asset.fluid}
            quote={employee._rawQuote}
            name={employee.firstName + " " + employee.lastName}
            jobTitle={employee.jobTitle}
            bio={employee._rawBio}
            socials={employee.socials}
          />
        ))}
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    headerImage: file(relativePath: { eq: "about/about-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    employees: allSanityEmployee(sort: { fields: startDate }) {
      edges {
        node {
          _rawBio
          _rawQuote
          headshot {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          id
          slug {
            current
          }
          jobTitle
          firstName
          lastName
          startDate
          socials {
            facebook
            instagram
            linkedin
            twitter
          }
        }
      }
    }
  }
`

export default Team
