import React, { useState } from "react";

const Student = props => {
 const [studentState,setStudnetsState] = useState({
    person: [
      { name: "Boy1", age: 14 },
      { name: "Boy2", age: 18 },
      { name: "Don1", age: 20 },
      { name: "Boy3", age: 21 }
    ]
  });

  const switchNameHandler = () => {
      setStudnetsState({
        person: [
          { name: "Aniket", age: 33 },
          { name: "ABD", age: 13 },
          { name: "Don", age: 23 },
          { name: "Jhon", age:20 }
        ]
      });
    };

  return (
      <div>
      <h1>Student Infotmation</h1>
      <button onClick={switchNameHandler}>Switch Boys Name </button>
      <h5>{studentState.person[0].name}</h5>
      <h5>{studentState.person[1].name}</h5>
      <h5>{studentState.person[2].name}</h5>
      <h5>{studentState.person[3].name}</h5>
      </div>   
      )
};

export default Student;
