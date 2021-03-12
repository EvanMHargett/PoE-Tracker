import React, {useState} from 'react'
import "./Flip.css";
import { FavoriteBorder, NoteAdd} from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'
import {createFavorite, removeFavorite} from '../../store/favorites'
import {postComment, deleteComment} from '../../store/comments'
import {useDispatch, useSelector} from 'react-redux'

function Flip({flip}){
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites)
    const comments = useSelector((state) => state.comments)
    const [editing, setEditing] = useState(false)
    const [comment, setComment] = useState("")

    function toggleFavoriteFlip(){
        if(favorites[flip.id]){
            dispatch(removeFavorite(flip.id))
        }
        else{
            dispatch(createFavorite(flip.id))
        }
    }

    function toggleEdit(){
        setEditing(value => !value)
    }

    function submitEdit(){
        dispatch(postComment(flip.id, comment))
        setEditing(false)
        setComment("")
    }

    function deleteFlipComment(){
        dispatch(deleteComment(flip.id))
    }

    return (
        <div className="container-fluid flip-container">
            {flip && <div>
                <span>Input 1: {flip.input1Name}  </span>
                <span>Quantity 1: {flip.input1Quantity}  </span>
                <span>Output 1: {flip.outputName}   </span>
                <span>Output Quantity: {flip.outputQuantity}   </span>
                <span>Total Cost: {flip.cost}  </span> 
                <span>Total Revenue: {flip.revenue}  </span>
                <span>Profit: {flip.profit}  </span>
                <span>Trades Required: {flip.trades}  </span>
                { favorites[flip.id] ?
                    <FavoriteBorder id={flip.id} onClick={toggleFavoriteFlip} style={{ color: 'red' }}></FavoriteBorder>
                    :
                    <FavoriteBorder id={flip.id} onClick={toggleFavoriteFlip}></FavoriteBorder>
                }
                { comments[flip.id] &&
                    <div>
                        <div>{comments[flip.id].content}</div>
                        <DeleteIcon onClick={deleteFlipComment}></DeleteIcon>
                    </div>
                }
                <NoteAdd id={flip.id} onClick={toggleEdit}></NoteAdd>
                {  editing && 
                    <div>
                        <input onChange={e => setComment(e.target.value)} value={comment} ></input>
                        <button onClick={submitEdit}>Submit Comment</button>
                    </div>
                }
            </div>}
        </div>
    )
}

export default Flip