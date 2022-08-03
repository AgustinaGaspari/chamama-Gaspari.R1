import React, {useState} from 'react'
import ItemCount from './ItemCount';
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
        <div>
            <Link to={`/item/${id}`}>
                <div style={{ width: '18rem' }}>
                    <img src={producto.img} className= "car-img-top img-fluid" alt={producto.name} />
                    <div className="card-body">
                        <h3 className="card-title">{producto.name}</h3>
                        <p className="card-text"> Precio: ${producto.price} </p>
                        <p className="card-text"> Unidades en stock: {producto.stock} </p>
                        
                    </div>
                </div>
            </Link>
            <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
        </div>
    
    )
}

export default Item;