import React,{useState,useReducer,useRef,useEffect} from 'react'
import Modal from './Modal';
//default State Declaration
const defaultState={
  people:[],
  modalOpen:false,
  content:''
};
//reducer function
const reducer=(state,action)=>{
if(action.type==='ADD_ITEM'){
  const newPeople=[...state.people,action.payload];
  return{
    ...state,
    people:newPeople,
    modalOpen:true,
    content:'Item is Added'
  }
}
if(action.type==='NO_VALUE'){
  return{...state,modalOpen:true,content:'Please enter value'}
}
if(action.type==='CLOSE_MODAL'){
  return{...state,modalOpen:false}
}
if(action.type==='REMOVE_ITEM'){
  const newPeople= state.people.filter((person)=> person.id!== action.payload);
  return{people:newPeople,modalOpen:true,content:`Item has been removed`};
}

if(action.type==='RESET'){
  return{people:[],modalOpen:true,content:'All items have been removed'};
}

throw new Error('no type is matching');
};

//main component
const Index=()=>{
  const [name,setName]=useState("");
  const [state,dispatch]=useReducer(reducer,defaultState);
  const container = useRef();
   useEffect(()=>{
    container.current.focus();
   })

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name){
      const newItem={id:new Date().getTime().toString(),name};
      dispatch({type:'ADD_ITEM',payload:newItem});
      setName('');
    }
   else{
     dispatch({type:'NO_VALUE'});
    }
  }

  const handleEdit=(id) => {
      const specificItem = list.find((item) => item.id === id);
      setIsEditing(true);
      setEditID(id);
      setName(specificItem.title);
    };
  

  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL'});
  };

  return(
    <>
    {state.modalOpen && (<Modal closeModal={closeModal} content={state.content}/>)}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" ref={container} value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
       <div><button type="submit">Add Item</button></div> 
      </form>
      {state.people.map((person)=>{
        return(
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})}>Remove</button>
            <button onClick={handleEdit}>Edit</button>
          </div> 
        )
      })}
          <div>
            <button className='reset' onClick={()=>dispatch({type:'RESET'})}>Remove All</button>
          </div> 
      
    </>
  )
}

export default Index;