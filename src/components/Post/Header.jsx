import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ post }) => {
  const {
    author: {
      image: {
        gatsbyImageData,
        file: { url },
      },
    },
    image: { gatsbyImageData: image },
    name,
    updatedAt,
  } = post

  return (
    <>
      <div className="flex space-x-3 sm:space-x-4">
        <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px]">
          {gatsbyImageData ? (
            <GatsbyImage
              alt={name}
              image={gatsbyImageData}
              className="rounded-full"
            />
          ) : (
            <img
              src={url}
              loading="lazy"
              className="rounded-full"
              height={44}
              width={44}
              alt={name}
            />
          )}
        </div>
        <div>
          <p className="text-gray-700 font-bold leading-loose tracking-wide">
            {name}
          </p>
          <div className="text-gray-500">
            <div className="flex space-x-2 items-baseline">
              <p className="font-bold text-sm">{updatedAt}更新</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <h1 className="text-gray-700 text-3xl sm:text-6xl font-bold tracking-wide !leading-normal">
          {name}
        </h1>
        <div className="mt-4 aspect-video">
          <GatsbyImage
            alt={name}
            image={image}
            loading="eager"
            className="h-full w-full"
            objectFit={"cover"}
          />
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  post: PropTypes.object,
}

export default Header
