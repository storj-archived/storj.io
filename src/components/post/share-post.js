import React from 'react'
import { Facebook, Twitter, Reddit } from '../../../static/img/social-icons'
import { Mail } from 'react-feather'

export default () => (
	<div id='share-this-post' className='container'>
		<div className='row justify-content-center'>
			<div className='col-10'>
				<h3 className='stp-header'>Share this Post</h3>
				<a href='/temp-post'>
					<button className='btn btn-stp twitter'>
						<Twitter className='stp-icon twitter' />Twitter
					</button>
				</a>
				<a href='/temp-post'>
					<button className='btn btn-stp facebook'>
						<Facebook className='stp-icon facebook' />Facebook
					</button>
				</a>
				<a href='/temp-post'>
					<button className='btn btn-stp reddit'>
						<Reddit className='stp-icon reddit' />Reddit
					</button>
				</a>
				<a href='/temp-post'>
					<button className='btn btn-stp mail'>
						<Mail className='stp-icon mail' />Email
					</button>
				</a>
			</div>
		</div>
	</div>
)
