import React from "react";

const person = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        I am {props.name} and I am {props.age} years Old
      </p>
      <p onClick = {props.switchs}>{props.children}</p>
      <input type ="text" onChange={props.change} value = {props.tech}/>
    </div>    
  );
};

export default person;
