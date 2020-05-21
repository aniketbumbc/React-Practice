import React from "react";
import './person.css';
const person = (props) => {
   return (
    <div className="Person">
      <p onClick = {props.click}>
        I am {props.name} and I am {props.age} years Old
      </p>
      <p>{props.children}</p>
      <input type ="text" onChange={props.change} value = {props.tech}/>
    </div>    
  );
};

export default person;
