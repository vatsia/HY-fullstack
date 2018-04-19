import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <p>
                
                <Osa osa={props.osaset[0].nimi} tehtavia={props.osaset[0].tehtavia} />
                <Osa osa={props.osaset[1].nimi} tehtavia={props.osaset[1].tehtavia} />
                <Osa osa={props.osaset[2].nimi} tehtavia={props.osaset[2].tehtavia} />
        </p>
    )
}

const Osa = (props) => {

    return (
        <p>{props.osa} {props.tehtavia}</p>
    )
}

const Yhteensa = (props) => {

    return(
        <p>
            yhteensä {props.maara} tehtävää
        </p>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'

    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10
        },

        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },

        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ]

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osaset={osat} />
            <Yhteensa maara={osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
