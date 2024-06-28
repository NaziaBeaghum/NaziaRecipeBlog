import React, { useContext, useEffect, useState } from "react";
import'./Search.css'
import SearchIcon from '@mui/icons-material/Search';
import Emptyfiltered from "./Emptyfiltered";
import axios from "axios";
import { Context } from "../Context/Contextapi";
import { useNavigate } from "react-router-dom";
import Newfiltered from "./Newfiltered";

const Search=()=>{
    const navigate=useNavigate()
    // const{state:{filteredrecipes},dispatch}=useContext(Context)
    const[searchText,setSearchText]=useState("")
   
       
     const handleSubmit=(e)=>
    {if(searchText){
        e.preventDefault()
        navigate(`/Newfiltered/${searchText}`)
        setSearchText("")
        
    }
    
       
    }
    
        // if(filteredrecipes.length>0)
        // {
        //     setSearchText("")
        //     navigate('/Newfiltered')
        //     console.log(filteredrecipes.length)
        // }
        // else
        // {
        //     
        //     
        // }
    //    filteredrecipes.forEach(element => {
        // const new_filter=[]
        // if(element.name.includes(searchText))
        // new_filter.push(element)
    
        // console.log(new_filter)
        // new_filter?navigate('/Newfiltered'):navigate('/Emptyfiltered')
      
     

return(
    
    <div className="search_container">
       
            <form onSubmit={handleSubmit}>
                <div className="search">
                <input type="text" 
                    placeholder="...Search for a recipe"  
                    className="search_input"
                    onChange={(e)=> setSearchText(e.target.value)}
                    value={searchText}/>
                <SearchIcon className="search_icon" type="submit" />
                </div>
            </form>
        
        
    </div>
    )
}
export default Search