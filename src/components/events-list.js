import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { class: { eq: "event" } } }
          sort: { fields: frontmatter___title }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                location
                when
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul class='list-group events-list-group'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li className='list-group-item event-list-item' key={node.id}>
            <div className='row'>
              <div className='col-4 event-name'>{node.frontmatter.name}</div>
              <div className='col-3 event-location'>{node.frontmatter.location}</div>
              <div className='col-3 event-date'>{node.frontmatter.when}</div>
              <div className='col-2 link-item'>
                <a href={node.frontmatter.link} className='event-link'>
                  Learn More
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  />
)
