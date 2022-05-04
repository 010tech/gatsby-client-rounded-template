import React from "react"
import PropTypes from "prop-types"
import Link from "../link"
import { GatsbyImage } from "gatsby-plugin-image"

const PostCategory = ({ topics }) => {
  return topics.map(topic => {
    return (
      <Link
        to={`/${topic.slug}`}
        key={topic.id}
        className="relative w-full flex justify-center items-center hover:bg-black/[.5] transition ease-in-out duration-300 rounded-lg"
      >
        <p className="absolute text-white z-10 font-bold text-xl sm:text-2xl">
          {topic.name}
        </p>
        <div className="relative">
          <GatsbyImage
            alt={topic.name}
            image={topic.image.gatsbyImageData}
            className="h-24 sm:h-32 w-full rounded-lg -z-10"
          />
          <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-25" />
        </div>
      </Link>
    )
  })
}

PostCategory.propTypes = {
  topics: PropTypes.array,
}

export default PostCategory
