import React from 'react'
import { ChevronDown } from 'react-feather'

export default () => (
	<section id='sno-header-hero' className='container'>
		<div className='row justify-content-center'>
			<div className='col-12 text-center'>
				<h1 className='sno-hero-header'>Put Your Unused Disk Space to Work</h1>
				<p className='sno-hero-subheader'>Get paid to build the future of cloud storage.</p>
			</div>
			<div className='col-12 text-center sno-hero-cta'>
				<a href='#ssse'>
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
)
