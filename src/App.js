import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import Student from './Components/Student';

class App extends Component {
  state = {
      tech:"React",
    person: [
      { name: "Miket", age: 33 },
      { name: "ABD", age: 13 },
      { name: "Crone", age: 23 },
      { name: "Jhon", age: 53 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      tech:"Angular",
      person: [
        { name: "Aniket", age: 33 },
        { name: "ABD", age: 13 },
        { name: "Don", age: 23 },
        { name: "Jhon", age:20 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1> Hi, I am {this.state.tech} Developer</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>
          <h1 style={{ color: "red" }}>This is child props</h1>
        </Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
        <Person
          name={this.state.person[3].name}
          age={this.state.person[3].age}
        />
        <Student/>
      </div>
    );
  }
}

export default App;
