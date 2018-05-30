import * as React from 'react';
import { Component } from 'react';
import './styles.css';
import { Grid, Row, Col } from 'react-bootstrap';
// import * as actions from '../../actions.js'
import Ingredient from '../Ingredient';
import store from '../../store';




class Ingredients extends Component<{}, void> {
    ingredientsList : Array<{}>;
    fetchIngredients = () => {
        this.props.fetch('products');   
        console.log(this.props.fetch('products'));     
    };

    
    componentWillMount() {
        this.fetchIngredients();
    }
    render(): React.Element<'div'> {
        return(
           
            <div className="ingredientes">
                {
                    this.props.ingredients.map((x) => {
                        return (
                            <div className="ingrediente">
                                <Ingredient className="ingrediente" key={x.id} { ...x} />
                            </div>
                        )
                    })
                }
            </div>
           
        )
    }
}
export default Ingredients;