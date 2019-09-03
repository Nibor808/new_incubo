import React from 'react';
import Modal from 'react-modal';


export default (props) => {
  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={props.isOpen}
      style={modalStyle}
      contentLabel='Banner Notification'
    >
      <h3><strong>{props.title}</strong></h3>

      <img
        src={props.src}
      />
    </Modal>
  );
};