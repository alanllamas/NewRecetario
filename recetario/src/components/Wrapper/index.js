import * as React from 'react';
import App from '../App';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import * as actions from '../../actions.js'
// import Ingredients from '../Ingredients';

import {ConnectedRouter} from 'react-router-redux';
import {withRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
// import {history} from 'Helpers/router';

import store from '../../store';
import Ingredients from '../Ingredients';
import MyRouter from '../Router';



const mapStateToProps = (state) => ({ingredientes: state});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});
const RouterWrapper = 
    connect(mapStateToProps,mapDispatchToProps)(Ingredients)
;
const history = createBrowserHistory()
class Wrapper extends React.Component {
    render(){

        return (
            <Provider store={store}>
                <ConnectedRouter  history={this.history} >
                    {/* <RouterWrapper>
                        
                    </RouterWrapper> */}
                </ConnectedRouter>
            </Provider>
        )
    }
};

export default Wrapper;