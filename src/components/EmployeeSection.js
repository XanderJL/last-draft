import * as React from "react"
import Headshot from "../components/Headshot"
import BioCard from "../components/BioCard"

const EmployeeSection = ({
  slug,
  image,
  quote,
  name,
  jobTitle,
  socials,
  bio,
}) => {
  return (
    <section id={slug} className="section-employee">
      <div className="container">
        <Headshot
          image={image}
          quote={quote}
          name={name}
          jobTitle={jobTitle}
          socials={socials}
        />
        <BioCard bio={bio} socials={socials} />
      </div>
    </section>
  )
}

export default EmployeeSection
