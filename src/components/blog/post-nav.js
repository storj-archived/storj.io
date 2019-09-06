import React from 'react'
import { Search, ChevronDown, User, List } from 'react-feather'

const PostNav = () => {
  return (
    <div className='container mb-4' id='post-navbar'>
      <nav className='navbar navbar-expand-lg'>
        <h3 className='navbar-brand'>More Posts</h3>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a href='/blog' className='nav-link link-text'>
              <User size={15} className='icon-left' />
              Aurthor: All
              <ChevronDown size={16} className='icon-right' />
            </a>
          </li>
          <li className='nav-item'>
            <a href='/blog' className='nav-link link-text'>
              <List size={15} className='icon-left' />
              Category: All
              <ChevronDown size={16} className='icon-right' />
            </a>
          </li>
          <li className='nav-item'>
            <div className='input-group'>
              <input
                type='text'
                name='Search'
                id='search'
                placeholder='Search the Blog'
                className='form-control search-input'
                aria-label='Search the Blog'
                aria-describedby='search-blog'
              />
              <div className='input-group-text seach-icon'>
                <Search width={20} height={20} id='search-blog' />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PostNav
