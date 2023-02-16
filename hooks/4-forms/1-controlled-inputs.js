import React, { useState } from 'react';

const ControlledInputs = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');

  const [people,setPeople]=useState([]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
   if (name&&email){
    const person={id:new Date().getTime().toString(),name,email};
    console.log(person);

    setPeople((people)=>{
      return[...people,people];
    });
    setName('');
    setEmail('');

   }
   else{
    alert ("Fields are not filled");
   }
  }
  return(
    <>
      <article>
        <form className='form'>
        <div className='form-control'>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-control'>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type='submit' onClick={handleSubmit}>Add Person</button>
        </form>
      
        {people.map((person) => {
          const { id, name, email} = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
        )})};
      </article>
    </>
  )
};

export default ControlledInputs;
