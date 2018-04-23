import React from 'react';

const Yhteensa = (props) => {
    const maara = props.osat.reduce(function (c, arvo){
        return c + arvo.tehtavia;
    }, 0);
    
    return(
        <p>
            yhteensä {maara} tehtävää
        </p>
    )
}

export default Yhteensa;