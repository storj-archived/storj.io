import React from 'react'

import Banner from '../components/banner'
import MainNav from '../components/main-navbar'
import Footer from '../components/footer'


export default ({ children }) => (
  <div>
    <Banner />
    <section className="header home-bg">
      <div className="home-bg"></div>
      <MainNav />
      <div className="container">
        <div className="row prod-stage-container">
          <div className="col-12 d-flex justify-content-center">
            <p className="prod-stage">Currently in Alpha: Beacon - Identity &amp; Access Management</p>
          </div>
          <div className="col-xs-12 col-sm-6 offset-sm-3">
            <div className="container">
              <h1 className="hero-header">
                Introducing Tardigrade.io Decentralized Cloud Storage
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    {children}

    <Footer />
  </div>
)
