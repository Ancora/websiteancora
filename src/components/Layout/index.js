import React from "react"
import PropTypes from "prop-types"
import Company from "../Company"

import styled from "styled-components"
import GlobalStyles from "../../styles/global"

const LayoutWrapper = styled.section`
  display: flex;
`
const LayoutMain = styled.main`
  min-height: 100vh;
  padding: 0 3.75rem 0 10rem;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Company />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
