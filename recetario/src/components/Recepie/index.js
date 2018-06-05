import * as React from 'react';
import './styles.css';

const Recepie = ({...state, ingredientsInRecepie, quitIng}) => {
    var quantity = 0;
    var cost = 0;
    return(
        <React.Fragment>
            <div className="ingredient-list">
                <table>
                    <thead>
                        <tr>
                            <th>Ingrediente</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Quitar</th>
                        </tr>

                    </thead>
                    <tbody>
                    {
                        ingredientsInRecepie.map((x) => {
                            return(
                                <tr key={x.ing.id} >
                                    <td>{x.ing.name}</td>
                                    <td>{x.quantity} {x.ing.meassure}</td>
                                    <td>{x.ingPrice}</td>
                                    <td onClick={() => {quitIng( x.ing.id, 'quit')}}>Quitar</td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
            <div className="button">
                <button className="save" >Guardar receta</button>
            </div>

            {/* <div className="recepie-form">
                <input type="text" placeholder="Nombra tu receta"/>
                {
                    ingredientsInRecepie.map((x) => {
                        quantity += Number(x.quantity)
                        cost += Number(x.ingPrice)
                        return('')
                    })
                }
                <p>Cantidad: {quantity} gr</p>
                <p>Costo: ${cost} </p>
                <p>Tipo de Receta: </p>
                <p>Costo de preparación: </p>
                <p>Imagen: </p>
                <p>Tiempo de preparación</p>
                <p>Tiempo de cocción</p>
                <p>Tiempo de reposo</p>
                <p>Tiempo de decorado</p>
                <p>Tiempo de emplatado</p>
                <p>Proceso</p>
                <p>Ingredientes</p>
                
            </div> */}
        </React.Fragment>

    )
}

export default Recepie;
