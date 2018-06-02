import * as React from 'react';
import { Component } from 'react';
import './styles.css';

import Ingredient from '../Ingredient';





class Ingredients extends Component<{}, void> {
    fetchIngredients = () => {
        // console.log(this.props.fetch('products'));
        
        this.props.fetch('products');   
        // console.log(this.props.fetch('products'));     
    };
    // ingredientsList : Array<{}>;

    
    componentWillMount() {
        
        this.fetchIngredients();

    }
    render(): React.Element<'div'> {
        return(
            <React.Fragment>
            <button onClick={this.fetchIngredients}>traer ingredientes</button>
            <div className="ingredientes">

                {
                    this.props.ingredientes.map((x) => {
                        return (
                            <div className="ingrediente">
                                <Ingredient className="ingrediente" key={x.id} { ...x} />
                            </div>
                        )
                    })
                }
            </div>
            </React.Fragment>
           
        )
    }
}
export default Ingredients;