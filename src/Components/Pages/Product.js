/**COMPONENTE MODELO */
import React from 'react'
import { useEffect,useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Product() {

    const [products,setProducts] = useState([]);

    let ir = useRef(true);

    const getCategory = async () =>{
        let llamada = fetch(`http://localhost:4000/products`);
        llamada = await llamada;
        llamada = await llamada.text();
        setProducts(JSON.parse(llamada));
    }

    useEffect(() => {
        if(ir.current){
            getCategory();
            ir.current = false
        }
        
    })


    return (
        <div>
            
            <h1>COMPONENTE PRODUCTOS</h1>
            {products.map(element =>{
                return (
                   <Link to={`/Detalle/${element.title}/${element.id}`}><p> {element.title}</p>
                   </Link>
                )
            })}
        </div>
    )
}
