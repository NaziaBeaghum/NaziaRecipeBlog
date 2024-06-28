import React, { createContext, useReducer } from "react";
import { recipereducer } from "./reducer";
export const Context=createContext()

export const initialstate={recipes:[],
                     fiteredrecipes:[],
                     detailedrecipe:[]
                    }


const Contextapi=({children})=>{
    const [state,dispatch]=useReducer(recipereducer,initialstate) 
    console.log(state.recipes)
    return(
        <div>
            <Context.Provider value={{state,dispatch}}>
                {children}
            </Context.Provider>
        </div>
    )
 
}
export default Contextapi