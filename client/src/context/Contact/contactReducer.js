import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER 
} from '../types';

export default(state , action)=>{
    switch(action.type){
        case ADD_CONTACT : 
        return {
            ...state,
            contacts :  [...state.contacts,action.payload] //...state.contacts it take the current data and the override it by action.payload
        }


        default : return state
    }
}

