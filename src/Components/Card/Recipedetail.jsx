import React, { useContext } from 'react'
import { Context } from '../Context/Contextapi'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Recipedetail = () => {
    const{state:{detailedrecipe},dispatch}=useContext(Context)
    const {id}=useParams()
    console.log(id)
    
    const item=detailedrecipe
     useEffect(()=>{
    
       axios.get(`https://dummyjson.com/recipes/${id}`)
  //  .then((res)=>console.log(res.data))
    .then( res=>dispatch({type:"DETAILED_RECIPE",payload:res.data}))
      
    
    
  },[])
   
  return (
    <div className='recipe_container'>
      
       <img src={item.image} alt="" width="250px" className='detailed_img' /> 
      <p style={{textAlign:"center" ,fontWeight:"700",fontSize:"1.4em"}}>{item.name}</p>
      <div className="flex_parent">

        <div className="flex_child">
            <p style={{fontWeight:"600"}}>cookTimeMinutes:{item.cookTimeMinutes}</p>
            <p style={{fontWeight:"600"}}>prepTimeMinutes:{item.prepTimeMinutes}</p>
        </div>

        <div className="flex_child">
           <p style={{fontWeight:"600"}}>mealtype:{item.mealType}</p>
           <p style={{fontWeight:"600"}}>servings:{item.servings}</p>
        </div>
      </div>

      <div className="ingredients">
      <p style={{fontWeight:"600"}}>Ingredients:</p>
        {item?.ingredients?.map((ingredients)=>(<div key={ingredients.id} >
        <ul>  
          <li >{ingredients}</li>
        </ul>
        </div>))}
      </div>
     
      <div className="instructions">
      <p style={{fontWeight:"600"}}>Instructions:</p>
        {item?.instructions?.map((instructions)=>(<div key={instructions.id} >
        <ul>  
          <li >{instructions}</li>
        </ul>
        </div>))}
      </div>

      
    </div>
  )
}

export default Recipedetail
/*caloriesPerServing
: 
300
cookTimeMinutes
: 
15
cuisine
: 
"Italian"
difficulty
: 
"Easy"
id
: 
1
image
: 
"https://cdn.dummyjson.com/recipe-images/1.webp"
ingredients
: 
(6) ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste']
instructions
: 
(6) ['Preheat the oven to 475°F (245°C).', 'Roll out the pizza dough and spread tomato sauce evenly.', 'Top with slices of fresh mozzarella and fresh basil leaves.', 'Drizzle with olive oil and season with salt and pepper.', 'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.', 'Slice and serve hot.']
mealType
: 
['Dinner']
name
: 
"Classic Margherita Pizza"
prepTimeMinutes
: 
20
rating
: 
4.6
reviewCount
: 
3
servi*/