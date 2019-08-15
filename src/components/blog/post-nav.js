import React from 'react'
import { Search, ChevronDown, User, List } from 'react-feather'

const PostNav = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <h3 className='navbar-brand'>More Posts</h3>
        <div className='nav-left'>
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
        </div>
      </nav>
    </div>
  )
}

export default PostNav
