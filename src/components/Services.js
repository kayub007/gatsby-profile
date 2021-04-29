import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
    <Title title="what i do"/>
    <div className="section-center services-center">
      {services.map(service=> {
        const {id, icon, title1, text1, title2, text2, title3, text3} = service
        return <article key={id} className="service">
          {icon}
          <h4>{title1}</h4>
          <div className="underline"></div>
          <p>{text1}</p>
          <h4>{title2}</h4>
          <div className="underline"></div>
          <p>{text2}</p>
          <h4>{title3}</h4>
          <div className="underline"></div>
          <p>{text3}</p>
        </article>
      })}
    </div>
    </section>
  )
}

export default Services
