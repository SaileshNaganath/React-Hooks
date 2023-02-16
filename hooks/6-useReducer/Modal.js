import React, { useEffect } from 'react';

const Modal = ({content,closeModal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      closeModal();
    },1000);
  });
  return(
    <div className='modal'>
      <p>{content}</p>
    </div>
  )
};

export default Modal;
