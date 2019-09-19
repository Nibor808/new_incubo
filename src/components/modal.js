import React from 'react';
import Modal from 'react-modal';
import modalStyle from '../utils/modal_style';

export default (props) => {
  const { isOpen, title, src } = props;

  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      style={modalStyle}
      contentLabel='Banner Notification'
    >
      <h3><strong>{title}</strong></h3>

      <img
        src={src}
        alt={title}
      />
    </Modal>
  );
};