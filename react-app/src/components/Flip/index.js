import React from 'react'

function Flip({flip}){
    console.log("flip in component", flip)
    const profit = 1
    const cost = 2
    const revenue = 3
    const trades = 4

    return (
        <div>
            <div>{flip.profit}</div>
            <div>{flip.revenue}</div>
            <div>{flip.trades}</div>
            <div>{flip.cost}</div>
        </div>
    )
}

export default Flip