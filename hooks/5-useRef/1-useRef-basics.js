import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
 const container = useRef(null);

 const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(container.current.value);
 };

 useEffect(()=>{
  container.current.focus();
 })

 return(
  <>
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='text' ref={container}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  </>
 )
};

export default UseRefBasics;
