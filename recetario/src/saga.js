import  { 

    call,
    put,
    takeLatest,

} from 'redux-saga/effects';
import { 

    FETCH_REQUEST, 
    FETCH_SUCCESS, 
    FETCH_ERROR,

} from './actionTypes';


import type { Saga } from 'redux-saga';

const fetchWrapper = (which:string):Promise<fetch> =>  fetch( `http://localhost:8000/api/${which}/`);
// const fetchWrapper = (which:string):Promise<fetch> =>  fetch( `http://localhost:8000/api/${which}/`);

function* fetchSaga(action): Saga {
    () => {console.log(action.data)};
    try {
        
        const whichRaw = yield call(fetchWrapper, action.data);
        console.log(whichRaw);

        const results  = yield call( () => whichRaw.json())
        yield put({type: FETCH_SUCCESS, data: results})
    } catch (e) {
        yield put({type: FETCH_ERROR, data: e})
        
    }
};

function* mySaga() {
    yield takeLatest( FETCH_REQUEST, fetchSaga )
}

export default mySaga;