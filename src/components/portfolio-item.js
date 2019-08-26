import React from 'react';

export default item => {
  return (
    <div className='col-10 portfolio-item'>
      <h4>{item.title} {item.badgeIcon ? item.badgeIcon : null}</h4>
      {item.text()}
      {item.image()}
    </div>
  );
};
