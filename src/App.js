import React, { Component } from 'react';
import Person from './Person/person'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  togglePersonsHandler = ()=>{
    const deosShow = this.state.showPersons;
    this.setState({showPersons: !deosShow})
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button 
          onClick={this.togglePersonsHandler} className='btn-info'>
                Toggle Persons
        </button>
        {
          this.state.showPersons === true ?
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Mehdi!')}
            changed={this.nameChangedHandler} >
            My Hobbies: Racing
          </Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        </div> : null
        }
      </div>
    );
  }
}

export default App;
