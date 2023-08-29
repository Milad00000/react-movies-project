import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='container'>   
            <div className='logo'>
                <Link to='/'>Movie</Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <NavLink to='/'>WatchList</NavLink>
                </li>
                <li>
                    <NavLink to='/watched'>Watched</NavLink>
                </li>
                <li>
                    <NavLink className='btn' to='/add'>Add</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header