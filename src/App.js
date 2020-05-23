import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import Student from "./Components/Student";
import Radium, {StyleRoot} from 'radium';
class App extends Component {
  state = {
    tech: "React",
    person: [
      { id: "34f", name: "Miket", age: 33 },
      { id: "14f", name: "ABD", age: 13 },
      { id: "24f", name: "Crone", age: 23 },
      { id: "f4f", name: "Jhon", age: 53 }
    ],
    showPersons: false
  };

  deletePersonHandler = index => {
    const person = [...this.state.person];
    person.splice(index, 1);
    this.setState({ person: person });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const persons = { ...this.state.person[personIndex] };
    persons.name = event.target.value;

    const person = [...this.state.person];
    person[personIndex] = persons;

    this.setState({ person: person });
  };

  togglePersonHandler = () => {
    const currentShow = this.state.showPersons;
    this.setState({ showPersons: !currentShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid red",
      padding: "8px",
      cursor: "pointer",
      ':hover':{
      backgroundColor: "lightgreen",
      color:"white"
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((ele, index) => {
            return (
              <Person
                name={ele.name}
                age={ele.age}
                click={() => this.deletePersonHandler(index)}
                key={ele.id}
                change={event => this.nameChangeHandler(event, ele.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: "lightblue",
        color:"white"
        }
    }

    let classes = [];
    if(this.state.person.length <=3){
      classes.push('blue');
    }
    if(this.state.person.length <=2){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1> Hi, I am {this.state.tech} Developer</h1>
        <p className={classes.join(' ')}> This is really working </p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Name
        </button>
        {persons}
        <Student />
      </div>
      </StyleRoot>
    );
  }
}

export default (App);
