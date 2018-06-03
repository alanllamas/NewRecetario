import { FETCH_ERROR, FETCH_SUCCESS,} from '../actionTypes.js'


const apiCall= (state = [], action) => {
    // console.log(action);
    
    switch (action.type) {
        case FETCH_SUCCESS:
            return state = action.data;
        case FETCH_ERROR:
        default:
            return state;
    }
};

// const createRecepie = (state = [], action) => {
//     switch ( action.type ) {
//         case POST_SUCCESS:
//             return state = 'SUCCESS';
//         case POST_SUCCESS:
//             return state = 'ERROR';
//         default:
//             return state;
//     }
// }

export default apiCall;