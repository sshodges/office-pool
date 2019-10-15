import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          Office Pool
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/myaccount'>My Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
