import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useMetadata } from "../data/useMetadata"
import { useSetting } from "../data/useSetting"

export default function Seo() {
  const { siteUrl, language } = useMetadata()
  const { title, titleTemplate, description, siteName, ogImage } = useSetting()

  return (
    <>
      <GatsbySeo
        title={title}
        titleTemplate={titleTemplate}
        description={description}
        language={language}
        canonical={siteUrl}
        openGraph={{
          url: siteUrl,
          title: title,
          description: description,
          images: [
            {
              url: `https:${ogImage.file.url}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: siteName,
          type: "website",
          locale: "zh_tw",
        }}
      />
    </>
  )
}
