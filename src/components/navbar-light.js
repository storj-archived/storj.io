import React from 'react'

import BlueLogo from '../../static/img/logos/new-blue-logo.svg'

export default () => (
  <div className='container'>
    <nav className='navbar navbar-expand-lg navbar-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#lightNavbarToggler'
        aria-controls='lightNavbarToggler'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div id='lightNavbarToggler' className='collapse navbar-collapse'>
        <a href='/' className='navbar-brand'>
          <BlueLogo alt='Storj.io' height='52' width='130' />
        </a>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a href='https://documentation.storj.io/' className='nav-link link-style light-nav'>
              Docs
            </a>
          </li>
          <li className='nav-item'>
            <a href='/community' className='nav-link link-style light-nav'>
              Community
            </a>
          </li>
          <li className='nav-item'>
            <a href='/partners' className='nav-link link-style light-nav'>
              Partners
            </a>
          </li>
          <li className='nav-item'>
            <a href='/blog' className='nav-link link-style light-nav active'>
              Blog
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://storjlabs.atlassian.net/servicedesk/customer/portals'
              className='nav-link link-style light-nav'
            >
              Support
            </a>
          </li>
          <a href='/sign-up-node-operator/'>
            <button className='btn btn-header-light nav-join'>Join the Waitlist</button>
          </a>
        </ul>
      </div>
    </nav>
  </div>
)
