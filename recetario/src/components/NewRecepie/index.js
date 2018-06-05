import * as React from 'react';
import { Component } from 'react';
import './styles.css';

import IngredientList from '../IngredientList';
import Recepie from '../Recepie';
class NewRecepie extends Component<{}, void> {

    fetchIngredients = () => {

        this.props.fetch('products');   
    
    };
    
    componentDidMount() {
        
        this.fetchIngredients();
        
    }
    render(): React.Element<'div'> {
        return(
            <React.Fragment>
            <div className="addIngredient">
                <IngredientList {...this.state} putIng={this.props.putIng} ingredientes={this.props.ingredientes} ingredientsInRecepie={this.props.ingredientsInRecepie}/>
                
            </div>
            <div>
                <Recepie {...this.state} ingredientsInRecepie={this.props.ingredientsInRecepie} quitIng={this.props.quitIng}/>
            </div>
            </React.Fragment>

           
        )
    }
}
export default NewRecepie;