import React from 'react'
import { Link } from 'gatsby'

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
				<Link to='/' className='navbar-brand'>
					<BlueLogo alt='Storj.io' height='52' width='130' />
				</Link>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<a href='https://documentation.storj.io/' className='nav-link link-style light-nav'>
							Docs
						</a>
					</li>
					<li className='nav-item'>
						<Link to='/community' className='nav-link link-style light-nav'>
							Community
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/partners' className='nav-link link-style light-nav'>
							Partners
						</Link>
					</li>
					<li className='nav-item'>
						<a
							href='https://storjlabs.atlassian.net/servicedesk/customer/portals'
							className='nav-link link-style light-nav'
						>
							Support
						</a>
					</li>
					<li className='nav-item'>
						<Link to='/blog' className='nav-link link-style light-nav'>
							Blog
						</Link>
					</li>
					<Link to='/sign-up-node-operator/'>
						<button className='btn btn-header-light nav-join'>Join the Waitlist</button>
					</Link>
				</ul>
			</div>
		</nav>
	</div>
)
