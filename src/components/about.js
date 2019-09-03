import React, { useState } from 'react';
import moment from 'moment';

export default () => {
  const [displayTime, setDisplayTime ] = useState('');
  const START_DATE = moment([2015, 0, 1]);

  const displayTimeSinceStart = () => {
    const timeSinceStartDate = moment().diff(START_DATE);

    const years = moment.duration(timeSinceStartDate).years();
    const months = moment.duration(timeSinceStartDate).months() >= 10 ? moment.duration(timeSinceStartDate).months() :
      `0${moment.duration(timeSinceStartDate).months()}`;
    const days = moment.duration(timeSinceStartDate).days() >= 10 ? moment.duration(timeSinceStartDate).days() :
      `0${moment.duration(timeSinceStartDate).days()}`;
    const hours = moment.duration(timeSinceStartDate).hours() >= 10 ? moment.duration(timeSinceStartDate).hours() :
      `0${moment.duration(timeSinceStartDate).hours()}`;
    const minutes = moment.duration(timeSinceStartDate).minutes() >= 10 ? moment.duration(timeSinceStartDate).minutes() :
      `0${moment.duration(timeSinceStartDate).minutes()}`;
    const seconds = moment.duration(timeSinceStartDate).seconds() >= 10 ? moment.duration(timeSinceStartDate).seconds() :
      `0${moment.duration(timeSinceStartDate).seconds()}`;

    setDisplayTime(`${years}<div>y</div> ${months}<div>m</div> ${days}<div>d</div> ${hours}<div>h</div> ${minutes}<div>m</div> ${seconds}<div>s</div>`);
  };

  const createMarkup = () => {
    return { __html: displayTime };
  };

  const dateCounter = () => {
    setInterval(() => {
      displayTimeSinceStart();
    },1000);
  };

  return [
    <div key='about1'>{dateCounter()}</div>,

    <div key='about2' className='img-box'>
      <img src='/images/robin.jpg' alt='me' height='300px' width='300px' className='img-fluid' />
      <h2>Robin Erickson</h2>
      <p>web developer</p>
    </div>,

    <div key='about3' className='about-text-box'>
      <div className='time-div'>
        <p>Building things for work and fun for</p>
        <div className='time-display'><span dangerouslySetInnerHTML={createMarkup()} /></div>
      </div>
      <p>Focusing primarily on Node + React with hobby projects in Elixir, Go and Java.</p>
      <p>Other stuff and things.</p>
    </div>
  ];
};