import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link,
    Router,
} from 'react-router-dom';
import Wrapper from '../Wrapper';
import Ingredients from '../Ingredients';
import Suppliers from '../Supplier';
import App from '../App';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()




const MyRouter = (props) => {
    const {
        actions : {
            fetch
        },
        ingrediente,
    } = props;
    const history = createBrowserHistory();
    return (
        <React.Fragment>
            <Router history={this.history} >
                <Link path="/ingredientes">Ingredientes</Link>
                <Link path="/proveedores">Proveedores</Link>
                <Switch>
                        <Redirect from="/" to="/ingredientes" />
                        <Route path="/ingredientes" render={(props) => (<Ingredients props={props}/>) }/>
                        <Route path="/proveedores" exact={true} component={Suppliers}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
    
}
export default MyRouter
{/* <BrowserRouter> */}

    {/* <div>   
        <Route path="/" exact={true} component={Wrapper}/> */}
        {/* <Route path="/" exact={true} component={Suppliers}/> */}
    {/* </div> */}
{/* </BrowserRouter> */}