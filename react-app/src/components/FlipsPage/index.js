import React from 'react'
import Flip from '../Flip'
import {useSelector} from 'react-redux'

function FlipsPage(){
    const flips = useSelector(state => state.flips)
    const profit = 1
    const cost = 2
    const revenue = 3
    const trades = 4

    return (
        <div>
            <Flip flip={flips[1]}></Flip>
        </div>
    )
}

export default FlipsPage