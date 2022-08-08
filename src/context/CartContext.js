import { createContext, useState } from "react";
import ItemCount from "../components/ItemCount";


export const CartContext= createContext({});

const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])

    const isInCart= ()=>{}

    const cleanCart=()=>{
        setCart([])
    }

    const addToCart= (item, quantity)=>{
        console.log({item, quantity});
        if (cart.length === 0){
            const itemToAdd ={
                ...item,
                quantity:quantity
            }
            
            setCart([itemToAdd])
            return
        }
        
        const itemDuplicateIndex =cart.findIndex((itemInTheCart)=> itemInTheCart.id === item.id)

        if(itemDuplicateIndex>=0){
            const itemToUpdate= {
                ...item,
                quantity: cart[itemDuplicateIndex].quantity + quantity
            }

            const cartDraft= [...cart]

            cartDraft[itemDuplicateIndex] = itemToUpdate
            setCart(cartDraft)
        }else{
            const itemToAdd={
                ...item,
                quantity: quantity
            }
        
            const cartDraft=[...cart, itemToAdd]

            setCart(cartDraft)
        }
    }

    const removeToCart=()=>{}

    const valueToShare={
        cart, isInCart, cleanCart, addToCart, removeToCart, cantInCart: cart.length,
    }

    return(
        <CartContext.Provider value ={valueToShare}>
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider