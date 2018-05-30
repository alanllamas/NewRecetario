import {
    createStore,
    // bindActionCreators,
    applyMiddleware,
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import mySaga from './saga.js'
import apiCall from './reducers/api.js'

// const reducer = combineReducers({ apiCall});
const reducer = apiCall;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(mySaga);

export default store;