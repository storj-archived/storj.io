import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { class: { eq: "reasonswhy" } } }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              id
              frontmatter {
                img
                heading
                desc
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className='row justify-content-center'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className='col-xs-6 col-lg-3' key={node.id}>
            <img
              src={node.frontmatter.img}
              alt={node.frontmatter.heading}
              className='reasons-icon'
            />
            <h3 className='reasons-title'>{node.frontmatter.heading}</h3>
            <p className='reasons-description'>{node.frontmatter.desc}</p>
          </div>
        ))}
      </div>
    )}
  />
)
