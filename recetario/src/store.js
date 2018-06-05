import {
    createStore,
    // bindActionCreators,
    applyMiddleware,
    combineReducers,
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import watchAll from './Sagas/rootSaga.js';
import apiCall from './reducers/api.js';
import createRecepie from './reducers/createRecepie.js';

const reducer = combineReducers({ apiCall, createRecepie});
// const reducer = apiCall;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(watchAll);

export default store;