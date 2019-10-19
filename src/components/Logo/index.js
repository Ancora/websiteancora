import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 79) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  /* return <S.LogoWrapper fluid={logoImage.childImageSharp.fluid} /> */
  return <Img fluid={logoImage.childImageSharp.fluid} />
}

export default Logo
