import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
            name: this.state.newName
    }
    console.log(this.state.persons.indexOf(numberObject) )
    if(!this.state.persons.some(ps => ps.name === numberObject.name)){
        const numbers = this.state.persons.concat(numberObject);
        this.setState({
            persons: numbers,
            newName: ''
        });
    }else{
        alert("Numero on jo lisätty!");
    }

  }

  handleNumberChange = (event) => {
    this.setState({newName: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNumber}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
            {this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
