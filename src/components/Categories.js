import {collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Categories () {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        const db=getFirestore()

        const categoriesCollection = collection(db, "categories");

        getDocs(categoriesCollection)
            .then((snapshot) =>
                setCategories(snapshot.docs.map((doc)=> doc.data().name))

            )
            .catch((error)=> console.error(error));

    },[])

    return(
        <>
            { categories.map((el)=>
                <li className='nav-item' key={el}> 
                    <Link to={'/category/'+ el} style={{color:'black', padding:'20px', textDecoration:'none'}}> {el.toUpperCase()}</Link>
                </li>
                )
            }
        </>
    )
}