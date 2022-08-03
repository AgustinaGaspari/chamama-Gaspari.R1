import React, {useState} from 'react'
import ItemCount from "./ItemCount";


const ItemDetail =({item})=>{
    
    const {id, name, description, price, stock, img } = item
    const[mensaje, setMensaje] = useState(false)

    const onAdd=(cantidad)=>{
        if (cantidad !=0) {
            setMensaje(alert(`Agregaste ${cantidad} productos al carrito`))
        }
    }

    return(
        <div>
            <h3 className="card-title" id= "titulo"> {item.name}</h3>  
            <p className="card-text" id="description"> Descripción: {item.description} </p>
            <img src={item.img} className= "car-img-top img-fluid" alt={item.name}/>
            <p className="card-text"> Precio: $ {item.price} </p>
            <p className="card-text"> Unidades en stock: {item.stock} </p>
            <ItemCount  initial={0} stock={stock} onAdd={onAdd} />
        </div>
        
    )
}

export default ItemDetail;