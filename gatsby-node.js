/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require('gatsby-source-filesystem')
exports.onCreateNode = (args) => {
  const { node, actions, getNode } = args
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}