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
    useEffect(()=>{
        console.log(cartItems)
    },[cartItems]);
return(
    <StoreContext.Provider value={{
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
        }}>
        {children}
    </StoreContext.Provider>
)
}
export default UserContextProvider