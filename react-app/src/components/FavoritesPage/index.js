import React from 'react'
import Flip from '../Flip'
import {useSelector} from 'react-redux'


function FlipsPage(){
    const favorites = useSelector(state => state.favorites)
    const flips = useSelector(state => state.flips)

    let favoritesArr = []
    if(favorites){
        favoritesArr =Object.entries(favorites)
    }

    return (
        <div className="page-container">
            { favoritesArr && 
                <div>
                    {favoritesArr.map((flip) =>
                        <div key={flip[1].id}>
                            <Flip flip={flips[flip[1].id]}></Flip>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default FlipsPage