import * as React from "react"
import Headshot from "../components/Headshot"
import BioCard from "../components/BioCard"

const EmployeeSection = props => {
  return (
    <section id={props.slug} className="section-employee">
      <div className="container">
        <Headshot
          image={props.image}
          quote={props.quote}
          name={props.name}
          jobTitle={props.jobTitle}
          socials={props.socials}
        />
        <BioCard bio={props.bio} socials={props.socials} />
      </div>
    </section>
  )
}

export default EmployeeSection
