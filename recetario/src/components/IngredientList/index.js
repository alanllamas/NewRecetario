import * as React from 'react';
import './styles.css';
import {
    FormControl, 
    ControlLabel, 
    FormGroup, 
    Form,
} from 'react-bootstrap';

import  colors from '../../palette.css';

const ingRow = {};

console.log(colors);

const openList = () => {
    var list = document.getElementsByClassName('ing-list');
    list[0].classList.toggle('hidden');
    var item = document.getElementsByClassName('ing-item');
    item[0].classList.toggle('hidden');
};

const chooseIngredient: Function = (x) => {

    openList();

    var xItem = document.getElementsByClassName('item');
    xItem[0].outerHTML = '<p class="item">' +x.name + ' | ' + 'medición: --' + x.meassure + ' --</p>';

    this.ingRow = {
        'ing': x
    };
    // console.log('x: ',x);
}

const addIngredient: Function = (state) => {
    var q = document.getElementsByClassName('quantity');
    var quantity = q[0].value;
    var ingPrice = quantity * this.ingRow.ing.price / this.ingRow.ing.quantity;

    this.ingRow = {...this.ingRow, quantity, ingPrice};
    console.log({...this.ingRow});
    // setState({ingRecepie:{...this.ingRow}});




};

const IngredientList = ({ingredientes}) => {
    return(
        <React.Fragment>
        <div className="ing-list hidden">
            {
                ingredientes.map((x) => {
                    return (

                        <p key={x.id} onClick={()=> chooseIngredient(x)}>{x.name}</p>

                    )
                })
            }
        </div>
        <div className="ing-item" onClick={()=> openList()}>
            <p className="item">Escoge un ingrediente</p>
        </div>
        <React.Fragment>
            <Form>
                <FormGroup>
                    <ControlLabel>Cantidad:</ControlLabel>
                        <FormControl
                            type="text"
                            className="quantity"
                        >
                            {/* <input className="quantity" type='text' /> */}
                        </FormControl>
                    {/* <p>{meassure}</p> */}
                </FormGroup>
            </Form>

                <button  onClick={() => addIngredient()} >Agregar a la receta</button>

        </React.Fragment>
        </React.Fragment>
    )
}

export default IngredientList;
