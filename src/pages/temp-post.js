import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import Banner from '../components/banner'
import Navbar from '../components/navbar-light'
import { PostHero, PostContent, SharePost, MorePost } from '../components/post'
import Footer from '../components/footer'

export default ({ data }) => {
	const { childMarkdownRemark: { frontmatter, html } } = data.allFile.edges[0].node
	const { edges } = data.allFile
	return (
		<Fragment>
			<Banner />
			<header className='header blog-header'>
				<Navbar />
			</header>
			<article className='container-fluid blog-post'>
				<PostHero frontmatter={frontmatter} />
				<PostContent html={html} />
				<SharePost />
			</article>
			<MorePost postlist={edges.slice(1)} />
			<Footer />
		</Fragment>
	)
}

export const query = graphql`
	query {
		allFile(
			filter: { sourceInstanceName: { eq: "blogposts" } }
			sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
			limit: 4
		) {
			edges {
				node {
					childMarkdownRemark {
						frontmatter {
							title
							image
							authors
							date(formatString: "MMMM Do YYYY")
						}
						html
						excerpt
					}
				}
			}
		}
	}
`
