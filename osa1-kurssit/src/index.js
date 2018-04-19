import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
                
                <Osa osa={props.osaset[0].nimi} tehtavia={props.osaset[0].tehtavia} />
                <Osa osa={props.osaset[1].nimi} tehtavia={props.osaset[1].tehtavia} />
                <Osa osa={props.osaset[2].nimi} tehtavia={props.osaset[2].tehtavia} />
        </div>
    )
}

const Osa = (props) => {

    return (
        <p>{props.osa} {props.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    const maara = props.osaset[0].tehtavia + props.osaset[1].tehtavia + props.osaset[2].tehtavia
    return(
        <p>
            yhteensä {maara} tehtävää
        </p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
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
    }

    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osaset={kurssi.osat} />
            <Yhteensa osaset={kurssi.osat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
