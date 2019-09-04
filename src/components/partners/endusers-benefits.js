import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					filter: { frontmatter: { class: { eq: "enduserbenefits" } } }
					sort: { fields: frontmatter___index }
				) {
					edges {
						node {
							id
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
			<div className='container'>
				<h1 className='partners-header'>Why Your End-Users Will Love Us:</h1>
				<div className='row'>
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<div className='col-xs-12 col-md-4 text-center eub-wrapper'>
							<img src={node.frontmatter.img} alt={node.frontmatter.heading} className='eub-img' />
							<h4 className='eub-header'>{node.frontmatter.heading}</h4>
							<p className='eub-text'>{node.frontmatter.description}</p>
						</div>
					))}
				</div>
			</div>
		)}
	/>
)
