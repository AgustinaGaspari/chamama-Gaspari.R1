import './ItemListContainer.css';
import { useEffect, useState} from 'react';
import ItemList from './ItemList';
import {useParams} from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemListContainer=(props)=> {
    
    const [listaProductos, setListaProductos] = useState([])

    const[mensaje, setMensaje] = useState(false)
    
    const [loading, setLoading] = useState(true)
    
    const {id} = useParams();

    useEffect(()=>{
        
        const db= getFirestore();
    
        const itemsCollection = collection(db,"items")
        if(id){
            
            getDocs(query(itemsCollection, where("category", "==", id)))
                .then((snapshot)=>
                setListaProductos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
                  
            )
            .catch((error)=> console.error(error))
            .finally(()=> setLoading(false))
            
        } else{
            getDocs(itemsCollection)
                .then((snapshot)=>
                    setListaProductos(snapshot.docs.map((product)=>({...product.data(), id: product.id})))
                    
                )
                .catch(()=> setMensaje(Swal.fire({
                    icon:'error',
                    text:'Error, intente más tarde',
                    showConfirmButton: false,
                    timer:2000,
                })))
                .finally(()=> setLoading(false))
        }
    
    },[id])
  

    return(
        <div className="saludar">
            <h2 id="hi">{props.greeting}</h2>

            {mensaje && <p>{mensaje}</p>}
            
            {loading ? <p>Cargando productos...</p> : <ItemList listaProductos={listaProductos}/>}
            
        </div>
    )
}
export default ItemListContainer;