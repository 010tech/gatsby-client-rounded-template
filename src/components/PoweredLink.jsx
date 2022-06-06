import React from "react"
import PropTypes from "prop-types"
import Link from "./link"

const PoweredLink = ({ isDisplay }) =>
  isDisplay ? (
    <Link as="a" to="https://welly.tw">
      Welly SEO
    </Link>
  ) : (
    "Welly SEO"
  )

PoweredLink.propTypes = {
  isDisplay: PropTypes.bool,
}

export default PoweredLink
