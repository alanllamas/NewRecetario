import * as React from 'react';
import { Component } from 'react';
import './styles.css';

import IngredientList from '../IngredientList';
class NewRecepie extends Component<{}, void> {
    constructor(){
        super();
        this.state = {
            ingRecepie: [],

        }
    }
    fetchIngredients = () => {

        this.props.fetch('products');   
    
    };
    
    componentWillMount() {
        
        this.fetchIngredients();

    }
    render(): React.Element<'div'> {
        return(
            <div className="addIngredient">
                <IngredientList state={{...this.state}} ingredientes={this.props.ingredientes} />
                {/* <div>
            {
                this.props.ingredientes.map((x) => {
                    return ( 

                    )
                })
            }
          
        </div> */}
                
            </div>
            // <div className="ingredientes">

            //     {
            //         this.props.ingredientes.map((x) => {
            //             return (
            //                 <div className="ingrediente" key={x.id}>
            //                     <Ingredient className="ingrediente"  { ...x} />
            //                 </div>
            //             )
            //         })
            //     }
            // </div>
            // <React.Fragment>
            // </React.Fragment>
           
        )
    }
}
export default NewRecepie;