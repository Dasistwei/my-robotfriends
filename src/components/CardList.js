import React from "react"
import Card from "./Card"

const CardList = ({robotsData})=>{
  return(
    <div className="card-wraper">
    {robotsData.map(robot=> 
      <Card  key = {robot.id} email ={robot.email} name ={robot.name} />
    )}
  </div>
  )
}

export default CardList