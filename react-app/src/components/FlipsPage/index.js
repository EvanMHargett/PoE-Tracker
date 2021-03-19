import React, {useState} from 'react'
import Flip from '../Flip'
import './FlipsPage.css'
import {useSelector, useDispatch} from 'react-redux'
import { updateItemData } from '../../store/flips'
import { getAllFavorites } from '../../store/favorites'
import { getAllComments } from '../../store/comments'

function FlipsPage(){
    const flips = useSelector(state => state.flips)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const [sortingType, setSortingType] = useState("profit")


    const update = () =>{
        dispatch(updateItemData())
        dispatch(getAllFavorites())
        dispatch(getAllComments())
    }

    let flipsArr = []
    if(flips){
        flipsArr =Object.entries(flips)
        if(sortingType === "profit"){
            flipsArr.sort((a, b) => {
                return b[1].profit - a[1].profit
            })
        }
        else if(sortingType === "profit/trade"){
            flipsArr.sort((a, b) => {
                return b[1].profit / b[1].trades - a[1].profit / a[1].trades
            })
        }
        else if(sortingType === "profit/cost"){
            flipsArr.sort((a, b) => {
                return b[1].profit / b[1].cost - a[1].profit / a[1].cost
            })
        }
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
            <div className="radio-container">
                <input onChange={event => setSortingType(event.target.value)} checked={sortingType === "profit"} name="sortSelector" id="profit" value="profit" type="radio" />
                <label htmlFor="profit">Sort By Profit</label>
                <input onChange={event => setSortingType(event.target.value)} name="sortSelector" id="profit/trade" value="profit/trade" type="radio" />
                <label htmlFor="profit/trade">Sort By Profit Per Trade</label>
                <input onChange={event => setSortingType(event.target.value)} name="sortSelector" id="profit/cost" value="profit/cost" type="radio" />
                <label htmlFor="profit/cost">Sort By Profit Per Cost</label>
            </div>
        </div>
    )
}

export default FlipsPage