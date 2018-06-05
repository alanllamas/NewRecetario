import { FETCH_ERROR, FETCH_SUCCESS,} from '../actionTypes.js'


const apiCall= (state = {ingredientes:[]}, action) => {
    
    switch (action.type) {
        case FETCH_SUCCESS:
            return state = {ingredientes: action.data};
        case FETCH_ERROR:
        default:
            return state;
    }
};

export default apiCall;