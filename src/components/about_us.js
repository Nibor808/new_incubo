import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <section className='about'>
      <article className='row'>
        <div className='col'>
          <h4>incubo Web Solutions is a Peterborough based web development firm.</h4>
          <h4>Our goal</h4>
          <p>To create unique and engaging work with seamless functionality.</p>
          <h4>Our Philosophy</h4>
          <p>We Listen ~</p>
          <p>
            In order to better understand your business or personal goals, we listen and put into action your vision for a
            web presence.
          </p>
          <p>We Respond ~</p>
          <p>
            Your feedback is an important element in the development process. Through open and targeted communication,
            together we
            will craft a solution that fits your needs.
          </p>
          <p>We Learn ~</p>
          <p>
            We <strong>love</strong> web development! As such, we keep up to date on the latest resources and tools to
            continuously expand our knowledge enabling us to deliver the best solution possible to our clients.
          </p>
        </div>
      </article>

      <article className='row'>
        <div className='col'>
          <h4><Link to='/contact'>Get In Touch!</Link></h4>
        </div>
      </article>
    </section>
  );
};