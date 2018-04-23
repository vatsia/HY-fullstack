import React from 'react';
import Osa from './osa.js'; 
const Sisalto = (props) => {

    return (
        <div>
            {props.osaset.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)}
        </div>
    )
}

export default Sisalto