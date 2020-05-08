import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Avatar from "../components/Avatar"

const EmployeesCard = () => {
  const data = useStaticQuery(query)

  return (
    <div className="card">
      <div className="card-content">
        <h1 className="title is-montserrat is-uppercase has-text-black">
          Meet the Team
        </h1>
        <div
          className="team"
          style={{
            display: "flex",
            marginLeft: "25px",
            marginTop: "2rem",
            justifyContent: "space-around",
          }}
        >
          {data.employees.edges.map(({ node: employee }) => (
            <Link
              to={"/team#" + employee.slug.current}
              key={employee.id}
              style={{ flex: 1 }}
            >
              <Avatar fluid={employee.headshot.asset.fluid} />
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
          name
          startDate
        }
      }
    }
  }
`

export default EmployeesCard
