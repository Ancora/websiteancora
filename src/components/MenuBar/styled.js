import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  display: flex;
  bottom: 0;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-around;
  padding: 0;
  position: fixed;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: inline;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #fffacd;
  display: block;
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;

  &:hover {
    color: #1fa1f2;
  }
`
