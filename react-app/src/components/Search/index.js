import React from 'react'
import {useState} from 'react'



const Search = () =>{
    const onSearchName = (e) =>{
        e.preventDefault()
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