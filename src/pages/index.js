import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { ChevronRight } from 'react-feather'

import Banner from '../components/banner'
import Navbar from '../components/navbar-dark'
import ProductionStage from '../components/production-stage'
import Reasons from '../components/reasons-why'
import Milestones from '../components/milestones'
import Footer from '../components/footer'

import '../styles/main.scss'

export default () => (
  <Fragment>
    <Banner />
    <section id='home-header' className='header home-bg pt-0'>
      <div className='home-bg' />
      <Navbar />
      <div className='container'>
        <div className='row prod-stage-container'>
          <ProductionStage />
          <div className='col-xs-12 col-sm-6 offset-sm-3 d-flex justify-content-center'>
            <h1 className='hero-header white-text'>
              Introducing Tardigrade.io Decentralized Cloud Storage
            </h1>
          </div>
          <div className='col-xs-12 col-sm-10 offset-sm-1 d-flex justify-content-center'>
            <p className='hero-text white-text'>
              We’re excited to announce Tardigrade decentralized cloud storage. Want to learn more?
              Head to the Tardigrade site. Want to set up a storage node? Join our waitlist.
            </p>
          </div>
          <div className='col-xs-12 col-sm-3 offset-sm-3 hero-action'>
            <a href='https://tardigrade.io/' className='btn btn-primary-alt btn-custom'>
              Visit Tardigrade
            </a>
          </div>
          <div className='col-xs-12 col-sm-3 hero-action'>
            <Link to='/sign-up-node-operator' className='home-cta-link'>
              Node Operato Waitlist <ChevronRight strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section id='how-it-works' className='container-fluid hiw-bg'>
      <div className='container'>
        <div className='col-12'>
          <h1 className='hero-header white-text'>How it Works</h1>
        </div>
        <div className='col-xs-12 col-sm-8 offset-sm-2 d-flex justify-content-center'>
          <p className='hero-text white-text'>
            With Tardigrade cloud storage, your files are encrypted and split into pieces
            client-side before being distributed across our network of high-performance storage
            nodes.
          </p>
        </div>
        <div className='row align-items-center mt-3'>
          <div className='col-sm-2 offset-sm-1 d-flex justify-content-center'>
            <img src={'img/hiw/encrypt.png'} className='hiw-img' alt='Encrypt' />
          </div>
          <div className='col-sm-2 d-flex justify-content-center'>
            <img src={'img/hiw/next-step-arrow.svg'} alt='Next Step' />
          </div>
          <div className='col-sm-2 d-flex justify-content-center'>
            <img src={'img/hiw/split.png'} className='hiw-img' alt='Split' />
          </div>
          <div className='col-sm-2 d-flex justify-content-center'>
            <img src={'img/hiw/next-step-arrow.svg'} alt='Next Step' />
          </div>
          <div className='col-sm-2 d-flex justify-content-center'>
            <img src={'img/hiw/tar-ico-how-distributed.png'} className='hiw-img' alt='Distribute' />
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-sm-2 offset-sm-1'>
            <p className='hiw-caption'>Encrypt</p>
          </div>
          <div className='col-sm-2 offset-sm-2'>
            <p className='hiw-caption'>Split</p>
          </div>
          <div className='col-sm-2 offset-sm-2'>
            <p className='hiw-caption'>Distribute</p>
          </div>
        </div>
      </div>
    </section>
    <section id='reasons-why' className='container-fluid reasons-bg'>
      <div className='container'>
        <div className='col-xs-12 col-sm-6 offset-sm-3'>
          <h1 className='reasons-header'>
            Helping Developers Weave the Fabric of Tomorrow’s Internet
          </h1>
        </div>
        <Reasons />
        <div className='col-12 reasons-action'>
          <a href='https://tardigrade.io/' className='cta-link'>
            Learn more on Tardigrade.io
            <ChevronRight strokeWidth={3} />
          </a>
        </div>
        <div className='row justify-content-center'>
          <div className='col-8 waitlist-cta-card'>
            <div className='row waitlist-wrapper'>
              <div className='col-12'>
                <h2 className='waitlist-header'>On the waitlist?</h2>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                <img src={'img/waitlist.png'} className='waitlist-img' alt='Waitlist' />
              </div>
              <div className='col-8'>
                <p className='waitlist-text'>
                  The first 10,000 developers on the Tardigrade.io waitlist will get 1TB free for
                  their first 30 days after production launch.
                </p>
                <a href='/sign-up' className='btn btn-primary btn-custom'>
                  Join the Developer Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='node-operator' className='container-fluid sno-bg'>
      <div className='container'>
        <div className='col-xs-12 col-sm-7 p-0'>
          <h1 className='hero-header white-text left-align'>Become a Storage Node Operator</h1>
          <p className='white-text mb-5'>
            At the beginning of February, 2019 Storj Labs began sending invites to our storage node
            waitlist for alpha testing. Nodes can begin earning STORJ tokens and building node
            reputation ahead of our beta (Pioneer release) and production (Voyager release) launches
            coming later this year.
          </p>
          <div className='row justify-content-between'>
            <div className='col-7'>
              <a href='/storage-node-estimator' className='btn btn-custom btn-primary'>
                Storage Node Payout Estimator
              </a>
            </div>
            <div className='col-5 right-align'>
              <Link to='/sign-up-farmer' className='home-cta-link right-align'>
                Join the Node Waitlist <ChevronRight strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xs-12 col-sm-4 offset-sm-8'>
          <img
            src={'img/hero-backgrounds/node.png'}
            alt='Storage Node Operator'
            className='sno-img'
          />
        </div>
      </div>
    </section>
    <section id='opensource' className='container-fluid opensource-bg'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xs-12 col-sm-5 d-flex justify-content-center'>
            <img src={'img/opensource-storj.png'} alt='Open Source' className='opensource-img' />
          </div>
          <div className='col-xs-12 col-sm-7'>
            <h1 className='hero-header left-align'>The Open Source Partner Program:</h1>
            <p className='mb-5'>
              Storj Labs is very passionate about supporting, building, and using open source
              software. With this program, every time one of our OS approved partners has a user
              that stores data on Tardigrade using our connectors, we will share a generous portion
              of every dollar earned with our open-source partners. Forever&hellip;
            </p>
            <a href='/partners' className='cta-link'>
              Become a Partner <ChevronRight strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id='governance' className='container-fluid governance-bg'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xs-12 col-sm-7'>
            <h1 className='hero-header left-align'>Innovations in Token Governance</h1>
            <p className='mb-5'>
              While we are first and foremost a decentralized storage network, we’ve also been
              recognized as leaders in the field of token governance. Our goal is to be transparent
              and clear with our community members around our token governance efforts.
            </p>
            <a
              href='https://storj.io/blog/2018/12/an-overview-of-tokens-uses-flows-and-policies-at-storj-labs/'
              className='cta-link'
            >
              Learn more about our token governance policies <ChevronRight strokeWidth={3} />
            </a>
          </div>
          <div className='col-xs-12 col-sm-5 d-flex justify-content-center'>
            <img src={'img/governance.png'} alt='Token Governance' className='governance-img' />
          </div>
        </div>
      </div>
    </section>
    <section id='timeline' className='container-fluid timeline-bg'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h1 className='hero-header white-text'>Roadmap Milestones to Production</h1>
          </div>
          <div className='col-7'>
            <p className='hero-text mb-5'>
              The Storj network is currently in the Pioneer 1 phase of our beta. Those who sign up
              for our waitlist can also participate in our Beta ahead of production later this year.
            </p>
          </div>
        </div>
        <Milestones />
        <div className='row'>
          <div className='col-12 timeline-action'>
            <a
              href='https://storjlabs.aha.io/published/01ee405b4bd8d14208c5256d70d73a38?page=1'
              className='cta-link white-text center-align'
            >
              Check Out The Production Roadmap <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </Fragment>
)
