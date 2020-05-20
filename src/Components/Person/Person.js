import React from "react";
import './person.css';
const person = (props) => {
  console.log(props);
  return (
    <div className="Person">
      <p>
        I am {props.name} and I am {props.age} years Old
      </p>
      <p onClick = {props.switchs}>{props.children}</p>
      <input type ="text" onChange={props.change} value = {props.tech}/>
    </div>    
  );
};

export default person;
