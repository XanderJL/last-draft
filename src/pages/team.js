import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import EmployeesCard from "../components/EmployeesCard"
import EmployeeSection from "../components/EmployeeSection"

const Team = ({ data }) => {
  return (
    <Layout title="Team">
      <BackgroundImage
        fluid={data.headerImage.childImageSharp.fluid}
        className="hero-about is-fullheight-with-navbar"
      >
        <div className="hero-body">
          <div className="container">
            <EmployeesCard />
          </div>
        </div>
      </BackgroundImage>
      <div className="section-wrapper">
        {data.employees.edges.map(({ node: employee }) => (
          <EmployeeSection
            key={employee.id}
            slug={employee.slug.current}
            image={employee.headshot.asset.fluid}
            quote={employee._rawQuote}
            name={employee.name}
            jobTitle={employee.jobTitle}
            bio={employee._rawBio}
            socials={employee.socials}
          />
        ))}
      </div>
      <Contact />
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
          name
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
