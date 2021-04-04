import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import EmployeesCard from "../components/EmployeesCard"
import EmployeeSection from "../components/EmployeeSection"
import Hero from "../components/Hero"
import { getImage } from "gatsby-plugin-image"

const Team = ({ data }) => {
  return (
    <Layout title="Team">
      <Hero
        image={getImage(data.headerImage.childImageSharp)}
        size="fullheight-with-navbar"
      >
        <EmployeesCard />
      </Hero>
      <div className="section-wrapper">
        {data.employees.team.map((employee) => {
          const {
            id,
            slug,
            headshot,
            _rawQuote,
            firstName,
            lastName,
            jobTitle,
            _rawBio,
            socials,
          } = employee
          return (
            <EmployeeSection
              key={id}
              slug={slug.current}
              image={headshot.asset}
              quote={_rawQuote}
              name={firstName + " " + lastName}
              jobTitle={jobTitle}
              bio={_rawBio}
              socials={socials}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    headerImage: file(relativePath: { eq: "about/about-header.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          maxWidth: 1920
          placeholder: BLURRED
          format: [AUTO, WEBP, AVIF]
        )
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
          asset
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
