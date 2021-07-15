import React from 'react'
import { useParams } from 'react-router'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Categories() {

    const [productsCategory,setProductsCategory] = useState([]);

    const {categoriaID} = useParams();

    const getCategory = async () =>{
        let llamada = fetch(`http://localhost:4000/product/category/${categoriaID}`);
        llamada = await llamada;
        llamada = await llamada.text();
        setProductsCategory(JSON.parse(llamada));
    }

    useEffect(() => {
        getCategory();
    })

    return (
        <div>
            <h1>CATEGORIA {categoriaID}</h1>
            {productsCategory.map(element =>{
                return (
                   <link to='/Detalle/'><p> {element.title}</p>
                   </link>
                )
            })}
        </div>
    )
}
