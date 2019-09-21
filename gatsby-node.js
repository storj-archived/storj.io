const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { type } = node.internal
	if (type === 'MarkdownRemark') {
		const { createNodeField } = actions
		const slug = createFilePath({ node, getNode, basePath: 'posts' })
		createNodeField({
			node,
			name: 'slug',
			value: slug
		})
	}
}

// === Create Post Pages Progammatically === //
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return new Promise((resolve) => {
		graphql(`
			{
				allFile(
					filter: { sourceInstanceName: { eq: "blogposts" } }
					sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
				) {
					edges {
						node {
							childMarkdownRemark {
								fields {
									slug
								}
							}
						}
					}
				}
			}
		`).then((res) => {
			res.data.allFile.edges.forEach(({ node }) => {
				const { childMarkdownRemark: { fields: { slug } } } = node
				createPage({
					path: slug,
					component: path.resolve('./src/templates/post.js'),
					context: {
						slug: slug
					}
				})
			})
			resolve()
		})
	})
}
