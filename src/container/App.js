import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar';
import '../robot.css';
import 'tachyons'

const App = () =>{
  const [inputValue, setInputValue] = useState('')
  const [robots, setRobots] = useState('')
  const robotsData = robots&&robots.filter(robot=> robot.name.toLowerCase().includes(inputValue))
  
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>setRobots(data))
    
  },[])
  
  const handleScrollBtn = () =>{
    document.documentElement.scrollTop = 0

  }
  
  const handleOnChange = (e)=>{
    setInputValue(e.target.value)
  }
  return (
    <div className="container">
      <SearchBar handleOnChange = {handleOnChange}/>
      <button className='toTopBtn' onClick={handleScrollBtn}>↑</button>
      {robotsData&&
        <CardList robotsData = {robotsData}/>
      }
    </div>
  )
}



export default App;
