import React, {useState} from 'react'
import ItemCount from './ItemCount';


const Item=({producto})=>{

    const[mensaje, setMensaje] = useState(false)
    const {id,name, price, stock, img }=producto

    const onAdd=(cantidad)=>{
        if (cantidad !=0) {
            setMensaje(`Agregaste ${cantidad} productos al carrito`)
        }
    }

    return(
        <div style={{ width: '18rem' }}>
            <img src={producto.img} className= "car-img-top" alt={producto.name} />
            <div className="card-body">
                <h4 className="card-title">{producto.name}</h4>
                <p className="card-text"> Precio: ${producto.price} </p>
                <p className="card-text"> Unidades en stock: {producto.stock} </p>
                <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default Item