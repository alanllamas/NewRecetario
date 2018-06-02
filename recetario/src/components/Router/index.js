import * as React from 'react';

import {
    Route,
    // Redirect,
    Switch,
    NavLink,
    BrowserRouter as Router,
} from 'react-router-dom';

import Ingredients from '../Ingredients';
import Suppliers from '../Supplier';
import App from '../App';



const MyRouter = ({...store, actions, ...props}) => {
    let data = {...props};

    return (
        <Router>
            <React.Fragment>
                <ul>
                    <li><NavLink to="/ingredientes">Ingredientes</NavLink></li>
                    <li><NavLink to="/proveedores">Proveedores</NavLink></li>
                </ul>
                <Switch> 
                    <Route path="/" exact={true} render={(props) => (<App {...props}/>) }/>
                    <Route path="/ingredientes" render={(props) => (<Ingredients {...props} {...data} fetch={actions.fetch}/>)}/>
                    <Route path="/proveedores" render={(props) => (<Suppliers {...props}/>) }/>
                </Switch>
            </React.Fragment>
        </Router>
                
    )
    
}
export default MyRouter;
