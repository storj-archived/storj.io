import React, { Fragment } from 'react'

import Banner from '../components/banner'
import BlogNav from '../components/blog/blog-navbar'
import Footer from '../components/footer'


export default ({ children }) => (
  <Fragment>
    {/* <Banner /> */}
    <header className="header blog-header">
      <BlogNav />
      <div className="container">
        <h1 className="blog-title">Storj Blog</h1>
      </div>
    </header>

    <Footer />
  </Fragment>
)
