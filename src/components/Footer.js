import React from "react"
import SocialLinks from "../constants/socialLinks"
import { GiWaterBottle } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"> </SocialLinks>
        <h4>    
        Built with <BsFillHeartFill  style={{color: "red"}}/> and <GiWaterBottle  style={{color: "blue"}}/>
        </h4>
        <h4 className="copyright"> 
          copyright &copy; {new Date().getFullYear()}
          <span> dudkamal </span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
