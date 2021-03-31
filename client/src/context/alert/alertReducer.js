import {SETALERT , REMOVEALERT} from '../types';


const alertReducer = (state , action)=>{

    switch(action.type){
        case 'SET_ALERT':
        return [...state,action.payload]

        case 'REMOVE_ALERT' : 
        return state.filter((alert)=> alert.id !== action.payload);
        default : 
        return state;
        //throw new Error('Error while showing alerts');
    }


}

export default alertReducer