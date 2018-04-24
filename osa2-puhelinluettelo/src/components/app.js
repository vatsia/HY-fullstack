import React from 'react';
import Henkilo from './henkilo.js'
import Filter from './filter.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
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

  handleFilterChange = (event) => {
      this.setState({filter: event.target.value});
  }

  render() {
      const numbersToShow = 
        this.state.filter ?
            this.state.persons.filter(pr => pr.name.toLowerCase().includes(this.state.filter.toLowerCase()) === true) :
            this.state.persons;
      return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Filter handler={this.handleFilterChange}/>
        <h2>Lisää uusi!</h2>
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
                {numbersToShow.map(person => <Henkilo key={person.name} name={person.name} number={person.number}/>)}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App
