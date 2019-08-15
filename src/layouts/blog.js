import React, { Fragment } from 'react'

import Banner from '../components/banner'
import Navbar from '../components/navbar-light'
import BlogHero from '../components/blog/blog-hero'
import PostNav from '../components/blog/post-nav'
import Footer from '../components/footer'

export default () => (
  <Fragment>
    <Banner />
    <header className='header blog-header'>
      <Navbar />
      <div className='container'>
        <BlogHero />
      </div>
    </header>
    <section id='blog-list' className='container-fluid'>
      <PostNav />
    </section>
    <Footer />
  </Fragment>
)
