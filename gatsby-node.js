exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allPosts: allContentfulPost {
        nodes {
          slug
          topic {
            slug
          }
        }
      }
      allTopics: allContentfulTopic {
        nodes {
          slug
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create Post pages
  const allPosts = result.data.allPosts.nodes
  allPosts.forEach(post => {
    createPage({
      path: `/${post.topic.slug}/${post.slug}`,
      component: require.resolve("./src/templates/postTemplate.jsx"),
      context: {
        slug: post.slug,
      },
    })
  })
  // Create Topic pages
  const allTopics = result.data.allTopics.nodes
  allTopics.forEach(topic => {
    createPage({
      path: `/${topic.slug}`,
      component: require.resolve("./src/templates/topicTemplate.jsx"),
      context: {
        slug: topic.slug,
      },
    })
  })
}
