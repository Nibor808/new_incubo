import React from 'react';

export const list2017 =  [
  {
    title: 'Online Divorce Forms',
    text: () => {
      return [
        <p key='main1'>
          <a href='https://www.onlinedivorceforms.ca/' target='_blank' rel='noopener'>ODF</a> is
          a service that simplifies the complex process of getting divorced or separated in Ontario.
          <small>(currently in development and behind an authorization wall - this code is not public)</small>
        </p>,
        <p key='main2'>
          It allows a user to complete most of the forms required by stepping through a series of questions
          and then determining if there are any additional forms that must be completed.
          The forms can then be edited, downloaded as .docx, or faxed.
        </p>,
        <p key='main3'>
          ODF features auto-save and resume functionality, the ability to add and edit a digital signature,
          editing information that is common to all forms in a central location,
          a graphical interface for setting a separate
          access schedule for each child or one schedule for all children,
          as well as an admin section allowing an admin user
          to log in as another user, set a banner notification for all users, email all users, as well
          as checking error logs and the status of any faxes sent.
        </p>,
        <p key='main4'>
          ODR is built on Node JS as a SSR React/Redux monolith with mongoDB and mongoose ODM.
        </p>
      ];
    },
    image: (handleClick) => {
      return (
        <div className='row'>
          <div className='col'>
            <img
              src='/images/odf-full-thumb.jpg'
              className='img-fluid clickable'
              alt='Online Divorce Forms Landing Page'
              data-text='/images/odf-full.jpg'
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/odf-forms-thumb.jpg'
              className='img-fluid clickable'
              alt={`Online Divorce Forms User's Forms List`}
              data-text='/images/odf-forms.jpg'
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/odf-access-scheduler-thumb.jpg'
              className='img-fluid clickable'
              alt='Online Divorce Forms Access Scheduler'
              data-text='/images/odf-access-scheduler.jpg'
              onClick={(ev) => handleClick(ev)}
            />
          </div>
        </div>
      );
    }
  },
  {
    title: 'JessTech',
    github: <a href='https://github.com/Nibor808/jess-blog' target='_blank' rel='noopener'>git</a>,
    text: () => {
      return [
        <p key='main1'>
          A for fun project to learn React/Redux. JessTech is a database driven blog
          site built using Node JS and React/Redux.
        </p>,
        <p key='main2'>
          It allows a user to search all posts by keyword, comment on posts and reply to comments,
          or post a question to the admin. It also has a limited CMS on the admin page for creating posts.
        </p>,
        <p key='main3'>
          It features JSON Web Token authentication through Passport, MySQL with Knex query builder, and Webpack.
        </p>
      ];
    },
    image: () => <img src='/images/jesstech.jpg' className='img-fluid' alt='Jesstech Landing Page' />
  },
  {
    title: 'Lakeshore Electric',
    text: () => <p>
      I was approached by an electrical contractor to increase their business potential through a web presence.
      They envisioned a straight brochure style site to illustrate their company and its services. I worked closely
      with them to bring their vision to life.
      Without the need for any backend Lakeshore Electric was built using HTML5, CSS3 and jQuery.
      (no longer active)
    </p>,
    image: () => <img src='/images/lakeshore.jpg' className='img-fluid' alt='Lakeshore Electric Landing Page' />
  },
  {
    title: 'Incubo Web Solutions',
    github: <a href='https://github.com/Nibor808/incubo' target='_blank' rel='noopener'>git</a>,
    text: () => <p>
      The old Incubo site. The black and white design was complimented by colourising
      the link squares on rollover. Built on Node JS with HTML5, Handlebars, CSS3, and jQuery.
    </p>,
    image: () => <img src='/images/incubo_old.jpg' className='img-fluid' alt='Old Incubo Landing Page' />
  }
];

export const list2016 = [
  {
    title: 'Casemon',
    github: <a href='https://github.com/Nibor808/casemon-mvp' target='_blank' rel='noopener'>git</a>,
    text: () => {
      return [
        <p key='main1'>
          I was engaged by a start up to develop the MVP for a web app that allows attorneys to receive notifications
          via email or text whenever there's an update to one of their cases.
          The production deployment was done by <a href='https://ryanfunduk.com/' target='_blank' rel='noopener'>Ryan Funduk</a>.
        </p>,
        <p key='main2'>
          The MVP was built on Node JS and CoffeeScript for the backend and HTML5, CSS3 and jQuery for the frontend.
        </p>,
        <p key='main3'>
          Unfortunately due to a lack of interest in the product, Casemon is no longer active.
        </p>
      ];
    },
    image: () => <img src='/images/casemon.jpg' className='img-fluid' alt='Casemon Landing Page' />
  },
  {
    title: '+3',
    github: <a href='https://github.com/Nibor808/plus3' target='_blank' rel='noopener'>git</a>,
    badgeIcon: <a href='https://itunes.apple.com/ca/app/+3/id1095135903?mt=8' target='_blank' rel='noopener'>
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
              src='/images/plus3-calc.jpg'
              className='img-fluid clickable'
              alt='+3 Calculator'
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/plus3-curr.jpg'
              className='img-fluid clickable'
              alt='+3 Currency Converter'
              onClick={(ev) => handleClick(ev)}
            />
          </div>

          <div className='col'>
            <img
              src='/images/plus3-units.jpg'
              className='img-fluid clickable'
              alt='+3 Units Converter'
              onClick={(ev) => handleClick(ev)}
            />
          </div>
        </div>
      );
    }
  }
];