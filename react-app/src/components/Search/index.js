import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {searchItemName} from '../../store/search'




const Search = () =>{
    const dispatch = useDispatch()
    const onSearchName = (e) =>{
        e.preventDefault()
        dispatch(searchItemName(searchTerm))
    }

    const [searchTerm, setSearchTerm] = useState('')


    return (
        <form onSubmit={onSearchName}>
            <div>
              <input onChange={e => {setSearchTerm(e.target.value)}} type='search' placeholder='Search for flips by name' style={{ border: 'none' }} value={searchTerm}></input>
            </div>
        </form>
    )
}

export default Search