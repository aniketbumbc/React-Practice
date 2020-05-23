import React, { Component } from "react";
import "./App.css";
import PersonList from "../Components/PersonList";
import Student from "../Components/Student";
import Cockpit from "../Components/cockpit/Cockpit";

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <PersonList
          person={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }
    return (
      <div className="App">
        <Cockpit
          showPerson={this.state.showPersons}
          tech={this.state.tech}
          person={this.state.person}
          toggle={this.togglePersonHandler}
        />
        {persons}
        <Student />
      </div>
    );
  }
}

export default App;
