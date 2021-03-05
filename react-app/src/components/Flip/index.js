import React from 'react'
import "./Flip.css";
import { FavoriteBorder, NoteAdd} from '@material-ui/icons'
import {createFavorite, removeFavorite} from '../../store/favorites'
import {useDispatch, useSelector} from 'react-redux'

function Flip({flip}){
    console.log("flip in component", flip)
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites)
    function toggleFavoriteFlip(){
        // const id = e.currentTarget.id
        // console.log(id)
        // if(isNaN(id)){
        //     console.log("something went wrong, ", e.currentTarget, e.target)
        //     return null
        // }
        if(favorites[flip.id]){
            dispatch(removeFavorite(flip.id))
        }
        else{
            dispatch(createFavorite(flip.id))
        }
    }
    return (
        <div className="container-fluid">
            {flip && <div>
                <span>Total Cost: {flip.cost}  </span> 
                <span>Total Revenue: {flip.revenue}  </span>
                <span>Profit: {flip.profit}  </span>
                <span>Trades Required: {flip.trades}  </span>
                { favorites[flip.id] ?
                    <FavoriteBorder id={flip.id} onClick={toggleFavoriteFlip} style={{ color: 'red' }}></FavoriteBorder>
                    :
                    <FavoriteBorder id={flip.id} onClick={toggleFavoriteFlip}></FavoriteBorder>
                }
                <NoteAdd id={flip.id}></NoteAdd>
            </div>}
        </div>
    )
}

export default Flip