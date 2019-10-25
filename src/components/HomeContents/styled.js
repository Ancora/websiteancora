import styled from "styled-components"
import { Link } from "gatsby"

export const HomeContentWrapper = styled.section`
  color: #fffacd;
  align-items: center;
  text-align: center;
  display: column;
  padding: 1rem;
  margin-top: 1.5rem;
  width: 100%;
`

export const HomeContentTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`

export const HomeContentDescription = styled.div`
  margin: 1.5rem;
  padding: 0 15rem 0 15rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
`

export const HomeContentLinks = styled(Link)`
  display: flex;
  text-decoration: none;
  background: #000;
  width: 100%;
  height: auto;
`

export const HomeContentLinksList = styled.ul`
  align-items: center;
  display: row;
  justify-content: space-around;
  list-style: none;
`

export const HomeContentLinksItem = styled.li``
