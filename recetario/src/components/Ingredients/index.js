import * as React from 'react';
import { Component } from 'react';
import './styles.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Ingredient from '../Ingredient';





class Ingredients extends Component<{}, void> {
    ingredientsList : Array<{}>;
    fetchIngredients = () => {
        console.log(this.props.fetch('products'));
        
        this.props.fetch('products');   
        console.log(this.props.fetch('products'));     
    };

    
    componentWillMount() {
        
        this.fetchIngredients();
        console.log(this.fetchIngredients());
    }
    render(): React.Element<'div'> {
        return(
           
            <div className="ingredientes">
                {/* {
                    this.props.ingredients.map((x) => {
                        return (
                            <div className="ingrediente">
                                <Ingredient className="ingrediente" key={x.id} { ...x} />
                            </div>
                        )
                    })
                } */}
            </div>
           
        )
    }
}
export default Ingredients;