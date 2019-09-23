import React from 'react'
import { ChevronRight } from 'react-feather'

export default () => (
	<section id='estimate' className='container-fluid estimate-bg'>
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-9 text-center'>
					<h1 className='estimate-header'>Estimage Your Earnings</h1>
					<p className='estimate-text'>
						Demand for our network from Tardigrade is constantly increasing, with a waitlist of over 12,000
						developers, dev-ops, and senior leaders at large SaaS companies. We want to grow even larger,
						but we need your help. Remember, as demand grows, so will your potential profits.
					</p>
				</div>
			</div>
			<div className='row justify-content-center mb-5'>
				<div className='col-sm-12 col-md-6'>
					<h4 className='pte-header'>Per Terabyte Earnings</h4>
					<div className='earning-table-cell'>
						Egress Bandwidth<span className='earning-table-desc'>$20/TB</span>
					</div>
					<div className='earning-table-cell'>
						Repair Bandwidth<span className='earning-table-desc'>$10/TB</span>
					</div>
					<div className='earning-table-cell'>
						Disk Space<span className='earning-table-desc'>$1.50/TB</span>
					</div>
				</div>
			</div>
			<div className='row justify-content-center'>
				<a href='/sign-up-node-operator/' className='estimate-cta text-center'>
					Become a Node Operator <ChevronRight strokeWidth={3} />
				</a>
			</div>
		</div>
	</section>
)
