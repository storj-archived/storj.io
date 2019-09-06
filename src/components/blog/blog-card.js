import React from 'react'

import { ChevronRight } from 'react-feather'
import CardImg from '../../../static/img/blog/mascot-blog-hero.png'

const BlogCard = () => {
  return (
    <div className='col-sm-4 col-xs-12'>
      <div className='card blog-card mb-5'>
        <img src={CardImg} alt='Card Imgage' className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>Meet Tardigrade's Mascot</h5>
          <p className='card-text'>
            Blog text lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut totor...
          </p>
          <a href='/blog'>
            Read More
            <ChevronRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
