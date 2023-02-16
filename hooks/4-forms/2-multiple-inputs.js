import React, { useState } from 'react';

const ControlledInputs = () => {
  const [person, setPerson] = useState({name:'',email:'',age:''});
  const [people, setPeople] = useState([]);

  const handleChange=((e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setPerson({...person,[name]:value});
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPerson = { ...person,id: new Date().getTime().toString()};
      setPeople([...people,newPerson]);
      setPerson({name:'',email:'',age:''});
    } else {
      alert("Fields are not filled");
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' name='name' value={person.name} onChange={handleChange}/>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' name='email' value={person.email} onChange={handleChange}/>
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input type='number' id='age' name='age' value={person.age} onChange={handleChange}/>
          </div>
          <button type='submit'>Add person</button>
        </form>
        {people.map((person) => {
          const { id, name, email,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
