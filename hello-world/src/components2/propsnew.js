import React from 'react'

const Propsnew = props => {
    return (
        <div>
        <h1>Welcome {props.name} and Your Passion is {props.passion}</h1>
        {props.children}
        </div>
    )
}

export default Propsnew

