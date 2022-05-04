import Link from "../link"
import React from "react"
import PropTypes from "prop-types"

const Tag = ({ name }) => {
  return <p className="leading-loose text-gray-500"># {name}</p>
}

const Excerpt = ({ post }) => {
  const {
    topic: { slug, name },
    excerpt: { excerpt },
    tags,
  } = post

  const tagItems = tags.map(({ id, name }) => {
    return <Tag key={id} name={name} />
  })

  return (
    <div className="mt-6 border border-primary-500 p-6 rounded-lg">
      <div className="flex flex-col items-center sm:flex-row mb-6 sm:mb-3 space-y-3 sm:space-y-0 sm:space-x-3">
        <Link
          to={`/${slug}`}
          className="font-bold text-lg text-primary-500 hover:text-primary-700"
        >
          {name}
        </Link>
        {tags && <div className="space-x-3 flex">{tagItems}</div>}
      </div>
      <p className="text-lg !leading-loose">{excerpt}</p>
    </div>
  )
}

Tag.propTypes = {
  name: PropTypes.string,
}

Excerpt.propTypes = {
  post: PropTypes.object,
}

export default Excerpt
