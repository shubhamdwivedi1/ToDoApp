import React from 'react'

const Nine = () => {
    let arr = [1,2,3,4,5,193]
    let b = arr.reduce((acc,curr)=> acc+curr);
    return b
}

export default Nine

