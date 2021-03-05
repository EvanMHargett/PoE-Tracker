import React from 'react'
import "./Flip.css";
import { FavoriteBorder, NoteAdd} from '@material-ui/icons'
import {createFavorite, removeFavorite} from '../../store/favorites'
import {useDispatch} from 'react-redux'

function Flip({flip}){
    console.log("flip in component", flip)
    const dispatch = useDispatch()
    function toggleFavoriteFlip(e){
        const id = e.currentTarget.id
        console.log(id)
        if(isNaN(id)){
            console.log("something went wrong, ", e.currentTarget, e.target)
            return null
        }
        if(favorites[id]){
            dispatch(removeFavorite(id))
        }
        else{
            dispatch(createFavorite(id))
        }
    }
    return (
        <div className="container-fluid">
            {flip && <div>
                <span>Total Cost: {flip.cost}  </span> 
                <span>Total Revenue: {flip.revenue}  </span>
                <span>Profit: {flip.profit}  </span>
                <span>Trades Required: {flip.trades}  </span>
                <FavoriteBorder id={flip.id} onClick={toggleFavoriteFlip}></FavoriteBorder>
                <NoteAdd id={flip.id}></NoteAdd>
            </div>}
        </div>
    )
}

export default Flip