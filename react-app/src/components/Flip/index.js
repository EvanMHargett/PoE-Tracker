import React from 'react'
import "./Flip.css";
import { FavoriteBorder, NoteAdd} from '@material-ui/icons'

function Flip({flip}){
    console.log("flip in component", flip)

    return (
        <div className="container-fluid">
            {flip && <div>
                <span>Total Cost: {flip.cost}  </span> 
                <span>Total Revenue: {flip.revenue}  </span>
                <span>Profit: {flip.profit}  </span>
                <span>Trades Required: {flip.trades}  </span>
                <FavoriteBorder></FavoriteBorder>
                <NoteAdd></NoteAdd>
            </div>}
        </div>
    )
}

export default Flip