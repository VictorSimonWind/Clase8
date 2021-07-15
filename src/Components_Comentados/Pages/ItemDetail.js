/**COMPONENTE MODELO */
import React from 'react'
import { useParams } from 'react-router'

export default function ItemDetail() {

    /**useParams Puede recibir mas de una Variable */
    const {itemName,itemID} = useParams()

    return (
        <div>
           <h1> COMPONENTE DETALLE </h1>
           <h3> {itemName} </h3>
           <h3> ID = {itemID} </h3>
        </div>
    )
}
