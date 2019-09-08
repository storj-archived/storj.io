import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const getMilestonesClass = current => {
  return current ? ' current-milestone' : ''
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { class: { eq: "milestone" } } }
          sort: { fields: frontmatter___weight }
        ) {
          edges {
            node {
              id
              frontmatter {
                current
                text
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className='row milestones-wrapper'>
        <ul className='milestones'>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li className={`milestones-item${getMilestonesClass(node.frontmatter.current)}`}>
              <div className={`milestones-badge${getMilestonesClass(node.frontmatter.current)}`} />
              <div className={`milestones-panel${getMilestonesClass(node.frontmatter.current)}`}>
                <div className={'milestones-cell'}>
                  <div className='milestones-title'>{node.frontmatter.text}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
