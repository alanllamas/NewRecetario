import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';



// import createBrowserHistory from 'history/createBrowserHistory'
// import {history} from 'Helpers/router';

import store from '../../store';



import MyRouter from '../Router';
import * as actions from '../../actions.js'




const mapStateToProps = (state) => ({ingredientes: state});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});
const RouterWrapper = connect(mapStateToProps,mapDispatchToProps)(MyRouter);



// const history = createBrowserHistory()
class Wrapper extends React.Component {
    render(){

        return (
            
            <Provider store={store}>


                    <RouterWrapper>
                        
                    </RouterWrapper>


            </Provider>
        )
    }
};

export default Wrapper;