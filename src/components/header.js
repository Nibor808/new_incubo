import React from 'react';

export default (props) => {
  const topRef = React.createRef();

  const toTop = (ev) => {
    ev.preventDefault();

    setTimeout(() => {
      topRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 75);
  };

  return (
    <header key='app1' ref={topRef}>
      <nav className='navbar navbar-expand-lg fixed-top'>
        <div className='col-10 offset-1'>
          <button className='navbar-toggler'
            style={{ border: '1px solid black' }}
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <a href='#' className='navbar-brand'>
              <img
                id='logo-img'
                src='images/incubo_logo.png'
                alt='incubo web solutions logo'
                className='img-fluid'
                onClick={toTop}
              />
            </a>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  onClick={props.toPortfolio}
                >Portfolio</a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  onClick={props.toContact}
                >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};