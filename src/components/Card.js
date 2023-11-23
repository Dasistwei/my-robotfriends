import React from 'react'

const Card = ({name, email})=>{
  return(
    <div className="card tc dib br3 pa3 grow bw2 shadow-1" >
      <img src={`https://robohash.org/${name}?size=200x200`} alt="" />
      {/* <img src={`https://robohash.org/${name}.png?set=set4&size=150x150`} alt="" /> */}
      {/* <img src={`https://robohash.org/${name}.png?set=set2&size=150x150`} alt="" /> */}
      <h1>{name}</h1>
      <p>{email}</p>
  </div>    
  )
}

export default Card;