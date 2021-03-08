import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Search from '../Search'
import {createFlip} from '../../store/flips'


const CreateFlip = () =>{
    const search = useSelector(state => state.search)

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
    
    }

    return (
        <div>
            <div className="searchHolder">
                <Search></Search>
                {   searchArr && 
                     <div> 
                        {   searchArr.map((item) => 
                            <div key={item[0]}> Item Name: {item[1].name} Item ID: {item[0]}</div>
                            )
                        }
                    </div>
                }
            </div>
            <form onSubmit={makeFlip}>
                <input type="number" placeholder="Input 1 ID" value={input1Id} onChange={e => {setInput1Id(e.target.value)}}></input>
                <input type="number" placeholder="Input 1 Quantity" value={input1Quantity} onChange={e => {setInput1Quantity(e.target.value)}}></input>
                <input type="number" placeholder="Input 2 ID" value={input2Id} onChange={e => {setInput2Id(e.target.value)}}></input>
                <input type="number" placeholder="Input 2 Quantity" value={input2Quantity} onChange={e => {setInput2Quantity(e.target.value)}}></input>
                <input type="number" placeholder="Output ID" value={outputId} onChange={e => {setOutputId(e.target.value)}}></input>
                <input type="number" placeholder="Output Quantity" value={outputQuantity} onChange={e => {setOutputQuantity(e.target.value)}}></input>
                <button type="submit">Create Flip</button>
            </form>
        </div>
    )
}

export default CreateFlip