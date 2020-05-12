import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Avatar from "../components/Avatar"

const EmployeesCard = () => {
  const data = useStaticQuery(query)

  return (
    <div className="card-employees">
      <div className="card-content">
        <h1 className="title is-size-3-tablet is-montserrat is-uppercase has-text-black has-text-centered">
          Meet the Team
        </h1>
        <h2
          className="subtitle is-size-3-tablet has-text-black has-text-centered"
          style={{ marginTop: "1rem" }}
        >
          writers / producers / artists / curators
        </h2>
        <div className="team">
          {data.employees.edges.map(({ node: employee }) => (
            <Link
              className="avatar-link"
              to={"/team#" + employee.slug.current}
              key={employee.id}
            >
              <Avatar fluid={employee.headshot.asset.fluid} />
              <h2
                className="subtitle has-text-black has-text-centered"
                style={{ marginTop: "1rem" }}
              >
                {employee.firstName + " " + employee.lastName}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    employees: allSanityEmployee(sort: { fields: startDate }) {
      edges {
        node {
          _rawBio
          _rawQuote
          headshot {
            asset {
              fluid(maxWidth: 400) {
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
        }
      }
    }
  }
`

export default EmployeesCard
