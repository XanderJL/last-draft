import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import EmployeesCard from "../components/EmployeesCard"
import EmployeeSection from "../components/EmployeeSection"
import Hero from "../components/Hero"

const Team = ({ data }) => {
  console.log(data)
  return (
    <Layout title="Team">
      <Hero
        fluid={data.headerImage.childImageSharp.fluid}
        size="fullheight-with-navbar"
      >
        <EmployeesCard />
      </Hero>
      <div className="section-wrapper">
        {data.employees.team.map(employee => (
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
    employees: sanityTeamPage {
      heading
      subheading
      team {
        id
        firstName
        lastName
        _rawBio
        _rawQuote
        headshot {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        jobTitle
        slug {
          current
        }
        socials {
          facebook
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`

export default Team
