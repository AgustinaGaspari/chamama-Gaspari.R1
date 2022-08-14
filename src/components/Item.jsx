import React, {useState} from 'react'
import {Link} from "react-router-dom";

const Item = ({producto})=>{

    const[mensaje, setMensaje] = useState(false)
    const {id,name, description, price, stock, img }= producto

    const onAdd=(cantidad)=>{
        if (cantidad !=0) {
            setMensaje(`Agregaste ${cantidad} productos al carrito`)
        }
    }

    return(
        <>
        
            <Link to={`/item/${id}`}>
                <div style={{ width: '18rem' }}>
                    <img src={producto.img} className= "car-img-top img-fluid" alt={producto.name} />
                    <div className="card-body">
                        <h3 className="card-title">{producto.name}</h3>
                    </div>
                </div>
            </Link>
            <div>
                <p className="card-text"> Precio: ${producto.price} </p>
                <p className="card-text"> Unidades en stock: {producto.stock} </p>        
            </div>
        
        </>    
    
    )
}

export default Item;