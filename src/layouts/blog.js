import React, { Fragment } from 'react'

import Banner from '../components/banner'
import Navbar from '../components/navbar-light'
import BlogHero from '../components/blog/blog-hero'
import Footer from '../components/footer'

export default () => (
  <Fragment>
    <Banner />
    <header className='header blog-header'>
      <Navbar />
      <div className='container'>
        <BlogHero />
      </div>
      <div className='container'>
        <h1 className='blog-title'>Storj Blog</h1>
      </div>
    </header>
    <Footer />
  </Fragment>
)
