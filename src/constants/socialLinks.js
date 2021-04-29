import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/kayub007",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/ayuba-kamol-25a81618/",
  },
  {
    id: 3,
    icon: <FaTelegramPlane className="social-icon"></FaTelegramPlane>,
    url: "https://t.me/dudkamal",
  },
  {
    id: 4,
    icon: <FaStackOverflow className="social-icon"></FaStackOverflow>,
    url: "https://stackoverflow.com/users/9503135/ayuba-amoo-kamol",
  },
  {
    id: 5,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://www.twitter.com/dudcally",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
