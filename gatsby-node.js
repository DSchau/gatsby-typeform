const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const surveyPost = path.resolve(`./src/templates/survey.js`)

  const result = await graphql(`{
    surveys:allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }`)
    .then(res => res.data)

  result.surveys.edges.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      component: surveyPost,
      path: slug,
      context: {
        slug
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const { url } = node.frontmatter
    const id = url.split('/').pop()
    createNodeField({
      name: `slug`,
      node,
      value: `/surveys/${id}`,
    })
  }
}
