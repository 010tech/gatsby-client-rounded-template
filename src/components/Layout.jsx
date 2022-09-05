import React from "react"
import PropTypes from "prop-types"
import Seo from "./Seo"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Link from "./Link"
import { Button } from "./Button"
import { useSetting } from "../data/useSetting"

const Layout = ({ children }) => {
  const { cta } = useSetting()
  const { title, link } = cta

  return (
    <>
      <Seo />
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="mt-16 grow">{children}</main>
        <div className="fixed bottom-6 right-6 sm:hidden">
          <Link as="a" to={link}>
            <Button
              size="base"
              className={`convert ${cta?.gtmClickClasses || ""}`}
            >
              {title}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
