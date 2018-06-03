import * as React from 'react';
import './style.css'


const Ingredient = ({name, quantity, meassure, price, provider, category, image}) => {
    
    return (
        <div>
            <img className="card-img" width="100%" src={image} alt={name} />
            <div className="card-body" >
                <h2>{name} {quantity}{meassure}</h2>
                <h3>Precio : ${price}</h3>
                <ul>
                    <li>Proveedor : {provider}</li>
                    <li>Categorias : {category}</li>
                </ul>
            </div>
        </div>
    );
     
}

export default Ingredient;