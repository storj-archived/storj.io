import React, { Fragment } from 'react'

import Banner from '../components/banner'
import Navbar from '../components/navbar-dark'
import Footer from '../components/footer'
import { NodeHero, SSSE, HowItWorks, Estimate } from '../components/node-operator'

export default () => (
	<Fragment>
		<Banner />
		<header id='sno-header' className='header sno-hero-bg'>
			<Navbar />
			<NodeHero />
		</header>
		<SSSE />
		<HowItWorks />
		<Estimate />
		<Footer />
	</Fragment>
)
