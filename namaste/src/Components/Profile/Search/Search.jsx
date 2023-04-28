import React from 'react'
import './Search.css'
import { Link } from 'react-router-dom';

import {MdOutlineSearch} from 'react-icons/md';

const Search = () => {
  return (
    <div className='logo-search'>
      <Link to='../home' style={{ color: "#ff7b08" }}>
        <img src={process.env.PUBLIC_URL + "/logo1.png"} alt="logo" className='logo' />
      </Link>
      <div className="search">
        <input type="text" name="" id="" placeholder='#Explore'/>
        <div className="search-icon">
          <MdOutlineSearch/>
        </div>
      </div>
    </div>
  )
}

export default Search