import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const markFirstTabActive = (currentTab) => {
	return currentTab === 0 ? ' active' : ''
}

const markFirstPaneActive = (currentPane) => {
	return currentPane === 0 ? 'tab-pane fade show active' : 'tab-pane fade'
}

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					filter: { frontmatter: { class: { eq: "bennietab" } } }
					sort: { fields: frontmatter___index }
				) {
					edges {
						node {
							id
							frontmatter {
								index
								title
								img
								heading
								description
							}
							html
						}
					}
				}
			}
		`}
		render={(data) => (
			<div className='container'>
				<h1 className='partners-header'>Benefits for our Open Source Partners:</h1>
				<div className='row justify-content-center'>
					<div className='col-12'>
						<ul id='bennie-tabs' className='nav nav-pills justify-content-between'>
							{data.allMarkdownRemark.edges.map(({ node }) => (
								<li className='nav-item'>
									<a
										href={`#${node.frontmatter.title}`}
										id={`${node.frontmatter.title}-tab`}
										className={`nav-link bennies-nav-tab${markFirstTabActive(
											node.frontmatter.index
										)}`}
										data-toggle='pill'
										role='tab'
									>
										{node.frontmatter.heading}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className='col-8 d-flex justify-content-center align-items-center bennies-pane tab-content'>
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<div id={node.frontmatter.title} className={markFirstPaneActive(node.frontmatter.index)}>
								<div className='row'>
									<div className='col-4 d-flex align-items-center justify-content-center'>
										<img
											src={node.frontmatter.img}
											alt={node.frontmatter.heading}
											className='bennies-tab-icon d-inline'
										/>
									</div>
									<div className='col-8'>
										<h2 className='bennies-tab-header'>{node.frontmatter.heading}</h2>
										<p dangerouslySetInnerHTML={{ __html: node.html }} />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)}
	/>
)
