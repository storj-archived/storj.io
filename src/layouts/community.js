import React from 'react'

import Banner from '../components/banner'
import Navbar from '../components/navbar-dk'
import Footer from '../components/footer'

export default ({ children }) => (
  <div>
    <Banner />
    <section className='header community-bg'>
      <Navbar />
      <div className='container'>
        <div className='row comm-hero'>
          <div className='col-md-12 col-lg-7'>
            <h1 className='comm-header'>Help Build the Future of the Internet</h1>
            <div className='col-md-12 col-lg-10 comm-container'>
              <p className='comm-text'>
                Whether you’re already operating a storage node, or you’re interested in setting up
                one, our community of node operators is ready to help you find answers to questions,
                troubleshoot issues, or just chat. We also welcome open source contributors who want
                to help improve Storj and create a better internet for everyone.
              </p>
              <a href='https://forum.storj.io/'>
                <div className='btn btn-primary btn-forum'>Join the Community</div>
              </a>
            </div>
          </div>
          <div className='col-md-12 col-lg-8 offset-lg-4 order-1'>
            <div className='community-city' />
          </div>
        </div>
      </div>
    </section>

    {children}

    <Footer />
  </div>
)
