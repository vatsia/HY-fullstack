import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const Otsikko = (props) => {
    return (
        <h1>
            {props.otsikko}
        </h1>
    )
}

const Nappula = (props) => {

    return(
        <button onClick={props.handler}>{props.teksti}</button>
    )
}

const Statsit = (props) => {

    return(
        <p>
            hyvä: {props.hyvä}
            <br />
            neutraali: {props.neutraali}
            <br />
            huono: {props.huono}
        </p>
    )
}

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            huono: 0,
            neutraali: 0,
            hyvä: 0
        }
    }

    huonoHandler = () => {
        this.setState({huono: this.state.huono + 1})
    }

    neutraaliHandler = () => {
        this.setState({neutraali: this.state.neutraali + 1})
    }

    hyväHandler = () => {
        this.setState({hyvä: this.state.hyvä + 1})
    }

    render() {
        return (
            <div>
                <Otsikko otsikko="anna palautetta" />
                <Nappula teksti="hyvä" handler={this.hyväHandler} />
                <Nappula teksti="neutraali" handler={this.neutraaliHandler} />
                <Nappula teksti="huono" handler={this.huonoHandler}/>
                <Otsikko otsikko="statistiikka" />
                <Statsit hyvä={this.state.hyvä} neutraali={this.state.neutraali} huono={this.state.huono} />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
