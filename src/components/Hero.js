import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import TextLoop from "react-text-loop";

const query = graphql`
{
  file(relativePath: {eq: "hero-image.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: {
        fluid},
      },
    } = useStaticQuery(query)
    
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <h2>
            <TextLoop springConfig={{ stiffness: 180, damping: 8 }} className="text-loop">
              <span>HELLO</span>
              <span>HOLA</span>
              <span>BONJOUR</span>
              <span>SALAAM</span>
              <span>MARHABA</span>
              <span>CIAO</span>
              <span>OLÀ</span>
              <span>NAMASTE</span>
              <span>SALAMA ALEIKUM</span>
              <span>AHN-YOUNG-HA-SE-YO</span>
            </TextLoop>{" "}
          </h2>
          <div className="underline"></div>
          <h1> I'm kamol </h1>
          <h3>A Web and mobile Developer </h3>
          <Link to ='/contact' className="btn">
            contact me
          </Link>
          <SocialLinks/>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img"/>
    </div>
  </header>
}

export default Hero
