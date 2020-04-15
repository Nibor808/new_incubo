import React, { useState } from 'react';
import moment from 'moment';

export default () => {
  const [infoDisplay, setInfoDisplay ] = useState('');
  const START_DATE = moment([2016, 0, 1]);

  const getTime = () => {
    const timeSinceStartDate = moment().diff(START_DATE);

    const years = moment.duration(timeSinceStartDate).years();
    const months = moment.duration(timeSinceStartDate).months();
    const days = moment.duration(timeSinceStartDate).days();
    const hours = moment.duration(timeSinceStartDate).hours();
    const minutes = moment.duration(timeSinceStartDate).minutes();
    const seconds = moment.duration(timeSinceStartDate).seconds();

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds
    };
  };
  
  const renderInfoDisplay = () => {
    const {
      years,
      months,
      days,
      hours,
      minutes,
      seconds
    } = getTime();
    
    setInfoDisplay(
      `<pre>
const STATS = {
  "location": {
    "province": "Ontario",
    "country": "Canada"
  },
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
    "clean_code",
    "collaboration"
  ]
}
      </pre>`
    );
  };

  const createInfoMarkup = () => {
    return { __html: infoDisplay };
  };

  const callDisplay = () => {
    setInterval(() => {
      renderInfoDisplay();
    },0);
  };

  return (
    <div className='row'>
      {callDisplay()}

      <div className='col-sm-10 col-xl-8 top-box'>
        <div className='img-box'>
          <img src='/images/robin.jpg' alt='me' height='300px' width='300px' className='img-fluid'/>
          <h2>Robin Erickson</h2>
          <p>web developer</p>
        </div>

        <span dangerouslySetInnerHTML={createInfoMarkup()}/>
      </div>

      <div className='col-sm-10 bottom-box'>
        <p>Working in the MERN stack with hobby projects in Swift, Go, Java, and Elixir</p>
      </div>
    </div>
  );
};