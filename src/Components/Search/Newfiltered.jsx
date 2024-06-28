import React, { useContext } from 'react'
import { Context } from '../Context/Contextapi'
import './Search.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Pages/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import '../../Components/Card/Card.css'

const Newfiltered = () => {
 const{state:{recipes},dispatch}=useContext(Context)
 const {searchText}=useParams()
 const navigate=useNavigate()
 useEffect(()=>{axios.get(`https://dummyjson.com/recipes/search?q=${searchText}`)
 .then(res=>dispatch({type:"ALL_RECIPES",payload:res.data.recipes}))
},[searchText])
console.log(searchText)
 const handleClick=(id)=>{
 
  navigate(`/Recipedetail/${id}`)
  console.log("clicked")
}
  return (
    
    <div className='filtered_container'>
     
      {recipes.map((item)=>(<div className='filtered_recipes' key={item.id}>
           <img src={item.image} alt=""  width="300px"  onClick={()=>handleClick(item.id)}></img>
           <p className='recipe_name'  onClick={()=>handleClick(item.id)}>{item.name}</p>
           </div>)
           )}
    </div>
  )
}

export default Newfiltered