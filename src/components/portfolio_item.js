import React from 'react';

export default (props) => {
  return (
    <div className='portfolio-item'>
      <h3><strong>{props.item.title}</strong></h3>
      {props.item.badgeIcon ? props.item.badgeIcon : null}
      {props.item.text ? props.item.text() : null}
      {props.item.image ? props.item.image(props.handleClick) : null}
    </div>
  );
};
