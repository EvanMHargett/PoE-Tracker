import React from 'react'
import {useState} from 'react'

const onSearchName = (e) =>{
    e.preventDefault()

}

const [searchTerm, setSearchTerm] = useState('')

const Search = () =>{
    return (
        <form onSubmit={onSearchName}>
            <div>
              <input onChange={e => {setSearchTerm(e.target.value)}} type='search' placeholder='Search for flips by name' style={{ border: 'none' }} value={searchTerm}></input>
            </div>
        </form>
    )
}

export default Search