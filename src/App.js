import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hi, I am React Developer</h1>
      <p> This is really Working </p>
      <Person/>
      <Person/>
      <Person/>
      <Person/>
      </div>
    );
  }
}

export default App;
