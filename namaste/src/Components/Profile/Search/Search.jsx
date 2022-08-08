import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='logo-search'>
      <img src={process.env.PUBLIC_URL+"./logo1.png"} alt="logo" className='logo'/>
      <div className="search">
        <input type="text" name="" id="" placeholder='#Explore'/>
        <div className="search-icon">
          
        </div>
      </div>
    </div>
  )
}

export default Search