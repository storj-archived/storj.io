import React from 'react'

import WhiteLogo from '../../static/img/logos/new-white-logo.svg'

export default () => (
  <div className="container">
  <nav className="navbar navbar-expand-lg navbar-dk">
    <button className="navbar-toggler" 
      type="button"
      data-toggle="collapse"
      data-target="#mainNavbarToggler"
      aria-controls="mainNavbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="mainNavbarToggler" className="collapse navbar-collapse">
      <a href="/" className="navbar-brand">
        <WhiteLogo alt="Storj.io" height="52" width="130" />
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="https://documentation.storj.io/" className="nav-link link-style main-nav">Docs</a>
        </li>
        <li className="nav-item">
          <a href="/community" className="nav-link link-style main-nav">Community</a>
        </li>
        <li className="nav-item">
          <a href="/partners" className="nav-link link-style main-nav">Partners</a>
        </li>
        <li className="nav-item">
          <a href="https://storjlabs.atlassian.net/servicedesk/customer/portals" className="nav-link link-style main-nav">Support</a>
        </li>
        <li className="nav-item">
          <a href="/blog" className="nav-link link-style main-nav">Blog</a>
        </li>
        <a href="/sign-up-node-operator/">
          <button className="btn btn-primary nav-join">Join the Waitlist</button>
        </a>
      </ul>
    </div>
  </nav>
</div>
)