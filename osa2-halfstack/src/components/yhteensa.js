import React from 'react';

const Yhteensa = (props) => {
    let maara = 0;
    props.osat.forEach(osa => {
        maara = maara + osa.tehtavia;
    });
    return(
        <p>
            yhteensä {maara} tehtävää
        </p>
    )
}

export default Yhteensa;