import React from "react";
import './person.css';
import styled from 'styled-components';
const person = (props) => {
  const style = {
    '@media  (mim-width:500px)':{
      width:'450px'
    }
  };

  const StylDiv =  styled.div` color:red`;

  return (
   // <div className="Person" style={style}>
   <StylDiv>
      <p onClick = {props.click}>
        I am {props.name} and I am {props.age} years Old
      </p>
      <p>{props.children}</p>
      <input type ="text" onChange={props.change} value = {props.tech}/>
      </StylDiv>  
  );
};

export default person;
