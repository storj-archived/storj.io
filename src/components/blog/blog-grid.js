import React from 'react'
import { ChevronDown } from 'react-feather'

import PostNav from '../blog/post-nav'
import BlogCard from './blog-card'

export default (props) => {
	const { postlist, postQuantity, loadMorePosts } = props
	return (
		<section id='blog-list' className='container-fluid'>
			<PostNav />
			<div id='blog-grid' className='container'>
				<div className='row'>
					{postlist.map((post, index) => {
						const { excerpt, frontmatter: { title, image, date, authors } } = post.node.childMarkdownRemark
						return index !== 0 && index <= postQuantity ? (
							<BlogCard excerpt={excerpt} title={title} image={image} date={date} authors={authors} />
						) : null
					})}
					<div className='col-12 d-flex justify-content-center'>
						<button className='btn btn-primary btn-see-more' onClick={() => loadMorePosts()}>
							See More Posts <ChevronDown strokeWidth={3} className='ml-2' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
