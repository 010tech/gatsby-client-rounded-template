import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const Landing = ({ topic }) => {
  const {
    name,
    image: { gatsbyImageData },
    excerpt: { excerpt },
  } = topic

  return (
    <div className="relative">
      <div className="pt-24 sm:pt-[18rem]">
        {/* 首圖 */}
        <div className="absolute top-0 -z-10 h-full w-full">
          <GatsbyImage
            className="h-full w-full"
            alt={name}
            image={gatsbyImageData}
            loading="eager"
          />
        </div>
        <div className="wrapper">
          <div className="bg-white text-gray-900 rounded-t-lg pt-6 px-6 sm:pt-12 sm:px-12 space-y-6">
            <h1 className="font-bold text-3xl sm:text-5xl leading-normal tracking-wide">
              {name}
            </h1>
            <p className="text-lg leading-loose">{excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Landing.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default Landing
