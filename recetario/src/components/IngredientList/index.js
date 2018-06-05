import * as React from 'react';
import './styles.css';

var ingRow;


const contains = (a, obj) => {
    console.log();
    
    for (var i = 0; i < a.length; i++) {

        if (a[i].ing.id === obj.ing.id) {
            console.log(a);
            
            return true;
        }
    }
    return false;
}

const openList = () => {
    var list = document.getElementsByClassName('ing-list');
    list[0].classList.toggle('hidden');
    var item = document.getElementsByClassName('ing-item');
    item[0].classList.toggle('hidden');
};

const chooseIngredient: Function = (x) => {

    openList();

    var xItem = document.getElementsByClassName('item');

    xItem[0].outerHTML = `<p class="item">  ${x.name} --- medida:  >${x.meassure}< </p>`;

    
    ingRow = {
        'ing': x
    };


};

const addIngredient: Function = (fun,state, from) => {
    
    var q = document.getElementsByClassName('quantity');
    var quantity = q[0].value;
    var ingPrice = quantity * ingRow.ing.price / ingRow.ing.quantity;

    ingRow = {...ingRow, quantity, ingPrice};

    var param;
    param = !contains(state.ingredientsInRecepie, ingRow);

    fun(ingRow, param, from)
    
};

const IngredientList = ({...state, ingredientes=[], putIng, }) => {
    
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

            <div>

                <input className="quantity" type='text' placeholder="Cantidad:" />

            </div>
           

            <button  onClick={() => addIngredient(putIng, state, 'button')} >Agregar a la receta</button>
        </React.Fragment>
        // <Recepie />
    )
}

export default IngredientList;

