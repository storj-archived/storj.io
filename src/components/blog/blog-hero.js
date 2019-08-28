import React from 'react'

import HeroImg from '../../../static/img/blog/storj-blog-beacon-alpha.jpg'

export default () => (
  <div className='row blog-hero'>
    <div className='col-xs-12 col-sm-6'>
      <img src={HeroImg} className='hero-img' alt='Announcing Beacon Alpha' />
    </div>
    <div className='col-xs-12 col-sm-5 offset-sm-1 px-0'>
      <h1 className='hero-title'>Latest Blog Title</h1>
      <div className='byline'>
        <span className='aurthor'>
          By <strong>Simon Guindon</strong>
        </span>
        <span className='date'>July 16th 2019</span>
      </div>
      <p className='blog-excerpt'>
        Blog text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tortor convallis,
        posuere nisl a, malesuada quam. Sed tempor odio ullamcorper est ultrices, ac lacinia nulla
        vestibulum. Praesen...
      </p>
      <a href='/sign-up-node-operator/'>
        <button className='btn btn-primary read-more'>Read More</button>
      </a>
    </div>
  </div>
)
