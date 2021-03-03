import React from 'react'
import Flip from '../Flip'
import {useSelector, useDispatch} from 'react-redux'


function FlipsPage(){
    const flips = useSelector(state => state.flips)
 
    const dispatch = useDispatch()
    console.log(flips[1])


    return (
        <div>
            <Flip flip={flips[1]}></Flip>
        </div>
    )
}

export default FlipsPage