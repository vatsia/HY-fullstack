import React from 'react';
import ReactDOM from 'react-dom';
import Kurssi from './components/kurssi.js';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        },
        {
            nimi: 'Oispa kaljaa',
            tehtavia: 4,
            id: 4
        }
      ]
    }
  
    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }
  


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
