import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';
import portfolioItem from './components/portfolio-item';
import portfolioList from './utils/portfolio-list';

export default () => {

  const portfolioRef = React.createRef();
  const contactRef = React.createRef();

  const toPortfolio = () => {
    portfolioRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const toContact = () => {
    console.log('====================');
    console.log('HERE', contactRef.current);
    console.log('====================');
    contactRef.current.scrollIntoView();
  };

  return [
    <header key='app1'>
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
            <a href='#' className='navbar-brand'>
              <img
                src='images/incubo_logo_sm.png'
                alt='incubo web solutions logo'
                className='img-fluid'
              />
            </a>

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
    </header>,

    <section key='app2' className='landing'>
      <article className='about'>
        <div className='col-10 offset-1 about-container'>
          <img src='/images/robin.jpg' alt='me' height='250px' width='250px' className='img-fluid' />
          <h4>Robin Erickson</h4>
          <p>full stack web developer</p>
          <a href={`mailto:${process.env.EMAIL}`}>Get in touch</a>
        </div>
      </article>

      <article className='portfolio'>
        <div className='col-10 offset-1 portfolio-container' ref={portfolioRef}>
          {portfolioList.map((item, index) => portfolioItem(item, index))}
        </div>
      </article>

      <article className='contact'>
        <div className='col-10 offset-1 contact-container' ref={contactRef}>
          <Contact />
        </div>
      </article>
    </section>,

    <Footer key='app3' />
  ];
};