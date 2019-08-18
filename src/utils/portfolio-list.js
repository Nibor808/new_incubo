import React from 'react';

export default [
  {
    title: '+3',
    badgeIcon: <a href='https://itunes.apple.com/ca/app/+3/id1095135903?mt=8' target='_blank'>
      <img src='/images/incubo/appstorebadge.svg' id='badge' className='img-fluid' alt='app store badge' />
    </a>,
    text: () => {
      return [
        <p key='main1'>
          My wife had requested that I build her an app to solve a specific need she had at work. A calculator that
          allowed you to display calculations as you went, add notes to any line and send it as an email.
        </p>,
        <p key='main2'>+3 was born.</p>,
        <p key='main3'>
          Just for fun I added in a units converter as well as an API driven currency converter. +3 was built using
          xcode and the swift programming language.
        </p>
      ];
    },
    image: () => {
      return (
        <div className='row'>
          <div className='col'>
            <img src='/images/incubo/6-1.png' className='img-fluid' alt='+3 calculator' />
          </div>

          <div className='col'>
            <img src='/images/incubo/6-2.png' className='img-fluid' alt='+3 currency converter' />
          </div>

          <div className='col'>
            <img src='/images/incubo/6-3.png' className='img-fluid' alt='+3 units converter' />
          </div>
        </div>
      );
    }
  },
  {
    title: 'JessTech',
    text: () => {
      return [
        <p key='main1'>
          A for fun project to learn React/Redux. JessTech is a database driven blog
          site built using Node JS and React/Redux.
        </p>,
        <p key='main2'>
          It features JSON Web Token authentication through Passport, a limited CMS for creating posts,
          MySQL with Knex query builder, and Webpack.
        </p>
      ];
    },
    image: () => <img src='/images/incubo/jesstech-2.png' className='img-fluid' alt='jesstech website' />
  },
  {
    title: 'Casemon',
    text: () => {
      return [
        <p key='main1'>
          I was engaged by a start up to develop the MVP for a web app that allows attorneys to receive notifications
          via email or text whenever there's an update to one of their cases.
          The production deployment was done by <a href='https://ryanfunduk.com/' target='_blank'>Ryan Funduk</a>.
        </p>,
        <p key='main2'>
          The MVP was built on Node JS and CoffeeScript for the backend and HTML5, CSS3 and jQuery for the frontend.
        </p>,
        <p key='main3'>
          Unfortunately due to a lack of interest in the product, Casemon is no longer active.
        </p>
      ];
    },
    image: () => <img src='/images/incubo/casemon-2.png' className='img-fluid' alt='casemon website' />
  },
  {
    title: 'Lakeshore Electric',
    text: () => <p>
      I was approached by an electrical contractor to increase their business potential through a web presence.
      They envisioned a straight brochure style site to illustrate their company and its services. I worked closely
      with them to bring their vision to life.
      Without the need for any backend Lakeshore Electric was built using HTML5, CSS3 and jQuery.
    </p>,
    image: () => <img src='/images/incubo/lakeshore-2.png' className='img-fluid' alt='lakeshore electric website' />
  }
];