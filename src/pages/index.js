import React from 'react'
import MainLayout from '../layouts/main'

import '../styles/main.scss'

export default ({data}) => (
  <MainLayout>
    <div className="container">
      <h3>
        {data.site.siteMetadata.title}
      </h3>
    </div>
  </MainLayout>
)

export const query = graphql `query {
  site {
    siteMetadata {
      title
    }
  }
}`
