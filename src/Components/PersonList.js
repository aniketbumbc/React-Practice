import React from "react"; 
import Person from '../Components/Person/Person';

const PersonList = props =>
  props.person.map((ele, index) => {
    return (
      <Person
        name={ele.name}
        age={ele.age}
        click={() => props.clicked(index)}
        key={ele.id}
        change={event => props.changed(event, ele.id)}
      />
    );
  });

  export default PersonList
