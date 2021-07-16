import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nb_container flex flow-r'>
            <div className='nb_logo flex'>
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
                            <NavLink to='/Productos/Categoria/Placas-de-video' activeClassName='activo'>Placas de Video</NavLink>   
                            </li>
                            <li>
                            <NavLink to='/Productos/Categoria/Procesadores' activeClassName='activo'>Procesadores</NavLink>
                            </li>
                            <li>
                            <NavLink to='/Productos/Categoria/perifericos' activeClassName='activo'>Perifericos</NavLink>
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
