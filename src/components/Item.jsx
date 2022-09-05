import React, {useState} from 'react'
import {Link} from "react-router-dom";
import  './ItemListContainer.css';

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
            <Link to={`/item/${id}`} style={{color:'black'}}>
                <div style={{ width: '20rem' }}> 
                    <div className="card-body">
                        <h3 className="card-title">{producto.name}</h3>
                    </div>
                    <img src={producto.img} className= "car-img-top img-fluid" alt={producto.name} />
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