import React, { useState } from 'react';


const SimpleToggle = () => {
 
  const[toggle,setToggle]=useState(false);

  return(
    <>
      <button className='btn' onClick={()=>setToggle(!toggle)}>
        {toggle ? <h1>Dark Mode</h1> : <h1>Light Mode</h1>}
      </button>
    </>
  )
};

export default SimpleToggle;
