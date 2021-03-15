import React from 'react'
import Flip from '../Flip'
import {useSelector} from 'react-redux'


function FavoritesPage(){
    const favorites = useSelector(state => state.favorites)
    const flips = useSelector(state => state.flips)

    let favoritesArr = []
    if(favorites){
        favoritesArr =Object.entries(favorites)
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
                    <div className="col-md-1">Comments</div> 
                </div>    
            </div>
            { favoritesArr && 
                <div>
                    {favoritesArr.map((flip, idx) =>
                        <div key={flip[1].id}>
                            <Flip flip={flips[flip[1].id]} color={idx % 2}></Flip>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default FavoritesPage