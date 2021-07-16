/**COMPONENTE MODELO */
import React from 'react'
import { useParams } from 'react-router'
import {useState, useEffect} from 'react'

export default function ItemDetail() {

    const {itemName,itemID} = useParams()
    const [product, setproduct] = useState([])

    const getproduct = async () =>{
        let llamada = fetch(`http://localhost:4000/product/${itemID}`);
        llamada = await llamada;
        llamada = await llamada.text();
        llamada = JSON.parse(llamada);
        setproduct(llamada)


    }

    useEffect(() => {
        getproduct()
        
    }, )



    return (
        <div>
           <h1> COMPONENTE DETALLE </h1>
           <h3> {itemName} </h3>
           <h3> ID = {itemID} </h3>
           {product.map(element =>{
               return (
                   <h1>{element.title}</h1>
               )
           })}
        </div>
    )
}
