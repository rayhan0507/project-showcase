/* eslint-disable no-unused-vars */
import React from 'react';
import './navbar.css';
import { FaBars } from 'react-icons/fa';

const navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo text'>Ryxa</div>
        <ul className='nav-menu'>
          <li className='list'>About Me</li>
          <li className='list'>skills</li>
          <li className='list'>Project showcase</li>
          <li className='list'>Contact</li>
          <li className='list'>Social Media</li>
          <FaBars className='nav-icon'/>
        </ul>
    </div>
  )
}

export default navbar;