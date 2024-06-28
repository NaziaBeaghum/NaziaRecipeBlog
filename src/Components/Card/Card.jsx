import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/Contextapi'
import './Card.css'
import { useNavigate } from 'react-router-dom'
import Recipedetail from './Recipedetail'
 import { Link } from 'react-router-dom'
 import axios from 'axios'
 import { useState } from 'react'

const Card = ({item:{image,name,id}}) => {
  const{state:{recipes},dispatch}=useContext(Context)
  const navigate=useNavigate()
  
  
  return (
    <div className='card_container'>

       <Link to={`/Recipedetail/${id}`}> 
      <img src={image} alt="" className='recipe_image'/>
       <p className='recipe_name'  >{name} </p>
       </Link> 
       
    </div>
  )
}

export default Card