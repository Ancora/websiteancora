import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const BgImage = () => {
  const { bgImage } = useStaticQuery(
    graphql`
      query {
        bgImage: file(relativePath: { eq: "fundoArcos.png" }) {
          childImageSharp {
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <S.BgWrapper fluid={bgImage.childImageSharp.fluid} />
}

export default BgImage
