import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>Hi, i am a react app </h1>
        <Person name="Anze" age="23"/>
        <Person name="Manu" age="29"/>
        <Person name="Maruša" age="45">She likes to have sex</Person>
      </div>
       );
      
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works?'));
     
   
  }
}

export default App;
