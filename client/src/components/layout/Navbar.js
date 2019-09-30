import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper'>
        <a href='#' class='brand-logo'>
          Office Pool
        </a>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
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
