import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../layouts/blog'

import '../styles/main.scss'

export default ({ data }) => (
  <BlogLayout>
    {/* <div className="container">
      <h3>
        {data.site.siteMetadata.title}
      </h3>
    </div> */}
  </BlogLayout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
