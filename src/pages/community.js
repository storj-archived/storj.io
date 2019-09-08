import React, { Fragment } from 'react'
import { ChevronRight } from 'react-feather'

import Banner from '../components/banner'
import Navbar from '../components/navbar-dark'
import EventList from '../components/community/events-list'
import Footer from '../components/footer'

export default () => (
	<Fragment>
		<Banner />
		<header id='community-header' className='header community-bg'>
			<Navbar />
			<div className='container'>
				<div className='row comm-hero'>
					<div className='col-md-12 col-lg-7'>
						<h1 className='comm-header'>Help Build the Future of the Internet</h1>
						<div className='col-md-12 col-lg-10 comm-container'>
							<p className='comm-text'>
								Whether you’re already operating a storage node, or you’re interested in setting up one,
								our community of node operators is ready to help you find answers to questions,
								troubleshoot issues, or just chat. We also welcome open source contributors who want to
								help improve Storj and create a better internet for everyone.
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
		</header>
		<section id='community-support' className='container-fluid support-bg'>
			<div className='container'>
				<div className='row justify-content-around'>
					<div className='col-xs-12 col-md-5'>
						<div className='row d-flex justify-content-center'>
							<img
								src={'img/community-support/storj-ico-thought-bubble-question.svg'}
								alt='We are here to Support You'
								className='community-support-img col-12'
							/>
							<h1 className='support-header'>We’re here to Support You</h1>
							<p className='small center-align mb-5'>
								Sometimes we all need a little help. If you're looking for online tutorials, user
								guides, videos, technical documentation, or anything else to help you get your storage
								node up and running, the community is the place to be.
							</p>
							<a
								href='https://storjlabs.atlassian.net/servicedesk/customer/portals'
								className='cta-link center-align'
							>
								Get Support <ChevronRight strokeWidth={3} />
							</a>
						</div>
					</div>
					<div className='col-xs-12 col-md-5'>
						<div className='row d-flex justify-content-center'>
							<img
								src={'img/community-support/storj-ico-chat-bubbles.svg'}
								alt='Share, Discuss, Innovate'
								className='community-support-img col-12'
							/>
							<h1 className='support-header'>Share, Discuss, Innovate</h1>
							<p className='small center-align mb-5'>
								We’re open source and always will be. Transparency is a priority, and our community is
								the perfect place for people to share or collaborate on open source projects. We also
								showcase various projects and encourage networking.
							</p>
							<a href='https://forum.storj.io/' className='cta-link'>
								Join the Community <ChevronRight strokeWidth={3} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id='calculator' className='calculator-bg'>
			<div className='row justify-content-center'>
				<img
					src={'img/community-support/storj-ico-calc.svg'}
					alt='Savings Calculator'
					className='calculator-img col-12'
				/>
				<div className='col-12'>
					<h1 className='support-header d-block'>See how much you can earn with Storj.</h1>
				</div>
				<a href='/storage-node-estimator/' className='cta-link'>
					Check Out Our Node Calculator <ChevronRight strokeWidth={3} />
				</a>
			</div>
		</section>
		<section id='events' className='events-bg'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12'>
						<h1 className='support-header'>Upcoming Events</h1>
						<p className='med center-align'>
							Interested in learning more about Storj? Come chat with us at these upcoming events.
						</p>
					</div>
				</div>
				<EventList />
			</div>
		</section>
		<Footer />
	</Fragment>
)
