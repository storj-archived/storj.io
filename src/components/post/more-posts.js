import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BlogCard from '../blog/blog-card'

export default ({ postTitle }) => (
	<StaticQuery
		query={graphql`
			query {
				allFile(
					filter: { sourceInstanceName: { eq: "blogposts" } }
					sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
				) {
					edges {
						node {
							childMarkdownRemark {
								excerpt
								fields {
									slug
								}
								frontmatter {
									title
									image
									authors
									date(formatString: "MMMM Do YYYY")
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			const { edges } = data.allFile
			console.log(edges)
			const postlist = edges
				.filter(({ node }) => {
					const { childMarkdownRemark: { frontmatter } } = node
					return frontmatter.title !== postTitle
				})
				.slice(0, 3)
			return (
				<section id='more-posts' className='container-fluid more-posts-bg'>
					<div className='container'>
						<h3 className='mp-header'>More Posts</h3>
						<div className='row'>
							{postlist.map((post) => {
								const {
									excerpt,
									fields: { slug },
									frontmatter: { title, image, date, authors }
								} = post.node.childMarkdownRemark
								return (
									<BlogCard
										slug={slug}
										excerpt={excerpt}
										title={title}
										image={image}
										date={date}
										authors={authors}
									/>
								)
							})}
						</div>
					</div>
				</section>
			)
		}}
	/>
)
