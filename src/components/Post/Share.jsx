import React from "react"
import PropTypes from "prop-types"
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "react-share"

const Share = ({ name, canonical }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <p className="text-gray-900 text-lg leading-loose">分享至：</p>
      <FacebookShareButton url={canonical} quote={name}>
        <FacebookIcon size={32} borderRadius={100} />
      </FacebookShareButton>
      <TelegramShareButton url={canonical} quote={name} ml="2">
        <TelegramIcon size={32} borderRadius={100} />
      </TelegramShareButton>
      <LineShareButton url={canonical} quote={name} ml="2">
        <LineIcon size={32} borderRadius={100} />
      </LineShareButton>
    </div>
  )
}

Share.propTypes = {
  name: PropTypes.string,
  canonical: PropTypes.string,
}

export default Share
