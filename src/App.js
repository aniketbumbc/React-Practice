import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Miket", age: 33 },
      { name: "ABD", age: 13 },
      { name: "Crone", age: 23 },
      { name: "Jhon", age: 53 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1> Hi, I am React Developer</h1>
        <p> This is really Working </p>
        <button>Switch</button>
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
      </div>
    );
  }
}

export default App;
