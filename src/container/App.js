import React, { Component } from "react";
import "./App.css";
import PersonList from "../Components/PersonList";
import Student from "../Components/Student";
import Cockpit from "../Components/cockpit/Cockpit";
// import WithClass from "../hoc/WithClass";
// import Aux from "../hoc/Aux";
import AuthContext from "../context/authcontext";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App JS constructor");
  }
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

  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived State Props ", props);
    return state;
  }

  componentDidMount() {
    console.log("Component Mounting");
  }

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
    console.log("render method App JS");
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
        <AuthContext.Provider
          value={{ authenticated: this.state.authenticated }}
        >
          <Cockpit
            title={this.props.title}
            showPerson={this.state.showPersons}
            tech={this.state.tech}
            person={this.state.person}
            toggle={this.togglePersonHandler}
          />
          {persons}
        </AuthContext.Provider>
        <Student />
      </div>
    );
  }
}

export default App;
