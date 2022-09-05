import React from "react"
import PropTypes from "prop-types"
import { Button } from "./Button"
import Link from "./Link"

//用於文章頁下方的CTA
export function Cta({ data }) {
  const { title, link, excerpt } = data
  return (
    <div className="mx-auto w-full py-16">
      <div className="space-y-8 border-y-2 border-primary-500 py-8 sm:py-12">
        {excerpt && (
          <p className="heading text-center text-2xl sm:text-3xl !leading-loose tracking-wide font-bold">
            {excerpt}
          </p>
        )}
        <div className="flex justify-center">
          <Link as="a" to={link}>
            <Button className={`convert ${data?.gtmClickClasses || ""}`}>
              {title}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

Cta.propTypes = {
  data: PropTypes.string,
}
