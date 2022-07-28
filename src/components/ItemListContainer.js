import './ItemListContainer.css';
//import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {data} from '../mock/Data'


const ItemListContainer=(props)=> {
    
    const [listaProductos, setListaProductos] = useState([])
    
    const[mensaje, setMensaje] = useState(false)
    
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=>{
        console.log ('soy el use effect') 
        data
        .then((res)=> setListaProductos(res))
        .catch(()=> setMensaje('Error, intente mas tarde'))
        .finally(()=> setLoading(false))
    },[])
  

    return(
        <div className="saludar">
            <h2 id="hi">{props.greeting}</h2>

            {mensaje && <p>{mensaje}</p>}

            {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}

            {/*<ItemCount initial={0} stock={30} onAdd={onAdd}/>*/}
            
        </div>
    )
}
export default ItemListContainer;