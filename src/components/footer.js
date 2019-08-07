import React from 'react'
import ProductList from './footer-lists/product'
import ResourceList from './footer-lists/resource'
import ConnectList from './footer-lists/connect'
import InTouch from './footer-lists/in-touch'

import StorjLogo from '../../static/img/logos/new-white-logo.svg'


export default () => (
  <footer className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-1">
          <a href="/">
            <StorjLogo alt="Storj.io" height="30" width="100" />
          </a>
        </div>
        <ProductList />
        <ResourceList />
        <ConnectList />
        <InTouch />
      </div>
      <div className="row copyright">
        &copy; 2019 Storj Labs Inc. - 3423 Piedmont Road NE, Suite 475, Atlanta, Georgia, 30305, United States
      </div>
    </div>
  </footer>
)