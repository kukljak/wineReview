import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"
import HeaderBottleIcon from "./icons/wineBottleHeaderIcon"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/" >
          wineReview
        </Link>
        <HeaderBottleIcon />
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
