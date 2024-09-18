import { useReducer } from "react"
import { Type } from "./action.Type"
export const initialstate= {
basket:[]
}
export const reducer = (state,action)=>{
switch(action.type){
case Type.ADD_To_Basket:
    // return {
    //   ...state,
    //   basket:[...state.basket,action.item],
    // };
    const existingitem= state.basket.find((item)=>item.id === action.item.id)
    if(!existingitem){
      return {
        ...state,
          basket:[...state.basket,{...action.item,amount:1}],
      };
    }else{
      const Updatedbasket = state.basket.map((item)=>{
        item.id === action.item.id?{
          ...item,amount:item.amount +1
        }:item
      })
      return {
        ...state,
        basket:Updatedbasket
      }
    }
    default:
        return state;
    
}
}

