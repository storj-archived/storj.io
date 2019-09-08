import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ChevronRight } from 'react-feather'

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					filter: { frontmatter: { class: { eq: "snohiw" } } }
					sort: { fields: frontmatter___index }
				) {
					edges {
						node {
							frontmatter {
								index
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
			<section id='learnmore' className='conatiner-fluid snohiw-bg'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='text-center'>
							<h1 className='snohiw-header'>How it Works</h1>
						</div>
					</div>
					<div className='row progress-container mb-5'>
						<ul className='progress-list d-none d-md-flex'>
							{data.allMarkdownRemark.edges.map(({ node }) => <li />)}
						</ul>
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<div className='col-xs-12 col-md-4'>
								<img
									src={node.frontmatter.img}
									alt={`Step ${node.frontmatter.index + 1}`}
									className='d-md-none snohiw-numbers'
								/>
								<h3 className='snohiw-subheader'>{node.frontmatter.heading}</h3>
								<p className='snohiw-content'>{node.frontmatter.description}</p>
							</div>
						))}
					</div>
					<div className='row justify-content-center'>
						<a href='/sign-up-node-operator/' className='snohiw-cta text-center'>
							Become a Node Operator <ChevronRight strokeWidth={3} />
						</a>
					</div>
				</div>
			</section>
		)}
	/>
)
