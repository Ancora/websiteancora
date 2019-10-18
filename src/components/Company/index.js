import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "../Logo"

const Company = () => {
  const {
    site: {
      siteMetadata: { author, city, description },
    },
  } = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            author
            city
            description
          }
        }
      }
    `
  )

  return (
    <div className="Company-wrapper">
      <Logo />
      <h1>{author}</h1>
      <h3>{city}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Company
