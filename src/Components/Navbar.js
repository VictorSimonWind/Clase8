import React from 'react'

export default function Navbar() {
    return (
        <div className='nb_container flex flow-r'>
            <div className='nb_logo'>
                <h3>PRACTICA ROUTER</h3>
            </div>
            <div className='nb_link'>
                <ul className=' flex'>
                    <li>Inicio</li>
                    <li className='nb_category'>Producto
                        <ul className='menu_DD flex flow-c' >
                            <li>Categoria 1</li>
                            <li>Categoria 2</li>
                            <li>Categoria 3</li>
                        </ul>
                    </li>
                    <li>Carrito</li>
                </ul>
            </div>
        </div>
    )
}
