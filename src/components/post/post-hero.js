import React from 'react'
import { Link } from 'gatsby'
import { ChevronLeft } from 'react-feather'

export default ({ frontmatter }) => {
	const { authors, date, image, title } = frontmatter
	return (
		<div className='container'>
			<div className='breadcrum-nav'>
				<Link to='/blog'>
					<ChevronLeft strokeWidth={3} className='mr-2' /> Storj Blog
				</Link>
			</div>
			<div className='row justify-content-center'>
				<div className='col-10 text-center'>
					<h1 className='post-title'>{title}</h1>
					<img src={image} alt={title} className='post-img' />
					<div className='byline'>
						<span className='author'>
							By <strong>{authors.join(', ')}</strong>
						</span>
						<span className='date'>{date}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
