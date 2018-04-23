import React from 'react';
import Otsikko from './otsikko.js';
import Sisalto from './sisalto.js';
import Yhteensa from './yhteensa.js';
const Kurssi = (props) => {

    return (
        <div>
            <Otsikko otsikko={props.kurssi.nimi} />
            <Sisalto osaset={props.kurssi.osat} />
            <Yhteensa osat={props.kurssi.osat} />
        </div>
    )
}

export default Kurssi