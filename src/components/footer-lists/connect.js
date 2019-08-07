import React from 'react'

import Facebook from '../../../static/img/social-icons/facebook.svg'
import Github from '../../../static/img/social-icons/github.svg'
import Medium from '../../../static/img/social-icons/medium.svg'
import Reddit from '../../../static/img/social-icons/reddit.svg'
import Twitter from '../../../static/img/social-icons/twitter.svg'

export default () => (
  <div className="col-xs-12 col-sm-2">
    <h5 className="footer-col-heading white-text">Connect</h5>
    <ul className="footer-list">
      <li className="footer-list-item">
        <a href="https://twitter.com/storjproject" className="footer-link">
          <Twitter className="social-icon" />
          Twitter
        </a>
      </li>
      <li className="footer-list-item">
        <a href="https://github.com/Storj/" className="footer-link">
          <Github className="social-icon" />
          GitHub
        </a>
      </li>
      <li className="footer-list-item">
        <a href="https://www.reddit.com/r/storj/" className="footer-link">
          <Reddit className="social-icon" />
          Reddit
        </a>
      </li>
      <li className="footer-list-item">
        <a href="https://www.facebook.com/storjproject" className="footer-link">
          <Facebook className="social-icon" />
          Facebook
        </a>
      </li>
      <li className="footer-list-item">
        <a href="https://medium.com/@storjproject" className="footer-link">
          <Medium className="social-icon" />
          Medium
        </a>
      </li>
    </ul>
  </div>
)
