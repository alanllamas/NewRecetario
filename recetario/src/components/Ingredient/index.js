import * as React from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button 
// } from 'reactstrap';
import './style.css'
import {  Col } from 'react-bootstrap';

const Ingredient = ({name, quantity, meassure, price, provider, category, image}) => {
    console.log(name);
    
    return (
            

        
            <div>
                <img className="card-img" top width="100%" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h2>{name} {quantity}{meassure}</h2>
                    <h3>Precio : ${price}</h3>
                    {/* <CardText> */}
                    <ul>
                        <li>Proveedor : {provider}</li>
                        <li>Categorias : {category}</li>
                    </ul>
                    {/* </CardText> */}
                    {/* <Button>Button</Button> */}
                </div>
            </div>

            
            
            
       
    );
     
}

export default Ingredient;


//         "name": "agua",
//         "quantity": 20,

//         "meassure": "lts",
//         "price": 45.0,
//         "category": "abarrotes"