import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <header>
      <Link to='/'>
        <img
          src='images/incubo/incubo_logo_sm.png'
          alt='incubo web solutions logo'
          className='img-fluid'
        />
      </Link>
      <nav className='navbar navbar-expand-lg'>
        <button className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/portfolio'>Portfolio</Link>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle'
                href='#' id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                Services
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/personal'>Personal Web Site</Link>
                <Link className='dropdown-item' to='/business'>Business Web Site</Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about_us'>About Us</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};