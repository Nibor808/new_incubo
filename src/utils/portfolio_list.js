import React from 'react';

export const list2017 =  [
  {
    title: 'Ontario Divorce Resource',
    text: () => {
      return [
        <p key='main1'>
          <a href='https://www.ontariodivorceresource.ca/' target='_blank'>ODR</a> is
          a service that simplifies the complex process of getting divorced or separated in Ontario.
          (currently in development and behind an authorization wall)
        </p>,
        <p key='main2'>
          It allows a user to complete most of the forms required by stepping through a series of questions.
          The forms can then be, edited, downloaded as .docx, or faxed. Email is coming when the law allows.
        </p>,
        <p key='main3'>
          ODR features the ability to add and edit a digital signature, edit information
          that is common to all forms in a central location, as well as an admin section allowing and admin user
          to log in as another user, set a banner notification for all users, email all users, as well
          as checking error logs and the status of any faxes sent.
        </p>,
        <p key='main4'>
          ODR was built on Node as a SSR React/Redux monolith with mongoDB and mongoose ODM.
        </p>
      ];
    },
    image: (handleClick) => {
      return (
        <div className='row'>
          <div className='col'>
            <img
              src='/images/odr-full.png'
              className='img-fluid'
              alt='Ontario Divorce Resource Landing Page'
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/odr-forms.png'
              className='img-fluid'
              alt={`Ontario Divorce Resource User's Forms List`}
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/odr-new-forms.png'
              className='img-fluid'
              alt='Ontario Divorce Resource New Forms'
              onClick={(ev) => handleClick(ev)}
            />
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
          It allows a user to search all posts by keyword, comment on posts and reply to comments, ask a question,
          a limited CMS for creating posts
        </p>,
        <p key='main3'>
          It features JSON Web Token authentication through Passport, MySQL with Knex query builder, and Webpack.
        </p>
      ];
    },
    image: (handleClick) => <img src='/images/jesstech.png' className='img-fluid' alt='Jesstech Landing Page' onClick={(ev) => handleClick(ev)} />
  },
  {
    title: 'Lakeshore Electric',
    text: () => <p>
      I was approached by an electrical contractor to increase their business potential through a web presence.
      They envisioned a straight brochure style site to illustrate their company and its services. I worked closely
      with them to bring their vision to life.
      Without the need for any backend Lakeshore Electric was built using HTML5, CSS3 and jQuery.
    </p>,
    image: (handleClick) => <img src='/images/lakeshore.png' className='img-fluid' alt='Lakeshore Electric Landing Page' onClick={(ev) => handleClick(ev)} />
  },
  {
    title: 'Incubo Web Solutions',
    text: () => <p>
      The old Incubo site. The black and white design was complimented by colourising
      the link squares on rollover. Built with HTML5, Handlebars, CSS3, and jQuery.
    </p>,
    image: (handleClick) => <img src='/images/incubo_old.png' className='img-fluid' alt='Incubo Landing Page' onClick={(ev) => handleClick(ev)} />
  }
];

export const list2016 = [
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
    image: (handleClick) => <img src='/images/casemon.png' className='img-fluid' alt='Casemon Landing Page' onClick={(ev) => handleClick(ev)} />
  },
  {
    title: '+3',
    badgeIcon: <a href='https://itunes.apple.com/ca/app/+3/id1095135903?mt=8' target='_blank'>
      <img src='/images/appstorebadge.svg' id='badge' className='img-fluid' alt='app store badge' />
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
    image: (handleClick) => {
      return (
        <div className='row'>
          <div className='col'>
            <img
              src='/images/6-1.png'
              className='img-fluid'
              alt='+3 Calculator'
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/6-2.png'
              className='img-fluid'
              alt='+3 Currency Converter'
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/6-3.png'
              className='img-fluid'
              alt='+3 Units Converter'
              onClick={(ev) => handleClick(ev)}
            />
          </div>
        </div>
      );
    }
  }
];