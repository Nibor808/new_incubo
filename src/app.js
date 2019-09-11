import React, { useState, useEffect }   from 'react';
import Header from './components/header';
import Modal from 'react-modal';
import About from './components/about.js';
import Contact from './components/contact';
import PortfolioItem from './components/portfolio_item';
import { list2016, list2017 } from './utils/portfolio_list';
import modalStyle from './utils/modal_style';

export default () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ event, setEvent ] = useState();
  const [ bottomPadding, setBottomPadding ] = useState('');

  const height = window.innerHeight;

  if (height) {
    useEffect(() => {
      if (height <= 781) setBottomPadding('0');
      else setBottomPadding(`${height * 0.18}px`);
    });
  }

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
          <div className='container header-container'>
            <div className='row'>
              <div className='col-12'>
                <h1>Portfolio</h1>
                <a href='https://github.com/Nibor808' target='_blank'>github</a>
              </div>
            </div>
          </div>
          <div className='container portfolio-container'>
            <div className='row'>
              <div className='col-1 sidebar2017'>
                <p>2017</p>
              </div>
              <div className='col-11 portfolio-items'>
                {list2017.map((item, index) => <PortfolioItem
                  key={`portfolio-item-${index}`}
                  item={item}
                  index={index}
                  handleClick={handleClick}
                />)}
              </div>
            </div>

            <div className='row'>
              <div className='col-1 sidebar2016'>
                <p>2016</p>
              </div>
              <div className='col-11 portfolio-items items2016'>
                {list2016.map((item, index) => <PortfolioItem
                  key={`portfolio-item-${index}`}
                  item={item}
                  index={index}
                  handleClick={handleClick}
                />)}
              </div>
            </div>
          </div>
        </article>

        <article className='contact' style={{ paddingBottom: bottomPadding }} ref={contactRef}>
          <div className='container header-container'>
            <div className='row'>
              <div className='col-12'>
                <h1>Contact</h1>
                <p>Want to work together?</p>
                <p>Get in touch!</p>
              </div>
            </div>
          </div>
          <div className='container contact-container'>
            <Contact />
          </div>
        </article>

      </section>
    </div>
  );
};