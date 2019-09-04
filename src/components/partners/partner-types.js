import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const openModel = (function() {
	var qs,
		js,
		q,
		s,
		d = document,
		gi = d.getElementById,
		ce = d.createElement,
		gt = d.getElementsByTagName,
		id = 'typef_orm_share',
		b = 'https://embed.typeform.com/'
	if (!gi.call(d, id)) {
		js = ce.call(d, 'script')
		js.id = id
		js.src = b + 'embed.js'
		q = gt.call(d, 'script')[0]
		q.parentNode.insertBefore(js, q)
	}
})()

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					filter: { frontmatter: { class: { eq: "partnertype" } } }
					sort: { fields: frontmatter___index }
				) {
					edges {
						node {
							id
							frontmatter {
								title
								heading
								description
								ctaText
								ctaLink
							}
							html
						}
					}
				}
			}
		`}
		render={(data) => (
			<div className='container'>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div id={node.frontmatter.title} className='row justify-content-center partnertype-wrapper'>
						<div className='col-12 partnertype-box'>
							<h3 className='partnertype-header'>{node.frontmatter.heading}</h3>
							<p className='partnertype-text'>{node.frontmatter.description}</p>
							<a
								href={node.frontmatter.ctaLink}
								className='btn btn-custom btn-partnertype'
								data-mode='popup'
								data-hide-footer='true'
								target='_blank'
							>
								{node.frontmatter.ctaText}
							</a>
							<script>{openModel}</script>
						</div>
					</div>
				))}
			</div>
		)}
	/>
)
