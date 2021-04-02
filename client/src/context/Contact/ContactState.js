import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import axios from 'axios';
import {
    ADD_CONTACT,
    CONTACT_ERROR,
    GET_CONTACT,
    DELETE_CONTACT,
    CLEAR_CONTACTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = (props) => {

    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        error : null
    }


    const [state, dispatch] = useReducer(ContactReducer, initialState); //state allow us to access any state and dispatch allow us to access it to reducer

    //console.log("===============>", state)

    //Add contact
    const addContact = async(contact) => {
        try {
            let addContactRequest = {
                url : '/api/contacts',
                method : 'POST',
                data : contact,
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
            let addContactResponse = await axios(addContactRequest);
            dispatch({type :ADD_CONTACT , payload: addContactResponse.data})
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.msg })
        }
    }

    //Get Contacts
    const getContacts = async()=>{
        try {
            let getContactResponse = await axios.get('/api/contacts');
            dispatch({type : GET_CONTACT, payload : getContactResponse.data})
        } catch (error) {
            dispatch({type : CONTACT_ERROR})
        }
    }

    //Delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    //Set current contact
    const currentContact = (current) => {
        dispatch({ type: SET_CURRENT, payload: current })
        console.log("==============>", current)
    }

    //Update the contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    //Clear contacts
    const clearContacts = ()=>{
        dispatch({type : CLEAR_CONTACTS})
    }
    //Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    //Filter the contact
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACT, payload: text })
    }

    //Clear Filters
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                error : state.error,
                addContact,
                getContacts,
                deleteContact,
                clearContacts,
                currentContact,
                updateContact,
                clearCurrent,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};


export { ContactState };