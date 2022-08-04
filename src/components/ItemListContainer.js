import './ItemListContainer.css';
//import ItemCount from './ItemCount';
import { useEffect, useState} from 'react';
import ItemList from './ItemList';
import {data} from '../mock/Data';
import {useParams} from "react-router-dom";

const ItemListContainer=(props)=> {
    
    const [listaProductos, setListaProductos] = useState([])
    
    const[mensaje, setMensaje] = useState(false)
    
    const [loading, setLoading] = useState(true)
    
    const {category} = useParams();

    console.log(category);
    
    useEffect(()=>{
        console.log ('soy el use effect') 
        data
        .then((res)=> {
            if(category) {
                setListaProductos(res.filter((product)=> product.category===category))
            } else {
                setListaProductos(res);
            }
        })
        .catch((err)=> setMensaje(alert('Error, intente más tarde')))
        .finally(()=> setLoading(false))
    },[category]);
  

    return(
        <div className="saludar">
            <h2 id="hi">{props.greeting}</h2>

            {mensaje && <p>{mensaje}</p>}
            
            {loading ? <p>Cargando productos...</p> : <ItemList listaProductos={listaProductos}/>}

            {/*<ItemCount initial={0} stock={30} onAdd={onAdd}/>*/}
            
        </div>
    )
}
export default ItemListContainer;