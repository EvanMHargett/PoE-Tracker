import React from 'react'
import Flip from '../Flip'
import {useSelector, useDispatch} from 'react-redux'
import { updateItemData } from '../../store/flips'

function FlipsPage(){
    const flips = useSelector(state => state.flips)
 
    const dispatch = useDispatch()
    console.log(flips[1])
    const update = () =>{
        // dispatch(updateItemData())
    }

    return (
        <div className="table-responsive">
            <Flip flip={flips[1]}></Flip>
            <button onClick={update}>Update item data</button>
        </div>
    )
}

export default FlipsPage