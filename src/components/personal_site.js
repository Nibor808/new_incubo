import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <section className='personal'>
      <article className='row'>
        <div className='col'>
          <p>
            Your website should be as unique as you are. It should reflect your outlook on life, your interests and
            hobbies or really whatever you want to put out to the world.
          </p>
          <p>
            Unique layout and design based on your preferences will distinguish your website from all others. In a world
            of cookie cutter websites, let yours reflect who you are and what you are doing.
          </p>
          <p>
            Whether you are looking to display your latest art project, provide a downloadable version of your latest
            song, or just tell the world a little about yourself, a personal website is an effective means to connect with
            people around the world and right next door.
          </p>
        </div>
      </article>

      <article className='row'>
        <div className='col'>
          <p>Let us help you craft your online persona.</p>
          <h4><Link to='/contact'>Get In Touch!</Link></h4>
        </div>
      </article>
    </section>
  );
};