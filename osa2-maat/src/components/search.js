import React from 'react'

const Search = (props) => {
    return (
        <p>
            find countries: <input onChange={props.handler} />
        </p>
    )
}

export default Search