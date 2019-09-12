import React, { Fragment } from 'react'

import Banner from '../components/banner'
import BlogHero from '../components/blog/blog-hero'
import BlogGrid from '../components/blog/blog-grid'
import Footer from '../components/footer'

export default () => (
	<Fragment>
		<Banner />
		<BlogHero />
		<BlogGrid />
		<Footer />
	</Fragment>
)
