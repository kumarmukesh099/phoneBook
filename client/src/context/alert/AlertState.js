import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { v1 as uuid } from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'


const AlertState = (props) => {

    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    //Set Alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid();
        console.log("setALert" , msg , type,timeout)
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })
        console.log("setALert" , msg , type,timeout)


        setInterval(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }


    return (
        <alertContext.Provider
            value={{
                alerts: state,
                setAlert
            }}>
            {props.children}
        </alertContext.Provider>
    )

}

export default AlertState