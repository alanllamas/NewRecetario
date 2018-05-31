import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link,
    BrowserRouter as Router,
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import * as actions from '../../actions.js'

import Wrapper from '../Wrapper';
import Ingredients from '../Ingredients';
import Suppliers from '../Supplier';
import App from '../App';
import store from '../../store';







const MyRouter = (props) => {
    // const {
    //     actions : {
    //         fetch
    //     },
    //     ingrediente,
    // } = props;


    return (
        <Provider store={store}>
            <Router >
                {/* <React.Fragment> */}
                    {/* <Link path="/ingredientes">Ingredientes</Link>
                    <Link path="/proveedores">Proveedores</Link> */}
                    <Switch> 
                        <Route path="/" exact={true} render={(props) => (<App props={props}/>) }/>
                        <Route path="/ingredientes" render={(props) => (<Ingredients props={props} fetch={actions.fetch}/>) }/>
                        <Route path="/proveedores" render={(props) => (<Suppliers props={props}/>) }/>
                    </Switch>
                {/* </React.Fragment> */}
            </Router>
        </Provider>
    )
    
}
export default MyRouter;
{/* <BrowserRouter> */}

    {/* <div>   
        <Route path="/" exact={true} component={Wrapper}/> */}
        {/* <Route path="/" exact={true} component={Suppliers}/> */}
    {/* </div> */}
{/* </BrowserRouter> */}