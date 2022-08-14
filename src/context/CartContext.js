import { createContext, useState } from "react";
import ItemCount from "../components/ItemCount";


export const CartContext= createContext({});

const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])

   

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

    const isInCart= (item)=>{cart.some((itemIn)=> itemIn.id === item.id)}
    if (isInCart===true){
        addToCart()
        
    }
    


    const removeToCart=(itemToQuit,item, quantity)=>{
        let inCart = cart.find((item) => item.id === itemToQuit.id)
        if(inCart.quantity===1){
            const cartWithoutItem = cart.filter((item)=>item.id !== itemToQuit.id)
            console.log(cartWithoutItem)
            setCart(cartWithoutItem)
            
        }else {
            const cartWithLessItem= {...item, quantity:cart[inCart].quantity - quantity}  
            
            setCart([cartWithLessItem])
            return 
        }  
                
        console.log(inCart)
    }

    let cantInCart= 0

    cart.forEach((item)=>{
        cantInCart+=item.quantity
    })

    const valueToShare={
        cart, isInCart, cleanCart, addToCart, removeToCart, cantInCart,
    }

    return(
        <CartContext.Provider value ={valueToShare}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider