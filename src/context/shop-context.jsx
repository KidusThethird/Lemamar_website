import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart ={};
     for(let i=1; i<PRODUCTS.length + 1; i++){
        cart[i]= 0;
     } 
     return cart;
}
 
export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    let [totalCartItems, setTotalCartItems] = useState(0);
 

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, totalCartItems}

   

   React.useEffect(()=>{
    let total = 0;
    for (let i = 1; i <= PRODUCTS.length; i++) {
      total += cartItems[i];
    }
    setTotalCartItems(total);
    console.log(total);
   },[cartItems])
   
   
        return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
