import React , { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER 
} from '../types';

const Contactstate = (props) =>{

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
                "id" : "3",
                "name": "Sita",
                "email":"Sita@tes111t.com",
                "phone": "9898787671",
                 "type": "professional"
            }
        ]
    }

    
const [state , dispatch] = useReducer(ContactReducer, initialState); //state allow us to access any state and dispatch allow us to access it to reducer

//console.log("===============>", state)
//Add contact

const addContact =  (contact)=>{
    contact.id = v4();
    dispatch({type:ADD_CONTACT , payload : contact})
}

//Delete contact

//Set current contact

//Clear current contact

//Update the contact

//Filter the contact

//Clear Filters

return ( 
    <ContactContext.Provider
    value = {{
        contacts : state.contacts,
        addContact
    }}
    >
        {props.children}
    </ContactContext.Provider>
    );
};


export default Contactstate;