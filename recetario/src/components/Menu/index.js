import * as React from 'react';

import {
    NavLink,
} from 'react-router-dom';

import './style.css'


const Menu = () => {
    
    return (
        <nav>
            <NavLink to="#">RECETARIO</NavLink>
            <ul>
                <NavLink to="/ingredientes"><li>Ingredientes</li></NavLink>
                <NavLink to="/proveedores"><li>Proveedores</li></NavLink>
                <NavLink to="/crear-receta"><li>Nueva Receta</li></NavLink>
            </ul>
            
        </nav>
    );
     
}

export default Menu;