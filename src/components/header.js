import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const { toPortfolio, toContact } = props;

  return (
    <header>
      <nav className='navbar navbar-expand-lg fixed-top'>
        <div className='container mx-auto'>
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
            <Link to='/' className='navbar-brand'>
              <img
                src='images/incubo_logo_sm.png'
                alt='incubo web solutions logo'
                className='img-fluid'
              />
            </Link>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  onClick={toPortfolio}
                >Portfolio</a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  onClick={toContact}
                >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};