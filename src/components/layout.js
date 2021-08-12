/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Content from "./content"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
        <main>{children}</main>
        <footer >
          © {new Date().getFullYear()} <span style={{color:"blue"}}>kukljak</span>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
