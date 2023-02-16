import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0);

  const delayCount=()=>{
    setTimeout(()=>{
      setValue(value+1)
    },3000)
  }
  return (
  <section style={{ margin: '4rem 0' }}>
     <h2>Counter</h2>
      <h3>{value}</h3>
      <button className='btn' onClick={()=>setValue(value+1)}>
        Increment
      </button>
      <button className='btn' onClick={()=>setValue(0)}>
        Reset
      </button>
      <button className='btn' onClick={()=>setValue(value-1)}>
        Decrement
      </button>

    <h2> Delayed Counter</h2>
    <h3>{value}</h3>
    <button className='btn' onClick={delayCount}>
      Delay Count
    </button>
  </section>
  )
};

export default UseStateCounter;
