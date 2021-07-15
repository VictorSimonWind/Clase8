import React from 'react'
import { useParams } from 'react-router'

export default function Categories() {

    const {categoriaID} = useParams();

    return (
        <div>
            <h1>CATEGORIA {categoriaID}</h1>
        </div>
    )
}
