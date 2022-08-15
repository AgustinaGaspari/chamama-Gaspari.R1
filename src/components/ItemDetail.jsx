import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from "./ItemCount";


const ItemDetail =({item})=>{
    
    const {id, name, description, price, stock, img } = item;
    const {addToCart}= useContext(CartContext);
    /*const {removeToCart, cleanCart} = useContext(CartContext)*/
    const[mensaje, setMensaje] = useState(false);
    const [count, setCount]= useState(0)
    /*const onAdd=(cantidad)=>{
        if (cantidad != 0) {
            setMensaje(alert(`Agregaste ${cantidad} productos al carrito`));
        }
    }*/
    
    const handleAdd =(quantityToAdd)=>{
        setCount(quantityToAdd)
        addToCart(item, quantityToAdd)
    }

    /*const handleQuit = (item, quantity)=>{
        removeToCart(item, quantity)
        cleanCart()
    }*/

    useEffect(() => {
        console.log ({count})
    }, [count])

    return(
        <div>
            <h3 className="card-title" id= "titulo"> 
                {name}
            </h3>  
            <p className="card-text" id="description"> 
                Descripción: {description} 
            </p>
            <img src={img} className= "car-img-top img-fluid" alt={name}/>
            <p className="card-text"> Precio: $ {price} </p>
            <p className="card-text"> Unidades en stock: {stock} </p>
            <ItemCount  initial={0} stock={stock} onAdd={handleAdd}/>
        </div>
        
    )
}

export default ItemDetail;