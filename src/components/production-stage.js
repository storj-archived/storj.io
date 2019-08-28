import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { class: { eq: "milestone" }, current: { eq: true } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                text
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className='col-12 d-flex justify-content-center'>
        <p className='prod-stage'>
          Currently in {data.allMarkdownRemark.edges[0].node.frontmatter.text}
        </p>
      </div>
    )}
  />
)
