import  { 


    put,
    takeEvery,

} from 'redux-saga/effects';
import { 

    ING_REQUEST, 
    ING_SUCCESS, 
    ING_ERROR,

} from '../actionTypes';


import type { Saga } from 'redux-saga';

function* createRecepieSaga(action):Saga {
    try {
        yield put({type: ING_SUCCESS, data: action.data, validator: action.validator, from:action.from})
    }catch (e) {
         yield put({type: ING_ERROR, data: e})
    }
};

export function* myIngInRecSaga() {
    yield takeEvery( ING_REQUEST, createRecepieSaga )
}

export default myIngInRecSaga;
