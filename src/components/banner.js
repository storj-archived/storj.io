import React from 'react'
import { ChevronRight } from 'react-feather'
import Tardigrade from '../../static/img/logos/tardigrade-logo-only.svg'

export default () => (
  <div className="container-fluid banner">
    <div className="container">
      <div className="row">
        <div className="col-xs-7 col-sm-6 banner-left">
          <p className="mb-0">
            Storj Cloud Storage is Now Tardigrade.io
          </p>
        </div>
        <div className="col-xs-5 col-sm-6 banner-right">
          <p className="mb-0">
            <a href="https://tardigrade.io">
              Visit Tradigrade.io
              <Tardigrade className="tardigrade" />
              <ChevronRight color="white" size={14} strokeWidth={3} />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)
