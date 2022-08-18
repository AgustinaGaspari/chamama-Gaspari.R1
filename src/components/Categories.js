import {collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export default function Categories () {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        const db=getFirestore()

        const categoriesCollection = collection(db, 'categories')

        getDocs(categoriesCollection)
            .then((snapshot) =>{
                setCategories(snapshot.docs.map((doc)=> doc.data().name))

            })
            .catch((error)=> console.error(error));

    },[])

    return(
        <>
            { categories.map((el)=>{
                <Nav className='nav-item' key={el}>
                    <Link to={'/category/'+ el}>
                        {el.toUpperCase()}
                    </Link>
                </Nav>
                })
            }
        </>
    )
}