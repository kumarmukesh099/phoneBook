import React , {useReducer} from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER 
} from '../types';

const contactState = props =>{

    const initialState = {
        contacts : [
            {
                "id" : "1",
                "name": "Ram",
                "email":"Ram@tes111t.com",
                "phone": "9898787671",
                 "type": "personal"
            },
            {
                "id" : "2",
                "name": "Lakshman",
                "email":"Lakshman@tes111t.com",
                "phone": "9898787671",
                 "type": "personal"
            },
            {
                "id" : "2",
                "name": "Sita",
                "email":"Sita@tes111t.com",
                "phone": "9898787671",
                 "type": "personal"
            }
        ]
    }


}

export default contactState;