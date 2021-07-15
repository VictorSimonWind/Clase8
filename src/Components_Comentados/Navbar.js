import React from 'react'
/**para manipular las direccion debemos importar el elemento Link o NavLink */
import { Link, NavLink } from 'react-router-dom'



/**los Link, son tomados por nuestro sistema como la etiqueta "a" de html 
 * en donde la propiedad to sirve para indicarle la ruta dentro de nuestra
 * pagina que la misma debe seguir
*/
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
                            <NavLink to='/Productos/Categoria/Placas-de-video' activeClassName='link_actual'>Placas de Video</NavLink>   
                            </li>
                            <li>
                            <NavLink to='/Productos/Categoria/Procesadores'>Procesadores</NavLink>
                            </li>
                            <li>
                            <NavLink to='/Productos/Categoria/perifericos'>Perifericos</NavLink>
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
