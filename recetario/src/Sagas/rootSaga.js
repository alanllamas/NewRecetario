import { fork, all } from 'redux-saga/effects';


import myFetchSaga from './fetchSaga.js';
import myIngInRecSaga from './createRecepieSaga.js';

function* watchAll() {
    yield all([
        fork(myFetchSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(myIngInRecSaga),
    ]);
}

export default watchAll;
