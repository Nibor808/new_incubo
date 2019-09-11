import React, { useState } from 'react';
import moment from 'moment';

export default () => {
  const [displayTime, setDisplayTime ] = useState('');
  const START_DATE = moment([2016, 0, 1]);

  const displayTimeSinceStart = () => {
    const timeSinceStartDate = moment().diff(START_DATE);

    const years = moment.duration(timeSinceStartDate).years();
    const months = moment.duration(timeSinceStartDate).months();
    const days = moment.duration(timeSinceStartDate).days();
    const hours = moment.duration(timeSinceStartDate).hours();
    const minutes = moment.duration(timeSinceStartDate).minutes();
    const seconds = moment.duration(timeSinceStartDate).seconds();

    setDisplayTime(
      `<pre>
const stats = {
  "location": "Peterborough, ON",
  "time_active": {
    "years": ${years},
    "months": ${months},
    "days": ${days},
    "hours": ${hours},
    "minutes": ${minutes},
    "seconds": ${seconds}
  },
  "skills": [
    "problem_solving",
    "clean_ui",
    "collaborative"
  ]
}
      </pre>`
    );
  };

  const createMarkup = () => {
    return { __html: displayTime };
  };

  const dateCounter = () => {
    setInterval(() => {
      displayTimeSinceStart();
    },1000);
  };

  return (
    <div className='row'>
      {dateCounter()}

      <div className='col-sm-8 top-box'>
        <div className='img-box'>
          <img src='/images/robin.jpg' alt='me' height='300px' width='300px' className='img-fluid'/>
          <h2>Robin Erickson</h2>
          <p>web developer</p>
        </div>

        <span dangerouslySetInnerHTML={createMarkup()}/>
      </div>

      <div className='col-md-9 bottom-box'>
        <p>Focusing primarily on Node + React with hobby projects in Elixir, Go and Java</p>
      </div>
    </div>
  );
};