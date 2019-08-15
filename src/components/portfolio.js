import React from 'react';

export default () => {
  return (
    <section className='portfolio'>
      <article className='col-10'>
        <div className='row'>
          <div className='col'>
            <h4>+3</h4>
            <a href='https://itunes.apple.com/ca/app/+3/id1095135903?mt=8' target='_blank' className='badge'>
              <img src='/images/incubo/appstorebadge.svg' className='img-fluid' alt='app store badge' />
            </a>
            <p>
              My wife had requested that I build her an app to solve a specific need she had at work. A calculator that
              allowed you to display calculations as you went, add notes to any line and send it as an email. +3 was born.
              Just for fun I added in a units converter as well as an API driven currency converter. +3 was built using
              xcode and the swift programming language.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <img src='/images/incubo/6-1.png' className='img-fluid' alt='+3 calculator' />
          </div>
          <div className='col'>
            <img src='/images/incubo/6-2.png' className='img-fluid' alt='+3 currency
            converter' />
          </div>
          <div className='col'>
            <img src='/images/incubo/6-3.png' className='img-fluid' alt='+3 units
            converter' />
          </div>
        </div>
      </article>

      <article className='col-10'>
        <div className='row'>
          <div className='col'>
            <h4>Casemon</h4>
            <p>
              I was engaged by a start up to develop the MVP for a web app that allows attorneys to receive notifications
              via email or text whenever there's an update to one of their cases.
              The production deployment was done by <a href='https://ryanfunduk.com/' target='_blank'>Ryan Funduk</a>.
            </p>
            <p>
              The MVP was built on Node JS and CoffeeScript for the backend and HTML5, CSS3 and jQuery for the frontend.
            </p>
            <p>
              Unfortunately due to a lack of interest in the product, Casemon is no longer active.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <img src='/images/incubo/casemon-2.png' className='img-fluid' alt='casemon website' />
          </div>
        </div>
      </article>

      <article className='col-10'>
        <div className='row'>
          <div className='col'>
            <h4>Lakeshore Electric</h4>
            <p>
              I was approached by an electrical contractor to increase their business potential through a web presence.
              They envisioned a straight brochure style site to illustrate their company and its services. I worked closely
              with them to bring their vision to life.
              Without the need for any backend Lakeshore Electric was built using HTML5, CSS3 and jQuery.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <img src='/images/incubo/lakeshore-2.png' className='img-fluid' alt='lakeshore electric website' />
          </div>
        </div>
      </article>

      <article className='col-10'>
        <div className='row'>
          <div className='col'>
            <h4>JessTech</h4>
            <p>
              A for fun project to learn React/Redux. JessTech is a database driven blog
              site built using Node JS and React/Redux.
            </p>
            <p>
              It features JSON Web Token authentication through Passport, a limited CMS for creating posts,
              MySQL with Knex query builder, and Webpack.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <img src='/images/incubo/jesstech-2.png' className='img-fluid' alt='jesstech website' />
          </div>
        </div>
      </article>
    </section>
  );
};