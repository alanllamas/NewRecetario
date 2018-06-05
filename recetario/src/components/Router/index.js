import * as React from 'react';

import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

import Ingredients from '../Ingredients';
import Suppliers from '../Supplier';
import App from '../App';
import NewRecepie from '../NewRecepie';
import Menu from '../Menu';



const MyRouter = ({...store, actions, ...props}) => {
    
    let data = {...props};

    return (
        <Router>
            <React.Fragment>
                <Menu/>
                <Switch> 

                    <Route path="/" exact={true} render={(props) => (<App {...props}/>) }/>
                    <Route path="/ingredientes" render={(props) => (<Ingredients {...props} {...data.apiCall} fetch={actions.fetch}/>)}/>
                    <Route path="/crear-receta" render={(props) => (<NewRecepie {...props} {...data.apiCall} {...data.createRecepie} fetch={actions.fetch} putIng={actions.putIngInRec} quitIng={actions.quitIngInRec}/>)}/>
                    <Route path="/proveedores" render={(props) => (<Suppliers {...props}/>) }/>
                    
                </Switch>
            </React.Fragment>
        </Router>
                
    )
    
}
export default MyRouter;
