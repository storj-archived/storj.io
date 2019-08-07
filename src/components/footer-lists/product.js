import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery 
    query = {graphql `
      query {
        allMarkdownRemark(sort: {fields: frontmatter___weight},
          filter: {frontmatter: {class: {eq: "firstcolfooter"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                link
                weight
                class
              }
            }
          }
        }
      }
    `}

    render = { data => (
      <div className="col-xs-6 col-sm-2 offset-sm-1">
      <h5 className="footer-col-heading white-text">Product</h5>
        <ul className="footer-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li className="footer-list-item" key={node.id}>
              <a href={node.frontmatter.link} className="footer-link">{node.frontmatter.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
