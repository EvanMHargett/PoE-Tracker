import React from 'react'
import Flip from '../Flip'
import {useSelector, useDispatch} from 'react-redux'
import { updateItemData } from '../../store/flips'

function FlipsPage(){
    const flips = useSelector(state => state.flips)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const update = () =>{
        dispatch(updateItemData())
    }

    let flipsArr = []
    if(flips){
        flipsArr =Object.entries(flips)
    }

    return (
        <div className="page-container">
            { flipsArr && 
                <div>
                    {flipsArr.map((flip) =>
                        <div key={flip[1].id}>
                            <Flip flip={flip[1]}></Flip>
                        </div>
                    )}
                </div>
            }
            {user.id == 2 && 
                <button onClick={update}>Update item data</button>
            }
        </div>
    )
}

export default FlipsPage