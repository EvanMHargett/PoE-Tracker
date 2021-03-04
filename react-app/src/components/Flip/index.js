import React from 'react'
import "./Flip.css";
import { FavoriteBorder} from '@material-ui/icons'

function Flip({flip}){
    console.log("flip in component", flip)

    return (
        <tr className="container-fluid">
            {flip && <div>
                <td>{flip.profit}  </td>
                <td>{flip.revenue}  </td>
                <td>{flip.trades}  </td>
                <td>{flip.cost}</td> 
                <FavoriteBorder></FavoriteBorder>
            </div>}
        </tr>
    )
}

export default Flip