import React from 'react'
import { graphql , Link } from 'gatsby'

const Content =  ({ data }) => {
  console.log('data', data)
  const { edges } = data.allMdx

  return (
    <>  
      <h1>Content</h1>
      <ul >
        {edges.map(item => (
          <li>
          <Link to={item.node.fields.slug} key={item.node.id}>
            {item.node.frontmatter.title}
          </Link>
          </li>
        ))}
      </ul>
    </>  
  )
}

export const pageQuery = graphql`
  query ContentIndex {
    allMdx(
      filter: {
        fileAbsolutePath: {glob: "**/content/**"}
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields{
            slug
          }
        }
      }
    }
  }
`

export default Content