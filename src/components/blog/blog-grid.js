import React from 'react'
import BlogCard from './blog-card'
import { ChevronDown } from 'react-feather'

const BlogGrid = () => {
  return (
    <div className='container' id='blog-grid'>
      <div className='row'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <div className='col-12 d-flex justify-content-center'>
          <a href='/sign-up-node-operator/'>
            <button className='btn btn-primary read-more'>
              See More Post
              <ChevronDown />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogGrid
