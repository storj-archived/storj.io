module.exports = {
	siteMetadata: {
		title: 'Introducing Tardigrade.io Decentralized Cloud Storage'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'files',
				path: `${__dirname}/src/markdown`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blogposts',
				path: `${__dirname}/src/posts`
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: [ /logos/, /social-icons/ ]
				}
			}
		}
	]
}
