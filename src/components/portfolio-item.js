import React from 'react';

export default (item, index) => {
  return (
    <article key={`portItem${index}`} className='row'>
      <div className='col-2 portfolio-sidebar'>
        <h4>{item.title}</h4>
        {item.badgeIcon ? item.badgeIcon : null}
      </div>
      <div className='col-10 portfolio-main'>
        {item.text()}
        {item.image()}
      </div>
    </article>
  );
};
