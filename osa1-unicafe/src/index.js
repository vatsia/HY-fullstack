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

const Button = (props) => {

    return(
        <button onClick={props.handler}>{props.teksti}</button>
    )
}

const keskiarvo = (props) => {
    let keskiarvo = (props.hyvä + -1 * props.huono) / (props.hyvä + props.neutraali + props.huono)
    
    if(isNaN(keskiarvo)){
        keskiarvo = 0;
    }

    return Number((keskiarvo).toFixed(1))
}

const positiivisia = (props) => {
    let positiivisia = ((props.hyvä / (props.hyvä + props.neutraali + props.huono)) * 100)

    if(isNaN(positiivisia)){
        positiivisia = 0;
    }

    return Number((positiivisia).toFixed(2))

}

const Statistics = (props) => {
    if(props.hyvä < 1 && props.neutraali < 1 && props.huono < 1){
        return(
            <p>
                ei yhtään palautetta annettu
            </p>
        )
    }

    return(
        <div>
            <Statistic text="hyvä" count={props.hyvä} />
            <Statistic text="neutraali" count={props.neutraali} />
            <Statistic text="huono" count={props.huono} />
            <Statistic text="keskiarvo" count={keskiarvo(props)}/>
            <Statistic text="positiivisia" count={positiivisia(props)} unit="%"/>
        </div>
    )
}

const Statistic = (props) => {
    
    return (
        <p>
            {props.text}: {props.count}{props.unit}
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
                <Button teksti="hyvä" handler={this.hyväHandler} />
                <Button teksti="neutraali" handler={this.neutraaliHandler} />
                <Button teksti="huono" handler={this.huonoHandler}/>
                <Otsikko otsikko="statistiikka" />
                <Statistics hyvä={this.state.hyvä} neutraali={this.state.neutraali} huono={this.state.huono} />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
