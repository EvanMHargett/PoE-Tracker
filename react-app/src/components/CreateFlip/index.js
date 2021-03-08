import React, {useState} from 'react'
import {useSelector} from 'react-redux'

const CreateFlip = () =>{
    const search = useSelector(state => state.search)
    const [input1Id, setInput1Id] = useState('')
    const [input1Quantity, setInput1Quantity] = useState('')
    const [input1Id, setInput1Id] = useState('')
    const [input2Quantity, setInput2Quantity] = useState('')
    const [outputId, setOutputId] = useState('')
    const [outputQuantity, setOutputQuantity] = useState('')
    return (
        <div>
            <form onSubmit={makeFlip}>
                <input type="number" placeholder="Input 1 ID" value={input1Id} onChange={e => {setInput1Id(e.target.value)}}></input>
            </form>
        </div>
    )
}

export default CreateFlip