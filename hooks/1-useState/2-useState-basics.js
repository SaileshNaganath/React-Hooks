import React, {useState} from "react";

const Basics = () =>{
  const [text, setText]= useState("Title");
  const handleClick = () =>{
    if(text ==="title"){
      setText==="Hello";
    }
    else{
      setText==="Bye";
    }
  }
return (
  <>
    <h1> {title}</h1>
    <button type="button" className="btn" onClick={handleClick}>
      Change Title
    </button>
  </>
)
}

export default Basics;
