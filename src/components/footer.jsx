import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useSetting } from "../data/use-setting"
import PoweredLink from "./PoweredLink"

export default function Footer() {
  const { mainUrl, copyRight, footerImage } = useSetting()
  return (
    <footer className="bg-gray-100">
      <div className="wrapper py-16 flex justify-center items-center">
        {/* Logo */}
        <div className="space-y-4">
          <div className="h-32 w-full text-center">
            <a href={mainUrl}>
              {footerImage.gatsbyImageData ? (
                <GatsbyImage
                  alt="footer logo"
                  image={footerImage.gatsbyImageData}
                />
              ) : (
                <img
                  src={footerImage.file.url}
                  alt="footer logo"
                  className="h-32 mx-auto"
                />
              )}
            </a>
          </div>
          <div className="space-y-2 text-center">
            <p className="text-gray-700">
              Copyright © {new Date().getFullYear()} {copyRight} All rights
              reserved.
            </p>
            <p className="text-gray-500">
              Powered by{" "}
              <PoweredLink
                isDisplay={
                  process.env.DISPLAY_WELLY_URL &&
                  process.env.DISPLAY_WELLY_URL.toLowerCase() === "true"
                }
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
