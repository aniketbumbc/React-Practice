import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import Student from "./Components/Student";

class App extends Component {
  state = {
    tech: "React",
    person: [
      { name: "Miket", age: 33 },
      { name: "ABD", age: 13 },
      { name: "Crone", age: 23 },
      { name: "Jhon", age: 53 }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      tech: "Angular",
      person: [
        { name: newName, age: 33 },
        { name: "ABD", age: 13 },
        { name: "Don", age: 23 },
        { name: "Jhon", age: 20 }
      ]
    });
  };

  nameChangeHandler = (event) =>{
    this.setState({
      tech: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am {this.state.tech} Developer</h1>
        <button onClick={() => this.switchNameHandler("Bunyyyy")}>Switch</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}
        switchs = {this.switchNameHandler.bind(this,"Yahooo")}
        >
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
          change ={this.nameChangeHandler}
          tech = {this.state.tech}
        />
        <Student />
      </div>
    );
  }
}

export default App;
