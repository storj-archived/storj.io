import React from 'react'
import { Link } from 'gatsby'

import WhiteLogo from '../../static/img/logos/new-white-logo.svg'

export default () => (
	<div className='container'>
		<nav className='navbar navbar-expand-lg navbar-dk'>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#mainNavbarToggler'
				aria-controls='mainNavbarToggler'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div id='mainNavbarToggler' className='collapse navbar-collapse'>
				<Link to='/' className='navbar-brand'>
					<WhiteLogo alt='Storj.io' height='52' width='130' />
				</Link>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<a href='https://documentation.storj.io/' className='nav-link link-style dark-nav'>
							Docs
						</a>
					</li>
					<li className='nav-item'>
						<Link to='/community' className='nav-link link-style dark-nav'>
							Community
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/partners' className='nav-link link-style dark-nav'>
							Partners
						</Link>
					</li>
					<li className='nav-item'>
						<a
							href='https://storjlabs.atlassian.net/servicedesk/customer/portals'
							className='nav-link link-style dark-nav'
						>
							Support
						</a>
					</li>
					<li className='nav-item'>
						<Link to='/blog' className='nav-link link-style dark-nav'>
							Blog
						</Link>
					</li>
					<Link to='/sign-up-node-operator/'>
						<button className='btn btn-header-dark nav-join'>Join the Waitlist</button>
					</Link>
				</ul>
			</div>
		</nav>
	</div>
)
