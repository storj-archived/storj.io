import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'

import Banner from '../components/banner'
import BlogHero from '../components/blog/blog-hero'
import BlogGrid from '../components/blog/blog-grid'
import Footer from '../components/footer'

class Blog extends Component {
	constructor({ data }) {
		super({ data })
		this.state = {
			posts: data.posts.edges,
			heroPost: data.posts.edges[0].node.childMarkdownRemark,
			postQuantity: 9
		}
	}
	loadMorePosts = () => {
		this.setState({ postQuantity: this.state.postQuantity + 3 })
	}
	render() {
		const { loadMorePosts, state: { heroPost, posts, postQuantity } } = this
		return (
			<Fragment>
				<Banner />
				<BlogHero heroPost={heroPost} />
				<BlogGrid postlist={posts} postQuantity={postQuantity} loadMorePosts={loadMorePosts} />
				<Footer />
			</Fragment>
		)
	}
}

export default Blog

export const query = graphql`
	query {
		posts: allFile(
			filter: { sourceInstanceName: { eq: "blogposts" } }
			sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
		) {
			edges {
				node {
					childMarkdownRemark {
						frontmatter {
							title
							date(formatString: "MMMM Do YYYY")
							image
							categories
							authors
						}
						excerpt
					}
				}
			}
		}
	}
`
