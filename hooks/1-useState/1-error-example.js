import React from 'react';

const ErrorExample = () => {
  let title = "Title";

  const handleClick=()=>{
    title="Hello";
  }

  return(
    <>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  )
};

export default ErrorExample;
