import React, { Fragment } from 'react'
import { ChevronDown } from 'react-feather'

import Banner from '../components/banner'
import Navbar from '../components/navbar-dark'
import SSSE from '../components/node-operator/ssse'
import HowItWorks from '../components/node-operator/how-it-works'
import Estimate from '../components/node-operator/estimate'
import Footer from '../components/footer'

export default () => (
	<Fragment>
		<Banner />
		<header id='sno-header' className='header sno-hero-bg'>
			<Navbar />
			<section id='sno-header-hero' className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 text-center'>
						<h1 className='sno-hero-header'>Put Your Unused Disk Space to Work</h1>
						<p className='sno-hero-subheader'>Get paid to build the future of cloud storage.</p>
					</div>
					<div className='col-12 text-center sno-hero-cta'>
						<a href='#learnmore'>
							<p className='hero-cta-link'>Learn More</p>
							<ChevronDown className='white-text' strokeWidth={3} />
						</a>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-10 text-center'>
						<img
							src={'img/hero-backgrounds/storj-sno-cli-gui-alt2.png'}
							alt='Storage Node Operator'
							className='sno-hero-img'
						/>
					</div>
				</div>
			</section>
		</header>
		<SSSE />
		<HowItWorks />
		<Estimate />
		<Footer />
	</Fragment>
)
