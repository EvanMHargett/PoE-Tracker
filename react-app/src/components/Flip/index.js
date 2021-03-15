import React, {useState} from 'react'
import "./Flip.css";
import { FavoriteBorder, NoteAdd} from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'
import {createFavorite, removeFavorite} from '../../store/favorites'
import {postComment, deleteComment} from '../../store/comments'
import {useDispatch, useSelector} from 'react-redux'

function Flip({flip, color}){
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
    let colorName
    if(color){
        colorName="darker"
    }
    else{
        colorName="lighter"
    }

    return (
        <div className={`container flip-container ${colorName}`}>
            {flip && <div className="row flip-row">
                <div className="col-md-2">{flip.input1Name}</div>
                <div className="col-md-1">{flip.input1Quantity}</div>
                <div className="col-md-2">{flip.outputName}</div>
                <div className="col-md-1">{flip.outputQuantity}</div>
                <div className="col-md-1">{flip.cost}</div>
                <div className="col-md-1">{flip.revenue}</div>
                <div className="col-md-1">{flip.trades}</div>
                <div className="col-md-1">{flip.profit}</div> 
                <div className="col-md-2">
                    { favorites[flip.id] ?
                        <FavoriteBorder id={flip.id} onClick={toggleFavoriteFlip} style={{ color: 'red' }}></FavoriteBorder>
                        :
                        <FavoriteBorder id={flip.id} onClick={toggleFavoriteFlip}></FavoriteBorder>
                    }
                     <NoteAdd id={flip.id} onClick={toggleEdit}></NoteAdd>
                    {  editing && 
                        <div>
                            <input className="comment-input" onChange={e => setComment(e.target.value)} value={comment} ></input>
                            <button className="comment-button" onClick={submitEdit}>Submit Comment</button>
                        </div>
                    }
                    { comments[flip.id] &&
                        <div>
                            <DeleteIcon onClick={deleteFlipComment}></DeleteIcon>
                            <div>{comments[flip.id].content}</div>
                        </div>
                    }
                   
                </div>
            </div>}
        </div>
    )
}

export default Flip