import styled from "styled-components"
import { Link } from "gatsby"

export const CompanyWrapper = styled.section`
  color: #fffacd;
  display: flex;
  flex-direction: column;
`

export const CompanyLink = styled(Link)`
  color: #fffacd;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const CompanyAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`

export const CompanyCity = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const CompanyDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
