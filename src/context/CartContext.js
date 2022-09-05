import { createContext, useState } from "react";


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

    const isInCart= (id)=> cart.find((item)=> item.id === id)? true : false            
    
    const totalPrice = ()=>{
        return (
            cart.reduce((prev, act)=> prev + act.quantity*act.price , 0)
        )
    }

    const removeToCart=(id)=>{
        const removeItem=(cart.filter(item => item.id !== id))
        setCart(removeItem)
    }

    let cantInCart= 0

    cart.forEach((item)=>{
        cantInCart+=item.quantity
    })

    const valueToShare={
        cart, isInCart, totalPrice, cleanCart, addToCart, removeToCart, cantInCart,
    }

    return(
        <CartContext.Provider value ={valueToShare}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider