import { ING_ERROR, ING_SUCCESS,} from '../actionTypes.js'


const createRecepie = (state = {ingredientsInRecepie: []}, action) => {
    
    switch ( action.type ) {
        case ING_SUCCESS:
            if(action.from === 'button'){

                if(action.validator === true)  {
                    state = {ingredientsInRecepie: state.ingredientsInRecepie.concat(action.data)};
                } 
            }else if(action.from === 'quit'){
                
                state.ingredientsInRecepie.forEach(element => {
                    if(element.ing.id === action.data){
                        var index = state.ingredientsInRecepie.indexOf(element);
                        state.ingredientsInRecepie.splice(index,1)
                        state = {ingredientsInRecepie: state.ingredientsInRecepie};
                    }
                });
            };
            return state;
        case ING_ERROR:
        default:
            return state;
    }
}

export default createRecepie;