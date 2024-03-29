import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useMetadata } from "../data/useMetadata"
import Breadcrumb from "../components/Breadcrumb"
import Layout from "../components/Layout"
import Landing from "../components/Topic/Landing"
import PopularPost from "../components/Topic/PopularPost"
import LatestPost from "../components/Topic/LatestPost"

const TopicPage = ({ data }) => {
  const { contentfulTopic: topic } = data
  const {
    popularPosts: { nodes: popularPosts },
  } = data

  const { siteUrl } = useMetadata()
  const canonical = `${siteUrl}/${topic.slug}`
  const crumbs = [
    {
      name: "首頁",
      url: "/",
    },
    {
      name: `${topic.name}`,
      url: `/${topic.slug}`,
    },
  ]

  return (
    <Layout>
      <GatsbySeo
        title={topic.name}
        description={topic.excerpt.excerpt}
        canonical={canonical}
        openGraph={{
          url: `${canonical}`,
          title: `${topic.name}`,
          description: `${topic.excerpt.excerpt}`,
          images: [{ url: `https:${topic.image.file.url}` }],
        }}
      />

      <div className="wrapper">
        <div className="my-6 sm:my-8">
          <Breadcrumb crumbs={crumbs} />
        </div>
      </div>

      {/* Landing */}
      <Landing topic={topic} />

      {/* Body */}
      <div className="wrapper space-y-24 sm:space-y-36 mt-12 sm:mt-16 lg:mt-24 pb-24 sm:pb-36 border-b border-gray-500">
        {/* 熱門文章 */}
        <PopularPost popularPosts={popularPosts} />

        {/* 最新文章 */}
        <LatestPost topic={topic} />
      </div>
    </Layout>
  )
}

TopicPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TopicPage

export const pageQuery = graphql`
  query Topic($slug: String!) {
    contentfulTopic(slug: { eq: $slug }) {
      slug
      name
      excerpt {
        excerpt
      }
      image {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
        file {
          url
        }
      }
      latestPosts: post {
        id
        slug
        name
        updatedAt(formatString: "YYYY-MM-DD")
        excerpt {
          excerpt
        }

        image {
          gatsbyImageData(
            width: 768
            height: 512
            placeholder: BLURRED
            quality: 100
          )
        }
        topic {
          name
          slug
        }
      }
    }

    popularPosts: allContentfulPost(
      filter: { topic: { slug: { eq: $slug } }, isPopularPost: { eq: true } }
      sort: { updatedAt: DESC }
      limit: 3
    ) {
      nodes {
        id
        slug
        name
        updatedAt(formatString: "YYYY-MM-DD")
        excerpt {
          excerpt
        }
        image {
          gatsbyImageData(
            width: 768
            height: 512
            placeholder: BLURRED
            quality: 100
          )
        }
        topic {
          name
          slug
        }
      }
    }
  }
`
