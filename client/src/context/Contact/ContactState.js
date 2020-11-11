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
            },
        ],
        current : null,
        filtered : null
    }

    
const [state , dispatch] = useReducer(ContactReducer, initialState); //state allow us to access any state and dispatch allow us to access it to reducer

//console.log("===============>", state)

//Add contact
const addContact =  (contact)=>{
    contact.id = v4();
    dispatch({type:ADD_CONTACT , payload : contact})
}

//Delete contact
const deleteContact =  (id)=>{
    dispatch({type:DELETE_CONTACT , payload : id})
}

//Set current contact
const currentContact =  (current)=>{
    dispatch({type:SET_CURRENT, payload : current})
    console.log("==============>",current)
}

//Update the contact
const updateContact =  (contact)=>{
    dispatch({type:UPDATE_CONTACT, payload : contact})
}

//Clear current contact
const clearContact =  ()=>{
    dispatch({type:CLEAR_CURRENT})
}

//Filter the contact
const filterContacts =  (text)=>{
    dispatch({type:FILTER_CONTACT ,  payload: text})
}

//Clear Filters
const clearFilter =()=>{
    dispatch({type:CLEAR_FILTER})
}

return ( 
    <ContactContext.Provider
    value = {{
        contacts : state.contacts,
        current : state.current,
        filtered : state.filtered,
        addContact,
        deleteContact,
        currentContact,
        updateContact,
        clearContact,
        filterContacts,
        clearFilter
        }}
    >
        {props.children}
    </ContactContext.Provider>
    );
};


export default Contactstate;