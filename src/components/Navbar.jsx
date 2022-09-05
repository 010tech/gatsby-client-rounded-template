import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "./Button"
import Link from "./Link"
import PropTypes from "prop-types"
import { useSetting } from "../data/useSetting"

const Navbar = () => {
  const { mainUrl, cta, logo } = useSetting()
  const {
    gatsbyImageData,
    file: { url },
  } = logo
  const { title, link } = cta

  return (
    <nav className="fixed w-full bg-white h-16 z-20 border-b border-gray-300">
      <div className="wrapper">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href={mainUrl}>
              {gatsbyImageData ? (
                <GatsbyImage image={gatsbyImageData} alt="logo" />
              ) : (
                <img src={url} alt="logo" className="h-6 sm:h-9" />
              )}
            </a>
          </div>

          {/* CTA按鈕 */}
          <div className="hidden sm:flex sm:items-center">
            <Link as="a" to={link}>
              <Button
                size="base"
                className={`convert ${cta?.gtmClickClasses || ""}`}
              >
                {title}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  mainUrl: PropTypes.string,
  cta: PropTypes.object,
  logo: PropTypes.object,
}

export default Navbar
