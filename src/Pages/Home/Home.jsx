import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { Context } from '../../Components/Context/Contextapi'
import Card from '../../Components/Card/Card'
import Navbar from '../Navbar/Navbar'

const Home = () => {
    const{state:{recipes},dispatch}=useContext(Context)
    useEffect(()=>{
        axios.get("https://dummyjson.com/recipes")
        .then(response=>dispatch({type:"ALL_RECIPES",payload:response.data.recipes}))
    },[])
  return (
   
   <div className="container">

    
    <div className='home_container'>
     
      {recipes.map(item=>(<div key={item.id}>
        <Card item={item}/>
      </div>))}
     
    </div>
    </div>    
  )
}

export default Home