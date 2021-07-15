import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nb_container flex flow-r'>
            <div className='nb_logo'>
                <h3>PRACTICA ROUTER</h3>
            </div>
            <div className='nb_link'>
                <ul className=' flex'>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li className='nb_category'>
                    <Link to='/Productos'>Producto</Link>
                        <ul className='menu_DD flex flow-c' >
                            <li>
                                <Link to='/Productos/Categoria/Tarjetas-de-video'>Producto</Link>   
                            </li>
                            <li>
                            <Link to='/Productos/Categoria/Procesadores'>Producto</Link>
                            </li>
                            <li>
                            <Link to='/Productos/Categoria/Perifericos'>Producto</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <Link to='/Carrito'>Carrito</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
