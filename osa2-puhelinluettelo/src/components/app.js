import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '050-1234123' }
      ],
      newName: '',
      newNumber: ''
    }
  }

  addNumber = (event) => {
    event.preventDefault()

    const numberObject = {
            name: this.state.newName,
            number: this.state.newNumber
    }

    if(!this.state.persons.some(ps => ps.name === numberObject.name)){
        const numbers = this.state.persons.concat(numberObject);
        this.setState({
            persons: numbers,
            newName: '',
            newNumber: ''
        });
    }else{
        alert("Numero on jo lisätty!");
    }

  }

  handleNameChange = (event) => {
    this.setState({newName: event.target.value});
  }

  handleNumberChange = (event) => {
    this.setState({newNumber: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNumber}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
            <tbody>
                {this.state.persons.map(person => <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App
