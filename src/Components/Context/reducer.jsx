import { initialstate } from "./Contextapi"

export const recipereducer=(state=initialstate,action)=>{
    switch(action.type)
    {
        case "ALL_RECIPES":{
            return{...state,recipes:action.payload}
            
        }
        case "FILTERED_RECIPES":
            {
                return{
                    ...state,filteredrecipes:action.payload
                }
            }
        case "DETAILED_RECIPE":
            {
                return{
                    ...state,detailedrecipe:action.payload
                }
            }
    }

}