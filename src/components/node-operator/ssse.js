import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ChevronRight } from 'react-feather'

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					filter: { frontmatter: { class: { eq: "ssse" } } }
					sort: { fields: frontmatter___index }
				) {
					edges {
						node {
							frontmatter {
								img
								heading
								description
							}
						}
					}
				}
			}
		`}
		render={(data) => (
			<section id='ssse' className='container-fluid ssse-bg'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='text-center'>
							<h1 className='ssse-header'>Start Sharing. Start Earning.</h1>
						</div>
					</div>
					<div className='row justify-content-center mb-5'>
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<div className='col-xs-12 col-md-4 text-center'>
								<img src={node.frontmatter.img} alt={node.frontmatter.heading} className='ssse-img' />
								<h4 className='ssse-header-sm'>{node.frontmatter.heading}</h4>
								<p className='ssse-text'>{node.frontmatter.description}</p>
							</div>
						))}
					</div>
					<div className='row justify-content-center'>
						<a href='/sign-up-node-operator/' className='ssse-cta text-center'>
							Sign Up Now <ChevronRight strokeWidth={3} />
						</a>
					</div>
				</div>
			</section>
		)}
	/>
)
