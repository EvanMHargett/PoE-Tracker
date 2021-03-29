import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Search from '../Search'
import {createFlip} from '../../store/flips'
import "./CreateFlip.css"


const CreateFlip = () =>{
    const search = useSelector(state => state.search)

    const history = useHistory()

    const [input1Id, setInput1Id] = useState('')
    const [input1Quantity, setInput1Quantity] = useState('')
    const [input2Id, setInput2Id] = useState('')
    const [input2Quantity, setInput2Quantity] = useState('')
    const [outputId, setOutputId] = useState('')
    const [outputQuantity, setOutputQuantity] = useState('')

    const dispatch = useDispatch()

    let searchArr = []
    if(search){
        searchArr =Object.entries(search)
    }

    const makeFlip = (e) =>{
        e.preventDefault()
        dispatch(createFlip({
            "input1Id": input1Id,
            "input2Id": input2Id,
            "outputId": outputId,
            "input1Quantity": input1Quantity,
            "input2Quantity": input2Quantity,
            "outputQuantity": outputQuantity,
        }))
        history.push('/')
        
    }

    return (
        <div className="page-container create-container">
            <div className="container">
                
                    <Search></Search>
                    {   searchArr && 
                        <div className="searchArr"> 
                            {   searchArr.map((item) => 
                                <div key={item[0]}> Item Name: {item[1].name} Item ID: {item[0]}</div>
                                )
                            }
                        </div>
                    }
       
                <form onSubmit={makeFlip} className="flipForm">
                    <div >
                        <div class="form-group">
                            <input type="number" className="form-control" placeholder="Input 1 ID" value={input1Id} onChange={e => {setInput1Id(e.target.value)}}></input>
                        </div>
                        <div class="form-group">
                            <input type="number" className="form-control" placeholder="Input 1 Quantity" value={input1Quantity} onChange={e => {setInput1Quantity(e.target.value)}}></input>
                        </div>
                        {/* <input type="number" placeholder="Input 2 ID" value={input2Id} onChange={e => {setInput2Id(e.target.value)}}></input>
                        <input type="number" placeholder="Input 2 Quantity" value={input2Quantity} onChange={e => {setInput2Quantity(e.target.value)}}></input> */}
                        <div class="form-group">
                            <input type="number" className="form-control" placeholder="Output ID" value={outputId} onChange={e => {setOutputId(e.target.value)}}></input>
                        </div>
                        <div class="form-group">
                            <input type="number" className="form-control" placeholder="Output Quantity" value={outputQuantity} onChange={e => {setOutputQuantity(e.target.value)}}></input>
                        </div>
                        <div class="form-group">
                            <button className="flip-button"type="submit">Create Flip</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateFlip