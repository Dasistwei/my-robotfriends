import React from 'react'

const SearchBar = ({handleOnChange})=>{
  return(
    <div className="header tc pa2">
    <h1 className='f1'>Robot Friends</h1>
    <input type="text" placeholder='search robot...' onChange = {handleOnChange} />
  </div>    
  )
}

export default SearchBar;