import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'
import Search from './components/search.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countries: [],
            filter: ''
        }
    }

    handleFilterChange = (event) => {
        this.setState({filter: event.target.value});
        console.log('filtteri muuttui')
    }

    handleNameClick = (name) => {
        return () => {
            console.log('korvataan filtteri maan nimellä')
            this.setState({filter: name});

        }
    }

    componentWillMount(){
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            this.setState({countries: response.data})
        })
    }

    render(){
        const countriesToShow = 
            this.state.filter ? 
                this.state.countries.filter(cnt => cnt.name.toLowerCase().includes(this.state.filter.toLowerCase()) === true) :
                this.state.countries;
        if (countriesToShow.length === 1){
            return (
                <div>
                    <Search handler={this.handleFilterChange}/>
                    <h1>{countriesToShow[0].name}</h1>
                    <p>capital: {countriesToShow[0].capital}</p>
                    <p>population: {countriesToShow[0].population}</p>
                    <p><img src={countriesToShow[0].flag} alt={countriesToShow[0].name} width="200"/></p>
                </div>
            )
        }else if(countriesToShow.length <= 10){
            return(
                <div>
                    <Search handler={this.handleFilterChange}/>
                    {countriesToShow.map(country => <p onClick={this.handleNameClick(country.name)} key={country.topLevelDomain}>{country.name}</p>)}
                </div>
            )
        } else{
            return (
                <div>
                    <Search handler={this.handleFilterChange}/>
                    <p>Too many matches, specify another filter</p>
                </div>
            )
        }

    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
