import React from "react"
import PropTypes from "prop-types"
import Company from "./Company"

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Company />
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
