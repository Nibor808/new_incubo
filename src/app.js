import React, { useState }   from 'react';
import Header from './components/header';
import Modal from 'react-modal';
import About from './components/about.js';
import Contact from './components/contact';
import PortfolioItem from './components/portfolio_item';
import portfolioList from './utils/portfolio_list';
import modalStyle from './utils/modal_style';

export default () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ event, setEvent ] = useState();

  window.onscroll = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById('logo-img').style.height = '60px';
      document.getElementById('logo-img').style.transition = '0.4s';
    } else document.getElementById('logo-img').style.height = '110px';
  };

  const portfolioRef = React.createRef();
  const contactRef = React.createRef();

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

  const handleClick = (ev) => {
    setIsOpen(true);
    ev.persist();
    setEvent(ev);
  };

  const showModal = () => {
    if (isOpen) {
      return (
        <Modal
          appElement={document.getElementById('root')}
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={modalStyle}
          contentLabel='Nothing'
        >
          <h4>{event.target.alt}</h4>

          <img
            src={event.target.src}
            alt={event.target.alt}
            width='100%'
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}
          />
        </Modal>
      );
    }
  };

  return (
    <div>
      {showModal()}

      <Header
        toContact={toContact}
        toPortfolio={toPortfolio}
      />

      <section className='landing'>

        <article className='about'>
          <div className='container about-container'>
            <About
              toContact={toContact}
            />
          </div>
        </article>

        <article className='portfolio' ref={portfolioRef}>
          <div className='container portfolio-container'>
            <h1>Portfolio</h1>
            {portfolioList.map((item, index) => <PortfolioItem
              key={`portfolio-item-${index}`}
              item={item}
              index={index}
              handleClick={handleClick}
            />)}
          </div>
        </article>

        <article className='contact' ref={contactRef}>
          <div className='container contact-container'>
            <h1>Contact</h1>
            <Contact />
          </div>
        </article>

      </section>
    </div>
  );
};