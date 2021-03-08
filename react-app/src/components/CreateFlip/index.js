import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Search from '../Search'

const CreateFlip = () =>{
    const search = useSelector(state => state.search)
    const [input1Id, setInput1Id] = useState('')
    const [input1Quantity, setInput1Quantity] = useState('')
    const [input2Id, setInput2Id] = useState('')
    const [input2Quantity, setInput2Quantity] = useState('')
    const [outputId, setOutputId] = useState('')
    const [outputQuantity, setOutputQuantity] = useState('')
    const makeFlip = (e) =>{
        e.preventDefault()
    }
    return (
        <div>
            <div className="searchHolder">
                <Search></Search>
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