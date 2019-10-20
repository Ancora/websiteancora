import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "../Logo"
import * as S from "./styled"

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
    <S.CompanyWrapper>
      <S.CompanyLink>
        <Logo />
      </S.CompanyLink>
      <S.CompanyLink>
        <S.CompanyAuthor>
          {author}
          <S.CompanyCity>{city}</S.CompanyCity>
        </S.CompanyAuthor>
      </S.CompanyLink>

      <S.CompanyDescription>{description}</S.CompanyDescription>
    </S.CompanyWrapper>
  )
}

export default Company
