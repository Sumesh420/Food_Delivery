import {StoreContext} from "./StoreContext.js"
import { food_list } from "../assets/assets.js"
import { useEffect, useState } from "react";
const UserContextProvider=({children})=>{
    const [cartItems,setCartItems]=useState({});
    const contextValue={
        
    }
    const addToCart=(itemId)=>{
if(!cartItems[itemId]){
    setCartItems(prev=>({...prev,[itemId]:1}))
}
else{
    setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
}
    }

    const removeFromCart=(itemId)=>{
        setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalAmount=()=>{
        let totalAmount=0;
        for(let item in cartItems){
            if(item>0){
             let itemInfo=food_list.find((product)=>(product._id===item));
             totalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount
    }
return(
    <StoreContext.Provider value={{
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount
        }}>
        {children}
    </StoreContext.Provider>
)
}
export default UserContextProvider