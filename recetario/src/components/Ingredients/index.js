import * as React from 'react';
import { Component } from 'react';
import './styles.css';

import Ingredient from '../Ingredient';





class Ingredients extends Component<{}, void> {
    fetchIngredients = () => {

        
        this.props.fetch('products');   
    
    };


    
    componentWillMount() {
        
        this.fetchIngredients();

    }
    render(): React.Element<'div'> {
        return(
            <React.Fragment>
            <div className="ingredientes">

                {
                    this.props.ingredientes.map((x) => {
                        return (
                            <div className="ingrediente" key={x.id}>
                                <Ingredient className="ingrediente"  { ...x} />
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