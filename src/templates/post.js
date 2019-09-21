import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import Banner from '../components/banner'
import Navbar from '../components/navbar-light'
import Footer from '../components/footer'
import { PostHero, PostContent, SharePost, MorePosts } from '../components/post'

export default ({ data }) => {
	const { html, frontmatter } = data.markdownRemark
	return (
		<Fragment>
			<Banner />
			<header className='header blog-header'>
				<Navbar />
			</header>
			<article className='conatiner-fluid blog-post'>
				<PostHero frontmatter={frontmatter} />
				<PostContent html={html} />
				<SharePost />
			</article>
			<MorePosts postTitle={frontmatter.title} />
			<Footer />
		</Fragment>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				image
				authors
				date(formatString: "MMMM Do YYYY")
			}
		}
	}
`
