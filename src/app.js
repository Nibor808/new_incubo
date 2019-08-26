import React   from 'react';
import Footer from './components/footer';
import Contact from './components/contact';
import portfolioItem from './components/portfolio-item';
import portfolioList from './utils/portfolio-list';

export default () => {

  window.onscroll = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById('logo-img').style.height = '60px';
      document.getElementById('logo-img').style.transition = '0.3s';
    } else document.getElementById('logo-img').style.height = '110px';
  };

  const portfolioRef = React.createRef();
  const contactRef = React.createRef();
  const topRef = React.createRef();

  const toPortfolio = (ev) => {
    ev.preventDefault();

    setTimeout(() => {
      portfolioRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 75);
  };

  const toContact = (ev) => {
    ev.preventDefault();

    setTimeout(() => {
      contactRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 75);
  };

  const toTop = (ev) => {
    ev.preventDefault();

    setTimeout(() => {
      topRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 75);
  };

  return [
    <header key='app1' ref={topRef}>
      <nav className='navbar navbar-expand-lg fixed-top'>
        <div className='container'>
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
                src='images/incubo_logo_copy.png'
                alt='incubo web solutions logo'
                className='img-fluid'
                onClick={(ev) => toTop(ev)}
              />
            </a>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  onClick={(ev) => toPortfolio(ev)}
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
          <div className='img-box'>
            <img src='/images/robin.jpg' alt='me' height='300px' width='300px' className='img-fluid' />
            <h2>Robin Erickson</h2>
            <p>full stack web developer</p>
            <a href='#' onClick={(ev) => toContact(ev)} >Get in touch</a>
          </div>
          <div className='about-text-box'>
            <p>I have been building things for work and for fun for "X" years focusing primarily on Node + React.</p>
            <p>Also have hobby projects in Elixir, Go and Java.</p>
            <p>Other stuff and things.</p>
          </div>
        </div>
      </article>

      <article className='portfolio' ref={portfolioRef}>
        <div className='col-10 offset-1 portfolio-container'>
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