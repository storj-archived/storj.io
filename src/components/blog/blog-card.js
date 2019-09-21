import React from 'react'
import { ChevronRight } from 'react-feather'

const BlogCard = (props) => {
	const { slug, excerpt, title, image, date, authors } = props
	return (
		<div className='col-sm-4 col-xs-12'>
			<div className='card blog-card mb-5'>
				<img src={image} alt={title} className='card-img-top' />
				<div className='card-body'>
					<div className='byline'>
						<span className='author'>
							By <strong>{authors.join(', ')}</strong>
						</span>
						<span className='date'>{date}</span>
					</div>
					<h4 className='card-title'>{title}</h4>
					<p className='card-text'>{excerpt}</p>
					<a href={slug} className='card-cta'>
						Read More
						<ChevronRight size={18} strokeWidth={3} className='chevron ml-1' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
