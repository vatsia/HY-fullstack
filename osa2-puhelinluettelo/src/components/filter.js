import React from 'react';

const Filter = (props) => {
    return(
        <p>rajaa näytettäviä <input onChange={props.handler} /></p>
    )
}

export default Filter