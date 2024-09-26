import { useReducer } from "react"
import { Type } from "./action.Type"
export const initialstate= {
basket:[],
user: null
}
export const reducer = (state,action)=>{
switch(action.type){
case Type.ADD_To_Basket:
   
    const existingitem= state.basket.find((item)=>item.id === action.item.id)
    if(!existingitem){
      return {
        ...state,
          basket:[...state.basket,{...action.item, amount:1}],
      };
    }else{
      const Updatedbasket = state.basket.map((item)=>{
        return item.id === action.item.id?{
          ...item,amount:item.amount +1
        }:item
      })
      return {
        ...state,
        basket:Updatedbasket
      }
    }
    case Type.REAMOVE_From_basket:
       const index = state.basket.findIndex(
         item => item.id === action.id
       );
       let newbasket = [...state.basket];
       if(index >=0){
        if(newbasket[index].amount>1){
          newbasket[index]={...newbasket[index],amount: newbasket[index].amount-1}
        }else{
          newbasket.splice(index,1)
        }
       }
       return {
        ...state,
        basket:newbasket

       }
       case Type.EMPTY_BASKET:
        return{
          ...state,
          basket:[],

        }
       case Type.SET_USER:
        return{
          ...state,
          user:action.user,
          
        }
    default:
        return state;
    
}
}

