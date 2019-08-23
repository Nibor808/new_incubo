import React from 'react';

export default (item, index) => {
  return [
    <div key={`port1${index}`} className='col-2 portfolio-sidebar'>
      <h4>{item.title}</h4>
      {item.badgeIcon ? item.badgeIcon : null}
    </div>,
    <div key={`port2${index}`} className='col-10 portfolio-main'>
      {item.text()}
      {item.image()}
    </div>
  ];
};
