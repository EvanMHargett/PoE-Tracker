import React from 'react'
import Flip from '../Flip'
import './FlipsPage.css'
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

            <div className="headers container">
                <div className="row header-row">
                    <div className="col-md-2">Input 1  </div>
                    <div className="col-md-1">Quantity  </div>
                    <div className="col-md-2">Output  </div>
                    <div className="col-md-1">Quantity  </div>
                    <div className="col-md-1">Cost </div>
                    <div className="col-md-1">Revenue </div>
                    <div className="col-md-1">Trades</div>
                    <div className="col-md-1">Profit</div> 
                    <div className="col-md-2">Comments</div> 
                </div>
            </div>
            { flipsArr && 
                <div>
                    {flipsArr.map((flip, idx) =>
                        <div key={flip[1].id}>
                            <Flip flip={flip[1]} color={idx % 2}></Flip>
                        </div>
                    )}
                </div>
            }
            {user&& 
                <div>
                    {user.email === "admin@aa.io" && 
                        <button onClick={update}>Update item data</button>
                    }
                </div>
            }
        </div>
    )
}

export default FlipsPage