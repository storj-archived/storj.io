import React from 'react'

import Navbar from '../navbar-light'

export default (props) => {
	const { excerpt, frontmatter: { title, date, image, authors } } = props.heroPost
	return (
		<header className='header blog-header'>
			<Navbar />
			<div className='container'>
				<div className='row blog-hero'>
					<div className='col-xs-12 col-sm-6'>
						<img src={image} alt={title} className='hero-img' />
					</div>
					<div className='col-xs-12 col-sm-5 offset-sm-1 px-0'>
						<h1 className='hero-title'>{title}</h1>
						<div className='byline'>
							<span className='author'>
								By <strong>{authors.join(', ')}</strong>
							</span>
							<span className='date'>{date}</span>
						</div>
						<p className='blog-excerpt'>{excerpt}</p>
						<a href='/blog'>
							<button className='btn btn-primary read-more'>Read More</button>
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}
