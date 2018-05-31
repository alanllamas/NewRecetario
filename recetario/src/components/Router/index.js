import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link,
    BrowserRouter as Router,
} from 'react-router-dom';
import Wrapper from '../Wrapper';
import Ingredients from '../Ingredients';
import Suppliers from '../Supplier';
import App from '../App';







const MyRouter = (props) => {
    // const {
    //     actions : {
    //         fetch
    //     },
    //     ingrediente,
    // } = props;

    return (
        <Router >
            <React.Fragment>
                {/* <Link path="/ingredientes">Ingredientes</Link>
                <Link path="/proveedores">Proveedores</Link> */}
                {/* <Switch>  */}
                    <Route path="/" exact={true} render={(props) => (<App props={props}/>) }/>
                    <Route path="/ingredientes" render={(props) => (<Ingredients props={props}/>) }/>
                    <Route path="/proveedores" render={(props) => (<Suppliers props={props}/>) }/>
                {/* </Switch> */}
            </React.Fragment>
        </Router>
    )
    
}
export default MyRouter;
{/* <BrowserRouter> */}

    {/* <div>   
        <Route path="/" exact={true} component={Wrapper}/> */}
        {/* <Route path="/" exact={true} component={Suppliers}/> */}
    {/* </div> */}
{/* </BrowserRouter> */}